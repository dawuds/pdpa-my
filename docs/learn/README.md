# PDPA Learning Curriculum — Consulting Team

**Last updated:** 2026-05-13
**Audience:** Consulting team supporting PDPA and GDPR engagements
**Maintenance owner:** pdpa-my / Tech-Audit cross-team

This folder contains a structured learning path for the consulting team. Two parallel tracks live here because most engagements need both:

- **PDPA track** — Malaysia's Personal Data Protection Act 2010 (Act 709) as amended by A1727 plus the April 2026 JPDP Guidelines (DPIA, DPbD, ADMP)
- **GDPR track** — the EU General Data Protection Regulation (Regulation (EU) 2016/679) as the cross-jurisdictional benchmark most consulting work needs as a comparator

Each track has 4 tiers — Orientation, Practitioner, Programme Builder, Auditor — with checkpoint deliverables at the end of each tier. The two tracks are designed so a consultant trained on one can pick up the other quickly via the cross-reference module.

## Structure

```
docs/learn/
├── README.md                           This file
├── index.json                          Top-level — points to both tracks
├── pdpa/
│   ├── index.json                      PDPA curriculum spec
│   ├── t1-orientation/                 5 lessons + checkpoint
│   ├── t2-practitioner/                6 lessons + checkpoint
│   ├── t3-programme/                   6 lessons + checkpoint
│   ├── t4-auditor/                     5 lessons + checkpoint
│   └── guidelines/                     JPDP guideline deep-dives (7 guidelines)
├── gdpr/
│   ├── index.json                      GDPR curriculum spec
│   ├── t1-orientation/                 5 lessons + checkpoint
│   ├── t2-practitioner/                6 lessons + checkpoint
│   ├── t3-programme/                   6 lessons + checkpoint
│   ├── t4-auditor/                     5 lessons + checkpoint
│   └── articles/                       GDPR article deep-dives (key Articles)
└── cross-reference/
    ├── pdpa-vs-gdpr.md                 Side-by-side comparison
    ├── concepts.md                     Concept mapping
    └── obligations.md                  Obligation mapping
```

## How the consulting team uses this

| Scenario | Path |
|---|---|
| New joiner — no privacy law background | PDPA T1 → GDPR T1 → cross-reference/concepts.md → PDPA T2 |
| GDPR-trained joiner — new to Malaysia | cross-reference/pdpa-vs-gdpr.md → PDPA T1 lessons 03, 04 → PDPA T2 |
| Malaysian-trained joiner — first GDPR engagement | cross-reference/pdpa-vs-gdpr.md → GDPR T1 lessons 03, 04 → GDPR T2 |
| Programme readiness assessment for client | PDPA T3 (for Malaysian client) or GDPR T3 (for EU exposure) |
| Audit / assessment engagement | PDPA T4 or GDPR T4 plus `Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md` for citation discipline |

## Verification status

The PDPA track is **verified** against the issued April 2026 JPDP Guidelines (DPIA, DPbD, ADMP) and the 2025 guidelines (DPO, DBN, CBPDT). See [`pdpa-my/dpia/`](../../dpia/), [`pdpa-my/dpbd/`](../../dpbd/), [`pdpa-my/automated-decisions/`](../../automated-decisions/) for the verified module trail.

The GDPR track cites the consolidated GDPR text and EDPB Guidelines / Opinions where applicable. **GDPR is illustrative reference for comparative purposes — never legal advice on EU obligations**; for client work involving EU exposure, engage EU-qualified counsel.

## Versioning

This curriculum is loosely coupled to the rest of the repo. The curriculum specifications (`pdpa/index.json`, `gdpr/index.json`) and individual lesson files carry their own version notes inline. When JPDP issues new content or the EDPB issues a major guideline, refresh the affected lessons and bump the relevant `lastUpdated` date.
