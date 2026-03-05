# Data Processing Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Department / Data Protection Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [System Access Logs for Personal Data Systems](#2-system-access-logs-for-personal-data-systems)
3. [Data Export and Transfer Logs](#3-data-export-and-transfer-logs)
4. [Batch Processing Records](#4-batch-processing-records)
5. [Data Quality and Integrity Check Records](#5-data-quality-and-integrity-check-records)
6. [De-identification and Pseudonymisation Activity Records](#6-de-identification-and-pseudonymisation-activity-records)
7. [Processing Exception Logs](#7-processing-exception-logs)
8. [System Configuration Change Records](#8-system-configuration-change-records-affecting-personal-data)
9. [Automated Decision-Making Records](#9-automated-decision-making-records)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document constitutes the **Data Processing Records** for [Organization Name], maintained to provide operational evidence of personal data processing activities conducted in accordance with the **Personal Data Protection Act 2010 (PDPA)** of Malaysia. These records demonstrate [Organization Name]'s commitment to accountability and transparency in the handling of personal data, as required under **Section 5 (General Principle)** and **Section 9 (Retention Principle)** of the PDPA.

These records serve to:

- Provide an auditable trail of all personal data processing activities undertaken by [Organization Name].
- Demonstrate compliance with the data protection principles enshrined in the PDPA.
- Support internal and external audit activities, regulatory inspections, and data subject access requests.
- Evidence the application of technical and organisational controls protecting personal data throughout its lifecycle.

### 1.2 Scope

These records apply to:

- **Data:** All personal data as defined under Section 4 of the PDPA that is collected, stored, used, disclosed, transferred, or otherwise processed by [Organization Name].
- **Systems:** All information systems, applications, databases, and platforms operated by or on behalf of [Organization Name] that process personal data, including [List key systems, e.g., core banking system, CRM, HR information system].
- **Personnel:** All employees, contractors, vendors, and third-party processors who access or process personal data on behalf of [Organization Name].
- **Processing Activities:** All automated and manual processing activities involving personal data, including collection, recording, storage, retrieval, use, disclosure, and erasure.

### 1.3 Exclusions

*Document any categories of processing that fall outside the scope of this record set, if applicable.*

- [Exclusion 1, e.g., Anonymised data that no longer constitutes personal data under the PDPA]
- [Exclusion 2]

### 1.4 Regulatory Basis

| Regulatory Instrument | Relevant Provision | Obligation |
|---|---|---|
| Personal Data Protection Act 2010 | Section 5 — General Principle | Personal data shall only be processed for purposes for which it was collected and in accordance with the data subject's consent |
| Personal Data Protection Act 2010 | Section 9 — Retention Principle | Personal data shall not be kept longer than is necessary for the fulfilment of the purpose |
| Personal Data Protection Act 2010 | Section 11 — Data Integrity Principle | Reasonable steps shall be taken to ensure personal data is accurate, complete, not misleading, and kept up to date |
| Personal Data Protection Act 2010 | Section 12 — Access Principle | Data subjects shall be given access to their personal data and the right to correct inaccurate data |
| Personal Data Protection (Class of Data Users) Order 2013 | Applicable Class | [Specify applicable data user class, e.g., Finance and Insurance] |

---

## 2. System Access Logs for Personal Data Systems

*This section captures a record of all access events to systems containing personal data. Logs must include sufficient detail to identify who accessed what data, when, and from where, enabling detection of unauthorised or anomalous access.*

### 2.1 Overview

System access logs are generated automatically by [Organization Name]'s information systems and aggregated via [Logging Platform / SIEM Tool, e.g., Wazuh, Splunk]. Logs are retained for a minimum of [Retention Period, e.g., 12 months] in accordance with the organisation's Data Retention Policy [Document ID].

### 2.2 Personal Data Systems in Scope

| System Name | System ID | Data Categories Processed | Log Source | Log Retention Period |
|---|---|---|---|---|
| [System Name, e.g., Core Banking System] | [SYS-001] | [e.g., Financial, Identity] | [e.g., Application Log / OS Audit Log] | [e.g., 12 months] |
| [System Name, e.g., Customer CRM] | [SYS-002] | [e.g., Contact, Behavioural] | [e.g., Application Log] | [e.g., 12 months] |
| [System Name] | [SYS-003] | [e.g., Health, Sensitive] | [e.g., Database Audit Log] | [e.g., 24 months] |

### 2.3 Access Log Record Format

| Field | Description | Example Value |
|---|---|---|
| **Log ID** | Unique identifier for the log entry | LOG-2025-001234 |
| **Timestamp** | Date and time of access event (UTC +8) | 2025-01-15 09:32:11 MYT |
| **User ID** | Authenticated user identifier | USR-4521 |
| **User Role** | Role at time of access | Customer Service Officer |
| **System** | System accessed | CRM |
| **Action Type** | Type of operation performed | READ / WRITE / DELETE / EXPORT |
| **Data Record Accessed** | Record identifier or category accessed | Customer Account ID: [XXXX] |
| **Source IP Address** | IP address of the accessing terminal | [IP Address] |
| **Session ID** | Unique session identifier | SESS-20250115-4521 |
| **Outcome** | Success or failure of access attempt | SUCCESS / FAILURE |
| **Justification / Ticket Ref** | Business reason or change ticket reference (where applicable) | INC-2025-0045 |

### 2.4 Access Review Summary

*Record the outcome of periodic access log reviews here. Reviews should be conducted at minimum monthly and findings documented below.*

| Review Period | Reviewing Officer | Date Completed | Anomalies Detected | Incidents Raised | Sign-off |
|---|---|---|---|---|---|
| [e.g., Q1 2025] | [Name / Role] | [Date] | [Yes / No — details] | [Incident Ref or None] | [Signature] |
| [e.g., Q2 2025] | [Name / Role] | [Date] | [Yes / No — details] | [Incident Ref or None] | [Signature] |

---

## 3. Data Export and Transfer Logs

*This section records all instances where personal data is exported from internal systems or transferred to internal departments, third parties, or cross-border recipients. These records are essential evidence of compliance with the PDPA's disclosure and transfer restrictions.*

### 3.1 Overview

All data exports and transfers involving personal data must be logged prior to execution and approved in accordance with [Organization Name]'s Data Transfer Policy [Document ID]. Cross-border transfers must additionally comply with Section 129 of the PDPA and applicable regulations.

### 3.2 Data Export and Transfer Log

| Transfer ID | Date & Time | Initiating User | Source System | Destination | Recipient Organisation | Data Categories | Volume (Records) | Transfer Method | Legal Basis | Approval Reference | Transfer Outcome |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TRF-2025-0001 | [Date / Time] | [User ID / Name] | [System Name] | [Internal Dept / External Party] | [Name of Recipient] | [e.g., Identity, Financial] | [e.g., 1,250] | [e.g., Encrypted SFTP / API / Email] | [e.g., Consent / Contract / Legal Obligation] | [Approval Ref] | [Success / Failed / Partial] |
| TRF-2025-0002 | [Date / Time] | [User ID / Name] | [System Name] | [Destination] | [Name of Recipient] | [Data Categories] | [Volume] | [Transfer Method] | [Legal Basis] | [Approval Ref] | [Outcome] |

### 3.3 Cross-Border Transfer Records

*Complete this sub-section for any transfers of personal data to recipients outside Malaysia.*

| Transfer ID | Destination Country | Recipient Entity | Adequacy Status | Safeguard Applied | DPO Approval Date | Reference |
|---|---|---|---|---|---|---|
| [TRF-XBDR-001] | [Country] | [Entity Name] | [Adequate / Non-Adequate] | [e.g., Standard Contractual Clauses / Binding Corporate Rules] | [Date] | [Approval Ref] |

---

## 4. Batch Processing Records

*This section documents scheduled and ad-hoc batch jobs that process personal data in bulk. Each batch run must be logged with sufficient detail to verify that processing was authorised, completed correctly, and within the defined scope.*

### 4.1 Overview

Batch processing activities involving personal data are scheduled and managed through [Batch Scheduler / ETL Tool, e.g., Apache Airflow, SQL Server Agent]. All batch jobs processing personal data must be registered in the Batch Processing Register below.

### 4.2 Batch Job Register

| Job ID | Job Name / Description | Processing System | Data Categories | Frequency | Scheduled Time | Data Owner | Business Purpose | Legal Basis |
|---|---|---|---|---|---|---|---|---|
| BATCH-001 | [e.g., Monthly Account Statement Generation] | [System Name] | [e.g., Financial, Identity] | [e.g., Monthly] | [e.g., 1st of month, 02:00 MYT] | [Department] | [Purpose] | [e.g., Contract Performance] |
| BATCH-002 | [e.g., Nightly Customer Data Sync] | [System Name] | [Data Categories] | [Frequency] | [Scheduled Time] | [Department] | [Purpose] | [Legal Basis] |

### 4.3 Batch Processing Execution Log

| Run ID | Job ID | Run Date & Time | Initiated By | Records Processed | Records Succeeded | Records Failed | Duration | Exit Status | Error Reference |
|---|---|---|---|---|---|---|---|---|---|
| RUN-2025-00001 | BATCH-001 | [Date / Time] | [Scheduler / User] | [e.g., 45,000] | [e.g., 44,998] | [e.g., 2] | [e.g., 00:12:34] | [SUCCESS / FAILED / PARTIAL] | [Error Ticket Ref or N/A] |
| RUN-2025-00002 | BATCH-002 | [Date / Time] | [Scheduler / User] | [Volume] | [Succeeded] | [Failed] | [Duration] | [Status] | [Reference] |

---

## 5. Data Quality and Integrity Check Records

*This section records the outcomes of data quality and integrity assessments performed on personal data, supporting compliance with the Data Integrity Principle under Section 11 of the PDPA. Records should capture what checks were performed, by whom, and any remediation actions taken.*

### 5.1 Overview

Data quality checks are performed [frequency, e.g., monthly and upon any significant data migration or system change] by the [Data Management Team / IT Operations]. Results are reviewed by the Data Protection Officer and relevant data owners.

### 5.2 Data Quality Check Register

| Check ID | Date Performed | System / Dataset | Check Type | Performed By | Records Checked | Pass Rate (%) | Issues Identified | Severity | Remediation Action | Remediation Date | Sign-off |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DQC-2025-001 | [Date] | [System / Dataset] | [e.g., Completeness / Accuracy / Consistency / Timeliness] | [Name / Team] | [Volume] | [e.g., 98.5%] | [Description of issues] | [High / Medium / Low] | [Action taken] | [Date] | [Name] |
| DQC-2025-002 | [Date] | [System / Dataset] | [Check Type] | [Name / Team] | [Volume] | [%] | [Issues] | [Severity] | [Action] | [Date] | [Name] |

### 5.3 Data Integrity Verification

*Record outcomes of technical integrity checks such as hash verification, referential integrity checks, and checksum validation.*

| Verification ID | Date | Dataset / Table | Method Used | Expected Value | Actual Value | Result | Investigated By | Resolution |
|---|---|---|---|---|---|---|---|---|
| INTG-2025-001 | [Date] | [Dataset] | [e.g., MD5 Checksum / Row Count / Hash Comparison] | [Expected] | [Actual] | [PASS / FAIL] | [Name] | [Resolution details or N/A] |

---

## 6. De-identification and Pseudonymisation Activity Records

*This section documents all activities where personal data has been de-identified, anonymised, or pseudonymised. Records must capture the method used, the data affected, and the authorisation for the activity, to demonstrate that appropriate protective measures have been applied.*

### 6.1 Overview

De-identification and pseudonymisation activities are performed to reduce privacy risk when personal data is used for secondary purposes such as analytics, testing, or research. All such activities must be approved by the Data Protection Officer prior to execution.

### 6.2 De-identification and Pseudonymisation Activity Log

| Activity ID | Date Performed | Source System / Dataset | Data Categories Affected | Volume of Records | Technique Applied | Tool / Method Used | Performed By | DPO Approval Ref | Purpose of Activity | Residual Re-identification Risk | Outcome |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DEID-2025-001 | [Date] | [System / Dataset] | [e.g., Name, IC Number, Address] | [Volume] | [e.g., Pseudonymisation / Anonymisation / Data Masking / Tokenisation / Generalisation] | [Tool or Method] | [Name / Team] | [Approval Ref] | [e.g., UAT Testing / Analytics] | [High / Medium / Low / None] | [e.g., Completed — dataset released to Analytics team] |
| DEID-2025-002 | [Date] | [System / Dataset] | [Data Categories] | [Volume] | [Technique] | [Tool] | [Name] | [Approval Ref] | [Purpose] | [Risk Level] | [Outcome] |

### 6.3 Pseudonymisation Key Management

*Record where pseudonymisation keys are stored and the controls in place to prevent re-identification.*

| Key ID | Associated Activity ID | Key Storage Location | Access Controls | Key Rotation Schedule | Key Custodian |
|---|---|---|---|---|---|
| KEY-001 | DEID-2025-001 | [e.g., Hardware Security Module / Vault] | [e.g., Dual-authorisation required] | [e.g., Annual / On request] | [Name / Role] |

---

## 7. Processing Exception Logs

*This section records any anomalies, errors, policy violations, or unexpected events that occurred during the processing of personal data. Exception logs are critical for identifying potential data breaches, systemic process failures, or indicators of non-compliance.*

### 7.1 Overview

Processing exceptions are captured automatically by [Logging Platform / SIEM] and supplemented by manual reports from operational staff. All exceptions involving personal data must be reviewed by the DPO within [e.g., 2 business days] of detection. Exceptions that may constitute a data breach are escalated in accordance with the Data Breach Response Plan [Document ID].

### 7.2 Processing Exception Log

| Exception ID | Date & Time Detected | Detected By / Source | System Affected | Nature of Exception | Personal Data Involved | Volume Affected | Severity | Breach Indicator | Assigned To | Investigation Status | Resolution Summary | Resolution Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EXC-2025-0001 | [Date / Time] | [Source, e.g., SIEM Alert / Staff Report] | [System] | [Description, e.g., Unauthorised export attempt detected] | [Data categories] | [Volume or Unknown] | [Critical / High / Medium / Low] | [Yes / No / Under Investigation] | [Name / Team] | [Open / Under Investigation / Closed] | [Summary of resolution] | [Date] |
| EXC-2025-0002 | [Date / Time] | [Source] | [System] | [Description] | [Data categories] | [Volume] | [Severity] | [Breach Indicator] | [Assignee] | [Status] | [Resolution] | [Date] |

### 7.3 Exception Trend Analysis

*Summarise exception trends for each quarterly review period to identify systemic issues requiring process or control improvements.*

| Review Period | Total Exceptions | Critical | High | Medium | Low | Breach Notifications Made | Systemic Issues Identified | Corrective Actions Initiated |
|---|---|---|---|---|---|---|---|---|
| Q1 [Year] | [Total] | [Count] | [Count] | [Count] | [Count] | [Yes / No — details] | [Description or None] | [Action Ref or None] |
| Q2 [Year] | [Total] | [Count] | [Count] | [Count] | [Count] | [Yes / No] | [Description or None] | [Action Ref or None] |

---

## 8. System Configuration Change Records Affecting Personal Data

*This section documents changes to the configuration of systems that process personal data, including changes to access controls, data retention settings, encryption parameters, and integration points. Configuration changes must be managed through the Change Management process and assessed for data protection impact prior to implementation.*

### 8.1 Overview

Configuration changes to personal data systems are governed by [Organization Name]'s Change Management Policy [Document ID]. All changes with a potential impact on personal data protection must receive DPO review prior to approval. Emergency changes must be reviewed post-implementation within [e.g., 48 hours].

### 8.2 Configuration Change Register

| Change ID | Change Date | System Affected | Change Description | Change Category | Data Protection Impact | Risk Assessment Ref | Change Initiator | DPO Review | Change Approver | Implementation Date | Post-Implementation Test | Outcome |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CHG-2025-0001 | [Date] | [System Name] | [Description of change, e.g., Updated TLS configuration from 1.2 to 1.3] | [e.g., Security / Access Control / Data Retention / Integration] | [High / Medium / Low / None] | [DPIA Ref or N/A] | [Name / Team] | [Approved / Not Required / Pending] | [Name / Role] | [Date] | [Pass / Fail / N/A] | [Successful / Rolled Back] |
| CHG-2025-0002 | [Date] | [System Name] | [Description] | [Category] | [Impact] | [Ref] | [Initiator] | [DPO Review] | [Approver] | [Date] | [Test Result] | [Outcome] |

### 8.3 Emergency Change Record

*Emergency changes bypassing standard approval must be documented immediately and retrospectively reviewed.*

| Emergency Change ID | Date Implemented | System | Description | Justification | Implemented By | DPO Notified | Post-Implementation Review Date | Outcome |
|---|---|---|---|---|---|---|---|---|
| ECHG-2025-001 | [Date] | [System] | [Description] | [Business / Security Justification] | [Name] | [Yes / No — Date] | [Review Date] | [Approved / Reversed] |

---

## 9. Automated Decision-Making Records

*This section documents processing activities where automated systems make decisions that produce legal or similarly significant effects on data subjects, including credit scoring, fraud detection, and eligibility assessments. These records support transparency and the data subject's right to challenge automated decisions.*

### 9.1 Overview

[Organization Name] operates the following automated decision-making (ADM) systems that process personal data. Each system is assessed for fairness, accuracy, and compliance with the PDPA. Data subjects may request human review of automated decisions by contacting the Data Protection Officer at [DPO Contact Details].

### 9.2 Automated Decision-Making System Register

| ADM System ID | System Name | Business Purpose | Data Categories Processed | Decision Type | Decision Output | Legal Basis | DPIA Reference | DPO Review Date | Last Accuracy Assessment |
|---|---|---|---|---|---|---|---|---|---|
| ADM-001 | [e.g., Credit Scoring Engine] | [e.g., Loan eligibility determination] | [e.g., Financial history, identity, behavioural] | [e.g., Eligibility / Risk Classification / Fraud Flag] | [e.g., Approve / Decline / Score] | [e.g., Contract Performance / Legitimate Interest] | [DPIA Ref] | [Date] | [Date] |
| ADM-002 | [System Name] | [Purpose] | [Data Categories] | [Decision Type] | [Output] | [Legal Basis] | [DPIA Ref] | [Date] | [Date] |

### 9.3 Automated Decision Execution Log

| Decision ID | Date & Time | ADM System ID | Data Subject Reference | Input Data Categories | Decision Output | Confidence Score / Threshold | Decision Reviewed by Human | Human Review Outcome | Data Subject Notified | Challenge Received | Challenge Outcome |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DEC-2025-00001 | [Date / Time] | ADM-001 | [Anonymised Reference] | [Data categories] | [e.g., Decline] | [e.g., 0.87 / Threshold 0.80] | [Yes / No] | [Upheld / Overturned / N/A] | [Yes / No — Date] | [Yes / No] | [Resolution or N/A] |
| DEC-2025-00002 | [Date / Time] | [ADM System ID] | [Reference] | [Data categories] | [Output] | [Score / Threshold] | [Yes / No] | [Outcome] | [Yes / No] | [Yes / No] | [Resolution] |

### 9.4 Automated Decision-Making Accuracy and Bias Review

*Record the outcomes of periodic reviews to assess accuracy, fairness, and potential discriminatory outcomes of ADM systems.*

| Review ID | ADM System | Review Date | Review Method | Accuracy Rate | Bias Indicators Detected | Fairness Assessment | Reviewer | Corrective Actions | Next Review Date |
|---|---|---|---|---|---|---|---|---|---|
| ADMR-2025-001 | ADM-001 | [Date] | [e.g., Backtesting / Statistical Audit / Third-Party Review] | [%] | [Yes / No — description] | [Satisfactory / Requires Improvement] | [Name / Team] | [Action or None] | [Date] |

---

## 10. Roles and Responsibilities

*This section defines accountability for the maintenance, review, and approval of these Data Processing Records using a RACI framework.*

### 10.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Data Protection Officer | IT Operations | System / Data Owners | Compliance Team | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|
| Maintain system access logs | I | R | C | I | I | I |
| Review access logs for anomalies | A/R | R | C | C | I | I |
| Log and approve data transfers | A | R | C | C | I | I |
| Monitor and log batch processing | I | R | C | I | I | I |
| Conduct data quality checks | C | R | A | I | I | I |
| Perform de-identification activities | A | R | C | C | I | I |
| Log and investigate processing exceptions | A | R | C | R | I | I |
| Manage and log configuration changes | C | R | A | C | I | I |
| Maintain ADM records and conduct reviews | A | C | R | C | I | I |
| Quarterly review of all processing records | A/R | C | C | R | C | I |
| Annual approval of this document | C | I | C | C | A | R |
| Escalate data breach indicators | R | R | C | R | I | A |

### 10.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Data Protection Officer | [Name] | [Department] | [Email / Phone] |
| IT Operations Manager | [Name] | IT Department | [Email / Phone] |
| Chief Information Security Officer | [Name] | IT / Security | [Email / Phone] |
| Chief Compliance Officer | [Name] | Compliance | [Email / Phone] |
| [Other Key Role] | [Name] | [Department] | [Contact] |

---

## 11. Review and Approval

### 11.1 Review Schedule

These records are maintained continuously and undergo formal review on the following schedule:

| Review Type | Frequency | Responsible Party | Review Scope |
|---|---|---|---|
| Access Log Review | Monthly | IT Operations / DPO | Anomaly detection, access appropriateness |
| Exception Log Review | Monthly | DPO / IT Security | Incident assessment, breach determination |
| Configuration Change Review | Per change event | Change Advisory Board / DPO | Data protection impact of changes |
| Comprehensive Records Review | Quarterly | DPO / Compliance | All sections of this document |
| Annual Document Review | Annually | DPO / Senior Management | Completeness, regulatory currency, adequacy |

### 11.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name / Role] | Initial document created |
| [1.1] | [Date] | [Author Name / Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name / Role] | [Description of changes] |

### 11.3 Approval Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | __________________ | [Date] |
| IT Operations Manager | [Name] | __________________ | [Date] |
| Chief Compliance Officer | [Name] | __________________ | [Date] |
| [Approving Executive, e.g., CIO / COO] | [Name] | __________________ | [Date] |

---

## 12. References

### 12.1 Primary Legislation

| Reference | Description |
|---|---|
| Personal Data Protection Act 2010 (Act 709) — **Section 5** | General Principle: Personal data shall only be processed in accordance with the consent of the data subject and for the purpose for which it was collected or a directly related purpose |
| Personal Data Protection Act 2010 (Act 709) — **Section 9** | Retention Principle: Personal data shall not be kept longer than is necessary for fulfilment of the purpose, including any directly related purpose |
| Personal Data Protection Act 2010 (Act 709) — **Section 11** | Data Integrity Principle: Data users shall take reasonable steps to ensure that personal data is accurate, complete, not misleading, and kept up to date |
| Personal Data Protection Act 2010 (Act 709) — **Section 12** | Access Principle: Data subjects shall be given access to their personal data held by the data user |
| Personal Data Protection Act 2010 (Act 709) — **Section 129** | Prohibition on transfer of personal data outside Malaysia except to places specified under the Act or approved by the Minister |

### 12.2 Subsidiary Legislation and Guidelines

| Reference | Description |
|---|---|
| Personal Data Protection (Class of Data Users) Order 2013 | Specifies the classes of data users to which the PDPA applies, including [applicable class] |
| Personal Data Protection Regulations 2013 | Prescribed standards for processing, security, and retention of personal data |
| Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document | Cybersecurity and technology risk requirements applicable to financial institutions |
| [Other applicable guideline] | [Description] |

### 12.3 Internal Policy References

| Document ID | Document Title |
|---|---|
| [POL-DPO-001] | Data Protection Policy |
| [POL-IT-002] | Information Security Policy |
| [POL-IT-003] | Change Management Policy |
| [POL-DPO-004] | Data Retention and Disposal Policy |
| [POL-DPO-005] | Data Breach Response Plan |
| [POL-IT-006] | Data Transfer and Cross-Border Transfer Policy |
| [POL-DPO-007] | Automated Decision-Making Policy |

---

## 13. Appendices

### Appendix A — Log Retention Schedule

*This appendix specifies the minimum and maximum retention periods applicable to each category of processing record maintained under this document.*

| Record Type | Minimum Retention Period | Maximum Retention Period | Disposal Method | Regulatory Basis |
|---|---|---|---|---|
| System Access Logs | [e.g., 12 months] | [e.g., 36 months] | [e.g., Secure deletion] | PDPA s.9; RMiT |
| Data Export and Transfer Logs | [e.g., 7 years] | [e.g., 7 years] | [e.g., Secure deletion] | PDPA s.9 |
| Batch Processing Records | [e.g., 12 months] | [e.g., 24 months] | [e.g., Secure deletion] | PDPA s.9 |
| Data Quality Check Records | [e.g., 3 years] | [e.g., 5 years] | [e.g., Secure deletion] | PDPA s.11 |
| De-identification Records | [e.g., Lifetime of dataset] | [e.g., Lifetime + 3 years] | [e.g., Secure deletion] | PDPA s.5 |
| Processing Exception Logs | [e.g., 3 years] | [e.g., 7 years if breach] | [e.g., Secure deletion] | PDPA s.9 |
| Configuration Change Records | [e.g., 5 years] | [e.g., 7 years] | [e.g., Secure deletion] | PDPA s.9; RMiT |
| ADM Decision Records | [e.g., 3 years] | [e.g., 7 years] | [e.g., Secure deletion] | PDPA s.5; s.9 |

### Appendix B — Data Subject Rights Request Log

*Where processing records are retrieved in response to a data subject access request (DSAR) under Section 12 of the PDPA, the request and fulfilment details shall be recorded here.*

| DSAR ID | Date Received | Data Subject Reference | Request Type | Systems Queried | Records Provided | Response Date | Within Statutory Timeframe | Handler |
|---|---|---|---|---|---|---|---|---|
| DSAR-2025-001 | [Date] | [Anonymised Reference] | [Access / Correction / Withdrawal of Consent] | [Systems] | [Description] | [Date] | [Yes / No] | [Name] |

### Appendix C — Glossary of Terms

| Term | Definition |
|---|---|
| **Automated Decision-Making (ADM)** | Decision-making processes carried out by automated means without meaningful human involvement, producing legal or similarly significant effects on data subjects |
| **Data Processor** | A person who processes personal data solely on behalf of a data user, and not for any of the processor's own purposes |
| **Data Subject** | An individual who is the subject of personal data |
| **Data User** | A person who processes or has control over or authorises the processing of any personal data in respect of commercial transactions |
| **De-identification** | The process of removing or modifying personal data such that individuals cannot be identified directly or indirectly |
| **Personal Data** | Information in respect of commercial transactions that is being processed wholly or partly by means of equipment operating automatically, or recorded with the intention of being processed, that relates directly or indirectly to a data subject who can be identified from that information |
| **Processing** | Collection, recording, holding or storage, retrieval, alignment, combination, correction, erasure, use, or disclosure by transmission, transfer, dissemination or otherwise making available of personal data |
| **Pseudonymisation** | The processing of personal data in such a way that it can no longer be attributed to a specific data subject without the use of additional information |
| **Sensitive Personal Data** | Personal data as defined under Section 40 of the PDPA, including data relating to physical or mental health, political opinions, religious beliefs, and commission of offences |

### Appendix D — Escalation and Notification Matrix

*This appendix defines escalation thresholds and notification requirements for significant events arising from processing records.*

| Event Type | Trigger Condition | Immediate Escalation To | Notification Deadline | External Notification Required |
|---|---|---|---|---|
| Suspected data breach | Exception log indicates potential unauthorised access or disclosure | DPO, CISO, Legal | Within [e.g., 2 hours] of detection | [e.g., PDPD within 72 hours if required] |
| Bulk unauthorised export | Access log reveals bulk export outside approved business purpose | DPO, CISO | Within [e.g., 1 hour] | To be assessed by DPO |
| ADM system accuracy failure | Accuracy rate falls below [e.g., 90%] threshold | DPO, System Owner | Within [e.g., 24 hours] | Data subjects affected to be notified |
| Cross-border transfer without approval | Transfer log identifies unapproved overseas transfer | DPO, Compliance, Legal | Immediately | To be assessed by Legal |
| Configuration change without DPO review | Emergency change log shows no DPO notification | DPO, Change Advisory Board | Within [e.g., 48 hours] post-implementation | None unless breach results |

---

*End of Document*

*This document template is prepared for [Organization Name] in accordance with the Personal Data Protection Act 2010 (Malaysia). It should be reviewed by qualified legal counsel and the appointed Data Protection Officer prior to adoption. This template does not constitute legal advice.*