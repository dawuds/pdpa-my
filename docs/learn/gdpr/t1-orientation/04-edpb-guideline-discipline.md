# EDPB Guideline discipline — the citation hierarchy

> **Tier 1 / Lesson 4 — 15 minutes.** Parallel to PDPA Lesson 4. The discipline that separates a defensible finding from a blog-derived one.

## The hierarchy of GDPR authority

GDPR is not a single text — it is a layered body of authority. Findings, advice, and audit conclusions should cite the highest applicable layer.

| Rank | Source | Weight | Example |
|---|---|---|---|
| 1 | **Regulation (EU) 2016/679** consolidated text | Binding law | Article 5(1)(c) data minimisation |
| 2 | **Court of Justice of the European Union (CJEU)** decisions | Binding interpretation | C-311/18 *Schrems II*; C-210/16 *Wirtschaftsakademie*; C-25/17 *Jehovah's Witnesses* |
| 3 | **Implementing acts** and adequacy decisions | Binding instruments | Commission Implementing Decision 2021/914 (SCCs); UK adequacy decision (2021); SCC modules |
| 4 | **EDPB Guidelines** (issued, not draft) | Authoritative interpretation; not binding but practical effect | Guidelines 4/2019 on Article 25 PbD; Guidelines 9/2022 on personal data breach notification |
| 5 | **EDPB Opinions** and Decisions | Authoritative | Opinions on adequacy; Article 65 dispute resolution decisions |
| 6 | **National Supervisory Authority** guidance | Authoritative within that jurisdiction; persuasive elsewhere | CNIL guidance; ICO guidance; DSK guidance |
| 7 | **National DPA decisions** | Authoritative within jurisdiction; persuasive elsewhere | Italian SA decisions on Replika / ChatGPT |
| 8 | **Academic commentary, professional bodies, law firm blogs** | Persuasive only | Mayer Brown / Bird & Bird client briefings; IAPP publications |

## When CJEU overrides everything below it

Schrems II (C-311/18) is the canonical example. Before July 2020, the EU-US Privacy Shield was a valid cross-border transfer mechanism. The CJEU invalidated it. Overnight, every controller relying on Privacy Shield was non-compliant. EDPB guidance, national SA guidance, and commentary that pre-dated the decision were obsolete within hours.

Implication for citation discipline: **CJEU decisions can render existing EDPB / SA / commentary positions wrong without warning**. Any finding citing EDPB guidance must be checked against subsequent CJEU case law before issuance.

## EDPB Guidelines — version pinning matters

EDPB Guidelines go through:

1. **Draft for public consultation** — typically 6-8 weeks
2. **Final adoption** — after considering consultation feedback
3. **Subsequent revisions** — Guidelines 1/2020 has had multiple revisions; Guidelines on Article 25 PbD revised after the original 4/2019

Citation rule: **cite the Guideline number AND the version number AND the adoption date**. "EDPB Guidelines on consent" is insufficient; "EDPB Guidelines 5/2020 on Consent (version 1.1, adopted 4 May 2020)" is defensible.

A finding citing a draft (pre-adoption) Guideline is a partner-review reject. Drafts can change materially in final adoption.

## When EDPB and national SA diverge

National SAs occasionally take positions that diverge from EDPB Guidelines. CNIL (France) has been particularly active on this — its position on cookie walls, on legitimate interests for direct marketing, and on the necessity test for cookies has at times been stricter than EDPB consensus.

Practical guidance:

- **Within the SA's jurisdiction**: the national SA position is operationally binding for clients within that jurisdiction
- **Cross-border**: cite the EDPB position as the consensus baseline; flag the divergent SA position; advise the client to apply the stricter rule where its processing reaches that jurisdiction

## When commentary is acceptable

Almost never as authority. Acceptable for:

- **Explaining a regulator's likely interpretation** where the regulator has not yet published — e.g., commentary on the AI Act's intersection with GDPR before EDPB issues consolidated guidance
- **Comparative analysis** — how a particular GDPR concept maps to other regimes
- **Background education** for clients

Never cite commentary as evidence that an obligation exists. The Regulation, CJEU, and EDPB are where obligations come from.

## The discipline that solves this

Three rules for every GDPR-citing finding:

1. **Cite Article + sub-paragraph.** "Article 13" is insufficient; "Article 13(2)(f)" is defensible.

2. **Cite EDPB Guidelines by number and version.** "Per EDPB Guidelines" is insufficient; "Per EDPB Guidelines 9/2022 on Personal Data Breach Notification §X" is defensible.

3. **Check CJEU first.** Before relying on an EDPB Guideline, verify no subsequent CJEU decision has materially changed the position. The EDPB website lists Guidelines that have been "updated to reflect" CJEU decisions; these supersede prior versions.

## PDPA parallel

PDPA's equivalent is the **issued-vs-PCP distinction**. The April 2026 issued guidelines diverge from the March 2025 consultation papers on at least 11 material points; citing the PCP under JPDP authority is a partner-review reject.

PDPA does not have a CJEU equivalent — there is no supranational PDPA court. Federal Court of Malaysia decisions on PDPA matters, where they exist, sit at the top of the PDPA hierarchy, but the case law is thin.

The structural similarity: both regimes have a layered authority hierarchy and both have an "issued vs consultative" trap. The Citation Discipline Guide for PDPA at [Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md) is the parallel discipline manual.

Parallel reading: [PDPA T1 Lesson 4 — Issued vs PCP](../../pdpa/t1-orientation/04-issued-vs-pcp.md).

## What's next

[Lesson 5 — GDPR orientation checkpoint](05-checkpoint.md). Ten questions. If you cannot answer eight, re-read.
