# Writing a finding that maps to GDPR Article + EDPB Guideline

> **Tier 4 / Lesson 4 — 60 minutes.** Parallel to PDPA T4 Lesson 4. Deliverable: a sample finding on an Article 13 information-notice gap, fully cited.

## The 5 Cs apply to GDPR too

Same Condition / Criteria / Cause / Consequence / Corrective Action structure. The differences are in the citation form and the penalty exposure framing.

## A well-formed GDPR finding — worked example

**Scenario**: During fieldwork on DataAnalyticsCo (EU) Ltd — the AdTech firm from earlier lessons — the auditor identifies that the privacy notice does not disclose the use of automated decision-making for ad targeting. The notice mentions "we process your data to show you relevant ads" but no Article 13(2)(f) disclosure.

### The finding

> **Identifier**: F-DAC-INFO-003
>
> **Severity**: High
>
> **Status flag**: ISSUED REQUIREMENT (Article 13(2)(f) — codified obligation in GDPR text)
>
> **Audit procedure**: Procedure 03 (Information notices) step 4 — Article 13(2)(f) automated-decision disclosure check
>
> **Citation**:
> - **GDPR Article 13(2)(f)** — "the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject"
> - **GDPR Article 22(1)** — right not to be subject to solely automated decision with legal / similarly significant effect
> - **EDPB Guidelines on Automated Individual Decision-Making and Profiling** (originally WP251rev.01; adopted 6 February 2018)
> - **CJEU C-26/22 + C-64/22 SCHUFA Holding** (2023) — broader interpretation of Article 22 trigger for credit scoring (relevant by analogy for behavioural ad targeting)
>
> **Condition**: DataAnalyticsCo (EU) Ltd's privacy notice (version dated 2024-03; current production version) does not include any disclosure of automated decision-making or profiling, despite the company's core processing activity being ML-based behavioural ad targeting that produces personalised ad recommendations affecting EU subjects. The notice mentions "we process your data to show you relevant ads" without (a) acknowledging the processing is automated, (b) providing meaningful information about the logic involved, or (c) describing the significance and envisaged consequences for the data subject.
>
> **Criteria**: GDPR Article 13(2)(f) requires the controller to provide, in the information notice, the existence of automated decision-making, including profiling, plus meaningful information about the logic and the significance and envisaged consequences. This obligation applies where automated decision-making is referred to in Article 22(1) — i.e., decisions producing legal or similarly significant effects. The EDPB Guidelines on Automated Individual Decision-Making clarify that ad targeting can fall within Article 22 where the targeting has significant effect (e.g., differentiated pricing; access to opportunities; profiling against sensitive categories).
>
> **Cause**:
> - The privacy notice was last updated in March 2024, before the SCHUFA Holding decision (2023) broadened the Article 22 interpretation
> - The Marketing team's understanding of "automated decision-making" was limited to recommendation-engine outputs; profiling for ad targeting was treated as analytics rather than automated decision-making
> - The DPO review process for the privacy notice did not include a specific check against Article 13(2)(f)
> - The internal LIA for Article 6(1)(f) legitimate interests for ad targeting addressed lawfulness but did not address transparency disclosure
>
> **Consequence**:
> - **Regulatory**: Direct breach of Article 13(2)(f) — Article 83(5)(b) maximum penalty tier (20M EUR or 4% global turnover, whichever higher); SA enforcement action plausible given recent EDPB and national SA focus on AdTech transparency (Belgian SA TCF action 2022; Italian Garante 2023 enforcement on Replika; etc.)
> - **Data subject harm**: Subjects unaware of the automated nature of ad targeting cannot meaningfully exercise rights under Article 22 (right to obtain human intervention, express view, contest decision)
> - **Article 82 civil exposure**: Class actions for inadequate transparency are emerging; per C-300/21 *Österreichische Post* damages require actual non-material harm but the threshold is being tested
> - **Reputational**: AdTech firms have been the subject of public enforcement; brand exposure
>
> **Corrective Action**:
> - **30 days**: Update the privacy notice to include Article 13(2)(f) disclosure — clearly acknowledge automated decision-making + meaningful information about the logic (data inputs; model purpose; outputs) + significance and envisaged consequences (ad type personalisation; price differentiation; service-tier differentiation; etc.)
> - **30 days**: Update the LIA to address transparency disclosure under Article 13(2)(f) as a balancing factor
> - **60 days**: Implement an Article 22(3) safeguard pathway — mechanism for subjects to (a) obtain human review of significant ad-targeting decisions, (b) express their point of view, (c) contest decisions
> - **60 days**: DPO to verify the LIA three-part test reflects EDPB Guidelines on transparency
> - **90 days**: Operationalise the human-review pathway in the customer-facing platform
>
> **Evidence relied on**:
> - Inspection: privacy notice version dated 2024-03
> - Inspection: LIA documentation for Article 6(1)(f) legitimate interests
> - Inspection: DPO review log for the privacy notice
> - Inquiry: Head of Marketing confirmed ad targeting is ML-driven; estimated 100M decisions per day
> - Inquiry: DPO confirmed the privacy notice was not reviewed against Article 13(2)(f) specifically
> - Cross-reference: CJEU C-26/22 / C-64/22 SCHUFA Holding (2023) — Article 22 broader trigger interpretation
>
> **Sample**: One controller-wide privacy notice (single document); all relevant material reviewed

### What makes this finding defensible

1. **Specific article citation** — Article 13(2)(f) with quoted text; cross-reference to Article 22(1) and (4)
2. **EDPB Guideline cited with adoption date** — version pinned
3. **CJEU update check** — SCHUFA Holding (2023) referenced as supporting the Article 22 trigger interpretation
4. **ISSUED REQUIREMENT flag** — Article 13(2)(f) is codified Regulation text
5. **Severity rationale** — High because: direct codified breach, Article 83(5) penalty tier, recent SA enforcement focus
6. **5 Cs all present**
7. **Multi-layered Corrective Action** — notice update + LIA refresh + safeguard pathway operationalisation
8. **Evidence chain** — inspection + inquiry + CJEU cross-reference

## A poorly-formed GDPR finding — counter-example

> **Severity**: Medium
> **Finding**: DataAnalyticsCo's privacy notice doesn't mention automated decisions. The GDPR requires this. They should update the notice.

What's wrong (same patterns as PDPA Lesson 4 + GDPR-specific):
- "The GDPR" — Article not specified
- No EDPB Guideline reference
- No CJEU check
- 5 Cs not present
- Severity not justified
- Corrective Action lacks specificity
- No evidence reference

## Article-based vs domain-based finding structure

PDPA findings cite domains and controls (DPB-04, ADM-02, etc.). GDPR findings cite articles (Article 13(2)(f), Article 22(1), Chapter V, etc.).

For dual-regime findings on the same processing, the structure works either way — the substance is the same; the citation differs:

| Finding element | PDPA version | GDPR version |
|---|---|---|
| Citation | JPDP DPbD Guideline §5.3 + Act 709 s5 | Article 8 + EDPB Guidelines on children + Member State age threshold |
| Severity anchor | §3.2 of Methodology + s130 penalty exposure | Article 83 tier + national SA precedent |
| Module trail (internal) | pdpa-my/dpbd/childrens-privacy.json | Not directly applicable |
| Source PDF (internal) | References/Guidelines/JPDP-Guideline-DPbD-2026-04.pdf | EUR-Lex consolidated text + EDPB guideline PDF |
| Public URL (external) | JPDP wp-content URL | EUR-Lex URL + EDPB site URL |

## Article 82 civil exposure framing

GDPR findings against controller obligations often have Article 82 civil exposure beyond the administrative fine. Article 82 provides:

> "Any person who has suffered material or non-material damage as a result of an infringement of this Regulation shall have the right to receive compensation from the controller or processor for the damage suffered."

Per CJEU C-300/21 (2023), the threshold is actual damage (not automatic from breach) but the bar is not high — emotional distress, loss of control, anxiety can qualify as non-material damage.

For audit findings, the Article 82 exposure framing is:
- For minor breaches: noted as a factor in Consequence but not the primary driver
- For substantial breaches: a significant consequence; class action exposure for AdTech and consumer-facing controllers is real

The PDPA equivalent is less developed — civil damages are theoretically available under contract / tort but not codified in Act 709.

## Common GDPR finding-craft gaps

The patterns the engagement manager catches:

1. **"The GDPR" cited without article** — partner-review reject
2. **EDPB Guideline cited without version** — partner-review reject
3. **CJEU update check skipped** — finding relies on outdated EDPB position
4. **Article 83 tier not identified** — penalty exposure framing missing
5. **Article 82 civil exposure not factored** — Consequence underweighted
6. **Article 27 representative gap missed** — non-EU controller findings
7. **Member State variation ignored** — single position cited cross-jurisdictionally

## Deliverable

A fully-formed finding on a sample Article 13(2)(f) gap (or equivalent) passing partner-review.

Pass criteria: 5 Cs all present; Article + sub-paragraph; EDPB Guideline version pinning; CJEU update check completed; severity rationale; evidence chain; internal vs external citation distinction respected.

## PDPA parallel

PDPA finding craft uses the same 5 Cs with different citation form. For dual-regime engagements, findings often appear in both flavors — one for the EU report and one for the Malaysian report — covering the same substantive observation.

Parallel reading: [PDPA T4 Lesson 4](../../pdpa/t4-auditor/04-finding-craft.md).

## What's next

[Lesson 5 — GDPR T4 checkpoint](05-checkpoint.md).
