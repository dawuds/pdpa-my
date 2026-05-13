# T2 Checkpoint — practitioner deliverables review

> **Tier 2 / Lesson 6 — 60 minutes.** Self-review of the five T2 deliverables. If any are missing, incomplete, or fall foul of the rubric below, the gap is real and worth closing before T3.

## The five deliverables you should now own

| # | Deliverable | Lesson |
|---|---|---|
| 1 | Four-activity RoPA for MyKedai Sdn Bhd with all s138 elements | [01](01-build-a-ropa.md) |
| 2 | Two-layer privacy notice for MyKedai (BM + EN) covering all four activities | [02](02-privacy-notice-draft.md) |
| 3 | Completed DEICA DPIA on MyBank e-KYC scenario (Lampiran A 35 questions) | [03](03-deica-dpia.md) |
| 4 | s12B Commissioner notification + data subject notification for MyBank ransomware scenario | [04](04-breach-notification.md) |
| 5 | Class of Data Users determination for three worked clients (bank / hospital / telco) | [05](05-sectoral-cop.md) |

## Rubric — deliverable 1 (RoPA)

| Item | Pass criterion |
|---|---|
| All four activities recorded | ✓ Customer account; Marketing; HR; Fraud detection |
| All eight s138 elements per activity | ✓ Controller + DPO; Purpose; Subjects; Data; Recipients; Cross-border; Retention; Security |
| Lawful basis cited per activity | ✓ Specific s6 sub-basis or s40 condition |
| Sensitive PD flagged | ✓ HR (health for insurance); biometric where applicable |
| Cross-border transfers identified with mechanism | ✓ AWS Singapore (SCC + DPA); MailChimp US (SCC + supplementary measures) |
| Retention periods specific (years + legal basis) | ✓ "7 years per Companies Act 1965" not "as long as necessary" |
| Recipient categories specific | ✓ "Pos Laju" not "delivery partners" |
| ADM flagged for fraud detection | ✓ Activity 4 flagged as ADMP under §6.1 → DPIA triggered |

## Rubric — deliverable 2 (privacy notice)

| Item | Pass criterion |
|---|---|
| All six s7(1) elements covered | ✓ Data description; purpose; source; rights; recipients; obligatory/voluntary |
| Layered structure | ✓ Top layer one-page + bottom layer detailed |
| BM + EN parallel versions | ✓ |
| Notice timing pre-collection | ✓ Displayed before signup, not after |
| Consent flow unbundled where consent is the basis | ✓ Marketing consent separate from T&Cs acceptance |
| s38 withdrawal mechanism operational | ✓ Single-click unsubscribe or equivalent |
| ADMP disclosure for fraud detection | ✓ §9.3 mandatory FACT-of-ADM disclosure |
| No DPbD §6.4 deceptive patterns | ✓ No overloading / skipping / stirring / obstructing / fickle / left-in-dark |
| DPO contact disclosed | ✓ |
| Update mechanism specified | ✓ Material change → re-notification |

## Rubric — deliverable 3 (DPIA)

| Item | Pass criterion |
|---|---|
| Trigger assessment performed | ✓ 2 quantitative + 7 qualitative checked |
| DEICA five steps complete | ✓ Describe / Evaluate / Identify / Consider / Assess |
| Risk matrix per issued guideline (3x3, Low/Med/High bands) | ✓ Likelihood 1-3 × Impact 1-3 |
| Residual risk escalation correct | ✓ HIGH → senior management report (NOT Commissioner portal) |
| 2-year validity acknowledged | ✓ Stated in document |
| Retention 2 years from cessation | ✓ Stated in document |
| Lampiran A 35-question structure | ✓ Or equivalent with all elements |
| DPO sign-off recorded | ✓ |
| Cross-border + TIA addressed | ✓ Singapore SaaS — TIA noted |
| ADMP trigger acknowledged | ✓ §6.1 DPIA-regardless-of-count cross-reference |

## Rubric — deliverable 4 (breach notification)

| Item — Commissioner notification | Pass criterion |
|---|---|
| Filed within 72h of awareness | ✓ Timing documented |
| All JPDP DBN Guideline required information present | ✓ Nature, scope, categories, numbers, consequences, measures, contact |
| Awareness timestamp documented | ✓ Specifically — not "Monday morning" |
| Sensitive PD specifically flagged | ✓ Biometric templates explicitly mentioned |
| Cross-regulator notifications acknowledged | ✓ NACSA T+6h, BNM per RMiT mentioned |

| Item — data subject notification | Pass criterion |
|---|---|
| Filed within 7 days of Commissioner notification | ✓ |
| Clear plain language | ✓ No legal jargon dump |
| Data categories affected disclosed | ✓ Including sensitive PD |
| Customer protective action specified | ✓ Monitor statements / be alert to phishing / activate credit monitoring |
| DPO + incident contact provided | ✓ Email + hotline |
| Multilingual delivery | ✓ BM minimum + others where audience warrants |

## Rubric — deliverable 5 (Class of Data Users determination)

| Item | Pass criterion |
|---|---|
| Three-step check performed per client and per licensed activity | ✓ Licensing regime → Class match → activity scope |
| Each licensed activity assigned to a CoP (sectoral or General) | ✓ |
| Multi-licence entities split by activity | ✓ Bank with insurance arm — separate CoPs |
| Out-of-scope activities flagged to General CoP | ✓ Hospital pharmacy → General; telco ASP → General |
| Sectoral vs General CoP conflict resolution stated | ✓ Sectoral prevails on inconsistency per s23 |
| CoP version cited | ✓ E.g., "General CoP 2022" not "General CoP" |

## Self-grade summary

| Deliverable | Pass items / total | Comment |
|---|---|---|
| 1 RoPA | __ / 8 | |
| 2 Privacy notice | __ / 10 | |
| 3 DPIA | __ / 10 | |
| 4 Breach notification | __ / 11 | |
| 5 CoP determination | __ / 6 | |
| **Total** | __ / 45 | |

Grading band:

| Score | Action |
|---|---|
| 38-45 | Move to T3 |
| 30-37 | Move to T3 with the noted gaps as known weaknesses to address during T3 work |
| 22-29 | Re-do the deliverable(s) where you scored below 60%; do not move to T3 yet |
| ≤21 | Re-do T2 from the lesson covering the weakest deliverable |

## Common cross-deliverable observations

Where the audit team sees recurring gaps across all five T2 deliverables in a consulting engagement, the pattern is usually one of:

1. **PCP-era citations throughout** — RoPA references three quantitative DPIA thresholds; DPIA references Commissioner portal; ADMP findings cite Right to Human Review. The fix is a citation-discipline pass across all artefacts.
2. **No cross-regulator integration** — breach plan handles JPDP but not NACSA; DPIA handles privacy but not security; RoPA flags cross-border but ignores BNM RMiT outsourcing notification. The fix is a regulator-mapping matrix per processing activity.
3. **Template-driven without context** — RoPA is a template fill-in with no real flow analysis; privacy notice is a copy-paste of a precedent. The fix is to ask "what does this specific client actually do?" before using any template.
4. **Sensitive PD under-treated** — biometric and health data flagged but the lawful-basis assessment, consent flow, and security measures are not differentiated. The fix is s40 + s9 review for every sensitive-PD-touching activity.

## What's next

If you scored 38 or above, move to [T3 Lesson 1 — The 12 domains as programme scaffold](../t3-programme/01-twelve-domain-scaffold.md).

If below 38, address the gaps before moving on. The T3 programme-builder lessons assume you can operationally produce the T2 deliverables.
