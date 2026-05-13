# Issued vs PCP — the trap every junior consultant falls into

> **Tier 1 / Lesson 4 — 15 minutes.** This is the lesson that will save you from writing a finding that gets you laughed out of a partner review.

## The setup

In March 2025, JPDP issued three Public Consultation Papers (PCP No. 1, 2, 3 of 2025) on DPIA, Data Protection by Design, and Automated Decision-Making and Profiling. The papers were detailed, well-structured, and read like near-final drafts. For thirteen months, the consulting community built control libraries, training material, and audit procedures on the assumption that the issued guidelines would track the consultation text.

On 30 April 2026 the Commissioner issued the three guidelines. **They are materially narrower than the consultation papers.** Material proposals were dropped, transparency obligations were softened, biometric and CCTV measures disappeared entirely.

The trap: a consultant trained on PCP material will instinctively cite the JPDP guideline for an obligation that does not exist in the issued text. That finding will not survive partner review and may not survive client review either — a controller's lawyer reads the BM source and finds the cited obligation absent.

## What changed in each guideline

### DPIA (issued 30 April 2026)

- **DEICA methodology preserved** (Describe / Evaluate / Identify / Consider / Assess). If you trained on DEICA, that part is still good.
- **Quantitative thresholds**: PCP listed three (sensitive >10K subjects; ADM >10K; general >20K). Issued has two (sensitive >10K, now including financial information; general >20K). **ADM moved from quantitative to a qualitative factor (Q7).**
- **Qualitative factors**: PCP listed 6, issued lists 7 (Q7 ADM was added; Q2 systematic monitoring was broadened beyond public spaces).
- **Commissioner-portal notification REMOVED.** PCP §2.18 proposed notification via `daftar.pdp.gov.my` for HIGH residual risk. The issued guideline does not include this. High residual risk is reported to senior management; the Commissioner gets on-request access only.
- **2-year DPIA validity (NEW).** The DPIA itself expires after 2 years and must be redone, not just reviewed.
- **Retention extended.** Records retained for 2 years from cessation of processing, not from DPIA completion.

### DPbD (issued 30 April 2026)

- **7 Cavoukian principles → 4 elements.** The issued guideline lists four elements: Sifat Proaktif (Proactiveness — folds in privacy-as-default), Perlindungan Hujung-ke-hujung (End-to-end Protection), Ketelusan (Transparency), Berpusatkan Pengguna (User-centricity). The Cavoukian "Privacy Embedded into Design" and "Full Functionality / Positive-Sum" elements are not named.
- **Standalone children's privacy chapter REMOVED.** The PCP had a full chapter on children — best-interests-of-child, 8 age verification mechanisms, anti-lockout principle, **prohibition on profiling of children for advertising/marketing**. None of this survived. Children are addressed in three short paragraphs only: §5.3 parental consent, §10.2 accessible parent/guardian correction, §11.2 accessible parent/guardian access.
- **No GDPR / ISO / Cavoukian citations.** The issued guideline does not reference any of these. Repo cross-references claiming the guideline "references" Cavoukian or ISO 27701 are incorrect.
- **Section 13 NEW** — governance best practices (board expertise, senior accountability assignment, DPO meeting cadence, KPIs, board reporting). This is the most substantial addition.

### ADMP (issued 30 April 2026)

- **Three named ADM Restrictions REPLACED.** The PCP proposed "Right to Refuse / Right to Information / Right to Human Review". The issued guideline does not name these as rights. Instead it anchors data subject mechanisms in **s7 (notice — mandatory FACT of ADM disclosure)** and **s38 (withdrawal of consent)**.
- **Right to Human Review and 21-day SLA NOT in issued text.** PCP §2.13(c)(iv) proposed an illustrative 21-day SLA. Neither the SLA nor the right itself appears in the issued guideline.
- **Right to Information softened.** §9.3 mandates only the FACT of ADM disclosure. §9.4 makes logic explanation **permissive** (`boleh` — may), with explicit carve-outs for confidential information, trade secrets, intellectual property, proprietary rights.
- **Biometric and CCTV chapters DROPPED ENTIRELY.** PCP §2.26-2.32 (biometric measures: anti-spoofing, separate storage, etc.) and §2.33-2.35 (CCTV measures) are absent from the issued guideline. They are likely deferred to a separate forthcoming biometric guideline.
- **Explicit consent downgraded to plain consent.** PCP §2.18 required `persetujuan secara nyata` for the ADMP §9.9.3 Exception. Issued guideline uses plain `persetujuan`. Explicit consent is now required only for sensitive PD under s40.
- **AI 'no manipulation' safeguard dropped.** PCP §2.25(b) first sentence proposed an explicit ban on AI manipulation. Not in issued §10.2.
- **DPIA mandatory regardless of subject count (NEW).** ADMP §6.1 mandates DPIA for any in-scope ADMP — the >10,000 quantitative threshold does not gate.
- **DPO from earliest design stage (NEW).** ADMP §5.1 requires DPO engagement at the earliest design stage.

## The 11 most common citation errors

Drilled into [`Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md) v2.0 Section 3. Every consultant should commit these to memory:

1. Right to Human Review cited under JPDP ADMP — cross-jurisdictional best practice only
2. 21-day SLA for human review under JPDP — not in issued
3. Right to Refuse as standalone right — anchored in s38 only
4. Profiling/marketing-of-children prohibition under JPDP — PCP-only; cite GDPR Recital 38, EU DSA Article 28, UK ICO Children's Code
5. Cavoukian 7 foundational principles under JPDP DPbD — issued lists 4 elements
6. Commissioner-portal notification for HIGH-residual DPIA — PCP-only; report to senior management
7. Biometric measures under JPDP ADMP — PCP-only; cite s4 / s40
8. CCTV measures under JPDP ADMP — PCP-only; cite s7 / s9 or UK ICO CCTV Code
9. AI 'no manipulation' under JPDP — PCP-only; cite EU AI Act Article 5 or NIST AI RMF
10. Explicit consent for §9.9.3 ADMP Exception — downgraded; plain consent suffices except for sensitive PD under s40(1)(a)
11. "Right to Information retained even under Exceptions" — PCP doctrine not in issued

## The discipline that solves this

Two simple rules:

1. **Cite section numbers, not guideline names.** "The JPDP DPbD Guideline §5.3 requires parental consent for under-18 data subjects" is defensible. "The JPDP DPbD Guideline addresses children" is not — it tells the reader nothing they can verify.

2. **Flag every finding as ISSUED REQUIREMENT or LEADING PRACTICE.** If the obligation is in the BM source PDF in `Tech-Audit/Regulatory/PDPA/References/Guidelines/`, it is ISSUED REQUIREMENT. If it is good practice but not in the issued text, it is LEADING PRACTICE — cite the cross-jurisdictional source (GDPR, NIST, ICO) and never the JPDP guideline.

The Citation Discipline Guide §1 has a 10-item self-check every finding must pass. Use it.

## Why the BM source is authoritative

The April 2026 guidelines were issued in Bahasa Malaysia only. There is no English version. Every English summary you have read — including the modules in this repo, including the articles in `dawuds/articles/PDPA-Guidelines/`, including this lesson — is a translation. For contentious interpretation, the BM source PDF in `Tech-Audit/Regulatory/PDPA/References/Guidelines/` is the authoritative text.

This matters when a controller pushes back on a finding. The auditor must be able to point to the BM phrase. Translation arguments do not survive that exchange.

## GDPR parallel

GDPR has an equivalent citation-discipline problem with EDPB Guidelines. EDPB issues Guidelines under public consultation, then formal adoption — the consultation versions are draft and should not be cited as authority. The same partner-review gate applies: cite Article + EDPB Guideline number + version, never "EDPB has said".

The structural difference: GDPR's authority hierarchy is Regulation text > CJEU case law > EDPB Guidelines > national SA guidance > commentary. PDPA's hierarchy is Act 709 + A1727 > regulations > JPDP guidelines > sectoral CoPs > commentary. There is no PDPA equivalent of CJEU case law because there is no PDPA equivalent of the CJEU — but Malaysian Federal Court decisions on PDPA matters, where they exist, sit above guidelines.

Parallel reading: [GDPR T1 Lesson 4 — EDPB Guideline discipline](../../gdpr/t1-orientation/04-edpb-guideline-discipline.md).

## What's next

[Lesson 5 — Checkpoint](05-checkpoint.md). Ten questions. If you cannot answer eight, re-read the relevant lesson before moving to T2.
