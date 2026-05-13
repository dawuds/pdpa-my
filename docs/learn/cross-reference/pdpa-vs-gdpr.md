# PDPA (Malaysia, Act 709 + A1727 + April 2026 Guidelines) vs GDPR (EU, Reg. 2016/679)

**Version:** 1.0
**Last verified:** 2026-05-13
**Owner:** pdpa-my / Tech-Audit cross-team

This document is the canonical side-by-side for the consulting team. Use it when scoping engagements that touch both regimes (most cross-border SaaS / cloud / multinational clients), when briefing a GDPR-trained joiner on PDPA (or vice versa), or when drafting findings that need cross-jurisdictional alternative citations.

The mapping is at concept level — translation is not always 1:1. Specific differences are flagged in the Notes column.

---

## 1. Scope and territorial reach

| Dimension | PDPA | GDPR | Notes |
|---|---|---|---|
| Triggering test | "Commercial transaction" in Malaysia (Act 709 s2) | Establishment in EU (Art 3(1)) OR targeting/monitoring EU subjects (Art 3(2)) | GDPR's targeting arm is far broader |
| Government carve-out | Yes — government as data controller is out of scope | No — public bodies in scope with Article 6(1)(e) public-task lawful basis | Major structural difference |
| Non-EU/non-Malaysia controller binding | Foreign controllers in scope if commercial transaction in Malaysia | Foreign controllers in scope under Art 3(2) targeting arm | GDPR's Art 27 also requires non-EU controllers to appoint an EU representative |
| Sectoral carve-outs | None substantive | Member state derogations possible (Art 23) — e.g., national security, defence, public security | Less variation under PDPA |

## 2. Penalty exposure

| Dimension | PDPA (post-A1727) | GDPR | Notes |
|---|---|---|---|
| Individual penalty max | RM1,000,000 / 3 years (per offence) | n/a (corporate-focused) | GDPR does not directly fine individuals; criminal liability via national law |
| Corporate penalty max | RM3,000,000 or **10% of Malaysian turnover** (whichever higher) — s130 | 20,000,000 EUR or **4% of worldwide turnover** (whichever higher) — Art 83(5) | GDPR's global-turnover base is usually larger for multinational clients |
| Officer personal liability | Yes — s133A (criminal + financial) | National law — varies | A1727 created direct personal exposure |
| Continuing offence | RM5,000 / day (s128(3)) | Daily fine possible under Art 83 | Per-day mechanic is similar |
| Compounding | Yes — Compounding of Offences Regulations 2016, 50% of max fine | n/a — fines are administrative | Compounding is a PDPA-specific settlement mechanism |

## 3. Principles

| GDPR Article 5 | PDPA Principle | Mapping note |
|---|---|---|
| 5(1)(a) Lawfulness, fairness, transparency | General (s6) + Notice and Choice (s7) | GDPR fuses what PDPA splits |
| 5(1)(b) Purpose limitation | General (s6) second limb | PDPA has no separate purpose-limitation principle |
| 5(1)(c) Data minimisation | General (s6) third limb | PDPA absorbs minimisation into General |
| 5(1)(d) Accuracy | Data Integrity (s11) | Direct equivalent |
| 5(1)(e) Storage limitation | Retention (s10) | Direct equivalent |
| 5(1)(f) Integrity and confidentiality | Security (s9) | Direct equivalent; PDP Standards 2015 operationalises s9 as Art 32 operationalises 5(1)(f) |
| (no GDPR equivalent) | Disclosure (s8) | PDPA-specific; GDPR absorbs into Art 6 + purpose limitation |
| 5(2) Accountability | (no formal PDPA equivalent) | Largest structural gap; A1727 creates de facto accountability via RoPA / DPIA / DPO |

## 4. Lawful basis

| GDPR Article 6(1) | PDPA equivalent | Notes |
|---|---|---|
| (a) Consent | s6(1) (the default rule — consent is required unless s6(2) applies) | PDPA consent + GDPR consent are similar; both require freely-given, specific, informed |
| (b) Contract | s6(2)(a) (performance) + s6(2)(b) (pre-contractual steps at subject's request) | PDPA splits performance and pre-contractual into two grounds; GDPR rolls them into Art 6(1)(b) |
| (c) Legal obligation | s6(2)(c) | Direct equivalent |
| (d) Vital interests | s6(2)(d) | Direct equivalent |
| (e) Public task | s6(2)(e) (administration of justice) + s6(2)(f) (exercise of functions conferred by/under written law) | PDPA splits public-task into administration-of-justice and statutory-function across (e)+(f) |
| (f) Legitimate interests | s6(2)(g) — "legitimate interests pursued by the data controller … except where the processing is unwarranted in any particular case by reason of prejudice to the rights and freedoms or legitimate interests of the data subject" | Direct structural equivalent. Both regimes include a balancing test (PDPA's is "unwarranted by reason of prejudice"; GDPR's is overridden by data subject's interests). The practical difference is cultural, not statutory: PDPA practice almost always defaults to consent, while GDPR controllers routinely rely on Art 6(1)(f) for marketing analytics, fraud prevention, and security |
| (h) Other | s6(2)(h) Minister-specified | PDPA Ministerial extension power; GDPR equivalent is Member-State law under Art 6(2) |

## 5. Data subject rights

| GDPR | PDPA | Match quality |
|---|---|---|
| Information (Art 13, 14) | Notice (s7) | Partial — GDPR's mandatory elements are broader |
| Access (Art 15) | Access (s30) | Direct; 21-day vs 1-month timing difference |
| Rectification (Art 16) | Correction (s34) | Direct |
| Erasure (Art 17) | s43 (NEW under A1727) | Direct post-A1727 |
| Restriction (Art 18) | s44 (NEW under A1727) | Direct post-A1727 |
| Portability (Art 20) | s43A (NEW under A1727) | Direct post-A1727 |
| Object (Art 21) | s38 withdrawal of consent (partial) | **PDPA is narrower**; right to object outside consent withdrawal is not codified |
| Automated decisions (Art 22) | JPDP ADMP Guideline (issued April 2026) | **PDPA's ADMP is materially narrower than Art 22**; no standalone right to refuse, no right to human review codified |

## 6. Sensitive / special category data

| Dimension | PDPA | GDPR | Notes |
|---|---|---|---|
| Categories | Health, political, religious, criminal, biometric (post-A1727 s4) | Racial/ethnic, political, religious, trade union, genetic, biometric (for unique identification), health, sex life / orientation | GDPR is broader (includes trade union, sex life) |
| Default rule | Prohibited except under s40 conditions | Prohibited except under Art 9(2) conditions | Both have explicit-consent + other exception model |
| Explicit consent | s40(1)(a) "persetujuan secara nyata" | Art 9(2)(a) explicit consent | Direct equivalent |
| Public-interest condition | s40(1)(b) limited grounds (employment, vital interests, medical, legal proceedings) | Art 9(2) ten grounds including substantial public interest | GDPR is broader |

## 7. DPO

| Dimension | PDPA (s12A post-A1727) | GDPR (Art 37-39) | Notes |
|---|---|---|---|
| Mandatory trigger | All controllers and processors (s12A(1), (2)) | Public bodies; large-scale regular and systematic monitoring; large-scale special category processing (Art 37(1)) | PDPA scope is broader; GDPR is triggered by activity |
| Notification to regulator | Yes — via JPDP SPDP portal | Yes — to SA | Both regimes require notification |
| Independence | Required (DPO Guideline 2025) | Required (Art 38) | Equivalent |
| Reporting line | "Accountable to the data controller" | "Reports directly to highest management" (Art 38(3)) | GDPR is more specific |

## 8. Breach notification

| Dimension | PDPA (s12B post-A1727) | GDPR (Art 33, 34) | Notes |
|---|---|---|---|
| To regulator | 72 hours (per JPDP DBN Guideline 2025) | 72 hours (Art 33) | Same clock |
| To data subjects | 7 days (per JPDP DBN Guideline 2025) | Without undue delay where high risk (Art 34) | PDPA codifies a 7-day clock; GDPR is open-ended |
| Threshold for SA notification | "Notifiable" (significant harm likely) | Likely to result in risk to rights and freedoms | Similar standard |
| Threshold for subject notification | Significant harm likely | High risk to rights and freedoms | Similar |
| Documentation | Not specified | Article 33(5) — controller documents all breaches even where not notified | GDPR has explicit documentation obligation |

## 9. Cross-border transfer

| Dimension | PDPA (s129 + s129A post-A1727) | GDPR (Chapter V) | Notes |
|---|---|---|---|
| Whitelist / adequacy | Ministerial whitelist (s129(2)) | Commission adequacy decision (Art 45) | Both regimes use an "approved jurisdictions" model |
| SCCs | Yes (post-A1727) | Yes (2021 modular SCCs) | PDPA imports the GDPR model |
| BCRs | Yes (post-A1727) | Yes (Art 47) | Direct equivalent |
| Certification | Yes (post-A1727) | Yes (Art 42, 46(2)(f)) | Direct equivalent |
| Derogations | s129(3) — consent, contract, public interest, legal claims, vital interests | Art 49 — same set of derogations | Direct equivalent |
| Transfer Impact Assessment | Expected per JPDP CBPDT Guideline 2025 | Required post-Schrems II per EDPB Recommendations 01/2020 | GDPR's TIA framework is more developed |

## 10. DPIA

| Dimension | PDPA (JPDP DPIA Guideline April 2026) | GDPR (Art 35) | Notes |
|---|---|---|---|
| Trigger | 2 quantitative thresholds + 7 qualitative factors (issued §7) | "Likely to result in a high risk" + Art 35(3) specified categories + SA blacklists | Both regimes have triggering tests; PDPA is more numerically-anchored |
| Methodology | DEICA 5-step | Not prescribed; EDPB DPIA Guidelines suggest steps | PDPA prescribes; GDPR allows controller choice |
| Validity | 2 years from completion (must redo, not just review) | Not specified; review when processing changes | PDPA-specific obligation |
| Regulator notification | NOT required (senior management report only) | Article 36 prior consultation where high residual risk | GDPR requires SA consultation; PDPA dropped this from PCP |
| Retention | 2 years from cessation of processing | Not specified | PDPA-specific |

## 11. Privacy by Design / DPbD

| Dimension | PDPA (JPDP DPbD Guideline April 2026) | GDPR (Art 25) | Notes |
|---|---|---|---|
| Statutory anchor | s5 PDP Principles compliance | Art 25(1) data protection by design + Art 25(2) by default | GDPR codifies directly; PDPA codifies via guideline |
| Framework | 4 elements (Sifat Proaktif / Perlindungan Hujung-ke-hujung / Ketelusan / Berpusatkan Pengguna) | EDPB Guidelines 4/2019 on Art 25 | PDPA does NOT adopt Cavoukian 7 principles |
| Children's privacy | §5.3 / §10.2 / §11.2 — parental consent + accessible mechanisms only | Art 8 + Recital 38 — broader children's protections | GDPR is broader on children |
| Governance practices | Section 13 — board expertise, senior accountability, KPIs, board reporting | Implied by Art 5(2) accountability + Art 24 | PDPA codifies Section 13 explicitly |

## 12. Automated decision-making

| Dimension | PDPA (JPDP ADMP Guideline April 2026) | GDPR (Art 22) | Notes |
|---|---|---|---|
| Trigger | Ambang ADMP: legal effects OR significantly affects | Solely automated, legal effects OR similarly significantly affects | Substantively similar |
| Right to refuse | Anchored in s38 withdrawal of consent only | Art 22(1) standalone right | GDPR is broader |
| Right to information | §9.3 mandates fact-of-ADM disclosure only; §9.4 permissive logic explanation with carve-outs | Art 13(2)(f), 14(2)(g), 15(1)(h) — meaningful information about the logic required | GDPR transparency is stronger |
| Right to human review | NOT codified | Art 22(3) — at least the right to human intervention | GDPR provides; PDPA does not |
| Exceptions | Contract / legal compliance / consent (NOT explicit consent) | Contract / authorised by law / explicit consent | Similar but PDPA downgraded explicit consent to plain consent |
| Sensitive PD | s40 conditions apply; safeguards permissive | Art 22(4) — only under Art 9(2)(a) or (g) + suitable safeguards | GDPR is stricter |
| Children | Not addressed in ADMP Guideline | Art 22 + Recital 71 — special protection | GDPR codifies; PDPA does not |
| Biometric measures | Deferred (not in issued ADMP Guideline) | Art 9(1) special category | GDPR catches biometric directly |
| AI safeguards | §10.2 — 7 best practices, permissive (`boleh`) | Not GDPR-specific; AI Act overlays | PDPA addresses AI in guideline; GDPR addresses via Art 22 + AI Act |

## 13. RoPA / records of processing

**Provenance.** The obligation originates in GDPR Article 30, in force 25 May 2018. Art 30 replaced the heavier *notification* regime of the 1995 Directive (95/46/EC Art 18), under which controllers filed with the supervisory authority on creation. The shift from notify-on-creation to maintain-and-make-available-on-request became the global template. PDPA s138 (introduced by A1727, in force 1 June 2025) is the Malaysian implementation — deliberately modelled on Art 30 and tracking its elements almost line-for-line. The BM authoritative term is *Rekod Pemprosesan Data Peribadi*; "RoPA" is GDPR-flavoured industry shorthand.

| Dimension | PDPA (s138 post-A1727) | GDPR (Art 30) | Notes |
|---|---|---|---|
| Mandatory trigger | All controllers / processors | All with caveats (Art 30(5) micro-enterprise exception almost never applies) | PDPA is broader |
| Required elements | A1727 s138 specifies elements | Art 30(1) for controllers + 30(2) for processors specifies elements | s138 tracks Art 30(1) almost element-for-element |
| Processor-side obligation | Implicit in s9 (security cascades) | Codified separately in Art 30(2) | GDPR more prescriptive |
| SA access | On request | Article 30(4) — make available on request | Direct equivalent |
| Origin | Introduced by A1727 (no Act 709 equivalent pre-2025) | Introduced by GDPR (replaced 1995 Directive Art 18 notification) | Both jurisdictions shifted from notify-on-creation to maintain-and-make-available |

## 14. Documentation summary — the controller's "must-have" set

Whichever regime applies, a defensible programme produces these documents:

1. **RoPA** — Article 30 (GDPR) / s138 (PDPA A1727)
2. **Privacy notice(s)** — Articles 13/14 (GDPR) / s7 (PDPA)
3. **DPIA register + individual DPIA reports** — Article 35 (GDPR) / s137 (PDPA) + JPDP DPIA Guideline
4. **Breach response plan + register** — Articles 33-34 (GDPR) / s12B (PDPA)
5. **DPO appointment + Commissioner notification** — Articles 37-39 (GDPR) / s12A (PDPA)
6. **Lawful basis register / LIA** — Article 6 (GDPR) / s6 (PDPA)
7. **Cross-border transfer register + TIAs + SCCs / BCRs** — Chapter V (GDPR) / s129, s129A (PDPA)
8. **Vendor / processor management** — Article 28 (GDPR) DPAs / s9 (PDPA)
9. **Data subject rights log** — Articles 15-22 (GDPR) / s30-44 (PDPA)
10. **Training records** — Article 39(1)(b) (GDPR) / implicit (PDPA)

The structure is similar enough that a controller defensible under one regime is broadly defensible under the other, with sector- and content-level adjustments.

## 15. Where the regimes diverge sharply

For consulting team scoping, the divergences that warrant explicit attention:

1. **Government carve-out** — PDPA does not bind government; GDPR does
2. **Legitimate interests basis** — both regimes codify it (PDPA s6(2)(g); GDPR Art 6(1)(f)). Practice diverges: GDPR controllers routinely rely on Art 6(1)(f) for marketing analytics, fraud prevention, security; PDPA practice defaults to consent. The statutory ground exists in PDPA — the appetite to use it does not
3. **Article 22 vs ADMP** — GDPR right to human review is codified; PDPA ADMP does not codify it
4. **Children's protection** — GDPR (Article 8 + Recital 38) is broader; PDPA reduced PCP children's content to three short paragraphs
5. **Accountability over-principle** — GDPR Article 5(2); no PDPA equivalent
6. **Biometric / CCTV measures** — PCP-derived only; not in issued PDPA guidelines
7. **Penalty base** — PDPA: 10% Malaysian turnover. GDPR: 4% global turnover

For an engagement where the client has both EU and Malaysian exposure, scope the GDPR work to the broader / stricter side of each divergence — that approach typically satisfies both regulators.

---

## Changelog

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-05-13 | Tech-Audit / pdpa-my cross-team | Initial release. Verified against issued JPDP guidelines (DPIA / DPbD / ADMP April 2026; DPO / DBN / CBPDT 2025) and consolidated GDPR text from EUR-Lex. |
