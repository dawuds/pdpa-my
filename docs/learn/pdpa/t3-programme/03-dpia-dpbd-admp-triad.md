# DPIA, DPbD, and ADMP as a programme triad

> **Tier 3 / Lesson 3 — 90 minutes.** Deliverable: a programme runbook integrating DPIA / DPbD / ADMP for a SaaS client using ML for risk scoring.

## The three guidelines, one programme

The April 2026 issued guidelines — DPIA, DPbD, ADMP — are not three independent regimes. They form a documentation triangle:

```
                 DPIA
                /    \
               /      \
              /        \
        DPbD ---------- ADMP
```

- **DPbD** is the design-time obligation — embed privacy across the lifecycle
- **DPIA** is the risk-assessment obligation — assess high-risk processing
- **ADMP** is the automated-decision overlay — additional rules where ADM is involved

Where a processing activity is high-risk, involves automated decisions, AND is being built (or materially modified), all three guidelines apply simultaneously.

## The engagement triggers

Each guideline has its own trigger but they often co-fire:

| Guideline | Trigger | Independent of others? |
|---|---|---|
| **DPIA** | 2 quantitative thresholds OR 7 qualitative factors (issued §7) | Independent — DPIA may be required without DPbD or ADMP involvement |
| **DPbD** | Continuous — applies across all processing lifecycle | Always applies; not threshold-triggered |
| **ADMP** | Ambang ADMP — legal effects or significantly affects (issued §7) | **Triggers DPIA automatically** per ADMP §6.1 (regardless of subject count) |

The asymmetry to remember: **ADMP triggers DPIA**, but **DPIA does not automatically trigger ADMP**. A DPIA-mandatory processing without automated decisions falls under DPbD + DPIA only.

## The documentation chain

A new processing activity moves through a documentation chain. For an activity that triggers all three:

```
[Concept]
   ↓
DPbD requirements gate (Element 1 Proactiveness — design-time)
   ↓
DPIA trigger assessment (§7 thresholds + qualitative factors)
   ↓ if triggered
DEICA DPIA (Describe / Evaluate / Identify / Consider / Assess)
   ↓
ADMP trigger assessment (Ambang ADMP — legal/significant effects)
   ↓ if triggered
ADM register entry + s7 notice update for §9.3 mandatory disclosure
   ↓
DPbD lifecycle controls embedded (design / development / deployment / decommissioning)
   ↓
Senior management report (where HIGH residual after mitigation)
   ↓
DPO sign-off
   ↓
[Go-live]
   ↓
2-year DPIA validity expiry → re-execute (DPIA §11.2)
```

The documentation chain produces these artefacts per activity:

| Artefact | Source |
|---|---|
| DPbD design-time checklist completed | DPbD policy + Section 13 governance |
| DPIA report (DEICA structure) | DPIA Guideline §8 + Lampiran A |
| ADM register entry | ADMP Guideline §5 (DPO) + §6 (DPIA linkage) + §7 (Ambang) |
| Privacy notice update (s7 + §9.3) | DPbD §6 + ADMP §9.3 |
| Senior management report | DPbD §13 + DPIA §9 |
| DPO sign-off record | s12A + DPO Guideline 2025 |
| Re-execution log (every 2 years) | DPIA §11.2 |

## Where the three guidelines overlap

| Overlap area | DPIA | DPbD | ADMP |
|---|---|---|---|
| **DPO involvement** | DPO advisory + sign-off | DPO consulted on design | DPO from earliest design (§5.1 mandatory) |
| **Privacy notice** | Not directly | §6 — notice as DPbD product | §9.3 mandatory + §9.4 permissive disclosures |
| **Sensitive PD** | Quantitative threshold (>10K) | §5.3 children | §8 — s40 conditions |
| **Children** | Q6 qualitative factor (vulnerable individuals) | §5.3 / §10.2 / §11.2 — three protections | Not addressed in ADMP itself |
| **Senior management** | §9 — HIGH residual escalation | §13 — governance practices | Implicit |

The overlap is dense. A programme that operates each guideline as a separate workstream will have inconsistent outputs across them — different threshold assessments, different children's protections, different ADM register conventions.

## The exercise

You are the consulting lead for **HRTechCo Sdn Bhd** — a SaaS provider running an HR-tech platform used by 200+ Malaysian enterprise customers (each enterprise is a separate data controller). HRTechCo is itself a **data processor** under PDPA but also has direct controller obligations for its own employees.

HRTechCo's flagship product is an **ML-based candidate screening tool** — it ingests CVs uploaded by enterprise customers' HR teams, applies a trained ML model to score candidates against a job description, and returns a ranked list. Approximately 50,000 candidates per month are scored. The model is trained on a global corpus (vendor-provided); HRTechCo customises with enterprise-specific data.

Produce the programme runbook.

### Step 1 — Scope each guideline

**DPIA Guideline:**

- Subjects: ~600K annual candidate population (50K × 12 months); the scoring is per-candidate
- Quantitative trigger: 600K > 20K general PD → DPIA mandatory
- Qualitative trigger Q1 (legal/significant effect — candidate ranking affects employment opportunity) + Q3 (innovative technology — ML model) + Q7 (ADM/profiling — high risk) — all fire
- → **DPIA mandatory** under both quantitative and qualitative arms

**DPbD Guideline:**

- Applies continuously across the platform lifecycle
- Four elements: Sifat Proaktif (privacy by default in ML scoring inputs — default to minimum data), Perlindungan Hujung-ke-hujung (encryption / access control / audit trail), Ketelusan (model card / explainability / per-decision audit trail), Berpusatkan Pengguna (candidate access mechanism)
- §6.4 deceptive design patterns — applies to the candidate's interface where HRTechCo provides one
- §13 governance — HRTechCo's board accountability for data protection
- Children's protections: candidates are adults; §5.3/§10.2/§11.2 not in play for candidate processing (would apply for HRTechCo's own employee processing if minors were employed)

**ADMP Guideline:**

- Ambang ADMP test: candidate scoring is fully automated; result is a ranked list. Does it "significantly affect" the candidate? **Yes** — being ranked low effectively excludes the candidate from the role. Significant effect.
- §6.1 → DPIA regardless of subject count (already triggered above)
- §5.1 → DPO from earliest design stage
- §9.3 → enterprise customer's privacy notice must disclose the fact of ADM/profiling to candidates (HRTechCo as processor cannot directly disclose; must contractually require its enterprise customers to disclose)
- §9.4 → permissive logic explanation; HRTechCo provides candidates with explanation API on request
- §8 / s40 → no sensitive PD by default; verify enterprise customers don't upload CVs containing s40 data
- §10.2 → seven AI best practices apply (permissive but expected)

### Step 2 — Map the documentation chain

| Artefact | Owner | Status target |
|---|---|---|
| DPbD policy referencing 4 elements + Section 13 governance | HRTechCo DPO | Approved by board |
| DPIA report (DEICA) on candidate scoring | HRTechCo DPO + Engineering | Completed + DPO sign-off + senior management briefed |
| ADM register entry | HRTechCo DPO | Maintained quarterly |
| Privacy notice (HRTechCo's own — for its employees) | HRTechCo DPO | s7(1) + §9.3 |
| Contractual flow-through to enterprise customers | HRTechCo Legal | DPA template requires enterprise customers to update their own privacy notices with §9.3 fact-of-ADM disclosure |
| Model card | HRTechCo Engineering | Version + training data summary + accuracy metrics + bias monitoring + intended use |
| Bias monitoring (§10.2.4 over-reliance / §10.2.6 not the only factor) | HRTechCo Engineering + DPO | Quarterly bias report; investigation of disparities |
| Operator training (§10.2.5) | HRTechCo HR + DPO | Annual training for enterprise customer HR teams; on-platform guidance |
| Human review mechanism (§10.2.7) | HRTechCo Customer Success | Trained reviewers available where enterprise customer requests human review |

### Step 3 — Overlap reconciliation

The same activity produces multiple documents that must reconcile:

| Document | Says |
|---|---|
| RoPA | "Candidate scoring; data: CV content; processor: HRTechCo; ADM involved" |
| DPIA | "Risk: bias / discrimination / lack of explainability. Mitigation: model card + bias monitoring + human review on request" |
| ADM register | "In scope. Ambang: significant effect on employment access. Lawful basis: enterprise customer's contract with candidate (s6(2)(b))" |
| Privacy notice (enterprise customer's) | "Your CV is processed using automated scoring. You can request human review." |

These four documents say consistent things about the same processing activity. Inconsistency between them is a partner-review reject.

### Step 4 — The 2-year cycle

DPIA Guideline §11.2 — DPIA valid for 2 years from completion. After expiry, **re-execute** (not just review).

HRTechCo's annual ML model retraining is a **trigger for re-DPIA** earlier than the 2-year cycle — material change to processing.

## Deliverable

A programme runbook for HRTechCo covering:

1. Scope per each guideline (which apply, why)
2. Documentation chain (artefacts per processing activity)
3. Overlap reconciliation framework
4. Re-execution cadence (2-year DPIA cycle + material-change triggers)
5. Customer flow-through (DPA terms requiring enterprise customers to update notices and obtain consents)

## Common gaps in HRTech / SaaS triad programmes

The patterns the audit team catches:

1. **Processor / controller boundary unclear** — HRTechCo's enterprise customers are the data controllers for candidate data, but HRTechCo has its own controller obligations for its employees. The two sets of obligations are often conflated
2. **ADM register exists but ADMP §9.3 disclosure not flowed through to enterprise customers' notices** — HRTechCo as processor cannot directly notify candidates; must contractually require enterprise customers to do so
3. **No model card** — bias monitoring may exist informally; the §10.2.7 "trained reviewers" requirement implicitly requires documented model behaviour
4. **DPIA done once at product launch but not on retraining** — material change → re-DPIA trigger ignored
5. **Senior management briefed on residual risk but no DPO sign-off recorded** — §13 + DPO Guideline expect both
6. **DPbD policy references Cavoukian 7 principles** — citation discipline error; should be 4 elements

## GDPR parallel

GDPR has the equivalent triad: **Article 35 (DPIA)**, **Article 25 (PbD + default)**, **Article 22 (automated decisions)**. The mechanics:

| Issued PDPA | GDPR | Notes |
|---|---|---|
| DPIA → senior management (HIGH residual) | DPIA → Article 36 prior consultation with SA (HIGH residual) | GDPR escalates externally; PDPA internally |
| DPbD 4 elements | Article 25 + EDPB Guidelines 4/2019 | Different structure |
| ADMP — anchored in s7 + s38 | Article 22 standalone right | GDPR is broader |
| ADMP triggers DPIA regardless of count | Article 35(3)(a) triggers DPIA for "systematic + extensive evaluation + ADM with legal effect" | Both regimes link ADM and DPIA |
| §13 governance | Implicit in Article 5(2) accountability + Article 24 | GDPR codifies; PDPA via guideline |

Parallel reading: [GDPR T3 Lesson 3 — DPIA / PbD / Art 22 triad](../../gdpr/t3-programme/03-dpia-pbd-art22-triad.md).

## What's next

[Lesson 4 — Cross-border transfer reforms](04-cross-border-reforms.md). Cross-border transfer is the next high-velocity programme area where A1727 fundamentally changed the mechanisms available.
