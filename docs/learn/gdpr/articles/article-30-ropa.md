# GDPR Article 30 — Records of Processing Activities

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 + EDPB Guidelines on Article 30.

## Two registers — controller and processor

Article 30 imposes RoPA obligations on both controllers (30(1)) and processors (30(2)).

## Article 30(1) — controller RoPA

Required elements per processing activity:

| # | Element |
|---|---|
| (a) | Name and contact details of controller + (where applicable) joint controller, representative, DPO |
| (b) | Purposes of processing |
| (c) | Description of categories of data subjects and personal data |
| (d) | Categories of recipients (including third countries / international organisations) |
| (e) | Where applicable, transfers to third countries / international organisations + documentation of suitable safeguards |
| (f) | Where possible, envisaged retention periods for different categories |
| (g) | Where possible, general description of technical and organisational security measures (Article 32) |

## Article 30(2) — processor RoPA

Where the controller is also a processor for another controller, a separate processor RoPA is required:

| # | Element |
|---|---|
| (a) | Name and contact of processor + controller representative for each + DPO |
| (b) | Categories of processing carried out on behalf of each controller |
| (c) | Where applicable, transfers to third countries + documentation of safeguards |
| (d) | Where possible, technical and organisational measures |

## Article 30(3) — written form

The RoPA must be in writing, including electronic form. Maintaining it as a spreadsheet, database, or GRC tool is acceptable.

## Article 30(4) — making it available

The controller / processor must make the RoPA available to the SA on request. This is the on-request access mechanism.

## Article 30(5) — micro-enterprise exception

Article 30 does NOT apply to controllers / processors under 250 persons UNLESS:

- Processing is likely to result in a risk to the rights and freedoms of data subjects, OR
- Processing is not occasional, OR
- Processing includes special category (Article 9) or criminal data (Article 10)

In practice, almost no commercial controller qualifies. Any controller with regular customer processing has non-occasional processing → back inside Article 30.

The exception was intended as relief for genuinely small entities with minimal processing. It is not a general SME pass.

## Update cadence

Article 30 does not prescribe an update cadence. EDPB and national SA guidance expect:

- **Annual minimum** review
- **Material change** triggers update — new processing; new processor; new cross-border destination; new lawful basis

## Common implementation gaps

1. **RoPA missing entirely** — controller in scope under Article 3 but no RoPA
2. **Mixed Article 30(1) and 30(2)** — controller acting as both does not maintain separate registers
3. **Article 30(5) micro-enterprise exception incorrectly relied on** — almost never applies
4. **Retention "as long as necessary"** — Article 30(1)(f) says "where possible" but in practice SAs expect specific periods
5. **TIA missing for cross-border** — Article 30(1)(e) entries cite SCCs without TIA
6. **Joint controller arrangements undocumented** — Article 26 JCA missing
7. **Article 27 representative not in RoPA header** — for non-EU controllers, the representative should appear

## PDPA parallel

PDPA s138 (introduced by A1727) is the equivalent. Mapping:

| GDPR Article 30 | PDPA s138 |
|---|---|
| 30(1) controller register | s138 RoPA — same fields with minor variations |
| 30(2) processor register | Implicit in s9 processor obligations |
| 30(5) micro-enterprise exception | No PDPA equivalent — applies to all controllers |
| 30(4) SA access | Commissioner access on request |
| Update cadence | Annual + material change |

Parallel reading: [PDPA T2 Lesson 1 — build a RoPA](../../pdpa/t2-practitioner/01-build-a-ropa.md).

## Cross-references

- T2 Lesson 1 — Article 30 RoPA exercise
- T4 Lesson 2 — RoPA audit scope
- EDPB Guidelines on Article 30
