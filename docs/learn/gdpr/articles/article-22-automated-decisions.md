# GDPR Article 22 — automated individual decision-making and profiling

> **Deep-dive reference.** Source: Regulation (EU) 2016/679 + EDPB Guidelines on Automated Individual Decision-Making (WP251rev.01, adopted 6 February 2018) + CJEU C-26/22 + C-64/22 SCHUFA Holding (2023).

## The rule

**Article 22(1)**:

> "The data subject shall have the right not to be subject to a decision based **solely** on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her."

## The trigger — three elements

1. **Solely automated** — the decision is made by automated means with no meaningful human involvement
2. **Including profiling** — Article 4(4) profiling definition is broad
3. **Legal or similarly significant effect** — interpretive question

## "Solely automated"

A decision is solely automated where there is no meaningful human review. A human rubber-stamping the output is not meaningful — per CJEU SCHUFA Holding (2023), credit scoring where humans formally approve but the model's score effectively determines the outcome falls within Article 22 even though a human is in the loop.

The EDPB Guidelines on Automated Individual Decision-Making confirm: the human review must have actual authority and competence to change the decision — not just sign off the algorithm's output.

## "Legal or similarly significant effect"

EDPB Guidelines factors:

- The decision affects the data subject's legal rights or status (contract; benefit; permit)
- The decision affects the subject's circumstances, behaviour, or choices in a significant way
- The decision could exclude or discriminate against the subject

Examples that qualify:
- Credit / loan approval
- Insurance underwriting / pricing
- Job application screening
- Visa / immigration decisions
- Significant pricing differentiation
- Healthcare access decisions

Examples that typically do NOT qualify:
- Generic ad targeting (low-significance personalisation)
- Newsletter recommendations
- Content sorting on news feeds (debated)
- Search result ranking (debated)

The line is contested. EDPB has indicated that targeted ads CAN qualify where the targeting uses special category data or has significant material effect (e.g., excluded from credit ads; differentiated pricing).

## The three exceptions (Article 22(2))

| Exception | When |
|---|---|
| (a) Contractual necessity | Decision necessary for entering into or performance of a contract with the subject |
| (b) Authorised by law | Union or Member State law expressly permits, with suitable safeguards |
| (c) Explicit consent | Subject's explicit consent (Article 7 + heightened explicit-consent standard) |

## Safeguards (Article 22(3))

Even when an exception applies, the controller must implement **at least**:

- The right to obtain **human intervention** by the controller
- The right to **express the subject's point of view**
- The right to **contest the decision**

These three safeguards are mandatory — not optional. The controller designs and operates the mechanism for each.

## Special category overlay (Article 22(4))

Where Article 22 processing involves Article 9 special category data, ONLY two grounds permit:

- (a) Article 9(2)(a) explicit consent
- (g) Article 9(2)(g) substantial public interest under Union / Member State law

Plus suitable safeguards.

For commercial controllers, Article 22(4) is hard. Inferred special category data (e.g., political opinions inferred from behavioural patterns) is now treated under CJEU C-184/20 as Article 9 data; this expands Article 22(4) scope significantly.

## SCHUFA Holding (C-26/22 + C-64/22, 2023)

Key holdings:

- A credit score IS automated decision-making within Article 22 even where a downstream lender formally makes the loan decision based on the score
- Rubber-stamping the model output is not meaningful human review
- The Article 22 right applies to the scoring stage, not just the final decision

This broadens Article 22 substantially. Many controllers that previously assumed "we have a human in the loop" no longer qualify.

## Common implementation gaps

1. **No Article 22 register** — controller cannot say which processing involves Article 22
2. **Article 22(2) exception cited without analysis** — typically contract necessity claimed without examining whether the contract actually requires the automated decision
3. **Article 22(4) overlay missing for special category** — inferred sensitive data overlooked
4. **Article 22(3) safeguards documented but not operational** — human review pathway exists in policy but not in production UI
5. **Article 13(2)(f) / 15(1)(h) disclosure missing** — meaningful information about the logic absent from notice + DSAR response
6. **SCHUFA Holding implications not assessed** — controller relies on pre-2023 EDPB position

## PDPA parallel

PDPA's ADMP Guideline (issued April 2026) is the equivalent but materially narrower:

| GDPR Article 22 | PDPA ADMP Guideline |
|---|---|
| Standalone right not to be subject (22(1)) | Anchored in s7 notice + s38 withdrawal; no standalone right codified |
| Three exceptions (contract / law / explicit consent) | §9.9 three Exceptions — but plain consent, not explicit |
| Article 22(3) safeguards (human review etc.) | Not codified |
| Article 22(4) special category overlay | s40 conditions |
| Article 13(2)(f) disclosure of meaningful logic | §9.3 mandatory FACT-of-ADM; §9.4 permissive logic with carve-outs |

Parallel reading: [PDPA ADMP deep-dive](../../pdpa/guidelines/g3-admp.md).

## Cross-references

- T1 Lesson 3 — Article 6 lawful basis + Articles 15-22 rights overview
- T2 Lesson 3 — Article 35 DPIA with Article 22 overlay
- T3 Lesson 3 — DPIA + PbD + Article 22 triad
- T4 Lesson 4 — finding craft on Article 13(2)(f) Article 22 disclosure gap
