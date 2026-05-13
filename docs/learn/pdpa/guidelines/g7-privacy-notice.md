# JPDP Privacy Notice Guides (2022 + 2025) — section-by-section deep-dive

> **Deep-dive reference.** Source PDFs: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guide-Privacy-Notice-Preparation-2022.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guide-Privacy-Notice-Preparation-2022.pdf) (2022 Preparation Guide) and [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guide-Quick-Privacy-Notice-2025.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guide-Quick-Privacy-Notice-2025.pdf) (2025 Quick Guide).

## Statutory anchor

Section 7 of Act 709 — the Notice and Choice Principle:

> "A data user shall by written notice inform a data subject..."

The s7(1) elements are six mandatory particulars. The 2022 Privacy Notice Preparation Guide is the detailed how-to; the 2025 Quick Guide is the concise practitioner reference.

Both Guides remain in force; the 2025 Quick Guide is the more recent practical reference but does not supersede the 2022 detailed guide.

## The six s7(1) mandatory particulars (re-stated from T1 Lesson 2)

| Letter | Particular | Practical reading |
|---|---|---|
| (a) | Description of the personal data being processed | Categories, not just names |
| (b) | Purpose of the processing | Specific, explicit, legitimate; each purpose described separately |
| (c) | Source of the data | Required where data is collected indirectly (from a third party) |
| (d) | Right of access and correction + how to exercise | DPO / privacy contact + request channel |
| (e) | Class of third parties to whom data may be disclosed | Specific enough to be meaningful |
| (f) | Whether providing the data is obligatory or voluntary, and consequences of failure | "If you do not provide your delivery address, we cannot deliver your order" |

## Additional obligations beyond s7(1) — what the Guides add

The 2022 and 2025 Guides expand s7(1) with practical expectations:

### Timing

Notice must be provided **before or at the time of collection**, not after. The Guides explicitly reject after-collection notification.

For online flows: the notice must be shown before the data submission button is active. A flow that processes data and then displays a "you have just agreed to our privacy policy" link fails the test.

### Language

**Bahasa Malaysia minimum**, English typically as a parallel version. Where the data subject population prominently includes other linguistic communities (Mandarin, Tamil), serious controllers add those.

The Guides do not prescribe a single canonical language — the test is whether the data subject can reasonably understand. For consumer-facing notices, BM + EN is the floor.

### Accessibility

Clear, plain language. Avoid legalese where plain BM or plain EN will do. The 2025 Quick Guide emphasises that a "lawyer-friendly" notice that ordinary subjects cannot understand is non-compliant.

The Guides recommend:
- Plain language at roughly Form 5 / 16-year-old reading level
- Short sentences
- Headings and bullet structure
- Layered notice approach for complex processing (top-layer summary + bottom-layer detail)

### Layered notice patterns

Layered notices are acceptable provided the layered structure is genuinely informative — not a buried-link dodge.

A defensible layered notice:
- Top layer (1 page): summarises the six s7(1) elements; identifies the DPO; clear "more detail" link
- Bottom layer (long form): full detail; covers every processing activity; statutory cross-references

A non-defensible layered notice:
- Top layer: "We process your data" + "click here to learn more"
- Bottom layer: 60 paragraphs of legalese; key consent buried in paragraph 47

The bottom layer must actually inform; the top layer must actually summarise; the navigation must actually work.

### Consent flow linkage

Where the lawful basis is consent (s6(2)(a)), the notice and consent mechanism are tightly linked. The 2022 Guide expects:

- Consent specifically for each purpose, not bundled
- Affirmative action (no pre-ticked boxes)
- Easy withdrawal mechanism (s38)
- Consent records evidencing the specific consent

### Updates

Material changes to processing require re-notification. The Guides do not prescribe a specific re-notification timeline but expect:

- New purposes → fresh consent
- New recipient categories → updated notice + (where consent is the basis) fresh consent
- Material changes in cross-border destinations → updated notice

A change in cosmetic wording without substance change does not require re-notification.

## The DPbD §6.4 deceptive design patterns overlay

The April 2026 DPbD Guideline §6.4 imposes additional notice-design rules. The six prohibited patterns:

| BM | EN | Example to avoid |
|---|---|---|
| Sarat maklumat | Overloading | 60-paragraph notice with key consent buried |
| Melangkau | Skipping | Cookie banner closing on click-outside counted as consent |
| Perangsangan | Stirring | "Yes I want a better experience" vs "No I want a worse experience" |
| Menghalang | Obstructing | Reject-all takes 4 clicks; accept-all takes 1 |
| Tidak tetap | Fickle | Different banner each visit |
| Dibiarkan tidak termaklum | Left in the dark | Toggle that doesn't actually disable processing |

A privacy notice that complies with s7(1) and the 2022 / 2025 Guides but uses these deceptive patterns is still non-compliant — under DPbD §6.4 + the Notice and Choice principle.

## The ADMP §9.3 disclosure overlay (post-April 2026)

For controllers using automated decision-making within the Ambang ADMP threshold (legal / significant effects), the privacy notice must disclose **the FACT that ADM / profiling is involved** (ADMP §9.3 — mandatory). 

Logic explanation is permissive (§9.4 — `boleh`) with carve-outs for confidential information, trade secrets, IP, and proprietary rights. But the FACT of ADM disclosure is mandatory and codified.

Pre-April-2026 privacy notices typically did not include this disclosure. Post-April-2026 a notice without §9.3 disclosure is a notice gap.

## What the 2025 Quick Guide adds beyond the 2022 Guide

The 2025 Quick Guide:

- Codifies layered-notice acceptance (the 2022 Guide allowed it; the 2025 explicitly endorses it)
- Adds the DPO contact as an expected notice element (post-A1727 DPO mandatory)
- Confirms that the rights catalogue in the notice should reflect post-A1727 expansion (erasure, portability, restriction)
- Addresses the ADMP disclosure obligation by cross-referencing the (then-anticipated) ADMP Guideline
- Adds template patterns for sectoral notices (banking, healthcare, telco)

The Quick Guide is the "operational summary" — defensible to follow for typical commercial notices. The 2022 Guide is the detailed reference for novel or complex notices.

## Common notice-drafting gaps

The patterns the audit team catches:

1. **Notice delivered after collection** — common in checkout flows + onboarding flows
2. **Bundled consent** — "by signing up you agree to T&Cs + privacy policy + marketing + third-party sharing + AI training" — each requires separate consent
3. **Pre-ticked boxes** — fails affirmative-action requirement
4. **Vague class of recipients** — "our partners" / "our service providers" — too vague for s7(1)(e)
5. **No DPO contact** — post-A1727 the DPO is mandatory; the notice should disclose
6. **No ADMP disclosure** — post-April-2026 §9.3 mandatory disclosure missing
7. **Pre-A1727 rights list** — notice covers access + correction only; missing erasure / portability / restriction (s43 / s43A / s44)
8. **No update mechanism specified** — "we may update this notice at any time" without specifying what triggers a re-notification
9. **Layered notice with buried-link bottom layer** — DPbD §6.4 "overloading" pattern
10. **Single language** — BM-only or EN-only without parallel version

## Deliverable for this guideline

Run a privacy notice review on a real client notice (or a fictitious one for practice). Identify:

1. s7(1) element completeness (six particulars)
2. Layered structure quality
3. DPbD §6.4 deceptive design check
4. ADMP §9.3 disclosure (where applicable)
5. Post-A1727 rights catalogue completeness
6. Language coverage
7. DPO contact disclosure
8. Update mechanism specification

Produce a remediation memo with specific text recommendations.

## GDPR parallel

GDPR Articles 13 / 14 are the equivalents but more prescriptive:

| GDPR Article 13(1)+(2) elements | PDPA s7(1) equivalent | Notes |
|---|---|---|
| Controller identity + contact | Implicit | GDPR explicit |
| DPO contact | (added by Quick Guide) | PDPA evolving via guideline |
| Purpose + lawful basis | s7(1)(b) | GDPR adds lawful-basis citation |
| Legitimate interest pursued (where Art 6(1)(f) or PDPA s6(2)(g)) | Implicit in s7(1)(c) purpose | Both regimes codify legitimate interests; GDPR requires explicit disclosure of the interest pursued, PDPA does not codify the disclosure requirement but the Privacy Notice Guides recommend it |
| Recipients categories | s7(1)(e) | Direct equivalent |
| Third-country transfers + safeguards | (implicit) | GDPR explicit |
| Retention period | (no PDPA equivalent in s7(1)) | PDPA expected via Guides but not s7(1) |
| Rights | s7(1)(d) (limited) | GDPR has 8 rights; PDPA has 7 post-A1727 |
| Right to lodge complaint to SA | (no PDPA equivalent) | GDPR explicit |
| Whether obligatory + consequences | s7(1)(f) | Direct equivalent |
| Automated decision disclosure | (added by ADMP §9.3) | GDPR Article 13(2)(f) |
| Source (for indirect collection) | s7(1)(c) | GDPR Article 14(2)(f) |

For dual-regime notices, design for GDPR (the more prescriptive). That satisfies PDPA automatically.

Parallel reading: [GDPR Articles 13/14 deep-dive](../../gdpr/articles/articles-13-14-information.md).

## Cross-references

- Audit programme: [`Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md) §3 (Notice procedures)
- T2 exercise: [PDPA T2 Lesson 2 — privacy notice draft](../t2-practitioner/02-privacy-notice-draft.md)
- DPbD §6.4 deceptive patterns: [g2 DPbD deep-dive](g2-dpbd.md)
- ADMP §9.3 disclosure: [g3 ADMP deep-dive](g3-admp.md)
- Source PDFs: 2022 Preparation Guide + 2025 Quick Guide

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Aligned with 2022 Privacy Notice Preparation Guide + 2025 Quick Guide + cross-reference to DPbD §6.4 + ADMP §9.3. |
