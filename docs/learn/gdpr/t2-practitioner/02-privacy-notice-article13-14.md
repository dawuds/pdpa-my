# Exercise — draft Article 13 / 14 information notices

> **Tier 2 / Lesson 2 — 90 minutes.** Parallel to PDPA T2 Lesson 2. Deliverable: an Article 13 notice + an Article 14 notice for a worked B2C platform.

## Article 13 vs Article 14 — when each applies

| Article | When | Timing |
|---|---|---|
| **Art 13** | Personal data collected **directly from the data subject** | At the time the data is collected |
| **Art 14** | Personal data collected **indirectly** (from a third party, data broker, public source, etc.) | Within a reasonable period after collection — at the latest one month; or upon first communication with the subject; or before disclosure to another recipient (whichever is earliest) |

A controller usually needs both articles' notices for different parts of the same processing. Account signup → Article 13 (data collected directly). Data enrichment from a marketing-data vendor → Article 14 (data collected indirectly).

## Mandatory elements

### Article 13(1) — for all direct collection

| Element |
|---|
| (a) Controller identity + contact + (where applicable) representative |
| (b) DPO contact |
| (c) Purposes of processing + lawful basis |
| (d) Where lawful basis is legitimate interests, the legitimate interest pursued |
| (e) Recipients or categories of recipients |
| (f) Third-country transfers + safeguards reference |

### Article 13(2) — additional, "necessary to ensure fair and transparent processing"

| Element |
|---|
| (a) Retention period or criteria |
| (b) Data subject rights (access, rectification, erasure, restriction, objection, portability) |
| (c) Where lawful basis is consent, right to withdraw |
| (d) Right to lodge complaint with SA |
| (e) Whether provision of data is statutory/contractual requirement and consequences of failure |
| (f) Existence of automated decision-making (Art 22) + meaningful information about the logic + significance and consequences |

### Article 14 — same elements PLUS

| Element |
|---|
| (f) Source of data + whether from publicly accessible sources |

### Article 14 exceptions (Article 14(5))

Article 14 obligation does NOT apply where:

- Subject already has the information
- Provision is impossible or would require disproportionate effort
- Obtaining or disclosure is expressly laid down by law
- Data must remain confidential by professional secrecy

The "disproportionate effort" exception is narrow — EDPB has consistently rejected commercial controllers' attempts to rely on it for large-scale data acquisitions.

## The exercise

MyKedai EU Limited from Lesson 1. Two source scenarios:

1. **Article 13** — customer signing up directly on the website (account data, marketing consent, fraud-detection data)
2. **Article 14** — marketing data acquired from a third-party broker for prospect targeting (the controller never had direct contact with the prospects when their data was acquired)

### Sample Article 13 notice — extract

> **MyKedai EU Limited — Privacy Notice (Article 13 — collected directly from you)**
>
> **Controller**. MyKedai EU Limited, [Dublin address]. Registered in Ireland.
>
> **DPO**. [Name], dpo@mykedai.eu, +353 [number].
>
> **Lead supervisory authority**. Data Protection Commission (Ireland) — www.dataprotection.ie.
>
> **What we collect when you sign up.** Name, email, phone, delivery address, password hash, order data. Browsing behaviour and basic demographics (subject to cookie preferences).
>
> **Why we collect it + lawful basis.**
>
> | Purpose | Lawful basis |
> |---|---|
> | Account creation and authentication | Article 6(1)(b) contract performance |
> | Order fulfilment | Article 6(1)(b) contract performance |
> | Customer service | Article 6(1)(b) contract performance |
> | Marketing and personalisation | Article 6(1)(a) consent — withdraw anytime |
> | Fraud detection | Article 6(1)(f) legitimate interests (our interest in fraud prevention vs your interest in not being subject to automated risk scoring — LIA documented) + Article 22(2)(a) contractual necessity for the automated decision |
>
> **Who we share it with.** Cloud hosting (AWS EU-West-1); transactional email (SaaS in EU); delivery (local courier); payment processing (Stripe Ireland); fraud detection (SaaS hosted in Singapore — see "Transfers" below).
>
> **Transfers outside the EU.** Fraud-detection SaaS is hosted in Singapore. We rely on the 2021 Standard Contractual Clauses (Module 2) with supplementary measures including encryption-in-transit and encryption-at-rest with controller-held keys, plus the processor's commitment to challenge any government data request. Our Transfer Impact Assessment is reviewed annually.
>
> **How long we keep it.**
>
> | Data type | Retention period | Basis |
> |---|---|---|
> | Account data | 7 years from account closure | Tax law + Irish Statute of Limitations |
> | Order data | 7 years from order date | Tax law |
> | Marketing data | Until consent withdrawal | Article 7(3) withdrawability |
> | Fraud detection logs | 12 months | Operational necessity |
>
> **Your rights.** You have the right to access, rectification, erasure, restriction, objection, portability, and to withdraw consent at any time. To exercise any right, contact our DPO. You also have the right to lodge a complaint with the Data Protection Commission (Ireland) or your local SA.
>
> **About automated decisions.** When you make a transaction, our fraud-detection system scores it automatically. A high-risk score may result in the transaction being declined or your account being temporarily restricted. The system uses transaction data, IP / device fingerprint, and behavioural patterns. You have the right to obtain human intervention, express your point of view, and contest the decision (Article 22(3)). Contact our customer service team for a human review.
>
> **Statutory / contractual requirement.** Providing your name, contact, delivery address, and payment information is necessary to enter into the contract with us. Without these, we cannot create your account or fulfil orders. Marketing consent is fully voluntary.

### Sample Article 14 notice — extract

> **MyKedai EU Limited — Privacy Notice (Article 14 — we obtained your data indirectly)**
>
> **Controller**. MyKedai EU Limited.
>
> **DPO**. [Name], dpo@mykedai.eu.
>
> **Source of data.** We obtained your contact information from [Data Broker Name], who acquired it from publicly accessible business directories and from consent-based lead-generation forms hosted by their downstream partners. We acquired this data on [Date].
>
> **What we have.** Name, email, business contact, and basic profile fields (job title, industry, company size).
>
> **Why we have it + lawful basis.** B2B prospect marketing — informing you of MyKedai products that may be relevant to your business. Lawful basis: Article 6(1)(f) legitimate interests (our interest in identifying B2B prospects vs your reasonable expectation; LIA documented).
>
> **How long we keep it.** 24 months from acquisition unless you engage with us (in which case we transition to Article 13 controller-collected processing) or unless you object (Article 21).
>
> **Your rights.** Same as Article 13 + you have the right to object to processing under Article 21 at any time, with absolute right for direct marketing. Contact our DPO.
>
> **Lodging a complaint.** Data Protection Commission (Ireland).

## Common gaps

1. **No Article 14 notice** — controllers acquire data from brokers / public sources without ever sending the Article 14 notice. Common pattern in B2B; high-risk because subjects' first awareness is often the marketing email itself.
2. **Lawful basis not specified per purpose** — generic "we process your data lawfully" fails Article 13(1)(c).
3. **Legitimate interests stated without LIA** — Article 13(1)(d) requires the legitimate interest to be stated; the LIA documenting the three-part test must exist behind it.
4. **Article 22 disclosure missing or vague** — controllers using ML-based risk scoring or recommendation rarely include the Article 13(2)(f) automated-decision disclosure.
5. **Schrems II transfer reference incomplete** — SCC cited without TIA or supplementary measures reference.
6. **Complaint route to SA missing** — Article 13(2)(d) requirement frequently omitted.

## Deliverable

Both Article 13 and Article 14 notices for the worked scenarios. Top-layer + bottom-layer structure. Self-graded against [T2 checkpoint](06-checkpoint.md).

## PDPA parallel

PDPA s7(1)(a)-(f) is the equivalent obligation but with fewer mandatory elements. The notable absences in PDPA s7(1):

- DPO contact (covered by JPDP Privacy Notice Guides 2025 but not by s7(1) itself)
- Retention period (no PDPA equivalent of Article 13(2)(a))
- Right to lodge a complaint to SA (no PDPA equivalent)
- Lawful basis specifically per purpose (PDPA implicit; GDPR explicit)
- Article 22 automated-decision disclosure (PDPA's ADMP Guideline §9.3 imposes the mandatory FACT-of-ADM disclosure post-April 2026)
- Source disclosure under Article 14 (PDPA s7(1)(c) covers this for indirect collection)

The JPDP Privacy Notice Quick Guide 2025 + Privacy Notice Preparation Guide 2022 expand PDPA's notice obligations to be closer to GDPR's Article 13/14, but the statutory minimum under s7(1) remains narrower.

Parallel exercise: [PDPA T2 Lesson 2 — privacy notice draft](../../pdpa/t2-practitioner/02-privacy-notice-draft.md).

## What's next

[Lesson 3 — Article 35 DPIA](03-dpia-article35.md).
