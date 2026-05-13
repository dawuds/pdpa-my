# Article 6 lawful bases and Articles 15-22 data subject rights

> **Tier 1 / Lesson 3 — 15 minutes.** The lawful basis test gates every processing activity. The data subject rights gate every operational interaction with the data subject.

## Article 6(1) — the six lawful bases

| Letter | Basis | When used |
|---|---|---|
| (a) | Consent | Marketing; non-essential cookies; biometric authentication for non-mandatory features. Subject to Article 7 conditions of consent |
| (b) | Contract | Performance of a contract with the data subject (delivery, service provision, account management) |
| (c) | Legal obligation | Tax records, employment law records, AML/KYC, regulatory reporting |
| (d) | Vital interests | Life-threatening emergencies (paramedic disclosure); rare in commercial work |
| (e) | Public task | Public authorities exercising official authority; some regulated industries with public-interest mandate |
| (f) | Legitimate interests | Fraud prevention, internal administration, group-company HR processing, B2B marketing within reasonable expectations |

Each lawful basis has gating conditions. Public bodies cannot rely on legitimate interests (Article 6(1) final paragraph). Special category data (Article 9) requires both an Article 6 basis AND an Article 9(2) condition.

## Article 7 — conditions of consent

Consent must be:
- **Freely given** — no coercion, no detrimental consequence for refusal, no bundling with contractual necessity
- **Specific** — tied to a defined purpose, separated from other matters
- **Informed** — preceded by clear information (Articles 13/14)
- **Unambiguous** — affirmative action (no pre-ticked boxes, no implied consent from inaction)
- **Withdrawable** — withdrawal must be as easy as giving consent (Article 7(3))
- **Demonstrable** — the controller must be able to evidence consent was given (Article 7(1))

For special category data, consent must be **explicit** — affirmative, unambiguous, specifically identifying the special category. A general "I consent to all processing" does not work for Article 9 data.

## The legitimate-interests three-part test

When relying on Article 6(1)(f) legitimate interests, the controller must pass:

1. **Purpose test** — Is there a legitimate interest pursued by the controller or a third party?
2. **Necessity test** — Is the processing necessary for that purpose? (Not just useful — necessary.)
3. **Balancing test** — Do the data subject's interests, rights, and freedoms override the legitimate interest? Considering: reasonable expectations, age (children require greater protection), processing context, nature of data, consequences.

Documentation: a Legitimate Interests Assessment (LIA) for each processing activity relying on (f). SAs ask for the LIA during inspection. No LIA, no defensible basis.

## The eight data subject rights

| Right | Article | Practical scope |
|---|---|---|
| Information | 13, 14 | Provided at collection (13) or within one month if indirect (14). Mandatory information elements specified |
| Access | 15 | Receive a copy of the data + processing details; within one month (extendable to three for complexity) |
| Rectification | 16 | Correct inaccurate data; propagate to recipients |
| Erasure (right to be forgotten) | 17 | Erase where purpose no longer applies, consent withdrawn, processing unlawful, etc.; subject to exceptions (freedom of expression, legal claims, public interest) |
| Restriction of processing | 18 | Mark data restricted pending dispute resolution; restricted data may only be stored, not processed |
| Notification (rectification / erasure / restriction) | 19 | Controller notifies recipients of any rectification / erasure / restriction |
| Data portability | 20 | Receive data in structured, commonly-used, machine-readable format; transmit to another controller where technically feasible. Applies only to data provided by subject under consent or contract |
| Object | 21 | Object to processing based on legitimate interests (Article 6(1)(e) or (f)) or for direct marketing (absolute right for marketing) |
| Solely automated decisions | 22 | Right not to be subject to a decision based solely on automated processing producing legal or similarly significant effects |

The big-ticket implementation challenges are erasure (technical propagation), portability (data egress in standardised format), and Article 22 (which we cover in [GDPR Article 22 deep-dive](../articles/article-22-automated-decisions.md)).

## Article 22 — automated individual decision-making

Article 22(1): "The data subject shall have the right not to be subject to a decision based **solely** on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her."

The exceptions (Article 22(2)):
- (a) necessary for entering into / performing a contract;
- (b) authorised by Union or Member State law;
- (c) based on the data subject's **explicit consent**.

Even when an exception applies, the controller must implement "suitable measures to safeguard the data subject's rights and freedoms and legitimate interests" — at least the right to obtain human intervention, express his or her point of view, and contest the decision (Article 22(3)).

For special category data (Article 9), automated decisions are only allowed under Article 22(4) with stricter conditions.

The WP29 (now EDPB) Guidelines on Automated Individual Decision-Making and Profiling are the canonical interpretation.

## PDPA parallel — what is similar and what differs

| GDPR feature | PDPA equivalent | Notes |
|---|---|---|
| Article 6 lawful basis | Act 709 s6 (consent + s6(2) alternative grounds) | PDPA's alternative grounds are narrower than GDPR's |
| Article 7 conditions of consent | Act 709 s6 (general); s40 (sensitive PD explicit consent) | PDPA does not codify Article 7 to the same degree; the JPDP DPbD Guideline §6.4 covers some of the same ground (anti-deceptive-design) |
| Article 15 access | s30-s33 | Direct equivalent; PDPA has 21-day response window |
| Article 16 rectification | s34-s36 | Direct equivalent |
| Article 17 erasure | s43 (NEW under A1727) | Direct equivalent post-A1727 |
| Article 18 restriction | s44 (NEW under A1727) | Direct equivalent post-A1727 |
| Article 20 portability | s43A (NEW under A1727) | Direct equivalent post-A1727 |
| Article 21 object | Limited s38 withdrawal of consent | Narrower in PDPA; right to object outside of consent withdrawal is not codified |
| Article 22 automated decisions | JPDP ADMP Guideline (issued April 2026) | PDPA has no statutory Article 22 equivalent; the ADMP Guideline anchors data subject mechanisms in s7 notice + s38 withdrawal — NOT a standalone right to refuse |
| Article 13/14 information | s7(1)(a)-(f) | PDPA has six mandatory elements; GDPR has more (controller identity, retention period, rights, complaints route, etc.) |

The biggest difference at the rights level: **GDPR has eight enumerated rights with a coherent doctrinal structure; PDPA has the same broad rights post-A1727 but with weaker doctrinal coherence**. The ADMP Guideline in particular is narrower than Article 22 — see [PDPA T1 Lesson 4](../../pdpa/t1-orientation/04-issued-vs-pcp.md) for why.

Parallel reading: [PDPA T1 Lesson 3 — A1727 in 15 minutes](../../pdpa/t1-orientation/03-a1727.md).

## What's next

[Lesson 4 — EDPB Guideline discipline](04-edpb-guideline-discipline.md). The citation hierarchy that separates a defensible finding from a blog-derived one.
