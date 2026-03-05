# Data Classification Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer / Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

**Organisation:** [Organisation Name]
**Department:** [Department Name]
**Policy Category:** Information Security — Data Governance

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Legal Basis](#3-regulatory-framework-and-legal-basis)
4. [Definitions](#4-definitions)
5. [Data Classification Tiers and Definitions](#5-data-classification-tiers-and-definitions)
6. [Classification Criteria for Personal Data and Sensitive Personal Data](#6-classification-criteria-for-personal-data-and-sensitive-personal-data)
7. [Handling, Storage, and Transmission Requirements Per Tier](#7-handling-storage-and-transmission-requirements-per-tier)
8. [Labelling and Marking Standards](#8-labelling-and-marking-standards)
9. [Employee Responsibilities and Accountability](#9-employee-responsibilities-and-accountability)
10. [Declassification and Reclassification Procedures](#10-declassification-and-reclassification-procedures)
11. [Alignment with PDPA Sensitive Personal Data Categories (Section 29)](#11-alignment-with-pdpa-sensitive-personal-data-categories-section-29)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Compliance, Monitoring, and Enforcement](#13-compliance-monitoring-and-enforcement)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*This section should describe the intent of the policy, the problem it addresses, and what it is designed to achieve. Reference the specific regulatory obligations that necessitate the policy.*

This Data Classification Policy establishes a structured and consistent framework for [Organisation Name] to identify, classify, handle, and protect data assets commensurate with their sensitivity, criticality, and regulatory status. The policy ensures that all data processed, stored, or transmitted by [Organisation Name] — whether in physical or electronic form — is appropriately safeguarded against unauthorised access, disclosure, modification, or destruction.

This policy is issued in compliance with the **Personal Data Protection Act 2010 (PDPA)**, specifically:

- **Section 9** — Security Principle, which requires data users to take practical steps to protect personal data from any loss, misuse, modification, unauthorised or accidental access or disclosure, alteration or destruction;
- **Section 10** — Retention Principle, which prohibits the retention of personal data longer than is necessary; and
- **Section 29** — which imposes enhanced obligations on the processing of sensitive personal data.

Effective data classification is a foundational control that enables [Organisation Name] to fulfil its obligations under PDPA, as well as related frameworks including [Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document / NACSA Cybersecurity Framework / ISO/IEC 27001] as applicable.

---

## 2. Scope

*This section should define who and what the policy applies to. Be precise about organisational units, data types, processing environments, and any exclusions.*

### 2.1 Applicability

This policy applies to:

- **All employees** of [Organisation Name], including permanent, contract, and temporary staff;
- **Third-party vendors, service providers, and contractors** who access, process, store, or transmit [Organisation Name] data under a contractual or business arrangement;
- **Board members and senior management** in their capacity as data custodians or decision-makers; and
- **All subsidiaries and associated entities** of [Organisation Name] operating within Malaysia.

### 2.2 Data in Scope

This policy covers all data assets owned, controlled, or processed by [Organisation Name], including but not limited to:

- Customer personal data and sensitive personal data as defined under PDPA s29;
- Employee and human resources data;
- Financial records, transaction data, and audit trails;
- Intellectual property, trade secrets, and proprietary business information;
- System configuration data, network topology, and security-related information;
- Third-party data processed on behalf of other data users; and
- Physical documents, records, and printed materials containing any of the above.

### 2.3 Exclusions

The following are explicitly excluded from this policy:

- Publicly available information lawfully published by [Organisation Name] or released into the public domain with authorisation;
- Anonymised or de-identified data where re-identification is not reasonably practicable; and
- [Any other specific exclusions applicable to the organisation].

---

## 3. Regulatory Framework and Legal Basis

*List all applicable legislation, regulatory guidelines, and standards that this policy is designed to satisfy. Include specific clause references wherever possible.*

[Organisation Name] operates in a regulated financial services environment. The following instruments inform this policy:

| Instrument | Issuing Authority | Relevant Provisions |
|---|---|---|
| Personal Data Protection Act 2010 | Parliament of Malaysia | s9 (Security), s10 (Retention), s29 (Sensitive Personal Data) |
| Personal Data Protection Regulations 2013 | Ministry of Digital | Data processing standards |
| Personal Data Protection (Class of Data Users) Order 2013 | Ministry of Digital | Sector-specific obligations |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Para 10.x (Data Management), Para 11.x (Access Control) |
| NACSA Cybersecurity Framework | NACSA | Data protection controls |
| ISO/IEC 27001:2022 | ISO / IEC | Annex A.8.2 (Information Classification) |
| [Other applicable BNM guidelines] | Bank Negara Malaysia | [Relevant provisions] |

---

## 4. Definitions

*Define all technical and legal terms used in this policy to ensure consistent interpretation across the organisation. Definitions should align with statutory language where terms appear in legislation.*

| Term | Definition |
|---|---|
| **Data Classification** | The process of organising data into categories based on its sensitivity level, value, and the consequences of unauthorised disclosure, modification, or destruction. |
| **Data User** | As defined in PDPA s4: a person who either alone or jointly or in common with other persons processes any personal data, or has control over or authorises the processing of any personal data, but does not include a data processor. |
| **Data Processor** | Any person who processes personal data solely on behalf of a data user, and does not process the personal data for any of the person's own purposes. |
| **Personal Data** | As defined in PDPA s4: information in respect of commercial transactions that relates directly or indirectly to a data subject, who is identified or identifiable from that information. |
| **Sensitive Personal Data** | As defined in PDPA s4 and further specified in s29: personal data consisting of physical or mental health or condition, political opinions, religious beliefs or other beliefs of a similar nature, commission or alleged commission of any offence, or any other personal data as the Minister may determine. |
| **Data Owner** | The senior individual or business unit head accountable for a data asset, including decisions about its classification, access, and acceptable use. |
| **Data Custodian** | The individual or team responsible for implementing and maintaining the technical and operational controls prescribed by the Data Owner for a given data asset. |
| **Data Subject** | The individual to whom personal data relates. |
| **Handling Requirement** | A defined set of controls and procedures that must be applied to data at a given classification level, covering creation, storage, transmission, use, and disposal. |
| **Declassification** | The process of reducing the classification level of a data asset following a formal review. |
| **Reclassification** | The process of changing the classification level of a data asset, either upward or downward, in response to changed circumstances. |
| **Need-to-Know** | The principle that access to information should be restricted to individuals who require it to perform their legitimate job functions. |
| **Encryption at Rest** | Cryptographic protection applied to data stored on physical or logical media. |
| **Encryption in Transit** | Cryptographic protection applied to data during transmission over a network or communication channel. |

---

## 5. Data Classification Tiers and Definitions

*This section defines each classification tier. Provide a clear, unambiguous definition for each level, describe the nature of data that typically falls within it, and specify the potential impact if that data is compromised. Tiers should be ordered from lowest to highest sensitivity.*

[Organisation Name] adopts a four-tier data classification framework aligned with industry best practice and the sensitivity requirements of the PDPA. Each tier carries progressively stricter handling requirements.

### 5.1 Tier 1 — Public

**Definition:** Data that has been formally approved for release to the general public or that carries no expectation of confidentiality. Unauthorised disclosure of Public data does not harm [Organisation Name], its customers, or its operations.

**Typical examples include:**
- Published annual reports, press releases, and marketing materials;
- Publicly listed product and service information;
- Approved regulatory filings that are publicly accessible; and
- Job advertisements and recruitment information.

**Impact if compromised:** Negligible. No reputational, financial, or regulatory consequence is expected.

---

### 5.2 Tier 2 — Internal Use Only

**Definition:** Data intended for use within [Organisation Name] and not authorised for public release. Unauthorised disclosure may cause operational inconvenience, minor reputational harm, or low-level competitive disadvantage.

**Typical examples include:**
- Internal policies, procedures, and standard operating guidelines;
- Organisational charts, internal contact directories, and mailing lists;
- Non-sensitive internal correspondence and meeting minutes;
- General operational reports not containing personal data; and
- Training and onboarding materials.

**Impact if compromised:** Low. Limited operational or reputational impact. No significant regulatory consequence expected.

---

### 5.3 Tier 3 — Confidential

**Definition:** Data that is sensitive in nature and whose unauthorised disclosure could cause significant harm to [Organisation Name], its customers, counterparties, or employees. This tier includes most categories of personal data as defined under the PDPA.

**Typical examples include:**
- Customer personal data (names, identification numbers, contact details, transaction history);
- Employee records, payroll, and performance data;
- Contractual agreements and commercial proposals;
- Financial statements not yet in the public domain;
- Risk assessment reports and audit findings;
- Business continuity plans and disaster recovery documentation; and
- System architecture and network diagrams.

**Impact if compromised:** Significant. Potential breach of PDPA obligations, regulatory sanctions, customer harm, financial loss, and reputational damage.

---

### 5.4 Tier 4 — Restricted

**Definition:** Data of the highest sensitivity whose unauthorised disclosure could cause severe and potentially irreversible harm to [Organisation Name], data subjects, national security, or the stability of the financial system. This tier includes sensitive personal data as defined under PDPA s29 and operationally critical security information.

**Typical examples include:**
- Sensitive personal data under PDPA s29 (health records, biometric data, religious beliefs, political opinions, criminal records);
- Cryptographic keys, credentials, and access certificates;
- Fraud investigation records and suspicious transaction reports;
- Regulatory correspondence relating to enforcement action;
- Merger, acquisition, and strategic planning documentation (pre-announcement);
- Customer authentication factors and security questions; and
- Red team exercise reports and penetration testing results.

**Impact if compromised:** Severe. High probability of regulatory enforcement action, substantial financial penalties, customer harm, litigation, and serious reputational damage.

---

### 5.5 Classification Tier Summary

| Tier | Label | Sensitivity | Typical Impact if Breached | Example Data Types |
|---|---|---|---|---|
| 1 | Public | None | Negligible | Press releases, product brochures |
| 2 | Internal Use Only | Low | Limited | Internal policies, org charts |
| 3 | Confidential | Medium–High | Significant | Customer PII, employee records |
| 4 | Restricted | Very High | Severe | Sensitive personal data, credentials |

---

## 6. Classification Criteria for Personal Data and Sensitive Personal Data

*This section bridges the classification framework to the PDPA's legal categories of personal data and sensitive personal data. Authors should ensure that this section is reviewed by a legally qualified Data Protection Officer and updated whenever the Ministry issues new determinations under s29.*

### 6.1 Personal Data Classification

Under PDPA s4, personal data processed in the context of commercial transactions must be classified at minimum as **Tier 3 — Confidential** when it relates to an identified or identifiable living individual. The following criteria are used to determine whether information constitutes personal data requiring at least Tier 3 classification:

| Criterion | Guidance |
|---|---|
| Direct identifiability | Does the data directly name or uniquely identify a data subject? |
| Indirect identifiability | Can the data, in combination with other reasonably available information, identify a data subject? |
| Commercial transaction context | Was the data collected or processed in the context of a commercial transaction? |
| Data subject is a natural person | Does the data relate to a living individual (not a corporate entity)? |

If the answer to any of the above is **yes**, the data must be classified as **Confidential (Tier 3) at minimum**.

### 6.2 Sensitive Personal Data Classification (PDPA Section 29)

Sensitive personal data as defined under PDPA s29 must be classified as **Tier 4 — Restricted**. The categories of sensitive personal data are:

| Category | PDPA Reference | Classification |
|---|---|---|
| Physical or mental health or condition | s29(a) | Restricted (Tier 4) |
| Political opinions | s29(b) | Restricted (Tier 4) |
| Religious beliefs or other beliefs of a similar nature | s29(c) | Restricted (Tier 4) |
| Commission or alleged commission of any offence | s29(d) | Restricted (Tier 4) |
| Any other personal data as the Minister may determine | s29(e) | Restricted (Tier 4) |
| Biometric and genetic data (where applicable by Ministerial determination) | s29(e) | Restricted (Tier 4) |

**Special Note on Mixed Datasets:** Where a dataset contains a combination of personal data categories — including at least one Sensitive Personal Data field — the **entire dataset must be classified at the highest applicable tier**. Data fields must not be artificially separated to circumvent this requirement.

### 6.3 Classification of Anonymised and De-identified Data

Data that has been genuinely anonymised — such that re-identification of data subjects is not reasonably practicable — may be reclassified downward following a formal Privacy Impact Assessment (PIA). The following conditions must be met before downward reclassification of anonymised data is permitted:

- The anonymisation technique employed is documented and proportionate to the re-identification risk;
- The Data Protection Officer has reviewed and approved the anonymisation methodology;
- A record of the anonymisation process is retained in the Data Asset Register; and
- The anonymised output has been tested against re-identification using reasonable adversarial methods.

---

## 7. Handling, Storage, and Transmission Requirements Per Tier

*This section specifies the operational controls that must be applied to data at each classification tier across its lifecycle. Authors should cross-reference these requirements with the organisation's technical security standards and system configuration baselines.*

### 7.1 Tier 1 — Public: Handling Requirements

| Lifecycle Stage | Requirement |
|---|---|
| **Creation / Collection** | Standard review and approval by [Communications / Marketing / Compliance] before public release. |
| **Storage** | May be stored on any approved system. No access restrictions required beyond standard system controls. |
| **Transmission** | May be transmitted via any channel without encryption requirement. |
| **Access Control** | No restrictions. May be shared externally without prior authorisation. |
| **Printing / Physical Handling** | No marking required. |
| **Disposal** | Standard disposal. No shredding or secure deletion required. |

---

### 7.2 Tier 2 — Internal Use Only: Handling Requirements

| Lifecycle Stage | Requirement |
|---|---|
| **Creation / Collection** | Created within approved internal systems. Document the data owner and intended audience. |
| **Storage** | Stored on [Organisation Name]-approved systems only. Not to be stored on personal devices without authorisation. |
| **Transmission** | Must be transmitted via [Organisation Name]-approved channels. External transmission requires line manager approval. |
| **Access Control** | Access limited to [Organisation Name] employees on a need-to-know basis. Role-based access controls (RBAC) applied. |
| **Printing / Physical Handling** | Printed copies must be managed and not left unattended. Mark documents "INTERNAL USE ONLY". |
| **Disposal** | Electronic: secure deletion using approved tools. Physical: cross-cut shredding or confidential waste bin. |

---

### 7.3 Tier 3 — Confidential: Handling Requirements

| Lifecycle Stage | Requirement |
|---|---|
| **Creation / Collection** | Collected under a lawful basis in accordance with PDPA s6. Purpose must be documented. |
| **Storage** | Stored in access-controlled, audited repositories. Encryption at rest required for all electronic storage. Physical storage in locked cabinets. |
| **Transmission** | Encrypted in transit using TLS 1.2 or higher (or equivalent approved standard). Email transmission requires encrypted attachment or secure file transfer. Not to be transmitted to personal email accounts. |
| **Access Control** | Strict need-to-know. Access approvals required and logged. Regular access reviews conducted at least [quarterly / semi-annually]. Multi-factor authentication (MFA) required for system access. |
| **Third-Party Sharing** | Only with signed Data Processing Agreement (DPA) or Non-Disclosure Agreement (NDA). DPO approval required. |
| **Printing / Physical Handling** | Mark "CONFIDENTIAL". Printed copies must be collected promptly. Not to be left in unattended areas. Physical transport in sealed envelopes. |
| **Disposal** | Electronic: secure deletion conforming to [NIST SP 800-88 / DoD 5220.22-M / equivalent]. Physical: cross-cut shredding or certified destruction. Retention period must comply with PDPA s10 and [Organisation Name] Retention Schedule. |
| **Incident Reporting** | Any suspected compromise must be reported to the Information Security team within [X] hours. Potential PDPA breach triggers the Data Breach Response Procedure. |

---

### 7.4 Tier 4 — Restricted: Handling Requirements

| Lifecycle Stage | Requirement |
|---|---|
| **Creation / Collection** | Explicit consent required under PDPA s29 or statutory exemption documented. Data minimisation principle applied — collect only what is strictly necessary. |
| **Storage** | End-to-end encryption at rest mandatory. Dedicated, isolated storage environments preferred. Access logged and monitored in real-time. Physical storage in a separately locked, access-controlled area. |
| **Transmission** | End-to-end encryption required. Only via approved secure channels. Transmission outside Malaysia subject to PDPA s129 cross-border transfer controls and DPO approval. No transmission via standard email. |
| **Access Control** | Highly restricted. Named individual authorisation required for each access event. Privileged access managed via a Privileged Access Management (PAM) solution. All access logged with full audit trail. |
| **Third-Party Sharing** | Prohibited without express DPO and CEO / Board-level approval. Full Data Impact Assessment required. Contractual safeguards mandatory. |
| **Printing / Physical Handling** | Mark "RESTRICTED". Hard copies numbered and logged. Recipient signature required. Physical access to printed documents restricted to authorised individuals in secure areas. |
| **Disposal** | Electronic: cryptographic erasure and/or physical media destruction. Physical: certified destruction with proof of destruction certificate. Destruction must be logged and signed off by Data Custodian and DPO. |
| **Incident Reporting** | Mandatory immediate escalation to DPO and CISO within [2] hours of suspected compromise. DPO to assess PDPA notification obligations within [72] hours. |

---

## 8. Labelling and Marking Standards

*This section defines how classification labels must be applied to data assets across physical and electronic formats. Consistent labelling is a key audit control. Authors should specify exact placement requirements and approved label formats.*

### 8.1 Purpose of Labelling

Data classification labels serve to alert individuals handling data to the applicable handling requirements and to deter inadvertent mishandling. Labelling must be applied at the point of creation or receipt and maintained throughout the data lifecycle.

### 8.2 Electronic Document Labelling

All electronic documents containing data classified at Tier 2 or above must display the classification label as follows:

| Element | Requirement |
|---|---|
| **Header and Footer** | Classification label displayed in the header and footer of every page. |
| **Font** | Bold, consistent font. Minimum font size 10pt. |
| **Colour Coding** | See Appendix A for approved classification colour scheme. |
| **File Naming Convention** | Files should incorporate the classification abbreviation: `[YYYY-MM-DD]_[DocumentTitle]_[CLASS].ext` e.g. `2025-10-01_CustomerDataReport_CONF.pdf` |

| Classification | Label Text | Recommended Colour |
|---|---|---|
| Public | PUBLIC | Green |
| Internal Use Only | INTERNAL USE ONLY | Blue |
| Confidential | CONFIDENTIAL | Amber / Orange |
| Restricted | RESTRICTED | Red |

### 8.3 Physical Document Labelling

- All physical documents must display the classification label prominently on the **front cover or first page** and the **last page**.
- **Restricted** documents must additionally display a page count notation (e.g., "Page 1 of 12") and a unique document identifier.
- Where a physical document contains a mix of classification tiers across sections, the **entire document must carry the label of the highest tier**.
- Handwritten notes and working papers containing Confidential or Restricted information must be labelled at the top and bottom of each page.

### 8.4 Electronic Systems, Databases, and Repositories

- Data classification must be applied as **metadata tags** on records stored in enterprise systems, databases, and document management platforms.
- System administrators must ensure that repositories are configured to enforce classification-consistent access controls based on metadata tags.
- [Organisation Name]'s [Data Loss Prevention (DLP) / Information Rights Management (IRM)] tools must be configured to recognise and act upon classification labels.

### 8.5 Emails and Electronic Communications

| Classification | Email Handling Requirement |
|---|---|
| Public | No specific marking required. |
| Internal Use Only | Add "INTERNAL USE ONLY" to the email subject line when forwarding internally. Do not send externally without authorisation. |
| Confidential | Add "CONFIDENTIAL" to subject line. Encrypt attachments. Verify recipient before sending. |
| Restricted | Do not transmit via standard email. Use [approved secure messaging platform / encrypted portal] only. DPO notification required for external transmission. |

---

## 9. Employee Responsibilities and Accountability

*This section outlines the obligations of all individuals within scope of this policy. It should be aligned with the HR framework and referenced in employment agreements and acceptable use policies. Consider linking to the organisation's disciplinary policy.*

### 9.1 General Obligations

All individuals within the scope of this policy must:

- Understand and adhere to the requirements of this policy and all related procedures;
- Apply the correct classification label to data they create, collect, or receive;
- Handle data only in accordance with the requirements applicable to its classification tier;
- Not attempt to access data above their authorised access level;
- Report suspected data classification errors, mishandling incidents, or data breaches to the [Information Security Team / DPO] in accordance with the [Incident Response Policy];
- Complete mandatory data protection and information security awareness training within [30 days] of commencement and annually thereafter; and
- Not circumvent technical or administrative controls implementing this policy.

### 9.2 Classification Responsibilities

| Scenario | Responsible Party | Action Required |
|---|---|---|
| Data created internally | Creator / Data Owner | Apply correct classification at point of creation. |
| Data received from external parties | Receiving employee | Assess classification based on content; apply highest applicable tier. |
| Classification is unclear | Employee | Default to Confidential (Tier 3) and escalate to Data Owner or DPO for determination. |
| Data contains Sensitive Personal Data (s29) | Employee / Data Owner | Must classify as Restricted (Tier 4); notify DPO. |
| Discovery of unlabelled legacy data | Data Custodian | Initiate reclassification review per Section 10. |

### 9.3 When Classification is Uncertain

Where an employee is uncertain about the appropriate classification of data, the following escalation path applies:

1. Default classification of **Confidential (Tier 3)** must be applied immediately;
2. The employee must notify their direct line manager and the Data Owner within **[1 business day]**;
3. The Data Owner must make a formal classification determination within **[5 business days]**; and
4. The determination must be documented in the Data Asset Register.

### 9.4 Accountability and Disciplinary Consequences

Non-compliance with this policy may result in disciplinary action in accordance with [Organisation Name]'s [Human Resources Disciplinary Policy / Employment Terms and Conditions]. In serious cases — particularly those involving the mishandling of Restricted data, Sensitive Personal Data under PDPA s29, or deliberate circumvention of controls — disciplinary action may include termination of employment. Breaches that constitute a violation of PDPA may expose individuals and [Organisation Name] to regulatory enforcement action and civil liability.

---

## 10. Declassification and Reclassification Procedures

*This section governs how classification levels may be changed over time. It is important that reclassification is a controlled, documented process to prevent inappropriate downgrading of sensitive data. Authors should ensure this section is consistent with the organisation's records retention schedule.*

### 10.1 Principles

- Classification must be reviewed whenever there is a material change in the nature, use, or context of a data asset;
- Upward reclassification (increasing sensitivity) may be initiated by any Data Owner or the DPO;
- Downward reclassification (decreasing sensitivity) requires formal approval as specified in this section;
- Reclassification decisions and their justification must be documented in the Data Asset Register and retained for audit purposes.

### 10.2 Triggers for Reclassification Review

| Trigger | Required Action |
|---|---|
| Passage of retention period | Review for secure disposal or downgrade to a lower tier |
| Change in regulatory status of data category | Review against current PDPA and Ministerial determinations |
| Anonymisation or de-identification of dataset | PIA required; DPO approval required before downgrade |
| Change in business purpose | Re-assess against original classification criteria |
| Public disclosure by the organisation | Reclassify to Public (Tier 1) following approval |
| Mergers, acquisitions, or corporate restructuring | Full data asset review required |
| Discovery of previously unclassified legacy data | Initial classification assessment by Data Owner within [30 days] |

### 10.3 Downward Reclassification Approval Requirements

| Current Tier | Proposed Tier | Approver(s) Required |
|---|---|---|
| Internal (Tier 2) | Public (Tier 1) | Data Owner + [Communications / Legal] |
| Confidential (Tier 3) | Internal (Tier 2) or Public (Tier 1) | Data Owner + DPO |
| Restricted (Tier 4) | Any lower tier | Data Owner + DPO + CISO |
| Restricted (Tier 4) — Sensitive Personal Data | Any lower tier | Data Owner + DPO + CISO + Legal Counsel |

### 10.4 Reclassification Process

1. **Initiation:** The Data Owner or DPO submits a Reclassification Request Form (see Appendix B) to the DPO.
2. **Assessment:** The DPO reviews the request, assessing the basis for reclassification and any residual risk.
3. **Approval:** Required approvals are obtained per the table in Section 10.3.
4. **Implementation:** The Data Custodian updates labels, metadata, and access controls to reflect the new classification within **[5 business days]** of approval.
5. **Recording:** The reclassification is recorded in the Data Asset Register, including date, reason, approver(s), and previous and new classification.
6. **Communication:** Affected stakeholders are notified of the change and updated handling requirements.

### 10.5 Periodic Review

All data assets classified as Confidential (Tier 3) or Restricted (Tier 4) must undergo a formal classification review at a minimum frequency of **[annually / every two years]** as part of the Data Asset Register maintenance cycle. The DPO is responsible for scheduling and overseeing these reviews.

---

## 11. Alignment with PDPA Sensitive Personal Data Categories (Section 29)

*This section specifically addresses the enhanced obligations that apply under PDPA Section 29. It should be reviewed by a legally qualified Data Protection Officer whenever there is an amendment to the PDPA or any Ministerial determination made under s29(e). This section is mandatory content for any organisation processing sensitive personal data.*

### 11.1 Overview of PDPA Section 29

Section 29 of the PDPA prohibits the processing of sensitive personal data **unless the data subject has given explicit consent**, or unless one of the limited statutory exceptions applies. The term "sensitive personal data" carries specific legal meaning under the PDPA and imposes obligations that go beyond those applicable to ordinary personal data.

[Organisation Name] recognises that the processing of sensitive personal data carries heightened legal, reputational, and ethical risk. All sensitive personal data must be classified as **Restricted (Tier 4)** and subject to the most stringent handling requirements under this policy.

### 11.2 Sensitive Personal Data Categories and Applicable Controls

| PDPA s29 Category | Description | Primary Business Contexts at [Org Name] | Key Additional Controls |
|---|---|---|---|
| Physical or mental health or condition | Medical history, diagnoses, disability status, mental health records | Employee medical records; customer insurance data | Explicit consent form; access limited to HR / Medical Officer; DPO oversight |
| Political opinions | Stated or inferred political affiliations or views | Not typically collected; capture only if strictly necessary | Separate storage; justification documented; DPO approval to collect |
| Religious beliefs or other beliefs of a similar nature | Religious affiliation, faith practices, belief systems | HR records where relevant to employee scheduling | Need-to-know access; not to be processed for commercial purposes |
| Commission or alleged commission of any offence | Criminal records, pending charges, fraud history | AML / KYC / credit screening processes | Legal counsel engaged; strict access control; regulatory retention requirements |
| Any other personal data as determined by the Minister | Categories to be notified by Ministerial Gazette from time to time | Monitor regulatory updates; DPO to review annually | Maintain a watch on Ministerial Gazettes; update this section promptly |
| Biometric data (where applicable) | Fingerprints, facial recognition data, iris scans | Physical access control systems; authentication | Privacy Impact Assessment mandatory before collection; DPIA on file |

### 11.3 Consent Management for Sensitive Personal Data

Where [Organisation Name] collects or processes sensitive personal data based on data subject consent under PDPA s29:

- Consent must be **explicit, informed, freely given, and specific** to the processing purpose;
- Consent forms must be maintained in the [Consent Management System / DPO Records] and linked to the relevant data subject record;
- Withdrawal of consent must be as straightforward as giving consent, and withdrawal must be acted upon within **[10 business days]**;
- Consent records must be retained for the duration of the data relationship and for **[X years]** thereafter in accordance with the Retention Schedule; and
- The DPO must conduct an annual review of consent validity for active data subject relationships.

### 11.4 Lawful Bases for Processing Sensitive Personal Data (Other Than Consent)

Where [Organisation Name] relies on a statutory exemption other than consent, the lawful basis must be documented before processing commences:

| Statutory Basis | Example Application | Documentation Required |
|---|---|---|
| PDPA s29(2)(a) — Necessary for employment obligations | Processing employee health data for statutory sick leave | HR policy; legal advice on file |
| PDPA s29(2)(b) — Vital interests of data subject | Emergency medical information for incapacitated employee | Incident record; DPO sign-off |
| PDPA s29(2)(c) — Legal proceedings | Processing criminal records data for AML compliance | Legal basis memo; regulatory requirement reference |
| Other applicable exemption | [Specify] | [Document accordingly] |

---

## 12. Roles and Responsibilities

*This section defines accountability for the implementation, maintenance, and oversight of this policy using a RACI framework. Authors should map these roles to actual job titles within the organisation and ensure the RACI is kept current when the organisational structure changes.*

### 12.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Board / BRMC | CEO | CISO | DPO | Data Owner | Data Custodian | All Staff | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Approve and endorse this policy | A | A | C | C | I | I | I | I |
| Develop and maintain this policy | I | I | A | R | C | I | I | C |
| Classify data assets at creation | I | I | C | C | R | R | R | I |
| Maintain the Data Asset Register | I | I | C | A | R | R | I | I |
| Approve downward reclassification (Tier 4) | I | I | A | R | R | I | I | I |
| Implement technical classification controls | I | I | A | C | C | R | I | I |
| Conduct employee classification training | I | I | A | R | C | I | R | I |
| Monitor compliance with this policy | I | I | A | R | C | C | I | R |
| Investigate classification-related incidents | I | I | A | R | C | C | I | I |
| Annual policy review | I | A | R | R | C | I | I | C |
| Report to Board on data classification status | I | I | C | R | I | I | I | C |

### 12.2 Role Descriptions

| Role | Responsibility in Context of This Policy |
|---|---|
| **Board / Board Risk Management Committee (BRMC)** | Ultimate accountability for data governance; approves policy; receives annual compliance reporting. |
| **Chief Executive Officer (CEO)** | Endorses policy on behalf of executive management; ensures resources are allocated for compliance. |
| **Chief Information Security Officer (CISO)** | Policy owner; ensures technical controls align with classification requirements; escalation point for security incidents. |
| **Data Protection Officer (DPO)** | Leads policy development and review; provides legal and regulatory interpretation; approves reclassification; manages PDPA compliance programme. |
| **Data Owners** | Senior managers accountable for specific data assets; responsible for initial classification decisions; approve access and reclassification requests for their data. |
| **Data Custodians** | Technical teams (e.g., IT, System Administrators) who implement and maintain controls required by the Data Owner's classification decisions. |
| **All Staff** | Classify data they create or handle; apply correct labels; report incidents; complete mandatory training. |
| **Internal Audit** | Independently assess compliance with this policy; report findings to Board Audit Committee; verify remediation of identified gaps. |

---

## 13. Compliance, Monitoring, and Enforcement

*This section describes how compliance with the policy will be measured and enforced. It should cross-reference the organisation's audit programme and incident response procedures.*

### 13.1 Monitoring and Assurance

[Organisation Name] will implement the following controls to monitor compliance with this policy:

| Control | Frequency | Responsible Party | Output |
|---|---|---|---|
| Data Asset Register review | Quarterly | DPO / Data Custodians | Updated register; gap report |
| Access rights review for Confidential and Restricted data | Quarterly | CISO / Data Custodians | Access control certification |
| DLP tool exception and alert review | Monthly | Information Security Team | Exception log; remediation actions |
| Classification training completion tracking | Ongoing | Human Resources / DPO | Training completion report |
| Internal audit of data classification controls | Annual | Internal Audit | Audit report to Board Audit Committee |
| Third-party vendor data handling assessment | Annual / Upon contract renewal | DPO / Procurement | Vendor compliance report |

### 13.2 Key Performance Indicators

[Organisation Name] will track the following KPIs related to data classification compliance:

| KPI | Target | Reporting Frequency |
|---|---|---|
| Percentage of data assets in the register with a documented classification | ≥ 95% | Quarterly |
| Percentage of employees completing annual data classification training | 100% | Annual |
| Number of data misclassification incidents identified | 0 (target); trend tracked | Quarterly |
| Average time to remediate a classification-related incident | ≤ [X] business days | Quarterly |
| Percentage of third-party vendors with signed DPA / NDA in place | 100% | Annual |

### 13.3 Non-Compliance

Instances of non-compliance with this policy will be:

- Logged in the [Incident Management System / GRC Platform];
- Assessed for severity and escalated appropriately by the DPO and CISO;
- Subject to remediation with defined timelines and follow-up verification;
- Reported in aggregate to senior management and the Board as appropriate; and
- Where they constitute a PDPA breach, managed in accordance with the [Data Breach Response Procedure].

---

## 14. Review and Approval

### 14.1 Policy Review

This policy must be reviewed at a minimum frequency of **annually** or upon:

- Any amendment to the PDPA or associated Regulations;
- Any Ministerial determination under PDPA s29(e) adding new categories of sensitive personal data;
- A material change to [Organisation Name]'s data processing activities, business model, or technology environment;
- A significant data breach or classification-related incident;
- Any directive or finding from Bank Negara Malaysia, the Personal Data Protection Commissioner, or another competent authority; or
- Changes to international standards or industry guidance materially affecting data classification practices.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial release |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of changes] |

### 14.3 Approval Sign-Off

By signing below, the approvers confirm that they have read, understood, and approved this Data Classification Policy.

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Chief Executive Officer | [Name] | [Signature] | [Date] |
| Board / Board Risk Management Committee Representative | [Name] | [Signature] | [Date] |

---

## 15. References

The following legislation, regulatory instruments, and standards are referenced in or are relevant to this policy:

| Reference | Title | Relevant Provisions |
|---|---|---|
| Personal Data Protection Act 2010 | Laws of Malaysia Act 709 | s9 (Security Principle), s10 (Retention Principle), s29 (Sensitive Personal Data) |
| Personal Data Protection Regulations 2013 | P.U.(A) 335/2013 | Processing standards and data user obligations |
| Personal Data Protection (Class of Data Users) Order 2013 | P.U.(A) 336/2013 | Financial sector data user classification |
| Bank Negara Malaysia — Risk Management in Technology (RMiT) | BNM/RH/PD 028-119 | Data management, access controls, and information security governance |
| NACSA National Cybersecurity Policy | NACSA | Critical information infrastructure protection and data security |
| ISO/IEC 27001:2022 | International Standard | Information security management systems; Annex A.8.2 (Information Classification) |
| ISO/IEC 27002:2022 | International Standard | Information security controls guidance; Clause 5.12 (Classification of Information) |
| NIST SP 800-88 Rev. 1 | NIST | Guidelines for media sanitisation (disposal controls) |
| [Other applicable BNM guidelines] | Bank Negara Malaysia | [Title and relevant provisions] |

---

## 16. Appendices

### Appendix A — Classification Colour Scheme and Label Reference

*Authors should insert the official approved classification label graphics used by the organisation, including colour codes, fonts, and placement specifications. This appendix should be reviewed whenever branding or technical standards are updated.*

| Classification | Label Text | Background Colour | Text Colour | Hex Code (Background) |
|---|---|---|---|---|
| Public | PUBLIC | White | Green | #FFFFFF / #28A745 |
| Internal Use Only | INTERNAL USE ONLY | White | Blue | #FFFFFF / #004C97 |
| Confidential | CONFIDENTIAL | Amber | White | #FFC107 / #FFFFFF |
| Restricted | RESTRICTED | Red | White | #DC3545 / #FFFFFF |

*[Insert approved label graphics here]*

---

### Appendix B — Reclassification Request Form (Template)

*This form must be completed and submitted to the DPO for all downward reclassification requests. The form must be retained for a minimum of [X years] following determination.*

| Field | Details |
|---|---|
| **Request Reference** | [Auto-generated / Manual ID] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requesting Data Owner** | [Name, Title, Department] |
| **Data Asset Description** | [Description of the data asset or dataset] |
| **Current Classification** | [Public / Internal / Confidential / Restricted] |
| **Proposed Classification** | [Public / Internal / Confidential / Restricted] |
| **Justification for Reclassification** | [Detailed written justification] |
| **Evidence Supporting Request** | [Reference to supporting documentation] |
| **Residual Risk Assessment** | [Summary of any residual risks if reclassification is approved] |
| **DPO Review Notes** | [To be completed by DPO] |
| **DPO Recommendation** | [Approve / Reject / Defer pending further information] |
| **CISO Sign-Off (if required)** | [Name, Signature, Date] |
| **DPO Sign-Off** | [Name, Signature, Date] |
| **CEO Sign-Off (if Tier 4)** | [Name, Signature, Date] |
| **Effective Date of Reclassification** | [DD/MM/YYYY] |

---

### Appendix C — Data Asset Register (Minimum Fields)

*The Data Asset Register is a living document maintained by Data Custodians under the oversight of the DPO. It must be updated whenever data assets are created, reclassified, or disposed of. A minimum set of fields is specified below; organisations may add additional fields as required.*

| Field | Description |
|---|---|
| **Asset ID** | Unique identifier for the data asset |
| **Asset Name / Description** | Human-readable name and brief description |
| **Data Owner** | Name and role of accountable Data Owner |
| **Data Custodian** | Name and role of responsible Data Custodian |
| **Classification Tier** | Current classification (Public / Internal / Confidential / Restricted) |
| **Contains Personal Data?** | Yes / No |
| **Contains Sensitive Personal Data (s29)?** | Yes / No; specify category |
| **PDPA Lawful Basis for Processing** | Consent / Statutory obligation / [Other] |
| **System / Location** | Where the data asset is stored (system name, repository, physical location) |
| **Retention Period** | Defined retention period per Retention Schedule |
| **Disposal Method** | Required disposal method on expiry |
| **Date of Last Classification Review** | [DD/MM/YYYY] |
| **Date of Next Classification Review** | [DD/MM/YYYY] |
| **Third Parties with Access** | List of authorised third parties and applicable DPAs / NDAs |
| **Notes** | Any additional relevant information |

---

### Appendix D — Sensitive Personal Data Processing Register (PDPA Section 29)

*This register is a mandatory component of [Organisation Name]'s PDPA compliance programme. It must be maintained by the DPO and reviewed at least annually. All processing of sensitive personal data must be recorded here prior to commencement.*

| Field | Description |
|---|---|
| **Processing Activity ID** | Unique reference |
| **Description of Processing Activity** | What is being done with the sensitive personal data |
| **s29 Category** | Category of sensitive personal data (per Section 11.2 of this policy) |
| **Lawful Basis** | Explicit consent / Statutory exemption (specify) |
| **Consent Reference (if applicable)** | Reference to consent record in Consent Management System |
| **Data Subjects Affected** | Number / category (e.g., employees, customers) |
| **Retention Period** | Defined retention period |
| **Third Parties Involved** | Any processors or recipients |
| **Privacy Impact Assessment Reference** | PIA ID and date (if conducted) |
| **DPO Sign-Off Date** | [DD/MM/YYYY] |
| **Next Review Date** | [DD/MM/YYYY] |

---

### Appendix E — Related Policies and Procedures

*Cross-reference documents that work in conjunction with this policy. Ensure that these documents are version-controlled and accessible to all relevant staff.*

| Document Title | Document ID | Owner | Relationship to This Policy |
|---|---|---|---|
| Information Security Policy | [ID] | CISO | Parent policy; sets overarching security framework |
| Data Protection and Privacy Policy | [ID] | DPO | Governs PDPA compliance broadly |
| Data Breach Response Procedure | [ID] | DPO | Triggered by classification-related breaches |
| Acceptable Use Policy | [ID] | CISO | Governs employee data handling behaviour |
| Records Retention and Disposal Schedule | [ID] | DPO / Legal | Defines retention periods aligned with PDPA s10 |
| Third-Party Vendor Management Policy | [ID] | Procurement / DPO | Governs DPA/NDA requirements for third parties |
| Access Control Policy | [ID] | CISO | Defines access controls aligned with classification tiers |
| Privacy Impact Assessment Procedure | [ID] | DPO | Required for Restricted / s29 data processing |
| Human Resources Disciplinary Policy | [ID] | HR | Enforcement of employee obligations under this policy |

---

*End of Document*

---

*This template is provided as a starting point for [Organisation Name]'s Data Classification Policy. It must be reviewed by qualified legal counsel and a certified Data Protection Officer prior to adoption to ensure it accurately reflects the organisation's specific circumstances, processing activities, and current regulatory obligations under the PDPA and applicable BNM guidelines. This template does not constitute legal advice.*