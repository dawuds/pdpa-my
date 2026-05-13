# Exercise — draft a s12B breach notification

> **Tier 2 / Lesson 4 — 90 minutes.** Deliverable: a Commissioner notification + a data subject notification for a worked ransomware scenario, drafted under realistic time pressure.

## The clocks you're racing

| Notification | Recipient | Clock | Source |
|---|---|---|---|
| s12B(1) | Personal Data Protection Commissioner | **72 hours** from awareness of a notifiable breach | A1727 + JPDP DBN Guideline 2025 |
| s12B(3) | Data subjects affected (where significant harm likely) | **7 days** from notification to Commissioner | JPDP DBN Guideline 2025 |
| NACSA Act 854 s26 | NC4 (where the entity is an NCII operator) | **6 hours** from awareness | NACSA Act 854 |
| RMiT (where bank or financial institution) | BNM | Various per RMiT — usually 24 hours | BNM RMiT Policy Document |

For NCII clients, the 6-hour NACSA clock expires before any other. Programme design must reconcile this in advance; you cannot start a 6-hour drill at hour 4.

## What counts as a notifiable breach

A "personal data breach" under s12B is broader than a ransomware lock-out. It includes:

- Unauthorised access or disclosure (data exfiltration, insider snooping, misdirected emails)
- Loss of availability (ransomware encrypting personal data, data centre fire destroying records)
- Unauthorised alteration (malicious modification of personal records)
- Misdirection (physical mail to wrong address, email cc'ing the wrong recipient, system bug exposing wrong subjects' data)

A breach is **notifiable** under the JPDP DBN Guideline 2025 where it is "likely to cause significant harm" to data subjects. The harm-likelihood assessment is the gating step.

### Harm-likelihood factors (per JPDP DBN Guideline)

- Nature of data — sensitive PD raises the bar; biometric / financial / health particularly so
- Volume affected
- Identifiability — pseudonymised data with re-identification possible vs fully anonymised vs raw
- Containment — has the breach been contained or is data still exposed
- Likelihood of misuse — public exposure vs limited audience vs encrypted-and-undecrypted
- Severity of potential harm — identity theft, financial loss, physical safety, reputational damage, discrimination

Not every minor incident is notifiable. A misdirected internal email between two staff members in the same department, fully retracted within minutes, with no exfiltration, is typically not notifiable. A ransomware attack encrypting customer transaction data with credible exfiltration evidence is notifiable.

## The exercise

You are the DPO of **MyBank Berhad** (continuing from Lesson 3 e-KYC scenario). At **08:00 on Monday**, the CISO calls. Overnight, a ransomware attack encrypted the customer onboarding database. The threat actor claims to have exfiltrated 25,000 records, including names, NRICs, addresses, contact details, and biometric templates from the e-KYC platform. The bank's incident response team is engaged.

MyBank is an NCII entity under Act 854 (banking is a designated NCII sector). MyBank is also subject to BNM RMiT.

### Your timing

| Time | Action |
|---|---|
| 08:00 Mon | Notified by CISO |
| 14:00 Mon (T+6h) | **NACSA notification due** — NC4 portal |
| 08:00 Thu (T+72h) | **JPDP notification due** — Commissioner |
| 15:00 Thu (T+72h+7h via RMiT) | BNM notification per RMiT |
| 08:00 next Thu (T+72h+7d) | **Data subject notification due** — to the 25,000 affected customers |

The NACSA notification expires first by far. The bank's incident response team handles that — the DPO supports.

### Draft 1 — JPDP Commissioner notification (T+72h)

Required information per the JPDP DBN Guideline 2025:

| Element | Sample entry |
|---|---|
| Data controller | MyBank Berhad, Registration No: 192501012345; DPO contact: dpo@mybank.com.my, +60 3 XXXX XXXX |
| Date and time of awareness | 2026-05-13 08:00 |
| Date and time the breach occurred (estimated) | Estimated 2026-05-11 22:00 (forensic estimate) |
| Nature of the breach | Ransomware encryption + suspected exfiltration of customer onboarding database |
| Categories of data affected | (i) Identification (name, NRIC, DOB, address, contact); (ii) Sensitive PD (biometric templates); (iii) Financial information (declared source of funds) |
| Number of data subjects | Estimated 25,000 affected (full forensic count pending) |
| Number of records | Estimated 25,000 customer records |
| Likely consequences | Identity theft, financial fraud, biometric-template misuse if the threat actor decrypts and publishes; reputational and emotional harm |
| Measures taken | (i) Containment: affected systems isolated, threat-actor C2 blocked at firewall; (ii) Forensic engagement: external IR firm engaged; (iii) BNM notification per RMiT; (iv) NACSA notification per Act 854 s26 (already filed at T+6h); (v) Data subject notification planned for T+72h+7d; (vi) Restoration: backup restoration in progress (offline backups intact, last good backup 2026-05-10 23:00) |
| Measures to address future risk | (i) Forensic root cause analysis pending; (ii) Anticipate review of perimeter security, endpoint detection, backup architecture, segmentation; (iii) PDPA Standards 2015 baseline already met; review against post-incident recommendations |
| Contact for further information | [DPO name], [contact] |

The notification is filed via the JPDP online channel. Note: the 72-hour clock starts at **awareness of a notifiable breach**, not at detection. If awareness is delayed by triage time, document the awareness timestamp specifically.

### Draft 2 — data subject notification (T+72h + up to 7d)

Required information:

| Element | Sample text |
|---|---|
| What happened | "On the evening of 11 May 2026, MyBank Berhad's customer onboarding database was the subject of a ransomware attack with suspected exfiltration of personal data. We detected the incident on the morning of 13 May 2026 and immediately notified the Personal Data Protection Commissioner and NACSA." |
| What data was affected | "Your name, NRIC, date of birth, address, contact details, and the biometric template captured during your e-KYC onboarding were among the data potentially exfiltrated by the threat actor." |
| What we are doing | "We have contained the incident, engaged external forensic experts, restored services from offline backup, and reported to all relevant regulators. We are working with law enforcement and considering decryption-key options independently of any ransom demand." |
| What you should do | "(i) Monitor your bank statements and credit reports for suspicious activity. (ii) Be alert to phishing attempts referencing your NRIC or address — we will never ask you to provide your NRIC by email or SMS. (iii) If you suspect fraudulent activity on your MyBank account, contact us immediately on +60 3 XXXX XXXX or use the 'Report Fraud' button in the MyBank app. (iv) Consider activating credit-bureau monitoring if you do not already use it." |
| Our contact for this incident | [DPO contact + dedicated incident email + dedicated incident hotline] |
| Further information | "Updates will be posted at mybank.com.my/incident-update. Translated versions of this notification are available in BM, Mandarin, and Tamil." |

Notification channel: dual-track — email to all affected customers AND SMS for those whose contact email is on hold/bounced, with the option to verify identity and access the full notification in branch.

### Tabletop reflection — the parallel clocks

A consultant supporting this client needs to think about three parallel workflows:

1. **NACSA notification (T+6h)** — bank's IR team leads; DPO supports
2. **JPDP notification (T+72h)** — DPO leads
3. **Data subject notification (T+72h + 7d)** — DPO + communications + customer service co-lead

Each has a different audience and a different objective. Confusing them (e.g., sending the JPDP notification to data subjects, or vice versa) is a separate compliance failure.

## Common gaps

The patterns the audit team catches:

1. **No breach response plan** — programme has policies but no operational runbook. A 72-hour clock with no playbook is unrecoverable.
2. **Awareness timestamp not documented** — clock starts at "awareness of a notifiable breach", not detection. Without timestamp documentation, defending the 72h window becomes a "when did you know?" argument.
3. **Harm-likelihood assessment skipped** — controller notifies for everything (notification fatigue) or notifies for nothing (under-notification). Both are problems.
4. **No NACSA/JPDP clock reconciliation for NCII clients** — most have an IT-security breach plan and a separate PDPA breach plan with no integration.
5. **Data subject notification template not pre-drafted** — drafting under T+96h pressure with translation needs is brittle.
6. **No tabletop drilling** — the first time the team runs the 72-hour clock should not be the day of a real incident.

## Deliverable

Both notifications drafted (Commissioner + data subject) for the MyBank scenario. Tabletop the parallel-clock timeline. Self-graded against [T2 checkpoint](06-checkpoint.md).

## GDPR parallel

GDPR Articles 33 / 34 are the equivalents. The mapping:

| PDPA s12B + DBN Guideline | GDPR Articles 33/34 | Notes |
|---|---|---|
| 72h to Commissioner | Art 33 — 72h without undue delay to SA | Same clock |
| 7d to data subjects | Art 34 — without undue delay where high risk | PDPA codifies the 7d clock; GDPR is open-ended |
| "Likely to cause significant harm" trigger | Art 33: "likely to result in risk"; Art 34: "high risk" | Similar standard, two-tier in GDPR |
| All-breach documentation | Art 33(5) — controller documents all breaches even where not notified | GDPR explicit; PDPA implicit |
| No SA dual-jurisdiction issue | Art 56 — lead SA via OSS for cross-border | GDPR has lead-SA mechanism |

Parallel exercise: [GDPR T2 Lesson 4 — Article 33/34 breach](../../gdpr/t2-practitioner/04-breach-article33-34.md).

## What's next

[Lesson 5 — When a sectoral CoP applies](05-sectoral-cop.md). Knowing which CoP to cite is the difference between a defensible finding and a partner-review reject.
