# PDPA-MY — Personal Data Protection Act 2010

**Last updated:** 2026-03-26

## What This Is
Structured compliance database for Malaysia's PDPA (Act 709) including A1727 amendments. SPA explorer with JSON data layers. **Tier 1 Focus Area** in the GRC portfolio.

## Portfolio Role
One of 5 Tier 1 focus areas. Primary data protection framework for Malaysian organisations. Cross-references NACSA (dual-regulation for NCII entities), AI-Governance (AI data processing), IESP (data protection in assessments), and SC-GTRM (client data in capital markets).

## Quick Start
Open `index.html` in a browser. Run `node validate.js` to check data integrity.

## Architecture
- **SPA**: `index.html` + `app.js` + `style.css` (vanilla JS, no build step)
- **Data**: 83 JSON files across 10 layers
- **Schema**: GRC Portfolio v2.0 Standardized Schema

## Key Data Files
- `controls/library.json` — 49 controls across 10 domains
- `controls/domains.json` — 10 domains (consent, rights, notice, security, lifecycle, breach, cross-border, third-party, governance, registration)
- `provisions/index.json` — 154 sections (Act 709 + A1727 amendments)
- `principles/` — 7 Data Protection Principles + 4 new A1727 rights
- `dpia/` — DPIA methodology, thresholds, worked examples, templates

## Conventions
- Kebab-case slugs
- "Data Controller" terminology (migrated from "Data User" per A1727)
- Bidirectional: Section <-> Control <-> Evidence <-> Artifact
- Cross-references include GDPR, ISO 27701, APEC CBPR mappings

## Important
- **A1727 amendments** are tracked in `provisions/amendment-tracker.json`
- **Breach notification** (s143A): 72 hours to Commissioner — key interaction with NACSA 6-hour obligation
- Controls overlap with NACSA: 14 direct overlap, 12 supplementary (see `nacsa/cross-references/framework-mappings.json`)
- **DPO requirement** under A1727 — separate from CISO under Act 854

## Validation
```bash
node validate.js
```

## Related Repos
- [nacsa](https://github.com/dawuds/nacsa) — 12 PDPA-to-NACSA mappings; dual-regulation for NCII entities (Tier 1)
- [iesp](https://github.com/dawuds/IESP) — BNM IESP assessments include data protection scope (Tier 1)
- [AI-Governance](https://github.com/dawuds/AI-Governance) — PDPA applies to AI data processing, automated decisions (Tier 1)
- [sc-gtrm](https://github.com/dawuds/sc-gtrm) — PDPA applies to capital market client data (Tier 1)
- [Tech-Audit](https://github.com/dawuds/Tech-Audit) — Full 49-control mapping to NACSA CoP + general audit methodology
- [grc](https://github.com/dawuds/grc) — Portfolio hub
