# Exercise — Article 33 / 34 breach notifications

> **Tier 2 / Lesson 4 — 90 minutes.** Parallel to PDPA T2 Lesson 4. Deliverable: an Article 33 SA notification + an Article 34 data subject communication for a worked ransomware scenario.

## The two-tier notification framework

| Article | Recipient | Trigger | Clock |
|---|---|---|---|
| **Art 33** | Supervisory Authority | "Likely to result in a risk to the rights and freedoms of natural persons" | 72 hours from awareness (without undue delay) |
| **Art 34** | Data subjects | "Likely to result in a high risk to the rights and freedoms of natural persons" | Without undue delay |

The "likely to result in a risk" threshold for Article 33 is lower than the "high risk" threshold for Article 34. Most notifiable breaches require Article 33 notification but only the more severe also require Article 34 subject communication.

## What counts as a personal data breach

Article 4(12): "a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed."

Three breach types (per EDPB Guidelines 9/2022):

- **Confidentiality breach** — unauthorised or accidental disclosure of, or access to, personal data
- **Integrity breach** — unauthorised or accidental alteration of personal data
- **Availability breach** — accidental or unlawful loss of access to, or destruction of, personal data

A ransomware attack typically combines all three: encryption is an availability breach, the threat actor's access is a confidentiality breach, and any tampering is an integrity breach.

## Harm-likelihood assessment

EDPB Guidelines 9/2022 (replacing the earlier WP250 rev.01) provide the assessment framework:

| Factor | Considerations |
|---|---|
| Type of breach | Confidentiality / integrity / availability — confidentiality typically the highest |
| Nature, sensitivity, volume of data | Special category data (Article 9) raises the risk substantially |
| Identifiability | Pseudonymised with re-identification possible vs raw identifiers |
| Severity of consequences | Identity theft, financial loss, physical safety, reputational damage |
| Special characteristics of subjects | Children, employees, patients raise the bar |
| Special characteristics of controller | Healthcare provider, bank, government — risk perception differs |
| Number of subjects affected | More subjects → broader societal harm |

The output is a Yes/No on each notification arm. The assessment must be documented under Article 33(5) regardless of whether notification is filed.

## The Article 33(5) all-breach documentation obligation

Even where Article 33 SA notification is NOT triggered, the controller must **internally document the breach** including facts, effects, and remedial action. This documentation enables the SA to verify compliance.

This is the GDPR feature that has no PDPA equivalent. PDPA s12B notifies notifiable breaches; non-notifiable breaches are not formally required to be documented (though best practice is to do so).

## The exercise

Same MyBank EU Limited scenario — Irish retail banking subsidiary. The bank is hit with the same ransomware attack as the PDPA exercise, affecting 25,000 EU customers via the e-KYC platform.

### Timing

| Time | Action |
|---|---|
| 08:00 Mon | Notified by CISO |
| 08:00 Thu (T+72h) | Article 33 SA notification due (DPC Ireland — lead SA) |
| 08:00 Thu (T+72h) onwards | Article 34 subject communication — "without undue delay" |

Note: GDPR has no codified data-subject-notification clock equivalent to PDPA's 7 days. "Without undue delay" is the standard; in practice 7-10 days is typical and 30+ days has been challenged by SAs.

### Lead SA via one-stop-shop

For cross-border processing, the controller notifies the **lead supervisory authority** — typically the SA of the main establishment. MyBank EU Limited is established in Ireland → DPC Ireland is the lead SA.

For breaches affecting subjects in other EU jurisdictions, concerned SAs are notified by DPC under the cooperation procedure (Article 60). The controller does NOT directly notify multiple SAs — only the lead.

### Draft 1 — Article 33 notification to DPC Ireland

Article 33(3) required information:

| Element | Sample entry |
|---|---|
| (a) Nature of breach + categories of subjects and data + approximate numbers | Ransomware encryption + suspected exfiltration of e-KYC database; ~25,000 retail customers; categories: identification (name, EU national ID, address, contact), biometric (facial template), financial (declared source of funds) |
| (b) Name and contact of DPO | [Name], dpo@mybank.eu, +353 [number] |
| (c) Likely consequences | Identity theft; financial fraud; biometric-template misuse risk; reputational and emotional harm |
| (d) Measures taken or proposed | Containment: systems isolated, threat-actor C2 blocked at firewall, affected accounts temporarily locked; forensic engagement: external IR firm engaged; restoration: backup restoration in progress (last good backup 2026-05-10 23:00); Article 34 subject communication planned for [date]; review of perimeter security and endpoint detection following forensic findings |

The notification is filed via DPC's online breach notification system. Late notification (post-72h) must include reasons for the delay (Article 33(1) second sentence).

### Draft 2 — Article 34 communication to affected data subjects

Article 34(2) required information:

| Element | Sample text |
|---|---|
| Nature of breach (plain language) | "On the evening of 11 May 2026, MyBank EU Limited's customer onboarding database was the subject of a ransomware attack. We detected the incident on the morning of 13 May 2026 and immediately notified the Data Protection Commission." |
| DPO contact | "Our Data Protection Officer is [Name]. Contact: dpo@mybank.eu" |
| Likely consequences | "Your name, EU national ID number, contact details, address, and the biometric data captured during your e-KYC onboarding were among the data potentially exfiltrated by the threat actor. This data could be used for identity theft, financial fraud, or biometric-template misuse." |
| Measures taken | "We have isolated affected systems, engaged external forensic experts, restored services from offline backup, notified the DPC, and are working with law enforcement." |
| Recommended actions for the subject | "(i) Monitor your bank statements and credit reports. (ii) Be alert to phishing attempts. (iii) If you suspect fraudulent activity, contact us immediately. (iv) You have the right to lodge a complaint with the DPC at www.dataprotection.ie." |

Communication channel: direct communication to each subject — email, postal, in-app, dual-track. A public statement on the website is supplementary, not a substitute (Article 34(3)(c) exception is narrow).

### Article 34(3) exceptions

Article 34(3) permits the controller to skip Article 34 communication if:

- (a) The controller applied appropriate technical and organisational protection measures that rendered the data unintelligible (e.g., strong encryption with no key compromise)
- (b) The controller has taken subsequent measures that ensure the high risk is no longer likely
- (c) Communicating would involve disproportionate effort — in which case a public communication or similar measure is required

The ransomware scenario typically does NOT meet (a) — encryption-at-rest with controller-held keys protects against passive theft of storage media but not against an attacker with active access. (b) is fact-specific. (c) is narrow.

## Common gaps

1. **No incident response plan** — same pattern as PDPA exercise.
2. **Awareness timestamp not documented** — Article 33(1) second sentence imposes reasoned explanation for any post-72h notification; without timestamp documentation the controller cannot defend.
3. **Wrong SA notified** — non-lead SA notified instead of lead SA via OSS. Possible but adds complexity; lead SA is the default.
4. **Article 33(5) all-breach documentation skipped** — controllers document only notifiable breaches; non-notifiable breaches go undocumented. Article 33(5) is universal.
5. **Article 34 communication mass-mailed too generic** — does not specify the data subject's specific affected data or specific recommended actions.
6. **Joint controller arrangements unclear** — if joint controllership exists, the JCA should specify who handles the notification.

## Deliverable

Article 33 DPC notification + Article 34 subject communication for the MyBank EU Limited ransomware scenario. Self-graded against [T2 checkpoint](06-checkpoint.md).

## PDPA parallel

The structural overlap is high — both regimes use a 72-hour SA clock and a high-risk data-subject communication trigger. Differences:

| | GDPR | PDPA |
|---|---|---|
| SA clock | 72h (Art 33) | 72h (s12B + JPDP DBN Guideline) |
| Data subject clock | "Without undue delay" (Art 34) | 7 days (JPDP DBN Guideline) |
| Threshold for SA notification | "Likely to result in a risk" | "Likely to cause significant harm" |
| Threshold for subject notification | "High risk" | "Significant harm likely" |
| Documentation of all breaches | Art 33(5) explicit | Not codified |
| Lead SA mechanism | Yes — OSS Art 56 | Not applicable (single regulator) |

Where the client has both EU and Malaysian exposure, design the breach response to comply with the stricter / faster of each — typically 72h to both regulators in parallel, "without undue delay" but no later than 7 days to data subjects.

Parallel exercise: [PDPA T2 Lesson 4 — s12B breach notification](../../pdpa/t2-practitioner/04-breach-notification.md).

## What's next

[Lesson 5 — Article 40 Codes of Conduct](05-codes-of-conduct-article40.md).
