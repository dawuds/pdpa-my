# Data Breach Investigation Records

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
| **Approved By** | [Approved By], [Title] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Incident Report and Initial Triage Documentation](#2-incident-report-and-initial-triage-documentation)
3. [Forensic Investigation Report and Root Cause Analysis](#3-forensic-investigation-report-and-root-cause-analysis)
4. [Evidence Chain of Custody Records](#4-evidence-chain-of-custody-records)
5. [Commissioner Notification Submissions and Acknowledgements](#5-commissioner-notification-submissions-and-acknowledgements)
6. [Data Subject Notification Records and Delivery Evidence](#6-data-subject-notification-records-and-delivery-evidence)
7. [Third-Party and Processor Notification Correspondence](#7-third-party-and-processor-notification-correspondence)
8. [Remediation Action Plan and Completion Evidence](#8-remediation-action-plan-and-completion-evidence)
9. [Post-Incident Review Report and Lessons Learned](#9-post-incident-review-report-and-lessons-learned)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document constitutes the official Data Breach Investigation Record for [Organization Name] in respect of the incident identified as **[Incident Reference ID]**. It serves as a comprehensive, audit-ready dossier capturing every stage of the incident lifecycle — from initial detection through forensic investigation, regulatory notification, data subject communication, remediation, and post-incident review.

This record is maintained in accordance with the **Personal Data Protection Act 2010 (PDPA)**, specifically:

- **Section 9 (Security Principle)** — which mandates that data processors take practical steps to protect personal data from loss, misuse, modification, unauthorised or accidental access or disclosure, alteration, or destruction.
- **Section 143A (Mandatory Breach Notification)** — which requires data processors to notify the Personal Data Protection Commissioner and, where applicable, data subjects upon becoming aware of a personal data breach.

This record demonstrates [Organization Name]'s accountability obligations and supports regulatory examination, internal audit, and continuous improvement activities.

### 1.2 Scope

This record applies to all confirmed or suspected personal data breaches involving personal data processed by [Organization Name], including data processed by authorised third-party data processors on behalf of the organisation. It covers:

- Personal data held in electronic and physical formats.
- Data processed within Malaysia and, where applicable, data transferred outside Malaysia under PDPA-compliant arrangements.
- Systems, applications, and processes owned or operated by [Organization Name] or its authorised processors.

### 1.3 Incident Identification

| Field | Details |
|---|---|
| **Incident Reference ID** | [e.g., PDPA-BR-2026-001] |
| **Incident Title** | [Brief descriptive title of the breach] |
| **Date and Time Detected** | [DD/MM/YYYY HH:MM MYT] |
| **Date and Time Contained** | [DD/MM/YYYY HH:MM MYT] |
| **Date Record Created** | [DD/MM/YYYY] |
| **Record Prepared By** | [Name], [Title] |
| **Incident Status** | [Open / Under Investigation / Contained / Closed] |

---

## 2. Incident Report and Initial Triage Documentation

*This section captures the initial report of the breach, the circumstances of discovery, the immediate triage assessment, and the decision-making rationale applied at the point of detection. Complete all fields as soon as possible after the incident is identified, and no later than 24 hours after internal detection.*

### 2.1 Initial Incident Report

| Field | Details |
|---|---|
| **Reported By** | [Name, Title, Department] |
| **Date/Time of Report** | [DD/MM/YYYY HH:MM MYT] |
| **Reporting Channel** | [e.g., IT Helpdesk / Direct to DPO / Automated Alert] |
| **Nature of Report** | [e.g., Employee report / System alert / Third-party notification] |

**Description of the Incident as Initially Reported:**

> [Provide a verbatim or near-verbatim account of the incident as first described by the reporter. Include what was observed, when, and by whom. Do not edit for accuracy at this stage — raw detail is important for the investigation record.]

### 2.2 Initial Triage Assessment

*Document the immediate assessment conducted by the incident response team upon receiving the report, including the preliminary scope and severity determination.*

**Preliminary Scope:**

- **Systems or assets potentially affected:** [List systems, databases, applications, or physical assets]
- **Categories of personal data potentially involved:** [e.g., Name, NRIC, financial data, health data, contact details]
- **Estimated number of data subjects potentially affected:** [Number or range]
- **Geographic scope:** [e.g., Malaysia only / cross-border]

**Severity Classification:**

| Criterion | Assessment |
|---|---|
| **Sensitivity of data involved** | [Low / Medium / High / Critical] |
| **Volume of records potentially affected** | [Estimated number] |
| **Likelihood of harm to data subjects** | [Low / Medium / High] |
| **Systemic vs. isolated nature** | [Isolated incident / Systemic vulnerability] |
| **Overall Severity Rating** | [P1 – Critical / P2 – High / P3 – Medium / P4 – Low] |

**Immediate Actions Taken at Triage:**

- [ ] Incident response team activated on [DD/MM/YYYY HH:MM]
- [ ] Affected systems isolated / access suspended: [Yes / No / Partial — describe]
- [ ] Evidence preservation measures initiated: [Yes / No — describe]
- [ ] DPO notified: [DD/MM/YYYY HH:MM] by [Name]
- [ ] CISO notified: [DD/MM/YYYY HH:MM] by [Name]
- [ ] Senior management notified: [DD/MM/YYYY HH:MM] by [Name]
- [ ] Legal counsel engaged: [Yes / No]
- [ ] Law enforcement notified: [Yes / No — if yes, provide reference]

**Triage Officer:**

| Field | Details |
|---|---|
| **Name** | [Name] |
| **Title** | [Title] |
| **Signature** | [Signature] |
| **Date** | [DD/MM/YYYY] |

---

## 3. Forensic Investigation Report and Root Cause Analysis

*This section records the findings of the technical and forensic investigation conducted following initial triage. It must be completed by qualified information security personnel and reviewed by the DPO. Where an external forensic firm is engaged, attach their full report as Appendix A.*

### 3.1 Investigation Team

| Name | Title | Organisation | Role in Investigation |
|---|---|---|---|
| [Name] | [Title] | [Org] | [e.g., Lead Investigator] |
| [Name] | [Title] | [Org] | [e.g., Forensic Analyst] |
| [Name] | [Title] | [Org] | [e.g., Legal Advisor] |
| [Name] | [Title] | [External Firm, if applicable] | [e.g., External Forensic Consultant] |

### 3.2 Confirmed Incident Details

| Field | Details |
|---|---|
| **Confirmed Date/Time of Breach** | [DD/MM/YYYY HH:MM MYT] |
| **Confirmed Date/Time of Containment** | [DD/MM/YYYY HH:MM MYT] |
| **Duration of Breach** | [e.g., Approximately 14 hours] |
| **Attack Vector / Entry Point** | [e.g., Phishing email / Unpatched vulnerability / Insider action] |
| **Confirmed Systems Affected** | [List confirmed affected systems] |

### 3.3 Confirmed Personal Data Impact

| Data Category | Fields Affected | Estimated Records | Classification |
|---|---|---|---|
| [e.g., Identity Data] | [e.g., Full name, NRIC] | [Number] | [Sensitive / Non-sensitive] |
| [e.g., Financial Data] | [e.g., Account number, transaction history] | [Number] | [Sensitive] |
| [e.g., Contact Data] | [e.g., Email, phone number, address] | [Number] | [Non-sensitive] |
| [e.g., Health Data] | [e.g., Medical records] | [Number] | [Sensitive] |
| **Total** | | **[Total]** | |

### 3.4 Root Cause Analysis

**Immediate Cause:**

> [Describe the direct technical or operational cause of the breach — e.g., exploitation of CVE-XXXX-XXXX in [system], unencrypted backup exposed on misconfigured S3 bucket, credential compromise via phishing.]

**Contributing Factors:**

| Factor | Description |
|---|---|
| [e.g., Technical] | [e.g., Absence of multi-factor authentication on VPN gateway] |
| [e.g., Process] | [e.g., Patch management cycle did not cover legacy system] |
| [e.g., Human] | [e.g., Employee fell victim to spear-phishing] |
| [e.g., Governance] | [e.g., Third-party access review overdue by 6 months] |

**Root Cause Statement:**

> [Provide a consolidated root cause statement summarising the underlying systemic failure(s) that enabled the breach to occur. This statement should be sufficiently specific to inform targeted remediation.]

### 3.5 Timeline of Events

*Reconstruct the breach timeline based on log analysis, forensic artefacts, and witness accounts. Entries should be in chronological order.*

| Date/Time (MYT) | Event | Source of Evidence |
|---|---|---|
| [DD/MM/YYYY HH:MM] | [Event description] | [e.g., Firewall log / Email header / Witness statement] |
| [DD/MM/YYYY HH:MM] | [Event description] | [Source] |
| [DD/MM/YYYY HH:MM] | [Event description] | [Source] |
| [DD/MM/YYYY HH:MM] | Breach detected by [Name/System] | [Source] |
| [DD/MM/YYYY HH:MM] | Incident response activated | [Source] |
| [DD/MM/YYYY HH:MM] | Affected systems isolated | [Source] |
| [DD/MM/YYYY HH:MM] | Containment confirmed | [Source] |

### 3.6 Investigation Conclusions

> [Summarise the key conclusions of the investigation, including confirmation of whether a personal data breach occurred as defined under PDPA, the nature and extent of harm, and any indicators of further risk.]

**Lead Investigator Sign-Off:**

| Field | Details |
|---|---|
| **Name** | [Name] |
| **Title** | [Title] |
| **Date of Report** | [DD/MM/YYYY] |
| **Signature** | [Signature] |

---

## 4. Evidence Chain of Custody Records

*This section maintains the integrity of all evidence collected during the investigation. Every item of evidence must be logged at the point of collection and any subsequent transfer or access must be recorded. Tampering with or failing to log evidence items undermines admissibility and regulatory credibility.*

### 4.1 Evidence Register

| Evidence ID | Description | Format | Date/Time Collected | Collected By | Storage Location | Hash/Integrity Check |
|---|---|---|---|---|---|---|
| [EVD-001] | [e.g., System log export from [Server Name]] | [e.g., .evtx file] | [DD/MM/YYYY HH:MM] | [Name] | [e.g., Encrypted USB / Forensic server path] | [SHA-256: xxxxxxxxxx] |
| [EVD-002] | [e.g., Database access log] | [e.g., .csv] | [DD/MM/YYYY HH:MM] | [Name] | [Location] | [Hash] |
| [EVD-003] | [e.g., Email headers from phishing campaign] | [e.g., .eml] | [DD/MM/YYYY HH:MM] | [Name] | [Location] | [Hash] |
| [EVD-004] | [e.g., Forensic disk image of affected workstation] | [e.g., .dd image] | [DD/MM/YYYY HH:MM] | [Name] | [Location] | [Hash] |

### 4.2 Chain of Custody Transfer Log

| Evidence ID | Date/Time | Transferred From | Transferred To | Purpose | Authorised By |
|---|---|---|---|---|---|
| [EVD-001] | [DD/MM/YYYY HH:MM] | [Name] | [Name] | [e.g., External forensic analysis] | [Name, Title] |
| [EVD-002] | [DD/MM/YYYY HH:MM] | [Name] | [Name] | [e.g., Legal review] | [Name, Title] |

### 4.3 Evidence Storage and Retention

| Field | Details |
|---|---|
| **Primary Storage** | [Location and access controls] |
| **Backup Storage** | [Location] |
| **Access Controls** | [e.g., Access restricted to DPO, CISO, and assigned investigators] |
| **Retention Period** | [e.g., 7 years from incident closure, per PDPA record-keeping requirements] |
| **Destruction Method** | [e.g., Secure overwrite / Physical destruction — upon expiry of retention period] |

---

## 5. Commissioner Notification Submissions and Acknowledgements

*This section records all communications with the Personal Data Protection Commissioner (PDPC) in fulfilment of mandatory breach notification obligations under PDPA s143A. All submissions, correspondence, and acknowledgements must be retained in full.*

### 5.1 Notification Obligation Assessment

| Field | Details |
|---|---|
| **Breach confirmed as notifiable under s143A?** | [Yes / No — if No, state rationale] |
| **Date notification obligation triggered** | [DD/MM/YYYY] |
| **Statutory notification deadline** | [DD/MM/YYYY — calculated per regulatory guidance] |
| **Date of actual submission** | [DD/MM/YYYY] |
| **Submission within deadline?** | [Yes / No — if No, explain delay] |

### 5.2 Initial Notification to Commissioner

| Field | Details |
|---|---|
| **Date Submitted** | [DD/MM/YYYY] |
| **Submission Method** | [e.g., PDPC Online Portal / Email to [address] / Registered post] |
| **Reference Number Assigned by PDPC** | [PDPC Reference: XXXXXXX] |
| **Submitted By** | [Name, Title] |
| **Summary of Information Provided** | [Briefly describe the content of the notification — nature of breach, categories and approximate number of data subjects, likely consequences, measures taken] |

**Attach or reference:** [Attachment A-1: Copy of Initial Notification Submission]

### 5.3 Supplementary Notifications and Correspondence

*Record any follow-up submissions, requests for information from the Commissioner, and responses provided.*

| Date | Type of Correspondence | Direction | Reference | Summary | Attachment |
|---|---|---|---|---|---|
| [DD/MM/YYYY] | [e.g., Supplementary information submission] | [Outgoing] | [Reference] | [Summary] | [Attachment A-2] |
| [DD/MM/YYYY] | [e.g., Commissioner request for further information] | [Incoming] | [Reference] | [Summary] | [Attachment A-3] |
| [DD/MM/YYYY] | [e.g., Response to Commissioner's enquiry] | [Outgoing] | [Reference] | [Summary] | [Attachment A-4] |

### 5.4 Commissioner Acknowledgements and Determinations

| Field | Details |
|---|---|
| **Acknowledgement received?** | [Yes / No / Pending] |
| **Date of Acknowledgement** | [DD/MM/YYYY] |
| **Commissioner's Reference** | [Reference number] |
| **Any enforcement action initiated?** | [Yes / No — if Yes, describe] |
| **Outcome / Determination** | [Summarise any regulatory determination, direction, or closure confirmation received] |

---

## 6. Data Subject Notification Records and Delivery Evidence

*This section documents the notification of affected data subjects, in accordance with PDPA s143A requirements. Where notification is determined unnecessary or exempt, the rationale must be clearly recorded and approved by the DPO.*

### 6.1 Notification Decision

| Field | Details |
|---|---|
| **Decision to notify data subjects** | [Yes / No / Partial] |
| **Basis for decision** | [e.g., Likely to result in high risk of harm — notification required / Risk assessed as low — notification not required per regulatory guidance] |
| **Decision made by** | [Name, Title] |
| **Decision date** | [DD/MM/YYYY] |
| **If not notifying — Commissioner informed of decision?** | [Yes / No / N/A] |

### 6.2 Notification Content

*Summarise the content of the notification communicated to data subjects. Attach the full notification template as an appendix.*

| Element | Included? | Notes |
|---|---|---|
| Description of the nature of the breach | [Yes / No] | |
| Name and contact details of DPO | [Yes / No] | |
| Likely consequences of the breach | [Yes / No] | |
| Measures taken or proposed to address the breach | [Yes / No] | |
| Advice to data subjects on protective steps | [Yes / No] | |
| Complaint / escalation mechanism | [Yes / No] | |

**Attach or reference:** [Attachment B-1: Data Subject Notification Template / Letter]

### 6.3 Notification Delivery Log

| Notification Method | Number Sent | Date Sent | Sent By | Delivery Confirmation |
|---|---|---|---|---|
| [e.g., Email] | [Number] | [DD/MM/YYYY] | [Name/System] | [e.g., Email delivery report — Attachment B-2] |
| [e.g., SMS] | [Number] | [DD/MM/YYYY] | [Name/System] | [e.g., Telco delivery receipt — Attachment B-3] |
| [e.g., Physical letter / registered post] | [Number] | [DD/MM/YYYY] | [Name] | [e.g., Postal tracking reference] |
| [e.g., Website / public notice] | [N/A] | [DD/MM/YYYY] | [Name] | [e.g., Screenshot of published notice — Attachment B-4] |
| **Total data subjects notified** | **[Total]** | | | |

### 6.4 Data Subject Enquiries and Complaints Received

| Reference | Date Received | Channel | Summary of Enquiry/Complaint | Response Date | Outcome |
|---|---|---|---|---|---|
| [DSE-001] | [DD/MM/YYYY] | [e.g., Email / Phone] | [Summary] | [DD/MM/YYYY] | [e.g., Resolved / Referred to Commissioner] |
| [DSE-002] | [DD/MM/YYYY] | [Channel] | [Summary] | [DD/MM/YYYY] | [Outcome] |

---

## 7. Third-Party and Processor Notification Correspondence

*This section records notifications made to, and received from, third parties with an interest in or obligation arising from the breach — including data processors, joint controllers, business partners, insurers, and relevant regulators other than PDPC.*

### 7.1 Third-Party Notification Register

| Notified Party | Relationship | Notification Date | Method | Contact Person | Reference / Acknowledgement |
|---|---|---|---|---|---|
| [e.g., [Processor Name]] | Data Processor | [DD/MM/YYYY] | [Email / Registered letter] | [Name, email] | [Reference / Attachment C-1] |
| [e.g., [Partner Name]] | Joint Controller | [DD/MM/YYYY] | [Method] | [Contact] | [Reference / Attachment C-2] |
| [e.g., Cyber insurance provider] | Insurer | [DD/MM/YYYY] | [Method] | [Contact] | [Reference / Attachment C-3] |
| [e.g., Bank Negara Malaysia (BNM)] | Prudential regulator | [DD/MM/YYYY] | [Method] | [Contact] | [Reference / Attachment C-4] |
| [e.g., Law enforcement (PDRM/CyberSecurity Malaysia)] | Competent authority | [DD/MM/YYYY] | [Method] | [Contact] | [Police report ref: / Attachment C-5] |

### 7.2 Processor Obligations and Accountability

*Where the breach occurred at a third-party data processor, record the contractual and regulatory basis for the processor's obligations and their response.*

| Field | Details |
|---|---|
| **Processor involved in breach?** | [Yes / No] |
| **Processor name** | [Processor Name] |
| **Relevant DPA / contractual clause** | [e.g., Data Processing Agreement, Clause X — Breach Notification within 24 hours] |
| **Processor's notification to [Organization Name]** | [Date: DD/MM/YYYY — Attach notification as Appendix C-6] |
| **Processor's remediation obligations** | [Summarise contractual remediation commitments] |
| **Processor performance assessment** | [e.g., Notified within contractual timeframe: Yes / No] |

### 7.3 Inbound Notifications Received

| Date Received | From | Nature of Notification | Action Taken | Reference |
|---|---|---|---|---|
| [DD/MM/YYYY] | [Name / Organisation] | [Summary] | [Action taken by [Organization Name]] | [Reference] |

---

## 8. Remediation Action Plan and Completion Evidence

*This section captures the structured plan of corrective and preventive actions arising from the investigation and root cause analysis. Each action must be assigned an owner, a target completion date, and must be evidenced upon closure.*

### 8.1 Remediation Summary

| Field | Details |
|---|---|
| **Remediation Plan Approved By** | [Name, Title] |
| **Approval Date** | [DD/MM/YYYY] |
| **Target Full Remediation Date** | [DD/MM/YYYY] |
| **Actual Full Remediation Date** | [DD/MM/YYYY] |

### 8.2 Corrective Action Plan

*Corrective actions address the immediate cause and contain the breach impact.*

| Action ID | Action Description | Root Cause Addressed | Owner | Priority | Target Date | Completion Date | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| [CA-001] | [e.g., Apply emergency patch to [system] — CVE-XXXX-XXXX] | [Unpatched vulnerability] | [Name] | [Critical] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Change ticket #XXXX / Attachment D-1] |
| [CA-002] | [e.g., Reset all credentials for affected accounts] | [Credential compromise] | [Name] | [Critical] | [DD/MM/YYYY] | [DD/MM/YYYY] | [AD audit log / Attachment D-2] |
| [CA-003] | [e.g., Revoke third-party access to [system]] | [Excessive third-party access] | [Name] | [High] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Access log extract / Attachment D-3] |

### 8.3 Preventive Action Plan

*Preventive actions address contributing factors and systemic vulnerabilities to prevent recurrence.*

| Action ID | Action Description | Contributing Factor Addressed | Owner | Priority | Target Date | Completion Date | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| [PA-001] | [e.g., Implement MFA on all remote access systems] | [Absence of MFA] | [Name] | [High] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Configuration evidence / Attachment D-4] |
| [PA-002] | [e.g., Revise patch management SOP to include legacy systems] | [Incomplete patch scope] | [Name] | [High] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Updated SOP / Attachment D-5] |
| [PA-003] | [e.g., Conduct phishing awareness training for all staff] | [Human factor — phishing susceptibility] | [Name] | [Medium] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Training completion report / Attachment D-6] |
| [PA-004] | [e.g., Conduct quarterly third-party access reviews] | [Overdue access review] | [Name] | [Medium] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Access review report / Attachment D-7] |

### 8.4 Remediation Closure Sign-Off

| Field | Details |
|---|---|
| **All corrective actions completed?** | [Yes / No — list outstanding items] |
| **All preventive actions completed?** | [Yes / No — list outstanding items with revised dates] |
| **Residual risk accepted by** | [Name, Title] |
| **Incident formally closed by** | [Name, Title] |
| **Incident closure date** | [DD/MM/YYYY] |
| **Signature** | [Signature] |

---

## 9. Post-Incident Review Report and Lessons Learned

*This section documents the structured post-incident review (PIR), conducted after containment and initial remediation. The PIR should be facilitated by the DPO and attended by key stakeholders. Its purpose is to extract organisational learning, not to attribute blame.*

### 9.1 Post-Incident Review Details

| Field | Details |
|---|---|
| **PIR Date** | [DD/MM/YYYY] |
| **Facilitated By** | [Name, Title] |
| **Attendees** | [Names and titles of attendees] |
| **Meeting Reference / Minutes** | [Attach as Appendix E-1] |

### 9.2 What Worked Well

*Identify aspects of the incident response that functioned effectively and should be reinforced.*

| Reference | Observation | Recommendation |
|---|---|---|
| [WWW-001] | [e.g., Incident detection via SIEM alert was timely and accurate] | [Maintain and expand SIEM coverage] |
| [WWW-002] | [e.g., DPO notification occurred within internal SLA of 2 hours] | [Embed in updated IR procedure] |
| [WWW-003] | [e.g., Legal counsel was engaged promptly and provided effective guidance] | [Formalise legal escalation trigger in IR playbook] |

### 9.3 Areas for Improvement

*Identify gaps, delays, or failures in the incident response process.*

| Reference | Observation | Root Cause | Improvement Action | Owner | Target Date |
|---|---|---|---|---|---|
| [AFI-001] | [e.g., Initial triage underestimated volume of affected records by 40%] | [Incomplete data mapping] | [Conduct enterprise data mapping exercise] | [Name] | [DD/MM/YYYY] |
| [AFI-002] | [e.g., Third-party processor did not notify within contractual 24-hour window] | [Processor internal process failure] | [Review and strengthen DPA terms; conduct processor audit] | [Name] | [DD/MM/YYYY] |
| [AFI-003] | [e.g., Communication templates were not pre-approved, causing delay] | [Absence of pre-approved templates] | [Develop and pre-approve breach notification templates] | [Name] | [DD/MM/YYYY] |

### 9.4 Lessons Learned Summary

> [Provide a consolidated narrative of the key lessons learned from this incident. This summary should be suitable for sharing with senior management and the board, and should inform updates to the organisation's data breach response plan, privacy risk register, and relevant policies and procedures.]

### 9.5 Policy and Procedure Updates Required

| Document to be Updated | Nature of Update | Owner | Target Date | Completion Date |
|---|---|---|---|---|
| [e.g., Data Breach Response Plan] | [e.g., Update escalation timelines and add new notification templates] | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [e.g., Data Processor Management Policy] | [e.g., Strengthen breach notification obligations in DPA template] | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [e.g., Information Security Policy] | [e.g., Mandate MFA for all remote access systems] | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] |

### 9.6 PIR Approved By

| Name | Title | Signature | Date |
|---|---|---|---|
| [Name] | Data Protection Officer | [Signature] | [DD/MM/YYYY] |
| [Name] | Chief Information Security Officer | [Signature] | [DD/MM/YYYY] |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for key activities in the data breach investigation and notification lifecycle. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | DPO | CISO | IT / Security Team | Legal Counsel | Senior Management / Board | Affected Business Unit | Data Processor (if applicable) |
|---|---|---|---|---|---|---|---|
| Initial breach detection and reporting | I | I | R | I | I | R | R |
| Activation of incident response | A | R | R | C | I | I | I |
| Initial triage and severity assessment | A | R | R | C | I | C | C |
| Forensic investigation | C | A | R | I | I | I | C |
| Evidence preservation and chain of custody | A | R | R | C | I | I | I |
| Decision on regulatory notification | A/R | C | C | C | I | I | I |
| Commissioner notification (s143A) | R/A | C | I | C | I | I | I |
| Data subject notification | R/A | C | I | C | I | C | I |
| Third-party / processor notification | A | C | I | C | I | R | R |
| Remediation action plan development | C | A | R | I | I | C | C |
| Remediation execution and closure | C | A | R | I | I | C | R |
| Post-incident review facilitation | R/A | C | C | C | I | C | I |
| Board / senior management reporting | R/A | C | I | C | A | I | I |
| Record maintenance and retention | A | C | I | I | I | I | I |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes / Reason for Update |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Title] | Initial record created for incident [Incident Reference ID] |
| [1.1] | [DD/MM/YYYY] | [Name, Title] | [e.g., Updated following forensic investigation completion] |
| [1.2] | [DD/MM/YYYY] | [Name, Title] | [e.g., Added post-incident review findings and closed record] |

### 11.2 Approval Sign-Off

*This record requires sign-off from the following roles upon completion and closure.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Information Security Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Legal Counsel | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Executive Officer / Designated Senior Manager | [Name] | [Signature] | [DD/MM/YYYY] |

---

## 12. References

The following legislative provisions, regulatory guidance, and internal documents are applicable to this record:

| Reference | Description |
|---|---|
| PDPA 2010, **Section 9** | Security Principle — obligation to take practical steps to protect personal data against loss, misuse, modification, unauthorised or accidental access or disclosure, alteration, or destruction |
| PDPA 2010, **Section 143A** | Mandatory data breach notification to the Commissioner and, where applicable, to affected data subjects |
| PDPA 2010, **Section 11** | Right of data subjects to access their personal data |
| PDPA 2010, **Section 12** | Right of data subjects to correction of their personal data |
| **PDPC Breach Notification Guidelines** | [Reference and version of applicable Commissioner's guidelines or circulars] |
| **[Organization Name] Data Breach Response Plan** | [Document ID] — internal incident response procedures |
| **[Organization Name] Information Security Policy** | [Document ID] |
| **[Organization Name] Data Protection Policy** | [Document ID] |
| **[Organization Name] Data Processor Management Policy** | [Document ID] |
| **ISO/IEC 27001:2022** | Information security management — Annex A.5.24 to A.5.28 (Information security incident management) |
| **Bank Negara Malaysia Risk Management in Technology (RMiT)** | Policy Document on Risk Management in Technology — Incident reporting obligations [where applicable to licensed financial institutions] |

---

## 13. Appendices

*Attach all supporting documents and evidence to this record. Each appendix must be referenced in the body of this document and logged in the Evidence Register (Section 4) where applicable.*

| Appendix | Title | Description | Date Added |
|---|---|---|---|
| **Appendix A-1** | External Forensic Investigation Report | Full forensic report prepared by [External Firm, if applicable] | [DD/MM/YYYY] |
| **Appendix A-2** | Investigation Timeline Evidence | Screenshots, log extracts, and artefacts supporting the investigation timeline | [DD/MM/YYYY] |
| **Appendix B-1** | Data Subject Notification Template | Approved notification letter / email template used for data subject communication | [DD/MM/YYYY] |
| **Appendix B-2** | Data Subject Delivery Evidence | Email delivery reports, SMS confirmation logs, postal tracking records | [DD/MM/YYYY] |
| **Appendix C-1** | Commissioner Notification Submission | Copy of initial breach notification submitted to PDPC under s143A | [DD/MM/YYYY] |
| **Appendix C-2** | Commissioner Correspondence File | All subsequent correspondence with PDPC, including acknowledgements and directions | [DD/MM/YYYY] |
| **Appendix C-3** | Third-Party Notification Correspondence | Copies of notifications sent to processors, joint controllers, insurers, and other regulators | [DD/MM/YYYY] |
| **Appendix D-1** | Remediation Evidence Package | Change tickets, configuration evidence, training records, and other completion evidence | [DD/MM/YYYY] |
| **Appendix E-1** | Post-Incident Review Meeting Minutes | Signed minutes of the post-incident review meeting | [DD/MM/YYYY] |
| **Appendix F-1** | [Additional Appendix Title] | [Description] | [DD/MM/YYYY] |

---

*This record is classified as **Confidential** and must be handled, stored, and transmitted in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure of this record may constitute a breach of the Personal Data Protection Act 2010 and applicable confidentiality obligations. Retain for a minimum of [7] years from the date of incident closure.*

---

*End of Document — [Incident Reference ID] — Version [1.0] — [Organization Name]*