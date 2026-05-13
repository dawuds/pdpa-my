# The 7 PDP Principles in 15 minutes

> **Tier 1 / Lesson 2 — 15 minutes.** Internalise this. Every audit finding, every gap assessment, every privacy notice walks back to one of these seven.

## The principles, with the statutory hook

| # | Principle | Section | One-line summary |
|---|---|---|---|
| 1 | General | s6 | Lawful basis for processing — consent or one of the s6(2) alternative grounds; processing must relate to a lawful purpose directly related to the controller's activity |
| 2 | Notice and Choice | s7 | Disclose the six s7(1)(a)-(f) particulars to the data subject before or at the time of collection |
| 3 | Disclosure | s8 | Disclose personal data only for the purpose stated to the data subject or a directly related purpose, and only to the class of third parties identified in the notice |
| 4 | Security | s9 | Take practical steps to protect personal data against loss, misuse, modification, unauthorised or accidental access or disclosure |
| 5 | Retention | s10 | Keep personal data only as long as necessary for the purpose for which it was processed; destroy or anonymise when no longer needed |
| 6 | Data Integrity | s11 | Take reasonable steps to ensure personal data is accurate, complete, not misleading, and kept up to date |
| 7 | Access | s12 | Provide data subjects with access to their data and the right to correct it (expanded post-A1727 — see Lesson 3) |

## Where each one actually bites in practice

**General (s6).** This is the principle that catches "we just collected this because we could." Lawful basis must be identified per processing activity, not per controller. A retail loyalty programme has multiple bases — contract (delivering the loyalty service), consent (marketing), and legitimate interest (fraud prevention) — each scoped to a different data set. Bundled "you consent to everything by signing up" notices fail under General Principle scrutiny because the consent quality is not specific.

**Notice and Choice (s7).** The six mandatory particulars are: (a) description of personal data being processed; (b) purpose; (c) source of data (if collected indirectly); (d) right of access and correction; (e) class of third parties to whom data may be disclosed; (f) whether data provision is obligatory or voluntary and consequences of failure to supply. Missing any one of these is a Notice Principle gap. The post-A1727 Privacy Notice Quick Guide (2025) clarifies layered-notice patterns are acceptable as long as the layered structure is genuinely informative, not a buried-link dodge.

**Disclosure (s8).** Disclosure to a class of third parties not named in the privacy notice is a strict breach. The class must be specific enough to be meaningful ("our cloud hosting provider" is acceptable; "our partners" is not). Disclosure for a directly-related purpose is permitted (e.g., the bank's fraud detection vendor) but not for an unrelated purpose (e.g., the same vendor's marketing arm).

**Security (s9).** Post-A1727, s9 extends to data processors. Before A1727, only controllers had statutory security duties; processors were bound only contractually. Now processors are independently liable. The Personal Data Protection Standards 2015 (the security/storage/integrity standards) operationalise s9 — auditors reference the Standards for the minimum control set.

**Retention (s10).** "As long as necessary for the purpose" is the rule. Indefinite retention without justification is a breach. Common gaps: marketing databases that retain inactive customers for 10+ years; system backups that retain personal data after the live record is purged; "we might need it for litigation" without a documented hold.

**Data Integrity (s11).** "Reasonable steps" — not strict liability. Validate at collection; provide a correction pathway; rectify on data-subject request without delay. Audit-bite: most controllers have validation at collection but no periodic-accuracy review, and most struggle to evidence correction propagation to third parties to whom the data was previously disclosed.

**Access (s12).** Data subjects can request access to their data and correction. Post-A1727 this expands materially (Lesson 3 covers the new rights — portability, erasure, restriction).

## A1727's expansion to processors

A1727's most operational change to the principles is **expanding s9 (Security) to processors**. Pre-A1727, a controller's security obligation flowed to a processor only via contract; post-A1727 the processor is independently liable under s9 and can be prosecuted directly. This changes how Data Processing Agreements (DPAs) are negotiated — processors will resist accepting unbounded liability for matters they could already be prosecuted for separately.

The other A1727 expansion is **registering DPO under s12A** — covered in Lesson 3.

## What this lesson does not tell you

Each principle has nuance and sectoral overlay. Banking and healthcare have additional principle interpretations in their sectoral CoPs. Sensitive personal data (s40) overlays additional consent and security requirements. See [pdpa-my/principles/](../../../principles/) for the data-layer detail per principle, and [pdpa-my/supplements/codes-of-practice/](../../../supplements/codes-of-practice/) for sectoral CoP variants.

## GDPR parallel

GDPR Article 5 lists **six principles** plus an over-principle of accountability. The mapping is not 1:1:

| PDPA Principle | GDPR Article 5 equivalent | Notes |
|---|---|---|
| General (s6) | Article 5(1)(a) lawfulness, fairness, transparency + Article 5(1)(b) purpose limitation | GDPR splits PDPA's General Principle into lawful-basis (5(1)(a)) and purpose-limitation (5(1)(b)) |
| Notice and Choice (s7) | Article 5(1)(a) transparency + Articles 13/14 information obligations | GDPR puts the obligation in Articles 13/14 with greater detail than PDPA s7(1)(a)-(f) |
| Disclosure (s8) | No direct equivalent — absorbed into Article 6 lawful basis + purpose limitation | GDPR has no separate Disclosure Principle |
| Security (s9) | Article 5(1)(f) integrity and confidentiality + Article 32 security of processing | GDPR Article 32 is far more prescriptive than PDPA s9 |
| Retention (s10) | Article 5(1)(e) storage limitation | Direct equivalent |
| Data Integrity (s11) | Article 5(1)(d) accuracy | Direct equivalent |
| Access (s12) | Articles 15-22 (data subject rights) | GDPR enumerates eight distinct rights; PDPA s12 is narrower pre-A1727 and broader post-A1727 |
| *(no PDPA equivalent)* | Article 5(2) accountability | GDPR's accountability over-principle has no formal PDPA equivalent — this is the largest structural difference |

The biggest substantive gap: **GDPR's accountability principle requires the controller to be able to demonstrate compliance**, not just be compliant. PDPA has no equivalent codification — though A1727's RoPA (s138), DPIA (s137), and DPO (s12A) effectively create demonstrable accountability through other means.

Parallel reading: [GDPR T1 Lesson 2 — Article 5 in 15 minutes](../../gdpr/t1-orientation/02-six-principles.md).

## What's next

[Lesson 3 — A1727 in 15 minutes](03-a1727.md). A1727 is the most important PDPA change since the original Act; this is where the four new rights, breach notification, DPO, and cross-border reforms live.
