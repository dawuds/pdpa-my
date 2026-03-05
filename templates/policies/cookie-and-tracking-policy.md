# Cookie and Tracking Technology Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Digital / Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]
**Department:** [Department Name]

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Legal Basis](#3-regulatory-framework-and-legal-basis)
4. [Definitions](#4-definitions)
5. [Categories of Tracking Technologies and Their Purposes](#5-categories-of-tracking-technologies-and-their-purposes)
6. [Strictly Necessary vs. Non-Essential Technology Distinction](#6-strictly-necessary-vs-non-essential-technology-distinction)
7. [Consent Management Platform (CMP) Requirements](#7-consent-management-platform-cmp-requirements)
8. [Cookie Banner Design and Consent Collection Standards](#8-cookie-banner-design-and-consent-collection-standards)
9. [Third-Party Tracking Technology Governance](#9-third-party-tracking-technology-governance)
10. [User Preference Centre and Opt-Out Mechanisms](#10-user-preference-centre-and-opt-out-mechanisms)
11. [Cookie Audit and Scan Procedures](#11-cookie-audit-and-scan-procedures)
12. [Retention Periods for Tracking Data](#12-retention-periods-for-tracking-data)
13. [Roles and Responsibilities](#13-roles-and-responsibilities)
14. [Policy Exceptions](#14-policy-exceptions)
15. [Non-Compliance and Enforcement](#15-non-compliance-and-enforcement)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*State the primary purpose of this policy and what it is designed to achieve within the organisation. Describe the problem it addresses and the compliance intent.*

This policy governs the deployment, management, and disclosure of cookies, web beacons, tracking pixels, device fingerprinting technologies, and all similar tracking mechanisms used by [Organisation Name] on its websites, mobile applications, and digital platforms. Its purpose is to ensure that [Organisation Name] processes personal data collected through such technologies in a lawful, transparent, and accountable manner, in full compliance with the Personal Data Protection Act 2010 (PDPA).

This policy establishes the minimum standards that all digital teams, technology partners, and third-party vendors must observe when implementing tracking technologies that may result in the collection, processing, or transfer of personal data belonging to data subjects who interact with [Organisation Name]'s digital properties.

Specifically, this policy aims to:

- Ensure that data subjects are clearly informed about the tracking technologies used and the purposes for which their personal data is collected.
- Establish a lawful basis for the use of non-essential tracking technologies, principally through the collection of informed, unambiguous consent.
- Define the technical and operational controls required to honour data subject choices, including consent withdrawal and opt-out requests.
- Set standards for the governance of third-party tracking technologies embedded in organisational digital properties.
- Support [Organisation Name]'s accountability obligations by maintaining auditable records of consent and technology inventories.

---

## 2. Scope

*Define which systems, platforms, teams, and data subjects fall within the boundary of this policy. Be precise about exclusions where applicable.*

### 2.1 In-Scope Systems and Platforms

This policy applies to all digital properties owned, operated, or managed by [Organisation Name], including but not limited to:

- Public-facing websites and microsites hosted under [Organisation Name]'s domain(s)
- Mobile applications (iOS and Android) published by [Organisation Name]
- Customer-facing web portals and authenticated digital banking platforms
- Internal web-based applications accessible to employees or contractors that collect behavioural or session data
- APIs and digital services that interact with end-user devices in a manner that constitutes tracking

### 2.2 In-Scope Personnel and Functions

This policy applies to:

- All employees of [Organisation Name] involved in the design, development, deployment, or management of digital properties
- Digital marketing, IT, information security, and data governance teams
- Third-party vendors, technology partners, analytics providers, and advertising networks who deploy tracking technologies on [Organisation Name]'s digital properties under contract
- The Data Protection Officer (DPO) and legal/compliance functions responsible for oversight

### 2.3 In-Scope Data Subjects

This policy applies to any individual whose personal data may be collected via tracking technologies, including:

- Website visitors and prospective customers
- Existing customers and account holders accessing digital services
- Employees or contractors accessing internal digital platforms where tracking is active

### 2.4 Exclusions

*List any systems, environments, or activities explicitly excluded from this policy's scope.*

- [Specify any excluded internal systems, e.g., purely backend infrastructure with no user-facing tracking]
- [Specify any excluded jurisdictions or subsidiaries, if applicable]

---

## 3. Regulatory Framework and Legal Basis

*Identify the specific legal instruments, regulatory guidance, and standards that ground this policy. Reference specific sections where possible.*

### 3.1 Primary Legislation

This policy is grounded in the following statutory provisions:

| Legislation / Regulation | Relevant Provisions | Obligation |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Section 6 — Consent Principle | Requires that personal data shall not be processed without the data subject's consent unless a statutory exception applies |
| Personal Data Protection Act 2010 (PDPA) | Section 7 — Notice and Choice Principle | Requires data users to inform data subjects of the purposes of processing and their right to access, correct, and withdraw consent |
| Personal Data Protection Act 2010 (PDPA) | Section 5 — General Principle | Personal data must be processed for a lawful purpose directly related to the data user's activities |
| Personal Data Protection Act 2010 (PDPA) | Section 10 — Retention Principle | Personal data shall not be kept longer than necessary for the purpose for which it was collected |
| Personal Data Protection Act 2010 (PDPA) | Section 9 — Security Principle | Practical steps must be taken to protect personal data from unauthorised access or disclosure |

### 3.2 Regulatory Guidelines and Standards

| Guidance Document | Issuing Body | Relevance |
|---|---|---|
| PDPA Personal Data Protection Standard 2015 | Department of Personal Data Protection (JPDP) | Minimum security standards for processing personal data |
| [BNM Policy Document on Technology Risk Management] | Bank Negara Malaysia | Applicable if [Organisation Name] is a licensed financial institution |
| [Industry Code of Practice, if applicable] | [Relevant Industry Body] | Supplementary conduct standards |
| ISO/IEC 27001:2022 | ISO / IEC | Information security management, applicable to systems processing tracking data |

### 3.3 Legal Basis for Processing

*Articulate the lawful basis under PDPA s6 for each category of tracking technology. Generally, strictly necessary cookies rely on legitimate interest or contractual necessity; non-essential tracking requires explicit consent.*

| Technology Category | Legal Basis under PDPA s6 | Notes |
|---|---|---|
| Strictly necessary cookies | Legitimate interest / contractual necessity | No consent required; data subject must be informed per s7 |
| Functional / preference cookies | Consent | Must be freely given, specific, and informed |
| Analytics / performance cookies | Consent | Aggregated and anonymised data may be exempt; verify with DPO |
| Marketing / advertising cookies | Consent | Highest sensitivity; explicit opt-in required |
| Third-party tracking pixels / beacons | Consent | Subject to third-party governance requirements in Section 9 |

---

## 4. Definitions

*Define all technical and legal terms used throughout this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Cookie** | A small text file placed on a data subject's device by a web server, used to store information about the user's session, preferences, or behaviour. |
| **Session Cookie** | A temporary cookie that is deleted when the user closes their browser. It does not persist beyond the current browsing session. |
| **Persistent Cookie** | A cookie that remains on the user's device for a defined retention period after the browser is closed. |
| **First-Party Cookie** | A cookie set directly by [Organisation Name]'s own domain or digital property. |
| **Third-Party Cookie** | A cookie set by a domain other than [Organisation Name]'s, typically by an embedded third-party service (e.g., analytics provider, advertising network). |
| **Web Beacon / Tracking Pixel** | A small, often invisible image embedded in a webpage or email that transmits data (e.g., IP address, device type, timestamp) to a remote server when loaded. |
| **Device Fingerprinting** | A technique that collects attributes of a user's device (browser type, screen resolution, installed fonts, etc.) to create a unique identifier without placing a file on the device. |
| **Local Storage** | A browser-based storage mechanism that persists data beyond the current session and is accessible only by the originating domain. |
| **Consent Management Platform (CMP)** | A technology solution that facilitates the collection, recording, storage, and management of data subject consent for tracking technologies. |
| **Data Subject** | A natural person whose personal data is collected, processed, or stored by [Organisation Name]. |
| **Data User** | [Organisation Name], in its capacity as the entity that processes personal data as defined under the PDPA. |
| **Data Processor** | A third party that processes personal data on behalf of [Organisation Name] under contract. |
| **DPO** | Data Protection Officer — the individual designated by [Organisation Name] to oversee PDPA compliance. |
| **Opt-In** | An affirmative action taken by a data subject to signal agreement to the placement or activation of tracking technologies. |
| **Opt-Out** | An action taken by a data subject to withdraw consent previously given, or to decline tracking where consent is required. |
| **Strictly Necessary Technology** | Tracking technologies that are essential for the operation of a website or application and cannot be disabled without impairing core functionality. |

---

## 5. Categories of Tracking Technologies and Their Purposes

*Describe each category of tracking technology deployed across [Organisation Name]'s digital properties, the purpose for which it is used, and whether it involves personal data processing. This section should reflect the output of the organisation's cookie audit (see Section 11).*

[Organisation Name] uses the following categories of tracking technologies across its digital properties. The specific tools and vendors within each category are documented in the Cookie and Technology Register maintained by [Digital Team / DPO's Office] and reviewed in accordance with Section 11.

### 5.1 Strictly Necessary Technologies

*List technologies that are essential to deliver the service requested by the user. These cannot be disabled without breaking core functionality.*

| Technology / Cookie Name | Type | Purpose | Data Collected | First or Third Party |
|---|---|---|---|---|
| [Session authentication token] | Session Cookie | Maintains authenticated user session | Session ID, authentication state | First-party |
| [CSRF token] | Session Cookie | Protects against cross-site request forgery | Token value | First-party |
| [Load balancer cookie] | Session Cookie | Routes requests to consistent server | Server node identifier | First-party |
| [CMP consent record cookie] | Persistent Cookie | Stores the user's consent choices | Consent state, timestamp | First-party |

### 5.2 Functional / Preference Technologies

*List technologies that enable enhanced functionality or personalisation, but are not strictly necessary.*

| Technology / Cookie Name | Type | Purpose | Data Collected | First or Third Party |
|---|---|---|---|---|
| [Language preference cookie] | Persistent Cookie | Stores the user's selected language | Language code | First-party |
| [Accessibility settings cookie] | Persistent Cookie | Stores user interface preferences | UI configuration values | First-party |
| [Chat widget cookie] | Persistent Cookie | Maintains state of customer support chat | Chat session ID | Third-party |

### 5.3 Analytics / Performance Technologies

*List technologies used to measure how users interact with digital properties, improve performance, and understand user journeys.*

| Technology / Cookie Name | Type | Purpose | Data Collected | First or Third Party |
|---|---|---|---|---|
| [Web analytics platform cookie] | Persistent Cookie | Measures page views, sessions, user flows | Anonymised device ID, pages visited, session duration | [First / Third-party] |
| [Performance monitoring tool] | Persistent Cookie | Identifies errors and performance bottlenecks | Error events, page load times | [First / Third-party] |
| [A/B testing platform] | Persistent Cookie | Assigns users to test variants | Variant assignment, interaction events | Third-party |

### 5.4 Marketing / Advertising Technologies

*List technologies used for targeted advertising, remarketing, and cross-site tracking. These carry the highest privacy risk and require explicit consent.*

| Technology / Cookie Name | Type | Purpose | Data Collected | First or Third Party |
|---|---|---|---|---|
| [Advertising network pixel] | Tracking Pixel | Enables retargeted advertising campaigns | Browsing behaviour, conversion events | Third-party |
| [Social media tracking pixel] | Tracking Pixel | Measures campaign effectiveness on social platforms | Page visits, events triggered | Third-party |
| [Programmatic advertising cookie] | Persistent Cookie | Enables audience segmentation for ad targeting | Interest profile, device identifier | Third-party |

### 5.5 Device Fingerprinting and Fraud Detection Technologies

*List technologies used to identify or authenticate devices for fraud prevention purposes.*

| Technology / Cookie Name | Type | Purpose | Data Collected | First or Third Party |
|---|---|---|---|---|
| [Fraud detection SDK] | Device Fingerprint | Identifies high-risk or anomalous device patterns | Device attributes, browser configuration | [First / Third-party] |
| [Bot detection service] | Device Fingerprint / Behavioural | Distinguishes human users from automated bots | Interaction patterns, device signals | Third-party |

---

## 6. Strictly Necessary vs. Non-Essential Technology Distinction

*Establish the criteria used to classify tracking technologies as strictly necessary or non-essential, and define the governance obligations that flow from each classification.*

### 6.1 Classification Criteria

The classification of a tracking technology as strictly necessary or non-essential determines whether it may be activated by default or only following user consent. [Organisation Name] applies the following criteria to make this determination:

**A technology is classified as Strictly Necessary if all of the following apply:**

- It is required to deliver a service explicitly requested by the data subject (e.g., logging in, completing a transaction, maintaining a shopping cart).
- The digital property or service cannot function as intended without it.
- It does not collect data that is used for any purpose beyond delivering the requested service.
- Disabling it would prevent the data subject from accessing the service entirely.

**A technology is classified as Non-Essential if any of the following apply:**

- It is used to analyse user behaviour, measure performance, or optimise the user experience beyond what is strictly required.
- It is used to deliver targeted advertising or to build interest-based profiles.
- It enables personalisation features that are desirable but not required for service delivery.
- It transfers data to third parties for their own purposes.
- It persists beyond the current session and tracks behaviour across multiple visits or sites.

### 6.2 Default Activation Controls

| Classification | Default Activation | Consent Required | User Can Disable |
|---|---|---|---|
| Strictly Necessary | Yes — active by default | No | No (disabling would impair service) |
| Functional / Preference | No — inactive by default | Yes | Yes |
| Analytics / Performance | No — inactive by default | Yes | Yes |
| Marketing / Advertising | No — inactive by default | Yes — explicit opt-in | Yes |
| Device Fingerprinting (fraud) | [Yes / No — document basis] | [Legitimate interest / Consent — DPO to confirm] | [Specify] |

### 6.3 Reclassification Process

Where there is uncertainty about the classification of a tracking technology, the Digital Team shall submit a classification request to the DPO. The DPO shall assess the request against the criteria above and record the determination in the Cookie and Technology Register within [10] business days. Classifications shall be reviewed as part of the annual cookie audit described in Section 11.

---

## 7. Consent Management Platform (CMP) Requirements

*Define the minimum technical and operational requirements for the Consent Management Platform used to collect and manage user consent for tracking technologies.*

### 7.1 CMP Selection and Approval

[Organisation Name] shall deploy a Consent Management Platform to manage consent for all non-essential tracking technologies. The selection of any CMP solution must be approved by the DPO and the Information Security function prior to deployment. The CMP must satisfy the requirements set out in this section.

### 7.2 Minimum Technical Requirements

The CMP deployed by [Organisation Name] must:

- **Consent collection:** Capture and record granular, purpose-level consent from data subjects before any non-essential tracking technologies are activated.
- **Consent integrity:** Ensure that non-essential scripts, pixels, and third-party tags are technically blocked until affirmative consent has been received for the relevant category.
- **Consent record storage:** Generate and retain a timestamped, immutable consent record for each data subject interaction, including the version of the consent notice presented at the time of consent.
- **Consent synchronisation:** Synchronise consent records across all digital properties where the same data subject may interact with [Organisation Name].
- **Consent renewal:** Prompt data subjects to renew consent where the consent notice has been materially changed, or after a maximum period of [12] months.
- **Audit log:** Maintain a log of all consent events (opt-in, opt-out, withdrawal, renewal) that is accessible to the DPO and audit functions upon request.
- **Scriptless fallback:** Render the consent interface correctly even when certain browser features or plugins restrict JavaScript execution.
- **Cookie-blocking by default:** Ensure that all non-essential cookies and trackers are blocked by default until consent is given — "consent by silence" or pre-ticked boxes are not permissible.

### 7.3 CMP Vendor Governance

| Requirement | Detail |
|---|---|
| Data Processing Agreement | A signed DPA must be in place with the CMP vendor prior to deployment |
| Data residency | Consent records must be stored in [Malaysia / specified jurisdiction] or subject to a lawful cross-border transfer mechanism |
| Vendor access controls | CMP vendor access to consent data must be limited to operational necessity |
| Security certification | CMP vendor must hold [ISO 27001 / SOC 2 Type II] certification or equivalent |
| Incident notification | CMP vendor must notify [Organisation Name] of any breach within [24 / 48 / 72] hours |

### 7.4 CMP Configuration Management

All changes to CMP configuration — including the addition of new consent purposes, modification of consent categories, or changes to blocking logic — must be approved by the DPO before deployment to production environments. Configuration changes must be documented in the change management log.

---

## 8. Cookie Banner Design and Consent Collection Standards

*Define the user experience, design, and language standards that govern how consent is solicited from data subjects through the cookie banner and consent interface.*

### 8.1 Consent Banner Requirements

The cookie consent banner presented to data subjects upon first visit to [Organisation Name]'s digital properties must comply with the following standards:

**Presentation:**

- The banner must be visible and prominent, and must not obscure the primary content of the page to the point where users feel compelled to accept cookies simply to access the site.
- The banner must appear before any non-essential tracking technologies are activated.
- The banner must not use dark patterns, including but not limited to: pre-selected consent checkboxes, misleading button labelling, or deceptive visual hierarchies that make refusal more difficult than acceptance.

**Content:**

- The banner must clearly identify [Organisation Name] as the data user.
- The banner must state the categories of tracking technologies used and their purposes in plain, non-technical language.
- The banner must provide a clear mechanism to accept all, reject all, or customise consent at the category level.
- The banner must include a link to the full Cookie and Tracking Technology Policy and to [Organisation Name]'s Privacy Notice.

**Consent Granularity:**

Data subjects must be given the ability to provide or withhold consent at the level of each technology category, not merely at an "all or nothing" level. The following consent choices must be available:

| Choice | Required | Notes |
|---|---|---|
| Accept all cookies | Yes | Activates all non-essential categories |
| Reject all / decline non-essential | Yes | Activates strictly necessary only |
| Customise by category | Yes | Allows granular selection per Section 5 categories |
| Save and continue | Yes | Records the selected preferences |

### 8.2 Consent Language Standards

*Provide or reference the approved consent language to be used in the cookie banner. Work with Legal and DPO to finalise wording before publication.*

The following table documents the approved consent language for use in the cookie banner. Any variation from this language must be approved by the DPO and Legal before deployment.

| Banner Element | Approved Text / Placeholder |
|---|---|
| Banner headline | "[Organisation Name] uses cookies and similar technologies" |
| Body text | "[We use strictly necessary cookies to operate our services. With your consent, we also use analytics, functional, and marketing cookies to improve your experience and deliver relevant content. You can manage your preferences at any time.]" |
| Accept all button label | "Accept All" |
| Reject / decline button label | "Reject Non-Essential" or "Decline" |
| Manage preferences link | "Cookie Settings" |
| Privacy policy link | "Privacy Notice" |
| Cookie policy link | "Cookie Policy" |

### 8.3 Mobile Application Consent Standards

For mobile applications, [Organisation Name] shall implement an in-app consent mechanism that:

- Presents tracking disclosures at or before the point of data collection, not buried in settings menus.
- Complies with platform-level consent requirements (e.g., Apple App Tracking Transparency for iOS, Google Play Data Safety requirements for Android).
- Integrates with the CMP to synchronise consent records across web and app channels where the same data subject interacts on both.

---

## 9. Third-Party Tracking Technology Governance

*Establish the controls and processes for governing the deployment, review, and management of tracking technologies introduced by third parties.*

### 9.1 Principles for Third-Party Tracking

[Organisation Name] accepts that third-party tracking technologies embedded in its digital properties — including advertising networks, analytics platforms, social media plugins, customer support tools, and payment processors — may independently collect personal data from data subjects. [Organisation Name] remains accountable under the PDPA for the lawful use of such technologies on its properties.

The following principles apply to all third-party tracking technologies:

- **Prior approval:** No third-party tracking script, pixel, tag, or SDK may be deployed on [Organisation Name]'s digital properties without prior written approval from the DPO and Information Security.
- **Contractual obligation:** A Data Processing Agreement (DPA) must be in place with all third-party vendors who process personal data via tracking technologies.
- **Consent dependency:** Third-party tracking technologies must be technically blocked by the CMP until the data subject has provided consent for the relevant category.
- **Purpose limitation:** Third-party vendors may not use personal data collected via [Organisation Name]'s digital properties for purposes beyond those disclosed to data subjects in the consent notice.
- **Inventory maintenance:** All approved third-party tracking technologies must be listed in the Cookie and Technology Register.

### 9.2 Third-Party Tracking Technology Approval Process

*Describe the workflow for requesting, assessing, and approving new third-party tracking technologies. Tailor to the organisation's change management process.*

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Business or Digital Team submits a Third-Party Technology Request Form to the DPO | Requesting Team |
| 2 | DPO conducts a Data Protection Impact Assessment (DPIA) if required | DPO |
| 3 | Information Security conducts a vendor security assessment | Information Security |
| 4 | Legal reviews and approves the DPA with the vendor | Legal |
| 5 | DPO issues written approval and registers the technology in the Cookie Register | DPO |
| 6 | Digital Team configures the CMP to manage consent for the new technology | Digital Team |
| 7 | Post-deployment verification is conducted to confirm the technology is blocked pending consent | DPO / Digital Team |

### 9.3 Third-Party Tracking Technology Register

*The full register is maintained separately. Below is the required minimum data for each entry.*

| Field | Description |
|---|---|
| Vendor Name | Legal name of the third-party provider |
| Technology / Script Name | Name of the specific cookie, pixel, or script |
| Category | As per Section 5 classification |
| Purpose | Specific use case within [Organisation Name] |
| Data Collected | Types of personal data accessed or transmitted |
| Data Destination | Country / region where data is sent |
| DPA in Place | Yes / No / In Progress |
| Consent Category | Category of consent required in CMP |
| Approval Date | Date approved by DPO |
| Next Review Date | Date of scheduled next review |

### 9.4 Cross-Border Data Transfers via Third-Party Tracking

Where a third-party tracking technology results in the transfer of personal data outside Malaysia, [Organisation Name] must ensure that:

- The transfer is made to a country or territory approved by the Minister under the PDPA, OR
- Adequate safeguards are in place as specified in the Personal Data Protection (Transfer of Personal Data to Places Outside Malaysia) Order 2017, OR
- The data subject has given explicit consent to the transfer.

The DPO shall document the legal basis for each cross-border transfer in the Third-Party Tracking Register.

---

## 10. User Preference Centre and Opt-Out Mechanisms

*Define the technical and operational requirements for enabling data subjects to manage, modify, and withdraw their tracking technology preferences at any time.*

### 10.1 User Preference Centre Requirements

[Organisation Name] shall make a persistent User Preference Centre (also referred to as a Cookie Settings panel) available on all digital properties where tracking technologies are deployed. The Preference Centre must:

- Be accessible at all times via a clearly labelled, persistent link in the website footer and/or through a dedicated "Cookie Settings" button.
- Allow the data subject to view the current status of each consent category and modify their preferences at any time.
- Immediately effect any change in consent — including withdrawal — without requiring the data subject to leave the page or restart their session.
- Reflect any updates to consent preferences across all digital properties where the CMP is active.
- Provide a summary of the tracking technologies active in each category, with links to further detail.

### 10.2 Opt-Out Mechanisms

*Describe all available mechanisms by which a data subject can opt out of tracking, including browser-level controls and global privacy signals.*

| Opt-Out Mechanism | Description | [Organisation Name]'s Obligation |
|---|---|---|
| In-platform Preference Centre | User adjusts category-level consent through the cookie settings panel | Must honour immediately; update CMP records |
| Browser Do Not Track (DNT) signal | Data subject configures browser to send a DNT signal | [Organisation Name] must document its response to DNT signals in its published Cookie Policy] |
| Global Privacy Control (GPC) | A browser-level signal indicating the user opts out of data sale / sharing | [Assess applicability; document response if GPC is technically received] |
| Direct opt-out request to DPO | Data subject contacts [Organisation Name]'s DPO to request cessation of tracking | DPO must action within [30] calendar days; confirm to data subject in writing |
| Third-party opt-out pages | Data subjects may opt out of specific third-party networks via industry opt-out tools (e.g., [NAI Opt-Out]) | [Organisation Name] should reference these in its published Cookie Policy |

### 10.3 Consent Withdrawal

Withdrawal of consent must be as easy as giving consent. Where a data subject withdraws consent:

- All non-essential tracking technologies in the withdrawn category must be deactivated immediately.
- Data collected prior to withdrawal may be retained only where a separate legal basis exists and for the period defined in Section 12.
- The CMP must record the withdrawal event with a timestamp and the version of the consent notice at the time of withdrawal.
- Where a data subject requests deletion of tracking data already collected, the request shall be handled as a Personal Data Erasure request under [Organisation Name]'s Data Subject Rights Procedure.

---

## 11. Cookie Audit and Scan Procedures

*Establish the procedures for periodically auditing all tracking technologies in use across [Organisation Name]'s digital properties to ensure completeness, accuracy, and compliance.*

### 11.1 Purpose of the Cookie Audit

A cookie audit is a systematic scan and review of all tracking technologies active on [Organisation Name]'s digital properties. Its purpose is to:

- Identify all cookies and tracking technologies actually in use, including undisclosed or inadvertently deployed technologies.
- Verify that the Cookie and Technology Register is complete and accurate.
- Ensure that all technologies have been properly classified, consented to, and disclosed to data subjects.
- Identify and remediate any technologies that are operating outside the approved governance framework.

### 11.2 Audit Frequency

| Trigger | Frequency |
|---|---|
| Scheduled review | At least annually, aligned with the policy review cycle |
| Material platform change | Within [30] days of any significant change to website or application architecture |
| New third-party integration | Prior to deployment of any new third-party tracking technology |
| Post-incident review | Following any identified breach or compliance failure related to tracking |
| Regulatory change | Following any material change to applicable legislation or regulatory guidance |

### 11.3 Audit Procedure

*Describe the step-by-step process for conducting a cookie audit. This should be tailored to the tools and team structure in [Organisation Name].*

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 1 | Define scope: list all in-scope digital properties to be scanned | DPO / Digital Team | Scope document |
| 2 | Conduct automated scan of each property using an approved cookie scanning tool | Digital Team | Raw scan report |
| 3 | Identify all technologies detected, including name, type, domain, and retention period | Digital Team | Technology detection list |
| 4 | Cross-reference detected technologies against the approved Cookie and Technology Register | DPO | Gap / discrepancy report |
| 5 | Investigate unregistered or unexpected technologies; escalate to DPO if a third party is implicated | Digital Team / DPO | Investigation notes |
| 6 | Classify any newly discovered technologies per Section 6 criteria | DPO | Updated classifications |
| 7 | Remediate discrepancies — remove, block, or obtain approval and consent for unregistered technologies | Digital Team | Remediation log |
| 8 | Update the Cookie and Technology Register and published Cookie Policy | DPO / Digital Team | Updated register and policy |
| 9 | Document audit findings and present to [Data Governance Committee / relevant oversight body] | DPO | Audit report |

### 11.4 Approved Scanning Tools

*List the tools approved for use in cookie scanning. Remove tools not in use.*

| Tool | Purpose | Approved By | Notes |
|---|---|---|---|
| [Cookie scanning tool name, e.g., OneTrust Scanner / Cookiebot / custom script] | Automated detection of cookies and trackers | [DPO / Information Security] | [Licensing, access, version details] |
| [Manual inspection method] | Validation and edge-case identification | DPO | Used to supplement automated scanning |

### 11.5 Audit Documentation and Retention

All cookie audit reports, scan outputs, remediation logs, and related documentation shall be retained for a minimum of [3] years from the date of the audit and made available to the DPO, Compliance, Internal Audit, and relevant regulators upon request.

---

## 12. Retention Periods for Tracking Data

*Define how long personal data collected through tracking technologies may be retained, and the disposal or anonymisation procedures to be applied at the end of the retention period.*

### 12.1 Retention Principles

[Organisation Name] shall not retain personal data collected through tracking technologies for longer than is necessary for the stated purpose of collection, consistent with the Retention Principle under PDPA Section 10. Retention periods shall be documented in the Cookie and Technology Register and reviewed annually.

### 12.2 Retention Period Schedule

*Complete this table based on the tracking technologies in use and the applicable business and legal retention requirements.*

| Technology Category | Data Type | Maximum Retention Period | Justification | Disposal Method |
|---|---|---|---|---|
| Strictly necessary cookies | Session identifiers, authentication tokens | Duration of session or up to [24 hours] | Required only for session integrity | Automatic expiry on session close |
| Functional / preference cookies | Language, UI preferences | Up to [12 months] | Supports continuity of user experience across visits | Automatic cookie expiry; purge on withdrawal |
| Analytics / performance cookies | Anonymised behavioural data | Up to [24 months] | Required for meaningful trend analysis | Automatic expiry; data aggregated and anonymised at [90 days] |
| Marketing / advertising cookies | Interest profiles, conversion events | Up to [90 days] | Campaign attribution window | Automatic expiry; third-party vendor to delete per DPA |
| Consent records (CMP) | Consent state, timestamp, notice version | [5 years] from date of consent | Required to demonstrate compliance with PDPA s6 | Secure deletion after retention period |
| Fraud detection / device fingerprint data | Device attributes, risk signals | Up to [6 months] or as required by BNM guidelines | Fraud investigation and prevention | Secure deletion; anonymisation of retained signals |
| Server logs containing IP addresses | IP address, request metadata | Up to [90 days] | Security investigation and incident response | Automated log rotation and deletion |

### 12.3 Consent Record Retention

Notwithstanding the above, consent records maintained by the CMP shall be retained for a minimum of [5 years] from the date of the consent event, in order to demonstrate compliance with PDPA Section 6. Consent records shall not be deleted in response to a general data erasure request unless the data subject can demonstrate that retention is no longer necessary for any lawful purpose.

### 12.4 Retention Review

The DPO shall review all retention periods as part of the annual cookie audit. Where a business team requires retention beyond the periods specified in this schedule, a formal extension request must be submitted to the DPO, accompanied by a documented legal or business justification.

### 12.5 Disposal Procedures

At the end of the applicable retention period:

- Tracking data stored in [Organisation Name]'s own systems must be securely deleted or irreversibly anonymised.
- Third-party vendors must be instructed via the applicable DPA to delete all personal data collected via [Organisation Name]'s digital properties within [30] days of the retention period expiry.
- Disposal must be documented and recorded in the data disposal log maintained by the DPO.

---

## 13. Roles and Responsibilities

*Define accountability for each aspect of this policy using a RACI framework: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 13.1 RACI Matrix

| Activity | Data Protection Officer | Digital / Technology Team | Marketing Team | Information Security | Legal / Compliance | Senior Management / Board |
|---|---|---|---|---|---|---|
| Maintain and update this policy | A/R | C | I | C | C | I |
| Classify tracking technologies | A/R | C | C | C | C | I |
| Operate and configure the CMP | C | A/R | C | C | I | I |
| Design and maintain cookie banner | C | A/R | C | I | C | I |
| Approve new third-party tracking technologies | A/R | C | C | C | C | I |
| Conduct cookie audits | A/R | R | I | C | I | I |
| Maintain Cookie and Technology Register | A/R | R | I | I | I | I |
| Handle consent withdrawal and data subject requests | A/R | C | I | I | C | I |
| Review and approve DPAs with tracking vendors | C | I | I | C | A/R | I |
| Monitor cross-border transfer compliance | A/R | C | I | C | C | I |
| Report tracking compliance status | A/R | C | I | I | C | A |
| Respond to regulatory enquiries | C | I | I | I | A/R | A |

### 13.2 Key Role Descriptions

**Data Protection Officer (DPO)**
The DPO is the primary accountable owner of this policy. The DPO is responsible for overseeing all aspects of tracking technology governance, including classification, consent management oversight, audit conduct, and regulatory engagement.

**Digital / Technology Team**
The Digital Team is responsible for the technical implementation of the CMP, cookie banner, and blocking controls. They maintain the technical inventory of tracking technologies and action remediation items identified in audits.

**Marketing Team**
The Marketing Team is responsible for raising requests for new marketing or advertising tracking technologies through the Third-Party Technology Approval process. They must not deploy tracking technologies without DPO approval.

**Information Security**
Information Security is responsible for assessing the security posture of third-party tracking vendors and ensuring that tracking-related systems comply with [Organisation Name]'s information security policies.

**Legal / Compliance**
Legal is responsible for reviewing and approving Data Processing Agreements with tracking technology vendors and advising on regulatory developments affecting this policy.

---

## 14. Policy Exceptions

*Define the process for requesting and documenting exceptions to this policy.*

Any exception to the requirements of this policy must be:

1. Submitted in writing to the DPO using the Policy Exception Request Form.
2. Accompanied by a documented business justification and a risk assessment identifying the residual compliance risk.
3. Approved in writing by the DPO, in consultation with Legal and Information Security where appropriate.
4. Time-limited — exceptions must specify an expiry date not exceeding [12] months.
5. Reviewed at expiry — the requesting team must confirm whether the exception remains necessary or whether the non-compliant condition has been remediated.

All approved exceptions shall be recorded in the Policy Exception Register maintained by the DPO and reported to [Data Governance Committee / Compliance Committee] on a quarterly basis.

---

## 15. Non-Compliance and Enforcement

*Describe the consequences of non-compliance with this policy and the escalation pathway.*

Non-compliance with this policy may result in:

- Disciplinary action in accordance with [Organisation Name]'s HR and Code of Conduct policies, up to and including termination of employment or contract.
- Suspension or removal of digital deployment privileges for teams or individuals who deploy tracking technologies without authorisation.
- Mandatory remediation and retraining requirements.
- Regulatory exposure, including investigation by the Department of Personal Data Protection (JPDP) and potential enforcement under the PDPA, which provides for fines of up to RM 500,000 and/or imprisonment for offences under the Act.
- Reputational and commercial consequences resulting from public disclosure of non-compliant tracking practices.

Suspected or confirmed breaches of this policy must be reported to the DPO immediately. The DPO will determine whether the breach constitutes a personal data breach requiring notification to JPDP and/or affected data subjects under applicable obligations.

---

## 16. Review and Approval

### 16.1 Review Schedule

This policy shall be reviewed:

- Annually from the effective date, or
- Upon any material change in tracking technology usage or the introduction of new tracking categories, or
- Following any regulatory change affecting the PDPA or related guidance, or
- Following any significant compliance incident related to tracking technologies.

The DPO is responsible for initiating the review and managing the approval process.

### 16.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 16.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Head of Digital / CTO | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Executive Officer / MD | [Name] | [Signature] | [Date] |

---

## 17. References

*List all regulatory instruments, guidance documents, and standards referenced in or relevant to this policy.*

| Reference | Description |
|---|---|
| Personal Data Protection Act 2010 (Act 709) — Section 5 | General Principle: lawful purpose requirement for personal data processing |
| Personal Data Protection Act 2010 (Act 709) — Section 6 | Consent Principle: requirement for data subject consent prior to processing |
| Personal Data Protection Act 2010 (Act 709) — Section 7 | Notice and Choice Principle: obligation to inform data subjects of processing purposes and rights |
| Personal Data Protection Act 2010 (Act 709) — Section 9 | Security Principle: obligation to protect personal data from unauthorised access |
| Personal Data Protection Act 2010 (Act 709) — Section 10 | Retention Principle: prohibition on retaining personal data beyond its necessary period |
| Personal Data Protection (Transfer of Personal Data to Places Outside Malaysia) Order 2017 | Requirements for lawful cross-border transfer of personal data |
| Personal Data Protection Standard 2015 | Minimum security standards for personal data processing systems |
| [BNM Policy Document on Technology Risk Management (RMiT)] | [Applicable if [Organisation Name] is a BNM-licensed financial institution] |
| ISO/IEC 27001:2022 — Information Security Management Systems | International standard for information security management |
| [Organisation Name] Privacy Notice | Published disclosure of data processing practices to data subjects |
| [Organisation Name] Data Retention and Disposal Policy | Companion policy governing retention of all personal data categories |
| [Organisation Name] Data Subject Rights Procedure | Procedure for handling data subject access, correction, and erasure requests |
| [Organisation Name] Third-Party Vendor Management Policy | Overarching governance framework for vendor risk management |
| [Organisation Name] Data Protection Impact Assessment Procedure | Procedure for conducting DPIAs for high-risk processing activities |

---

## 18. Appendices

### Appendix A: Cookie and Technology Register Template

*This register is the master inventory of all tracking technologies deployed across [Organisation Name]'s digital properties. It is maintained by the DPO in coordination with the Digital Team and updated following each cookie audit or technology change.*

| # | Cookie / Technology Name | Vendor | Category | First / Third Party | Purpose | Data Collected | Data Destination | Retention Period | Cross-Border Transfer | Legal Basis | DPA in Place | CMP Consent Category | Approved By | Approval Date | Last Verified | Next Review |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Cookie Name] | [Vendor] | [Category] | [First/Third] | [Purpose] | [Data types] | [Country] | [Period] | [Yes/No] | [Consent/LI] | [Yes/No/N/A] | [Category] | [DPO Name] | [Date] | [Date] | [Date] |

### Appendix B: Third-Party Technology Request Form Template

*Submitted by business teams to the DPO when requesting approval to deploy a new third-party tracking technology.*

**Section 1: Requestor Details**

| Field | Response |
|---|---|
| Requestor Name | [Name] |
| Department | [Department] |
| Date of Request | [Date] |
| Urgency | [Standard / Urgent — provide justification if urgent] |

**Section 2: Technology Details**

| Field | Response |
|---|---|
| Vendor / Product Name | [Name] |
| Technology Type | [Cookie / Pixel / SDK / Fingerprint / Other] |
| Proposed Category | [As per Section 5] |
| Business Purpose | [Detailed description] |
| Data to be Collected | [List data types] |
| Data Destination (country) | [Country / Region] |
| Proposed Retention Period | [Period] |
| Is a DPA available from the vendor? | [Yes / No / In Progress] |
| Link to vendor Privacy Policy | [URL] |

**Section 3: DPO Assessment** *(completed by DPO)*

| Field | Response |
|---|---|
| DPIA Required? | [Yes / No] |
| DPA Status | [Signed / Pending / Not Required] |
| Cross-Border Transfer Mechanism | [N/A / Approved country / Contractual safeguards] |
| Classification Confirmed | [Category] |
| Approval Decision | [Approved / Rejected / Conditional] |
| Conditions (if any) | [Specify] |
| DPO Signature | [Signature] |
| Date | [Date] |

---

### Appendix C: Cookie Audit Report Template

*Completed by the DPO and Digital Team following each scheduled or triggered cookie audit.*

| Field | Detail |
|---|---|
| Audit Reference | [Audit ID] |
| Audit Date | [Date] |
| Digital Properties Scanned | [List all properties] |
| Scanning Tool Used | [Tool name and version] |
| Lead Auditor | [Name] |
| DPO Sign-Off | [Name] |

**Findings Summary:**

| Finding Category | Count | Status |
|---|---|---|
| Registered technologies confirmed active and compliant | [#] | No action required |
| Registered technologies found inactive (stale) | [#] | Schedule removal |
| Unregistered technologies detected — approved after review | [#] | Register updated |
| Unregistered technologies detected — removed / blocked | [#] | Remediated |
| Technologies with expired DPAs | [#] | DPA renewal in progress |
| Technologies with incorrect CMP configuration | [#] | Remediated |
| Technologies with cross-border transfer concerns | [#] | Under review |

**Remediation Plan:**

| Finding | Technology Name | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|
| [Finding] | [Name] | [Action] | [Owner] | [Date] | [Open / In Progress / Closed] |

---

### Appendix D: Consent Banner Approved Wireframe

*Insert or reference the approved visual design for the cookie consent banner, including desktop and mobile variants. The wireframe must be reviewed and approved by the DPO and Legal before implementation.*

[Attach or link to approved cookie banner wireframe — reference: [Document / Design ID]]

Key design compliance checkpoints:

- [ ] "Reject all" option is at least as prominent as "Accept all"
- [ ] No pre-ticked consent checkboxes
- [ ] Category-level toggle controls are available in the Preference Centre
- [ ] Banner does not obscure the full page or force a choice to access content
- [ ] Links to Cookie Policy and Privacy Notice are present and functional
- [ ] Banner renders correctly on mobile viewports
- [ ] Banner is accessible (WCAG 2.1 AA compliant)

---

### Appendix E: Data Subject Opt-Out Request Log Template

*Maintained by the DPO to record all direct opt-out and withdrawal of consent requests received from data subjects.*

| # | Request Reference | Date Received | Channel | Data Subject Identifier (anonymised) | Consent Category Withdrawn | Date Actioned | Actioned By | Outcome | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [Ref] | [Date] | [Email / Portal / Phone] | [Anonymous ID] | [Category] | [Date] | [Name] | [Confirmed / Unable to fulfil — reason] | [Notes] |

---

*End of Document*

---

*This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organisation Name]. Unauthorised reproduction, distribution, or disclosure is prohibited.*

*[Organisation Name] | Cookie and Tracking Technology Policy | Version 1.0 | [Effective Date]*