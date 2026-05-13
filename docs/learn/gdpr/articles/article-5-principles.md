# GDPR Article 5 — the six principles + accountability

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 consolidated text from EUR-Lex.

## Structure

Article 5(1) lists six principles. Article 5(2) imposes accountability as the over-principle.

| Article | Principle | One-line summary |
|---|---|---|
| 5(1)(a) | Lawfulness, fairness, transparency | Process on a lawful basis (Art 6); fairly; transparently (Arts 12-14) |
| 5(1)(b) | Purpose limitation | Specified, explicit, legitimate purposes; further processing only if compatible |
| 5(1)(c) | Data minimisation | Adequate, relevant, limited to what is necessary |
| 5(1)(d) | Accuracy | Accurate and up to date; inaccurate data rectified or erased |
| 5(1)(e) | Storage limitation | No longer than necessary |
| 5(1)(f) | Integrity and confidentiality | Appropriate security via technical and organisational measures |
| 5(2) | Accountability | Controller must be able to demonstrate compliance |

## Article 5(2) — accountability

The single most important obligation in GDPR. It is not enough to comply — the controller must **evidence** compliance. This drives:

- RoPA (Art 30) — documentation of processing activities
- Lawful basis register + LIA — documentation of basis decisions
- DPIA register (Art 35) — documentation of risk assessment
- DPO appointment (Arts 37-39) — designated accountability holder
- Consent records (Art 7) — evidence of consent capture
- Breach register (Art 33(5)) — all breaches documented even when not notified
- Privacy notice (Arts 13-14) — public-facing accountability
- Audit trail for DSARs (Arts 15-22) — evidence of rights fulfilment

The PDPA equivalent: no formal codification. A1727's RoPA + DPIA + DPO infrastructure creates de facto accountability but the principle is not stated.

## Purpose limitation (5(1)(b))

The principle most frequently violated. Two patterns:

1. **Vague purposes** — "general business" / "to serve our customers". Fails specificity.
2. **Repurposing** — data collected for X used for Y. Requires either new lawful basis OR Article 6(4) compatibility assessment.

Article 6(4) compatibility factors: purpose linkage; context; data nature; consequences; safeguards. Narrow path.

The research / statistics / archiving exception (5(1)(b) second limb + Article 89) is narrower than commercial controllers often assume.

## Data minimisation (5(1)(c))

EDPB Guidelines + national SA enforcement consistently push against mandatory fields that are not actually necessary. The test is per-processing-activity — what is the minimum dataset needed to achieve THIS purpose?

Common gaps: signup forms requiring DOB / address / phone when only email is needed for the stated purpose.

## Storage limitation (5(1)(e))

Retention schedules must be defined per processing activity and enforced technically. Indefinite retention without justification is breach. The Article 89 archiving exception requires pseudonymisation + access controls + purpose limitation — narrow.

## Integrity and confidentiality (5(1)(f))

Operationalised by Article 32 — appropriate technical and organisational measures considering state of the art, cost, nature of processing, and risk to subjects. ISO 27001 / ISO 27701 is the typical assurance backbone.

## Case law

| Case | Year | Relevance to Article 5 |
|---|---|---|
| C-184/20 (*Vyriausioji rinkimų komisija*) | 2022 | Inferred special category data within Article 9; Article 5 fairness applies to inferred data |
| C-621/22 (*KNLTB*) | 2024 | Legitimate interests basis can qualify but Article 5 fairness shapes the balancing test |
| C-300/21 (*Österreichische Post*) | 2023 | Article 5(2) accountability supports Article 82 damages claims |

## PDPA parallel

| GDPR Article 5 | PDPA Principle |
|---|---|
| 5(1)(a) Lawfulness, fairness, transparency | General (s6) + Notice and Choice (s7) |
| 5(1)(b) Purpose limitation | General (s6) second limb |
| 5(1)(c) Data minimisation | General (s6) third limb |
| 5(1)(d) Accuracy | Data Integrity (s11) |
| 5(1)(e) Storage limitation | Retention (s10) |
| 5(1)(f) Integrity and confidentiality | Security (s9) |
| 5(2) Accountability | (no formal PDPA equivalent) |

PDPA's seven Principles also include Disclosure (s8) — no GDPR equivalent at principle level; GDPR absorbs disclosure into Article 6 + purpose limitation.

Parallel reading: [PDPA T1 Lesson 2 — 7 PDP Principles](../../pdpa/t1-orientation/02-seven-principles.md).

## Cross-references

- T1 Lesson 2 — GDPR principles overview
- T4 Lesson 2 — Article 5 audit scope
- EDPB Guidelines on data minimisation; EDPB Guidelines 4/2019 on Article 25 (operationalising 5(1)(a)+(b)+(c))
