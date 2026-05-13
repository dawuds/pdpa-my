# DPO under Articles 37-39 — when mandatory, what they do, who they report to

> **Tier 3 / Lesson 2 — 60 minutes.** Parallel to PDPA T3 Lesson 2. Deliverable: DPO appointment memo + tasking + reporting line for a worked client.

## When DPO is mandatory — Article 37(1)

Three triggering categories:

| Trigger | Article | When |
|---|---|---|
| Public body | 37(1)(a) | All public bodies and authorities (except courts in judicial capacity) |
| Large-scale regular and systematic monitoring | 37(1)(b) | Controller's or processor's core activities consist of large-scale regular and systematic monitoring of data subjects |
| Large-scale special category | 37(1)(c) | Core activities consist of large-scale processing of Article 9 special category or Article 10 criminal data |

The EDPB Guidelines on DPOs (WP243rev.01) interpret "core activities" as not "ancillary" — IT and HR processing are usually ancillary to a manufacturer; data analytics is usually core to an AdTech firm.

"Large-scale" is not defined numerically. EDPB factors: number of subjects; volume; range of data; geographic extent; duration. Hospitals are large-scale by example; individual lawyers are not.

Beyond Article 37, **voluntary appointment** is permitted and increasingly common — defensive practice, even where the trigger does not fire.

## Article 38 — position of the DPO

The DPO must be:

- **Involved in all issues relating to personal data protection** (Article 38(1)) — early involvement, not retrofitted
- **Provided necessary resources** (Article 38(2)) — staff, time, training, access to information
- **Independent — no instructions** (Article 38(3)) — the DPO performs tasks autonomously; cannot be instructed how to exercise judgment
- **Reports directly to highest management level** (Article 38(3)) — typically CEO or board
- **Cannot be dismissed for performing tasks** (Article 38(3)) — protection from retaliatory dismissal
- **No conflict of interest** (Article 38(6)) — cannot hold positions where the DPO would review decisions they themselves made

## Article 39 — tasks

The DPO's tasks per Article 39(1):

1. Inform and advise the controller / processor and employees of their GDPR obligations
2. Monitor compliance with GDPR, other data protection laws, and the controller's internal policies — including assignment of responsibilities, training, related audits
3. Provide advice on DPIA upon request and monitor its performance (Article 35)
4. Cooperate with the supervisory authority — single point of contact for the SA
5. Act as the SA's contact point for processing-related matters, including consultations under Article 36

These tasks must be performed with due regard to the risk associated with processing operations, considering the nature, scope, context and purposes of processing (Article 39(2)).

## The exercise

You are appointed as GDPR consultant to **DataAnalyticsCo Ltd**, a UK-based B2C data analytics SaaS (post-Brexit; subject to UK GDPR as the primary regime + EU GDPR for EU customers).

Core activities: large-scale ML-based behavioural analysis of EU consumers for ad targeting. Special category data not collected directly but inferred from behavioural patterns.

### Article 37 trigger assessment

| Trigger | Assessment |
|---|---|
| 37(1)(a) Public body | No — private company |
| 37(1)(b) Large-scale regular monitoring | **YES** — behavioural analysis IS regular and systematic; large-scale per EDPB factors |
| 37(1)(c) Large-scale special category | Marginal — inferred special category data may qualify; CJEU position on inferred sensitive data is evolving |

DPO appointment is mandatory under at least Article 37(1)(b).

### Deliverable 1 — DPO appointment memo

> **DPO Appointment — DataAnalyticsCo Ltd**
>
> **Statutory basis**: Article 37(1)(b) UK GDPR / EU GDPR — large-scale regular and systematic monitoring
>
> **Effective date**: [Date]
>
> **Appointee**: [Name] (external DPO via [Service Provider]; named individual + service provider entity)
>
> **Reporting line**: DPO reports directly to CEO and quarterly to the Board's Risk Committee. Operational independence per Article 38(3).
>
> **Tasks (Article 39)**: as listed in the role description (below)
>
> **Resources**: dedicated time allocation (estimated 3 FTE-days/week); training budget GBP 15K annually; access to all relevant systems and personnel
>
> **Conflict of interest assessment**: external appointee with no other role in DataAnalyticsCo — no conflict
>
> **Cooperation with SA**: Information Commissioner's Office (ICO) is the lead SA for UK GDPR; designation of EU lead SA via one-stop-shop for EU operations under Article 56 — assess based on main establishment
>
> **SA notification**: Article 37(7) — DPO contact details published in the privacy notice + notified to ICO
>
> **Article 27 representative**: DataAnalyticsCo is UK-established but has EU customers under Article 3(2) targeting → Article 27 EU representative required for EU GDPR; separate appointment

### Deliverable 2 — DPO tasking

| Task | Detail |
|---|---|
| Inform and advise | Quarterly compliance briefings to senior management; ad-hoc advice to product / engineering / marketing on processing changes |
| Monitor compliance | Annual compliance review covering all 8 pillars; quarterly audit of one pillar in rotation |
| DPIA advice | Reviewer for all DPIAs; signs off completed DPIAs; monitors execution of mitigation |
| SA cooperation | Single point of contact for ICO + lead EU SA; logs all SA correspondence |
| SA contact for subjects | DPO contact published in privacy notice |
| Training | Annual programme covering all staff; specialised training for engineering / marketing |
| Breach response | Article 33/34 notification lead; coordinates with IR team and legal |

### Deliverable 3 — DPO reporting line

> DPO →  CEO (operational reporting; weekly informal, monthly formal)
> DPO →  Board Risk Committee (governance reporting; quarterly)
> DPO →  ICO + lead EU SA (regulatory; as needed)
>
> Performance evaluation: by Board Risk Committee, NOT by any business unit whose processing the DPO reviews. Performance KPIs aligned to compliance outcomes (RoPA completeness, DPIA quality, training delivery, audit findings closure) — never tied to operational outcomes that would create conflict.

## Common gaps

The patterns the audit team catches:

1. **Article 37 trigger not formally assessed** — DPO appointed or not appointed without documented assessment
2. **DPO is the General Counsel or CISO** — possible but conflict-of-interest assessment must be documented. EDPB Guidelines explicitly list COO, CFO, head of marketing as positions creating conflict
3. **DPO reports to middle manager** — fails Article 38(3) "directly to highest management"
4. **External DPO without named individual** — Article 37(6) allows external appointment but the contract must specify the natural person responsible
5. **No SA notification** — Article 37(7) requires publication and notification; commonly missed
6. **No Article 27 representative** — for non-EU controllers with Article 3(2) targeting, Article 27 is a separate obligation
7. **DPO tasked with marketing / sales / product decisions** — conflict with the monitoring role

## PDPA parallel

PDPA s12A imposes a broader DPO obligation (mandatory for all controllers and processors). GDPR is triggered by activity. Practical effect:

| | GDPR | PDPA |
|---|---|---|
| Mandatory trigger | Article 37(1) — activity-based | s12A — universal for controllers and processors |
| Notification | Article 37(7) — published + notified to SA | s12A — Commissioner notification via SPDP |
| Independence | Article 38 | DPO Guideline 2025 |
| Tasks | Article 39 — five-item list | DPO Guideline 2025 |
| Conflict of interest | Article 38(6) + EDPB Guidelines | DPO Guideline 2025 |
| Dismissal protection | Article 38(3) | DPO Guideline 2025 |

For dual-regime clients, PDPA's broader scope means the DPO appointment satisfies both regimes automatically; the question becomes whether a single DPO can cover both — usually yes if the DPO has both PDPA and GDPR expertise.

Parallel reading: [PDPA T3 Lesson 2 — DPO under A1727](../../pdpa/t3-programme/02-dpo-under-a1727.md).

## What's next

[Lesson 3 — DPIA + PbD + Article 22 triad](03-dpia-pbd-art22-triad.md).
