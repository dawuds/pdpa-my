# JPDP DPIA Guideline (April 2026) — section-by-section deep-dive

> **Deep-dive reference.** Use this when you need detail beyond what T1 / T2 / T3 lessons cover. The source PDF is [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPIA-2026-04.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPIA-2026-04.pdf) (BM-only, 1742 lines extracted).

## Structure of the issued guideline

The guideline is organised in four parts (Bahagian) plus two appendices:

- **Bahagian A: Pengenalan** — Sections 1 (background), 2 (legal basis), 3 (definitions)
- **Bahagian B: Pra-DPIA** — Sections 4 (what is DPIA), 5 (why), 6 (who is responsible), 7 (when required)
- **Bahagian C: Pelaksanaan DPIA** — Section 8 (how — DEICA methodology)
- **Bahagian D: Pasca-DPIA** — Section 9 (report to senior management), 10 (implement mitigation), 11 (publication / validity / monitoring), 12 (record retention)
- **Lampiran A**: 35-question DPIA template
- **Lampiran B**: DPIA process flowchart

This structure is materially different from the March 2025 PCP, which had a six-part Part 2 structure. The most consequential structural change is that **the PCP's "Notification to the Commissioner" section (PCP §2.18-2.19) is gone**. The issued guideline has no Commissioner-portal notification.

## Section 6 — who is responsible

Three roles named:

| Role | Source | Responsibility |
|---|---|---|
| **Data Controller** | §6.1 | "Obligasi untuk melaksanakan DPIA terletak pada pengawal data" — the obligation rests with the data controller |
| **Data Processor** | §6.2 | Must provide reasonable assistance; NOT the obligated party for the DPIA itself |
| **DPO** | §6.3, §6.4 | Provides advisory support; reviews; signs off the completed DPIA |
| **Ketua Pelaksana DPIA** (DPIA Lead Implementer) | §6.5, §6.6 | NEW role introduced by the issued guideline. Distinct from DPO. Leads day-to-day execution. Optional for smaller organisations |
| **Senior Management** | §6.3 | "Tanggungjawab mutlak ... adalah terletak pada pengurusan kanan pengawal data" — absolute accountability rests with senior management of the data controller |

The Ketua Pelaksana DPIA role is new versus PCP. It anticipates larger organisations where the DPO is advisory but operational execution sits with a delivery lead.

## Section 7 — when DPIA is required

The trigger framework has two arms — quantitative and qualitative. **DPIA is required if EITHER arm fires.**

### 7.5 — Quantitative thresholds (2)

DPIA is mandatory where the processing:

1. **involves more than 20,000 data subjects** of general personal data, OR
2. **involves more than 10,000 data subjects** of sensitive personal data (including financial information)

Note: the PCP had a third quantitative threshold (>10,000 ADM data subjects). It was **dropped from the quantitative list and reclassified as Qualitative Factor Q7**. Many existing programmes still cite the PCP three-threshold version; this is a citation-discipline error.

Note also: the sensitive-data threshold is **explicitly extended to include financial information** ("data maklumat kewangan"). This codifies financial-info-as-sensitive for DPIA-trigger purposes even where general s4 sensitive PD definition might be debated.

### 7.6 — Qualitative factors (7)

The DPO must exercise judgment against seven factors. ANY factor sufficient → DPIA required:

| ID | Factor | Practical reading |
|---|---|---|
| (a) | Potensi kesan undang-undang atau kesan signifikan | Legal or significant effects on data subjects |
| (b) | Pemantauan sistematik terhadap subjek data | Systematic monitoring (broader than PCP's "publicly accessible area" qualifier — now includes commercial settings, online behaviour) |
| (c) | Penggunaan teknologi inovatif | Use of innovative technology |
| (d) | Penafian atau sekatan terhadap hak subjek data | Denial or restriction of data subject rights |
| (e) | Penjejakan lokasi atau tingkah laku subjek data | Tracking location or behaviour |
| (f) | Penyasaran terhadap kanak-kanak atau individu rentan | Targeting children or vulnerable individuals |
| (g) | Pembuatan keputusan secara automatik dan pemprofilan yang menimbulkan risiko yang tinggi terhadap subjek data | ADM/profiling giving rise to high risk — NEW; moved from quantitative |

## Section 8 — DEICA methodology

The five-step approach (preserved from PCP):

| Step | BM label | EN label | Description |
|---|---|---|---|
| 1 | Perihal | Describe | Describe the processing — nature, scope, context, purpose; data flow; categories of subjects and data; cross-border transfers |
| 2 | Nilai | Evaluate | Evaluate necessity and proportionality — is the processing necessary; could the purpose be achieved with less data; lawful basis verified |
| 3 | Kenal pasti | Identify | Identify risks to data subjects — unauthorised access, identity theft, financial loss, physical harm, loss of confidentiality, etc. |
| 4 | Pertimbang | Consider | Consider mitigation measures — technical (encryption, pseudonymisation, access control), organisational (policies, training), retention and minimisation, breach notification readiness, Transfer Impact Assessment for cross-border |
| 5 | Taksir | Assess | Assess residual risk using the 3x3 matrix — Low (1-2), Medium (3-4), High (6-9) |

The 3x3 risk matrix is formalised in the issued guideline. Likelihood × Impact, each on a 1-3 scale.

## Section 9 — reporting

Where residual risk after mitigation remains HIGH, the DPIA findings are reported to **senior management** of the data controller. Senior management decides on additional mitigations, resource allocation, and acceptance.

**The Commissioner is NOT notified.** PCP §2.18 proposed Commissioner notification via `daftar.pdp.gov.my`. This was dropped. The Commissioner gets access to DPIA records only on request under §12.2.

This is the largest divergence from PCP and the most-cited example of the issued-vs-PCP trap.

## Section 11 — validity and monitoring

**11.2 — 2-year validity.** "DPIA yang siap adalah sah bagi tempoh dua (2) tahun dari tarikh penyiapan. Setelah tamat tempoh tersebut, DPIA baharu hendaklah dilaksanakan." — A completed DPIA is valid for two years from completion. After expiry, a **new DPIA must be conducted** (not merely reviewed).

This is a NEW obligation versus PCP. Existing DPIA programmes designed around indefinite validity or annual-review need to be redesigned around a 2-year re-execution cycle.

**11.3 — Monitoring.** Ongoing monitoring is required for any DPIA-assessed processing — changes in purpose, new vulnerabilities, regulatory updates, technology changes, all trigger review.

## Section 12 — retention

**12.1**: "DPIA … hendaklah diselenggara dengan sewajarnya untuk tempoh sekurang-kurangnya dua (2) tahun dari penamatan operasi pemprosesan." — Records retained at minimum **2 years from cessation of the processing operation**.

Worked example in the issued text: a 5-year processing operation requires **7 years of total retention** (5 years + 2 years post-cessation).

**12.2**: Records produced on request to the Commissioner.

## Lampiran A — the 35-question template

The issued guideline ships a 35-question template in Lampiran A, organised across five sections (Pra-DPIA + DEICA D / E / I / C / A + Pasca-DPIA). Section 8.2 frames it as "panduan" (guidance) — organisations may adopt, adapt, or extend it. In practice, controllers without a strong existing DPIA template should adopt Lampiran A as the baseline.

Sample questions (illustrative — verify against the BM source):

- Section 1 (Pra-DPIA): organisation name, processing name, DPO name, sensitive PD involved?
- Section 2 (Describe): nature / scope / context / purpose of processing, data flow, categories of subjects and data
- Section 3 (Evaluate): necessity, proportionality, lawful basis, alternatives considered
- Section 4 (Identify): risks identified, likelihood × impact rating, sources of risk
- Section 5 (Consider): technical measures, organisational measures, residual risk plan
- Section 6 (Assess): residual risk level, senior management decision, sign-off
- Section 7 (Pasca-DPIA): mitigation implementation status, monitoring plan, re-DPIA trigger

## GDPR parallel

GDPR Article 35 is the closest equivalent. The mapping:

| Issued PDPA DPIA Guideline | GDPR Article 35 / EDPB | Notes |
|---|---|---|
| §7.5 quantitative thresholds | EDPB DPIA Guidelines + national SA blacklists | GDPR has 9-criteria threshold per EDPB; PDPA codifies more specific numeric triggers |
| §7.6 qualitative factors | EDPB 9-criteria DPIA threshold | Substantively similar |
| §8 DEICA methodology | Article 35(7) required content | Different prescription level — PDPA prescribes the 5-step; GDPR specifies required content not methodology |
| §9 senior management reporting | (no GDPR equivalent at this level) | GDPR Art 36 has prior consultation with SA; PDPA has no SA-consultation equivalent |
| §11.2 2-year validity | (no GDPR equivalent) | GDPR requires review on material change; PDPA prescribes 2-year cycle |
| §12 retention from cessation + 2 years | (no GDPR equivalent) | PDPA-specific |
| Lampiran A 35-question template | EDPB DPIA examples + national SA templates | EDPB doesn't ship a template; SAs do |

GDPR's Article 36 prior consultation is the obligation that has no PDPA equivalent. Where residual risk is HIGH under GDPR, the controller MUST consult the SA before processing. Under PDPA, senior management decides — the Commissioner does not consult.

For consulting work on a client with EU exposure: design the DPIA programme around both regimes. Use the DEICA methodology as the operational backbone; document the Article 35 required content + Article 36 consultation threshold for EU-affecting processing.

## Common implementation gaps

Patterns the consulting team should look for in client environments:

1. **DPIA programme exists but uses PCP triggers** — three quantitative thresholds (including ADM >10K) instead of the issued two
2. **High residual risk escalated to Commissioner instead of senior management** — programme still references the dropped portal notification
3. **DPIA documented as "valid until material change"** — no 2-year re-execution cycle codified
4. **Retention "for 2 years"** — without specifying base (completion vs cessation of processing)
5. **DPO sign-off but no senior management report** — Section 6.3 absolute-accountability requirement not met
6. **Template ignores Lampiran A** — programme uses pre-PCP template

Each of these is a finding. Cite the §-number specifically. Apply the leading-practice flag where the issued obligation is silent.

## Cross-references in this repo

- Data layer: [`pdpa-my/dpia/methodology.json`](../../../dpia/methodology.json) — verified module
- Data layer: [`pdpa-my/dpia/thresholds.json`](../../../dpia/thresholds.json) — verified module
- Data layer: [`pdpa-my/dpia/templates.json`](../../../dpia/templates.json) — references Lampiran A
- Audit programme: [`Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md) — section on DPIA-related procedures
- Citation discipline: [`Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md) §3 row 6 (Commissioner-portal error)
- Source PDF: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPIA-2026-04.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPIA-2026-04.pdf)

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Verified against issued JPDP DPIA Guideline April 2026. |
