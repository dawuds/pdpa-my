# PDPA-MY — Personal Data Protection Act 2010

**Last updated:** 2026-05-01 (JPDP April 2026 Guidelines verified against issued PDFs)

## What This Is
Structured compliance database for Malaysia's PDPA (Act 709) including A1727 amendments and the **JPDP DPIA, DPbD, and ADMP Guidelines issued 30 April 2026**. SPA explorer with JSON data layers. **Tier 1 Focus Area** in the GRC portfolio.

## Portfolio Role
One of 5 Tier 1 focus areas. Primary data protection framework for Malaysian organisations. Cross-references NACSA (dual-regulation for NCII entities), AI-Governance (AI data processing — heightened relevance after ADMP Guideline), IESP (data protection in assessments), and SC-GTRM (client data in capital markets).

## Quick Start
Open `index.html` in a browser. Run `node validate.js` to check data integrity.

## Architecture
- **SPA**: `index.html` + `app.js` + `style.css` (vanilla JS, no build step)
- **Data**: 95+ JSON files across 12 layers
- **Schema**: GRC Portfolio v2.0 Standardized Schema (controls v3.1)

## Key Data Files
- `controls/library.json` — **57 controls** (v3.1; 49 base + 8 from DPbD/ADMP); 20 critical-tier base + 8 critical-tier new
- `controls/domains.json` — **12 domains** (consent, rights, notice, security, lifecycle, breach, cross-border, third-party, governance, registration, **dpbd**, **admp**)
- `provisions/index.json` — 154 sections (Act 709 + A1727 amendments)
- `principles/` — 7 Data Protection Principles + 4 new A1727 rights
- `dpia/` — DPIA methodology (DEICA 5-step), thresholds, worked examples, templates — aligned with **DPIA Guideline issued 30 April 2026**
- `dpbd/` — **NEW** Data Protection by Design — index, 7 foundational principles, lifecycle integration, PDP Principle integration, children's privacy
- `automated-decisions/` — **NEW** Automated Decision-Making and Profiling — definitions, triggers, rights (Refuse/Information/Human Review), exceptions, AI/Gen-AI safeguards, biometric data, CCTV
- `audit-integration.json` — Maps 57 controls to Tech-Audit/Regulatory/PDPA audit procedures (v1.1.0)

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
- AWP artifacts (Excel workbook, generators, report template, evidence folder structure) are in Tech-Audit/Regulatory/PDPA/ (private repo). This repo contains compliance data only.
- **JPDP April 2026 Guidelines (VERIFIED 2026-05-01 against issued PDFs)** — DPIA, DPbD, and ADMP Guidelines issued by Commissioner Shariffah Rashidah Syed Othman on 30 April 2026, all in Bahasa Malaysia only. The issued versions DIVERGE from PCP Nos. 1-3 of 2025 in several material respects:
  - **DPIA**: ADM removed from quantitative threshold (now Q7 qualitative); sensitive-data threshold extended to financial information; Commissioner-portal notification REMOVED (reporting to senior management only); new 2-year DPIA validity period; retention from cessation of processing.
  - **DPbD**: 7 Cavoukian principles condensed to **4 elements** (Sifat Proaktif / Perlindungan Hujung-ke-hujung / Ketelusan / Berpusatkan Pengguna). Standalone children's privacy chapter REMOVED — only §5.3 parental consent, §10.2 accessible parent/guardian correction, §11.2 accessible parent/guardian access remain. PCP §2.57 prohibition on profiling/ADM of children for advertising/marketing was NOT carried into the issued text — treat as cross-jurisdictional best practice. New Section 13 governance practices.
  - **ADMP**: Three named ADM Restrictions (Refuse/Information/Human Review) NOT carried — anchored in s7 notice + s38 withdrawal. Right to Human Review and 21-day SLA dropped. Right to Information softened from 'shall' to 'may' (boleh) with trade-secret/IP carve-out. Biometric and CCTV measures DROPPED entirely (likely separate guideline forthcoming). Explicit consent downgraded to plain consent for §9.9.3 Exception. New: §6.1 mandates DPIA for any in-scope ADMP regardless of subject count; §5.1 mandates DPO engagement from earliest design.
  - Education-first enforcement posture; compounds up to RM100,000 for non-compliance.
- **ADMP regulatory trigger (Ambang ADMP)** — regulated only where ADMP produces legal effects (kesan undang-undang) OR significantly affects (kesan signifikan) the data subject. Fully or partially automated processing in scope.
- **AI as ADMP tool** — where AI is used for processing personal data involving ADMP, the §10.2 7 best practices apply (permissive — 'boleh menerapkan'). PCP §2.25(b) 'no manipulation' safeguard was DROPPED.

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
