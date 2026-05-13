# Exercise — Article 35 DPIA on a worked example

> **Tier 2 / Lesson 3 — 120 minutes.** Parallel to PDPA T2 Lesson 3. Deliverable: an Article 35-compliant DPIA on the e-KYC scenario, including the Article 36 prior-consultation assessment.

## When DPIA is mandatory

Article 35(3) lists three categories that automatically require a DPIA:

| Article | Trigger |
|---|---|
| 35(3)(a) | Systematic and extensive evaluation of personal aspects based on automated processing, including profiling, that produces legal effects or similarly significantly affects |
| 35(3)(b) | Processing on a large scale of special categories (Article 9) or criminal data (Article 10) |
| 35(3)(c) | Systematic monitoring of a publicly accessible area on a large scale |

Beyond these three, **EDPB Guidelines on DPIA (WP248rev.01)** provide nine additional criteria. Where processing meets at least two of the nine, a DPIA is required. The nine criteria:

1. Evaluation or scoring (credit scoring, behavioural / personality assessment)
2. Automated decision-making with legal or similar significant effect
3. Systematic monitoring (Art 35(3)(c))
4. Sensitive data or data of highly personal nature
5. Data processed on a large scale
6. Matching or combining datasets
7. Data concerning vulnerable data subjects
8. Innovative use or applying new technological / organisational solutions
9. Where the processing in itself prevents data subjects from exercising a right or using a service / contract

**National SA blacklists** — Member State SAs publish lists of processing types that automatically require DPIA. Cite the relevant national list. Examples: Ireland DPC's mandatory DPIA list; CNIL's list; Germany DSK list.

## Article 36 prior consultation

Where the DPIA shows the processing would result in a HIGH RISK in the absence of measures taken by the controller to mitigate the risk, the controller **must consult the SA before processing begins** (Article 36(1)).

The SA's response timeline: up to 8 weeks (extendable by 6 weeks for complexity). The SA may then provide written advice — or, in serious cases, may exercise its powers under Article 58 (banning the processing).

In practice Article 36 prior consultation is rare. EU controllers usually re-design the processing to bring residual risk below "high" before the DPIA concludes, avoiding the consultation altogether.

## The exercise

Same MyBank-style scenario as the PDPA exercise — now MyBank EU Limited launching e-KYC for its Irish retail banking subsidiary. The scenario differs in jurisdiction but not in substance:

- 50,000 new EU customers per year
- Facial biometric + liveness video
- Automated identity verification + risk scoring
- Cross-border to Singapore (fraud-detection SaaS)
- ML model from a global vendor

### Trigger assessment

Article 35(3) auto-triggers — check:

| Trigger | This scenario |
|---|---|
| (a) Systematic + extensive evaluation + ADM legal/significant effect | **YES** — automated approve / reject is solely-automated ADM with significant effect |
| (b) Large scale special category | **YES** — biometric (Article 9 special category) at large scale |
| (c) Systematic monitoring of public area | Not applicable |

Two of three Article 35(3) triggers fire. DPIA mandatory regardless of EDPB 9-criteria.

EDPB 9-criteria — for completeness:

| # | Criterion | This scenario |
|---|---|---|
| 1 | Evaluation/scoring | YES — risk score |
| 2 | ADM legal/significant effect | YES — approval/rejection |
| 3 | Systematic monitoring | Marginal — liveness check borderline |
| 4 | Sensitive data | YES — biometric |
| 5 | Large scale | YES — 50K subjects |
| 6 | Matching/combining datasets | Maybe — sanctions lists matched against identity |
| 7 | Vulnerable subjects | Marginal — elderly customers potentially |
| 8 | Innovative technology | YES — facial recognition with AI |
| 9 | Prevents rights/service | YES — auto-rejection denies banking access |

At least 5 of 9 criteria fire. Multiple national blacklists would also catch this (biometric authentication is on every major SA's mandatory DPIA list).

### Article 35(7) required content

The DPIA must contain:

| Article 35(7) | Element |
|---|---|
| (a) | Systematic description of envisaged processing operations + purposes (where applicable, legitimate interest) |
| (b) | Assessment of necessity and proportionality |
| (c) | Assessment of risks to rights and freedoms of data subjects |
| (d) | Measures envisaged to address risks — including safeguards, security measures, and mechanisms to demonstrate compliance |

This is content-level, not methodology-level. GDPR does not prescribe a specific methodology (no DEICA equivalent). Controllers commonly adopt the WP29/EDPB DPIA template + ISO/IEC 29134 + national SA templates.

### DPIA walkthrough (high-level)

| Section | Content |
|---|---|
| **Systematic description (a)** | As per PDPA exercise — controller, processors, data flows, categories, lawful basis (Art 6(1)(c) legal obligation under EU AML Directive + Art 9(2)(a) explicit consent for biometric) |
| **Necessity and proportionality (b)** | AML obligation under EU 5AMLD / 6AMLD requires identity verification. Facial biometric is one means; the controller evaluates alternatives (document-only with manual review). Minimisation: facial template only, not original photo; liveness video kept for verification session only |
| **Risks (c)** | Same risk register as PDPA exercise (biometric breach, spoofing, bias, transfer, consent, retention) — assessed against Art 5 principles |
| **Measures (d)** | Encryption, separate template storage, ongoing bias monitoring, mandatory human review for auto-rejections (addresses Art 22(3) human-intervention safeguard), TIA-supported SCCs for the Singapore SaaS, retention automation |

### Article 22 overlay

Because the ADM is solely-automated with significant effect, Article 22(1) right-not-to-be-subject applies. The exceptions (Article 22(2)):

- (a) Contractual necessity — does the customer relationship require the automated decision? Defensible argument: AML / sanctions screening is mandated by law (Article 22(2)(b)) AND the customer's contract with the bank is conditional on KYC clearance (Article 22(2)(a)). Either exception is workable.
- (c) Explicit consent — not the primary basis; the customer cannot meaningfully refuse and still onboard.

For special category data (biometric) + Article 22, **Article 22(4)** applies — automated decisions involving Article 9 data are only allowed under Article 22(4) conditions (explicit consent OR substantial public interest under Member State / Union law) + suitable safeguards. The DPIA must document both arms.

### Residual risk

Same as PDPA scenario — overall residual Medium after mitigation. If HIGH had remained, **Article 36 prior consultation** with the Irish DPC would be triggered.

### Article 36 timeline (if needed)

- Day 0: DPIA finds HIGH residual risk
- Day 0: File Article 36 consultation request with DPC
- Day 0 + 8 weeks: DPC may respond (extendable +6 weeks)
- DPC may issue written advice; in serious cases exercise Article 58 powers
- Controller may not begin processing until DPC consultation is complete

Practical effect: Article 36 is a deal-killer for time-sensitive launches. Re-design to bring residual below "high" if at all possible.

## Common gaps

1. **EDPB 9-criteria threshold not applied** — controller assesses only Article 35(3) and concludes "not on the list" without applying the 9-criteria.
2. **National SA blacklist not checked** — Member State SA blacklists supersede; controllers operating cross-border must check the lead SA's list AND any concerned SA's list.
3. **Article 22 overlay missing** — DPIA covers data-protection risks but does not address the standalone Article 22 right to human review.
4. **Article 22(4) special-category condition not documented** — biometric ADM without the Article 22(4) explicit-consent or public-interest basis recorded.
5. **TIA missing** — Schrems II requires a TIA for any non-adequate-country transfer. SCC alone insufficient.
6. **Article 36 trigger ignored** — HIGH residual silently accepted without consulting the SA.

## Deliverable

An Article 35(7)-compliant DPIA on the e-KYC scenario, with Article 22 overlay, Article 36 trigger assessment, and TIA for the Singapore transfer. Self-graded against [T2 checkpoint](06-checkpoint.md).

## PDPA parallel

The structural difference is the **escalation mechanism**:

| | GDPR | PDPA |
|---|---|---|
| HIGH residual after mitigation → | Article 36 prior consultation with SA | Senior management report (not Commissioner) |
| Methodology | Not prescribed; EDPB suggests | DEICA prescribed |
| Validity | Review on material change | 2 years (then re-execute) |
| Trigger | Article 35(3) + EDPB 9-criteria + SA blacklist | 2 quantitative + 7 qualitative |
| Article 22 overlay | Codified directly in Art 22 | ADMP Guideline (not in statute) |

For a client with both EU and Malaysian exposure, build the DPIA programme around the stricter side of each — that satisfies both regimes.

Parallel exercise: [PDPA T2 Lesson 3 — DEICA DPIA](../../pdpa/t2-practitioner/03-deica-dpia.md).

## What's next

[Lesson 4 — Article 33 / 34 breach](04-breach-article33-34.md).
