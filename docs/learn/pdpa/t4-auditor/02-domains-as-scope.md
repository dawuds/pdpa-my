# The 12 domains as test scope — critical-tier sequencing

> **Tier 4 / Lesson 2 — 60 minutes.** Why the 28 critical-tier controls get tested first; IOIR test methods; AICPA sampling.

## The 12-domain audit scope

The audit programme covers 12 domains, 57 controls, 28 of which are critical-tier:

| # | Domain | Critical-tier controls (count) |
|---|---|---|
| 1 | Consent Management | 3 |
| 2 | Data Subject Rights | 4 |
| 3 | Notice and Transparency | 2 |
| 4 | Data Security | 4 |
| 5 | Data Lifecycle Management | 2 |
| 6 | Breach Response | 3 |
| 7 | Cross-Border Data Transfer | 2 |
| 8 | Third-Party / Processor Management | 2 |
| 9 | Governance and Accountability | 3 |
| 10 | Registration and Regulatory Compliance | 1 |
| 11 | Data Protection by Design (DPbD) | 1 |
| 12 | Automated Decision-Making and Profiling (ADMP) | 1 |
| **Total** | | **28 critical** (of 57 total) |

Critical-tier controls are non-negotiable. Standard-tier extends coverage. Conditional-tier applies where specific facts present (sensitive PD; cross-border; ADMP).

## Critical-tier sequencing in fieldwork

A 6-week fieldwork engagement (typical for a medium controller) sequences:

| Week | Domains | Focus |
|---|---|---|
| 1 | 9 Governance, 10 Registration | DPO appointment + Commissioner notification; sectoral CoP determination; registration status |
| 1-2 | 5 Data Lifecycle | RoPA review; retention schedule; data inventory |
| 2-3 | 3 Notice, 1 Consent | Privacy notice review; consent mechanisms; deceptive design pattern check (DPbD §6.4) |
| 3-4 | 2 DSR, 4 Security | Data subject rights operational test (sample DSAR / erasure / portability); Article 32 / PDP Standards 2015 baseline; security controls |
| 4-5 | 6 Breach, 7 Cross-Border, 8 Third-Party | Breach response plan + tabletop AAR; cross-border register + TIA; DPA portfolio |
| 5-6 | 11 DPbD, 12 ADMP | DPbD policy + 4 elements operationalisation; ADM register; §9.3 disclosure; §10.2 AI safeguards; Section 13 governance evidence |

This sequencing covers the 28 critical-tier controls plus the foundational documents (DPO, RoPA, privacy notice) in the first three weeks — so the most-cited findings are identified early.

## IOIR test methods

Inquiry / Observation / Inspection / Re-performance — the standard test methods. Per procedure, the auditor selects one or more:

| Method | Description | When used |
|---|---|---|
| **Inquiry** | Interviewing client personnel | Establishing whether processes exist; understanding gaps; getting design rationale |
| **Observation** | Watching processes in action | Verifying that documented processes operate as documented |
| **Inspection** | Reviewing documents and records | Most common method; reviewing policies, registers, evidence |
| **Re-performance** | Auditor re-executes the control | Highest evidence quality; e.g., auditor processes a sample DSAR through the client's system to verify the workflow |

Most procedures combine inquiry + inspection + (where feasible) re-performance. Inquiry alone is weakest evidence; re-performance alone is rare but highest-confidence.

## AICPA sampling — the standard sampling framework

For large populations (>50 items), the audit team uses **AICPA attribute sampling — 60 items at 95% confidence / 5% expected exception rate**.

Where the population is smaller, the standard is:

| Population size | Sample |
|---|---|
| 1-25 | All items |
| 26-50 | 25 items minimum |
| 51-250 | 60 items |
| 251-1000 | 60 items |
| 1001+ | 60 items (statistical inference) |

Critical-tier controls receive larger samples or coverage testing. Specific examples:

- **DPO appointment** — single item; tested fully
- **Privacy notice versions** — typically <10 versions over 24 months; all tested
- **DSAR requests** — typically 60-200 per year; sample 60
- **Breach incidents** — typically <10 per year; all tested
- **DPIA reports** — typically 5-30 per year; all tested
- **Processor agreements** — typically 20-200; sample 60

For ADM register entries, sample 60 if more than 60 ADM operations exist; otherwise all.

## Sampling discipline patterns

The sample is drawn before fieldwork starts where possible. Sample selection:

| Method | When used |
|---|---|
| **Random** | Standard for attribute testing |
| **Stratified** | Where the population has known sub-populations (e.g., sensitive PD activities + general PD activities — sample within each) |
| **Judgemental / risk-based** | Where the auditor selects specific items for known-risk reasons (high-value transactions; senior management access; cross-border flows) |
| **Period-based** | Where temporal patterns matter (sample evenly across the period) |

Documentation requirement: sample selection method documented in the workpaper; rationale for non-random selection explicit; sample size justified against population size.

## What "good evidence" looks like

For each test step:

| Evidence quality | Description |
|---|---|
| **High** | Documentary evidence (signed policies, dated minutes, system-generated logs) + re-performance |
| **Medium** | Documentary evidence (policies, registers) + inspection by auditor |
| **Low** | Verbal evidence from inquiry alone; controller's assertion without supporting document |
| **Insufficient** | Cannot evidence; not on file; controller cannot produce within fieldwork window |

A finding rated Compliant requires Medium-or-better evidence. Low or Insufficient → Partially Compliant or Non-Compliant.

## The post-April-2026 DPB and ADM procedures

The 12-domain framework added domains 11 (DPbD) and 12 (ADMP) following the April 2026 issued guidelines. Critical-tier controls in these domains:

| Procedure | Tests |
|---|---|
| DPB-01 | DPbD policy + senior management approval + reference to 4 elements + Section 13 governance evidence |
| ADM-01 | ADM register completeness; Ambang ADMP assessment per operation; DPO sign-off from earliest design stage; DPIA-regardless-of-count |
| ADM-02 | §9.3 mandatory disclosure in privacy notice; §9.4 permissive logic explanation where chosen; trade-secret carve-out documentation |
| ADM-05 | §10.2 AI best practices; bias monitoring; model card; pre-deployment risk assessment |

These procedures are the most-cited locations for PCP-vs-issued citation errors. The Citation Discipline Guide §3 lists 11 patterns — most relate to DPB or ADM.

## Common test-execution gaps

The patterns the engagement manager catches in junior auditor work:

1. **Inquiry-only findings** — auditor records the DPO's verbal answer without inspecting documentation
2. **Re-performance skipped** — auditor relies on inspection of records without verifying the workflow operates
3. **Sample size below threshold** — auditor tests 10 DSAR items where 60 is the standard
4. **No sample selection documentation** — auditor cannot explain why these 60 were chosen
5. **Time-period bias** — sample drawn from one quarter only; misses period-end risk
6. **Sensitive PD activities not stratified** — sample includes only general PD; sensitive PD activities under-tested

## Deliverable for this lesson

Walk through the 28 critical-tier controls per domain. For each, identify:
1. The applicable test method(s)
2. The sample size
3. The expected evidence quality
4. Likely citation-error patterns

Apply to a hypothetical client in your sector of choice.

## GDPR parallel

GDPR audit scope is article-anchored rather than domain-anchored. Typical scope coverage: Articles 5-25, 28-32, 33-34, 35-36, 37-39, 44-50 (a similar 25-30 articles). Same IOIR + AICPA sampling discipline.

Parallel reading: [GDPR T4 Lesson 2 — articles as scope](../../gdpr/t4-auditor/02-articles-as-scope.md).

## What's next

[Lesson 3 — Citation discipline](03-citation-discipline.md). The gate that distinguishes a defensible finding from a partner-review reject.
