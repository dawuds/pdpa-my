# GDPR Article 5 — the 6 principles in 15 minutes

> **Tier 1 / Lesson 2 — 15 minutes.** The six principles plus accountability are the foundation. Every Article in Chapter II is an expansion of one of them; every audit walks back to one.

## The six principles, with the GDPR hook

| # | Principle | Article | One-line summary |
|---|---|---|---|
| 1 | Lawfulness, fairness, transparency | 5(1)(a) | Process only on a lawful basis (Article 6); fairly; transparently (Articles 12-14) |
| 2 | Purpose limitation | 5(1)(b) | Collect for specified, explicit, legitimate purposes; further processing only if compatible |
| 3 | Data minimisation | 5(1)(c) | Adequate, relevant, limited to what is necessary |
| 4 | Accuracy | 5(1)(d) | Accurate and kept up to date; inaccurate data rectified or erased without delay |
| 5 | Storage limitation | 5(1)(e) | Kept no longer than necessary for the purposes; further storage for archiving / research / statistics permitted with safeguards |
| 6 | Integrity and confidentiality | 5(1)(f) | Processed with appropriate security via technical and organisational measures (operationalised by Article 32) |

## The over-principle: accountability (Article 5(2))

> "The controller shall be responsible for, and be able to demonstrate compliance with, paragraph 1 ('accountability')."

This is the GDPR feature that has no direct PDPA equivalent. It is not enough to *be* compliant; the controller must be able to **demonstrate** compliance. This obligation drives the documentation infrastructure of GDPR — RoPA (Article 30), DPIA records (Article 35), consent records (Article 7), DPO appointment records (Articles 37-39), breach notification records (Article 33(5)), and audit trail for data subject requests.

In practice, accountability is what supervisory authorities ask about first. A controller who is substantively compliant but cannot evidence it will fail an SA inspection.

## Where each principle bites

**Lawfulness, fairness, transparency (5(1)(a)).** Lawful basis is one of the six in Article 6(1) — consent, contract, legal obligation, vital interests, public task, legitimate interests. The basis must be identified *before* processing begins and documented. Subsequent change of basis is not generally permitted (Article 6(4) compatibility test is narrow). Fairness has been interpreted by the EDPB to require that processing not exceed the data subject's reasonable expectations.

**Purpose limitation (5(1)(b)).** Purposes must be specified, explicit, and legitimate at the time of collection. Further processing for a new purpose requires either a new lawful basis or a compatibility assessment under Article 6(4) (purpose linkage, context, data nature, consequences, safeguards). The "research / statistics / archiving" exception (5(1)(b) second limb) is narrower than commercial controllers often assume.

**Data minimisation (5(1)(c)).** Standard SA finding: collection beyond what is necessary. Common pattern is mandatory fields that aren't actually mandatory for the purpose. The minimisation test is per-processing-activity, not per-controller.

**Accuracy (5(1)(d)).** Rectification under Article 16 is the data-subject-side mechanism. Periodic accuracy review is expected for long-retained data (employment records, financial records). For automated decisions affecting individuals, accuracy of the training data is itself a GDPR concern.

**Storage limitation (5(1)(e)).** Retention schedules must be defined per processing activity and enforced technically (auto-deletion, archival to restricted environments). Indefinite retention without justification is a breach. The archive/research exception requires Article 89 safeguards (pseudonymisation, access controls, etc.).

**Integrity and confidentiality (5(1)(f)).** Operationalised by Article 32 — appropriate technical and organisational measures considering state of the art, cost, nature of processing, and risk to subjects. ISO 27001 / ISO 27701 is the typical assurance backbone. Encryption, pseudonymisation, access control, incident response are the recurring control families.

## Why purpose limitation is the principle most often violated in practice

Three patterns:

1. **"We collected for X; now we'd like to use it for Y."** Marketing wants to use customer support data for upsell. New purpose, requires a new lawful basis or compatibility analysis. Default position: not compatible.

2. **AI / ML training on existing data.** Training a model is a new purpose unless the original collection contemplated it. The Italian SA's ChatGPT decision (2023) and the EDPB ChatGPT Task Force (2024) treat scraping for training as a separate processing activity requiring its own lawful basis.

3. **Acquisition / merger data flows.** Buyer wants to use seller's customer database. New purpose, new controller — compatibility assessment under Article 6(4) and often a re-notification obligation.

## Article 9 — special categories of data

Article 9(1) prohibits processing of "special categories" — racial / ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data for unique identification, health data, sex life or sexual orientation data.

Article 9(2) provides ten exceptions (explicit consent, employment law, vital interests, legitimate activities of foundations/associations, manifestly-public data, legal claims, substantial public interest, preventive medicine, public health, archiving / research).

Practical effect: special category processing requires both an Article 6 lawful basis AND an Article 9(2) condition. "We have consent" is a defensible combination for both, provided the consent is genuinely explicit and the conditions for valid consent (Article 7) are met.

## PDPA parallel

GDPR's six Article 5 principles + accountability map approximately to PDPA's 7 PDP Principles:

| GDPR Article 5 | PDPA Principle | Notes |
|---|---|---|
| 5(1)(a) Lawfulness, fairness, transparency | General (s6) + Notice and Choice (s7) | GDPR fuses what PDPA splits |
| 5(1)(b) Purpose limitation | General (s6) — second limb | PDPA has no separate purpose-limitation principle; absorbed into General |
| 5(1)(c) Data minimisation | General (s6) — third limb | Same — absorbed into General |
| 5(1)(d) Accuracy | Data Integrity (s11) | Direct equivalent |
| 5(1)(e) Storage limitation | Retention (s10) | Direct equivalent |
| 5(1)(f) Integrity and confidentiality | Security (s9) | Direct equivalent; PDP Standards 2015 operationalise s9 the way Article 32 operationalises 5(1)(f) |
| *(no GDPR equivalent)* | Disclosure (s8) | PDPA has a separate Disclosure Principle; GDPR absorbs disclosure into Article 6 lawful basis + purpose limitation |
| 5(2) Accountability | *(no formal PDPA equivalent)* | The largest structural gap. A1727's RoPA + DPIA + DPO infrastructure creates de facto accountability but does not codify the principle |

Parallel reading: [PDPA T1 Lesson 2 — The 7 PDP Principles](../../pdpa/t1-orientation/02-seven-principles.md).

## What's next

[Lesson 3 — Article 6 lawful bases and Articles 15-22 data subject rights](03-lawful-basis-and-rights.md).
