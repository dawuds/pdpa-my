# Why GDPR matters and who it applies to

> **Tier 1 / Lesson 1 — 10 minutes.** Read this before anything else. Parallel to PDPA T1 Lesson 1.

## The scope question — who Regulation 2016/679 binds

GDPR (Regulation (EU) 2016/679) applies via Article 3 along two arms:

**Article 3(1) — Establishment arm.** A controller or processor with an establishment in the Union is bound for processing in the context of that establishment, **whether or not the processing takes place in the Union**. "Establishment" is interpreted broadly post-Weltimmo (CJEU C-230/14) — even a single representative with stable arrangements can constitute an establishment.

**Article 3(2) — Targeting / monitoring arm.** A non-EU controller or processor is bound where it (a) offers goods or services to data subjects in the Union (regardless of payment) or (b) monitors data subjects' behaviour to the extent that behaviour takes place in the Union.

The targeting arm is the one that catches non-EU companies. A Malaysian SaaS company with no EU establishment but with EU customers is in scope for those customers. The factors the EDPB (Guidelines 3/2018) considers: language directed at EU, currency, country-specific top-level domain, references to EU users, EU-based payments, EU advertising spend.

For the consulting team: do not assume a non-EU client is "out of GDPR". The targeting arm is broad, and the EDPB enforces it.

## The penalty regime — two tiers

GDPR Article 83 imposes administrative fines in two tiers:

**Article 83(4) — lower tier**: up to **10,000,000 EUR or 2% of worldwide annual turnover, whichever is higher**. Triggered by breaches of controller / processor obligations under Articles 8, 11, 25-39, 42, 43.

**Article 83(5) — upper tier**: up to **20,000,000 EUR or 4% of worldwide annual turnover, whichever is higher**. Triggered by breaches of principles (Article 5), lawful basis (Article 6), conditions of consent (Article 7), special category processing (Article 9), data subject rights (Chapter III), cross-border transfers (Chapter V), or non-compliance with a supervisory authority order.

The 4% figure is **global** turnover, not EU-only. This is the single largest exposure differentiator vs PDPA's 10% of *Malaysian* turnover. For a multinational client, GDPR exposure is typically much larger in absolute terms.

The largest fines to date: Meta (1.2 billion EUR — Schrems II / cross-border), Amazon (746 million EUR), Instagram (405 million EUR — children's data). Enforcement is real and material.

## Controller, processor, joint controller

**Controller** (Article 4(7)): determines purposes and means of processing. Primary obligated party.

**Processor** (Article 4(8)): processes on behalf of the controller, under written contract (Article 28). Pre-GDPR processors had no direct statutory obligations; under GDPR they have a substantial set (security, sub-processor consent, breach notification to controller, etc.).

**Joint controllers** (Article 26): two or more controllers jointly determining purposes and means. Must agree, in a "transparent manner", their respective responsibilities — typically in a Joint Controller Arrangement (JCA).

The post-CJEU position on joint controllership (Wirtschaftsakademie C-210/16; Fashion ID C-40/17; Jehovah's Witnesses C-25/17) is broad — operators of social media pages, websites embedding tracking pixels, religious organisations collecting member data have all been found to be joint controllers. Programme design must anticipate joint-controller risk in vendor and platform integrations.

## The one-stop-shop and lead supervisory authority

For controllers with cross-border processing in the EU, Article 56 establishes a "lead supervisory authority" — typically the SA of the member state where the controller's main establishment is. The lead SA coordinates with concerned SAs under the cooperation procedure (Article 60).

Practical effect: a Dublin-based controller's privacy regulator is the Irish Data Protection Commission (DPC), even for processing affecting French or German subjects. The DPC leads; other SAs are consulted.

The one-stop-shop has been criticised for slow enforcement against Big Tech (the DPC has primary jurisdiction over Meta, Apple, Google EU operations). Post-2023, the EDPB has used Article 65 dispute resolution increasingly to override or accelerate Irish decisions.

## Where consulting work usually lands

| Scenario | Typical engagement |
|---|---|
| Non-EU company entering EU market | Article 3 scoping; Article 27 EU representative appointment; Article 13/14 notice; Chapter V transfer architecture |
| EU controller expanding to APAC | Schrems II analysis; supplementary measures; SCC 2021 module selection; local-law-conflict assessment |
| Multinational programme readiness | Joint-controller analysis; lead SA determination; group-wide DPIA programme; BCR consideration |
| Breach incident | Article 33 / 34 timing; harm-likelihood assessment; cross-jurisdictional notification (EU SA + lead-SA + local APAC regulators where applicable) |
| GDPR audit | Article 30 RoPA review; Article 32 security testing; Articles 13/14 notice review; Article 35 DPIA register |

## PDPA parallel

PDPA's scope is bound by **commercial transaction in Malaysia** (Act 709 s2). GDPR's scope is broader on the targeting arm and narrower on the controller-only arm (PDPA pre-A1727 bound only data users; A1727 brought processors into s9 and s12A).

Penalty exposure: PDPA caps at RM3M or 10% of Malaysian turnover. GDPR caps at 20M EUR or 4% global turnover. For the same controller, GDPR is typically the larger absolute figure.

See [cross-reference/pdpa-vs-gdpr.md](../../cross-reference/pdpa-vs-gdpr.md) for the side-by-side. Parallel reading: [PDPA T1 Lesson 1 — Why PDPA matters](../../pdpa/t1-orientation/01-why-pdpa-matters.md).

## What this lesson does not tell you

This lesson is comparative reference for cross-jurisdictional consulting work. It is not legal advice on EU obligations. For client-facing work involving EU exposure, engage EU-qualified counsel and cite the consolidated GDPR text from EUR-Lex plus the EDPB Guidelines.

## What's next

[Lesson 2 — Article 5 in 15 minutes](02-six-principles.md). The six GDPR principles plus accountability are the foundation everything else rests on.
