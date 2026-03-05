# Data Protection Impact Assessment (DPIA) Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review Date] |
| **Approved By** | [Approved By — Name and Title] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for the use of authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [DPIA Trigger Criteria](#4-dpia-trigger-criteria)
5. [DPIA Screening Questionnaire and Threshold Test](#5-dpia-screening-questionnaire-and-threshold-test)
6. [DPIA Methodology](#6-dpia-methodology)
7. [Risk Assessment Matrix for Privacy Risks](#7-risk-assessment-matrix-for-privacy-risks)
8. [Identification of Risk Mitigation Measures](#8-identification-of-risk-mitigation-measures)
9. [DPO Review and Approval Process](#9-dpo-review-and-approval-process)
10. [Residual Risk Acceptance and Documentation](#10-residual-risk-acceptance-and-documentation)
11. [DPIA Record-Keeping and Review Schedule](#11-dpia-record-keeping-and-review-schedule)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This procedure establishes the systematic process by which [Organization Name] conducts Data Protection Impact Assessments (DPIAs) in accordance with the **Personal Data Protection Act 2010 (PDPA)** and related regulatory obligations. DPIAs are a foundational instrument of privacy-by-design, enabling [Organization Name] to identify, assess, and mitigate privacy risks before they materialize in processing activities involving personal data.

This procedure ensures that [Organization Name]:

- Fulfills its obligations as a data user under the PDPA, particularly in respect of the General Principle (s.5), Notice and Choice Principle (s.6), Security Principle (s.9), and Data Integrity Principle (s.29);
- Demonstrates accountability and proactive risk governance to the **Personal Data Protection Commissioner** and other relevant regulatory authorities, including **Bank Negara Malaysia (BNM)** where applicable;
- Protects the rights and interests of data subjects whose personal data is processed by or on behalf of [Organization Name]; and
- Embeds privacy considerations into project, system, and process design from inception.

### 1.2 Scope

This procedure applies to:

- All **departments, business units, and subsidiaries** of [Organization Name] that process personal data in connection with commercial transactions;
- All **third-party processors, vendors, and service providers** acting on behalf of [Organization Name] where personal data is shared, transferred, or processed;
- All **new processing activities, systems, products, and services** involving personal data; and
- All **significant changes** to existing processing activities, including changes to purpose, technology, data volume, data subjects, or third-party involvement.

This procedure **does not apply** to:

- Processing of personal data for personal, family, or household affairs;
- Processing activities that have been assessed as low-risk following the screening threshold test in Section 5 and where no DPIA is mandated; or
- Processing activities conducted exclusively for journalistic, literary, or artistic purposes to the extent that such exemptions apply under the PDPA.

### 1.3 Objectives

The primary objectives of this procedure are to:

1. Define clear and unambiguous criteria that trigger the requirement for a DPIA;
2. Provide a structured screening and threshold test to determine DPIA necessity;
3. Establish a consistent, repeatable DPIA methodology aligned with global best practice and Malaysian regulatory expectations;
4. Define the roles of the **Data Protection Officer (DPO)**, process owners, and senior management in the DPIA lifecycle;
5. Ensure that DPIA outcomes are documented, acted upon, and retained as evidence of compliance; and
6. Establish a schedule for the periodic review of completed DPIAs.

---

## 2. Definitions and Abbreviations

*This section defines key terms used throughout this procedure. Authors should verify these definitions against the current text of the PDPA and any applicable BNM circulars.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Personal Data** | Any information in respect of commercial transactions that relates directly or indirectly to a data subject, who is identified or identifiable from that information or from that and other information in the possession of a data user, including any sensitive personal data and expression of opinion about the individual, as defined under s.4 of the PDPA 2010. |
| **Sensitive Personal Data** | Personal data consisting of information relating to the physical or mental health or condition of a data subject; political opinions; religious beliefs or other beliefs of a similar nature; the commission or alleged commission of any offence; or any other personal data as the Minister may determine, per s.4 of the PDPA 2010. |
| **Data Subject** | An individual who is the subject of the personal data. |
| **Data User** | [Organization Name] and any person who either alone or jointly or in common with other persons processes any personal data or has control over or authorizes the processing of any personal data. |
| **Data Processor** | Any person, other than an employee of the data user, who processes personal data solely on behalf of the data user and does not process it for any of its own purposes. |
| **Processing** | Collecting, recording, holding, storing, using, disclosing, publishing, erasure, or destruction of personal data, or carrying out any operation or set of operations on personal data. |
| **DPIA** | Data Protection Impact Assessment — a systematic process to identify and minimize the privacy risks of processing activities involving personal data. |
| **High-Risk Processing** | Processing activities that, by their nature, scope, context, or purpose, are likely to result in a high risk to the rights and interests of data subjects. |
| **DPO** | Data Protection Officer — the designated officer responsible for overseeing [Organization Name]'s compliance with the PDPA and this procedure. |
| **Risk Owner** | The individual accountable for accepting, mitigating, or escalating identified privacy risks. Typically the relevant business unit head or project owner. |
| **Residual Risk** | The risk remaining after risk mitigation measures have been applied. |
| **Privacy by Design** | An approach to systems engineering which promotes privacy and data protection compliance from the outset of the designing of systems. |
| **Data Flow Mapping** | The documented representation of how personal data moves through a system or process, including collection, storage, use, sharing, and disposal points. |

### 2.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| **PDPA** | Personal Data Protection Act 2010 |
| **DPO** | Data Protection Officer |
| **DPIA** | Data Protection Impact Assessment |
| **BNM** | Bank Negara Malaysia |
| **NACSA** | National Cyber Security Agency |
| **ICT** | Information and Communications Technology |
| **RoPA** | Record of Processing Activities |
| **SLA** | Service Level Agreement |
| **PII** | Personally Identifiable Information |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **IT** | Information Technology |
| **CISO** | Chief Information Security Officer |

---

## 3. Regulatory and Policy Context

### 3.1 Applicable Legislation and Regulatory Requirements

*This section identifies the specific legal and regulatory provisions that mandate or inform this procedure. Authors should review the current version of all cited instruments and update references following any legislative amendments.*

| Instrument | Provision | Relevance to DPIA |
|---|---|---|
| Personal Data Protection Act 2010 | **s.5 — General Principle** | Requires that personal data is processed in accordance with the data subject's rights, and that processing is lawful, fair, and for specified purposes only. DPIAs verify lawful basis and purpose limitation. |
| Personal Data Protection Act 2010 | **s.6 — Notice and Choice Principle** | Requires data users to notify data subjects of processing purposes, categories of data, and data subject rights. DPIAs assess adequacy of notice mechanisms. |
| Personal Data Protection Act 2010 | **s.9 — Security Principle** | Requires data users to take practical steps to protect personal data from loss, misuse, modification, unauthorized or accidental access or disclosure, alteration, or destruction. DPIAs identify security controls required. |
| Personal Data Protection Act 2010 | **s.29 — Data Integrity Principle** | Requires that personal data processed is accurate, complete, not misleading, and up to date. DPIAs assess data quality and integrity controls. |
| Personal Data Protection (Class of Data Users) Order 2013 | All provisions | Identifies classes of data users (including financial sector) subject to PDPA obligations. |
| BNM Risk Governance Framework | Applicable circulars | BNM expectations for risk identification and management applicable to technology and data risks in financial institutions. |
| ISO/IEC 29134:2017 | Guidelines for Privacy Impact Assessment | International best-practice reference for DPIA methodology adopted by [Organization Name]. |

### 3.2 Related Internal Policies and Procedures

*List all internal documents that interact with or depend upon this procedure. Keep this list current as policies are updated.*

| Document Title | Document ID | Relationship |
|---|---|---|
| Data Protection Policy | [Document ID] | Parent policy governing all personal data processing |
| Data Governance Framework | [Document ID] | Overarching governance framework |
| Records of Processing Activities (RoPA) Procedure | [Document ID] | DPIA outputs feed into the RoPA |
| Data Breach Response Procedure | [Document ID] | Informs DPIA breach risk assessment criteria |
| Third-Party Risk Management Procedure | [Document ID] | Governs vendor due diligence; DPIA required for high-risk vendors |
| Information Security Policy | [Document ID] | Security controls referenced in DPIA risk assessment |
| Data Retention and Disposal Policy | [Document ID] | Informs DPIA assessment of retention risks |
| Consent Management Procedure | [Document ID] | Informs DPIA assessment of lawful basis |

---

## 4. DPIA Trigger Criteria

### 4.1 Overview

*This section defines the conditions under which a DPIA is mandatory. Authors should tailor the trigger list to the organization's specific operating context, products, and services. The trigger criteria should be reviewed by the DPO and approved by Senior Management.*

A DPIA **must** be initiated whenever a proposed or materially changed processing activity meets one or more of the following trigger criteria. The identification of applicable triggers is the responsibility of the initiating business unit or project team, in consultation with the DPO.

### 4.2 Mandatory DPIA Triggers

The following categories of processing **always** require a DPIA regardless of other factors:

| Trigger Category | Description | Examples |
|---|---|---|
| **T1 — Systematic profiling or evaluation** | Processing that involves systematic and extensive profiling of individuals, including automated decision-making with legal or similarly significant effects on data subjects. | Credit scoring, behavioral profiling, insurance risk scoring, fraud detection algorithms. |
| **T2 — Large-scale processing of sensitive personal data** | Processing of sensitive personal data (as defined under s.4 PDPA) at scale, including health data, financial data, or data relating to criminal offences. | Medical records processing, mass collection of financial behavioral data. |
| **T3 — Systematic monitoring** | Processing used to systematically monitor individuals in publicly accessible areas or through digital tracking mechanisms. | CCTV systems, employee monitoring platforms, web tracking across third-party sites. |
| **T4 — New technologies or novel processing methods** | Deployment of new or innovative technologies or processing methods where privacy implications have not been previously assessed. | Biometric authentication, AI-driven customer analytics, blockchain-based record keeping, IoT data collection. |
| **T5 — Data matching or combining** | Processing that involves matching or combining datasets from two or more sources in a manner that may exceed original processing expectations of data subjects. | Cross-system data linkage, integration of third-party data with internal records. |
| **T6 — Processing of vulnerable data subjects** | Processing of personal data relating to children, elderly individuals, employees, or other groups whose vulnerability may limit their ability to exercise informed consent. | Children's savings accounts, employee performance monitoring, care home management systems. |
| **T7 — Cross-border data transfers** | Transfer of personal data outside Malaysia, particularly where the destination jurisdiction does not provide adequate protections under the PDPA or applicable instruments. | Cloud hosting in foreign jurisdictions, offshore customer service centres. |
| **T8 — Third-party data processors accessing sensitive data** | Engagement of a new third-party processor who will access, process, or store sensitive or large volumes of personal data on behalf of [Organization Name]. | New cloud service provider, outsourced analytics platform, external identity verification service. |
| **T9 — Significant change to existing processing** | Any significant change to the purpose, scope, technology, volume, categories of personal data, or data subjects of an existing processing activity. | Platform upgrade, change of cloud provider, expansion of customer data usage to a new purpose. |

### 4.3 Discretionary DPIA Triggers

The DPO **may** require a DPIA at their discretion for any processing activity where there is reasonable cause to believe that privacy risks to data subjects may be elevated, even where none of the mandatory triggers in Section 4.2 apply. Factors that may inform this discretion include:

- Processing involving novel combinations of personal data elements;
- Processing where data subjects may have a heightened expectation of privacy;
- Processing involving reputational sensitivity for [Organization Name];
- Processing where a recent data breach or near-miss has occurred in a similar context; or
- Processing flagged by internal audit, external audit, or a regulatory examination.

### 4.4 DPIA Trigger Confirmation Process

```
Step 1: Business unit completes DPIA Screening Questionnaire (Section 5)
    ↓
Step 2: Completed questionnaire submitted to DPO
    ↓
Step 3: DPO reviews and confirms whether a DPIA is required
    ↓
Step 4: If DPIA required — initiate DPIA process (Section 6)
    If DPIA not required — document screening outcome and file
```

---

## 5. DPIA Screening Questionnaire and Threshold Test

### 5.1 Purpose of Screening

*The screening questionnaire enables business units to self-assess whether their proposed processing activity meets the threshold for a full DPIA. The DPO must review all completed screening questionnaires. Authors should ensure that the questionnaire is updated whenever new high-risk processing categories are identified.*

The DPIA Screening Questionnaire is a preliminary assessment tool that any department initiating a new or significantly changed processing activity must complete **before** the activity commences or the change is implemented.

The screening process determines one of three outcomes:

| Outcome | Meaning | Action |
|---|---|---|
| **Full DPIA Required** | Processing meets one or more mandatory trigger criteria or the DPO has determined discretionary trigger applies. | Proceed to full DPIA per Section 6. |
| **Lightweight DPIA Required** | Processing does not meet mandatory triggers but exhibits elevated risk characteristics warranting a simplified assessment. | Proceed to lightweight DPIA using Appendix C template. |
| **No DPIA Required** | Processing is low-risk, involves no sensitive personal data, and meets no trigger criteria. | Document screening outcome; update RoPA if required. File completed questionnaire. |

### 5.2 Screening Questionnaire

Complete all questions below. Answer **Yes** or **No** to each question. A single **Yes** to any question marked [MANDATORY TRIGGER] results in a mandatory full DPIA.

---

**Section A: Processing Activity Details**

| Field | Response |
|---|---|
| **Processing Activity Name** | [Insert name of processing activity, system, or project] |
| **Business Unit / Department** | [Insert responsible department] |
| **Project / System Owner** | [Insert name and title] |
| **Proposed Commencement Date** | [Insert date] |
| **Brief Description of Processing** | [Describe what personal data will be collected, why, how, from whom, and for how long] |
| **Categories of Personal Data** | [List all categories, e.g., name, NRIC, financial data, health data, biometrics] |
| **Data Subjects Affected** | [Describe the population: customers, employees, minors, etc.] |
| **Estimated Volume of Data Subjects** | [Insert estimated number] |
| **Third Parties Involved** | [List any vendors, processors, or recipients of the data] |
| **Data Transfer Outside Malaysia** | [Yes / No — if Yes, specify destination country] |

---

**Section B: Trigger Assessment**

*Answer each question Yes or No. Provide brief justification where relevant.*

| # | Question | Yes/No | Justification |
|---|---|---|---|
| B1 | Does the processing involve **systematic profiling or automated decision-making** with legal or similarly significant effects on data subjects? [MANDATORY TRIGGER] | | |
| B2 | Does the processing involve **sensitive personal data** (health, financial, political, religious, criminal records, biometric) at scale (more than [X] data subjects)? [MANDATORY TRIGGER] | | |
| B3 | Does the processing involve **systematic monitoring** of individuals in publicly accessible or workplace settings? [MANDATORY TRIGGER] | | |
| B4 | Does the processing employ **new or innovative technologies** not previously assessed for privacy implications? [MANDATORY TRIGGER] | | |
| B5 | Does the processing involve **matching, combining, or linking** datasets from two or more sources? [MANDATORY TRIGGER] | | |
| B6 | Does the processing involve **vulnerable data subjects**, including children under 18, elderly individuals, employees, or individuals in care? [MANDATORY TRIGGER] | | |
| B7 | Does the processing involve **cross-border transfer** of personal data outside Malaysia? [MANDATORY TRIGGER] | | |
| B8 | Does the processing involve a **new third-party processor** who will access sensitive or large volumes of personal data? [MANDATORY TRIGGER] | | |
| B9 | Does the processing represent a **significant change** to an existing activity in terms of purpose, technology, scope, or volume? [MANDATORY TRIGGER] | | |
| B10 | Has a **previous DPIA** for this processing activity identified unresolved high or medium risks? | | |
| B11 | Has a **data breach or privacy incident** occurred in connection with this or a similar processing activity in the past 24 months? | | |
| B12 | Is there **regulatory, media, or reputational sensitivity** associated with this type of processing? | | |

---

**Section C: Screening Outcome**

| Field | Response |
|---|---|
| **Number of "Yes" responses to B1–B9 (Mandatory Triggers)** | [Insert count] |
| **Number of "Yes" responses to B10–B12 (Elevated Risk Indicators)** | [Insert count] |
| **Preliminary Screening Outcome** | [Full DPIA Required / Lightweight DPIA Required / No DPIA Required] |
| **Business Unit Owner Signature** | [Signature] |
| **Date Submitted to DPO** | [Date] |

---

**Section D: DPO Review of Screening**

| Field | Response |
|---|---|
| **DPO Confirmed Outcome** | [Full DPIA Required / Lightweight DPIA Required / No DPIA Required] |
| **DPO Comments** | [Insert any notes or additional rationale] |
| **DPO Name** | [Name] |
| **DPO Signature** | [Signature] |
| **Date of DPO Review** | [Date] |
| **DPIA Reference Number (if triggered)** | [DPIA-YYYY-NNN] |

---

## 6. DPIA Methodology

*This section describes the four-phase DPIA methodology adopted by [Organization Name]. Authors must complete each phase in sequence. The DPO must be engaged throughout the process. The DPIA is a living document and must be updated whenever material changes to the processing activity occur.*

[Organization Name] conducts DPIAs using a structured four-phase methodology: **Describe → Assess → Consult → Implement**. This methodology is aligned with ISO/IEC 29134:2017 and is adapted for the requirements of the PDPA 2010.

### 6.1 Phase 1: Describe — Information Gathering and Data Flow Mapping

**Objective:** Establish a comprehensive understanding of the processing activity, including all personal data flows, actors, purposes, and legal bases.

#### 6.1.1 Processing Activity Description

Complete the following description for the processing activity being assessed:

| Field | Details |
|---|---|
| **DPIA Reference Number** | [DPIA-YYYY-NNN] |
| **Processing Activity Title** | [Insert title] |
| **Business Unit / Department** | [Insert department] |
| **Process / System Owner** | [Name and title] |
| **DPIA Lead** | [Name and title of individual leading the DPIA] |
| **DPO** | [Name] |
| **DPIA Initiation Date** | [Date] |
| **Target Completion Date** | [Date] |
| **Nature of the Processing** | [Describe what is being done with the personal data — collecting, recording, storing, using, sharing, disposing, etc.] |
| **Purpose(s) of Processing** | [State each specific purpose for which personal data is processed] |
| **Legal Basis for Processing** | [Identify the lawful basis under PDPA s.5 — consent, contract, legal obligation, vital interest, public function, legitimate interest] |
| **Categories of Personal Data** | [List all categories] |
| **Categories of Data Subjects** | [List all affected groups] |
| **Volume of Data Subjects** | [Estimated number] |
| **Data Retention Period** | [State the retention schedule] |
| **Third-Party Recipients** | [List all entities to whom data is disclosed] |
| **Cross-Border Transfers** | [Yes/No; if Yes, identify destination and safeguards] |
| **Technology Systems Involved** | [List all systems, platforms, and databases] |

#### 6.1.2 Data Flow Map

*Complete the data flow map table below. Each row represents one data flow. A separate data flow diagram (DFD) should be attached as Appendix A where the processing activity is complex. The data flow map feeds directly into the Risk Assessment in Phase 2.*

| # | Data Element | Source / Collection Point | Storage Location | Processing Purpose | Recipients / Disclosures | Retention Period | Transfer Outside Malaysia (Y/N) |
|---|---|---|---|---|---|---|---|
| 1 | [e.g., Full name] | [e.g., Customer onboarding form] | [e.g., Core banking system] | [e.g., Account opening] | [e.g., Credit bureau] | [e.g., 7 years post-closure] | [Y/N] |
| 2 | [Data element] | [Source] | [Storage] | [Purpose] | [Recipients] | [Retention] | [Y/N] |
| 3 | [Data element] | [Source] | [Storage] | [Purpose] | [Recipients] | [Retention] | [Y/N] |
| 4 | [Add rows as required] | | | | | | |

#### 6.1.3 Necessity and Proportionality Assessment

For each category of personal data identified, confirm that collection is necessary and proportionate to the stated processing purpose:

| Personal Data Category | Processing Purpose | Is Collection Necessary? (Y/N) | Justification | Could Less Personal Data Achieve the Purpose? (Y/N) | If Yes, Action Required |
|---|---|---|---|---|---|
| [Category] | [Purpose] | | [Justify] | | |
| [Category] | [Purpose] | | [Justify] | | |

### 6.2 Phase 2: Assess — Privacy Risk Identification and Analysis

**Objective:** Identify, analyze, and rate all privacy risks associated with the processing activity using the risk assessment matrix in Section 7.

#### 6.2.1 Privacy Risk Identification

*Identify all potential privacy risks arising from the processing activity. Consider risks from unauthorized access, data loss, purpose creep, excessive collection, inadequate consent, cross-border transfer risks, third-party risks, and data subject rights failures. Use the risk assessment matrix in Section 7 to score each risk.*

| Risk ID | Risk Description | Threat Source | Affected Data Subjects | Data Elements at Risk | Likelihood (1–5) | Impact (1–5) | Risk Score (L×I) | Risk Rating |
|---|---|---|---|---|---|---|---|---|
| R001 | [Describe the risk — e.g., Unauthorized access to stored personal data due to inadequate access controls] | [e.g., External attacker / Insider threat] | [e.g., All customers] | [e.g., NRIC, financial data] | [1–5] | [1–5] | [Score] | [Low/Medium/High/Critical] |
| R002 | [Risk description] | [Threat source] | [Data subjects] | [Data elements] | | | | |
| R003 | [Risk description] | [Threat source] | [Data subjects] | [Data elements] | | | | |
| R004 | [Add rows as required] | | | | | | | |

#### 6.2.2 PDPA Principles Compliance Assessment

*Assess the processing activity against each of the seven PDPA principles. Identify any gaps that represent compliance risks.*

| PDPA Principle | PDPA Section | Assessment Question | Compliant (Y/N/Partial) | Identified Gap / Risk | Risk ID Reference |
|---|---|---|---|---|---|
| General Principle | s.5 | Is there a clear and lawful basis for each processing purpose? Are data subjects' rights respected? | | | |
| Notice and Choice Principle | s.6 | Have data subjects been given adequate notice of all processing purposes? Is meaningful consent obtained where required? | | | |
| Disclosure Principle | s.7 | Is personal data disclosed only for the purpose for which it was collected? Are third-party disclosures controlled? | | | |
| Security Principle | s.9 | Are practical steps taken to protect personal data from loss, misuse, unauthorized access, alteration, or destruction? | | | |
| Retention Principle | s.10 | Is personal data retained only as long as necessary for its purpose and securely disposed of thereafter? | | | |
| Data Integrity Principle | s.29 | Is personal data accurate, complete, not misleading, and up to date? Are processes in place to correct inaccurate data? | | | |
| Access Principle | s.12 | Can data subjects access their personal data upon request? Is there a process for correction requests? | | | |

### 6.3 Phase 3: Consult — Stakeholder Consultation

**Objective:** Engage relevant internal and external stakeholders to ensure that the DPIA reflects a comprehensive understanding of the processing activity and that all affected parties have been consulted.

#### 6.3.1 Internal Stakeholder Consultation

*Document all internal consultations conducted during the DPIA. Consultation with internal stakeholders is mandatory for all DPIAs. Consultation records must be retained as part of the DPIA file.*

| Stakeholder | Role | Consultation Date | Method | Key Input Provided | DPIA Impact |
|---|---|---|---|---|---|
| [Name / Department] | [e.g., IT Security / CISO] | [Date] | [Meeting / Email / Workshop] | [Summary of input] | [How input influenced the DPIA] |
| [Name / Department] | [e.g., Legal Counsel] | [Date] | | | |
| [Name / Department] | [e.g., Business Unit Head] | [Date] | | | |
| [Name / Department] | [e.g., Compliance Officer] | [Date] | | | |
| [Name / Department] | [e.g., IT Architecture] | [Date] | | | |

#### 6.3.2 External Stakeholder Consultation

*Document any consultation with external parties, including third-party processors, legal advisors, and — where appropriate — representative data subjects or advocacy groups. Note that consultation with data subjects is recommended for high-risk or novel processing activities.*

| Stakeholder | Organization | Consultation Date | Method | Key Input Provided | DPIA Impact |
|---|---|---|---|---|---|
| [Name] | [e.g., Third-party processor] | [Date] | | | |
| [Name] | [e.g., External legal advisor] | [Date] | | | |
| [Name] | [e.g., Customer representative / advocacy group] | [Date] | | | |

#### 6.3.3 DPO Initial Review

| Field | Details |
|---|---|
| **DPO Initial Review Date** | [Date] |
| **DPO Preliminary Assessment** | [Summary of DPO's initial observations following Phase 1 and Phase 2 review] |
| **Additional Risks Identified by DPO** | [List any risks the DPO identified that were not captured by the process owner] |
| **Consultation Adequacy Assessment** | [DPO assessment of whether sufficient consultation has occurred — Adequate / Inadequate / Further consultation required] |
| **DPO Signature** | [Signature] |

### 6.4 Phase 4: Implement — Risk Treatment and Mitigation

**Objective:** Define, assign, and track the implementation of measures to mitigate identified privacy risks to an acceptable residual risk level.

#### 6.4.1 Risk Treatment Plan

*For each risk identified in Section 6.2.1, define the risk treatment approach and the specific mitigation measures to be implemented. The risk treatment plan must be agreed between the process owner, DPO, and relevant technical or operational stakeholders. See Section 8 for detailed mitigation measure guidance.*

| Risk ID | Risk Description | Initial Risk Rating | Treatment Option | Mitigation Measure(s) | Responsible Owner | Implementation Deadline | Status | Residual Risk Rating |
|---|---|---|---|---|---|---|---|---|
| R001 | [Risk description] | [Low/Medium/High/Critical] | [Mitigate / Accept / Avoid / Transfer] | [Describe specific controls to be implemented] | [Name / Role] | [Date] | [Planned / In Progress / Completed] | [Low/Medium/High/Critical] |
| R002 | [Risk description] | | | | | | | |
| R003 | [Risk description] | | | | | | | |

#### 6.4.2 Privacy-by-Design Measures

*Document any privacy-by-design and privacy-by-default measures incorporated into the design of the processing activity as a result of the DPIA.*

| Design Principle | Measure Implemented | Details |
|---|---|---|
| Data Minimisation | [Y/N] | [Describe how data collection has been limited to the minimum necessary] |
| Purpose Limitation | [Y/N] | [Describe how processing is restricted to stated purposes] |
| Storage Limitation | [Y/N] | [Describe retention controls and automated deletion mechanisms] |
| Access Controls | [Y/N] | [Describe role-based access controls and least-privilege implementation] |
| Pseudonymisation / Anonymisation | [Y/N] | [Describe any pseudonymisation or anonymisation applied to the data] |
| Encryption | [Y/N] | [Describe encryption at rest and in transit] |
| Transparency | [Y/N] | [Describe notice mechanisms, consent management, and privacy notices] |
| Data Subject Rights | [Y/N] | [Describe mechanisms for access, correction, and opt-out] |

---

## 7. Risk Assessment Matrix for Privacy Risks

*This section defines the risk scoring methodology used in Section 6.2. Authors must use this matrix consistently across all DPIAs to ensure comparability of risk ratings. The thresholds and ratings should be reviewed by the DPO and Risk function annually.*

### 7.1 Likelihood Scale

| Score | Rating | Description |
|---|---|---|
| **1** | Rare | The risk event is highly unlikely to occur. Robust controls are in place and have been tested. No known precedent in similar organizations. |
| **2** | Unlikely | The risk event is unlikely to occur under normal operating conditions. Some controls in place. Occasional precedent in similar organizations. |
| **3** | Possible | The risk event could occur under certain circumstances. Controls exist but may not always be effective. Moderate precedent. |
| **4** | Likely | The risk event is likely to occur without intervention. Controls are weak or partial. Frequent precedent in the industry. |
| **5** | Almost Certain | The risk event is expected to occur in the absence of additional controls. No effective controls currently in place. |

### 7.2 Impact Scale

| Score | Rating | Description | Examples of Impact on Data Subjects |
|---|---|---|---|
| **1** | Negligible | No discernible harm to data subjects. Any impact is trivial and temporary. | Minor inconvenience; easily remediated. |
| **2** | Minor | Limited harm to data subjects. Impact is short-term and recoverable. | Temporary embarrassment; minor financial inconvenience. |
| **3** | Moderate | Significant harm to some data subjects. Impact may require intervention to remediate. | Damaged reputation; financial loss below material threshold; distress requiring support. |
| **4** | Significant | Serious harm to a number of data subjects. Impact is difficult to reverse. | Identity theft; significant financial loss; discrimination; loss of employment. |
| **5** | Severe | Catastrophic harm to data subjects. Impact may be irreversible and affect a large population. | Physical harm; severe financial loss; systematic discrimination; mass identity fraud. |

### 7.3 Risk Scoring Matrix

| | **Impact 1 — Negligible** | **Impact 2 — Minor** | **Impact 3 — Moderate** | **Impact 4 — Significant** | **Impact 5 — Severe** |
|---|---|---|---|---|---|
| **Likelihood 5 — Almost Certain** | **5 — Medium** | **10 — High** | **15 — High** | **20 — Critical** | **25 — Critical** |
| **Likelihood 4 — Likely** | **4 — Low** | **8 — Medium** | **12 — High** | **16 — Critical** | **20 — Critical** |
| **Likelihood 3 — Possible** | **3 — Low** | **6 — Medium** | **9 — Medium** | **12 — High** | **15 — High** |
| **Likelihood 2 — Unlikely** | **2 — Low** | **4 — Low** | **6 — Medium** | **8 — Medium** | **10 — High** |
| **Likelihood 1 — Rare** | **1 — Low** | **2 — Low** | **3 — Low** | **4 — Low** | **5 — Medium** |

### 7.4 Risk Rating Definitions and Required Actions

| Risk Rating | Score Range | Required Action | Escalation Required |
|---|---|---|---|
| **Low** | 1–4 | Document risk. Monitor periodically. No immediate action required beyond standard controls. | No |
| **Medium** | 5–9 | Implement mitigation measures within agreed timeframe. DPO review required. | DPO |
| **High** | 10–15 | Implement mitigation measures before processing commences or changes are implemented. Escalate to Risk Committee. | DPO + Risk Committee |
| **Critical** | 16–25 | Processing should not commence or proceed until risk is reduced to High or below. Immediate escalation to Senior Management and Risk Committee required. Regulatory notification may be required. | DPO + Senior Management + Risk Committee |

---

## 8. Identification of Risk Mitigation Measures

*This section provides a structured framework for identifying and selecting risk mitigation measures. Authors should use this section in conjunction with the Risk Treatment Plan in Section 6.4.1. Not all measures will apply to every DPIA — select and adapt measures based on the specific risks identified.*

### 8.1 Mitigation Measure Framework

Mitigation measures should be selected using the following hierarchy, consistent with privacy-by-design principles:

1. **Avoid** the risk by not collecting the personal data or not undertaking the processing at all;
2. **Reduce** the likelihood or impact of the risk through technical or organizational controls;
3. **Transfer** the risk to a third party through contractual mechanisms (noting that legal liability under the PDPA cannot be transferred);
4. **Accept** the residual risk following mitigation, with documented DPO and management approval.

### 8.2 Technical Mitigation Measures

| Control Category | Example Measures | Applicable Risk Types |
|---|---|---|
| **Access Control** | Role-based access control (RBAC); principle of least privilege; multi-factor authentication; privileged access management | Unauthorized access; insider threat; data breach |
| **Encryption** | Encryption at rest (AES-256 or equivalent); encryption in transit (TLS 1.2+); end-to-end encryption; key management procedures | Data interception; unauthorized access; data breach |
| **Pseudonymisation** | Tokenisation of identifiers; separation of identifying and processing datasets; pseudonymous analytics | Re-identification risk; purpose creep; data breach impact |
| **Anonymisation** | Aggregation; data masking; k-anonymity; differential privacy techniques | Re-identification risk; data minimisation gaps |
| **Audit Logging** | Comprehensive audit trails for all access to personal data; log integrity controls; log retention aligned with policy | Insider threat; unauthorized access; accountability gaps |
| **Data Loss Prevention** | DLP tools; email filtering; endpoint controls; USB restrictions | Accidental disclosure; insider threat |
| **Secure Deletion** | Certified data erasure procedures; automated retention enforcement; cryptographic deletion | Retention principle violations; storage limitation failures |
| **Vulnerability Management** | Regular penetration testing; vulnerability scanning; patch management | System vulnerabilities; data breach |

### 8.3 Organisational Mitigation Measures

| Control Category | Example Measures | Applicable Risk Types |
|---|---|---|
| **Data Minimisation** | Review and reduce data fields collected; implement mandatory field justification process | Excessive collection; proportionality failures |
| **Purpose Limitation** | Implement technical controls preventing repurposing of data; data use agreements with internal teams | Purpose creep; unauthorized use |
| **Contractual Controls** | Data Processing Agreements (DPAs) with third-party processors; contractual audit rights; SLA compliance monitoring | Third-party risk; disclosure principle |
| **Privacy Notices** | Update or create privacy notices to accurately reflect processing; consent refresh where required | Notice principle; consent validity |
| **Training and Awareness** | PDPA training for processing staff; role-specific data handling training; phishing awareness | Human error; insider threat; awareness gaps |
| **Data Subject Rights Processes** | Documented procedures for access, correction, and opt-out requests; response time commitments | Access and correction principle failures |
| **Third-Party Due Diligence** | Vendor privacy assessments; contractual PDPA compliance requirements; periodic reviews | Third-party risk; processor compliance |
| **Incident Response** | Updated data breach response plan; breach notification procedures; staff drills | Data breach impact; response readiness |
| **Governance Controls** | DPO involvement in project sign-off; privacy review gates in project lifecycle | Accountability gaps; governance failures |

### 8.4 Risk Treatment Decision Record

*For each Critical or High risk that cannot be fully mitigated, document the rationale for the treatment decision and the residual risk accepted.*

| Risk ID | Risk Description | Initial Rating | Treatment Decision | Justification | Residual Rating | Accepted By | Date |
|---|---|---|---|---|---|---|---|
| [R00X] | [Description] | [Critical/High] | [Accept / Partially Mitigate] | [State why full mitigation is not feasible and why the residual risk is acceptable] | [Rating] | [Name / Role] | [Date] |

---

## 9. DPO Review and Approval Process

### 9.1 Overview

*This section defines the formal review and approval process that the DPO must undertake for each completed DPIA. The DPO's review is a mandatory step before any new or significantly changed processing activity may commence. Authors must ensure that the DPO review is completed and documented before project go-live or change implementation.*

All completed DPIAs must be submitted to the DPO for formal review and approval prior to commencement of the assessed processing activity. The DPO's review is independent of and in addition to any review conducted by the process owner or project team.

### 9.2 DPO Review Checklist

The DPO must complete the following review checklist for every DPIA submitted for approval:

| # | Review Item | Assessed (Y/N) | DPO Comment |
|---|---|---|---|
| **Documentation Completeness** | | | |
| 1 | All sections of the DPIA have been completed. | | |
| 2 | A data flow map has been provided and accurately reflects the processing activity. | | |
| 3 | All identified data flows, data elements, and recipients are documented. | | |
| **Risk Assessment Quality** | | | |
| 4 | All material privacy risks have been identified and assessed using the approved risk matrix. | | |
| 5 | Risk scores reflect a realistic assessment of likelihood and impact. | | |
| 6 | The PDPA principles compliance assessment has been completed for all seven principles. | | |
| **Consultation Adequacy** | | | |
| 7 | All relevant internal stakeholders have been consulted. | | |
| 8 | External stakeholders have been consulted where required. | | |
| 9 | Consultation records are complete and retained in the DPIA file. | | |
| **Mitigation Measures** | | | |
| 10 | Mitigation measures have been identified for all High and Critical risks. | | |
| 11 | Mitigation measures are specific, actionable, and assigned to responsible owners with deadlines. | | |
| 12 | Residual risk levels after mitigation are assessed and documented. | | |
| **Legal and Regulatory Compliance** | | | |
| 13 | The lawful basis for processing is clearly identified and supported under the PDPA. | | |
| 14 | Privacy notice obligations have been assessed and addressed. | | |
| 15 | Data subject rights obligations have been considered and accommodated. | | |
| 16 | Third-party processing arrangements are supported by appropriate contractual controls. | | |
| 17 | Cross-border transfer arrangements comply with applicable requirements. | | |
| **Residual Risk Acceptance** | | | |
| 18 | Residual risks have been assessed and are at an acceptable level for the organization. | | |
| 19 | Where residual Critical risks remain, Senior Management approval has been obtained or is being sought. | | |

### 9.3 DPO Review Outcome

| Field | Details |
|---|---|
| **DPIA Reference Number** | [DPIA-YYYY-NNN] |
| **Processing Activity** | [Name] |
| **Date DPIA Submitted to DPO** | [Date] |
| **Date DPO Review Completed** | [Date] |
| **DPO Review Outcome** | [Approved / Approved with Conditions / Not Approved — Resubmit] |
| **Conditions of Approval (if applicable)** | [List any conditions that must be satisfied before processing may commence, with deadlines] |
| **Reason for Non-Approval (if applicable)** | [State specific deficiencies requiring remediation before resubmission] |
| **Outstanding Actions** | [List any post-approval monitoring or follow-up actions required] |
| **DPO Name** | [Full name] |
| **DPO Signature** | [Signature] |
| **Date of Approval** | [Date] |

### 9.4 Escalation to Senior Management

Where a DPIA identifies residual **Critical** risks that cannot be reduced through available mitigation measures, the DPO must escalate to Senior Management and, where applicable, the Risk Committee or Board Risk Committee, prior to approving processing commencement.

| Field | Details |
|---|---|
| **Escalation Required** | [Yes / No] |
| **Basis for Escalation** | [Describe the residual Critical risk(s) requiring escalation] |
| **Escalation Date** | [Date] |
| **Escalated To** | [Name / Committee] |
| **Senior Management Decision** | [Approve processing with accepted residual risk / Do not proceed / Defer pending further mitigation] |
| **Senior Management Approval Name** | [Name and title] |
| **Senior Management Approval Signature** | [Signature] |
| **Date of Senior Management Decision** | [Date] |

### 9.5 Regulatory Notification

*In certain circumstances, particularly where processing is likely to result in a high risk that cannot be adequately mitigated, [Organization Name] may be required or may choose to notify the Personal Data Protection Commissioner. The DPO must assess this requirement for all DPIAs where residual Critical risks remain.*

| Field | Details |
|---|---|
| **Regulatory Notification Required** | [Yes / No / Under Assessment] |
| **Basis for Notification Requirement** | [Describe the legal or regulatory basis for notification] |
| **Date Notified** | [Date — if applicable] |
| **Regulatory Response** | [Summary of any response received from the Commissioner] |

---

## 10. Residual Risk Acceptance and Documentation

### 10.1 Residual Risk Assessment

*This section documents the final residual risk position following the implementation of all agreed mitigation measures. Residual risk must be formally accepted by the appropriate level of management. The DPO must not accept residual risk on behalf of the organization — acceptance lies with the risk owner and management.*

Following the implementation of agreed mitigation measures from the Risk Treatment Plan (Section 6.4.1), the following residual risks remain:

| Risk ID | Original Risk Description | Original Risk Rating | Mitigation Measures Applied | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Risk Rating |
|---|---|---|---|---|---|---|---|
| R001 | [Description] | [Rating] | [List measures applied] | [1–5] | [1–5] | [Score] | [Low/Medium/High/Critical] |
| R002 | [Description] | | | | | | |
| R003 | [Description] | | | | | | |

### 10.2 Residual Risk Acceptance Register

*All residual risks rated Medium or above must be formally accepted. The acceptance must be made by a person with appropriate authority, as defined in [Organization Name]'s Risk Governance Framework. Low residual risks may be accepted by the process owner.*

| Risk ID | Residual Risk Rating | Risk Description | Accepted By (Name / Role) | Acceptance Justification | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|
| R001 | [Low/Medium/High/Critical] | [Description] | [Name / Role] | [State why the residual risk is acceptable in the context of the business need] | [Date] | [Date for next review of accepted risk] |
| R002 | | | | | | |
| R003 | | | | | | |

### 10.3 Conditions on Processing Commencement

*Where DPIA approval is conditional, document the conditions and their satisfaction status before processing commences.*

| Condition | Required Action | Responsible Owner | Target Date | Completion Confirmed By | Completion Date |
|---|---|---|---|---|---|
| [Condition 1 — e.g., DPA with third-party processor to be executed prior to go-live] | [Action required to satisfy condition] | [Name / Role] | [Date] | [DPO name] | [Date] |
| [Condition 2] | | | | | |

### 10.4 DPIA Sign-Off and Processing Authorisation

*This sign-off confirms that the DPIA has been completed, all mandatory mitigation measures are in place or have a documented implementation plan, and the processing activity is authorised to commence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Process / System Owner** | [Name] | [Signature] | [Date] |
| **Business Unit Head** | [Name] | [Signature] | [Date] |
| **Data Protection Officer** | [Name] | [Signature] | [Date] |
| **Chief Information Security Officer** | [Name] | [Signature] | [Date] |
| **Senior Management Representative** (if residual Critical risks) | [Name] | [Signature] | [Date] |

---

## 11. DPIA Record-Keeping and Review Schedule

### 11.1 Record-Keeping Requirements

*This section defines the records that must be retained as part of the DPIA file and the retention requirements applicable to those records. All DPIA records must be stored in [Organization Name]'s designated document management system.*

[Organization Name] is required to maintain comprehensive records of all DPIAs as evidence of its accountability obligations under the PDPA. DPIA records form part of [Organization Name]'s Records of Processing Activities (RoPA) and must be made available to the Personal Data Protection Commissioner upon request.

#### 11.1.1 Mandatory DPIA Records

The following records must be retained for every completed DPIA:

| Record | Description | Mandatory |
|---|---|---|
| Completed DPIA Screening Questionnaire | Including DPO confirmation of screening outcome. | Yes |
| Completed DPIA Document | All phases completed, including data flow map, risk assessment, risk treatment plan, and consultations. | Yes |
| DPO Review and Approval Record | Signed DPO review checklist and approval decision. | Yes |
| Residual Risk Acceptance Register | Signed acceptance of all Medium, High, and Critical residual risks. | Yes |
| Consultation Records | Notes, emails, or meeting records evidencing stakeholder consultation. | Yes |
| Risk Treatment Implementation Evidence | Evidence that agreed mitigation measures have been implemented (e.g., system screenshots, configuration records, DPAs). | Yes |
| Senior Management Escalation Records | Where applicable — records of escalation and approval decisions. | Conditional |
| Regulatory Notification Records | Where applicable — records of notification and regulatory response. | Conditional |
| DPIA Review Records | Records of all subsequent reviews of the DPIA. | Yes — on review |

#### 11.1.2 Record Storage and Access

| Field | Details |
|---|---|
| **Storage Location** | [Specify the document management system, folder path, or repository where DPIA records are stored] |
| **Access Controls** | [Specify who has access to DPIA records — DPO, Compliance, Legal, Audit, etc.] |
| **Retention Period** | [DPIA records must be retained for a minimum of [X] years from the date of the last processing activity covered by the DPIA, or as otherwise required by applicable law] |
| **Disposal Method** | [Specify secure disposal method upon expiry of retention period] |

### 11.2 DPIA Review Schedule

*Completed DPIAs must be reviewed periodically and whenever material changes occur to the assessed processing activity. The DPO is responsible for maintaining the DPIA review schedule and ensuring that all DPIAs are reviewed within the required timeframe.*

#### 11.2.1 Periodic Review Requirements

| Review Type | Trigger | Frequency | Responsible Party |
|---|---|---|---|
| **Scheduled Periodic Review** | Calendar-based review of all DPIAs | Annually from date of last approval | DPO |
| **Change-Triggered Review** | Material change to processing activity (purpose, technology, volume, recipients, data subjects) | Upon identification of material change | Process Owner + DPO |
| **Incident-Triggered Review** | Data breach, near-miss, or privacy complaint relating to the processing activity | Within 30 days of incident | DPO |
| **Regulatory-Triggered Review** | New or amended regulatory guidance affecting the processing activity | Within 60 days of guidance publication | DPO |
| **Audit-Triggered Review** | Internal or external audit finding relating to the processing activity | As directed by audit finding | DPO + Audit |

#### 11.2.2 DPIA Register

*The DPO must maintain a central DPIA register recording all DPIAs completed by [Organization Name]. The register must be kept current and reviewed quarterly.*

| DPIA Ref | Processing Activity | Business Unit | Date Approved | Risk Rating (Final) | Next Review Date | Review Status | DPO Name |
|---|---|---|---|---|---|---|---|
| DPIA-[YYYY]-001 | [Processing activity name] | [Business unit] | [Date] | [Low/Medium/High] | [Date] | [Scheduled / Overdue / Completed] | [Name] |
| DPIA-[YYYY]-002 | | | | | | | |
| DPIA-[YYYY]-003 | | | | | | | |

#### 11.2.3 DPIA Review Process

When a scheduled or triggered review falls due, the following steps must be completed:

1. DPO notifies the process owner that a DPIA review is due;
2. Process owner confirms whether any material changes have occurred to the processing activity since the last DPIA approval;
3. DPO assesses whether a full DPIA, updated DPIA, or re-screening is required based on changes identified;
4. Review is conducted and documented using the DPIA Review Record (Appendix D);
5. Updated DPIA is approved and filed; and
6. DPIA Register is updated to reflect the review outcome and next review date.

---

## 12. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in the DPIA process. The RACI matrix should be reviewed and updated whenever organizational changes affect data protection responsibilities.*

### 12.1 RACI Matrix

The following RACI matrix defines accountability for each key activity in the DPIA lifecycle:

**R** — Responsible (performs the activity)
**A** — Accountable (owns the outcome; only one per activity)
**C** — Consulted (provides input before activity is completed)
**I** — Informed (notified of outcome)

| Activity | Data Protection Officer (DPO) | Process / System Owner | Business Unit Head | IT / Technology | Legal Counsel | Compliance | Risk Committee | Senior Management | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|
| Identify processing activities requiring DPIA screening | C | R | I | C | I | C | I | I | I |
| Complete DPIA Screening Questionnaire | C | R | I | C | I | I | — | — | — |
| Review and confirm screening outcome | A/R | I | I | — | C | C | — | — | I |
| Initiate DPIA and assign DPIA Lead | A/R | C | I | — | — | C | — | — | — |
| Phase 1 — Complete processing description and data flow map | C | R | C | C | C | I | — | — | — |
| Phase 2 — Conduct privacy risk assessment | R | C | I | C | C | C | I | — | I |
| Phase 3 — Conduct internal stakeholder consultation | R | C | C | C | C | C | — | — | — |
| Phase 3 — Conduct external stakeholder consultation | R | C | A | — | C | — | — | — | — |
| Phase 4 — Develop and implement risk treatment plan | C | R | A | R | C | C | I | — | I |
| DPO formal review and approval | A/R | I | I | — | C | C | I | I | I |
| Escalation of Critical residual risks | R | C | C | — | C | C | A | R | I |
| Residual risk acceptance (Medium/High) | C | R | A | — | — | C | I | — | — |
| Residual risk acceptance (Critical) | C | I | C | — | — | C | A | R | I |
| Update Records of Processing Activities (RoPA) | R | C | I | — | — | I | — | — | — |
| Maintain DPIA Register | A/R | I | — | — | — | C | I | — | I |
| Schedule and conduct DPIA periodic reviews | A/R | C | I | — | — | C | I | — | I |
| Report on DPIA programme to Senior Management | A/R | — | — | — | — | C | C | I | — |
| Oversee DPIA programme effectiveness | I | — | — | — | — | C | C | A | R |

### 12.2 Role Descriptions

| Role | DPIA-Specific Responsibilities |
|---|---|
| **Data Protection Officer (DPO)** | Overall accountability for the DPIA programme; reviewing and approving all completed DPIAs; maintaining the DPIA register; advising process owners on PDPA compliance obligations; escalating Critical residual risks; ensuring the DPIA procedure remains current. |
| **Process / System Owner** | Identifying when a DPIA is required; completing the Screening Questionnaire; leading Phase 1 and coordinating Phase 2–4 with support from the DPO; implementing agreed mitigation measures; accepting residual risks within authority limits; ensuring DPIA records are retained. |
| **Business Unit Head** | Accountable for processing activities within their business unit; supporting the DPO in obtaining stakeholder buy-in; accepting residual risks escalated by the process owner; championing privacy-by-design within their team. |
| **IT / Technology** | Providing technical expertise on systems, data flows, and technical controls; implementing technical mitigation measures; conducting security assessments relevant to the DPIA; supporting data flow mapping. |
| **Legal Counsel** | Advising on lawful basis for processing; reviewing contractual controls with third parties; advising on cross-border transfer requirements; advising on regulatory notification obligations. |
| **Compliance** | Supporting the DPO with regulatory interpretation; coordinating with internal audit on DPIA findings; ensuring DPIA outcomes are reflected in the compliance register. |
| **Risk Committee** | Reviewing and approving Critical residual risk acceptance; providing risk governance oversight of the DPIA programme; receiving regular DPIA programme reporting. |
| **Senior Management** | Approving processing activities with Critical residual risks; providing strategic direction on the organization's risk appetite for privacy risks; ensuring adequate resources are available for the DPIA programme. |
| **Internal Audit** | Providing independent assurance on the effectiveness of the DPIA programme; auditing DPIA records for completeness and accuracy; reporting DPIA programme deficiencies to the Audit Committee. |

---

## 13. Review and Approval

### 13.1 Document Control

*This section records the version history of this procedure. All material amendments must be approved by the DPO and, where applicable, Senior Management. Minor amendments (e.g., typographical corrections, updated cross-references) may be approved by the DPO alone.*

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name / Title] | Initial version — approved for release. |
| [1.1] | [Date] | [Author Name / Title] | [Description of changes — e.g., Updated risk matrix thresholds; Added Appendix C lightweight DPIA template] |
| [2.0] | [Date] | [Author Name / Title] | [Description of major revision] |

### 13.3 Scheduled Review

This procedure is subject to a formal review no less than **annually** from the date of last approval, or earlier if required by:

- Amendment to the PDPA 2010 or related subsidiary legislation;
- New or updated guidance from the Personal Data Protection Commissioner;
- New or updated guidance from Bank Negara Malaysia relevant to data protection;
- A significant data protection incident within [Organization Name];
- Identification of material deficiencies during internal or external audit; or
- Material changes to [Organization Name]'s processing activities or organizational structure.

The DPO is responsible for initiating and coordinating the scheduled review.

### 13.4 Approval Sign-Off

*All individuals listed below must review and approve this procedure before it takes effect. Signatures confirm that the approver has read and understood the procedure and accepts it as an accurate and appropriate statement of [Organization Name]'s requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Data Protection Officer** | [Full Name] | [Signature] | [Date] |
| **Chief Compliance Officer** | [Full Name] | [Signature] | [Date] |
| **Chief Information Security Officer** | [Full Name] | [Signature] | [Date] |
| **Head of Legal** | [Full Name] | [Signature] | [Date] |
| **Chief Executive Officer / Authorised Representative** | [Full Name] | [Signature] | [Date] |

---

## 14. References

*This section lists all regulatory instruments, standards, and internal documents referenced in this procedure. Authors must verify that all references remain current at each review cycle.*

### 14.1 Regulatory References

| Reference | Full Title | Relevant Provisions |
|---|---|---|
| **PDPA 2010 s.5** | Personal Data Protection Act 2010 — General Principle | Lawful basis for processing; purpose limitation; data subject rights. Foundational principle assessed in every DPIA. |
| **PDPA 2010 s.6** | Personal Data Protection Act 2010 — Notice and Choice Principle | Requirements for notice to data subjects and obtaining consent. DPIA assesses adequacy of notice and consent mechanisms. |
| **PDPA 2010 s.7** | Personal Data Protection Act 2010 — Disclosure Principle | Restrictions on disclosure of personal data beyond original purpose. DPIA assesses third-party disclosure controls. |
| **PDPA 2010 s.9** | Personal Data Protection Act 2010 — Security Principle | Security of personal data. DPIA identifies security risks and required technical controls. |
| **PDPA 2010 s.10** | Personal Data Protection Act 2010 — Retention Principle | Retention and disposal of personal data. DPIA assesses retention compliance. |
| **PDPA 2010 s.12** | Personal Data Protection Act 2010 — Access Principle | Data subject rights to access and correct personal data. DPIA assesses adequacy of rights mechanisms. |
| **PDPA 2010 s.29** | Personal Data Protection Act 2010 — Data Integrity Principle | Accuracy and completeness of personal data. DPIA assesses data quality controls. |
| Personal Data Protection (Class of Data Users) Order 2013 | Class of Data Users Order | Identifies [Organization Name] as a regulated data user subject to PDPA obligations. |
| Personal Data Protection Regulations 2013 | Personal Data Protection Regulations | Implementing regulations under the PDPA. |
| BNM [Applicable Circular/Framework] | [Title of applicable BNM circular or framework] | [Describe relevance — e.g., Technology Risk Management guidelines; operational risk requirements] |

### 14.2 Standards and Guidance References

| Reference | Title | Relevance |
|---|---|---|
| ISO/IEC 29134:2017 | Information technology — Security techniques — Guidelines for privacy impact assessment | Primary international reference for DPIA methodology adopted by [Organization Name]. |
| ISO/IEC 29101:2018 | Information technology — Security techniques — Privacy architecture framework | Reference for privacy architecture controls. |
| ISO/IEC 27001:2022 | Information security management systems | Reference for information security controls referenced in DPIA risk assessment. |
| PDPC (Singapore) DPIA Guide | Guide on Conducting a Data Protection Impact Assessment | Regional best-practice reference. |

### 14.3 Internal Document References

| Document Title | Document ID | Owner |
|---|---|---|
| Data Protection Policy | [Document ID] | DPO |
| Data Governance Framework | [Document ID] | DPO / Chief Data Officer |
| Records of Processing Activities (RoPA) Procedure | [Document ID] | DPO |
| Data Breach Response Procedure | [Document ID] | DPO / CISO |
| Information Security Policy | [Document ID] | CISO |
| Third-Party Risk Management Procedure | [Document ID] | Risk / Procurement |
| Data Retention and Disposal Policy | [Document ID] | DPO / Records Management |
| Consent Management Procedure | [Document ID] | DPO |

---

## 15. Appendices

### Appendix A — Data Flow Diagram Template

*This appendix provides a template for the data flow diagram (DFD) to be completed as part of Phase 1 of the DPIA. For complex processing activities, a dedicated DFD should be produced by the IT or Technology team and attached here. The DFD should clearly show all points of data collection, storage, processing, sharing, and disposal.*

**Instructions for completion:**

1. Use the table below to document each node in the data flow for simple processing activities; or
2. Attach a formal data flow diagram produced using [Organization Name]'s approved diagramming tool (e.g., [Tool Name]) for complex or multi-system processing activities.

| Node ID | Node Type | Node Name / System | Data Received From | Data Sent To | Personal Data Elements | Security Controls Applied |
|---|---|---|---|---|---|---|
| N01 | Collection Point | [e.g., Customer Portal] | [e.g., Data Subject] | [e.g., CRM System] | [e.g., Name, email, NRIC] | [e.g., TLS 1.3, MFA] |
| N02 | Storage | [e.g., CRM Database] | [e.g., Customer Portal] | [e.g., Analytics Platform] | [e.g., Customer profile data] | [e.g., AES-256 encryption, RBAC] |
| N03 | Processing | [e.g., Analytics Platform] | [e.g., CRM Database] | [e.g., Reporting Team] | [e.g., Pseudonymised behavioural data] | [e.g., Pseudonymisation, access controls] |
| N04 | Disclosure | [e.g., Credit Bureau API] | [e.g., CRM Database] | [External — Credit Bureau] | [e.g., NRIC, financial data] | [e.g., Encrypted API, DPA in place] |
| N05 | Disposal | [e.g., Secure deletion process] | [All storage systems] | [N/A — disposal] | [All personal data elements] | [e.g., Certified erasure, audit log] |

---

### Appendix B — DPIA Risk Register Template

*This appendix provides a standalone risk register template for use when the DPIA identifies a large number of risks that require detailed tracking beyond the main DPIA document. The risk register should be maintained as a living document and updated as mitigation measures are implemented and residual risks are accepted.*

| Risk ID | Risk Category | Risk Description | Affected PDPA Principle | Data Elements at Risk | Affected Data Subjects | Likelihood (1–5) | Impact (1–5) | Inherent Risk Score | Inherent Risk Rating | Mitigation Measure | Control Type | Responsible Owner | Deadline | Status | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Risk Rating | Risk Accepted By | Acceptance Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R001 | [e.g., Access Control] | [Description] | [e.g., Security Principle — s.9] | [Elements] | [Subjects] | | | | | [Measure] | [Technical/Org] | [Owner] | [Date] | [Status] | | | | | [Name/Role] | [Date] |

---

### Appendix C — Lightweight DPIA Template

*This appendix provides a simplified DPIA template for processing activities that do not meet mandatory trigger criteria but exhibit elevated risk characteristics requiring a lightweight assessment. The Lightweight DPIA template is for use only where the DPO has confirmed that a full DPIA is not required.*

| Field | Details |
|---|---|
| **Processing Activity Title** | [Insert title] |
| **Business Unit** | [Insert] |
| **Process Owner** | [Insert] |
| **Date** | [Insert] |
| **Brief Description of Processing** | [Describe the processing activity in 2–3 sentences] |
| **Personal Data Categories** | [List categories] |
| **Data Subjects** | [Describe] |
| **Lawful Basis** | [State lawful basis under PDPA s.5] |
| **Third Parties Involved** | [List if any] |
| **Cross-Border Transfer** | [Yes/No — if Yes, describe safeguards] |
| **Key Privacy Risks Identified** | [List up to 3 key risks with brief descriptions] |
| **Mitigation Measures** | [Describe measures for each risk] |
| **Residual Risk Assessment** | [State overall residual risk: Low/Medium] |
| **DPO Review Comments** | [DPO notes] |
| **DPO Outcome** | [Proceed / Proceed with conditions] |
| **DPO Signature** | [Signature] |
| **Date** | [Date] |

---

### Appendix D — DPIA Review Record

*This appendix provides the template for recording the outcome of a periodic or triggered review of a previously approved DPIA. A completed DPIA Review Record must be attached to the original DPIA file and the DPIA Register updated accordingly.*

| Field | Details |
|---|---|
| **DPIA Reference Number** | [DPIA-YYYY-NNN] |
| **Processing Activity** | [Name] |
| **Original DPIA Approval Date** | [Date] |
| **Review Date** | [Date] |
| **Review Type** | [Scheduled / Change-Triggered / Incident-Triggered / Regulatory-Triggered / Audit-Triggered] |
| **Review Trigger Description** | [Describe the specific trigger for this review, if not scheduled] |
| **Reviewer Name** | [Name and title] |
| **Material Changes Since Last Approval** | [Yes/No — if Yes, describe changes] |
| **New Risks Identified** | [Yes/No — if Yes, describe and add to risk register] |
| **Changes to Existing Risk Ratings** | [Yes/No — if Yes, describe] |
| **Changes to Mitigation Measures** | [Yes/No — if Yes, describe] |
| **Review Outcome** | [No changes required / DPIA updated — reapproval required / Full DPIA re-assessment required] |
| **Next Review Date** | [Date] |
| **DPO Signature** | [Signature] |
| **Date** | [Date] |

---

### Appendix E — Glossary of Privacy Risk Categories

*This appendix provides a reference glossary of common privacy risk categories to assist process owners and DPO staff in identifying and categorizing risks during the DPIA risk assessment phase.*

| Risk Category | Description | Common Sources |
|---|---|---|
| **Unauthorized Access** | Risk that personal data is accessed by individuals or systems without authorization. | Weak access controls; shared credentials; inadequate identity verification; external attack. |
| **Data Breach / Loss** | Risk that personal data is lost, stolen, or disclosed without authorization. | Cyberattack; insider threat; accidental disclosure; lost devices; misconfigured systems. |
| **Purpose Creep** | Risk that personal data is used for purposes beyond those for which it was originally collected. | Inadequate purpose limitation controls; function creep in system design; analytics misuse. |
| **Excessive Collection** | Risk that more personal data is collected than is necessary for the stated processing purpose. | Poor data minimisation practices; legacy system designs; "collect everything" culture. |
| **Inadequate Consent** | Risk that personal data is processed without a valid lawful basis, particularly where consent is relied upon. | Unclear consent language; bundled consent; lack of opt-out mechanism; outdated consents. |
| **Cross-Border Transfer Risk** | Risk arising from the transfer of personal data to jurisdictions with inadequate data protection. | Cloud hosting arrangements; offshore processing; international data sharing. |
| **Third-Party Risk** | Risk that third-party processors do not adequately protect personal data processed on behalf of [Organization Name]. | Inadequate vendor due diligence; absence of DPA; vendor subcontracting without consent. |
| **Data Subject Rights Failure** | Risk that [Organization Name] fails to respond adequately to data subject access, correction, or opt-out requests. | Inadequate processes; system limitations; lack of staff training; unclear accountability. |
| **Data Quality / Integrity Risk** | Risk that personal data held by [Organization Name] is inaccurate, incomplete, or out of date. | Absence of data quality controls; lack of update mechanisms; long retention periods. |
| **Retention and Disposal Risk** | Risk that personal data is retained beyond its required retention period or is not securely disposed of. | Absence of automated deletion; unclear retention schedules; legacy data stores. |
| **Re-identification Risk** | Risk that anonymised or pseudonymised data can be re-identified, exposing the underlying personal data. | Weak anonymisation techniques; linkage attacks; combination with auxiliary datasets. |
| **Profiling and Discrimination Risk** | Risk that automated processing results in discrimination or unfair treatment of data subjects. | Biased training data; opaque decision-making; lack of human review of automated decisions. |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Data Protection Impact Assessment (DPIA) Procedure |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Organization** | [Organization Name] |
| **Last Updated** | [Date] |