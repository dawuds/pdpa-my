# GDPR programme scaffold — what every controller needs

> **Tier 3 / Lesson 1 — 45 minutes.** Parallel to PDPA T3 Lesson 1. Deliverable: an 8-pillar programme plan with a 90-day sequencing for a B2C SaaS client.

## The controller obligation set (Chapters II–V)

GDPR organises controller obligations across the principles (Chapter II), data subject rights (Chapter III), controller and processor obligations (Chapter IV), and cross-border transfers (Chapter V). For programme-building purposes, eight operational pillars cover the obligation surface:

| Pillar | GDPR anchors | Foundation |
|---|---|---|
| 1. Lawful basis + accountability | Articles 5, 6, 7, 24 | Lawful basis register + LIA + Article 5(2) accountability evidence |
| 2. Information and transparency | Articles 12, 13, 14 | Privacy notice (Art 13 + Art 14 variants) |
| 3. Records of processing | Article 30 | Controller RoPA + Processor RoPA where applicable |
| 4. Data subject rights | Articles 15-22 | DSR procedure covering all eight rights + Article 22 overlay |
| 5. Security | Article 32 + Articles 33-34 | Risk-based technical and organisational measures + breach response |
| 6. DPO + governance | Articles 37-39, 24 | DPO appointment (where mandatory) + accountability documentation |
| 7. Processor management | Article 28 | Data Processing Agreements + sub-processor consent + audit rights |
| 8. Cross-border transfers | Chapter V (Articles 44-50) | Transfer register + adequacy assessment + SCCs / BCRs / certification + TIA |

## The dependency layers (parallel to PDPA structure)

### Layer 1 — Foundational

| Pillar | Why first |
|---|---|
| 1 Lawful basis + accountability | Article 5(2) accountability is the over-principle — everything else demonstrates it |
| 2 Information / transparency | Privacy notice must reflect the controller's processing accurately |
| 3 RoPA | Documentation foundation |
| 6 DPO + governance | Where Article 37 triggers DPO obligation, appoint first |

### Layer 2 — Operational

| Pillar | Depends on |
|---|---|
| 4 Data subject rights | RoPA (must know where data is) |
| 5 Security (Article 32 + 33/34) | RoPA + lawful basis register; Article 32 risk-based |
| 7 Processor management | RoPA (which processors exist) + Article 28 |

### Layer 3 — Reactive

| Pillar | Depends on |
|---|---|
| 8 Cross-border transfers | RoPA cross-border flows + Security mechanism implementation |
| 5 Breach response (Articles 33-34) | Article 32 controls produce the incident signal |

## The 90-day sequencing plan

| Days | Workstream | Deliverables |
|---|---|---|
| 1-15 | DPO appointment (where Article 37 mandatory); Article 27 representative for non-EU controllers | DPO appointment + SA notification; Article 27 representative letter where applicable |
| 1-30 | RoPA Phase 1 — top 10 processing activities | Article 30(1) RoPA Phase 1; processor RoPA where applicable |
| 15-30 | Privacy notice review or first draft | Article 13 + Article 14 notices for primary collection paths |
| 30-60 | RoPA Phase 2 — all activities; retention schedule per activity | Full RoPA |
| 30-60 | DSR procedure — all 8 rights covered | DSR procedure document + case management |
| 30-60 | Article 32 risk-based security review | Risk register + technical + organisational measures alignment |
| 60-75 | DPA portfolio refresh + processor due diligence | Article 28 DPAs + sub-processor lists |
| 60-90 | Article 33/34 breach response plan + tabletop | Plan + tabletop AAR |
| 60-90 | Cross-border transfer architecture | Transfer register + TIAs + 2021 SCCs / BCRs / certification adoption |
| 90 onwards | Article 25 PbD integration into SDLC | PbD policy + design-gate integration |
| 90 onwards | Article 22 automated decision register where applicable | ADM register + Article 22 disclosure in notices + human review mechanism |

## Common sequencing errors

The patterns the audit team catches:

1. **Article 27 representative skipped for non-EU controllers** — Article 27 triggers when Article 3(2) targeting applies. Many non-EU companies miss this entirely.
2. **DPO appointed but Article 37 trigger never assessed** — some controllers appoint DPO unnecessarily (good defensive practice but no triggering obligation); others should have appointed but did not.
3. **Article 28 DPAs are old / generic** — pre-2018 DPAs not refreshed; lack Article 28(3) required clauses; sub-processor terms outdated.
4. **Article 22 disclosure missing from notice** — controller uses automated decisions but Article 13(2)(f) disclosure absent.
5. **Article 33(5) all-breach documentation only for notified breaches** — non-notified breaches go undocumented.
6. **TIA done once and not refreshed** — Schrems II framework requires periodic review.

## GDPR-specific structural considerations

Two structural questions a programme must answer that PDPA does not require:

### 1. Lead supervisory authority

For cross-border processing in the EU, identify the lead SA via Article 56. Typically the SA of the main establishment. For controllers with multiple establishments, "main" is where the principal place of administration is.

This matters for breach notification (Article 33 — file with lead SA), DSR complaints (handled cooperatively), and enforcement (Article 60 cooperation procedure).

### 2. Article 27 EU representative

For controllers NOT established in the EU but with Article 3(2) targeting / monitoring, Article 27 requires appointment of an EU representative. The representative is the point of contact for data subjects and SAs in the EU.

Article 27 exceptions: occasional processing; not large-scale; not special category; not posing risk. These are narrow; most commercial controllers do not qualify.

## Deliverable

8-pillar programme plan + 90-day sequencing for a B2C SaaS client. The plan covers:

1. The 8 pillars as workstreams
2. Per-pillar leads and accountability
3. 90-day sequencing aligned with Layer 1 / 2 / 3 dependencies
4. Lead SA determination (where cross-border EU processing exists)
5. Article 27 representative assessment (where non-EU controller)

## PDPA parallel

PDPA's 12-domain scaffold maps approximately to GDPR's 8 pillars:

| GDPR Pillar | PDPA Domain |
|---|---|
| 1 Lawful basis + accountability | Governance and Accountability + General Principle |
| 2 Information / transparency | Notice and Transparency |
| 3 RoPA | Data Lifecycle Management |
| 4 Data subject rights | Data Subject Rights |
| 5 Security | Data Security + Breach Response |
| 6 DPO + governance | Governance and Accountability |
| 7 Processor management | Third-Party / Processor Management |
| 8 Cross-border transfers | Cross-Border Data Transfer |
| (no GDPR equivalent) | Registration and Regulatory Compliance |
| (no GDPR equivalent) | Consent Management as standalone |
| Article 25 (covered by GDPR Art 25 implicitly) | DPbD |
| Article 22 (covered by GDPR Art 22 implicitly) | ADMP |

PDPA's 12 domains decompose more granularly than GDPR's 8 pillars. For programme purposes, both decompositions work; what matters is that all obligations are covered.

Parallel reading: [PDPA T3 Lesson 1](../../pdpa/t3-programme/01-twelve-domain-scaffold.md).

## What's next

[Lesson 2 — DPO under Articles 37-39](02-dpo-articles-37-39.md).
