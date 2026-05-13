# JPDP ADMP Guideline (April 2026) — section-by-section deep-dive

> **Deep-dive reference.** Source PDF: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-ADMP-2026-04.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-ADMP-2026-04.pdf) (BM-only, 731 lines extracted).

## Why ADMP is the most-cited guideline in error

The ADMP Guideline is the most-cited PCP-vs-issued trap in the consulting team's experience. Eight specific items from PCP No. 3/2025 did NOT survive into the issued text. Half of all citation-discipline rejects in the team's first sample of 50 reports involved ADMP. Internalise the structure of this deep-dive before drafting any ADMP finding.

## Structure of the issued guideline

Five Bahagian:

- **Bahagian A: Pengenalan** — Sections 1 (background), 2 (legal basis), 3 (Tafsiran / definitions)
- **Bahagian B: Pengenalan kepada ADMP** — Section 4 (definitions + 4 examples)
- **Bahagian C: Aplikasi ADMP** — Section 5 (DPO role), Section 6 (ADMP-DPIA linkage), Section 7 (Ambang ADMP / threshold)
- **Bahagian D: Panduan Umum** — Section 8 (Sensitive PD), Section 9 (Principles compliance + Notice + Withdrawal + Exceptions + Exemptions)
- **Bahagian E: AI** — Section 10 (AI / Kecerdasan Buatan with 7 best practices at §10.2.1-10.2.7)

The structure is far shorter than the PCP (731 lines issued vs 1039 PCP). The compression is partly editorial (consultation questions removed) but largely **substantive** — material content was dropped.

## Section 3 / 4 — definitions

**ADM** (§3.2 + §4.1): "Proses membuat keputusan tanpa sebarang penglibatan manusia melalui kaedah automatik sepenuhnya atau sebahagiannya."

EN: "Process of making decisions without any human involvement, through fully or partially automated means."

**Partial automation is explicitly in scope.** This is a notable addition versus PCP which framed the scope as "solely automated". The issued guideline catches scenarios where the human does data input but the decision logic is entirely automated.

**Profiling** (§3.2): same definition as PCP — the EU-derived "any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a data subject..."

**§4.2 distinguishing elements**: Two formal distinguishing tests for profiling — **ramalan (prediction)** and **inferens (inference)**. Profiling involves at least one of these. This is a clearer formalisation than the PCP version.

## Section 5 — DPO role

§5.1: "Pengawal data hendaklah melibatkan DPO sejak peringkat reka bentuk yang paling awal..."

EN: "The data controller shall engage the DPO from the earliest design stage..."

This is a **new mandatory obligation** versus PCP. The DPO is not optional or advisory at the design stage — they must be involved from the earliest. Programmes that defer DPO involvement to pre-launch review do not meet §5.1.

## Section 6 — ADMP-DPIA linkage

§6.1: "Sebarang aktiviti pemprosesan yang melibatkan ADMP hendaklah dinilai melalui DPIA, tanpa mengambil kira sifat atau tahap penggunaan ADMP."

EN: "Any processing activity involving ADMP shall be assessed through DPIA, **regardless of the nature or extent of ADMP use**."

The §6.1 rule is critical: **ADMP triggers DPIA regardless of subject count**. The PCP-era >10,000 quantitative ADM threshold (now removed from DPIA Guideline §7.5) does not gate. Even a small-scale ADMP operation must have a DPIA.

§6 also includes a flowchart (Lampiran B-equivalent) prescribing the assessment path including a 2-yearly DPIA refresh aligned with DPIA Guideline §11.2.

## Section 7 — Ambang ADMP

The threshold framework (§7.1-§7.6) defines when the guideline's obligations apply. Renamed from PCP's "trigger" to **"Ambang ADMP"** (ADMP Threshold).

§7.1: The threshold is met where the ADMP process can:

- (7.1.1) "Mendatangkan kesan perundangan terhadap subjek data" — produce legal effects on the data subject
- (7.1.2) "Memberi kesan signifikan kepada subjek data" — significantly affect the data subject

The threshold language matches PCP §2.9 in substance. Only the label changed.

### Examples in the issued text

| Type | Example |
|---|---|
| Legal effect | Cancellation of contract; denial of social benefit |
| Significantly affects | Automatic refusal of online credit application; automated e-recruiting without human intervention |

The "significantly affects" arm is broad. Examples include decisions affecting financial circumstances, healthcare access, employment, price discrimination, and access to education.

## Section 8 — sensitive personal data

§8.1: Where ADMP involves sensitive personal data (s4 definition), processing is governed by **s40 conditions**:

- **s40(1)(a)** — explicit consent (persetujuan secara nyata)
- **s40(1)(b)** — one of the statutory grounds: necessary for employment law obligation; vital interests; medical purposes; legal proceedings or legal advice

§8.2: "Pengawal data **boleh mempertimbangkan**..." — controllers **may consider** implementing additional technical (encryption, access controls) and organisational measures.

The verb is permissive ("boleh mempertimbangkan"), not mandatory. PCP §2.17 framed safeguards as mandatory ("suitable measures... in place"); the issued guideline downgraded this.

**Material change vs PCP**: PCP §2.17 said "public interest" as the alternative basis to explicit consent. The issued §8.1 replaced "public interest" with the specific s40(1)(b) statutory list. Citing "public interest" under JPDP authority is incorrect — cite the specific s40(1)(b) ground.

## Section 9 — principles compliance

§9.2-§9.5: The mandatory and permissive notice regime.

**§9.3 mandatory**: "Sekiranya pemprosesan tersebut turut melibatkan ADM atau Pemprofilan, pengawal data **hendaklah** memaklumkan perkara tersebut..."

EN: "Where the processing involves ADM or profiling, the data controller **shall** notify the data subject of this."

The s7 notice must disclose the **FACT** that ADM or profiling is involved. This is the strict obligation. Cite s7 + §9.3.

**§9.4 permissive**: "Pengawal data **boleh**, melalui notis bertulis... menerangkan jenis keputusan yang dibuat melalui ADM atau pemprofilan, sebab-sebab keputusan tersebut dibuat, serta kemungkinan kesan daripada keputusan tersebut."

EN: "The data controller **may**, by written notice... explain the type of decisions made through ADM or profiling, the reasons for the decisions, and the likely impact."

"Maklumat yang diberikan hendaklah setakat yang munasabah dan praktikal, **tetapi tidak perlu merangkumi apa-apa maklumat sulit, rahsia perdagangan, harta intelek, hak pemilikan**..."

EN: "Information provided shall be reasonable and practical, **but need not include any confidential information, trade secrets, intellectual property, or proprietary rights**..."

The §9.4 explanation is **permissive (`boleh`)** with **explicit carve-outs** for trade secrets / IP / proprietary rights / confidential information. This is materially weaker than the PCP's framing of the Right to Information.

**Material change vs PCP**: PCP §2.16 expressed a doctrine that "the need for Right to Information is retained" — implying it survives Exceptions in full. The issued §9.3 + §9.4 framework instead has:

- Mandatory: fact-of-ADM disclosure (§9.3)
- Permissive: logic explanation, with carve-outs (§9.4)

The PCP "Right to Information retained even under Exceptions" doctrine is **NOT in the issued text**. Cite the §9.3 + §9.4 framework specifically.

§9.6-§9.8: Withdrawal of consent under **Section 38** of Act 709. Where consent is the lawful basis for ADMP, s38 withdrawal applies — and the withdrawal mechanism must be as easy to use as giving consent.

This is how the issued guideline anchors the data subject's "right to refuse" — through s38 withdrawal, not through a standalone codified right.

§9.9: The three Exceptions ("Kekecualian"):

| ID | Exception | Source |
|---|---|---|
| 9.9.1 | Necessary for entering into / performing a contract | s38 + DPA-aligned |
| 9.9.2 | Necessary for compliance with laws | Statute-aligned |
| 9.9.3 | Data subject has given consent ("subjek data telah memberikan persetujuan") | s6 / s40 |

**Critical**: §9.9.3 uses plain "persetujuan" (consent), **NOT** "persetujuan secara nyata" (explicit consent). The PCP §2.18 proposed explicit consent for this exception; the issued text downgraded to plain consent. Explicit consent is only required for sensitive PD under s40(1)(a).

§9.12: Section 45 Exemptions — cross-referenced via "Bahagian III Akta 709" (Part III of Act 709). The PCP enumerated six exemptions (personal/family, crime/tax, statistics/research, court orders, regulatory, journalism); the issued text replaces with a statutory cross-reference. Substantively the same exemptions apply.

## Section 10 — AI / Kecerdasan Buatan

§10.1: "Garis Panduan ini **hanya terpakai sekiranya AI digunakan bagi pemprosesan data peribadi yang melibatkan ADMP**."

EN: "This Guideline only applies where AI is used for processing personal data involving ADMP."

The guideline implicitly accepts AI-as-ADM-tool framing. Where AI is not within the Ambang ADMP threshold (no legal/significant effects), this guideline does not apply.

§10.2 — **seven best practices**, verb `boleh menerapkan` (may apply). Permissive framing:

| Ref | Practice |
|---|---|
| 10.2.1 | Risk assessment before deployment |
| 10.2.2 | Dignity, accuracy, recognition of AI limitations, no inappropriate use |
| 10.2.3 | **NEW** — Inform data subject of AI use in privacy notice |
| 10.2.4 | Mitigate over-reliance / automation bias |
| 10.2.5 | Operator / staff training |
| 10.2.6 | AI not the only factor |
| 10.2.7 | Trained reviewers (proaktif, bermatlamat, berautoriti dan kompeten) |

**Material change vs PCP**: PCP §2.25(b) included "do not develop, provide, or use AI systems and services to manipulate human decision making, recognition and emotion or to control them without their awareness". This "no manipulation" safeguard is **NOT in the issued text**. Cite EU AI Act Article 5 or NIST AI RMF GOVERN-2.1 if a finding addresses AI manipulation.

## What is NOT in the issued guideline

The PCP had a number of sections that **did not survive** into the issued text. Each is a common citation error.

| Removed from PCP | What it was | Where to cite instead |
|---|---|---|
| **Three named ADM Restrictions** (Right to Refuse / Right to Information / Right to Human Review) | PCP §2.13 framework | Cite Section 7 notice (§9.3 mandatory; §9.4 permissive) + Section 38 withdrawal anchoring |
| **Right to Human Review + 21-day SLA** | PCP §2.13(c)(iv) | Cross-jurisdictional best practice only (GDPR Article 22(3); ICO guidance) |
| **"Right to Information retained under Exceptions" doctrine** | PCP §2.16 | Not in issued text; transparency under §9.3 + §9.4 framework |
| **Explicit consent for §9.9.3 Exception** | PCP §2.18 | Downgraded to plain consent in issued §9.9.3 |
| **Biometric data 7 categories + 6 measures** | PCP §2.26-2.32 (anti-spoofing, separate storage, accuracy, etc.) | Cite s4 / s40 statutory obligations; flag as best practice pending separate biometric guideline |
| **CCTV 8 measures** | PCP §2.33-2.35 | Cite s7 / s9 statutory obligations or UK ICO CCTV Code |
| **AI "no manipulation" safeguard** | PCP §2.25(b) first sentence | Cite EU AI Act Article 5 or NIST AI RMF |
| **Children/minors-in-ADMP discussion** | PCP Q3(f) (no proposal made, but discussed) | Not in issued; cross-reference DPbD §5.3 for parental consent only; targeted-ads-to-children prohibition is NOT codified |

Eight specific items. Half of all ADMP citation rejects in audit findings stem from these. Memorise the list.

## Common implementation gaps

The patterns the audit team catches:

1. **No ADM register** — controller cannot say which processing activities involve ADMP
2. **DPIA not triggered for small-scale ADMP** — §6.1 regardless-of-count rule ignored
3. **DPO not involved at design stage** — §5.1 earliest-engagement requirement ignored
4. **§9.3 fact-of-ADM disclosure missing from privacy notice** — most common DPbD §9.3 finding
5. **§9.4 logic explanation absent** — controller has not chosen whether to disclose; should at least document the position
6. **"Right to Human Review" mentioned as JPDP-mandated** — citation error
7. **Biometric measures cited under ADMP authority** — citation error; should cite s4 / s40
8. **Explicit consent required for §9.9.3** — citation error; plain consent suffices
9. **AI safeguards treated as mandatory** — §10.2 is permissive ("boleh menerapkan")
10. **No human reviewer trained per §10.2.7** — common; reviewers exist but training is informal

## GDPR parallel

GDPR Article 22 is the equivalent. The structural differences:

| Issued PDPA ADMP | GDPR Article 22 | Notes |
|---|---|---|
| Ambang ADMP (legal / significant effect) | Art 22(1) (legal / similarly significant effect) | Substantively similar |
| s7 notice + s38 withdrawal anchoring | Standalone right not to be subject (Art 22(1)) | GDPR is broader — codified right; PDPA anchors in existing statute |
| Right to Human Review not codified | Art 22(3) explicit right | GDPR provides; PDPA does not |
| §9.4 logic explanation permissive | Art 13(2)(f) / 14(2)(g) / 15(1)(h) — meaningful information about logic required | GDPR transparency is stronger |
| §9.9.3 plain consent | Art 22(2)(c) explicit consent | GDPR is stricter |
| Biometric measures deferred | Art 9(1) special category + Art 22(4) | GDPR catches biometric directly |
| §10.2.3 NEW AI notice obligation | Implicit in Art 13(2)(f) | Different mechanism, similar outcome |
| Children's ADMP not addressed | Art 22 + Recital 71 — special protection | GDPR is broader |

For a client with both EU and Malaysian exposure, design the ADMP programme around the stricter side of each — typically GDPR for the standalone right to refuse and human review, PDPA's §6.1 for the DPIA-regardless-of-count requirement.

Parallel reading: [GDPR Article 22 deep-dive](../../gdpr/articles/article-22-automated-decisions.md).

## Cross-references

- Data layer: [`pdpa-my/automated-decisions/index.json`](../../../automated-decisions/index.json) — verified module
- Data layer: [`pdpa-my/automated-decisions/triggers.json`](../../../automated-decisions/triggers.json) — Ambang ADMP
- Data layer: [`pdpa-my/automated-decisions/data-subject-rights.json`](../../../automated-decisions/data-subject-rights.json) — issuedRequirements + pcpDerivedRightsForReference split
- Data layer: [`pdpa-my/automated-decisions/biometric-data.json`](../../../automated-decisions/biometric-data.json) and [`pdpa-my/automated-decisions/cctv.json`](../../../automated-decisions/cctv.json) — marked pcp-derived-pending-issuance
- Audit programme: [`Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md) §12 (ADM-01 to ADM-06)
- Citation discipline: [`Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md) §3 rows 1, 2, 3, 7, 8, 9, 10, 11 (all ADMP-related)
- Source PDF: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-ADMP-2026-04.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-ADMP-2026-04.pdf)

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Verified against issued JPDP ADMP Guideline April 2026. |
