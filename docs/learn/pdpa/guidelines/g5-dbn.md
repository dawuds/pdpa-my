# JPDP Data Breach Notification Guideline (2025) — section-by-section deep-dive

> **Deep-dive reference.** Source PDFs: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DBN-Data-Breach-Notification-BM-2025.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DBN-Data-Breach-Notification-BM-2025.pdf) (Aug 2025 release) and the Feb 2025 earlier release.

## Structure and statutory anchor

The Data Breach Notification (DBN) Guideline operationalises **Section 12B** of Act 709 (introduced by A1727 Phase 3, in force 1 June 2025). The Act itself says notification should be made "as soon as practicable"; the DBN Guideline defines the operational clocks.

| Clock | Recipient | Trigger | Source |
|---|---|---|---|
| **72 hours** | Personal Data Protection Commissioner | Awareness of a notifiable breach | DBN Guideline 2025 |
| **7 days** | Affected data subjects | After Commissioner notification, where significant harm likely | DBN Guideline 2025 |

The 72h clock starts at **awareness of a notifiable breach** — not detection. The triage step (assessing whether the incident constitutes a notifiable breach) is where the clock starts.

## What constitutes a personal data breach

The DBN Guideline interprets s12B's "personal data breach" broadly. Categories:

| Category | Examples |
|---|---|
| Confidentiality breach | Unauthorised access; data exfiltration; insider snooping; misdirected disclosure |
| Integrity breach | Unauthorised alteration; data corruption; malicious modification |
| Availability breach | Ransomware encryption; data loss; data centre fire; backup destruction |

A single incident often spans multiple categories — a ransomware attack typically combines all three (availability via encryption; confidentiality via exfiltration; potential integrity via tampering).

## "Notifiable" — the harm-likelihood gate

Not every breach is notifiable. The DBN Guideline frames a breach as notifiable where it is **"likely to cause significant harm"** to data subjects. The harm-likelihood assessment is the gating step before the 72h clock applies.

### Harm-likelihood factors

| Factor | Considerations |
|---|---|
| Nature of data | Sensitive PD (s4 + s40 categories) raises significantly; financial info raises substantially; biometric raises catastrophically |
| Volume affected | Larger volumes raise; small incidents may not be notifiable |
| Identifiability | Re-identifiable pseudonymised data — still in scope; fully anonymised — usually out |
| Containment | Has the breach been contained? Is data still exposed? |
| Likelihood of misuse | Public exposure vs limited audience; encrypted-undecrypted vs cleartext |
| Severity of harm | Identity theft; financial fraud; physical safety; discrimination; reputational damage |
| Special characteristics of subjects | Children; employees; patients raise the bar |

The assessment is documented even where the breach is found NOT notifiable — to evidence the decision if the Commissioner later inquires.

## What goes in the 72h Commissioner notification

The DBN Guideline expects:

| Element | Detail |
|---|---|
| Controller identity | Legal name, registration, DPO contact |
| Awareness timestamp | Date and time of awareness of notifiable breach |
| Breach occurrence timestamp | Date and time the breach occurred (estimated where unknown) |
| Nature of breach | Confidentiality / integrity / availability; method (insider, external attack, misdirection, system bug) |
| Categories of data affected | Identification / sensitive PD / financial / etc. |
| Number of data subjects affected | Estimated count (full forensic count may be pending at T+72h) |
| Number of records affected | Estimated count |
| Likely consequences | Specific harm categories per the harm-likelihood factors |
| Measures taken or proposed | Containment; forensic engagement; cross-regulator notifications; data subject communication plan; remediation |
| Measures to address future risk | Anticipated controls improvements |
| Contact for further information | DPO or designated incident lead |

The notification is filed via the JPDP channel (online / email / formal letter — verify current channel at the time of incident).

## What goes in the 7d data subject communication

Required content:

| Element | Detail |
|---|---|
| Plain-language description of the breach | Avoid legalese; focus on what data subject needs to know |
| Categories of data affected | Their own data — specific to them |
| Likely consequences for the data subject | Specific risks: identity theft / financial fraud / etc. |
| Measures the controller has taken | Containment; forensic engagement; restoration |
| Measures the data subject should take | Monitor accounts; watch for phishing; activate credit monitoring; contact controller for support |
| Contact for the data subject | Dedicated incident contact (DPO + customer service hotline) |
| Where to seek further information | Updates page / FAQ / dedicated incident URL |
| Language considerations | BM minimum; EN typically parallel; other languages where audience warrants |

Delivery channel: direct communication (email + SMS + postal for older customers). A public statement on the website is supplementary, not a substitute.

## When NOT to notify

The DBN Guideline includes implicit limits — not every incident is notifiable. Examples of incidents typically NOT notifiable:

- Misdirected internal email between two staff in the same department, fully retracted within minutes, no exfiltration
- Loss of a laptop containing only encrypted data with no key compromise
- Data subject's own action causing the incident (subject leaves credentials in a public place)
- Brief system outage with no data exposure

The harm-likelihood assessment is documented either way — the Article 33(5) analogue under PDPA is best practice even if not codified.

## The dual-clock problem (NCII / banking clients)

For an NCII entity (Act 854 designated sector) the same incident triggers:

| Regulator | Statute | Clock |
|---|---|---|
| NACSA / NC4 | Act 854 s26 | **6 hours** |
| JPDP / Commissioner | s12B + DBN Guideline | **72 hours** |
| BNM (if banking / financial institution) | RMiT | Typically 24 hours |

The NACSA 6-hour clock expires first. For an NCII bank, three regulators on three clocks. Programme design must reconcile these in advance.

The DBN Guideline does not address the NACSA clash explicitly — the resolution is operational (incident response plan that handles both clocks in parallel; DPO coordinates with CISO who handles NACSA).

## Common implementation gaps

The patterns the audit team catches:

1. **No incident response plan integrating PDPA + NACSA + BNM clocks** — IR plan exists for IT security; PDPA notification is a separate document; clocks not reconciled
2. **Awareness timestamp not documented** — the 72h clock starts at "awareness of a notifiable breach"; without the timestamp the controller cannot defend the 72h window
3. **Harm-likelihood assessment skipped** — controller notifies everything (over-notification fatigue) or notifies nothing (under-notification risk)
4. **No tabletop exercise drilling the 72h workflow** — first run of the 72h clock is the day of the incident
5. **Data subject notification template not pre-drafted** — drafting under pressure at T+72h with translation needs is brittle
6. **No customer service preparation** — call centre not staffed for incident-driven inbound; identity verification process not designed
7. **Sub-processor breach handling unclear** — controller's breach plan handles direct breaches but a sub-processor's breach (where the processor notifies the controller) has its own clock
8. **Article 33(5)-analogue all-breach documentation skipped** — non-notifiable breaches not documented; defensive evidence missing

## Documentation expectation

The DBN Guideline expects the controller to maintain:

- A **breach register** — all breaches (notified and non-notified) with classification, timeline, harm-likelihood assessment, decision rationale, outcome
- **Tabletop AAR records** — at minimum one tabletop exercise per year
- **Cross-regulator notification reconciliation** for NCII / banking / SC-regulated clients
- **Sub-processor incident handling procedures** — what the controller does when a processor notifies a breach

The Commissioner can request the breach register at any time. A controller without one is materially exposed.

## GDPR parallel

GDPR Articles 33 / 34 are the equivalents. The mapping:

| Issued PDPA DBN Guideline | GDPR Article 33 / 34 | Notes |
|---|---|---|
| 72h Commissioner notification | Article 33 — 72h to SA | Same clock |
| 7d data subject notification | Article 34 — without undue delay | PDPA codifies; GDPR open-ended |
| Notifiable threshold "likely to cause significant harm" | Article 33: "likely to result in a risk"; Art 34: "high risk" | Similar but GDPR is two-tier |
| Notification content | Same elements (nature, scope, consequences, measures) | Direct equivalent |
| All-breach documentation | Best practice / implicit | Art 33(5) explicit |
| Sub-processor breach handling | Implicit | Art 33(2) explicit (processor notifies controller without undue delay) |

For dual-regime clients, design the breach response with parallel 72h clocks to both regulators + "without undue delay but no later than 7 days" for subject notification. This satisfies both regimes.

Parallel reading: [GDPR Articles 33/34 deep-dive](../../gdpr/articles/articles-33-34-breach.md).

## Cross-references

- Audit programme: [`Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md) §6 (Breach Response procedures)
- T2 exercise: [PDPA T2 Lesson 4 — breach notification](../t2-practitioner/04-breach-notification.md)
- T3 exercise: [PDPA T3 Lesson 5 — privacy tabletop](../t3-programme/05-privacy-tabletop.md)
- Source PDFs: DBN Guideline (Aug 2025 + Feb 2025 versions) in References/Guidelines

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Aligned with Aug 2025 DBN Guideline. |
