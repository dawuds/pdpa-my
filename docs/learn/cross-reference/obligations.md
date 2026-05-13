# PDPA vs GDPR — Controller obligations grid

**Version:** 1.0
**Last verified:** 2026-05-13

Companion to [`pdpa-vs-gdpr.md`](pdpa-vs-gdpr.md) (the obligation comparator) and [`concepts.md`](concepts.md) (concept equivalence). This document is the operational obligation grid — what does the controller actually have to DO, with citations to both regimes.

---

## Grid format

Each row is an obligation. The columns map the obligation to PDPA and GDPR sources plus the operational artefact.

| # | Obligation | PDPA source | GDPR source | Artefact / output |
|---|---|---|---|---|
| 1 | Identify lawful basis per processing activity | s6 | Art 6 | Lawful basis register + (for GDPR Art 6(1)(f)) LIA |
| 2 | Obtain consent where consent is the basis | s6(2)(a) + s7 | Art 6(1)(a) + Art 7 | Consent management mechanism + records |
| 3 | Obtain explicit consent for sensitive PD | s40(1)(a) | Art 9(2)(a) | Separate explicit consent flow |
| 4 | Inform data subjects about processing | s7 (six particulars) | Arts 13-14 (more elements) | Privacy notice (BM + EN for PDPA; appropriate languages for GDPR) |
| 5 | Disclose automated decision-making | ADMP §9.3 | Art 13(2)(f) / 14(2)(g) | ADMP disclosure in privacy notice |
| 6 | Maintain Records of Processing | s138 (A1727; modelled on GDPR Art 30) | Art 30 (origin of obligation; in force 25 May 2018) | RoPA (BM: *Rekod Pemprosesan Data Peribadi*) |
| 7 | Maintain RoPA for processor activities (where applicable) | Implicit | Art 30(2) | Processor RoPA |
| 8 | Conduct DPIA for high-risk processing | s137 + DPIA Guideline (DEICA) | Art 35 + EDPB DPIA Guidelines | DPIA report |
| 9 | Conduct DPIA for ADMP regardless of scale | ADMP §6.1 | Art 35(3)(a) trigger | DPIA cross-link from ADM register |
| 10 | Implement privacy by design | DPbD Guideline (4 elements) | Art 25(1) + EDPB Guidelines 4/2019 | DPbD policy + SDLC integration |
| 11 | Implement privacy by default | DPbD §4.2.2 | Art 25(2) | Default-privacy configuration |
| 12 | Take security measures | s9 + PDP Standards 2015 | Art 32 (risk-based) | Security policy + technical/organisational measures |
| 13 | Maintain breach response capability | s12B + DBN Guideline | Arts 33-34 + EDPB Guidelines 9/2022 | Breach response plan + tabletop AAR |
| 14 | Notify regulator of notifiable breach | s12B + DBN Guideline (72h) | Art 33 (72h) | Notification record |
| 15 | Notify subjects where high risk | s12B + DBN Guideline (7d) | Art 34 (without undue delay) | Subject communication record |
| 16 | Document all breaches even when not notified | Implicit / best practice | Art 33(5) | Breach register |
| 17 | Fulfil subject access request | s30 | Art 15 | DSAR procedure + log |
| 18 | Fulfil correction request | s34 | Art 16 | Correction procedure + log |
| 19 | Fulfil erasure request | s43 (A1727) | Art 17 | Erasure procedure + log |
| 20 | Fulfil portability request | s43A (A1727) | Art 20 | Portability procedure + log |
| 21 | Fulfil restriction request | s44 (A1727) | Art 18 | Restriction procedure + log |
| 22 | Fulfil withdrawal of consent | s38 | Art 7(3) | Withdrawal mechanism |
| 23 | Manage automated decisions | ADMP Guideline | Art 22 | ADM register + Art 22(3) safeguards |
| 24 | Provide human review of automated decisions | (not codified; cross-jurisdictional best practice) | Art 22(3) | Human review mechanism |
| 25 | Appoint DPO | s12A (universal) | Art 37 (activity-triggered) | DPO appointment + regulator notification |
| 26 | Notify DPO to regulator | s12A via SPDP | Art 37(7) | SPDP / SA notification record |
| 27 | Engage processors under contract | Implicit in s9 | Art 28 | DPA per processor |
| 28 | Cascade s9/Art 32 to processors | s9 (A1727 expanded) | Art 28(3)(c) | DPA security commitments |
| 29 | Manage sub-processor consent | Implicit | Art 28(2) | Sub-processor consent mechanism |
| 30 | Identify cross-border transfers | s129 + CBPDT Guideline | Art 44 + Chapter V | Cross-border transfer register |
| 31 | Apply lawful transfer mechanism | s129(2) whitelist + s129A SCC/BCR/certification | Art 45 adequacy + Art 46 SCC/BCR/certification | Transfer mechanism per flow |
| 32 | Conduct Transfer Impact Assessment | CBPDT Guideline | EDPB Recommendations 01/2020 (post-Schrems II) | TIA per non-adequate transfer |
| 33 | Apply supplementary measures where needed | CBPDT Guideline | EDPB 01/2020 | Supplementary measures (encryption with controller keys; processor commitments; etc.) |
| 34 | Comply with sectoral Code of Practice (where applicable) | s23 — mandatory for Class | Art 40 — voluntary | Sectoral compliance evidence |
| 35 | Maintain registration as data controller (where required) | s13-s16 | (not applicable) | Registration certificate |
| 36 | Train staff on privacy obligations | s9 (implicit) + DPO Guideline | Art 39(1)(b) | Training records |
| 37 | Document accountability (cross-cutting) | (not formally codified) | Art 5(2) | Accountability documentation packet |
| 38 | Establish Article 27 EU representative (where non-EU controller targeting EU) | (not applicable) | Art 27 | Representative appointment |
| 39 | Senior management governance (board reporting, KPIs, accountability assignment) | DPbD §13 | Art 5(2) accountability + Art 24 | Section 13 governance evidence |
| 40 | Maintain DPIA validity / re-execute | DPIA §11.2 (2-year cycle) | Art 35(11) (review on material change) | DPIA validity tracking |
| 41 | Cooperate with regulator inspection / investigation | s101-s103 | Art 58 + Art 31 | Inspection-readiness pack |
| 42 | Refresh sectoral CoP compliance (where applicable) | s23 + CoP version pinning | (not applicable directly) | Sectoral CoP self-assessment |

## How to read the grid

For a dual-regime client, each row applies under BOTH regimes (unless one regime has "not applicable"). The artefact column shows what the consultant produces / verifies.

For a PDPA-only engagement: ignore GDPR-source-only rows (37, 38, partial 27/24).
For a GDPR-only engagement: ignore PDPA-source-only rows (35, partial 42).

For a dual-regime engagement: the artefact column shows the unified deliverable. Most artefacts can be a single document covering both regimes' requirements.

## Critical-tier subset

The rows most often cited in audit findings (the audit team's experience):

| # | Obligation | Why critical |
|---|---|---|
| 4 | Privacy notice completeness | First thing the regulator looks at |
| 6 | RoPA / Art 30 | Foundation; almost always partial |
| 8 | DPIA for high-risk | Often skipped or done superficially |
| 12 | Security measures | s9 + Art 32 — largest test surface |
| 14 | Breach SA notification | 72h clock; awareness timestamp |
| 15 | Breach subject communication | High-visibility |
| 17-22 | Data subject rights | Post-A1727 expansion creates gaps |
| 23 | ADMP / Art 22 | Post-April-2026 + AdTech / ML focus |
| 25 | DPO appointment | s12A mandatory; common gap |
| 30 | Cross-border identification | Frequently underdocumented |
| 32 | TIA | Schrems II / CBPDT requirement |
| 37 | Accountability evidence | GDPR Art 5(2); cross-cutting |

These rows + the relevant artefacts are the audit team's "ready in 24 hours" inspection pack contents.

## Cross-references

- [`pdpa-vs-gdpr.md`](pdpa-vs-gdpr.md) — full obligation side-by-side narrative
- [`concepts.md`](concepts.md) — terminology mapping
- T3 PDPA checkpoint — 13-document inspection pack
- T3 GDPR checkpoint — 15-document inspection pack

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. |
