# The 12 domains as programme scaffold — sequencing and dependencies

> **Tier 3 / Lesson 1 — 45 minutes.** Deliverable: a 12-domain heat-map for a client plus a 90-day sequencing plan.

## Why sequencing matters

A PDPA programme is not 12 independent workstreams. The domains have dependencies — Governance produces the DPO who maintains the RoPA which feeds the DPIA which scopes the Security work. Building in the wrong order produces a programme that looks complete on a dashboard but cannot withstand a JPDP inspection because the foundation artefacts are missing.

The post-A1727 / post-April-2026 landscape has 12 domains. The 2024 critical-tier control count is 28 (out of 57 total). The 28 critical-tier controls are non-negotiable in any first-year programme; the standard-tier and conditional-tier controls extend coverage.

## The 12 domains, by dependency layer

### Layer 1 — Foundational (must come first)

| Domain | Why first | Key critical-tier controls |
|---|---|---|
| **Governance and Accountability** | DPO appointment (s12A) is the prerequisite for almost everything else. Senior accountability assignment (DPbD §13) is the governance hook for the whole programme | DPO appointment + Commissioner notification; senior accountability assignment; policy framework; training |
| **Notice and Transparency** | Privacy notice is the visible promise to data subjects. Until the notice exists, lawful basis cannot be communicated. Most other obligations depend on what the notice says | Privacy notice content (s7(1) all six elements); BM + EN delivery; notice update cycle |
| **Data Lifecycle Management** | RoPA is the documentation foundation. Without a RoPA, every other domain operates on rumour about what data exists | RoPA per s138; data inventory; retention schedule per processing activity |

### Layer 2 — Operational (depends on Layer 1)

| Domain | Depends on | Key critical-tier controls |
|---|---|---|
| **Consent Management** | Notice (must know what is being consented to) | s6 consent capture; s7(1) particulars in consent flow; s38 withdrawal mechanism |
| **Data Subject Rights** | RoPA (must know where data is to fulfil requests) | DSAR procedure (s30); correction (s34); erasure (s43); portability (s43A); restriction (s44) |
| **Data Security** | RoPA (must know what is being secured); Standards 2015 baseline | PDP Standards 2015 baseline; access control; encryption; vulnerability management; SIEM / detection |
| **Third-Party / Processor Management** | RoPA (must know which processors exist); Security (must know what to require contractually) | Processor due diligence; DPA in place; s9 obligations cascaded; processor offboarding |

### Layer 3 — Reactive (depends on Layers 1 and 2)

| Domain | Depends on | Key critical-tier controls |
|---|---|---|
| **Breach Response** | Governance (DPO escalates); RoPA (must know what was breached); Security (controls produce the incident signal) | Breach response plan; s12B Commissioner notification capability; s12B subject notification capability; breach register; NACSA 6h reconciliation for NCII |
| **Cross-Border Transfer** | RoPA (cross-border flow inventory); Security (mechanism technical implementation) | Transfer mechanism selection per flow (s129 / s129A); SCC / BCR / certification implementation; TIA per JPDP CBPDT Guideline |
| **Registration and Regulatory Compliance** | All other domains (registration evidences compliance) | Class of Data Users registration; renewal cadence; sectoral CoP compliance; regulatory correspondence handling |

### Layer 4 — Post-April-2026 (depends on Layers 1, 2, 3)

| Domain | Why last | Key critical-tier controls |
|---|---|---|
| **Data Protection by Design (DPbD)** | DPbD operationalises the seven PDP Principles across the lifecycle; requires functioning programmes in Layers 1-3 first | DPbD policy referencing 4 elements; SDLC integration; default privacy; children's protections (§5.3/§10.2/§11.2); Section 13 governance |
| **Automated Decision-Making and Profiling (ADMP)** | ADMP depends on RoPA (ADM register), Governance (DPO from earliest design), DPIA (regardless of count) | ADM register; §9.3 mandatory disclosure; §9.4 permissive logic; sensitive PD ADMP under s40; AI safeguards per §10.2 |

## The 90-day sequencing plan

For a client starting from minimal programme, a defensible 90-day plan:

| Days | Workstreams | Deliverables |
|---|---|---|
| 1-15 | Governance: appoint DPO; Commissioner notification; senior accountability assignment | DPO appointment letter; SPDP portal notification; Section 13 governance memo |
| 1-30 | Data Lifecycle: data discovery + RoPA Phase 1 (top 10 processing activities) | RoPA with first 10 activities documented per s138 elements |
| 15-30 | Notice: privacy notice review or first draft | s7(1)-compliant privacy notice in BM + EN |
| 30-60 | Data Lifecycle: RoPA Phase 2 (all activities); retention schedule | Full RoPA; retention schedule per activity |
| 30-60 | Data Subject Rights: DSAR procedure; new rights operationalisation (erasure / portability / restriction) | DSAR procedure document; case management workflow |
| 30-60 | Data Security: PDP Standards 2015 baseline assessment | Standards 2015 gap analysis; remediation plan |
| 60-75 | Third-Party Management: DPA reviews; processor due diligence catch-up | DPA portfolio refresh; processor register |
| 60-90 | Breach Response: response plan; tabletop drill | Breach response plan; tabletop AAR; integration with NACSA / BNM where applicable |
| 60-90 | Cross-Border: flow inventory; mechanism selection; SCC adoption | Cross-border register; TIAs; SCCs in place |
| 90 onwards | DPbD: SDLC integration; DPbD policy; Section 13 governance evidenced | DPbD policy; integration with engineering / product gates |
| 90 onwards | ADMP: ADM register; DPIA-regardless-of-count for ADMP operations; §9.3 disclosure in privacy notice; §10.2 AI safeguards | ADM register; updated privacy notice; AI safeguards documentation |

This sequencing prioritises the **artefacts a JPDP inspection would request in the first 24 hours**: DPO appointment, RoPA, privacy notice, DSAR procedure, breach response plan. By day 90 the client should be defensible on the foundational obligations even if the longer-tail DPbD / ADMP work continues.

## Common sequencing errors

The patterns the audit team catches in client programmes:

1. **Security-first sequencing** — engineering-led programmes start with encryption and access control. These are critical but downstream of the RoPA. Without knowing what data exists where, security controls are scoped wrong.
2. **No senior accountability assignment** — DPO appointed but no senior manager / Head of Department designated as accountable per DPbD §13. A DPO without senior accountability has no escalation pathway.
3. **Privacy notice updated annually regardless of changes** — the notice should be updated when processing changes, not on a calendar cycle. Updating without substantive change creates change-fatigue.
4. **DPbD treated as a parallel programme** — DPbD is the operationalisation of the seven Principles; it cannot run as a separate stream. The DPbD policy should reference and integrate with the other domains' artefacts.
5. **ADMP started before RoPA complete** — controllers identify "we use AI for fraud detection" before the RoPA documents the processing flow. ADMP register depends on knowing what processing activities exist.

## The 12-domain heat-map

The deliverable for this lesson is a heat-map for a client. The format:

| Domain | Layer | Current state | Target state | Gap severity | Effort estimate | Dependencies |
|---|---|---|---|---|---|---|
| Governance | 1 | DPO appointed but not notified to Commissioner | DPO + notification + senior accountability assignment | Medium | 2 weeks | None |
| Notice | 1 | Privacy notice exists, missing s7(1)(c) and (f) | Complete s7(1) + BM + EN + layered | Medium | 4 weeks | None |
| Data Lifecycle | 1 | No RoPA | Full RoPA + retention schedule | High | 8 weeks | None |
| ... | ... | ... | ... | ... | ... | ... |

A 12-row heat-map per client gives the consulting team a defensible sequencing recommendation.

## GDPR parallel

GDPR has eight controller-obligation domains (Articles 24-32 + Chapter III rights + Chapter V cross-border + Chapter IV processor + Chapter VI / VII SA cooperation). The sequencing logic is the same — foundational (controller identification + RoPA + lawful basis register + DPO where required), then operational (notices + DSAR + security + processor), then reactive (breach + cross-border), then advanced (PbD + Art 22).

Parallel reading: [GDPR T3 Lesson 1 — controller programme scaffold](../../gdpr/t3-programme/01-controller-programme-scaffold.md).

## What's next

[Lesson 2 — DPO appointment under A1727](02-dpo-under-a1727.md). DPO is the load-bearing role for the entire programme.
