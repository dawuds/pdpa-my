# GDPR Article 35 — Data Protection Impact Assessment

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 + EDPB DPIA Guidelines (WP248rev.01 as adopted).

## When DPIA is mandatory — Article 35(3) auto-triggers

Three categories that automatically require DPIA:

| Article | Trigger |
|---|---|
| 35(3)(a) | Systematic and extensive evaluation of personal aspects based on automated processing, including profiling, that produces legal effects or similarly significantly affects |
| 35(3)(b) | Processing on a large scale of special categories (Article 9) or criminal data (Article 10) |
| 35(3)(c) | Systematic monitoring of a publicly accessible area on a large scale |

## EDPB 9-criteria

Beyond Article 35(3), the EDPB DPIA Guidelines (WP248rev.01) provide 9 criteria. Processing meeting **at least two** of the nine criteria requires a DPIA:

1. Evaluation or scoring (credit scoring; behavioural / personality assessment)
2. Automated decision-making with legal or similar significant effect
3. Systematic monitoring
4. Sensitive data or data of highly personal nature
5. Data processed on a large scale
6. Matching or combining datasets
7. Data concerning vulnerable subjects
8. Innovative use or new technological / organisational solutions
9. Where processing prevents subjects from exercising a right or using a service / contract

## National SA blacklists

Per Article 35(4), each Member State SA publishes a list of processing types that automatically require DPIA. Examples:

- Ireland DPC's mandatory DPIA list
- France CNIL's list
- Germany DSK list

For cross-border controllers, check both the lead SA's list AND any concerned SA's list.

## Article 35(7) required content

The DPIA must contain:

| Article | Element |
|---|---|
| (a) | Systematic description of envisaged processing operations + purposes |
| (b) | Assessment of necessity and proportionality |
| (c) | Assessment of risks to rights and freedoms of data subjects |
| (d) | Measures envisaged to address risks — safeguards, security measures, mechanisms to demonstrate compliance |

GDPR specifies content, not methodology. Controllers commonly adopt WP29/EDPB DPIA template + ISO/IEC 29134 + national SA templates.

## Article 36 — prior consultation

Where the DPIA shows the processing would result in HIGH risk in the absence of measures to mitigate, the controller MUST consult the SA before processing begins. Article 36(2) SA response timeline: up to 8 weeks, extendable +6 weeks for complexity.

The SA may then:
- Provide written advice
- Exercise Article 58 powers (including banning the processing)

In practice Article 36 prior consultation is rare. Controllers redesign the processing to bring residual risk below "high" rather than triggering Article 36.

## Article 35(11) — review

DPIA must be reviewed when processing changes. No specific cadence is prescribed — material change is the trigger.

## DPIA + Article 22 + Article 25 integration

Article 35 sits within a programme triad with Article 22 and Article 25:

- Article 25 — design-time PbD (continuous)
- Article 35 — risk assessment for high-risk processing
- Article 22 — automated decisions overlay

Where all three apply, the documentation chain produces multiple artefacts that must be reconcilable.

## Common implementation gaps

1. **EDPB 9-criteria threshold not applied** — controller assesses only Article 35(3)
2. **National SA blacklist not checked**
3. **Article 22 overlay missing**
4. **Article 22(4) special-category condition not documented for ML on Article 9 data**
5. **TIA missing for cross-border** — Schrems II requires TIA
6. **Article 36 trigger ignored** — HIGH residual accepted without consulting SA
7. **No periodic review** (Article 35(11))

## PDPA parallel

PDPA's DPIA Guideline (issued April 2026) is the equivalent with prescriptive methodology (DEICA) and different escalation:

| GDPR | PDPA |
|---|---|
| Article 35(3) auto-triggers + 9-criteria + SA blacklist | 2 quantitative + 7 qualitative |
| Article 35(7) required content | DEICA 5-step methodology + Lampiran A 35-question template |
| HIGH residual → Article 36 SA consultation | HIGH residual → senior management report (NOT Commissioner) |
| 8+6 week SA response | No external escalation |
| Article 35(11) review on material change | 2-year validity + must redo |

For dual-regime clients, build the DPIA programme around the stricter side — generally DEICA + Lampiran A methodology + GDPR Article 35(7) content + cross-jurisdictional Article 22 overlay.

Parallel reading: [PDPA DPIA deep-dive](../../pdpa/guidelines/g1-dpia.md).

## Cross-references

- T2 Lesson 3 — Article 35 DPIA exercise
- T3 Lesson 3 — DPIA + PbD + Article 22 triad
- T4 Lesson 4 — finding craft on Article 35 gaps
