# Anatomy of a PDPA audit pack

> **Tier 4 / Lesson 1 — 45 minutes.** What an audit pack contains and what each artefact is for. Reference: the existing audit programme at [`Tech-Audit/Regulatory/PDPA/`](../../../../Tech-Audit/Regulatory/PDPA/).

## What "audit pack" means

A PDPA audit pack is the full set of documentation that supports an audit engagement — from engagement letter through to final report. The consulting team's audit pack for any PDPA engagement is anchored in five core artefacts plus the supporting documents.

| Artefact | Purpose | Where it lives |
|---|---|---|
| **Engagement Kickoff Checklist** | Pre-engagement readiness — scope, PBC, timeline, dependencies | `Tech-Audit/Regulatory/PDPA/PDPA-Engagement-Kickoff-Checklist.md` |
| **Work Program** | The 12-domain procedure inventory; what gets tested in each domain | `Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md` |
| **PBC (Provided By Client) List** | The 108-item document request for the client | `Tech-Audit/Regulatory/PDPA/Document-Requests/PBC-Request-List.md` |
| **Rating and Conclusion Methodology** | How findings are rated and conclusions formed | `Tech-Audit/Regulatory/PDPA/Work-Program/Rating-and-Conclusion-Methodology.md` (v2.3+) |
| **Citation Discipline Guide** | The 11 common citation errors + section-by-section discipline | `Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md` (v2.0+) |
| **Finding Template** | Standard finding format (5 Cs structure) | `Tech-Audit/Regulatory/PDPA/Templates/Finding-Template.md` |
| **Audit Report Template** | Report structure including ratings, conclusions | `Tech-Audit/Regulatory/PDPA/PDPA-Audit-Report-Template.md` |
| **References** | 45 source PDFs across 7 categories (Legislation, Subsidiary Legislation, Standards, Guidelines, Codes of Practice, Public Consultation Papers, Circulars) | `Tech-Audit/Regulatory/PDPA/References/` |
| **QA Reviews** | Historical record of methodology updates triggered by JPDP issuances | `Tech-Audit/Regulatory/PDPA/QA-Reviews/` |

## What each artefact is for — operationally

### Engagement Kickoff Checklist

Used at the start of every engagement. Confirms:
- Scope is defined (which entities, processing activities, time period)
- Client team is identified (DPO, IT lead, Legal contact)
- PBC has been issued
- Engagement timeline agreed
- Auditor team confirmed (lead + supporting + reviewing partner)
- Methodology version pinned (Rating-and-Conclusion Methodology v2.X + Citation Discipline Guide v2.X)

A consulting engagement that skips the kickoff checklist tends to drift — scope creep, missing PBC items, methodology drift across the team. The checklist is the engagement discipline anchor.

### Work Program

The 12 domains with audit procedures per domain. Each procedure has:
- Identifier (e.g., DPO-01, DPIA-03, ADM-04)
- Procedure title
- Reference to the underlying obligation (Act 709 section / regulation / guideline section)
- Test steps (typically 3-7)
- Evidence expected
- Rating criteria

Auditors execute the procedures. The work program is not a checklist of yes/no questions — it is a methodology framework that requires the auditor to apply judgment within each procedure.

### PBC List

108 items grouped by domain. The client provides documents in advance of fieldwork. Each item has:
- Identifier
- Document description
- Domain it supports
- Statutory / regulatory basis for the request
- Format expected (policy / register / sample records / etc.)

The PBC dispatch is normally 2 weeks before fieldwork. Items not received in time become risk items in the audit — the auditor must work without them or extend the engagement.

### Rating and Conclusion Methodology (v2.3+)

Defines:
- Per-procedure compliance ratings (Compliant / Partially / Non-Compliant / Not Applicable)
- Finding severity (Critical / High / Medium / Low / Informational)
- Aggregation from procedure → domain → overall conclusion
- A1727 amendment impact assessment
- April 2026 Guidelines transitional discipline
- QA gate (8.1–8.8) including citation discipline

The Rating and Conclusion Methodology is the document that distinguishes a defensible audit from a subjective one. Every finding's severity must be traceable to §3.2.

### Citation Discipline Guide (v2.0+)

The 11 common citation errors + decision flowchart + sectoral CoP patterns + worked examples + citation framing structure. Used at every level:

- **Junior auditor**: self-check before passing to engagement manager (§1)
- **Engagement manager**: spot-check review (§3, §4, §5)
- **Engagement partner**: QA gate (§6 framing + §3 errors check)

Loosely coupled with the Methodology — the Citation Discipline Guide may update more frequently than the Methodology because new citation patterns emerge with each JPDP issuance.

### Finding Template

Standard format. Every finding includes:
1. **Condition** — what was observed
2. **Criteria** — the legal / regulatory / guideline requirement
3. **Cause** — why the gap exists
4. **Consequence** — risk to data subjects + controller penalty exposure
5. **Corrective Action** — what the controller should do

Plus:
- Severity rating (§3.2 of Methodology)
- ISSUED REQUIREMENT or LEADING PRACTICE flag (§8.2 of Methodology + Citation Discipline Guide)
- Statutory / guideline citation with specific section number
- Cross-reference to the verified pdpa-my module entry
- Internal workpaper file path (workpaper version) AND public URL (report version)

### Audit Report Template

The output. Structure:
1. Executive summary
2. Scope and methodology
3. Compliance posture per domain
4. Findings (Critical first, then High, Medium, Low)
5. Management response
6. Overall conclusion
7. Appendices (statutory references, methodology version pin, references used)

### References folder

45 source PDFs. Three uses:
- **Workpaper citations** (internal) — auditor refers to `References/Guidelines/JPDP-Guideline-DPIA-2026-04.pdf` in the workpaper
- **External report citations** — the public JPDP URL appears in the audit report itself
- **BM authoritative text verification** — for contentious interpretations of the April 2026 guidelines, the BM PDF is authoritative

### QA Reviews folder

Active/ + Archive/. Historical record of methodology and citation guide updates triggered by JPDP issuances. Each archive entry includes:
- README scoping the trigger
- Diff reports (per guideline if multiple)
- Cross-references to commits applying the recommendations

The most recent archived QA review is [`2026-05-01-April-2026-Guidelines-Verification/`](../../../../Tech-Audit/Regulatory/PDPA/QA-Reviews/Archive/2026-05-01-April-2026-Guidelines-Verification/) — the multi-agent diff against the issued April 2026 guidelines.

## The audit pack as a versioned system

Each artefact carries an independent version. The current state (May 2026):

| Artefact | Version | Last updated |
|---|---|---|
| Methodology | v2.3 | 2026-05-01 |
| Citation Discipline Guide | v2.0 | 2026-05-01 |
| Work Program | inline (no separate version) | 2026-05-01 |
| PBC List | inline | 2026-05-01 |
| References | n/a | 2026-05-01 |
| Engagement Kickoff Checklist | inline | 2026-05-01 |

The Citation Discipline Guide may update independently of the Methodology — loose coupling per the Methodology §8.3 discipline.

When a new JPDP guideline is issued (the forthcoming biometric guideline is the next anticipated), the workflow:
1. Open `QA-Reviews/Active/` with new review
2. Multi-agent diff against existing modules and audit programme
3. Apply recommendations to Methodology, Citation Discipline Guide, Work Program, PBC List, controls library
4. Archive review with README and diff reports
5. Bump affected artefact versions

## Common engagement-setup gaps

The patterns the audit team catches:

1. **Methodology version not pinned at engagement start** — auditors work to different versions
2. **PBC dispatched without statutory/regulatory basis citations** — client cannot prioritise; partial fulfilment
3. **Auditor uses pre-April-2026 work program** — citations to retired PCP content
4. **Engagement Kickoff Checklist skipped** — scope creep and team drift
5. **Reviewing partner not designated upfront** — QA gate happens too late
6. **References folder not part of auditor onboarding** — auditor doesn't have access to BM PDFs for authoritative text verification

## GDPR parallel

GDPR audit packs follow the same structure with article-anchored work programmes (Articles 5-25, 28-32, 33-34, 35, 37-39, 44-50). EDPB Guidelines + national SA guidance + CJEU case law sit alongside the Regulation text. Citation discipline patterns are different (EDPB version pinning replaces JPDP issued-vs-PCP) but the structural framework is the same.

Parallel reading: [GDPR T4 Lesson 1 — audit pack](../../gdpr/t4-auditor/01-audit-pack-gdpr.md).

## What's next

[Lesson 2 — The 12 domains as test scope](02-domains-as-scope.md). Critical-tier sequencing; IOIR test methods; AICPA sampling.
