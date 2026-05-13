# PDPA vs GDPR — Concept-by-concept equivalence

**Version:** 1.0
**Last verified:** 2026-05-13
**Owner:** pdpa-my / Tech-Audit cross-team

Companion to [`pdpa-vs-gdpr.md`](pdpa-vs-gdpr.md) (the obligation comparator). This document maps concept-by-concept terminology so consultants moving between regimes can translate quickly.

---

## 1. Actor concepts

| Concept | PDPA term | GDPR term | Note |
|---|---|---|---|
| Person processing for own purposes | Data Controller (post-A1727; previously Data User) | Controller (Art 4(7)) | Direct equivalent |
| Person processing for another | Data Processor | Processor (Art 4(8)) | Direct equivalent |
| Two or more controllers jointly determining purposes | (not codified) | Joint controller (Art 26) | GDPR-specific; PDPA implicit |
| Subject of the data | Data Subject | Data Subject (Art 4(1)) | Direct equivalent |
| Person designated to oversee compliance | Data Protection Officer (s12A — A1727) | DPO (Art 37) | Direct equivalent |
| Non-EU controller's EU contact | (not applicable) | Article 27 representative | GDPR-specific |
| Sectoral data protection regulator | Personal Data Protection Commissioner (JPDP) | Supervisory Authority (national-level) | Different governance structures |

## 2. Data concepts

| Concept | PDPA term | GDPR term | Note |
|---|---|---|---|
| Information about an identifiable person | Personal Data (s4) | Personal Data (Art 4(1)) | Direct equivalent |
| Heightened-protection category | Sensitive Personal Data (s4 — health, political, religious, criminal + biometric post-A1727) | Special Category Data (Art 9 — racial/ethnic, political, religious, trade union, genetic, biometric for unique ID, health, sex life/orientation) | GDPR broader (includes trade union, sex life) |
| Criminal data | Treated within Sensitive PD | Separately under Art 10 | GDPR distinguishes |
| Identifiers from technical processing | Biometric Data (s4 post-A1727) | Biometric Data (Art 4(14)) | Direct equivalent |
| Data made unidentifiable | Anonymisation (not formally defined) | Anonymous data (Recital 26) | Concept equivalent; both regimes treat as out-of-scope when fully anonymised |
| Data identifiable via additional info | Pseudonymisation (implicit) | Pseudonymisation (Art 4(5)) | GDPR codifies; PDPA implicit |

## 3. Activity concepts

| Concept | PDPA term | GDPR term | Note |
|---|---|---|---|
| Any operation on personal data | Processing (s4) | Processing (Art 4(2)) | Direct equivalent |
| Specific processing of profiling | Pemprofilan (ADMP Guideline) | Profiling (Art 4(4)) | Direct equivalent in substance |
| Automated decisions | ADM (ADMP Guideline) | Automated individual decision-making (Art 22) | PDPA narrower scope |
| Transfer outside the jurisdiction | Cross-border data transfer (s129/s129A) | Transfer to third country (Chapter V) | Direct equivalent |
| Documentation of processing | RoPA (s138 — introduced by A1727, modelled on GDPR Art 30) | Records of Processing (Art 30 — origin of the obligation; replaced 1995 Directive Art 18 notification regime in 2018) | Direct equivalent. BM authoritative term: *Rekod Pemprosesan Data Peribadi* |
| Risk assessment | DPIA (DPIA Guideline; s137) | DPIA (Art 35) | Direct equivalent |

## 4. Basis concepts

| Concept | PDPA term | GDPR term | Note |
|---|---|---|---|
| Subject's permission | Consent (s6(1) — the default rule) | Consent (Art 6(1)(a), Art 7) | Direct equivalent |
| Heightened consent for sensitive | Explicit consent — persetujuan secara nyata (s40(1)(a)) | Explicit consent (Art 9(2)(a)) | Direct equivalent |
| Performance of contract | s6(2)(a) | Art 6(1)(b) | Direct equivalent |
| Pre-contractual steps at subject's request | s6(2)(b) | Art 6(1)(b) | GDPR rolls (a)+(b) into single Art 6(1)(b) |
| Statutory obligation | s6(2)(c) | Art 6(1)(c) | Direct equivalent |
| Vital interests | s6(2)(d) | Art 6(1)(d) | Direct equivalent |
| Public task — administration of justice | s6(2)(e) | Art 6(1)(e) | PDPA narrower; codes "administration of justice" specifically |
| Public task — statutory functions | s6(2)(f) | Art 6(1)(e) | PDPA splits administration-of-justice and statutory-function across (e)+(f) |
| Legitimate interests | s6(2)(g) (with override where unwarranted by reason of prejudice to subject) | Art 6(1)(f) (with override where overridden by subject's rights) | Direct structural equivalent. PDPA practice rarely relies on this basis — most controllers default to consent — but the statutory ground exists |
| Minister-specified other | s6(2)(h) | (Member-State law in GDPR) | PDPA-only Ministerial extension |

## 5. Rights concepts

| Concept | PDPA section | GDPR article | Match |
|---|---|---|---|
| Receive information about processing | s7 (notice) | Arts 13-14 (information) | Partial |
| Access to own data | s30 | Art 15 | Direct |
| Rectification of inaccurate data | s34 | Art 16 | Direct |
| Erasure ("right to be forgotten") | s43 (A1727) | Art 17 | Direct post-A1727 |
| Restriction of processing | s44 (A1727) | Art 18 | Direct post-A1727 |
| Receive data in portable format | s43A (A1727) | Art 20 | Direct post-A1727 |
| Object to processing | s38 (limited to consent withdrawal) | Art 21 | PDPA narrower |
| Not be subject to automated decision | (anchored in s7 + s38 via ADMP Guideline) | Art 22 | GDPR codified standalone |
| Lodge complaint with regulator | Implicit | Art 77 | GDPR explicit |

## 6. Obligation concepts

| Concept | PDPA | GDPR | Match |
|---|---|---|---|
| Inform data subjects | s7 (Notice and Choice Principle) | Arts 13-14 | Partial |
| Process lawfully | s6 (General Principle) | Art 6 | Direct |
| Process only for stated purposes | s6 second limb | Art 5(1)(b) purpose limitation | Direct |
| Collect minimum data | Implicit in s6 | Art 5(1)(c) data minimisation | GDPR explicit |
| Keep data accurate | s11 (Data Integrity) | Art 5(1)(d) accuracy | Direct |
| Retain only as long as necessary | s10 (Retention) | Art 5(1)(e) storage limitation | Direct |
| Implement appropriate security | s9 (Security) + PDP Standards 2015 | Art 32 (security) | Direct |
| Demonstrate compliance | (not codified) | Art 5(2) accountability | **PDPA has no equivalent** |
| Notify breaches | s12B + DBN Guideline | Arts 33-34 | Direct on SA clock |
| Conduct DPIA | s137 + DPIA Guideline | Art 35 | Direct |
| Appoint DPO | s12A + DPO Guideline | Arts 37-39 | PDPA broader scope |
| Maintain RoPA | s138 | Art 30 | Direct |
| Privacy by design | DPbD Guideline | Art 25 | Direct |
| Manage cross-border transfers | s129/s129A + CBPDT Guideline | Chapter V | Direct |
| Engage processors via contract | Implicit in s9 | Art 28 + DPA | GDPR more prescriptive |

## 7. Enforcement concepts

| Concept | PDPA | GDPR | Match |
|---|---|---|---|
| Individual criminal penalty | Yes (per offence, post-A1727: up to RM1M / 3 years) | National law variation | PDPA codified |
| Corporate administrative penalty | s130 (RM3M or 10% Malaysian turnover) | Art 83 (€20M or 4% global) | Different bases |
| Officer personal liability | s133A | National law variation | PDPA codified |
| Civil damages | Not codified the same way | Art 82 (codified) | GDPR explicit |
| Compounding | Compounding of Offences Regulations 2016 (50% of max) | Not applicable | PDPA-specific settlement mechanism |
| Continuing offence | s128(3) (RM5,000/day) | Per-day fine via Art 83 | Concept equivalent |
| Enforcement notice | s110 | Art 58 | Direct |
| Investigation | s101-s103 | Art 58(1) | Direct |

## 8. Authority hierarchy

| PDPA | GDPR |
|---|---|
| Act 709 + A1727 (statutory) | Regulation (EU) 2016/679 (statutory) |
| Federal Court decisions (limited PDPA case law) | CJEU decisions |
| Personal Data Protection Regulations 2013 | Member State implementing acts |
| PDP Standards 2015 | Commission implementing acts |
| JPDP issued guidelines (DPIA / DPbD / ADMP / DPO / DBN / CBPDT / Privacy Notice) | EDPB Guidelines (adopted) |
| Sectoral CoPs (s23 — 8 registered) | Article 40 Codes of Conduct |
| JPDP enforcement actions | National SA decisions |
| Commentary (illustrative) | Commentary (illustrative) |

## 9. Discipline concepts

| PDPA discipline | GDPR discipline |
|---|---|
| Issued-vs-PCP — PCP No. 1/2/3/2025 vs April 2026 issued | EDPB Guideline version pinning + draft vs adopted |
| BM authoritative text for April 2026 guidelines | All 24 EU language versions equally authoritative; English typically used |
| Class of Data Users check (sectoral CoP applicability) | Article 40 Code adherence (voluntary) |
| Senior management escalation for HIGH residual DPIA | Article 36 prior consultation with SA for HIGH residual DPIA |
| Lead regulator: single JPDP | Lead SA via OSS (Art 56) for cross-border |
| Parallel clock: NACSA 6h for NCII | Parallel clock: NIS2 24h for in-scope entities |

## 10. The structural difference summary

The largest structural differences:

1. **Accountability over-principle** — GDPR Art 5(2); no PDPA equivalent
2. **Legitimate interests basis** — both regimes codify it (GDPR Art 6(1)(f); PDPA s6(2)(g)). The structural test is similar (balancing against subject's rights), but PDPA practice rarely relies on it — consultants should not advise "use legitimate interests" without checking the client's appetite for novel basis selection
3. **Article 22 standalone right** — GDPR codified; PDPA anchors in s7 + s38
4. **Civil damages** — GDPR Art 82 codified; PDPA not codified the same way
5. **DPO mandatory scope** — PDPA universal (all controllers + processors); GDPR activity-based
6. **Breach subject communication** — PDPA codified 7-day clock; GDPR "without undue delay"
7. **Lead regulator** — GDPR OSS via Art 56; PDPA single regulator
8. **Sectoral codes** — PDPA mandatory for Class; GDPR voluntary

For dual-regime engagements, design to the stricter side of each divergence.

## Cross-references

- [`pdpa-vs-gdpr.md`](pdpa-vs-gdpr.md) — full obligation side-by-side
- [`obligations.md`](obligations.md) — obligation-grid mapping

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. |
