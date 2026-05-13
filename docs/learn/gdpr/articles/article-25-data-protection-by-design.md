# GDPR Article 25 — data protection by design and by default

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 + EDPB Guidelines 4/2019 on Article 25.

## The two obligations

| Article | Obligation |
|---|---|
| **25(1)** | Data protection by design — appropriate technical and organisational measures, designed to implement the principles, integrated into processing |
| **25(2)** | Data protection by default — by default, only personal data necessary for each specific purpose is processed |

The 25(1) obligation considers: state of the art; cost of implementation; nature, scope, context, and purposes of processing; risks of varying likelihood and severity for rights and freedoms.

The 25(2) obligation applies to: the amount of data collected; extent of processing; period of storage; accessibility. By default, personal data should not be made accessible without the individual's intervention to an indefinite number of natural persons.

## EDPB Guidelines 4/2019

The EDPB Guidelines on Article 25 provide the operational interpretation. Key elements:

### Principle-by-principle application

Per Article 5, the EDPB Guidelines apply Article 25 to each principle:

| Article 5 Principle | Article 25 application |
|---|---|
| Lawfulness, fairness, transparency | Lawful basis identified before processing; transparent UI / notice |
| Purpose limitation | Purpose specified before collection; purpose-specific data flows |
| Data minimisation | Default minimum collection; data avoidance where possible |
| Accuracy | Validation at collection; rectification mechanisms |
| Storage limitation | Default retention periods; auto-deletion |
| Integrity and confidentiality | Encryption; access control; security-by-design |

### Key design patterns

EDPB Guidelines 4/2019 list several design patterns:

- **Data minimisation** — only collect data necessary
- **Purpose specification** — define purpose before processing
- **Pseudonymisation** — apply as soon as direct identifiability is no longer needed
- **Encryption** — at rest and in transit
- **Access control** — least privilege; segregation
- **Predetermination** — purpose and legal basis established before processing
- **Differentiation** — different processing operations differentiated technically and organisationally
- **Limitation** — technical and organisational measures limit further processing
- **Cessation** — when legal basis ceases, processing ceases

## The "state of the art" element

Article 25(1) requires considering "state of the art" — the technical baseline available at the time of processing. This is dynamic; what was state-of-the-art in 2018 (when GDPR took effect) is now baseline. Encryption at rest with AES-256 is baseline; pre-quantum cryptography is becoming relevant for long-retained data.

For audit work: assess Article 25 against contemporaneous technical baselines, not against 2018 expectations.

## Article 25 and DPIA (Article 35)

Article 25 sits before Article 35 in the lifecycle. DPbD operates continuously across all processing; DPIA is triggered by high-risk processing.

For high-risk processing:
1. Article 25 designs in privacy from the start
2. Article 35 DPIA assesses the residual risk
3. Where residual is high, Article 36 prior consultation with the SA

A processing activity that has been built without Article 25 design-time integration almost always fails Article 35 risk assessment — the lack of design discipline is itself a risk indicator.

## Common implementation gaps

1. **Privacy by Design as a one-off check** — controller treats Article 25 as a pre-launch gate, not a continuous discipline
2. **No default-privacy review** — UI defaults are not the most privacy-protective
3. **Pseudonymisation not applied** — direct identifiers persist into analytics / reporting layers
4. **Encryption keys held by processor** — Schrems II-relevant; supplementary measure deficiency
5. **No Article 25 documentation** — substantive design discipline exists but cannot be evidenced (fails Article 5(2) accountability)

## PDPA parallel

PDPA's DPbD Guideline (issued April 2026) is the equivalent. Mapping:

| GDPR Article 25 | PDPA DPbD Guideline |
|---|---|
| 25(1) Data protection by design | 4 elements: Sifat Proaktif / Perlindungan Hujung-ke-hujung / Ketelusan / Berpusatkan Pengguna |
| 25(2) Data protection by default | Element 1.4.2.2 — privacy as default folded into Proactiveness |
| EDPB Guidelines 4/2019 principle-by-principle | DPbD §5-§11 — applied to each of the seven PDP Principles |
| Implicit governance under Article 5(2) accountability | DPbD §13 — explicit governance practices |
| Article 8 + Recital 38 children | DPbD §5.3 / §10.2 / §11.2 — narrower than GDPR |

Parallel reading: [PDPA DPbD deep-dive](../../pdpa/guidelines/g2-dpbd.md).

## Cross-references

- T3 Lesson 3 — DPIA + PbD + Article 22 triad
- EDPB Guidelines 4/2019 (current version)
