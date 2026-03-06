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

## Audit Package — Cross-Repo Design Pattern

### What It Is

The "Audit Package" is a UI component on the control detail view that auto-resolves linked artifacts and evidence items through provision maps. It answers three questions an auditor asks when reviewing a control:

1. **What must I implement?** → Key Activities + Maturity Levels (existing)
2. **What documents must exist?** → Required Artifacts (new)
3. **How do I verify it works?** → Evidence Checklist (new)

### Architecture (reusable across all compliance repos)

```
Control (slug)
  └─ sections[] / clauses[] / subcategories[]
       │
       ├─ provision-map.json → sectionToArtifacts → artifact slugs
       │    └─ resolve from artifacts/inventory.json → full objects
       │
       └─ evidence/index.json[section] → evidenceItems[]
            └─ each with whatGoodLooksLike[], commonGaps[], suggestedSources[]
```

**Join key varies by repo:**

| Repo | Join Key | Control Field | Artifact Map | Evidence Key |
|------|----------|---------------|--------------|--------------|
| PDPA-MY | PDPA section (s6, s7) | `sections[]` | `sectionToArtifacts` | `evidence/index.json[s6]` |
| RMIT | BNM clause (8.1, 10.3) | `clauses[]` | `clauseToArtifacts` | `evidence/index.json[8.1]` |
| NACSA | Act section (s17, s18) | `sections[]` | `sectionToArtifacts` | `evidence/index.json[s17]` |
| OT-Security | Domain ID | `domain` | Need to create | `evidence/index.json[domain]` |
| AI-Governance | Framework refs | `frameworkMappings` | `controlToArtifacts` (direct) | `evidence/index.json[slug]` |
| NIST | Subcategory (GV.OC-01) | `subcategoryId` | `subcategoryToArtifacts` | `evidence/by-function/` |

### UI Components (CSS classes — copy to each repo)

| Class | Purpose |
|-------|---------|
| `.audit-package` | Wrapper — accent top border, light blue background |
| `.audit-package-title` | "AUDIT PACKAGE" uppercase label |
| `.audit-package-summary` | "N artifacts required, M evidence items" |
| `.artifact-link-card` | Compact artifact card with hover |
| `.artifact-link-card-checklist` | Checkbox-styled keyContents list |
| `.evidence-checklist-item` | Evidence item card |
| `.evidence-good` | Green-bordered "What Good Looks Like" list |
| `.evidence-gap` | Red-bordered "Common Gaps" list |

### Implementation Checklist (for each new repo)

1. Ensure the repo has `controls/`, `artifacts/`, `evidence/` directories with the standard structure
2. Add `controlSlugs[]` to each artifact in `artifacts/inventory.json` — curate 1-4 control slugs per artifact
3. Add `artifactSlugs[]` to each evidence item in `evidence/index.json` — link 1-2 artifact slugs per item
4. In `renderControlDetail()`, load artifacts + evidence data (use existing state cache)
5. Filter artifacts where `controlSlugs` includes the current control's slug
6. Filter evidence items by artifact overlap (evidence linked to artifacts that are linked to the control)
7. Sort artifacts mandatory-first
8. Render the Audit Package HTML using the shared CSS classes
9. Ensure nested accordion click handlers work (reuse existing `[data-accordion]` handler)

### Design Decisions

- **Direct `controlSlugs[]` mapping chosen over section-based joins:** Section-based joins (via provision maps) explode on broad provisions — e.g., PDPA s6 (General Principle) mapped to 19 of 60 artifacts, producing 20 results for a single control. Direct `controlSlugs[]` on each artifact provides curated, semantically relevant mappings (median 2 per control, max 6).
- **`artifactSlugs[]` on evidence items:** Evidence is filtered by artifact overlap rather than raw section keys, ensuring only evidence relevant to a control's specific artifacts appears. Typical distribution: 1-2 artifact links per evidence item.
- **Mandatory artifacts sorted first:** Auditors care about mandatory items; nice-to-haves can come after.
- **Evidence sub-accordions collapsed by default:** "What Good Looks Like" and "Common Gaps" are verbose — show them on demand to keep the page scannable.
- **Checkbox-styled artifact contents:** Makes the artifact card feel like a checklist an auditor can mentally tick through.

### Lesson: Section-Based Joins Explode on Broad Provisions

The initial design used provision maps to join controls → sections → artifacts at render time (no data changes needed). This worked conceptually but produced unusable results: controls mapped to broad provisions (like PDPA s6, which covers the General Principle) pulled in nearly every artifact. The fix was adding curated `controlSlugs[]` directly to artifacts — a small data change that dramatically improved relevance. **Rule of thumb:** If a join key can match >5 items, the join is too broad and needs direct curation.

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
- [x] Label AI-generated content explicitly at the field level (`sourceType`, `verificationStatus`)
- [ ] Track dependency graphs between fields — know what breaks when a base field changes
- [ ] Run validation script after every change (note: `validate.py` was removed — broken symlink to cross-repo tooling; write a repo-local validation script if needed)
- [ ] Never use blanket merge resolution (`git checkout --ours`) on data files
- [x] Check README/app.js counts match actual JSON data array lengths
- [ ] Test cross-references resolve in both directions
- [ ] Model multi-phase commencement explicitly — never collapse to a single date
- [ ] Define and enforce a cross-reference format specification
- [ ] Never symlink to files outside the repo — GitHub Pages (Jekyll) fails on broken symlinks with `No such file or directory @ rb_check_realpath_internal`
- [ ] Keep shared tooling (e.g., cross-repo validation scripts) in a parent directory or separate repo, not symlinked into each sub-repo
