# Data Protection Impact Assessment (DPIA) Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., PDPA-DPIA-YYYY-NNN] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Organization** | [Organization Name] |
| **Project / System Name** | [Project or System Name] |
| **DPIA Reference** | [DPIA Reference Number] |
| **Date Initiated** | [DD Month YYYY] |
| **Last Review Date** | [DD Month YYYY] |
| **Next Review Date** | [DD Month YYYY — Per project cycle or upon material change] |
| **Approved By** | [Approved By — Name and Designation] |
| **Status** | [Draft / Under Review / Approved / Rejected] |

---

> **IMPORTANT NOTICE:** This document is classified **Confidential**. It contains sensitive information regarding personal data processing activities, privacy risk assessments, and internal control decisions of [Organization Name]. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of the Personal Data Protection Act 2010 (PDPA) and internal data governance policies.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory Framework and Legal Basis](#3-regulatory-framework-and-legal-basis)
4. [Project and Processing Activity Description](#4-project-and-processing-activity-description)
5. [Necessity and Proportionality Assessment](#5-necessity-and-proportionality-assessment)
6. [Data Flow Diagram and Data Inventory](#6-data-flow-diagram-and-data-inventory)
7. [Privacy Risk Identification and Risk Scoring](#7-privacy-risk-identification-and-risk-scoring)
8. [Mitigation Measures and Residual Risk](#8-mitigation-measures-and-residual-risk)
9. [Consultation Outcomes](#9-consultation-outcomes)
10. [DPO Opinion and Recommendations](#10-dpo-opinion-and-recommendations)
11. [Final Risk Acceptance Decision](#11-final-risk-acceptance-decision)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Executive Summary

*Provide a concise, non-technical summary of this DPIA — suitable for senior management review. Summarize the project, the key privacy risks identified, the mitigation controls recommended, and the DPO's final opinion. This section should be completable in one to two paragraphs.*

**Project Name:** [Project or System Name]

**Processing Activity:** [Brief description of the personal data processing activity under assessment]

**Assessment Period:** [DD Month YYYY] to [DD Month YYYY]

**Overall Risk Rating (Pre-Mitigation):** [Critical / High / Medium / Low]

**Overall Residual Risk Rating (Post-Mitigation):** [Critical / High / Medium / Low]

**DPO Opinion:** [Approved to Proceed / Approved with Conditions / Deferred Pending Action / Rejected]

**Summary of Key Findings:**

[Provide 3–5 bullet points summarising the most significant findings of this DPIA. Example below:]

- [Key Finding 1: e.g., The processing activity involves the collection of sensitive personal data including financial information and biometric data, triggering heightened PDPA obligations under s6.]
- [Key Finding 2: e.g., Data retention periods were found to exceed operational necessity, requiring revision of the data retention schedule.]
- [Key Finding 3: e.g., Third-party data processors identified in the data flow lack adequate data processing agreements compliant with s9 requirements.]
- [Key Finding 4: e.g., Three high-rated privacy risks were identified, each with corresponding mitigation measures assigned to named accountable owners.]
- [Key Finding 5: e.g., The DPO has approved the project to proceed subject to the completion of six mandatory remediation actions prior to go-live.]

**Date of DPO Sign-Off:** [DD Month YYYY]

---

## 2. Purpose and Scope

### 2.1 Purpose

*State the purpose of this DPIA document — what it is intended to achieve, who it is for, and how it will be used as an accountability artifact.*

This Data Protection Impact Assessment (DPIA) Report documents the structured privacy risk assessment conducted by [Organization Name] in connection with the proposed or existing processing activity described in Section 4 of this report. The DPIA is conducted in accordance with the Personal Data Protection Act 2010 (PDPA) and [Organization Name]'s internal Data Protection Policy [reference internal policy document ID].

The primary objectives of this DPIA are to:

- Identify and assess the privacy risks to data subjects arising from the proposed processing activity;
- Evaluate the necessity and proportionality of the personal data processing relative to its stated purpose;
- Document mitigation measures and controls to reduce privacy risks to an acceptable residual level;
- Record formal consultation with relevant stakeholders, including data subjects where appropriate;
- Obtain the Data Protection Officer's (DPO) formal opinion and recommendation;
- Provide a documented record of the risk acceptance decision for accountability and audit purposes;
- Demonstrate compliance with the principles of Privacy by Design and accountability as required under the PDPA.

### 2.2 Scope

*Define the boundaries of this assessment — what systems, processes, departments, data subjects, and geographies are in scope. Explicitly state what is out of scope.*

**In Scope:**

| Scope Dimension | Detail |
|---|---|
| **Project / System** | [Name of the project, system, or processing activity] |
| **Business Unit(s)** | [List of departments or business units involved] |
| **Processing Locations** | [Physical and/or cloud locations where data is processed] |
| **Data Subject Categories** | [e.g., Customers, Employees, Vendors, Prospects] |
| **Data Categories** | [e.g., Identity data, financial data, health data, biometric data] |
| **Geographic Scope** | [Malaysia and/or other jurisdictions if cross-border transfers are involved] |
| **Assessment Period** | [DD Month YYYY] to [DD Month YYYY] |

**Out of Scope:**

- [Explicitly list any systems, processes, or data flows that are excluded from this assessment and the reason for exclusion.]
- [e.g., Legacy system [System Name] — subject to a separate DPIA under reference [DPIA-YYYY-NNN].]
- [e.g., HR payroll processing — covered under standing DPIA [DPIA-YYYY-NNN] last reviewed [Date].]

### 2.3 When a DPIA is Required

*Briefly explain the trigger(s) that made this DPIA mandatory for this project or system.*

This DPIA was triggered by the following condition(s):

- [ ] New system or application involving personal data processing
- [ ] Significant change or upgrade to an existing system
- [ ] New or expanded use of sensitive personal data (as defined under PDPA s6)
- [ ] Introduction of automated decision-making or profiling
- [ ] Large-scale processing of personal data
- [ ] Processing involving vulnerable data subjects (e.g., minors, patients)
- [ ] Cross-border transfer of personal data to a third country
- [ ] Onboarding of a new data processor with access to personal data
- [ ] Regulatory or internal policy requirement
- [ ] Other: [Specify]

---

## 3. Regulatory Framework and Legal Basis

*This section establishes the legal and regulatory basis for conducting this DPIA and maps the assessment to specific PDPA provisions. Do not remove or alter the regulatory references; update the interpretation columns as applicable to the project.*

### 3.1 Applicable Legislation

| Legislation / Standard | Jurisdiction | Relevance to This Assessment |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | Malaysia | Primary data protection legislation governing all commercial data processing activities |
| Personal Data Protection Regulations 2013 | Malaysia | Supplementary regulations specifying security standards and procedures |
| Personal Data Protection (Class of Data Users) Order 2013 | Malaysia | Classifies [Organization Name] as a registered data user in the [specify class] sector |
| Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy | Malaysia | [If applicable — cross-reference to RMiT data governance requirements] |
| ISO/IEC 27001:2022 | International | [If applicable — information security management alignment] |
| [Other applicable law or standard] | [Jurisdiction] | [Relevance] |

### 3.2 PDPA Principles Assessment Mapping

| PDPA Principle | PDPA Section | Principle Description | Applicable to This Assessment? | Notes |
|---|---|---|---|---|
| General Principle | s5 | Personal data must not be processed unless the data subject has given consent or a statutory condition is met | Yes / No | [Notes on how s5 applies to this processing activity] |
| Notice and Choice Principle | s6 | Data users must inform data subjects of the purposes of processing and obtain consent where required | Yes / No | [Notes on notice and consent mechanisms in place] |
| Disclosure Principle | s7 | Personal data must not be disclosed without consent except as permitted by law | Yes / No | [Notes] |
| Security Principle | s9 | Practical steps must be taken to protect personal data from loss, misuse, modification, and unauthorized access | Yes / No | [Security controls applicable to this processing activity] |
| Retention Principle | s10 | Personal data must not be retained longer than necessary for the purpose it was collected | Yes / No | [Retention schedule details] |
| Data Integrity Principle | s11 | Data users must take reasonable steps to ensure personal data is accurate, complete, and up-to-date | Yes / No | [Notes] |
| Access Principle | s12 | Data subjects have the right to access their personal data and correct inaccurate data | Yes / No | [Notes on access request procedures] |
| Rights of Data Subjects | s29 | Data subjects' rights including correction, blocking, and erasure of personal data | Yes / No | [Notes on how data subject rights are facilitated for this activity] |

### 3.3 Legal Basis for Processing

*Identify and document the lawful basis under which personal data is processed for this activity. At least one legal basis must be established before processing commences.*

**Primary Legal Basis:** [Select one]

- [ ] Consent of the data subject (s5 PDPA)
- [ ] Necessary for the performance of a contract to which the data subject is a party
- [ ] Necessary for compliance with a legal obligation
- [ ] Necessary to protect the vital interests of the data subject
- [ ] Necessary for the performance of a task in the public interest
- [ ] Legitimate interests pursued by [Organization Name] — documented legitimate interests assessment attached at Appendix [X]

**Consent Mechanism (if applicable):**

| Aspect | Detail |
|---|---|
| **Consent Type** | [Explicit / Implied / Opt-in / Opt-out] |
| **Consent Capture Method** | [e.g., Digital consent form, written form, recorded verbal consent] |
| **Consent Record Location** | [System or repository where consent records are stored] |
| **Withdrawal Mechanism** | [How data subjects may withdraw consent] |
| **Consent Version / Date** | [Version of the consent notice and effective date] |

---

## 4. Project and Processing Activity Description

*Provide a detailed description of the project or system under assessment, the purpose of processing, the categories of data involved, and all parties that access or process the data. Be specific — vague descriptions reduce the utility of this DPIA as an accountability record.*

### 4.1 Project Overview

| Field | Detail |
|---|---|
| **Project / System Name** | [Full project or system name] |
| **Project Reference** | [Internal project reference or JIRA/ticket number] |
| **Business Sponsor** | [Name and designation of the business owner] |
| **Project Manager** | [Name and designation] |
| **Technology Owner** | [Name and designation of the system or technical owner] |
| **Deployment Environment** | [Production / UAT / Development] |
| **Planned Go-Live Date** | [DD Month YYYY] |
| **Project Phase** | [Initiation / Design / Development / Testing / Deployment / Post-Go-Live] |
| **Related Systems** | [List of upstream and downstream systems that interact with this project] |

### 4.2 Purpose of Processing

*Clearly articulate why personal data is being collected and processed. The stated purpose must be specific, explicit, and legitimate. Avoid vague or overly broad purpose statements.*

**Primary Purpose:**

[State the primary, specific purpose for which personal data is collected and processed in this activity. Example: "To verify the identity of new retail banking customers during the digital onboarding process in compliance with BNM's Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act (AMLA) requirements."]

**Secondary Purposes (if any):**

| Secondary Purpose | Basis for Secondary Use | Data Subject Notified? |
|---|---|---|
| [e.g., Product analytics and service improvement] | [Legitimate interest / Consent] | Yes / No |
| [e.g., Marketing of related financial products] | [Consent — separate opt-in obtained] | Yes / No |
| [Add rows as required] | | |

**Incompatible Use Statement:**

[Confirm that the data will not be used for purposes incompatible with those stated above without separate legal basis and, where required, fresh consent. State any known risks of function creep and how these are controlled.]

### 4.3 Categories of Data Subjects

| Data Subject Category | Estimated Volume | Vulnerability Factors | Special Considerations |
|---|---|---|---|
| [e.g., Retail Customers] | [e.g., ~50,000 per annum] | [e.g., None identified] | [e.g., Includes non-resident foreign nationals] |
| [e.g., Corporate Customers — Authorised Representatives] | [e.g., ~5,000] | [e.g., None identified] | |
| [e.g., Minors (where applicable)] | [e.g., Estimated <500 — requires guardian consent] | High — minor status | [Special parental/guardian consent process required] |
| [Add rows as required] | | | |

### 4.4 Categories of Personal Data Processed

*List every category of personal data that is collected, stored, processed, or transmitted as part of this activity. For each category, indicate whether it constitutes sensitive personal data under PDPA s6.*

| Data Category | Specific Data Fields | Sensitive Personal Data (s6)? | Source of Data | Format |
|---|---|---|---|---|
| Identity Data | Full name, NRIC / Passport Number, date of birth, gender | No | Data subject (direct collection) | Structured |
| Contact Data | Email address, mobile number, residential address | No | Data subject (direct collection) | Structured |
| Financial Data | Bank account number, credit/debit card details, transaction history, income information | No (but regulated) | Data subject, third-party credit bureau | Structured |
| Biometric Data | Fingerprint, facial recognition data | **Yes** | [Collection method] | Structured / Unstructured |
| Health / Medical Data | [Specify if applicable] | **Yes** | [Specify] | [Specify] |
| Religious Belief | [Specify if applicable] | **Yes** | [Specify] | [Specify] |
| Political Opinions | [Specify if applicable] | **Yes** | [Specify] | [Specify] |
| Behavioural / Usage Data | Login timestamps, navigation history, device identifiers | No | Automated collection (system logs) | Structured |
| [Add rows as required] | | | | |

> **Note:** Where sensitive personal data (as defined under PDPA s6) is processed, heightened obligations apply including the explicit consent requirement and enhanced security measures. Refer to Section 5 (Necessity and Proportionality Assessment) and Section 8 (Mitigation Measures) for controls applied to sensitive data categories.

### 4.5 Processing Activities Described

*Describe the full lifecycle of personal data within this project — from collection through to deletion or archival. Use the data flow in Section 6 to complement this narrative.*

| Processing Stage | Description | Systems / Tools Involved | Automated / Manual |
|---|---|---|---|
| **Collection** | [How and where is data collected — web form, API, in-branch, third-party feed, etc.] | [System names] | [Automated / Manual / Both] |
| **Storage** | [Where is data stored — database, file share, cloud storage, etc.] | [Database / storage systems] | [Automated] |
| **Use / Processing** | [How is data used — queried, analysed, profiled, matched, reported, etc.] | [System names] | [Automated / Manual / Both] |
| **Transmission** | [How is data transmitted internally and externally — API, SFTP, email, etc.] | [Transmission mechanisms] | [Automated / Manual / Both] |
| **Disclosure / Sharing** | [With whom is data shared — internal teams, third-party processors, regulators, etc.] | [Recipients] | [Automated / Manual / Both] |
| **Retention and Archival** | [How long is data retained and in what state — live system, cold archive, encrypted archive] | [Archive systems] | [Automated / Manual] |
| **Deletion / Destruction** | [How and when is data securely deleted or destroyed] | [Deletion tools / processes] | [Automated / Manual / Both] |

### 4.6 Third-Party Processors and Data Sharing

*List all third parties — vendors, service providers, cloud platforms, or partner organizations — that access, process, or receive personal data as part of this activity.*

| Third Party | Role | Data Shared | Location | Data Processing Agreement (DPA) in Place? | DPA Reference |
|---|---|---|---|---|---|
| [Vendor / Partner Name] | [Data Processor / Sub-processor / Joint Controller] | [Data categories shared] | [Malaysia / Country name] | Yes / No / In Progress | [DPA reference or contract number] |
| [Cloud Service Provider] | [Data Processor — IaaS / PaaS] | [Data categories hosted] | [Server location(s)] | Yes / No / In Progress | [Reference] |
| [Add rows as required] | | | | | |

> **Action Required:** Any third party listed above without a DPA in place must have one executed prior to go-live. Assign ownership and target dates in Section 8 (Mitigation Measures).

---

## 5. Necessity and Proportionality Assessment

*This section evaluates whether the personal data processing is necessary to achieve the stated purpose and whether the extent of processing is proportionate to that purpose. This assessment directly addresses the General Principle (s5) and Notice and Choice Principle (s6) of the PDPA.*

### 5.1 Necessity Assessment

*For each data category or processing activity, assess whether it is genuinely necessary for the stated purpose. If any data collection or processing cannot be justified, it should not be included in the final design.*

| Data Category / Processing Activity | Stated Purpose | Is it Necessary? | Justification | Alternative Considered? | Outcome |
|---|---|---|---|---|---|
| [e.g., Full NRIC Number] | Identity verification and AML compliance | Yes | BNM AMLA guidelines require full NRIC for KYC | [e.g., Partial masking considered but insufficient for regulatory compliance] | Retain — necessary |
| [e.g., Date of Birth] | Age verification | Yes | Required to establish legal capacity to contract | [e.g., Year-only considered but insufficient for compliance] | Retain — necessary |
| [e.g., Full residential address] | Correspondence and regulatory reporting | Partial | Street address sufficient; district/state collection exceeds operational need | [e.g., Reduce to essential address fields only] | Modify — collect minimum required fields |
| [e.g., Marketing preferences — third-party products] | Cross-selling | No — for this activity | Purpose is not directly related to the core service; separate consent process required | [e.g., Move to separate opt-in journey] | Remove from this processing activity |
| [Add rows as required] | | | | | |

### 5.2 Proportionality Assessment

*Assess whether the volume, scope, and intrusiveness of the data processing is proportionate to the benefit achieved.*

| Assessment Criterion | Finding | Rating |
|---|---|---|
| **Minimum necessary data** — Is only the minimum data necessary being collected? | [Finding] | Satisfactory / Partially Satisfactory / Unsatisfactory |
| **Purpose limitation** — Is data used only for the stated purposes? | [Finding] | Satisfactory / Partially Satisfactory / Unsatisfactory |
| **Retention limitation** — Is data retained only for as long as necessary? | [Finding] | Satisfactory / Partially Satisfactory / Unsatisfactory |
| **Subject impact** — Is the impact on data subjects proportionate to the benefit? | [Finding] | Satisfactory / Partially Satisfactory / Unsatisfactory |
| **Less intrusive alternatives** — Have less privacy-intrusive alternatives been considered? | [Finding] | Satisfactory / Partially Satisfactory / Unsatisfactory |

**Overall Proportionality Determination:**

- [ ] **Proportionate** — Processing is justified and the scope is appropriate to the purpose.
- [ ] **Partially Proportionate** — Processing is mostly justified but specific elements require modification (see mitigation actions in Section 8).
- [ ] **Disproportionate** — Processing significantly exceeds what is necessary. Major redesign required before approval can be granted.

**Narrative Justification:**

[Provide a 2–4 paragraph narrative explaining the proportionality determination. Reference the specific data categories and processing activities that were found to be proportionate or disproportionate, and explain what changes are required.]

### 5.3 Data Minimisation Recommendations

*List specific data minimisation actions identified during the necessity and proportionality review.*

| Recommendation | Data Category Affected | Action Required | Accountable Owner | Target Date |
|---|---|---|---|---|
| [e.g., Remove collection of [field name] — not required for stated purpose] | [Data category] | [Delete field from data model and collection form] | [Name / Role] | [DD Month YYYY] |
| [e.g., Apply masking to [field name] in non-production environments] | [Data category] | [Implement data masking controls] | [Name / Role] | [DD Month YYYY] |
| [Add rows as required] | | | | |

---

## 6. Data Flow Diagram and Data Inventory

*This section documents the end-to-end flow of personal data through the processing activity, from the point of collection to deletion. The data flow diagram and inventory form the empirical foundation of the risk assessment in Section 7.*

### 6.1 Data Flow Diagram

*Insert the data flow diagram (DFD) for this processing activity. The diagram must illustrate all systems, actors, and data flows involving personal data, including cross-border transfers. The DFD must be reviewed and approved by the Technology Owner named in Section 4.1.*

**[INSERT DATA FLOW DIAGRAM HERE]**

*If the diagram is maintained in a separate tool (e.g., Lucidchart, draw.io, Visio), reference the document below:*

| DFD Reference | Location | Version | Last Updated | Approved By |
|---|---|---|---|---|
| [DFD-YYYY-NNN] | [Link to diagram or file path in document management system] | [Version] | [DD Month YYYY] | [Technology Owner Name] |

**Key to Diagram Symbols Used:**

| Symbol | Meaning |
|---|---|
| Rectangle | External entity (data subject, third party, regulator) |
| Rounded rectangle | Internal system or application |
| Arrow | Direction of data flow |
| Cylinder | Data store or database |
| Dashed border | System boundary / trust boundary |
| Red border | Cross-border data transfer |

### 6.2 Data Inventory (Record of Processing Activities)

*Complete the data inventory table for all personal data processed in this activity. This table serves as the Record of Processing Activities (RoPA) entry for this project and must be kept current throughout the project lifecycle.*

| # | Data Element | Category | Data Subject Group | Collection Method | Collection Point | Storage Location | Storage Country | Encryption at Rest | Encryption in Transit | Retention Period | Deletion Method | Third-Party Access | Legal Basis |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [e.g., Full Name] | Identity | [Customer] | [Web form — direct input] | [Onboarding portal] | [Database: [System Name]] | Malaysia | Yes / No | Yes / No | [X years from account closure] | [Secure deletion per retention policy] | [None / Vendor name] | [Consent / Contract] |
| 2 | [e.g., NRIC Number] | Identity | [Customer] | [Web form — direct input] | [Onboarding portal] | [Database: [System Name]] | Malaysia | Yes — AES-256 | Yes — TLS 1.2+ | [7 years — AML requirement] | [Secure deletion per retention policy] | [Credit Bureau Name] | [Legal obligation] |
| 3 | [Add rows for all data elements] | | | | | | | | | | | | |

### 6.3 Cross-Border Data Transfers

*Identify and assess all transfers of personal data to recipients outside Malaysia. PDPA s129 restricts transfer of personal data to countries that do not provide a standard of protection equivalent to that under the PDPA, unless specific exceptions apply.*

| Transfer # | Data Transferred | Recipient | Recipient Country | Transfer Mechanism | Adequacy / Safeguard | Approved? |
|---|---|---|---|---|---|---|
| [CBT-001] | [Data categories] | [Recipient organization and role] | [Country] | [Standard Contractual Clauses / Binding Corporate Rules / Regulatory approval / Consent] | [Adequacy determination / contractual safeguards] | Yes / No / Pending |
| [Add rows as required] | | | | | | |

> **Note:** If cross-border transfers are identified, a Cross-Border Data Transfer Impact Assessment (CBDTIA) must be completed and attached at Appendix [X].

### 6.4 Data Retention Schedule

*Define the retention period for each data category, the business or legal justification for that period, and the disposal method.*

| Data Category | Retention Period | Retention Justification (Legal / Business) | Archival Process | Disposal Method | Disposal Trigger | Owner |
|---|---|---|---|---|---|---|
| [Identity Data] | [7 years from last transaction] | [BNM AMLA requirements] | [Cold archive after 2 years] | [Secure automated deletion — overwrite x3] | [Account closure + 7 years] | [Data Owner] |
| [Transaction Data] | [7 years] | [Financial reporting and audit obligations] | [Archive after 1 year] | [Secure deletion] | [7 years post-transaction] | [Data Owner] |
| [Application / Declined records] | [3 years] | [Limitation period for contract disputes] | [None — live system] | [Secure deletion] | [3 years post-decision] | [Data Owner] |
| [Add rows as required] | | | | | | |

---

## 7. Privacy Risk Identification and Risk Scoring

*This section identifies all privacy risks associated with the processing activity and assigns a risk score to each risk based on likelihood and impact. The risk scoring methodology must be consistent with [Organization Name]'s Enterprise Risk Management (ERM) framework.*

### 7.1 Risk Scoring Methodology

*Define the likelihood and impact scales used for risk scoring. Adapt these scales to align with the organization's existing ERM framework if required.*

**Likelihood Scale:**

| Score | Level | Definition |
|---|---|---|
| 1 | Rare | The event is unlikely to occur — may happen in exceptional circumstances (less than once every 5 years) |
| 2 | Unlikely | The event could occur at some time (once every 3–5 years) |
| 3 | Possible | The event might occur at some time (once every 1–3 years) |
| 4 | Likely | The event will probably occur in most circumstances (once per year or more) |
| 5 | Almost Certain | The event is expected to occur in most circumstances (multiple times per year) |

**Impact Scale:**

| Score | Level | Definition — Privacy Context |
|---|---|---|
| 1 | Negligible | Minimal impact on data subjects — no real-world harm anticipated |
| 2 | Minor | Limited impact — inconvenience or minor embarrassment to data subjects |
| 3 | Moderate | Significant impact — potential for distress, financial loss, or reputational damage to data subjects |
| 4 | Serious | High impact — likely financial loss, discrimination, identity theft, or loss of livelihood for data subjects |
| 5 | Severe | Critical impact — serious or irreversible harm including physical danger, mass-scale harm, or systemic rights violations |

**Risk Rating Matrix:**

| | **Impact 1 — Negligible** | **Impact 2 — Minor** | **Impact 3 — Moderate** | **Impact 4 — Serious** | **Impact 5 — Severe** |
|---|---|---|---|---|---|
| **Likelihood 5 — Almost Certain** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likelihood 4 — Likely** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Likelihood 3 — Possible** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Likelihood 2 — Unlikely** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Likelihood 1 — Rare** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

**Risk Rating Thresholds:**

| Risk Score | Rating | Required Action |
|---|---|---|
| 20–25 | **Critical** | Immediate escalation to Senior Management. Processing must not commence without Board/EXCO approval and mandatory mitigation. |
| 12–19 | **High** | DPO approval required. Mandatory mitigation measures must be implemented before go-live. |
| 6–11 | **Medium** | Management review required. Mitigation measures recommended and tracked. |
| 1–5 | **Low** | Monitor and review at next scheduled DPIA review. |

### 7.2 Privacy Risk Register

*Identify all privacy risks associated with this processing activity. Consider risks across the full data lifecycle — collection, storage, use, sharing, and deletion. For each risk, assess the threat source, vulnerability, and potential impact on data subjects.*

| Risk ID | Risk Category | Risk Description | Threat Source | Vulnerability | Affected Data | Affected Data Subjects | Likelihood (1–5) | Impact (1–5) | Risk Score | Risk Rating |
|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | Unauthorised Access | Unauthorised internal access to personal data by employees without a legitimate need-to-know | Internal — malicious or negligent employee | Insufficient role-based access controls; over-privileged user accounts | [Data categories affected] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-002 | Data Breach — External | Cyber attack resulting in exfiltration of personal data from the production database | External threat actor | [Identified vulnerability, e.g., unpatched application vulnerability, weak API authentication] | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-003 | Unlawful Disclosure | Personal data shared with third parties without valid legal basis or adequate contractual protections | Internal — process failure / third-party misuse | Absence of data processing agreements; inadequate third-party vetting | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-004 | Excessive Retention | Personal data retained beyond the defined retention period increasing risk of exposure and non-compliance | Internal — process failure | Absence of automated retention enforcement; manual deletion processes subject to error | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-005 | Purpose Creep | Personal data used for purposes beyond those for which it was originally collected, without fresh consent | Internal — business-driven scope expansion | Insufficient data governance controls; absence of purpose limitation enforcement in system design | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-006 | Cross-Border Transfer Compliance | Personal data transferred to jurisdictions without adequate data protection, in violation of PDPA transfer restrictions | Internal — process failure; vendor risk | Absent or inadequate Standard Contractual Clauses with overseas processors | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-007 | Data Subject Rights Failure | Inability to fulfill data subject access, correction, or erasure requests within required timeframes | Internal — process / system failure | Absence of a subject access request management system; data spread across multiple systems | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-008 | Inadequate Consent Management | Processing of personal data without valid, recorded, and demonstrable consent where consent is the legal basis | Internal — process failure; legal / compliance gap | Absence of a consent management platform; consent records not auditable | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-009 | Profiling / Automated Decision-Making | Automated profiling or scoring with significant effect on data subjects conducted without adequate safeguards or transparency | Internal — algorithmic risk | Absence of human review mechanism; unexplainable model outputs | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| R-010 | Vendor / Sub-processor Risk | Data processor or sub-processor suffers a security incident or acts outside the scope of the data processing agreement | External — vendor failure | Inadequate vendor due diligence; absence of sub-processor notification clauses in DPA | [Data categories] | [Data subject categories] | [L] | [I] | [Score] | [Rating] |
| [R-0NN] | [Category] | [Additional risks specific to this processing activity] | [Threat source] | [Vulnerability] | [Data] | [Data subjects] | [L] | [I] | [Score] | [Rating] |

### 7.3 Risk Summary

| Risk Rating | Count | Risk IDs |
|---|---|---|
| **Critical** | [n] | [List Risk IDs] |
| **High** | [n] | [List Risk IDs] |
| **Medium** | [n] | [List Risk IDs] |
| **Low** | [n] | [List Risk IDs] |
| **Total** | [n] | |

---

## 8. Mitigation Measures and Residual Risk

*This section documents the specific controls and mitigation actions to be implemented to reduce each identified risk to an acceptable residual level. For each risk, identify whether the control is preventive, detective, or corrective. Assign a named owner and a target implementation date for each action.*

### 8.1 Mitigation Actions Register

| Risk ID | Risk Description | Risk Rating (Pre) | Mitigation Category | Mitigation Measure Description | Control Type | Accountable Owner | Target Date | Status | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Rating |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | Unauthorised Access | [Rating] | Technical / Access Control | Implement role-based access control (RBAC) with principle of least privilege; conduct quarterly access reviews; enable privileged access management (PAM) solution | Preventive | [Name / Role] | [Date] | [Not Started / In Progress / Completed] | [L] | [I] | [Score] | [Rating] |
| R-001 | Unauthorised Access | — | Detective | Enable comprehensive audit logging of all access to personal data; set up automated alerts for anomalous access patterns | Detective | [Name / Role] | [Date] | [Status] | — | — | — | — |
| R-002 | Data Breach — External | [Rating] | Technical — Security | Apply current security patches; implement Web Application Firewall (WAF); conduct penetration testing prior to go-live; enable intrusion detection | Preventive / Detective | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-003 | Unlawful Disclosure | [Rating] | Legal / Contractual | Execute compliant Data Processing Agreements with all third-party processors listed in Section 4.6 prior to data sharing; implement DPA register | Preventive | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-004 | Excessive Retention | [Rating] | Technical / Process | Implement automated data retention and deletion schedule in [System Name]; configure retention period controls; establish quarterly data purge verification | Preventive | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-005 | Purpose Creep | [Rating] | Governance / Technical | Implement purpose limitation controls in system design; establish change management process requiring DPO review for any change to processing purpose | Preventive | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-006 | Cross-Border Transfer | [Rating] | Legal / Contractual | Execute Standard Contractual Clauses with all overseas processors; obtain PDPC guidance where required; restrict data transfer to approved geographies | Preventive | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-007 | Data Subject Rights Failure | [Rating] | Process / Technical | Implement subject access request (SAR) workflow; document personal data locations to enable timely retrieval; conduct staff training on SAR handling | Preventive / Corrective | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-008 | Consent Management | [Rating] | Technical / Process | Implement consent management platform or register; ensure consent records are timestamped, versioned, and auditable; implement withdrawal mechanism | Preventive | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-009 | Automated Decision-Making | [Rating] | Governance / Technical | Implement human review layer for all automated decisions with significant effect on data subjects; document model logic; provide explanation capability | Preventive / Corrective | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| R-010 | Vendor Risk | [Rating] | Governance / Contractual | Conduct vendor due diligence prior to onboarding; include sub-processor notification and approval clauses in DPAs; conduct annual vendor privacy reviews | Preventive | [Name / Role] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |
| [R-0NN] | [Risk] | [Rating] | [Category] | [Mitigation] | [Type] | [Owner] | [Date] | [Status] | [L] | [I] | [Score] | [Rating] |

### 8.2 Residual Risk Summary

| Risk Rating | Count (Pre-Mitigation) | Count (Post-Mitigation) |
|---|---|---|
| **Critical** | [n] | [n] |
| **High** | [n] | [n] |
| **Medium** | [n] | [n] |
| **Low** | [n] | [n] |
| **Total** | [n] | [n] |

### 8.3 Residual Risk Acceptance Criteria

*Define the threshold at which residual risk is considered acceptable for this processing activity. Any residual risk at Critical or High level must be explicitly accepted by the designated risk approver with documented justification.*

| Residual Risk Level | Acceptance Authority | Acceptance Conditions |
|---|---|---|
| Low | Business Owner | Accepted as standard — no special conditions required |
| Medium | Business Owner + DPO endorsement | Accepted with confirmation that monitoring controls are in place |
| High | Senior Management / CRO + DPO recommendation | Accepted only with documented business justification and time-bound remediation plan |
| Critical | Board / EXCO + DPO recommendation | Accepted only in exceptional circumstances with Board-level approval and mandatory remediation |

**Remaining Residual Risks Accepted Post-Mitigation:**

| Risk ID | Residual Rating | Acceptance Rationale | Accepted By | Acceptance Date |
|---|---|---|---|---|
| [R-0NN] | [Rating] | [Justification for acceptance of residual risk — must be specific and not generic] | [Name / Role] | [Date] |
| [Add rows as required] | | | | |

### 8.4 Outstanding Mandatory Pre-Go-Live Actions

*List all mitigation actions that must be completed before the system goes live or the processing activity commences. The DPO should not grant final approval until all items in this table are resolved or a time-bound commitment is in place.*

| # | Action Description | Risk ID(s) Addressed | Owner | Deadline | Verification Method |
|---|---|---|---|---|---|
| 1 | [e.g., Execute Data Processing Agreements with all third-party processors] | [R-003, R-010] | [Legal / Procurement] | [DD Month YYYY] | [DPO to confirm signed DPAs received] |
| 2 | [e.g., Complete penetration test and remediate critical and high findings] | [R-002] | [IT Security] | [DD Month YYYY] | [Pentest report and sign-off from CISO] |
| 3 | [e.g., Implement automated retention controls and test deletion process] | [R-004] | [Technology Owner] | [DD Month YYYY] | [UAT evidence and DPO sign-off] |
| 4 | [Add rows as required] | | | | |

---

## 9. Consultation Outcomes

*This section documents the results of consultations conducted as part of the DPIA process, including consultations with data subjects, internal stakeholders, and external parties. Consultation demonstrates accountability and supports the legitimacy of the assessment findings.*

### 9.1 Internal Stakeholder Consultation

*Record all internal consultations conducted during the DPIA process. Include the stakeholder group, date of consultation, key issues raised, and how those issues were addressed.*

| Consultation # | Stakeholder Group | Representative | Date | Format | Key Issues / Concerns Raised | Response / Resolution |
|---|---|---|---|---|---|---|
| [IC-001] | [Legal and Compliance] | [Name] | [DD Month YYYY] | [Workshop / Interview / Written review] | [Summary of issues raised] | [How issues were addressed in the DPIA] |
| [IC-002] | [Information Security] | [Name] | [DD Month YYYY] | [Technical review session] | [Security concerns identified] | [Controls added or updated in response] |
| [IC-003] | [Business Owner — [Department Name]] | [Name] | [DD Month YYYY] | [Workshop] | [Business concerns or constraints raised] | [Resolution] |
| [IC-004] | [Technology / Engineering] | [Name] | [DD Month YYYY] | [Technical walkthrough] | [Technical architecture concerns] | [Resolution] |
| [IC-005] | [Risk Management] | [Name] | [DD Month YYYY] | [Risk review] | [Risk appetite and tolerance concerns] | [Resolution] |
| [Add rows as required] | | | | | | |

### 9.2 External Stakeholder Consultation

*Document any consultations with external parties, including regulators, industry bodies, or third-party processors.*

| Consultation # | External Party | Contact | Date | Purpose | Outcome |
|---|---|---|---|---|---|
| [EC-001] | [e.g., Personal Data Protection Commissioner (PDPC)] | [Contact if applicable] | [Date] | [e.g., Seek guidance on lawful basis for processing in ambiguous scenario] | [Summary of guidance received] |
| [EC-002] | [e.g., Third-party processor — [Vendor Name]] | [Contact] | [Date] | [e.g., Review data processing agreement terms] | [Outcome] |
| [Add rows as required] | | | | | |

### 9.3 Data Subject Consultation

*Describe the process used to consult with or represent the interests of data subjects in this assessment. Where direct consultation is not practicable, document the method used to represent data subject interests (e.g., privacy advocate, consumer research, review of historical subject access requests and complaints).*

**Was direct consultation with data subjects conducted?** Yes / No

**If Yes:**

| Consultation Method | Data Subject Group | Date | Sample Size | Key Concerns Raised | Outcome / Impact on DPIA |
|---|---|---|---|---|---|
| [e.g., Survey — online] | [Retail Customers] | [Date] | [n=XXX] | [Summarise key themes from data subject feedback] | [How feedback influenced DPIA findings or recommendations] |
| [e.g., Focus group] | [Customer segment] | [Date] | [n=XX] | [Key themes] | [Impact on DPIA] |

**If No — Representation of Data Subject Interests:**

[Where direct consultation was not conducted, explain the rationale and describe how data subject interests were represented in the assessment. For example: "Direct consultation was not conducted due to [reason, e.g., the processing activity is a back-end fraud detection system not visible to customers]. Data subject interests were represented by the DPO through review of historical data subject complaints, subject access requests, and industry benchmarking. The DPO determined that [finding]."]

### 9.4 Consultation Summary and Impact on Assessment

*Summarise the overall impact of stakeholder consultations on the DPIA findings, risk register, and mitigation recommendations.*

[Provide a 2–3 paragraph narrative summarising: (1) the key themes that emerged from consultations; (2) how these themes influenced the risk register in Section 7; (3) how mitigation measures in Section 8 were shaped by consultation outcomes; and (4) any unresolved disagreements between stakeholders and how these are managed.]

---

## 10. DPO Opinion and Recommendations

*This section records the formal opinion of the Data Protection Officer (DPO) following review of the complete DPIA findings. The DPO opinion is a mandatory accountability record under [Organization Name]'s Data Governance Policy and is evidence of the DPO's advisory function.*

### 10.1 DPO Review Summary

**DPO Name:** [Full Name]

**DPO Designation:** Data Protection Officer

**Review Date:** [DD Month YYYY]

**DPIA Version Reviewed:** [Version number]

**Review Scope:** The DPO has reviewed the complete DPIA Report including the project and processing activity description (Section 4), the necessity and proportionality assessment (Section 5), the data flow diagram and inventory (Section 6), the privacy risk register (Section 7), the mitigation measures and residual risk assessment (Section 8), and all consultation records (Section 9).

### 10.2 DPO Findings

*The DPO should record their independent assessment of the key findings. This is not a repetition of the report findings but the DPO's professional evaluation of the adequacy and completeness of the assessment.*

**Adequacy of Assessment:** [Adequate / Partially Adequate / Inadequate]

[DPO narrative on the adequacy of the DPIA process, the completeness of the risk register, and the robustness of the mitigation measures proposed. The DPO should note any areas where the assessment methodology was strong or where it could have been more rigorous.]

**Assessment of Legal Basis:**

[DPO's opinion on whether the legal basis documented in Section 3 is valid, sufficiently documented, and defensible. Reference specific PDPA sections as applicable.]

**Assessment of Necessity and Proportionality:**

[DPO's opinion on whether the necessity and proportionality assessment in Section 5 is sound and whether the data minimisation recommendations have been adequately captured.]

**Assessment of Risk Identification:**

[DPO's opinion on the completeness and accuracy of the risk register. Note any risks that the DPO believes are not captured or are insufficiently assessed.]

**Assessment of Mitigation Measures:**

[DPO's opinion on whether the proposed mitigation measures are adequate, realistic, and sufficient to reduce risks to an acceptable residual level.]

**Assessment of Data Subject Rights:**

[DPO's opinion on whether the processing activity adequately protects data subjects' rights under PDPA s29, including the right to access, correct, and withdraw consent from processing of their personal data.]

### 10.3 DPO Recommendations

*List all formal recommendations made by the DPO. These recommendations must be tracked through to completion and verified by the DPO prior to project go-live.*

| Rec # | Recommendation | Priority | Addressed by Mitigation Action | Target Date | Status |
|---|---|---|---|---|---|
| DPO-REC-001 | [e.g., A formal data processing agreement must be executed with [Vendor Name] before any personal data is transferred to the vendor. A template DPA is available from the Legal team.] | Mandatory | [Ref: Section 8 — Action #1] | [DD Month YYYY] | [Open / Closed] |
| DPO-REC-002 | [e.g., The retention period for [data category] should be revised from [X years] to [Y years] to reflect the actual operational and regulatory minimum. The retention schedule must be updated and verified.] | Mandatory | [Ref: Section 8 — Action #3] | [DD Month YYYY] | [Open / Closed] |
| DPO-REC-003 | [e.g., Privacy notice displayed at the point of collection must be updated to accurately reflect the processing purposes identified in this DPIA before go-live.] | Mandatory | [Ref: Section 8 — Action #X] | [DD Month YYYY] | [Open / Closed] |
| DPO-REC-004 | [e.g., Staff handling personal data collected through this system must complete PDPA awareness training before the system goes live.] | Recommended | [Ref: Training plan] | [DD Month YYYY] | [Open / Closed] |
| DPO-REC-005 | [e.g., A follow-up review of this DPIA should be scheduled 6 months post-go-live to assess whether risks materialised and whether mitigation controls are effective.] | Recommended | [Ref: Section 13 — Review schedule] | [DD Month YYYY] | [Open / Closed] |
| [Add rows as required] | | | | | |

### 10.4 DPO Opinion — Final Statement

**DPO Opinion:**

- [ ] **Approved to Proceed** — The DPIA has been completed satisfactorily. Identified risks have been assessed and adequate mitigation measures are in place or committed. The processing activity may proceed, subject to compliance with all conditions noted above.

- [ ] **Approved to Proceed with Conditions** — The DPIA has been completed, however approval to proceed is conditional on the completion of mandatory pre-go-live actions listed in Section 8.4 and DPO recommendations listed above. Verification of completion must be provided to the DPO before go-live.

- [ ] **Deferred Pending Action** — This DPIA requires significant revision before the DPO can form a view. The following matters must be resolved and resubmitted for DPO review: [List specific matters].

- [ ] **Rejected — Processing Must Not Proceed** — The DPO has determined that the proposed processing activity presents unacceptable risks to data subjects that cannot be adequately mitigated within the current project design. The processing activity must be fundamentally redesigned and a new DPIA conducted before any processing commences.

**DPO Statement:**

*[DPO to provide a professional narrative statement summarising their opinion, key basis for the opinion, conditions attached, and any matters of concern escalated to senior management. This statement will form part of the permanent compliance record.]*

> [Insert DPO statement here.]

**DPO Signature:** _________________________________

**Date:** [DD Month YYYY]

---

## 11. Final Risk Acceptance Decision

*This section records the formal risk acceptance decision by the designated approver, taking into account the DPO's opinion and recommendations. The risk acceptance decision is an executive accountability record and must be retained as evidence of informed decision-making.*

### 11.1 Risk Acceptance Statement

I, [Full Name], [Designation], have reviewed the DPIA Report for [Project / System Name] (DPIA Reference: [DPIA-YYYY-NNN]) including the risk register, mitigation measures, residual risk assessment, and the formal opinion of the Data Protection Officer dated [DD Month YYYY].

Having reviewed the above, I make the following risk acceptance decision:

**Decision:**

- [ ] **Accept and Approve** — I accept the residual privacy risks identified in this DPIA and approve the processing activity / project to proceed, subject to the implementation of all mandatory mitigation actions and DPO conditions by their stated deadlines.

- [ ] **Accept with Escalation** — I accept the residual risks but note that one or more risks are at Critical or High level. I am escalating this decision to [Board / EXCO / Risk Committee] for formal ratification. Processing activity is on hold pending escalation outcome.

- [ ] **Reject** — I do not accept the residual risks associated with this processing activity in its current form. The project team must revise the design, address the DPO's concerns, and submit a revised DPIA for review.

**Basis for Decision:**

[The approver should provide a brief statement — 2–4 sentences — explaining the basis for their decision, including any reliance on specific mitigation commitments or conditions.]

### 11.2 Conditions of Approval

*List any specific conditions attached to the approval decision. These conditions are binding on the project team and must be verified before the project proceeds to the next phase.*

| # | Condition | Responsible Party | Verification Required By | Verified By | Verification Date |
|---|---|---|---|---|---|
| 1 | [Condition description] | [Responsible party] | [DD Month YYYY] | [Verifier name / role] | [Date verified] |
| 2 | [Condition description] | [Responsible party] | [DD Month YYYY] | [Verifier name / role] | [Date verified] |
| [Add rows as required] | | | | | |

### 11.3 Post-Approval Monitoring

*Define the monitoring and review arrangements that apply following approval, to ensure that risks are managed on an ongoing basis and that this DPIA remains current.*

| Monitoring Activity | Frequency | Responsible Party | Report To |
|---|---|---|---|
| Review of open mitigation actions for completion | Monthly | [Project Manager / DPO] | DPO |
| Post-go-live privacy control effectiveness review | 6 months post-go-live | DPO | Risk Committee |
| Data inventory and data flow verification | Annually | Data Owner | DPO |
| DPIA review — material change trigger | On material change to system or purpose | Business Owner (initiates) | DPO |
| DPIA periodic scheduled review | [Annually / Per project cycle] | DPO | Risk Committee |
| Data breach incident review — DPIA update | Within [30] days of a confirmed breach | DPO / CISO | Senior Management |

### 11.4 Escalation Record (if applicable)

*Complete this section only where the risk acceptance decision has been escalated to Board, EXCO, or Risk Committee.*

| Escalation Reference | Escalated To | Date Escalated | Decision | Decision Date | Decision Maker |
|---|---|---|---|---|---|
| [ESC-YYYY-NNN] | [Board / EXCO / Risk Committee] | [Date] | [Approved / Rejected / Further information required] | [Date] | [Name / Body] |

### 11.5 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Data Protection Officer** | [DPO Full Name] | _________________________________ | [DD Month YYYY] |
| **Business Owner / Project Sponsor** | [Name and Designation] | _________________________________ | [DD Month YYYY] |
| **Technology Owner** | [Name and Designation] | _________________________________ | [DD Month YYYY] |
| **Chief Risk Officer / Risk Representative** | [Name and Designation] | _________________________________ | [DD Month YYYY] |
| **Chief Information Security Officer** | [Name and Designation] | _________________________________ | [DD Month YYYY] |
| **Final Approver** | [Name and Designation] | _________________________________ | [DD Month YYYY] |

---

## 12. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in the preparation, review, approval, and maintenance of this DPIA. The RACI matrix below assigns accountability for each key activity.*

### 12.1 Role Definitions

| Role | Definition | Incumbent |
|---|---|---|
| **Data Protection Officer (DPO)** | The individual responsible for overseeing PDPA compliance, providing expert advice on data protection obligations, and issuing the formal DPIA opinion. The DPO operates independently of business functions. | [Name] |
| **Business Owner / Project Sponsor** | The senior business leader responsible for the project or processing activity, accountable for ensuring that DPIA findings are acted upon and that the project proceeds only with appropriate approval. | [Name and Designation] |
| **Data Owner** | The individual responsible for the data assets involved in the processing activity, accountable for data inventory accuracy, retention compliance, and data quality. | [Name and Designation] |
| **Technology Owner** | The individual responsible for the technical systems that process personal data, accountable for implementing technical controls and providing accurate data flow information. | [Name and Designation] |
| **Information Security / CISO** | Responsible for advising on security controls, reviewing technical risk mitigation measures, and confirming the adequacy of security architecture. | [Name and Designation] |
| **Legal / Compliance** | Responsible for confirming the legal basis for processing, reviewing data processing agreements, and advising on regulatory requirements. | [Name and Designation] |
| **Project Manager** | Responsible for coordinating the DPIA process, managing stakeholder consultations, tracking mitigation actions to completion, and maintaining the DPIA document. | [Name and Designation] |
| **Risk Management** | Responsible for providing input on risk appetite, reviewing risk scores for consistency with the ERM framework, and recording accepted risks in the risk register. | [Name and Designation] |
| **Procurement** | Responsible for ensuring that data processing agreements are included in vendor contracts and that vendors complete required privacy due diligence. | [Name and Designation] |

### 12.2 RACI Matrix

*R = Responsible (does the work) | A = Accountable (owns the outcome) | C = Consulted (provides input) | I = Informed (notified of outcome)*

| Activity | DPO | Business Owner | Data Owner | Technology Owner | CISO | Legal | Project Manager | Risk Mgmt | Procurement |
|---|---|---|---|---|---|---|---|---|---|
| Determine whether a DPIA is required | A/R | C | C | C | C | C | R | C | — |
| Initiate the DPIA and appoint DPIA team | C | A | C | C | C | C | R | — | — |
| Complete project and processing activity description | C | A | R | R | — | C | R | — | — |
| Conduct necessity and proportionality assessment | A/R | C | C | C | — | C | C | — | — |
| Prepare data flow diagram | C | I | C | A/R | C | — | C | — | — |
| Complete data inventory | C | I | A/R | R | — | — | C | — | — |
| Identify and score privacy risks | A/R | C | C | C | C | C | R | C | — |
| Define and assign mitigation measures | A/C | A | R | R | R | C | R | C | C |
| Conduct stakeholder consultations | R | C | C | C | C | C | A/R | C | — |
| Conduct data subject consultation | A/R | C | C | — | — | C | R | — | — |
| Issue DPO opinion and recommendations | A/R | I | I | I | I | I | I | I | — |
| Issue risk acceptance decision | C | A/R | — | — | C | C | — | C | — |
| Escalate critical / high residual risks | A/R | R | — | — | C | C | C | A | — |
| Track mitigation actions to completion | C | A | R | R | R | R | R | C | R |
| Verify completion of pre-go-live conditions | A/R | C | C | C | C | C | R | — | — |
| Maintain and update DPIA post-approval | R | C | C | C | C | C | A/R | — | — |
| Conduct scheduled DPIA review | A/R | C | C | C | C | C | R | C | — |
| Respond to DPIA-related regulatory enquiries | A/R | C | C | C | C | C | — | — | — |

---

## 13. Review and Approval

### 13.1 Review Triggers

This DPIA must be reviewed under any of the following circumstances:

- **Scheduled periodic review:** [Annually / Per project cycle — as defined in Section 11.3]
- **Material change trigger:** Any material change to the processing activity, including but not limited to:
  - Change in the purpose of processing
  - Introduction of a new data category or sensitive personal data
  - Introduction of a new third-party processor or cross-border transfer
  - Significant change to the technology architecture or data flows
  - Change in the legal basis for processing
  - Introduction of automated decision-making or profiling
- **Incident trigger:** Within [30] days of a confirmed personal data breach related to this processing activity
- **Regulatory trigger:** Upon issuance of new regulatory guidance, enforcement action, or amendment to the PDPA that materially affects this processing activity
- **DPO discretion:** At the discretion of the DPO

### 13.2 Version History

| Version | Date | Author | Description of Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [DD Month YYYY] | [Author Name] | Initial draft for internal review | — |
| 0.2 | [DD Month YYYY] | [Author Name] | Revised following Legal review — updated legal basis section and DPA references | — |
| 0.3 | [DD Month YYYY] | [Author Name] | Revised following DPO review — risk register updated, mitigation measures added | — |
| 1.0 | [DD Month YYYY] | [Author Name] | Final version — approved | [Approver Name] |
| [x.x] | [DD Month YYYY] | [Author Name] | [Description of changes — e.g., Periodic review — data inventory updated; new vendor added] | [Approver Name] |

### 13.3 Document Control

| Field | Detail |
|---|---|
| **Document Owner** | Data Protection Officer |
| **Custodian** | [Document Custodian Name / Role] |
| **Storage Location** | [Document management system name and file path, e.g., SharePoint / Confluence / GRC platform] |
| **Access Control** | Restricted — Data Protection Officer, Business Owner, Legal, Risk Management, Compliance, and designated reviewers only |
| **Retention Period** | [e.g., Retain for 7 years from the date of last review or project closure, whichever is later] |
| **Disposal Method** | [e.g., Secure deletion — authorised by DPO] |

---

## 14. References

*This section lists the specific regulatory provisions, internal policies, and standards that this DPIA is designed to address and evidence compliance with.*

### 14.1 Legislation and Regulations

| Reference | Full Title | Relevance |
|---|---|---|
| PDPA s5 | Personal Data Protection Act 2010 — General Principle | Establishes the foundational requirement that personal data must not be processed without consent or another applicable condition; central to the legal basis assessment in Section 3 |
| PDPA s6 | Personal Data Protection Act 2010 — Sensitive Personal Data | Defines the categories of sensitive personal data requiring heightened protections and explicit consent; applicable where sensitive data is identified in the data inventory in Section 6 |
| PDPA s9 | Personal Data Protection Act 2010 — Security Principle | Requires data users to take practical steps to protect personal data from loss, misuse, modification, unauthorized or accidental access, disclosure, alteration, and destruction; directly addressed by security risk mitigations in Section 8 |
| PDPA s29 | Personal Data Protection Act 2010 — Rights of Data Subjects | Establishes data subjects' rights to access, correct, and request cessation of processing of their personal data; addressed in the data subject rights risk assessment and mitigation measures |
| PDPA s10 | Personal Data Protection Act 2010 — Retention Principle | Prohibits retention of personal data beyond the period necessary for the stated purpose; addressed in the data retention schedule in Section 6 and risk R-004 |
| PDPA s7 | Personal Data Protection Act 2010 — Disclosure Principle | Restricts disclosure of personal data to third parties without consent; addressed in third-party processor assessment in Section 4 and risk R-003 |
| PDP Regulations 2013 | Personal Data Protection Regulations 2013 | Supplementary regulations specifying minimum security standards for registered data users |
| PDP (Class of Data Users) Order 2013 | Personal Data Protection (Class of Data Users) Order 2013 | Confirms [Organization Name]'s classification as a registered data user |

### 14.2 Internal Policies and Standards

| Document ID | Document Title | Relationship to This DPIA |
|---|---|---|
| [POL-DP-001] | Data Protection Policy | Parent policy that mandates DPIA completion for qualifying processing activities |
| [POL-IS-001] | Information Security Policy | Security controls referenced in mitigation measures |
| [POL-RET-001] | Data Retention and Disposal Policy | Retention periods referenced in Section 6 |
| [POL-VEN-001] | Third-Party Risk Management Policy | Vendor due diligence requirements referenced in mitigation measures |
| [POL-SAR-001] | Subject Access Request Policy and Procedure | Data subject rights procedures referenced in mitigation measures |
| [STD-IS-001] | Information Security Standard | Technical security standards applied to risk mitigation design |
| [Add rows as required] | | |

### 14.3 Related DPIA and Compliance Documents

| Document ID | Document Title | Relationship |
|---|---|---|
| [DPIA-YYYY-NNN] | [Related DPIA Title] | [e.g., Parent processing activity / Linked system] |
| [RoPA-YYYY-NNN] | Record of Processing Activities (RoPA) | This DPIA contributes to the organizational RoPA entry for this processing activity |
| [CBDTIA-YYYY-NNN] | Cross-Border Data Transfer Impact Assessment | [If applicable — cross-border transfer assessment linked to this DPIA] |
| [Add rows as required] | | |

---

## 15. Appendices

### Appendix A — Data Flow Diagram (Full Resolution)

*Attach the full-resolution data flow diagram for this processing activity here, or provide a reference link to the diagram maintained in the designated document management or diagramming tool.*

| Field | Detail |
|---|---|
| **Appendix Reference** | Appendix A |
| **Title** | Data Flow Diagram — [Project / System Name] |
| **Version** | [Version] |
| **Date** | [DD Month YYYY] |
| **Prepared By** | [Name / Role] |
| **Location** | [Attached / Link to document management system] |

[INSERT DATA FLOW DIAGRAM — full resolution version]

---

### Appendix B — Legitimate Interests Assessment (LIA)

*Complete and attach this appendix where the legal basis for processing is Legitimate Interests. Delete this appendix if Legitimate Interests is not relied upon as the legal basis.*

| LIA Section | Detail |
|---|---|
| **Purpose Test** — What is the legitimate interest being pursued? | [Describe the specific legitimate interest] |
| **Necessity Test** — Is the processing necessary to achieve the legitimate interest? Could a less privacy-intrusive method achieve the same outcome? | [Assessment] |
| **Balancing Test** — Does the legitimate interest override the interests, rights, and freedoms of data subjects? Consider the nature of the data, reasonable expectations of data subjects, and safeguards in place. | [Assessment and conclusion] |
| **Conclusion** | [Legitimate interest established / Not established — alternative legal basis required] |
| **Prepared By** | [Name / Role] |
| **Reviewed By** | [DPO Name] |
| **Date** | [DD Month YYYY] |

---

### Appendix C — Consent Notice and Consent Record Template

*Attach the privacy notice and consent form used to collect consent from data subjects for this processing activity. Confirm that the notice accurately reflects all purposes identified in this DPIA.*

| Field | Detail |
|---|---|
| **Appendix Reference** | Appendix C |
| **Privacy Notice Version** | [Version] |
| **Effective Date** | [DD Month YYYY] |
| **Reviewed and Approved By** | [DPO Name] |
| **Distribution Method** | [Website privacy notice / In-app notice / Paper form / Other] |

[INSERT PRIVACY NOTICE AND CONSENT FORM]

---

### Appendix D — Data Processing Agreements Register

*List all data processing agreements (DPAs) executed with third-party processors for this processing activity. Confirm that each DPA addresses the minimum requirements of PDPA s9 and [Organization Name]'s Third-Party Risk Management Policy.*

| # | Processor Name | DPA Reference | DPA Version | Execution Date | Review Date | DPA Status | Key Obligations Confirmed |
|---|---|---|---|---|---|---|---|
| 1 | [Processor Name] | [DPA-YYYY-NNN] | [Version] | [Date] | [Date] | Executed / Pending / Expired | [e.g., Data security obligations, sub-processor notification, audit rights, breach notification confirmed] |
| 2 | [Processor Name] | [DPA-YYYY-NNN] | [Version] | [Date] | [Date] | Executed / Pending / Expired | [Obligations confirmed] |
| [Add rows as required] | | | | | | | |

---

### Appendix E — Cross-Border Data Transfer Impact Assessment

*Complete and attach this appendix where personal data is transferred to recipients outside Malaysia. Delete this appendix if no cross-border transfers are identified.*

| Field | Detail |
|---|---|
| **Appendix Reference** | Appendix E |
| **Title** | Cross-Border Data Transfer Impact Assessment — [Project / System Name] |
| **Date** | [DD Month YYYY] |
| **Prepared By** | [Name / Role] |
| **Reviewed By** | [DPO Name] |

[INSERT CROSS-BORDER DATA TRANSFER IMPACT ASSESSMENT — or reference to separate document [CBDTIA-YYYY-NNN]]

---

### Appendix F — Penetration Test Report Summary

*Where a penetration test has been conducted as part of the DPIA mitigation plan, attach the executive summary or findings relevant to this processing activity. Reference the full report for detail.*

| Field | Detail |
|---|---|
| **Test Reference** | [Pentest-YYYY-NNN] |
| **Testing Provider** | [Internal / External provider name] |
| **Test Scope** | [Systems and environments tested] |
| **Test Date** | [DD Month YYYY] |
| **Critical Findings** | [Count] |
| **High Findings** | [Count] |
| **Findings Remediated Pre-Go-Live** | [Yes / No / Partial — with detail] |
| **Sign-Off By** | [CISO Name] |
| **Sign-Off Date** | [DD Month YYYY] |

[INSERT PENETRATION TEST EXECUTIVE SUMMARY OR RELEVANT FINDINGS EXTRACT]

---

### Appendix G — Data Subject Rights Procedure Summary

*Summarise the procedure for handling data subject rights requests (access, correction, withdrawal of consent, erasure) specifically in the context of this processing activity.*

| Right | Procedure | System / Process | Response Timeframe | Responsible Team |
|---|---|---|---|---|
| Right of Access (s29) | [How data subjects may submit an access request and how the request is fulfilled for data processed in this activity] | [SAR Management System / Manual process] | [21 days per PDPA / internal SLA] | [Team responsible] |
| Right to Correct (s29) | [Correction request procedure] | [System / process] | [21 days] | [Team] |
| Right to Withdraw Consent | [Withdrawal procedure and system mechanism] | [System / process] | [Immediate / within X days] | [Team] |
| Right to Request Cessation of Processing | [Procedure] | [System / process] | [21 days] | [Team] |

---

### Appendix H — DPIA Screening Questionnaire

*Attach the completed DPIA screening questionnaire that was used to determine whether a full DPIA was required for this processing activity. This demonstrates the triggering decision-making process.*

| Field | Detail |
|---|---|
| **Screening Reference** | [DPIA-SCR-YYYY-NNN] |
| **Date Completed** | [DD Month YYYY] |
| **Completed By** | [Name / Role] |
| **Reviewed By** | [DPO Name] |
| **Outcome** | Full DPIA Required — [Reason / Trigger] |

[INSERT COMPLETED DPIA SCREENING QUESTIONNAIRE]

---

### Appendix I — Glossary of Terms

| Term | Definition |
|---|---|
| **Data Controller** | An organization that determines the purposes and means of processing personal data, as contemplated under the PDPA. Under the PDPA, this role is broadly equivalent to the term "data user." |
| **Data Processor** | An organization that processes personal data on behalf of and under the instruction of a data user / data controller. |
| **Data Subject** | An individual who is the subject of personal data. |
| **Data User** | A term used in the PDPA (Act 709) for an organization that processes personal data in the course of commercial transactions. Equivalent to "data controller" in other jurisdictions. |
| **DPIA** | Data Protection Impact Assessment — a structured process to identify, assess, and mitigate privacy risks arising from a processing activity. |
| **DPO** | Data Protection Officer — the individual responsible for overseeing data protection compliance within an organization. |
| **LIA** | Legitimate Interests Assessment — a structured three-part test to determine whether legitimate interests may serve as the legal basis for processing personal data. |
| **PDPA** | Personal Data Protection Act 2010 (Act 709) — Malaysia's primary legislation governing the processing of personal data in commercial transactions. |
| **PDPC** | Personal Data Protection Commissioner — the regulator responsible for administering and enforcing the PDPA in Malaysia. |
| **RoPA** | Record of Processing Activities — a register of all personal data processing activities conducted by an organization, required as an accountability measure. |
| **Sensitive Personal Data** | As defined under PDPA s6: personal data consisting of information regarding the physical or mental health or condition, political opinions, religious beliefs, commission or alleged commission of any offence, or any other personal data as the Minister may determine. |
| **Subject Access Request (SAR)** | A formal request by a data subject to access their personal data held by an organization, as provided for under PDPA s29. |

---

*End of Document*

---

*This document template was prepared in accordance with the Personal Data Protection Act 2010 (Act 709), Malaysia. It is intended as a structured starting point for [Organization Name]'s DPIA process and must be adapted to reflect the specific processing activity under assessment. This template does not constitute legal advice. Organizations should obtain independent legal counsel to confirm compliance with applicable regulations.*

| Field | Detail |
|---|---|
| **Template Version** | 1.0 |
| **Template Owner** | Data Protection Officer |
| **Applicable Framework** | Personal Data Protection Act 2010 (PDPA) — Malaysia |
| **Template Classification** | Internal — Compliance Use |