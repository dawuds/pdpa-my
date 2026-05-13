# Running a privacy tabletop — including the NACSA 6h / JPDP 72h clash

> **Tier 3 / Lesson 5 — 90 minutes.** Deliverable: a tabletop scenario package + facilitator script + AAR template for a Malaysian NCII bank scenario.

## Why this is the lesson most programmes fail

A privacy programme can have perfect documentation and still fail at the moment of a real breach. The 72-hour clock leaves no time for invention. If the team has never drilled the workflow, the first time they run it is the day of the incident — and the documentation produced under that pressure is brittle.

The audit team's experience: clients with complete RoPAs, complete breach response plans, and a designated DPO often still mishandle a real incident because **the handoffs between teams are untested**. The IR team detects; the DPO notifies; legal advises; communications drafts; the board is briefed; the customer service team manages calls. Six teams, four handoffs, one 72-hour clock.

The tabletop is the rehearsal.

## The dual-clock problem for NCII clients

For an NCII entity under Act 854, the same incident triggers two regulators with different clocks:

| Regulator | Statute | Clock | Source |
|---|---|---|---|
| NACSA / NC4 | Act 854 s26 | **6 hours** from awareness | NACSA Act 854 |
| JPDP / Commissioner | Act 709 s12B | **72 hours** from awareness | A1727 + JPDP DBN Guideline 2025 |
| BNM (if banking) | RMiT | Typically 24 hours; verify per RMiT version | BNM RMiT Policy Document |

For a banking NCII entity, three regulators on three clocks. The 6-hour NACSA clock expires first by a wide margin. Programme design must reconcile this *in advance*; you cannot start a 6-hour drill at hour 4.

## Scenario design framework

A defensible tabletop scenario has six elements:

1. **A specific incident type** — ransomware, exfiltration, vendor breach, misdirected disclosure, system bug exposing wrong-subjects' data
2. **A trigger moment** — the call from the CISO, the alert from the SIEM, the customer complaint
3. **Engineering injects** — additional facts revealed during the exercise (forensic findings, threat-actor messages, regulator inquiries) that force the team to update decisions
4. **Decision-points** — moments where the team must make a call (notify or not; which regulator first; what to tell the data subject; whether to pay ransom)
5. **Time compression** — clock running at faster-than-real-time so the team experiences the pressure of the 72-hour window
6. **AAR (After-Action Review)** — structured retrospective producing improvement actions

## The exercise — Malaysian NCII bank scenario

You are facilitating a tabletop for **MyBank Berhad** (continuing from earlier lessons). The scenario:

### Scenario brief

**Time 00:00 (Monday 08:00)**: CISO calls the DPO and CEO. Overnight, ransomware encrypted the customer onboarding database. The threat actor claims to have exfiltrated 25,000 records including names, NRICs, addresses, contacts, and biometric templates from the e-KYC platform.

**Affected data**: identification (name, NRIC, DOB, address, contact), sensitive PD (biometric templates), financial information (declared source of funds).

**Affected scale**: 25,000 customers initially estimated; forensic count to follow.

**Containment status**: incident response team engaged at 07:30; systems isolated by 07:55; ransom note received from threat actor at 06:00.

**Regulatory triggers**:
- NACSA Act 854 s26 — NCII designated entity (banking sector); 6-hour clock from awareness → **expires Monday 14:00**
- A1727 s12B — 72-hour clock from awareness → **expires Thursday 08:00**
- BNM RMiT — 24-hour reporting expected → **expires Tuesday 08:00**

### Phase 1 — initial response (T+0 to T+6h)

**Decisions required:**

| # | Decision | Owner |
|---|---|---|
| 1 | Activate IR team — who's on call, who's escalated, who's authorised to speak | CISO |
| 2 | Containment confirmed — are systems still being affected? | IR team |
| 3 | Decide on **ransom payment posture** — pay / not pay / negotiate; engage law enforcement | CEO + Board (typically NO without legal review) |
| 4 | NACSA NC4 notification — file the 6-hour notification | IR team + DPO support |
| 5 | Engage external counsel (legal privilege; coordination with regulators) | General Counsel |
| 6 | Forensic engagement | IR team |
| 7 | Begin drafting JPDP and BNM notifications in parallel | DPO + DPO team |

**Injects (facilitator):**

- T+2h — threat actor posts a sample of 100 records to a public leak site. Confirms exfiltration is real
- T+3h — BNM calls. They have been alerted by NACSA and want a briefing
- T+4h — a journalist calls the corporate communications team. Threat actor has tipped off media

### Phase 2 — sustained response (T+6h to T+72h)

**Decisions required:**

| # | Decision | Owner |
|---|---|---|
| 1 | JPDP notification — finalise content and file via the JPDP portal by T+72h | DPO + Legal |
| 2 | BNM RMiT notification — filed by T+24h | DPO + Compliance |
| 3 | Data subject notification — drafting and translation; plan for delivery in T+72h + 7d window | DPO + Communications + Customer Service |
| 4 | Public statement — coordinated with NACSA / BNM / JPDP communications expectations | Communications + CEO |
| 5 | Customer service preparation — call centre staffing, FAQ, identity-verification process for inbound queries | Customer Service + DPO |
| 6 | Backup restoration — last good backup from 2026-05-10 23:00; testing for ransomware persistence | IT / IR team |

**Injects:**

- T+24h — forensic findings update count to 31,000 affected customers; original estimate was 25,000
- T+36h — second threat actor claim: they have copies of biometric templates and "will publish in 48 hours unless paid"
- T+48h — class action plaintiff lawyer files notice of intent
- T+60h — BNM informally indicates supervisory action under FSA 2013 if customer-impact disclosure is delayed

### Phase 3 — subject notification + post-incident (T+72h to T+7d)

**Decisions required:**

| # | Decision | Owner |
|---|---|---|
| 1 | Data subject notification — sent to all 31,000 affected within T+72h + 7d window | DPO + Communications |
| 2 | Free credit monitoring for affected customers — offered or not | CEO + Customer Service |
| 3 | Internal post-incident review — root cause analysis | IR + DPO + CISO |
| 4 | Board briefing on lessons learned + control improvements | CEO + DPO |
| 5 | Regulatory follow-up correspondence — NACSA, JPDP, BNM may follow up with information requests | DPO + Legal |
| 6 | Class action defence preparation | General Counsel + external counsel |

## The facilitator script

A tabletop runs against a script. Sample structure:

```
SCRIPT — MYBANK RANSOMWARE TABLETOP

08:00 (T+0)  FACILITATOR briefs the room: "It is now Monday 08:00..."
              [Read scenario brief]
              "Your first decision: who is in the room, who's been
               called, who's escalated. Discuss for 10 minutes."

08:30 (T+0.5h) FACILITATOR: "NACSA expects notification within 6
              hours of awareness. Awareness began at 08:00. Your
              window closes at 14:00 today. Who is filing the
              NC4 notification? What is its content?"

10:00 (T+2h) FACILITATOR inject: "Threat actor has posted 100
              records to a public leak site. Confirms exfiltration.
              How does this change your response?"

[continues with injects at scheduled intervals through the full window]

T+72h        FACILITATOR closes: "The JPDP window has just closed.
              Did the notification go in? Was the data subject
              communication drafted and ready to send within the
              next 7 days? Let's debrief."
```

The facilitator's role:

- Keep the clock running (pause for discussion but resume for time pressure)
- Inject new facts at scheduled points to force decision updates
- Resist resolving easy decisions for the team — let them work it
- Capture decisions and rationale for the AAR

## The AAR template

After-Action Review captures:

1. **What was the scenario** — concise summary
2. **Timeline of decisions** — when each decision was made, by whom
3. **What went well** — specific examples of good decisions / handoffs
4. **What did not go well** — specific examples of gaps, hesitations, miscommunication
5. **Decision-point analysis** — for each major decision, was it the right call? what was the basis?
6. **Improvement actions** — specific, owned, scheduled

The AAR is the deliverable that drives programme improvement. Tabletops without AARs produce no learning.

## Common gaps in tabletop programmes

The patterns the audit team catches:

1. **No tabletop in the last 12 months** — programme has a breach response plan but has never tested it
2. **Tabletop scoped only to IT / CISO team** — DPO + legal + communications + customer service not included; handoffs untested
3. **Scenario chosen to be "winnable"** — facilitator selects a scenario where the team knows what to do; no learning
4. **No injects** — scenario described upfront; team never has to revise decisions under new facts
5. **No time pressure** — discussion runs at real-time pace; team never feels the 72-hour clock
6. **No AAR** — exercise runs without retrospective; improvement actions never captured
7. **NACSA 6h not in scope for NCII clients** — exercise covers PDPA but not the parallel NACSA clock

## Deliverable

Tabletop scenario package for MyBank Berhad:

1. Scenario brief (one page)
2. Decision-points list per phase
3. Facilitator script with injects
4. AAR template

Run the tabletop with the client's team. Self-grade against the T3 checkpoint.

## GDPR parallel

GDPR tabletops follow the same structure but with single-regulator dynamics (no NACSA-style parallel-clock complication unless the client is also subject to NIS2 in the EU, in which case NIS2 incident reporting overlays). Article 33 / 34 clocks are the GDPR equivalent.

Parallel reading: [GDPR T3 Lesson 5 — Article 33 breach tabletop](../../gdpr/t3-programme/05-breach-tabletop-art33.md).

## What's next

[Lesson 6 — T3 checkpoint](06-checkpoint.md). Board-pack ready for JPDP inspection.
