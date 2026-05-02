# Finding 001: Broken Compliance Chain (s11-ST4)

## 📌 Summary
A critical inconsistency exists between the legacy **Requirement layer** (anchored in 2015 Standards) and the modern **Control layer** (anchored in April 2026 Guidelines) regarding Automated Decision-Making (ADM).

## 🔍 Technical Detail
- **Requirement ID:** `s11-ST4` in `requirements/index.json`
- **Legacy Mandate:** *"provide mechanism for human review of automated decisions"*
- **Current Guideline Status:** The **JPDP ADMP Guideline (April 2026)** omitted the "Right to Human Review" and its 21-day SLA. It is now a permissive best practice, not a mandatory legal right under the current guideline.
- **Conflict:** The Requirement is marked `priority: High` and `obligationType: mandatory`, while the Control `admp-human-review-mechanism` correctly reflects the softened best-practice status.

## ⚠️ Risk
- **Compliance Entropy:** Auditors may flag non-compliance against a legacy standard that has been superseded by modern guidance.
- **Resource Misallocation:** Organizations may prioritize human-in-the-loop workflows as a legal necessity rather than a strategic choice.

## ✅ Recommendation
Reconcile `s11-ST4` by adding a `guidelineVariance` flag to the JSON and downgrading the priority for PDPA-only audits, while maintaining it for AI Governance Bill audits.

## 🛠️ Patch
Refer to [PATCH-001](../patches/2026-05-01-s11-st4-reconciliation.json).
