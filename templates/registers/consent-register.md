# Consent Register

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
2. [Regulatory Framework](#2-regulatory-framework)
3. [Consent Register Structure](#3-consent-register-structure)
4. [Data Subject Identifier](#4-data-subject-identifier)
5. [Consent Date and Timestamp](#5-consent-date-and-timestamp)
6. [Consent Version and Notice Version](#6-consent-version-and-notice-version)
7. [Purposes Consented To](#7-purposes-consented-to)
8. [Collection Channel](#8-collection-channel)
9. [Consent Withdrawal Records](#9-consent-withdrawal-records)
10. [Consent Status](#10-consent-status)
11. [Linked Processing Activities](#11-linked-processing-activities)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Consent Register serves as the central record of all consents obtained from data subjects by [Organization Name] in connection with the collection, processing, use, disclosure, and retention of personal data. It enables [Organization Name] to demonstrate compliance with the consent obligations prescribed under the **Personal Data Protection Act 2010 (PDPA)**, specifically Sections 6 and 7, and to facilitate timely and auditable responses to consent withdrawal requests.

The register provides a single authoritative source of truth for:

- Evidence that valid, informed, and explicit consent was obtained prior to or at the point of personal data collection;
- The specific purposes for which consent was granted;
- The version of the privacy notice presented to the data subject at the time of consent;
- The current status of each consent record, including any withdrawal or expiry; and
- Linkage to the corresponding processing activities, enabling traceability across the data lifecycle.

### 1.2 Scope

This register applies to **all personal data** processed by [Organization Name] where consent is the lawful basis for processing, including but not limited to:

- Customer onboarding and account management;
- Marketing communications and promotional activities;
- Sharing of personal data with third parties or affiliates;
- Cross-border transfers of personal data (where applicable);
- Sensitive personal data processing as defined under the PDPA; and
- Any other processing activity for which [Organization Name] relies on data subject consent.

**In scope:** All business units, departments, subsidiaries, and third-party processors acting on behalf of [Organization Name].

**Out of scope:** Processing activities where consent is not the applicable lawful basis (e.g., statutory obligations, contractual necessity). Such activities are documented separately in the [Organization Name] Data Processing Register.

### 1.3 Maintenance

This register is maintained on a **continuous basis**. Records must be created or updated at the point of consent collection, modification, or withdrawal. The Data Protection Officer (DPO) is responsible for the integrity and completeness of this register at all times.

---

## 2. Regulatory Framework

### 2.1 Applicable Legislation

| Instrument | Jurisdiction | Relevant Provisions |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | Malaysia | ss. 6, 7, 38, 40 |
| Personal Data Protection Regulations 2013 | Malaysia | All applicable regulations |
| Personal Data Protection (Class of Data Controllers) Order 2013 | Malaysia | Applicable class of data controller |

### 2.2 Key Statutory Requirements

**Section 6 — Consent Principle**

*Section 6 of the PDPA provides that a data controller shall not process personal data about a data subject unless the data subject has given his or her consent to the processing. This register directly evidences compliance with this requirement by recording the fact, scope, and circumstances of each consent.*

- Consent must be given freely, specifically, and informedly.
- Consent must be obtained before or at the point of collection unless an exemption applies under the Second Schedule of the PDPA.
- Where personal data is used for a new or different purpose, fresh consent must be obtained and recorded.

**Section 7 — Notice and Choice Principle**

*Section 7 requires data controllers to inform data subjects, at or before the time of collection, of the purposes for which their personal data is being collected and processed. The notice version recorded in this register evidences that adequate notice was provided.*

- The privacy notice presented at the time of consent must be documented and version-controlled.
- Data subjects must be informed of their right to withdraw consent and to access or correct their data.
- The register must record the specific notice version presented to the data subject.

---

## 3. Consent Register Structure

### 3.1 Register Format

*This section describes the overarching structure of the register. Each row in the master register table represents a single consent record for a single data subject for a defined set of purposes. Where a data subject provides multiple consents at different times or for different purposes, separate records must be created.*

The Consent Register is maintained as a structured record with the following primary components:

| Component | Description | Mandatory |
|---|---|---|
| Data Subject Identifier | Pseudonymised reference to the individual | Yes |
| Consent Timestamp | Date and time consent was obtained | Yes |
| Notice Version | Version of privacy notice presented | Yes |
| Consent Version | Version of consent form or mechanism | Yes |
| Purposes | Enumerated list of consented purposes | Yes |
| Collection Channel | Medium through which consent was captured | Yes |
| Consent Status | Active, Withdrawn, or Expired | Yes |
| Withdrawal Record | Date, method, and confirmation of withdrawal | Conditional |
| Linked Processing Activities | Cross-reference to processing register | Yes |

### 3.2 Master Consent Register

*The table below is the primary register. Insert one row per consent record. Where processing purposes are too numerous for inline display, reference the Consent Detail Sheet in Appendix A.*

| Record ID | Subject Ref | Consent Date | Notice Ver. | Consent Ver. | Purposes | Channel | Status | Withdrawal Date | Linked Activity |
|---|---|---|---|---|---|---|---|---|---|
| [CNS-0001] | [SUB-XXXX] | [YYYY-MM-DD HH:MM] | [v1.0] | [v1.0] | [Purpose Code(s)] | [Channel] | [Active] | [N/A] | [ACT-XXXX] |
| [CNS-0002] | [SUB-XXXX] | [YYYY-MM-DD HH:MM] | [v1.1] | [v1.0] | [Purpose Code(s)] | [Channel] | [Withdrawn] | [YYYY-MM-DD] | [ACT-XXXX] |
| [CNS-0003] | [SUB-XXXX] | [YYYY-MM-DD HH:MM] | [v1.2] | [v1.1] | [Purpose Code(s)] | [Channel] | [Expired] | [N/A] | [ACT-XXXX] |

---

## 4. Data Subject Identifier

### 4.1 Identification and Pseudonymisation Policy

*This section governs how data subjects are identified within the register. To minimise re-identification risk, all entries must use a pseudonymised reference rather than directly identifying information such as full name or NRIC number. The mapping between pseudonymised references and actual identities must be maintained in a separate, access-controlled key register.*

All data subjects in this register are identified using an internal **Subject Reference Code** (SUB-XXXX) generated by [Organization Name]'s identity management system. Direct identifiers (name, NRIC, passport number) must not appear in this register.

### 4.2 Subject Reference Code Format

| Field | Format | Example |
|---|---|---|
| Subject Reference Code | SUB-[7-digit numeric] | SUB-0001234 |
| Identity Key Register Location | [System / File Path / Database Table] | [e.g., CRM Identity Vault — Table: tbl_subject_key] |
| Access Restriction | Restricted to DPO and authorised compliance personnel | — |

### 4.3 Linkage to Identity Key Register

*Record the location and access controls for the identity key register that maps Subject Reference Codes to actual data subject identities. This mapping must be auditable and must not be stored in the same location as this register unless appropriate access controls are in place.*

| Item | Details |
|---|---|
| Key Register Location | [Location / System Name] |
| Custodian | [Data Protection Officer / IT Security] |
| Access Control Mechanism | [Role-Based Access Control / Encryption / Other] |
| Retention Period of Key Register | [In accordance with data retention schedule] |

---

## 5. Consent Date and Timestamp

### 5.1 Timestamp Recording Requirements

*Each consent record must include a precise, system-generated timestamp capturing the exact date and time consent was obtained. For digital channels, this timestamp must be drawn from a reliable system clock and logged immutably. For paper-based consents, the date recorded on the signed form must be entered and the original document retained.*

All timestamps must be recorded in **ISO 8601 format (YYYY-MM-DD HH:MM:SS)** and in **Malaysia Standard Time (MYT, UTC+8)** unless otherwise specified.

| Field | Requirement | Example |
|---|---|---|
| Consent Date | Mandatory | 2025-06-15 |
| Consent Time | Mandatory for digital channels | 14:32:07 |
| Timezone | MYT (UTC+8) | UTC+8 |
| Source of Timestamp | System-generated (preferred) or manually recorded | [System Name / Manual Entry] |
| Timestamp Immutability | Logs must be write-protected post-creation | [Audit log reference] |

### 5.2 Timestamp Audit Trail

*Where consent is obtained digitally, [Organization Name] must be able to produce an audit log entry evidencing the timestamp. Record the audit log reference or evidence identifier below for each consent record where applicable.*

| Record ID | Audit Log Reference | Log System | Verification Status |
|---|---|---|---|
| [CNS-0001] | [LOG-REF-XXXX] | [System Name] | [Verified / Pending] |
| [CNS-0002] | [LOG-REF-XXXX] | [System Name] | [Verified / Pending] |

---

## 6. Consent Version and Notice Version

### 6.1 Version Control Policy

*This section records which version of the privacy notice and consent mechanism was presented to the data subject at the time consent was obtained. Version control is critical: if a material change is made to the privacy notice, fresh consent must be sought for existing data subjects, and the new notice version must be recorded against the updated consent record.*

[Organization Name] maintains version-controlled privacy notices and consent forms/mechanisms. All versions are archived in the [Document Management System / SharePoint / intranet path] and must remain retrievable for audit purposes.

### 6.2 Privacy Notice Version Register

*Maintain a log of all privacy notice versions issued. This sub-register supports the main consent records by providing a definitive description of what each notice version communicated to data subjects.*

| Notice Version | Effective Date | Superseded Date | Summary of Changes | Archived Location |
|---|---|---|---|---|
| v1.0 | [YYYY-MM-DD] | [YYYY-MM-DD] | Initial notice | [Location] |
| v1.1 | [YYYY-MM-DD] | [YYYY-MM-DD] | [Description of changes] | [Location] |
| v1.2 | [YYYY-MM-DD] | Current | [Description of changes] | [Location] |

### 6.3 Consent Mechanism Version Register

*Record each version of the consent form, checkbox, verbal script, or other mechanism used to capture consent. This ensures that the exact wording presented to the data subject can be reproduced if challenged.*

| Consent Version | Type | Effective Date | Superseded Date | Channel(s) Used | Archived Location |
|---|---|---|---|---|---|
| v1.0 | [Web form / Paper form / Verbal script] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Web / App / Paper] | [Location] |
| v1.1 | [Web form / Paper form / Verbal script] | [YYYY-MM-DD] | Current | [Web / App / Paper] | [Location] |

---

## 7. Purposes Consented To

### 7.1 Purpose Taxonomy

*Each consent record must enumerate the specific, granular purposes for which the data subject has given consent. Blanket or vague purpose descriptions are insufficient under the PDPA Notice and Choice Principle (s.7). Use the Purpose Code from the approved taxonomy below, and do not consolidate multiple distinct purposes into a single code.*

[Organization Name] maintains the following approved purpose taxonomy. Additional purposes must be approved by the DPO before use and added to this table.

| Purpose Code | Purpose Description | Data Categories Involved | Mandatory for Service | Regulatory Basis |
|---|---|---|---|---|
| PUR-001 | Account opening and KYC verification | Identity, contact, financial data | Yes | PDPA s.6; AMLA |
| PUR-002 | Product and service communications | Contact data | No | PDPA s.6 |
| PUR-003 | Direct marketing — [Organization Name] products | Contact, transactional data | No | PDPA s.6 |
| PUR-004 | Direct marketing — third-party products | Contact, transactional data | No | PDPA s.6 |
| PUR-005 | Sharing with affiliates and group companies | Identity, financial data | No | PDPA s.6 |
| PUR-006 | Credit reference and scoring | Financial, identity data | Conditional | PDPA s.6; CBA |
| PUR-007 | Fraud prevention and investigation | All relevant categories | Conditional | PDPA s.6 |
| PUR-008 | Analytics and profiling | Transactional, behavioural data | No | PDPA s.6 |
| [PUR-XXX] | [Additional purpose — describe specifically] | [Data categories] | [Yes / No] | [Regulatory basis] |

### 7.2 Per-Record Purpose Detail

*For each consent record, list the Purpose Codes from the taxonomy above that were consented to. Where a data subject has consented to a subset of available purposes, only those purposes must be listed.*

| Record ID | Purposes Consented To | Purposes Withheld | Notes |
|---|---|---|---|
| [CNS-0001] | [PUR-001, PUR-002, PUR-006] | [PUR-003, PUR-004] | [e.g., Data subject declined marketing purposes] |
| [CNS-0002] | [PUR-001, PUR-003] | [PUR-004, PUR-005] | — |

---

## 8. Collection Channel

### 8.1 Channel Definition and Evidence Requirements

*The collection channel describes the medium through which consent was obtained. Each channel has different evidence requirements. The channel recorded here must correspond to a verifiable evidence artefact (e.g., signed form scan, server access log, call recording reference) that can be produced during an audit or data subject access request.*

| Channel Code | Channel Description | Evidence Type | Retention Location |
|---|---|---|---|
| CH-WEB | Website consent form or checkbox | Server access log, form submission log | [System / Location] |
| CH-APP | Mobile application consent screen | App audit log, event tracking | [System / Location] |
| CH-PAPER | Physical paper form (signed) | Scanned copy of signed form | [Document storage location] |
| CH-VERBAL | Verbal consent (e.g., call centre) | Call recording reference | [Call recording system] |
| CH-EMAIL | Email-based consent (opt-in link) | Email server log, click log | [System / Location] |
| CH-BRANCH | In-branch digital kiosk or tablet | Device audit log | [System / Location] |
| [CH-XXX] | [Other channel — specify] | [Evidence type] | [Location] |

### 8.2 Channel Record by Consent Entry

*For each consent record, populate the channel and the corresponding evidence reference to enable retrieval of proof of consent if required.*

| Record ID | Channel Code | Channel Description | Evidence Reference | Evidence Location |
|---|---|---|---|---|
| [CNS-0001] | [CH-WEB] | Website form | [LOG-REF-XXXX] | [System Name] |
| [CNS-0002] | [CH-PAPER] | Branch paper form | [SCAN-REF-XXXX] | [Document store path] |
| [CNS-0003] | [CH-VERBAL] | Call centre verbal consent | [CALL-REC-XXXX] | [Call recording system] |

---

## 9. Consent Withdrawal Records

### 9.1 Withdrawal Rights and Obligations

*Under the PDPA, a data subject has the right to withdraw consent at any time. [Organization Name] must facilitate this right and must cease processing personal data for the relevant purposes once a withdrawal request has been honoured, subject to any overriding legal obligations. All withdrawal events must be recorded in this section promptly and linked to the original consent record.*

Upon receipt of a withdrawal request:

1. The request must be acknowledged within **[X] business days** in accordance with [Organization Name]'s Data Subject Rights Procedure ([Document Reference]);
2. Processing for the withdrawn purposes must cease within **[X] business days** of the effective withdrawal date;
3. This register must be updated to reflect the withdrawal within **[X] business day(s)** of processing cessation; and
4. Affected downstream processors and data recipients must be notified promptly.

### 9.2 Withdrawal Record Table

*Complete this table for every consent withdrawal event. Where a data subject withdraws only partial purposes (e.g., withdraws marketing consent but retains product communications consent), create a new active consent record for the retained purposes and mark only the withdrawn purposes in the original record.*

| Withdrawal ID | Linked Record ID | Subject Ref | Withdrawal Date | Withdrawal Method | Withdrawn Purposes | Processing Ceased Date | Notified Parties | Confirmation Sent | Processed By |
|---|---|---|---|---|---|---|---|---|---|
| [WDR-0001] | [CNS-0001] | [SUB-XXXX] | [YYYY-MM-DD] | [Email / Web portal / Written / Verbal] | [PUR-003, PUR-004] | [YYYY-MM-DD] | [List of notified parties] | [Yes / No] | [Staff reference] |
| [WDR-0002] | [CNS-0002] | [SUB-XXXX] | [YYYY-MM-DD] | [Email / Web portal / Written / Verbal] | [All purposes] | [YYYY-MM-DD] | [List of notified parties] | [Yes / No] | [Staff reference] |

### 9.3 Withdrawal Method Definitions

| Method Code | Method Description | Evidence Retained |
|---|---|---|
| WM-EMAIL | Withdrawal submitted via email to [privacy@organization.com] | Email record |
| WM-PORTAL | Withdrawal submitted via self-service web portal | Portal audit log |
| WM-WRITTEN | Written letter or physical form | Scanned copy |
| WM-VERBAL | Verbal request via call centre | Call recording reference |
| WM-INBRANCH | In-branch request | Branch request form reference |

---

## 10. Consent Status

### 10.1 Status Definitions

*Every consent record must carry a current status value. Status must be reviewed and updated whenever a relevant event occurs (new consent, withdrawal, expiry, re-consent). The DPO or nominated compliance officer is responsible for ensuring statuses are accurate at all times.*

| Status | Definition | Trigger Event |
|---|---|---|
| **Active** | Consent is valid, in force, and has not been withdrawn or expired | Consent successfully obtained |
| **Withdrawn** | Data subject has exercised their right to withdraw consent | Withdrawal request processed |
| **Expired** | Consent has lapsed due to [Organization Name]'s defined consent renewal period or a material change to the privacy notice requiring re-consent | Renewal period elapsed; material notice change |
| **Pending Re-consent** | Data subject has been contacted for re-consent following a material change; response not yet received | Material change to processing or notice |
| **Superseded** | Original consent record has been replaced by a newer consent record (e.g., following re-consent) | New consent record created |

### 10.2 Consent Renewal Period

*[Organization Name] has defined the following consent renewal schedule. Expired consents must be flagged for re-consent outreach. Processing relying solely on expired consent must cease pending re-consent.*

| Processing Category | Consent Renewal Period | Renewal Trigger |
|---|---|---|
| Marketing communications | [3 years / as defined by policy] | Periodic review or material change |
| Third-party data sharing | [2 years / as defined by policy] | Periodic review or material change |
| Sensitive personal data | [1 year / as defined by policy] | Annual renewal |
| [Other category] | [Period] | [Trigger] |

### 10.3 Status Summary Dashboard

*This summary provides a high-level view of consent register health. Update this table at each scheduled review or upon request.*

| Status | Count | Percentage | Last Updated |
|---|---|---|---|
| Active | [XX] | [XX%] | [YYYY-MM-DD] |
| Withdrawn | [XX] | [XX%] | [YYYY-MM-DD] |
| Expired | [XX] | [XX%] | [YYYY-MM-DD] |
| Pending Re-consent | [XX] | [XX%] | [YYYY-MM-DD] |
| Superseded | [XX] | [XX%] | [YYYY-MM-DD] |
| **Total Records** | **[XX]** | **100%** | **[YYYY-MM-DD]** |

---

## 11. Linked Processing Activities

### 11.1 Linkage to Data Processing Register

*Every consent record must be linked to one or more processing activities documented in [Organization Name]'s Data Processing Register (or Record of Processing Activities). This linkage provides end-to-end traceability from the consent artefact through to the actual processing operations performed, enabling a complete audit trail for regulatory examination.*

The Data Processing Register is maintained separately as **[Document ID — Processing Register]** and is owned by the [Data Protection Officer / Privacy Team].

### 11.2 Processing Activity Cross-Reference

*Complete this table to map each consent record to its corresponding processing activity entries. Where a consent record supports multiple processing activities, list each activity on a separate row linked to the same consent record.*

| Record ID | Processing Activity ID | Processing Activity Name | Data Categories | Processor / System | Retention Period | Cross-border Transfer |
|---|---|---|---|---|---|---|
| [CNS-0001] | [ACT-0001] | [Customer onboarding KYC] | [Identity, contact] | [System / Vendor Name] | [7 years] | [No / Yes — Country] |
| [CNS-0001] | [ACT-0002] | [Direct marketing — email] | [Contact, transactional] | [Marketing platform name] | [3 years] | [No / Yes — Country] |
| [CNS-0002] | [ACT-0003] | [Credit scoring] | [Financial, identity] | [Credit bureau / System] | [5 years] | [No / Yes — Country] |
| [CNS-0003] | [ACT-0004] | [Analytics and profiling] | [Behavioural, transactional] | [Analytics platform] | [2 years] | [No / Yes — Country] |

### 11.3 Third-Party Processor Notification

*Where consent is withdrawn and personal data has been shared with a third-party processor or recipient, the following notification log records that downstream parties have been informed of the withdrawal and instructed to cease processing.*

| Withdrawal ID | Third-Party Name | Notification Date | Notification Method | Cessation Confirmed | Confirmation Reference |
|---|---|---|---|---|---|
| [WDR-0001] | [Third-party / Vendor Name] | [YYYY-MM-DD] | [Email / API / Written] | [Yes / Pending] | [Reference number] |

---

## 12. Roles and Responsibilities

### 12.1 RACI Matrix

*This matrix defines accountability for the maintenance, oversight, and use of the Consent Register. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Data Protection Officer | Compliance Team | IT / Systems | Business Units | Legal Counsel | Senior Management |
|---|---|---|---|---|---|---|
| Maintain and update the Consent Register | R | C | C | R | I | I |
| Approve consent record structure and purpose taxonomy | A | C | I | C | C | I |
| Ensure consent is obtained before data collection | I | C | R | R | C | I |
| Process consent withdrawal requests | R | R | C | I | I | I |
| Conduct periodic register review and health check | A | R | I | I | I | I |
| Notify third parties of consent withdrawals | R | R | I | I | C | I |
| Respond to data subject access requests referencing this register | R | R | C | I | C | I |
| Escalate material consent failures or breaches | R | C | I | I | C | A |
| Archive superseded consent and notice versions | I | C | R | I | I | I |
| Annual review and approval of this document | A | R | I | I | C | A |

### 12.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Data Protection Officer | [Name] | [Department] | [Email / Phone] |
| Deputy DPO / Privacy Analyst | [Name] | [Department] | [Email / Phone] |
| IT Security / Systems Lead | [Name] | [Department] | [Email / Phone] |
| Legal Counsel (Data Privacy) | [Name] | [Department] | [Email / Phone] |
| Compliance Manager | [Name] | [Department] | [Email / Phone] |

---

## 13. Review and Approval

### 13.1 Review Schedule

This register is subject to:

- **Continuous operational updates** upon each consent, re-consent, or withdrawal event;
- **Quarterly integrity reviews** conducted by the DPO to verify completeness and accuracy; and
- **Annual formal review** of the register structure, purpose taxonomy, and linkages, to be completed no later than **[anniversary date]** each year.

Any material change to [Organization Name]'s processing activities, privacy notice, or consent mechanisms that affects this register must trigger an ad hoc review and update outside the scheduled cycle.

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial version — establishment of Consent Register template |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |
| [2.0] | [YYYY-MM-DD] | [Author Name] | [Description of major revision] |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | __________________ | [YYYY-MM-DD] |
| Head of Compliance | [Name] | __________________ | [YYYY-MM-DD] |
| Chief Risk Officer | [Name] | __________________ | [YYYY-MM-DD] |
| Chief Executive Officer / Board Representative | [Name] | __________________ | [YYYY-MM-DD] |

---

## 14. References

| Reference | Description |
|---|---|
| Personal Data Protection Act 2010 (Act 709), **s. 6** | Consent Principle — requirement to obtain consent before or at the point of personal data collection |
| Personal Data Protection Act 2010 (Act 709), **s. 7** | Notice and Choice Principle — obligation to inform data subjects of purposes at the time of collection |
| Personal Data Protection Act 2010 (Act 709), **s. 38** | Rights of data subjects — access, correction, and withdrawal of consent |
| Personal Data Protection Act 2010 (Act 709), **s. 40** | Obligations of data controllers on receipt of a withdrawal or restriction request |
| Personal Data Protection Regulations 2013 | Supplementary procedural requirements for PDPA compliance |
| Personal Data Protection (Class of Data Controllers) Order 2013 | Sector-specific obligations applicable to [Organization Name]'s class of data controller |
| [Organization Name] Privacy Notice — v[X.X] | Current privacy notice presented to data subjects |
| [Organization Name] Data Processing Register — [Document ID] | Record of processing activities linked to consent records in this register |
| [Organization Name] Data Subject Rights Procedure — [Document ID] | Procedure governing responses to access, correction, and withdrawal requests |
| [Organization Name] Data Retention Schedule — [Document ID] | Schedule governing retention periods for personal data and consent records |
| Bank Negara Malaysia (BNM) Policy Document: [Relevant Title] | [Applicable BNM requirements referencing data protection — if applicable] |

---

## 15. Appendices

### Appendix A — Consent Detail Sheet (Individual Record)

*Use this sheet when a consent record contains too many purposes or processing activities to be captured inline in the master register table. Attach one sheet per Record ID and cross-reference from the master register.*

**Record ID:** [CNS-XXXX]
**Subject Reference:** [SUB-XXXX]
**Consent Date:** [YYYY-MM-DD HH:MM:SS MYT]

| Field | Detail |
|---|---|
| Notice Version Presented | [v1.X] |
| Consent Mechanism Version | [v1.X] |
| Collection Channel | [Channel Code — Channel Name] |
| Evidence Reference | [LOG-REF or SCAN-REF or CALL-REC reference] |
| Current Status | [Active / Withdrawn / Expired] |

**Purposes Consented To:**

| Purpose Code | Purpose Description | Status |
|---|---|---|
| [PUR-001] | [Account opening and KYC] | [Active] |
| [PUR-002] | [Product communications] | [Active] |
| [PUR-003] | [Direct marketing] | [Withdrawn — see WDR-XXXX] |

**Linked Processing Activities:**

| Activity ID | Activity Name | System | Retention |
|---|---|---|---|
| [ACT-0001] | [Activity name] | [System] | [Period] |

---

### Appendix B — Consent Withdrawal Request Form Template

*Provide this form to data subjects who wish to withdraw consent. The completed form must be retained as evidence and the relevant consent records updated within [X] business day(s) of receipt.*

---

**CONSENT WITHDRAWAL REQUEST**
[Organization Name] | [Address] | [privacy@organization.com]

Date of Request: _______________

Data Subject Name: _______________________________________________

NRIC / Passport Number: _________________________________________
*(Note: [Organization Name] will not retain this information in the Consent Register; it is used solely to locate and update your records.)*

I wish to withdraw consent for the following purpose(s):

- [ ] Direct marketing communications
- [ ] Sharing of personal data with third parties
- [ ] Analytics and profiling
- [ ] Cross-border transfer of personal data
- [ ] All purposes (complete withdrawal)
- [ ] Other (specify): _______________________________________

Preferred method of withdrawal confirmation: [ ] Email  [ ] Post  [ ] None required

Signature: _________________________ Date: ___________________

*For [Organization Name] internal use only:*

| Field | Detail |
|---|---|
| Withdrawal ID assigned | [WDR-XXXX] |
| Consent record(s) updated | [CNS-XXXX] |
| Processing ceased date | [YYYY-MM-DD] |
| Third parties notified | [Yes / No — list] |
| Confirmation sent to data subject | [Yes / No — date] |
| Processed by | [Staff reference] |

---

### Appendix C — Glossary

| Term | Definition |
|---|---|
| **Consent** | Freely given, specific, informed, and unambiguous indication of a data subject's agreement to the processing of their personal data, as required under PDPA s. 6 |
| **Data Subject** | An individual who is the subject of personal data held by [Organization Name] |
| **Data Controller** | [Organization Name] in its capacity as an organisation that processes personal data for its own purposes, as defined under the PDPA |
| **Personal Data** | Any information that directly or indirectly identifies a living individual, as defined in the PDPA |
| **Pseudonymisation** | The processing of personal data in such a way that it can no longer be attributed to a specific individual without the use of additional information kept separately |
| **Purpose Limitation** | The principle that personal data may only be used for the specific purposes for which consent was obtained |
| **Withdrawal** | The revocation by a data subject of previously given consent, which does not affect the lawfulness of processing carried out prior to withdrawal |
| **Sensitive Personal Data** | Personal data consisting of information as defined under s. 4 of the PDPA, including physical or mental health, political opinions, religious beliefs, and other prescribed categories |

---

### Appendix D — Register Integrity Checklist

*Complete this checklist at each quarterly review and retain as evidence of oversight activity.*

**Review Period:** [Q1/Q2/Q3/Q4 YYYY]
**Reviewed By:** [Name, Role]
**Review Date:** [YYYY-MM-DD]

| Check | Status | Notes |
|---|---|---|
| All new consents obtained during the period have been recorded | [ ] Pass / [ ] Fail / [ ] N/A | |
| All withdrawal requests received during the period have been processed and recorded | [ ] Pass / [ ] Fail / [ ] N/A | |
| Consent status values are accurate and current for all records | [ ] Pass / [ ] Fail / [ ] N/A | |
| Purpose taxonomy is current and all purposes in use are documented | [ ] Pass / [ ] Fail / [ ] N/A | |
| All linked processing activity references are valid and current | [ ] Pass / [ ] Fail / [ ] N/A | |
| Privacy notice and consent mechanism versions are correctly recorded | [ ] Pass / [ ] Fail / [ ] N/A | |
| Expired consent records have been flagged and re-consent outreach initiated | [ ] Pass / [ ] Fail / [ ] N/A | |
| Third-party notifications for withdrawals have been completed | [ ] Pass / [ ] Fail / [ ] N/A | |
| Identity Key Register access controls have been reviewed | [ ] Pass / [ ] Fail / [ ] N/A | |
| No direct identifiers are present in this register | [ ] Pass / [ ] Fail / [ ] N/A | |

**Overall Register Status:** [ ] Satisfactory  [ ] Requires Remediation

**Remediation Actions Required:**

| Issue | Owner | Due Date | Status |
|---|---|---|---|
| [Describe issue] | [Name] | [YYYY-MM-DD] | [Open / Closed] |

**Reviewer Signature:** _________________________ **Date:** ___________________

---

*This document is classified as **Confidential** and is subject to [Organization Name]'s information security and records management policies. Unauthorised disclosure is prohibited. For queries, contact the Data Protection Officer at [privacy@organization.com].*