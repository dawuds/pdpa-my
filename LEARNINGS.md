# LEARNINGS.md — PDPA-MY (Personal Data Protection Act 2010)

## Summary

A GRC audit of this repo found **12 findings** across 35+ files. The most critical was a fabricated amendment number (Act A1699 instead of the real Act A1727) that propagated to every file referencing the 2024 amendment. Other findings included contradictory effective dates, one-way provision maps, stale hardcoded statistics, and broken cross-references.

**Key metrics:** 9 fix commits, 35 files modified, 5 of 7 critical findings fixed correctly, 2 regressions introduced during fixes.

---

## Repo-Specific Lessons

### 1. Fabricated Amendment Number — 35+ File Cascade

The AI generated "Act A1699" as the 2024 PDPA amendment number. The real number is **Act A1727**. This single fabrication propagated to amendment-tracker.json, penalties/index.json, controls, artifacts, cross-references, and the README. The number followed the real A16xx/A17xx pattern, making it pass casual review.

**Lesson:** Always verify legislative instrument numbers against the Federal Gazette before using them in structured data. Pattern-plausible numbers are the hardest fabrications to catch.

### 2. Three-Phase Commencement Collapsed to Single Date

The 2024 PDPA amendment has a three-phase commencement (January/April/June 2025). The AI collapsed this to a single effective date, then different files picked different dates from the three phases — amendment-tracker.json said 2025-04-01, penalties/index.json said 2025-06-01, and amendment-changes.json summary text said "1 June 2025" while its own effectiveDate field said 2025-04-01.

**Lesson:** Multi-phase commencement is common in Malaysian legislation. Always model it explicitly with per-phase dates rather than forcing a single date.

### 3. Bidirectional Provision Maps — 23 Missing Reverse Entries

provision-map.json had Section-to-Control mappings but 23 reverse (Control-to-Section) mappings were missing. The AI populated one direction but did not enforce bidirectionality.

**Lesson:** Any mapping that is conceptually bidirectional must be validated in both directions. A validation script should assert `len(forward_keys) == len(reverse_keys)`.

### 4. Hardcoded Stats Drift in app.js

app.js displayed "7 Key Principles" and "19 Sections of Offences" — correct at initial generation but stale after data grew to 11 principles and 22 offences. No dynamic counting was used.

**Lesson:** Never hardcode counts derived from data files. Either compute them at build time or read from the JSON at render time.

### 5. Cross-Reference Format Errors

The tightens chain referenced `s129A-T3` (nonexistent). Cross-reference format used `s30-44` instead of the correct `s30-s44` (missing the "s" prefix on the range endpoint).

**Lesson:** Define a cross-reference format specification and validate all references against it programmatically.

---

## Common Patterns (Shared Across All 3 Compliance Repos)

### Pattern 1: AI Confabulation

AI generates structurally correct, plausible-sounding legal/regulatory data that has no basis in the actual source material. The output is confident, internally consistent, and correctly formatted — making it extremely difficult to detect without checking the authoritative source. The most dangerous fabrications are the most plausible ones.

### Pattern 2: Cascading Errors

Derivatives inherit base fabrications. A wrong amendment number (A1699) cascades to tracker filenames, cross-reference targets, README text, and app.js display. Each layer is internally consistent with the fabricated base but wrong relative to reality.

### Pattern 3: Incomplete Remediation

Fixing the source but not all derivatives. When A1699 was corrected to A1727, some cross-references were initially missed. When JSON data was corrected, README counts and app.js hardcoded stats were left stale.

### Pattern 4: Distributed State

The same fact stored in multiple places drifts. The PDPA effective date appeared in amendment-tracker.json, penalties/index.json, and amendment-changes.json summary text — each with a different value. Without a single source of truth, synchronization failures are inevitable.

### Pattern 5: Fix Oscillation

Fixes that correct one error while introducing another. Adding reverse provision map entries initially pointed some to wrong control IDs. Bulk find-and-replace operations apply transformations uniformly without understanding context.

### Pattern 6: Status Misrepresentation

AI defaults to the most authoritative-sounding label. JSON databases described as "comprehensive" in the README when they contain unverified AI-generated content. Fields named "verbatim" that contain generated text.

### Pattern 7: Premature Productization

A full SPA with stats dashboard was built before the underlying data was verified. The polished UI made fabricated data look more trustworthy, reducing the perceived urgency of verification.

---

## Prevention Checklist

For any future AI-generated compliance data in this repo:

- [ ] Verify every fact against the authoritative source (Federal Gazette, official Act text) before publishing
- [ ] Use extraction (from documents) not generation (from memory) for legal text
- [ ] Label AI-generated content explicitly at the field level (`sourceType`, `verificationStatus`)
- [ ] Track dependency graphs between fields — know what breaks when a base field changes
- [ ] Run validation script (`validate.py`) after every change
- [ ] Never use blanket merge resolution (`git checkout --ours`) on data files
- [ ] Check README/app.js counts match actual JSON data array lengths
- [ ] Test cross-references resolve in both directions
- [ ] Model multi-phase commencement explicitly — never collapse to a single date
- [ ] Define and enforce a cross-reference format specification
- [ ] Never symlink to files outside the repo — GitHub Pages (Jekyll) fails on broken symlinks with `No such file or directory @ rb_check_realpath_internal`
- [ ] Keep shared tooling (e.g., cross-repo validation scripts) in a parent directory or separate repo, not symlinked into each sub-repo
