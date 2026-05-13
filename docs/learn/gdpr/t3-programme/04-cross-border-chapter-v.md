# GDPR Chapter V — cross-border transfer architecture

> **Tier 3 / Lesson 4 — 60 minutes.** Parallel to PDPA T3 Lesson 4. Deliverable: cross-border transfer register + TIA + mechanism selection for a client transferring data to US / UK / Singapore / Malaysia.

## The Chapter V architecture

Chapter V (Articles 44-50) governs transfers of personal data to third countries or international organisations. Five mechanism categories:

| Mechanism | Article | When |
|---|---|---|
| Adequacy decision | 45 | Recipient in a Commission-designated adequate country |
| Standard Contractual Clauses | 46(2)(c)/(d) | The default mechanism for the rest |
| Binding Corporate Rules | 47 | Intra-group transfers |
| Certification with binding commitments | 46(2)(e)/(f) | Less common; certification market is emerging |
| Derogations | 49 | Limited exceptions: consent, contract, public interest, legal claims, vital interests |

Plus Article 48: court / tribunal / authority orders from third countries are NOT a transfer basis without an underlying mechanism. This was reinforced by Schrems II.

## Adequacy decisions (Article 45)

Current adequacy decisions (verify against the Commission's current list — verify status at engagement scoping):

| Adequacy decision |
|---|
| Andorra; Argentina; Canada (commercial); Faroe Islands; Guernsey; Israel; Isle of Man; Japan (private); Jersey; New Zealand; Republic of Korea; Switzerland; United Kingdom; Uruguay; United States (under EU-US Data Privacy Framework — see below) |

The list is short. Most of the world is non-adequate, including Malaysia, Singapore, Indonesia, China, India, most of Africa, and most of Latin America.

The **EU-US Data Privacy Framework** (2023, successor to Privacy Shield invalidated by Schrems II) provides adequacy for transfers to participating US organisations only. The mechanism is fragile — a Schrems III challenge is plausible; the DPF was not unanimously accepted by Member States; transfers to non-DPF-participating US recipients still require Article 46 mechanisms.

## SCCs (2021 modular)

Commission Implementing Decision 2021/914 introduced the "modular" 2021 SCCs replacing the 2010 controller-to-processor and 2004 controller-to-controller SCCs. The 2021 SCCs have four modules:

| Module | Scope |
|---|---|
| Module 1 | Controller to Controller (C2C) |
| Module 2 | Controller to Processor (C2P) |
| Module 3 | Processor to Processor (P2P) |
| Module 4 | Processor to Controller (P2C) |

Module selection depends on the role of the parties for the specific transfer. A typical SaaS engagement uses Module 2 (the EU controller transfers data to the non-EU processor SaaS). A multi-tier vendor relationship may also need Module 3 (the non-EU processor transfers to its non-EU sub-processor).

## Schrems II and the TIA

CJEU C-311/18 (Schrems II, July 2020) invalidated the Privacy Shield AND held that SCCs alone are insufficient where the receiving jurisdiction's law allows government access that undermines the protection. Controllers relying on SCCs must:

1. Assess the receiving jurisdiction's law (Transfer Impact Assessment)
2. Identify supplementary measures where the assessment finds gaps
3. Suspend the transfer if supplementary measures cannot bridge the gap

EDPB Recommendations 01/2020 on supplementary measures is the operational manual. The supplementary measures categories:

| Category | Examples |
|---|---|
| Technical | Encryption with keys held by the controller; pseudonymisation; split-processing |
| Contractual | Transparency reports; processor commitment to challenge requests; notification of authority requests |
| Organisational | Internal policies for handling foreign-authority requests; audit programmes |

## Article 49 derogations

Article 49 provides derogations for transfers in specific situations:

| Derogation | Article | Scope |
|---|---|---|
| Explicit consent | 49(1)(a) | Specific transfer; explicitly consented to risks |
| Contract necessity | 49(1)(b) | Necessary for performance of contract with subject |
| Pre-contractual measures | 49(1)(b) | Subject-requested |
| Important reasons of public interest | 49(1)(d) | Recognised by Union or Member State law |
| Legal claims | 49(1)(e) | Establishment, exercise, defence |
| Vital interests | 49(1)(f) | Where subject incapable of consenting |
| Public register | 49(1)(g) | Limited to relevant info |
| Compelling legitimate interests | 49(1) second sub-paragraph | Non-repetitive; limited subjects; documented assessment; SA notified |

Derogations are **narrow**. EDPB Guidelines 2/2018 on Article 49 derogations clarify that they are intended for one-off / non-repetitive transfers and should not be used as the default mechanism for ongoing SaaS / cloud transfers.

## The exercise — FinTechCo EU subsidiary

Same FinTechCo scenario as PDPA Lesson 4 — now FinTechCo EU Ltd, the Irish subsidiary, with the same five SaaS vendors.

### Step 1 — transfer register

| # | Vendor | Jurisdiction | Adequacy? | Mechanism |
|---|---|---|---|---|
| 1 | AWS Singapore | Singapore | No (not on adequacy list) | Article 46(2)(c) 2021 SCCs Module 2 |
| 2 | Salesforce US | United States | Partial (under DPF if participating; otherwise no) | Article 45 (if Salesforce is DPF-participating for the relevant entity) OR Article 46(2)(c) 2021 SCCs Module 2 + supplementary measures |
| 3 | Stripe Ireland | Ireland | n/a — EU-EU | No Chapter V transfer |
| 4 | Auth0 EU (Ireland) | Ireland | n/a — EU-EU | No Chapter V transfer |
| 5 | Local-AI-Vendor Hong Kong | Hong Kong | No | Article 46(2)(c) 2021 SCCs Module 2 + supplementary measures + likely re-architect |

### Step 2 — TIA per non-adequate transfer

| # | Vendor | TIA finding |
|---|---|---|
| 1 | AWS Singapore | Singapore PDPA provides reasonably comparable protection; government access exists but is constrained; supplementary measures (encryption with EU-held keys) sufficient |
| 2 | Salesforce US | If DPF-participating: adequacy applies for the specific Salesforce US entity. If not: Article 46(2)(c) SCCs + supplementary measures — Schrems II concerns about FISA 702 and EO 12333 require encryption with EU-held keys + processor commitment to challenge requests. Consider EU-region Salesforce instance |
| 5 | Local-AI-Vendor Hong Kong | Hong Kong PDPO provides limited protection; post-NSL government access concerns; supplementary measures likely insufficient — recommend re-architect (pseudonymisation before transfer + restricted data set + alternative vendor consideration) |

### Step 3 — mechanism selection

| # | Vendor | Final mechanism |
|---|---|---|
| 1 | AWS Singapore | 2021 SCCs Module 2 + encryption with EU-held keys + TIA documented |
| 2 | Salesforce US | First preference: DPF if applicable (subject to monitoring of DPF challenges). Second preference: 2021 SCCs Module 2 + supplementary measures (encryption + processor commitments) + consider EU-instance migration |
| 3 | Stripe Ireland | No Chapter V — EU-EU |
| 4 | Auth0 EU | No Chapter V — EU-EU |
| 5 | Local-AI-Vendor HK | 2021 SCCs + heavy supplementary measures + re-architect to pseudonymisation before transfer + ongoing review |

### Step 4 — BCRs assessment

FinTechCo EU Ltd is part of a group with operations in the UK, Malaysia, and Singapore. **BCRs** could be considered for intra-group transfers if the group has multiple cross-border transfer flows that would otherwise require SCCs at each.

BCRs (Article 47) require:
- Approved by competent SA after Article 63 cooperation procedure
- Legally binding on all group members
- Specific elements per Article 47(2) — complaints, training, audit, cooperation with SA

Timeline to BCR approval: 18-36 months typical. Cost: significant — usually only justified for groups with substantial cross-border transfer volume.

For FinTechCo at this scale, **stick with SCCs** unless transfer volume justifies BCR investment.

## Common gaps

The patterns the audit team catches:

1. **No transfer register** — controller cannot articulate which specific datasets transfer where
2. **SCCs pre-2021 still in use** — 2010 controller-to-processor SCCs were sunsetted in December 2022
3. **No TIA** — SCCs adopted without the Schrems II receiving-jurisdiction analysis
4. **No supplementary measures for US / China / etc.** — SCC alone insufficient post-Schrems II
5. **DPF reliance without verifying DPF participation** — DPF applies only to participating US recipients
6. **Article 49 derogations cited as default mechanism** — derogations are non-repetitive; cannot be the basis for ongoing SaaS
7. **Sub-processor transfers undocumented** — controller's RoPA shows direct processors but sub-processor transfers (e.g., processor uses CDN in third country) are missed

## Deliverable

Cross-border transfer register + TIA per non-adequate transfer + mechanism selection for FinTechCo EU Ltd.

## PDPA parallel

PDPA s129 + s129A imports the GDPR Chapter V architecture with minor variations. For dual-regime clients, the same TIA + SCC + supplementary-measures stack typically satisfies both regimes.

| | GDPR | PDPA |
|---|---|---|
| Adequacy | Article 45 — short Commission list | s129(2) Ministerial whitelist |
| SCCs | 2021 modular SCCs (Commission Implementing Decision 2021/914) | s129A(b) — JPDP CBPDT Guideline 2025 |
| BCRs | Article 47 — SA approval | s129A(c) — Commissioner approval |
| Certification | Article 46(2)(e)/(f) | s129A(d) |
| Derogations | Article 49 | s129(3) |
| TIA | Post-Schrems II per EDPB Recommendations 01/2020 | JPDP CBPDT Guideline 2025 |

Parallel reading: [PDPA T3 Lesson 4](../../pdpa/t3-programme/04-cross-border-reforms.md).

## What's next

[Lesson 5 — Article 33 breach tabletop](05-breach-tabletop-art33.md).
