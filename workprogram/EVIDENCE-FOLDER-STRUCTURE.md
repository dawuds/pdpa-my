# PDPA Audit — Evidence Folder Structure

Standard folder structure for organising workpapers and evidence during PDPA compliance audit engagements.

## Root Structure

```
PDPA-AUD-[YYYY]-[NNN]-[EntityName]/
│
├── 00-Engagement/
│   ├── Engagement-Letter.pdf
│   ├── Scope-Document.pdf
│   ├── Team-Assignment.pdf
│   ├── Independence-Declaration.pdf
│   ├── Conflict-Check.pdf
│   ├── ROPA-Received.xlsx
│   └── PBC-Tracker.xlsx
│
├── 01-Consent-Management/
│   ├── CM-01-Consent-Policy.pdf
│   ├── CM-02-Consent-Forms/
│   │   ├── Web-Form-Screenshot.png
│   │   ├── Mobile-App-Screenshot.png
│   │   ├── Paper-Form-Scan.pdf
│   │   └── Call-Centre-Script.pdf
│   ├── CM-03-Consent-Records-Sample/
│   │   ├── Sample-001.pdf
│   │   ├── Sample-002.pdf
│   │   └── ... (20 samples)
│   ├── CM-04-Withdrawal-Mechanism/
│   │   ├── Withdrawal-Form-Screenshot.png
│   │   ├── Withdrawal-Test-Result.pdf
│   │   └── Withdrawal-Records-Sample/
│   └── CM-Workpaper.xlsx
│
├── 02-Data-Subject-Rights/
│   ├── DSR-01-DSAR-Procedure.pdf
│   ├── DSR-02-DSAR-Records-Sample/
│   │   ├── Access-Request-001.pdf (request + response + timeline)
│   │   ├── Correction-Request-001.pdf
│   │   └── ... (15 samples)
│   ├── DSR-03-Erasure-Mechanism/
│   │   ├── Erasure-Procedure.pdf
│   │   ├── Erasure-Test-Result.pdf
│   │   └── System-Deletion-Evidence/
│   ├── DSR-04-Portability-Mechanism/
│   │   ├── Portability-Procedure.pdf
│   │   ├── Export-Sample.json (or .csv)
│   │   └── Format-Verification.pdf
│   ├── DSR-05-Restriction-Mechanism/
│   │   ├── Restriction-Procedure.pdf
│   │   └── System-Flag-Screenshot.png
│   └── DSR-Workpaper.xlsx
│
├── 03-Notice-Transparency/
│   ├── NT-01-Privacy-Notices/
│   │   ├── Website-Privacy-Policy.pdf
│   │   ├── Mobile-App-Notice.pdf
│   │   ├── Physical-Counter-Notice.pdf
│   │   ├── SMS-Notice.pdf
│   │   └── Call-Centre-Notice.pdf
│   ├── NT-02-Notice-Review/
│   │   ├── s7-Checklist.xlsx (6 prescribed particulars per notice)
│   │   ├── Language-Verification.pdf (BM + English)
│   │   └── Version-Control-Evidence.pdf
│   ├── NT-03-Collection-Workflow/
│   │   ├── System-Workflow-Screenshot.png (notice → acknowledgment → collection)
│   │   └── Timing-Verification.pdf
│   └── NT-Workpaper.xlsx
│
├── 04-Data-Security/
│   ├── SEC-01-Security-Policy.pdf
│   ├── SEC-02-Technical-Controls/
│   │   ├── Encryption-Standards.pdf
│   │   ├── Access-Control-Config.pdf
│   │   ├── Firewall-Rules.pdf (redacted)
│   │   └── Vulnerability-Scan-Report.pdf
│   ├── SEC-03-Security-Incidents/
│   │   ├── Incident-Register.xlsx
│   │   └── Incident-Response-Plan.pdf
│   ├── SEC-04-Staff-Training/
│   │   ├── Training-Records.xlsx
│   │   ├── Training-Materials.pdf
│   │   └── Completion-Certificates/ (sample)
│   └── SEC-Workpaper.xlsx
│
├── 05-Data-Lifecycle/
│   ├── DLC-01-Retention-Schedule.pdf
│   ├── DLC-02-Retention-Implementation/
│   │   ├── System-Retention-Config.pdf
│   │   ├── Deletion-Records.xlsx (last 12 months)
│   │   └── Archive-Policy.pdf
│   ├── DLC-03-Data-Classification/
│   │   ├── Classification-Scheme.pdf
│   │   ├── Handling-Procedures.pdf
│   │   └── Sample-Classification-Labels.png
│   └── DLC-Workpaper.xlsx
│
├── 06-Breach-Response/
│   ├── BR-01-Breach-Response-Plan.pdf
│   ├── BR-02-Notification-Procedure/
│   │   ├── 72-Hour-Procedure.pdf
│   │   ├── JPDP-Notification-Template.pdf
│   │   ├── NACSA-6hr-Template.pdf (if NCII)
│   │   └── Data-Subject-Notification-Template.pdf
│   ├── BR-03-Breach-Register.xlsx
│   ├── BR-04-Breach-Records/ (if any breaches occurred)
│   │   ├── Breach-001-Report.pdf
│   │   ├── Breach-001-Notification.pdf
│   │   └── Breach-001-Post-Mortem.pdf
│   ├── BR-05-Drill-Exercise/
│   │   ├── Tabletop-Exercise-Report.pdf
│   │   ├── Drill-Attendance.pdf
│   │   └── Lessons-Learned.pdf
│   └── BR-Workpaper.xlsx
│
├── 07-Cross-Border-Transfer/
│   ├── CBT-01-Transfer-Inventory.xlsx
│   ├── CBT-02-Transfer-Assessments/
│   │   ├── Transfer-001-Assessment.pdf (country, mechanism, legal basis)
│   │   ├── Transfer-002-Assessment.pdf
│   │   └── ...
│   ├── CBT-03-Transfer-Mechanisms/
│   │   ├── Standard-Contractual-Clauses.pdf
│   │   ├── Binding-Corporate-Rules.pdf
│   │   ├── Adequacy-Determination.pdf
│   │   └── Consent-Records/ (if consent-based)
│   ├── CBT-04-Minister-Approval/
│   │   └── (if applicable)
│   └── CBT-Workpaper.xlsx
│
├── 08-Third-Party-Management/
│   ├── TPM-01-Processor-Register.xlsx
│   ├── TPM-02-Processor-Agreements/
│   │   ├── Processor-001-DPA.pdf
│   │   ├── Processor-002-DPA.pdf
│   │   └── ...
│   ├── TPM-03-Processor-Assessments/
│   │   ├── Processor-001-Assessment.pdf
│   │   └── ...
│   ├── TPM-04-Subprocessor-Register.xlsx
│   └── TPM-Workpaper.xlsx
│
├── 09-Governance-Accountability/
│   ├── GOV-01-DPO/
│   │   ├── DPO-Appointment-Letter.pdf
│   │   ├── DPO-Job-Description.pdf
│   │   ├── DPO-Reporting-Line.pdf
│   │   └── DPO-Qualifications.pdf
│   ├── GOV-02-Governance-Framework/
│   │   ├── Data-Protection-Policy.pdf
│   │   ├── Governance-Structure.pdf
│   │   ├── Committee-Charter.pdf
│   │   └── Board-Reports/ (last 4 quarters)
│   ├── GOV-03-DPIA/
│   │   ├── DPIA-Procedure.pdf
│   │   ├── DPIA-Register.xlsx
│   │   └── DPIA-Reports/ (completed DPIAs)
│   ├── GOV-04-Internal-Audit/
│   │   ├── Internal-Audit-Plan.pdf
│   │   ├── Internal-Audit-Report.pdf
│   │   └── Remediation-Tracker.xlsx
│   └── GOV-Workpaper.xlsx
│
├── 10-Registration-Compliance/
│   ├── REG-01-JPDP-Registration/
│   │   ├── Registration-Certificate.pdf
│   │   ├── Registration-Application.pdf
│   │   └── Annual-Return.pdf (if applicable)
│   ├── REG-02-Sector-Code/
│   │   ├── Applicable-Code.pdf
│   │   └── Code-Compliance-Assessment.pdf
│   ├── REG-03-Regulatory-Correspondence/
│   │   ├── JPDP-Correspondence/ (if any)
│   │   └── Enforcement-History/ (if any)
│   └── REG-Workpaper.xlsx
│
├── 11-Legal-Assessment/
│   ├── s133A-Director-Liability/
│   │   ├── Director-Awareness-Evidence.pdf
│   │   ├── Due-Diligence-Assessment.pdf
│   │   └── Board-Training-Records.pdf
│   ├── Penalty-Exposure-Matrix.xlsx
│   └── Legal-Practitioner-Opinion.pdf (privileged — separate distribution)
│
├── 12-Aggregation-Conclusion/
│   ├── Domain-Compliance-Summary.xlsx
│   ├── Principles-Assessment.xlsx
│   ├── A1727-Rights-Summary.xlsx
│   ├── Finding-Register.xlsx
│   ├── Narrative-Conclusion.docx
│   └── Quality-Review-Checklist.xlsx
│
├── 13-Report/
│   ├── PDPA-Audit-Report-DRAFT-v1.docx
│   ├── PDPA-Audit-Report-DRAFT-v2.docx (post-management-review)
│   ├── PDPA-Audit-Report-FINAL.pdf
│   ├── Management-Action-Plan.xlsx
│   └── Distribution-Log.pdf
│
└── 14-Working-Files/
    ├── Interview-Notes/
    │   ├── DPO-Interview-[Date].pdf
    │   ├── IT-Security-Interview-[Date].pdf
    │   └── HR-Interview-[Date].pdf
    ├── System-Screenshots/
    ├── Configuration-Exports/
    └── Correspondence/
        ├── Opening-Meeting-Minutes.pdf
        ├── Closing-Meeting-Minutes.pdf
        └── PBC-Follow-Up-Emails/
```

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Root folder | `PDPA-AUD-[YYYY]-[NNN]-[EntityName]` | `PDPA-AUD-2026-001-AcmeCorp` |
| Domain folders | `[NN]-[Domain-Name]` | `01-Consent-Management` |
| Evidence files | `[Control-Prefix]-[NN]-[Description].[ext]` | `CM-01-Consent-Policy.pdf` |
| Workpapers | `[Domain-Prefix]-Workpaper.xlsx` | `CM-Workpaper.xlsx` |
| Samples | `Sample-[NNN].[ext]` | `Sample-001.pdf` |
| Screenshots | `[System]-[What]-[Date].png` | `CRM-Consent-Form-20260315.png` |

## Evidence Quality Standards

### Hierarchy of Reliability (most → least reliable)

1. **Direct observation** — Auditor directly witnesses control operation (e.g., watches consent form workflow)
2. **Independent confirmation** — Third-party evidence (e.g., SOC 2 report covering data processor, certifications)
3. **System-generated** — Logs, configuration exports, automated reports without manual intervention
4. **Re-performance** — Auditor re-performs the process (e.g., submits DSAR and measures response time)
5. **Documentary** — Policies, procedures, meeting minutes, training records
6. **Inquiry** — Verbal representations from entity personnel

### Minimum Evidence per Domain

| Domain | Minimum Evidence Items | Re-performance Required |
|--------|----------------------|:---:|
| Consent Management | 20 consent records + mechanism walkthrough | Yes — test withdrawal |
| Data Subject Rights | 15 DSAR records + mechanism test per right | Yes — submit test request |
| Notice & Transparency | All active notices + workflow screenshots | Yes — verify timing |
| Data Security | Security policy + scan report + incident register | No (unless technical testing elected) |
| Data Lifecycle | Retention schedule + deletion records (12 months) | Yes — verify deletion |
| Breach Response | BRP + breach register + drill evidence | Yes — tabletop exercise |
| Cross-Border Transfer | Transfer inventory + assessment per transfer | No |
| Third-Party Management | Processor register + DPA samples + assessment samples | No |
| Governance | DPO appointment + governance docs + DPIA register | No |
| Registration | Certificate + annual return + sector code evidence | No |

## Retention

All audit evidence and workpapers must be retained for a minimum of **7 years** from the date of the audit report, in accordance with professional standards (ISACA ITAF 2400, IIA GIAS 2025 Standard 12.3) and to support any subsequent enforcement proceedings by the Commissioner.

## Folder Setup Script

```bash
#!/bin/bash
# Usage: ./setup-evidence-folders.sh "AcmeCorp" "2026" "001"

ENTITY=$1
YEAR=$2
NUM=$3
ROOT="PDPA-AUD-${YEAR}-${NUM}-${ENTITY}"

mkdir -p "${ROOT}"/{00-Engagement,01-Consent-Management/{CM-03-Consent-Records-Sample,CM-04-Withdrawal-Mechanism},02-Data-Subject-Rights/{DSR-02-DSAR-Records-Sample,DSR-03-Erasure-Mechanism,DSR-04-Portability-Mechanism,DSR-05-Restriction-Mechanism},03-Notice-Transparency/{NT-01-Privacy-Notices,NT-02-Notice-Review,NT-03-Collection-Workflow},04-Data-Security/{SEC-02-Technical-Controls,SEC-03-Security-Incidents,SEC-04-Staff-Training},05-Data-Lifecycle/{DLC-02-Retention-Implementation,DLC-03-Data-Classification},06-Breach-Response/{BR-02-Notification-Procedure,BR-04-Breach-Records,BR-05-Drill-Exercise},07-Cross-Border-Transfer/{CBT-02-Transfer-Assessments,CBT-03-Transfer-Mechanisms},08-Third-Party-Management/{TPM-02-Processor-Agreements,TPM-03-Processor-Assessments},09-Governance-Accountability/{GOV-01-DPO,GOV-02-Governance-Framework,GOV-03-DPIA,GOV-04-Internal-Audit},10-Registration-Compliance/{REG-01-JPDP-Registration,REG-02-Sector-Code,REG-03-Regulatory-Correspondence},11-Legal-Assessment/s133A-Director-Liability,12-Aggregation-Conclusion,13-Report,14-Working-Files/{Interview-Notes,System-Screenshots,Configuration-Exports,Correspondence}}

echo "Created evidence folder structure: ${ROOT}/"
echo "Folders: $(find "${ROOT}" -type d | wc -l)"
```
