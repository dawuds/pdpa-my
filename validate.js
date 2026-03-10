#!/usr/bin/env node
/**
 * validate.js — PDPA Malaysia (Act 709 / Act A1727) data integrity validator
 *
 * Checks:
 *   1.  All JSON files parse without errors
 *   2.  Control slug uniqueness and required fields
 *   3.  Every domain has at least one control
 *   4.  Artifact controlSlugs resolve to controls/library.json slugs
 *   5.  Evidence artifactSlugs resolve to artifacts/inventory.json slugs
 *   6.  Provision key consistency — evidence & requirements keys exist in provisions/index.json
 *   7.  Risk register math
 *   8.  Controls reference valid PDPA sections via domains.json relatedSections
 *   9.  Principles reference valid Act 709 sections
 *   10. DPIA screening thresholds have all required fields
 *   11. Penalty provisions valid — required fields and numeric values
 *   12. Cross-reference files have sourceType field
 *   13. No empty arrays or empty strings in core data
 *   14. Provisions parts consistency
 *
 * Usage: node validate.js [--verbose]
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const REPO_ROOT = __dirname;
const verbose   = process.argv.includes('--verbose');

let pass = 0;
let fail = 0;
let warn = 0;

function ok(msg)      { pass++; if (verbose) console.log(`  PASS  ${msg}`); }
function bad(msg)     { fail++; console.log(`  FAIL  ${msg}`); }
function warning(msg) { warn++; console.log(`  WARN  ${msg}`); }

function loadJson(relPath) {
  const abs = path.join(REPO_ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  try {
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    return null;
  }
}

// ── 1. JSON Parse Check ─────────────────────────────────────────────

console.log('\n=== 1. JSON Parse Check ===');

function findJsonFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...findJsonFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(path.relative(REPO_ROOT, full));
    }
  }
  return results;
}

const jsonFiles = findJsonFiles(REPO_ROOT);
const parsedFiles = {};
let parseErrors = 0;

for (const file of jsonFiles) {
  try {
    parsedFiles[file] = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, file), 'utf8'));
    ok(`Parsed: ${file}`);
  } catch (e) {
    bad(`JSON parse error: ${file} — ${e.message}`);
    parseErrors++;
  }
}

if (parseErrors === 0) {
  ok(`All ${jsonFiles.length} JSON files parse correctly`);
}

// ── Load core data ──────────────────────────────────────────────────

const controlsLib    = loadJson('controls/library.json');
const domainsFile    = loadJson('controls/domains.json');
const artifactsInv   = loadJson('artifacts/inventory.json');
const provisions     = loadJson('provisions/index.json');
const evidence       = loadJson('evidence/index.json');
const requirements   = loadJson('requirements/index.json');
const riskRegister   = loadJson('risk-management/risk-register.json');
const principlesIdx  = loadJson('principles/index.json');
const dpiaThresholds = loadJson('dpia/thresholds.json');
const penaltiesIndex = loadJson('penalties/index.json');
const provisionParts = loadJson('provisions/parts.json');

// Build control slug set
const libraryDomains  = (controlsLib && controlsLib.domains) || [];
const libraryControls = (controlsLib && controlsLib.controls) || [];
const controlSlugSet  = new Set(libraryControls.map(c => c.slug));
const domainSlugSet   = new Set(libraryDomains.map(d => d.slug));

// Build artifact slug set
let allArtifacts = [];
if (artifactsInv) {
  for (const [key, val] of Object.entries(artifactsInv)) {
    if (Array.isArray(val)) allArtifacts.push(...val);
  }
}
const artifactSlugSet = new Set(allArtifacts.map(a => a.slug));

// Build provision ID set
const provisionIdSet = new Set();
if (Array.isArray(provisions)) {
  for (const p of provisions) { if (p.id) provisionIdSet.add(p.id); }
}

// ── 2. Control Slug Uniqueness & Required Fields ─────────────────────

console.log('\n=== 2. Control Slug Uniqueness & Required Fields ===');

const slugCounts = {};
for (const ctrl of libraryControls) {
  if (!ctrl.slug) {
    bad(`Control missing "slug": ${(ctrl.name || '').slice(0, 60)}`);
  } else {
    slugCounts[ctrl.slug] = (slugCounts[ctrl.slug] || 0) + 1;
  }
  if (!ctrl.name || ctrl.name.trim() === '') {
    bad(`Control "${ctrl.slug}" has empty or missing "name"`);
  }
  if (!ctrl.domain) {
    bad(`Control "${ctrl.slug}" missing "domain" field`);
  }
}

const duplicates = Object.entries(slugCounts).filter(([, c]) => c > 1);
if (duplicates.length === 0) {
  ok(`No duplicate control slugs (${libraryControls.length} controls)`);
} else {
  for (const [slug, count] of duplicates) {
    bad(`Duplicate control slug "${slug}" appears ${count} times`);
  }
}

// ── 3. Every Domain Has Controls ─────────────────────────────────────

console.log('\n=== 3. Domain Coverage ===');

const controlsByDomain = {};
for (const ctrl of libraryControls) {
  if (ctrl.domain) {
    controlsByDomain[ctrl.domain] = (controlsByDomain[ctrl.domain] || 0) + 1;
  }
}

for (const dom of libraryDomains) {
  if (!controlsByDomain[dom.slug]) {
    bad(`Domain "${dom.slug}" has zero controls`);
  } else {
    ok(`Domain "${dom.slug}" has ${controlsByDomain[dom.slug]} control(s)`);
  }
}

// Domains.json keys match library.json domain slugs
if (domainsFile) {
  for (const key of Object.keys(domainsFile)) {
    if (!domainSlugSet.has(key)) {
      warning(`domains.json key "${key}" not found in library.json domains`);
    }
  }
  for (const dom of libraryDomains) {
    if (!domainsFile[dom.slug]) {
      warning(`library.json domain "${dom.slug}" not found in domains.json`);
    }
  }
}

// ── 4. controlSlugs Resolution (Artifacts → Controls) ────────────────

console.log('\n=== 4. controlSlugs Resolution (Artifacts) ===');

let controlSlugErrors = 0;
let controlSlugTotal = 0;

for (const artifact of allArtifacts) {
  if (!artifact.controlSlugs) continue;
  for (const slug of artifact.controlSlugs) {
    controlSlugTotal++;
    if (!controlSlugSet.has(slug)) {
      bad(`Artifact "${artifact.slug}" references unknown control slug "${slug}"`);
      controlSlugErrors++;
    }
  }
}

if (controlSlugErrors === 0) {
  ok(`All ${controlSlugTotal} controlSlug references in artifacts resolve correctly`);
}

// ── 5. artifactSlugs Resolution (Evidence → Artifacts) ───────────────

console.log('\n=== 5. artifactSlugs Resolution (Evidence) ===');

let artifactSlugErrors = 0;
let artifactSlugTotal = 0;

if (evidence && typeof evidence === 'object') {
  for (const key of Object.keys(evidence)) {
    const entry = evidence[key];
    if (!entry || !entry.evidenceItems) continue;
    for (const item of entry.evidenceItems) {
      if (!item.artifactSlugs) continue;
      for (const slug of item.artifactSlugs) {
        artifactSlugTotal++;
        if (!artifactSlugSet.has(slug)) {
          bad(`Evidence "${item.id}" references unknown artifact slug "${slug}"`);
          artifactSlugErrors++;
        }
      }
    }
  }
}

if (artifactSlugErrors === 0) {
  ok(`All ${artifactSlugTotal} artifactSlug references in evidence resolve correctly`);
}

// ── 6. Provision Key Consistency ─────────────────────────────────────

console.log('\n=== 6. Provision Key Consistency ===');

if (evidence && provisionIdSet.size > 0) {
  let evidenceKeyErrors = 0;
  for (const key of Object.keys(evidence)) {
    if (!provisionIdSet.has(key)) {
      bad(`Evidence key "${key}" not found in provisions/index.json`);
      evidenceKeyErrors++;
    }
  }
  if (evidenceKeyErrors === 0) {
    ok(`All ${Object.keys(evidence).length} evidence keys match provision IDs`);
  }
}

if (requirements && typeof requirements === 'object' && provisionIdSet.size > 0) {
  let reqKeyErrors = 0;
  const reqKeys = Array.isArray(requirements) ? [] : Object.keys(requirements);
  for (const key of reqKeys) {
    if (!provisionIdSet.has(key)) {
      bad(`Requirement key "${key}" not found in provisions/index.json`);
      reqKeyErrors++;
    }
  }
  if (reqKeyErrors === 0 && reqKeys.length > 0) {
    ok(`All ${reqKeys.length} requirement keys match provision IDs`);
  }
}

// ── 7. Risk Register Math ────────────────────────────────────────────

console.log('\n=== 7. Risk Register Math ===');

if (riskRegister && riskRegister.risks) {
  let mathErrors = 0;
  for (const risk of riskRegister.risks) {
    const expectedInherent = risk.likelihood * risk.impact;
    if (risk.inherentRisk !== expectedInherent) {
      bad(`${risk.id}: inherentRisk ${risk.inherentRisk} != ${risk.likelihood} x ${risk.impact} = ${expectedInherent}`);
      mathErrors++;
    }
    const expectedResidual = risk.residualLikelihood * risk.residualImpact;
    if (risk.residualRisk !== expectedResidual) {
      bad(`${risk.id}: residualRisk ${risk.residualRisk} != ${risk.residualLikelihood} x ${risk.residualImpact} = ${expectedResidual}`);
      mathErrors++;
    }
  }
  if (mathErrors === 0) {
    ok(`All ${riskRegister.risks.length} risk register entries have correct math`);
  }
}

// ── 8. Controls Reference Valid PDPA Sections ────────────────────────

console.log('\n=== 8. Control Domain & Section References ===');

let domainRefErrors = 0;
for (const ctrl of libraryControls) {
  if (ctrl.domain && !domainSlugSet.has(ctrl.domain)) {
    bad(`Control "${ctrl.slug}" references unknown domain "${ctrl.domain}"`);
    domainRefErrors++;
  }
}

if (domainRefErrors === 0) {
  ok(`All ${libraryControls.length} controls reference valid domains`);
}

// Validate relatedSections in domains.json reference valid provision IDs
if (domainsFile && provisionIdSet.size > 0) {
  let sectionRefErrors = 0;
  for (const [domKey, domData] of Object.entries(domainsFile)) {
    if (!domData.relatedSections) continue;
    for (const sec of domData.relatedSections) {
      if (!provisionIdSet.has(sec)) {
        warning(`Domain "${domKey}" relatedSection "${sec}" not in provisions/index.json`);
        sectionRefErrors++;
      }
    }
  }
  if (sectionRefErrors === 0) {
    ok('All domain relatedSections reference valid provisions');
  }
}

// ── 9. Principles Reference Valid Act 709 Sections ───────────────────

console.log('\n=== 9. Principles Validation ===');

if (Array.isArray(principlesIdx)) {
  let principleErrors = 0;
  const principleIds = new Set();

  for (const principle of principlesIdx) {
    if (!principle.id) {
      bad('Principle missing "id"');
      principleErrors++;
      continue;
    }
    if (principleIds.has(principle.id)) {
      bad(`Duplicate principle ID: "${principle.id}"`);
      principleErrors++;
    }
    principleIds.add(principle.id);

    if (!principle.name || principle.name.trim() === '') {
      bad(`Principle "${principle.id}" has empty or missing "name"`);
      principleErrors++;
    }
    if (principle.section === undefined || principle.section === null) {
      bad(`Principle "${principle.id}" missing "section" field`);
      principleErrors++;
    }
    if (!principle.summary || principle.summary.trim() === '') {
      bad(`Principle "${principle.id}" has empty "summary"`);
      principleErrors++;
    }

    // Validate obligations have required fields
    if (principle.obligations) {
      for (const ob of principle.obligations) {
        if (!ob.id) bad(`Principle "${principle.id}" obligation missing "id"`);
        if (!ob.obligation || ob.obligation.trim() === '') {
          bad(`Principle "${principle.id}" obligation "${ob.id}" has empty text`);
        }
      }
    }

    // Check principle file exists
    const principleFile = path.join(REPO_ROOT, 'principles', `${principle.id}.json`);
    if (fs.existsSync(principleFile)) {
      ok(`Principle file exists: principles/${principle.id}.json`);
    } else {
      warning(`Principle file missing: principles/${principle.id}.json`);
    }
  }

  if (principleErrors === 0) {
    ok(`All ${principlesIdx.length} principles have required fields`);
  }

  // Validate relatedPrinciples in domains.json
  if (domainsFile) {
    for (const [domKey, domData] of Object.entries(domainsFile)) {
      if (!domData.relatedPrinciples) continue;
      for (const pId of domData.relatedPrinciples) {
        if (!principleIds.has(pId)) {
          warning(`Domain "${domKey}" relatedPrinciple "${pId}" not in principles/index.json`);
        }
      }
    }
  }
}

// ── 10. DPIA Thresholds Required Fields ──────────────────────────────

console.log('\n=== 10. DPIA Thresholds Validation ===');

if (dpiaThresholds) {
  let dpiaErrors = 0;

  if (!dpiaThresholds.sourceType) {
    warning('dpia/thresholds.json missing "sourceType"');
  }

  // Quantitative thresholds
  if (dpiaThresholds.mandate && dpiaThresholds.mandate.quantitative_thresholds) {
    for (const qt of dpiaThresholds.mandate.quantitative_thresholds) {
      const missing = [];
      if (!qt.category)  missing.push('category');
      if (!qt.threshold) missing.push('threshold');
      if (!qt.rationale) missing.push('rationale');
      if (missing.length > 0) {
        bad(`DPIA threshold "${qt.category || '(unknown)'}" missing: ${missing.join(', ')}`);
        dpiaErrors++;
      }
    }
    if (dpiaErrors === 0) {
      ok(`All ${dpiaThresholds.mandate.quantitative_thresholds.length} quantitative thresholds have required fields`);
    }
  } else {
    bad('dpia/thresholds.json missing mandate.quantitative_thresholds');
  }

  // Qualitative factors
  if (dpiaThresholds.qualitative_factors) {
    let qualErrors = 0;
    for (const qf of dpiaThresholds.qualitative_factors) {
      if (!qf.id)          { bad(`DPIA qualitative factor missing "id"`); qualErrors++; }
      if (!qf.factor)      { bad(`DPIA qualitative factor "${qf.id}" missing "factor"`); qualErrors++; }
      if (!qf.description) { bad(`DPIA qualitative factor "${qf.id}" missing "description"`); qualErrors++; }
    }
    if (qualErrors === 0) {
      ok(`All ${dpiaThresholds.qualitative_factors.length} qualitative factors have required fields`);
    }
  }

  // Decision logic
  if (!dpiaThresholds.decision_logic) {
    bad('dpia/thresholds.json missing "decision_logic"');
  } else {
    ok('DPIA decision_logic present');
  }
}

// ── 11. Penalty Provisions Valid ──────────────────────────────────────

console.log('\n=== 11. Penalty Provisions Validation ===');

if (Array.isArray(penaltiesIndex)) {
  let penaltyErrors = 0;
  const penaltyIds = new Set();

  for (const pen of penaltiesIndex) {
    if (!pen.id) {
      bad('Penalty entry missing "id"');
      penaltyErrors++;
      continue;
    }
    if (penaltyIds.has(pen.id)) {
      bad(`Duplicate penalty ID: "${pen.id}"`);
      penaltyErrors++;
    }
    penaltyIds.add(pen.id);

    if (!pen.section) {
      bad(`Penalty "${pen.id}" missing "section" field`);
      penaltyErrors++;
    }
    if (!pen.offence || pen.offence.trim() === '') {
      bad(`Penalty "${pen.id}" has empty or missing "offence"`);
      penaltyErrors++;
    }
    if (!pen.category) {
      warning(`Penalty "${pen.id}" missing "category"`);
    }

    // Check penalty amounts
    const penObj = pen.originalPenalty || pen.penalty;
    if (!penObj) {
      bad(`Penalty "${pen.id}" missing penalty object`);
      penaltyErrors++;
    } else {
      if (penObj.fineNumeric === undefined || penObj.fineNumeric === null) {
        warning(`Penalty "${pen.id}" missing numeric fine value`);
      }
      if (!penObj.fine) {
        bad(`Penalty "${pen.id}" missing "fine" display value`);
        penaltyErrors++;
      }
    }

    // If amended, check amended penalty too
    if (pen.amendedPenalty) {
      if (!pen.amendedPenalty.amendedBy) {
        warning(`Penalty "${pen.id}" amendedPenalty missing "amendedBy"`);
      }
      if (pen.amendedPenalty.fineNumeric === undefined) {
        warning(`Penalty "${pen.id}" amendedPenalty missing numeric fine`);
      }
    }
  }

  if (penaltyErrors === 0) {
    ok(`All ${penaltiesIndex.length} penalty entries valid`);
  }
}

// ── 12. Cross-Reference sourceType Field ─────────────────────────────

console.log('\n=== 12. Cross-Reference sourceType Field ===');

const crossRefDir = path.join(REPO_ROOT, 'cross-references');
if (fs.existsSync(crossRefDir)) {
  let sourceTypeErrors = 0;
  for (const fn of fs.readdirSync(crossRefDir)) {
    if (!fn.endsWith('.json')) continue;
    const rel = `cross-references/${fn}`;
    const data = parsedFiles[rel] || loadJson(rel);
    if (data) {
      if (!data.sourceType) {
        warning(`${rel}: missing "sourceType" field`);
        sourceTypeErrors++;
      } else {
        ok(`${rel}: sourceType = "${data.sourceType}"`);
      }
    }
  }
  if (sourceTypeErrors === 0) {
    ok('All cross-reference files have sourceType');
  }
}

// ── 13. Data Completeness ────────────────────────────────────────────

console.log('\n=== 13. Data Completeness ===');

let emptyIssues = 0;

for (const ctrl of libraryControls) {
  if (ctrl.description && ctrl.description.trim() === '') {
    bad(`Control "${ctrl.slug}" has empty description`);
    emptyIssues++;
  }
}

for (const artifact of allArtifacts) {
  if (artifact.name && artifact.name.trim() === '') {
    bad(`Artifact "${artifact.slug}" has empty name`);
    emptyIssues++;
  }
  if (artifact.slug && artifact.slug.trim() === '') {
    bad('Artifact has empty slug');
    emptyIssues++;
  }
}

if (emptyIssues === 0) {
  ok('No empty strings detected in core data');
}

// ── 14. Provisions Parts Consistency ─────────────────────────────────

console.log('\n=== 14. Provisions Parts Consistency ===');

if (Array.isArray(provisionParts)) {
  // Check that by-part files exist
  for (const part of provisionParts) {
    if (part.file) {
      const partFile = path.join(REPO_ROOT, part.file);
      if (!fs.existsSync(partFile)) {
        bad(`Provisions part "${part.id || part.name}" file "${part.file}" does not exist`);
      } else {
        ok(`Part file exists: ${part.file}`);
      }
    }
  }
}

// Check provisions by-part files reference valid provision IDs
const byPartDir = path.join(REPO_ROOT, 'provisions/by-part');
if (fs.existsSync(byPartDir) && provisionIdSet.size > 0) {
  for (const fn of fs.readdirSync(byPartDir)) {
    if (!fn.endsWith('.json')) continue;
    const data = loadJson(`provisions/by-part/${fn}`);
    if (Array.isArray(data)) {
      for (const section of data) {
        if (section.id && !provisionIdSet.has(section.id)) {
          warning(`provisions/by-part/${fn} section "${section.id}" not in provisions/index.json`);
        }
      }
    }
  }
}

// ── Summary ──────────────────────────────────────────────────────────

console.log('\n' + '='.repeat(60));
console.log('Validation complete:');
console.log(`  Pass: ${pass}`);
console.log(`  Fail: ${fail}`);
console.log(`  Warn: ${warn}`);
console.log(`  Total: ${pass + fail + warn}`);
console.log('='.repeat(60));

if (fail > 0) {
  console.error(`\nValidation FAILED with ${fail} error(s).`);
  process.exit(1);
} else if (warn > 0) {
  console.log(`\nValidation passed with ${warn} warning(s).`);
  process.exit(0);
} else {
  console.log('\nAll checks passed.');
  process.exit(0);
}
