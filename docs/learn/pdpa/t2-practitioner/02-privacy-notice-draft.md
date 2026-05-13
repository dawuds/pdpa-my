# Exercise — draft a privacy notice that survives s7 scrutiny

> **Tier 2 / Lesson 2 — 90 minutes.** Deliverable: a privacy notice for a B2C platform covering all s7(1) elements with BM and EN variants.

## What s7(1) actually requires

Section 7(1) lists six mandatory particulars the controller must disclose at or before collection. Missing any one is a Notice Principle gap.

| Letter | Particular | Practical reading |
|---|---|---|
| (a) | Description of the personal data being processed | Categories, not just names — "name, contact, browsing behaviour" not "everything we collect" |
| (b) | Purpose of the processing | Specific, explicit, legitimate; each purpose described separately |
| (c) | Source of the data | Only required where data is collected indirectly (from a third party, not from the subject); state the source category or named source |
| (d) | Right of access and correction + how to exercise | Identify the DPO / privacy contact; provide a request channel |
| (e) | Class of third parties to whom data may be disclosed | Specific enough to be meaningful — "our cloud hosting provider" OK; "our partners" not |
| (f) | Whether providing the data is obligatory or voluntary, and the consequences of failure to supply | "If you do not provide your delivery address, we cannot deliver your order" |

The JPDP Privacy Notice Quick Guide 2025 confirms layered notices are acceptable provided the layered structure is genuinely informative (top layer summarises and links to detailed bottom layer; not a buried-link dodge).

## Additional obligations beyond s7(1)

Drawing from the DPbD Guideline §6.4 and the General CoP 2022:

- **Notice timing** — before or at the time of collection. Notice delivered after collection fails the test.
- **Language** — BM minimum, EN typically as a parallel version. Where the data subject population includes other languages prominently (Mandarin, Tamil), serious controllers add those.
- **Accessibility** — clear, plain language. Avoid legalese where plain Bahasa Malaysia or plain English will do.
- **Consent linkage** — where the lawful basis is consent (s6(2)(a)), the notice and the consent mechanism are typically combined or tightly linked.
- **Updates** — material changes require re-notification (and in some cases re-consent).

## The six deceptive design patterns prohibited by DPbD §6.4

Even an s7(1)-complete notice fails if it uses deceptive design patterns. The JPDP DPbD Guideline §6.4 explicitly lists six patterns to avoid:

| Pattern (BM) | EN | Example to avoid |
|---|---|---|
| Sarat maklumat | Overloading | 60-paragraph notice with the key consent buried in paragraph 47 |
| Melangkau | Skipping | Cookie banner that closes on click-outside, treating click-outside as consent |
| Perangsangan | Stirring | "Yes, I want a better experience" (consent) vs "No, give me a worse experience" (reject) |
| Menghalang | Obstructing | Reject-all takes 4 clicks; accept-all takes 1 |
| Tidak tetap | Fickle | Different cookie banner each visit |
| Dibiarkan tidak termaklum | Left in the dark | Settings page that does not actually disable processing despite the toggle |

Any of these in a client's notice is a Disclosure / Notice Principle finding plus a DPbD §6.4 finding.

## The exercise

Same MyKedai Sdn Bhd context from Lesson 1. Draft the privacy notice. The notice must:

1. Cover all s7(1) elements for the four processing activities
2. Identify the DPO and provide a contact
3. Provide a layered structure — a one-page top-level notice + a detailed bottom-level notice
4. Be drafted in BM with parallel EN
5. Address consent specifically for marketing (Activity 2) — including the s38 withdrawal mechanism
6. Mention ADMP for the fraud-detection processing (Activity 4) per ADMP §9.3 mandatory disclosure
7. Avoid all six DPbD §6.4 deceptive design patterns

### Sample top-layer notice (EN) — extract

> **MyKedai Sdn Bhd — Privacy Notice (Layered Top Layer)**
>
> **Who we are.** MyKedai Sdn Bhd, 12345 Jalan ABC, Kuala Lumpur. We are the data controller.
>
> **DPO contact.** [Name], dpo@mykedai.com.my, +60 3 1234 5678.
>
> **What data we collect.** Name, contact details, delivery address, order data when you create an account or place an order. Browsing behaviour and basic demographics when you visit our platform (subject to your cookie preferences). Bank account, payroll, and HR data when you are an employee.
>
> **Why we collect it.** (a) To create your account and authenticate you; (b) To process your orders and deliver them to you; (c) To provide customer service; (d) With your consent, for marketing and personalisation; (e) For fraud detection on every transaction (automated risk scoring — see below).
>
> **Who we share it with.** Cloud hosting (AWS Singapore); transactional email (MailChimp US); delivery (Pos Laju); payment processing (Stripe); fraud detection (third-party SaaS hosted in Singapore). Regulators upon lawful request.
>
> **Where we send it.** Singapore (AWS) and the United States (MailChimp). We rely on Standard Contractual Clauses with supplementary measures for these transfers.
>
> **How long we keep it.** Account data for 7 years from account closure (Companies Act 1965 record-keeping). Order data for 7 years from order date (Income Tax Act 1967). Marketing data until you withdraw consent.
>
> **Your rights.** Access, correction, erasure (s43), data portability (s43A), restriction (s44), withdrawal of consent (s38). Contact our DPO to exercise any right.
>
> **About automated decisions.** When you make a transaction, we use a third-party automated fraud-detection system to score the transaction in real time. A high risk score may result in the transaction being blocked or your account being temporarily frozen. If you believe a decision was incorrect, contact our customer service team for human review.
>
> **More detail.** [Link to the detailed bottom-layer notice — at least 6× longer]

### Your turn — produce a parallel BM version

Translate the above to Bahasa Malaysia. Watch for:

- "Data controller" → "pengawal data"
- "DPO" → "Pegawai Perlindungan Data" or "DPO" (both acceptable post-A1727)
- "Consent" → "persetujuan" (not "persetujuan secara nyata" unless sensitive PD)
- "Right of access" → "hak untuk mengakses"
- "Withdraw consent" → "menarik balik persetujuan"

The full bottom-layer notice should expand each section with the s7(1) particulars in full, including the explicit class of third parties (with named entities where possible), specific retention rationale, and the full data subject rights list with the exercise mechanism.

## Common gaps in client privacy notices

The patterns the audit team catches:

1. **Notice delivered after collection** — common pattern: signup form, then "you have just agreed to our privacy policy" link. The s7(1) requirement is "at or before"; "after" fails.
2. **Bundled consent** — "By signing up you agree to our terms, privacy policy, marketing emails, third-party sharing, and AI training." Each of these is a separate matter requiring separate consent.
3. **Pre-ticked boxes** — fails the affirmative-action requirement.
4. **Vague class of recipients** — "our partners" / "our service providers". s7(1)(e) requires specific enough that a reasonable reader can identify recipient types.
5. **No DPO contact** — post-A1727, s12A mandates DPO appointment. The privacy notice should identify the DPO contact channel.
6. **No ADMP disclosure** — for any in-scope ADMP processing, ADMP §9.3 mandates disclosure that ADM is occurring. Many notices silent on this.
7. **No update mechanism** — material changes need re-notification. Many notices say "we may update this notice at any time" without specifying what triggers a re-notification.

## Deliverable

A two-layer privacy notice for MyKedai (top layer + bottom layer), in BM and EN, covering all four processing activities with explicit ADMP disclosure for fraud detection, no deceptive design patterns, and an operational DPO contact. Self-graded against [T2 checkpoint](06-checkpoint.md).

## GDPR parallel

GDPR's information obligation lives in Articles 13 (direct collection) and 14 (indirect collection). The mandatory elements are more extensive than PDPA s7(1) — controller identity, DPO contact, lawful basis (with citation to legitimate-interests basis where applicable), retention period, rights, complaints route to SA, source of data (for Article 14).

EDPB Guidelines on Transparency (Guidelines 2/2017 as adopted) are the operational manual.

Parallel exercise: [GDPR T2 Lesson 2 — Article 13/14 information notices](../../gdpr/t2-practitioner/02-privacy-notice-article13-14.md).

## What's next

[Lesson 3 — Conduct a DEICA DPIA](03-deica-dpia.md). The DPIA is the highest-risk artefact in the consulting toolkit because it gets the most regulator scrutiny.
