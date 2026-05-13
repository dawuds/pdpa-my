# Writing a finding that maps to s-number + issued §-number

> **Tier 4 / Lesson 4 — 60 minutes.** Deliverable: a fully-formed finding on a sample DPbD §5.3 children's-consent gap, passing the partner-review gate.

## The 5 Cs structure

Every PDPA finding follows the 5 Cs:

| C | Element | Purpose |
|---|---|---|
| **Condition** | What was observed | Factual description of the gap |
| **Criteria** | What the obligation requires | Citation to specific section / guideline |
| **Cause** | Why the gap exists | Root-cause analysis for the corrective action |
| **Consequence** | Risk to data subjects + penalty exposure | Severity calibration anchor |
| **Corrective Action** | What the controller should do | Remediation plan |

A finding missing any of the 5 Cs is incomplete.

## The structure expanded

Beyond the 5 Cs, every finding includes:

| Element | Purpose |
|---|---|
| **Identifier** (e.g., F-DPB-002) | Tracking and aggregation |
| **Severity rating** (Critical / High / Medium / Low / Informational) | §3.2 of Methodology |
| **Issued vs Leading Practice flag** | §8.2 of Methodology + Citation Discipline Guide §6 |
| **Statutory / guideline citation** with specific section | Per Citation Discipline Guide §1 item 2 |
| **Cross-reference to verified pdpa-my entry** | Internal workpaper only |
| **Source PDF reference** | Internal workpaper only |
| **Public URL** | External report only |
| **Audit procedure executed** (e.g., DPB-04 step 1) | Traceability to the work program |
| **Evidence relied on** | Documents inspected / interviews / re-performance |
| **Sample size** (where applicable) | Sampling discipline |

## A well-formed finding — worked example

The exercise: a finding on a DPbD §5.3 children's-consent gap.

**Scenario**: During fieldwork on HRTechCo Sdn Bhd (the ML candidate screening platform from earlier lessons), the auditor identifies that HRTechCo's own privacy notice for its employees does not contemplate the possibility of employees being under 18. HRTechCo employs a small number of interns aged 17 working in summer programmes. The notice provides for general adult-employee consent only.

### The finding

> **Identifier**: F-HRT-DPB-002
>
> **Severity**: Medium
>
> **Status flag**: ISSUED REQUIREMENT
>
> **Audit procedure**: DPB-04 step 1 (children's-scope assessment + parental consent verification)
>
> **Citation**:
> - JPDP DPbD Guideline (issued 30 April 2026) §5.3 — "Pendekatan DPbD dalam pematuhan Prinsip Am juga menghendaki pengawal data untuk menerapkan pertimbangan privasi terhadap data peribadi subjek data yang berumur di bawah lapan belas (18) tahun dengan memastikan persetujuan yang sah diperoleh bagi pihak subjek data tersebut. Persetujuan tersebut hendaklah diperoleh daripada ibu bapa, penjaga atau seseorang yang mempunyai tanggungjawab ibu bapa…"
> - Act 709 s5 — General Principle compliance
> - Internal workpaper reference: `Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPbD-2026-04.pdf` lines 280-310
> - Module trail: `pdpa-my/dpbd/childrens-privacy.json` `issuedRequirements.rules[0]`
>
> **Condition**: HRTechCo's employee privacy notice does not contemplate processing of data of employees under 18 years of age. During fieldwork, the auditor identified that HRTechCo's summer internship programme employs 17-year-old interns; their personal data is processed under the same consent flow as adult employees. Parental / guardian consent has not been obtained for any of the under-18 interns processed in the last 12 months (sample of 6 interns from the 2025 summer programme).
>
> **Criteria**: JPDP DPbD Guideline §5.3 (cited above) requires that valid consent for personal data of under-18 subjects be obtained from a parent, guardian, or person with parental responsibility — not from the under-18 subject themselves.
>
> **Cause**:
> - The privacy notice was drafted in 2023 (pre-A1727 and pre-April-2026 DPbD Guideline) and not refreshed for the children's-consent provisions
> - The summer internship programme was launched in 2024 without privacy review
> - The DPbD policy (drafted 2025 in anticipation of the issued guideline) references Cavoukian 7 principles, not the 4 elements in the issued Section 4 — and does not address the under-18 case specifically
>
> **Consequence**:
> - **Regulatory**: Direct breach of DPbD §5.3 (which is an ISSUED requirement under Act 709 s5 + DPbD Guideline). Potential s5(3) Principle violation finding by the Commissioner.
> - **Penalty exposure**: Up to RM1,000,000 / 3 years individual; RM3M or 10% of Malaysian turnover corporate (s130); officer personal liability (s133A) — all are general s5(3) Principle violation exposures.
> - **Data subject harm**: Under-18 interns' data processed without lawful basis (consent invalid because not obtained from the parent/guardian). Risk of harm is modest (intern employment data is general PD, not sensitive) but the legal exposure is direct.
> - **Reputational**: Privacy breach involving children carries reputational weight beyond the data-protection technical assessment.
>
> **Corrective Action**:
> - **30 days**: Update the privacy notice to add an under-18 employee consent provision aligned with §5.3 — consent obtained from parent / guardian / person with parental responsibility.
> - **30 days**: Update the consent flow in the HR onboarding system to capture the under-18 status and route to a separate consent track requiring parental signature.
> - **30 days**: Retrospectively obtain parental / guardian consent for any continuing under-18 interns; document the consent.
> - **60 days**: Update the DPbD policy to reflect the 4 elements (not Cavoukian 7) and specifically address children's processing per §5.3 / §10.2 / §11.2.
> - **60 days**: Implement an under-18 flag in the HRIS to ensure future interns are routed to the parental-consent track.
>
> **Evidence relied on**:
> - Inspection: privacy notice (2023 version) — does not mention children
> - Inspection: HR onboarding system — single consent flow regardless of age
> - Inspection: sample of 6 under-18 intern records — no parental consent on file
> - Inquiry: HR Director confirmed under-18 interns were processed without parental consent; was not aware of the §5.3 requirement
> - Inspection: DPbD policy (2025) — references Cavoukian 7 principles; silent on children
>
> **Sample**: 6 of 8 under-18 interns in the 2025 summer programme (full population minus 2 who left before fieldwork could verify); attribute sampling not statistically meaningful at this size, but coverage is high.

### What makes this finding defensible

1. **Specific citation** — JPDP DPbD Guideline §5.3 (not "the JPDP DPbD Guideline"); plus s5 Act 709 + s130 / s133A penalty exposure
2. **ISSUED REQUIREMENT flag** — the obligation is in the issued BM PDF; not PCP-derived
3. **Module trail** — resolves to `pdpa-my/dpbd/childrens-privacy.json` `issuedRequirements.rules[0]`
4. **Severity calibrated** — Medium because: real legal exposure but small number of subjects and general (not sensitive) PD
5. **Evidence chain** — inspection + inquiry covering both the notice and the workflow
6. **5 Cs all present** — Condition, Criteria, Cause, Consequence, Corrective Action
7. **Audit procedure traced** — DPB-04 step 1
8. **Corrective Action timeline** — specific days (30 / 60) tied to the severity

## A poorly-formed finding — counter-example

The same observation, written badly:

> **Severity**: Medium
> **Finding**: HRTechCo processes intern data without the right consent. The JPDP DPbD Guideline requires this. Update the notice.

What's wrong:

- No identifier; no traceability
- No §-number citation; "the JPDP DPbD Guideline" without section
- No ISSUED vs LEADING PRACTICE flag
- No module trail
- No 5 Cs structure — Cause / Consequence missing entirely
- "Update the notice" is not a Corrective Action with specifics
- No evidence reference
- No sample documentation

This finding would be rejected at engagement manager review and would not reach partner review. A junior auditor writing findings this thin is not ready for T4 work.

## The internal workpaper vs external report distinction

The finding above is the internal workpaper version (with module trail, source PDF reference, local paths). The external report version of the same finding strips the internal references:

> **F-HRT-DPB-002 (Medium)** — HRTechCo's employee privacy notice does not contemplate processing of data of under-18 employees. During fieldwork, the auditor identified that summer internship programme employs 17-year-old interns processed under the same consent flow as adults. Per the JPDP DPbD Guideline §5.3 (issued 30 April 2026 — https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2026/04/GARIS-PANDUAN-MEREKA-BENTUK-BERDASARKAN-PERLINDUNGAN-DATA-DPbD-1.pdf), valid consent for data of under-18 subjects must be obtained from a parent, guardian, or person with parental responsibility. Act 709 s5 Principle violation. Penalty exposure up to RM1M / 3 years (individual) / RM3M or 10% of Malaysian turnover (corporate per s130). Recommended remediation (30-60 days): update privacy notice + consent workflow + DPbD policy + retrospectively obtain parental consent for continuing under-18 interns + add HRIS flag.

Shorter, no internal cross-references, public URL instead of local path. Same substance.

## Common finding-craft gaps

The patterns the engagement manager catches:

1. **Missing 5 Cs** — typically Cause skipped; auditor jumps from Condition to Corrective Action without explaining the root cause
2. **No severity rationale** — severity assigned without traceable reasoning under §3.2
3. **Vague Corrective Action** — "improve the process" without specifics
4. **Cause confused with Consequence** — Cause is root-cause analysis (why the gap exists); Consequence is the impact
5. **No evidence reference** — finding doesn't say which document or interview supports each claim
6. **Sample documentation missing** — "we tested several files" without numbers / method / selection rationale
7. **Citation lacks section number** — common; §8.2 item 8 of the Methodology specifically guards against this

## Deliverable

A fully-formed finding on a sample DPbD §5.3 children's-consent gap (or equivalent control) passing the partner-review gate.

Pass criteria: 5 Cs all present; specific citation; ISSUED / LEADING PRACTICE flag; severity rationale; evidence chain documented; module trail (internal); public URL (external); audit procedure traced.

## GDPR parallel

GDPR finding craft follows the same 5 Cs structure with article-based citations. Differences:

| | PDPA finding | GDPR finding |
|---|---|---|
| Citation form | Act 709 + JPDP Guideline §-number + module trail | Article + EDPB Guideline number + version + CJEU case-law check |
| Statutory penalty | s130 + s133A | Article 83 + Member State implementation |
| Civil exposure | Not codified | Article 82 — codified |
| Cross-jurisdictional default | Cite GDPR / NIST / ICO / ISO | Cite Member State / Council of Europe / international standards |

Parallel reading: [GDPR T4 Lesson 4 — finding craft](../../gdpr/t4-auditor/04-finding-craft-gdpr.md).

## What's next

[Lesson 5 — Checkpoint](05-checkpoint.md). Produce a sample finding end-to-end.
