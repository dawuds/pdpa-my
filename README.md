# PDPA-MY — Malaysian Personal Data Protection Act Compliance Database

A structured, machine-readable compliance database for Malaysia's **Personal Data Protection Act 2010 (Act 709)** ecosystem — including the Act, 2024 Amendment Act (A1727), regulations, guidelines, standards, and codes of practice — with an interactive web explorer.

## Overview

| Layer | Directory | Description | Count |
|-------|-----------|-------------|-------|
| 1 | `provisions/` | Act sections — verbatim text + plain-language translation | 151 sections |
| 2 | `principles/` | Deep dive into the 7 PDPA Principles + 4 new A1727 rights | 11 principles |
| 3 | `requirements/` | Three-perspective obligation breakdowns with source tracking | 208 requirements across 21 sections |
| 4 | `evidence/` | Compliance evidence guidance | 40 evidence items across 19 sections |
| 5 | `artifacts/` | Compliance document inventory | 60 artifacts in 7 categories |
| 6 | `controls/` | Common controls with framework mappings + supplement links | 49 controls across 10 domains |
| 7 | `penalties/` | Offences and penalties (original + 2024 amended) | 22 offences in 10 categories |
| 8 | `cross-references/` | Act ↔ regulations, guidelines, codes, GDPR, ISO 27701 | 31 framework mappings |
| — | `supplements/` | Subsidiary instruments (regulations, guidelines, standards, COPs) | 22 instruments |

**74 JSON data files** across all layers.

> **Disclaimer**: This is an indicative/educational resource. It does not constitute legal advice. Always refer to the official gazette text and seek professional counsel for compliance decisions. See [LEARNINGS.md](LEARNINGS.md) for data quality audit history.

## Repository Structure

```
pdpa-my/
│
├── README.md
├── LEARNINGS.md                       # Data quality audit findings and lessons
├── index.html                          # SPA entry point
├── app.js                              # Explorer application
├── style.css                           # Explorer styling
│
├── templates/                          # Compliance document templates (60 files)
│   ├── contracts/                     # 5 contract templates
│   ├── notices/                       # 6 data protection notices
│   ├── policies/                      # 12 policy templates
│   ├── procedures/                    # 15 procedure templates
│   ├── records/                       # 8 record-keeping templates
│   ├── registers/                     # 8 register templates
│   ├── reports/                       # 6 reporting templates
│   └── INDEX.md                       # Template index and usage guide
│
├── provisions/                         # LAYER 1: Act sections (151 total)
│   ├── index.json                      # All sections consolidated
│   ├── parts.json                      # 11 Part definitions
│   ├── by-part/                        # One file per Part
│   │   ├── P01-preliminary.json                        # Part I: ss1–4
│   │   ├── P02-personal-data-protection.json           # Part II: ss5–44
│   │   ├── P03-exemption.json                          # Part III: ss45–46
│   │   ├── P04-commissioner.json                       # Part IV: ss47–60
│   │   ├── P05-fund.json                               # Part V: ss61–69
│   │   ├── P06-advisory-committee.json                 # Part VI: ss70–82
│   │   ├── P07-appeal-tribunal.json                    # Part VII: ss83–100
│   │   ├── P08-inspection-complaint-investigation.json # Part VIII: ss101–109
│   │   ├── P09-enforcement.json                        # Part IX: ss110–127
│   │   ├── P10-miscellaneous.json                      # Part X: ss128–144
│   │   └── P11-savings-transitional.json               # Part XI: ss145–146
│   └── amendment-tracker.json          # 35 changes tracked from Act A1727
│
├── principles/                         # LAYER 2: The 7 Principles
│   ├── index.json
│   ├── general.json
│   ├── notice-and-choice.json
│   ├── disclosure.json
│   ├── security.json
│   ├── retention.json
│   ├── data-integrity.json
│   └── access.json
│
├── requirements/                       # LAYER 3: Obligation breakdowns (21 sections, 208 requirements)
│   ├── index.json                      # All requirements keyed by section ID
│   └── by-part/
│       ├── P02-personal-data-protection.json
│       ├── P04-commissioner.json
│       ├── P08-inspection-complaint-investigation.json
│       └── P10-miscellaneous.json
│
├── evidence/                           # LAYER 4: Compliance evidence (19 sections, 40 items)
│   ├── index.json
│   └── by-part/
│       ├── P02-personal-data-protection.json
│       ├── P08-inspection-complaint-investigation.json
│       ├── P09-enforcement.json
│       └── P10-miscellaneous.json
│
├── artifacts/                          # LAYER 5: Compliance artifacts (60 artifacts)
│   ├── inventory.json                  # All artifacts grouped by category
│   └── provision-map.json              # Bidirectional section ↔ artifact map
│
├── controls/                           # LAYER 6: Common controls (49 controls, 10 domains)
│   ├── library.json                    # All controls grouped by domain
│   ├── domains.json                    # Domain definitions
│   └── provision-map.json              # Bidirectional section ↔ control map
│
├── penalties/                          # LAYER 7: Penalties & enforcement (22 offences)
│   ├── index.json                      # All offences with penalties
│   ├── by-category.json                # Grouped into 10 categories
│   └── amendment-changes.json          # Penalty changes from 2024 amendments
│
├── cross-references/                   # LAYER 8: Cross-reference maps
│   ├── act-to-regulations.json         # 15 section → regulation mappings
│   ├── act-to-guidelines.json          # 8 section → guideline mappings
│   ├── act-to-codes.json               # 9 section → code of practice mappings
│   ├── act-to-standards.json           # 6 section → standard mappings
│   ├── framework-mappings.json         # GDPR (13), APEC CBPR (9), ISO 27701 (9)
│   └── data-user-classes.json          # 13 registered classes with applicable instruments
│
├── risk-management/                    # LAYER 9: Risk Management
│   ├── methodology.json                  # Risk assessment methodology + DPIA integration
│   ├── risk-matrix.json                  # 5x5 risk matrix with bands and actions
│   ├── risk-register.json                # 20 PDPA data protection risks
│   ├── checklist.json                    # 18-item risk assessment checklist
│   └── treatment-options.json            # 4 treatment strategies with PDPA constraints
│
└── supplements/                        # Subsidiary instruments (22 total)
    ├── regulations/                    # 6 regulations/orders
    │   ├── index.json
    │   ├── pdpa-regulations-2013.json
    │   ├── class-of-data-users-order-2013.json
    │   ├── registration-regulations-2013.json
    │   ├── fees-regulations-2013.json
    │   └── compounding-of-offences-2016.json
    │
    ├── guidelines/                     # 4 guidelines
    │   ├── index.json
    │   ├── dbn-data-breach-notification.json
    │   ├── dpo-data-protection-officer.json
    │   ├── cbpdt-cross-border-transfer.json
    │   └── data-protection-notices.json
    │
    ├── standards/                      # 4 standards
    │   ├── index.json
    │   └── pdpa-standard-2015.json
    │
    └── codes-of-practice/              # 8 codes
        ├── index.json
        ├── general-cop-2022.json
        ├── banking.json
        ├── aviation.json
        ├── insurance-takaful.json
        ├── communications.json
        ├── healthcare.json
        ├── utilities-electricity.json
        └── utilities-water.json
```

## Compliance Framework Architecture

The PDPA compliance database implements a **compliance chain** that traces requirements from their authoritative sources through to implementable controls and auditable evidence.

### Source Hierarchy

```
Tier 1: Act 709 ─────────────── Primary legislation (151 sections)        → sourceType: "act"
Tier 2: Standards 2015 ──────── Mandatory technical minimums (s9, s10, s11) → sourceType: "standard"
Tier 3: Guidelines ──────────── Procedural guidance (DBN, DPO, CBPDT, DPN) → sourceType: "guideline"
Tier 4: General Code 2022 ───── Implementation baseline (all sectors)      → sourceType: "general-code"
Tier 5: Sector Codes (×7) ───── Sector-specific tightening/extensions      → sourceType: "sector-code"
```

Each tier adds increasingly specific requirements. Sector codes don't replace higher tiers — they tighten or extend the base obligations for specific industries.

### Compliance Chain

```
Sources (Act + Standards + Guidelines + General Code + Sector Codes)
  → Requirements (~277 obligations with source tracking)
    → Controls (49 controls with supplement links + sector variants)
      → Evidence (40 evidence items)
        → Artifacts (60 compliance documents)
```

### Source Types

| `sourceType` | Count | Example ID | Description |
|-------------|-------|------------|-------------|
| `act` | 115 | `s9-T2` | Direct statutory obligation from Act 709 |
| `standard` | ~19 | `s9-ST1` | Mandatory minimum from Standards 2015 |
| `guideline` | ~29 | `s143A-GL1` | Procedural requirement from JPDP Guidelines |
| `general-code` | ~19 | `s6-CG1` | Implementation requirement from General Code 2022 |
| `sector-code` | ~25 | `s9-CS-BNK1` | Sector-specific tightening from Sector Codes |

### The `tightens` Chain

Requirements from lower tiers may **tighten** requirements from higher tiers. The `tightens` field creates a chain showing how sector-specific requirements build on general ones:

```
s9-T1 (Act: "implement security measures")
  ← s9-ST1 (Standard: "unique credentials, RBAC, MFA for 1K+ subjects")
    ← s9-CS-BNK1 (Banking: "MFA mandatory per BNM RMiT, PCI DSS")
    ← s9-CS-HLT1 (Healthcare: "AES-256 for EHR, TLS 1.2+, 2FA, break-glass")
```

## Data Schemas

### Layer 1: Provisions

Each section object in `provisions/index.json` (array of 151 objects):

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Section ID, e.g. `"s6"`, `"s129A"`, `"s143A"` |
| `part` | string | Part number (Roman numeral), e.g. `"II"`, `"X"` |
| `division` | number\|null | Division within Part (Part II has 4 divisions) |
| `title` | string | Section title |
| `sectionNumber` | number\|string | Numeric or alphanumeric section number |
| `obligationType` | string | `mandatory` \| `administrative` \| `procedural` \| `rights-based` \| `definitional` \| `penalty` |
| `verbatim` | string | Verbatim legal text |
| `translation` | string | Plain-language explanation |
| `amendedBy` | string\|null | Amendment reference, e.g. `"A1727 s5"` |
| `effectiveDate` | string | ISO date of effectiveness |
| `relatedPrinciple` | string\|null | Linked principle ID |
| `keywords` | string[] | Search keywords |

### Layer 2: Principles

Each principle object in `principles/{id}.json`:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Principle ID, e.g. `"general"`, `"notice-and-choice"` |
| `section` | number | Act section number (6–12) |
| `name` | string | Principle name |
| `summary` | string | Plain-language summary |
| `obligations` | object[] | Specific obligations with ID, text, basis, type |
| `exceptions` | object[] | Exceptions with ID, text, basis, conditions |
| `practicalGuidance` | string | Implementation guidance |
| `commonViolations` | string[] | Frequent compliance failures |
| `relatedGuidelines` | string[] | Related guideline IDs |
| `relatedStandards` | string[] | Related standard IDs |
| `relatedCodeSections` | string[] | Related code of practice references |

### Layer 3: Requirements

`requirements/index.json` is keyed by section ID (e.g. `"s5"`, `"s6"`, ...). Each section contains:

| Field | Type | Description |
|-------|------|-------------|
| `sectionId` | string | Section ID |
| `part` | string | Part number |
| `title` | string | Section title |
| `obligationType` | string | Obligation type |
| `legal` | object | Legal/Compliance perspective |
| `technical` | object | Technical/Operational perspective |
| `governance` | object | Governance perspective |

Each perspective object contains `summary` (string) and `requirements` (array):

| Perspective | Prefix | Focus |
|-------------|--------|-------|
| Legal/Compliance | `L` | Statutory obligations, deadlines, penalties |
| Technical/Operational | `T` | Implementation requirements, systems, processes |
| Governance | `G` | Oversight, policies, accountability, reporting |

Each requirement item:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | e.g. `"s6-L1"`, `"s7-T2"`, `"s9-ST1"`, `"s143A-GL3"`, `"s6-CG1"`, `"s9-CS-BNK1"` |
| `requirement` | string | What must be done |
| `rationale` | string | Why it matters |
| `owner` | string | Responsible role |
| `frequency` | string | Review/execution frequency |
| `priority` | string | `Critical` \| `High` \| `Medium` |
| `source` | string | Source provision ID (e.g. `"s9"`, `"esec-2"`, `"dbn-7"`, `"cop-gen-s3"`, `"cop-bank-s6"`) |
| `sourceType` | string | `"act"` \| `"standard"` \| `"guideline"` \| `"general-code"` \| `"sector-code"` |
| `sector` | string\|null | Sector name if sector-specific (e.g. `"banking"`, `"healthcare"`), else `null` |
| `tightens` | string\|null | ID of the requirement this one tightens, else `null` |

### Layer 4: Evidence

`evidence/index.json` is keyed by section ID. Each section contains:

| Field | Type | Description |
|-------|------|-------------|
| `sectionId` | string | Section ID |
| `part` | string | Part number |
| `title` | string | Section title |
| `obligationType` | string | Obligation type |
| `auditorFocus` | string | What JPDP inspectors look for |
| `evidenceItems` | object[] | Specific evidence items |
| `auditTips` | string[] | Preparation tips |

Each evidence item:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | e.g. `"s6-E1"` |
| `name` | string | Evidence name |
| `description` | string | What this evidence demonstrates |
| `whatGoodLooksLike` | string[] | Positive indicators |
| `commonGaps` | string[] | Typical deficiencies |
| `suggestedSources` | string[] | Where to find evidence |
| `format` | string | Expected format |
| `retentionPeriod` | string | How long to keep |

### Layer 5: Artifacts

`artifacts/inventory.json` is grouped by category (`policies`, `procedures`, `registers`, `notices`, `records`, `reports`, `contracts`):

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | Unique kebab-case ID |
| `name` | string | Artifact name |
| `category` | string | Category key |
| `description` | string | Purpose |
| `format` | string | Document format |
| `mandatory` | boolean | Required for compliance |
| `sections` | string[] | Related section IDs |
| `owner` | string | Responsible role |
| `reviewFrequency` | string | Review cycle |
| `typicalPages` | string | Expected document length |
| `keyContents` | string[] | Expected contents |

### Layer 6: Controls

`controls/library.json` is grouped by domain key (10 domains):

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | Unique kebab-case ID |
| `name` | string | Control name |
| `domain` | string | Domain key |
| `type` | string | `preventive` \| `detective` \| `corrective` |
| `layer` | string | Implementation layer |
| `description` | string | Control description |
| `sections` | string[] | Mapped section IDs |
| `keyActivities` | string[] | Implementation steps |
| `maturity` | object | `basic`, `mature`, `advanced` descriptions |
| `toolExamples` | string[] | Example implementation tools |
| `iso27701` | string[] | ISO 27701 clause references |
| `gdpr` | string[] | GDPR article references |
| `apecCBPR` | string[] | APEC CBPR principle references |
| `relatedStandards` | string[] | Related standard IDs (e.g. `"pdpa-standard-electronic-security-2015"`) |
| `relatedGuidelines` | string[] | Related guideline IDs (e.g. `"dbn-guideline-2025"`) |
| `relatedCodes` | string[] | Related code of practice IDs (e.g. `"general-cop-2022"`, `"cop-banking"`) |
| `sectorVariants` | object | Keyed by sector (`"banking"`, `"healthcare"`, etc.), each with `additionalRequirements` and `relatedProvision` |

### Layer 7: Penalties

`penalties/index.json` is an array of 22 offence objects:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Penalty ID, e.g. `"pen-s128-1"` |
| `section` | string | Act section reference |
| `part` | string | Part number |
| `offence` | string | Offence short name |
| `description` | string | Detailed offence description |
| `originalPenalty` | object | Original penalty: `fine`, `imprisonment`, `or_both` |
| `amendedPenalty` | object\|null | Enhanced penalty from A1727 |
| `category` | string | Offence category |
| `compoundable` | boolean | Can be compounded |
| `compoundAmount` | string\|null | Compound amount if applicable |
| `compoundRegulation` | string\|null | Regulation reference for compounding |
| `notes` | string\|null | Additional notes |

### Layer 8: Cross-References

**`framework-mappings.json`** — Keyed by framework (`gdpr`, `apecCBPR`, `iso27701`), each containing:

| Field | Type | Description |
|-------|------|-------------|
| `frameworkName` | string | Full framework name |
| `mappings` | object[] | Array of mapping objects |
| `mappings[].pdpaSection` | string | PDPA section ID |
| `mappings[].pdpaProvision` | string | PDPA provision name |
| `mappings[].frameworkRef` | string | Framework reference (e.g. `"Art. 6"`) |
| `mappings[].frameworkProvision` | string | Framework provision name |
| `mappings[].notes` | string | Comparison notes |

**`data-user-classes.json`** — Array of 13 data user class objects with applicable instruments.

## The 7 PDPA Principles

| # | Principle | Section | Core Obligation |
|---|-----------|---------|-----------------|
| 1 | General | s6 | Process only with consent or lawful basis |
| 2 | Notice and Choice | s7 | Inform data subjects; provide choice |
| 3 | Disclosure | s8 | No disclosure beyond stated purpose |
| 4 | Security | s9 | Protect against loss, misuse, unauthorized access |
| 5 | Retention | s10 | Keep only as long as necessary |
| 6 | Data Integrity | s11 | Ensure accuracy and completeness |
| 7 | Access | s12 | Allow access to and correction of data |

## 2024 Amendment Act (A1727)

The Personal Data Protection (Amendment) Act 2024 (gazetted 17 October 2024, effective 1 April 2025) introduces 35 changes across approximately 23 amended sections and 12 new sections:

- **Enhanced penalties** — Up to RM1,000,000 fine and/or 3 years imprisonment; corporate penalties up to RM3M or 10% of annual Malaysian turnover (s130)
- **Mandatory data breach notification** — New s143A; 72 hours to Commissioner, as soon as practicable to data subjects
- **Data Protection Officer** — Mandatory appointment for prescribed classes (new s129B)
- **Data Protection Impact Assessment** — Required for high-risk processing (new s137)
- **Records of Processing Activities** — Mandatory RoPA for prescribed classes (new s138)
- **Cross-border transfer** — Expanded mechanisms via new s129A (adequacy, SCCs, BCRs, certification, international arrangements)
- **Enhanced data subject rights** — Data portability (s41), withdrawal of consent (s42), erasure (s43), restriction of processing (s44)
- **Officer liability** — Directors and senior officers personally liable for corporate offences (new s133A)
- **Unauthorized data sale** — New offence targeting data brokerage (new s135A)
- **Expanded Commissioner powers** — Unannounced inspections, binding guidance, direct financial penalties

## 13 Classes of Data Users

As defined by the Personal Data Protection (Class of Data Users) Order 2013:

1. Communications
2. Banking & Financial Institutions
3. Insurance & Takaful
4. Health
5. Tourism & Hospitality
6. Transport
7. Education
8. Direct Selling
9. Services (Legal, Audit, Accountancy, Engineering, Architecture)
10. Real Estate
11. Utilities
12. Pawnbroking
13. Moneylending

## Web Explorer

Open `index.html` in a browser to interactively explore:

- **Overview** — Stats banner, browse all 11 Parts
- **Provisions** — Browse by Part/Division, expand verbatim text and translation
- **Principles** — Deep dive into each of the 7 principles with obligations, exceptions, guidance
- **Requirements** — Three-perspective obligation breakdowns (legal, technical, governance)
- **Evidence** — Compliance readiness guidance with auditor focus and audit tips
- **Artifacts** — 60 compliance documents across 7 categories with provision mappings
- **Framework** — Compliance chain flow, 5-tier source hierarchy, worked s9 trace example, 8-layer summary grid
- **Controls** — 49 controls across 10 domains with maturity levels, supplement links, and sector variants
- **Penalties** — 22 offences with original vs amended penalties, compounding info
- **Cross-References** — Section → regulations, guidelines, codes, standards; GDPR/ISO 27701/APEC CBPR mappings
- **Supplements** — Browse 22 subsidiary instruments (regulations, guidelines, standards, codes)
- **Search** — Full-text search across all layers

## Usage

### JavaScript
```javascript
// Load all provisions
const provisions = await fetch('provisions/index.json').then(r => r.json());

// Find sections related to consent
const consentSections = provisions.filter(s =>
  s.keywords.includes('consent')
);

// Load a specific principle
const security = await fetch('principles/security.json').then(r => r.json());

// Check penalties
const penalties = await fetch('penalties/index.json').then(r => r.json());
const breachPenalty = penalties.find(p => p.section === 's143A(5)');

// Load requirements (keyed by section ID)
const requirements = await fetch('requirements/index.json').then(r => r.json());
const s6Reqs = requirements['s6']; // { legal, technical, governance }

// Load artifacts (grouped by category)
const artifacts = await fetch('artifacts/inventory.json').then(r => r.json());
const policies = artifacts.policies; // array of policy artifacts

// Load controls (grouped by domain)
const controls = await fetch('controls/library.json').then(r => r.json());
const consentControls = controls['consent-management']; // array
```

### Python
```python
import json

# Load all provisions
with open('provisions/index.json') as f:
    provisions = json.load(f)

# Count sections amended by 2024 Act
amended = [s for s in provisions if s.get('amendedBy')]
print(f"{len(amended)} sections amended by A1727")

# Load requirements by section
with open('requirements/index.json') as f:
    requirements = json.load(f)
s6_legal = requirements['s6']['legal']['requirements']

# Load cross-references
with open('cross-references/framework-mappings.json') as f:
    mappings = json.load(f)
gdpr_mappings = mappings['gdpr']['mappings']
```

## AI-Generated Content Disclaimer

**IMPORTANT — Data Quality Notice**

This database contains two distinct types of content that must not be confused:

### Authoritative Content (verbatim from official sources)
The following fields reproduce official text directly and are authoritative:
- `verbatim` — Exact statutory text from Act 709 and Amendment Act A1727
- `section`, `sectionNumber`, `part`, `amendedBy`, `effectiveDate` — Structural metadata
- `originalPenalty`, `amendedPenalty` — Penalty amounts from official gazette
- `gazetteDate`, `effectiveDate` fields throughout supplements

### AI-Generated Content (interpretive — not authoritative legal text)
The following fields are **AI-generated interpretations or illustrative examples**. They are provided to assist understanding and compliance planning, but must not be treated as authoritative legal advice or official guidance:

| Field | Location | Nature |
|-------|----------|--------|
| `translation` | `provisions/index.json` | AI-generated plain-language interpretation of statutory text |
| `summary` | `requirements/`, `principles/` | AI-generated interpretive summary |
| `rationale` | `requirements/` | AI-generated explanation of why an obligation exists |
| `practicalGuidance` | `principles/*.json` | AI-generated implementation guidance |
| `commonViolations` | `principles/*.json` | AI-generated illustrative examples |
| `auditorFocus` | `evidence/` | AI-generated interpretive view of inspector priorities |
| `auditTips` | `evidence/` | AI-generated guidance examples |
| `whatGoodLooksLike` | `evidence/` | AI-generated illustrative examples |
| `commonGaps` | `evidence/` | AI-generated illustrative examples |
| `description` (controls/artifacts) | `controls/`, `artifacts/` | AI-generated description |
| `keyActivities`, `maturity` | `controls/library.json` | AI-generated guidance |
| `notes` | `cross-references/framework-mappings.json` | AI-generated comparative analysis |
| `obligations[].obligation` text | `principles/*.json` | Some entries paraphrase statutory text |

**Always verify AI-generated interpretations against the original Act text and official JPDP guidance before relying on them for compliance decisions. Consult qualified legal counsel for compliance advice.**

The web explorer labels AI-generated fields with an **AI Generated** indicator. Items described as examples or guidance (e.g., `whatGoodLooksLike`, `commonViolations`) are marked **Example** or **Guidance**.

## Source

- **Personal Data Protection Act 2010 (Act 709)** — Malaysian Parliament
- **Personal Data Protection (Amendment) Act 2024 (Act A1727)** — Malaysian Parliament (gazetted 17 October 2024)
- **Subsidiary legislation** — Jabatan Perlindungan Data Peribadi (JPDP)
- **Guidelines** — JPDP / Personal Data Protection Commissioner
- **Standards** — Personal Data Protection Standard 2015
- **Codes of Practice** — Registered under s23 of Act 709

## License

This database is a structured representation of publicly available Malaysian legislation and regulatory guidance. The original texts are copyright of the Government of Malaysia. This structured compilation is provided for informational and compliance purposes.

