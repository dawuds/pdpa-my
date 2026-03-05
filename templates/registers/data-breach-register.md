# Data Breach Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer / Chief Information Security Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Breach Register Summary](#3-breach-register-summary)
4. [Breach Reference Number and Date Discovered](#4-breach-reference-number-and-date-discovered)
5. [Nature and Description of Breach](#5-nature-and-description-of-breach)
6. [Data Categories and Volume of Records Affected](#6-data-categories-and-volume-of-records-affected)
7. [Data Subjects Affected](#7-data-subjects-affected)
8. [Root Cause and Contributing Factors](#8-root-cause-and-contributing-factors)
9. [Notifiability Assessment](#9-notifiability-assessment)
10. [Commissioner Notification](#10-commissioner-notification)
11. [Data Subject Notification](#11-data-subject-notification)
12. [Remediation Actions](#12-remediation-actions)
13. [Roles and Responsibilities](#13-roles-and-responsibilities)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Data Breach Register serves as the authoritative record of all confirmed and suspected personal data breaches identified within [Organization Name]. It is maintained in accordance with the **Personal Data Protection Act 2010 (PDPA)**, specifically the obligations arising under **Section 9** (security principle) and **Section 143A** (mandatory breach notification). The Register supports the organisation's ability to demonstrate accountability, fulfil regulatory notification obligations, and drive continuous improvement in data protection practices.

This Register captures all breach events regardless of notifiability outcome — including breaches assessed as below the notification threshold — to maintain a complete and auditable breach history that can be presented to the Personal Data Protection Commissioner or internal auditors upon request.

### 1.2 Scope

This Register applies to:

- All personal data processed by [Organization Name] in the course of its commercial transactions
- Personal data held by or on behalf of [Organization Name] by third-party data processors
- All breach events, whether originating from internal systems, third-party processors, or external threat actors
- Incidents assessed as suspected breaches, confirmed breaches, and near-misses where personal data exposure was plausible

### 1.3 Out of Scope

- Security incidents that do not involve personal data
- Incidents involving exclusively anonymised or pseudonymised data where re-identification risk is negligible

---

## 2. Definitions

| Term | Definition |
|---|---|
| **Personal Data Breach** | A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored, or otherwise processed |
| **Notifiable Breach** | A breach that is likely to result in significant harm or serious adverse effects to the rights and freedoms of data subjects, triggering notification obligations under PDPA s143A |
| **Data Subject** | An individual who is the subject of personal data processed by [Organization Name] |
| **Commissioner** | The Personal Data Protection Commissioner appointed under PDPA |
| **DPO** | Data Protection Officer of [Organization Name] |
| **CISO** | Chief Information Security Officer of [Organization Name] |
| **Data Processor** | A person who processes personal data solely on behalf of a data user and does not process the personal data for any of their own purposes |

---

## 3. Breach Register Summary

*This summary table provides a consolidated view of all breach entries recorded in this Register. It is intended as an at-a-glance reference for management reporting and regulatory review. Each row links to a full breach record in the sections below.*

| Breach Ref | Date Discovered | Brief Description | Severity | Notifiable? | Commissioner Notified | Status |
|---|---|---|---|---|---|---|
| [BR-YYYY-001] | [DD/MM/YYYY] | [Brief description] | [Critical / High / Medium / Low] | [Yes / No] | [Yes / No / N/A] | [Open / Closed] |
| [BR-YYYY-002] | [DD/MM/YYYY] | [Brief description] | [Critical / High / Medium / Low] | [Yes / No] | [Yes / No / N/A] | [Open / Closed] |
| [BR-YYYY-003] | [DD/MM/YYYY] | [Brief description] | [Critical / High / Medium / Low] | [Yes / No] | [Yes / No / N/A] | [Open / Closed] |

---

## 4. Breach Reference Number and Date Discovered

*Each breach event must be assigned a unique reference number upon initial identification. Record the precise dates of discovery, internal escalation, and containment to establish an accurate timeline for regulatory and evidentiary purposes.*

### 4.1 Breach Identification Template

For each breach, complete the following identification block:

| Field | Details |
|---|---|
| **Breach Reference Number** | [BR-YYYY-NNN] (e.g., BR-2025-001) |
| **Date and Time Breach Discovered** | [DD/MM/YYYY HH:MM] |
| **Date and Time Breach Occurred (if known)** | [DD/MM/YYYY HH:MM] or [Unknown] |
| **Date and Time Breach Contained** | [DD/MM/YYYY HH:MM] or [Ongoing] |
| **Date Reported to DPO** | [DD/MM/YYYY] |
| **Date Reported to CISO** | [DD/MM/YYYY] |
| **Reported By** | [Name, Job Title, Department] |
| **Method of Discovery** | [Internal monitoring / User report / Third-party notification / Regulator notification / Other] |
| **Record Created By** | [Name, Job Title] |
| **Record Last Updated** | [DD/MM/YYYY] |

### 4.2 Reference Number Convention

- Format: **BR-[YYYY]-[NNN]**
- **BR** = Breach Record prefix
- **YYYY** = Calendar year of discovery
- **NNN** = Sequential three-digit number reset annually (e.g., 001, 002, 003)

---

## 5. Nature and Description of Breach

*Provide a factual, objective description of the breach event. This section should be written in plain language sufficient for a non-technical regulator to understand what occurred. Avoid speculation; clearly distinguish confirmed facts from working assumptions.*

### 5.1 Breach Type

Select all breach types that apply:

- [ ] Unauthorised access to personal data (external threat actor)
- [ ] Unauthorised access to personal data (insider threat / accidental internal disclosure)
- [ ] Accidental loss or destruction of personal data
- [ ] Alteration of personal data without authorisation
- [ ] Disclosure of personal data to unauthorised recipients
- [ ] Ransomware or malware affecting systems containing personal data
- [ ] Theft of device or physical media containing personal data
- [ ] Misdirected communication (email, post, or fax sent to wrong recipient)
- [ ] Third-party / data processor breach
- [ ] Other: [Specify]

### 5.2 Breach Narrative

| Field | Details |
|---|---|
| **Summary** | [Concise one-paragraph description of what happened, when, and where] |
| **Systems / Assets Involved** | [List affected systems, databases, applications, or physical assets] |
| **Breach Vector** | [How the breach occurred, e.g., phishing, misconfigured cloud storage, lost device] |
| **Duration of Exposure** | [Period during which personal data was exposed or accessible, if determinable] |
| **Was the Breach Intentional?** | [Yes — Malicious / No — Accidental / Under Investigation] |
| **Was Encryption in Place?** | [Yes — full / Yes — partial / No] |
| **Additional Context** | [Any other relevant detail not captured above] |

---

## 6. Data Categories and Volume of Records Affected

*Accurately identify the classes of personal data involved and estimate the volume of records affected. Where exact counts are unavailable at the time of initial entry, record the best available estimate and update as investigation progresses. This information directly informs the notifiability assessment.*

### 6.1 Personal Data Categories Affected

| Data Category | Affected? | Estimated Volume (Records) | Sensitivity Level |
|---|---|---|---|
| Full name | [ ] Yes / [ ] No | [Number or "Unknown"] | Standard |
| NRIC / Passport number | [ ] Yes / [ ] No | [Number or "Unknown"] | High |
| Date of birth | [ ] Yes / [ ] No | [Number or "Unknown"] | Standard |
| Contact details (phone, email, address) | [ ] Yes / [ ] No | [Number or "Unknown"] | Standard |
| Financial account / card details | [ ] Yes / [ ] No | [Number or "Unknown"] | High |
| Banking transaction history | [ ] Yes / [ ] No | [Number or "Unknown"] | High |
| Credit score or creditworthiness data | [ ] Yes / [ ] No | [Number or "Unknown"] | High |
| Health or medical information | [ ] Yes / [ ] No | [Number or "Unknown"] | Sensitive |
| Biometric data | [ ] Yes / [ ] No | [Number or "Unknown"] | Sensitive |
| Login credentials (username / password) | [ ] Yes / [ ] No | [Number or "Unknown"] | High |
| Employment or salary information | [ ] Yes / [ ] No | [Number or "Unknown"] | Standard |
| Location / IP address data | [ ] Yes / [ ] No | [Number or "Unknown"] | Standard |
| Other: [Specify] | [ ] Yes / [ ] No | [Number or "Unknown"] | [Specify] |

### 6.2 Volume Summary

| Metric | Value |
|---|---|
| **Total Records Confirmed Affected** | [Number] |
| **Total Records Estimated Affected** | [Number] |
| **Confidence Level of Estimate** | [High / Medium / Low] |
| **Basis for Estimate** | [Description of how volume was determined or estimated] |

---

## 7. Data Subjects Affected

*Identify the categories of individuals whose personal data was involved in the breach, along with estimated counts. Where data subjects are customers of [Organization Name], consider downstream harm including financial fraud, identity theft, and reputational damage when completing the impact assessment below.*

### 7.1 Data Subject Categories

| Data Subject Category | Affected? | Estimated Count | Potential Harm Level |
|---|---|---|---|
| Retail / individual customers | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |
| Corporate / SME customers | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |
| Employees | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |
| Former employees | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |
| Third-party contractors or vendors | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |
| Minors (below 18 years) | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |
| Other: [Specify] | [ ] Yes / [ ] No | [Number] | [High / Medium / Low] |

### 7.2 Impact Assessment on Data Subjects

| Field | Details |
|---|---|
| **Likely Harm to Data Subjects** | [Describe potential adverse effects, e.g., financial fraud, identity theft, discrimination, reputational damage, physical harm] |
| **Vulnerability of Affected Individuals** | [Note if particularly vulnerable groups are affected, e.g., minors, elderly, financially distressed individuals] |
| **Mitigating Factors Reducing Harm** | [e.g., data was encrypted, limited usability of exposed data, rapid containment] |
| **Aggravating Factors Increasing Harm** | [e.g., data published online, financial data involved, identity documents exposed] |

---

## 8. Root Cause and Contributing Factors

*A rigorous root cause analysis is essential for regulatory accountability and for preventing recurrence. Document findings objectively. Where the investigation is ongoing at the time of initial entry, update this section as conclusions are reached.*

### 8.1 Root Cause Analysis

| Field | Details |
|---|---|
| **Primary Root Cause** | [The fundamental cause that, if absent, would have prevented the breach] |
| **Root Cause Category** | [Technical failure / Human error / Process gap / Third-party failure / Malicious act / Natural event / Other] |
| **Technical Contributing Factors** | [e.g., unpatched vulnerability, misconfigured access controls, lack of encryption, inadequate logging] |
| **Process Contributing Factors** | [e.g., insufficient access review, lack of data classification policy, inadequate vendor due diligence] |
| **Human Contributing Factors** | [e.g., phishing susceptibility, unauthorised data transfer, failure to follow security procedures] |
| **Third-Party Contributing Factors** | [e.g., processor security failure, inadequate contractual data protection obligations] |

### 8.2 Timeline of Events

*Record the chronological sequence of events from initial breach occurrence to containment. This timeline supports regulatory reporting and internal post-incident reviews.*

| Date / Time | Event | Source of Information |
|---|---|---|
| [DD/MM/YYYY HH:MM] | [Event description, e.g., "Unauthorised access to customer database first occurred"] | [Log file / User report / Vendor notification] |
| [DD/MM/YYYY HH:MM] | [Event description, e.g., "Anomaly detected by SIEM system"] | [Log file / User report / Vendor notification] |
| [DD/MM/YYYY HH:MM] | [Event description, e.g., "Incident escalated to DPO"] | [Email / Incident ticket] |
| [DD/MM/YYYY HH:MM] | [Event description, e.g., "Breach contained — unauthorised access revoked"] | [System log / Change record] |

---

## 9. Notifiability Assessment

*Under PDPA s143A, [Organization Name] is required to notify the Commissioner where a breach is likely to result in significant harm or serious adverse effects to data subjects. This section must be completed by the DPO in consultation with legal counsel. All assessments — including those concluding that notification is not required — must be documented here with rationale.*

### 9.1 Assessment Outcome

| Field | Details |
|---|---|
| **Assessment Conducted By** | [Name, Job Title] |
| **Assessment Date** | [DD/MM/YYYY] |
| **Legal Counsel Consulted** | [Yes / No — Name if yes: [Name]] |
| **Notifiability Outcome** | [**Notifiable** / **Not Notifiable** / **Under Assessment**] |

### 9.2 Notifiability Assessment Criteria

Complete the following analysis against each criterion:

| Assessment Criterion | Finding | Weight |
|---|---|---|
| Nature and sensitivity of personal data involved | [Assessment finding] | [High / Medium / Low] |
| Volume of records and number of data subjects affected | [Assessment finding] | [High / Medium / Low] |
| Ease of identification of affected individuals | [Assessment finding] | [High / Medium / Low] |
| Severity of likely consequences to data subjects | [Assessment finding] | [High / Medium / Low] |
| Special characteristics of data subjects (e.g., minors, vulnerable persons) | [Assessment finding] | [High / Medium / Low] |
| Whether exposed data was encrypted or otherwise protected | [Assessment finding] | [High / Medium / Low] |
| Whether [Organization Name] has taken measures to mitigate harm | [Assessment finding] | [High / Medium / Low] |

### 9.3 Notifiability Rationale

*Provide a written rationale for the notifiability outcome that a regulator could review. If the outcome is "Not Notifiable", document clearly why notification is not required, referencing specific mitigating factors.*

**Rationale:**

> [Provide a clear, written explanation of the notifiability outcome. Reference the criteria assessed above and explain how each factor was weighted in reaching the conclusion. If not notifiable, explicitly state the basis under PDPA for this determination. This rationale must be sufficient to withstand regulatory scrutiny.]

---

## 10. Commissioner Notification

*Where a breach has been assessed as notifiable under PDPA s143A, [Organization Name] must notify the Personal Data Protection Commissioner within the prescribed timeframe. This section records all communications with the Commissioner in relation to this breach.*

### 10.1 Notification Details

| Field | Details |
|---|---|
| **Notification Required?** | [Yes / No — if No, reference Notifiability Assessment in Section 9] |
| **Date of Initial Commissioner Notification** | [DD/MM/YYYY] or [N/A] |
| **Time of Initial Commissioner Notification** | [HH:MM] or [N/A] |
| **Notification Method** | [Online portal / Written submission / Email / Other: specify] |
| **Commissioner Reference Number** | [Reference number issued by Commissioner upon receipt] |
| **Was Notification Within Prescribed Timeframe?** | [Yes / No — if No, explain reason for delay] |
| **Reason for Delayed Notification (if applicable)** | [Explanation] |

### 10.2 Supplementary Notifications to Commissioner

*Record any follow-up communications with the Commissioner, including supplementary information submissions, responses to Commissioner queries, and final closure notifications.*

| Date | Communication Type | Summary | Reference |
|---|---|---|---|
| [DD/MM/YYYY] | [Initial notification / Supplementary submission / Response to query / Closure notice] | [Brief description] | [Reference number or document ID] |
| [DD/MM/YYYY] | [Initial notification / Supplementary submission / Response to query / Closure notice] | [Brief description] | [Reference number or document ID] |

### 10.3 Commissioner Correspondence Log

| Document | Date | Sent By | Description | Filed Location |
|---|---|---|---|---|
| [Document name] | [DD/MM/YYYY] | [Name / Organization] | [Brief description] | [File path / Physical location] |

---

## 11. Data Subject Notification

*Where required by the Commissioner's direction or where [Organization Name] has determined that notification to affected data subjects is necessary to mitigate harm, this section records the details of the data subject notification exercise.*

### 11.1 Data Subject Notification Decision

| Field | Details |
|---|---|
| **Data Subject Notification Required?** | [Yes — Commissioner directed / Yes — Voluntary / No] |
| **Basis for Notification Decision** | [Commissioner direction / Internal risk assessment / Legal advice / Other] |
| **Decision Made By** | [Name, Job Title] |
| **Decision Date** | [DD/MM/YYYY] |
| **If Not Notifying Data Subjects, Rationale** | [Explanation, e.g., "Risk of harm assessed as low; data was encrypted and access revoked within 2 hours"] |

### 11.2 Notification Execution

| Field | Details |
|---|---|
| **Number of Data Subjects Notified** | [Number] |
| **Notification Channels Used** | [Email / SMS / In-app notification / Post / Phone / Other] |
| **Date Notification Sent** | [DD/MM/YYYY] |
| **Content of Notification** | [Summary of key messages communicated, or attach at Appendix C] |
| **Dedicated Helpline/Contact Established?** | [Yes — [Contact details] / No] |
| **Helpline/Contact Active From** | [DD/MM/YYYY] |
| **Helpline/Contact Active Until** | [DD/MM/YYYY] |

### 11.3 Data Subject Responses

| Date Range | Channel | Number of Responses | Summary of Issues Raised | Resolution |
|---|---|---|---|---|
| [DD/MM/YYYY — DD/MM/YYYY] | [Email / Phone / In-person] | [Number] | [Brief summary of common concerns] | [Actions taken] |

---

## 12. Remediation Actions

*Document all corrective and preventive actions taken in response to this breach. Each action should be linked to a specific root cause or contributing factor identified in Section 8. Track completion status and responsible owners to ensure accountability.*

### 12.1 Immediate Containment Actions

*Record actions taken to stop the breach and limit its immediate impact.*

| Action | Responsible Party | Date Completed | Evidence / Notes |
|---|---|---|---|
| [e.g., Revoked unauthorised access credentials] | [Name / Team] | [DD/MM/YYYY] | [Ticket reference / Change record] |
| [e.g., Isolated affected systems from network] | [Name / Team] | [DD/MM/YYYY] | [Ticket reference / Change record] |
| [e.g., Preserved forensic evidence] | [Name / Team] | [DD/MM/YYYY] | [Ticket reference / Change record] |

### 12.2 Short-Term Remediation Actions

*Record actions taken within 30 days to address the immediate vulnerabilities or process failures.*

| Action | Root Cause Addressed | Responsible Party | Target Date | Completion Date | Status |
|---|---|---|---|---|---|
| [e.g., Patched vulnerability CVE-XXXX-XXXXX] | [Technical failure] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Complete / In Progress / Overdue] |
| [e.g., Reset all user credentials in affected system] | [Technical failure] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Complete / In Progress / Overdue] |
| [e.g., Issued staff security awareness notice] | [Human error] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Complete / In Progress / Overdue] |

### 12.3 Long-Term Preventive Actions

*Record systemic improvements and controls enhancements to prevent recurrence.*

| Action | Root Cause Addressed | Responsible Party | Target Date | Completion Date | Status |
|---|---|---|---|---|---|
| [e.g., Implement data loss prevention (DLP) controls] | [Process gap] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Complete / In Progress / Overdue] |
| [e.g., Revise third-party data processor security assessment framework] | [Third-party failure] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Complete / In Progress / Overdue] |
| [e.g., Mandatory phishing simulation for all staff] | [Human error] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Complete / In Progress / Overdue] |

### 12.4 Breach Closure

| Field | Details |
|---|---|
| **All Containment Actions Complete?** | [Yes / No] |
| **All Remediation Actions Complete or Tracked?** | [Yes / No — if No, list outstanding items] |
| **Breach Record Formally Closed?** | [Yes / No] |
| **Closure Date** | [DD/MM/YYYY] |
| **Closed By** | [Name, Job Title] |
| **Post-Incident Review Conducted?** | [Yes — Report reference: [Reference] / No — Reason: [Reason]] |

---

## 13. Roles and Responsibilities

*This section defines accountability for maintaining and acting upon the Data Breach Register across all relevant roles within [Organization Name].*

### 13.1 RACI Matrix

| Activity | DPO | CISO | Legal Counsel | IT Security | Business Unit Head | Board / Risk Committee |
|---|---|---|---|---|---|---|
| Identify and report suspected breach | C | C | — | R | A | — |
| Conduct initial breach assessment | A | R | C | C | I | — |
| Determine notifiability | A/R | C | C | C | I | I |
| Notify Commissioner (if required) | R | C | A | — | — | I |
| Notify affected data subjects | A | C | R | — | C | I |
| Maintain and update Breach Register | R | C | — | C | — | — |
| Oversee remediation actions | C | R | — | A | C | I |
| Conduct post-incident review | A | R | C | C | C | I |
| Present breach summary to Board | R | C | — | — | — | A |
| Approve Register and breach records | A | C | — | — | — | — |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 13.2 Role Descriptions

| Role | Responsibilities in Relation to This Register |
|---|---|
| **Data Protection Officer (DPO)** | Owns and maintains the Register; determines notifiability; leads regulatory notifications; escalates material breaches to Board |
| **Chief Information Security Officer (CISO)** | Leads technical investigation and containment; oversees remediation; provides technical input to notifiability assessment |
| **Legal Counsel** | Advises on notifiability thresholds and regulatory obligations; reviews Commissioner notifications before submission |
| **IT Security Team** | Conducts forensic investigation; provides technical breach details; implements technical remediation actions |
| **Business Unit Heads** | Identify and promptly report suspected breaches; coordinate staff notifications; support remediation within their areas |
| **Board / Risk Committee** | Receives summary reporting on material breaches; provides oversight of systemic data protection risks |

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Job Title] | Initial version |
| [1.1] | [DD/MM/YYYY] | [Author Name, Job Title] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Job Title] | [Description of major revision] |

### 14.2 Document Review Schedule

*This Register is a living document subject to continuous updates as new breach events are recorded. The template, guidance, and structural sections shall be formally reviewed at the frequency noted below.*

| Review Type | Frequency | Triggered By | Responsible |
|---|---|---|---|
| Continuous operational updates | Per breach event | Each new or updated breach record | DPO |
| Structural / template review | Annual | Calendar year-end | DPO |
| Unscheduled review | As required | Regulatory guidance update / Material breach | DPO |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Information Security Officer | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Risk Officer | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| General Counsel / Legal Counsel | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Executive Officer | [Full Name] | ___________________________ | [DD/MM/YYYY] |

---

## 15. References

| Reference | Document / Instrument | Relevant Provisions |
|---|---|---|
| [1] | Personal Data Protection Act 2010 (Act 709) | s9 — Security Principle (obligation to protect personal data against loss, misuse, modification, unauthorised or accidental access, disclosure, alteration, or destruction) |
| [2] | Personal Data Protection Act 2010 (Act 709) | s143A — Mandatory notification of personal data breach to Commissioner |
| [3] | Personal Data Protection (Amendment) Act 2024 | Amendments introducing and refining the mandatory breach notification regime |
| [4] | Personal Data Protection Commissioner — Guidelines on Personal Data Breach Notification | [Insert version and publication date when available] |
| [5] | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document | Section on cybersecurity incident reporting obligations for financial institutions |
| [6] | [Organization Name] — Information Security Policy | [Document ID] |
| [7] | [Organization Name] — Data Protection Policy | [Document ID] |
| [8] | [Organization Name] — Incident Response Plan | [Document ID] |
| [9] | [Organization Name] — Third-Party Risk Management Policy | [Document ID] |

---

## 16. Appendices

### Appendix A — Breach Severity Classification Matrix

*This matrix provides guidance for consistently classifying breach severity to support triage, escalation, and notifiability assessment.*

| Severity Level | Criteria | Examples | Escalation Timeline |
|---|---|---|---|
| **Critical** | Large-scale exposure of sensitive personal data; significant likelihood of serious harm; financial data or identity documents involved | Ransomware affecting core banking database; mass exfiltration of customer NRIC and financial records | Immediate — DPO and CISO notified within 1 hour |
| **High** | Moderate-to-large scale exposure; meaningful risk of harm; sensitive data categories involved | Unauthorised access to HR system containing salary and personal data | DPO and CISO notified within 4 hours |
| **Medium** | Limited exposure; lower likelihood of significant harm; standard personal data categories | Misdirected email containing customer contact details | DPO notified within 24 hours |
| **Low** | Minimal exposure; negligible risk of harm; rapid containment achieved | Single record accessed in error by internal staff, no onward disclosure | DPO notified within 48 hours |

---

### Appendix B — Breach Report Form (Initial Notification)

*This form is to be completed by any [Organization Name] staff member who discovers or suspects a personal data breach and submitted to the DPO immediately.*

**Complete and submit to the DPO at: [DPO email address] / [Incident reporting hotline]**

| Field | Response |
|---|---|
| **Reporter Name** | |
| **Reporter Job Title** | |
| **Reporter Department** | |
| **Date / Time of Discovery** | |
| **Where Did the Breach Occur?** | [System / Location / Department] |
| **What Personal Data May Be Involved?** | |
| **Approximately How Many People May Be Affected?** | |
| **Has the Breach Been Contained?** | [ ] Yes [ ] No [ ] Unknown |
| **Brief Description of What Happened** | |
| **Any Immediate Actions Already Taken?** | |
| **Supporting Evidence Available?** | [ ] Yes — describe: ________________ [ ] No |

---

### Appendix C — Commissioner Notification Template

*[Organization Name] shall use this template as the basis for formal breach notifications submitted to the Personal Data Protection Commissioner under PDPA s143A. Final submissions must be reviewed by Legal Counsel before dispatch.]*

**Template headings for Commissioner notification letter:**

1. Organization details (full legal name, registration number, registered address)
2. DPO contact details
3. Date and time of breach discovery
4. Nature and description of the breach
5. Categories and approximate number of personal data records affected
6. Categories and approximate number of data subjects affected
7. Likely consequences of the breach
8. Measures taken or proposed to address the breach and mitigate its effects
9. Actions taken to notify or plans to notify affected data subjects

---

### Appendix D — Post-Incident Review Template

*A post-incident review shall be conducted for all Critical and High severity breaches within 30 days of breach closure. The completed review report shall be filed alongside this Register entry and presented to the Risk Committee.*

**Post-Incident Review Report — Outline:**

1. Executive Summary
2. Breach Reference and Key Facts
3. Timeline of Events
4. Root Cause Analysis Findings
5. Assessment of Response Effectiveness
6. Lessons Learned
7. Recommended Systemic Improvements
8. Action Plan with Owners and Target Dates
9. Sign-Off (DPO, CISO, relevant Business Unit Head)

---

### Appendix E — Applicable Regulatory Contacts

| Authority | Contact Purpose | Contact Details |
|---|---|---|
| Personal Data Protection Commissioner | Breach notification; regulatory queries | [Insert official contact details from Commissioner's website] |
| Bank Negara Malaysia (BNM) | Cyber incident reporting for financial institutions under RMiT | [Insert official contact details] |
| CyberSecurity Malaysia (CSM) / NACSA | National-level cyber incident reporting | [Insert official contact details] |
| Royal Malaysia Police — Commercial Crime Investigation Department | Criminal referral where malicious act suspected | [Insert official contact details] |

---

*This document is classified **Confidential** and is intended solely for internal use by authorised personnel of [Organization Name]. Unauthorized disclosure is prohibited. For queries regarding this document, contact the Data Protection Officer at [DPO contact details].*

*© [Organization Name] [Year]. All rights reserved.*