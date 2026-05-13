# EDPB Guidelines and CJEU case law — citation discipline

> **Tier 4 / Lesson 3 — 60 minutes.** Parallel to PDPA T4 Lesson 3. The hierarchy of authority + Schrems II as the canonical example of CJEU overriding established practice.

## The hierarchy of GDPR authority

Re-stated from T1 Lesson 4 because it is foundational to audit work:

| Rank | Source |
|---|---|
| 1 | Regulation (EU) 2016/679 consolidated text |
| 2 | CJEU decisions on GDPR |
| 3 | Commission implementing acts (2021 SCCs etc.) + adequacy decisions |
| 4 | EDPB Guidelines (adopted, not draft) + Opinions + Article 65 decisions |
| 5 | National Supervisory Authority guidance |
| 6 | National SA decisions |
| 7 | Academic commentary, professional bodies, law firm publications |

A GDPR finding cites the highest applicable layer. "EDPB says X" is acceptable when X is in an issued Guideline; "law firm blog says X" is never an authoritative citation.

## Schrems II — the canonical CJEU-overrides-EDPB example

CJEU C-311/18 (Schrems II, 16 July 2020) invalidated the EU-US Privacy Shield AND held that SCCs alone are insufficient where the receiving jurisdiction's law allows government access that undermines protection.

Before Schrems II:
- Privacy Shield was a valid adequacy mechanism for US transfers
- SCCs were treated as sufficient for non-adequate countries
- TIAs were not standard practice

After Schrems II:
- Privacy Shield invalidated overnight
- SCCs required supplementary measures
- TIAs became standard

Any EDPB Guideline pre-dating Schrems II that addressed cross-border transfers was partially obsolete. Controllers and auditors relying on pre-2020 EDPB guidance for cross-border work were exposed.

The discipline: **before citing an EDPB Guideline, verify no subsequent CJEU decision has materially changed the position**.

## Other CJEU decisions worth knowing

| Case | Year | Material change |
|---|---|---|
| C-210/16 *Wirtschaftsakademie* | 2018 | Broad interpretation of joint controllership; Facebook page operators are joint controllers with Meta |
| C-25/17 *Jehovah's Witnesses* | 2018 | Religious door-to-door member-data collection is controller activity within GDPR |
| C-40/17 *Fashion ID* | 2019 | Embedded Facebook Like button = joint controllership for the embedding website |
| C-311/18 *Schrems II* | 2020 | Cross-border transfer architecture (above) |
| C-184/20 *Vyriausioji rinkimų komisija* | 2022 | Inferred special category data (sexual orientation from spouse's name) within Article 9 |
| C-300/21 *UI v Österreichische Post* | 2023 | Article 82 damages — actual non-material harm required (not automatic from breach) |
| C-487/21 *F.F. v Österreichische Datenschutzbehörde* | 2023 | Article 15 access right; copy of data must be provided |
| C-26/22 + C-64/22 *SCHUFA Holding* | 2023 | Article 22 — credit scoring as automated decision; broader interpretation |
| C-621/22 *KNLTB* | 2024 | Legitimate interests basis — commercial interest can qualify but balancing must be rigorous |

Each of these has changed how controllers must operate. An auditor citing pre-decision EDPB guidance on these matters is partially defensible.

## EDPB Guideline version pinning

EDPB Guidelines go through:
1. Draft for public consultation (typically 6-8 weeks)
2. Final adoption after considering feedback
3. Subsequent revisions

The version pinning discipline:

| Citation form | Defensibility |
|---|---|
| "Per EDPB Guidelines" (no number) | Not defensible — partner-review reject |
| "Per EDPB Guidelines 5/2020 on consent" (no version) | Partial — better than nothing |
| "Per EDPB Guidelines 5/2020 on consent (version 1.1, adopted 4 May 2020)" | Defensible |

Draft (pre-adoption) Guidelines should NOT be cited as authority. A consultant citing a draft is presenting an SA's not-yet-finalised position as binding — this is technically incorrect.

## When EDPB and national SA diverge

National SAs sometimes take positions stricter than EDPB consensus. Examples:

- **CNIL** has been stricter on cookie walls and legitimate-interests basis for direct marketing
- **Italian Garante** led on ChatGPT enforcement
- **Spanish AEPD** has been active on Article 22 enforcement
- **Belgian SA** led on TCF / IAB Europe enforcement

For audit work:

- **Within the SA's jurisdiction** — the national SA position is operationally binding
- **Cross-border** — cite the EDPB position as consensus baseline; flag the divergent SA position; advise the client to apply the stricter rule where processing reaches that jurisdiction

## When commentary is acceptable

Commentary (law firm publications, IAPP, academic) is never authoritative. Acceptable uses:

- **Explaining a regulator's likely interpretation** before formal guidance exists (e.g., commentary on AI Act / GDPR intersection before EDPB issues consolidated guidance)
- **Comparative analysis** — how a concept maps across regimes
- **Background education** for clients

Never cite commentary as evidence that an obligation exists. The Regulation, CJEU, EDPB, and national SA decisions are the obligation sources.

## The discipline for every finding

Three rules:

1. **Cite Article + sub-paragraph** — "Article 13" insufficient; "Article 13(2)(f)" defensible
2. **Cite EDPB Guidelines by number, version, and date** — full pinning
3. **CJEU update check** — before relying on EDPB guidance, verify no subsequent CJEU decision has materially changed the position

The CJEU update check requires the auditor to monitor recent decisions. The EDPB website lists Guidelines that have been updated to reflect CJEU decisions; the absence of such an update note doesn't always mean the Guideline is current — read the recent CJEU decisions for the area being audited.

## Member State implementation variation

GDPR Article 23 permits Member State restrictions on data subject rights for specific purposes (national security; defence; public security; etc.). Article 9(4) permits Member States to maintain or introduce conditions for special category data processing.

For multi-Member-State clients, the audit scope must reflect Member State variation:

- **Article 6(1)(f) legitimate interests** — broadly consistent across Member States
- **Article 8 children's consent** — age threshold variable (default 16; Member States may lower to 13)
- **Article 23 restrictions** — Member State specific (e.g., national security exemptions)
- **Article 9(4) special category conditions** — Member State health / employment / research law overlays
- **Article 88 employment context** — Member State variation in employee data

A cross-Member-State controller may have different obligations in DE / FR / IT / IE / ES on the same processing activity. Audit scope must reflect this.

## Common citation-discipline gaps in GDPR audit work

The patterns the engagement manager catches:

1. **EDPB Guideline cited without version** — common; partner-review reject
2. **CJEU update check skipped** — auditor relies on pre-decision EDPB position
3. **Draft EDPB Guideline cited as authority** — should be flagged as draft, not authority
4. **Member State variation ignored** — single position cited across multiple jurisdictions
5. **National SA stricter position not flagged** — CNIL position cited as if it were EDPB consensus
6. **Commentary cited as authority** — IAPP / law firm cited as binding

## PDPA parallel

PDPA's citation discipline focuses on PCP-vs-issued and BM authoritative text. GDPR's focuses on EDPB version pinning and CJEU updates. Both share the discipline of citing specific section/article numbers + flagging the authority source.

Parallel reading: [PDPA T4 Lesson 3](../../pdpa/t4-auditor/03-citation-discipline.md).

## What's next

[Lesson 4 — Finding craft for GDPR](04-finding-craft-gdpr.md).
