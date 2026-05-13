# Why PDPA matters and who it applies to

> **Tier 1 / Lesson 1 — 10 minutes.** Read this before anything else.

## The scope question — who Act 709 binds

Act 709 applies to a person who processes personal data **in respect of a commercial transaction**. Two facts follow.

First: PDPA does **not** bind federal or state government as a data controller in their own commercial-free capacity. This is a real carve-out that surprises people from GDPR-trained backgrounds. Government agencies have their own internal rules; they are not directly subject to JPDP enforcement. Amendments to close this gap have been proposed but were not gazetted as part of A1727.

Second: a foreign organisation processing Malaysian personal data in connection with a Malaysian commercial transaction is in scope. There is no "physical presence in Malaysia" carve-out for the controller obligation.

The line that matters for consulting work: **is there a commercial transaction in scope?** If yes, the client is in scope. If no, the client is probably not — but verify against the Class of Data Users Order (P.U.(A) 336/2013, gazetted 14 November 2013, in force 15 November 2013, empowered by Act 709 s14; as amended by P.U.(A) 7/2016).

## The penalty regime — what's actually on the table

Post-A1727 the penalty ceiling moved materially. The numbers that drive enforcement risk now:

| Offence | Section | Individual penalty | Corporate (s130) | Officer liability (s133A) |
|---|---|---|---|---|
| Principle violation | s5(3) | RM1,000,000 / 3 years | RM3M or 10% turnover | Same as corporate |
| Unregistered processing | s5(2) | RM1,000,000 / 3 years | RM3M or 10% turnover | Same |
| Failure to notify breach | s12B(5) | RM500,000 / 3 years | RM3M or 10% turnover | Same |
| Failure to appoint DPO | s12A(5) | RM250,000 / 2 years | RM3M or 10% turnover | Same |
| Cross-border transfer violation | s129 | RM1,000,000 / 3 years | RM3M or 10% turnover | Same |
| Sensitive PD without explicit consent | s40 | RM1,000,000 / 3 years | RM3M or 10% turnover | Same |

The **10% of annual Malaysian turnover** corporate ceiling is the figure that changes board-level conversation. For a regulated entity with eight or nine-figure Malaysian turnover, the penalty exposure ceases being a line-item and becomes a material risk.

The **officer personal liability** under s133A is the figure that changes director-level conversation. Directors face personal criminal exposure for corporate offences they consent to or are negligent about.

These numbers are why a PDPA programme is no longer a documentation exercise. A1727 turned it into a board-risk topic.

## The JPDP enforcement posture (2026)

Commissioner Shariffah Rashidah Syed Othman signalled an **education-first** posture on issuance of the April 2026 Guidelines. JPDP is publicly prioritising helping controllers understand the new obligations before pursuing aggressive enforcement.

Two things follow:

- **Compliance is still mandatory.** The education-first language is not a transitional period or a safe harbour. It tells you the *enforcement appetite*, not the *legal status*. A controller in breach is in breach; the Commissioner is choosing not to lead with prosecution for now.
- **The window will close.** Comparable frameworks (GDPR, UK GDPR, the older Singapore PDPA) all moved from education to enforcement within 12-24 months of major issuance. Plan as if active enforcement begins in mid-2027.

For consulting engagements: do not rely on the education-first posture as a reason to delay client work. Use it as a reason to accelerate — clients should be in defensible shape before enforcement appetite shifts.

## The dual-regulation problem

PDPA does not live alone. For most regulated clients there is a parallel regulator with overlapping requirements:

| Client type | Parallel regulator | Key overlap |
|---|---|---|
| NCII entity under Act 854 | NACSA | Breach notification: NACSA 6 hours to NC4 vs PDPA 72 hours to Commissioner |
| Licensed bank / financial institution | BNM (under FSA 2013, IFSA 2013) | RMiT cyber + breach reporting + outsourcing |
| Capital markets participant | SC | SC-GTRM + breach reporting |
| Insurance / takaful | BNM | RMiT + breach reporting |
| Communications licensee | MCMC | Communications & Multimedia Act + sector CoP |
| Healthcare (private hospital) | MOH | Private Healthcare Facilities and Services Act |

The most operationally dangerous of these is the **NACSA 6h vs JPDP 72h breach-notification clash**. For an NCII entity hit with a ransomware attack affecting personal data, the same incident triggers both regulators with very different clocks. Programme design must reconcile these — the same notification team cannot run two clocks unless they have been drilled.

## What this lesson does not tell you

This lesson is illustrative. It does not constitute legal or regulatory advice. The **penalty figures cited above derive from `pdpa-my/penalties/index.json`** and the gazetted text of A1727; verify against the source PDF in [`Tech-Audit/Regulatory/PDPA/References/Legislation/PDPA-Amendment-Act-A1727-2024.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Legislation/PDPA-Amendment-Act-A1727-2024.pdf) for any client-facing recommendation.

## GDPR parallel

The structural equivalent is [GDPR T1 Lesson 1 — Why GDPR matters and who it applies to](../../gdpr/t1-orientation/01-why-gdpr-matters.md). Three differences to hold in mind from the start:

1. **Territorial scope**: PDPA is bound by "commercial transaction" in Malaysia (Act 709 s2). GDPR is bound by establishment OR targeting/monitoring of EU subjects (Article 3) — the targeting arm catches non-EU controllers serving EU users.
2. **Penalty exposure**: PDPA caps at RM3M or 10% of Malaysian turnover. GDPR caps at 20M EUR or 4% global turnover. The GDPR figure is global; for multinational clients GDPR is usually the larger absolute exposure.
3. **Government carve-out**: PDPA carves government out of the controller obligation. GDPR has no equivalent — public-sector controllers are bound, with separate Article 6 lawful-basis arrangements.

See [cross-reference/pdpa-vs-gdpr.md](../../cross-reference/pdpa-vs-gdpr.md) for the full side-by-side.

## What's next

Move on to [Lesson 2 — The 7 PDP Principles in 15 minutes](02-seven-principles.md). The 7 Principles are the foundation everything else rests on; you cannot audit or advise without internalising them.
