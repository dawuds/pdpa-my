# GDPR Articles 13 / 14 — information to be provided

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 + EDPB Guidelines on Transparency (Guidelines 2/2017 as adopted).

## When each article applies

| Article | When | Timing |
|---|---|---|
| **Art 13** | Personal data collected **directly from the data subject** | At the time of collection |
| **Art 14** | Personal data collected **indirectly** (third party, public source, data broker) | Within a reasonable period after collection; at the latest one month; or upon first communication with subject; or before disclosure to another recipient — whichever is earliest |

A controller often needs both notices for different parts of the same processing. Account signup → Article 13. Data enrichment from a broker → Article 14.

## Article 13(1) mandatory elements

| Element |
|---|
| (a) Controller identity + contact + (where applicable) representative |
| (b) DPO contact (where DPO appointed) |
| (c) Purposes of processing + lawful basis |
| (d) Where Article 6(1)(f) legitimate interests is the basis, the legitimate interest pursued |
| (e) Recipients or categories of recipients |
| (f) Third-country transfers + safeguards reference |

## Article 13(2) additional elements

| Element |
|---|
| (a) Retention period or criteria |
| (b) Data subject rights (access, rectification, erasure, restriction, objection, portability) |
| (c) Right to withdraw consent (where consent is the basis) |
| (d) Right to lodge complaint with SA |
| (e) Whether provision is statutory / contractual requirement + consequences of failure |
| (f) Existence of automated decision-making (Article 22) + meaningful information about the logic + significance and consequences |

## Article 14 — same elements + source disclosure

Article 14 requires everything in Article 13 PLUS:

- (f) Source of the data + whether from publicly accessible sources

## Article 14(5) exceptions

Article 14 obligation does NOT apply where:

- (a) Subject already has the information
- (b) Provision is impossible or would require disproportionate effort
- (c) Obtaining or disclosure is expressly laid down by law
- (d) Data must remain confidential by professional secrecy

The "disproportionate effort" exception is narrow. EDPB has rejected commercial controllers' attempts to rely on it for large-scale data acquisitions.

## EDPB Guidelines on Transparency

EDPB Guidelines 2/2017 are the operational reference. Key points:

- Plain language at appropriate reading level
- Layered notices acceptable provided the structure is genuinely informative
- Multi-channel delivery (in-app, web, paper as appropriate)
- Update mechanism for material changes
- Just-in-time notices supplement (not replace) the main notice

## Article 22 disclosure under Article 13(2)(f)

Where the controller uses automated decision-making with legal / similar significant effect (Article 22), the notice must include:

- The existence of automated decision-making
- Meaningful information about the logic (training data summary; model purpose; relevant inputs)
- Significance of the processing
- Envisaged consequences for the data subject

The CJEU C-26/22 + C-64/22 SCHUFA Holding decision (2023) broadened the Article 22 trigger interpretation — credit scoring + similar decisions are within Article 22 even where a human formally signs off, if the human role is rubber-stamping. Article 13(2)(f) disclosure follows the broader trigger.

## Common gaps

1. **No Article 14 notice** — controllers acquire data from brokers / public sources without sending the Article 14 notice
2. **Lawful basis not specified per purpose** — generic "we process your data lawfully"
3. **Legitimate interests cited without LIA** — Article 13(1)(d) requires the LI to be stated
4. **Article 22 disclosure missing or vague** — common for AdTech / ML-based decisioning
5. **Schrems II reference incomplete** — SCC cited without TIA / supplementary measures
6. **Complaint route to SA missing**
7. **Article 14(5) exception relied on without documented assessment**

## PDPA parallel

PDPA s7(1) is narrower — six mandatory particulars without retention period / complaint route / lawful basis specifics. JPDP Privacy Notice Guides (2022 + 2025) expand the obligations to be closer to GDPR but the statutory minimum is narrower.

| GDPR | PDPA |
|---|---|
| Article 13(1)(c) — purpose + lawful basis | s7(1)(b) — purpose only |
| Article 13(1)(e) — recipient categories | s7(1)(e) |
| Article 13(2)(a) — retention | Not in s7(1) |
| Article 13(2)(b) — rights | s7(1)(d) (limited) |
| Article 13(2)(d) — complaint route | Not in s7(1) |
| Article 13(2)(f) — automated decisions | ADMP Guideline §9.3 (post-April 2026) |
| Article 14(2)(f) — source | s7(1)(c) |

Parallel reading: [PDPA Privacy Notice deep-dive](../../pdpa/guidelines/g7-privacy-notice.md).

## Cross-references

- T2 Lesson 2 — Article 13/14 information notices exercise
- T4 Lesson 4 — finding craft on Article 13(2)(f) gap
