# Access Control Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer / IT Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Legal Basis](#3-regulatory-framework-and-legal-basis)
4. [Definitions](#4-definitions)
5. [Policy Principles](#5-policy-principles)
6. [Role-Based Access Control (RBAC) Framework](#6-role-based-access-control-rbac-framework)
7. [Least Privilege and Need-to-Know Principles](#7-least-privilege-and-need-to-know-principles)
8. [Access Provisioning and De-Provisioning Procedures](#8-access-provisioning-and-de-provisioning-procedures)
9. [Multi-Factor Authentication Requirements](#9-multi-factor-authentication-requirements)
10. [Privileged Access Management](#10-privileged-access-management)
11. [Periodic Access Review and Recertification](#11-periodic-access-review-and-recertification)
12. [Remote Access and Mobile Device Requirements](#12-remote-access-and-mobile-device-requirements)
13. [Logging and Monitoring of Data Access](#13-logging-and-monitoring-of-data-access)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Policy Compliance and Exceptions](#15-policy-compliance-and-exceptions)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*This section should clearly articulate why this policy exists, what problem it solves, and its overarching objective in protecting personal data.*

This Access Control Policy establishes the principles, requirements, and procedures governing access to personal data systems, databases, and information assets held by [Organization Name]. The policy ensures that access to personal data is granted only to authorized individuals, based on legitimate business need, and is managed throughout its entire lifecycle — from provisioning through to revocation.

This policy supports [Organization Name]'s obligations as a data controller under the **Personal Data Protection Act 2010 (PDPA)**, specifically the **Security Principle (Section 9)** and the **Access Principle (Section 12)**. It is designed to prevent unauthorized access, loss, misuse, modification, or disclosure of personal data processed by [Organization Name] in the course of its commercial transactions.

---

## 2. Scope

*This section defines who and what the policy applies to. Be explicit about systems, personnel categories, and any exclusions.*

### 2.1 Applicability

This policy applies to:

- All **employees** of [Organization Name], including permanent, contract, temporary, and part-time staff;
- All **third-party vendors, contractors, consultants, and business partners** who are granted access to [Organization Name]'s systems or personal data under contractual arrangement;
- All **systems, applications, databases, and infrastructure components** that store, process, transmit, or provide access to personal data;
- All **access methods**, including on-premises, cloud-hosted, remote, and mobile access.

### 2.2 Personal Data Systems in Scope

*List all systems or system categories that hold personal data. Expand this table to reflect the actual systems inventory of the organization.*

| System / Application | Data Classification | Personal Data Category | System Owner |
|---|---|---|---|
| [Core Banking System] | Confidential | Financial, Identity | [System Owner] |
| [Customer Relationship Management (CRM)] | Confidential | Identity, Contact | [System Owner] |
| [Human Resources Information System (HRIS)] | Restricted | Identity, Employment | [System Owner] |
| [Document Management System] | Confidential | Identity, Financial | [System Owner] |
| [Email and Collaboration Platform] | Internal | Contact, Identity | [System Owner] |
| [Loan Origination System] | Restricted | Financial, Identity | [System Owner] |
| [Data Warehouse / Analytics Platform] | Restricted | Aggregated Personal Data | [System Owner] |

### 2.3 Exclusions

*Document any explicit exclusions from this policy's scope, and reference the alternative control document that applies.*

The following are excluded from this policy:

- Publicly available information that does not constitute personal data as defined under the PDPA;
- Anonymized or de-identified datasets where re-identification is not reasonably possible, subject to confirmation by the [Data Protection Officer / CISO];
- [Other exclusions as applicable].

---

## 3. Regulatory Framework and Legal Basis

*This section anchors the policy to its regulatory obligations. Reference all applicable legislation, regulations, and standards.*

[Organization Name] is required to implement access controls over personal data by virtue of the following regulatory requirements:

### 3.1 Personal Data Protection Act 2010 (PDPA)

| PDPA Section | Principle | Requirement Summary |
|---|---|---|
| **Section 9** | Security Principle | A data controller shall take practical steps to protect personal data from any loss, misuse, modification, unauthorized or accidental access or disclosure, alteration, or destruction. |
| **Section 12** | Access Principle | A data subject shall be given access to their personal data held by the data controller and be able to correct that personal data where it is inaccurate, incomplete, misleading, or not up to date. |
| **Section 5** | General Principle | Personal data shall not be processed unless the data subject has given consent or processing falls within a lawful ground. |

### 3.2 Related Standards and Frameworks

| Standard / Framework | Relevance |
|---|---|
| **ISO/IEC 27001:2022** — A.5.15, A.5.18 | Access control, identity management |
| **ISO/IEC 27002:2022** — Control 8.2, 8.3 | Privileged access rights, access restriction |
| **NIST SP 800-53 Rev. 5** — AC Family | Access control control family |
| **Bank Negara Malaysia (BNM) RMiT** — [Relevant Domain] | Technology risk and cybersecurity requirements |
| **NACSA Cybersecurity Framework** | National cybersecurity baseline requirements |
| **[Organization Name] Information Security Policy** | Parent policy |

---

## 4. Definitions

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Access Control** | The process of granting or denying specific requests to obtain and use information and related information processing services. |
| **Authentication** | The process of verifying the identity of a user, process, or device as a prerequisite to allowing access to resources. |
| **Authorization** | The process of granting a user, system, or entity permission to access a defined set of resources or perform specific actions. |
| **Data Controller** | A person who processes personal data, or has control over, or authorizes the processing of any personal data; in this context, [Organization Name]. |
| **Data Subject** | An individual who is the subject of personal data. |
| **Least Privilege** | The principle that a user, process, or program should have only the minimum access rights necessary to perform its legitimate function. |
| **Multi-Factor Authentication (MFA)** | An authentication method requiring the user to provide two or more verification factors (knowledge, possession, or inherence). |
| **Need-to-Know** | The principle that access to information should be limited to those who have a legitimate business requirement to access it. |
| **Personal Data** | Any information that relates directly or indirectly to a data subject who is identified or identifiable from that information, as defined under Section 4 of the PDPA 2010. |
| **Privileged Access** | Access rights beyond those of standard users, typically including system administration, database administration, or security management capabilities. |
| **Role-Based Access Control (RBAC)** | An access control mechanism that restricts system access to authorized users based on their role within the organization. |
| **Separation of Duties (SoD)** | The concept of having more than one person required to complete a task, preventing fraud or error. |
| **User Account** | A formal record in a system that identifies a specific individual and controls their access to that system. |

---

## 5. Policy Principles

*This section articulates the foundational principles upon which all access control decisions must be made.*

All access to personal data systems at [Organization Name] shall be governed by the following core principles:

### 5.1 Least Privilege

Users shall be granted only the minimum level of access rights necessary to perform their assigned job functions. Access shall not be granted speculatively or in anticipation of future business need.

### 5.2 Need-to-Know

Access to personal data shall be restricted to individuals who have a demonstrated, legitimate business requirement to view or process that data. Knowledge of the existence of certain data is distinct from the right to access it.

### 5.3 Separation of Duties

Conflicting duties and areas of responsibility shall be segregated to reduce opportunities for unauthorized or unintentional modification or misuse of personal data. No single individual shall have the ability to execute a complete transaction or process from initiation to completion without independent verification.

### 5.4 Default Deny

Access to all systems and personal data shall be denied by default. Access shall only be granted following a formal, documented request and approval process.

### 5.5 Accountability

All access to personal data systems shall be traceable to a specific, identifiable individual. Shared or generic accounts shall be prohibited except in documented exceptional circumstances subject to compensating controls.

### 5.6 Lifecycle Management

Access rights shall be actively managed throughout the entire employment or engagement lifecycle, from initial onboarding to termination, including changes in role, department, or responsibilities.

---

## 6. Role-Based Access Control (RBAC) Framework

*This section defines how the organization structures access permissions based on roles. It should reflect the actual role taxonomy of the organization.*

### 6.1 RBAC Overview

*Describe the RBAC model adopted by the organization and how roles map to job functions. Ensure that role definitions are aligned with the organization's HR job structure.*

[Organization Name] implements a Role-Based Access Control (RBAC) model whereby access permissions are assigned to defined roles rather than to individual users. Users are then assigned to roles that correspond to their job function. This approach ensures consistent access management, simplifies provisioning and de-provisioning, and supports audit and compliance activities.

### 6.2 Access Role Classification

All access roles shall be classified according to the following tiers:

| Role Tier | Description | Examples | MFA Required | Review Frequency |
|---|---|---|---|---|
| **Tier 0 — Privileged / Administrative** | Full administrative control over systems, infrastructure, or databases | System Administrators, Database Administrators, Security Administrators | Yes — Mandatory | Quarterly |
| **Tier 1 — Elevated Business Access** | Enhanced access to sensitive personal data beyond standard job function | Senior Analysts, Compliance Officers, Audit Personnel | Yes — Mandatory | Semi-Annual |
| **Tier 2 — Standard Business Access** | Normal operational access required for job function | Relationship Managers, Operations Staff, Customer Service | Yes — Recommended | Annual |
| **Tier 3 — Read-Only / Limited Access** | View-only or narrowly scoped access | Reporting Users, Auditors (read-only), Third-Party Reviewers | Yes — Recommended | Annual |

### 6.3 Role Definitions for Personal Data Systems

*Populate this table with the specific roles defined within each system in scope. Each role should map to a business function.*

| System | Role Name | Access Level | Permitted Actions | Prohibited Actions |
|---|---|---|---|---|
| [CRM System] | CRM_Admin | Tier 0 | Full administration, user management | Direct production data modification without change request |
| [CRM System] | CRM_RelationshipManager | Tier 2 | View and update assigned customer records | Bulk export, deletion of records |
| [CRM System] | CRM_ReadOnly | Tier 3 | View customer records | Modification, export, deletion |
| [HRIS] | HRIS_HRAdmin | Tier 1 | Full HR records access | Payroll modification without dual approval |
| [HRIS] | HRIS_LineManager | Tier 2 | View direct reports' records | View other departments' records |
| [Core Banking] | CBS_Teller | Tier 2 | Process transactions for assigned accounts | Override transaction limits |
| [Core Banking] | CBS_DBA | Tier 0 | Database administration | Direct data modification without approved change record |
| [Data Warehouse] | DW_Analyst | Tier 1 | Run approved reports and queries | Export raw personal data without DPO approval |

### 6.4 Segregation of Duties Matrix

*This table documents conflicts between roles that must not be held by the same individual. Update with organization-specific SoD conflicts.*

| Function A | Function B | Conflict Type | Compensating Control (if exception) |
|---|---|---|---|
| Access Provisioning | Access Approval | Critical | Not permitted — must be separate individuals |
| Payment Initiation | Payment Authorization | Critical | Not permitted — must be separate individuals |
| System Administration | Security Audit | High | Independent review by CISO |
| Data Entry | Data Verification | High | Supervisor review and approval |
| User Account Creation | User Account Deletion | High | Access Manager oversight |
| Database Administration | Application Development (Production) | High | Change Management Board approval |

---

## 7. Least Privilege and Need-to-Know Principles

*This section details how the least privilege and need-to-know principles are operationalized within the organization's access control processes.*

### 7.1 Access Scoping Requirements

*Describe how access requests must be scoped and justified to meet least privilege requirements.*

All access requests submitted for approval must include a specific justification demonstrating:

- **Business Need:** A clear description of the business function requiring the access;
- **Data Scope:** Identification of the specific data categories or records to which access is required;
- **Duration:** Whether access is required on a permanent, temporary, or project basis;
- **Alternatives Considered:** Confirmation that no less-privileged access method could meet the business need.

### 7.2 Access Scoping Standards

The following standards shall apply when scoping access to personal data:

- Access shall be restricted to the **minimum data fields** necessary. Access to full records shall not be granted where access to a subset of fields is sufficient;
- Access shall be restricted to the **minimum volume of records** necessary. Where possible, access shall be scoped to specific customer segments, departments, or geographic regions;
- **Time-bound access** shall be used for project-based or temporary requirements, with automatic expiry configured where technically feasible;
- **Functional restrictions** shall be applied to limit operations (e.g., read-only where write access is not required; no export where viewing is sufficient).

### 7.3 Access Justification Requirements by Data Category

*Define the level of justification required to access different categories of personal data.*

| Personal Data Category | Justification Threshold | Approval Authority | Maximum Access Duration |
|---|---|---|---|
| Sensitive Personal Data (health, financial details) | Formal written business case | HOD + DPO | Project-scoped with defined end date |
| Standard Personal Data (name, contact, identity) | Standard access request form | Line Manager + System Owner | Role-based (reviewed annually) |
| Aggregated / Anonymized Data | Standard access request form | Line Manager | Role-based (reviewed annually) |
| Audit Logs and Access Records | Written justification | CISO | Audit-period scoped |

---

## 8. Access Provisioning and De-Provisioning Procedures

*This section defines the end-to-end lifecycle procedures for managing user access from onboarding to offboarding.*

### 8.1 Access Provisioning

#### 8.1.1 New User Onboarding

*Describe the process for granting access to new employees or contractors joining the organization.*

Upon joining [Organization Name], access shall be provisioned according to the following procedure:

1. **HR Notification:** Human Resources shall notify the IT Department of all new joiners at least **[X] business days** prior to the commencement date, providing the following information:
   - Full name, employee ID, and job title;
   - Department, reporting line manager, and work location;
   - Commencement date and employment type (permanent, contract, temporary).

2. **Role Assignment:** The Line Manager shall complete the **Access Request Form (Appendix A)** specifying the required system roles within **[X] business days** of receiving the HR notification.

3. **Access Approval:** The Access Request Form shall be reviewed and approved by:
   - Line Manager (initial approval);
   - System Owner (for each system requested);
   - [Data Protection Officer / CISO] (for access to sensitive personal data or Tier 0/1 roles).

4. **Account Creation:** The IT Department / [Identity and Access Management Team] shall create user accounts only upon receipt of fully approved Access Request Forms.

5. **Credential Delivery:** Initial credentials shall be communicated to the user through a secure, out-of-band channel. Default passwords shall require immediate change upon first login.

6. **Confirmation:** The IT Department shall confirm account creation to the Line Manager and HR within **[X] business days**.

#### 8.1.2 Access Changes (Role Changes, Promotions, Transfers)

*Define how access is managed when an employee's role changes, including transfers between departments.*

When an employee's role, department, or responsibilities change:

1. HR shall notify the IT Department of the role change via the **Access Change Notification Form (Appendix B)** within **[X] business days** of the effective date;
2. The new Line Manager shall submit an **Access Request Form** for new access requirements;
3. Access associated with the previous role shall be **revoked within [X] business days** of the effective change date, unless specifically retained with documented justification;
4. A **transfer access review** shall be conducted by the departing Line Manager and the receiving Line Manager to ensure no residual access is retained unnecessarily.

#### 8.1.3 Temporary / Project-Based Access

*Define the process for granting time-limited access for specific projects or temporary requirements.*

Temporary access shall be governed by the following requirements:

- An explicit **end date** must be specified at the time of the access request;
- The system shall be configured to **automatically expire** temporary access where technically feasible;
- If automatic expiry is not feasible, the requesting manager shall be responsible for submitting a de-provisioning request by the access end date;
- Temporary access shall not exceed **[X] months** without re-approval through the standard provisioning process;
- All temporary access shall appear on the **Periodic Access Review** register.

### 8.2 Access De-Provisioning

#### 8.2.1 Employee Resignation or Termination

*Define the immediate steps to revoke access upon an employee leaving the organization.*

Upon notification of an employee's resignation or termination:

| Trigger | Action | Responsible Party | Timeline |
|---|---|---|---|
| Resignation accepted | Flag account for scheduled deactivation | HR + IT | Immediately upon acceptance |
| Last working day | Disable all system accounts | IT Department | By end of last working day |
| Termination (immediate / involuntary) | Disable all system accounts | IT Department | Within **[X] hours** of notification |
| Last working day | Revoke physical and logical access cards | IT Department / Facilities | By end of last working day |
| Last working day | Retrieve all devices and access tokens | Line Manager / IT | By end of last working day |
| **[30] days** post-departure | Permanently delete or archive accounts | IT Department | [30] days post-departure |
| **[90] days** post-departure | Confirm deletion of access and notify HR | IT Department | [90] days post-departure |

#### 8.2.2 Contractor and Third-Party De-Provisioning

Upon expiry or termination of a third-party engagement:

- The **Contract Owner** shall notify IT at least **[X] business days** before the engagement ends;
- All accounts created for the contractor shall be disabled on the engagement end date;
- If a contractor's engagement is extended, re-approval through the standard provisioning process is required.

#### 8.2.3 De-Provisioning Verification

*Define how the organization verifies that de-provisioning has been completed correctly.*

- The IT Department shall generate a **De-Provisioning Confirmation Report** within **[X] business days** of account deactivation;
- The report shall be reviewed by the CISO or designated delegate;
- Any discrepancies (e.g., accounts not disabled on schedule) shall be logged as **access control incidents** and investigated accordingly.

---

## 9. Multi-Factor Authentication Requirements

*This section defines MFA requirements for different access scenarios and user categories.*

### 9.1 MFA Policy Statement

[Organization Name] mandates Multi-Factor Authentication (MFA) for all access to systems that store or process personal data. MFA requires users to present at least two of the following authentication factors:

| Factor Type | Description | Examples |
|---|---|---|
| **Knowledge** | Something the user knows | Password, PIN |
| **Possession** | Something the user has | Hardware token, authenticator app, smart card |
| **Inherence** | Something the user is | Biometric (fingerprint, facial recognition) |

### 9.2 MFA Requirements by Access Scenario

| Access Scenario | MFA Requirement | Permitted MFA Methods | Notes |
|---|---|---|---|
| Remote access to any corporate system | **Mandatory** | Authenticator app, hardware token | VPN access included |
| Privileged / administrative account access | **Mandatory** | Hardware token, authenticator app | Password + hardware token preferred |
| Access to sensitive personal data systems | **Mandatory** | Authenticator app, hardware token | Applies to Tier 0 and Tier 1 roles |
| Standard on-premises system access | **Recommended** | Authenticator app, SMS OTP | [Organization to confirm mandate date] |
| Cloud-hosted application access | **Mandatory** | Authenticator app, SSO with MFA | |
| Third-party / vendor access | **Mandatory** | Authenticator app, hardware token | Time-limited with MFA |

### 9.3 MFA Exceptions

*Define under what circumstances an MFA exception may be granted and the controls that apply.*

MFA exceptions shall only be permitted in the following circumstances:

- **Legacy Systems:** Where technical constraints prevent MFA integration, documented as a risk exception and subject to compensating controls (e.g., IP restriction, enhanced monitoring, network segmentation);
- **Emergency / Break-Glass Access:** Emergency access procedures are covered under the Privileged Access Management section (Section 10);
- All exceptions shall be formally documented, approved by the CISO, and reviewed quarterly.

### 9.4 Authentication Credential Standards

*Define password complexity and management requirements to complement MFA.*

All authentication credentials shall comply with the following minimum standards:

| Requirement | Standard |
|---|---|
| Minimum password length | [12] characters |
| Complexity requirements | Upper and lowercase letters, numerals, and special characters |
| Password history | Last [12] passwords may not be reused |
| Maximum password age | [90] days (standard users); [60] days (privileged users) |
| Account lockout threshold | [5] consecutive failed attempts |
| Account lockout duration | [30] minutes (auto-unlock) or manual unlock by IT |
| Default / initial passwords | Must be changed on first login |

---

## 10. Privileged Access Management

*This section governs the management of accounts with elevated or administrative privileges, which carry the highest risk of misuse.*

### 10.1 Privileged Account Classification

*Classify all types of privileged accounts used in the organization.*

The following categories of privileged accounts are recognized at [Organization Name]:

| Account Type | Description | Example |
|---|---|---|
| **System Administrator Account** | Full control over operating systems and server infrastructure | Domain Admin, root |
| **Database Administrator (DBA) Account** | Administrative control over databases containing personal data | Oracle DBA, SQL Server SA |
| **Network / Security Administrator Account** | Control over network infrastructure, firewalls, and security systems | Firewall Admin, SOC Admin |
| **Application Administrator Account** | Administrative access to business applications | CRM Admin, ERP Admin |
| **Service / Application Account** | Non-human accounts used by applications and automated processes | Service accounts, API keys |
| **Emergency / Break-Glass Account** | Accounts reserved for emergency use when normal access is unavailable | [Break-Glass Account naming convention] |

### 10.2 Privileged Access Controls

The following controls shall apply to all privileged accounts:

- **Named accounts only:** Privileged access shall be assigned to named individuals. Shared privileged accounts shall be prohibited, except for break-glass accounts under the controls specified in Section 10.4;
- **Just-in-time (JIT) access:** Where technically feasible, privileged access shall be granted on a time-limited, just-in-time basis for specific tasks rather than on a permanent standing basis;
- **Dedicated privileged accounts:** Privileged users shall use a separate, dedicated account for privileged tasks, distinct from their standard user account used for day-to-day activities;
- **Privileged Access Workstation (PAW):** [If applicable] Administrative tasks shall be performed from designated Privileged Access Workstations that are hardened and segregated from general-purpose computing environments;
- **Dual approval for critical changes:** Administrative actions on systems containing sensitive personal data shall require approval from a second authorized person before execution.

### 10.3 Privileged Access Management (PAM) Tool

*If a PAM solution is deployed, describe its use and requirements here.*

[Organization Name] utilizes **[PAM Solution Name]** to manage, control, and audit privileged access. The PAM solution provides:

- Centralized vault for privileged credentials;
- Session recording and monitoring of all privileged sessions;
- Automatic password rotation for privileged accounts;
- Just-in-time access provisioning and automatic expiry;
- Audit trail of all privileged access activity.

### 10.4 Emergency / Break-Glass Access

*Define the procedure for accessing systems under emergency conditions when normal access controls cannot be followed.*

Emergency access shall be governed by the following procedure:

1. **Authorization:** Emergency access requests must be authorized by the [CISO / Head of IT / On-call Authority] prior to use, except where the emergency prevents prior authorization, in which case authorization must be obtained at the earliest possible opportunity;
2. **Access:** The break-glass account credentials shall be retrieved from the **[Secure Location / PAM Vault]** under dual-control;
3. **Logging:** The date, time, duration, reason, and identity of the individual using break-glass access shall be recorded in the **Emergency Access Log (Appendix C)**;
4. **Review:** All break-glass access events shall be reviewed by the CISO within **[X] business days** of occurrence;
5. **Password Rotation:** Break-glass account passwords shall be rotated immediately following each use.

### 10.5 Service and Application Account Management

*Define controls for non-human accounts used by applications and automated processes.*

| Requirement | Standard |
|---|---|
| Service account inventory | All service accounts shall be documented in the **Service Account Register (Appendix D)** |
| Ownership | Each service account shall have a named owner responsible for its management |
| Principle of least privilege | Service accounts shall be scoped to the minimum permissions required for the application's function |
| Password management | Service account passwords shall be stored in the PAM vault and rotated on a [quarterly] basis or immediately upon staff changes |
| Prohibition | Service accounts shall not be used for interactive login by human users |
| Review | Service accounts shall be reviewed [quarterly] as part of the privileged access review cycle |

---

## 11. Periodic Access Review and Recertification

*This section defines the process for regularly reviewing and confirming that access rights remain appropriate and necessary.*

### 11.1 Access Review Schedule

*Define the frequency of access reviews for different account types and risk levels.*

| Account / Role Category | Review Frequency | Reviewer | Approver |
|---|---|---|---|
| Tier 0 — Privileged / Administrative Accounts | Quarterly | System Owner | CISO |
| Tier 1 — Elevated Business Access | Semi-Annual | Line Manager | System Owner |
| Tier 2 — Standard Business Access | Annual | Line Manager | Department Head |
| Tier 3 — Read-Only / Limited Access | Annual | Line Manager | System Owner |
| Third-Party / Vendor Access | Aligned to contract term; minimum Annual | Contract Owner | CISO |
| Service / Application Accounts | Quarterly | Service Account Owner | CISO |
| Dormant Accounts (no login > [90] days) | Ad hoc — trigger-based | IT Department | CISO |

### 11.2 Access Review Process

*Describe the step-by-step access review and recertification process.*

The periodic access review shall be conducted as follows:

1. **Review Initiation:** The [IAM Team / IT Department] shall generate an **Access Review Report** for each system, listing all current users, their assigned roles, and the date of their last access;
2. **Distribution:** The report shall be distributed to the relevant Line Managers and System Owners, who are responsible for certifying the appropriateness of access for their respective teams and systems;
3. **Recertification Decisions:** Reviewers shall make one of the following decisions for each access entry:

   | Decision | Action Required |
   |---|---|
   | **Certify** | Access is appropriate and should be retained |
   | **Modify** | Access level should be changed; new access request required |
   | **Revoke** | Access is no longer required; de-provisioning request submitted |

4. **Remediation:** All Modify and Revoke decisions shall be actioned within **[X] business days** of the review decision;
5. **Escalation:** Reviewers who fail to complete the access review by the deadline shall be escalated to their Department Head and the CISO;
6. **Documentation:** Completed access review reports shall be retained for a minimum of **[X] years** for audit purposes;
7. **Reporting:** A summary of access review outcomes, including the number of accounts reviewed, certified, modified, and revoked, shall be reported to the [Information Security Committee / Board Risk Committee] on a [quarterly / annual] basis.

### 11.3 Dormant Account Management

*Define how inactive accounts are identified and managed.*

- Accounts with no login activity for **[60] days** shall be flagged for review and the account owner notified;
- Accounts with no login activity for **[90] days** shall be automatically **disabled**;
- Accounts disabled for **[30] days** shall be scheduled for deletion unless a valid business justification for retention is submitted;
- The IT Department shall generate a **Dormant Account Report** on a **[monthly]** basis and submit it to the CISO for review.

---

## 12. Remote Access and Mobile Device Requirements

*This section governs access to personal data systems from outside the organization's physical premises, including mobile devices.*

### 12.1 Remote Access Standards

Remote access to [Organization Name]'s systems and personal data shall only be permitted through approved, secure channels:

| Remote Access Method | Status | Requirements |
|---|---|---|
| **Corporate VPN** | Approved — Primary method | MFA mandatory; corporate-managed device required; split tunneling prohibited |
| **Zero Trust Network Access (ZTNA)** | Approved — [If deployed] | Device compliance check; identity verification; continuous session monitoring |
| **Citrix / Virtual Desktop Infrastructure (VDI)** | Approved | MFA mandatory; local data download prohibited |
| **Direct RDP to production systems** | Prohibited | — |
| **Personal / home network without VPN** | Prohibited | — |
| **Public Wi-Fi without VPN** | Prohibited | — |

### 12.2 Remote Access Requirements

All remote access sessions shall comply with the following:

- **MFA is mandatory** for all remote access sessions without exception;
- Remote access shall only be permitted from **approved, registered devices** that are enrolled in the organization's device management platform;
- **Session time-out:** Remote access sessions shall automatically terminate after **[X] minutes** of inactivity;
- **Local storage prohibition:** Downloading or storing personal data on local drives during remote sessions is prohibited, unless specifically authorized and the device is encrypted and managed;
- **Session recording:** [Where technically feasible] Remote access sessions involving privileged access or sensitive personal data shall be recorded via the PAM solution.

### 12.3 Mobile Device Requirements

*Define the minimum security requirements for mobile devices used to access personal data.*

Mobile devices used to access [Organization Name]'s systems or personal data must comply with the following requirements:

| Requirement | Standard |
|---|---|
| Device enrolment | Enrolled in [MDM Solution Name] |
| Operating system | Current supported version; minimum OS version: [Define] |
| Screen lock | PIN, password, or biometric; maximum [X] minutes to lock |
| Encryption | Full-device encryption enabled |
| Remote wipe | Remote wipe capability enabled via MDM |
| Jailbreaking / rooting | Prohibited; MDM to enforce detection and block access |
| Application installation | Only approved applications via managed app store |
| Lost/stolen reporting | Report to IT within [X] hours of discovery |

### 12.4 Third-Party Remote Access

*Define additional controls for remote access by third parties (vendors, contractors, support personnel).*

- Third-party remote access shall only be permitted for approved, documented purposes under an active agreement containing data protection obligations;
- Third-party access shall be **time-limited** and scoped to the minimum systems and functions necessary;
- Third-party remote sessions shall be **supervised** by an authorized [Organization Name] employee where access involves personal data systems;
- All third-party remote access sessions shall be **logged and recorded**;
- Third-party access shall be **immediately revoked** upon completion of the approved activity.

---

## 13. Logging and Monitoring of Data Access

*This section defines the requirements for recording and monitoring access to personal data systems to support detection of unauthorized access and provide an audit trail.*

### 13.1 Logging Requirements

*Define what events must be logged for each system category.*

[Organization Name] shall maintain audit logs for all systems that store, process, or transmit personal data. The following events shall be logged as a minimum:

| Event Category | Events to be Logged | Applies To |
|---|---|---|
| **Authentication Events** | Successful logins, failed login attempts, logouts, MFA events, account lockouts | All systems |
| **Authorization Events** | Access to personal data records, permission changes, role assignments | All systems |
| **Privileged Access Events** | All actions by privileged accounts, use of break-glass accounts, sudo/admin escalations | All systems |
| **Data Access Events** | Viewing, querying, exporting, printing, or downloading personal data | Personal data systems |
| **Data Modification Events** | Creation, modification, or deletion of personal data records | Personal data systems |
| **Administrative Events** | User account creation, modification, and deletion; system configuration changes | All systems |
| **Security Events** | Unauthorized access attempts, policy violations, security alerts | All systems |

### 13.2 Log Content Standards

*Define the minimum data elements that must be captured in each log entry.*

Each log entry shall contain, at minimum, the following information:

- **Timestamp** (date and time, in UTC or consistent timezone);
- **User Identity** (username, user ID, employee ID);
- **Source** (IP address, device identifier, application);
- **Action** (the specific action performed);
- **Object** (the system, record, or resource accessed);
- **Outcome** (success, failure, error);
- **Session identifier** (where applicable).

### 13.3 Log Retention Requirements

| Log Category | Minimum Retention Period | Storage Location |
|---|---|---|
| Authentication logs | [12] months online; [36] months archived | [Log Management System] |
| Personal data access logs | [24] months online; [60] months archived | [Log Management System] |
| Privileged access logs | [24] months online; [60] months archived | [Log Management System] |
| Security incident logs | [36] months | [SIEM / Log Management System] |
| Administrative change logs | [24] months | [Log Management System] |

### 13.4 Log Protection

*Define controls to protect logs from tampering or unauthorized modification.*

- Logs shall be stored in a **centralized, tamper-evident log management system** (e.g., SIEM);
- Write access to log storage shall be restricted to authorized IT and security personnel only;
- Log administrators shall not have the ability to delete or modify their own activity logs;
- **Log integrity checks** shall be performed [daily / weekly] to detect unauthorized modification;
- Logs shall be **backed up** as part of the organization's standard backup procedures.

### 13.5 Access Monitoring and Alerting

*Define how logs are monitored and what triggers alerts or escalation.*

| Monitoring Scenario | Alert Threshold | Response Action |
|---|---|---|
| Multiple failed login attempts | [5] failures within [10] minutes | Account lockout + alert to IT Security |
| Login outside business hours | Any privileged account login 22:00–06:00 | Alert to CISO and on-call security |
| Bulk data export or download | Threshold: [Define volume] | Alert to DPO + IT Security; session review |
| Access from unusual geographic location | [Define] | Alert to IT Security; session review |
| Break-glass account usage | Any use | Immediate alert to CISO |
| Dormant account activity | Login after [60+] day inactivity | Alert to IT Department; account review |
| Repeated access to sensitive records | [Define frequency threshold] | Alert to CISO and DPO; investigation |

### 13.6 Log Review Cadence

| Review Type | Frequency | Responsible Party | Escalation Path |
|---|---|---|---|
| Automated alert review | Real-time / [Daily] | IT Security / SOC | CISO |
| Privileged access log review | Weekly | CISO / IT Security | CISO → Board Risk Committee |
| Personal data access anomaly review | Monthly | DPO + IT Security | DPO → CISO |
| Comprehensive log audit | Quarterly | Internal Audit / CISO | Board Audit Committee |

---

## 14. Roles and Responsibilities

*This section assigns clear accountability for each element of this policy using a RACI framework.*

### 14.1 RACI Legend

| Code | Role |
|---|---|
| **R** | Responsible — Performs the activity |
| **A** | Accountable — Ultimately answerable for the outcome; approves |
| **C** | Consulted — Provides input; two-way communication |
| **I** | Informed — Notified of outcome; one-way communication |

### 14.2 RACI Matrix

| Activity | CISO | IT Dept / IAM | Line Manager | DPO | HR | System Owner | Internal Audit |
|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | **A** | R | I | C | I | C | I |
| Access request approval (standard) | I | R | **A** | I | I | C | — |
| Access request approval (privileged / sensitive) | **A** | R | C | C | I | C | — |
| User account creation | I | **R/A** | I | — | I | I | — |
| User account de-provisioning | A | **R** | I | — | I | I | — |
| HR onboarding notification | I | I | I | — | **R/A** | — | — |
| HR offboarding notification | I | I | I | — | **R/A** | — | — |
| MFA enforcement and configuration | **A** | **R** | I | — | — | C | — |
| Privileged access management | **A** | **R** | I | I | — | C | I |
| Break-glass access authorization | **R/A** | R | I | I | — | I | I |
| Periodic access review (execution) | I | R | **R/A** | I | I | **A** | I |
| Periodic access review (oversight) | **A** | I | I | C | I | I | C |
| Log management and maintenance | **A** | **R** | — | I | — | C | I |
| Log monitoring and alerting | **A** | **R** | — | I | — | — | I |
| Compliance reporting | **A** | R | I | C | I | C | **R** |
| Policy exception approval | **A** | R | C | C | — | C | I |
| Third-party access oversight | **A** | R | C | C | — | C | I |
| Mobile device management | **A** | **R** | I | — | — | — | — |

### 14.3 Key Roles — Responsibilities Summary

| Role | Key Responsibilities |
|---|---|
| **Chief Information Security Officer (CISO)** | Policy ownership; privileged access oversight; exception approval; escalation authority; board reporting |
| **IT Department / IAM Team** | Account provisioning and de-provisioning; system configuration; MFA enforcement; log management; access review execution |
| **Line Manager** | Initiation of access requests; access recertification for direct reports; notification of role changes and departures |
| **Data Protection Officer (DPO)** | Consultation on sensitive data access; oversight of PDPA compliance; review of data access anomalies |
| **Human Resources** | Timely notification of new joiners, role changes, and departures; maintenance of employment records |
| **System Owner** | Approval of access to owned systems; participation in access reviews; definition of system-specific access roles |
| **Internal Audit** | Independent review of access control compliance; audit of access logs; reporting to Audit Committee |

---

## 15. Policy Compliance and Exceptions

### 15.1 Compliance Monitoring

Compliance with this policy shall be monitored through:

- **Periodic access reviews** conducted in accordance with Section 11;
- **Automated monitoring and alerting** as described in Section 13;
- **Internal audits** conducted by [Internal Audit / External Auditor] on a [Annual] basis;
- **Management reporting** on access control metrics to the [Information Security Committee] on a [quarterly] basis.

### 15.2 Non-Compliance

*Define the consequences of policy non-compliance.*

Failure to comply with this policy may result in:

- **Disciplinary action**, up to and including termination of employment, in accordance with [Organization Name]'s HR disciplinary procedures;
- **Termination of contract** for third-party vendors or contractors;
- **Legal and regulatory consequences** under the PDPA 2010, including civil penalties, criminal liability, or regulatory action by the Personal Data Protection Commissioner;
- **Incident reporting obligations**, where non-compliance results in unauthorized access to or disclosure of personal data.

### 15.3 Policy Exceptions

*Define the process for requesting and approving exceptions to this policy.*

Where strict compliance with this policy is technically unfeasible or would cause undue operational disruption, an exception may be requested through the following process:

1. The requesting party shall submit a completed **Policy Exception Request Form (Appendix E)** to the CISO;
2. The request shall include: the specific policy requirement for which exception is sought; the business justification; the proposed compensating control(s); the proposed exception duration and review date;
3. The CISO shall review and approve or reject exception requests. Exceptions involving sensitive personal data or Tier 0 access also require **DPO concurrence**;
4. Approved exceptions shall be recorded in the **Policy Exception Register** and reviewed at least **quarterly**;
5. Exceptions shall not be granted indefinitely. All exceptions shall have a defined expiry date, not to exceed **[12] months** without re-application.

---

## 16. Review and Approval

### 16.1 Policy Review

This policy shall be reviewed:

- **Annually**, at minimum, or in accordance with the defined review frequency;
- Following any **significant change** to [Organization Name]'s systems, business operations, or organizational structure that materially affects access control practices;
- Following any **data security incident** involving unauthorized access to personal data;
- In response to **regulatory changes** affecting obligations under the PDPA or related frameworks;
- Upon the direction of the **CISO or Board Risk Committee**.

### 16.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — policy established |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 16.3 Approval Sign-Off

*Signatures below confirm review and approval of this policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | ___________________________ | [Date] |
| Data Protection Officer | [Name] | ___________________________ | [Date] |
| Head of Information Technology | [Name] | ___________________________ | [Date] |
| Chief Operating Officer / [Relevant C-Suite] | [Name] | ___________________________ | [Date] |
| Board Risk Committee Chairperson | [Name] | ___________________________ | [Date] |

---

## 17. References

*This section lists all regulatory, legal, and standards references relevant to this policy.*

### 17.1 Malaysian Legislation and Regulations

| Reference | Description |
|---|---|
| **Personal Data Protection Act 2010 (Act 709)** | Primary legislation governing protection of personal data in commercial transactions |
| **PDPA — Section 9 (Security Principle)** | Requires practical steps to protect personal data from unauthorized or accidental access, disclosure, loss, or destruction |
| **PDPA — Section 12 (Access Principle)** | Grants data subjects the right to access their personal data and request corrections |
| **PDPA — Section 5 (General Principle)** | Governs the lawful basis for processing personal data |
| **Personal Data Protection Regulations 2013** | Subsidiary regulations made under the PDPA |
| **Personal Data Protection (Class of Data Controllers) Order 2013** | Identifies classes of data controllers required to register with the Commissioner |

### 17.2 Industry Standards and Frameworks

| Reference | Description |
|---|---|
| **ISO/IEC 27001:2022** | Information security management systems — Requirements |
| **ISO/IEC 27002:2022 — Controls 5.15, 5.16, 5.17, 5.18, 8.2, 8.3** | Access control, identity management, privileged access |
| **NIST SP 800-53 Rev. 5 — AC Control Family** | Access control requirements and guidelines |
| **NIST SP 800-63B** | Digital identity guidelines — Authentication and lifecycle management |
| **Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document** | Technology risk requirements for financial institutions |
| **NACSA National Cybersecurity Framework** | Malaysian national cybersecurity baseline |

### 17.3 Internal Policy References

| Document | Description |
|---|---|
| [Information Security Policy] | Parent policy governing information security at [Organization Name] |
| [Data Protection Policy] | Policy governing the processing of personal data |
| [Acceptable Use Policy] | Policy governing acceptable use of IT systems and data |
| [Incident Response Policy] | Policy governing response to security and data incidents |
| [Third-Party Risk Management Policy] | Policy governing security obligations of vendors and contractors |
| [Human Resources Policy — Onboarding and Offboarding] | HR procedures relevant to access lifecycle management |

---

## 18. Appendices

*This section contains supporting forms, registers, and reference materials referenced throughout the policy.*

---

### Appendix A — Access Request Form

*This form shall be completed by the Line Manager when requesting access for a new or existing user.*

**[Organization Name] — Access Request Form**

| Field | Details |
|---|---|
| **Request Date** | |
| **Request Reference Number** | |
| **Requestor (Line Manager) Name** | |
| **Requestor Employee ID** | |
| **User's Full Name** | |
| **User's Employee ID / Contractor ID** | |
| **User's Job Title** | |
| **User's Department** | |
| **Employment Type** | ☐ Permanent ☐ Contract ☐ Temporary ☐ Third-Party Vendor |
| **Access Start Date** | |
| **Access End Date** (if temporary) | |
| **Business Justification** | |

**Systems and Access Requested:**

| System / Application | Role / Access Level | Access Type | Justification |
|---|---|---|---|
| | | ☐ Permanent ☐ Temporary | |
| | | ☐ Permanent ☐ Temporary | |

**Approvals:**

| Approver | Name | Signature | Date |
|---|---|---|---|
| Line Manager | | | |
| System Owner | | | |
| DPO (if sensitive data access) | | | |
| CISO (if Tier 0/1 access) | | | |

---

### Appendix B — Access Change / Revocation Form

*This form shall be completed when an existing user's access requires modification or revocation.*

**[Organization Name] — Access Change / Revocation Form**

| Field | Details |
|---|---|
| **Request Date** | |
| **Request Reference Number** | |
| **Requestor (Line Manager) Name** | |
| **Affected User's Full Name** | |
| **Affected User's Employee ID** | |
| **Reason for Change** | ☐ Role Change ☐ Department Transfer ☐ Resignation ☐ Termination ☐ Contract Expiry ☐ Other: _______ |
| **Effective Date** | |

**Access Changes Required:**

| System / Application | Current Role | Action | New Role (if change) |
|---|---|---|---|
| | | ☐ Modify ☐ Revoke | |
| | | ☐ Modify ☐ Revoke | |

**Approvals:**

| Approver | Name | Signature | Date |
|---|---|---|---|
| Line Manager | | | |
| IT Department (Confirmation) | | | |

---

### Appendix C — Emergency Access Log

*This log shall be completed for every use of break-glass or emergency access accounts.*

| Field | Details |
|---|---|
| **Date and Time of Access** | |
| **Break-Glass Account Used** | |
| **User Who Accessed (Full Name + ID)** | |
| **System(s) Accessed** | |
| **Reason / Justification** | |
| **Duration of Access** | |
| **Actions Performed** | |
| **Authorized By** | |
| **Post-Incident Review Date** | |
| **Password Rotated (Date)** | |
| **CISO Sign-Off** | |

---

### Appendix D — Service Account Register

*Maintain a current register of all service and application accounts.*

| Account Name | System | Purpose | Account Owner | Last Password Rotation | Review Date | Status |
|---|---|---|---|---|---|---|
| [svc_crm_app] | [CRM System] | [Application service account for CRM] | [Name] | [Date] | [Date] | Active |
| | | | | | | |

---

### Appendix E — Policy Exception Request Form

*This form shall be completed when seeking an exception to any requirement of this policy.*

| Field | Details |
|---|---|
| **Request Date** | |
| **Requestor Name and Title** | |
| **Department** | |
| **Policy Section(s) Affected** | |
| **Description of Exception Required** | |
| **Business Justification** | |
| **Risk Assessment** | |
| **Proposed Compensating Control(s)** | |
| **Requested Exception Duration** | Start: _________ End: _________ |
| **Review Date** | |

**Approvals:**

| Approver | Decision | Name | Signature | Date |
|---|---|---|---|---|
| CISO | ☐ Approved ☐ Rejected | | | |
| DPO (if personal data affected) | ☐ Approved ☐ Rejected | | | |

---

### Appendix F — Access Control Metrics Dashboard

*This appendix defines the key performance indicators (KPIs) and metrics to be reported to management.*

| Metric | Description | Target | Reporting Frequency | Owner |
|---|---|---|---|---|
| Access provisioning time | Average time from approved request to account creation | ≤ [2] business days | Monthly | IT Department |
| Access de-provisioning time (resignation) | Average time from last working day to account deactivation | ≤ [1] business day | Monthly | IT Department |
| Access de-provisioning time (termination) | Time from termination notification to account deactivation | ≤ [X] hours | Monthly | IT Department |
| Overdue access reviews | % of access review tasks not completed by deadline | 0% | Quarterly | CISO |
| MFA adoption rate | % of users with MFA enabled on in-scope systems | 100% | Monthly | IT Department |
| Dormant accounts (>60 days) | Number of accounts inactive for more than 60 days | 0 unresolved | Monthly | IT Department |
| Privileged account count | Total number of active privileged accounts | [Define target] | Quarterly | CISO |
| Policy exceptions open | Number of active policy exceptions | Minimize | Quarterly | CISO |
| Failed login alerts reviewed | % of failed login alerts reviewed within SLA | 100% | Monthly | IT Security |
| Access review completion rate | % of in-scope accounts recertified on schedule | 100% | Per review cycle | CISO |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained by the [Chief Information Security Officer / Document Control function] of [Organization Name]. Printed copies are uncontrolled. Always refer to the document management system for the current version.