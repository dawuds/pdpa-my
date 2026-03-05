# Data Protection Impact Assessment (DPIA) Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By], [Title] |

**Organization:** [Organization Name]
**Department:** [Department Name]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [DPIA Reference, Project Name, and Date](#2-dpia-reference-project-name-and-date)
3. [Processing Activity Description and Necessity Assessment](#3-processing-activity-description-and-necessity-assessment)
4. [Privacy Risks Identified and Risk Ratings](#4-privacy-risks-identified-and-risk-ratings)
5. [Mitigation Measures Recommended and Implemented](#5-mitigation-measures-recommended-and-implemented)
6. [Residual Risk Assessment After Mitigation](#6-residual-risk-assessment-after-mitigation)
7. [DPO Review Comments and Recommendations](#7-dpo-review-comments-and-recommendations)
8. [Approval Decision and Approver Details](#8-approval-decision-and-approver-details)
9. [Review Schedule and Last Review Date](#9-review-schedule-and-last-review-date)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Data Protection Impact Assessment (DPIA) Record documents the systematic evaluation of privacy risks associated with personal data processing activities conducted by [Organization Name]. The DPIA process supports compliance with the **Personal Data Protection Act 2010 (PDPA)** and embeds privacy by design principles into operational and project activities involving personal data.

This record serves as formal evidence that [Organization Name] has:

- Assessed the nature, scope, context, and purpose of the relevant processing activity
- Identified and evaluated privacy risks to data subjects
- Implemented proportionate mitigation measures prior to commencement of processing
- Obtained appropriate review and approval from the Data Protection Officer (DPO) and senior management

### 1.2 Scope

This DPIA Record applies to all processing activities undertaken by [Organization Name] — including subsidiaries, branches, and third-party data processors acting on the organization's behalf — where the processing is likely to result in a high risk to the rights and interests of data subjects. Specifically, a DPIA is triggered when any of the following conditions are met:

- Systematic and extensive profiling of individuals, including automated decision-making with significant effects
- Large-scale processing of sensitive personal data as defined under PDPA s6
- Systematic monitoring of publicly accessible areas or digital behaviour
- Processing of personal data of vulnerable data subjects (e.g., minors, employees under direct supervision)
- Introduction of new technologies or significant changes to existing processing systems
- Any processing activity flagged by the DPO or Compliance function as requiring assessment

### 1.3 Regulatory Basis

This document is maintained in accordance with the following provisions of the Personal Data Protection Act 2010:

| PDPA Section | Requirement |
|---|---|
| **Section 5** — General Principle | Personal data shall not be processed unless the data subject has given consent or another lawful basis applies; processing must be adequate, relevant, and not excessive |
| **Section 6** — Sensitive Personal Data | Explicit consent and heightened protections are required for processing sensitive categories of personal data |
| **Section 9** — Security Principle | Data users must take practical steps to protect personal data from loss, misuse, modification, unauthorised or accidental access or disclosure, alteration, or destruction |
| **Section 29** — Data User's Right | Establishes obligations and accountability of data users in governing personal data processing activities |

---

## 2. DPIA Reference, Project Name, and Date

*This section establishes the unique identity of the DPIA record and the project or processing activity to which it relates. Complete all fields prior to commencing the assessment.*

### 2.1 DPIA Identification

| Field | Details |
|---|---|
| **DPIA Reference Number** | DPIA-[YYYY]-[Sequential Number] *(e.g., DPIA-2025-007)* |
| **Project / Initiative Name** | [Full Name of Project or Processing Activity] |
| **Project Code / System ID** | [Internal Project Code or IT System Reference] |
| **DPIA Trigger** | ☐ New project &nbsp;&nbsp; ☐ New technology &nbsp;&nbsp; ☐ Material change &nbsp;&nbsp; ☐ DPO direction &nbsp;&nbsp; ☐ Regulatory requirement |
| **Date DPIA Initiated** | [DD MMM YYYY] |
| **Date DPIA Completed** | [DD MMM YYYY] |
| **Assessment Lead** | [Name, Title, Department] |
| **Business Owner** | [Name, Title, Department] |
| **DPO Assigned** | [Name] |
| **Status** | ☐ Draft &nbsp;&nbsp; ☐ Under DPO Review &nbsp;&nbsp; ☐ Approved &nbsp;&nbsp; ☐ Conditionally Approved &nbsp;&nbsp; ☐ Rejected |

### 2.2 Related Documents

| Document | Reference | Version |
|---|---|---|
| Project Charter / Business Requirements | [Reference Number] | [Version] |
| Data Flow Diagram | [Reference Number] | [Version] |
| Information Asset Register Entry | [Reference Number] | [Version] |
| Vendor / Processor Agreement | [Reference Number] | [Version] |
| [Other Related Document] | [Reference Number] | [Version] |

---

## 3. Processing Activity Description and Necessity Assessment

*Describe the personal data processing activity in sufficient detail for a risk assessment to be conducted. Articulate the lawful basis and demonstrate that the processing is necessary and proportionate to its stated purpose.*

### 3.1 Description of the Processing Activity

**Overview:**

[Provide a clear, plain-language description of the processing activity. Include the business context, the problem being solved, and how personal data will be used. Minimum 3–5 sentences.]

**Data Subjects:**

| Data Subject Category | Estimated Volume | Vulnerability Considerations |
|---|---|---|
| [e.g., Retail customers] | [e.g., ~50,000] | [e.g., None identified] |
| [e.g., Employees] | [e.g., ~1,200] | [e.g., Employment relationship — power imbalance] |
| [e.g., Minors (under 18)] | [e.g., ~500] | [e.g., Parental consent required] |
| [Add rows as needed] | | |

**Categories of Personal Data:**

| Data Element | Data Category | Sensitive? (PDPA s6) | Source | Retention Period |
|---|---|---|---|---|
| [e.g., Full Name] | Identity | No | [e.g., Customer onboarding form] | [e.g., 7 years post-relationship] |
| [e.g., MyKad Number] | Identity | No | [e.g., eKYC system] | [e.g., 7 years post-relationship] |
| [e.g., Health information] | Health | **Yes** | [e.g., Insurance claim form] | [e.g., 10 years] |
| [e.g., Financial data] | Financial | No | [e.g., Core banking system] | [e.g., 7 years] |
| [Add rows as needed] | | | | |

**Processing Operations:**

*List each processing operation performed on the personal data (e.g., collection, storage, use, disclosure, transfer, erasure).*

- **Collection:** [Describe how data is collected — channel, method, timing]
- **Storage:** [Describe where data is stored — system name, location, cloud/on-premise, encryption]
- **Use / Analysis:** [Describe how data is used internally — purpose, automated processing, profiling]
- **Disclosure:** [Identify any third parties to whom data is disclosed — name, role, jurisdiction]
- **Transfer:** [Cross-border transfers, if any — destination country, adequacy basis]
- **Erasure / Archiving:** [Describe end-of-life handling]

### 3.2 Necessity and Proportionality Assessment

*Demonstrate that the processing is necessary for the stated purpose and that less privacy-invasive alternatives were considered.*

**Stated Purpose(s) of Processing:**

1. [Primary purpose — e.g., Credit risk assessment for loan application processing]
2. [Secondary purpose, if any — e.g., Regulatory reporting to Bank Negara Malaysia]
3. [Additional purpose, if any]

**Lawful Basis for Processing (PDPA s5):**

| Purpose | Lawful Basis | Supporting Evidence |
|---|---|---|
| [Purpose 1] | ☐ Consent &nbsp; ☐ Contract &nbsp; ☐ Legal obligation &nbsp; ☐ Vital interests &nbsp; ☐ Legitimate interests | [Consent form reference / Contract clause / Regulatory citation] |
| [Purpose 2] | ☐ Consent &nbsp; ☐ Contract &nbsp; ☐ Legal obligation &nbsp; ☐ Vital interests &nbsp; ☐ Legitimate interests | [Reference] |

**Proportionality Justification:**

| Question | Response |
|---|---|
| Is the data volume the minimum necessary to achieve the purpose? | [Yes / No — Explain] |
| Were less privacy-invasive alternatives considered? | [Yes / No — List alternatives considered and reasons for rejection] |
| Is the retention period the minimum necessary? | [Yes / No — Cite regulatory/legal basis for retention period] |
| Is the processing limited to the declared purpose? | [Yes / No — Describe safeguards preventing purpose creep] |
| Have data subjects been informed of the processing? | [Yes / No — Reference Privacy Notice version and date] |

---

## 4. Privacy Risks Identified and Risk Ratings

*Identify all privacy risks associated with the processing activity. For each risk, assess the likelihood and severity of impact on data subjects. Use the risk rating matrix below.*

### 4.1 Risk Rating Methodology

**Likelihood Scale:**

| Rating | Score | Description |
|---|---|---|
| Rare | 1 | Unlikely to occur under normal operating conditions |
| Unlikely | 2 | Could occur but not expected |
| Possible | 3 | May occur occasionally |
| Likely | 4 | Expected to occur in most circumstances |
| Almost Certain | 5 | Expected to occur regularly |

**Severity Scale:**

| Rating | Score | Description |
|---|---|---|
| Negligible | 1 | Minimal or no impact on data subjects |
| Minor | 2 | Limited impact; data subjects may experience inconvenience |
| Moderate | 3 | Significant impact; potential for distress, discrimination, or financial loss |
| Major | 4 | Serious impact; reputational damage, legal consequences, or substantial financial harm |
| Critical | 5 | Severe or irreversible harm to data subjects, including identity theft or safety risk |

**Risk Rating = Likelihood Score × Severity Score**

| Risk Rating | Score Range | Action Required |
|---|---|---|
| **Low** | 1–5 | Monitor; standard controls apply |
| **Medium** | 6–11 | Mitigate; additional controls required before processing |
| **High** | 12–19 | Mitigate; DPO sign-off required before processing |
| **Critical** | 20–25 | Do not process; escalate to Senior Management and DPO |

### 4.2 Privacy Risk Register

*Complete one row per identified risk. Additional rows should be added as required.*

| Risk ID | Risk Description | Risk Category | Likelihood (1–5) | Severity (1–5) | Inherent Risk Rating | Risk Level |
|---|---|---|---|---|---|---|
| R-01 | [e.g., Unauthorised access to personal data due to inadequate access controls] | Security | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| R-02 | [e.g., Processing of personal data beyond the declared purpose] | Purpose Limitation | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| R-03 | [e.g., Excessive retention of personal data beyond legal requirement] | Data Minimisation | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| R-04 | [e.g., Inadequate disclosure to data subjects at point of collection] | Transparency | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| R-05 | [e.g., Cross-border transfer to jurisdiction without adequate protections] | Data Transfer | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| R-06 | [e.g., Third-party processor does not meet PDPA security standards] | Processor Oversight | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| R-07 | [e.g., Automated decision-making produces discriminatory outcomes] | Fairness / Profiling | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] |
| [Add further risks as identified] | | | | | | |

---

## 5. Mitigation Measures Recommended and Implemented

*For each risk identified in Section 4, specify the mitigation measures recommended by the assessment team and confirm implementation status. Mitigation measures must reduce the residual risk to an acceptable level before processing commences.*

### 5.1 Mitigation Measures

| Risk ID | Risk Description | Mitigation Measure | Control Type | Responsible Party | Target Implementation Date | Implementation Status | Evidence Reference |
|---|---|---|---|---|---|---|---|
| R-01 | [Risk description] | [e.g., Implement role-based access control (RBAC) restricting data access to authorised personnel only] | Preventive | [e.g., IT Security Team] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [e.g., IT Change Request #CR-1234] |
| R-02 | [Risk description] | [e.g., Implement system-enforced purpose binding; log all data access with purpose code] | Detective | [e.g., IT Architecture] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [Reference] |
| R-03 | [Risk description] | [e.g., Configure automated data deletion workflow aligned to approved retention schedule] | Preventive | [e.g., Data Management Team] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [Reference] |
| R-04 | [Risk description] | [e.g., Update Privacy Notice to explicitly disclose processing activity; obtain fresh consent where required] | Preventive | [e.g., Legal / Compliance] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [Reference] |
| R-05 | [Risk description] | [e.g., Execute standard contractual clauses with overseas recipient; obtain DPO approval for transfer] | Preventive | [e.g., Legal] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [Reference] |
| R-06 | [Risk description] | [e.g., Conduct third-party security assessment; include PDPA obligations in data processing agreement] | Preventive | [e.g., Vendor Management / Legal] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [Reference] |
| R-07 | [Risk description] | [e.g., Implement human review checkpoint for all automated adverse decisions; establish appeal mechanism] | Corrective | [e.g., Business Operations] | [DD MMM YYYY] | ☐ Planned &nbsp; ☐ In Progress &nbsp; ☐ Implemented | [Reference] |
| [Add rows as required] | | | | | | | |

### 5.2 Outstanding Actions

*List any mitigation measures that have not yet been fully implemented at the time of DPIA approval. Conditional approval may be granted subject to completion of outstanding actions.*

| Action ID | Outstanding Action | Responsible Party | Deadline | Escalation Point if Overdue |
|---|---|---|---|---|
| OA-01 | [Description of outstanding action] | [Name / Team] | [DD MMM YYYY] | [Name / Title] |
| OA-02 | [Description of outstanding action] | [Name / Team] | [DD MMM YYYY] | [Name / Title] |
| [Add rows as required] | | | | |

---

## 6. Residual Risk Assessment After Mitigation

*After applying all planned mitigation measures, re-assess each risk to determine the residual risk level. The DPO must be satisfied that residual risks are acceptable before granting approval.*

### 6.1 Residual Risk Summary

| Risk ID | Risk Description | Inherent Risk Level | Mitigation Applied | Residual Likelihood (1–5) | Residual Severity (1–5) | Residual Risk Score | Residual Risk Level | Accepted By |
|---|---|---|---|---|---|---|---|---|
| R-01 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| R-02 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| R-03 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| R-04 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| R-05 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| R-06 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| R-07 | [Risk description] | [High/Medium/Low] | [Summary of control] | [Score] | [Score] | [Score] | [Low/Medium/High/Critical] | [DPO / Business Owner] |
| [Add rows] | | | | | | | | |

### 6.2 Overall Residual Risk Determination

| Field | Details |
|---|---|
| **Overall Residual Risk Level** | ☐ Low &nbsp;&nbsp; ☐ Medium &nbsp;&nbsp; ☐ High &nbsp;&nbsp; ☐ Critical |
| **Risk Acceptance Rationale** | [Explain why the residual risk level is acceptable and proportionate to the processing purpose] |
| **Conditions of Acceptance** | [List any specific conditions that must be maintained for the risk acceptance to remain valid — e.g., annual penetration testing, quarterly access reviews] |
| **Unacceptable Residual Risks** | [Identify any risks that could not be reduced to an acceptable level and describe the corresponding processing restriction or prohibition] |

---

## 7. DPO Review Comments and Recommendations

*This section is completed exclusively by the Data Protection Officer. The DPO must independently review the completed DPIA and record substantive comments, advisory notes, and any conditions attached to the recommendation.*

### 7.1 DPO Review Summary

**DPO Name:** [Full Name]
**DPO Review Date:** [DD MMM YYYY]
**Review Reference:** [DPO Review Reference Number]

### 7.2 DPO Assessment of Processing Necessity

*The DPO records their independent assessment of whether the processing activity is necessary and proportionate.*

[DPO to complete: Provide a concise assessment of the lawful basis declared by the business, the proportionality of the data collected, and the adequacy of data subject notifications.]

### 7.3 DPO Assessment of Risk Identification

*The DPO records their assessment of the completeness and accuracy of the risk register.*

[DPO to complete: Comment on whether all material privacy risks have been identified, whether the risk ratings are reasonable, and whether any additional risks should be incorporated.]

### 7.4 DPO Assessment of Mitigation Adequacy

*The DPO records their view on whether the mitigation measures are appropriate and sufficient.*

[DPO to complete: Comment on the adequacy of proposed controls, any concerns regarding implementation timelines, and whether additional or alternative measures are recommended.]

### 7.5 DPO Recommendations

*Record all specific recommendations made by the DPO.*

| Recommendation ID | Recommendation | Priority | Target Resolution Date | Status |
|---|---|---|---|---|
| DPO-R-01 | [e.g., Strengthen consent language on the customer onboarding form to explicitly reference automated profiling] | High | [DD MMM YYYY] | [Open / Resolved] |
| DPO-R-02 | [e.g., Conduct a third-party VAPT on the processing system prior to go-live] | Medium | [DD MMM YYYY] | [Open / Resolved] |
| DPO-R-03 | [Additional recommendation] | [Priority] | [DD MMM YYYY] | [Open / Resolved] |
| [Add rows as required] | | | | |

### 7.6 DPO Overall Recommendation

| Field | Details |
|---|---|
| **DPO Recommendation** | ☐ Recommend Approval &nbsp;&nbsp; ☐ Recommend Conditional Approval &nbsp;&nbsp; ☐ Recommend Rejection |
| **Conditions (if Conditional)** | [List specific conditions that must be met before or during processing] |
| **Basis for Rejection (if applicable)** | [Explain the grounds for rejection — include reference to PDPA sections engaged] |
| **Additional Notes** | [Any other observations or advisory notes for management] |

**DPO Signature:** _________________________________
**Date:** [DD MMM YYYY]

---

## 8. Approval Decision and Approver Details

*The final approval decision is recorded in this section. The approval authority is determined by the residual risk level of the processing activity.*

### 8.1 Approval Authority Matrix

| Residual Risk Level | Required Approval Authority |
|---|---|
| Low | Business Owner |
| Medium | Business Owner + DPO |
| High | DPO + Chief Compliance Officer / Chief Risk Officer |
| Critical | DPO + Chief Executive Officer / Board Risk Committee |

### 8.2 Approval Decision

| Field | Details |
|---|---|
| **Decision** | ☐ Approved &nbsp;&nbsp; ☐ Conditionally Approved &nbsp;&nbsp; ☐ Deferred (pending mitigation) &nbsp;&nbsp; ☐ Rejected |
| **Decision Date** | [DD MMM YYYY] |
| **Effective Date of Processing** | [DD MMM YYYY — the date from which processing is authorised to commence] |
| **Conditions of Approval** | [List any conditions attached to the approval, with completion deadlines] |
| **Restrictions on Processing** | [List any restrictions on the scope, volume, or methods of processing] |
| **Grounds for Rejection (if applicable)** | [Cite PDPA provisions engaged and the specific risk(s) that cannot be mitigated] |

### 8.3 Approver Details

| Role | Name | Signature | Date |
|---|---|---|---|
| Business Owner | [Full Name], [Title] | _________________________________ | [DD MMM YYYY] |
| Data Protection Officer | [Full Name] | _________________________________ | [DD MMM YYYY] |
| Chief Compliance Officer | [Full Name] | _________________________________ | [DD MMM YYYY] |
| Chief Risk Officer | [Full Name] | _________________________________ | [DD MMM YYYY] |
| Chief Executive Officer *(if required)* | [Full Name] | _________________________________ | [DD MMM YYYY] |

---

## 9. Review Schedule and Last Review Date

*DPIA Records must be reviewed whenever there is a material change to the processing activity, and at intervals no greater than those specified below. The DPO is responsible for determining whether a change constitutes a material change requiring a full or partial reassessment.*

### 9.1 Review Triggers

A DPIA review must be initiated upon any of the following:

- **Planned review date** — as specified in the schedule below
- **Material change to processing scope** — new categories of personal data, expanded data subject population, new processing purposes
- **New technology deployment** — introduction of new systems, vendors, or automated processing tools
- **Security incident** — any incident involving the personal data covered by this DPIA
- **Regulatory change** — amendment to PDPA, issuance of new BNM guidelines, or relevant regulator guidance
- **Third-party change** — change in processor, sub-processor, or data transfer arrangements
- **DPO direction** — where the DPO independently determines a review is warranted

### 9.2 Review Schedule

| Review Instance | Review Date | Review Type | Reviewer | Outcome |
|---|---|---|---|---|
| Initial DPIA | [DD MMM YYYY] | Full Assessment | [DPO Name] | [Approved / Conditional] |
| Scheduled Review 1 | [DD MMM YYYY] | Periodic Review | [Reviewer Name] | [To be completed] |
| Scheduled Review 2 | [DD MMM YYYY] | Periodic Review | [Reviewer Name] | [To be completed] |
| Material Change Review | [DD MMM YYYY] | Triggered Review | [Reviewer Name] | [To be completed] |
| [Add rows as required] | | | | |

**Standard Review Frequency:** Annual, or upon material change (whichever occurs first)

**Last Review Date:** [DD MMM YYYY]
**Next Scheduled Review Date:** [DD MMM YYYY]

### 9.3 Change Log for This DPIA

*Record all material changes to the processing activity that have been assessed since the original DPIA was approved.*

| Change ID | Date of Change | Description of Change | Change Triggered Review? | DPIA Outcome |
|---|---|---|---|---|
| CHG-01 | [DD MMM YYYY] | [e.g., Addition of new data processor — [Vendor Name]] | ☐ Yes &nbsp; ☐ No | [Approved / Conditional / Rejected] |
| CHG-02 | [DD MMM YYYY] | [Description of change] | ☐ Yes &nbsp; ☐ No | [Outcome] |
| [Add rows as required] | | | | |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines the responsibilities of key parties in the DPIA process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Business Owner | Data Protection Officer | IT / Security | Legal / Compliance | Senior Management | Third-Party Processor |
|---|---|---|---|---|---|---|
| Initiate DPIA (identify trigger) | R | C | C | C | I | — |
| Complete processing activity description | R | C | C | C | — | C |
| Conduct privacy risk assessment | R | A | C | C | — | C |
| Identify and implement mitigation measures | R | A | R | C | I | R *(where applicable)* |
| Conduct residual risk assessment | R | A | C | C | I | — |
| DPO review and recommendation | I | R/A | I | C | I | — |
| Approval decision | C | A | — | C | R *(High/Critical)* | — |
| Maintain DPIA record | C | R/A | I | I | I | — |
| Monitor outstanding actions | R | A | R | C | I | R *(where applicable)* |
| Conduct periodic review | R | A | C | C | I | C |
| Escalate unresolved high/critical risks | C | R | C | C | A | — |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [DD MMM YYYY] | [Name, Title] | Initial draft for DPO review |
| 0.2 | [DD MMM YYYY] | [Name, Title] | Incorporated DPO comments; updated risk register |
| 1.0 | [DD MMM YYYY] | [Name, Title] | Final version approved for processing commencement |
| [Version] | [DD MMM YYYY] | [Name, Title] | [Description of changes] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Assessment Lead | [Full Name], [Title] | _________________________________ | [DD MMM YYYY] |
| Business Owner | [Full Name], [Title] | _________________________________ | [DD MMM YYYY] |
| Data Protection Officer | [Full Name] | _________________________________ | [DD MMM YYYY] |
| Chief Compliance Officer | [Full Name] | _________________________________ | [DD MMM YYYY] |

---

## 12. References

The following regulatory provisions, guidelines, and internal policies are directly referenced by or relevant to this DPIA Record.

### 12.1 Legislation

| Reference | Title | Relevant Provisions |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | Personal Data Protection Act 2010 | s5 (General Principle), s6 (Sensitive Personal Data), s9 (Security Principle), s29 (Data User accountability) |
| Personal Data Protection Regulations 2013 | Processing standards and obligations | All regulations |
| Personal Data Protection (Class of Data Users) Order 2013 | Sector-specific obligations | [Relevant class] |

### 12.2 Regulatory Guidelines and Standards

| Reference | Title | Issuing Authority |
|---|---|---|
| [BNM/RH/CIR XXX] | Risk Management in Technology (RMiT) | Bank Negara Malaysia |
| [BNM/RH/PD XXX] | Guidelines on Management of Customer Information and Permitted Disclosures | Bank Negara Malaysia |
| ISO/IEC 29134:2017 | Guidelines for Privacy Impact Assessment | ISO/IEC |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC |
| [Additional reference] | [Title] | [Authority] |

### 12.3 Internal Policies

| Document | Reference | Version |
|---|---|---|
| Data Protection Policy | [Reference Number] | [Version] |
| Information Security Policy | [Reference Number] | [Version] |
| Data Retention and Disposal Policy | [Reference Number] | [Version] |
| Third-Party Risk Management Policy | [Reference Number] | [Version] |
| Privacy Notice — [Channel/Product] | [Reference Number] | [Version] |
| Incident Response and Notification Procedure | [Reference Number] | [Version] |

---

## 13. Appendices

### Appendix A — Data Flow Diagram

*Attach or embed the data flow diagram for this processing activity. The diagram must illustrate the flow of personal data from collection through to disposal, including all internal systems, external recipients, and cross-border transfers.*

**[Attach Data Flow Diagram — Reference: [Document Reference]]**

Diagram version: [Version] | Prepared by: [Name] | Date: [DD MMM YYYY]

---

### Appendix B — Consent Form / Privacy Notice

*Attach a copy of the consent form or privacy notice presented to data subjects in connection with this processing activity, as required under PDPA s5 and s7.*

**[Attach Privacy Notice / Consent Form — Reference: [Document Reference]]**

Privacy Notice version: [Version] | Approved by: [Name] | Effective date: [DD MMM YYYY]

---

### Appendix C — Data Processing Agreement (Third-Party Processor)

*Where personal data is processed by a third-party processor, attach a copy of the executed Data Processing Agreement confirming PDPA-compliant obligations on the processor, as required under PDPA s9.*

**[Attach Data Processing Agreement — Reference: [Contract Reference]]**

Vendor name: [Vendor Name] | Agreement date: [DD MMM YYYY] | Expiry date: [DD MMM YYYY]

---

### Appendix D — Security Assessment Evidence

*Attach evidence of security controls implemented or assessed in connection with this DPIA, including vulnerability assessment reports, penetration test results, or security architecture review outputs.*

**[Attach Security Assessment Report — Reference: [Document Reference]]**

Assessment type: [e.g., VAPT / Architecture Review] | Conducted by: [Team / Vendor] | Date: [DD MMM YYYY]

---

### Appendix E — DPO Consultation Record

*If the DPO provided verbal or written consultation during the DPIA process prior to formal review, attach a record of that consultation here.*

**[Attach DPO Consultation Notes — Reference: [Reference Number]]**

Consultation date: [DD MMM YYYY] | Participants: [Names] | Follow-up actions: [Reference]

---

### Appendix F — Regulatory Authority Consultation

*Where the processing activity presents residual risks that cannot be fully mitigated, or where there is genuine uncertainty regarding compliance with the PDPA, record any formal or informal consultation undertaken with the Personal Data Protection Commissioner (PDPC) or other relevant authorities.*

| Field | Details |
|---|---|
| Consultation undertaken? | ☐ Yes &nbsp;&nbsp; ☐ No |
| Authority consulted | [e.g., Personal Data Protection Commissioner (PDPC)] |
| Date of consultation | [DD MMM YYYY] |
| Reference / Case number | [Reference] |
| Summary of authority's response | [Summary] |
| Impact on approval decision | [Describe how the response influenced the DPIA outcome] |

---

*This document is classified **Confidential** and is subject to [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited. Queries regarding this document should be directed to the Data Protection Officer at [DPO Contact Details].*

*Document ID: [Document ID] | Version: 1.0 | Owner: Data Protection Officer | © [Organization Name] [Year]*