# Cross-Border Transfer Assessment Procedure

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any third party without the prior written approval of the Data Protection Officer. All printed copies are uncontrolled. The master version is maintained in [Document Management System / SharePoint URL].

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions](#4-definitions)
5. [Identification of Cross-Border Transfers](#5-identification-of-cross-border-transfers)
6. [Adequacy Determination](#6-adequacy-determination)
7. [Selection of Transfer Mechanism](#7-selection-of-transfer-mechanism)
8. [Transfer Impact Assessment Methodology](#8-transfer-impact-assessment-methodology)
9. [Standard Contractual Clauses — Drafting and Execution](#9-standard-contractual-clauses--drafting-and-execution)
10. [Binding Corporate Rules — Assessment and Approval](#10-binding-corporate-rules--assessment-and-approval)
11. [Registration and Notification to the Commissioner](#11-registration-and-notification-to-the-commissioner)
12. [Ongoing Monitoring of Transfer Arrangements](#12-ongoing-monitoring-of-transfer-arrangements)
13. [Roles and Responsibilities](#13-roles-and-responsibilities)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and the compliance objectives it is designed to fulfil.*

This procedure establishes the mandatory process that **[Organization Name]** ("the Organization") shall follow when proposing, approving, executing, or terminating any transfer of personal data to a place outside Malaysia. It gives effect to the obligations imposed by the **Personal Data Protection Act 2010 (PDPA)**, as amended, in particular **Section 129A**, and provides a structured, audit-ready framework to ensure that all cross-border personal data transfers receive appropriate scrutiny before, during, and after execution.

This procedure is intended to:

- Ensure that no personal data is transferred outside Malaysia without a lawful and documented transfer mechanism;
- Protect the rights and interests of data subjects whose personal data is processed by the Organization;
- Maintain the Organization's compliance posture with BNM regulatory expectations regarding data residency and cross-border flows;
- Enable the Data Protection Officer (DPO) to maintain a comprehensive register of all active cross-border transfer arrangements;
- Provide evidence of due diligence to the Personal Data Protection Commissioner ("the Commissioner") upon request or during enforcement action.

---

## 2. Scope

*Define the organizational boundary, data types, and activities covered by this procedure.*

### 2.1 Organizational Scope

This procedure applies to:

- All **business units, departments, and subsidiaries** of [Organization Name] operating within Malaysia;
- All **employees, contractors, consultants, and agents** who process, transmit, or facilitate the transfer of personal data on behalf of the Organization;
- All **third-party service providers and data processors** engaged by the Organization who receive or access personal data from within Malaysia.

### 2.2 Data Scope

This procedure applies to all **personal data** as defined under Section 4 of the PDPA, including but not limited to:

- Customer personal data (retail, SME, and corporate individuals);
- Employee personal data;
- Beneficial owner and KYC/AML data;
- Financial transaction data linked to identifiable individuals;
- Sensitive personal data as defined under Section 4 of the PDPA (e.g., health, biometric, political opinion, religious belief data).

### 2.3 Activity Scope

This procedure applies whenever personal data held by or processed on behalf of the Organization is:

| Activity | Examples |
|---|---|
| Transmitted electronically to a foreign recipient | Email, API calls, SFTP, direct database replication |
| Stored in infrastructure located outside Malaysia | Cloud storage, offshore data centres, SaaS platforms |
| Accessed remotely by personnel located outside Malaysia | Offshore IT support, global shared services centres |
| Shared with foreign group entities or affiliates | Intra-group reporting, consolidated analytics |
| Processed by a subprocessor outside Malaysia | Cloud subprocessors of Malaysian SaaS vendors |
| Transferred as part of a corporate restructuring | Mergers, acquisitions, outsourcing arrangements |

### 2.4 Out of Scope

The following activities are outside the scope of this procedure:

- Anonymous or de-identified data where re-identification risk has been formally assessed and documented as negligible;
- Transfers of data that do not relate to identifiable natural persons;
- Purely transient routing of data through foreign networks where no storage or processing occurs outside Malaysia.

---

## 3. Regulatory Context

*Summarise the legislative and regulatory obligations that this procedure addresses.*

### 3.1 Primary Legislation

| Instrument | Relevant Provisions | Obligation |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Section 129A | Prohibition on transfer outside Malaysia except to places specified in the First Schedule or where conditions are met |
| PDPA | Section 6 (General Principle) | Personal data must not be processed without the data subject's consent unless exceptions apply |
| PDPA | Section 40 (Sensitive Personal Data) | Heightened protection requirements apply to sensitive personal data in transfer contexts |
| PDPA | Section 10 (Security Principle) | Practical steps must be taken to protect personal data during transfer |
| PDPA | Section 8 (Retention Principle) | Personal data must not be retained longer than necessary, including by foreign processors |

### 3.2 Subsidiary Legislation and Guidance

| Instrument | Issuing Authority | Relevance |
|---|---|---|
| Personal Data Protection (Class of Data Controllers) Order 2013 | Minister of Digital | Registration obligations by sector |
| Personal Data Protection Regulations 2013 | Minister of Digital | Prescribed forms and procedures |
| [Any applicable PDPC Codes of Practice] | PDPC | Sector-specific guidance on transfers |
| BNM Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Cloud and outsourcing obligations for financial institutions |
| BNM Outsourcing Policy Document | Bank Negara Malaysia | Oversight of outsourced activities, including offshore |

### 3.3 Relationship to Other Internal Documents

This procedure operates in conjunction with the following internal policies:

| Document Title | Document ID | Relationship |
|---|---|---|
| Data Protection Policy | [Doc ID] | Parent policy governing PDPA compliance |
| Data Classification Policy | [Doc ID] | Determines sensitivity level of data being transferred |
| Vendor Risk Management Procedure | [Doc ID] | Due diligence on foreign processors |
| Cloud and SaaS Procurement Procedure | [Doc ID] | Entry point for identification of cloud-based transfers |
| Records Management Policy | [Doc ID] | Retention obligations on foreign processors |
| Business Continuity and Data Recovery Plan | [Doc ID] | Recovery obligations in cross-border contexts |

---

## 4. Definitions

*Provide precise definitions of key terms used throughout this procedure to ensure consistent application.*

| Term | Definition |
|---|---|
| **Personal Data** | Any information in respect of commercial transactions that relates directly or indirectly to a data subject, who is identified or identifiable from that information or from that and other information in the possession of a data controller, including any sensitive personal data and expression of opinion about the data subject (PDPA, Section 4). |
| **Sensitive Personal Data** | Personal data consisting of information as to the physical or mental health or condition, political opinions, religious beliefs or other beliefs of a similar nature, the commission or alleged commission of any offence, or any other personal data as the Minister may determine (PDPA, Section 4). |
| **Cross-Border Transfer** | Any transmission, disclosure, or otherwise making available of personal data to a recipient or system located in a place outside Malaysia, including through cloud services, remote access, or intra-group sharing. |
| **Transfer Mechanism** | A legally recognized basis that permits a cross-border transfer, including adequacy determination, Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), or explicit data subject consent. |
| **Adequacy Determination** | A determination by the Minister, published in the First Schedule to the PDPA, that a country or territory provides an adequate level of personal data protection. |
| **Standard Contractual Clauses (SCCs)** | Contractual provisions approved by the Commissioner or Minister that impose data protection obligations equivalent to those under the PDPA on the foreign recipient. |
| **Binding Corporate Rules (BCRs)** | Legally binding internal rules adopted by a group of companies for intra-group transfers of personal data, approved by the relevant supervisory authority. |
| **Transfer Impact Assessment (TIA)** | A documented assessment evaluating whether the legal and practical circumstances in the destination country undermine the effectiveness of the chosen transfer mechanism. |
| **Data Processor** | A person who processes personal data solely on behalf of a data controller and does not process personal data for any of his own purposes (PDPA, Section 4). |
| **Subprocessor** | A third party engaged by a data processor to carry out processing activities in respect of personal data on behalf of a data controller. |
| **Commissioner** | The Personal Data Protection Commissioner appointed under Section 7 of the PDPA. |
| **DPO** | Data Protection Officer — the individual appointed by [Organization Name] with responsibility for overseeing PDPA compliance. |
| **TIA Register** | The internal register maintained by the DPO recording all completed Transfer Impact Assessments and their outcomes. |
| **Cross-Border Transfer Register** | The internal register maintained by the DPO recording all active and historical cross-border personal data transfer arrangements. |

---

## 5. Identification of Cross-Border Transfers

*This section establishes the process by which [Organization Name] identifies, catalogues, and screens all activities that constitute or may constitute a cross-border transfer of personal data, including those arising through cloud and SaaS adoption.*

### 5.1 Identification Triggers

A cross-border transfer identification review shall be initiated upon any of the following triggers:

- **New vendor or service provider engagement** involving access to or processing of personal data;
- **Cloud or SaaS procurement** where infrastructure or data centres are located or may be located outside Malaysia;
- **New product or service launch** that involves transmission of personal data to foreign partners, correspondent banks, or international networks;
- **Corporate restructuring** including mergers, acquisitions, or establishment of new group entities outside Malaysia;
- **Change in existing vendor arrangements**, including subprocessor additions, infrastructure migrations, or changes in data residency;
- **Annual Data Mapping Review** conducted as part of the Organization's PDPA compliance calendar;
- **Regulatory enquiry or audit** that requires the Organization to identify all cross-border data flows.

### 5.2 Identification Methodology

*Describe the specific activities and tools used to surface cross-border data flows during each trigger event.*

#### 5.2.1 Data Flow Mapping

The DPO, in coordination with the relevant Business Unit and IT Department, shall conduct or update a data flow mapping exercise to identify:

| Mapping Element | Detail Required |
|---|---|
| **Data Category** | Type of personal data involved (e.g., name, IC number, financial data, health data) |
| **Data Subject Category** | Who the data relates to (customer, employee, beneficial owner, etc.) |
| **Source System** | Internal system or application generating or holding the data |
| **Destination System / Recipient** | Name and location of the receiving system, entity, or individual |
| **Destination Country / Territory** | Country where the data will be stored, processed, or accessed |
| **Transfer Method** | Technical mechanism (API, SFTP, email, cloud sync, VPN, etc.) |
| **Frequency and Volume** | How often the transfer occurs and estimated data volumes |
| **Purpose of Transfer** | Business or operational purpose justifying the transfer |
| **Contractual Arrangement** | Existing agreement governing the transfer (if any) |
| **Subprocessors** | Identify whether the foreign recipient uses further subprocessors |

#### 5.2.2 Cloud and SaaS Identification

Cloud and SaaS services present particular identification challenges due to multi-tenancy and opaque data residency. The following steps shall apply specifically to cloud and SaaS assessments:

1. Request the vendor to provide a **Data Processing Agreement (DPA)** disclosing all data centre locations and subprocessors;
2. Review the vendor's **Privacy Policy**, **Terms of Service**, and **Security Whitepaper** to identify data residency commitments;
3. Confirm whether the vendor offers a **Malaysia or Asia-Pacific data residency option** and whether it has been selected;
4. Identify all **subprocessors** used by the vendor that are located outside Malaysia, using the vendor's published subprocessor list or by contractual request;
5. Assess whether **remote access** by vendor support personnel located outside Malaysia constitutes a transfer;
6. Document the findings in the **Cloud Transfer Identification Worksheet** (Appendix A).

#### 5.2.3 Remote Access Scenarios

Remote access by personnel of the Organization or its vendors who are physically located outside Malaysia shall be treated as a cross-border transfer where such access involves viewing, downloading, modifying, or otherwise interacting with personal data. The following scenarios shall be screened:

- Offshore IT support and helpdesk personnel with access to production systems;
- Group-level risk, audit, or compliance teams based outside Malaysia reviewing customer data;
- Development and testing teams located outside Malaysia accessing non-anonymized data environments;
- Business continuity or disaster recovery failover to offshore systems.

### 5.3 Transfer Screening Outcome

Upon completion of the identification exercise, each identified transfer shall be recorded in the **Cross-Border Transfer Register** (Appendix B) with the following initial screening outcome:

| Outcome | Description | Next Step |
|---|---|---|
| **Transfer Confirmed** | A cross-border transfer of personal data has been identified | Proceed to Section 6 (Adequacy Determination) |
| **Transfer Not Confirmed** | Data does not leave Malaysia or does not relate to personal data | Document rationale and close; no further action |
| **Transfer Uncertain** | Insufficient information to determine whether a transfer occurs | Escalate to DPO; request further information from vendor within [X] business days |

---

## 6. Adequacy Determination

*This section sets out the process for determining whether the destination country or territory has been recognized as providing an adequate level of personal data protection, thereby permitting the transfer without additional safeguards.*

### 6.1 Adequacy Framework under PDPA

Section 129A of the PDPA prohibits the transfer of personal data to a place outside Malaysia unless:

(a) The place is specified in the **First Schedule** to the PDPA as a place that has been determined to provide an adequate level of personal data protection; or

(b) One of the alternative transfer mechanisms prescribed under Section 129A applies (see Section 7 of this procedure).

The adequacy determination is made by the **Minister responsible for the PDPA** and is published as part of the First Schedule. It is not a determination that can be made unilaterally by the Organization.

### 6.2 Adequacy Check Process

The following steps shall be performed for each identified destination country or territory:

**Step 1 — Consult the Current Adequacy List**

The DPO or designated Privacy Officer shall consult the current version of the **PDPA First Schedule** to determine whether the destination country or territory is listed. The current list shall be sourced from the official Gazette or the PDPC's published guidance. The version consulted and the date of consultation shall be recorded.

> **Note:** The adequacy list may change following Ministerial Orders. The DPO is responsible for monitoring changes to the First Schedule and updating the Cross-Border Transfer Register accordingly.

**Step 2 — Record the Outcome**

| Adequacy Check Outcome | Action |
|---|---|
| Destination country **is listed** in the First Schedule | Transfer may proceed on the basis of adequacy. Record in Register. Proceed to execute appropriate contractual arrangements and monitor ongoing compliance (Section 12). |
| Destination country **is not listed** | Transfer cannot proceed on the basis of adequacy. Proceed to Section 7 to identify an alternative transfer mechanism. |
| Destination country **status is uncertain** (e.g., recently added or removed) | DPO to seek legal advice and confirm with PDPC if necessary. Suspend transfer pending confirmation. |

### 6.3 Adequacy Check Record

*Complete one adequacy check record per identified destination country.*

| Field | Details |
|---|---|
| **Destination Country / Territory** | [Country Name] |
| **Check Performed By** | [Name, Role] |
| **Date of Check** | [Date] |
| **Source Consulted** | [PDPA First Schedule — version / date] |
| **Listed in First Schedule?** | Yes / No / Uncertain |
| **Outcome** | Transfer permitted on adequacy basis / Alternative mechanism required |
| **DPO Sign-off** | [DPO Name and Date] |

---

## 7. Selection of Transfer Mechanism

*This section provides the decision framework for selecting the appropriate legal transfer mechanism where the destination country is not listed in the PDPA First Schedule or where additional contractual protection is warranted.*

### 7.1 Available Transfer Mechanisms

Where the destination country does not benefit from an adequacy determination, the Organization shall select one of the following mechanisms, subject to the conditions described below:

| Mechanism | Legal Basis | When Applicable | Key Conditions |
|---|---|---|---|
| **Adequacy** | PDPA s129A / First Schedule | Destination country is listed | No additional conditions required beyond continued monitoring |
| **Standard Contractual Clauses (SCCs)** | PDPA s129A + Commissioner approval | Transfers to commercial third parties or processors | SCCs must be approved or recognized; cannot be modified in ways that undermine protections |
| **Binding Corporate Rules (BCRs)** | PDPA s129A + Commissioner approval | Intra-group transfers within a multinational group | Must be approved by the Commissioner; legally binding on all group entities |
| **Explicit Data Subject Consent** | PDPA s129A + s6 | Where no other mechanism is available and the data subject can meaningfully consent | Consent must be freely given, specific, informed, and unambiguous; cannot be used for large-scale systematic transfers |
| **Vital Interests** | PDPA s129A (to be confirmed with legal) | Transfers necessary to protect vital interests of the data subject | Narrow exception; requires documented necessity |
| **Public Interest** | PDPA s129A (to be confirmed with legal) | Transfers necessary for reasons of substantial public interest | Narrow exception; requires documented justification |

### 7.2 Mechanism Selection Decision Process

The following decision tree shall guide mechanism selection. All decisions shall be documented in the **Transfer Mechanism Selection Form** (Appendix C).

```
START
  │
  ▼
Is the destination country in the PDPA First Schedule (adequacy list)?
  │
  ├─ YES → Use ADEQUACY mechanism. Proceed to contractual arrangements
  │         and ongoing monitoring.
  │
  └─ NO ──→ Is this an intra-group transfer within the [Organization Name] group?
              │
              ├─ YES → Are approved Binding Corporate Rules in place or
              │         being pursued?
              │          │
              │          ├─ YES → Use BCR mechanism. Proceed to Section 10.
              │          │
              │          └─ NO  → Can SCCs be implemented? Proceed to SCC
              │                   assessment (Section 9). If not feasible,
              │                   consider consent.
              │
              └─ NO  → Can Standard Contractual Clauses be executed
                        with the foreign recipient?
                          │
                          ├─ YES → Use SCC mechanism. Conduct TIA first
                          │        (Section 8). Proceed to Section 9.
                          │
                          └─ NO  → Is the transfer necessary and can explicit,
                                   valid consent be obtained from each
                                   data subject?
                                     │
                                     ├─ YES → Use CONSENT mechanism. Document
                                     │        consent records. Proceed to
                                     │        monitoring (Section 12).
                                     │
                                     └─ NO  → TRANSFER IS NOT PERMITTED.
                                              Do not proceed. Escalate to DPO
                                              and Legal for review.
```

### 7.3 Mechanism Selection Documentation

*A Transfer Mechanism Selection Form (Appendix C) must be completed for each transfer arrangement prior to execution. The DPO must approve the selected mechanism.*

| Field | Details |
|---|---|
| **Transfer Reference Number** | [Ref No from Cross-Border Transfer Register] |
| **Recipient Name** | [Recipient Entity Name] |
| **Destination Country** | [Country] |
| **Transfer Category** | Intra-group / Third-party processor / Third-party controller / Other |
| **Adequacy Check Outcome** | Listed / Not listed |
| **Selected Mechanism** | Adequacy / SCC / BCR / Consent / Other |
| **Rationale for Selection** | [Explanation of why this mechanism was selected] |
| **TIA Required?** | Yes / No (if SCC or BCR, TIA is required — see Section 8) |
| **Prepared By** | [Name, Role, Date] |
| **Reviewed By** | [Legal Counsel Name, Date] |
| **Approved By** | [DPO Name, Date] |

---

## 8. Transfer Impact Assessment Methodology

*This section prescribes the methodology that [Organization Name] shall apply when conducting a Transfer Impact Assessment (TIA) prior to executing Standard Contractual Clauses or Binding Corporate Rules, and in any other case where the effectiveness of the chosen transfer mechanism may be undermined by circumstances in the destination country.*

### 8.1 When a TIA is Required

A Transfer Impact Assessment shall be conducted in the following circumstances:

| Circumstance | TIA Required |
|---|---|
| SCC mechanism selected | **Mandatory** |
| BCR mechanism selected | **Mandatory** |
| Destination country has laws that may conflict with PDPA obligations | **Mandatory** |
| Adequacy mechanism selected but destination country's laws have materially changed | **Required** |
| Legal or DPO assessment identifies elevated risk | **Required** |
| Explicit consent mechanism selected for large-scale or sensitive data | **Recommended** |

### 8.2 TIA Methodology

The TIA shall be conducted in four phases:

#### Phase 1 — Know Your Transfer

Document the full details of the transfer to be assessed, including all elements captured in the Cross-Border Transfer Register. Confirm the nature, volume, sensitivity, and purpose of the data to be transferred. This phase directly leverages the output of Section 5 (Identification).

#### Phase 2 — Assess the Legal Framework of the Destination Country

*Evaluate the legal environment of the destination country to determine whether it provides effective protection to the personal data being transferred.*

The assessment shall cover:

| Assessment Area | Key Questions |
|---|---|
| **Data Protection Legislation** | Does the destination country have a data protection or privacy law? Is it substantially equivalent to the PDPA? |
| **Government Access Rights** | Do the laws of the destination country grant government or intelligence agencies broad access to personal data without adequate judicial oversight? |
| **Rule of Law and Enforcement** | Is the legal system sufficiently independent and effective to allow data subjects to enforce their rights? |
| **International Commitments** | Is the destination country party to relevant international conventions on privacy or data protection? |
| **Sector-Specific Regulations** | Are there sector-specific laws (e.g., banking secrecy, national security) that may override data protection commitments? |
| **Recent Regulatory or Political Developments** | Have there been recent changes in law, government practice, or judicial interpretation that affect data protection? |

The TIA author shall use the following sources for this assessment:

- Published country reports from recognized data protection authorities (e.g., EDPB, ICO, PDPC);
- Published legal opinions from qualified local counsel in the destination country;
- Freedom House, Reporters Without Borders, and similar rule-of-law indices (supplementary);
- The Organization's external legal advisors;
- [Any other approved sources].

#### Phase 3 — Assess the Practical Effectiveness of the Transfer Mechanism

*Determine whether the chosen transfer mechanism (SCC or BCR) can, in practice, provide the level of protection required.*

| Effectiveness Question | Analysis |
|---|---|
| Can the foreign recipient comply with its contractual obligations under the SCC/BCR given local law? | [Document analysis] |
| Would the foreign recipient be required by local law to disclose personal data to authorities without notifying the Organization or the data subject? | [Document analysis] |
| Are the contractual remedies available to data subjects enforceable under local law? | [Document analysis] |
| Has the foreign recipient represented that it is not aware of any local laws that would prevent it from complying with the SCC/BCR? | [Document analysis] |

#### Phase 4 — Determine Outcome and Supplementary Measures

Based on the Phase 2 and Phase 3 assessments, the TIA shall conclude with one of the following outcomes:

| TIA Outcome | Description | Action Required |
|---|---|---|
| **Low Risk — Transfer May Proceed** | The legal framework of the destination country does not materially undermine the effectiveness of the chosen mechanism | Proceed with SCC/BCR execution; document outcome |
| **Medium Risk — Transfer May Proceed with Supplementary Measures** | There are identified risks that can be addressed through technical or contractual supplementary measures | Implement supplementary measures (see below) before proceeding |
| **High Risk — Transfer Shall Not Proceed** | The legal framework of the destination country so fundamentally undermines the chosen mechanism that no supplementary measures can adequately address the risk | Do not transfer; escalate to senior management; explore alternative service providers or technical solutions |

**Supplementary Measures (where applicable):**

*Identify and document any supplementary technical or contractual measures adopted to address risks identified in the TIA.*

| Measure Type | Examples |
|---|---|
| **Technical** | End-to-end encryption where the foreign recipient holds no decryption keys; pseudonymization of personal data prior to transfer; data minimization |
| **Contractual** | Enhanced notification obligations; audit rights; data return and deletion obligations; prohibition on subprocessing without consent |
| **Organizational** | Limiting access to personal data to specific vetted personnel; logging and monitoring of access by foreign personnel |

### 8.3 TIA Record

*A completed TIA record shall be retained in the TIA Register for a minimum of [X] years from the date the transfer arrangement is terminated.*

| Field | Details |
|---|---|
| **TIA Reference Number** | [TIA-YYYY-NNN] |
| **Transfer Reference Number** | [Ref from Cross-Border Transfer Register] |
| **Foreign Recipient** | [Entity Name] |
| **Destination Country** | [Country] |
| **Transfer Mechanism Assessed** | SCC / BCR / Other |
| **TIA Conducted By** | [Name, Role] |
| **Date of TIA** | [Date] |
| **Legal Sources Consulted** | [List sources] |
| **External Legal Opinion Obtained?** | Yes / No; if yes, [Reference] |
| **Phase 2 Findings (Summary)** | [Summary of legal framework assessment] |
| **Phase 3 Findings (Summary)** | [Summary of practical effectiveness assessment] |
| **TIA Outcome** | Low Risk / Medium Risk / High Risk |
| **Supplementary Measures Adopted** | [List measures if applicable] |
| **DPO Approval** | [DPO Name and Date] |
| **Legal Counsel Review** | [Legal Counsel Name and Date] |
| **Next TIA Review Date** | [Date — trigger upon material change or at scheduled review] |

---

## 9. Standard Contractual Clauses — Drafting and Execution

*This section prescribes the process for drafting, reviewing, negotiating, executing, and maintaining Standard Contractual Clauses as a transfer mechanism under the PDPA.*

### 9.1 SCC Framework

Where Standard Contractual Clauses are selected as the transfer mechanism, the Organization shall use SCCs that:

- Are approved or recognized under the PDPA or by the Commissioner;
- Cover all mandatory data protection obligations equivalent to those imposed by the PDPA on data controllers;
- Impose obligations directly enforceable by data subjects as third-party beneficiaries;
- Require the foreign recipient to notify the Organization of any local laws that may affect its ability to comply;
- Include provisions for data subject rights, security obligations, breach notification, audit rights, and data return or destruction upon termination.

> **Note:** Where the PDPC has published a prescribed form of SCC, that form shall be used. Where no prescribed form exists, the Organization shall use SCCs recommended by its external legal advisors and subject to DPO and Legal Counsel approval. In the interim, reference may be made to internationally recognized SCC frameworks (e.g., EU SCCs) adapted for PDPA compliance with appropriate local law advice.

### 9.2 SCC Modules

The appropriate SCC module shall be selected based on the roles of the parties:

| Transfer Scenario | SCC Module |
|---|---|
| Organization (Data Controller/Controller) → Foreign Processor | Controller-to-Processor module |
| Organization (Data Controller/Controller) → Foreign Controller | Controller-to-Controller module |
| Organization (Processor) → Foreign Subprocessor | Processor-to-Subprocessor module |

### 9.3 SCC Drafting and Negotiation Process

**Step 1 — Initiate SCC Requirement**

Upon confirmation that SCCs are the required transfer mechanism (see Section 7), the requesting Business Unit shall submit a **SCC Initiation Request** to the DPO, including the Transfer Mechanism Selection Form (Appendix C) and the relevant vendor contract details.

**Step 2 — Prepare SCC Draft**

The DPO, in coordination with Legal Counsel, shall:

- Select the appropriate SCC module;
- Complete all variable fields (Annex I — data transfer details; Annex II — technical and organizational security measures; Annex III — subprocessor list, if applicable);
- Review the TIA outcome and incorporate any required supplementary measures into the SCC or as an addendum.

**Step 3 — Negotiate with Foreign Recipient**

SCCs shall not be modified in their operative clauses in ways that undermine the protection afforded to data subjects. The following negotiation parameters apply:

| SCC Element | Negotiable? | Notes |
|---|---|---|
| Operative clauses (data subject rights, liability, remedies) | **No** | Must remain substantially intact |
| Annex I (data transfer description) | **Yes** | Customize to reflect actual data flows |
| Annex II (security measures) | **Yes** | Customize to reflect agreed security standards |
| Annex III (subprocessor list) | **Yes** | Must be kept current |
| Governing law and jurisdiction | **Limited** | Subject to PDPA requirements and DPO/Legal approval |
| Additional commercial terms | **Yes** | May be included in a separate schedule provided they do not conflict with SCCs |

**Step 4 — Legal Review and DPO Approval**

All completed SCCs shall be reviewed by Legal Counsel and approved by the DPO prior to execution. The DPO shall confirm that:

- The TIA outcome supports proceeding with the transfer;
- The SCC adequately addresses identified risks;
- The SCC has been correctly executed by both parties;
- The executed SCC has been filed in the **SCC Repository** (Appendix D).

**Step 5 — Execution**

SCCs shall be executed by the authorized signatories of both parties. The Organization's authorized signatory for SCC execution is: [Authorized Signatory Role, e.g., Chief Executive Officer / Chief Risk Officer / DPO — as designated by the Board].

**Step 6 — Registration (where required)**

Refer to Section 11 to determine whether the executed SCC must be registered with or notified to the Commissioner.

### 9.4 SCC Tracking Record

| Field | Details |
|---|---|
| **SCC Reference Number** | [SCC-YYYY-NNN] |
| **Transfer Reference Number** | [Ref from Cross-Border Transfer Register] |
| **Foreign Recipient Name** | [Entity Name] |
| **Destination Country** | [Country] |
| **SCC Module** | Controller-to-Processor / Controller-to-Controller / Other |
| **Date of Execution** | [Date] |
| **Executed by (Organization)** | [Name, Role] |
| **Executed by (Recipient)** | [Name, Role] |
| **TIA Reference** | [TIA-YYYY-NNN] |
| **SCC Stored At** | [SCC Repository location / reference] |
| **Expiry / Review Date** | [Date] |
| **Commissioner Notification Required?** | Yes / No |
| **Commissioner Notification Reference** | [Ref if applicable] |
| **DPO Approval** | [DPO Name and Date] |

---

## 10. Binding Corporate Rules — Assessment and Approval

*This section sets out the process for assessing, developing, and obtaining approval for Binding Corporate Rules as a transfer mechanism for intra-group transfers within the [Organization Name] group.*

### 10.1 When BCRs Apply

Binding Corporate Rules are applicable where:

- The Organization is part of a **multinational corporate group** and personal data is routinely transferred between group entities in different countries;
- The volume, frequency, or nature of intra-group transfers makes SCC-by-SCC execution impractical;
- The group seeks a single, consistent framework for all intra-group transfers.

BCRs shall not be used as the transfer mechanism for transfers to **third parties outside the group**.

### 10.2 BCR Development Process

*If [Organization Name] is developing or seeking approval for BCRs, the following phases apply. If the Organization is joining an existing group BCR programme, proceed to Section 10.4.*

#### Phase 1 — BCR Feasibility Assessment

The DPO shall conduct a feasibility assessment covering:

| Assessment Area | Questions |
|---|---|
| **Group Structure** | Which group entities will be covered by the BCRs? What is the structure of intra-group data flows? |
| **Lead Entity** | Which group entity will be designated as the BCR lead and will bear primary liability? |
| **Regulatory Authority** | Which supervisory authority (including the Malaysian Commissioner) will be involved in approval? |
| **Resource Requirements** | What resources are required to develop, implement, and maintain BCRs? |
| **Timeline** | What is the projected timeline for BCR approval? |

#### Phase 2 — BCR Documentation

BCR documentation shall include, at minimum:

- **BCR Policy** — A binding internal policy setting out the data protection principles, data subject rights, liability arrangements, and complaint mechanisms;
- **BCR Intra-Group Agreement** — A legally binding agreement between all group entities making the BCRs enforceable as a matter of contract;
- **Data Flow Annex** — A description of all intra-group data flows covered by the BCRs;
- **Security Measures Annex** — Technical and organizational security measures applicable across all group entities;
- **Training and Awareness Plan** — How BCR obligations will be communicated and trained across the group.

#### Phase 3 — BCR Submission for Approval

Submission to the Commissioner shall be made in accordance with such procedures as the PDPC prescribes. The DPO shall:

1. Prepare the BCR application package in the prescribed format;
2. Engage external legal advisors experienced in BCR submissions;
3. Coordinate with group-level DPO or Privacy Counsel on multi-jurisdictional aspects;
4. Submit the application to the Commissioner and manage the review process;
5. Respond to any queries or requests for additional information from the Commissioner;
6. Obtain written approval or acknowledgement from the Commissioner.

### 10.3 BCR Implementation

Upon approval, the DPO shall:

- Distribute the approved BCRs to all covered group entities;
- Ensure that the intra-group BCR agreement is executed by all covered entities;
- Establish training and awareness programmes for relevant staff;
- Incorporate BCR compliance into the ongoing monitoring framework (Section 12);
- Register the approved BCRs in the Cross-Border Transfer Register.

### 10.4 Joining an Existing Group BCR Programme

Where [Organization Name] is a subsidiary or affiliate joining an existing group BCR programme:

| Step | Action |
|---|---|
| 1 | Obtain a copy of the approved BCRs and the BCR intra-group agreement |
| 2 | Conduct a gap assessment to confirm that the Organization's practices align with BCR requirements |
| 3 | Execute the intra-group BCR agreement (adherence mechanism) |
| 4 | Notify the Commissioner as required |
| 5 | Implement any local adaptations required by PDPA |
| 6 | Register participation in the Cross-Border Transfer Register |

### 10.5 BCR Record

| Field | Details |
|---|---|
| **BCR Reference Number** | [BCR-YYYY-NNN] |
| **BCR Lead Entity** | [Entity Name] |
| **Covered Group Entities (Malaysia)** | [Entity Names] |
| **Commissioner Approval Reference** | [Reference Number / Date] |
| **Date of Organization's Adherence** | [Date] |
| **BCR Intra-Group Agreement Reference** | [Document Reference] |
| **BCR Review Schedule** | [Date of Next BCR Review] |
| **DPO Sign-off** | [DPO Name and Date] |

---

## 11. Registration and Notification to the Commissioner

*This section prescribes when and how [Organization Name] must register transfer arrangements with or provide notification to the Personal Data Protection Commissioner, as required under PDPA Section 129A and associated regulations.*

### 11.1 Notification and Registration Obligations

*The specific registration and notification requirements under PDPA Section 129A shall be confirmed with legal counsel as subsidiary legislation and PDPC guidance is published. The following framework reflects the general intent of the provision and shall be updated as PDPC guidance is issued.*

| Transfer Mechanism | Obligation | Timing |
|---|---|---|
| **Adequacy** | No registration required | N/A |
| **Standard Contractual Clauses** | Notification to Commissioner (where prescribed) | Prior to or upon commencement of transfer (as prescribed) |
| **Binding Corporate Rules** | Approval by Commissioner required before transfers commence | Prior to commencement of transfers |
| **Consent** | No Commissioner notification required as a matter of course; however, records of consent must be maintained | N/A (records maintained internally) |
| **Other exceptional grounds** | Legal advice required; notification may be required | As advised by Legal Counsel |

### 11.2 Notification Process (SCCs)

Where notification to the Commissioner is required in connection with SCC-based transfers, the DPO shall:

**Step 1** — Confirm the prescribed notification form and procedure from the PDPC's official guidance or regulations;

**Step 2** — Complete the notification form with the following information:

| Notification Element | Details |
|---|---|
| Organization's registration number (as data controller) | [Registration Reference] |
| Name and contact details of DPO | [DPO Details] |
| Nature and category of personal data transferred | [Data Categories] |
| Category of data subjects | [Data Subject Categories] |
| Name and country of foreign recipient | [Recipient Details] |
| Purpose of transfer | [Purpose] |
| Transfer mechanism | Standard Contractual Clauses |
| SCC reference and date of execution | [SCC Reference and Date] |
| TIA outcome | [TIA Reference and Outcome] |

**Step 3** — Submit the notification to the Commissioner through the prescribed channel (online portal, registered post, or as otherwise directed);

**Step 4** — Retain proof of submission and any acknowledgement from the Commissioner in the **Commissioner Notification File** (Appendix E);

**Step 5** — Record the notification in the **Cross-Border Transfer Register** (Appendix B).

### 11.3 BCR Approval Process

Refer to Section 10.2 (Phase 3) for the BCR Commissioner approval process. BCR approval must be obtained **before** intra-group transfers commence on the basis of BCRs.

### 11.4 Post-Notification Obligations

Following notification or registration, the Organization shall:

- Notify the Commissioner of any **material changes** to the transfer arrangement, including changes in data categories, recipient, destination country, or transfer mechanism, within [X] business days of the change;
- Notify the Commissioner upon **termination** of the transfer arrangement as required;
- Respond promptly to any **Commissioner enquiries** regarding notified or registered transfers;
- Maintain copies of all **Commissioner correspondence** in the Commissioner Notification File.

---

## 12. Ongoing Monitoring of Transfer Arrangements

*This section establishes the continuous oversight framework that [Organization Name] applies to all active cross-border transfer arrangements to ensure their ongoing effectiveness, legal sufficiency, and operational compliance.*

### 12.1 Monitoring Objectives

Ongoing monitoring of cross-border transfer arrangements is required to ensure:

- The factual circumstances of the transfer remain consistent with what was assessed and documented at inception;
- The legal framework of the destination country has not materially changed in ways that affect the effectiveness of the transfer mechanism;
- The foreign recipient continues to comply with its contractual obligations;
- Any new subprocessors engaged by the foreign recipient are identified and assessed;
- The Organization can respond promptly to data breaches or incidents involving transferred data;
- The Commissioner can be notified of material changes as required.

### 12.2 Monitoring Activities

#### 12.2.1 Periodic Review Schedule

| Monitoring Activity | Frequency | Responsible Party |
|---|---|---|
| Cross-Border Transfer Register review | **Quarterly** | DPO / Privacy Officer |
| TIA reassessment for SCC and BCR transfers | **Annual** (or upon material change) | DPO + Legal Counsel |
| Vendor compliance review (questionnaire / audit) | **Annual** | DPO + Vendor Risk Management |
| Review of foreign recipient's subprocessor list | **Annual** (or upon notification of change) | DPO |
| Review of adequacy list changes (First Schedule) | **Quarterly** | Privacy Officer |
| Commissioner notification status review | **Annual** | DPO |
| SCC and BCR documentation currency review | **Annual** | DPO + Legal Counsel |
| Data breach and incident report review | **Upon occurrence** | DPO + Incident Response Team |

#### 12.2.2 Trigger-Based Review

In addition to periodic reviews, an immediate reassessment shall be triggered by:

- **Legal developments** in the destination country affecting data protection or government access rights;
- **Regulatory guidance** from the PDPC or other relevant authority regarding the transfer mechanism or destination country;
- **Data breach or security incident** involving the foreign recipient or the transferred data;
- **Change in the foreign recipient's subprocessors** that introduces new countries or entities;
- **Change in the scope of the transfer** (new data categories, purposes, or data subjects);
- **Contractual dispute or termination notice** from the foreign recipient;
- **Merger, acquisition, or insolvency** of the foreign recipient;
- **Complaint from a data subject** regarding the transfer.

#### 12.2.3 Vendor Compliance Review

Annual vendor compliance reviews for foreign processors and subprocessors shall include:

| Review Element | Method |
|---|---|
| Confirmation of continued compliance with SCCs/BCRs | Written self-certification or audit questionnaire |
| Review of security certifications (ISO 27001, SOC 2, etc.) | Request current certificates and review audit reports |
| Review of data breach and incident history | Request disclosure of any incidents affecting Organization data |
| Review of subprocessor changes | Request updated subprocessor list and assess new entries |
| Review of data residency and processing location | Confirm no unauthorized changes to data processing locations |
| Review of DPA currency | Confirm DPA remains current and reflects actual processing |

### 12.3 Monitoring Outcomes and Escalation

| Monitoring Outcome | Action |
|---|---|
| No material issues identified | Update monitoring log; schedule next review |
| Minor compliance gaps identified | Issue remediation notice to vendor; set remediation deadline; follow up |
| TIA reassessment indicates elevated risk | Implement supplementary measures or suspend transfer pending further review |
| Adequacy status of destination country revoked | Immediately identify alternative mechanism; if not available, suspend transfer |
| Material SCC/BCR breach by foreign recipient | Invoke contractual remedies; notify Commissioner if required; consider suspension or termination |
| Data breach involving transferred data | Activate Incident Response Plan; notify Commissioner within prescribed timeframe; notify data subjects as required |
| Transfer arrangement is no longer necessary | Initiate transfer termination; ensure data return or destruction by foreign recipient; update Register |

### 12.4 Transfer Termination

Upon termination of any cross-border transfer arrangement, the DPO shall ensure:

1. Written notice of termination is provided to the foreign recipient in accordance with the SCC or DPA terms;
2. The foreign recipient is required to **return or securely destroy** all personal data within [X] days of termination;
3. Confirmation of data return or destruction is obtained in writing;
4. The Commissioner is notified of the termination where required;
5. The Cross-Border Transfer Register is updated to reflect the termination;
6. All records relating to the terminated transfer are retained for a minimum of [X] years in accordance with the Records Management Policy.

---

## 13. Roles and Responsibilities

*This section defines the roles and responsibilities of key stakeholders involved in the cross-border transfer assessment and approval process. The RACI matrix indicates who is Responsible (R), Accountable (A), Consulted (C), or Informed (I) for each key activity.*

### 13.1 Key Roles

| Role | Description |
|---|---|
| **Data Protection Officer (DPO)** | Overall accountability for PDPA compliance; approves all cross-border transfer assessments; maintains the Transfer Register; liaises with the Commissioner |
| **Privacy Officer / DPO Delegate** | Performs day-to-day identification, TIA, and monitoring activities under the DPO's supervision |
| **Legal Counsel (Internal / External)** | Provides legal advice on PDPA interpretation; reviews and advises on SCCs and BCRs; advises on TIA legal framework assessments |
| **Business Unit (BU) Head** | Initiates cross-border transfer requests for their business area; ensures BU staff comply with this procedure |
| **IT / Technology Department** | Provides technical information on data flows, systems, and security measures; implements technical supplementary measures |
| **Vendor Risk Management (VRM)** | Conducts due diligence on foreign vendors and processors; performs annual vendor compliance reviews |
| **Information Security Officer (ISO)** | Advises on technical and organizational security measures; reviews security annexes to SCCs/BCRs |
| **Procurement / Contract Management** | Manages SCC and DPA execution workflow; maintains contract repository |
| **Senior Management / Executive Committee** | Receives escalation reports; approves high-risk or novel transfer arrangements; approves BCR programme |
| **Board / Audit Committee** | Receives periodic reporting on cross-border transfer compliance posture |

### 13.2 RACI Matrix

| Activity | DPO | Privacy Officer | Legal Counsel | BU Head | IT Dept | VRM | ISO | Procurement | Senior Mgmt |
|---|---|---|---|---|---|---|---|---|---|
| Identify cross-border transfer triggers | A | R | I | R | C | C | I | I | I |
| Complete data flow mapping | A | R | I | C | R | I | C | I | I |
| Cloud/SaaS transfer identification | A | R | I | C | R | C | C | C | I |
| Adequacy determination check | A | R | C | I | I | I | I | I | I |
| Transfer mechanism selection | A | C | R | I | I | I | I | I | I |
| TIA — Phase 1 & 2 (legal framework) | A | C | R | I | I | I | I | I | I |
| TIA — Phase 3 & 4 (practical effectiveness) | A | R | R | I | C | I | C | I | I |
| TIA approval | A/R | C | C | I | I | I | I | I | I |
| SCC drafting and negotiation | A | C | R | I | I | I | I | R | I |
| SCC review and approval | A/R | C | C | I | I | I | I | C | I |
| SCC execution | A | I | C | I | I | I | I | R | C |
| BCR feasibility assessment | A | R | C | I | I | I | I | I | C |
| BCR development and submission | A | R | R | I | C | I | C | I | A |
| Commissioner notification/registration | A/R | R | C | I | I | I | I | I | I |
| Cross-Border Transfer Register maintenance | A/R | R | I | I | I | I | I | I | I |
| Periodic TIA reassessment | A | R | C | I | I | I | I | I | I |
| Annual vendor compliance review | A | C | I | I | I | R | C | I | I |
| Monitoring — trigger-based review | A | R | C | I | C | C | C | I | I |
| Escalation of high-risk transfers | A | R | C | C | I | I | I | I | R |
| Transfer termination management | A | R | C | C | R | C | C | R | I |
| Board/Committee reporting | A/R | C | I | I | I | I | I | I | R |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 14. Review and Approval

### 14.1 Review Schedule

This procedure shall be reviewed:

- **Annually**, on or before the Next Review Date stated in the document header;
- **Immediately**, upon any material change in PDPA legislation, PDPC guidance, or BNM requirements affecting cross-border data transfers;
- **Immediately**, upon a significant data breach or enforcement action involving cross-border transfer of personal data;
- **Upon organizational change** materially affecting data flows outside Malaysia.

Reviews shall be initiated by the DPO and completed with Legal Counsel input prior to re-approval.

### 14.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [DPO Name] | _________________ | [Date] |
| Chief Risk Officer | [CRO Name] | _________________ | [Date] |
| Chief Compliance Officer | [CCO Name] | _________________ | [Date] |
| Head of Legal | [Legal Head Name] | _________________ | [Date] |
| Chief Executive Officer | [CEO Name] | _________________ | [Date] |

---

## 15. References

| Reference | Description |
|---|---|
| **PDPA, Section 129A** | Prohibition on transfer of personal data outside Malaysia; conditions and mechanisms for lawful transfer |
| **PDPA, Section 4** | Definitions including personal data, sensitive personal data, data controller, data processor |
| **PDPA, Section 6** | General principle — processing of personal data only with consent or applicable exception |
| **PDPA, Section 8** | Retention principle — personal data not to be retained longer than necessary |
| **PDPA, Section 10** | Security principle — practical steps to protect personal data from loss, misuse, modification, unauthorized access |
| **PDPA, Section 40** | Processing of sensitive personal data — heightened requirements |
| **PDPA First Schedule** | List of places outside Malaysia to which personal data may be transferred on adequacy basis |
| **Personal Data Protection (Class of Data Controllers) Order 2013** | Sectors required to register as data controllers |
| **Personal Data Protection Regulations 2013** | Prescribed procedures and forms under the PDPA |
| **BNM RMiT Policy Document** | Risk Management in Technology — cloud and outsourcing requirements for financial institutions |
| **BNM Outsourcing Policy Document** | Oversight requirements for outsourcing arrangements including offshore |
| **[PDPC Code of Practice — Financial Sector (if issued)]** | Sector-specific guidance on personal data handling and transfers |
| **ISO/IEC 27001:2022** | Information security management standard — relevant to security annexes in SCCs |
| **ISO/IEC 27701:2019** | Privacy information management standard — relevant to privacy controls for cross-border transfers |

---

## 16. Appendices

### Appendix A — Cloud Transfer Identification Worksheet

*Complete one worksheet per cloud or SaaS vendor where a potential cross-border transfer has been identified.*

| Field | Details |
|---|---|
| **Vendor Name** | [Vendor Name] |
| **Service Description** | [Description of SaaS/cloud service] |
| **Business Unit Requesting** | [BU Name] |
| **Personal Data Categories Involved** | [List categories] |
| **Data Subject Categories** | [List categories] |
| **Vendor Data Centre Locations** | [List countries] |
| **Malaysia / APAC Residency Option Available?** | Yes / No / Unknown |
| **Malaysia Residency Selected?** | Yes / No / N/A |
| **Vendor's Published Subprocessor List (URL / Reference)** | [Reference] |
| **Subprocessors Located Outside Malaysia** | [List entities and countries] |
| **Remote Access by Vendor Personnel Outside Malaysia?** | Yes / No / Unknown |
| **Countries from which Remote Access May Occur** | [List countries] |
| **Vendor DPA / Data Processing Agreement in Place?** | Yes / No — [Reference if yes] |
| **Transfer Confirmed?** | Yes / No / Uncertain |
| **Completed By** | [Name, Role, Date] |
| **Reviewed By (DPO)** | [DPO Name, Date] |

---

### Appendix B — Cross-Border Transfer Register

*The DPO shall maintain this register as a live record of all active, suspended, and terminated cross-border transfer arrangements. The register shall be reviewed quarterly and updated upon any material change.*

| Field | Entry |
|---|---|
| **Transfer Reference Number** | [CBT-YYYY-NNN] |
| **Status** | Active / Suspended / Terminated |
| **Business Unit** | [BU Name] |
| **Foreign Recipient Name** | [Entity Name] |
| **Recipient Country / Territory** | [Country] |
| **Transfer Category** | Intra-group / Third-party processor / Third-party controller |
| **Personal Data Categories** | [List] |
| **Data Subject Categories** | [List] |
| **Purpose of Transfer** | [Purpose] |
| **Transfer Method** | [API / SFTP / Cloud / Email / Other] |
| **Frequency** | [Continuous / Daily / Weekly / Ad hoc] |
| **Adequacy Check Outcome** | Listed / Not listed |
| **Transfer Mechanism** | Adequacy / SCC / BCR / Consent |
| **SCC/BCR Reference** | [Reference if applicable] |
| **TIA Reference** | [TIA-YYYY-NNN if applicable] |
| **TIA Outcome** | Low / Medium / High / N/A |
| **Commissioner Notification Reference** | [Reference if applicable] |
| **Notification Date** | [Date if applicable] |
| **Date Transfer Commenced** | [Date] |
| **Date Transfer Terminated** | [Date if applicable] |
| **Next Review Date** | [Date] |
| **DPO Sign-off** | [DPO Name and Date] |

---

### Appendix C — Transfer Mechanism Selection Form

*Complete one form per identified cross-border transfer prior to execution of any contractual arrangement. This form must be approved by the DPO before the transfer commences.*

**Part 1 — Transfer Details**

| Field | Details |
|---|---|
| **Transfer Reference Number** | [CBT-YYYY-NNN] |
| **Business Unit** | [BU Name] |
| **Foreign Recipient** | [Entity Name and Country] |
| **Data Categories** | [List] |
| **Purpose** | [Business purpose] |
| **Anticipated Start Date** | [Date] |

**Part 2 — Adequacy Check**

| Field | Details |
|---|---|
| **Destination Country** | [Country] |
| **Listed in First Schedule?** | Yes / No / Uncertain |
| **Date Checked** | [Date] |
| **Source Consulted** | [Source] |

**Part 3 — Mechanism Selection**

| Field | Details |
|---|---|
| **Selected Transfer Mechanism** | Adequacy / SCC / BCR / Consent / Other |
| **Rationale** | [Explanation] |
| **TIA Required?** | Yes / No |
| **TIA Outcome (if applicable)** | [TIA Reference and outcome] |
| **Supplementary Measures Required?** | Yes / No |
| **Supplementary Measures (if applicable)** | [List measures] |
| **Commissioner Notification Required?** | Yes / No |

**Part 4 — Approvals**

| Role | Name | Date | Signature |
|---|---|---|---|
| Prepared by | [Name, Role] | [Date] | _________________ |
| Legal Counsel Review | [Name] | [Date] | _________________ |
| DPO Approval | [DPO Name] | [Date] | _________________ |

---

### Appendix D — SCC Repository Index

*The SCC Repository Index provides a searchable index of all executed Standard Contractual Clauses. Original executed copies are stored in [Document Management System / Location].*

| SCC Reference | Transfer Reference | Recipient Name | Country | Module | Date Executed | Expiry / Review Date | Storage Location |
|---|---|---|---|---|---|---|---|
| SCC-[YYYY]-[NNN] | CBT-[YYYY]-[NNN] | [Recipient] | [Country] | [Module] | [Date] | [Date] | [Location] |

---

### Appendix E — Commissioner Notification File Index

*The Commissioner Notification File Index tracks all notifications and registrations made to the Personal Data Protection Commissioner in connection with cross-border transfers.*

| Notification Reference | Transfer Reference | Mechanism | Notification Type | Date Submitted | Commissioner Reference | Status | Correspondence Location |
|---|---|---|---|---|---|---|---|
| NOTIF-[YYYY]-[NNN] | CBT-[YYYY]-[NNN] | SCC / BCR | Notification / Registration | [Date] | [Commissioner Ref] | Submitted / Acknowledged / Queried | [Location] |

---

### Appendix F — TIA Register Index

*The TIA Register Index provides a searchable log of all completed Transfer Impact Assessments. Full TIA records are stored in [Document Management System / Location].*

| TIA Reference | Transfer Reference | Recipient | Country | Mechanism Assessed | Date Completed | Outcome | Next Review Date | Storage Location |
|---|---|---|---|---|---|---|---|---|
| TIA-[YYYY]-[NNN] | CBT-[YYYY]-[NNN] | [Recipient] | [Country] | SCC / BCR | [Date] | Low / Medium / High | [Date] | [Location] |

---

### Appendix G — Annual Transfer Review Checklist

*The DPO shall complete this checklist annually to confirm that all cross-border transfer arrangements remain compliant.*

| Review Item | Completed | Date | Notes |
|---|---|---|---|
| Cross-Border Transfer Register reviewed and updated | ☐ | [Date] | |
| First Schedule (adequacy list) changes reviewed | ☐ | [Date] | |
| All active TIAs reassessed (or reassessment confirmed as not required) | ☐ | [Date] | |
| All SCCs reviewed for currency and continued effectiveness | ☐ | [Date] | |
| BCR programme reviewed (if applicable) | ☐ | [Date] | |
| Annual vendor compliance questionnaires issued and responses reviewed | ☐ | [Date] | |
| Subprocessor lists reviewed for all active processors | ☐ | [Date] | |
| Commissioner notification status confirmed | ☐ | [Date] | |
| Data breach and incident log reviewed for transfer-related events | ☐ | [Date] | |
| This procedure reviewed and updated as required | ☐ | [Date] | |
| Review findings reported to Senior Management | ☐ | [Date] | |
| DPO sign-off on annual review | ☐ | [Date] | |

**Annual Review Sign-off**

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [DPO Name] | _________________ | [Date] |
| Chief Compliance Officer | [CCO Name] | _________________ | [Date] |

---

### Appendix H — Glossary of Transfer Mechanism Terminology

| Term | Definition |
|---|---|
| **Adequacy** | Recognition by the Malaysian Minister that a country or territory provides an adequate level of personal data protection, enabling transfer without additional safeguards. |
| **Standard Contractual Clauses (SCCs)** | Pre-approved contractual terms that impose PDPA-equivalent obligations on the foreign recipient, enabling transfer where adequacy does not apply. |
| **Binding Corporate Rules (BCRs)** | Approved internal rules governing intra-group transfers across multinational organizations, providing a single framework for group-wide compliance. |
| **Consent** | Freely given, specific, informed, and unambiguous agreement by the data subject to the transfer of their personal data outside Malaysia. |
| **Transfer Impact Assessment (TIA)** | A structured evaluation of whether the legal and practical conditions in the destination country undermine the effectiveness of the chosen transfer mechanism. |
| **Supplementary Measures** | Technical (e.g., encryption), contractual (e.g., enhanced audit rights), or organizational (e.g., access controls) measures adopted to address residual risks identified in a TIA. |
| **Data Processing Agreement (DPA)** | A contract between a data controller and a data processor setting out the terms on which the processor may process personal data on behalf of the data controller. |
| **Subprocessor** | A third party engaged by a processor to carry out specific processing activities on behalf of the data controller. |
| **Commissioner** | The Personal Data Protection Commissioner of Malaysia, responsible for enforcement and administration of the PDPA. |

---

*End of Document*

---

**Document Control Footer**

| Field | Details |
|---|---|
| **Document Title** | Cross-Border Transfer Assessment Procedure |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Organization** | [Organization Name] |
| **Last Updated** | [Date] |

*This document is subject to annual review. Printed copies are uncontrolled. For the current version, refer to [Document Management System].*