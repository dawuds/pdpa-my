# Exercise — build a RoPA from scratch

> **Tier 2 / Lesson 1 — 90 minutes.** Hands-on exercise producing a deliverable. By the end of this lesson you will have a RoPA covering four processing activities with all s138 elements.

## Why RoPA is the foundational document

Records of Processing Activities (RoPA) is the document that turns "we comply with PDPA" into something a Commissioner can verify in an inspection. Without RoPA, the organisation has narrative compliance — with RoPA, it has evidence.

Post-A1727, s138 makes RoPA mandatory for data controllers. Failure to maintain RoPA is an offence: **RM300,000 / 2 years for individuals; RM3M or 10% turnover corporate; officer personal liability under s133A**.

The DPO Guideline 2025 confirms the DPO has direct responsibility for RoPA maintenance — typically the first artefact the DPO produces after appointment.

## Where the obligation came from

**The term and the obligation originate in GDPR Article 30** (in force 25 May 2018). Pre-GDPR, the 1995 EU Directive (95/46/EC Article 18) had a heavier *notification* regime where controllers filed with the supervisory authority on creation; Article 30 replaced that with self-maintained internal records, available to the regulator on request.

**PDPA s138, introduced by A1727 (in force 1 June 2025), is the Malaysian equivalent — deliberately modelled on Art 30.** Pre-A1727 Act 709 had no RoPA-style obligation; controllers maintained at most a registration record under the Class of Data Users regime. The s138 elements (purposes, categories of subjects + data, recipients, cross-border transfers, retention, security measures) track Art 30(1) almost element-for-element. The processor-side obligation in PDPA is implicit in s9 (security duty cascades) rather than codified separately like Art 30(2) — see the obligations grid in cross-reference for the side-by-side.

**Terminology caveat.** "RoPA" is GDPR-flavoured industry shorthand the consultancy market adopted globally. JPDP's own materials use *Rekod Pemprosesan Data Peribadi* (records of personal data processing) in the BM authoritative text. In client-facing work — especially with a Malaysian board or counsel — use the JPDP terminology; in internal workpapers and engagement teams familiar with GDPR, "RoPA" is fine.

## The s138 required elements

Section 138 (post-A1727) specifies the RoPA must record, for each processing activity:

| # | Element | What goes here |
|---|---|---|
| 1 | Name and contact details of the data controller and the DPO | Controller legal entity name; DPO name + email + phone |
| 2 | Purposes of the processing | Specific, explicit, legitimate purpose — not "general business" |
| 3 | Description of the categories of data subjects | Customers, employees, vendors, prospects, candidates, etc. |
| 4 | Description of the categories of personal data | Name, contact, financial, health, biometric, etc. — flag sensitive PD per s40 |
| 5 | Categories of recipients (third parties) | Internal departments; group companies; processors; regulators; etc. |
| 6 | Cross-border transfers | Destination country / region; transfer mechanism (consent, contract, SCC, BCR, certification, Ministerial whitelist) |
| 7 | Retention period | Specific number of years / months per processing activity, plus legal basis (Companies Act, Employment Act, etc.) |
| 8 | Security measures | Technical (encryption, access control) and organisational (policies, training) — high-level summary; detail lives in security module |

The JPDP DPO Guideline 2025 expands on this with sub-elements, but the eight elements above are the statutory minimum.

## The exercise

You are the DPO for **MyKedai Sdn Bhd** — a hypothetical Malaysian B2C e-commerce platform with 250,000 active customers. The platform has four key processing activities. Build the RoPA.

### Processing activities

1. **Customer account management** — signup, login, profile, order history. Data: name, email, phone, delivery address, password hash, order data. ~250K subjects.
2. **Marketing and personalisation** — email newsletters, retargeting ads, personalised product recommendations. Data: email, browsing behaviour, purchase history, basic demographics. ~200K subjects with marketing consent.
3. **Employee management (HR)** — recruitment, payroll, benefits, performance reviews. Data: name, NRIC, bank account, salary, performance ratings, health declarations for insurance. ~80 employees.
4. **Fraud detection** — automated risk scoring on every transaction using a third-party fraud-detection SaaS hosted in Singapore. Data: transaction data, IP address, device fingerprint, behavioural patterns. All customers.

### Sample completed RoPA — Processing Activity 1 (Customer account management)

| Element | Entry |
|---|---|
| **Controller** | MyKedai Sdn Bhd, 12345 Jalan ABC, Kuala Lumpur. Registration No: 202301012345 |
| **DPO** | [Name], dpo@mykedai.com.my, +60 3 1234 5678 |
| **Purpose** | (a) Account creation and authentication; (b) Order fulfilment; (c) Customer service. Lawful basis: s6(2)(b) contract performance |
| **Data subject categories** | Customers (registered account holders) |
| **Personal data categories** | Identification (name, email, phone); Authentication (password hash, security questions); Delivery address; Order history; Customer service correspondence |
| **Recipients** | (a) Internal: customer service team, finance team, fraud team; (b) Processors: AWS Singapore (hosting), MailChimp (transactional email), Pos Laju (delivery); (c) Regulators on lawful request |
| **Cross-border transfers** | AWS Singapore (hosting) — under DPA with SCCs; MailChimp US (transactional email) — under DPA with SCCs + supplementary measures |
| **Retention period** | 7 years from account closure (in line with Companies Act 1965 record-keeping requirement for commercial transactions); order data 7 years for tax (Income Tax Act 1967); customer service correspondence 3 years |
| **Security measures** | Encryption in transit (TLS 1.3) and at rest (AES-256); role-based access control; MFA for staff; quarterly access reviews; PDP Standards 2015 baseline compliance; ISO 27001 certified |

### Your turn — complete activities 2, 3, 4

For each remaining activity, produce a similar entry. Watch for:

- **Activity 2 (Marketing)** — lawful basis is consent (s6(2)(a)) for marketing; legitimate interest (closest PDPA basis: s6(2)(d)) for personalisation. Note s38 withdrawal of consent must be operational.
- **Activity 3 (HR)** — includes **sensitive personal data** under s40 (health for insurance, possibly religion via voluntary diversity data). NRIC requires special attention — JPDP has not formally regulated NRIC collection but reasonable expectation is to minimise.
- **Activity 4 (Fraud detection)** — **triggers ADMP** under the JPDP ADMP Guideline (legal/significant effects on the data subject — a transaction blocked or account frozen has significant effect). Triggers **DPIA under §6.1** regardless of subject count. Cross-border transfer to Singapore SaaS — TIA required.

## Common gaps

The patterns the audit team catches most often in client RoPAs:

1. **Purpose too vague.** "Customer service" or "marketing" is too broad. Each purpose should be specific enough that a reasonable reader can determine whether a given data use falls within it.
2. **Missing processors.** Cloud hosting, transactional email, analytics, payment processing — these are processors and must be listed.
3. **Retention "as long as necessary".** Statutorily compliant phrasing but operationally meaningless. Each retention period should be a specific duration with a legal-basis citation.
4. **No cross-border flags.** SaaS providers hosted outside Malaysia are cross-border transfers. AWS Singapore, MailChimp US, Stripe Ireland, Salesforce US — all flag.
5. **Recipient categories too vague.** "Our partners" / "service providers" is not specific enough. Listing actual entity types (or actual entity names where possible) is the defensible level.
6. **Sensitive PD not flagged.** Activities involving s40 data should be flagged in RoPA, and a separate sensitive-PD lawful-basis assessment should be cross-referenced.
7. **No update cadence.** RoPA must be reviewed regularly — most controllers commit to annually + on material change.

## Deliverable

A four-activity RoPA covering MyKedai Sdn Bhd. The expected format is a single spreadsheet or markdown table, one row per activity, eight columns matching the s138 elements. Self-graded against the rubric in the [T2 checkpoint](06-checkpoint.md).

## GDPR parallel

GDPR Article 30 imposes the equivalent obligation. The mapping is direct, with two notable differences:

- **Micro-enterprise exception (Article 30(5))**: organisations under 250 employees may be exempt unless processing is high-risk, regular and systematic, or involves special category / criminal data. In practice almost no commercial controller qualifies — most have at least some high-risk processing. PDPA has no equivalent exception.
- **Processor RoPA (Article 30(2))**: GDPR requires processors to maintain a separate RoPA of activities carried out on behalf of controllers. PDPA does not formally require this, but in practice processors maintain equivalent records to demonstrate s9 compliance.

Parallel exercise: [GDPR T2 Lesson 1 — Article 30 RoPA](../../gdpr/t2-practitioner/01-build-a-ropa-article30.md).

## What's next

[Lesson 2 — Draft a privacy notice](02-privacy-notice-draft.md). The RoPA gives you the substance; the privacy notice gives the data subject the visible version of it.
