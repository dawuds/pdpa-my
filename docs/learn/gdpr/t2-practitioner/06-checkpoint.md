# T2 GDPR Checkpoint — practitioner deliverables review

> **Tier 2 / Lesson 6 — 60 minutes.** Parallel to PDPA T2 Checkpoint. Self-review of five GDPR deliverables + a comparison memo against the PDPA T2 deliverables.

## The five GDPR deliverables you should now own

| # | Deliverable | Lesson |
|---|---|---|
| 1 | Article 30(1) controller RoPA + Article 30(2) processor RoPA where applicable | [01](01-build-a-ropa-article30.md) |
| 2 | Article 13 + Article 14 information notices for MyKedai EU Limited | [02](02-privacy-notice-article13-14.md) |
| 3 | Article 35(7)-compliant DPIA on MyBank EU e-KYC scenario including Article 22 overlay + Article 36 trigger | [03](03-dpia-article35.md) |
| 4 | Article 33 DPC notification + Article 34 subject communication for MyBank EU ransomware | [04](04-breach-article33-34.md) |
| 5 | Article 40 / 42 applicability assessment for three worked clients (cloud, AdTech, health) | [05](05-codes-of-conduct-article40.md) |

## Rubric — deliverable 1 (Article 30 RoPA)

| Item | Pass criterion |
|---|---|
| Article 30(1) controller register covers all four activities | ✓ |
| All 30(1)(a)-(g) elements per activity | ✓ |
| Joint controllership flagged where applicable | ✓ N/A in this scenario but should be on the checklist |
| Article 30(2) processor register separate where applicable | ✓ Where MyKedai acts as processor |
| Article 30(1)(e) third-country transfers with safeguards | ✓ Singapore transfer with SCC + supplementary measures + TIA |
| Article 27 representative for non-EU controllers | ✓ Not needed for EU-established subsidiary |
| Retention periods specific | ✓ |
| Lawful basis cited per purpose | ✓ |

## Rubric — deliverable 2 (Article 13 + 14 notices)

| Item | Pass criterion |
|---|---|
| All Article 13(1) + 13(2) elements covered | ✓ |
| All Article 14 elements (incl. source) covered | ✓ |
| Lawful basis per purpose with legitimate interest disclosed where relied on | ✓ |
| Article 22 automated-decision disclosure | ✓ Including logic, significance, consequences |
| Retention periods specific | ✓ |
| Complaint route to SA | ✓ |
| Third-country transfer reference with SCC + supplementary measures | ✓ |
| Article 14(5) exception assessment if relied upon | ✓ Not relied on in this scenario |

## Rubric — deliverable 3 (Article 35 DPIA)

| Item | Pass criterion |
|---|---|
| Article 35(3) trigger assessment | ✓ |
| EDPB 9-criteria check | ✓ |
| National SA blacklist consulted | ✓ DPC Ireland list |
| Article 35(7)(a)-(d) content present | ✓ Description, necessity, risks, measures |
| Article 22 overlay (biometric → Art 22(4) condition) | ✓ |
| Article 36 prior consultation assessment | ✓ Triggered or not, documented either way |
| TIA for Singapore transfer | ✓ |
| Risk register with likelihood + impact | ✓ |

## Rubric — deliverable 4 (Article 33 / 34)

| Item — Article 33 notification | Pass criterion |
|---|---|
| Filed within 72h of awareness | ✓ |
| All Article 33(3) elements | ✓ Nature, DPO, consequences, measures |
| Awareness timestamp documented | ✓ |
| Article 33(5) all-breach documentation maintained | ✓ Internal register |
| Lead SA via OSS identified | ✓ DPC Ireland |

| Item — Article 34 communication | Pass criterion |
|---|---|
| Sent without undue delay | ✓ |
| All Article 34(2) elements | ✓ |
| Direct communication channel | ✓ Email / postal, not just public statement |
| Recommended subject action specific | ✓ |
| Article 34(3) exception assessment if relied on | ✓ |

## Rubric — deliverable 5 (Article 40 / 42)

| Item | Pass criterion |
|---|---|
| Per client, applicable codes identified | ✓ Cloud, AdTech, Healthcare |
| TCF status for AdTech specifically noted | ✓ |
| National vs cross-border code distinction made for Healthcare | ✓ |
| ISO/IEC 27701 assessed alongside formal certification | ✓ |
| Article 27 representative check | ✓ |

## Self-grade summary

| Deliverable | Pass items / total |
|---|---|
| 1 RoPA | __ / 8 |
| 2 Notices | __ / 8 |
| 3 DPIA | __ / 8 |
| 4 Breach | __ / 10 |
| 5 Article 40/42 | __ / 5 |
| **Total** | __ / 39 |

| Score | Action |
|---|---|
| 33-39 | Move to T3 |
| 26-32 | Move to T3 with gaps noted |
| 19-25 | Re-do the deliverable(s) below 60% |
| ≤18 | Re-do T2 from the weakest lesson |

## Comparison memo — GDPR vs PDPA T2 deliverables

The most valuable T2 output is comparing the GDPR and PDPA artefacts side-by-side. Where the regimes share structure, the artefacts can be aligned. Where they diverge, separate logic is required.

| Activity | GDPR artefact | PDPA artefact | Aligned? |
|---|---|---|---|
| Records of processing | Article 30 RoPA | s138 RoPA | Mostly aligned — same fields, GDPR adds processor RoPA + Article 30(5) exception |
| Information notice | Article 13/14 | s7(1) | Partially — GDPR has more mandatory elements; PDPA s7(1) is narrower |
| DPIA | Article 35 + EDPB | DEICA + Lampiran A | Methodology differs; substance similar |
| Breach SA notification | Article 33 (72h) | s12B + DBN Guideline (72h) | Aligned on clock |
| Breach subject communication | Article 34 (without undue delay) | s12B + DBN Guideline (7d) | PDPA-codified clock; GDPR open-ended |
| Sectoral codes | Article 40 voluntary | s23 mandatory | Different in mechanism, similar in spirit |

For dual-regime clients, the practical engagement design is:

1. Build the RoPA once, with both GDPR Article 30 fields AND PDPA s138 fields as a single superset
2. Build the privacy notice once, covering both Article 13/14 mandatory elements AND PDPA s7(1) — defaults to GDPR (broader)
3. Build the DPIA programme using either DEICA or EDPB structure — DEICA's prescriptive approach is cleaner; can satisfy both regimes
4. Build the breach response plan with both 72h SA clocks running in parallel + a single subject-communication track defaulting to 7 days (stricter)
5. Build the sectoral / code assessment as a 2x2 — GDPR Article 40 codes + PDPA s23 CoPs, separately

## What's next

If you scored 33 or above and have completed the PDPA T2 in parallel, move to T3.

If GDPR T3 is your priority: [T3 Lesson 1 — Controller programme scaffold](../t3-programme/01-controller-programme-scaffold.md).
If PDPA T3 is your priority: [PDPA T3 Lesson 1 — 12-domain scaffold](../../pdpa/t3-programme/01-twelve-domain-scaffold.md).
