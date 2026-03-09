# Data Breach Notification Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Data Protection Officer / Chief Information Security Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] (Annual or post-incident) |
| **Approved By** | [Approved By — Name, Title] |
| **Status** | [Draft / Under Review / Approved] |

---

> **Regulatory Notice:** This procedure implements the mandatory data breach notification obligations under the **Personal Data Protection Act 2010 (PDPA)**, specifically **Section 143A** (Notification of Personal Data Breach) and **Section 9** (Security Principle), as well as applicable guidelines issued by the **Personal Data Protection Commissioner (PDPC)**. Non-compliance with notification timelines may result in enforcement action, fines, or prosecution under PDPA s143B.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Legal and Regulatory Framework](#3-legal-and-regulatory-framework)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Breach Detection Sources and Initial Triage](#5-breach-detection-sources-and-initial-triage)
6. [Breach Severity Assessment](#6-breach-severity-assessment)
7. [Containment Actions by Breach Type](#7-containment-actions-by-breach-type)
8. [72-Hour Notification to the Commissioner](#8-72-hour-notification-to-the-commissioner)
9. [Data Subject Notification](#9-data-subject-notification)
10. [Evidence Preservation and Forensic Investigation](#10-evidence-preservation-and-forensic-investigation)
11. [Post-Incident Review and Documentation](#11-post-incident-review-and-documentation)
12. [Breach Register and Record-Keeping](#12-breach-register-and-record-keeping)
13. [Training and Awareness](#13-training-and-awareness)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This procedure establishes a structured, repeatable, and legally compliant process for [Organization Name] to detect, assess, contain, investigate, and notify relevant parties of personal data breaches in accordance with Malaysian law.

The procedure fulfils the obligations of [Organization Name] as a **data controller** under the **Personal Data Protection Act 2010 (PDPA)**, and gives effect to:

- **Section 9 (Security Principle)** — the obligation to protect personal data against loss, misuse, modification, unauthorised or accidental access, disclosure, alteration, or destruction.
- **Section 143A (Notification of Personal Data Breach)** — the mandatory obligation to notify the Personal Data Protection Commissioner within **72 hours** of becoming aware of a personal data breach that is likely to result in significant harm to data subjects.

This procedure also supports compliance with:

- [Organization Name]'s internal Information Security Policy.
- Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document (where applicable to licensed financial institutions).
- National Cyber Security Agency (NACSA) guidelines on cyber incident reporting (where applicable).
- Any sector-specific regulatory notification requirements applicable to [Organization Name].

### 1.2 Scope

This procedure applies to:

- **All personal data** processed by [Organization Name] in any form (electronic, paper-based, or otherwise), including personal data held by authorised data processors on behalf of [Organization Name].
- **All employees, contractors, third-party vendors, and agents** of [Organization Name] who process or have access to personal data.
- **All systems, applications, infrastructure, and physical locations** where personal data is stored or processed, including cloud-hosted environments.
- **All categories of personal data** as defined under PDPA, including sensitive personal data as defined in Section 40 of the PDPA.

### 1.3 Out of Scope

*Document any exclusions from this procedure's scope. For example, incidents involving solely non-personal data, or incidents handled under a separate classified incident response framework.*

- Cyber incidents that do not involve personal data (to be handled solely under the Information Security Incident Response Plan).
- Personal data of [Organization Name] employees where the breach is governed by a separate HR data breach procedure: [Reference Document ID].
- [Add additional exclusions as applicable.]

---

## 2. Definitions

*This section defines key terms used throughout the procedure. Definitions should align with those used in the PDPA and PDPC guidelines.*

| Term | Definition |
|---|---|
| **Personal Data Breach** | A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored, or otherwise processed by [Organization Name] or its data processors. |
| **Data Controller** | [Organization Name], being the person who either alone or jointly or in common with other persons processes personal data or has control over or authorises the processing of personal data, as defined in PDPA s4. |
| **Data Processor** | Any person who processes personal data on behalf of [Organization Name], not being an employee of [Organization Name]. |
| **Data Subject** | An individual who is the subject of personal data. |
| **Commissioner** | The Personal Data Protection Commissioner appointed under PDPA s10. |
| **Commissioner's Portal / Notification Channel** | [Insert current PDPC notification portal URL or contact details as published by PDPC] |
| **Significant Harm** | Harm of a type specified by the Commissioner by order, including but not limited to financial loss, physical harm, psychological distress, damage to reputation, or identity theft. |
| **Sensitive Personal Data** | Personal data consisting of information as to the physical or mental health or condition of a data subject, his political opinions, his religious beliefs or other beliefs of a similar nature, the commission or alleged commission by him of any offence, or any other personal data as the Minister may determine. (PDPA s40) |
| **72-Hour Window** | The mandatory notification period commencing from the point at which [Organization Name] **becomes aware** of a qualifying personal data breach, within which notification to the Commissioner must be submitted. |
| **Incident Response Team (IRT)** | The internal cross-functional team convened by the DPO/CISO to manage a personal data breach. |
| **Data Protection Officer (DPO)** | The designated officer responsible for overseeing PDPA compliance and coordinating breach response. |
| **CISO** | Chief Information Security Officer, responsible for technical security response. |
| **Threat Actor** | A person or group responsible for an event or incident that impacts, or has the potential to impact, the security of personal data. |
| **Containment** | Actions taken to limit the scope, impact, and propagation of a personal data breach. |
| **Forensic Investigation** | A structured technical examination of systems, logs, and artefacts to determine the cause, scope, and attribution of a breach. |
| **RTO** | Recovery Time Objective — the targeted duration within which a system must be restored after a breach. |
| **PIА** | Privacy Impact Assessment, a systematic process to evaluate privacy risks of data processing activities. |

---

## 3. Legal and Regulatory Framework

### 3.1 Primary Legislation

| Legislation / Guideline | Relevant Provision | Obligation |
|---|---|---|
| Personal Data Protection Act 2010 | Section 9 — Security Principle | Implement practical steps to protect personal data against loss, misuse, modification, unauthorised access, disclosure, alteration, or destruction. |
| Personal Data Protection Act 2010 | Section 143A — Notification of Personal Data Breach | Notify the Commissioner within **72 hours** of becoming aware of a qualifying personal data breach. |
| Personal Data Protection Act 2010 | Section 143B — Failure to Notify | Offence for failure to notify; liable on conviction to a fine not exceeding RM500,000 or to imprisonment for a term not exceeding three years, or to both. |
| Personal Data Protection Act 2010 | Section 40 — Sensitive Personal Data | Enhanced protection obligations for sensitive personal data categories. |
| Personal Data Protection (Amendment) Act 2024 | Various | Amendments introducing mandatory breach notification and strengthened enforcement provisions. |

### 3.2 Supplementary Regulatory Requirements

*List additional regulatory requirements applicable to [Organization Name]. Remove or modify rows that are not applicable.*

| Authority | Document / Guideline | Applicability |
|---|---|---|
| Bank Negara Malaysia (BNM) | Risk Management in Technology (RMiT) Policy Document | [Applicable / Not Applicable — delete as appropriate] |
| NACSA | National Cyber Security Policy / Critical Information Infrastructure (CII) Guidelines | [Applicable / Not Applicable] |
| Securities Commission Malaysia | Guidelines on Management of Cyber Risk | [Applicable / Not Applicable] |
| PDPC | Personal Data Protection Standard | [Applicable / Not Applicable] |
| [Other Authority] | [Document Name] | [Applicable / Not Applicable] |

### 3.3 Internal Policies

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy governing security controls |
| Data Protection Policy | [Doc ID] | Overarching PDPA compliance policy |
| Information Security Incident Response Plan | [Doc ID] | Parent incident response framework |
| Data Retention and Disposal Policy | [Doc ID] | Governs data lifecycle and disposal after breach |
| Third-Party / Vendor Management Policy | [Doc ID] | Governs processor breach reporting obligations |
| Business Continuity Plan | [Doc ID] | Activated in severe breach scenarios |

---

## 4. Roles and Responsibilities

### 4.1 RACI Matrix

*This RACI table defines accountability for each phase of the breach response. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | DPO | CISO / IT Security | Legal Counsel | Senior Management / CEO | HR | Communications / PR | Data Processor (if applicable) | Board / Risk Committee |
|---|---|---|---|---|---|---|---|---|
| **Detection** |||||||||
| Receive and log breach reports | R | R | I | I | I | — | I | — |
| Initial triage and confirmation | C | R | — | — | — | — | C | — |
| **Assessment** |||||||||
| Determine breach severity | R | R | C | I | — | — | C | I |
| Assess likelihood of significant harm | A | C | C | I | — | — | — | — |
| Determine notification obligations | A | C | R | C | — | — | — | — |
| **Containment** |||||||||
| Technical containment actions | C | R | — | — | — | — | C | — |
| Physical containment actions | C | R | C | — | R | — | — | — |
| **Notification — Commissioner** |||||||||
| Prepare 72-hour notification | A | C | R | C | — | — | — | — |
| Submit notification to Commissioner | A | — | R | C | — | — | — | — |
| Manage ongoing PDPC correspondence | A | C | R | C | — | — | — | — |
| **Notification — Data Subjects** |||||||||
| Determine notification criteria met | A | C | R | C | — | — | — | — |
| Draft data subject notification | A | — | R | C | — | R | — | — |
| Deliver data subject notification | R | C | C | I | C | R | — | — |
| **Investigation** |||||||||
| Evidence preservation | C | R | I | — | — | — | — | — |
| Forensic investigation | C | R | C | — | — | — | — | — |
| Root cause analysis | C | R | C | I | — | — | — | — |
| **Post-Incident** |||||||||
| Post-incident review | A | R | C | I | C | I | C | I |
| Breach register update | A | C | — | — | — | — | — | — |
| Lessons learned and remediation | A | R | C | C | C | — | — | I |
| Board / committee reporting | A | C | C | R | — | — | — | I |

### 4.2 Key Role Descriptions

**Data Protection Officer (DPO)**
- Single point of accountability for PDPA compliance throughout the breach response.
- Authority to convene the Incident Response Team.
- Responsible for all communications with the PDPC Commissioner.
- Escalates to Senior Management and Board as required.
- Contact: [DPO Name] | [Email] | [Phone]

**Chief Information Security Officer (CISO) / IT Security**
- Leads technical containment, investigation, and remediation.
- Coordinates forensic evidence preservation.
- Maintains technical records and investigation logs.
- Contact: [CISO Name] | [Email] | [Phone]

**Legal Counsel**
- Advises on legal obligations and litigation risk.
- Reviews all external notifications prior to submission.
- Manages regulatory correspondence alongside the DPO.
- Contact: [Legal Counsel Name / External Firm] | [Email] | [Phone]

**Senior Management / CEO**
- Decision authority for high-severity and critical breach escalations.
- Approves data subject notification content.
- Briefs the Board and Risk Committee.
- Contact: [Name] | [Email] | [Phone]

**Communications / PR**
- Manages external media and public communications.
- Coordinates data subject notification delivery (where bulk communications required).
- Drafts public statements if required.
- Contact: [Name] | [Email] | [Phone]

**HR**
- Involved where breach involves employee personal data or internal threat actor.
- Supports disciplinary proceedings if applicable.
- Contact: [Name] | [Email] | [Phone]

**All Employees**
- Report suspected or actual personal data breaches immediately to the DPO or via [Reporting Channel].
- Do not attempt to investigate or contain independently without CISO authorisation.
- Do not disclose breach details externally without authorisation.

---

## 5. Breach Detection Sources and Initial Triage

### 5.1 Overview

*This section describes the sources through which [Organization Name] may become aware of a personal data breach, and the immediate triage steps to be performed upon detection. The goal of initial triage is to confirm whether a breach has occurred and to gather sufficient information to initiate the severity assessment process.*

### 5.2 Breach Detection Sources

[Organization Name] may detect a personal data breach through the following channels:

| Detection Source | Description | Initial Owner |
|---|---|---|
| **Internal IT Monitoring** | SIEM alerts, intrusion detection system (IDS/IPS) alerts, data loss prevention (DLP) tool alerts, endpoint detection and response (EDR) alerts | CISO / IT Security |
| **Employee Report** | Employee identifies accidental disclosure, lost device, misdirected email, or suspicious activity and reports via [Reporting Channel] | Any Employee → DPO |
| **Data Processor / Vendor Notification** | Third-party processor notifies [Organization Name] of a breach affecting personal data processed on [Organization Name]'s behalf | DPO / Vendor Manager |
| **Data Subject Complaint** | Data subject contacts [Organization Name] to report unexpected access to their personal data by a third party | DPO / Customer Service |
| **External Threat Intelligence** | Law enforcement, government agency (e.g., NACSA, PDPC), or industry peer alerts [Organization Name] to a breach | CISO / DPO |
| **Media or Public Disclosure** | Breach reported in media, dark web monitoring, or public forum before internal detection | CISO / Communications |
| **Regulatory Authority Notification** | PDPC, BNM, or other regulator directly notifies [Organization Name] | DPO / Legal |
| **Security Audit / Penetration Test** | Breach discovered during authorised security assessment | CISO |
| **Physical Security Event** | Loss or theft of physical assets (paper files, USB drives, laptops, printed reports) containing personal data | Facility Security / HR → DPO |

### 5.3 Initial Triage Procedure

Upon receiving a potential breach report, the **first recipient** (employee, IT, vendor manager) must:

**Step 1 — Do Not Destroy Evidence**
- Do not delete, modify, or power off affected systems without CISO authorisation.
- Preserve all logs, emails, and records relating to the potential breach.

**Step 2 — Immediate Notification**
- Notify the **DPO and CISO** immediately, and no later than **[X] hours** (e.g., 2 hours) after becoming aware.
- Use the designated reporting channel: [Internal Breach Hotline / Email / Ticketing System].

**Step 3 — Complete the Initial Breach Report Form**
- The reporting person completes **Appendix A — Initial Breach Report Form**.
- Capture at minimum:
  - Date and time the breach was discovered.
  - How the breach was discovered (detection source).
  - Description of the suspected breach.
  - Types of personal data potentially affected.
  - Estimated number of data subjects potentially affected.
  - Systems, applications, or physical locations involved.
  - Immediate actions taken (if any).

**Step 4 — DPO / CISO Confirmation**
- The DPO and CISO jointly assess the Initial Breach Report Form within **[X] hours** (e.g., 4 hours) to confirm:
  - Is this a confirmed personal data breach, a suspected breach, or a false positive?
  - Has personal data been involved?
- If confirmed or reasonably suspected: **activate the Incident Response Team (IRT) and proceed to Section 6 (Severity Assessment)**.
- If classified as a false positive: document the rationale in the Breach Register (Section 12) and close the record.

### 5.4 Initial Triage Checklist

| # | Triage Question | Response Options |
|---|---|---|
| 1 | Has a security event affecting personal data been confirmed or is it reasonably suspected? | Confirmed / Suspected / False Positive |
| 2 | Are the affected personal data records identifiable to specific data subjects? | Yes / No / Unknown |
| 3 | Is the breach ongoing (i.e., is unauthorised access still possible)? | Yes / No / Unknown |
| 4 | Does the breach involve sensitive personal data (PDPA s40)? | Yes / No / Unknown |
| 5 | Does the breach involve personal data of minors (below 18 years)? | Yes / No / Unknown |
| 6 | Does the breach involve financial account or payment card data? | Yes / No / Unknown |
| 7 | Has the breach been caused by a third-party data processor? | Yes / No / Unknown |
| 8 | Has the Commissioner's 72-hour window commenced? | Yes — Record start time: [Datetime] |

> **72-Hour Clock Start:** The 72-hour notification window commences at the point [Organization Name] **becomes aware** of the breach. This is recorded as the date and time the Initial Breach Report Form is received and confirmed by the DPO. Document this timestamp immediately: **[Record Date/Time Here]**

---

## 6. Breach Severity Assessment

### 6.1 Overview

*This section establishes the framework for assessing the severity of a confirmed personal data breach. Severity drives the escalation path, response urgency, and notification obligations. Assessment must be completed within [X] hours of breach confirmation to allow adequate time for 72-hour notification preparation.*

### 6.2 Severity Assessment Criteria

The DPO and CISO jointly assess severity using the following criteria:

| Criterion | Considerations |
|---|---|
| **Volume** | Number of data subjects affected (records compromised) |
| **Data Sensitivity** | Category of personal data involved (general personal data vs. sensitive personal data per s40) |
| **Nature of Breach** | Confidentiality breach (unauthorised disclosure), Integrity breach (unauthorised modification), Availability breach (loss or destruction) |
| **Ease of Identification** | Whether the data can be used to directly identify data subjects |
| **Threat Actor** | Internal (employee), external (cybercriminal), accidental, unknown |
| **Likely Harm** | Likelihood and severity of harm to data subjects (financial, physical, psychological, reputational) |
| **Reversibility** | Whether harm to data subjects can be mitigated or is irreversible |
| **Breadth of Exposure** | Whether data has been accessed by one person, a small group, or widely disseminated |
| **Special Circumstances** | Involves public figures, minors, vulnerable individuals, or data subjects in jurisdictions with additional rights |

### 6.3 Severity Classification

| Severity Level | Definition | Examples | Response Timeline |
|---|---|---|---|
| **Critical** | Breach involving large-scale exposure of sensitive personal data with high likelihood of significant harm to data subjects or systemic risk to [Organization Name]. | Ransomware encrypting customer financial records; mass exfiltration of health data; public exposure of authentication credentials for all customer accounts. | Immediate escalation to CEO and Board. IRT activated within 1 hour. PDPC notification prepared urgently. |
| **High** | Breach involving sensitive personal data or a significant volume of general personal data with a meaningful likelihood of harm to data subjects. | Unauthorised access to a database containing national identification numbers (MyKad), medical information, or financial account data for 1,000+ data subjects; loss of an unencrypted laptop containing customer records. | IRT activated within 2 hours. Senior Management notified. PDPC notification prepared. |
| **Medium** | Breach involving a moderate volume of general personal data with a low-to-moderate likelihood of harm to data subjects. | Misdirected email containing a spreadsheet of customer names and contact details sent to incorrect recipient; accidental public posting of non-sensitive customer list. | IRT convened within 4 hours. DPO leads response. Assess PDPC notification requirement. |
| **Low** | Breach involving a small volume of non-sensitive personal data with a negligible likelihood of harm to data subjects. | Single record accidental disclosure to wrong customer with no sensitive data; temporary and immediately remediated access control misconfiguration with no confirmed access by unauthorised person. | DPO manages response. Document in Breach Register. Assess PDPC notification requirement — likely not required but must be documented. |

### 6.4 Severity Assessment Worksheet

*Complete this worksheet as part of the formal severity assessment. Retain in the breach file.*

**Breach Reference:** [Breach Ref No.]
**Assessment Date/Time:** [Date / Time]
**Assessed By:** [DPO Name] / [CISO Name]

| Factor | Assessment | Weight |
|---|---|---|
| Volume of records affected | [<100 / 100–999 / 1,000–9,999 / 10,000+] | [Score 1–4] |
| Sensitivity of data | [General / Includes sensitive personal data / Financial / Health] | [Score 1–4] |
| Nature of breach | [Availability only / Confidentiality or Integrity] | [Score 1–2] |
| Ease of identification | [Not directly identifiable / Directly identifiable] | [Score 1–2] |
| Likely harm to data subjects | [None / Low / Moderate / High / Severe] | [Score 1–5] |
| Reversibility | [Fully reversible / Partially reversible / Irreversible] | [Score 1–3] |
| Breadth of exposure | [Limited / Moderate / Wide] | [Score 1–3] |
| **Total Score** | | [Sum] |
| **Severity Classification** | | [Critical / High / Medium / Low] |

**Severity Classification Rationale:**
> *[Document the reasoning for the severity classification, including any overriding factors considered.]*

**PDPC 72-Hour Notification Required?** [Yes / No / Under Assessment]
**Data Subject Notification Required?** [Yes / No / Under Assessment]

---

## 7. Containment Actions by Breach Type

### 7.1 Overview

*This section prescribes specific technical and procedural containment actions to be taken based on the type of personal data breach detected. Containment aims to stop ongoing harm, prevent further exposure, and preserve evidence. Containment actions must not destroy forensic evidence — co-ordinate with the CISO before taking any actions that could affect logs, system states, or physical artefacts.*

> **Important:** Containment actions should be taken **without delay** once a breach is confirmed. Speed of containment directly limits the harm to data subjects. However, containment actions must be co-ordinated with the CISO to ensure evidence is preserved.

### 7.2 General Containment Principles

Regardless of breach type, the following general containment steps apply:

1. **Isolate** — Prevent further spread or access by isolating affected systems or assets.
2. **Revoke** — Revoke compromised credentials, access tokens, API keys, or certificates.
3. **Notify** — Immediately notify the DPO and CISO if not already done.
4. **Preserve** — Preserve all logs, records, and artefacts before any remediation action.
5. **Document** — Record every action taken with timestamps in the Incident Log (Appendix B).
6. **Escalate** — Escalate to senior management in accordance with the severity level.

### 7.3 Containment by Breach Type

#### 7.3.1 Unauthorised Access (External Intrusion / Hacking)

*Actions to be taken where an external threat actor has gained unauthorised access to systems containing personal data.*

| Priority | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | Isolate affected systems from the network (segment or shut down network interfaces — do NOT power off without forensic authorisation). | CISO / IT Security | Immediate |
| 2 | Revoke all active sessions and force re-authentication for affected systems and user accounts. | CISO / IT Security | Immediate |
| 3 | Reset credentials for compromised accounts; enforce MFA where not already active. | CISO / IT Security | Within 1 hour |
| 4 | Block identified threat actor IP addresses, domains, or C2 infrastructure at perimeter firewall and WAF. | CISO / IT Security | Immediate |
| 5 | Preserve system snapshots, memory dumps, and all logs (application, access, authentication, firewall, proxy) before any remediation. | CISO / IT Security | Before any remediation |
| 6 | Engage external forensic firm if required: [Forensic Firm Name / Contact]. | DPO / CISO | Within [X] hours for Critical/High |
| 7 | Notify law enforcement (PDRM Cyber Crime unit, NACSA) if criminal activity is confirmed or suspected. | DPO / Legal | As required |
| 8 | Assess scope of data exfiltration using DLP logs, SIEM correlation, and proxy logs. | CISO / IT Security | Within 4 hours |
| 9 | Review and harden access controls post-containment. | CISO / IT Security | Post-containment |

#### 7.3.2 Accidental Disclosure / Misdirected Communication

*Actions to be taken where personal data has been accidentally disclosed to an unintended recipient (e.g., email sent to wrong address, document shared publicly in error).*

| Priority | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | Contact the unintended recipient immediately and request deletion/return of the data. Obtain written confirmation where possible. | DPO / Employee | Immediate |
| 2 | Revoke access to shared files/links/cloud documents immediately. | CISO / IT Security | Immediate |
| 3 | Recall the misdirected email if technically possible (via email admin console). | CISO / IT Security | Immediate |
| 4 | Preserve the original email, sharing log, or transmission record as evidence. | CISO / IT Security | Immediate |
| 5 | Assess whether the unintended recipient has accessed, copied, or further transmitted the data. | DPO | Within 24 hours |
| 6 | Notify affected data subjects if the breach meets the criteria in Section 9. | DPO | Per s143A / Section 9 |

#### 7.3.3 Loss or Theft of Physical Assets / Devices

*Actions to be taken where a physical device (laptop, mobile phone, USB drive, paper records) containing personal data has been lost or stolen.*

| Priority | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | Perform remote wipe of the lost/stolen device immediately via MDM system: [MDM Platform Name]. | CISO / IT Security | Immediate |
| 2 | Revoke all credentials and access tokens associated with the device. | CISO / IT Security | Immediate |
| 3 | Determine whether the device was encrypted at rest. If yes, document encryption confirmation. | CISO / IT Security | Immediate |
| 4 | Confirm whether the device was covered by full-disk encryption and whether it was locked at time of loss. | CISO / IT Security | Within 2 hours |
| 5 | Report theft to police (obtain police report number for records). | Employee / HR / Legal | Within 24 hours if theft |
| 6 | Identify all personal data stored on the device (refer to Data Asset Register). | DPO / CISO | Within 4 hours |
| 7 | Assess likelihood of data access by unauthorised person (encrypted vs. unencrypted; locked vs. unlocked). | DPO / CISO | Within 4 hours |
| 8 | Initiate PDPC notification assessment based on data sensitivity and encryption status. | DPO | Within 72-hour window |

#### 7.3.4 Ransomware Attack

*Actions to be taken where ransomware has encrypted systems containing personal data, or where a threat actor has threatened to publish personal data ("double extortion").*

| Priority | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | **Do not pay the ransom without Board/Legal/DPO authorisation.** Payment does not guarantee data recovery and may violate sanctions laws. | CEO / Legal | — |
| 2 | Immediately isolate all affected systems and network segments to prevent lateral movement. | CISO / IT Security | Immediate |
| 3 | Identify the ransomware variant, initial access vector (phishing, RDP, supply chain), and affected systems. | CISO / IT Security | Within 2 hours |
| 4 | Preserve all forensic evidence (encrypted files, ransom notes, logs) before any restoration. | CISO / IT Security | Immediate |
| 5 | Engage cyber incident response retainer firm: [Retainer Firm Name / Contact]. | CISO / DPO | Immediate for Critical |
| 6 | Assess whether personal data has been exfiltrated prior to encryption (double extortion). Review threat actor communications, dark web monitoring alerts, and data transfer logs. | CISO / IT Security | Within 4 hours |
| 7 | Notify NACSA via the official reporting portal where CII systems are affected: [NACSA Portal URL]. | DPO / CISO | As required under NACSA guidelines |
| 8 | Notify BNM (if applicable as licensed financial institution) per RMiT reporting obligations. | DPO / CISO | Per RMiT timeline |
| 9 | Initiate PDPC notification — ransomware affecting personal data is presumed a qualifying breach. | DPO | Within 72-hour window |
| 10 | Initiate recovery from clean, verified backups after forensic clearance. | CISO / IT | Post-containment |

#### 7.3.5 Insider Threat / Unauthorised Internal Access

*Actions to be taken where an employee or internal user has accessed or exfiltrated personal data without authorisation.*

| Priority | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | Revoke the suspect user's access to all systems immediately, in co-ordination with HR and Legal. | CISO / HR / Legal | Immediate upon confirmation |
| 2 | Preserve all relevant audit logs, DLP alerts, email logs, and access records without alerting the subject. | CISO / IT Security | Immediate |
| 3 | Engage HR and Legal before confronting or communicating with the subject. | DPO / HR / Legal | Before any confrontation |
| 4 | Assess scope of data accessed or exfiltrated using SIEM, DLP, and access logs. | CISO / IT Security | Within 4 hours |
| 5 | Initiate HR disciplinary procedure in parallel with technical investigation. | HR / Legal | As directed by Legal |
| 6 | Consider referral to PDRM if criminal activity (e.g., theft, fraud, computer misuse) is suspected. | Legal / DPO | As required |
| 7 | Assess recipient of exfiltrated data — was it sold, disclosed to a competitor, or retained personally? | DPO / Legal | Within 48 hours |

---

## 8. 72-Hour Notification to the Commissioner

### 8.1 Legal Basis

Under **PDPA Section 143A**, [Organization Name] must notify the Personal Data Protection Commissioner **within 72 hours** of becoming aware of a personal data breach where the breach is likely to result in significant harm to data subjects.

The 72-hour period commences at the time [Organization Name] **becomes aware** of the breach — recorded as per Section 5.3 of this procedure.

Where notification cannot be made within 72 hours, [Organization Name] must submit a notification as soon as possible thereafter, accompanied by a written explanation of the reasons for the delay, in accordance with PDPC guidance.

### 8.2 Triggering Criteria for Commissioner Notification

Commissioner notification is **mandatory** if a personal data breach meets any of the following criteria:

| Trigger Criterion | Assessment |
|---|---|
| The breach is likely to result in **significant harm** to data subjects (financial loss, physical harm, psychological distress, identity theft, damage to reputation, loss of confidentiality of data subject to professional secrecy). | [Yes / No / Assess] |
| The breach involves **sensitive personal data** as defined in PDPA s40. | [Yes / No / Assess] |
| The breach involves a **large volume** of personal data (threshold: [define threshold per organizational policy, e.g., >500 records]). | [Yes / No / Assess] |
| The breach involves **financial account or payment data** that could enable fraud. | [Yes / No / Assess] |
| The breach involves **authentication credentials** (passwords, PINs, security questions) that could enable account takeover. | [Yes / No / Assess] |
| The breach involves personal data of **minors**. | [Yes / No / Assess] |
| The breach is the result of a **deliberate, criminal act** (hacking, insider threat, ransomware). | [Yes / No / Assess] |

If the breach does **not** meet the above criteria, Commissioner notification may not be mandatory. However:
- The breach must still be recorded in the Breach Register (Section 12).
- The DPO must document the rationale for not notifying.
- Legal Counsel should review the decision before it is finalised.

### 8.3 Content Requirements for Commissioner Notification

The PDPC notification must contain the following information:

| Required Information | Content |
|---|---|
| **Identity of the Data Controller** | [Organization Name], registration number, and contact details. |
| **DPO Contact Details** | Name, email address, and telephone number of the DPO. |
| **Nature of the Breach** | Description of how the breach occurred, the type of breach (confidentiality, integrity, availability), and the systems or processes involved. |
| **Categories of Personal Data Affected** | Specific categories of personal data affected (e.g., name, IC number, financial data, health data). |
| **Approximate Volume** | Estimated number of data subjects affected and records compromised. |
| **Likely Consequences** | Description of the likely consequences of the breach for data subjects. |
| **Measures Taken or Proposed** | Technical and organisational measures taken or proposed to address the breach and mitigate its effects. |
| **Notification to Data Subjects** | Whether data subjects have been or will be notified, and on what timeline. |

*Where all required information is not available within the 72-hour window, [Organization Name] may submit an initial notification with available information and supplement with a follow-up report. Document the reason for the partial submission.*

### 8.4 Notification Timeline and Milestones

| Milestone | Target Time (Hours from Awareness) | Owner |
|---|---|---|
| Breach confirmed and IRT activated | 0–2 hours | DPO / CISO |
| Severity assessment completed | 2–6 hours | DPO / CISO |
| Decision to notify Commissioner confirmed | 6–12 hours | DPO / Legal |
| Initial draft notification prepared | 12–24 hours | DPO / Legal |
| Draft notification reviewed by Legal Counsel | 24–36 hours | Legal Counsel |
| Draft notification approved by Senior Management | 36–48 hours | CEO / Senior Management |
| Notification submitted to Commissioner | No later than 72 hours from awareness | DPO |
| Follow-up report submitted (if initial notification was partial) | As directed by PDPC or within [X] days | DPO / Legal |

### 8.5 Notification Submission Process

**Step 1:** Access the PDPC breach notification portal at: **[PDPC Portal URL — insert current URL as published by the Personal Data Protection Commissioner]**

**Step 2:** Log in using [Organization Name]'s registered PDPC account credentials. If [Organization Name] is not registered, contact the PDPC directly: **[PDPC Contact Details]**.

**Step 3:** Complete the online breach notification form using the information prepared in accordance with Section 8.3.

**Step 4:** Attach supporting documents as required by the PDPC form (e.g., incident report, containment evidence, initial forensic findings).

**Step 5:** Submit the form and retain the submission confirmation reference number.

**Step 6:** Record the submission reference number, date, and time of submission in the Breach Register.

**Alternative:** If the PDPC portal is unavailable, submit notification via:
- **Email:** [PDPC Notification Email Address]
- **Post:** [PDPC Postal Address]
- **Telephone (to confirm receipt):** [PDPC Telephone Number]

*Note: Always confirm with PDPC the preferred notification channel. The above contact details must be updated whenever PDPC publishes amended contact information.*

### 8.6 Post-Submission Management

After submitting the initial notification, [Organization Name] must:

- Acknowledge and respond to all PDPC correspondence within **[X] business days** (e.g., 2 business days).
- Provide supplementary information requested by the PDPC promptly.
- Submit a **Final / Supplementary Report** within **[X] days** of the initial notification, detailing:
  - Root cause analysis findings.
  - Complete scope of affected data.
  - All remediation actions completed.
  - Measures implemented to prevent recurrence.
- Retain all notification correspondence in the Breach Register.

---

## 9. Data Subject Notification

### 9.1 Legal Basis

Under **PDPA Section 143A**, [Organization Name] is required to notify affected data subjects where the breach is likely to result in **significant harm** to those individuals. The Commissioner may also direct [Organization Name] to notify data subjects even where [Organization Name] has assessed that notification is not required.

### 9.2 Criteria for Mandatory Data Subject Notification

Data subject notification is **required** if the breach meets any of the following criteria:

| Criterion | Rationale |
|---|---|
| The breach is likely to result in **financial loss or fraud** to the data subject (e.g., bank account credentials, payment card data compromised). | High risk of direct, quantifiable harm. |
| The breach involves **sensitive personal data** (health, political opinions, religious beliefs, criminal record). | Disproportionate potential harm from exposure. |
| The breach involves **identity theft enablers** (full name + IC number + date of birth + address combination). | Enables impersonation and downstream fraud. |
| The breach involves **authentication credentials** (passwords, PINs, security tokens) that have not been successfully revoked/reset. | Ongoing access risk. |
| The breach involves **location data** that could endanger the safety of the data subject. | Physical safety risk. |
| The Commissioner **directs** notification to data subjects. | Mandatory compliance with regulatory direction. |
| The volume of affected data subjects is **large** and systemic harm is likely. | Population-level harm threshold. |

Data subject notification is **not required** if [Organization Name] can demonstrate that:
- The personal data affected was **fully encrypted** with a strong encryption algorithm and the encryption key was not compromised.
- [Organization Name] has taken **immediate action** that has fully eliminated the likelihood of significant harm.
- The notification would require **disproportionate effort** — in which case, a public communication must be issued instead (e.g., press release, website notice).

*Document the basis for not notifying data subjects in writing and retain in the Breach Register.*

### 9.3 Data Subject Notification Content Requirements

All data subject notifications must contain the following information in **plain, clear language**:

| Required Element | Guidance |
|---|---|
| **Identity of the Data Controller** | Full name and contact details of [Organization Name] and the DPO. |
| **Nature of the Breach** | A clear description of what happened, in non-technical language. |
| **Categories of Personal Data Affected** | Specific types of personal data that were involved (e.g., "your name, email address, and account number"). |
| **Likely Consequences** | The potential impact of the breach on the data subject (e.g., "Your details may have been accessed by an unauthorised person"). |
| **Steps [Organization Name] Has Taken** | Actions taken to contain the breach and protect data subjects. |
| **Steps Data Subjects Should Take** | Specific protective actions the data subject should take (e.g., change password, monitor bank statements, place fraud alerts). |
| **Contact Information** | How data subjects can contact [Organization Name] for further information, including the DPO's contact details and a dedicated breach helpline (if established). |
| **Date of Notification** | Date of the communication. |

> **Note:** Do not include information in the data subject notification that could assist threat actors (e.g., specific system vulnerabilities exploited, names of internal systems). Review with Legal Counsel before sending.

### 9.4 Data Subject Notification Delivery Methods

Select the appropriate delivery method based on the nature of the breach and the data subjects affected:

| Method | Appropriate Circumstances | Considerations |
|---|---|---|
| **Direct Email** | Where [Organization Name] holds a valid email address for the data subject. | Preferred for speed. Confirm email addresses are current. |
| **SMS / Telephone** | Where [Organization Name] holds a valid mobile number; where urgency warrants immediate contact. | Use for high-severity breaches. |
| **Postal Letter** | Where no electronic contact details are available; where a formal, documented notification is required. | Slower — allow for postal delivery time. |
| **In-App / Portal Notification** | Where data subjects have active accounts on [Organization Name]'s platform or mobile app. | Suitable where data subjects regularly access the platform. |
| **Website / Public Notice** | Where the volume of affected data subjects is very large or direct notification would require disproportionate effort. | Must be prominent, remain accessible for minimum [X] days. |
| **Press Release / Media** | Where the breach is of public interest and data subjects cannot be identified individually. | Coordinate with Communications / PR. Approved by CEO. |

### 9.5 Notification Timeline

| Milestone | Target |
|---|---|
| Decision to notify data subjects confirmed | Within 72-hour window (or as directed by PDPC) |
| Draft notification content prepared | Within [X] hours of decision |
| Draft reviewed by Legal Counsel | Within [X] hours of draft |
| Draft approved by DPO and Senior Management | Before any communication is sent |
| Data subject notification delivered | As soon as practicable; target within [X] days of awareness |
| Dedicated breach helpline/mailbox established (if applicable) | Before first notification is sent |
| Notification delivery confirmed and logged | Immediately upon sending |

### 9.6 Special Considerations

**Minors:** Where affected data subjects include individuals under 18 years, notification should also be directed to the parent or guardian. Use clear, age-appropriate language where the notification will be read by a minor.

**Vulnerable Individuals:** Where affected data subjects include elderly individuals, individuals with disabilities, or others who may face particular challenges in taking protective steps, consider providing additional support (e.g., helpline staffed with trained personnel).

**Cross-Border Notifications:** Where affected data subjects are located outside Malaysia, consider whether the laws of their jurisdiction impose additional notification obligations. Consult Legal Counsel.

**Language:** Notifications should be delivered in a language understood by the data subject. Consider providing notifications in both Bahasa Malaysia and English as standard practice.

---

## 10. Evidence Preservation and Forensic Investigation

### 10.1 Overview

*This section governs the preservation of evidence and forensic investigation process following a confirmed personal data breach. Proper evidence preservation is essential for (a) understanding the root cause and scope of the breach, (b) fulfilling regulatory reporting obligations accurately, and (c) supporting potential legal proceedings.*

> **Critical Principle:** Evidence preservation **takes priority** over system restoration. No affected system should be restored, reimaged, or powered off without explicit authorisation from the CISO, and after a forensic image or snapshot has been taken.

### 10.2 Evidence Preservation Steps

| Step | Action | Responsible |
|---|---|---|
| 1 | Identify all systems, accounts, devices, and physical assets potentially involved in the breach. | CISO / IT Security |
| 2 | Create forensic images or snapshots of affected systems, virtual machines, and storage volumes before any changes are made. | CISO / Forensic Analyst |
| 3 | Preserve all relevant log files: application logs, access logs, authentication logs, firewall logs, proxy logs, DLP logs, email logs, and SIEM events. Set log retention to maximum. | CISO / IT Security |
| 4 | Preserve memory (RAM) dumps from affected systems if the breach is active or very recent. | CISO / Forensic Analyst |
| 5 | Preserve physical assets (devices, USB drives, printed documents) in a secure, chain-of-custody environment. | CISO / Facility Security |
| 6 | Maintain a chain-of-custody log for all physical evidence (Appendix C — Chain of Custody Log). | CISO / Legal |
| 7 | Preserve all external communications related to the breach (emails, messages, ransom notes, threat actor communications). | DPO / CISO / Legal |
| 8 | Preserve screenshots and documentation of the breach as discovered (e.g., screenshots of compromised system state). | CISO / IT Security |
| 9 | Restrict access to preserved evidence to authorised personnel only. Maintain an evidence access log. | CISO |

### 10.3 Forensic Investigation Process

The forensic investigation seeks to determine:

- **What happened?** — A reconstruction of the timeline of the breach.
- **When did it happen?** — Date and time of initial compromise and detection.
- **How did it happen?** — The attack vector, vulnerability, or error that enabled the breach.
- **What was affected?** — Specific systems, data stores, and personal data records impacted.
- **Who was responsible?** — Identity or profile of the threat actor (internal, external, or third-party).
- **What was the scope of exfiltration?** — Whether and to what extent personal data was accessed, copied, or transmitted externally.

#### 10.3.1 Internal Investigation

| Step | Action | Responsible |
|---|---|---|
| 1 | Appoint an investigation lead (CISO or delegate). | DPO / CISO |
| 2 | Define investigation scope and objectives in writing. | CISO |
| 3 | Conduct log analysis, network traffic analysis, and malware analysis as appropriate. | CISO / IT Security |
| 4 | Interview relevant personnel (co-ordinate with HR and Legal for employee interviews). | CISO / HR / Legal |
| 5 | Correlate findings from SIEM, DLP, EDR, and other security tools. | CISO / IT Security |
| 6 | Document investigation findings progressively in the Investigation Log (Appendix B). | CISO |
| 7 | Provide interim investigation reports to the DPO for PDPC reporting purposes. | CISO |

#### 10.3.2 External Forensic Investigation

Where the breach is of high or critical severity, or where internal capabilities are insufficient:

| Condition | Action |
|---|---|
| Breach involves suspected criminal activity (ransomware, targeted attack). | Engage external incident response / forensic firm: [Firm Name / Retainer Reference]. |
| Internal forensic capability is insufficient to determine scope of exfiltration. | Engage external forensic firm. |
| Legal proceedings or regulatory enforcement are anticipated. | Engage external forensic firm with legal professional privilege (through Legal Counsel). |
| Commissioner or BNM requests independent investigation. | Engage approved external forensic firm. |

*Approved External Forensic Firms:*

| Firm | Contact | Retainer Reference |
|---|---|---|
| [Firm Name 1] | [Contact Details] | [Retainer Ref] |
| [Firm Name 2] | [Contact Details] | [Retainer Ref] |

### 10.4 Investigation Documentation

The following documents must be maintained throughout the investigation:

| Document | Purpose | Location |
|---|---|---|
| Investigation Log (Appendix B) | Chronological record of all investigation steps, findings, and actions taken. | [Secure Document Repository] |
| Chain of Custody Log (Appendix C) | Record of all physical evidence collected, transferred, and stored. | [Secure Document Repository] |
| Forensic Analysis Report | Technical findings from forensic examination. | [Secure Document Repository] |
| Interview Records | Notes or transcripts from staff interviews. | [HR / Legal — Privileged] |
| Threat Actor Communications | Preserved copies of ransom notes, attacker emails, or threat communications. | [Secure Document Repository] |

*All investigation documents are classified as **[Confidential / Restricted]** and must be stored in [Secure Document Repository] with access limited to the IRT and Legal Counsel.*

---

## 11. Post-Incident Review and Documentation

### 11.1 Overview

*This section defines the mandatory post-incident review process to be completed after every confirmed personal data breach, regardless of severity. The post-incident review aims to identify root causes, evaluate the effectiveness of the breach response, and implement improvements to prevent recurrence.*

### 11.2 Post-Incident Review Trigger

| Severity | Post-Incident Review Required | Minimum Timeline |
|---|---|---|
| Critical | Yes | Within 5 business days of breach closure |
| High | Yes | Within 10 business days of breach closure |
| Medium | Yes | Within 15 business days of breach closure |
| Low | Yes (lightweight review) | Within 30 business days of breach closure |

A breach is considered "closed" when:
- Containment is confirmed complete.
- Affected systems have been restored or replaced.
- All regulatory notifications have been submitted.
- All data subject notifications have been delivered.
- The forensic investigation report has been finalised.

### 11.3 Post-Incident Review Participants

| Role | Required |
|---|---|
| Data Protection Officer | Yes |
| CISO / IT Security | Yes |
| Legal Counsel | Yes (Critical / High) |
| Senior Management | Yes (Critical / High) |
| HR | Where insider threat was involved |
| Third-party processor representative | Where breach originated from a processor |
| Communications / PR | Where public communications were issued |
| External Forensic Firm | Where engaged |

### 11.4 Post-Incident Review Agenda

The post-incident review must address the following:

**1. Breach Timeline Reconstruction**
- Complete chronological timeline from initial compromise to breach closure.
- Identification of any detection or response delays and their causes.

**2. Root Cause Analysis**
- Technical root cause (vulnerability, misconfiguration, human error, third-party failure).
- Organisational root cause (process gap, control failure, training deficiency).
- Use a structured root cause analysis methodology (e.g., 5-Why, Fishbone/Ishikawa).

**3. Response Effectiveness Assessment**
- How effectively was the breach detected?
- Was the initial triage process followed correctly?
- Was the severity assessment accurate?
- Were containment actions timely and effective?
- Was the 72-hour notification met? If not, why?
- Was data subject notification appropriate and timely?
- Was communication with the PDPC effective?

**4. Impact Assessment**
- Confirmed volume of affected data subjects.
- Confirmed categories of personal data compromised.
- Actual harm experienced by data subjects (where known).
- Financial, operational, and reputational impact on [Organization Name].
- Regulatory consequences (fines, undertakings, directions from PDPC).

**5. Lessons Learned and Remediation Actions**

| Finding | Remediation Action | Owner | Target Completion Date | Status |
|---|---|---|---|---|
| [Finding 1] | [Action 1] | [Owner] | [Date] | [Open / In Progress / Closed] |
| [Finding 2] | [Action 2] | [Owner] | [Date] | [Open / In Progress / Closed] |
| [Finding 3] | [Action 3] | [Owner] | [Date] | [Open / In Progress / Closed] |

**6. Policy and Procedure Updates**
- Identify any gaps in existing policies, procedures, or standards exposed by the breach.
- Recommend updates to this procedure, the Information Security Policy, or other relevant documents.
- Assign ownership for policy updates with target review dates.

**7. Training and Awareness Updates**
- Identify training gaps exposed by the breach.
- Recommend targeted training for affected teams or organisation-wide awareness campaigns.

### 11.5 Post-Incident Review Report

A formal **Post-Incident Review Report** must be produced after every Critical and High severity breach, containing:

- Executive Summary (suitable for Board reporting).
- Breach Timeline.
- Root Cause Analysis.
- Impact Assessment.
- Response Effectiveness Assessment.
- Lessons Learned.
- Remediation Action Plan with owners and target dates.
- Recommendations for policy/procedure updates.

*Template: Appendix D — Post-Incident Review Report Template.*

The Post-Incident Review Report must be:
- Reviewed and signed off by the DPO and CISO.
- Presented to [Senior Management / Risk Committee / Board] within [X] days of the review meeting.
- Retained in the Breach Register.

---

## 12. Breach Register and Record-Keeping

### 12.1 Legal Basis

[Organization Name] is required to maintain records of all personal data breaches under **PDPA Section 143A** and PDPC guidelines, regardless of whether the breach met the threshold for Commissioner notification. These records must be made available to the Commissioner on request.

### 12.2 Breach Register

*The Breach Register is the central record of all personal data breach events. It must be maintained by the DPO and updated throughout the breach lifecycle.*

The Breach Register must record, at minimum, the following for each breach event:

| Field | Description |
|---|---|
| **Breach Reference Number** | Unique identifier (e.g., BR-YYYY-NNN) |
| **Date/Time of Occurrence** (if known) | When the breach is believed to have commenced |
| **Date/Time of Discovery** | When [Organization Name] first became aware |
| **Date/Time of IRT Activation** | When the Incident Response Team was convened |
| **Breach Type** | Unauthorised access / Accidental disclosure / Loss or theft / Ransomware / Insider threat / Other |
| **Description of Breach** | Summary of what occurred |
| **Systems / Assets Involved** | Systems, applications, or physical assets involved |
| **Personal Data Categories Affected** | Categories of personal data compromised |
| **Volume — Records** | Estimated and confirmed number of personal data records affected |
| **Volume — Data Subjects** | Estimated and confirmed number of data subjects affected |
| **Sensitive Personal Data Involved** | Yes / No — specify category if yes |
| **Severity Classification** | Critical / High / Medium / Low |
| **Containment Actions Taken** | Summary of containment measures |
| **PDPC Notification Required** | Yes / No — with rationale |
| **PDPC Notification Date/Time** | Date and time notification submitted to Commissioner |
| **PDPC Reference Number** | Commissioner's reference number for the notification |
| **Data Subject Notification Required** | Yes / No — with rationale |
| **Data Subject Notification Date** | Date notification delivered to data subjects |
| **Number of Data Subjects Notified** | Count of data subjects who received notification |
| **Root Cause** | Summary root cause (from Post-Incident Review) |
| **Remediation Actions** | Summary of remediation actions taken |
| **Post-Incident Review Completed** | Yes / No — with date |
| **Breach Status** | Open / Closed |
| **DPO Sign-Off** | Name and date |

### 12.3 Retention Period

All breach-related records, including the Breach Register, investigation logs, notification correspondence, and post-incident review reports, must be retained for a minimum of **[X] years** (e.g., 7 years) from the date of breach closure, or such longer period as required by applicable law or regulatory direction.

Retention location: [Secure Document Repository / Data Room]
Access restrictions: DPO, CISO, Legal Counsel, Senior Management (role-based access)

---

## 13. Training and Awareness

### 13.1 Overview

*This section describes the training and awareness obligations to ensure all personnel are equipped to identify and report personal data breaches promptly.*

### 13.2 Mandatory Training Requirements

| Training Programme | Target Audience | Frequency | Delivery Method |
|---|---|---|---|
| PDPA Data Breach Awareness — All Staff | All employees and contractors | Annual + upon onboarding | [E-learning / In-person / Workshop] |
| Data Breach Response Procedure — Advanced | IRT members (DPO, CISO, Legal, HR, Communications) | Annual | [Tabletop exercise / Workshop] |
| Forensic Evidence Preservation | CISO and IT Security team | Annual | [Workshop / External training] |
| PDPC Notification Process | DPO and Legal Counsel | Bi-annual or post-regulatory update | [Self-study / Workshop] |
| Breach Response Tabletop Exercise | IRT members | Annual (minimum) | [Simulated exercise facilitated by DPO/CISO] |
| Phishing and Social Engineering Awareness | All employees | Quarterly (simulated) + Annual formal | [Phishing simulation / E-learning] |

### 13.3 Training Records

- Training completion records are maintained by [HR / Learning Management System].
- DPO confirms annual training completion rates and reports to Senior Management.
- Training gaps identified during post-incident reviews are remediated within [X] business days.

---

## 14. Review and Approval

### 14.1 Procedure Review Schedule

This procedure must be reviewed:

- **Annually**, on or before the Next Review Date stated in the document header.
- **Following any confirmed personal data breach**, to incorporate lessons learned.
- **Following any material change** in PDPA, PDPC guidelines, or related regulatory requirements.
- **Following any significant change** in [Organization Name]'s IT infrastructure, data processing activities, or organisational structure.

Review is led by the DPO in consultation with the CISO and Legal Counsel. Approved revisions must be authorised by [Authorising Role — e.g., Chief Risk Officer / CEO].

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial version — approved for use. |
| 1.1 | [Date] | [Author Name, Title] | [Description of changes made, e.g., Updated PDPC notification portal URL; revised severity thresholds.] |
| 2.0 | [Date] | [Author Name, Title] | [Major revision — e.g., Revised following PDPA Amendment Act 2024; updated to reflect post-incident learnings from Breach Ref BR-YYYY-NNN.] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Legal Counsel | [Name] | [Signature] | [Date] |
| Chief Risk Officer / Head of Compliance | [Name] | [Signature] | [Date] |
| Chief Executive Officer / Authorising Executive | [Name] | [Signature] | [Date] |

---

## 15. References

| Reference | Document / Provision | Relevance |
|---|---|---|
| PDPA s9 | Personal Data Protection Act 2010, Section 9 — Security Principle | Obligation to protect personal data against loss, misuse, unauthorised access, or modification. |
| PDPA s40 | Personal Data Protection Act 2010, Section 40 — Sensitive Personal Data | Enhanced protection requirements for sensitive categories of personal data. |
| PDPA s143A | Personal Data Protection Act 2010, Section 143A — Notification of Personal Data Breach | Mandatory 72-hour notification to the Commissioner; data subject notification obligations. |
| PDPA s143B | Personal Data Protection Act 2010, Section 143B — Failure to Notify | Criminal penalties for failure to notify; fine up to RM500,000 and/or imprisonment up to 3 years. |
| PDPA Amendment Act 2024 | Personal Data Protection (Amendment) Act 2024 | Amendments introducing and strengthening mandatory breach notification provisions. |
| PDPC Guidelines | Personal Data Protection Standard and PDPC Guidance on Breach Notification | Supplementary regulatory guidance on breach notification content and process. |
| BNM RMiT | Risk Management in Technology Policy Document (BNM/RH/PD 028-2) | Technology and cyber incident reporting obligations for BNM-licensed entities. |
| NACSA Guidelines | National Cyber Security Policy / CII Protection Guidelines | Cyber incident reporting for operators of Critical Information Infrastructure. |
| ISO/IEC 27001:2022 | A.5.24, A.5.26 — Information Security Incident Management | International standard for information security incident management and response. |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide | Technical guidance on incident response lifecycle. |
| [Internal Doc ID] | Information Security Policy | Parent internal policy governing security controls and incident response. |
| [Internal Doc ID] | Data Protection Policy | Overarching PDPA compliance policy. |
| [Internal Doc ID] | Information Security Incident Response Plan | Parent incident response framework within which this procedure operates. |

---

## 16. Appendices

### Appendix A — Initial Breach Report Form

*To be completed by the person who first discovers or receives a report of a potential personal data breach. Submit immediately to the DPO and CISO using the designated reporting channel: [Email / Ticketing System / Hotline].*

---

**INITIAL BREACH REPORT FORM**
**Breach Reference:** [To be assigned by DPO]
**Date / Time Submitted:** _______________
**Submitted By (Name / Department):** _______________
**Contact Details:** _______________

**Section 1 — Discovery Details**

| Question | Response |
|---|---|
| How did you discover the potential breach? | |
| Date and time of discovery: | |
| Date and time the breach is believed to have commenced (if known): | |

**Section 2 — Description of Suspected Breach**

*Provide a brief description of what occurred:*

> [Free text]

**Section 3 — Personal Data Involved**

| Question | Response |
|---|---|
| Does the incident involve personal data? | Yes / No / Unknown |
| If yes, what types of personal data may be affected? (tick all that apply) | ☐ Name ☐ IC / Passport Number ☐ Email Address ☐ Phone Number ☐ Address ☐ Financial Account Data ☐ Payment Card Data ☐ Health / Medical Data ☐ Biometric Data ☐ Username / Password ☐ Other: _____________ |
| Approximate number of data subjects potentially affected: | |
| Approximate number of records potentially affected: | |

**Section 4 — Systems / Assets Involved**

| Question | Response |
|---|---|
| Which systems, applications, or physical assets are involved? | |
| Is the breach ongoing? | Yes / No / Unknown |
| Have any immediate actions been taken? | Yes (describe below) / No |
| Description of any immediate actions taken: | |

**Section 5 — Declaration**

I confirm that the information provided above is accurate to the best of my knowledge and that I have not taken any actions that could destroy evidence.

**Signature:** _______________ **Date:** _______________

---

### Appendix B — Incident Investigation Log

*This log is maintained by the CISO throughout the breach investigation. All entries must include a timestamp and the name of the person making the entry.*

---

**INCIDENT INVESTIGATION LOG**
**Breach Reference:** [Breach Ref No.]
**Log Owner:** [CISO Name]
**Classification:** Confidential — Restricted

| # | Date / Time | Action / Finding | Performed By | Evidence Reference |
|---|---|---|---|---|
| 1 | [YYYY-MM-DD HH:MM] | [Description of action taken or finding made] | [Name] | [Evidence Ref / Log ID] |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| ... | | | | |

---

### Appendix C — Chain of Custody Log

*This log tracks the handling of all physical evidence collected during the breach investigation.*

---

**CHAIN OF CUSTODY LOG**
**Breach Reference:** [Breach Ref No.]
**Log Owner:** [CISO Name]
**Classification:** Confidential — Restricted

| Evidence ID | Description of Evidence | Date / Time Collected | Collected By | Location Collected From | Date / Time Transferred | Transferred To | Storage Location | Access Log Reference |
|---|---|---|---|---|---|---|---|---|
| [EV-001] | [e.g., Laptop SN: XXXX, hard drive forensic image] | [DateTime] | [Name] | [Location] | [DateTime] | [Name / Organisation] | [Secure Storage Location] | [Ref] |
| [EV-002] | | | | | | | | |

---

### Appendix D — Post-Incident Review Report Template

*To be completed by the DPO and CISO following every Critical and High severity breach. Present to Senior Management and Board within [X] days of the post-incident review meeting.*

---

**POST-INCIDENT REVIEW REPORT**
**Breach Reference:** [Breach Ref No.]
**Report Date:** [Date]
**Prepared By:** [DPO Name / CISO Name]
**Classification:** Confidential

**1. Executive Summary**
> [2–3 paragraphs summarising the breach, its impact, and the key remediation actions taken.]

**2. Breach Timeline**

| Date / Time | Event |
|---|---|
| [DateTime] | Initial compromise (if known) |
| [DateTime] | Breach detected |
| [DateTime] | IRT activated |
| [DateTime] | Containment completed |
| [DateTime] | PDPC notified |
| [DateTime] | Data subject notification delivered |
| [DateTime] | Forensic investigation completed |
| [DateTime] | Systems restored |
| [DateTime] | Breach closed |

**3. Root Cause Analysis**

> [Document technical and organisational root causes. Use 5-Why or Fishbone methodology.]

**4. Impact Assessment**

| Category | Details |
|---|---|
| Confirmed number of data subjects affected | |
| Confirmed personal data categories compromised | |
| Confirmed harm to data subjects | |
| Financial impact on [Organization Name] | |
| Regulatory consequences | |
| Reputational impact | |

**5. Response Effectiveness Assessment**

| Aspect | Assessment | Rating (1–5) | Comments |
|---|---|---|---|
| Detection timeliness | | | |
| Triage accuracy | | | |
| Severity assessment accuracy | | | |
| Containment effectiveness | | | |
| 72-hour notification compliance | | | |
| Data subject notification | | | |
| PDPC communication | | | |
| Internal communication | | | |
| Evidence preservation | | | |

**6. Lessons Learned and Remediation Action Plan**

| # | Finding / Gap | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |

**7. Policy / Procedure Updates Recommended**

> [List any recommended updates to this procedure or other related documents.]

**8. Sign-Off**

| Role | Name | Signature | Date |
|---|---|---|---|
| DPO | | | |
| CISO | | | |
| Senior Management | | | |

---

### Appendix E — PDPC Commissioner Notification Draft Template

*Draft for internal review prior to submission via the PDPC portal. Must be reviewed by Legal Counsel before submission.*

---

**PERSONAL DATA BREACH NOTIFICATION — DRAFT**
**To:** Personal Data Protection Commissioner of Malaysia
**From:** [Organization Name] — [Registration Number]
**DPO Contact:** [DPO Name] | [Email] | [Phone]
**Submission Date:** [Date]
**Breach Reference:** [Breach Ref No.]

**1. Nature of the Breach:**
> [Describe how the breach occurred in clear, factual terms.]

**2. Categories of Personal Data Affected:**
> [List all categories of personal data involved.]

**3. Approximate Number of Data Subjects Affected:**
> [Provide best estimate. Note if exact figure is not yet confirmed and state when it will be available.]

**4. Approximate Number of Records Affected:**
> [Provide best estimate.]

**5. Likely Consequences of the Breach:**
> [Describe the reasonably foreseeable consequences for affected data subjects.]

**6. Measures Taken or Proposed:**
> [Describe containment and remediation actions taken to address the breach and mitigate harm.]

**7. Data Subject Notification:**
> [State whether data subjects have been notified, are being notified, or will be notified — including proposed timeline and method.]

**8. Reason for Delay (if notification is after 72 hours):**
> [If applicable, explain why the 72-hour deadline could not be met.]

**Submitted by:**
> [DPO Name] | [Title] | [Date]

---

### Appendix F — Data Subject Notification Letter Template

*Adapt as appropriate for the specific breach and delivery method. Reviewed and approved by Legal Counsel and DPO before sending.*

---

**[Organization Name] — Important Notice Regarding Your Personal Information**

Dear [Data Subject Name / "Valued Customer"],

We are writing to inform you of a recent incident that may have affected some of your personal information held by [Organization Name].

**What happened:**
> [Plain language description of the breach — avoid technical jargon. Example: "On [date], we became aware that an unauthorised person may have gained access to a portion of our customer database."]

**What information was involved:**
> [List specific types of personal data affected, e.g., "Your name, email address, and account number may have been accessed."]

**What we have done:**
> [Describe actions taken to contain the breach and protect data subjects.]

**What you should do:**

We recommend you take the following steps to protect yourself:
- [Action 1, e.g., Change your password for your [Organization Name] account immediately.]
- [Action 2, e.g., Monitor your bank statements and credit report for any unusual activity.]
- [Action 3, e.g., Be cautious of unsolicited emails or calls asking for your personal information.]
- [Action 4, e.g., Place a fraud alert with the relevant credit bureau if appropriate.]

**How to contact us:**

If you have any questions or concerns, please contact our dedicated breach support team:

- **Email:** [Breach Support Email]
- **Phone:** [Breach Helpline Number] (Available [Hours], [Days])
- **DPO Contact:** [DPO Name] | [DPO Email]

We sincerely apologise for this incident and for any concern it may cause you. We take the security of your personal information very seriously and are committed to taking all necessary steps to prevent a recurrence.

Yours sincerely,

[Name]
[Title]
[Organization Name]
[Date]

---

### Appendix G — Incident Response Team (IRT) Contact Directory

*Maintain current and update whenever personnel changes occur. Stored in a location accessible to all IRT members, including offline.*

| Role | Primary Contact | Email | Phone | Backup Contact | Backup Phone |
|---|---|---|---|---|---|
| Data Protection Officer | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| Chief Information Security Officer | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| Legal Counsel (Internal) | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| Legal Counsel (External) | [Firm / Name] | [Email] | [Phone] | — | — |
| CEO / Senior Management | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| Head of HR | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| Head of Communications / PR | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| IT Security Lead | [Name] | [Email] | [Phone] | [Name] | [Phone] |
| External Forensic Firm | [Firm Name] | [Email] | [Phone] | — | — |
| PDPC (Commissioner) | — | [PDPC Email] | [PDPC Phone] | — | — |
| NACSA (if applicable) | — | [NACSA Email] | [NACSA Phone] | — | — |
| BNM Regulatory Contact (if applicable) | — | [BNM Email] | [BNM Phone] | — | — |
| PDRM Cyber Crime Unit | — | [Contact] | [Phone] | — | — |

---

### Appendix H — Breach Severity Quick Reference Card

*A condensed reference for use by employees and IRT members in the immediate phase of a breach. Print and post in relevant areas.*

---

**PERSONAL DATA BREACH — QUICK RESPONSE CARD**

**Step 1: STOP**
Do not delete anything. Do not power off affected systems. Do not discuss the incident with unauthorised persons.

**Step 2: REPORT**
Report immediately to:
- **DPO:** [Name] | [Phone] | [Email]
- **CISO:** [Name] | [Phone] | [Email]
- **Reporting Channel:** [Email / Hotline / System]

**Step 3: RECORD**
Note the time you discovered the breach. Complete **Appendix A — Initial Breach Report Form**.

**Step 4: WAIT FOR INSTRUCTIONS**
Do not take any further action until directed by the DPO or CISO.

**The 72-hour clock starts NOW.**

---

*End of Document*

---

**Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution of this document is prohibited. Printed copies of this document are uncontrolled. Always refer to the document management system for the current version.