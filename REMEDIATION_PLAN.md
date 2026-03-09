# PDPA-MY Remediation & Factual Alignment Plan (Act A1727)

**Objective:** Align the repository with the Malaysia Personal Data Protection (Amendment) Act 2024 (Act A1727) and the 2025 JPDP Guidelines.

## Status Tracker

| Phase | Task | Status | Notes |
| :--- | :--- | :--- | :--- |
| **1** | **Foundation & Terminology** | [x] Completed | Migrated to Data Controller; fixed s12A/s12B references |
| 1.1 | Global Migration: Data User -> Data Controller | [x] Completed | Using `sed` |
| 1.2 | Statutory Base: Update s12A, s12B, s43A | [x] Completed | Fixed in provisions, controls, and evidence |
| **2** | **Principles & Lawful Basis** | [x] Completed | Legitimate Interest s6(2)(f) and Rights s43A/s44 added |
| 2.1 | Principle s6: Legitimate Interest | [x] Completed | |
| 2.2 | Rights: Portability & Restriction | [x] Completed | |
| **3** | **Modules (DPIA/DPO/DBN)** | [x] Completed | DEICA 5-step model and thresholds aligned |
| 3.1 | DPIA: DEICA 5-Step Alignment | [x] Completed | |
| 3.2 | DPIA: 10k/20k Subject Thresholds | [x] Completed | |
| 3.3 | DPO: 200k Subject Appointment Threshold | [x] Completed | |
| 3.4 | DBN: 72-Hour Notification Logic | [x] Completed | |
| **4** | **Sectoral Codes & Supplements** | **IN PROGRESS** | 8/13 codes present; missing Education, Tourism, Legal |
| 4.1 | Audit 13 Sectoral Codes | [ ] Pending | Need to add missing codes |
| 4.2 | General Code 2022 Integration | [x] Completed | Verified in general-cop-2022.json |
| **5** | **Penalties & Enforcement** | [x] Completed | RM1,000,000 caps aligned with Act A1727 |
| 5.1 | Penalty Cap: RM1,000,000 Realignment | [x] Completed | |
| **6** | **Validation** | **COMPLETED** | |
| 6.1 | Terminology Integrity Check | [x] Completed | Verified no 'Data User' remnants outside historical names |
| 6.2 | Control-to-Evidence Audit | [x] Completed | Generated `CONTROL_AUDIT_REPORT.md` |

## Key References
- [x] JPDP-PDPA-2024-Amendment-A1727.pdf
- [x] JPDP-PCP1-2025-DPIA-Guideline.pdf
- [ ] JPDP-DBN-Guidelines-English.pdf (Awaiting Full Read)
- [ ] JPDP-DPO-Appointment-Guidelines.pdf (Awaiting Full Read)
