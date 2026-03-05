# Data Breach Response Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer / Chief Information Security Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual or Post-Incident] |
| **Approved By** | [Approved By — Name and Title] |
| **Organisation** | [Organisation Name] |
| **Department** | [Department Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be disclosed to any third party without the prior written approval of the Data Protection Officer. Printed copies are uncontrolled. The authoritative version is maintained in [Document Management System / SharePoint URL].

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Legal Basis](#2-regulatory-framework-and-legal-basis)
3. [Definitions](#3-definitions)
4. [Breach Definition and Classification Criteria](#4-breach-definition-and-classification-criteria)
5. [Breach Severity Assessment Matrix](#5-breach-severity-assessment-matrix)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Breach Response Phases and Procedures](#7-breach-response-phases-and-procedures)
8. [72-Hour Notification Obligation to the Commissioner](#8-72-hour-notification-obligation-to-the-commissioner)
9. [Data Subject Notification Requirements and Thresholds](#9-data-subject-notification-requirements-and-thresholds)
10. [Containment and Remediation Procedures](#10-containment-and-remediation-procedures)
11. [Post-Incident Review and Lessons Learned](#11-post-incident-review-and-lessons-learned)
12. [Breach Register Maintenance](#12-breach-register-maintenance)
13. [Training and Awareness](#13-training-and-awareness)
14. [Policy Governance](#14-policy-governance)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*State the primary objective of this policy. Explain why the organisation has adopted a formal breach response framework and the regulatory obligations it satisfies.*

This Policy establishes [Organisation Name]'s framework for the timely and effective detection, assessment, containment, notification, and remediation of personal data breaches affecting personal data processed by the organisation in its capacity as a **data user** under the **Personal Data Protection Act 2010 (PDPA)**, as amended by the **Personal Data Protection (Amendment) Act 2024 (Act A1727)**.

The Policy gives effect to the mandatory personal data breach notification obligation introduced by **section 143A** of the PDPA and supports the organisation's compliance with the **seven data protection principles** prescribed under sections 6 to 12 of the Act, in particular the **Security Principle** (s9).

This Policy further supports [Organisation Name]'s obligations under:

- **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)** Policy Document — where applicable to licensed financial institutions;
- **National Cyber Security Agency (NACSA)** requirements applicable to designated Critical National Information Infrastructure (CNII) operators;
- Any other applicable sectoral regulations as identified in [Organisation Name]'s Regulatory Compliance Register.

### 1.2 Scope

*Define the boundaries of this policy — which entities, systems, data types, and personnel it covers.*

This Policy applies to:

**Organisational Scope:**

- All employees, contractors, consultants, interns, and temporary staff of [Organisation Name];
- All subsidiaries, associated entities, and business units within [Organisation Name]'s group that process personal data on behalf of or under the direction of [Organisation Name];
- All third-party data processors and service providers who have been granted access to personal data processed by [Organisation Name], pursuant to their respective data processing agreements.

**Data Scope:**

- All **personal data** as defined under section 4 of the PDPA that is processed by [Organisation Name] in the course of its commercial transactions, including data held in electronic, physical, or hybrid formats;
- Personal data processed across all systems, platforms, applications, cloud environments, and physical locations operated or controlled by [Organisation Name].

**Geographical Scope:**

- All personal data of **data subjects located in Malaysia**, regardless of where [Organisation Name]'s processing infrastructure is located;
- Personal data transferred outside of Malaysia that remains subject to the PDPA by virtue of section 129 of the Act.

**Exclusions:**

*List any explicit exclusions, such as anonymised data or employee data covered under a separate HR policy.*

- Anonymised or pseudonymised data that cannot be re-identified and therefore does not constitute personal data;
- [Any other exclusions as determined by the organisation].

---

## 2. Regulatory Framework and Legal Basis

*Provide a concise summary of the applicable legislation and how this policy responds to specific obligations. Reference each clause precisely.*

### 2.1 Personal Data Protection Act 2010 (as amended)

| PDPA Section | Obligation | Relevance to This Policy |
|---|---|---|
| **s4** | Definition of personal data, sensitive personal data, data breach, data user, data processor | Foundational definitions applied throughout this Policy |
| **s9** | Security Principle — data users must take practical steps to protect personal data from loss, misuse, modification, unauthorised or accidental access, disclosure, alteration, or destruction | Mandates the existence of breach response and containment controls |
| **s129** | Transfer of personal data outside Malaysia | Applies policy obligations to cross-border data flows |
| **s143A** | Mandatory breach notification to the Personal Data Protection Commissioner within **72 hours** of becoming aware of a notifiable breach | Core notification obligation; detailed procedures in Section 8 |
| **s143A(4)** | Notification to affected data subjects where the breach is likely to result in high risk to their rights and freedoms | Data subject notification requirements; detailed in Section 9 |
| **s143A(7)** | Maintenance of breach records by the data user | Breach register requirements; detailed in Section 12 |
| **s133** | Offences and penalties for non-compliance | Risk and consequence framework |

### 2.2 Supporting Regulatory Instruments

*List any supporting guidelines, codes of practice, or subsidiary legislation issued by the PDPC or other regulators.*

| Instrument | Issuing Body | Relevance |
|---|---|---|
| [PDPC Advisory / Code of Practice on Data Breach Notification — to be issued] | Personal Data Protection Commissioner | Operational guidance on s143A notifications |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Cybersecurity incident response requirements for financial institutions |
| NACSA National Cybersecurity Policy | NACSA | CNII sector breach and incident obligations |
| [Organisation Name] Information Security Policy | [Organisation Name] | Internal security control framework |
| [Organisation Name] Data Protection Policy | [Organisation Name] | Overarching PDPA compliance framework |

---

## 3. Definitions

*Define all terms used in this policy. Definitions should align precisely with those in the PDPA and any supplementary guidance issued by the Commissioner.*

| Term | Definition |
|---|---|
| **Personal Data** | Any information in respect of commercial transactions that is being processed wholly or partly by means of equipment operating automatically in response to instructions given for that purpose, or recorded with the intention that it should be wholly or partly processed by means of such equipment, or recorded as part of a relevant filing system or with the intention that it should form part of a relevant filing system (PDPA, s4). |
| **Sensitive Personal Data** | Personal data consisting of information as to the physical or mental health or condition of a data subject; his political opinions; his religious beliefs or other beliefs of a similar nature; the commission or alleged commission by him of any offence; or any other personal data as the Minister may determine (PDPA, s4). |
| **Personal Data Breach** | A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored, or otherwise processed (PDPA, s4, as amended by Act A1727). |
| **Data User** | A person who either alone or jointly or in common with other persons processes any personal data or has control over or authorises the processing of any personal data — in this Policy, [Organisation Name] (PDPA, s4). |
| **Data Processor** | Any person, other than an employee of the data user, who processes personal data solely on behalf of the data user (PDPA, s4). |
| **Commissioner** | The Personal Data Protection Commissioner appointed under section 74 of the PDPA. |
| **Notifiable Breach** | A personal data breach that meets the threshold for mandatory notification to the Commissioner under s143A of the PDPA. |
| **High-Risk Breach** | A notifiable breach that is additionally likely to result in high risk to the rights and freedoms of natural persons, triggering the obligation to notify affected data subjects under s143A(4). |
| **Breach Response Team (BRT)** | The cross-functional team convened by the Data Protection Officer to manage the end-to-end response to a declared personal data breach. |
| **Data Protection Officer (DPO)** | The individual appointed by [Organisation Name] to oversee PDPA compliance, as designated in the organisation's Data Protection Policy. |
| **Incident** | Any event that has the potential to constitute a personal data breach but has not yet been confirmed as such. |
| **Containment** | Actions taken to limit the scope, impact, and continuation of a personal data breach. |
| **Remediation** | Actions taken to correct vulnerabilities, restore systems, and prevent recurrence of a breach. |
| **Breach Register** | The formal record maintained by [Organisation Name] of all personal data breaches, whether or not they are notifiable under s143A. |
| **72-Hour Clock** | The notification period prescribed by s143A, commencing from the point at which [Organisation Name] becomes **aware** that a notifiable breach has occurred. |

---

## 4. Breach Definition and Classification Criteria

*Define what constitutes a personal data breach in the context of this organisation, and establish clear criteria for classifying incidents. This section should enable staff at all levels to identify and escalate potential breaches promptly.*

### 4.1 What Constitutes a Personal Data Breach

A personal data breach may be constituted by any of the following events involving personal data processed by [Organisation Name]:

**Confidentiality Breach** — Unauthorised or accidental disclosure of, or access to, personal data, including:

- Unauthorised access to databases, file servers, or cloud storage containing personal data;
- Accidental transmission of personal data to an incorrect recipient (email, fax, post);
- Theft or loss of devices, physical documents, or storage media containing personal data;
- Insider threat — deliberate or negligent disclosure by employees or contractors;
- Third-party data processor incidents resulting in exposure of personal data entrusted to them.

**Integrity Breach** — Unauthorised or accidental alteration of personal data, including:

- Tampering with personal data records by an unauthorised party;
- Corruption of personal data due to a cyberattack (e.g., ransomware, malware);
- Unauthorised modification of personal data by an employee.

**Availability Breach** — Unauthorised or accidental loss or destruction of personal data, including:

- Accidental deletion of personal data records;
- Ransomware encryption rendering personal data inaccessible;
- Destruction of backup media or records;
- Loss of physical documents containing personal data.

> **Note:** Not every security incident constitutes a personal data breach. Events involving systems that do not process personal data, or that involve only anonymised data, are outside the scope of this Policy. However, all security incidents must initially be assessed against this Policy's criteria before being excluded.

### 4.2 Classification Criteria

*Define the factors that determine a breach's classification. These criteria directly inform the severity assessment matrix in Section 5.*

All confirmed or suspected personal data breaches shall be assessed against the following classification criteria:

| Criterion | Considerations |
|---|---|
| **Nature of the breach** | Confidentiality, integrity, or availability breach; single or compound |
| **Type of personal data affected** | Sensitive personal data (higher risk); financial data; identification data; contact data; behavioural data |
| **Volume of data subjects affected** | Number of individuals whose personal data has been compromised |
| **Category of data subjects** | Vulnerable individuals (minors, elderly, persons with disabilities); customers; employees; public |
| **Ease of identification** | Whether affected individuals can be identified directly or indirectly from the compromised data |
| **Severity of potential consequences** | Financial loss, identity theft, discrimination, reputational harm, physical harm, or other detriment to data subjects |
| **Special circumstances** | Whether the breach involves cross-border data transfers; whether data has been published online; whether malicious actors are involved |
| **Reversibility** | Whether the breach can be contained and data recovered, or whether disclosure is permanent |

### 4.3 Breach Types — Examples

*Provide illustrative examples to assist staff in applying the classification criteria.*

| Breach Type | Example Scenario | Likely Classification |
|---|---|---|
| Lost/stolen device | Unencrypted laptop containing customer data lost by employee | Medium to High |
| Misdirected email | Customer statement emailed to wrong recipient (one individual) | Low |
| Ransomware attack | Attacker encrypts systems holding records of [X,000] customers | Critical |
| Accidental publication | Customer list inadvertently published on public website | High |
| Insider data theft | Employee exfiltrates customer personal data to competitor | High to Critical |
| Third-party breach | Cloud service provider notifies organisation of unauthorised access | Medium to Critical (dependent on scope) |
| Physical document loss | Paper files containing personal data disposed of without shredding | Low to Medium |
| System misconfiguration | Database left exposed to internet without authentication | High to Critical |

---

## 5. Breach Severity Assessment Matrix

*This section provides the structured framework for assessing the severity of a confirmed personal data breach. The outcome of this assessment drives notification obligations and response prioritisation.*

### 5.1 Severity Levels

[Organisation Name] classifies personal data breaches into four severity levels:

| Severity Level | Label | Description |
|---|---|---|
| **Level 1** | Low | Limited in scope; low risk of harm to data subjects; unlikely to be notifiable |
| **Level 2** | Medium | Moderate scope or risk; requires careful assessment for notifiability |
| **Level 3** | High | Significant scope or risk; likely notifiable to Commissioner; possible data subject notification required |
| **Level 4** | Critical | Severe and/or widespread breach; mandatory notification to Commissioner and data subjects; immediate executive escalation required |

### 5.2 Severity Assessment Matrix

*Score the breach against each dimension below. Aggregate scores determine the overall severity level.*

**Impact Dimension Scoring:**

| Dimension | Score 1 (Low) | Score 2 (Medium) | Score 3 (High) | Score 4 (Critical) |
|---|---|---|---|---|
| **Data Sensitivity** | Contact/basic personal data only | Financial or identification data | Sensitive personal data (health, religion, political opinion) | Sensitive personal data combined with authentication credentials or financial data |
| **Volume of Data Subjects** | Fewer than 10 individuals | 10 – 500 individuals | 501 – 10,000 individuals | More than 10,000 individuals |
| **Breach Type** | Availability only (recoverable) | Integrity breach (limited) | Confidentiality breach (internal audience) | Confidentiality breach (external/public audience or malicious actor) |
| **Consequence to Data Subjects** | Negligible inconvenience | Financial or reputational impact (reversible) | Identity theft risk; financial loss | Physical harm; severe financial loss; discrimination |
| **Reversibility** | Fully recoverable; no external disclosure | Partially recoverable; limited disclosure | Irrecoverable; limited disclosure | Irrecoverable; widespread or public disclosure |
| **Special Category / Vulnerability** | No vulnerable data subjects | Some vulnerable data subjects | Majority are vulnerable data subjects | Vulnerable data subjects; sensitive personal data |

**Scoring Guide:**

- Sum scores across all six dimensions.
- **6–9:** Level 1 (Low)
- **10–14:** Level 2 (Medium)
- **15–19:** Level 3 (High)
- **20–24:** Level 4 (Critical)

### 5.3 Notifiability Assessment

*Following severity scoring, apply the notifiability test to determine whether the breach must be reported to the Commissioner under s143A.*

| Criteria | Outcome |
|---|---|
| Severity Level 4 (Critical) | **Mandatory notification to Commissioner** — initiate 72-hour clock immediately |
| Severity Level 3 (High) | **Presumptively notifiable** — DPO must document rationale if notification is waived |
| Severity Level 2 (Medium) | **Assessment required** — DPO to determine notifiability within 4 hours of classification |
| Severity Level 1 (Low) | **Unlikely to be notifiable** — log in breach register; no notification required unless circumstances change |
| Breach involves sensitive personal data | **Elevate severity by one level** regardless of other scores |
| Personal data has been made publicly available | **Presume notifiable** — immediate escalation to DPO |

### 5.4 Decision Flow — Notifiability Determination

*The following decision questions must be addressed sequentially by the DPO:*

1. **Has a personal data breach occurred or is one reasonably suspected?**
   - Yes → Proceed to Question 2.
   - No → Close incident; document rationale.

2. **Does the breach affect personal data for which [Organisation Name] is the data user?**
   - Yes → Proceed to Question 3.
   - No → Notify the relevant data user; assist as data processor per contractual obligations.

3. **Is the breach likely to result in a risk to the rights and freedoms of data subjects?**
   - Yes → **Notifiable breach** — initiate 72-hour notification process (Section 8).
   - No → Document rationale in breach register; monitor for developments.

4. **Is the breach likely to result in **high** risk to the rights and freedoms of data subjects?**
   - Yes → **High-risk breach** — initiate data subject notification (Section 9) in addition to Commissioner notification.
   - No → Commissioner notification only.

---

## 6. Roles and Responsibilities

*This section defines the roles involved in breach response and assigns responsibilities using the RACI framework. Tailor role titles to match [Organisation Name]'s internal structure.*

### 6.1 Key Roles and Descriptions

| Role | Description | Incumbent |
|---|---|---|
| **Data Protection Officer (DPO)** | Accountable for all PDPA compliance obligations; leads breach response; owns Commissioner and data subject notifications | [Name / Position] |
| **Chief Information Security Officer (CISO)** | Accountable for technical security response; leads containment and forensic investigation | [Name / Position] |
| **Chief Executive Officer (CEO)** | Ultimate organisational accountability; authorises public communications and critical decisions | [Name / Position] |
| **Legal Counsel** | Provides legal advice on notification obligations; reviews Commissioner notification and data subject communications; manages litigation risk | [Name / Position] |
| **Head of Compliance** | Oversees regulatory reporting; maintains liaison with BNM / NACSA where applicable | [Name / Position] |
| **IT Security Team** | Executes technical containment, forensic analysis, system recovery, and evidence preservation | [Team / Name] |
| **Human Resources** | Manages employee-related breaches; supports disciplinary processes where insider threat is confirmed | [Name / Position] |
| **Corporate Communications / PR** | Manages internal and external communications; coordinates media responses | [Name / Position] |
| **Business Unit Heads** | Support breach identification and investigation within their operational areas | [Names / Positions] |
| **Third-Party Breach Contact** | Designated contact at each third-party data processor for breach escalation | [Per Processor Agreement] |

### 6.2 RACI Matrix — Breach Response Activities

*R = Responsible (performs the work); A = Accountable (owns the outcome); C = Consulted (provides input); I = Informed (kept up to date)*

| Activity | DPO | CISO | CEO | Legal Counsel | Head of Compliance | IT Security | HR | Corp. Comms | Business Unit |
|---|---|---|---|---|---|---|---|---|---|
| Detect and report potential breach | R | C | I | I | I | R | C | I | R |
| Initial triage and confirmation | A | R | I | C | C | R | C | I | C |
| Activate Breach Response Team | A/R | C | I | I | I | C | I | I | I |
| Severity assessment and classification | A/R | R | I | C | C | R | C | I | C |
| Notifiability determination | A/R | C | I | C | C | I | I | I | I |
| Immediate containment actions | C | A | I | I | I | R | C | I | C |
| Evidence preservation | C | A | I | C | I | R | I | I | I |
| Commissioner notification (s143A) | A/R | C | C | C/R | C | C | I | I | I |
| Data subject notification | A | R | C | C | C | I | C | R | C |
| Internal escalation to CEO | A/R | C | ← Received | C | C | I | I | I | I |
| Media and public communications | C | C | A | C | C | I | I | R | I |
| Ongoing investigation management | C | A | I | C | C | R | C | I | C |
| Regulatory liaison (BNM/NACSA) | C | C | I | C | A/R | I | I | I | I |
| Post-incident review | A | R | I | C | C | R | C | C | R |
| Breach register update | A/R | C | I | I | C | C | I | I | I |
| Policy and control updates | A | C | I | C | C | R | C | I | C |
| Lessons learned dissemination | A/R | C | I | I | C | C | C | C | R |

### 6.3 Breach Response Team (BRT) — Composition and Activation

*Define the standing composition of the BRT and the trigger for its formal activation.*

The **Breach Response Team (BRT)** is a standing cross-functional team activated by the DPO upon confirmation (or reasonable suspicion) of a personal data breach meeting Level 2 severity or above.

**Core BRT Members:**

- Data Protection Officer (Team Lead)
- Chief Information Security Officer
- Legal Counsel
- Head of Compliance
- IT Security Team Lead
- Corporate Communications Representative

**Extended BRT Members (activated as required):**

- CEO — for Level 4 (Critical) breaches or breaches with significant public interest;
- Human Resources — where insider threat is suspected;
- Relevant Business Unit Head(s);
- External forensic or legal specialists (as engaged).

**BRT Activation Trigger:** The DPO shall activate the BRT within **[2 hours]** of confirming or reasonably suspecting a personal data breach of Level 2 severity or above.

**BRT Standing Meeting Schedule during Breach Response:**

| Breach Severity | Initial BRT Meeting | Subsequent Update Cadence |
|---|---|---|
| Level 4 (Critical) | Within 1 hour of activation | Every 4–6 hours until contained |
| Level 3 (High) | Within 2 hours of activation | Every 12 hours until contained |
| Level 2 (Medium) | Within 4 hours of activation | Daily until resolved |
| Level 1 (Low) | DPO + CISO only; no formal BRT | As required |

---

## 7. Breach Response Phases and Procedures

*This section sets out the end-to-end lifecycle of a breach response, from initial detection through to closure. Each phase must be documented in the Breach Register.*

### 7.1 Overview — Breach Response Lifecycle

| Phase | Description | Key Outputs |
|---|---|---|
| **Phase 1: Detection and Reporting** | Identify and report a potential breach | Initial Incident Report |
| **Phase 2: Triage and Confirmation** | Confirm whether a breach has occurred | Triage Assessment Record |
| **Phase 3: Severity Assessment** | Apply the Severity Assessment Matrix | Severity Classification Record |
| **Phase 4: Containment** | Limit the scope and continuation of the breach | Containment Action Log |
| **Phase 5: Notification** | Notify Commissioner and data subjects as required | Commissioner Notification Record; Data Subject Notification Record |
| **Phase 6: Investigation** | Conduct root cause analysis and forensic investigation | Investigation Report |
| **Phase 7: Remediation** | Implement corrective measures and restore systems | Remediation Action Plan |
| **Phase 8: Post-Incident Review** | Evaluate response effectiveness and derive lessons learned | Post-Incident Review Report |
| **Phase 9: Closure** | Close the breach record and update register | Breach Register Entry (closed) |

### 7.2 Phase 1 — Detection and Reporting

*Describe the mechanisms by which breaches are detected and the initial reporting pathway.*

[Organisation Name] maintains the following breach detection mechanisms:

**Detection Sources:**

- Security monitoring systems (SIEM, IDS/IPS, DLP tools);
- Employee self-reporting (via [Internal Reporting Channel — e.g., email, helpdesk portal]);
- Third-party data processor notifications;
- Notifications from regulatory bodies or law enforcement;
- Customer or public complaints;
- Internal audit findings;
- Routine system and access log reviews.

**Reporting Obligations — All Staff:**

All employees and contractors of [Organisation Name] are required to:

1. **Immediately** report any suspected or confirmed personal data breach to their line manager AND to the Data Protection Officer via [Reporting Channel] — email: [dpo@organisation.com] / telephone: [+60 X XXXX XXXX];
2. **Preserve** all evidence in its original state; do not delete, alter, or attempt to "clean up" affected systems without authorisation from the CISO;
3. **Not** disclose the breach to any external party — including family, friends, or media — without explicit authorisation from the DPO or Corporate Communications.

**Initial Incident Report:** The reporting party shall complete the **Initial Incident Report Form** (Appendix A) at the time of reporting, capturing:

- Date, time, and location of discovery;
- Nature and apparent scope of the incident;
- Systems, data types, and estimated number of data subjects affected;
- Immediate actions already taken;
- Reporter's name and contact details.

**Response Time Targets — Phase 1:**

| Action | Target Timeframe |
|---|---|
| Initial report to line manager / DPO | Immediately upon discovery |
| DPO acknowledgement of report | Within **30 minutes** (business hours) / **1 hour** (out of hours) |
| Initial triage commenced | Within **1 hour** of acknowledgement |

### 7.3 Phase 2 — Triage and Confirmation

*Define the triage process used to confirm whether the event constitutes a personal data breach.*

Upon receiving an Initial Incident Report, the DPO, supported by the CISO and IT Security Team, shall conduct an initial triage to:

1. Confirm whether a personal data breach has in fact occurred, or whether the event is a security incident not involving personal data;
2. Identify the personal data affected (categories, volume, sensitivity);
3. Identify the data subjects potentially affected;
4. Establish the time of the breach and the likely duration of exposure;
5. Determine whether the breach is ongoing or contained;
6. Document the triage findings in the **Triage Assessment Record** (Appendix B).

**Triage Outcome:**

| Outcome | Next Step |
|---|---|
| Breach confirmed | Proceed to Phase 3 — Severity Assessment; start 72-hour clock if notifiability likely |
| Breach unconfirmed but suspected | Continue investigation; implement precautionary containment; reassess within [4 hours] |
| Not a breach | Close incident; document rationale; no further breach response action required |

> **Critical Note on the 72-Hour Clock:** The 72-hour notification period under s143A commences from the point at which the organisation **becomes aware** that a personal data breach has occurred — not from the point at which the cause of the breach is fully understood. The DPO must therefore make a prompt notifiability assessment, even in the absence of complete information, and notify the Commissioner without undue delay if a notifiable breach is reasonably suspected.

---

## 8. 72-Hour Notification Obligation to the Commissioner

*This section is the operational core of the organisation's s143A compliance. It must contain precise, step-by-step procedures for preparing and submitting the mandatory notification to the Personal Data Protection Commissioner.*

### 8.1 Legal Basis

Section **143A** of the Personal Data Protection Act 2010 (as amended by Act A1727) imposes a mandatory obligation on data users to notify the **Personal Data Protection Commissioner** of a personal data breach **without undue delay** and, where feasible, **within 72 hours** of becoming aware of the breach, where the breach is likely to result in a risk to the rights and freedoms of data subjects.

Where notification cannot be made within 72 hours, [Organisation Name] shall provide the notification as soon as practicable thereafter, **accompanied by reasons for the delay**, which shall be documented.

### 8.2 Notification Threshold

Notification to the Commissioner is **mandatory** where the DPO determines that the breach meets one or more of the following conditions:

- The breach is likely to result in a **risk to the rights and freedoms** of one or more data subjects (Level 3 or Level 4 breach);
- The breach involves **sensitive personal data** regardless of volume;
- The breach involves personal data of **more than [threshold — e.g., 500] data subjects**;
- The breach has resulted in, or is likely to result in, **financial loss or identity fraud** affecting data subjects;
- The personal data has been **publicly disclosed or accessed by malicious actors**;
- The DPO, in consultation with Legal Counsel, determines that notification is prudent.

### 8.3 72-Hour Notification Timeline

*This timeline must be strictly managed. Assign a dedicated Breach Timeline Manager (typically the DPO or nominated deputy) to monitor the clock.*

| Hour | Action Required | Responsible |
|---|---|---|
| **H+0** | Breach awareness confirmed; 72-hour clock starts; DPO notified | Reporting party / IT Security |
| **H+1** | Initial triage completed; BRT activated (if not already) | DPO / CISO |
| **H+2** | Severity assessment and notifiability determination completed | DPO |
| **H+4** | Initial facts gathered; Commissioner notification preparation commenced | DPO / Legal Counsel |
| **H+12** | Draft Commissioner notification reviewed by Legal Counsel and CISO | DPO |
| **H+24** | If all required information is available, **first Commissioner notification submitted** | DPO |
| **H+48** | If notification not yet submitted, escalate to CEO; document reasons for delay | DPO / CEO |
| **H+72** | **Deadline — Commissioner notification must be submitted by this point** | DPO |
| **H+72+** | If notification is late, submit with documented reasons for delay | DPO / Legal Counsel |

### 8.4 Required Content of Commissioner Notification

*Refer to the Commissioner's prescribed notification form when available. Until a prescribed form is issued, include the following information:*

The notification to the Commissioner under s143A shall include, to the extent known at the time of notification:

1. **Nature of the breach** — type of breach (confidentiality, integrity, availability); how it occurred; whether it is ongoing or contained;
2. **Categories and approximate number of data subjects affected**;
3. **Categories and approximate volume of personal data records affected**;
4. **Name and contact details of the Data Protection Officer** or other point of contact from whom further information may be obtained;
5. **Likely consequences of the breach** — description of the probable impact on affected data subjects;
6. **Measures taken or proposed** to address the breach, including containment and remediation steps;
7. **Notification to data subjects** — whether data subjects have been or will be notified, and if not, the justification for non-notification;
8. **Time of the breach** (if known) and time of [Organisation Name]'s awareness of the breach;
9. **Reference number** assigned to the breach by [Organisation Name].

### 8.5 Phased Notification

Where all required information is not available within the 72-hour window, [Organisation Name] may submit a **phased notification** as follows:

- **Initial Notification (within 72 hours):** Submit all information available at the time; clearly state that further information will follow;
- **Supplementary Notification:** Submit outstanding information as soon as it becomes available, with a cross-reference to the initial notification reference number;
- Each supplementary notification shall be submitted via [Notification Channel — e.g., Commissioner's online portal / email: [pdpcommissioner@kkmm.gov.my]].

### 8.6 Submission Channel

*Update this section with the Commissioner's official notification portal URL or contact details when published.*

| Channel | Details |
|---|---|
| **Online Portal** | [URL of PDPC Breach Notification Portal — to be confirmed upon publication] |
| **Email** | [pdpcommissioner@kkmm.gov.my — confirm current address] |
| **Postal Address** | Personal Data Protection Commissioner, [Address — confirm current address] |
| **Telephone** | [+60 X XXXX XXXX — confirm current number] |

### 8.7 Documentation and Evidence of Notification

The DPO shall retain:

- A copy of the submitted notification and all supplementary notifications;
- Proof of submission (portal confirmation, email delivery receipt, or registered mail acknowledgement);
- The date and time of each submission;
- All internal records demonstrating when [Organisation Name] became aware of the breach and the steps taken to prepare the notification.

These records shall be retained in the Breach Register and retained for a minimum of **[7 years / per the organisation's document retention schedule]**.

---

## 9. Data Subject Notification Requirements and Thresholds

*This section operationalises the organisation's obligation to notify affected individuals under s143A(4) of the PDPA where a breach is likely to result in high risk to their rights and freedoms.*

### 9.1 Legal Basis

Under **section 143A(4)** of the PDPA, where a personal data breach is likely to result in a **high risk** to the rights and freedoms of the affected data subjects, [Organisation Name] must communicate the breach to the affected data subjects **without undue delay**.

### 9.2 Threshold for Data Subject Notification

Data subject notification is required where the DPO determines that the breach meets the **High-Risk Breach** threshold. The following factors indicate high risk:

| High-Risk Indicator | Assessment |
|---|---|
| Sensitive personal data exposed (health, financial, biometric, religious, political) | Strongly indicates high risk |
| Data can be used for identity theft or fraud | Strongly indicates high risk |
| Financial account or payment card data exposed | Strongly indicates high risk |
| Authentication credentials (passwords, PINs, security codes) exposed | Strongly indicates high risk |
| Data of vulnerable individuals (minors, elderly, financially vulnerable) | Strongly indicates high risk |
| Data publicly accessible or accessed by malicious actor | Strongly indicates high risk |
| Potential for physical harm to data subjects | Strongly indicates high risk |
| Volume exceeds [threshold — e.g., 1,000 data subjects] | Indicates high risk; assess other factors |

### 9.3 Exemptions from Data Subject Notification

[Organisation Name] is not required to notify data subjects where:

- The organisation has implemented appropriate technical and organisational measures (e.g., full encryption) that render the personal data unintelligible to any person not authorised to access it, and those measures were applied to the data affected by the breach;
- [Organisation Name] has taken subsequent measures that ensure that the high risk to data subjects is no longer likely to materialise;
- Notification would involve **disproportionate effort** — in such cases, a public communication shall be made instead (see Section 9.6);
- The Commissioner has determined that notification is not required.

> The DPO shall document the rationale for any exemption and retain this in the Breach Register.

### 9.4 Content of Data Subject Notification

The communication to affected data subjects shall, in plain, clear, and non-technical language, include:

1. The name and contact details of the DPO or another point of contact;
2. A description of the nature of the breach in plain language;
3. The categories of personal data affected;
4. The likely consequences of the breach;
5. Specific, practical steps the data subject can take to protect themselves (e.g., change passwords, monitor bank statements, place fraud alerts);
6. The measures [Organisation Name] has taken or proposes to take in response to the breach;
7. Whether [Organisation Name] has notified the Commissioner;
8. Contact details for the data subject to obtain further information or raise concerns.

### 9.5 Notification Channels

*Select the most appropriate channel for each affected population. Prioritise channels that will reach the data subject directly and promptly.*

| Channel | Appropriate Circumstances |
|---|---|
| **Email** | Where the organisation holds a current, verified email address for the data subject |
| **SMS / Push Notification** | Where the organisation holds a current mobile number and operates a mobile application |
| **Registered Post / Letter** | Where no digital channel is available or where the data sensitivity warrants physical delivery |
| **Telephone** | For high-value or high-risk individual cases |
| **In-app notification** | Where the organisation operates a customer-facing application |
| **Dedicated breach notification webpage** | As a supplement to direct notification, and where direct notification is not possible for all subjects |
| **Public notice / Press release** | Only where individual notification involves disproportionate effort; to be approved by CEO and Legal Counsel |

### 9.6 Timing of Data Subject Notification

- Data subject notification shall be made **without undue delay** following the determination that the breach meets the high-risk threshold;
- Data subject notification should not be deferred pending completion of the Commissioner notification, but should be coordinated where practicable;
- **Target:** Data subjects to be notified within **[72 hours / 7 days — specify]** of the high-risk determination.

### 9.7 Template — Data Subject Notification Letter

*A draft template for data subject notification is provided at Appendix D. The DPO and Legal Counsel must review and approve the final text before dispatch.*

---

## 10. Containment and Remediation Procedures

*This section defines the technical and operational procedures for limiting the impact of a breach and restoring normal, secure operations.*

### 10.1 Immediate Containment Actions

*Containment must begin immediately upon confirmation or reasonable suspicion of a breach, concurrently with the triage and notification processes. Containment does not wait for full investigation completion.*

The CISO and IT Security Team shall execute the following immediate containment actions as applicable:

**Technical Containment:**

- [ ] Isolate affected systems from the network to prevent further unauthorised access or data exfiltration;
- [ ] Disable compromised user accounts or service accounts;
- [ ] Revoke or rotate exposed authentication credentials (API keys, passwords, certificates);
- [ ] Block malicious IP addresses or domains at the perimeter firewall;
- [ ] Suspend or terminate affected third-party integrations or data feeds;
- [ ] Preserve forensic evidence before remediation — take system snapshots, capture logs, and document system state;
- [ ] Engage [Forensic Investigation Firm — Name / Contract Reference] if required.

**Physical Containment:**

- [ ] Retrieve misdirected physical documents or mail;
- [ ] Secure physical premises where a breach has occurred;
- [ ] Recover lost or stolen devices where possible.

**Operational Containment:**

- [ ] Notify affected third-party data processors of the breach and instruct containment;
- [ ] Suspend data sharing arrangements with third parties that may be affected;
- [ ] Instruct employees involved to cease any actions that may exacerbate the breach.

### 10.2 Evidence Preservation

*Evidence must be preserved in a forensically sound manner to support investigation, regulatory examination, and potential legal proceedings.*

| Evidence Type | Preservation Method | Responsible |
|---|---|---|
| System and application logs | Export and secure in write-protected storage; hash-verify | IT Security Team |
| Network traffic captures | Export PCAP files; retain in secure evidence repository | IT Security Team |
| Email records | Preserve in original format; do not delete | IT Security Team / HR |
| Physical documents | Secure in locked storage; chain of custody maintained | DPO / Relevant BU Head |
| Affected devices | Do not power off or wipe; preserve in secure storage | IT Security Team |
| Witness statements | Obtain written statements from staff who discovered/reported breach | DPO / HR |
| Third-party communications | Preserve all communications with data processors and other parties | DPO / Legal Counsel |

### 10.3 Investigation Procedures

*Following containment, a thorough investigation shall be conducted to establish the root cause, scope, and impact of the breach.*

The investigation shall establish:

1. **Root cause** — the technical, procedural, or human factor that caused the breach;
2. **Entry point** — how the breach occurred or by what means data was accessed/disclosed;
3. **Scope** — the complete set of personal data affected, including data categories, volume, and affected data subjects;
4. **Duration** — when the breach commenced and when it was fully contained;
5. **Impact** — actual or potential harm to affected data subjects;
6. **Attribution** — whether the breach was caused by an internal or external actor, and any evidence of malicious intent.

**Investigation outputs:**

- **Forensic Investigation Report** (where a forensic investigator is engaged);
- **Internal Investigation Report** documenting findings, evidence reviewed, and conclusions.

### 10.4 Remediation Plan

*Following investigation, the BRT shall develop and implement a Remediation Plan to address identified vulnerabilities and prevent recurrence.*

The Remediation Plan shall include:

| Remediation Category | Actions | Owner | Target Date |
|---|---|---|---|
| **Technical Controls** | Patch vulnerabilities; update system configurations; deploy additional monitoring | CISO / IT Security | [Date] |
| **Access Controls** | Reset credentials; review and tighten access permissions; implement MFA | IT Security | [Date] |
| **Process and Procedure** | Update affected processes and procedures; revise data handling protocols | DPO / BU Head | [Date] |
| **Training** | Deliver targeted training to staff involved or affected | DPO / HR | [Date] |
| **Third-Party Controls** | Update data processing agreements; audit third-party controls; replace non-compliant processors | DPO / Legal | [Date] |
| **Monitoring** | Enhance monitoring for indicators of further or related breaches | CISO / IT Security | [Date] |

**Remediation Completion Verification:** All remediation actions shall be verified as completed by the CISO, with evidence retained in the Breach Register. Outstanding actions beyond the target date shall be escalated to the DPO.

---

## 11. Post-Incident Review and Lessons Learned

*A formal post-incident review must be conducted following the closure of every Level 2 or above breach. The objective is continuous improvement of the organisation's breach prevention and response capabilities.*

### 11.1 Post-Incident Review Objectives

The post-incident review shall evaluate:

1. **Detection effectiveness** — How was the breach detected? Were detection mechanisms adequate? How much time elapsed between the breach occurring and its detection?
2. **Response effectiveness** — Did the organisation respond within target timeframes? Were the right people involved? Were decisions made promptly?
3. **Notification compliance** — Were the Commissioner and data subjects notified within required timeframes and with required content?
4. **Containment effectiveness** — How quickly was the breach contained? Was any unnecessary data exposure caused by delayed or ineffective containment?
5. **Remediation adequacy** — Have root causes been effectively addressed? Is the remediation plan sufficient to prevent recurrence?
6. **Policy and procedure gaps** — Did this breach reveal gaps or deficiencies in this Policy, related policies, or technical controls?
7. **Training needs** — Were staff adequately trained to detect, report, and respond to the breach?

### 11.2 Post-Incident Review Process

| Step | Action | Timeframe | Owner |
|---|---|---|---|
| 1 | Schedule post-incident review meeting | Within **5 business days** of breach closure | DPO |
| 2 | Circulate preliminary findings and timeline to BRT members | Prior to review meeting | DPO |
| 3 | Conduct structured post-incident review meeting | Within **10 business days** of breach closure | DPO (Facilitator) |
| 4 | Draft Post-Incident Review Report | Within **5 business days** of review meeting | DPO / CISO |
| 5 | Review and approve Post-Incident Review Report | Within **5 business days** of draft | Legal / CEO (for Level 4) |
| 6 | Communicate lessons learned to relevant staff | Within **20 business days** of breach closure | DPO / HR |
| 7 | Update Breach Register with review findings | Upon report approval | DPO |
| 8 | Track implementation of recommendations | Ongoing | DPO |

### 11.3 Post-Incident Review Report — Required Content

The Post-Incident Review Report (Appendix F) shall include:

- **Executive Summary** — Brief narrative of the breach, response, and key findings;
- **Breach Timeline** — Chronological log of all key events from initial detection to closure;
- **Root Cause Analysis** — Formal root cause determination using an appropriate methodology (e.g., Five Whys, Fishbone/Ishikawa);
- **Response Effectiveness Assessment** — Evaluation of each phase of the breach response against the procedures in this Policy;
- **Regulatory Compliance Assessment** — Confirmation that all notification obligations were met; documented rationale where timelines were not met;
- **Recommendations** — Specific, actionable recommendations for improving prevention, detection, and response;
- **Action Register** — Table of all recommended actions, with assigned owners and target completion dates.

### 11.4 Lessons Learned Dissemination

*Lessons learned must be shared appropriately to drive organisational improvement.*

| Audience | Content | Channel |
|---|---|---|
| BRT members | Full Post-Incident Review Report | Secure document share / BRT meeting |
| All employees | Sanitised lessons learned summary (anonymised, no sensitive details) | Company-wide email / Intranet |
| Relevant Business Units | Detailed findings relevant to their operations | BU meeting / Team briefing |
| Board / Risk Committee | Executive summary for Level 3 and Level 4 breaches | Board paper / Risk Committee report |
| Third-party data processors (where relevant) | Relevant findings and required control improvements | Contract review / Formal letter |

---

## 12. Breach Register Maintenance

*[Organisation Name] is required under section 143A(7) of the PDPA to maintain a record of all personal data breaches. This register must be available for inspection by the Commissioner on request.*

### 12.1 Legal Basis

Section **143A(7)** of the PDPA requires data users to maintain documentation of all personal data breaches, including those that are not notifiable to the Commissioner. The Commissioner may require production of these records at any time.

### 12.2 Breach Register — Required Fields

The Breach Register shall be maintained by the DPO and shall record the following information for each breach, regardless of severity:

| Field | Description |
|---|---|
| **Breach Reference Number** | Unique identifier assigned to each breach (format: BR-[YYYY]-[NNN]) |
| **Date/Time of Discovery** | When the breach was first detected or reported |
| **Date/Time of Awareness** | When [Organisation Name] confirmed it was aware of the breach (starts 72-hour clock) |
| **Date/Time of Occurrence** | When the breach occurred (if known) |
| **Nature of Breach** | Confidentiality / Integrity / Availability (or combination) |
| **Description** | Factual description of what occurred |
| **Personal Data Affected** | Categories of personal data; whether sensitive personal data is involved |
| **Volume** | Approximate number of data subjects and records affected |
| **Source/Cause** | Root cause of the breach |
| **Severity Classification** | Level 1 / 2 / 3 / 4 |
| **Notifiable to Commissioner?** | Yes / No |
| **Commissioner Notified?** | Yes / No; date and time of notification; reference number |
| **Data Subjects Notified?** | Yes / No / Exemption applied; date of notification |
| **Containment Actions** | Summary of containment measures taken |
| **Remediation Actions** | Summary of remediation measures taken or planned |
| **Post-Incident Review Completed?** | Yes / No; date; reference to review report |
| **Status** | Open / Closed |
| **Date Closed** | Date on which the breach response was formally closed |
| **Retained Documentation** | Reference to all documents related to this breach |

### 12.3 Breach Register Management

| Requirement | Detail |
|---|---|
| **Format** | [Specify: encrypted spreadsheet / GRC system / document management system] |
| **Location** | [Specify secure storage location] |
| **Access Controls** | Restricted to DPO, CISO, Legal Counsel, and authorised auditors |
| **Retention Period** | Minimum **[7 years / per regulatory requirements]** from date of breach closure |
| **Backup** | Backed up to [specify backup solution] on [daily/weekly] basis |
| **Review Frequency** | Reviewed by DPO on a [quarterly] basis to ensure completeness and accuracy |
| **Availability to Commissioner** | Produced within [48 hours] of a formal request from the Commissioner |

### 12.4 Breach Register — Access and Confidentiality

The Breach Register is classified as **Strictly Confidential**. Access is restricted to:

- Data Protection Officer (owner);
- Chief Information Security Officer;
- Legal Counsel;
- Internal Audit (read-only, for audit purposes);
- Authorised external auditors;
- The Commissioner, on formal request.

The Breach Register shall not be disclosed to any other party without the written approval of the DPO and, where applicable, Legal Counsel.

---

## 13. Training and Awareness

*Effective breach response depends on all staff understanding their obligations. This section establishes mandatory training requirements.*

### 13.1 Training Requirements

| Audience | Training Content | Frequency | Delivery Method |
|---|---|---|---|
| All employees and contractors | Personal data breach awareness; reporting obligations; initial response steps | Annual mandatory; onboarding | E-learning / Intranet module |
| BRT members | Detailed breach response procedures; notification obligations; RACI responsibilities | Annual; upon joining BRT | Workshop / Tabletop exercise |
| IT Security Team | Technical detection, containment, forensic, and evidence preservation procedures | Annual; upon joining team | Technical workshop |
| Senior Management / Board | Regulatory obligations; reputational and financial consequences; governance oversight | Annual | Executive briefing |
| Third-party data processors | Breach reporting obligations to [Organisation Name]; escalation procedures | Upon contract commencement; annual | Contractual obligation; briefing |

### 13.2 Tabletop Exercises

[Organisation Name] shall conduct a **Breach Response Tabletop Exercise** at minimum **annually**, simulating a realistic personal data breach scenario to test the effectiveness of this Policy and the readiness of the BRT. Exercise findings shall be documented and used to update this Policy and associated procedures.

---

## 14. Policy Governance

### 14.1 Policy Owner

This Policy is owned by the **Data Protection Officer**, with co-ownership by the **Chief Information Security Officer**. The DPO is responsible for ensuring the Policy is reviewed, updated, and communicated in accordance with the schedule set out in Section 15.

### 14.2 Review Triggers

This Policy shall be reviewed:

- **Annually** from the last review date; or
- **Within 30 days** of a Level 3 or Level 4 personal data breach; or
- Upon the issuance of new or amended legislation, regulatory guidance, or Commissioner circulars affecting breach notification obligations; or
- Upon significant changes to [Organisation Name]'s data processing activities, systems, or organisational structure; or
- Upon direction from the Board, Risk Committee, or Internal Audit.

### 14.3 Exceptions

Any exception to this Policy must be:

1. Formally requested in writing to the DPO, specifying the exception required and the business justification;
2. Reviewed and approved in writing by the DPO and Legal Counsel;
3. Subject to a compensating control approved by the CISO;
4. Recorded in the Exceptions Register maintained by the DPO;
5. Subject to review at the next scheduled Policy review, or within 12 months, whichever is earlier.

### 14.4 Non-Compliance

Failure to comply with this Policy may result in:

- Disciplinary action up to and including termination of employment;
- Personal liability under the PDPA (for natural persons who commit offences under the Act);
- Civil or criminal liability under Malaysian law;
- Regulatory enforcement action against [Organisation Name], including fines and public censure.

---

## 15. Review and Approval

### 15.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 15.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Legal Counsel | [Name] | [Signature] | [Date] |
| Chief Executive Officer | [Name] | [Signature] | [Date] |
| Board / Risk Committee (for Level-1 Policy) | [Name / Committee] | [Signature / Minute Reference] | [Date] |

---

## 16. References

*The following legislation, regulatory instruments, and internal policies are referenced by or are relevant to this document.*

### 16.1 Primary Legislation

| Reference | Title | Relevant Provisions |
|---|---|---|
| Act 709 | Personal Data Protection Act 2010 | s4 (Definitions); s6 (General Principle); s9 (Security Principle); s129 (Transfer Restriction) |
| Act A1727 | Personal Data Protection (Amendment) Act 2024 | s143A (Mandatory Breach Notification); s143A(4) (Data Subject Notification); s143A(7) (Breach Register) |
| Act 574 | Penal Code | Provisions on criminal damage, theft, fraud — relevant to insider threat and malicious breaches |
| Act 563 | Computer Crimes Act 1997 | Unauthorised access; modification of computer contents |
| Act 588 | Communications and Multimedia Act 1998 | Applicable obligations for licensed communications providers |

### 16.2 Regulatory Instruments and Guidelines

| Reference | Title | Issuing Body | Relevance |
|---|---|---|---|
| [PDPC/2024/XX] | [Code of Practice / Advisory on Data Breach Notification — to be issued] | Personal Data Protection Commissioner | Operational guidance on s143A |
| RMiT (2020) | Risk Management in Technology | Bank Negara Malaysia | Technology and cybersecurity risk management for financial institutions |
| [NACSA/2023/XX] | National Cybersecurity Policy | NACSA | CNII cybersecurity obligations |
| [BNM/RH/GL 000-14] | Guidelines on Information Technology Risk Management | Bank Negara Malaysia | IT risk and incident management |

### 16.3 Internal Policies and Procedures

| Document Title | Document ID | Owner |
|---|---|---|
| Data Protection Policy | [Document ID] | DPO |
| Information Security Policy | [Document ID] | CISO |
| Incident Response Policy | [Document ID] | CISO |
| Business Continuity and Disaster Recovery Plan | [Document ID] | [Owner] |
| Data Retention and Disposal Policy | [Document ID] | DPO |
| Third-Party Risk Management Policy | [Document ID] | [Owner] |
| Acceptable Use Policy | [Document ID] | CISO |

---

## 17. Appendices

### Appendix A — Initial Incident Report Form

*This form is to be completed by any employee or contractor who detects or is notified of a potential personal data breach. Submit immediately to your line manager and to the DPO.*

---

**INITIAL INCIDENT REPORT — PERSONAL DATA BREACH**

| Field | Response |
|---|---|
| **Date of This Report** | [DD/MM/YYYY] |
| **Reporter Name** | [Full Name] |
| **Reporter Department / Team** | [Department] |
| **Reporter Contact (Phone)** | [Phone Number] |
| **Reporter Contact (Email)** | [Email Address] |
| **Date / Time Incident Discovered** | [DD/MM/YYYY HH:MM] |
| **Location of Discovery** | [Physical location / System / Application] |
| **Nature of Incident** | [Describe what was observed in factual terms] |
| **Systems / Applications Affected** | [List all affected systems] |
| **Personal Data Categories Potentially Affected** | [Names / Contact details / Financial data / Health data / Other — specify] |
| **Estimated Number of Data Subjects Affected** | [Number or estimate] |
| **Is the Incident Ongoing?** | Yes / No / Unknown |
| **Immediate Actions Already Taken** | [Describe any steps already taken] |
| **Names of Other People Who Are Aware** | [Names and roles] |
| **Supporting Evidence / Attachments** | [List any screenshots, documents, or other evidence attached] |
| **Any Other Relevant Information** | [Free text] |

> **IMPORTANT: Do not disclose this incident to any external party, including the media or members of the public, without explicit authorisation from the Data Protection Officer.**

---

### Appendix B — Triage Assessment Record

*To be completed by the DPO and CISO following receipt of an Initial Incident Report.*

---

**TRIAGE ASSESSMENT RECORD**

| Field | Response |
|---|---|
| **Breach Reference Number** | BR-[YYYY]-[NNN] |
| **Related Incident Report Reference** | [Reference] |
| **Triage Conducted By** | [Name(s)] |
| **Date / Time Triage Commenced** | [DD/MM/YYYY HH:MM] |
| **Date / Time Triage Completed** | [DD/MM/YYYY HH:MM] |
| **Breach Confirmed?** | Yes / No / Ongoing Investigation |
| **If No — Rationale for Non-Confirmation** | [Explanation] |
| **Nature of Breach (if confirmed)** | Confidentiality / Integrity / Availability / Combination |
| **Personal Data Categories Affected** | [Specify] |
| **Sensitive Personal Data Involved?** | Yes / No |
| **Estimated Volume of Data Subjects** | [Number] |
| **Is Breach Ongoing or Contained?** | Ongoing / Contained / Unknown |
| **72-Hour Clock Start Time** | [DD/MM/YYYY HH:MM] |
| **72-Hour Notification Deadline** | [DD/MM/YYYY HH:MM] |
| **BRT Activated?** | Yes / No |
| **BRT Activation Date/Time** | [DD/MM/YYYY HH:MM] |
| **Preliminary Severity Level** | Level 1 / 2 / 3 / 4 |
| **Preliminary Notifiability Assessment** | Notifiable / Not Notifiable / Further Assessment Required |
| **Next Steps** | [List immediate next steps and assigned owners] |

---

### Appendix C — Breach Severity Assessment Worksheet

*To be completed by the DPO with input from CISO and IT Security Team. Use the scoring guide in Section 5.2.*

---

**BREACH SEVERITY ASSESSMENT WORKSHEET**

| Breach Reference | [BR-YYYY-NNN] |
|---|---|
| **Assessment Completed By** | [Name] |
| **Assessment Date** | [DD/MM/YYYY] |

| Dimension | Score (1–4) | Rationale |
|---|---|---|
| Data Sensitivity | [ ] | [Justification] |
| Volume of Data Subjects | [ ] | [Justification] |
| Breach Type | [ ] | [Justification] |
| Consequence to Data Subjects | [ ] | [Justification] |
| Reversibility | [ ] | [Justification] |
| Special Category / Vulnerability | [ ] | [Justification] |
| **TOTAL SCORE** | [ ] | |
| **Severity Level** | Level [ ] | |
| **Notifiable to Commissioner?** | Yes / No / Assessment Required | [Justification] |
| **High-Risk Breach (Data Subjects)** | Yes / No | [Justification] |
| **DPO Sign-Off** | [Signature / Name] | [Date] |

---

### Appendix D — Commissioner Notification Template

*Template for mandatory notification to the Personal Data Protection Commissioner under s143A PDPA. Review with Legal Counsel before submission. Submit via [Commissioner's notification portal / email].*

---

**PERSONAL DATA BREACH NOTIFICATION**
**To: Personal Data Protection Commissioner**
**Subject: Personal Data Breach Notification — [Organisation Name] — Ref: BR-[YYYY]-[NNN]**

---

**Section 1 — Notifying Organisation**

| Field | Detail |
|---|---|
| Organisation Name | [Organisation Name] |
| Registration Number | [Company Registration Number] |
| Registered Address | [Address] |
| Industry Sector | [Sector] |
| Data Protection Officer | [Name] |
| DPO Contact Email | [Email] |
| DPO Contact Phone | [Phone] |

**Section 2 — Breach Details**

| Field | Detail |
|---|---|
| Breach Reference Number | BR-[YYYY]-[NNN] |
| Date / Time of Breach Occurrence | [DD/MM/YYYY HH:MM] / Unknown |
| Date / Time Organisation Became Aware | [DD/MM/YYYY HH:MM] |
| Date / Time of This Notification | [DD/MM/YYYY HH:MM] |
| Nature of Breach | [Confidentiality / Integrity / Availability] |
| Description of the Breach | [Factual description] |
| Is the Breach Contained? | Yes / No / Partially |

**Section 3 — Personal Data Affected**

| Field | Detail |
|---|---|
| Categories of Personal Data Affected | [e.g., Name, NRIC, contact details, financial data, health data] |
| Sensitive Personal Data Involved? | Yes / No |
| Approximate Number of Data Subjects Affected | [Number] |
| Approximate Volume of Records Affected | [Number] |
| Categories of Data Subjects | [e.g., Customers, Employees, Third Parties] |

**Section 4 — Consequences**

*[Describe the likely consequences of the breach for the affected data subjects, including potential for identity theft, financial loss, discrimination, reputational harm, or other detriment.]*

**Section 5 — Measures Taken and Proposed**

*[Describe the containment and remediation measures taken or proposed, including technical, organisational, and procedural actions.]*

**Section 6 — Data Subject Notification**

| Field | Detail |
|---|---|
| Have data subjects been notified? | Yes / No / Pending |
| If notified — date and method of notification | [Date / Channel] |
| If not notified — justification | [Justification / Exemption basis] |

**Section 7 — Supplementary Information**

*[Note if this is an initial notification with further information to follow, providing an estimated date for the supplementary notification.]*

---

*Signed: [DPO Name], Data Protection Officer, [Organisation Name]*
*Date: [DD/MM/YYYY]*

---

### Appendix E — Data Subject Notification Template

*Template for notification to affected data subjects where a high-risk breach is confirmed. Adapt language to be clear and non-technical. Review with Legal Counsel and Corporate Communications before dispatch.*

---

**[Organisation Name] — Important Notice Regarding Your Personal Data**

Dear [Customer Name / Dear Valued Customer],

We are writing to inform you of an important matter concerning your personal data held by [Organisation Name].

**What Happened**

On [date], we discovered that [brief, plain-language description of the breach — e.g., "an unauthorised party gained access to our customer database"]. We immediately took steps to investigate and address this incident.

**What Information Was Involved**

The personal data that may have been affected includes: [list categories — e.g., your name, contact details, and account number]. [If sensitive personal data is involved: This includes [specify sensitive data categories].]

**What We Are Doing**

We have [describe containment and remediation actions in plain language — e.g., "secured the affected system, notified the Personal Data Protection Commissioner, and engaged external cybersecurity experts to investigate"]. We have also notified the relevant regulatory authorities.

**What You Should Do**

We recommend that you take the following steps to protect yourself:

- [Practical step 1 — e.g., Change your password for your [Organisation Name] account immediately];
- [Practical step 2 — e.g., Monitor your bank statements for any unusual transactions];
- [Practical step 3 — e.g., Be alert to phishing emails or calls claiming to be from [Organisation Name]];
- [Practical step 4 — e.g., Consider placing a fraud alert with your bank].

**Contact Us**

If you have questions or concerns about this notice, please contact our Data Protection Officer:

- Email: [dpo@organisation.com]
- Phone: [+60 X XXXX XXXX]
- Hours: [Business hours]

We sincerely apologise for this incident and for any concern it may cause you. We take the security of your personal data very seriously and are committed to ensuring this does not happen again.

Yours sincerely,
[CEO / DPO Name]
[Title]
[Organisation Name]

---

### Appendix F — Post-Incident Review Report Template

*To be completed by the DPO and CISO within 10 business days of breach closure for all Level 2 and above breaches.*

---

**POST-INCIDENT REVIEW REPORT**

| Field | Detail |
|---|---|
| **Breach Reference Number** | BR-[YYYY]-[NNN] |
| **Report Date** | [DD/MM/YYYY] |
| **Report Prepared By** | [Names and roles] |
| **Review Meeting Date** | [DD/MM/YYYY] |
| **Review Participants** | [Names and roles] |

**1. Executive Summary**

*[2–3 paragraph summary of the breach, the response, and key findings and recommendations.]*

**2. Breach Timeline**

| Date/Time | Event | Action Taken | By Whom |
|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [Event description] | [Action] | [Name / Role] |
| [DD/MM/YYYY HH:MM] | Breach awareness confirmed | 72-hour clock started | DPO |
| [DD/MM/YYYY HH:MM] | BRT activated | BRT convened | DPO |
| [DD/MM/YYYY HH:MM] | Commissioner notified | Notification submitted | DPO |
| [DD/MM/YYYY HH:MM] | Data subjects notified | Notifications dispatched | DPO / Corp Comms |
| [DD/MM/YYYY HH:MM] | Breach contained | Containment confirmed | CISO |
| [DD/MM/YYYY HH:MM] | Breach closed | Register updated | DPO |

**3. Root Cause Analysis**

*[Formal root cause determination. Use Five Whys or Fishbone methodology. Identify immediate cause, contributing factors, and root cause.]*

**4. Response Effectiveness Assessment**

| Phase | Target | Actual | Assessment | Notes |
|---|---|---|---|---|
| Detection | [Target] | [Actual] | Met / Not Met | [Notes] |
| Triage | Within 1 hour | [Actual] | Met / Not Met | [Notes] |
| Commissioner Notification | Within 72 hours | [Actual] | Met / Not Met | [Notes] |
| Data Subject Notification | Within [X] days | [Actual] | Met / Not Met | [Notes] |
| Containment | [Target] | [Actual] | Met / Not Met | [Notes] |

**5. Recommendations and Action Register**

| Ref | Recommendation | Category | Priority | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| R1 | [Recommendation] | Technical / Process / Training | High / Medium / Low | [Name] | [Date] | Open |
| R2 | [Recommendation] | | | | | Open |
| R3 | [Recommendation] | | | | | Open |

**6. Policy and Procedure Updates Required**

*[List any updates required to this Policy, related policies, or procedures as a result of this review.]*

**7. Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |

---

### Appendix G — Breach Register Template

*The Breach Register is a living document maintained by the DPO. Each row represents one confirmed breach. All fields must be completed to the extent known. The Register must be retained for a minimum of [7 years].*

| Breach Ref | Date Discovered | Date Aware | Date Occurred | Breach Type | Description | Data Categories | Sensitive Data? | No. Data Subjects | Severity | Notifiable? | Commissioner Notified (Date) | DS Notified (Date) | Containment Summary | Remediation Summary | PIR Completed (Date) | Status | Date Closed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BR-[YYYY]-001 | [Date] | [Date] | [Date] | [Type] | [Description] | [Categories] | Y/N | [Number] | L1/L2/L3/L4 | Y/N | [Date / Ref] | [Date / N/A] | [Summary] | [Summary] | [Date] | Open/Closed | [Date] |

---

### Appendix H — BRT Contact Directory

*Maintain current contact details for all BRT members. Review and update at least quarterly.*

| Role | Name | Mobile (24/7) | Email | Backup Contact |
|---|---|---|---|---|
| Data Protection Officer | [Name] | [Number] | [Email] | [Backup Name / Number] |
| Chief Information Security Officer | [Name] | [Number] | [Email] | [Backup Name / Number] |
| Chief Executive Officer | [Name] | [Number] | [Email] | [Backup Name / Number] |
| Legal Counsel | [Name] | [Number] | [Email] | [Backup Name / Number] |
| Head of Compliance | [Name] | [Number] | [Email] | [Backup Name / Number] |
| IT Security Team Lead | [Name] | [Number] | [Email] | [Backup Name / Number] |
| Corporate Communications | [Name] | [Number] | [Email] | [Backup Name / Number] |
| External Forensic Investigator | [Firm / Name] | [Number] | [Email] | [Contract Reference] |
| External Legal Advisor (PDPA) | [Firm / Name] | [Number] | [Email] | [Contract Reference] |

---

### Appendix I — Quick Reference Card — Breach Response Essentials

*For distribution to all staff. Print and keep readily accessible.*

---

**PERSONAL DATA BREACH — QUICK REFERENCE**

**If you discover or suspect a personal data breach:**

1. **STOP** — Do not delete, alter, or attempt to fix anything without authorisation.
2. **REPORT** — Immediately notify your line manager AND the DPO:
   - Email: **[dpo@organisation.com]**
   - Phone: **[+60 X XXXX XXXX]** (24/7)
3. **PRESERVE** — Keep all evidence (emails, screenshots, documents, devices).
4. **DO NOT TELL** anyone outside [Organisation Name] — including family, friends, or media.
5. **COMPLETE** the Initial Incident Report Form (Appendix A) and submit with your report.

**What counts as a personal data breach?**

- Lost or stolen device, laptop, phone, or USB drive containing customer/employee data
- Email sent to the wrong person containing personal data
- Cyber attack, ransomware, or unauthorised access to systems
- Paper documents with personal data lost, stolen, or not shredded
- Accidental deletion of personal data
- Any event where personal data may have been seen, taken, or changed by someone who should not have access

**Remember:** It is better to report something that turns out not to be a breach than to fail to report something that is.

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Data Protection Officer
**[Organisation Name]** | **Effective Date:** [Effective Date] | **Next Review:** [Next Review Date]