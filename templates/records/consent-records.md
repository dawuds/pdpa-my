# Consent Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Consent Record Unique Identifier](#2-consent-record-unique-identifier)
3. [Data Subject Pseudonym or Identifier](#3-data-subject-pseudonym-or-identifier)
4. [Consent Timestamp and Channel](#4-consent-timestamp-and-channel)
5. [Notice Version and Content Presented at Time of Consent](#5-notice-version-and-content-presented-at-time-of-consent)
6. [Specific Consent Options Selected](#6-specific-consent-options-selected)
7. [Withdrawal Record and Effective Date](#7-withdrawal-record-and-effective-date)
8. [Consent Audit Trail for Lifecycle Tracking](#8-consent-audit-trail-for-lifecycle-tracking)
9. [Legal Hold Flag](#9-legal-hold-flag)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the authoritative register of individual consents obtained from data subjects by **[Organization Name]** in accordance with the **Personal Data Protection Act 2010 (PDPA)**. It is maintained to demonstrate compliance with the Consent Principle under **PDPA Section 6** and the Notice and Choice Principle under **PDPA Section 7**, providing a verifiable, auditable record of how, when, and under what terms personal data was collected and processed.

These records constitute primary evidence that [Organization Name] has obtained valid, informed, and freely given consent prior to the processing of personal data, and that data subjects were provided with adequate notice of their rights and the purposes for which their data is to be used.

### 1.2 Scope

This register applies to:

- All personal data processing activities carried out by [Organization Name] that rely on consent as the lawful basis under the PDPA.
- All channels through which consent is collected, including digital platforms, physical forms, call centres, and third-party onboarding agents.
- All categories of data subjects, including customers, prospective customers, employees (where consent is the applicable basis), and third parties whose personal data is processed by [Organization Name].
- All consent events occurring from **[Effective Date]** onwards, with historical records maintained in accordance with the retention schedule defined in Appendix A.

### 1.3 Out of Scope

- Processing activities relying on statutory necessity, contractual performance, or legal obligation as the lawful basis (refer to [Related Policy/Document ID]).
- Processing of data by third-party processors acting solely on behalf of [Organization Name] under a valid Data Processing Agreement.

---

## 2. Consent Record Unique Identifier

*Each consent event must be assigned a unique, system-generated identifier to allow unambiguous retrieval and cross-referencing across all systems. The format must be consistent and applied uniformly across all consent channels.*

### 2.1 Identifier Format

All consent records maintained in this register are assigned a **Consent Record ID (CRID)** using the following standardized format:

```
CRID-[YYYY]-[MM]-[CHANNEL CODE]-[SEQUENCE NUMBER]
```

| Component | Description | Example |
|---|---|---|
| `CRID` | Fixed prefix for Consent Record ID | `CRID` |
| `[YYYY]` | Four-digit year of consent event | `2026` |
| `[MM]` | Two-digit month of consent event | `03` |
| `[CHANNEL CODE]` | Two-character channel code (see Appendix B) | `WB` (Web), `MB` (Mobile), `BR` (Branch), `CC` (Call Centre) |
| `[SEQUENCE NUMBER]` | Zero-padded sequential number, reset monthly | `000421` |

**Example:** `CRID-2026-03-WB-000421`

### 2.2 Identifier Register

*The table below is a high-level index. Full record details are maintained in the system of record identified in Section 8. Each row links a CRID to the relevant data subject pseudonym and consent event for quick cross-referencing during audits.*

| Consent Record ID (CRID) | Data Subject Pseudonym | Consent Date | Channel | Notice Version | Status |
|---|---|---|---|---|---|
| CRID-[YYYY]-[MM]-[CC]-[SEQ] | [Pseudonym/ID] | [YYYY-MM-DD] | [Channel] | [Version] | [Active / Withdrawn / Expired] |
| CRID-[YYYY]-[MM]-[CC]-[SEQ] | [Pseudonym/ID] | [YYYY-MM-DD] | [Channel] | [Version] | [Active / Withdrawn / Expired] |

---

## 3. Data Subject Pseudonym or Identifier

*To protect data subject privacy while maintaining an auditable consent trail, records must use a pseudonym or internal identifier rather than directly identifying information. The mapping between the pseudonym and the actual data subject identity must be stored separately with access controls appropriate to its sensitivity.*

### 3.1 Pseudonymization Standard

[Organization Name] applies the following pseudonymization approach for consent records:

- **Internal Customer Reference Number (ICRN):** A non-reversible, system-generated reference assigned at onboarding. This is the primary identifier used in all consent records.
- **Direct identifiers** (full name, NRIC, passport number) are **not** recorded within this register. They are stored in the master customer database ([System Name]) and linked only via the ICRN.
- Access to the ICRN-to-identity mapping table is restricted to [Role(s)] and requires dual-authorisation for retrieval in connection with regulatory investigations or legal proceedings.

### 3.2 Data Subject Identifier Record

| Field | Value |
|---|---|
| **Consent Record ID (CRID)** | [CRID] |
| **Internal Customer Reference Number (ICRN)** | [ICRN] |
| **Data Subject Category** | [Customer / Prospective Customer / Employee / Other] |
| **Onboarding Date** | [YYYY-MM-DD] |
| **Associated Account/Policy Reference** | [Reference Number, if applicable] |
| **Pseudonym Last Verified** | [YYYY-MM-DD] |

---

## 4. Consent Timestamp and Channel

*Accurate timestamping is critical to establishing the temporal validity of consent and demonstrating that processing did not precede consent. All timestamps must be recorded in Coordinated Universal Time (UTC+8, Malaysia Standard Time) and must originate from a trusted, auditable system clock.*

### 4.1 Timestamp Requirements

- Timestamps must be recorded to at least **second-level precision** (ISO 8601 format: `YYYY-MM-DDTHH:MM:SS+08:00`).
- The system generating the timestamp must be synchronized with an authoritative time source (e.g., NTP server).
- Retroactive modification of timestamps is prohibited and constitutes a records integrity violation.

### 4.2 Channel Definitions

| Channel Code | Description | System of Record |
|---|---|---|
| `WB` | Web portal (desktop/mobile browser) | [System Name] |
| `MB` | Mobile application (iOS/Android) | [System Name] |
| `BR` | Branch / in-person | [System Name / Scanned Document Repository] |
| `CC` | Call centre (recorded verbal consent) | [Call Recording System] |
| `AG` | Third-party agent or intermediary | [Agent Management System] |
| `EP` | Email or postal | [Document Management System] |

### 4.3 Consent Event Record

| Field | Value |
|---|---|
| **Consent Record ID (CRID)** | [CRID] |
| **Consent Timestamp (MST)** | [YYYY-MM-DDTHH:MM:SS+08:00] |
| **Channel Code** | [Channel Code] |
| **Channel Description** | [e.g., Web Portal — Account Registration Flow] |
| **IP Address / Device Identifier** | [Hashed/Masked IP or Device ID, where applicable] |
| **Session Reference** | [System Session ID, where applicable] |
| **Staff / Agent ID** | [Staff or Agent ID, for BR/CC/AG channels only] |

---

## 5. Notice Version and Content Presented at Time of Consent

*The PDPA Section 7 Notice and Choice Principle requires that data subjects be informed of the purposes of processing before or at the time of data collection. This section records the exact version of the Privacy Notice or consent form presented to the data subject, enabling [Organization Name] to demonstrate that adequate notice was given at the time consent was obtained.*

### 5.1 Notice Version Control

All notices and consent forms presented to data subjects are version-controlled. The master register of notice versions is maintained by the Data Protection Officer and is referenced in [Document ID — Privacy Notice Version Register].

| Notice Version | Effective From | Effective To | Summary of Changes | Approved By |
|---|---|---|---|---|
| v[X.X] | [YYYY-MM-DD] | [YYYY-MM-DD / Current] | [Description of key changes from prior version] | [Name/Role] |
| v[X.X] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Description] | [Name/Role] |

### 5.2 Notice Presented at Consent Event

| Field | Value |
|---|---|
| **Consent Record ID (CRID)** | [CRID] |
| **Notice/Form Reference** | [e.g., Privacy Notice v2.3] |
| **Notice Document ID** | [Document ID] |
| **Notice Delivery Method** | [Displayed on-screen / Embedded link / Physical form / Verbal reading] |
| **Language(s) Presented** | [e.g., Bahasa Malaysia, English] |
| **Data Subject Acknowledgement** | [Checkbox ticked / Signature obtained / Verbal acknowledgement recorded] |
| **Notice Archived At** | [URL / Document Repository Path / Reference] |

*A snapshot or hash of the notice content presented at the time of consent must be retained to prevent dispute. See Appendix C for the notice archiving procedure.*

---

## 6. Specific Consent Options Selected

*This section records the granular consent elections made by the data subject, reflecting the specific purposes, categories of data, and third-party disclosures for which consent was granted or withheld. Granular consent records are essential to demonstrate respect for data subject autonomy and to ensure processing remains within the scope of consent given.*

### 6.1 Consent Granularity Matrix

*The following table records each consent element presented to the data subject and the election made. All elements must be recorded regardless of whether the data subject consented or declined.*

| Consent Element ID | Purpose of Processing | Data Category | Third-Party Disclosure | Consent Granted | Date Granted | Expiry Date (if applicable) |
|---|---|---|---|---|---|---|
| [CE-001] | [e.g., Product and service administration] | [e.g., Identity, Financial] | [None / Specified] | [Yes / No] | [YYYY-MM-DD] | [YYYY-MM-DD / N/A] |
| [CE-002] | [e.g., Marketing communications — email] | [e.g., Contact details] | [None / Specified] | [Yes / No] | [YYYY-MM-DD] | [YYYY-MM-DD / N/A] |
| [CE-003] | [e.g., Marketing communications — third-party partners] | [e.g., Contact, Behavioral] | [[Partner Category]] | [Yes / No] | [YYYY-MM-DD] | [YYYY-MM-DD / N/A] |
| [CE-004] | [e.g., Credit assessment and bureau reporting] | [e.g., Financial, Identity] | [[Bureau Name]] | [Yes / No] | [YYYY-MM-DD] | [YYYY-MM-DD / N/A] |
| [CE-005] | [e.g., Research and analytics] | [e.g., Behavioral, Transactional] | [None / Specified] | [Yes / No] | [YYYY-MM-DD] | [YYYY-MM-DD / N/A] |

### 6.2 Consent Scope Summary

| Field | Value |
|---|---|
| **Consent Record ID (CRID)** | [CRID] |
| **Total Consent Elements Presented** | [Number] |
| **Elements Consented To** | [Number] |
| **Elements Declined** | [Number] |
| **Sensitive Personal Data Involved** | [Yes / No] |
| **Sensitive Data Explicit Consent Obtained** | [Yes / No / N/A] |
| **Consent Scope Notes** | [Any additional context or qualifications recorded at time of consent] |

---

## 7. Withdrawal Record and Effective Date

*Data subjects have the right under PDPA Section 38 to withdraw consent at any time. Where withdrawal is received, it must be recorded promptly and processing reliant solely on that consent must cease from the effective date of withdrawal. This section maintains the full withdrawal record and links it to the originating consent record.*

### 7.1 Withdrawal Event Record

*Complete this section only where a withdrawal of consent has been received. Where no withdrawal has been received, record "No withdrawal on file" and date of last verification.*

| Field | Value |
|---|---|
| **Consent Record ID (CRID)** | [CRID] |
| **Withdrawal Reference Number** | [WD-YYYY-MM-SEQ] |
| **Withdrawal Request Date** | [YYYY-MM-DD] |
| **Withdrawal Channel** | [e.g., Web Portal / Written Request / Call Centre] |
| **Withdrawal Request Reference** | [Ticket ID / Correspondence Reference] |
| **Effective Date of Withdrawal** | [YYYY-MM-DD] |
| **Processing Cessation Confirmed By** | [Name / Role] |
| **Processing Cessation Date** | [YYYY-MM-DD] |
| **Downstream Systems Notified** | [List of systems updated, e.g., CRM, Marketing Platform, Analytics System] |
| **Withdrawal Scope** | [Full withdrawal / Partial withdrawal — specify elements withdrawn below] |

### 7.2 Partial Withdrawal Detail

*Complete only where withdrawal applies to specific consent elements rather than all processing.*

| Consent Element ID | Purpose | Prior Status | Post-Withdrawal Status | Effective Date |
|---|---|---|---|---|
| [CE-00X] | [Purpose] | [Consented] | [Withdrawn] | [YYYY-MM-DD] |
| [CE-00X] | [Purpose] | [Consented] | [Remains Active] | [N/A] |

### 7.3 Post-Withdrawal Notes

*Record any consequences, exceptions, or residual processing that continues on an alternative lawful basis following withdrawal (e.g., regulatory retention obligations, contractual necessity).*

[Post-withdrawal processing notes, e.g., "Account transaction records retained for 7 years under AMLA 2001 s.17 notwithstanding marketing consent withdrawal."]

---

## 8. Consent Audit Trail for Lifecycle Tracking

*A complete, immutable audit trail must be maintained for each consent record, capturing every state change from initial grant through any modifications, renewals, and withdrawal. This trail is the primary evidence artifact in the event of a regulatory investigation or data subject complaint.*

### 8.1 Audit Trail Requirements

- All entries in the audit trail are **append-only**; no modification or deletion of prior entries is permitted.
- Each entry must record the actor (system or person), action type, timestamp, and any changed values.
- The audit trail system of record is **[System Name / Database / Log Platform]**.
- Audit logs are retained for a minimum of **[X] years** from the date of the most recent event on the record, in accordance with the retention schedule at Appendix A.

### 8.2 Consent Lifecycle Audit Log

| Event Sequence | Event Type | Timestamp (MST) | Actor | Actor Type | Previous State | New State | Notes |
|---|---|---|---|---|---|---|---|
| 001 | Consent Granted | [YYYY-MM-DDTHH:MM:SS+08:00] | [ICRN or System] | [Data Subject / System] | Null | Active | Initial consent at onboarding |
| 002 | Notice Updated — Re-consent Requested | [YYYY-MM-DDTHH:MM:SS+08:00] | [System / Staff ID] | [System / Staff] | Active | Pending Re-consent | Privacy Notice updated to v[X.X] |
| 003 | Consent Renewed | [YYYY-MM-DDTHH:MM:SS+08:00] | [ICRN] | Data Subject | Pending Re-consent | Active | Data subject confirmed consent via web portal |
| 004 | Partial Withdrawal — CE-002 | [YYYY-MM-DDTHH:MM:SS+08:00] | [ICRN] | Data Subject | Active | Partially Withdrawn | Email marketing consent withdrawn |
| 005 | Legal Hold Applied | [YYYY-MM-DDTHH:MM:SS+08:00] | [Staff ID] | Staff | Partially Withdrawn | Legal Hold | Refer to Section 9 |
| [NNN] | [Event Type] | [Timestamp] | [Actor] | [Actor Type] | [Previous State] | [New State] | [Notes] |

### 8.3 Consent Status Definitions

| Status | Description |
|---|---|
| **Active** | Consent is current and valid; processing may proceed as scoped |
| **Pending Re-consent** | Notice updated; data subject has not yet confirmed renewed consent |
| **Partially Withdrawn** | Consent withdrawn for one or more elements; remaining elements remain active |
| **Fully Withdrawn** | All consent elements withdrawn; processing on consent basis must cease |
| **Expired** | Consent elapsed beyond agreed validity period and has not been renewed |
| **Legal Hold** | Record subject to legal hold; see Section 9 |
| **Superseded** | Record replaced by a subsequent consent record (e.g., re-onboarding) |

---

## 9. Legal Hold Flag

*Where a data subject record is subject to an active legal dispute, regulatory investigation, regulatory examination, or court order, a legal hold must be applied to the consent record. Legal hold prevents the deletion or alteration of the record in accordance with any standard retention schedule until the hold is formally lifted.*

### 9.1 Legal Hold Register

| Field | Value |
|---|---|
| **Consent Record ID (CRID)** | [CRID] |
| **Legal Hold Reference** | [LH-YYYY-MM-SEQ] |
| **Hold Applied Date** | [YYYY-MM-DD] |
| **Applied By** | [Name / Role] |
| **Hold Basis** | [Ongoing litigation / Regulatory investigation / Court order / Internal inquiry] |
| **Matter Reference** | [Legal matter or case reference number] |
| **Responsible Legal Counsel** | [Name / Firm] |
| **Expected Resolution Date** | [YYYY-MM-DD / To Be Determined] |
| **Hold Status** | [Active / Lifted] |
| **Hold Lifted Date** | [YYYY-MM-DD / N/A] |
| **Lifted By** | [Name / Role / N/A] |
| **Post-Lift Disposition** | [Retained per standard schedule / Flagged for deletion / Other] |

### 9.2 Legal Hold Procedure Summary

*A full legal hold procedure is documented in [Document ID — Legal Hold Policy]. Key obligations arising from a legal hold on a consent record include:*

- Suspension of any scheduled deletion or archiving of the consent record.
- Notification to the system administrators of all systems holding the associated personal data.
- Preservation of all associated audit logs, notice versions, and communication records.
- Quarterly review of hold status by the Data Protection Officer and Legal Counsel.

---

## 10. Roles and Responsibilities

*The following RACI matrix assigns accountability for the management, maintenance, and review of consent records. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Data Protection Officer | Compliance Team | IT / System Owner | Legal Counsel | Business Unit (Operations) | Internal Audit |
|---|---|---|---|---|---|---|
| Develop and maintain consent record template | A/R | C | C | C | I | I |
| Configure consent capture systems | C | I | A/R | I | C | I |
| Record consent events in system of record | I | I | A/R | I | R | I |
| Assign and validate Consent Record IDs | A | C | R | I | I | I |
| Maintain notice version register | A/R | C | I | C | I | I |
| Monitor consent status and expiry | A/R | R | C | I | I | I |
| Process withdrawal requests | A | R | R | I | R | I |
| Apply and manage legal holds | C | I | R | A | I | I |
| Conduct annual consent records review | A/R | R | C | C | C | I |
| Report to senior management on consent compliance | A/R | C | I | I | I | I |
| Independent audit of consent records | I | I | I | I | I | A/R |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name, Role] | Initial version issued |
| [X.X] | [YYYY-MM-DD] | [Author Name, Role] | [Description of changes] |
| [X.X] | [YYYY-MM-DD] | [Author Name, Role] | [Description of changes] |

### 11.2 Review Schedule

This register is **maintained on a continuous basis** as consent events occur. A formal annual review must be conducted by the Data Protection Officer no later than **[Review Month]** each year to assess:

- Completeness and accuracy of records maintained.
- Continued alignment with prevailing PDPA requirements and any regulatory guidance issued by the Personal Data Protection Commissioner.
- Adequacy of system controls supporting consent capture and audit logging.
- Effectiveness of the withdrawal processing procedure.

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Full Name] | [Signature] | [YYYY-MM-DD] |
| Chief Compliance Officer / CORO | [Full Name] | [Signature] | [YYYY-MM-DD] |
| Head of Legal | [Full Name] | [Signature] | [YYYY-MM-DD] |
| Chief Executive Officer / Authorised Representative | [Full Name] | [Signature] | [YYYY-MM-DD] |

---

## 12. References

| Reference | Description |
|---|---|
| **PDPA s6** | **Consent Principle** — Personal data of a data subject shall not be processed unless the data subject has given his consent to the processing of his personal data. |
| **PDPA s7** | **Notice and Choice Principle** — A data controller shall inform a data subject of the right to request access to and correct personal data, and the right to withdraw consent. |
| **PDPA s38** | Right of data subject to withdraw consent from processing of personal data at any time by giving written notice. |
| **PDPA s10** | **Retention Principle** — Personal data shall not be kept longer than is necessary for the fulfilment of its purpose. |
| **Personal Data Protection Commissioner's Guidance Notes** | [Reference specific guidance notes as issued and applicable] |
| [Organization Name] Privacy Notice | [Document ID] — Version [X.X], effective [Date] |
| [Organization Name] Data Protection Policy | [Document ID] |
| [Organization Name] Legal Hold Policy | [Document ID] |
| [Organization Name] Data Retention Schedule | [Document ID] |
| [Organization Name] Incident Response Procedure | [Document ID] |

---

## 13. Appendices

### Appendix A — Consent Record Retention Schedule

*Specify the minimum and maximum retention periods applicable to consent records and associated audit logs, aligned with PDPA s10 and any applicable sector-specific requirements (e.g., BNM guidelines, Securities Commission requirements).*

| Record Type | Minimum Retention Period | Trigger for Retention Period | Disposal Method | Authority |
|---|---|---|---|---|
| Active consent record | Duration of relationship + [X] years | Relationship end date | Secure deletion / Pseudonymization | PDPA s10 |
| Withdrawn consent record | [X] years from withdrawal effective date | Withdrawal effective date | Secure deletion | PDPA s10 |
| Consent audit log | [X] years from last event on record | Last audit event date | Secure deletion | PDPA s10 |
| Notice version archive | Duration of last consent referencing version + [X] years | Consent expiry/withdrawal | Secure archival | PDPA s7 |
| Legal hold records | Until formal hold lifted + [X] years | Hold lift date | Per legal direction | Court order / regulator |

### Appendix B — Channel Codes and System Mapping

| Channel Code | Channel Description | System of Record | System Owner | Notes |
|---|---|---|---|---|
| `WB` | Web portal | [System Name] | [Owner] | Consent captured via API at form submission |
| `MB` | Mobile application | [System Name] | [Owner] | Consent captured via SDK event |
| `BR` | Branch / in-person | [System Name] | [Owner] | Scanned physical forms stored in [Repository] |
| `CC` | Call centre | [Call Recording System] | [Owner] | Call recording reference linked to CRID |
| `AG` | Agent / intermediary | [Agent Management System] | [Owner] | Agent ID and credentials recorded |
| `EP` | Email / postal | [Document Management System] | [Owner] | Inbound correspondence scanned and indexed |

### Appendix C — Notice Archiving Procedure

*Summarise the procedure for capturing and preserving a snapshot of the privacy notice or consent form presented to each data subject at the time of the consent event. The procedure must ensure the archived notice is tamper-evident and retrievable for audit purposes.*

1. At the point of consent capture, the system shall record the **Notice Version ID** and **Document Hash (SHA-256)** of the notice presented.
2. The canonical copy of each notice version shall be stored in **[Document Repository / Content Management System]** at path **[Repository Path]**.
3. The document hash shall be stored within the consent record in the system of record and verified against the archived copy upon each audit.
4. Physical notice forms shall be scanned within **[X] business days** of receipt and uploaded to **[Document Repository]**, with the scanned file reference recorded against the CRID.
5. The Data Protection Officer is responsible for certifying the integrity of the notice archive on an annual basis.

### Appendix D — Consent Elements Register

*This appendix provides the master list of consent elements used across all products and services offered by [Organization Name]. It should be updated whenever a new processing purpose, data category, or third-party disclosure is introduced. Each element must be reviewed by the Data Protection Officer prior to deployment.*

| Consent Element ID | Product / Service | Purpose of Processing | Data Categories | Third-Party Recipients | Introduced in Notice Version | Current Status |
|---|---|---|---|---|---|---|
| CE-001 | [All products] | [Core service delivery] | [Identity, Contact, Financial] | [None] | v[X.X] | [Active] |
| CE-002 | [All products] | [Email marketing] | [Contact] | [None] | v[X.X] | [Active] |
| CE-003 | [Product Name] | [Partner marketing] | [Contact, Behavioral] | [[Partner Category]] | v[X.X] | [Active] |
| [CE-NNN] | [Product / Service] | [Purpose] | [Data Categories] | [Recipients] | v[X.X] | [Active / Retired] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Consent Record ID (CRID)** | The unique identifier assigned to each consent event maintained in this register |
| **Data Subject** | An individual whose personal data is processed by [Organization Name] |
| **Internal Customer Reference Number (ICRN)** | A pseudonymous, non-reversible internal identifier assigned to each data subject |
| **Legal Hold** | A directive that suspends normal disposition or deletion procedures for records relevant to anticipated or active litigation or regulatory proceedings |
| **Notice** | A Privacy Notice or consent form presented to a data subject disclosing the purposes, scope, and rights associated with data processing |
| **Personal Data** | Information in respect of commercial transactions that relates directly or indirectly to a data subject as defined under PDPA s4 |
| **Processing** | Collecting, recording, holding, storing, using, or disclosing personal data as defined under PDPA s4 |
| **Pseudonymization** | The processing of personal data in such a manner that it can no longer be attributed to a specific data subject without additional information kept separately |
| **Withdrawal** | A data subject's exercise of their right under PDPA s38 to withdraw consent previously given |

---

*This document is classified as **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy [Document ID]. Unauthorized disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Data Protection Officer | [Organization Name]*