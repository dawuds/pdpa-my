# Privacy by Design Review Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Regulatory Basis:** Personal Data Protection Act 2010 (PDPA) — Malaysia, Sections 5, 6, and 9
> **Artifact Category:** Procedure
> **Mandatory:** Yes

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Privacy by Design Trigger Criteria](#3-privacy-by-design-trigger-criteria)
4. [Privacy Design Checklist for New Systems and Products](#4-privacy-design-checklist-for-new-systems-and-products)
5. [DPIA Trigger Assessment at Design Stage](#5-dpia-trigger-assessment-at-design-stage)
6. [Data Minimisation Requirements in System Design](#6-data-minimisation-requirements-in-system-design)
7. [Privacy by Default Principles](#7-privacy-by-default-principles)
8. [DPO Sign-Off as Pre-Launch Approval Gate](#8-dpo-sign-off-as-pre-launch-approval-gate)
9. [Post-Launch Privacy Audit and Review Process](#9-post-launch-privacy-audit-and-review-process)
10. [Integration with SDLC and Agile Development Workflows](#10-integration-with-sdlc-and-agile-development-workflows)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Non-Compliance and Escalation](#12-non-compliance-and-escalation)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This procedure establishes the systematic process by which [Organization Name] embeds privacy considerations into the design and development of new products, services, systems, and business processes from the earliest stages of inception. It operationalises the principle that privacy is not a feature to be retrofitted but a foundational requirement built into every stage of a project lifecycle.

The procedure ensures that [Organization Name] meets its obligations under the **Personal Data Protection Act 2010 (PDPA)**, specifically:

- **Section 5** — General principle: personal data shall not be processed unless the data subject has given consent or processing is necessary for the legitimate interests of the data controller, and data shall be processed in accordance with the rights of the data subject.
- **Section 6** — Notice and choice principle: data subjects must be informed of the nature of personal data collected, the purposes of collection, and their rights.
- **Section 9** — Integrity principle: personal data shall be accurate, complete, not misleading, and kept up to date, having regard to the purpose for which it is to be used.

### 1.2 Scope

This procedure applies to:

- All **new digital products, platforms, mobile applications, and web services** that collect, process, store, or transmit personal data of customers, employees, or third parties.
- All **new or significantly modified internal systems** including core banking upgrades, HR systems, analytics platforms, and data lakes.
- All **new business processes** that involve the processing of personal data, whether manual or automated.
- All **third-party integrations and vendor-managed systems** where [Organization Name] remains the data controller under the PDPA.
- All **pilot programmes, proofs of concept (PoC), and minimum viable products (MVP)** that process real personal data.
- All projects classified as **[Threshold — e.g., High or Critical Data Risk]** by the organisation's project risk classification framework.

This procedure applies to all **employees, contractors, vendors, and third-party developers** engaged in projects within the defined scope at [Organization Name].

### 1.3 Out of Scope

The following are outside the scope of this procedure, though related controls may apply:

- Purely internal administrative processes that do not involve personal data of external parties.
- Projects processing only anonymised or synthetic data with no re-identification risk.
- Routine maintenance patches that introduce no change to data processing logic, data flows, or data categories.

---

## 2. Definitions

*This section defines key terms used throughout this procedure. Authors should confirm definitions align with [Organization Name]'s approved Data Governance Glossary and any applicable BNM or NACSA guidance in force.*

| Term | Definition |
|---|---|
| **Personal Data** | Any information in respect of commercial transactions that relates directly or indirectly to a data subject, who is identified or identifiable from that information, or from that information and other information in the possession of a data controller (PDPA s. 4). |
| **Data Controller** | [Organization Name] as the entity that processes personal data for its own purposes, alone or jointly with others. |
| **Data Subject** | An individual who is the subject of the personal data being processed. |
| **Privacy by Design (PbD)** | An approach to systems engineering that considers privacy from the outset of product and process design, embedding data protection requirements into system architecture rather than addressing them after the fact. |
| **Data Protection Impact Assessment (DPIA)** | A process to identify and mitigate privacy risks arising from a project before it goes live. |
| **DPO** | The Data Protection Officer designated by [Organization Name] under its data governance framework. |
| **SDLC** | Software Development Lifecycle — the structured process governing the planning, design, development, testing, deployment, and maintenance of software systems. |
| **Data Minimisation** | The principle that only personal data that is adequate, relevant, and limited to what is necessary for the specified purpose shall be collected and processed. |
| **Privacy by Default** | The principle that the most privacy-protective settings are applied by default, without requiring action from the data subject. |
| **Go-Live** | The point at which a system, product, or process becomes operational and processes live personal data of real data subjects. |
| **Project Sponsor** | The senior business owner accountable for a project's delivery and outcomes. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |

---

## 3. Privacy by Design Trigger Criteria

### 3.1 Overview

*This section defines the criteria that trigger a mandatory DPO Privacy by Design review. Authors should ensure trigger thresholds are calibrated to the organisation's project portfolio and risk appetite, and that the screening process is integrated into the project intake gate.*

[Organization Name] requires a formal Privacy by Design review for any project that meets one or more of the following trigger criteria. Project sponsors and project managers are responsible for completing the **Privacy Screening Form (Appendix A)** at project initiation.

### 3.2 Mandatory Trigger Conditions

A Privacy by Design review is mandatory when a project involves any of the following:

| # | Trigger Condition | Examples |
|---|---|---|
| T-01 | Collection of **new categories of personal data** not previously processed by the organisation | Biometrics, health data, financial behaviour analytics |
| T-02 | Processing personal data of a **new data subject population** | Minors, non-customers, third-party beneficiaries |
| T-03 | Introduction of a **new third-party data processor** or data sharing arrangement | Cloud vendors, analytics partners, co-branded services |
| T-04 | Implementation of **automated decision-making** or profiling that produces legal or significant effects on data subjects | Credit scoring, fraud flags, access denials |
| T-05 | Processing data at **large scale** (defined as [Threshold — e.g., >10,000 data subjects] or [Threshold — e.g., >50% of customer base]) | Mass marketing campaigns, platform migrations |
| T-06 | Use of **new surveillance technologies** or tracking mechanisms | Location tracking, device fingerprinting, CCTV analytics |
| T-07 | Deployment in a **new jurisdiction** involving cross-border personal data transfer | Regional expansions, offshore data hosting |
| T-08 | **Significant modification** to an existing system that changes data flows, retention periods, or processing purposes | Core banking upgrade, data warehouse re-architecture |
| T-09 | Processing of **sensitive personal data** as defined under s.40 of the PDPA | Health, political opinions, religious beliefs |
| T-10 | Any project flagged as **High or Critical** under the organisation's enterprise risk classification | [As classified by [Risk Framework Name]] |

### 3.3 Screening Process

1. **Project initiation:** The Project Manager completes the **Privacy Screening Form (Appendix A)** at the Project Charter or Concept stage.
2. **Submission:** The completed form is submitted to the DPO via [Submission Channel — e.g., privacy@[organization].com.my / Project Management Portal].
3. **DPO determination:** The DPO reviews the screening form and notifies the Project Manager within **[SLA — e.g., 5 business days]** whether a full Privacy by Design review is required.
4. **Escalation:** If the Project Manager believes a trigger applies but the DPO determination is unclear, escalation is to the [Chief Compliance Officer / Chief Risk Officer].

### 3.4 Consequences of Failing to Trigger a Review

Projects that proceed to development without completing the Privacy Screening Form, or that bypass a mandatory DPO review, are subject to the non-compliance escalation process described in Section 12. Go-Live approval will not be granted until all outstanding privacy requirements are remediated.

---

## 4. Privacy Design Checklist for New Systems and Products

### 4.1 Overview

*This section contains the operational checklist used by project teams and the DPO to assess privacy compliance at the design stage. Authors should ensure this checklist is version-controlled alongside this procedure and referenced in the project's design artefacts. The checklist should be tailored to the organisation's technology stack.*

The Privacy Design Checklist must be completed by the **Project Manager** in collaboration with the **Solution Architect** and reviewed and signed off by the **DPO** before the project advances beyond the Design Phase gate.

### 4.2 Checklist Structure

**Section A — Lawful Basis and Consent**

| # | Checklist Item | Status | Evidence / Notes |
|---|---|---|---|
| A-01 | A lawful basis for processing has been identified and documented for each data element collected | ☐ Yes ☐ No ☐ N/A | |
| A-02 | Where consent is the lawful basis, a consent mechanism meeting PDPA s.6 requirements is designed into the user journey | ☐ Yes ☐ No ☐ N/A | |
| A-03 | Withdrawal of consent is as easy as giving it, and is supported technically | ☐ Yes ☐ No ☐ N/A | |
| A-04 | A valid notice meeting PDPA s.6 requirements has been drafted and will be presented to data subjects prior to data collection | ☐ Yes ☐ No ☐ N/A | |

**Section B — Data Minimisation and Retention**

| # | Checklist Item | Status | Evidence / Notes |
|---|---|---|---|
| B-01 | Only personal data necessary for the stated purpose is collected (data minimisation applied) | ☐ Yes ☐ No ☐ N/A | |
| B-02 | Retention periods have been defined for each data category and are technically enforced | ☐ Yes ☐ No ☐ N/A | |
| B-03 | Automated deletion or anonymisation schedules are implemented at system design level | ☐ Yes ☐ No ☐ N/A | |
| B-04 | Data fields collected are mapped to specific processing purposes — no purpose-less data fields exist | ☐ Yes ☐ No ☐ N/A | |

**Section C — Security and Access Controls**

| # | Checklist Item | Status | Evidence / Notes |
|---|---|---|---|
| C-01 | Encryption at rest and in transit is implemented for all personal data | ☐ Yes ☐ No ☐ N/A | |
| C-02 | Role-based access controls (RBAC) restrict personal data access to authorised personnel only | ☐ Yes ☐ No ☐ N/A | |
| C-03 | Audit logging is enabled for all access to and modification of personal data | ☐ Yes ☐ No ☐ N/A | |
| C-04 | Pseudonymisation or anonymisation is applied where full identification is not required for processing | ☐ Yes ☐ No ☐ N/A | |

**Section D — Data Subject Rights**

| # | Checklist Item | Status | Evidence / Notes |
|---|---|---|---|
| D-01 | Mechanisms for data subjects to access their personal data are built into the system | ☐ Yes ☐ No ☐ N/A | |
| D-02 | Mechanisms for data subjects to correct inaccurate personal data are provided | ☐ Yes ☐ No ☐ N/A | |
| D-03 | Mechanisms for data subjects to opt out of direct marketing are implemented (PDPA s.43) | ☐ Yes ☐ No ☐ N/A | |
| D-04 | A defined process exists for responding to data subject requests within the statutory period | ☐ Yes ☐ No ☐ N/A | |

**Section E — Third Parties and Data Transfers**

| # | Checklist Item | Status | Evidence / Notes |
|---|---|---|---|
| E-01 | All third-party data processors involved have been identified and Data Processing Agreements (DPAs) are in place | ☐ Yes ☐ No ☐ N/A | |
| E-02 | Any cross-border transfer of personal data complies with PDPA s.129 requirements | ☐ Yes ☐ No ☐ N/A | |
| E-03 | Sub-processors have been reviewed and contractually bound to equivalent privacy obligations | ☐ Yes ☐ No ☐ N/A | |

**Section F — Privacy by Default**

| # | Checklist Item | Status | Evidence / Notes |
|---|---|---|---|
| F-01 | Default settings of the system are set to the most privacy-protective configuration available | ☐ Yes ☐ No ☐ N/A | |
| F-02 | Data subjects must actively opt in to any data sharing or enhanced data processing — opt-out is not required | ☐ Yes ☐ No ☐ N/A | |
| F-03 | No personal data beyond the minimum necessary is shared with third parties by default | ☐ Yes ☐ No ☐ N/A | |

### 4.3 Checklist Completion and Sign-Off

The completed checklist must be attached as a project artefact and referenced in the **DPO Pre-Launch Approval Form (Appendix C)**. Any item marked **No** must have a documented remediation plan with a target completion date before the DPO will approve go-live.

---

## 5. DPIA Trigger Assessment at Design Stage

### 5.1 Overview

*This section describes the process for determining whether a full Data Protection Impact Assessment (DPIA) is required. Authors should align the DPIA trigger thresholds with any guidance issued by the Personal Data Protection Commissioner and with the organisation's broader risk management methodology.*

A DPIA is a more intensive privacy risk assessment required for processing activities that are likely to result in high risks to the rights and freedoms of data subjects. The DPIA trigger assessment must be conducted at the **Design Phase** of the project lifecycle, before significant development resources are committed.

### 5.2 DPIA Trigger Criteria

The DPO will require a formal DPIA where two or more of the following criteria are met:

| Criterion | Present? |
|---|---|
| Systematic and extensive profiling or automated decision-making with significant effects on individuals | ☐ Yes ☐ No |
| Large-scale processing of sensitive personal data (PDPA s.40 categories) | ☐ Yes ☐ No |
| Systematic monitoring of a publicly accessible area (e.g., CCTV analytics, geolocation tracking) | ☐ Yes ☐ No |
| Use of new or innovative technology with unknown privacy implications | ☐ Yes ☐ No |
| Data matching, linking, or combining datasets in novel ways | ☐ Yes ☐ No |
| Processing of personal data of vulnerable individuals (minors, elderly, financially distressed) | ☐ Yes ☐ No |
| Data transfer to jurisdictions without adequate data protection safeguards | ☐ Yes ☐ No |
| Processing creates a risk of physical harm, financial loss, discrimination, or reputational damage to data subjects | ☐ Yes ☐ No |

A DPIA is **always required** regardless of the above criteria when processing involves biometric data used to uniquely identify individuals, or when processing is directed at minors.

### 5.3 DPIA Process Summary

| Step | Action | Owner | Timing |
|---|---|---|---|
| 1 | Complete Privacy Screening Form and DPIA trigger assessment | Project Manager | Project initiation |
| 2 | DPO reviews trigger assessment and confirms DPIA requirement | DPO | Within 5 business days of submission |
| 3 | Project team completes DPIA using approved template (Appendix D) | Project Manager / Solution Architect | Design Phase |
| 4 | DPO reviews DPIA and identifies residual risks | DPO | Within [SLA — e.g., 10 business days] |
| 5 | Residual risks are accepted, mitigated, or escalated to Senior Management | DPO / Project Sponsor | Before Development Phase |
| 6 | DPIA outcome is incorporated into the Pre-Launch Approval Form | Project Manager | Before go-live |

### 5.4 DPIA Record Retention

All completed DPIAs and their outcomes must be retained in [Document Management System] for a minimum of **[Retention Period — e.g., 7 years]** from the date of project go-live, in compliance with [Organization Name]'s Records Retention Schedule.

---

## 6. Data Minimisation Requirements in System Design

### 6.1 Principle

*This section establishes the data minimisation requirements that must be addressed during system architecture and data model design. Authors should reference the organisation's Data Classification Policy and Records Retention Schedule when defining acceptable data fields.*

In accordance with the **PDPA General Principle (s.5)**, [Organization Name] requires that personal data collected through any system shall be:

- **Adequate** — sufficient for the specified purpose;
- **Relevant** — directly related to the stated processing purpose;
- **Not excessive** — limited to what is necessary for that purpose.

### 6.2 Data Minimisation Design Requirements

All systems processing personal data must comply with the following design requirements:

**6.2.1 Data Field Justification**

Each personal data field in the system's data model must be documented in the **Data Field Inventory (Appendix E)** with:

| Attribute | Requirement |
|---|---|
| Field name | As it appears in the data model |
| Data category | [Classification — e.g., Identifying, Financial, Behavioural, Sensitive] |
| Processing purpose | The specific, documented purpose requiring this field |
| Lawful basis | The PDPA lawful basis justifying collection |
| Retention period | The defined retention period and deletion trigger |
| DPO approval | Confirmation of DPO review and approval |

Any personal data field that cannot be mapped to a documented processing purpose must be removed from the data model before the system proceeds to development.

**6.2.2 Collection Point Controls**

- Forms and data collection interfaces must not include optional fields that encourage the collection of data beyond the minimum necessary.
- Where additional data is collected voluntarily, this must be clearly marked as optional and processed separately from mandatory fields.
- Pre-populated or inferred data fields must be disclosed to the data subject and subject to the same minimisation standard.

**6.2.3 Database and API Design**

- Database schemas must not retain deprecated or legacy data fields from prior versions unless there is a documented legal or operational obligation.
- API responses must return only the personal data fields necessary for the consuming application's stated function — bulk data exposures in API design are prohibited.
- Logging and debugging mechanisms must not capture personal data fields beyond what is operationally required for system monitoring.

**6.2.4 Analytics and Reporting**

- Analytics dashboards and reports that display personal data must aggregate or pseudonymise data wherever individual identification is not required.
- Production personal data must not be used in test, development, or staging environments unless anonymised or replaced with synthetic data.

### 6.3 Review of Existing Data Collections

Where a project modifies an existing system, the project team must review existing data collections and identify opportunities to reduce data holdings. Any reduction must be documented in the project's DPIA or Privacy Design Checklist.

---

## 7. Privacy by Default Principles

### 7.1 Principle

*This section articulates the privacy-by-default standard that must be implemented in all new systems and products. Authors should ensure these requirements are reflected in the organisation's UX/UI design standards and API governance framework.*

[Organization Name] requires that all systems and products, upon first use and by default configuration, provide the greatest degree of privacy protection to data subjects — **without requiring any action from the data subject**. Data subjects must actively choose to share more data or reduce their privacy protections; they must never be required to act to protect their privacy.

### 7.2 Privacy by Default Requirements

| Requirement | Implementation Standard |
|---|---|
| **Default consent state** | All consent toggles, data sharing preferences, and marketing preferences must default to **OFF** (not consented). Active opt-in is required. |
| **Default data retention** | Systems must apply the **minimum** defined retention period by default; extended retention requires explicit data subject choice or documented legal obligation. |
| **Default data sharing** | No personal data is shared with third parties, including analytics and advertising partners, without an affirmative data subject action or a documented legitimate purpose. |
| **Default visibility** | User profiles, transaction histories, and personal data fields must default to **private** (not visible to other users or publicly). |
| **Default communications** | Marketing, promotional, and non-essential communications must default to **opted out**. |
| **Default geolocation** | Location data collection must default to **off** and must require explicit, granular, purpose-specific consent. |
| **Default session data** | Session and behavioural tracking cookies beyond those strictly necessary for system function must default to **rejected**. |

### 7.3 UI/UX Design Standards for Privacy by Default

- Privacy settings must be presented in plain language, accessible to a layperson without legal or technical expertise.
- Consent mechanisms must not use dark patterns (pre-ticked boxes, confusing opt-out language, buried settings).
- Privacy preference dashboards must be accessible within **[number — e.g., two] clicks** from the main user interface.
- Changes to privacy settings must take effect immediately or within a documented processing period communicated to the data subject.

### 7.4 Verification at Design Review

The Privacy Design Checklist (Section F) must be completed to confirm that privacy-by-default settings have been implemented before DPO sign-off is granted. The DPO may request a live demonstration of default settings as part of the pre-launch review.

---

## 8. DPO Sign-Off as Pre-Launch Approval Gate

### 8.1 Overview

*This section defines the mandatory DPO pre-launch approval gate that must be cleared before any new system, product, or process goes live. Authors should integrate this gate into the organisation's project governance framework, ensuring it is a hard dependency in the project plan.*

No system, product, or business process within the scope of this procedure may go live — including soft launches, beta releases, limited pilots with real data subjects, or phased rollouts — without **written DPO approval**.

### 8.2 Pre-Launch Approval Conditions

The DPO will grant pre-launch approval only when all of the following conditions are satisfied:

| Condition | Evidence Required |
|---|---|
| Privacy Screening Form completed | Signed form on file |
| Privacy Design Checklist completed with no outstanding **No** items | Signed checklist with remediation evidence for any items initially marked No |
| DPIA completed and residual risks accepted or mitigated (if triggered) | Signed DPIA with risk acceptance from appropriate authority |
| Data Field Inventory approved | Signed inventory confirming data minimisation compliance |
| Privacy Notice / consent mechanism reviewed and approved by DPO | Final privacy notice text, signed by DPO |
| Data Processing Agreements in place with all third-party processors | Executed DPAs on file |
| Cross-border transfer safeguards in place (if applicable) | Transfer mechanism documentation |
| Penetration test or security assessment completed (if required) | Test report with critical/high findings remediated |
| Data subject rights mechanisms tested and operational | Testing evidence |
| Staff who will operate the system have completed privacy training | Training completion records |

### 8.3 Pre-Launch Approval Process

```
[Project Team] → Submits Pre-Launch Approval Form (Appendix C) to DPO
        ↓
[DPO] → Reviews all supporting evidence (within [SLA — e.g., 10 business days])
        ↓
    [Complete?]
   /            \
Yes              No
  ↓               ↓
[DPO grants      [DPO issues Remediation
 written          Schedule — project team
 approval]        must resolve and resubmit]
  ↓
[Go-Live permitted]
```

### 8.4 DPO Approval Form

The DPO Pre-Launch Approval Form (Appendix C) must contain at minimum:

- Project name and reference number
- Go-live date requested
- Summary of personal data processed
- Confirmation that all pre-launch conditions are satisfied
- DPO name, signature, and date of approval
- Any conditions or time-limited approvals attached to the go-live

### 8.5 Escalation and Override

If a project sponsor wishes to proceed to go-live without full DPO approval, a formal risk acceptance must be obtained from the **[Chief Executive Officer / Chief Risk Officer]** in writing, with the specific outstanding conditions documented. The DPO must be informed and the outstanding items must be remediated within **[SLA — e.g., 30 calendar days]** of go-live. This process does not eliminate the organisation's PDPA obligations and the DPO retains the right to escalate to the Board if outstanding items present material regulatory risk.

---

## 9. Post-Launch Privacy Audit and Review Process

### 9.1 Overview

*This section defines the ongoing review obligations that apply after a system or product goes live. Authors should schedule these reviews in the organisation's compliance calendar and assign ownership to the relevant business and IT units.*

Privacy by Design is a continuous commitment. After go-live, [Organization Name] requires structured post-launch reviews to confirm that privacy controls are operating as designed and that no drift from approved privacy parameters has occurred.

### 9.2 Post-Launch Review Schedule

| Review Type | Timing | Owner | Scope |
|---|---|---|---|
| **Initial Post-Launch Review** | [Period — e.g., 30–60 days] after go-live | DPO + Project Manager | Confirm all approved privacy controls are operational; review any data subject complaints or incidents since launch |
| **Annual Privacy Audit** | Annually from go-live date | DPO / Internal Audit | Full re-assessment of data flows, retention practices, third-party arrangements, and consent mechanisms against approved design |
| **Material Change Review** | Before any significant modification to the system | DPO + Project Manager | Repeat Privacy Screening and, if triggered, DPIA process for the change |
| **Incident-Triggered Review** | Following any personal data breach or near-miss involving the system | DPO + CISO | Root cause analysis, control effectiveness review, and remediation |
| **Regulatory Change Review** | Upon material amendment to applicable law or regulatory guidance | DPO + Legal | Re-assessment of compliance position and required system changes |

### 9.3 Annual Privacy Audit Process

The annual privacy audit must assess at minimum:

- Whether personal data collected remains limited to what was originally approved and documented in the Data Field Inventory.
- Whether retention periods are being technically enforced and data is being deleted or anonymised as required.
- Whether third-party Data Processing Agreements remain current and enforceable.
- Whether the privacy notice presented to data subjects accurately reflects current processing activities.
- Whether data subject rights requests are being fulfilled within the required period and at the required quality.
- Whether any new processing activities have commenced without triggering the Privacy by Design process.
- Whether staff operating the system have current privacy training.

### 9.4 Audit Findings and Remediation

| Finding Severity | Definition | Required Action | Deadline |
|---|---|---|---|
| **Critical** | Processing occurs without lawful basis, or active breach of PDPA obligations | Immediate suspension of processing pending remediation | [e.g., 24 hours] |
| **High** | Significant deviation from approved design; material risk to data subjects | Formal remediation plan with DPO approval | [e.g., 30 days] |
| **Medium** | Moderate gap in controls; limited risk to data subjects | Documented remediation plan | [e.g., 60 days] |
| **Low** | Minor administrative gap; no direct risk to data subjects | Tracked in compliance register | [e.g., 90 days] |

All audit findings and remediation actions must be recorded in [Organization Name]'s **Compliance Register** and reported to the [Privacy Governance Committee / Board Risk Committee] in accordance with the DPO's reporting obligations.

---

## 10. Integration with SDLC and Agile Development Workflows

### 10.1 Overview

*This section provides practical guidance on embedding Privacy by Design requirements into the organisation's standard development processes. Authors should review this section with the IT and Engineering leads to confirm alignment with the organisation's current SDLC methodology and tooling.*

[Organization Name] uses [SDLC Methodology — e.g., Agile (Scrum/Kanban) / Waterfall / Hybrid] as its primary development methodology. This procedure integrates privacy requirements as mandatory gates and activities within that framework.

### 10.2 Privacy Gates in the SDLC

**Traditional / Waterfall SDLC Integration:**

| SDLC Phase | Privacy Activity | Owner | Gate Condition |
|---|---|---|---|
| **Concept / Initiation** | Complete Privacy Screening Form; determine if Privacy by Design review is triggered | Project Manager | DPO confirmation received before Concept approval |
| **Requirements** | Document personal data flows; identify lawful bases; define consent requirements | Business Analyst + DPO | Privacy requirements included in Business Requirements Document |
| **Design** | Complete Privacy Design Checklist; conduct DPIA if triggered; finalise Data Field Inventory | Solution Architect + DPO | DPO sign-off on design artefacts before Development begins |
| **Development** | Implement technical privacy controls per approved design; use synthetic/anonymised test data | Development Lead | Privacy controls code-reviewed before test promotion |
| **Testing** | Test data subject rights mechanisms, consent flows, deletion schedules, access controls | QA Lead + DPO | Privacy test cases pass before UAT |
| **Pre-Launch** | Submit DPO Pre-Launch Approval Form; obtain written DPO sign-off | Project Manager + DPO | Written DPO approval obtained before go-live date confirmed |
| **Post-Launch** | Conduct Initial Post-Launch Review; schedule annual audit | DPO + Business Owner | Review completed within [30–60 days] of go-live |

**Agile / Scrum Integration:**

| Scrum Event / Artefact | Privacy Integration Point |
|---|---|
| **Product Backlog** | Privacy requirements (consent flows, access controls, data subject rights) are created as dedicated backlog items with acceptance criteria. DPO is consulted when user stories involve new personal data processing. |
| **Sprint Planning** | Privacy backlog items are prioritised alongside functional requirements. Stories involving personal data must include a privacy acceptance criterion. |
| **Sprint Review** | DPO (or nominated Privacy Champion) attends Sprint Reviews for Sprints delivering personal data processing features to validate privacy acceptance criteria. |
| **Definition of Done** | The team's Definition of Done must include: privacy requirements met per acceptance criteria; no production data used in testing; code reviewed for privacy anti-patterns. |
| **Release Planning** | DPO Pre-Launch Approval Form is submitted and approved before the release is scheduled for production deployment. |
| **Retrospective** | Privacy incidents, near-misses, or design changes are reviewed as standing agenda items. |

### 10.3 Privacy Champions

*Authors should define the Privacy Champion role and its relationship to the DPO and project teams.*

[Organization Name] designates **Privacy Champions** within each major business and technology team. Privacy Champions serve as the first point of contact for day-to-day privacy questions within their teams and assist in completing Privacy Screening Forms and Design Checklists before escalating to the DPO.

| Role | Responsibility |
|---|---|
| Privacy Champion | First-line privacy guidance; assists with screening forms; attends DPO-led privacy training |
| DPO | Formal reviews, DPIA oversight, pre-launch approvals, regulatory engagement |
| Solution Architect | Technical implementation of privacy controls per approved design |
| Development Lead | Code-level privacy control implementation; peer review of privacy-sensitive code |
| QA Lead | Privacy test case design and execution |

### 10.4 Privacy Engineering Standards

Developers must adhere to the following engineering standards when implementing systems within scope:

- No hardcoded credentials or personal data in source code repositories.
- All personal data fields must be identified and tagged in the data model using [Organization Name]'s approved data classification taxonomy.
- Secrets management tooling ([Tool Name — e.g., HashiCorp Vault / AWS Secrets Manager]) must be used for all credentials and encryption keys.
- Personal data must never be written to unencrypted log files or monitoring streams.
- API endpoints exposing personal data must be authenticated, authorised, and rate-limited.

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix

*This section defines accountability for each major activity under this procedure. RACI assignments should be confirmed with the relevant function heads and updated if the organisational structure changes.*

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | DPO | Project Sponsor | Project Manager | Solution Architect | Development Lead | QA Lead | Legal | CISO / IT Security | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|
| Maintain and update this procedure | A/R | I | I | C | I | I | C | C | I |
| Complete Privacy Screening Form | C | I | R | C | I | I | I | I | I |
| Determine Privacy by Design trigger | A/R | I | C | C | I | I | I | I | I |
| Complete Privacy Design Checklist | C | I | A | R | C | I | I | C | I |
| Conduct DPIA (if triggered) | A/R | C | R | C | I | I | C | C | I |
| Accept DPIA residual risks | C | A | R | I | I | I | C | C | I |
| Compile Data Field Inventory | C | I | A | R | C | I | I | I | I |
| Approve Privacy Notice | A/R | I | C | I | I | I | C | I | I |
| Execute Data Processing Agreements | C | I | R | I | I | I | A/R | I | I |
| Implement technical privacy controls | C | I | I | A | R | C | I | C | I |
| Privacy testing | C | I | A | C | C | R | I | C | I |
| Grant Pre-Launch Approval | A/R | I | C | I | I | I | C | C | I |
| Conduct Post-Launch Review | A/R | I | R | C | C | I | I | C | I |
| Conduct Annual Privacy Audit | A/R | I | I | I | I | I | I | C | C |
| Report to Board / Governance Committee | A/R | I | I | I | I | I | C | C | I |
| Manage data subject rights requests | A/R | I | I | I | I | I | C | I | I |
| Investigate privacy incidents | A/R | I | C | C | C | I | C | R | C |

---

## 12. Non-Compliance and Escalation

### 12.1 Non-Compliance Scenarios

*This section defines how breaches of this procedure are handled. Authors should align the escalation matrix with the organisation's disciplinary and risk escalation frameworks.*

The following are considered non-compliance with this procedure:

- Commencing development on an in-scope project without completing the Privacy Screening Form.
- Proceeding to go-live without written DPO pre-launch approval.
- Using production personal data in test or development environments without anonymisation.
- Collecting personal data fields not documented and approved in the Data Field Inventory.
- Failing to implement privacy controls approved at the design stage.
- Failing to complete a DPIA where one was required.

### 12.2 Escalation Path

| Severity | Description | Escalation Path | Timeframe |
|---|---|---|---|
| **Level 1 — Administrative** | Minor procedural non-compliance with no data subject impact | DPO notifies Project Manager; logged in Compliance Register | Remediate within [30 days] |
| **Level 2 — Significant** | Material non-compliance with potential data subject risk | DPO escalates to Project Sponsor and [Chief Compliance Officer]; formal remediation plan required | Remediate within [15 days] |
| **Level 3 — Critical** | Active breach of PDPA obligations; personal data exposed or processed unlawfully | DPO escalates to CEO and Board; legal counsel engaged; assess personal data breach notification obligations | Immediate — within [24–72 hours] |

### 12.3 Personal Data Breach Notification

Where non-compliance results in a personal data breach, [Organization Name] will follow the **Personal Data Breach Response Procedure [Document ID]** and assess notification obligations to the **Personal Data Protection Commissioner** and affected data subjects in accordance with PDPA requirements and any applicable BNM notification obligations.

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 13.2 Scheduled Review

This procedure is subject to **annual review** by the DPO or upon the occurrence of any of the following:

- Material amendment to the PDPA or subsidiary regulations.
- Issuance of new guidance by the Personal Data Protection Commissioner.
- Significant change to [Organization Name]'s technology architecture or product strategy.
- Material finding from an internal audit, regulatory inspection, or significant privacy incident.

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer / CTO | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| [Board Privacy Committee Chair / CEO] | [Name] | [Signature] | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Description |
|---|---|
| **PDPA s.5** | General Principle — personal data shall not be processed unless a lawful basis exists and the data subject's rights are observed |
| **PDPA s.6** | Notice and Choice Principle — data subjects must be informed of the nature, purpose, and rights relating to their personal data before collection |
| **PDPA s.9** | Integrity Principle — personal data must be accurate, complete, not misleading, and kept up to date for the purposes of processing |
| **PDPA s.40** | Sensitive personal data — special categories of personal data requiring heightened protection |
| **PDPA s.43** | Direct marketing — data subjects have the right to opt out of direct marketing |
| **PDPA s.129** | Cross-border transfer — restrictions on transferring personal data outside Malaysia |

### 14.2 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| Data Protection Policy | [Document ID] | DPO |
| Personal Data Breach Response Procedure | [Document ID] | DPO |
| Records Retention Schedule | [Document ID] | [Owner] |
| Data Classification Policy | [Document ID] | [Owner] |
| Information Security Policy | [Document ID] | CISO |
| Third-Party Vendor Management Policy | [Document ID] | [Owner] |
| DPIA Procedure | [Document ID] | DPO |
| Data Subject Rights Procedure | [Document ID] | DPO |

### 14.3 External References and Guidance

| Reference | Description |
|---|---|
| Personal Data Protection Commissioner — Malaysia | Official guidance, codes of practice, and enforcement decisions |
| Privacy by Design — 7 Foundational Principles (Ann Cavoukian) | Foundational framework for Privacy by Design methodology |
| ISO/IEC 29101:2018 | Privacy Architecture Framework |
| ISO/IEC 27701:2019 | Extension to ISO 27001/27002 for privacy information management |
| BNM Risk Management in Technology (RMiT) Policy Document | Technology risk management requirements for financial institutions |

---

## 15. Appendices

### Appendix A — Privacy Screening Form

*This appendix contains the standardised form used at project initiation to determine whether a Privacy by Design review is triggered. Authors should ensure this form is available electronically via [Project Management Portal / Intranet] and is linked from the project intake process.*

**PRIVACY SCREENING FORM**

| Field | Details |
|---|---|
| Project Name | |
| Project Reference Number | |
| Project Manager | |
| Project Sponsor | |
| Estimated Go-Live Date | |
| Brief Project Description | |
| Date Submitted | |

**Trigger Assessment:** *(Mark all that apply)*

| Trigger | Applicable? |
|---|---|
| T-01: New categories of personal data | ☐ Yes ☐ No |
| T-02: New data subject population | ☐ Yes ☐ No |
| T-03: New third-party data processor | ☐ Yes ☐ No |
| T-04: Automated decision-making or profiling | ☐ Yes ☐ No |
| T-05: Large-scale processing | ☐ Yes ☐ No |
| T-06: New surveillance or tracking technology | ☐ Yes ☐ No |
| T-07: New jurisdiction or cross-border transfer | ☐ Yes ☐ No |
| T-08: Significant modification to existing system | ☐ Yes ☐ No |
| T-09: Sensitive personal data | ☐ Yes ☐ No |
| T-10: High or Critical risk classification | ☐ Yes ☐ No |

**DPO Determination:**

| Field | Details |
|---|---|
| Privacy by Design Review Required? | ☐ Yes ☐ No |
| DPIA Trigger Assessment Required? | ☐ Yes ☐ No |
| DPO Comments | |
| DPO Name | |
| DPO Signature | |
| Date of Determination | |

---

### Appendix B — Privacy Design Checklist (Full Version)

*This appendix contains the expanded Privacy Design Checklist referenced in Section 4. Authors should maintain this as a standalone document that can be completed and signed independently of this procedure document.*

> **Reference:** See Section 4.2 for the full checklist. This appendix contains the printable/fillable version with signature blocks for DPO approval.

| Field | Details |
|---|---|
| Project Name | |
| Project Reference Number | |
| Checklist Completed By | |
| Date Completed | |
| Reviewed By (DPO) | |
| Date Reviewed | |
| DPO Signature | |
| Outcome | ☐ Approved ☐ Approved with Conditions ☐ Rejected — Remediation Required |

---

### Appendix C — DPO Pre-Launch Approval Form

*This appendix contains the form submitted to the DPO to obtain written pre-launch approval as required by Section 8. Authors should ensure that project governance systems enforce this form as a hard dependency before the go-live date is confirmed.*

**DPO PRE-LAUNCH APPROVAL FORM**

| Field | Details |
|---|---|
| Project Name | |
| Project Reference Number | |
| System / Product Name | |
| Go-Live Date Requested | |
| Project Manager | |
| Project Sponsor | |
| Date Submitted to DPO | |

**Pre-Launch Condition Confirmation:**

| Condition | Satisfied? | Evidence Reference |
|---|---|---|
| Privacy Screening Form completed | ☐ Yes ☐ No | |
| Privacy Design Checklist completed and approved | ☐ Yes ☐ No | |
| DPIA completed and approved (if required) | ☐ Yes ☐ N/A | |
| Data Field Inventory approved | ☐ Yes ☐ No | |
| Privacy Notice approved | ☐ Yes ☐ No | |
| DPAs executed with all processors | ☐ Yes ☐ No | |
| Cross-border transfer safeguards in place | ☐ Yes ☐ N/A | |
| Security assessment completed | ☐ Yes ☐ No | |
| Data subject rights mechanisms tested | ☐ Yes ☐ No | |
| Staff privacy training completed | ☐ Yes ☐ No | |

**DPO Decision:**

| Field | Details |
|---|---|
| Decision | ☐ Approved ☐ Approved with Conditions ☐ Rejected — Conditions Not Met |
| Conditions / Comments | |
| Approval Expiry (if time-limited) | |
| DPO Name | |
| DPO Signature | |
| Date of Decision | |

---

### Appendix D — DPIA Template Reference

*This appendix notes that the full DPIA template is maintained as a separate document. Authors should insert the Document ID and location reference for the approved DPIA template.*

> The full Data Protection Impact Assessment template used to satisfy the requirements of Section 5 is maintained as a separate controlled document:
>
> **Document:** DPIA Procedure and Template
> **Document ID:** [Document ID]
> **Owner:** Data Protection Officer
> **Location:** [Document Management System — path or hyperlink]

---

### Appendix E — Data Field Inventory Template

*This appendix provides the template for documenting all personal data fields processed by a system, as required by Section 6. A separate inventory must be completed for each system within scope.*

**DATA FIELD INVENTORY**

| Field | Details |
|---|---|
| System Name | |
| System Owner | |
| Inventory Compiled By | |
| Date Compiled | |
| DPO Approval Date | |

| Data Field Name | Data Category | Processing Purpose | Lawful Basis (PDPA) | Retention Period | Deletion Trigger | Third Parties Shared With | DPO Approved? |
|---|---|---|---|---|---|---|---|
| [Field Name] | [e.g., Identifying] | [Purpose] | [s.5 / Consent / Legitimate Interest] | [e.g., 7 years] | [e.g., Account closure + 7 years] | [None / Vendor Name] | ☐ Yes ☐ No |
| | | | | | | | |
| | | | | | | | |

---

### Appendix F — Glossary of PDPA Sections Referenced

*This appendix provides a quick-reference summary of the PDPA sections cited in this procedure, for staff who may not have ready access to the full legislation.*

| Section | Title | Summary |
|---|---|---|
| s.5 | General Principle | Personal data must not be processed unless lawful basis exists; data shall be processed fairly, lawfully, and in accordance with data subject rights |
| s.6 | Notice and Choice Principle | Data subjects must receive adequate notice of the nature, purpose, and use of their personal data; they must be given a choice to opt out of direct marketing |
| s.9 | Integrity Principle | Personal data must be accurate, complete, not misleading, and kept up to date for the purposes for which it is processed |
| s.40 | Sensitive Personal Data | Defines categories of sensitive personal data requiring additional safeguards including consent or legal obligation |
| s.43 | Direct Marketing | Data subjects have the right to request cessation of processing for direct marketing purposes |
| s.129 | Transfer of Personal Data | Prohibits transfer of personal data outside Malaysia except to jurisdictions providing adequate protection or subject to approved safeguards |

---

*End of Document*

---

**Document Control:** This document is the property of [Organization Name]. It is classified **Confidential** and must not be disclosed outside [Organization Name] without the written approval of the Data Protection Officer. Printed copies are uncontrolled. The authoritative version is maintained in [Document Management System].