# GDPR Articles 33 / 34 — personal data breach notification

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 + EDPB Guidelines 9/2022 on Personal Data Breach Notification.

## The two notification tracks

| Article | Recipient | Threshold | Clock |
|---|---|---|---|
| **Art 33** | Supervisory Authority | "Likely to result in a risk to the rights and freedoms" | 72 hours from awareness; without undue delay |
| **Art 34** | Data subjects | "Likely to result in a HIGH risk to the rights and freedoms" | Without undue delay |

Article 33's threshold is **lower** than Article 34's. Most notifiable-to-SA breaches do not require subject communication; the severe ones do.

## What constitutes a "personal data breach"

Article 4(12):

> "A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed."

Three categories:

| Category | Examples |
|---|---|
| **Confidentiality** | Unauthorised disclosure or access (data exfiltration; insider snooping; misdirected emails) |
| **Integrity** | Unauthorised or accidental alteration |
| **Availability** | Accidental or unlawful loss or destruction (ransomware; data centre fire) |

A single incident often spans multiple categories.

## Article 33(1) — 72-hour clock

The clock starts at **awareness of a notifiable breach** — not at detection. EDPB Guidelines 9/2022 clarify:

- Awareness is when the controller has reasonable certainty the incident is a personal data breach
- Triage time between detection and awareness is permitted but should be documented
- Late notification (post-72h) requires "reasoned explanation" under Article 33(1) second sentence

In practice, controllers document the awareness timestamp specifically because the 72h defence depends on it.

## Article 33(3) — required information

| Element |
|---|
| (a) Nature of breach + categories of subjects and data + approximate numbers |
| (b) Name and contact of DPO or other contact point |
| (c) Likely consequences |
| (d) Measures taken or proposed |

Where information is not available within 72h, the controller can file a partial notification and supplement later (Article 33(4)).

## Article 33(5) — all-breach documentation

> "The controller shall document any personal data breaches, comprising the facts relating to the personal data breach, its effects and the remedial action taken."

This is the all-breach documentation obligation. Even where Article 33 SA notification is NOT triggered, the controller must internally document the breach. This enables the SA to verify compliance.

The PDPA equivalent is implicit / best practice rather than codified.

## Article 34 — communication to data subjects

Where the breach is likely to result in **high risk**, the controller communicates to data subjects "without undue delay". Required information:

| Element |
|---|
| Nature of the breach (plain language) |
| DPO contact |
| Likely consequences |
| Measures taken |
| Recommended actions for the subject |

## Article 34(3) exceptions

Communication is NOT required if:

- (a) Appropriate technical and organisational measures rendered the data unintelligible (e.g., strong encryption with no key compromise)
- (b) Subsequent measures ensure the high risk is no longer likely
- (c) Communication would involve disproportionate effort — in which case public communication or similar measure is required

The (a) exception is the most relied-on but is narrow. Encryption-at-rest with controller-held keys protects against passive theft of storage media but not against an attacker with active access (which is most ransomware scenarios).

## Lead SA via one-stop-shop

For cross-border processing, Article 33 notification goes to the **lead SA** identified per Article 56. The lead SA then notifies concerned SAs via the cooperation procedure (Article 60).

Practical effect: controllers do not file with multiple SAs — file with lead SA. Concerned SAs may reach out bilaterally but the formal coordination is via the lead.

## NIS2 parallel clock (for in-scope entities)

NIS2 Directive (EU) 2022/2555 imposes parallel cyber-incident notification on "essential" and "important" entities:

| NIS2 stage | Clock |
|---|---|
| Early warning to CSIRT | **24 hours** from awareness |
| Incident notification | **72 hours** |
| Final report | **1 month** |

For NIS2-scoped entities (energy, transport, banking, financial market infrastructure, health, drinking water, digital infrastructure, public administration, space; plus "important" entities in postal, waste, food, manufacturing, digital providers, research, chemicals) the parallel clock applies. Breach response must reconcile.

## EDPB Guidelines 9/2022

Replaced earlier WP250rev.01. Key updates:

- Harm-likelihood assessment framework
- Sample notifications by breach type
- Article 33(5) all-breach documentation expectations
- Cross-border / OSS coordination procedures

## Common implementation gaps

1. **No incident response plan integrated with Article 33/34** — IR plan exists for IT security; data-protection notification is a separate document
2. **Awareness timestamp not documented**
3. **Harm-likelihood assessment skipped** — controller over-notifies or under-notifies
4. **Article 33(5) all-breach documentation only for notified breaches** — non-notified incidents go undocumented
5. **No tabletop drilling 72h workflow**
6. **Article 34(3)(a) encryption exception cited without analysis** — controller assumes encryption defeats Article 34 obligation; only true where no key compromise
7. **NIS2 24h clock missed for in-scope entities**
8. **Sub-processor breach handling unclear** — Article 33(2) processor-to-controller notification mechanism missing from DPAs

## PDPA parallel

PDPA s12B + JPDP DBN Guideline 2025 are the equivalents. Mapping:

| GDPR | PDPA |
|---|---|
| 72h to SA (Art 33) | 72h to Commissioner (s12B + DBN Guideline) |
| Without undue delay subject communication (Art 34) | 7 days subject notification (DBN Guideline) |
| Notifiable: "likely to result in a risk" | Notifiable: "likely to cause significant harm" |
| All-breach documentation (Art 33(5)) | Best practice / implicit |
| Lead SA via OSS | Single regulator (JPDP) |
| NIS2 24h parallel (where applicable) | NACSA 6h parallel (for NCII clients) |

Parallel reading: [PDPA DBN deep-dive](../../pdpa/guidelines/g5-dbn.md).

## Cross-references

- T2 Lesson 4 — Article 33/34 breach exercise
- T3 Lesson 5 — breach tabletop
- T4 Lesson 4 — finding craft on Article 33(5) gaps
