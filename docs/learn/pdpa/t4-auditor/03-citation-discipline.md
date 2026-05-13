# Citation discipline — the issued-vs-leading-practice gate

> **Tier 4 / Lesson 3 — 60 minutes.** This lesson cross-links to the Citation Discipline Guide v2.0+. Read it before drafting any audit finding.

## Why this lesson matters more than any other in T4

The most consistent reason a junior auditor's findings get rejected at partner review is **citation error**. The work is substantively correct; the controller has a real gap; the auditor identifies it. But the citation is wrong — typically because the auditor was trained on PCP No. 1/2/3 of 2025 and the issued April 2026 guideline says something different.

In the audit team's first sample of 50 reports after the April 2026 guidelines, **24 reports contained at least one PCP-vs-issued citation error**. Almost half. Citation discipline is the gate that closes this.

## The Citation Discipline Guide

Maintained at [`Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md). Current version v2.0 (verified 2026-05-01).

The guide has six sections:

| Section | Content | Used by |
|---|---|---|
| §1 Self-check checklist | 10 yes/no items to run through before passing to engagement manager | Junior auditor |
| §2 Decision flowchart | "Is this finding citable under JPDP?" — text-rendered tree | Junior auditor; engagement manager |
| §3 Common errors table | 11 most-cited errors with correct framing | All levels — partner review gate |
| §4 Sectoral CoP patterns | Class of Data Users 3-step check + S1-S7 sectoral errors | Engagement manager |
| §5 Worked examples | 5 wrong-to-right transformations | Junior auditor — examples |
| §6 Citation framing structure | What every JPDP-citing finding must contain | All levels |

Read the guide end-to-end before drafting any finding. The lessons in T1-T3 referenced this material in passing; T4 makes it the central discipline.

## Two simple rules

### Rule 1 — cite section numbers, not guideline names

**Wrong**: "The JPDP DPbD Guideline requires parental consent for children."
**Right**: "The JPDP DPbD Guideline §5.3 requires valid consent on behalf of data subjects under 18 years of age, obtained from parent, guardian, or person with parental responsibility."

The §-number test: can the reader navigate directly to the cited obligation? If yes, the citation passes. If no, it fails.

### Rule 2 — flag every finding as ISSUED REQUIREMENT or LEADING PRACTICE

**ISSUED REQUIREMENT** = the obligation appears in the issued BM PDF in `Tech-Audit/Regulatory/PDPA/References/Guidelines/`. Cite the JPDP guideline + section number.

**LEADING PRACTICE** = the obligation is good practice but NOT in the issued text. Cite GDPR / NIST / ICO / ISO / etc. Do NOT cite the JPDP guideline.

The flag forces the auditor to make the judgment explicitly. A finding without the flag is incomplete.

## The 11 common errors — the partner-review gate

The §3 table (full version in the Citation Discipline Guide). Memorise these:

| # | Cited as JPDP requirement | Actual status |
|---|---|---|
| 1 | Right to Human Review (in ADMP) | Cross-jurisdictional best practice — PCP §2.13(c) dropped |
| 2 | 21-day SLA for human review | Cross-jurisdictional best practice — not in issued |
| 3 | Right to Refuse (standalone) | Anchored in s38 withdrawal of consent only |
| 4 | Profiling/marketing-of-children prohibition | Cross-jurisdictional — PCP §2.57 dropped from both DPbD and ADMP |
| 5 | Cavoukian 7 foundational principles | Issued DPbD lists 4 elements (Section 4) |
| 6 | Commissioner-portal HIGH-residual DPIA notification | PCP §2.18 dropped; senior management report only |
| 7 | Biometric measures (anti-spoofing, separate storage, etc.) | NOT in issued ADMP — PCP §2.26-2.32 dropped |
| 8 | CCTV measures | NOT in issued ADMP — PCP §2.33-2.35 dropped |
| 9 | AI 'no manipulation' safeguard | PCP §2.25(b) dropped |
| 10 | Explicit consent for §9.9.3 ADMP Exception | Downgraded to plain consent; explicit only for sensitive PD under s40(1)(a) |
| 11 | "Right to Information retained under Exceptions" | PCP §2.16 doctrine not in issued; §9.3 + §9.4 framework instead |

Any finding citing any of these 11 under JPDP authority is a partner-review reject.

## The 10-item self-check (§1 of the Guide)

Before passing a finding to the engagement manager, verify each item:

| # | Check |
|---|---|
| 1 | Source identified — name the specific JPDP guideline / Act 709 section / regulation / sectoral CoP / cross-jurisdictional standard |
| 2 | Section number cited — every JPDP citation includes a section number |
| 3 | Issued vs leading-practice flag — explicit |
| 4 | Common error check — finding is not on the 11-error list |
| 5 | BM source verified — for April 2026 guidelines, BM PDF in References/ |
| 6 | Module trail traceable — citation resolves to pdpa-my/ entry |
| 7 | Sectoral CoP check — if cited, controller is in the Class |
| 8 | Internal vs external citation form — workpaper uses local paths; report uses public URLs |
| 9 | Penalty exposure verified against pdpa-my/penalties/index.json |
| 10 | Severity calibrated against §3.2 Methodology |

A finding that fails any of these is not ready for review.

## The decision flowchart — when in doubt

```
Is the rule from PCP No. 1, 2, or 3 of 2025?
  └─ YES → Is it in the 11-error list?
            ├─ YES → NOT JPDP-issued; reframe to cross-jurisdictional
            └─ NO  → Verify against issued BM PDF
                      Survived → cite issued §-number
                      Didn't  → add to error list + reframe
  └─ NO  → Is the rule from a pre-April-2026 JPDP guideline
           (DPO / DBN / CBPDT)?
           ├─ YES → Verify against issued PDF; cite
           └─ NO  → Is the rule from Act 709 / A1727 / Regulations 2013 /
                    Standards 2015?
                    ├─ YES → Statutory citation; verify against gazetted text
                    └─ NO  → Is the rule from a sectoral CoP?
                             ├─ YES → 3-step Class of Data Users check
                             └─ NO  → Cross-jurisdictional best practice
                                      (GDPR / NIST / ICO / ISO / etc.)
                                      Flag as LEADING PRACTICE
```

A finding that doesn't traverse this flowchart in writing has not been disciplined.

## The internal vs external citation distinction

Internal workpaper citation format:

```
JPDP DPbD Guideline §5.3 (issued April 2026, BM)
Reference: Tech-Audit/Regulatory/PDPA/References/Guidelines/
           JPDP-Guideline-DPbD-2026-04.pdf, line 145
Module trail: pdpa-my/dpbd/childrens-privacy.json,
              issuedRequirements[0]
```

External (audit report) citation format:

```
JPDP DPbD Guideline §5.3 (issued 30 April 2026)
Source: https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2026/04/
        GARIS-PANDUAN-MEREKA-BENTUK-BERDASARKAN-PERLINDUNGAN-DATA-DPbD-1.pdf
```

The internal version cites local paths and pdpa-my module trail; the external version cites the public JPDP URL. Mixing the two — local paths in an external report — is unprofessional and shows the report was not properly prepared.

## Sectoral CoP citation patterns (§4 of the Guide)

Sectoral CoPs apply where the controller is in the relevant Class of Data Users. The 3-step check:

1. **Primary licensing regime** — what law does the controller operate under?
2. **Class registration** — does the regime correspond to a registered Class?
3. **Activity scope** — is the controller's specific activity in the CoP's scope?

Sectoral CoP errors (S1-S7) include citing General CoP for an in-class entity (S1) and citing sectoral CoP for an out-of-class entity (S2). Both are partner-review rejects.

## Worked examples — §5 of the Guide

Five wrong-to-right transformations covering:

1. ADM no human review (CC1 — citation error #1)
2. Children profiling for marketing (CC4)
3. DPIA HIGH residual Commissioner notification (CC6)
4. Banking sector finding cited under General CoP (sectoral pattern S1)
5. Cookie banner with opt-out default (CC5)

Each example shows the wrong citation + why it's wrong + the correct framing. The substance of the finding usually survives; the citation changes.

## What this lesson does not cover

This lesson is operational discipline. The substantive content of the issued guidelines lives in the T1-T3 lessons and the guideline deep-dives (g1-g7). For a specific obligation's content, see the relevant deep-dive.

## GDPR parallel

GDPR has the analogous discipline:
- **CJEU > EDPB > national SA > commentary** hierarchy
- EDPB Guideline version pinning + adoption vs draft distinction
- National SA position differences (CNIL stricter on cookies than EDPB; Italian Garante leading on ChatGPT etc.)
- Schrems II overrode prior practice — citation discipline must check CJEU before relying on EDPB

Parallel reading: [GDPR T4 Lesson 3 — EDPB discipline](../../gdpr/t4-auditor/03-edpb-guideline-discipline.md).

## What's next

[Lesson 4 — Finding craft](04-finding-craft.md). Putting the citation discipline together with the 5 Cs to produce a defensible finding.
