# DPIA + Privacy by Design + Article 22 as a programme triad

> **Tier 3 / Lesson 3 — 90 minutes.** Parallel to PDPA T3 Lesson 3. Deliverable: a programme runbook integrating DPIA / PbD / Article 22 for a SaaS client using ML for risk scoring.

## The three obligations, one programme

Article 35 (DPIA), Article 25 (PbD + default), and Article 22 (automated decisions) form GDPR's parallel triangle to the PDPA DPIA / DPbD / ADMP triad:

```
                Article 35
                  /    \
                 /      \
                /        \
        Article 25 -- Article 22
```

- **Article 25** — design-time and default obligation
- **Article 35** — risk-assessment obligation for high-risk processing
- **Article 22** — solely-automated-decision overlay

The mechanics differ from PDPA in two important ways:

1. **GDPR Article 22 codifies a standalone data subject right**, including the right to human intervention. PDPA's ADMP Guideline does not codify a right to refuse or human review as a standalone right
2. **GDPR Article 36 imposes prior consultation with the SA where HIGH residual risk remains after mitigation**. PDPA's DPIA Guideline escalates to senior management only — no Commissioner consultation

## Engagement triggers

| Obligation | Trigger |
|---|---|
| Article 25 | Continuous — applies across all processing lifecycle from design to decommissioning |
| Article 35 | Article 35(3) auto-triggers + EDPB 9-criteria + national SA blacklists |
| Article 22 | Solely-automated decision producing legal or similarly significant effects |

The asymmetry: **Article 22 ADM triggers Article 35 DPIA** via Article 35(3)(a) — automated evaluation with legal or significant effect is one of the three Article 35(3) auto-triggers. But Article 35 DPIA is broader — many DPIAs do not involve Article 22 processing.

## The documentation chain

For a processing activity triggering all three:

```
[Concept]
   ↓
Article 25 PbD design-time integration
   ↓
Article 35 DPIA — risk assessment
   ↓ where Article 22(1) trigger met
Article 22 overlay — assess exceptions (22(2)) + safeguards (22(3))
   ↓ where Article 9 special category + Article 22 — apply Article 22(4)
ADM register
   ↓
Privacy notice update — Article 13(2)(f) / 14(2)(g)
   ↓ where HIGH residual after mitigation
Article 36 prior consultation with SA
   ↓
DPO sign-off + management acceptance
   ↓
[Go-live]
   ↓
Periodic review per material change
```

## The exercise — HRTechCo parallel

Same HRTechCo scenario as the PDPA exercise — ML-based candidate screening, ~50,000 candidates per month, EU customer base via the Irish subsidiary.

### Step 1 — scope per obligation

**Article 25 PbD:**

- Applies continuously
- Privacy by default: minimum data collected from CVs; pseudonymisation of candidate identifiers in the scoring layer
- Privacy by design: lawful basis selected first; model card produced before deployment; explainability API built in

**Article 35 DPIA:**

- Article 35(3)(a) auto-triggers — systematic + extensive evaluation of personal aspects + automated decisions producing legal/significant effect
- Article 35(3)(b) — large-scale; special category likely (inferred ethnicity / gender from CV)
- EDPB 9-criteria: evaluation/scoring + ADM legal effect + large scale + matching/combining + innovative technology + service prevention — at least 5 of 9 trigger
- DPIA mandatory

**Article 22:**

- Solely automated: yes (model scores candidates with no human in the loop at the scoring stage)
- Legal / significant effect: yes — ranking determines whether candidate progresses
- Article 22(1) applies; Article 22(2) exception assessment required

Article 22(2) exception analysis:

- (a) Contractual necessity — for the enterprise customer's hiring contract with the candidate, automated screening is operationally necessary but not strictly required by contract. Marginal
- (b) Authorised by Union or Member State law — not applicable for general hiring
- (c) Explicit consent — operationally difficult; candidates submit CVs without typically being asked to consent to ML scoring

Most defensible exception: 22(2)(c) explicit consent IF the enterprise customer obtains it; otherwise the controller (enterprise customer, not HRTechCo) needs Article 22(3) safeguards as the operating basis.

Article 22(3) safeguards: at least the right to obtain human intervention, express point of view, contest the decision. HRTechCo must provide the mechanism; enterprise customers must communicate it to candidates.

**Article 9 special category overlay:**

- CV content may include or imply Article 9 data (religion, political opinions, trade union membership, etc.)
- Where inferred: CJEU position is still developing; the cautious approach is to treat inferred sensitive data as Article 9
- Article 22(4) restriction: automated decisions on special category data only under Article 22(4) conditions (explicit consent + suitable safeguards, OR substantial public interest)

This is a substantive risk — many AI-based hiring tools fall into Article 22(4) trouble because of inferred special category data.

### Step 2 — documentation chain

| Artefact | Owner | GDPR anchor |
|---|---|---|
| Article 25 PbD policy + design gates | HRTechCo DPO + Engineering | Article 25(1) + (2) |
| Article 35 DPIA | HRTechCo DPO | Article 35(7) required content |
| ADM register | HRTechCo DPO | Article 22(1) |
| Model card | HRTechCo Engineering | Article 5(2) accountability + Article 13(2)(f) "meaningful information about the logic" |
| Human review mechanism | HRTechCo Customer Success | Article 22(3) |
| Privacy notice (enterprise customer's — HRTechCo as processor) | Contractually flowed through | Article 13(2)(f) / 14(2)(g) |
| Bias monitoring | HRTechCo Engineering + DPO | Article 5(1)(d) accuracy + Article 35 ongoing |
| DPO sign-off | HRTechCo DPO | Article 39(1)(c) |
| Article 36 prior consultation (if HIGH residual) | HRTechCo DPO + Legal | Article 36 |
| Periodic review | HRTechCo DPO | Article 35(11) |

### Step 3 — Article 22(4) special category condition documentation

For special category data (inferred or actual) under Article 22, Article 22(4) requires:

- Either Article 9(2)(a) explicit consent + suitable safeguards
- Or Article 9(2)(g) substantial public interest + Member State law + safeguards

For commercial hiring this is hard. The safest architecture: **filter or pseudonymise out Article 9 indicators before they reach the scoring model**. CV-based hiring tools should engineer special category fields out of the input, not rely on Article 22(4) consent at scale.

### Step 4 — Article 36 trigger assessment

After mitigation, what residual risk remains? If HIGH residual remains, Article 36 prior consultation with the lead SA is triggered. Timeline: 8 weeks + 6 weeks extension. This is a **deal-killer for time-sensitive launches** — the consulting team's standard guidance is to re-architect to bring residual below HIGH.

For HRTechCo: with the mitigations (filtering Article 9 from inputs; model card; bias monitoring; human review on request), residual should be Medium. No Article 36 trigger.

## Common gaps

The patterns the audit team catches:

1. **No Article 22 register** — controller cannot say which processing involves Article 22
2. **Article 22(2) exception cited without analysis** — typically contract necessity claimed without examining whether the contract actually requires the automated decision
3. **Article 22(4) overlay missing for special category** — inferred sensitive data overlooked
4. **Article 25 treated as a one-time PbD check** — should be continuous through SDLC
5. **No Article 36 trigger assessment** — DPIA finds HIGH residual; controller proceeds without prior consultation
6. **DPIA done once and never refreshed** — Article 35(11) review obligation
7. **Article 22(3) safeguards documented but not operational** — human review mechanism exists in policy but not in production UI

## Deliverable

Programme runbook integrating Article 35 / 25 / 22 for HRTechCo. Per processing activity:

1. Scope per article
2. Documentation chain
3. Article 22(4) special-category overlay where applicable
4. Article 36 trigger assessment
5. Cross-jurisdictional alignment with PDPA equivalent (DPIA / DPbD / ADMP triad)

## PDPA parallel

The structural overlap is high; the operational difference is the escalation mechanism and the codified rights:

| GDPR | PDPA | Notes |
|---|---|---|
| Article 35 | DPIA Guideline (DEICA) | Same risk-assessment purpose; PDPA prescribes methodology, GDPR prescribes content |
| Article 25 | DPbD Guideline (4 elements) | Same lifecycle obligation; different conceptual structure |
| Article 22 | ADMP Guideline | GDPR codifies standalone right; PDPA anchors in s7 + s38 |
| Article 36 prior consultation | Senior management report only | GDPR escalates externally; PDPA internally |
| Article 22(3) human review | Not codified | GDPR explicit; PDPA cross-jurisdictional best practice |
| Article 22(4) special category overlay | s40 conditions | Direct equivalent |

For dual-regime clients, build the documentation chain to satisfy GDPR's stricter requirements (Article 22 standalone right; Article 36 consultation). That approach satisfies PDPA automatically.

Parallel reading: [PDPA T3 Lesson 3](../../pdpa/t3-programme/03-dpia-dpbd-admp-triad.md).

## What's next

[Lesson 4 — Chapter V cross-border architecture](04-cross-border-chapter-v.md).
