# GDPR breach tabletop — Article 33 / 34 timing under pressure

> **Tier 3 / Lesson 5 — 90 minutes.** Parallel to PDPA T3 Lesson 5. Deliverable: tabletop package + facilitator script + AAR template for a worked SaaS breach.

## Why this differs from the PDPA exercise

GDPR breach response uses the same 72-hour SA clock as PDPA but has different operational mechanics:

1. **Lead supervisory authority** — for cross-border processing, identify and file with the lead SA via Article 56
2. **Awareness vs detection** — the 72h clock starts at awareness of a notifiable breach; reasoned delay must be justified per Article 33(1)
3. **All-breach documentation under Article 33(5)** — even non-notified breaches must be documented internally
4. **No parallel NACSA 6h clock for GDPR-only clients** — simpler than the Malaysian NCII dual-clock scenario; but NIS2 (Directive (EU) 2022/2555) imposes a parallel cyber-incident reporting regime for essential and important entities

NIS2 transposition completed in most Member States by 2024-2025. For NIS2-scoped entities, the parallel clock pattern returns:

| Regime | Clock |
|---|---|
| GDPR Article 33 | 72h (SA) |
| NIS2 | Early warning to CSIRT within **24 hours** of awareness; incident notification within 72h; final report within 1 month |

So GDPR + NIS2 = parallel 24h / 72h clocks. Programme design must reconcile in advance.

## The exercise — DataAnalyticsCo Ltd EU subsidiary

You are facilitating a tabletop for **DataAnalyticsCo (EU) Ltd** — Irish subsidiary of the AdTech firm from T3 Lesson 2. The Irish entity is the lead establishment; ICO no longer applies (post-Brexit). DPC Ireland is the lead SA.

### Scenario brief

**Time 00:00 (Tuesday 10:00 GMT)**: CTO calls the DPO. A malicious insider — a junior engineer with database admin rights — exfiltrated 75,000 EU subjects' behavioural profiles (browsing patterns, inferred interests, device fingerprints) to a personal cloud storage account. The exfiltration occurred over the past three weeks; was detected via SIEM anomaly alert flagging the engineer's bulk-export pattern. The engineer has been escorted out and the cloud account credentials revoked.

**Affected data**: behavioural profiles + inferred sensitive categories (potential Article 9 implications from inferred political opinions, health conditions, sexual orientation).

**Affected scale**: 75,000 EU subjects across the customer base.

**Containment status**: insider isolated; credentials revoked; investigation ongoing into whether data was sold or shared; legal counsel engaged.

**Regulatory triggers**:
- GDPR Article 33 — 72h to DPC Ireland (lead SA) → **expires Friday 10:00 GMT**
- GDPR Article 34 — without undue delay to data subjects → **expected within 7 days but no specific clock**
- NIS2 (if scoped — DataAnalyticsCo as essential / important entity in the digital sector likely IS scoped) — 24h early warning to Irish CSIRT-IE → **expires Wednesday 10:00 GMT**
- UK ICO — DataAnalyticsCo's UK parent — UK GDPR Article 33 — 72h → DataAnalyticsCo Ltd (UK) lead SA

### Phase 1 — initial response (T+0 to T+12h)

| # | Decision | Owner |
|---|---|---|
| 1 | Activate IR team — engineering security + DPO + legal + communications + CEO | CTO |
| 2 | Forensic engagement — external IR firm | CTO + Legal |
| 3 | Insider investigation — HR engagement; coordinate with law enforcement (Garda Síochána for IE; police forces in other jurisdictions if data subjects affected outside IE) | HR + Legal |
| 4 | Lead SA determination — DPC Ireland for EU GDPR; ICO for UK GDPR; coordinate one-stop-shop notification through DPC for EU subjects in other Member States | DPO |
| 5 | NIS2 early warning to CSIRT-IE — 24h clock | DPO + CISO |
| 6 | Article 33(5) all-breach documentation started | DPO |
| 7 | Communications hold on external statements pending Legal review | Communications + Legal |

**Injects (facilitator):**

- T+4h — forensic firm reports the engineer accessed personal cloud account from corporate device; logs show file uploads matching 75K records. Confirms exfiltration
- T+8h — engineer's personal device seized under court order; forensic preservation
- T+10h — anonymous email to legal: "we have copies of the data and will publish unless paid 50 BTC"

### Phase 2 — sustained response (T+12h to T+72h)

| # | Decision | Owner |
|---|---|---|
| 1 | NIS2 24h early warning filed | DPO + CISO |
| 2 | Article 33 SA notification — draft and file with DPC Ireland by T+72h | DPO + Legal |
| 3 | Cooperation with one-stop-shop — DPC notifies concerned SAs (DE BfDI, FR CNIL, IT Garante etc. depending on subject distribution) | DPC (we don't control this directly) |
| 4 | UK ICO notification (separate filing — Brexit means UK GDPR is independent) | DPO + Legal |
| 5 | Ransom decision — engage law enforcement; do NOT pay (typical posture) | CEO + Board + Legal |
| 6 | Article 34 subject communication — draft for delivery; identify affected subjects per Member State for translation | DPO + Communications + Customer Service |
| 7 | Article 9 implications assessment — what proportion of the exfiltrated profiles include inferred Article 9 data? This affects severity of harm and Article 34(3) exception analysis | DPO |

**Injects:**

- T+30h — DPC asks for an interim report
- T+40h — engineer's lawyer indicates the engineer has cooperated and provided cloud-account credentials; cloud forensics confirm no onward sharing
- T+60h — Italian Garante reaches out directly (despite OSS); wants to know about Italian subjects affected. Coordinate via DPC

### Phase 3 — subject notification + post-incident (T+72h to T+30d)

| # | Decision | Owner |
|---|---|---|
| 1 | Article 34 communication — sent to 75,000 affected subjects within reasonable period | DPO + Communications + Customer Service |
| 2 | NIS2 final report within 1 month — root cause + lessons learned | CISO + DPO |
| 3 | Post-incident review — internal | CTO + DPO + CISO |
| 4 | Board briefing | CEO + DPO |
| 5 | Insider threat programme review | CISO + HR |
| 6 | DPC follow-up correspondence + potential investigation | DPO + Legal |
| 7 | Civil litigation defence (data subject claims under Article 82) | General Counsel + external counsel |

## The facilitator script

Same structure as PDPA Lesson 5 but with GDPR-specific decision points:

- Lead SA identification (rather than dual NACSA/JPDP regulator routing)
- NIS2 24h clock parallel
- One-stop-shop coordination
- Article 9 inferred data complication
- Article 82 civil liability exposure (GDPR has explicit data-subject damages right; PDPA does not codify the same way)

## Common gaps

The patterns the audit team catches:

1. **Lead SA not identified** — controller files with the wrong SA or with multiple SAs in panic
2. **NIS2 clock missed** — GDPR plan exists but NIS2 24h early warning not in the runbook
3. **Insider threat scenario underrepresented in tabletops** — most tabletops are external-attacker; insider scenarios are operationally different (slower detection; bigger access)
4. **No Article 9 inferred data assessment** — exfiltration of behavioural data treated as low-risk when inferred sensitive categories are involved
5. **Article 33(5) all-breach documentation skipped** — only notified breaches documented
6. **OSS misunderstood** — concerned SAs reaching out directly is handled by the controller bilaterally rather than via the lead SA
7. **Article 82 civil exposure not factored** — controllers underestimate the personal-damages claim arm of GDPR

## Deliverable

Tabletop package for DataAnalyticsCo (EU) Ltd:

1. Scenario brief
2. Decision-points list per phase
3. Facilitator script with injects
4. AAR template

## PDPA parallel

The PDPA tabletop scenario has the NACSA 6h overlay for NCII clients. GDPR tabletop has NIS2 24h overlay for essential / important entities. The structural similarity:

| | GDPR | PDPA |
|---|---|---|
| SA clock | 72h (Art 33) | 72h (s12B) |
| Parallel cyber clock | NIS2 24h | NACSA 6h |
| Lead regulator | OSS via Art 56 | Single regulator (JPDP) |
| Data subject communication | Without undue delay (Art 34) | 7 days (DBN Guideline) |
| All-breach documentation | Art 33(5) | Not codified |
| Civil damages | Art 82 codified | Not codified the same way |

Parallel reading: [PDPA T3 Lesson 5](../../pdpa/t3-programme/05-privacy-tabletop.md).

## What's next

[Lesson 6 — T3 GDPR checkpoint](06-checkpoint.md).
