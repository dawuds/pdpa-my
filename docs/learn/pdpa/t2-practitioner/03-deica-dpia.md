# Exercise — conduct a DPIA using DEICA on a worked example

> **Tier 2 / Lesson 3 — 120 minutes.** Deliverable: a completed DPIA using the JPDP Lampiran A 35-question template on a worked e-KYC scenario.

## Why this is the highest-risk artefact in the toolkit

A DPIA is the document that gets the most regulator scrutiny — JPDP can demand a DPIA in any inspection involving high-risk processing. The Commissioner has on-request access to all DPIA records under §12.2.

The audit-tier finding patterns most often connected to DPIA:

- No DPIA where one was required (most severe — direct s137 breach)
- DPIA conducted but with PCP-era thresholds (cites the removed ADM-10K quantitative)
- DPIA conducted but reports HIGH residual risk to Commissioner instead of senior management (cites the dropped portal-notification)
- DPIA marked "valid indefinitely" (ignores the 2-year validity)

## The exercise

You are the DPO of **MyBank Berhad**, a licensed bank under the Financial Services Act 2013. The bank is launching a new **e-KYC onboarding platform** with the following characteristics:

- **Scale**: expected to onboard ~50,000 new customers per year
- **Data collected**: name, NRIC, date of birth, address, contact, occupation, source of funds, **facial biometric** (selfie matched against MyKad photo), **liveness video** (to defeat spoofing)
- **Processing**: automated identity verification (facial match + liveness detection + AML / sanctions screening) producing a risk score that determines whether the application is auto-approved, auto-rejected, or referred to manual review
- **Cross-border**: facial recognition SaaS vendor hosted in Singapore (AWS Singapore)
- **AI/ML**: ML model trained on a global biometric dataset (vendor-provided); used in production for identity verification

Build the DPIA.

## Trigger assessment (the gating question)

Does this processing require a DPIA under the JPDP DPIA Guideline §7?

**Quantitative thresholds (§7.5)** — two:

| Threshold | This scenario | Triggered? |
|---|---|---|
| Sensitive PD (incl. financial info) > 10,000 subjects | 50,000 subjects; biometric (sensitive); financial info (source of funds, account data) | **YES** |
| General PD > 20,000 subjects | 50,000 subjects | **YES** |

**Qualitative factors (§7.6)** — seven:

| Factor | This scenario |
|---|---|
| (a) Legal or significant effects | Account approval / rejection has significant effect — denial means no banking access |
| (b) Systematic monitoring | Liveness check + identity verification — bordering on systematic |
| (c) Innovative technology | Facial recognition with AI is innovative tech |
| (d) Denial or restriction of rights | Auto-rejection denies the customer the banking relationship |
| (e) Tracking location / behaviour | Not in this scenario |
| (f) Targeting children or vulnerable | Not specifically — but potentially elderly customers |
| (g) ADM/profiling high risk | YES — auto-approval / auto-rejection is solely-automated ADM with significant effects |

Multiple thresholds hit. **DPIA is mandatory.** Plus, under the ADMP Guideline §6.1, ADMP triggers DPIA regardless of subject count — this is also a DPIA-mandatory scenario from the ADMP side.

## DEICA walkthrough

### Step 1 — Describe (Perihal)

| Element | Entry |
|---|---|
| Processing name | e-KYC onboarding for retail banking |
| Controller | MyBank Berhad |
| DPO | [Name], dpo@mybank.com.my |
| Data subjects | Prospective retail customers; ~50,000 annually |
| Data categories | Identification (NRIC, DOB, address); biometric (facial photo, liveness video) [sensitive PD s4]; financial (source of funds) |
| Data flow | Mobile app capture → facial recognition SaaS (Singapore) → bank's KYC engine (on-prem) → AML screening (third-party API) → CRM (on-prem) |
| Cross-border | Facial recognition SaaS hosted in AWS Singapore — SCC-based DPA |
| Processors | Facial recognition SaaS; AML screening API; AWS for collateral hosting |
| Lawful basis | s6(2)(c) legal obligation (BNM AML/CFT regulations) + s40(1)(a) explicit consent for biometric processing |

### Step 2 — Evaluate (Nilai)

Is the processing necessary? The bank cannot fulfil its BNM AML/CFT obligations without identity verification. Facial biometric is one means; document-only verification with manual review would be an alternative.

Is the bank using the least-data approach? Liveness video collection retains video for the verification session only — not stored long-term. Facial biometric is stored only as a derived template, not the original photo, after verification completes. Both are minimisation measures.

Lawful basis check: explicit consent for biometric (s40(1)(a)). Verify the consent flow is genuinely explicit — separate affirmative action, not bundled.

### Step 3 — Identify (Kenal pasti)

Risks identified, with likelihood × impact:

| Risk | Likelihood (1-3) | Impact (1-3) | Score | Level |
|---|---|---|---|---|
| Biometric template database breach (catastrophic — biometrics cannot be reissued) | 1 | 3 | 3 | Medium |
| Liveness defeat / spoofing leading to identity fraud | 2 | 3 | 6 | High |
| ADM model bias — under-representation of dark-skinned faces in training data leading to higher rejection rate | 2 | 3 | 6 | High |
| Cross-border transfer to Singapore — Singapore PDPA assessed as adequate; SCC in place | 1 | 2 | 2 | Low |
| Consent quality challenge — sensitive PD requires explicit consent; flow currently bundles with general T&Cs | 2 | 2 | 4 | Medium |
| Retention beyond purpose — biometric template kept after AML verification complete | 2 | 2 | 4 | Medium |

Per JPDP DPIA Guideline §8 risk matrix: Low (1-2), Medium (3-4), High (6-9).

### Step 4 — Consider (Pertimbang)

Mitigation measures for each identified risk:

| Risk | Mitigation |
|---|---|
| Biometric template breach | AES-256 encryption at rest; separate storage of original biometric vs derived template; key management in dedicated KMS; anti-spoofing measures already include liveness detection |
| Spoofing | Add additional liveness signals (head-turn, blink prompts); periodic re-testing of liveness module against new spoofing techniques |
| ADM model bias | Pre-deployment bias testing on Malaysian demographic distribution; ongoing monitoring of rejection rate disparity; mandatory human review for all auto-rejected applications (not just auto-approved) — addresses the §9.3 + §10.2.6 "AI not the only factor" best practice |
| Cross-border transfer | Confirm AWS Singapore region with SCC in place; conduct TIA per JPDP CBPDT Guideline |
| Consent quality | Redesign consent flow — separate explicit consent step for biometric processing, not bundled with general T&Cs (DPbD §4.2.2 privacy as default; addresses s40(1)(a) explicit consent requirement) |
| Retention beyond purpose | Set biometric template retention to "until KYC verification complete + 7 years from account closure for AML record-keeping"; automated deletion at end of period |

### Step 5 — Assess (Taksir) — residual risk

After mitigation, what residual risk remains?

| Risk (post-mitigation) | Residual likelihood | Residual impact | Score | Level |
|---|---|---|---|---|
| Biometric template breach | 1 | 3 | 3 | Medium |
| Spoofing | 1 | 3 | 3 | Medium |
| ADM model bias | 2 | 2 | 4 | Medium |
| Cross-border transfer | 1 | 2 | 2 | Low |
| Consent quality (post-redesign) | 1 | 2 | 2 | Low |
| Retention beyond purpose (post-automation) | 1 | 2 | 2 | Low |

**Overall residual risk: Medium.** No HIGH residual remains. The Section 9 escalation to senior management is not triggered — but DPO sign-off is still required.

If any residual had remained HIGH:

- Report findings to **senior management** of the data controller (per Section 9). NOT the Commissioner portal.
- Senior management decides on additional mitigations, resource allocation, or risk acceptance.
- The Commissioner gets access to the DPIA record only on request (§12.2).

## Post-DPIA obligations (Pasca-DPIA)

Section 11 and Section 12 of the DPIA Guideline:

1. **Implement** the mitigation measures committed in Step 4
2. **Monitor** for triggering events that require DPIA re-execution (purpose change, technology change, new vulnerabilities, regulatory updates, breaches affecting this processing)
3. **Re-execute** the DPIA every 2 years (§11.2 — must be redone, not just reviewed)
4. **Retain** for at least 2 years from cessation of processing (§12.1 — for this scenario assume 10-year processing operation → 12 years total retention)

## Deliverable

Completed Lampiran A 35-question DPIA on the e-KYC scenario. The expected format is a single document organised in the seven Lampiran A sections (Pra-DPIA + DEICA five steps + Pasca-DPIA). DPO sign-off recorded. Senior management briefing prepared (note: no HIGH residual in this exercise, so the briefing is informational; if a HIGH residual had remained, the senior management decision would be required).

## Common gaps

The patterns the audit team catches in client DPIAs:

1. **PCP triggers cited** — three quantitative thresholds instead of two; ADM still listed as quantitative
2. **Commissioner notification listed as the HIGH-residual escalation** — partner-review reject; the issued guideline does not include this
3. **2-year validity ignored** — DPIA marked "valid indefinitely" or "valid until material change"
4. **Retention from completion, not cessation** — common pattern; the issued guideline §12.1 is explicit
5. **No senior management report on HIGH residual** — §6.3 absolute-accountability + §9 escalation both ignored
6. **DEICA executed but no mitigation tracking** — Step 4 measures listed but never followed up

## GDPR parallel

GDPR Article 35 imposes the equivalent obligation with different mechanics. The mapping:

| Issued PDPA DPIA | GDPR Article 35 | Notes |
|---|---|---|
| 2 quantitative + 7 qualitative thresholds | Art 35(3) specified categories + EDPB 9-criteria + national SA blacklists | GDPR triggers via list, not numbers |
| DEICA 5-step methodology | Art 35(7) required content (not methodology) | GDPR prescribes content; PDPA prescribes methodology |
| HIGH residual → senior management | Art 36 prior consultation with SA | GDPR escalates externally; PDPA escalates internally |
| 2-year validity | Not codified; review on material change | PDPA-specific |
| Retention 2 years from cessation | Not codified | PDPA-specific |

Parallel exercise: [GDPR T2 Lesson 3 — Article 35 DPIA](../../gdpr/t2-practitioner/03-dpia-article35.md).

## What's next

[Lesson 4 — Draft a s12B breach notification](04-breach-notification.md). Breach response is the highest-velocity exercise in the toolkit — 72 hours, sometimes with NACSA running a parallel 6-hour clock.
