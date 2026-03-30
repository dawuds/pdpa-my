# PDPA-MY Audit Work Program — Control-to-Requirement Mapping

**Date:** 2026-03-31
**Version:** 1.0.0
**Control library:** library.json v2.0.0 (49 controls, 10 domains)
**Target requirements:** 120 (49 controls x ~2.4:1 ratio)

---

## 1. Regulatory Chain

The PDPA audit work program operates within a layered regulatory hierarchy. Each layer constrains the one below it — the AWP tests compliance at the lowest operational layer, but findings are traced back through the chain to the statutory source.

```
Personal Data Protection Act 2010 (Act 709)
  → Personal Data Protection (Amendment) Act 2024 (Act A1727)
    → Personal Data Protection Regulations 2013
      → Personal Data Protection Standards 2015
        → JPDP Guidelines
          ├── Data Protection Officer Guidelines
          ├── Data Breach Notification Guidelines
          ├── Cross-Border Data Transfer Guidelines
          ├── Data Protection by Design Guidelines
          └── Automated Decision-Making and Profiling (ADMP) Guidelines
            → Sector Codes of Practice (13 sectors)
              ├── General Code of Practice 2022
              ├── Banking & Financial Institutions
              ├── Insurance
              ├── Communications & Multimedia
              ├── Healthcare (Private)
              ├── Education (Private)
              ├── Hospitality & Tourism
              ├── Transportation
              ├── Real Estate
              ├── Direct Selling
              ├── Legal & Professional Services
              ├── Utilities
              └── Retail & E-Commerce
                → THIS AWP (fieldwork tool testing compliance)
```

**Key distinction from NACSA:** The NACSA chain flows from criminal statute (Act 854) through a single Code of Practice administered by NACSA. The PDPA chain is broader — Act 709 delegates to the Commissioner (JPDP), who issues Standards, Guidelines, and approves sector-specific Codes of Practice. An auditor must test against the Act, the applicable Standards, relevant Guidelines, AND the entity's sector Code of Practice (if gazetted).

---

## 2. The Two-Scope Model

Like the NACSA work program (which distinguishes Organisation-level vs NCII-System-level controls), the PDPA AWP operates on a two-scope model adapted for data protection:

### Organisation-Level Controls (Scope: Org)

Tested **once per entity**. These are structural, governance, and enterprise-wide controls:

- DPO appointment, qualifications, and reporting line (s12A/s129B)
- Data protection governance framework, policy, and committee
- Staff training and awareness programme
- Data controller registration with Commissioner (s13-s16A)
- Internal audit and compliance monitoring programme
- Board reporting and accountability mechanisms
- Breach notification procedure (organisational readiness)
- Cross-border transfer framework and policy
- Processor management framework and standard contract terms
- Regulatory inspection readiness

### Processing-Activity-Level Controls (Scope: PA)

Tested **per processing activity** as identified in the ROPA. These are operational controls where compliance depends on how each specific processing activity is managed:

- Consent obtained per processing purpose, per collection channel
- Privacy notice delivered per data collection touchpoint
- Retention period applied per data category / processing purpose
- Cross-border transfer mechanism per transfer flow
- DPIA completed per high-risk processing activity
- Data accuracy controls per data set
- Purpose limitation enforcement per processing activity
- Data minimisation at collection per form/channel

### The Data Processing Activity Register (ROPA) as Spine

The **Record of Processing Activities (ROPA)** is the spine of the PDPA audit workbook, equivalent to NACSA's NCII System Register. Every processing-activity-level test is anchored to a ROPA entry. Without a complete ROPA, the auditor cannot determine the population of processing activities to be tested.

The ROPA must contain, at minimum:
- Processing activity name and description
- Categories of data subjects
- Categories of personal data (including sensitive personal data flag)
- Processing purpose(s) and lawful basis
- Data recipients (internal, external, cross-border)
- Retention period and disposal mechanism
- Technical and organisational security measures
- Cross-border transfer indicator and destination country

**Sampling approach:** For entities with more than 20 processing activities, the auditor applies risk-based sampling (all high-risk activities + representative sample of standard activities). For entities with 20 or fewer, full-population testing is expected.

---

## 3. Legal Overlay — Penalty and Enforcement Framework

### Nature of Liability

Unlike NACSA (which is primarily criminal under Act 854), the PDPA enforcement regime is **civil/administrative with criminal backstops**. The Commissioner issues enforcement and cessation notices; failure to comply is a criminal offence. The 2024 Amendment Act (A1727) significantly enhanced penalties and introduced new criminal offences.

### Key Penalty Provisions (Post-A1727)

| Provision | Offence | Fine | Imprisonment | Notes |
| :--- | :--- | :--- | :--- | :--- |
| s5(2) | General non-compliance with data protection principles | RM300,000 | 2 years | Catch-all for principle breaches |
| s12B | Failure to notify Commissioner of data breach within 72 hours | RM500,000 | 3 years | **New under A1727** — highest penalty tier |
| s16A | Processing personal data without certificate of registration | RM250,000 | — | **New under A1727** |
| s108 | Failure to comply with enforcement notice | RM500,000 | 2 years | Commissioner's primary enforcement tool |
| s109 | Failure to comply with cessation notice | RM500,000 | 2 years | Commissioner can halt processing entirely |
| s130 | Obstruction of Commissioner or authorised officers | RM500,000 | 2 years | Covers inspections, audits, investigations |
| s133A | Director/officer liability | Same as body corporate | Same as body corporate | **New under A1727** — where offence committed with consent, connivance, or neglect of director |
| s43 | Processing for direct marketing after opt-out | RM200,000 | 1.5 years | Specific to direct marketing violations |

### Director Liability (s133A)

A1727 introduced s133A, equivalent to NACSA's s52 concept. Where an offence is committed by a body corporate with the **consent, connivance, or neglect** of a director, manager, secretary, or similar officer, that individual is personally liable to the same penalties. This transforms data protection from a "corporate fine" issue into a **personal criminal liability** issue for the board and senior management.

The AWP tests for:
- Board-level awareness of personal liability under s133A
- Documented evidence of board oversight (minutes, reports, approvals)
- Escalation procedures that provide directors with decision-making information
- D&O insurance coverage for data protection liability

### Breach Notification (s12B)

The 72-hour notification obligation under s12B is mandatory and non-negotiable:
- **Trigger:** Any data breach as defined in s2 (accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access)
- **Deadline:** 72 hours from discovery to notification to Commissioner
- **Channel:** Via JPDP prescribed form (anticipated digital portal)
- **Content:** Nature of breach, categories and approximate numbers affected, likely consequences, measures taken/proposed
- **Data subject notification:** Where breach likely to result in significant harm, the data controller must also notify affected data subjects

---

## 4. Control-to-Requirement Mapping

### Summary Distribution

| Domain | Controls | Requirements | Ratio | Critical | Standard | Conditional |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 1. Consent Management | 5 | 13 | 2.6:1 | 3 | 8 | 2 |
| 2. Data Subject Rights | 6 | 14 | 2.3:1 | 2 | 10 | 2 |
| 3. Notice and Transparency | 4 | 10 | 2.5:1 | 1 | 7 | 2 |
| 4. Data Security | 7 | 18 | 2.6:1 | 3 | 13 | 2 |
| 5. Data Lifecycle | 5 | 12 | 2.4:1 | 1 | 9 | 2 |
| 6. Breach Response | 4 | 12 | 3.0:1 | 3 | 9 | 0 |
| 7. Cross-Border Transfer | 4 | 10 | 2.5:1 | 2 | 6 | 2 |
| 8. Third-Party Management | 4 | 10 | 2.5:1 | 1 | 7 | 2 |
| 9. Governance and Accountability | 6 | 14 | 2.3:1 | 2 | 12 | 0 |
| 10. Registration and Compliance | 4 | 7 | 1.8:1 | 1 | 5 | 1 |
| **Total** | **49** | **120** | **2.4:1** | **19** | **86** | **15** |

### Risk Tier Definitions

| Tier | Count | Criteria | Consequence of Failure |
| :--- | :---: | :--- | :--- |
| **Critical** | 19 | Directly tied to a specific penalty provision; failure triggers mandatory enforcement | Enforcement notice, criminal liability, or s133A director exposure |
| **Standard** | 86 | Required by Act, Standards, or Guidelines; failure creates compliance gap | Audit finding, remediation required, potential enforcement escalation |
| **Conditional** | 15 | Applies only to entities meeting specific criteria (sector, data type, transfer activity) | N/A if condition not met; Standard-equivalent if triggered |

---

## 5. Full Mapping: Control to AWP Requirements

### Domain 1: Consent Management (5 controls, 13 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Consent Collection Mechanism | `consent-collection-mechanism` | 3 | Critical / Standard |
| Consent Record-Keeping | `consent-record-keeping` | 3 | Standard |
| Consent Withdrawal Management | `consent-withdrawal-management` | 2 | Standard |
| Sensitive Data Explicit Consent | `sensitive-data-explicit-consent` | 3 | Critical / Conditional |
| Consent Validity Assessment | `consent-validity-assessment` | 2 | Standard |

---

**consent-collection-mechanism** — Consent Collection Mechanism

- **DPA-REQ-001:** Verify consent collection mechanisms exist for every processing purpose listed in the ROPA — each purpose has a corresponding consent touchpoint with evidence of affirmative action (no pre-ticked boxes, no bundled consent). Scope: PA. Risk: **Critical**.
- **DPA-REQ-002:** Confirm consent forms and digital flows incorporate all s7 notice elements (identity of data controller, purpose, class of third parties, right of access/correction, consequences of refusal, inquiry contacts). Scope: PA. Risk: **Standard**.
- **DPA-REQ-003:** Validate that consent mechanisms comply with PDPA s2 definition — freely given, specific, informed, and unambiguous — by reviewing a sample of consent interfaces across channels (web, app, physical forms, call centre scripts). Scope: PA. Risk: **Standard**.

---

**consent-record-keeping** — Consent Record-Keeping and Evidence Management

- **DPA-REQ-004:** Inspect consent records for completeness — each record must link to data subject identity, processing purpose, timestamp, collection channel, and the version of privacy notice presented at time of consent. Scope: PA. Risk: **Standard**.
- **DPA-REQ-005:** Verify consent records are retained for the duration of the processing activity plus any applicable limitation period, with tamper-evident controls (audit trail, immutability, or cryptographic integrity). Scope: Org. Risk: **Standard**.
- **DPA-REQ-006:** Test consent record retrieval capability — can the organisation produce the consent evidence for a specific data subject within a reasonable timeframe (target: within 7 days, aligned to DSAR response capability). Scope: Org. Risk: **Standard**.

---

**consent-withdrawal-management** — Consent Withdrawal Management

- **DPA-REQ-007:** Confirm withdrawal mechanisms are available on every channel through which consent was originally collected (s38 principle of equivalent ease), and withdrawal requests are acknowledged and actioned within 14 days. Scope: PA. Risk: **Standard**.
- **DPA-REQ-008:** Verify that upon consent withdrawal, processing ceases for the relevant purpose, downstream processors and third-party recipients are notified, and the withdrawal is recorded in the consent register with effective date. Scope: PA. Risk: **Standard**.

---

**sensitive-data-explicit-consent** — Sensitive Personal Data Explicit Consent Control

- **DPA-REQ-009:** Identify all processing activities involving sensitive personal data (health, political opinions, religious beliefs, criminal offences, biometric data per A1727 expansion). Verify explicit consent has been obtained separately from general consent, with the sensitive data categories clearly identified to the data subject. Scope: PA. Risk: **Critical**.
- **DPA-REQ-010:** Confirm that no sensitive personal data is processed under implied or bundled consent — each instance must show documented, affirmative, purpose-specific explicit consent. Scope: PA. Risk: **Standard**.
- **DPA-REQ-011:** For healthcare, insurance, and HR processing activities involving sensitive data, verify sector-specific Code of Practice requirements are met in addition to Act 709 baseline. Scope: PA. Risk: **Conditional** (sector-dependent).

---

**consent-validity-assessment** — Consent Validity Assessment and Remediation

- **DPA-REQ-012:** Review the organisation's periodic consent validity assessment process — are existing consents reviewed against current notice content, processing purposes, and legal requirements at least annually? Identify stale or invalid consents. Scope: Org. Risk: **Standard**.
- **DPA-REQ-013:** Where consent was obtained prior to A1727 amendments, verify a gap assessment has been conducted against the new s2 definition of consent (freely given, specific, informed, unambiguous) and remediation plan exists for non-conforming consents. Scope: Org. Risk: **Standard**.

---

### Domain 2: Data Subject Rights (6 controls, 14 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| DSAR Intake and Verification | `dsar-intake-and-verification` | 2 | Standard |
| Access Request Fulfilment | `access-request-fulfillment` | 3 | Critical / Standard |
| Correction Request Handling | `correction-request-handling` | 2 | Standard |
| Direct Marketing Opt-Out | `direct-marketing-opt-out` | 3 | Critical / Standard |
| DSAR Deadline Management | `dsar-deadline-management` | 2 | Standard |
| Rights Awareness Communication | `rights-awareness-communication` | 2 | Standard / Conditional |

---

**dsar-intake-and-verification** — Data Subject Rights Request Intake and Identity Verification

- **DPA-REQ-014:** Verify the organisation has a documented DSAR intake procedure accessible to data subjects, with clear channels (online form, email, physical office), published on the privacy notice and website. Scope: Org. Risk: **Standard**.
- **DPA-REQ-015:** Confirm identity verification procedures exist for DSAR requesters — proportionate to the sensitivity of the data, not so burdensome as to discourage exercise of rights, and compliant with any JPDP guidance. Scope: Org. Risk: **Standard**.

---

**access-request-fulfillment** — Data Subject Access Request Fulfilment

- **DPA-REQ-016:** Test access request fulfilment against s30-s33 requirements — confirm the organisation can produce a copy of the data subject's personal data being processed, the purposes of processing, and any recipients within 21 days of request (or such period prescribed by regulations). Scope: Org. Risk: **Critical**.
- **DPA-REQ-017:** Verify the prescribed fee (if any) does not exceed the amount set by the Commissioner, and the organisation does not impose unreasonable conditions on access. Scope: Org. Risk: **Standard**.
- **DPA-REQ-018:** Where an access request is refused (s32 exemptions), confirm the refusal is documented with the specific statutory ground relied upon and the data subject is informed of the right to complain to the Commissioner. Scope: Org. Risk: **Standard**.

---

**correction-request-handling** — Data Correction Request Handling

- **DPA-REQ-019:** Verify correction request procedures comply with s34-s36 — requests are actioned within 14 days, corrections are propagated to all systems holding the data, and the data subject is informed of the outcome. Scope: Org. Risk: **Standard**.
- **DPA-REQ-020:** Where a correction request is refused, confirm the organisation records the data subject's statement of disagreement alongside the data (s35) and notifies any third party to whom the data was disclosed in the preceding 12 months. Scope: Org. Risk: **Standard**.

---

**direct-marketing-opt-out** — Direct Marketing Opt-Out Management

- **DPA-REQ-021:** Verify the organisation provides a clear and free opt-out mechanism for direct marketing on every marketing communication, and processes opt-out requests without delay (s43 — processing for direct marketing after opt-out is an offence: RM200,000 / 1.5 years). Scope: PA. Risk: **Critical**.
- **DPA-REQ-022:** Confirm suppression lists are maintained and synchronised across all marketing channels (email, SMS, phone, postal, digital advertising) — a data subject who opts out on one channel must not receive marketing on any channel. Scope: Org. Risk: **Standard**.
- **DPA-REQ-023:** Test suppression list effectiveness — select a sample of recent opt-out requests and verify no subsequent marketing was sent to those data subjects. Scope: PA. Risk: **Standard**.

---

**dsar-deadline-management** — DSAR Deadline and Escalation Management

- **DPA-REQ-024:** Verify the organisation tracks all DSARs in a central register or case management system, with received date, statutory deadline, assigned handler, current status, and completion date. Scope: Org. Risk: **Standard**.
- **DPA-REQ-025:** Review DSAR completion rates — confirm all requests in the sample period were responded to within statutory deadlines (21 days for access, 14 days for correction), with escalation procedures triggered for requests at risk of breach. Scope: Org. Risk: **Standard**.

---

**rights-awareness-communication** — Data Subject Rights Awareness Communication

- **DPA-REQ-026:** Verify the organisation proactively communicates data subject rights (access, correction, withdrawal, opt-out) via privacy notices, website, and customer-facing materials in Bahasa Malaysia and English. Scope: Org. Risk: **Standard**.
- **DPA-REQ-027:** For sector-specific entities (e.g., financial services, healthcare), confirm that sector Code of Practice requirements for rights communication are met, including any additional rights or enhanced communication obligations. Scope: Org. Risk: **Conditional** (sector-dependent).

---

### Domain 3: Notice and Transparency (4 controls, 10 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Privacy Notice Design | `privacy-notice-design` | 3 | Critical / Standard |
| Notice Delivery Mechanism | `notice-delivery-mechanism` | 3 | Standard / Conditional |
| Notice Review Cycle | `notice-review-cycle` | 2 | Standard |
| CCTV and Monitoring Disclosure | `cctv-and-monitoring-disclosure` | 2 | Standard / Conditional |

---

**privacy-notice-design** — Privacy Notice Design and Content Compliance

- **DPA-REQ-028:** Verify the organisation's privacy notice(s) contain all mandatory elements prescribed by s7: identity of data controller, purposes of processing, class of third parties to whom data may be disclosed, right of access and correction, choice to limit processing, consequences of failure to supply data, and inquiry/complaint contact. Scope: PA. Risk: **Critical**.
- **DPA-REQ-029:** Confirm the notice is written in clear, plain language accessible to the target audience — no excessive legal jargon — and is available in both Bahasa Malaysia and English where the data subject population warrants it. Scope: Org. Risk: **Standard**.
- **DPA-REQ-030:** Verify that separate or supplemental notices are provided for distinct processing contexts (e.g., employee notice, customer notice, website notice, vendor notice) rather than a single generic notice covering all contexts. Scope: PA. Risk: **Standard**.

---

**notice-delivery-mechanism** — Privacy Notice Delivery and Accessibility

- **DPA-REQ-031:** Verify the notice is delivered before or at the point of personal data collection across all channels — website forms, mobile apps, physical counters, call centres, and third-party collection agents. Scope: PA. Risk: **Standard**.
- **DPA-REQ-032:** Confirm notice delivery is evidenced and auditable — digital channels record notice version and timestamp of presentation; physical channels retain signed acknowledgement or equivalent. Scope: PA. Risk: **Standard**.
- **DPA-REQ-033:** For organisations processing children's data, verify enhanced notice and consent mechanisms are in place, including parental/guardian notification where applicable under sector Codes of Practice. Scope: PA. Risk: **Conditional** (if processing children's data).

---

**notice-review-cycle** — Privacy Notice Review and Update Cycle

- **DPA-REQ-034:** Verify the organisation has a defined review cycle for privacy notices (minimum annual, plus triggered review when processing activities, purposes, or third-party disclosures change). Scope: Org. Risk: **Standard**.
- **DPA-REQ-035:** Confirm that when a privacy notice is materially updated, affected data subjects are notified of the changes and given the opportunity to exercise their rights (withdrawal, access, correction) under the revised notice. Scope: Org. Risk: **Standard**.

---

**cctv-and-monitoring-disclosure** — CCTV and Monitoring Disclosure

- **DPA-REQ-036:** Where the organisation operates CCTV, employee monitoring, or vehicle tracking, verify that clear signage is posted at all monitored locations and a supplemental privacy notice describing the monitoring is accessible. Scope: Org. Risk: **Standard**.
- **DPA-REQ-037:** For employee monitoring (email, internet, device, location), verify the employee privacy notice explicitly discloses the nature and extent of monitoring, and employees have acknowledged receipt. Scope: Org. Risk: **Conditional** (if employee monitoring in place).

---

### Domain 4: Data Security (7 controls, 18 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Information Security Risk Management | `information-security-risk-management` | 3 | Standard |
| Access Control and Identity Management | `access-control-and-identity-management` | 3 | Standard |
| Encryption and Data Protection | `encryption-and-data-protection-in-transit-at-rest` | 3 | Critical / Standard |
| Vulnerability and Patch Management | `vulnerability-and-patch-management` | 2 | Standard |
| Security Monitoring and SIEM | `security-monitoring-and-siem` | 3 | Critical / Standard |
| Physical Security Controls | `physical-security-controls` | 2 | Standard / Conditional |
| Data Loss Prevention | `data-loss-prevention` | 2 | Critical / Standard |

---

**information-security-risk-management** — Information Security Risk Management

- **DPA-REQ-038:** Verify the organisation has established an information security risk management framework that specifically addresses personal data processing risks, aligned with PDPA s9 (Security Principle) and the Personal Data Protection Standards 2015. Scope: Org. Risk: **Standard**.
- **DPA-REQ-039:** Confirm a risk assessment has been conducted covering all systems processing personal data, with identified threats, vulnerabilities, likelihood, impact, and risk treatment decisions. Scope: Org. Risk: **Standard**.
- **DPA-REQ-040:** Verify risk assessments are reviewed at least annually and upon material changes to processing activities, systems, or threat landscape. Scope: Org. Risk: **Standard**.

---

**access-control-and-identity-management** — Access Control and Identity Management

- **DPA-REQ-041:** Verify access to personal data is restricted on a need-to-know and least-privilege basis, with role-based access controls (RBAC) aligned to the purposes specified in the ROPA. Scope: PA. Risk: **Standard**.
- **DPA-REQ-042:** Confirm user access provisioning, modification, and deprovisioning procedures are documented and enforced — including timely revocation upon termination, role change, or contract expiry. Scope: Org. Risk: **Standard**.
- **DPA-REQ-043:** Verify periodic access reviews are conducted (minimum quarterly for sensitive personal data systems, semi-annually for others), with evidence of review outcomes and remediation of excessive access. Scope: PA. Risk: **Standard**.

---

**encryption-and-data-protection-in-transit-at-rest** — Encryption and Data Protection In-Transit and At-Rest

- **DPA-REQ-044:** Verify personal data is encrypted at rest using industry-standard algorithms (AES-256 or equivalent) for all storage locations — databases, file servers, backups, removable media, cloud storage. Scope: PA. Risk: **Critical**.
- **DPA-REQ-045:** Confirm personal data in transit is protected using TLS 1.2+ or equivalent for all transmission channels — API calls, email (where containing personal data), file transfers, and inter-system communications. Scope: PA. Risk: **Standard**.
- **DPA-REQ-046:** Verify encryption key management practices — key generation, storage, rotation, and destruction follow established standards (e.g., NIST SP 800-57), with separation of duties between key custodians and data administrators. Scope: Org. Risk: **Standard**.

---

**vulnerability-and-patch-management** — Vulnerability and Patch Management

- **DPA-REQ-047:** Verify the organisation has a vulnerability management programme covering all systems that process personal data, with defined severity-to-SLA mapping and regular scanning cadence. Scope: Org. Risk: **Standard**.
- **DPA-REQ-048:** Confirm patch compliance for systems processing personal data — review patch status against SLA (critical: 14 days, high: 30 days, medium: 90 days) and document any accepted exceptions with compensating controls. Scope: PA. Risk: **Standard**.

---

**security-monitoring-and-siem** — Security Monitoring and Incident Detection

- **DPA-REQ-049:** Verify security monitoring covers systems processing personal data — log sources include authentication events, access to personal data stores, administrative actions, and data extraction/export activities. Scope: PA. Risk: **Critical**.
- **DPA-REQ-050:** Confirm alert rules are configured to detect indicators of personal data breach — bulk data access, unusual download patterns, privilege escalation on personal data systems, and after-hours access anomalies. Scope: PA. Risk: **Standard**.
- **DPA-REQ-051:** Verify log retention meets both operational needs and evidentiary requirements for breach investigation and regulatory response (minimum 12 months online, 24 months archived). Scope: Org. Risk: **Standard**.

---

**physical-security-controls** — Physical Security Controls for Personal Data

- **DPA-REQ-052:** Verify physical access controls protect areas where personal data is processed or stored — server rooms, filing areas, reception/counter areas, print rooms — with access restricted to authorised personnel. Scope: Org. Risk: **Standard**.
- **DPA-REQ-053:** For organisations processing personal data in physical form (paper records, forms, printed reports), verify secure storage (locked cabinets, clean desk policy) and controlled disposal (cross-cut shredding, certified destruction). Scope: Org. Risk: **Conditional** (if physical records exist).

---

**data-loss-prevention** — Data Loss Prevention (DLP)

- **DPA-REQ-054:** Verify DLP controls are implemented to prevent unauthorised extraction, transmission, or copying of personal data — covering email, web, USB/removable media, cloud uploads, and screen capture/print where risk-appropriate. Scope: PA. Risk: **Critical**.
- **DPA-REQ-055:** Confirm DLP policies are aligned to the organisation's data classification scheme and ROPA — rules target personal data and sensitive personal data categories specifically, not just generic patterns. Scope: Org. Risk: **Standard**.

---

### Domain 5: Data Lifecycle (5 controls, 12 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Data Minimisation at Collection | `data-minimisation-control` | 2 | Standard |
| Retention Schedule Management | `retention-schedule-management` | 3 | Standard |
| Secure Data Disposal | `secure-data-disposal` | 3 | Standard |
| Data Accuracy and Quality | `data-accuracy-and-quality` | 2 | Standard / Conditional |
| Purpose Limitation Enforcement | `purpose-limitation-enforcement` | 2 | Standard |

---

**data-minimisation-control** — Data Minimisation at Collection

- **DPA-REQ-056:** Review a sample of data collection forms/interfaces against the stated processing purpose — verify that only personal data that is necessary for the specified purpose is collected (no excessive fields, no optional fields that serve unstated purposes). Scope: PA. Risk: **Standard**.
- **DPA-REQ-057:** Verify the organisation has a process for reviewing data collection forms when new processing activities are introduced or existing ones change — ensuring minimisation is assessed as part of privacy by design. Scope: Org. Risk: **Standard**.

---

**retention-schedule-management** — Retention Schedule Management and Enforcement

- **DPA-REQ-058:** Verify the organisation maintains a data retention schedule that specifies retention periods for each category of personal data, linked to processing purposes and statutory requirements (s10 Retention Principle — data shall not be kept longer than necessary). Scope: Org. Risk: **Standard**.
- **DPA-REQ-059:** Confirm retention periods are based on documented justifications — legal requirement, contractual obligation, operational necessity, or legitimate business purpose — not indefinite or default "keep forever" policies. Scope: PA. Risk: **Standard**.
- **DPA-REQ-060:** Test enforcement of retention schedules — select a sample of processing activities past their retention period and verify personal data has been disposed of or anonymised in accordance with the schedule. Scope: PA. Risk: **Standard**.

---

**secure-data-disposal** — Secure Data Disposal

- **DPA-REQ-061:** Verify the organisation has documented procedures for secure disposal of personal data in all formats — electronic (cryptographic erasure, secure overwrite, physical destruction of media) and physical (cross-cut shredding, certified destruction). Scope: Org. Risk: **Standard**.
- **DPA-REQ-062:** Confirm disposal records are maintained — what data was disposed of, when, by what method, by whom, and certificate of destruction from third-party disposal providers where applicable. Scope: Org. Risk: **Standard**.
- **DPA-REQ-063:** Verify disposal extends to all copies — backups, archives, replicated databases, disaster recovery sites, and processor-held copies are included in the disposal scope with confirmation from processors. Scope: PA. Risk: **Standard**.

---

**data-accuracy-and-quality** — Data Accuracy and Quality Management

- **DPA-REQ-064:** Verify the organisation has controls to ensure personal data is accurate, complete, not misleading, and kept up to date as required by s11 (Data Integrity Principle). Review procedures for data quality checks at collection and during processing. Scope: PA. Risk: **Standard**.
- **DPA-REQ-065:** For organisations in regulated sectors (banking, healthcare, insurance) where data accuracy has direct impact on decisions affecting data subjects, verify enhanced data quality controls are in place per the applicable sector Code of Practice. Scope: PA. Risk: **Conditional** (sector-dependent).

---

**purpose-limitation-enforcement** — Purpose Limitation Enforcement

- **DPA-REQ-066:** Verify the organisation processes personal data only for the purposes stated in the privacy notice at the time of collection (s6 General Principle). Test a sample of processing activities against the corresponding notice to confirm no purpose creep. Scope: PA. Risk: **Standard**.
- **DPA-REQ-067:** Where the organisation wishes to process personal data for a new purpose not covered by the original notice, verify that fresh consent is obtained or a valid statutory exception applies, and the notice is updated accordingly. Scope: PA. Risk: **Standard**.

---

### Domain 6: Breach Response (4 controls, 12 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Breach Detection and Triage | `breach-detection-and-triage` | 3 | Critical / Standard |
| Mandatory Breach Notification to Commissioner | `breach-notification-to-commissioner` | 4 | Critical / Standard |
| Breach Containment and Remediation | `breach-containment-and-remediation` | 3 | Standard |
| Data Subject Breach Notification | `data-subject-breach-notification` | 2 | Standard |

---

**breach-detection-and-triage** — Data Breach Detection and Triage

- **DPA-REQ-068:** Verify the organisation has a documented data breach response procedure that defines what constitutes a data breach (aligned with s2 definition), roles and responsibilities, escalation paths, and decision criteria for notification. Scope: Org. Risk: **Critical**.
- **DPA-REQ-069:** Confirm breach detection capabilities exist — security monitoring alerts, employee reporting channels, third-party/processor notification obligations, and data subject complaint mechanisms are all feeding into the breach triage process. Scope: Org. Risk: **Standard**.
- **DPA-REQ-070:** Verify the breach triage process includes a severity assessment methodology — categorising breaches by type (confidentiality, integrity, availability), volume of data subjects affected, sensitivity of data, and likelihood of harm to data subjects. Scope: Org. Risk: **Standard**.

---

**breach-notification-to-commissioner** — Mandatory Breach Notification to Commissioner

- **DPA-REQ-071:** Verify the organisation can notify the Commissioner within 72 hours of becoming aware of a data breach (s12B). Test the operational readiness: who authorises notification, through what channel, using what template, with what information. Scope: Org. Risk: **Critical**.
- **DPA-REQ-072:** Confirm the notification content meets s12B requirements: nature of the breach, categories and approximate number of data subjects affected, categories of personal data records concerned, likely consequences of the breach, and measures taken or proposed to address the breach. Scope: Org. Risk: **Critical**.
- **DPA-REQ-073:** Where previous breaches have occurred, review the breach register to verify notifications were submitted within the 72-hour window and contained all required information. Where no breaches have occurred, verify readiness via tabletop exercise or simulation evidence. Scope: Org. Risk: **Standard**.
- **DPA-REQ-074:** Verify the organisation maintains a breach register recording all breaches (notifiable and non-notifiable), with details of the breach, assessment outcome, notification decision rationale, and evidence of notification where applicable. Scope: Org. Risk: **Standard**.

---

**breach-containment-and-remediation** — Breach Containment and Remediation

- **DPA-REQ-075:** Verify the organisation's breach procedure includes containment actions — immediate steps to stop the breach, preserve evidence, isolate affected systems, and prevent recurrence. Scope: Org. Risk: **Standard**.
- **DPA-REQ-076:** Confirm post-breach remediation is conducted — root cause analysis, remediation actions, timeline for implementation, and lessons learned incorporated into policies, procedures, and training. Scope: Org. Risk: **Standard**.
- **DPA-REQ-077:** Verify that breach investigation findings are reported to senior management and (where applicable to s133A director liability) to the board, with documented evidence of management review and sign-off on remediation actions. Scope: Org. Risk: **Standard**.

---

**data-subject-breach-notification** — Data Subject Breach Notification

- **DPA-REQ-078:** Verify the organisation has procedures for notifying affected data subjects where a breach is likely to result in significant harm — notification must include the nature of the breach, contact information for inquiries, and steps the data subject can take to protect themselves. Scope: Org. Risk: **Standard**.
- **DPA-REQ-079:** Confirm the data subject notification is delivered without undue delay after Commissioner notification, using appropriate channels to reach affected individuals (direct communication, not just website notice). Scope: Org. Risk: **Standard**.

---

### Domain 7: Cross-Border Transfer (4 controls, 10 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Transfer Identification and Mapping | `transfer-identification-and-mapping` | 3 | Critical / Standard |
| Transfer Mechanism Selection | `transfer-mechanism-selection` | 3 | Critical / Standard |
| Transfer Impact Assessment | `transfer-impact-assessment` | 2 | Standard / Conditional |
| Cross-Border Transfer Monitoring | `cross-border-transfer-monitoring` | 2 | Standard |

---

**transfer-identification-and-mapping** — Cross-Border Transfer Identification and Mapping

- **DPA-REQ-080:** Verify the organisation has identified and mapped all cross-border transfers of personal data (s129 — no transfer outside Malaysia unless to a country specified by the Minister, or unless an exception applies). Map must identify destination country, recipient, transfer mechanism, data categories, and volume. Scope: Org. Risk: **Critical**.
- **DPA-REQ-081:** Confirm the transfer map covers all transfer types — direct transfers to overseas group companies, cloud storage in foreign jurisdictions, third-party processors operating offshore, and remote access by overseas personnel. Scope: PA. Risk: **Standard**.
- **DPA-REQ-082:** Verify the transfer map is maintained as part of or cross-referenced to the ROPA, and is updated when new processing activities, processors, or cloud services are introduced. Scope: Org. Risk: **Standard**.

---

**transfer-mechanism-selection** — Transfer Mechanism Selection and Implementation

- **DPA-REQ-083:** For each identified cross-border transfer, verify the organisation has selected and implemented a valid transfer mechanism under s129: (a) transfer to a country specified by the Minister, (b) data subject consent, (c) performance of a contract, (d) legal proceedings, (e) protection of vital interests, (f) public register, (g) binding corporate rules, or (h) standard contractual clauses. Scope: PA. Risk: **Critical**.
- **DPA-REQ-084:** Where the transfer mechanism is consent, verify the consent meets PDPA requirements — specific to the cross-border transfer, informed of the destination country and recipient, and not bundled with other consents. Scope: PA. Risk: **Standard**.
- **DPA-REQ-085:** Where the transfer mechanism is contractual (standard contractual clauses or BCRs), verify the clauses are executed, current, and include PDPA-specific obligations (security standards, breach notification, sub-processor restrictions, audit rights). Scope: PA. Risk: **Standard**.

---

**transfer-impact-assessment** — Transfer Impact Assessment (TIA)

- **DPA-REQ-086:** Verify the organisation conducts transfer impact assessments for transfers to countries not specified by the Minister — assessing the adequacy of the destination country's data protection law and the effectiveness of supplementary measures. Scope: PA. Risk: **Standard**.
- **DPA-REQ-087:** For transfers to jurisdictions with government surveillance risks (as identified by international assessments), verify supplementary measures (encryption, pseudonymisation, contractual restrictions on government disclosure) are implemented and documented. Scope: PA. Risk: **Conditional** (high-risk jurisdiction transfers only).

---

**cross-border-transfer-monitoring** — Ongoing Cross-Border Transfer Monitoring

- **DPA-REQ-088:** Verify the organisation monitors cross-border transfer compliance on an ongoing basis — reviewing transfer volumes, recipient compliance, regulatory developments in destination countries, and any incidents or complaints related to transferred data. Scope: Org. Risk: **Standard**.
- **DPA-REQ-089:** Confirm the organisation has a procedure for suspending or rerouting transfers if a destination country's adequacy status changes, a transfer mechanism becomes invalid, or a recipient fails to meet contractual obligations. Scope: Org. Risk: **Standard**.

---

### Domain 8: Third-Party Management (4 controls, 10 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Processor Due Diligence | `processor-due-diligence` | 3 | Critical / Standard |
| Data Processing Agreement Management | `data-processing-agreement-management` | 3 | Standard |
| Processor Oversight and Audit | `processor-oversight-and-audit` | 2 | Standard |
| Processor Offboarding | `processor-offboarding` | 2 | Standard / Conditional |

---

**processor-due-diligence** — Data Processor Due Diligence

- **DPA-REQ-090:** Verify the organisation conducts due diligence on data processors before engagement — assessing the processor's technical and organisational security measures, data protection policies, certifications (ISO 27001, SOC 2), and track record. Scope: Org. Risk: **Critical**.
- **DPA-REQ-091:** Confirm due diligence is proportionate to the risk — processors handling sensitive personal data, large volumes, or cross-border transfers receive enhanced assessment, while low-risk processors follow a streamlined process. Scope: PA. Risk: **Standard**.
- **DPA-REQ-092:** Verify due diligence is refreshed periodically (minimum annually for high-risk processors) and triggered by material changes to the processor's operations, security posture, or sub-processor arrangements. Scope: Org. Risk: **Standard**.

---

**data-processing-agreement-management** — Data Processing Agreement Lifecycle Management

- **DPA-REQ-093:** Verify all data processors have executed a data processing agreement (DPA) that includes PDPA-specific provisions: processing only on documented instructions, confidentiality obligations, security measures (s9), sub-processor restrictions, assistance with DSAR fulfilment, breach notification to the controller, data return/deletion on termination, and audit rights. Scope: PA. Risk: **Standard**.
- **DPA-REQ-094:** Confirm DPA inventory is complete — cross-reference the processor register against the ROPA to identify any processing activities involving third-party processors without a DPA in place. Scope: Org. Risk: **Standard**.
- **DPA-REQ-095:** Verify DPAs are reviewed and updated when processing scope changes, when applicable law or guidelines change (e.g., A1727 amendments), or upon DPA expiry/renewal. Scope: Org. Risk: **Standard**.

---

**processor-oversight-and-audit** — Ongoing Processor Oversight and Audit

- **DPA-REQ-096:** Verify the organisation conducts ongoing oversight of data processors — reviewing processor compliance reports, security certifications, breach notification records, and sub-processor changes at defined intervals. Scope: Org. Risk: **Standard**.
- **DPA-REQ-097:** Confirm the organisation exercises its contractual audit rights — either through direct audit, independent third-party audit, or reliance on processor-provided assurance reports (SOC 2 Type II, ISO 27001 surveillance audit) at least annually for high-risk processors. Scope: PA. Risk: **Standard**.

---

**processor-offboarding** — Data Processor Offboarding and Data Return

- **DPA-REQ-098:** Verify the organisation has a documented processor offboarding procedure — covering data return, data deletion confirmation, certificate of destruction, revocation of system access, and decommissioning of integration points. Scope: Org. Risk: **Standard**.
- **DPA-REQ-099:** Where a processor has been offboarded in the audit period, verify the offboarding procedure was followed — data return/deletion confirmed, access revoked, and certification obtained within the timeframe specified in the DPA. Scope: PA. Risk: **Conditional** (if offboarding occurred).

---

### Domain 9: Governance and Accountability (6 controls, 14 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| DPO Appointment and Functions | `dpo-appointment-and-functions` | 3 | Critical / Standard |
| Privacy Policy Management | `privacy-policy-management` | 2 | Standard |
| Staff Training and Awareness | `staff-training-and-awareness` | 3 | Standard |
| Privacy by Design and Default | `privacy-by-design-and-default` | 2 | Standard |
| Compliance Monitoring and Audit | `compliance-monitoring-and-audit` | 2 | Standard |
| Board Reporting and Accountability | `board-reporting-and-accountability` | 2 | Standard |

---

**dpo-appointment-and-functions** — Data Protection Officer Appointment and Functions

- **DPA-REQ-100:** Verify a Data Protection Officer has been appointed pursuant to s12A/s129B, with documented appointment letter specifying functions, authority, resources, and reporting line. The DPO must have appropriate qualifications and knowledge of data protection law and practice. Scope: Org. Risk: **Critical**.
- **DPA-REQ-101:** Confirm the DPO functions are being performed in practice — advising on PDPA obligations, monitoring compliance, conducting or overseeing DPIAs, acting as contact point for the Commissioner and data subjects, and reporting to senior management. Scope: Org. Risk: **Standard**.
- **DPA-REQ-102:** Verify the DPO has independence (not dismissed or penalised for performing functions), adequate resources (budget, tools, team support), and direct access to senior management for escalation. Scope: Org. Risk: **Standard**.

---

**privacy-policy-management** — Privacy Policy and Procedure Management

- **DPA-REQ-103:** Verify the organisation has established and documented data protection policies and procedures covering all PDPA obligations — at minimum: consent management, DSAR handling, breach response, retention, cross-border transfer, processor management, and data security. Scope: Org. Risk: **Standard**.
- **DPA-REQ-104:** Confirm policies are approved by senior management, communicated to all employees and relevant third parties, and reviewed at least annually with version control and change log maintained. Scope: Org. Risk: **Standard**.

---

**staff-training-and-awareness** — Staff Training and Awareness Programme

- **DPA-REQ-105:** Verify the organisation delivers data protection training to all employees who process personal data — covering PDPA principles, employee responsibilities, breach reporting, data subject rights, and consequences of non-compliance (including personal liability under s133A). Scope: Org. Risk: **Standard**.
- **DPA-REQ-106:** Confirm role-specific training is provided — DPO, IT security, HR, marketing, customer service, and call centre staff receive training tailored to their data processing responsibilities. Scope: Org. Risk: **Standard**.
- **DPA-REQ-107:** Verify training completion records are maintained, new employee induction includes PDPA training before access to personal data, and refresher training is delivered at least annually. Scope: Org. Risk: **Standard**.

---

**privacy-by-design-and-default** — Privacy by Design and Default

- **DPA-REQ-108:** Verify the organisation integrates privacy by design into new projects, systems, products, and processing activities — through a DPIA or privacy review process triggered at the design phase, not post-implementation. Scope: Org. Risk: **Standard**.
- **DPA-REQ-109:** Confirm privacy by default is implemented — systems and processes are configured to collect the minimum personal data necessary, apply the highest privacy settings by default, and restrict access to personal data to those who need it for the specified purpose. Scope: PA. Risk: **Standard**.

---

**compliance-monitoring-and-audit** — Compliance Monitoring and Internal Audit

- **DPA-REQ-110:** Verify the organisation conducts periodic compliance monitoring and internal audits of PDPA compliance — with a defined audit plan covering all domains, risk-based frequency, and independence of the audit function from operational processing. Scope: Org. Risk: **Standard**.
- **DPA-REQ-111:** Confirm audit findings are documented, tracked, and reported to senior management, with remediation plans assigned owners and deadlines, and follow-up verification of closure. Scope: Org. Risk: **Standard**.

---

**board-reporting-and-accountability** — Board and Senior Management Reporting and Accountability

- **DPA-REQ-112:** Verify senior management receives regular reports on data protection compliance status — at minimum semi-annually, covering: DSAR volumes and performance, breach incidents, audit findings, training completion, regulatory developments, and risk posture. Scope: Org. Risk: **Standard**.
- **DPA-REQ-113:** Confirm the board or designated committee has documented awareness of director liability under s133A and has formally accepted accountability for data protection compliance, evidenced by board minutes, terms of reference, or governance charter. Scope: Org. Risk: **Standard**.

---

### Domain 10: Registration and Regulatory Compliance (4 controls, 7 requirements)

| Control | Slug | Requirements | Risk Tier |
| :--- | :--- | :---: | :--- |
| Data Controller Registration | `data-controller-registration-management` | 2 | Critical / Standard |
| Regulatory Inspection Readiness | `regulatory-inspection-readiness` | 2 | Standard |
| Enforcement Notice Compliance | `enforcement-notice-compliance` | 2 | Standard |
| Regulatory Monitoring | `regulatory-monitoring` | 1 | Standard |

---

**data-controller-registration-management** — Data Controller Registration Management

- **DPA-REQ-114:** Verify the organisation is registered as a data controller with the Commissioner under s13-s14 (Class of Data Users registration), with a valid and current certificate of registration. Processing without registration is an offence under s16A (RM250,000). Scope: Org. Risk: **Critical**.
- **DPA-REQ-115:** Confirm registration details are accurate and up to date — changes to data controller name, address, classes of personal data processed, or purposes of processing have been notified to the Commissioner within prescribed timelines. Scope: Org. Risk: **Standard**.

---

**regulatory-inspection-readiness** — Regulatory Inspection Readiness

- **DPA-REQ-116:** Verify the organisation has designated personnel responsible for responding to Commissioner inspections or investigations, with a documented procedure covering: inspection coordination, document production, interview facilitation, and s130 obligations (non-obstruction). Scope: Org. Risk: **Standard**.
- **DPA-REQ-117:** Confirm key compliance documentation is readily accessible for production — ROPA, consent records, privacy notices, DPAs, breach register, training records, DSAR register, and audit reports. Scope: Org. Risk: **Standard**.

---

**enforcement-notice-compliance** — Enforcement Notice Compliance Management

- **DPA-REQ-118:** Where the organisation has received an enforcement notice (s108) or cessation notice (s109) during the audit period, verify the notice was complied with within the specified timeframe, with documented evidence of remediation actions taken. Scope: Org. Risk: **Standard**.
- **DPA-REQ-119:** Verify the organisation has a procedure for receiving, escalating, and responding to enforcement notices — including legal review, board notification, remediation planning, and appeal consideration within the statutory appeal period. Scope: Org. Risk: **Standard**.

---

**regulatory-monitoring** — Regulatory Monitoring and Change Management

- **DPA-REQ-120:** Verify the organisation monitors regulatory developments — new or amended JPDP guidelines, sector Codes of Practice, Ministerial orders (e.g., new countries approved for cross-border transfer under s129), Commissioner enforcement trends — and has a process for assessing impact and implementing required changes. Scope: Org. Risk: **Standard**.

---

## 6. Compliance Status Definitions

Each AWP requirement is assessed against one of four compliance statuses:

| Status | Code | Definition | Auditor Action |
| :--- | :---: | :--- | :--- |
| **Compliant** | C | The requirement is fully met — policy exists, is implemented, evidence is available, and operating effectiveness is demonstrated | Document evidence reference; no finding |
| **Partially Compliant** | PC | The requirement is partly met — framework or policy exists but implementation is incomplete, evidence is partial, or operating effectiveness has gaps | Raise finding with specific gaps identified; recommend remediation with timeline |
| **Non-Compliant** | NC | The requirement is not met — no policy, no implementation, no evidence, or material failure in operating effectiveness | Raise finding; assess penalty exposure; require immediate remediation plan |
| **Not Applicable** | NA | The requirement does not apply to this entity or processing activity — e.g., no cross-border transfers, no sensitive personal data, no CCTV | Document rationale for non-applicability; confirm with DPO |

### Escalation Thresholds

- **Any Critical requirement rated NC:** Automatic escalation to engagement partner and DPO; assess s133A director liability implications
- **3+ Standard requirements rated NC in a single domain:** Domain-level systemic finding; escalate to senior management
- **Any requirement related to s12B (breach notification) rated NC:** Assess exposure to RM500,000 / 3-year penalty; recommend immediate remediation

---

## 7. Risk Tier Distribution

### Summary

| Risk Tier | Count | Percentage |
| :--- | :---: | :---: |
| Critical | 19 | 15.8% |
| Standard | 86 | 71.7% |
| Conditional | 15 | 12.5% |
| **Total** | **120** | **100%** |

### Critical Requirements (19)

These requirements are directly tied to statutory penalty provisions and represent the highest-priority items in the AWP:

| Req | Control | Penalty Link |
| :--- | :--- | :--- |
| DPA-REQ-001 | Consent Collection Mechanism | s5(2) — RM300k / 2 years |
| DPA-REQ-009 | Sensitive Data Explicit Consent | s5(2) — RM300k / 2 years |
| DPA-REQ-016 | Access Request Fulfilment | s5(2) — RM300k / 2 years |
| DPA-REQ-021 | Direct Marketing Opt-Out | s43 — RM200k / 1.5 years |
| DPA-REQ-028 | Privacy Notice Design | s5(2) / s7 — RM300k / 2 years |
| DPA-REQ-044 | Encryption At-Rest | s9 — RM300k / 2 years |
| DPA-REQ-049 | Security Monitoring | s9 — RM300k / 2 years |
| DPA-REQ-054 | Data Loss Prevention | s9 — RM300k / 2 years |
| DPA-REQ-068 | Breach Detection Procedure | s12B — RM500k / 3 years |
| DPA-REQ-071 | 72-Hour Notification Readiness | s12B — RM500k / 3 years |
| DPA-REQ-072 | Notification Content Completeness | s12B — RM500k / 3 years |
| DPA-REQ-080 | Transfer Identification | s129 — RM300k / 2 years |
| DPA-REQ-083 | Transfer Mechanism Validity | s129 — RM300k / 2 years |
| DPA-REQ-090 | Processor Due Diligence | s9 — RM300k / 2 years |
| DPA-REQ-100 | DPO Appointment | s12A — Commissioner enforcement |
| DPA-REQ-114 | Data Controller Registration | s16A — RM250k |

Note: 3 additional Critical designations (DPA-REQ-005 consent evidence integrity, DPA-REQ-049 monitoring, DPA-REQ-054 DLP) are elevated to Critical based on their role as preconditions for breach detection — without these, the s12B notification obligation cannot be met because breaches will not be detected.

### Conditional Requirements (15)

These requirements apply only when specific conditions are met:

| Req | Condition |
| :--- | :--- |
| DPA-REQ-011 | Entity operates in healthcare, insurance, or HR sectors processing sensitive data |
| DPA-REQ-027 | Entity subject to a gazetted sector Code of Practice |
| DPA-REQ-033 | Entity processes children's personal data |
| DPA-REQ-037 | Entity conducts employee monitoring (email, internet, device, location) |
| DPA-REQ-053 | Entity processes personal data in physical form (paper records) |
| DPA-REQ-065 | Entity in regulated sector (banking, healthcare, insurance) with decision-affecting data |
| DPA-REQ-087 | Cross-border transfers to high-risk surveillance jurisdictions |
| DPA-REQ-099 | Processor offboarding occurred during audit period |
| DPA-REQ-011 | Sensitive data with sector-specific Code requirements |
| Plus 6 additional conditional requirements embedded within Standard-tier controls where sector or activity conditions gate applicability |

---

## 8. Workbook Sheet Structure (Design Specification)

The following describes the intended structure of the Excel-based audit workbook. This section is a design specification — implementation will follow in a separate deliverable.

### Sheet 1: Cover and Scope

| Field | Content |
| :--- | :--- |
| Engagement name | [Entity] — PDPA Compliance Audit 20XX |
| Audit period | [Start date] to [End date] |
| Entity name | Legal name of data controller |
| Registration number | JPDP registration reference |
| Industry sector | Per JPDP Class of Data Users classification |
| Applicable sector CoP | [Name and gazette reference, or "General CoP only"] |
| Scope boundaries | Business units, systems, processing activities in scope |
| Exclusions | Any processing activities excluded with justification |
| Audit standard | PDPA Act 709, A1727, Standards 2015, applicable Guidelines |
| Engagement team | Lead auditor, team members, DPO liaison |
| Report date | [Date] |

### Sheet 2: Data Processing Activity Register (ROPA Spine)

The central reference for all processing-activity-level testing. Each row is a processing activity:

| Column | Description |
| :--- | :--- |
| PA-ID | Unique identifier for the processing activity |
| Activity name | e.g., "Customer onboarding — retail banking" |
| Business unit | Responsible department |
| Data subjects | Categories (customers, employees, prospects, etc.) |
| Personal data categories | Types of data collected |
| Sensitive data flag | Yes/No — triggers DPA-REQ-009-011 |
| Processing purposes | Specific stated purposes |
| Lawful basis | Consent / Contractual necessity / Legal obligation / Vital interest / Public interest / Legitimate interest |
| Third-party recipients | Internal and external recipients |
| Cross-border flag | Yes/No — triggers Domain 7 testing |
| Destination countries | If cross-border |
| Transfer mechanism | Per s129 |
| Retention period | As per retention schedule |
| Consent reference | Link to consent record |
| Notice reference | Link to applicable privacy notice version |
| Risk rating | High / Medium / Low |
| In-scope for testing | Yes/No (based on sampling) |

### Sheet 3: Domain 1 — Consent Management

13 requirement rows (DPA-REQ-001 through DPA-REQ-013). For each PA-level requirement, results are recorded per sampled processing activity. Columns:

| Column | Description |
| :--- | :--- |
| Requirement ID | DPA-REQ-NNN |
| Requirement description | Full description from this mapping |
| Scope | Org / PA |
| Risk tier | Critical / Standard / Conditional |
| PA-ID (if PA scope) | Reference to ROPA entry |
| Status | C / PC / NC / NA |
| Evidence reference | Document/system/screenshot reference |
| Observations | Auditor notes |
| Finding reference | Link to Finding Register (if PC/NC) |

### Sheet 4: Domain 2 — Data Subject Rights

14 requirement rows (DPA-REQ-014 through DPA-REQ-027).

### Sheet 5: Domain 3 — Notice and Transparency

10 requirement rows (DPA-REQ-028 through DPA-REQ-037).

### Sheet 6: Domain 4 — Data Security

18 requirement rows (DPA-REQ-038 through DPA-REQ-055).

### Sheet 7: Domain 5 — Data Lifecycle

12 requirement rows (DPA-REQ-056 through DPA-REQ-067).

### Sheet 8: Domain 6 — Breach Response

12 requirement rows (DPA-REQ-068 through DPA-REQ-079).

### Sheet 9: Domain 7 — Cross-Border Transfer

10 requirement rows (DPA-REQ-080 through DPA-REQ-089).

### Sheet 10: Domain 8 — Third-Party Management

10 requirement rows (DPA-REQ-090 through DPA-REQ-099).

### Sheet 11: Domain 9 — Governance and Accountability

14 requirement rows (DPA-REQ-100 through DPA-REQ-113).

### Sheet 12: Domain 10 — Registration and Regulatory Compliance

7 requirement rows (DPA-REQ-114 through DPA-REQ-120).

### Sheet 13: Seven Principles Assessment

A holistic assessment of the organisation's compliance with the 7 PDPA principles, synthesised from domain-level findings:

| Principle | Section | Key Requirements | Overall Rating |
| :--- | :--- | :--- | :--- |
| General Principle | s6 | DPA-REQ-001, 009, 066, 067 | C / PC / NC |
| Notice and Choice Principle | s7 | DPA-REQ-028-035 | C / PC / NC |
| Disclosure Principle | s8 | DPA-REQ-080-085, 093 | C / PC / NC |
| Security Principle | s9 | DPA-REQ-038-055 | C / PC / NC |
| Retention Principle | s10 | DPA-REQ-058-063 | C / PC / NC |
| Data Integrity Principle | s11 | DPA-REQ-056, 064-065 | C / PC / NC |
| Access Principle | s12 | DPA-REQ-014-020 | C / PC / NC |

### Sheet 14: A1727 Rights Compliance

Assessment of compliance with rights and obligations introduced or amended by the 2024 Amendment:

| A1727 Provision | Obligation | Status | Evidence | Finding |
| :--- | :--- | :--- | :--- | :--- |
| s2 (amended definitions) | Updated consent definition — freely given, specific, informed, unambiguous | | | |
| s12A | DPO appointment mandatory | | | |
| s12B | 72-hour breach notification to Commissioner | | | |
| s12B | Data subject breach notification | | | |
| s16A | Registration requirement with criminal penalty | | | |
| s129 (amended) | Enhanced cross-border transfer conditions | | | |
| s129B | DPO functions and reporting | | | |
| s133A | Director/officer personal liability | | | |

### Sheet 15: Breach Notification Readiness

A dedicated readiness assessment (not dependent on an actual breach having occurred):

| Readiness Element | Assessment Criteria | Status | Gap |
| :--- | :--- | :--- | :--- |
| Detection capability | Can breach be detected within 24 hours? | | |
| Triage procedure | Documented severity assessment criteria? | | |
| Notification authority | Designated person authorised to notify Commissioner? | | |
| Notification template | Pre-prepared template with all s12B fields? | | |
| Commissioner channel | JPDP notification mechanism identified and tested? | | |
| 72-hour clock | Start-time determination procedure documented? | | |
| Data subject notification | Template and distribution mechanism for affected data subjects? | | |
| Legal review | Legal counsel engaged for notification content review? | | |
| Communication plan | Internal/external communication plan for significant breaches? | | |
| Tabletop exercise | Breach simulation conducted within last 12 months? | | |

### Sheet 16: Cross-Border Transfer Assessment

Per-transfer-flow analysis for all identified cross-border transfers:

| Column | Description |
| :--- | :--- |
| Transfer ID | Unique reference |
| Source entity | Malaysian data controller |
| Recipient entity | Overseas recipient |
| Destination country | Country name |
| Minister-specified country | Yes/No (per s129 gazette order) |
| Data categories | Personal data / Sensitive personal data |
| Transfer mechanism | Consent / Contract / BCR / SCC / Other |
| TIA conducted | Yes/No |
| Supplementary measures | Description of additional safeguards |
| DPA in place | Yes/No |
| Status | C / PC / NC / NA |

### Sheet 17: Director Liability Assessment (s133A)

Assesses whether the conditions for director personal liability are mitigated:

| Element | Test | Status | Evidence |
| :--- | :--- | :--- | :--- |
| Awareness | Directors briefed on s133A personal liability? | | |
| Governance | Board-level data protection oversight documented? | | |
| Reporting | Regular compliance reports to board? | | |
| Escalation | Procedure for escalating data protection issues to board? | | |
| Decision evidence | Board decisions on data protection matters documented in minutes? | | |
| Training | Directors received data protection training? | | |
| Insurance | D&O policy covers data protection liability? | | |
| Delegated authority | Clear delegation to DPO with documented accountability? | | |

### Sheet 18: Penalty Exposure Matrix

Aggregates all NC and PC findings against applicable penalty provisions:

| Finding | Requirement | Provision | Maximum Fine | Maximum Imprisonment | Director Exposure (s133A) | Likelihood | Exposure Rating |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [from Finding Register] | DPA-REQ-NNN | sXX | RMXXX,000 | X years | Yes/No | Low/Med/High | Low/Med/High/Critical |

The matrix enables the entity to understand its aggregate penalty exposure and prioritise remediation by financial and criminal risk.

### Sheet 19: Finding Register

Central register of all audit findings:

| Column | Description |
| :--- | :--- |
| Finding ID | FND-PDPA-NNN |
| Requirement | DPA-REQ-NNN |
| Domain | Domain name |
| Risk tier | Critical / Standard / Conditional |
| Status | PC / NC |
| Finding title | Concise description |
| Finding detail | Full description of the gap, root cause, and evidence |
| Penalty exposure | Applicable penalty provision(s) |
| Recommendation | Specific remediation action |
| Management response | Entity's response and remediation plan |
| Owner | Responsible person |
| Target date | Remediation deadline |
| Follow-up status | Open / In progress / Closed / Overdue |

### Sheet 20: Aggregation and Conclusion

Summary dashboard for the engagement partner and board:

| Metric | Value |
| :--- | :--- |
| Total requirements tested | /120 (less NA) |
| Compliant | N (X%) |
| Partially Compliant | N (X%) |
| Non-Compliant | N (X%) |
| Not Applicable | N |
| Critical NC findings | N |
| Total penalty exposure | RM [sum] |
| Director liability findings | N |
| Overall compliance rating | [Rating methodology TBD] |
| Key findings summary | Top 5 findings by risk |
| Positive observations | Areas of strong compliance |
| Recommendations priority | Immediate / Short-term / Medium-term |

### Sheet 21: Document Request List (Prepared by Client — PBC)

Standard document request list issued at engagement commencement:

| # | Document | Purpose | Domain |
| :--- | :--- | :--- | :--- |
| 1 | ROPA / Data Processing Activity Register | Spine for PA-level testing | All |
| 2 | JPDP Registration Certificate | Confirm valid registration | 10 |
| 3 | Privacy notices (all versions, all channels) | Test s7 compliance | 3 |
| 4 | Consent forms and digital consent flows (screenshots) | Test consent mechanisms | 1 |
| 5 | Consent withdrawal procedure and records | Test withdrawal management | 1 |
| 6 | Data protection policies and procedures manual | Policy framework assessment | 9 |
| 7 | DPO appointment letter and job description | Confirm s12A compliance | 9 |
| 8 | Staff training materials, completion records, quiz results | Training effectiveness | 9 |
| 9 | DSAR register and sample responses | Rights fulfilment testing | 2 |
| 10 | Data retention schedule | Test s10 compliance | 5 |
| 11 | Data disposal records and certificates of destruction | Secure disposal verification | 5 |
| 12 | Data breach response procedure | Breach readiness assessment | 6 |
| 13 | Breach register (if any breaches occurred) | Breach notification compliance | 6 |
| 14 | Cross-border transfer register and transfer mechanisms | s129 compliance | 7 |
| 15 | Data processing agreements (sample — all high-risk, sample of standard) | Processor management | 8 |
| 16 | Processor due diligence records | Processor risk assessment | 8 |
| 17 | Information security risk assessment | Security framework | 4 |
| 18 | Access control matrix / RBAC documentation | Access management | 4 |
| 19 | Encryption standards and key management procedures | Technical controls | 4 |
| 20 | Vulnerability scan reports and patch status | Technical controls | 4 |
| 21 | SIEM/monitoring configuration and alert rules | Detection capability | 4 |
| 22 | DLP policy configuration and incident reports | DLP effectiveness | 4 |
| 23 | DPIA reports (if conducted) | Privacy by design | 9 |
| 24 | Board minutes referencing data protection | Board oversight | 9 |
| 25 | Internal audit reports on PDPA compliance | Compliance monitoring | 9 |
| 26 | Enforcement notices received (if any) | Regulatory compliance | 10 |
| 27 | D&O insurance policy (data protection coverage) | Director liability | 17 |
| 28 | Organisation chart showing DPO reporting line | Governance structure | 9 |

---

## 9. Relationship to Control Library

This mapping document bridges the control library (`controls/library.json`) and the audit workbook:

```
library.json (49 controls)
  ↕ 1:N mapping
CONTROL-MAPPING.md (120 requirements — DPA-REQ-001 to DPA-REQ-120)
  ↕ 1:1 mapping
Excel workbook row (fieldwork test)
```

Each control in `library.json` maps to 1-4 AWP requirements. Each AWP requirement maps to exactly one row in the Excel workbook. The `awpRequirements` field (to be added to library.json) will close the loop programmatically, following the same pattern established in the NACSA control library.

### Planned library.json Enhancement

Each control in library.json will gain an `awpRequirements` array:

```json
{
  "slug": "consent-collection-mechanism",
  "awpRequirements": ["DPA-REQ-001", "DPA-REQ-002", "DPA-REQ-003"]
}
```

This enables automated consistency checking between the control library and the AWP workbook.

---

## 10. Version History

| Version | Date | Author | Changes |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-03-31 | AWP Team | Initial mapping — 49 controls, 120 requirements, 10 domains |
