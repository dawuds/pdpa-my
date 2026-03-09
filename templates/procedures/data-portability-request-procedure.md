# Data Portability Request Procedure

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer / IT |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Definitions](#3-definitions)
4. [Regulatory Basis](#4-regulatory-basis)
5. [Portable Data Categories](#5-portable-data-categories)
6. [Identity Verification of Requesting Data Subject](#6-identity-verification-of-requesting-data-subject)
7. [Request Intake and Triage](#7-request-intake-and-triage)
8. [Technical Extraction and Format Standards](#8-technical-extraction-and-format-standards)
9. [Secure Transmission of Exported Data](#9-secure-transmission-of-exported-data)
10. [Exclusions from Data Portability](#10-exclusions-from-data-portability)
11. [Response Timeline and Extension Procedures](#11-response-timeline-and-extension-procedures)
12. [Logging and Record-Keeping](#12-logging-and-record-keeping)
13. [Integration with Systems for Automated Data Extraction](#13-integration-with-systems-for-automated-data-extraction)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Escalation and Dispute Resolution](#15-escalation-and-dispute-resolution)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and the regulatory obligation it fulfills. Reference the specific Act and sections that give rise to this obligation.*

This procedure establishes the process by which [Organization Name] ("the Organization") handles requests from data subjects to receive their personal data in a structured, commonly used, and machine-readable format, and — where technically and legally feasible — to have that data transmitted directly to another data controller. The procedure supports the Organization's obligations under the **Personal Data Protection Act 2010 (PDPA)**, in particular Sections 30 and 31, and aligns with emerging data portability rights within Malaysia's evolving data governance landscape.

This procedure ensures that data portability requests are handled:

- Consistently and in accordance with applicable law;
- Within prescribed timelines and with appropriate safeguards;
- With full traceability for audit and regulatory inspection purposes;
- In a manner that protects the rights of data subjects without prejudicing the legitimate business interests of the Organization or the rights of third parties.

---

## 2. Scope

*Define the boundaries of this procedure — which entities, systems, data types, and personnel it applies to.*

### 2.1 Organizational Scope

This procedure applies to:

- All departments and business units within [Organization Name] that process personal data;
- All third-party processors acting on behalf of the Organization who may hold personal data subject to portability requests;
- All employees, contractors, and agents who receive, handle, or process data portability requests.

### 2.2 Data Subject Scope

This procedure applies to requests received from:

- Individual customers (retail and SME);
- Former customers whose data is still retained within the retention period;
- Authorized representatives acting on behalf of a data subject (with appropriate proof of authority);
- Data subjects in any jurisdiction whose data is processed by [Organization Name] and who assert portability rights under applicable Malaysian law.

### 2.3 System Scope

*List the key systems in scope. Add or remove rows as applicable.*

| System Name | Data Domain | Department Owner |
|---|---|---|
| [Core Banking System] | Account, transaction, customer profile | [IT / Operations] |
| [CRM Platform] | Customer interactions, preferences | [Retail / SMB] |
| [Digital Banking Application] | App usage data, user-provided profile data | [Digital / IT] |
| [Loan Origination System] | Application data provided by applicant | [Credit] |
| [HR Information System] | Employee personal data | [Human Resources] |
| [Other — specify] | [Data domain] | [Department] |

### 2.4 Out of Scope

The following are outside the scope of this procedure:

- Requests for access to personal data (handled under the **Data Access Request Procedure** [Document ID: [Reference ID]]);
- Requests for correction of personal data (handled under the **Data Correction Request Procedure** [Document ID: [Reference ID]]);
- Internal data migration and system integration activities not initiated by a data subject.

---

## 3. Definitions

*Provide clear definitions for key terms used throughout this procedure to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Data Subject** | An individual who is the subject of personal data processed by the Organization, as defined under s.4 of the PDPA 2010. |
| **Data Controller** | [Organization Name], being the person who either alone or jointly with another person processes personal data for the purposes of the data controller's business. |
| **Data Portability** | The right of a data subject to receive personal data they have provided to a data controller in a structured, commonly used, machine-readable format, and to transmit that data to another data controller. |
| **Portable Data** | Personal data that is (a) provided directly by the data subject, and (b) processed based on consent or contract, and (c) processed by automated means. |
| **Machine-Readable Format** | A structured data format that can be automatically read and processed by software applications, including but not limited to CSV, JSON, and XML. |
| **Authorized Representative** | A person legally authorized to act on behalf of a data subject, evidenced by a written letter of authorization, power of attorney, or equivalent document. |
| **Third-Party Recipient** | Another data controller or organization to whom the data subject requests their portable data be transmitted directly. |
| **DPO** | Data Protection Officer of [Organization Name]. |
| **PDPA** | Personal Data Protection Act 2010 (Act 709), Malaysia. |
| **NACSA** | National Cyber Security Agency, Malaysia. |
| **BNM** | Bank Negara Malaysia. |

---

## 4. Regulatory Basis

*Identify the specific legal provisions and regulatory instruments that this procedure implements. This section is critical for audit evidence.*

This procedure is issued in compliance with and in support of the following regulatory instruments:

### 4.1 Primary Legislation

| Instrument | Relevant Provision | Subject Matter |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | Section 30 | Right of access to personal data — underpins the data subject's right to obtain a copy of their data |
| Personal Data Protection Act 2010 (Act 709) | Section 31 | Right to prevent processing causing damage or distress — context for limiting portability where processing causes harm |
| Personal Data Protection Act 2010 (Act 709) | Section 5 – General Principle | Lawful basis for processing personal data |
| Personal Data Protection Act 2010 (Act 709) | Section 6 – Consent Principle | Conditions for valid consent underpinning portability scope |
| Personal Data Protection Act 2010 (Act 709) | Section 9 – Security Principle | Obligation to protect personal data during transfer |

### 4.2 Subsidiary Legislation and Guidelines

| Instrument | Issuing Authority | Relevance |
|---|---|---|
| Personal Data Protection Regulations 2013 | PDPA Commissioner | Procedural requirements for data subject requests |
| [BNM Policy Document — Customer Data and Privacy] | Bank Negara Malaysia | Sector-specific guidance on customer data handling |
| [NACSA Cybersecurity Policy — Data Transfer Standards] | NACSA | Secure transmission standards for sensitive data |
| [Organization Name] Data Protection Policy [Ref ID] | Internal | Overarching data protection obligations |
| [Organization Name] Information Security Policy [Ref ID] | Internal | Technical controls governing data export and transmission |

> **Note:** Where this procedure references emerging portability rights not yet fully enacted under current PDPA provisions, the Organization adopts a proactive compliance posture consistent with international best practices (e.g., GDPR Article 20) in anticipation of legislative amendments.

---

## 5. Portable Data Categories

*Define precisely which categories of personal data are eligible for portability. This section operationalizes the legal concept of "data provided by the data subject."*

### 5.1 Eligibility Criteria

For personal data to be eligible for portability under this procedure, it must satisfy **all** of the following criteria:

1. **Provided by the data subject** — the data was actively submitted by the data subject (e.g., during account opening, online forms, application submissions);
2. **Processed under consent or contract** — the lawful basis for processing is either the data subject's consent or the performance of a contract to which the data subject is a party;
3. **Held in a structured digital system** — the data is stored in a format that permits automated extraction.

### 5.2 Portable Data Categories — Reference Table

*Review and update the following table to reflect the Organization's actual data inventory. Mark eligibility based on the criteria above.*

| Data Category | Example Data Elements | Eligible for Portability | Lawful Basis | Notes |
|---|---|---|---|---|
| Customer Identity Data | Full name, NRIC/Passport, date of birth, nationality | Yes | Contract | Provided during onboarding |
| Contact Information | Mobile number, email, residential address | Yes | Contract | Provided directly by data subject |
| Account Profile Data | Account type, account preferences, communication preferences | Yes | Contract / Consent | |
| Financial Transaction History | Debit/credit transactions, payment history | Yes (limited) | Contract | Subject to exclusions in Section 10 |
| Loan Application Data | Income declared, employment details, assets declared | Yes | Contract | Data provided during application |
| Digital Banking Profile | Registered device details, user-set preferences | Yes | Consent | |
| Behavioural/Usage Data | App navigation logs, click patterns | No | Legitimate interest | Classified as derived/observed data — see Section 10 |
| Credit Scoring Data | Internal credit score, risk rating | No | Legitimate interest | Derived data — see Section 10 |
| Fraud Detection Flags | Suspicious activity markers | No | Legal obligation | Confidential — see Section 10 |
| Third-Party Sourced Data | Bureau data, land registry data | No | N/A | Third-party data — see Section 10 |

### 5.3 Minimum Portable Dataset

*Define the baseline dataset the Organization commits to providing in all portability requests, subject to verification and exclusions.*

At minimum, the Organization shall provide the following upon a valid portability request:

- [ ] Full name and identity number (as registered)
- [ ] Contact details (email, mobile, address)
- [ ] Account profile and preferences
- [ ] Transaction history for the preceding [24 / 36 / 60] months (specify)
- [ ] Loan or product application data submitted by the data subject
- [ ] [Other — specify based on product lines]

---

## 6. Identity Verification of Requesting Data Subject

*This section is critical for preventing unauthorized disclosure. Define robust verification steps proportionate to the sensitivity of the data being exported.*

### 6.1 Verification Principles

The Organization shall verify the identity of any person submitting a data portability request before processing the request. Verification requirements are proportionate to the sensitivity and volume of data requested.

### 6.2 Verification Methods

| Requester Type | Acceptable Verification Methods | Minimum Standard |
|---|---|---|
| **Existing Customer (authenticated digital channel)** | Logged-in session via Internet Banking / Mobile App with MFA | MFA confirmation |
| **Existing Customer (written/email request)** | Copy of NRIC/Passport + verification call-back to registered number | Two-factor |
| **Existing Customer (in-branch)** | Original NRIC/Passport + face verification | In-person |
| **Former Customer** | Copy of NRIC/Passport + last account number + registered email/mobile | Enhanced verification |
| **Authorized Representative** | NRIC of representative + written authorization letter + data subject's NRIC copy | Enhanced verification |
| **Legal Guardian (for minor)** | Birth certificate of minor + guardian's NRIC + proof of guardianship | Enhanced verification |

### 6.3 Verification Failure Procedure

If identity cannot be satisfactorily verified:

1. The request is placed on hold and the data subject is notified within **[5 business days]**;
2. The data subject is provided a list of acceptable alternative verification methods;
3. The data subject is given **[15 business days]** to provide satisfactory verification;
4. If verification is not provided within the extended period, the request is closed and the data subject is notified in writing;
5. The failed verification attempt is logged in the Request Register (Section 12).

### 6.4 Suspicious Requests

If a request exhibits indicators of social engineering or identity fraud (e.g., urgency, third-party pressure, mismatched details), the handling officer shall:

- Escalate to the DPO immediately;
- Place the request on hold;
- Consider notifying the Information Security team;
- Document all indicators in the request log.

---

## 7. Request Intake and Triage

*Describe all channels through which requests may be received and the initial classification steps.*

### 7.1 Submission Channels

| Channel | Contact Point | Responsible Team |
|---|---|---|
| Online Portal | [URL / Portal Name] | [Digital / Operations] |
| Email | [dpo@organization.com.my] | DPO Office |
| Written Request (post or in-branch) | [Branch address / Head Office address] | [Operations / DPO] |
| In-Person (branch) | [Branch network] | [Branch Operations] |

### 7.2 Triage Checklist

Upon receipt of a request, the handling officer shall complete the following triage:

| Step | Action | Outcome |
|---|---|---|
| 1 | Confirm the request explicitly relates to data portability (not access or correction) | Classify correctly; redirect if misclassified |
| 2 | Record receipt date and assign a Request Reference Number | Enter into Request Register |
| 3 | Confirm data subject's identity (see Section 6) | Proceed or hold pending verification |
| 4 | Assess scope of data requested against eligible categories (Section 5) | Flag excluded categories |
| 5 | Assess whether direct transmission to a third party is requested | Initiate third-party verification if applicable |
| 6 | Confirm no legal hold or regulatory freeze applies to the data | Escalate to Legal if applicable |
| 7 | Notify data subject of receipt and expected timeline | Send acknowledgment (Appendix A) |

### 7.3 Request Reference Numbering

All portability requests shall be assigned a unique reference number in the format:

`DPR-[YYYY]-[MM]-[NNNN]`

*Example: DPR-2025-07-0042*

---

## 8. Technical Extraction and Format Standards

*Define the technical standards for data extraction to ensure interoperability, data integrity, and security.*

### 8.1 Approved Output Formats

The Organization shall provide portable data in one or more of the following machine-readable formats, based on the nature of the data and the requesting data subject's stated preference:

| Format | Use Case | Standard / Specification |
|---|---|---|
| **CSV** (Comma-Separated Values) | Tabular data (transactions, account records) | RFC 4180; UTF-8 encoding |
| **JSON** (JavaScript Object Notation) | Structured / nested data (profiles, preferences) | RFC 8259; UTF-8 encoding |
| **XML** (Extensible Markup Language) | Complex hierarchical data, regulatory submissions | W3C XML 1.0; schema provided |
| **PDF** (where machine-readable is not applicable) | Supporting documents (e.g., account statements) | PDF/A-1b for archival |

> The Organization shall default to **JSON** for structured personal data and **CSV** for transaction data unless the data subject specifies otherwise or a third-party recipient's technical requirements dictate a different format.

### 8.2 Data Quality Standards

All exported data shall:

- Be complete and accurate as at the date of extraction;
- Include a timestamp of extraction;
- Exclude null or redundant fields unless explicitly requested;
- Be accompanied by a **data dictionary** (see Appendix B) describing each field, its data type, and its source system;
- Be provided with a **checksum** (SHA-256) to enable verification of file integrity by the recipient.

### 8.3 Data Extraction Process

*Map the extraction workflow for each in-scope system. This section should be updated when systems are upgraded or replaced.*

| Step | Action | System | Responsible |
|---|---|---|---|
| 1 | Validate request authorization and scope | Request Register | DPO / Handling Officer |
| 2 | Raise extraction task in [IT Service Management System] | [ITSM Tool] | DPO Office |
| 3 | Extract data from source systems per approved scope | [Core Banking, CRM, etc.] | IT / Data Engineering |
| 4 | Apply field-level exclusions (see Section 10) | Extraction pipeline | IT / Data Engineering |
| 5 | Convert to approved output format | Extraction pipeline | IT / Data Engineering |
| 6 | Quality-check exported data against source | QA process | IT / Data Engineering |
| 7 | Generate checksum and encrypt package | Security tooling | IT / Information Security |
| 8 | Transfer package to secure staging area | Secure file share | IT |
| 9 | Notify DPO that package is ready for delivery | Workflow notification | IT |
| 10 | Deliver package to data subject (see Section 9) | Delivery channel | DPO / Operations |

### 8.4 Schema and Data Dictionary

A data dictionary shall be maintained for each extractable dataset and updated with each system change. Refer to **Appendix B** for the current data dictionary. The data dictionary shall include:

- Field name;
- Description;
- Data type and format;
- Source system;
- Whether the field is included in standard portability extracts.

---

## 9. Secure Transmission of Exported Data

*Define the technical and procedural controls for delivering exported data to the data subject or a nominated third party.*

### 9.1 Delivery Channels

| Delivery Method | Applicable Scenario | Security Controls |
|---|---|---|
| **Secure Download Link** (authenticated portal) | Data subject has active online banking access | TLS 1.2+, link expiry [48 hours], MFA required |
| **Encrypted Email Attachment** | Written/email requests; small file sizes | S/MIME or PGP encryption; password communicated via separate channel |
| **Encrypted USB / Physical Media** | Large datasets; in-branch request | AES-256 encryption; password communicated verbally at branch |
| **Secure API Transfer** | Third-party direct transfer request | Mutually authenticated TLS; OAuth 2.0 authorization; see Section 9.3 |
| **Secure File Transfer Protocol (SFTP)** | Large volumes; third-party systems | SSH-based; dedicated credentials per transfer; logged |

### 9.2 Encryption Standards

All exported data packages shall be encrypted using the following minimum standards:

- **Data at rest (package):** AES-256
- **Data in transit:** TLS 1.2 or higher
- **Key management:** Keys shall not be transmitted via the same channel as the encrypted data
- **Password complexity:** Minimum 12 characters, mixed case, numeric, and special characters

### 9.3 Third-Party Direct Transfer Procedure

Where a data subject requests direct transmission of their portable data to a named third-party data controller:

1. **Verify the third-party identity:** Obtain the full legal name, registration number, and privacy contact of the receiving organization;
2. **Confirm data subject consent:** Obtain explicit, documented consent from the data subject authorizing direct transfer to the named party;
3. **Assess the third party:** Confirm the receiving organization has a stated privacy policy and is subject to equivalent data protection obligations;
4. **Establish secure transfer mechanism:** Use mutually authenticated API (preferred), SFTP, or encrypted email as appropriate;
5. **Confirm receipt:** Obtain written confirmation from the third party that the data package was received intact;
6. **Notify data subject:** Confirm to the data subject that the transfer was completed;
7. **Log the transfer:** Record all transfer details in the Request Register (Section 12).

> The Organization reserves the right to decline direct third-party transfer where the receiving party cannot demonstrate adequate data protection safeguards, and shall notify the data subject accordingly.

### 9.4 Post-Delivery Data Handling

- The export package shall be deleted from the Organization's staging environment within **[7 business days]** of confirmed delivery;
- Delivery confirmation (receipt acknowledgment or access log) shall be retained for **[7 years]** as part of the request record;
- Download links shall expire automatically after **[48 hours]**; the data subject may request a re-issue within the original response window.

---

## 10. Exclusions from Data Portability

*Clearly define what is excluded from portability requests, with legal or operational justification for each exclusion. This section is essential for managing scope and protecting organizational interests.*

### 10.1 Exclusion Principles

The following categories of data are excluded from data portability responses and shall not be included in any extract provided to a data subject or third party:

### 10.2 Exclusion Categories

| Exclusion Category | Description | Justification |
|---|---|---|
| **Derived / Inferred Data** | Data generated through the Organization's own analysis, modelling, or inference (e.g., credit scores, risk ratings, propensity scores, behavioral segments) | Not "provided by" the data subject; represents proprietary analytical output |
| **Third-Party Sourced Data** | Data obtained from external sources such as credit bureaus (e.g., CTOS, CCRIS), land registries, government databases | The Organization is not the primary data controller for this data; re-transmission may breach third-party data agreements |
| **Confidential Business Information** | Internal notes, assessments, fraud flags, AML/CFT markers, internal classifications | Disclosure may compromise regulatory obligations, fraud detection capabilities, or legal proceedings |
| **Data Relating to Third Parties** | Any data within a record that identifies or relates to a person other than the requesting data subject | Portability of such data would infringe the privacy rights of third parties |
| **Legally Privileged Information** | Data subject to legal professional privilege or regulatory reporting obligations | Subject to legal hold or non-disclosure requirements |
| **System / Technical Metadata** | Internal system identifiers, database keys, audit trail entries, access logs | Operational data with no personal data value to the data subject; disclosure may pose security risk |
| **Data Subject to Court Order or Regulatory Freeze** | Any data the subject of a regulatory investigation, court order, or legal hold | Cannot be released pending resolution of the relevant proceedings |
| **Data Retained Solely for Legal Compliance** | Data retained beyond the relationship solely to satisfy a statutory retention obligation (e.g., AML records) | Portability rights do not override mandatory retention regimes |

### 10.3 Partial Fulfillment

Where a request encompasses both portable and non-portable data, the Organization shall:

1. Fulfill the portable portion of the request within the standard timeline;
2. Provide the data subject with a written explanation of any excluded categories;
3. Not disclose the existence or content of confidential exclusions where doing so would itself be a breach (e.g., tipping off in an AML context);
4. Log the exclusions applied in the Request Register.

---

## 11. Response Timeline and Extension Procedures

*Establish clear SLAs for responding to data portability requests, and define the process for requesting and granting extensions.*

### 11.1 Standard Response Timeline

| Milestone | Timeframe | Notes |
|---|---|---|
| Acknowledgment of receipt | Within **[3 business days]** of receiving the request | Acknowledgment letter/email (Appendix A) |
| Identity verification completion | Within **[5 business days]** of receipt | Clock paused if further verification is required from data subject |
| Data extraction and quality review | Within **[15 business days]** of verified request | Internal SLA for IT and data teams |
| Delivery to data subject or third party | Within **[21 business days]** of verified request | Total end-to-end response window |

> **Note:** The PDPA 2010 does not prescribe a specific deadline for data portability responses as of the current version of the Act. The timelines above represent the Organization's committed service standard. These should be reviewed if the PDPA is amended to introduce a statutory deadline.

### 11.2 Clock Suspension Events

The response clock is **suspended** (paused) in the following circumstances:

| Event | Action | Clock Resumes |
|---|---|---|
| Identity verification outstanding | Notify data subject; request additional documentation | Upon receipt of satisfactory verification |
| Request requires clarification | Contact data subject to clarify scope | Upon receipt of clarification |
| Legal or regulatory hold identified | Escalate to Legal / Compliance | Upon resolution of the hold |
| Third-party verification required | Contact receiving party | Upon receipt of verification |

The data subject shall be notified in writing within **[3 business days]** of the clock being suspended, with reasons provided (subject to confidentiality constraints).

### 11.3 Extension Procedure

Where the Organization is unable to fulfill the request within the standard **[21 business day]** window due to complexity or volume:

1. The DPO shall assess the request and approve an extension of up to **[10 additional business days]**;
2. The data subject shall be notified in writing before the expiry of the original deadline, with:
   - Reasons for the extension;
   - The revised expected completion date;
   - Contact details for queries.
3. Extensions are logged in the Request Register with justification;
4. No further extensions shall be granted without escalation to the **[Chief Privacy Officer / Legal Counsel / Board Risk Committee — specify]**.

### 11.4 Deemed Refusal

If the Organization fails to respond within the total extended window without a valid reason:

- The DPO shall immediately escalate to [Chief Privacy Officer / Legal];
- A remediation plan shall be put in place;
- The incident shall be logged as a compliance breach;
- The data subject shall be advised of their right to lodge a complaint with the Personal Data Protection Commissioner.

---

## 12. Logging and Record-Keeping

*This section is critical for demonstrating accountability and regulatory compliance. Define the records that must be maintained and their retention periods.*

### 12.1 Request Register

The Organization shall maintain a **Data Portability Request Register** in [System/Tool Name, e.g., DPO Case Management System / SharePoint / Jira]. The Register shall capture the following fields for every request:

| Field | Description |
|---|---|
| Request Reference Number | Unique ID (format: DPR-YYYY-MM-NNNN) |
| Date of Receipt | Date the request was received |
| Data Subject Name | Full name (not to be used for secondary purposes) |
| Data Subject ID | NRIC / Passport number (last 4 digits only, unless full ID required) |
| Submission Channel | Portal / Email / Branch / Post |
| Request Description | Summary of data categories requested |
| Identity Verification Method | Method used and date verified |
| Verification Outcome | Pass / Fail / Pending |
| Third-Party Transfer Requested | Yes / No; if Yes, name and details of recipient |
| Exclusions Applied | Categories excluded and reasons |
| Clock Suspension Events | Dates and reasons for any suspension |
| Extension Granted | Yes / No; if Yes, date and reason |
| Date of Delivery | Date data package was delivered |
| Delivery Method | Secure link / Encrypted email / SFTP / API |
| Delivery Confirmation | Reference to receipt confirmation |
| Status | Open / Fulfilled / Closed — Rejected / Closed — Unable to Verify |
| Handling Officer | Name and role |
| DPO Sign-Off | Name and date |
| Notes | Any additional relevant information |

### 12.2 Evidence Retained per Request

For each completed portability request, the following records shall be retained:

- [ ] Copy of the original request (as received);
- [ ] Identity verification documentation (copies of ID documents, call records as applicable);
- [ ] Acknowledgment letter/email sent to data subject;
- [ ] Request Register entry;
- [ ] Data extraction job logs from source systems;
- [ ] QA sign-off record;
- [ ] Encrypted package manifest (file list, checksums);
- [ ] Delivery confirmation (download logs, email receipts, SFTP transfer logs);
- [ ] Any extension notification letters;
- [ ] Any exclusion justification notes;
- [ ] Post-delivery deletion confirmation for staging data.

### 12.3 Retention Period

All records related to data portability requests shall be retained for a minimum of **[7 years]** from the date of closure of the request, in accordance with:

- [Organization Name] Record Retention Policy [Document ID: [Ref]];
- Section 9 (Security Principle) and applicable regulations under the PDPA 2010;
- [BNM / NACSA applicable record retention guidelines — cite specific instrument].

### 12.4 Access to Records

Access to the Request Register and associated records is restricted to:

- Data Protection Officer and DPO team;
- Authorized IT personnel (read-only, for extraction purposes);
- Internal Audit (read access, for compliance review);
- Legal / Compliance (on a need-to-know basis);
- Regulators (upon lawful request).

Access shall be logged and reviewed quarterly by the DPO.

---

## 13. Integration with Systems for Automated Data Extraction

*Define the technical architecture and controls for automated data extraction capability. This section bridges the procedure with the Organization's technical implementation.*

### 13.1 Automation Objectives

The Organization shall work towards automated data extraction capabilities to:

- Reduce manual effort and the risk of human error in data extraction;
- Ensure consistency and completeness of extracts across multiple requests;
- Support scalability as the volume of portability requests grows;
- Enable near-real-time extraction for time-sensitive requests.

### 13.2 Target Architecture

*Describe the target-state technical architecture for automated portability. Update this section as implementation progresses.*

| Component | Description | Status |
|---|---|---|
| **Portability Request API** | Internal API endpoint that accepts authorized extraction requests, mapped to request reference numbers | [Planned / In Development / Live] |
| **Data Catalogue Integration** | Connection to the Organization's data catalogue to resolve request scope to source systems and tables | [Planned / In Development / Live] |
| **Extraction Connectors** | System-specific connectors for each in-scope source system (Core Banking, CRM, etc.) | [Planned / In Development / Live] |
| **Transformation Layer** | Converts raw system data to approved output formats (JSON, CSV, XML) per the data dictionary | [Planned / In Development / Live] |
| **Exclusion Filter** | Automated field-level exclusion engine applying the rules in Section 10 | [Planned / In Development / Live] |
| **Encryption Module** | Automated AES-256 encryption of output packages with managed key generation | [Planned / In Development / Live] |
| **Delivery Module** | Automated generation of secure download links and SFTP push capability | [Planned / In Development / Live] |
| **Audit Logging Module** | Automated logging of all extraction activities to the Request Register | [Planned / In Development / Live] |

### 13.3 System Integration Register

*Maintain this register to track the integration status of each in-scope system.*

| Source System | Integration Method | Data Categories Extracted | Automation Status | Last Tested | IT Owner |
|---|---|---|---|---|---|
| [Core Banking System] | [API / DB Query / ETL] | [Account, transaction data] | [Manual / Semi-Auto / Automated] | [Date] | [Name] |
| [CRM Platform] | [API / DB Query / ETL] | [Customer profile, preferences] | [Manual / Semi-Auto / Automated] | [Date] | [Name] |
| [Digital Banking App] | [API / DB Query / ETL] | [App profile, user preferences] | [Manual / Semi-Auto / Automated] | [Date] | [Name] |
| [Loan Origination System] | [API / DB Query / ETL] | [Application data] | [Manual / Semi-Auto / Automated] | [Date] | [Name] |

### 13.4 Manual Extraction Fallback

Where automated extraction is not available for a particular system, IT shall perform manual extraction under the following controls:

- Extraction is performed only by authorized IT personnel with signed confidentiality obligations;
- A second IT officer reviews and quality-checks the extracted data before handover;
- Manual extraction is documented in the extraction job log with personnel names and timestamps;
- The DPO is notified of any manual extraction;
- Manual extraction steps are progressively automated as part of the IT roadmap.

### 13.5 Testing and Maintenance

- Automated extraction pipelines shall be tested **[quarterly]** using synthetic test data;
- Any system upgrade or change that affects in-scope systems shall trigger an impact assessment on the extraction pipeline;
- IT shall notify the DPO of any planned changes to in-scope systems at least **[30 days]** in advance;
- Annual penetration testing of the portability API and delivery module shall be conducted by [Internal IT Security / External Third Party].

---

## 14. Roles and Responsibilities

*Define who is responsible for each aspect of the data portability process. Use the RACI framework: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 14.1 RACI Matrix

| Activity | DPO | DPO Team / Handling Officer | IT / Data Engineering | Information Security | Legal / Compliance | Business Unit (Data Owner) | Internal Audit |
|---|---|---|---|---|---|---|---|
| Receive and acknowledge portability request | A | R | I | — | — | — | — |
| Conduct identity verification | A | R | — | C | — | — | — |
| Triage and scope assessment | A | R | C | — | C | C | — |
| Raise extraction task | A | R | R | — | — | — | — |
| Execute data extraction | C | I | R | C | — | A | — |
| Apply exclusion filters | A | C | R | — | C | — | — |
| Quality-check extracted data | A | C | R | — | — | C | — |
| Encrypt and package data | A | I | R | R | — | — | — |
| Deliver data to data subject | A | R | C | C | — | — | — |
| Manage third-party transfer | A | R | C | R | C | — | — |
| Issue extension notification | A | R | I | — | C | — | — |
| Update Request Register | A | R | C | — | — | — | — |
| Annual review of this procedure | A | R | C | C | C | C | I |
| Compliance monitoring and reporting | A | C | — | — | R | — | I |
| Audit of portability request records | I | I | I | I | I | — | R |

### 14.2 Role Descriptions

| Role | Responsibilities |
|---|---|
| **Data Protection Officer (DPO)** | Overall accountability for data portability compliance; approval of extensions; escalation point for complex or disputed requests; annual procedure review sign-off |
| **DPO Team / Handling Officer** | Day-to-day management of portability requests; identity verification; communication with data subjects; maintenance of Request Register |
| **IT / Data Engineering** | Technical extraction from source systems; format conversion; checksum generation; pipeline maintenance and testing |
| **Information Security** | Encryption standards compliance; secure delivery channel management; penetration testing oversight |
| **Legal / Compliance** | Advice on legal exclusions; management of requests involving legal holds; regulatory liaison |
| **Business Unit Data Owners** | Subject matter expertise on data held in their systems; approval of extraction scope for their data domains |
| **Internal Audit** | Independent review of Request Register and compliance with this procedure; reporting to Audit Committee |

---

## 15. Escalation and Dispute Resolution

*Define the process for handling complaints, disputes, and regulatory inquiries relating to data portability requests.*

### 15.1 Internal Escalation Path

| Situation | First Escalation | Second Escalation | Final Escalation |
|---|---|---|---|
| Request cannot be fulfilled within standard timeline | Handling Officer → DPO | DPO → Chief Privacy Officer | CPO → [Board Risk Committee / EXCO] |
| Data subject disputes the scope of data provided | Handling Officer → DPO | DPO → Legal | Legal → External Counsel |
| Security incident during data extraction or delivery | IT → Information Security | CISO → DPO | DPO → BNM / NACSA (if notifiable) |
| Request involves potential fraud or social engineering | Handling Officer → DPO + Fraud Team | Fraud Team → Law Enforcement (if applicable) | — |
| Regulatory inquiry from PDPA Commissioner | DPO → Legal → CPO | CPO → Board | — |

### 15.2 Data Subject Complaints

A data subject who is dissatisfied with the handling of their portability request may:

1. Submit a written complaint to the DPO at: **[dpo@organization.com.my]**;
2. If unsatisfied with the DPO's response within **[14 business days]**, lodge a complaint with the **Personal Data Protection Commissioner of Malaysia** via the official complaint channel;
3. Seek remedy under applicable civil law.

The Organization shall not penalize a data subject for exercising their rights or lodging a complaint in good faith.

---

## 16. Review and Approval

### 16.1 Review Schedule

This procedure shall be reviewed:

- **Annually**, within [month] of each calendar year;
- **Upon any material change** to the PDPA 2010 or related regulations;
- **Upon any material change** to the Organization's data processing systems or business model;
- **Following any significant data portability incident** or audit finding.

### 16.2 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [Description of changes] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [Description of changes] | [Approver Name] |

### 16.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer / IT Director | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Head of Legal | [Name] | [Signature] | [Date] |
| [Chief Privacy Officer / CISO — if applicable] | [Name] | [Signature] | [Date] |
| [Board Risk Committee Representative] | [Name] | [Signature] | [Date] |

---

## 17. References

*List all instruments, standards, and internal documents referenced in this procedure.*

### 17.1 Legislation and Regulation

| Reference | Description |
|---|---|
| Personal Data Protection Act 2010 (Act 709), s.30 | Right of access to personal data — foundational basis for data subject's right to obtain a copy of their data |
| Personal Data Protection Act 2010 (Act 709), s.31 | Right to prevent processing causing damage or distress |
| Personal Data Protection Act 2010 (Act 709), s.5 | General Principle — lawful basis for processing |
| Personal Data Protection Act 2010 (Act 709), s.6 | Consent Principle |
| Personal Data Protection Act 2010 (Act 709), s.9 | Security Principle — obligation to protect data during transfer |
| Personal Data Protection Regulations 2013 | Procedural requirements for data subject requests |
| Communications and Multimedia Act 1998 (Act 588) | Digital communications obligations |
| [BNM Policy Document — Customer Data and Privacy, [Date/Version]] | Sector-specific guidance for financial institutions |
| [NACSA — National Cybersecurity Policy, [Date/Version]] | Cybersecurity standards for data handling |

### 17.2 International Standards (Reference)

| Standard | Description |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems |
| ISO/IEC 27701:2019 | Privacy Information Management — extension to ISO 27001 |
| GDPR Article 20 (EU) | Right to data portability — reference standard for emerging Malaysian provisions |

### 17.3 Internal Documents

| Document | Document ID | Owner |
|---|---|---|
| Data Protection Policy | [Doc ID] | DPO |
| Information Security Policy | [Doc ID] | CISO |
| Data Retention and Disposal Policy | [Doc ID] | DPO / Records Management |
| Data Access Request Procedure | [Doc ID] | DPO |
| Data Correction Request Procedure | [Doc ID] | DPO |
| Data Breach Response Procedure | [Doc ID] | DPO / CISO |
| Third-Party Data Processor Management Policy | [Doc ID] | Procurement / DPO |
| IT Change Management Policy | [Doc ID] | IT |

---

## 18. Appendices

### Appendix A — Acknowledgment Letter Template

*Provide a standard acknowledgment letter template for use when a portability request is received. Customize with organization letterhead.*

---

**[Organization Name Letterhead]**

**Date:** [Date]

**To:** [Data Subject Full Name]
**Reference:** [Request Reference Number — DPR-YYYY-MM-NNNN]

Dear [Data Subject Name],

**Re: Acknowledgment of Data Portability Request**

We write to acknowledge receipt of your data portability request received on **[Date of Receipt]**.

Your request has been assigned the reference number **[DPR-YYYY-MM-NNNN]**. Please quote this reference in all correspondence relating to your request.

We will process your request in accordance with our Data Portability Request Procedure and the Personal Data Protection Act 2010. You can expect to receive a response by **[Expected Completion Date — 21 business days from verified request]**.

If we require any further information or documentation from you to verify your identity or clarify the scope of your request, we will contact you at **[registered contact details]**.

Should you have any questions, please contact our Data Protection Officer at:

**Email:** [dpo@organization.com.my]
**Telephone:** [+60X-XXXXXXX]
**Address:** [Organization Address]

Yours sincerely,

[DPO / Handling Officer Name]
[Title]
Data Protection Officer's Office
[Organization Name]

---

### Appendix B — Data Dictionary Template

*Maintain this dictionary for each extractable dataset. Update when source systems are modified.*

| Field Name | Description | Data Type | Format / Example | Source System | Included in Standard Export | Notes |
|---|---|---|---|---|---|---|
| customer_id | Unique customer identifier | String | C-XXXXXXXXXX | Core Banking | No (internal key) | Excluded — system metadata |
| full_name | Customer's full name as registered | String | Mohamed bin Abdullah | Core Banking / CRM | Yes | |
| nric_number | National Registration IC number | String | XXXXXX-XX-XXXX | Core Banking | Yes | Masked in export: last 4 digits shown |
| date_of_birth | Date of birth | Date | YYYY-MM-DD | Core Banking | Yes | |
| email_address | Primary registered email | String | user@example.com | CRM | Yes | |
| mobile_number | Primary registered mobile | String | +601X-XXXXXXX | CRM | Yes | |
| residential_address | Registered residential address | String | [Free text] | Core Banking | Yes | |
| account_number | Account number | String | XXXXXXXXXXXXXXX | Core Banking | Yes | Masked: last 4 digits |
| transaction_date | Date of transaction | Date | YYYY-MM-DD | Core Banking | Yes | |
| transaction_amount | Transaction amount | Decimal | 1234.56 | Core Banking | Yes | |
| transaction_type | Debit / Credit | String | DR / CR | Core Banking | Yes | |
| [Add fields] | | | | | | |

### Appendix C — Data Portability Request Form

*This form may be provided to data subjects to ensure complete and consistent request submissions. Available via [Portal URL / Branch / Email request].*

---

**DATA PORTABILITY REQUEST FORM**
**[Organization Name]**
**Form Ref: DPF-001 | Version 1.0**

**Section 1 — Data Subject Details**

| Field | Response |
|---|---|
| Full Name (as per NRIC/Passport) | |
| NRIC / Passport Number | |
| Date of Birth | |
| Registered Email Address | |
| Registered Mobile Number | |
| Relationship with Organization | Current Customer / Former Customer / Employee / Other |

**Section 2 — Data Requested**

Please indicate the categories of data you are requesting:

- [ ] Identity and contact information
- [ ] Account profile and preferences
- [ ] Transaction history (specify period: \_\_\_\_\_\_\_\_ to \_\_\_\_\_\_\_\_\_)
- [ ] Loan / product application data
- [ ] Digital banking profile and preferences
- [ ] All portable data held by [Organization Name]
- [ ] Other (please specify): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Section 3 — Preferred Format**

- [ ] CSV
- [ ] JSON
- [ ] XML
- [ ] No preference (Organization will determine appropriate format)

**Section 4 — Delivery Instructions**

- [ ] Provide data to me via secure download link (registered email)
- [ ] Transmit data directly to a third party (complete Section 5)
- [ ] Collect in person at branch (branch address: \_\_\_\_\_\_\_\_\_\_\_\_\_)

**Section 5 — Third-Party Transfer (if applicable)**

| Field | Response |
|---|---|
| Receiving Organization Name | |
| Receiving Organization Registration No. | |
| Contact Name at Receiving Organization | |
| Contact Email at Receiving Organization | |
| Contact Telephone at Receiving Organization | |
| Preferred Transfer Method | API / SFTP / Encrypted Email / Other |

I authorize [Organization Name] to transmit my personal data directly to the organization named in Section 5.

**Data Subject Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_

**Section 6 — Declaration**

I confirm that the information provided above is accurate and that I am the data subject or an authorized representative of the data subject named above.

- [ ] I am the data subject
- [ ] I am an authorized representative (attach authorization letter and copy of data subject's NRIC)

**Signed:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_\_

**For Office Use Only**

| Field | Entry |
|---|---|
| Request Reference Number | DPR-\_\_\_\_-\_\_\_\_-\_\_\_\_ |
| Received By | |
| Date Received | |
| Verification Status | |
| Assigned Handler | |

---

### Appendix D — Request Processing Flowchart

*Insert a process flowchart depicting the end-to-end portability request workflow. The flowchart should map to Sections 6–9 and 11 of this procedure.*

**[Insert Flowchart Here]**

Recommended tool: [Lucidchart / Visio / draw.io]

Key decision nodes to include:
1. Request received → Is it a portability request?
2. Identity verification → Pass or Fail?
3. Is third-party transfer requested?
4. Is any data excluded?
5. Is response achievable within standard timeline?
6. Data delivered → Confirm receipt → Close request

### Appendix E — Escalation Contact Directory

*Maintain current contact details for all escalation points. Review quarterly.*

| Role | Name | Email | Telephone | Backup Contact |
|---|---|---|---|---|
| Data Protection Officer | [Name] | [Email] | [Tel] | [Backup] |
| Chief Privacy Officer | [Name] | [Email] | [Tel] | [Backup] |
| Head of Legal | [Name] | [Email] | [Tel] | [Backup] |
| CISO / Head of Information Security | [Name] | [Email] | [Tel] | [Backup] |
| PDPA Commissioner (Malaysia) | — | pdp@kkmm.gov.my | +603-XXXXXXXX | — |
| BNM Consumer & Market Conduct | — | [BNM contact] | — | — |

### Appendix F — Glossary of File Format Standards

| Format | Full Name | Standard | Typical Use in Portability |
|---|---|---|---|
| CSV | Comma-Separated Values | RFC 4180 | Transaction records, tabular account data |
| JSON | JavaScript Object Notation | RFC 8259 | Structured profile data, nested records |
| XML | Extensible Markup Language | W3C XML 1.0 | Complex hierarchical data, interoperability |
| PDF/A | Portable Document Format / Archive | ISO 19005-1 | Statements, signed documents |
| SHA-256 | Secure Hash Algorithm 256-bit | FIPS 180-4 | File integrity verification (checksum) |
| AES-256 | Advanced Encryption Standard 256-bit | FIPS 197 | Data-at-rest encryption for export packages |
| TLS 1.2/1.3 | Transport Layer Security | RFC 5246 / RFC 8446 | Data-in-transit encryption |

---

*End of Document*

---

**Document Control Notice:** This document contains confidential information belonging to [Organization Name]. It must not be reproduced, distributed, or disclosed to any party outside the Organization without the prior written consent of the Data Protection Officer. Printed copies are uncontrolled. Always refer to the document management system for the current version.