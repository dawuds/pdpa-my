# Exercise — build an Article 30 RoPA from scratch

> **Tier 2 / Lesson 1 — 90 minutes.** Parallel to PDPA T2 Lesson 1. Deliverable: an Article 30 RoPA covering four processing activities with both controller and processor entries.

## What Article 30 requires

Article 30(1) — controller RoPA. Article 30(2) — processor RoPA. Both are mandatory.

### Article 30(1) controller elements

| # | Element |
|---|---|
| (a) | Name and contact details of controller, joint controller, representative, DPO |
| (b) | Purposes of processing |
| (c) | Description of categories of data subjects and personal data |
| (d) | Categories of recipients (including in third countries) |
| (e) | Where applicable, transfers to third countries / international organisations + documentation of suitable safeguards |
| (f) | Where possible, envisaged retention period |
| (g) | Where possible, general description of technical and organisational security measures (Article 32) |

### Article 30(2) processor elements

| # | Element |
|---|---|
| (a) | Name and contact of processor, controller representative for each, DPO |
| (b) | Categories of processing carried out on behalf of each controller |
| (c) | Where applicable, transfers to third countries + documentation of safeguards |
| (d) | Where possible, technical and organisational measures |

## The Article 30(5) micro-enterprise exception

Article 30(5) exempts organisations of fewer than 250 persons from the Article 30 obligation **UNLESS** the processing:

- Is likely to result in a risk to the rights and freedoms of data subjects
- Is not occasional
- Includes special category data (Article 9) or criminal-conviction data (Article 10)

In practice almost no commercial controller qualifies. Any controller with regular customer processing, HR processing of health data, or any high-risk activity is back inside Article 30. The exception is a narrow safe harbour, not a general SME pass.

## The exercise

Same MyKedai Sdn Bhd context from the PDPA exercise — now hypothetically also operating in the EU via a wholly-owned Irish subsidiary serving EU customers. The Irish subsidiary is the EU-establishment controller for EU customer data.

The four processing activities (parallel to PDPA exercise):

1. Customer account management (EU customers)
2. Marketing and personalisation (EU customers with consent)
3. Employee management (EU employees of the Irish subsidiary)
4. Fraud detection (third-party SaaS in Singapore — extra-EU transfer)

### Sample controller RoPA entry — Activity 1

| Article 30(1) element | Entry |
|---|---|
| **Controller** | MyKedai EU Limited, [Dublin address]. Registered in Ireland. |
| **Joint controllers / Representative** | n/a (no joint controllership); EU establishment — no Article 27 representative needed |
| **DPO** | [Name], dpo@mykedai.eu, +353 [number] |
| **Purpose** | (a) Account creation and authentication; (b) Order fulfilment; (c) Customer service. Lawful basis: Art 6(1)(b) contract performance |
| **Data subject categories** | Customers (registered EU account holders) |
| **Personal data categories** | Identification (name, email, phone); authentication; delivery address; order history; customer service correspondence |
| **Recipients** | Internal (customer service, finance, fraud teams); processors (AWS EU-West-1 hosting; Stripe Ireland payment; transactional email SaaS); regulators on lawful request |
| **Third-country transfers** | None for this activity — EU-EU only |
| **Retention** | Per Irish Statute of Limitations + tax law — 7 years from account closure |
| **Security measures** | Encryption in transit (TLS 1.3) and at rest (AES-256); RBAC + MFA; quarterly access reviews; ISO 27001 certified; Article 32 risk-based measures documented |

### Activity 4 — fraud detection (the extra-EU transfer case)

This is the activity that demonstrates the Article 30(1)(e) cross-border element. The fraud-detection SaaS is hosted in Singapore (no adequacy decision; Singapore is not on the EU adequacy list).

| Article 30(1) element | Entry |
|---|---|
| **Recipient (third country)** | [Vendor name], Singapore (data processor) |
| **Safeguards** | 2021 EU SCCs (Commission Implementing Decision 2021/914), Module 2 (Controller-to-Processor); supplementary measures per EDPB Recommendations 01/2020 (encryption in transit and at rest with controller-held keys; processor commits to challenge any government data request); TIA documented and reviewed annually |

The Article 30 entry must reference both the SCC and the supplementary measures. SCC alone is insufficient post-Schrems II for transfers to non-adequate jurisdictions.

## Sample processor RoPA entry — separate document

Where MyKedai EU Limited acts as a processor for another controller (e.g., processing data on behalf of an enterprise B2B customer), it must maintain a separate Article 30(2) RoPA. Sample entry:

| Article 30(2) element | Entry |
|---|---|
| **Processor** | MyKedai EU Limited (acting as processor for [Controller name] under DPA dated [X]) |
| **Controller representative** | [Controller-side contact] |
| **DPO** | [Same DPO as controller-side RoPA] |
| **Categories of processing** | Storage and order fulfilment on behalf of controller |
| **Third-country transfers** | EU-only (or as flagged) |
| **Security measures** | Per Article 32 + DPA-specified measures |

## Common gaps

1. **Mixed Article 30(1) and 30(2)** — entities acting as both controller and processor for different activities should maintain two separate registers. Mixing fails the Article 30(2)(a) "on behalf of each controller" requirement.
2. **Representative missing for non-EU controllers** — Article 27 requires non-EU controllers to appoint an EU representative if Article 3(2) targeting applies. Many non-EU controllers skip this.
3. **Retention "as long as necessary"** — same gap pattern as PDPA. Article 30(1)(f) says "where possible" but in practice supervisory authorities expect specific periods.
4. **TIA missing** — Article 30 cross-border entries that cite SCCs without referencing a TIA are post-Schrems II non-compliant.
5. **Joint controller arrangements undocumented** — where joint controllership applies (Article 26), the JCA must exist and the controller's RoPA should reference it.
6. **No update cadence** — same pattern as PDPA.

## Deliverable

An Article 30(1) controller RoPA covering the four MyKedai EU Limited processing activities, with full Article 30(1)(a)-(g) elements per activity. Separately, an Article 30(2) processor RoPA where applicable. Self-graded against [T2 checkpoint](06-checkpoint.md).

## PDPA parallel

PDPA s138 is the structural equivalent post-A1727. The differences:

- **Micro-enterprise exception**: Article 30(5) (GDPR) vs no PDPA equivalent
- **Joint controllership**: Article 26 (GDPR) — explicit; not codified in PDPA
- **Processor RoPA**: Article 30(2) (GDPR) — separate processor obligation; PDPA implicit only
- **Cross-border + safeguards**: Article 30(1)(e) (GDPR) — explicit; PDPA's s138 less prescriptive
- **TIA**: post-Schrems II expectation (GDPR) — not codified in PDPA but the JPDP CBPDT Guideline expects similar

Parallel exercise: [PDPA T2 Lesson 1 — build a RoPA](../../pdpa/t2-practitioner/01-build-a-ropa.md).

## What's next

[Lesson 2 — Draft Article 13 / 14 information notices](02-privacy-notice-article13-14.md).
