# Information Security Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By Name], [Approved By Title] |
| **Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document contains confidential information proprietary to [Organization Name]. It must not be disclosed, reproduced, or distributed outside the organization without prior written authorization from the Chief Information Security Officer. All recipients are bound by the organization's confidentiality obligations.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Information Security Objectives](#4-information-security-objectives)
5. [Risk Management Framework and Risk Appetite](#5-risk-management-framework-and-risk-appetite)
6. [Technical Security Controls](#6-technical-security-controls)
7. [Organizational Security Measures](#7-organizational-security-measures)
8. [Incident Detection and Response Procedures](#8-incident-detection-and-response-procedures)
9. [Business Continuity and Disaster Recovery](#9-business-continuity-and-disaster-recovery)
10. [Vendor and Third-Party Security Requirements](#10-vendor-and-third-party-security-requirements)
11. [Security Audit and Compliance Monitoring](#11-security-audit-and-compliance-monitoring)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Policy Violations and Disciplinary Action](#13-policy-violations-and-disciplinary-action)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section states the overarching intent of the policy. Describe why the policy exists, what it seeks to achieve, and which legal or regulatory obligations it satisfies.*

This Information Security Policy establishes the overarching framework through which [Organization Name] protects the confidentiality, integrity, and availability of information assets — including personal data — entrusted to the organization by its customers, employees, partners, and other stakeholders.

This policy is established in fulfilment of the obligations imposed by:

- **Section 9 (Security Principle)** of the **Personal Data Protection Act 2010 (PDPA)**, which requires data processors and data controllers to take practical steps to protect personal data from any loss, misuse, modification, unauthorized or accidental access or disclosure, alteration, or destruction.
- The **Personal Data Protection Standards 2015** issued by the Department of Personal Data Protection (JPDP), which specify minimum technical and organizational measures applicable to personal data processing activities.
- Applicable guidelines and circulars issued by **Bank Negara Malaysia (BNM)** and the **National Cyber Security Agency (NACSA)** where [Organization Name] is subject to their jurisdiction.

### 1.2 Scope

*Define clearly which systems, people, data, and organizational units fall under this policy. A narrow or ambiguous scope is a common audit finding — be specific.*

This policy applies to:

**Organizational Coverage:**

- All employees, contractors, consultants, temporary staff, interns, and third parties who access, process, transmit, or store information assets owned by or entrusted to [Organization Name].
- All subsidiaries, branches, and affiliated entities of [Organization Name] where [Organization Name] exercises operational control over information processing.

**Information Assets Coverage:**

- All personal data as defined under Section 4 of the PDPA, including sensitive personal data as defined under Section 40 of the PDPA.
- All information systems, applications, databases, networks, and infrastructure used to process personal data.
- Physical assets including servers, workstations, removable media, printed documents, and any other medium on which personal data is stored or transmitted.
- Cloud-hosted services and third-party platforms processing personal data on behalf of [Organization Name].

**Geographic Coverage:**

- All operational locations of [Organization Name] within Malaysia.
- Processing activities conducted outside Malaysia where [Organization Name] remains the data controller responsible for the personal data.

**Out of Scope:**

- Publicly available information that does not constitute personal data under the PDPA.
- Information systems used exclusively for processing anonymized or de-identified data, provided that re-identification is not reasonably practicable.

### 1.3 Policy Statement

*Articulate the organization's commitment to information security at the highest level. This statement should be suitable for signing by the Board or CEO.*

[Organization Name] is committed to protecting the personal data of all individuals whose information it collects, processes, and retains in the course of its business operations. The organization shall implement and maintain appropriate technical and organizational measures to ensure a level of security proportionate to the risks associated with its personal data processing activities.

The Board of Directors and Senior Management of [Organization Name] endorse this policy and commit to providing the resources, governance structures, and organizational culture necessary to achieve and sustain compliance with the PDPA Security Principle and all applicable information security obligations.

---

## 2. Definitions and Abbreviations

*Provide definitions for all technical, legal, and organizational terms used throughout this policy. Definitions should align with those in the PDPA 2010 and associated standards.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Data Controller** | A person who either alone, jointly, or in common with other persons processes any personal data, or has control over or authorizes the processing of any personal data, but does not include a data processor. |
| **Data Processor** | Any person, other than an employee of the data controller, who processes personal data solely on behalf of the data controller and does not process personal data for any of the data processor's own purposes. |
| **Personal Data** | Any information in respect of commercial transactions that is being processed wholly or partly by means of equipment operating automatically in response to instructions given for that purpose, that is recorded with the intention that it should be wholly or partly processed by means of such equipment, or that is recorded as part of a relevant filing system or with the intention that it should form part of a relevant filing system that relates directly or indirectly to a data subject, who is identified or identifiable from that information or from that and other information in the possession of a data controller, including any sensitive personal data and expression of opinion about the data subject (PDPA s4). |
| **Sensitive Personal Data** | Personal data consisting of information as to the physical or mental health or condition of a data subject; his political opinions; his religious beliefs or other beliefs of a similar nature; the commission or alleged commission by him of any offence; or any other personal data as the Minister may determine (PDPA s40). |
| **Processing** | Collecting, recording, holding or storing personal data or carrying out any operation or set of operations on personal data, including organizing, adapting, or altering; retrieving, consulting, or using; disclosing by transmitting, transferring, disseminating, or otherwise making available; or aligning, combining, correcting, erasing, or destroying personal data. |
| **Information Asset** | Any data, system, application, infrastructure component, or knowledge resource that has value to [Organization Name] and requires protection. |
| **Information Security** | The preservation of confidentiality, integrity, and availability of information; additionally, other properties such as authenticity, accountability, non-repudiation, and reliability may also be involved. |
| **Confidentiality** | The property that information is not made available or disclosed to unauthorized individuals, entities, or processes. |
| **Integrity** | The property of safeguarding the accuracy and completeness of information assets. |
| **Availability** | The property of being accessible and usable upon demand by an authorized entity. |
| **Risk** | The potential that a threat will exploit a vulnerability to cause harm to an information asset, measured in terms of likelihood and impact. |
| **Security Incident** | Any event that actually or potentially jeopardizes the confidentiality, integrity, or availability of personal data or information systems, including unauthorized access, data breaches, malware infections, and system failures. |
| **Data Breach** | A security incident resulting in the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data transmitted, stored, or otherwise processed. |
| **Access Control** | The selective restriction of access to information assets based on verified identity and authorized permissions. |
| **Encryption** | The process of converting information into an unreadable format using cryptographic algorithms, such that only authorized parties with the correct decryption key can access the original data. |
| **Business Continuity** | The capability of [Organization Name] to continue delivery of products or services at acceptable predefined levels following a disruptive incident. |
| **Disaster Recovery** | The process, policies, and procedures related to preparing for recovery or continuation of technology infrastructure critical to [Organization Name] following a natural or human-induced disaster. |
| **Third Party** | Any external individual, organization, or system that interacts with [Organization Name]'s information assets, including vendors, service providers, contractors, and business partners. |
| **Penetration Testing** | A simulated cyberattack against computer systems to check for exploitable vulnerabilities. |
| **Vulnerability** | A weakness in an information system, security procedure, internal control, or implementation that could be exploited by a threat. |

### 2.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| **PDPA** | Personal Data Protection Act 2010 |
| **JPDP** | Jabatan Perlindungan Data Peribadi (Department of Personal Data Protection) |
| **BNM** | Bank Negara Malaysia |
| **NACSA** | National Cyber Security Agency |
| **CISO** | Chief Information Security Officer |
| **DPO** | Data Protection Officer |
| **CIA** | Confidentiality, Integrity, Availability |
| **ISMS** | Information Security Management System |
| **MFA** | Multi-Factor Authentication |
| **VPN** | Virtual Private Network |
| **SIEM** | Security Information and Event Management |
| **SOC** | Security Operations Centre |
| **IDS/IPS** | Intrusion Detection System / Intrusion Prevention System |
| **DLP** | Data Loss Prevention |
| **IAM** | Identity and Access Management |
| **PKI** | Public Key Infrastructure |
| **TLS** | Transport Layer Security |
| **AES** | Advanced Encryption Standard |
| **BCP** | Business Continuity Plan |
| **DRP** | Disaster Recovery Plan |
| **RTO** | Recovery Time Objective |
| **RPO** | Recovery Point Objective |
| **NDA** | Non-Disclosure Agreement |
| **SLA** | Service Level Agreement |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **ISO** | International Organization for Standardization |
| **NIST** | National Institute of Standards and Technology |

---

## 3. Regulatory and Policy Framework

### 3.1 Legislative and Regulatory Basis

*List all applicable laws, regulations, standards, and guidelines that inform this policy. Keep this section updated as the regulatory landscape evolves.*

This policy is informed by and must be read in conjunction with the following legislative instruments, regulatory guidelines, and industry standards:

**Primary Legislation:**

| Instrument | Issuing Authority | Relevant Provisions |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | Parliament of Malaysia | s7 (General Principle), s9 (Security Principle), s10 (Retention Principle), s40 (Sensitive Personal Data) |
| Personal Data Protection Regulations 2013 | Minister of Communications and Digital | All regulations |
| Personal Data Protection Standards 2015 | Minister of Communications and Digital | Standards 1–7 |
| Communications and Multimedia Act 1998 | Parliament of Malaysia | Part VI (Security) |
| Computer Crimes Act 1997 | Parliament of Malaysia | All provisions |
| Digital Signature Act 1997 | Parliament of Malaysia | Where applicable |

**Regulatory Guidelines:**

| Guideline | Issuing Authority | Applicability |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Applicable / Not Applicable — confirm based on licensing status] |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Applicable / Not Applicable] |
| National Cyber Security Policy (NCSP) | NACSA / National Security Council | All entities |
| Guidelines on Cloud Computing | [Applicable regulator] | Where cloud services are used |

**International Standards (Reference Frameworks):**

| Standard | Relevance |
|---|---|
| ISO/IEC 27001:2022 (Information Security Management) | Primary framework for ISMS design |
| ISO/IEC 27002:2022 (Information Security Controls) | Control guidance |
| ISO/IEC 27701:2019 (Privacy Information Management) | Extension for personal data protection |
| NIST Cybersecurity Framework (CSF) 2.0 | Risk-based security framework |
| NIST SP 800-53 Rev 5 | Technical control reference |

### 3.2 Relationship to Other Policies

*Describe how this policy interacts with and supersedes or supports other organizational policies.*

This Information Security Policy is the **apex policy** within [Organization Name]'s information security governance framework. All subordinate policies, procedures, standards, and guidelines must be consistent with, and operate within the boundaries set by, this policy.

| Related Document | Relationship | Location |
|---|---|---|
| Personal Data Protection Policy | Subordinate — governs personal data lifecycle | [Document Reference] |
| Access Control Policy | Subordinate — implements s6.2 of this policy | [Document Reference] |
| Cryptography Policy | Subordinate — implements s6.3 of this policy | [Document Reference] |
| Incident Response Plan | Subordinate — implements Section 8 of this policy | [Document Reference] |
| Business Continuity Plan | Subordinate — implements Section 9 of this policy | [Document Reference] |
| Vendor Risk Management Policy | Subordinate — implements Section 10 of this policy | [Document Reference] |
| Acceptable Use Policy | Subordinate — implements s7.3 of this policy | [Document Reference] |
| Employee Code of Conduct | Supporting — incorporates security obligations | [Document Reference] |
| Data Classification Policy | Supporting — informs control selection | [Document Reference] |

---

## 4. Information Security Objectives

### 4.1 Strategic Objectives

*Define measurable, time-bound information security objectives aligned with the organization's business strategy and PDPA s9 obligations. Each objective should have an owner and a measurement mechanism.*

[Organization Name] has established the following information security objectives, aligned with the Security Principle under Section 9 of the PDPA and the Personal Data Protection Standards 2015. These objectives shall be reviewed annually or upon significant changes to the organization's risk profile.

**Objective 1 — Protection of Personal Data**

Ensure that all personal data processed by [Organization Name] is protected against loss, misuse, modification, unauthorized or accidental access, disclosure, alteration, or destruction, in compliance with PDPA s9.

| Attribute | Detail |
|---|---|
| **Measurement** | Zero confirmed personal data breaches attributable to inadequate security controls per annum |
| **Target** | 100% compliance with PDPA Security Principle |
| **Owner** | Chief Information Security Officer |
| **Review Frequency** | Quarterly |

**Objective 2 — Confidentiality**

Ensure that personal data and sensitive organizational information are disclosed only to authorized individuals with a demonstrated need to know.

| Attribute | Detail |
|---|---|
| **Measurement** | Number of unauthorized disclosure incidents per annum; access control audit findings |
| **Target** | Zero unauthorized disclosure incidents; zero critical access control findings |
| **Owner** | Chief Information Security Officer |
| **Review Frequency** | Quarterly |

**Objective 3 — Integrity**

Maintain the accuracy, completeness, and trustworthiness of personal data throughout its lifecycle.

| Attribute | Detail |
|---|---|
| **Measurement** | Number of data integrity failures detected per annum; frequency of data quality audits |
| **Target** | Zero undetected data integrity failures; quarterly data quality audits |
| **Owner** | Chief Data Officer / [Equivalent Role] |
| **Review Frequency** | Quarterly |

**Objective 4 — Availability**

Ensure that information systems supporting the processing of personal data are available in accordance with agreed service levels and business requirements.

| Attribute | Detail |
|---|---|
| **Measurement** | System uptime against defined SLAs; RTO/RPO achievement during recovery tests |
| **Target** | [X]% uptime for critical systems; 100% achievement of RTO/RPO in annual BCP tests |
| **Owner** | Head of IT Operations |
| **Review Frequency** | Monthly |

**Objective 5 — Regulatory Compliance**

Achieve and maintain full compliance with all applicable information security laws, regulations, and contractual obligations.

| Attribute | Detail |
|---|---|
| **Measurement** | Number of regulatory findings; completion rate of compliance actions |
| **Target** | Zero unresolved high-severity compliance findings; 100% action closure within agreed timelines |
| **Owner** | Data Protection Officer |
| **Review Frequency** | Quarterly |

**Objective 6 — Security Awareness and Culture**

Ensure that all personnel understand their information security responsibilities and contribute to a security-conscious organizational culture.

| Attribute | Detail |
|---|---|
| **Measurement** | Completion rate of mandatory security training; results of simulated phishing campaigns |
| **Target** | 100% mandatory training completion; [X]% reduction in phishing simulation click rates year-on-year |
| **Owner** | Chief Information Security Officer |
| **Review Frequency** | Annual |

### 4.2 Alignment with PDPA Security Principle

*Explicitly map each objective to the relevant provisions of the PDPA and the Personal Data Protection Standards 2015.*

The following table demonstrates how the information security objectives of [Organization Name] align with the Security Principle requirements under PDPA s9 and the Personal Data Protection Standards 2015:

| PDPA / Standard Requirement | Corresponding Objective(s) | Key Controls |
|---|---|---|
| s9(1) — Practical steps to protect personal data from loss, misuse, modification, unauthorized access, disclosure, alteration, or destruction | Objectives 1, 2, 3 | Access controls, encryption, audit logging, DLP |
| s9(2) — Measures having regard to the nature of personal data and harm that may result from breach | Objective 1 | Data classification, risk assessment, proportionate controls |
| Standard 1 — Security measures for personal data | Objectives 1, 2, 3 | Technical and organizational controls throughout this policy |
| Standard 2 — Storage security | Objective 3 | Encryption at rest, secure deletion, media management |
| Standard 3 — Access control | Objective 2 | IAM, MFA, least privilege, PAM |
| Standard 4 — Processing security | Objectives 1, 2, 3 | Secure development, vulnerability management |
| Standard 5 — Transmission security | Objective 2 | TLS, VPN, secure email |
| Standard 6 — Destruction security | Objective 3 | Secure deletion, data retention schedules |
| Standard 7 — Backup security | Objective 4 | Encrypted backups, tested restoration |

---

## 5. Risk Management Framework and Risk Appetite

### 5.1 Information Security Risk Management Approach

*Describe the methodology used to identify, assess, treat, and monitor information security risks. Reference the organization's enterprise risk management framework where applicable.*

[Organization Name] adopts a **risk-based approach** to information security, ensuring that security controls are proportionate to the identified risks to personal data and other information assets. The information security risk management process is aligned with [ISO/IEC 27005:2022 / NIST SP 800-30 / Organization's Enterprise Risk Management Framework — select applicable].

The risk management process follows a continuous cycle:

```
Identify → Assess → Treat → Monitor → Review
```

**5.1.1 Risk Identification**

*Describe how risks are identified. Include threat sources, vulnerability assessments, and risk event categories.*

[Organization Name] identifies information security risks through the following mechanisms:

- Annual formal risk assessments covering all information systems that process personal data
- Continuous vulnerability scanning and threat intelligence monitoring
- Security incident analysis and lessons-learned reviews
- Third-party audits and penetration testing results
- Regulatory updates and emerging threat intelligence from NACSA, BNM, and industry bodies
- Business change impact assessments triggered by new projects, system changes, or organizational restructuring

Risk categories considered include, but are not limited to:

| Risk Category | Examples |
|---|---|
| Cyber Threats | Ransomware, phishing, DDoS, advanced persistent threats |
| Insider Threats | Malicious employees, negligent staff, contractor misuse |
| Physical Threats | Unauthorized physical access, theft of devices, natural disasters |
| Supply Chain Risks | Vendor breaches, compromised software components |
| Human Error | Accidental disclosure, misconfiguration, lost devices |
| Technical Failures | Hardware failure, software bugs, unpatched vulnerabilities |
| Regulatory Risks | Non-compliance with PDPA, licensing conditions |

**5.1.2 Risk Assessment Methodology**

*Specify the risk scoring methodology used. Define likelihood and impact scales clearly.*

Risk likelihood and impact shall be assessed using the following scales:

**Likelihood Scale:**

| Level | Score | Description | Approximate Frequency |
|---|---|---|---|
| Rare | 1 | May occur only in exceptional circumstances | Less than once in 5 years |
| Unlikely | 2 | Could occur at some time | Once in 3–5 years |
| Possible | 3 | Might occur at some time | Once in 1–3 years |
| Likely | 4 | Will probably occur in most circumstances | At least once per year |
| Almost Certain | 5 | Is expected to occur in most circumstances | Multiple times per year |

**Impact Scale:**

| Level | Score | Description | Indicative Impact on Personal Data |
|---|---|---|---|
| Negligible | 1 | No discernible harm to data subjects or organization | Nil or trivial inconvenience |
| Minor | 2 | Limited and reversible impact | Temporary disruption; no sensitive data affected |
| Moderate | 3 | Significant but manageable impact | Personal data of limited individuals exposed |
| Major | 4 | Serious impact requiring significant resource | Large-scale personal data exposure; regulatory notification required |
| Catastrophic | 5 | Existential impact on organization or severe harm to data subjects | Mass personal data breach; criminal liability; reputational collapse |

**Risk Rating Matrix:**

| | **1 — Negligible** | **2 — Minor** | **3 — Moderate** | **4 — Major** | **5 — Catastrophic** |
|---|---|---|---|---|---|
| **5 — Almost Certain** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **4 — Likely** | Low (4) | Medium (8) | High (12) | Critical (16) | Critical (20) |
| **3 — Possible** | Low (3) | Medium (6) | Medium (9) | High (12) | Critical (15) |
| **2 — Unlikely** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **1 — Rare** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

**Risk Rating Key:** Low (1–4) | Medium (5–9) | High (10–15) | Critical (16–25)

### 5.2 Risk Appetite and Tolerance

*Define the organization's stated risk appetite for information security risks. This is a governance-level statement that constrains risk treatment decisions.*

The Board of Directors of [Organization Name] has approved the following risk appetite statement for information security:

> *[Organization Name] has a **low risk appetite** with respect to the loss, unauthorized access, or disclosure of personal data. We will not accept any residual risk that is rated **Critical** or that could result in a breach of our obligations under the Personal Data Protection Act 2010. We maintain a **low to medium** risk tolerance for technical security risks where compensating controls are in place, and a **medium** risk tolerance for operational continuity risks provided recovery objectives can be met.*

**Risk Appetite by Category:**

| Risk Category | Risk Appetite | Maximum Tolerable Residual Risk |
|---|---|---|
| Personal data breach | Zero tolerance | Low |
| Unauthorized access to sensitive personal data | Zero tolerance | Low |
| Regulatory non-compliance | Zero tolerance | Low |
| System unavailability (critical systems) | Low | Medium |
| Third-party security failure | Low | Low-Medium |
| Insider threat | Low | Medium |
| Financial loss from security incidents | Medium | Medium |

### 5.3 Risk Treatment Options

*Describe the four standard risk treatment options and the criteria for selecting each.*

For each identified risk, [Organization Name] shall select one of the following treatment options, subject to approval at the appropriate governance level:

| Treatment Option | Description | Approval Authority | Examples |
|---|---|---|---|
| **Mitigate** | Implement controls to reduce likelihood and/or impact | CISO for Medium; Risk Committee for High/Critical | Deploy MFA, encrypt data, patch vulnerabilities |
| **Transfer** | Transfer risk to a third party (e.g., cyber insurance, outsourcing) | Risk Committee | Cyber insurance, managed security services |
| **Avoid** | Cease the activity that gives rise to the risk | Executive Committee | Discontinue a high-risk data processing activity |
| **Accept** | Accept the residual risk where treatment is not practicable or cost-effective | Risk Committee (Medium); Board (High/Critical) | Documented acceptance with review schedule |

> **Note:** Residual risks rated **Critical** shall not be accepted without explicit Board approval and a documented remediation roadmap with agreed timelines.

### 5.4 Risk Register

*Maintain a live risk register linked from this policy. The register records identified risks, current ratings, treatment status, and risk owners.*

[Organization Name] shall maintain a centralized **Information Security Risk Register** that records:

- Risk identifier and description
- Threat source and vulnerability exploited
- Personal data assets affected
- Inherent risk rating (pre-control)
- Current controls and their effectiveness
- Residual risk rating (post-control)
- Risk treatment plan and target residual rating
- Risk owner and treatment owner
- Review date and status

The risk register shall be reviewed:
- Formally, on an **annual** basis as part of the annual ISMS review
- On an **ad hoc** basis following significant security incidents, material organizational changes, or new regulatory requirements

**Risk Register Reference:** [Link to Risk Register Document / Location in GRC System]

---

## 6. Technical Security Controls

*This section specifies the mandatory technical controls implemented to protect personal data and information systems. Controls should be selected proportionate to the risk and sensitivity of the personal data processed.*

### 6.1 Data Classification

*Effective security controls depend on knowing the sensitivity of the data being protected. Define data classification tiers and the controls applicable to each.*

[Organization Name] shall classify all information assets according to the following scheme:

| Classification | Description | Examples | Applicable to PDPA Personal Data? |
|---|---|---|---|
| **Public** | Information approved for public release | Marketing materials, published annual reports | No |
| **Internal** | Information for internal use only; limited harm if disclosed | Internal memos, non-sensitive operational data | Potentially |
| **Confidential** | Sensitive business information; significant harm if disclosed | Business strategies, financial records, employee data | Yes — general personal data |
| **Restricted** | Highest sensitivity; severe harm if disclosed | Sensitive personal data, authentication credentials, cryptographic keys | Yes — sensitive personal data |

All personal data as defined under the PDPA shall be classified as minimum **Confidential**. Sensitive personal data as defined under PDPA s40 shall be classified as **Restricted**.

### 6.2 Access Control

*Define the principles and mechanisms governing who may access personal data and under what conditions.*

**6.2.1 Access Control Principles**

[Organization Name] shall enforce the following access control principles for all systems processing personal data:

- **Least Privilege:** Personnel shall be granted the minimum level of access necessary to perform their authorized duties. Access rights shall not be granted on the basis of seniority alone.
- **Need-to-Know:** Access to personal data shall be granted only where the individual has a demonstrable business need to access that specific data.
- **Segregation of Duties:** Where practicable, critical functions involving personal data shall be divided among multiple individuals to prevent fraud and reduce the risk of error.
- **Default Deny:** Access to systems and data shall be denied by default; access must be explicitly granted through an approved request and authorization process.

**6.2.2 User Identity Management**

| Requirement | Standard |
|---|---|
| Unique user accounts | Each user must have a unique, individually assigned account. Shared accounts are prohibited for personal data systems. |
| Account provisioning | All access requests must be approved by the data owner and IT Security before provisioning. |
| Account review | User access rights shall be reviewed at least every [6 months] and immediately upon role changes or termination. |
| Privileged access | Privileged accounts (administrator, root, DBA) must be separate from standard user accounts and subject to enhanced controls. |
| Service accounts | Service accounts must be documented, have minimal privileges, and credentials must be rotated at least annually. |
| Account termination | All accounts must be disabled within [4 hours] of employee termination notification. |

**6.2.3 Authentication Requirements**

| System Type | Minimum Authentication Standard |
|---|---|
| Systems processing Restricted personal data | Multi-Factor Authentication (MFA) mandatory |
| Systems processing Confidential personal data | MFA mandatory for remote access; at minimum strong password for on-premises |
| Remote access (VPN, RDP, cloud portals) | MFA mandatory for all classifications |
| Privileged / administrative access | MFA mandatory; session recording where practicable |
| Consumer-facing digital services | MFA available to customers; risk-based authentication mandatory |

**Password Standards (where passwords are used):**

| Parameter | Standard |
|---|---|
| Minimum length | 12 characters (user accounts); 16 characters (privileged accounts) |
| Complexity | Must contain uppercase, lowercase, numeric, and special characters |
| Maximum age | 90 days (privileged accounts); [180 days] (standard user accounts) |
| Password reuse | Last 12 passwords must not be reused |
| Lockout threshold | Account locked after [5] consecutive failed attempts |
| Lockout duration | [15 minutes] (automatic) or manual administrator reset |
| Storage | Passwords must never be stored in plaintext; bcrypt, scrypt, or Argon2 hashing required |

**6.2.4 Privileged Access Management**

- All privileged access sessions shall be logged and the logs retained for a minimum of [12 months].
- Privileged access accounts shall be subject to just-in-time (JIT) provisioning where technically feasible.
- Standing privileged access shall be reviewed and formally re-approved every [3 months].
- All administrative actions on systems processing personal data shall be logged with sufficient detail to support forensic investigation.

### 6.3 Cryptography and Encryption

*Define the organization's requirements for protecting personal data at rest and in transit through cryptographic means.*

**6.3.1 Encryption at Rest**

| Data State | Classification | Encryption Requirement |
|---|---|---|
| Databases containing personal data | Confidential / Restricted | AES-256 Transparent Database Encryption (TDE) or equivalent |
| File systems containing personal data | Confidential / Restricted | Full-disk or volume encryption (AES-256) |
| Backup media | Confidential / Restricted | AES-256 encryption; encrypted prior to transmission |
| Removable media (USB, external drives) | Any personal data | AES-256 encryption mandatory |
| Portable devices (laptops, tablets) | Any personal data | Full-disk encryption mandatory |
| Cloud storage | Confidential / Restricted | Encryption at rest using organization-managed keys where practicable |

**6.3.2 Encryption in Transit**

| Transmission Method | Minimum Standard |
|---|---|
| Web applications (HTTPS) | TLS 1.2 minimum; TLS 1.3 preferred; HSTS enforced |
| API communications | TLS 1.2 minimum with mutual authentication where applicable |
| Email containing personal data | TLS for server-to-server; end-to-end encryption (S/MIME or PGP) for Restricted data |
| Internal network transmission of personal data | TLS or IPSec for sensitive data traversing internal networks |
| File transfer | SFTP or FTPS; plain FTP is prohibited for personal data |
| Remote access | VPN with AES-256 encryption |
| Mobile applications | Certificate pinning; TLS 1.3 preferred |

**6.3.3 Cryptographic Key Management**

- Cryptographic keys shall be managed throughout their lifecycle: generation, distribution, storage, rotation, revocation, and destruction.
- Key generation shall use approved algorithms and sufficient entropy sources.
- Encryption keys shall be stored separately from the data they protect.
- Key rotation shall occur at least every [2 years] for long-lived keys, or immediately upon suspected compromise.
- Cryptographic key management procedures shall be documented in the **Cryptography Policy** [Document Reference].
- Deprecated algorithms (MD5, SHA-1, DES, 3DES, RC4, SSL, TLS 1.0/1.1) are prohibited for protecting personal data.

### 6.4 Network Security

*Define controls for protecting the network infrastructure that processes and transmits personal data.*

**6.4.1 Network Segmentation**

- Systems processing personal data shall be segregated from general corporate networks using firewalls, VLANs, or equivalent controls.
- External-facing systems shall be placed in a demilitarized zone (DMZ) separated from internal systems containing personal data.
- Network segmentation architecture shall be documented and reviewed annually.
- Flat network topologies are prohibited for environments processing Restricted personal data.

**6.4.2 Firewall and Perimeter Controls**

| Control | Requirement |
|---|---|
| Firewall ruleset review | At least every [6 months]; rules with "any/any" or overly permissive sources must be justified and approved |
| Inbound traffic | Default deny; only explicitly approved services accessible from external networks |
| Outbound traffic filtering | Content filtering and DLP inspection for outbound traffic from personal data environments |
| Wireless networks | WPA3 (or WPA2-Enterprise with AES minimum); segregation of guest and corporate wireless; personal data must not be accessible from guest networks |

**6.4.3 Intrusion Detection and Prevention**

- IDS/IPS solutions shall be deployed at network perimeters and at key internal network segments processing personal data.
- IDS/IPS signatures and rules shall be updated at least [weekly] or automatically as vendor updates are released.
- IDS/IPS alerts shall be monitored in real-time or near-real-time by [SOC / IT Security Team].
- IPS blocking rules shall be tested prior to deployment to prevent unintended service disruption.

### 6.5 Endpoint Security

*Define controls for securing devices that access or process personal data.*

| Control | Standard |
|---|---|
| Antimalware | Endpoint protection with real-time scanning; definition updates automatic; minimum daily |
| Patch management | Critical and high-severity patches applied within [7 days]; all other patches within [30 days] |
| Mobile Device Management | All mobile devices accessing organizational personal data enrolled in MDM; remote wipe capability mandatory |
| Screen locking | Automatic lock after [5 minutes] of inactivity |
| Removable media | Use of removable media restricted by policy and, where practicable, technically enforced |
| Personal devices (BYOD) | [Organization Name] maintains a [BYOD Policy / No BYOD policy — specify]; personal data must not be stored on unmanaged personal devices |
| Full-disk encryption | Mandatory on all laptops and portable devices |
| Application whitelisting | [Implemented / Under consideration for high-risk environments] |

### 6.6 Security Monitoring and Logging

*Define requirements for collecting, retaining, and analyzing security-relevant logs from systems processing personal data.*

**6.6.1 Logging Requirements**

The following events shall be logged for all systems processing personal data:

- User authentication events (successful and failed)
- Privileged account access and administrative actions
- Access to personal data (read, write, modify, delete)
- System and application errors with security implications
- Network connection events (firewall accepts/drops, IDS/IPS alerts)
- Changes to security configurations, policies, and access rights
- Data export, bulk download, and transmission events
- System startup and shutdown events

**6.6.2 Log Integrity and Retention**

| Parameter | Standard |
|---|---|
| Log integrity | Logs shall be protected against tampering; write-once log storage or SIEM forwarding required |
| Minimum retention — general systems | [12 months] online; [24 months] archived |
| Minimum retention — personal data systems | [24 months] accessible; [36 months] archived |
| Minimum retention — privileged access logs | [36 months] |
| Log review | Security logs from personal data systems reviewed at least [daily] by automated SIEM correlation; weekly manual review |
| Alert response | Critical and High alerts responded to within [1 hour]; Medium within [4 hours]; Low within [5 business days] |

**6.6.3 SIEM Implementation**

[Organization Name] [operates / plans to operate] a Security Information and Event Management (SIEM) platform that:

- Aggregates logs from all systems processing personal data
- Applies correlation rules to detect potential security incidents
- Generates alerts for investigation by the [SOC / IT Security Team]
- Provides audit trail reports for regulatory compliance reviews

**SIEM Platform:** [Platform Name]
**SIEM Owner:** [CISO / Head of IT Security]
**Log Sources Connected:** [List or reference to SIEM architecture document]

### 6.7 Vulnerability Management

*Define the process for identifying, assessing, and remediating technical vulnerabilities in systems processing personal data.*

**6.7.1 Vulnerability Scanning**

| Activity | Frequency | Scope | Owner |
|---|---|---|---|
| Automated vulnerability scanning — internal | Weekly | All servers processing personal data | IT Security |
| Automated vulnerability scanning — external | Monthly | All internet-facing systems | IT Security |
| Web application vulnerability scanning | Quarterly | All web applications processing personal data | IT Security / Development |
| Container and cloud configuration scanning | Weekly | All containerized workloads and cloud environments | IT Security / DevOps |

**6.7.2 Penetration Testing**

| Activity | Minimum Frequency | Scope | Provider |
|---|---|---|---|
| External penetration test | Annual | Internet-facing systems and applications | [Approved third-party provider] |
| Internal penetration test | Annual | Internal network, systems, and applications processing personal data | [Approved third-party provider] |
| Web application penetration test | Annual (or on material change) | All web applications processing personal data | [Approved third-party provider] |
| Red team exercise | [Biennial / as risk-based] | Full organizational scope | [Approved specialist provider] |

**6.7.3 Vulnerability Remediation SLAs**

| Severity | CVSS Score | Maximum Remediation Timeframe |
|---|---|---|
| Critical | 9.0–10.0 | [7 calendar days] |
| High | 7.0–8.9 | [30 calendar days] |
| Medium | 4.0–6.9 | [90 calendar days] |
| Low | 0.1–3.9 | [180 calendar days] |

Exceptions to remediation SLAs must be formally risk-accepted by the CISO and documented in the risk register.

### 6.8 Secure Development and Change Management

*Define controls for ensuring that security is built into applications processing personal data from design through deployment.*

**6.8.1 Secure Development Lifecycle**

[Organization Name] shall integrate security into all phases of the software development lifecycle (SDLC) for applications that process personal data:

| SDLC Phase | Required Security Activities |
|---|---|
| Requirements | Security requirements defined; privacy by design considerations documented; data flow mapping |
| Design | Threat modelling conducted; security architecture reviewed; data minimization applied |
| Development | Secure coding standards enforced; code review including security review; static analysis (SAST) |
| Testing | Dynamic analysis (DAST); penetration testing for new applications; data validation testing |
| Deployment | Change management process followed; security configuration baseline applied; production access restricted |
| Operations | Continuous vulnerability monitoring; patch management; security event monitoring |
| Decommissioning | Secure data deletion; access revocation; system disposal according to media sanitization standards |

**6.8.2 Change Management Security Requirements**

- All changes to systems processing personal data must follow the formal change management process.
- Security impact assessment is mandatory for all significant changes.
- Emergency changes must be reviewed by IT Security within [48 hours] of implementation.
- Test environments must not contain live personal data unless technically unavoidable and subject to equivalent security controls.

---

## 7. Organizational Security Measures

### 7.1 Human Resources Security

*Define security requirements throughout the employee lifecycle — before joining, during employment, and upon departure.*

**7.1.1 Pre-Employment Screening (Vetting)**

[Organization Name] shall conduct pre-employment screening proportionate to the level of access to personal data the role requires:

| Screening Element | Standard Roles | Roles with Access to Restricted Personal Data | Roles with Privileged System Access |
|---|---|---|---|
| Identity verification | Mandatory | Mandatory | Mandatory |
| Right to work verification | Mandatory | Mandatory | Mandatory |
| Criminal background check | Mandatory | Mandatory | Mandatory |
| Credit check | [At discretion] | Mandatory | Mandatory |
| Previous employment verification | Mandatory (last 3 years) | Mandatory (last 5 years) | Mandatory (last 5 years) |
| Education/qualification verification | For role-specific qualifications | For role-specific qualifications | For role-specific qualifications |
| Professional reference checks | Mandatory (2 references) | Mandatory (2 references) | Mandatory (2 references) |

Screening shall be conducted by [HR Department / Approved Third-Party Provider] and results retained for [duration] in accordance with the Retention Policy.

**7.1.2 Employment Terms and Conditions**

All employees, prior to commencing employment, shall:

- Sign a **Non-Disclosure Agreement (NDA)** that explicitly covers personal data and extends beyond the termination of employment.
- Acknowledge and confirm their understanding of the **Acceptable Use Policy**, **Information Security Policy**, and **Personal Data Protection Policy**.
- Acknowledge that violations of information security policies may result in disciplinary action including termination and, where applicable, criminal referral.
- Consent to system monitoring in accordance with the organization's monitoring policy.

**7.1.3 Contractor and Temporary Staff**

- Contractors and temporary staff with access to personal data shall undergo vetting appropriate to their access level prior to commencing work.
- Contractors shall be bound by NDA and data processing agreements prior to access being granted.
- Contractor access shall be time-limited and reviewed at contract renewal.
- Contractor accounts shall be clearly distinguished from employee accounts in IAM systems.

**7.1.4 Termination and Role Change Procedures**

| Trigger Event | Required Actions | Timeframe |
|---|---|---|
| Resignation / Dismissal | HR notifies IT Security; all logical access disabled; physical access revoked; equipment returned and inspected | Access disabled within [4 hours] of notification |
| Role change (internal) | Access rights reviewed; unnecessary access revoked; new role access provisioned through standard approval process | Within [5 business days] of effective date |
| End of contractor engagement | Contractor accounts disabled; NDAs confirmed; data returned or securely deleted per contractual requirements | Day of contract end |
| Disciplinary investigation | Access suspended pending outcome at HR/CISO discretion | Immediately upon decision |

### 7.2 Security Awareness and Training

*Define the organization's mandatory security training program. This is a specific requirement of the Personal Data Protection Standards 2015.*

**7.2.1 Mandatory Training Requirements**

| Training Program | Target Audience | Frequency | Completion Deadline | Minimum Pass Mark |
|---|---|---|---|---|
| Information Security Awareness — Foundation | All employees, contractors | Annual + on-boarding | Within [14 days] of joining; annually thereafter | [80%] |
| PDPA and Personal Data Protection | All employees handling personal data | Annual + on-boarding | Within [14 days] of joining; annually thereafter | [80%] |
| Phishing and Social Engineering Awareness | All employees | Continuous simulation; formal training annual | Ongoing | N/A (simulation) |
| Secure Development Training | Development and DevOps staff | Annual | Within [30 days] of role assignment | [80%] |
| Privileged User Security Training | IT administrators, privileged users | Annual | Prior to privileged access being granted | [80%] |
| Data Breach Response Training | CISO, DPO, IT Security, Legal, HR | Annual | Prior to performing incident response duties | [80%] |
| Executive Information Security Briefing | Board, Senior Management | Annual | Annual | N/A |

**7.2.2 Training Records**

- Completion records for all mandatory training shall be maintained for a minimum of [3 years].
- Non-completion shall be reported to the relevant line manager and, for persistent non-compliance, escalated to HR.
- Training effectiveness shall be assessed through post-training assessments, simulated phishing results, and periodic knowledge assessments.

**7.2.3 Security Culture Initiatives**

*List ongoing initiatives to build a security-conscious culture beyond mandatory training.*

- [Monthly / Quarterly] security newsletters covering current threats and organizational security updates
- Annual information security awareness week / campaign
- Security champion program embedding security advocates within business units
- Reporting mechanism for employees to raise security concerns or report suspicious activity: [Contact / Hotline / Email]
- Recognition and reward program for exemplary security behavior

### 7.3 Information Security Governance

**7.3.1 Information Security Management System (ISMS)**

[Organization Name] maintains an Information Security Management System (ISMS) as the overall framework for managing information security. The ISMS encompasses:

- This Information Security Policy and all subordinate policies, standards, and procedures
- The information security risk management process
- Security awareness and training programs
- Performance measurement and metrics
- Internal audit program
- Management review process
- Continual improvement mechanisms

**7.3.2 Security Governance Committees**

| Committee / Forum | Composition | Meeting Frequency | Key Responsibilities |
|---|---|---|---|
| Board Risk Committee | Board Directors | [Quarterly] | Approve risk appetite; oversee material security risks; receive CISO annual report |
| Executive Information Security Committee | CEO, CISO, CTO, CFO, Legal, DPO | [Quarterly] | Strategic security decisions; material incident oversight; policy approval |
| Information Security Working Group | CISO, IT Security leads, business unit representatives | [Monthly] | Operational security oversight; policy implementation; incident review |
| Change Advisory Board (CAB) | IT and Security representatives | [Weekly / as required] | Security review of proposed changes |

### 7.4 Physical and Environmental Security

*Define controls for protecting physical locations where personal data is processed or stored.*

**7.4.1 Physical Access Controls**

| Area | Controls |
|---|---|
| Data centre / server room | Multi-factor physical access (card + PIN); access log maintained; CCTV; no tailgating; visitor escort mandatory |
| Office areas processing personal data | Keyed or card access; clean desk policy enforced; screen privacy filters where required |
| Printer / document areas | Access controlled or supervised; immediate collection of printed personal data required |
| Reception and public areas | Personal data must not be visible or accessible; visitor sign-in and escort |

**7.4.2 Environmental Controls**

| Control | Standard |
|---|---|
| CCTV | Continuous recording in data centre and server rooms; footage retained for minimum [90 days] |
| Fire suppression | Clean agent fire suppression in data centre; no water-based sprinklers near server equipment |
| Temperature and humidity | Maintained within equipment manufacturer specifications; automated alerting on deviation |
| Uninterruptible Power Supply (UPS) | UPS protecting all critical personal data processing systems; generator backup for data centre |
| Water damage protection | Server equipment elevated; water detection systems in data centre |

**7.4.3 Clear Desk and Clear Screen**

- All employees shall adopt a clear desk practice: personal data documents must not be left unattended on desks.
- Computer screens displaying personal data must not be visible to unauthorized individuals.
- Workstations must be locked when unattended, enforced by automatic screen lock after [5 minutes].
- Printed personal data must be collected promptly from printers and secured or shredded when no longer required.

### 7.5 Media and Asset Management

**7.5.1 Asset Inventory**

[Organization Name] shall maintain a comprehensive inventory of all information assets that process, store, or transmit personal data. The inventory shall be updated:

- Upon acquisition of new assets
- Upon disposal or decommissioning of assets
- At minimum, reviewed annually

**Asset Inventory Minimum Fields:**

| Field | Description |
|---|---|
| Asset ID | Unique identifier |
| Asset Name | Descriptive name |
| Asset Type | Server, workstation, mobile device, network device, application, database, removable media |
| Owner | Business owner responsible for the asset |
| Custodian | IT team responsible for managing the asset |
| Location | Physical or logical location |
| Classification | Data classification of information processed |
| Personal Data? | Yes / No; if Yes, categories of personal data |
| Disposal Date | Date of decommissioning and method of disposal |

**7.5.2 Media Disposal and Data Destruction**

| Media Type | Approved Disposal Method |
|---|---|
| Hard disk drives (HDDs) | Overwrite (DoD 5220.22-M or NIST 800-88 compliant) followed by physical shredding or degaussing |
| Solid-state drives (SSDs) | Cryptographic erasure AND physical destruction |
| Magnetic tapes | Degaussing followed by physical shredding |
| Optical media (CD/DVD/Blu-ray) | Physical shredding |
| Paper documents containing personal data | Cross-cut shredding (DIN 66399 Level P-4 or above) or incineration |
| Mobile phones / tablets | Factory reset + cryptographic wipe via MDM; physical destruction for Restricted data |

All disposal activities shall be documented with a **Certificate of Destruction** retained for [5 years].

---

## 8. Incident Detection and Response Procedures

### 8.1 Security Incident Management Overview

*This section defines the high-level framework for detecting, reporting, and responding to information security incidents involving personal data. Detailed procedures are contained in the Incident Response Plan [Document Reference].*

[Organization Name] maintains a formal incident response capability to ensure that security incidents — including personal data breaches — are detected promptly, contained effectively, and resolved with minimum harm to data subjects, the organization, and the integrity of personal data.

The incident response process follows the lifecycle:

```
Preparation → Detection & Identification → Containment → Eradication → Recovery → Post-Incident Review
```

### 8.2 Incident Classification

*Classify incidents by severity to ensure resources and escalation are proportionate.*

| Severity | Definition | Examples | Response Time |
|---|---|---|---|
| **P1 — Critical** | Active and ongoing breach of personal data; significant system compromise; imminent risk to data subjects | Ransomware encrypting personal data systems; mass data exfiltration; external breach of customer database | [Immediate — within 1 hour] |
| **P2 — High** | Confirmed unauthorized access to personal data; significant vulnerability being actively exploited | Employee accessing personal data without authorization; successful phishing leading to credential theft | [Within 4 hours] |
| **P3 — Medium** | Suspected security incident requiring investigation; near-miss events | Suspicious login patterns; potential malware infection; unauthorized access attempt | [Within 24 hours] |
| **P4 — Low** | Minor security event; no confirmed personal data impact | Failed login attempts within threshold; lost device (subsequently recovered); spam emails | [Within 5 business days] |

### 8.3 Incident Reporting

**8.3.1 Employee Reporting Obligations**

All employees must report any actual, suspected, or potential security incident or personal data breach immediately upon discovery. Failure to report a known incident is a disciplinary matter.

**Reporting Channels:**

| Channel | Contact | Availability |
|---|---|---|
| IT Security Helpdesk | [Email / Phone] | Business hours |
| Security Hotline (P1/P2) | [Phone Number] | 24/7 |
| CISO Direct | [Email / Phone] | For P1 incidents |
| DPO | [Email / Phone] | For personal data breaches |

**8.3.2 Regulatory Notification Obligations**

| Regulatory Obligation | Trigger | Timeframe | Notifying Party |
|---|---|---|---|
| PDPA — Notification to JPDP | Personal data breach confirmed | [As soon as practicable — current PDPA; monitor for amendment introducing specific timelines] | DPO / CISO |
| PDPA — Notification to affected data subjects | Breach likely to result in significant harm | [As soon as practicable] | DPO with Legal |
| BNM reporting (if applicable) | Significant cyber incident affecting operations | As per RMiT requirements | CISO / CEO |
| NACSA reporting (if applicable) | Significant cyber incident on critical national information infrastructure | As per NACSA requirements | CISO |

> **Note:** Monitor JPDP guidance for any amendment introducing mandatory breach notification timelines analogous to GDPR Article 72-hour requirements.

### 8.4 Incident Response Procedures (High Level)

| Phase | Key Activities | Responsible Party |
|---|---|---|
| **Preparation** | Maintain incident response plan; train response team; establish forensic tools; test via tabletop exercises | CISO, IT Security |
| **Detection & Identification** | Monitor SIEM alerts; receive user reports; triage and classify incident; activate appropriate response team | SOC / IT Security |
| **Containment** | Isolate affected systems; revoke compromised credentials; prevent further data exfiltration; preserve evidence | IT Security, System Owners |
| **Eradication** | Remove malware; patch exploited vulnerabilities; close unauthorized access vectors | IT Security, System Owners |
| **Recovery** | Restore systems from clean backups; verify integrity; resume operations; monitor for recurrence | IT Operations, System Owners |
| **Post-Incident Review** | Document timeline and impact; identify root cause; implement lessons learned; update policies and controls | CISO, all stakeholders |

### 8.5 Evidence Preservation

- Digital forensic evidence from systems involved in personal data breaches must be preserved in a forensically sound manner prior to system remediation where operationally feasible.
- Chain of custody documentation must be maintained for all forensic evidence.
- Legal and DPO guidance must be sought before engaging external forensic investigators.
- Evidence shall be retained for the duration of any regulatory investigation or litigation, plus [an additional period as advised by Legal].

### 8.6 Post-Incident Review

Following every P1 and P2 incident, and a sample of P3 incidents, [Organization Name] shall conduct a formal post-incident review within [14 days] of incident closure. The review shall produce:

- Written post-incident report documenting timeline, impact, root cause, and recommendations
- Updated risk register entries reflecting lessons learned
- Action plan for implementing control improvements with owners and deadlines
- Report to Executive Information Security Committee for P1/P2 incidents
- Report to Board Risk Committee for P1 incidents involving significant personal data breach

---

## 9. Business Continuity and Disaster Recovery

### 9.1 Overview

*Business continuity and disaster recovery ensure that personal data processing can be restored within agreed timeframes following a disruptive event. This is directly relevant to the Availability dimension of PDPA s9.*

[Organization Name] shall maintain documented Business Continuity Plans (BCPs) and Disaster Recovery Plans (DRPs) for all systems critical to personal data processing activities. These plans shall ensure that the confidentiality and integrity of personal data is maintained during and after any disruptive event.

**Referenced Documents:**

- Business Continuity Plan: [Document Reference]
- Disaster Recovery Plan: [Document Reference]
- Business Impact Analysis: [Document Reference]

### 9.2 Business Impact Analysis

[Organization Name] conducts a formal Business Impact Analysis (BIA) to identify:

- Critical business processes that involve the processing of personal data
- Systems and infrastructure supporting those critical processes
- Maximum tolerable downtime for each critical system
- Impact on data subjects and regulatory obligations if personal data becomes unavailable or compromised

**Critical System Recovery Objectives:**

| System / Application | Business Function | Personal Data Processed | RTO | RPO | Owner |
|---|---|---|---|---|---|
| [System Name 1] | [Function] | [Data categories] | [e.g., 4 hours] | [e.g., 1 hour] | [Owner] |
| [System Name 2] | [Function] | [Data categories] | [e.g., 8 hours] | [e.g., 4 hours] | [Owner] |
| [System Name 3] | [Function] | [Data categories] | [e.g., 24 hours] | [e.g., 4 hours] | [Owner] |
| [System Name 4] | [Function] | [Data categories] | [e.g., 48 hours] | [e.g., 24 hours] | [Owner] |

### 9.3 Backup and Recovery Controls

| Control | Standard |
|---|---|
| Backup frequency | At minimum daily backup for all systems processing personal data; real-time replication for critical (RTO < 4 hours) systems |
| Backup encryption | All backups must be encrypted using AES-256 prior to storage or transmission |
| Backup storage location | At least one backup copy stored in a geographically separate location from the primary data centre |
| Backup integrity verification | Automated integrity checks after each backup; monthly manual verification of restore capability |
| Restore testing | Full restore test conducted at least [annually]; critical systems tested at least [semi-annually] |
| Backup access control | Access to backup systems limited to authorized administrators; audit logging enabled |
| Backup retention | Aligned with Data Retention Policy [Document Reference] but minimum [30 days] for personal data systems |
| Immutable backups | [Organization Name] shall maintain at least one backup copy in immutable (write-once) storage to protect against ransomware |

### 9.4 Business Continuity Testing

| Test Type | Frequency | Scope | Required Participants |
|---|---|---|---|
| Tabletop exercise | Annual | All critical systems and processes | Business owners, IT, CISO, DPO, Legal |
| Partial failover test | Semi-annual | Select critical systems | IT Operations, IT Security |
| Full DR test | Annual | All critical systems within scope | IT Operations, Business owners, CISO |
| Communication tree test | Annual | All BCP contacts | HR, Communications, Senior Management |

Test results shall be formally documented and any gaps remediated within agreed timelines.

### 9.5 Crisis Communications

In the event of a business continuity incident affecting personal data processing:

- Internal crisis communications shall be managed by [Communications function / CEO Office].
- External communications regarding personal data impact shall be coordinated between the DPO, Legal, and [Communications].
- Regulatory notifications shall follow the procedures defined in Section 8.3.2.
- Customer notifications shall be approved by [DPO / Legal / CEO] prior to release.

---

## 10. Vendor and Third-Party Security Requirements

### 10.1 Third-Party Risk Management Framework

*The PDPA imposes obligations on data controllers even when personal data is processed by a data processor. This section defines the framework for managing security risks introduced by third-party relationships.*

[Organization Name] recognizes that personal data shared with or processed by third-party vendors and service providers remains subject to the same protection obligations under PDPA s9. Accordingly, [Organization Name] shall conduct due diligence on third parties prior to engaging them to process personal data, and shall monitor their security posture throughout the relationship.

### 10.2 Vendor Classification and Risk Tiering

| Tier | Criteria | Due Diligence Requirements |
|---|---|---|
| **Tier 1 — Critical** | Third party processes Restricted personal data; or is an outsourced critical function; or has direct access to production personal data systems | Full security assessment; on-site audit rights; annual reassessment; executive-level oversight |
| **Tier 2 — High** | Third party processes Confidential personal data; or provides significant technology services to personal data systems | Questionnaire + document review; annual reassessment; dedicated contract manager |
| **Tier 3 — Standard** | Third party has limited or incidental exposure to personal data; or processes only anonymized data | Questionnaire; biennial reassessment; standard contractual terms |

### 10.3 Pre-Engagement Due Diligence

Before engaging any third party that will process personal data, [Organization Name] shall:

- Complete a **Third-Party Security Risk Assessment** using the standard assessment questionnaire [Appendix F]
- Verify that the third party maintains appropriate security certifications (e.g., ISO 27001, SOC 2 Type II) where applicable
- Assess the third party's incident response capability and breach notification procedures
- Review the third party's sub-processor arrangements
- Obtain written confirmation of the third party's compliance with applicable data protection laws

### 10.4 Contractual Security Requirements

All contracts with third parties processing personal data on behalf of [Organization Name] shall include, as minimum, the following provisions:

| Contractual Requirement | Description |
|---|---|
| Data Processing Agreement (DPA) | Formal DPA defining the scope, purposes, and obligations of the data processor as required by PDPA |
| Security obligations | Obligation to implement and maintain technical and organizational measures equivalent to those required by this policy |
| Breach notification | Obligation to notify [Organization Name] of any confirmed or suspected personal data breach within [24 hours] of discovery |
| Audit rights | Right for [Organization Name] (or its appointed auditor) to audit the third party's security controls on reasonable notice |
| Sub-processing restrictions | Third party must obtain prior written approval from [Organization Name] before engaging sub-processors for personal data |
| Data return or destruction | Upon contract termination, third party must return or securely destroy all personal data within [30 days] and provide Certificate of Destruction |
| Jurisdiction and governing law | Data must be processed within Malaysia or in jurisdictions with equivalent protection (PDPA s129); transfers outside Malaysia require JPDP approval or adequate safeguards |
| Compliance with PDPA | Explicit obligation to comply with PDPA and applicable data protection laws |

### 10.5 Ongoing Vendor Monitoring

| Activity | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| Annual security questionnaire | Mandatory | Mandatory | Mandatory |
| Review of security certifications | Annual | Annual | Biennial |
| On-site or virtual security audit | Annual | [Biennial] | As risk-based |
| Incident and breach review | Per incident | Per incident | Per incident |
| Periodic management review | Quarterly | Semi-annual | Annual |

### 10.6 Fourth-Party Risk

[Organization Name] shall require Tier 1 and Tier 2 vendors to disclose and manage the security risks posed by their own significant sub-processors (fourth parties) where those sub-processors access or process [Organization Name]'s personal data.

---

## 11. Security Audit and Compliance Monitoring

### 11.1 Internal Audit Programme

*Define the organization's program for regularly verifying compliance with this policy and applicable security requirements.*

[Organization Name] shall maintain a risk-based internal audit programme covering information security and personal data protection. The audit programme shall ensure that:

- Compliance with this policy and subordinate policies is regularly assessed
- The effectiveness of security controls is independently verified
- Audit findings are reported to management and tracked to resolution
- The ISMS continuously improves

**Internal Audit Schedule:**

| Audit Domain | Minimum Frequency | Audit Method | Report Recipients |
|---|---|---|---|
| Access control review | Semi-annual | Control testing, access rights review | CISO, System Owners |
| Privileged access review | Quarterly | Account review, log analysis | CISO, Head of IT |
| PDPA compliance assessment | Annual | Policy review, process walkthroughs, sampling | DPO, CISO, Executive Committee |
| Security awareness training compliance | Annual | Training records review | CISO, HR |
| Vendor security compliance | Annual | Questionnaire, document review, on-site (Tier 1) | CISO, Procurement |
| Cryptography and key management | Annual | Configuration review, key register audit | CISO |
| Incident response capability | Annual | Tabletop exercise, records review | CISO, DPO |
| Physical security | Annual | Site inspection, access log review | CISO, Facilities |
| Backup and recovery | Semi-annual | Restore test, records review | Head of IT, CISO |

### 11.2 External Audit and Certification

| Activity | Frequency | Provider | Scope |
|---|---|---|---|
| External information security audit | Annual | [Approved third-party auditor] | ISMS and PDPA compliance |
| ISO 27001 certification audit (if certified) | Annual surveillance; triennial re-certification | [Accredited certification body] | ISMS scope |
| Penetration testing | Annual | [Approved penetration testing provider] | Per scope in Section 6.7.2 |
| PDPA compliance review | [Biennial / as required by JPDP] | [External legal / privacy consultants] | PDPA obligations |

### 11.3 Key Performance Indicators (KPIs)

*Define measurable indicators used to track the effectiveness of the information security program.*

[Organization Name] shall track the following KPIs on a [monthly / quarterly] basis and report them to the Executive Information Security Committee:

| KPI | Description | Target | Reporting Frequency |
|---|---|---|---|
| Security training completion rate | % employees completing mandatory security training on schedule | ≥ 95% | Monthly |
| Phishing simulation click rate | % employees clicking simulated phishing emails | ≤ [X]% (improving year-on-year) | Quarterly |
| Vulnerability remediation — Critical | % Critical vulnerabilities remediated within SLA | 100% | Monthly |
| Vulnerability remediation — High | % High vulnerabilities remediated within SLA | ≥ 95% | Monthly |
| Mean Time to Detect (MTTD) | Average time from incident occurrence to detection | ≤ [X hours] | Monthly |
| Mean Time to Respond (MTTR) | Average time from detection to containment | ≤ [X hours] (P1); ≤ [X hours] (P2) | Monthly |
| Patch compliance rate | % systems patched within SLA | ≥ 98% | Monthly |
| Access review completion | % access reviews completed on schedule | 100% | Quarterly |
| Audit findings closure rate | % high-priority audit findings closed within deadline | 100% | Quarterly |
| Third-party risk assessments completed | % due third-party assessments completed on schedule | 100% | Quarterly |

### 11.4 Management Review

The CISO shall present an **Annual Information Security Report** to the Executive Information Security Committee and Board Risk Committee. The report shall include:

- Status of information security objectives
- Results of security audits and assessments
- Key risk register updates
- Significant security incidents and outcomes
- KPI performance against targets
- Regulatory developments and compliance status
- Planned improvements to the ISMS for the coming year
- Resource requirements for the security program

---

## 12. Roles and Responsibilities

### 12.1 Accountability Structure

*This section defines the information security roles within [Organization Name] and their respective responsibilities. Clear accountability is essential for effective security governance and regulatory compliance.*

### 12.2 RACI Matrix

*RACI definitions: R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (input sought), I = Informed (notified of outcome).*

| Responsibility | Board / Risk Committee | CEO / Executive Committee | CISO | DPO | Head of IT / CTO | IT Security Team | Business Unit Heads | Employees / Users | Legal / Compliance | HR |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve risk appetite for information security | A | C | R | C | C | — | — | — | C | — |
| Approve Information Security Policy | A | C | R | C | C | — | — | — | C | — |
| Oversee ISMS and security program | I | A | R | C | C | R | C | — | C | — |
| Conduct risk assessments | I | I | A | C | C | R | C | — | C | — |
| Implement technical security controls | I | I | A | — | R | R | C | — | — | — |
| Manage user access rights | I | I | A | — | R | R | I | — | — | — |
| Manage security awareness training | I | I | A | C | C | R | C | R | — | R |
| Conduct pre-employment screening | I | I | C | — | — | — | C | — | — | A/R |
| Manage NDAs and employment agreements | I | I | C | C | — | — | — | I | A/R | R |
| Detect and respond to security incidents | I | I | A | C | C | R | C | I | C | — |
| Notify JPDP of personal data breaches | I | I | C | A/R | — | C | — | — | C | — |
| Manage vendor security assessments | I | I | A | C | C | R | C | — | C | C |
| Conduct internal security audits | I | I | A | C | C | R | C | — | — | — |
| Approve exceptions to this policy | A | C | R | C | C | — | C | — | C | — |
| Maintain business continuity plans | I | A | C | C | R | C | R | — | — | — |

### 12.3 Role Descriptions

**Board of Directors / Board Risk Committee**
- Provides ultimate governance oversight of the information security program
- Approves organizational risk appetite for information security
- Reviews and approves the Annual Information Security Report
- Ensures adequate resources are allocated to information security

**Chief Executive Officer (CEO)**
- Accountable to the Board for the organization's information security posture
- Champions a security-conscious organizational culture
- Ensures information security is embedded in business strategy and decision-making

**Chief Information Security Officer (CISO)**
- Primary owner of this policy and the ISMS
- Responsible for the design, implementation, and continuous improvement of the information security program
- Reports to [CEO / Board Risk Committee — specify] on security matters
- Chairs the Information Security Working Group
- Provides executive-level reporting on security risks and incidents

**Data Protection Officer (DPO)**
- Responsible for monitoring compliance with the PDPA and this policy as it relates to personal data protection
- Serves as the primary point of contact with JPDP
- Manages personal data breach notification obligations
- Provides advice on data protection impact assessments and privacy-by-design

**Head of IT / Chief Technology Officer**
- Responsible for the technical implementation and operation of security controls
- Accountable for IT infrastructure security, patch management, and disaster recovery operations
- Ensures security is integrated into technology change management

**IT Security Team**
- Day-to-day operation of security controls including monitoring, vulnerability management, access control, and incident response
- Administers security tools (SIEM, IDS/IPS, DLP, IAM, etc.)
- Provides technical security guidance to business and development teams

**Business Unit Heads / Line Managers**
- Responsible for ensuring staff within their teams comply with this policy and complete mandatory training
- Serve as data owners for personal data processed by their business units
- Escalate security concerns and suspected incidents through appropriate channels

**All Employees, Contractors, and Third Parties with System Access**
- Comply with all requirements of this policy and subordinate policies
- Complete mandatory security training within required timeframes
- Report security incidents, concerns, and suspected breaches immediately
- Protect personal data and organizational information from unauthorized disclosure

**Legal and Compliance**
- Provides legal advice on regulatory obligations, breach notifications, and contractual security requirements
- Reviews and approves NDAs, data processing agreements, and third-party contracts
- Monitors changes to applicable laws and regulations

**Human Resources**
- Implements pre-employment screening requirements
- Ensures security clauses are embedded in employment contracts
- Manages termination and role-change procedures in accordance with Section 7.1.4
- Administers disciplinary procedures for security policy violations

---

## 13. Policy Violations and Disciplinary Action

### 13.1 Violations

*Any breach of this policy — whether intentional, negligent, or accidental — may result in disciplinary action. Clear consequences reinforce the seriousness of information security obligations.*

Non-compliance with this policy may include, but is not limited to:

- Sharing or disclosing personal data without authorization
- Circumventing or attempting to circumvent technical security controls
- Failure to report a known or suspected security incident or personal data breach
- Unauthorized access to systems, applications, or data
- Failure to complete mandatory security training within required timeframes
- Mishandling of removable media, portable devices, or printed personal data
- Sharing of login credentials with other individuals
- Negligent handling of third-party data or vendor security requirements

### 13.2 Disciplinary Process

Violations of this policy shall be managed through [Organization Name]'s standard disciplinary procedures in accordance with the **Employment Act 1955** and the organization's **HR Disciplinary Policy [Document Reference]**. The severity of disciplinary action shall be proportionate to the nature, frequency, and impact of the violation:

| Violation Severity | Examples | Disciplinary Outcome |
|---|---|---|
| Minor | First-time, accidental non-compliance; low risk | Documented verbal warning; remedial training |
| Moderate | Repeated minor violations; negligent handling of personal data | Written warning; mandatory retraining; access restrictions |
| Serious | Deliberate circumvention of controls; failure to report known breach | Final warning; temporary suspension; access revocation |
| Gross Misconduct | Intentional data theft; sale of personal data; malicious sabotage | Summary dismissal; civil or criminal referral |

### 13.3 Regulatory and Legal Consequences

[Organization Name] draws the attention of all personnel to the penalties provided under applicable legislation for personal data-related offences:

| Offence | Legislation | Penalty |
|---|---|---|
| Processing personal data without PDPA registration | PDPA s16 | Fine up to RM500,000 and/or imprisonment up to 3 years |
| Breach of PDPA data principles (incl. Security Principle) | PDPA ss7–11 | Fine up to RM300,000 and/or imprisonment up to 2 years |
| Unauthorised access to computer systems | Computer Crimes Act 1997, s3 | Fine up to RM50,000 and/or imprisonment up to 5 years |
| Unauthorised interception of computer communications | Computer Crimes Act 1997, s5 | Fine up to RM50,000 and/or imprisonment up to 5 years |

---

## 14. Review and Approval

### 14.1 Policy Review

This policy shall be reviewed:

- **Annually**, as part of the scheduled ISMS management review
- **Ad hoc**, following any of the following triggers:
  - A significant information security incident or personal data breach
  - Material changes to applicable legislation, regulations, or regulatory guidance
  - Significant changes to [Organization Name]'s technology infrastructure, business processes, or risk profile
  - Recommendations arising from internal or external audits
  - Changes to the organizational structure affecting governance of this policy

The CISO is responsible for initiating and coordinating each review. All proposed changes must be approved in accordance with the approval authority defined in Section 14.3.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 0.1 | [Date] | [Author Name, Title] | Initial draft |
| 0.2 | [Date] | [Author Name, Title] | Incorporated legal review comments |
| 0.3 | [Date] | [Author Name, Title] | Incorporated IT Security review; updated controls |
| 1.0 | [Date] | [Author Name, Title] | Approved version for publication |
| | | | |
| | | | |

### 14.3 Approval Sign-Off

This policy has been reviewed and approved by the following authorized individuals:

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | [Name], [Title] | | [Date] |
| Reviewed by | [Name], Data Protection Officer | | [Date] |
| Reviewed by | [Name], Head of Legal and Compliance | | [Date] |
| Reviewed by | [Name], Head of IT | | [Date] |
| Approved by | [Name], Chief Information Security Officer | | [Date] |
| Endorsed by | [Name], Chief Executive Officer | | [Date] |
| Noted by | Board Risk Committee | | [Date] |

---

## 15. References

### 15.1 Primary Legislative and Regulatory References

| Reference | Description | Relevant Provisions |
|---|---|---|
| **Personal Data Protection Act 2010 (Act 709)** | Primary Malaysian legislation governing personal data protection | s4 (Definitions), s7 (General Principle), **s9 (Security Principle)**, s10 (Retention Principle), s11 (Data Integrity Principle), s40 (Sensitive Personal Data), s129 (Transfer of Personal Data to Places Outside Malaysia) |
| **Personal Data Protection Regulations 2013** | Subsidiary legislation under the PDPA | All regulations governing registration, fees, and enforcement |
| **Personal Data Protection Standards 2015** | Minimum standards for personal data protection measures | **Standard 1** (Security Measures), **Standard 2** (Storage), **Standard 3** (Access Control), **Standard 4** (Processing Security), **Standard 5** (Transmission Security), **Standard 6** (Destruction), **Standard 7** (Backup) |
| **Computer Crimes Act 1997 (Act 563)** | Legislation criminalising unauthorized computer access and related offences | s3, s4, s5, s6, s7 |
| **Communications and Multimedia Act 1998 (Act 588)** | Regulation of communications and multimedia industries | Part VI (Network Security) |
| **Digital Signature Act 1997 (Act 562)** | Legal recognition of digital signatures | Where applicable to authentication frameworks |
| **Employment Act 1955 (Act 265)** | Governs employment terms relevant to HR security measures | Where applicable |

### 15.2 Bank Negara Malaysia Guidelines

| Reference | Description |
|---|---|
| **Risk Management in Technology (RMiT) Policy Document** (BNM/RH/PD028-109) | BNM's comprehensive technology risk management framework for financial institutions |
| **Guidelines on Management of Cyber Risk** | BNM guidelines on cyber risk governance and controls |
| **Outsourcing Policy Document** | BNM requirements for managing third-party service providers |

*Note: Applicability of BNM guidelines depends on [Organization Name]'s licensing status. Confirm with Legal and Compliance.*

### 15.3 International Standards Referenced

| Standard | Title | Use in This Policy |
|---|---|---|
| **ISO/IEC 27001:2022** | Information Security Management Systems — Requirements | ISMS framework |
| **ISO/IEC 27002:2022** | Information Security Controls | Control guidance for Sections 6 and 7 |
| **ISO/IEC 27701:2019** | Security Techniques — Extension to ISO 27001 and 27002 for Privacy Information Management | Privacy management framework |
| **ISO/IEC 27005:2022** | Information Security Risk Management | Risk management methodology (Section 5) |
| **ISO/IEC 27035:2023** | Information Security Incident Management | Incident response framework (Section 8) |
| **NIST Cybersecurity Framework 2.0** | Cybersecurity risk management framework | Supplementary control framework |
| **NIST SP 800-53 Rev 5** | Security and Privacy Controls for Information Systems | Technical control reference |
| **NIST SP 800-88 Rev 1** | Guidelines for Media Sanitization | Media disposal standards (Section 7.5.2) |
| **NIST SP 800-63B** | Digital Identity Guidelines — Authentication | Authentication standards (Section 6.2.3) |

---

## 16. Appendices

### Appendix A — Information Security Policy Acknowledgement Form

*Each employee, contractor, and relevant third party shall sign this form to confirm they have read, understood, and agree to comply with the Information Security Policy.*

---

**INFORMATION SECURITY POLICY — ACKNOWLEDGEMENT OF RECEIPT AND UNDERSTANDING**

I, the undersigned, confirm that:

1. I have received a copy of [Organization Name]'s Information Security Policy (Version [1.0], dated [Date]).
2. I have read and understood the contents of the policy and its implications for my role.
3. I agree to comply with all requirements of the Information Security Policy during and, where applicable, after my engagement with [Organization Name].
4. I understand that non-compliance may result in disciplinary action up to and including termination of employment or engagement, and in serious cases, civil or criminal proceedings.
5. I understand my obligation to report any actual, suspected, or potential information security incident or personal data breach immediately through the channels described in Section 8.3.1 of this policy.

| Field | Details |
|---|---|
| Full Name | |
| Job Title / Role | |
| Department / Business Unit | |
| Employment Status | Employee / Contractor / Consultant / Other |
| Signature | |
| Date | |
| Line Manager | |
| HR Reference Number | |

*Original to be retained by Human Resources. Copy to be provided to employee/contractor.*

---

### Appendix B — Data Classification Reference Card

*Quick reference for employees to determine the classification of information they handle.*

**How to Classify Information:**

```
Does it contain personal data as defined under the PDPA?
│
├── YES → Does it include sensitive personal data (PDPA s40: health,
│          political opinions, religious beliefs, criminal records)?
│          │
│          ├── YES → RESTRICTED
│          │
│          └── NO  → CONFIDENTIAL
│
└── NO  → Is it intended for internal use only?
           │
           ├── YES → INTERNAL
           │
           └── NO  → PUBLIC (only if formally approved for release)
```

**Quick Reference by Data Type:**

| Data Type | Classification | Handling Requirement |
|---|---|---|
| Customer full name + IC number + financial data | Confidential | Encrypted storage; need-to-know access; secure transmission |
| Customer health information | Restricted | Encrypted; strictly limited access; enhanced logging |
| Employee payroll records | Confidential | Encrypted; HR access only |
| Customer account numbers | Confidential | Masked in non-production; encrypted at rest |
| Internal financial reports | Internal | No external sharing without approval |
| Marketing brochures | Public | Unrestricted distribution |
| Aggregate anonymized statistics | Internal / Public | Verify no re-identification risk before publishing |

---

### Appendix C — Security Incident Report Template

*To be completed by the initial reporter of a security incident or suspected personal data breach.*

---

**SECURITY INCIDENT REPORT FORM**

| Field | Detail |
|---|---|
| **Incident Reference Number** | [Assigned by IT Security] |
| **Date/Time Reported** | |
| **Reporter Name** | |
| **Reporter Contact Details** | |
| **Date/Time Incident Discovered** | |
| **Date/Time Incident Occurred (if known)** | |
| **Incident Classification (initial)** | P1 / P2 / P3 / P4 |
| **Systems Affected** | |
| **Personal Data Involved?** | Yes / No / Unknown |
| **If Yes — Categories of Personal Data** | |
| **If Yes — Estimated Number of Data Subjects Affected** | |
| **Description of Incident** | *(Describe what happened, what was observed, and how the incident was discovered)* |
| **Immediate Actions Taken** | |
| **Reported To** | |
| **Evidence Preserved?** | Yes / No / Partial |

*Submit to: [IT Security email / Helpdesk portal]. For P1/P2 incidents, also call the Security Hotline: [Number]*

---

### Appendix D — Third-Party Security Assessment Questionnaire (Summary)

*Full questionnaire maintained by the IT Security team. This appendix provides a summary of assessment domains.*

| Domain | Key Assessment Areas |
|---|---|
| 1. Information Security Governance | Security policy existence and currency; ISMS certification (ISO 27001 etc.); security leadership and accountability |
| 2. Risk Management | Risk assessment process; risk register maintenance; treatment of risks relating to [Organization Name]'s data |
| 3. Access Control | User access management; MFA implementation; privileged access controls; access review frequency |
| 4. Data Protection | Encryption at rest and in transit; data classification; data minimization; retention and deletion practices |
| 5. Incident Response | Incident response plan; breach notification procedures; historical breach disclosures |
| 6. Business Continuity | BCP/DRP existence and testing; RTO/RPO for services provided to [Organization Name] |
| 7. Physical Security | Data centre controls; physical access logging; environmental controls |
| 8. Network Security | Network segmentation; firewall management; vulnerability scanning; penetration testing |
| 9. Sub-Processors | Identification of sub-processors; contractual obligations cascaded to sub-processors |
| 10. Regulatory Compliance | PDPA compliance; relevant certifications; regulatory findings history |

**Assessment Rating Scale:**

| Rating | Score | Description |
|---|---|---|
| Satisfactory | 3 | Controls are in place, documented, tested, and effective |
| Partially Satisfactory | 2 | Controls exist but have gaps; remediation plan required |
| Unsatisfactory | 1 | Controls absent or significantly deficient; engagement must not proceed without remediation |
| Not Applicable | N/A | Requirement does not apply to the service provided |

---

### Appendix E — Cryptographic Algorithm Standards

*Approved and prohibited cryptographic algorithms as at the effective date of this policy. Reviewed annually.*

**Approved Algorithms:**

| Use Case | Approved Algorithms | Minimum Key Length |
|---|---|---|
| Symmetric encryption (data at rest) | AES | 256-bit |
| Symmetric encryption (data in transit) | AES | 128-bit minimum; 256-bit preferred |
| Asymmetric encryption / key exchange | RSA, ECDH | RSA 2048-bit minimum; ECDH P-256 minimum |
| Digital signatures | RSA-PSS, ECDSA, Ed25519 | RSA 2048-bit minimum |
| Hashing (integrity) | SHA-256, SHA-384, SHA-512, SHA-3 | As specified |
| Password hashing | bcrypt, scrypt, Argon2id | Per NIST SP 800-63B |
| TLS protocol versions | TLS 1.2, TLS 1.3 | — |
| Key derivation | HKDF, PBKDF2 | — |

**Prohibited Algorithms (must not be used for protecting personal data):**

| Prohibited Algorithm | Reason |
|---|---|
| MD5 | Collision attacks demonstrated |
| SHA-1 | Collision attacks demonstrated |
| DES | Key length insufficient |
| 3DES / TDEA | Deprecated; Sweet32 vulnerability |
| RC4 | Cryptographic weaknesses |
| SSL (all versions) | Multiple critical vulnerabilities |
| TLS 1.0 / TLS 1.1 | Deprecated; POODLE, BEAST vulnerabilities |
| RSA < 2048-bit | Insufficient key length |
| ECB mode (block cipher) | Does not provide semantic security |

---

### Appendix F — Information Asset Register Template

*Maintained by IT Security and updated at minimum annually. Personal data assets must be registered in both the Asset Register and the Record of Processing Activities (RoPA).*

| Asset ID | Asset Name | Asset Type | Owner | Custodian | Location | Classification | Personal Data? | Data Categories | System Dependencies | Last Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Name] | [Type] | [Name] | [Team] | [Location] | [Class] | Yes/No | [Categories] | [Systems] | [Date] |
| | | | | | | | | | | |
| | | | | | | | | | | |

---

### Appendix G — Acceptable Use Summary for Personal Data Systems

*Full Acceptable Use Policy is at [Document Reference]. This summary provides a quick reference for employees.*

**You MAY:**
- Access personal data that you have a legitimate business need to access in performance of your authorized duties
- Use organization-approved devices, applications, and transmission methods when handling personal data
- Report security concerns or suspected incidents to IT Security without fear of reprisal
- Request guidance from the DPO or IT Security on handling personal data appropriately

**You MUST:**
- Complete all mandatory security training within required timeframes
- Lock your workstation when stepping away
- Use approved encryption methods when transmitting personal data
- Report lost or stolen devices immediately to IT Security
- Verify the identity and authority of individuals requesting access to personal data

**You MUST NOT:**
- Share your login credentials with any other person under any circumstances
- Access, copy, transmit, or disclose personal data beyond your authorized role
- Store personal data on personal devices, personal cloud storage, or unauthorized media
- Use personal email accounts to transmit personal data
- Attempt to access systems, data, or areas for which you are not authorized
- Delete, alter, or tamper with personal data except as required by your authorized duties and in accordance with approved procedures
- Discuss or disclose personal data in public places where conversations may be overheard

---

### Appendix H — Glossary of PDPA Key Terms

*Quick reference aligned with the Personal Data Protection Act 2010 definitions.*

| Term | PDPA Reference | Plain Language Explanation |
|---|---|---|
| Data Controller | s4 | The organization (or person) that decides why and how personal data is processed — i.e., [Organization Name] in most contexts |
| Data Processor | s4 | A third party that processes personal data on behalf of [Organization Name], following [Organization Name]'s instructions |
| Data Subject | s4 | The individual whose personal data is being processed — the customer, employee, or other natural person |
| Personal Data | s4 | Any information relating to an identifiable living individual in the context of commercial transactions |
| Sensitive Personal Data | s40 | A special category of personal data including health, political, religious, and criminal information — subject to heightened controls |
| Processing | s4 | A broad concept covering collecting, storing, using, disclosing, transmitting, and destroying personal data |
| Security Principle | s9 | The obligation to take practical steps to protect personal data from loss, misuse, modification, unauthorized access, disclosure, alteration, or destruction |
| Consent | ss4, 6 | Agreement from the data subject for the processing of their personal data |
| Data Breach | — (implied by s9) | Any event resulting in unauthorized access to, disclosure of, or loss of personal data |

---

*End of Document*

---

**Document Control Footer**

| | |
|---|---|
| **Document Title** | Information Security Policy |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer |
| **Next Review Date** | [Next Review Date] |
| **Framework** | Personal Data Protection Act 2010 (Malaysia) — s9 Security Principle |

*This document is subject to change control. Printed copies are uncontrolled. Always refer to the [Document Management System / SharePoint / GRC Platform] for the current approved version.*