# GDPR Chapter V — international data transfers

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 Articles 44-50 + EDPB Recommendations 01/2020 on supplementary measures + CJEU C-311/18 (Schrems II).

## The mechanism hierarchy

Chapter V provides five mechanism categories for transfers to third countries (non-EU/EEA) or international organisations:

| Mechanism | Article | When |
|---|---|---|
| **Adequacy decision** | 45 | Recipient in a Commission-designated adequate country |
| **Standard Contractual Clauses (SCCs)** | 46(2)(c)/(d) | Default for typical cross-border |
| **Binding Corporate Rules (BCRs)** | 47 | Intra-group transfers across multinational structures |
| **Certification with binding commitments** | 46(2)(e)/(f) | Emerging market |
| **Derogations** | 49 | Limited exceptions |

Plus **Article 48**: third-country court / tribunal / authority orders are NOT a transfer basis without underlying mechanism — reinforced by Schrems II.

## Current adequacy decisions (verify at engagement)

Commission adequacy list (as of writing, verify current state):

Andorra; Argentina; Canada (commercial); Faroe Islands; Guernsey; Israel; Isle of Man; Japan (private sector); Jersey; New Zealand; Republic of Korea; Switzerland; United Kingdom; Uruguay; United States (under EU-US Data Privacy Framework — participating organisations only).

Malaysia, Singapore, Indonesia, China, India, most of Africa, most of Latin America are NOT on the adequacy list. Transfers to these require Article 46 mechanism.

### EU-US Data Privacy Framework

The 2023 EU-US DPF replaced Privacy Shield (invalidated by Schrems II). DPF applies to participating US organisations only. The mechanism is fragile — Schrems III challenge is plausible; DPF was not unanimously accepted by Member States.

Transfers to non-DPF-participating US recipients still require Article 46 mechanisms + supplementary measures.

## The 2021 modular SCCs

Commission Implementing Decision 2021/914 introduced the modular SCCs replacing the 2010 controller-to-processor and 2004 controller-to-controller SCCs. The 2010/2004 SCCs were sunsetted in December 2022.

The 2021 SCCs have four modules:

| Module | Scope |
|---|---|
| Module 1 | Controller to Controller (C2C) |
| Module 2 | Controller to Processor (C2P) |
| Module 3 | Processor to Processor (P2P) |
| Module 4 | Processor to Controller (P2C) |

Module selection depends on the role of the parties for the specific transfer. A typical SaaS engagement uses Module 2. Multi-tier vendor relationships may need Module 3 (processor to its sub-processor).

## Schrems II and the TIA

CJEU C-311/18 (Schrems II, July 2020):

1. Invalidated EU-US Privacy Shield
2. Held that SCCs alone are insufficient where receiving jurisdiction's law allows government access that undermines protection

Controllers relying on SCCs must:

1. Assess the receiving jurisdiction's law (Transfer Impact Assessment)
2. Identify supplementary measures where the assessment finds gaps
3. Suspend the transfer if supplementary measures cannot bridge

## EDPB Recommendations 01/2020

The operational manual for supplementary measures. Categories:

| Category | Examples |
|---|---|
| Technical | Encryption with controller-held keys; pseudonymisation; split-processing |
| Contractual | Transparency reports; processor commitment to challenge requests; notification of authority requests |
| Organisational | Internal policies for handling foreign-authority requests; audit programmes |

For US transfers post-Schrems II, technical measures (specifically encryption with controller-held keys) are typically necessary because the legal-and-organisational measures alone cannot bridge the gap created by FISA 702 and EO 12333.

## Binding Corporate Rules (Article 47)

For intra-group transfers. Article 47 requires:

- Approved by competent SA after Article 63 cooperation procedure
- Legally binding on all group members
- Specific elements per Article 47(2) — complaints, training, audit, cooperation with SA

BCR approval timeline: 18-36 months. Cost: substantial. Justified only where transfer volume warrants and the corporate group is genuinely cross-border.

## Article 49 derogations

Limited exceptions to Articles 45 / 46:

| Article | Derogation |
|---|---|
| 49(1)(a) | Explicit consent (specific to the transfer; informed of risks) |
| 49(1)(b) | Contract necessity (with subject) |
| 49(1)(b) | Pre-contractual measures |
| 49(1)(d) | Important reasons of public interest |
| 49(1)(e) | Legal claims |
| 49(1)(f) | Vital interests where subject incapable |
| 49(1)(g) | Public register |
| 49(1) second sub-paragraph | Compelling legitimate interests (narrow; documented; SA notified) |

Derogations are NOT the default for ongoing transfers. EDPB Guidelines 2/2018 emphasise non-repetitive use.

## Common implementation gaps

1. **No transfer register**
2. **2010 SCCs still cited** — sunsetted December 2022
3. **SCCs adopted without TIA**
4. **No supplementary measures for US / China transfers**
5. **DPF reliance without verifying DPF participation**
6. **Article 49 derogations cited as default**
7. **Sub-processor transfers undocumented**
8. **TIA done once and never refreshed**

## PDPA parallel

PDPA s129 / s129A imports the GDPR Chapter V architecture. Mapping:

| GDPR | PDPA |
|---|---|
| Article 45 adequacy | s129(2) Ministerial whitelist |
| Article 46(2)(c)/(d) SCCs | s129A(b) — CBPDT Guideline |
| Article 47 BCRs | s129A(c) |
| Article 46(2)(e)/(f) certification | s129A(d) |
| Article 49 derogations | s129(3) — 7 grounds |
| Schrems II TIA framework | TIA per CBPDT Guideline |

For dual-regime clients, the same SCC + supplementary measures + TIA stack typically satisfies both regimes.

Parallel reading: [PDPA CBPDT deep-dive](../../pdpa/guidelines/g6-cbpdt.md).

## Cross-references

- T2 Lesson 1 — RoPA with cross-border entries
- T3 Lesson 4 — Chapter V architecture exercise
- T4 Lesson 2 — Chapter V audit scope
