# Mapping articles to audit scope

> **Tier 4 / Lesson 2 — 60 minutes.** Parallel to PDPA T4 Lesson 2. Controller obligations (Articles 5-25 + Chapter IV) as the test scope.

## The article-anchored scope

GDPR audits scope by article rather than by domain. Typical full controller audit scope covers ~25 articles:

| Article | Scope |
|---|---|
| 5 | Principles (the over-principle) |
| 6 | Lawful basis |
| 7 | Conditions of consent |
| 8 | Children's consent |
| 9 | Special category data |
| 10 | Criminal data |
| 11 | Processing not requiring identification |
| 12-14 | Information to data subjects |
| 15-22 | Data subject rights |
| 24-25 | Controller responsibilities + PbD |
| 26 | Joint controllers |
| 27 | EU representative for non-EU controllers |
| 28 | Processor obligations |
| 29 | Processing under controller authority |
| 30 | Records of processing |
| 32 | Security of processing |
| 33-34 | Breach notification |
| 35-36 | DPIA + prior consultation |
| 37-39 | DPO |
| 40-43 | Codes / certification |
| 44-50 | Cross-border transfers (Chapter V) |

For processors, scope tightens to Articles 5(1)(a) lawfulness, 5(1)(c) data minimisation, 5(1)(d) accuracy, 5(1)(f) integrity, 5(2) accountability, 28 processor obligations, 30(2) RoPA, 32 security, 33(2) breach notification to controller, 37-39 DPO.

## Article 32 — the largest single test surface

Article 32 (security of processing) typically receives 30-40% of audit hours because it covers:

- Risk-based technical and organisational measures
- Pseudonymisation and encryption
- Confidentiality, integrity, availability, resilience
- Restoration capability post-incident
- Regular testing of measures
- Recital 78 reference factor list

ISO 27001 + ISO 27701 is the typical assurance backbone for Article 32. SOC 2 Type II audit reports may also support specific controls.

## Article 5(2) — the accountability over-principle

Article 5(2) accountability has no single audit procedure — it manifests across every other article. Audit findings against Article 5(2) typically arise where:

- The controller is substantively compliant with an obligation but cannot evidence it
- Documentation is fragmented across multiple systems with no consolidated overview
- DPO sign-offs exist but are not traceable to the underlying processing
- Decisions on lawful basis or risk assessment lack documented rationale

The Article 5(2) finding is often the "supplementary finding" — the controller's substantive compliance is fine but the accountability documentation needs work.

## IOIR + AICPA sampling

Same test methods as PDPA — Inquiry / Observation / Inspection / Re-performance with AICPA attribute sampling for large populations.

GDPR-specific sampling considerations:

- **DSAR sampling** — sample 60 across the audit period; stratify by right (Article 15 access; 16 rectification; 17 erasure; etc.) to ensure coverage
- **Breach register sampling** — typically all breaches (small populations)
- **DPIA sampling** — typically all DPIAs (small populations)
- **Article 30 RoPA sampling** — coverage testing rather than statistical
- **Article 28 DPA sampling** — sample 60 across the processor portfolio; stratify by criticality

## Article 22 audit

The Article 22 audit deserves specific note. The procedure:

1. **Inventory** — which processing involves solely automated decisions with legal / significant effect?
2. **Article 22(2) exception assessment** — for each in-scope operation, which exception applies?
3. **Article 22(3) safeguards** — where exception applied, are the right to obtain human intervention, express point of view, and contest decision codified and operational?
4. **Article 22(4) special category overlay** — where Article 9 data is involved, is the additional condition met?
5. **Article 13(2)(f) / 14(2)(g) / 15(1)(h) disclosure** — is the automated decision disclosed to subjects with meaningful information about the logic, significance, and consequences?
6. **DPIA cross-link** — Article 35(3)(a) almost always triggers DPIA for Article 22 processing

Audit findings against Article 22 are typically severe (Critical or High) — affects the data subject's substantive rights.

## Articles 33-34 audit

Breach response audit covers:

1. **Article 33(5) all-breach documentation** — register of all breaches, notified and non-notified
2. **Notifiable threshold assessment** — Article 33: "likely to result in a risk"; Article 34: "high risk"
3. **72h Commissioner notification capability** — pre-drafted templates; lead SA identified; OSS coordination
4. **Article 34 subject communication** — pre-drafted templates; direct communication channel; multilingual where applicable
5. **NIS2 24h parallel clock** — for NIS2-scoped entities, the parallel cyber-incident reporting
6. **Tabletop AAR** — at least one in the last 12 months

## Article 30 audit

RoPA audit covers:

1. **Article 30(1) controller register completeness** — all processing activities; all (a)-(g) elements per activity
2. **Article 30(2) processor register** — where the controller is also a processor for another controller
3. **Article 30(5) micro-enterprise exception** — almost never applies; verify the assessment
4. **Update cadence** — RoPA reviewed at least annually + on material change
5. **Cross-reference to RoPA from other documents** — DPIA, privacy notice, breach register all reference the RoPA entries

## Article 27 representative audit

For non-EU controllers:

1. **Article 3(2) targeting / monitoring assessment** — does the targeting arm apply?
2. **Article 27 exception assessment** — Article 27(2)(a) occasional + not large-scale + not special category + not posing risk — almost never qualifies
3. **Representative appointment** — letter of appointment + identity + EU establishment + Article 27 contact in privacy notice

Article 27 representative gap is one of the most common findings for non-EU controllers serving EU customers. The auditor identifies it early.

## Common audit-scope gaps

The patterns the engagement manager catches in junior GDPR auditor work:

1. **Article 5(2) accountability audited as a one-off** — should be tested across every other article's procedure
2. **Article 32 reduced to ISO 27001 mapping** — Article 32 is risk-based and broader; ISO is supporting evidence not substitute
3. **Article 27 representative skipped for non-EU controllers** — auditor doesn't realise Article 3(2) targeting applies
4. **Article 22 disclosure check missed** — auditor checks the automated decision register but not the Article 13(2)(f) disclosure
5. **DSAR sample not stratified** — only Article 15 access requests sampled; new rights (16-22) under-tested
6. **Article 28 sub-processor terms unaudited** — DPA inspected at first-tier; downstream sub-processor terms ignored

## PDPA parallel

PDPA's 12-domain scope decomposes more granularly than GDPR's article-anchored scope. The same 25-30 substantive obligations are covered; the organisational structure differs.

Parallel reading: [PDPA T4 Lesson 2](../../pdpa/t4-auditor/02-domains-as-scope.md).

## What's next

[Lesson 3 — EDPB Guideline discipline](03-edpb-guideline-discipline.md).
