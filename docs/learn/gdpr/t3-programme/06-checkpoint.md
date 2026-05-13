# T3 GDPR Checkpoint — programme readiness review

> **Tier 3 / Lesson 6 — 90 minutes.** Parallel to PDPA T3 Checkpoint. Deliverable: a defensible SA inspection pack + comparison memo with the PDPA T3 pack.

## What a GDPR SA inspection looks for

When a supervisory authority opens an investigation under Article 58 or requests information under Article 58(1)(a), the documents typically requested first:

| # | Document | Required by |
|---|---|---|
| 1 | Article 27 EU representative appointment (where non-EU controller) | Article 27 |
| 2 | DPO appointment + SA notification | Articles 37(7), 38 |
| 3 | RoPA (controller + processor variants) | Article 30 |
| 4 | Lawful basis register + LIA (where legitimate interests cited) | Article 6, 24 |
| 5 | Privacy notices (Article 13 + Article 14) — current and recent versions | Articles 12-14 |
| 6 | DPIA register + sample DPIA reports | Article 35 |
| 7 | Article 36 prior consultation records (where applicable) | Article 36 |
| 8 | Breach response plan + breach register (all breaches per Art 33(5)) | Articles 33-34 |
| 9 | Data subject rights log | Articles 15-22 |
| 10 | Cross-border transfer register + TIA records + SCCs / BCRs | Chapter V |
| 11 | DPA inventory (Article 28) + sub-processor terms | Article 28 |
| 12 | Article 22 ADM register + safeguards | Article 22 |
| 13 | Article 32 security risk-based measures + Article 5(2) accountability evidence | Articles 5(2), 24, 32 |
| 14 | Training records | Article 39(1)(b) |
| 15 | Code of Conduct / certification adherence (where applicable) | Articles 40-43 |

15 documents. A controller defensible across all 15 has passed the SA inspection-readiness bar.

## Rubric — by document

| # | Document | Pass criterion |
|---|---|---|
| 1 | Article 27 representative | Appointed where Article 3(2) targeting; representative letter on file |
| 2 | DPO appointment | Article 37 trigger assessed; appointment made; SA notification + privacy notice publication |
| 3 | RoPA | Article 30(1) all elements per activity; processor RoPA where applicable; Article 30(5) micro-enterprise exception assessed (typically not applicable) |
| 4 | Lawful basis register | Per-purpose basis with citation; LIA where Article 6(1)(f) cited |
| 5 | Privacy notices | All Article 13 + 14 elements; layered structure; complaint route to SA |
| 6 | DPIA register | EDPB 9-criteria + national SA blacklist applied; sample DPIA with Article 35(7) content + Article 22 overlay |
| 7 | Article 36 records | Where triggered, prior consultation correspondence with SA |
| 8 | Breach response + register | Art 33 / 34 plan; tabletop AAR within last 12 months; Art 33(5) all-breach documentation |
| 9 | DSR log | All eight rights tracked separately; response within statutory windows |
| 10 | Cross-border | Transfer register per vendor; TIA + supplementary measures for non-adequate; 2021 SCCs (not 2010) |
| 11 | DPA inventory | Article 28(3) clauses; sub-processor consent procedures |
| 12 | Article 22 register | ADM operations identified; Article 22(2) exception or 22(3) safeguards documented; Article 22(4) special-category overlay |
| 13 | Article 32 + 5(2) accountability | Risk register; technical and organisational measures; accountability documentation packet |
| 14 | Training | Annual minimum; completion rate; DPO-led; refresher programme |
| 15 | Codes / certification | Where applicable; status pinned; ISO 27701 typically as backbone |

## Scoring

| Score | Action |
|---|---|
| 13-15 | Ready for SA inspection. Move to T4 |
| 10-12 | Material gaps; close before T4 |
| 7-9 | Programme has substantial gaps; return to T3 |
| ≤6 | Programme not operational; return to T2 |

## Comparison memo — GDPR vs PDPA T3 deliverables

The most valuable T3 output for dual-regime clients is comparing the two programme stacks.

### Document set comparison

| Document | GDPR | PDPA | Aligned? |
|---|---|---|---|
| Records of processing | Article 30(1) / 30(2) | s138 | Yes — same fields with minor variations |
| Privacy notice | Articles 13/14 | s7(1) | Mostly — GDPR has more mandatory elements |
| DPIA | Article 35(7) content | DEICA methodology + Lampiran A | Methodology differs; substance similar |
| Breach response | Articles 33/34 + Art 33(5) | s12B + DBN Guideline | 72h aligned; "without undue delay" vs 7d codified |
| Cross-border | Chapter V + 2021 SCCs + TIA | s129/s129A + CBPDT Guideline | PDPA imports the GDPR architecture |
| DPO | Articles 37-39 | s12A + DPO Guideline | PDPA is broader scope; same operational expectations |
| Codes / certification | Articles 40-43 — voluntary | s23 — mandatory for Class | Different mechanism |

### Programme operational comparison

| Item | GDPR | PDPA |
|---|---|---|
| Lead regulator | OSS via Art 56 — lead SA | Single regulator (JPDP) |
| Parallel cyber clock | NIS2 24h (where applicable) | NACSA 6h (NCII clients) |
| Escalation for HIGH residual | Article 36 prior consultation with SA | Senior management report only |
| Accountability over-principle | Article 5(2) explicit | Implicit via A1727 infrastructure |
| Civil damages claim | Article 82 codified | Not codified the same way |
| Cross-border architecture | Adequacy + SCCs + BCRs + certification | Same set + s129 whitelist (PDPA-specific) |

### The dual-regime client design

For clients with both EU and Malaysian exposure, the consulting team's standard approach:

1. **Build once for both** — RoPA, privacy notice, DPIA programme, breach response plan, cross-border register as single artefacts covering both regimes' requirements
2. **Default to stricter** — where GDPR and PDPA differ, design for the stricter side; this satisfies both
3. **Document divergences** — where a divergence is operationally meaningful (NACSA 6h vs NIS2 24h; Article 36 consultation vs senior management report), document the divergence and the operational reconciliation

The comparison memo deliverable: a 5-10 page document covering:

1. Per-pillar GDPR / PDPA mapping
2. Identified divergences
3. Stricter-side defaults applied
4. Operational reconciliation notes (e.g., parallel-clock breach response)
5. Open questions and residual risk

## Common gaps in GDPR T3 programmes

The patterns the audit team catches:

1. **Article 27 representative missing** — most common gap for non-EU controllers entering EU market
2. **Lawful basis register exists but no LIA** — legitimate interests basis cited without three-part-test documentation
3. **Article 22 register missing entirely** — automated decisions in production without acknowledgment
4. **Article 30(5) micro-enterprise exception incorrectly relied on** — applies almost never
5. **2010 SCCs still cited** — sunsetted December 2022
6. **No NIS2 integration** — for NIS2-scoped entities, parallel 24h cyber clock not in the runbook
7. **Article 5(2) accountability documentation packet missing** — controller is substantively compliant but cannot evidence it as a single packet

## What's next

If 13-15 documents pass, move to [T4 Lesson 1 — Anatomy of a GDPR audit pack](../t4-auditor/01-audit-pack-gdpr.md).

If 10-12, close the gaps then move to T4.

If below 10, return to the weakest T3 lessons before progressing.

For dual-regime clients, complete both PDPA T3 and GDPR T3 checkpoints in parallel and produce the comparison memo as the integrated output.
