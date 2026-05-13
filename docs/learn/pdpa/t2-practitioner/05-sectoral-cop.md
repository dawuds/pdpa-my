# When a sectoral Code of Practice applies

> **Tier 2 / Lesson 5 — 60 minutes.** Deliverable: Class of Data Users determination for three worked clients (bank, hospital, telco). Citing the wrong CoP is a partner-review reject.

## The s23 mechanism

Section 23 of Act 709 allows the Commissioner to register a Code of Practice for a specific Class of Data Users. Where a sectoral CoP applies, it **prevails over the General CoP to the extent of any inconsistency**.

This matters because:

- Citing the General CoP for a bank's privacy programme **under-cites** — the sectoral Banking CoP is the more specific instrument and a defensible finding cites that first
- Citing a sectoral CoP for an organisation NOT in the relevant Class **over-cites** — the sectoral CoP doesn't apply, and the finding is technically incorrect

## The eight registered CoPs (as of 2026-05-13)

| Sector | CoP | Class of Data Users | Registered |
|---|---|---|---|
| General (all sectors) | General CoP 2022 | All data controllers | 2022 |
| Banking & Finance | Banking & Financial Sector CoP | Licensees under FSA 2013, IFSA 2013, DFIA 2002 | 2024 (revised) |
| Communications | Communications Sector CoP | NSP licensees under CMA 1998 | 2024 (revised) |
| Healthcare (Private Hospitals) | APHM CoP for Private Hospitals | Private hospitals licensed under PHFSA 1998 | 2024 |
| Insurance & Takaful | Insurance and Takaful CoP | Licensees under FSA 2013 / IFSA 2013 (insurance, takaful) | 2016 r1 |
| Aviation | Aviation Sector CoP | Aviation licensees under MAVCOM Act 2015 | 2024 (revised) |
| Utilities — Electricity | Utilities Electricity CoP | Electricity supply licensees under Electricity Supply Act 1990 | 2016 |
| Utilities — Water | Utilities Water CoP | Water services licensees under WSIA 2006 | 2024 (revised) |

The CoPs catalogue lives at [`Tech-Audit/Regulatory/PDPA/References/Codes-of-Practice/`](../../../../Tech-Audit/Regulatory/PDPA/References/Codes-of-Practice/) with version-specific PDFs.

## The three-step Class of Data Users check

Before citing a sectoral CoP, verify:

### Step 1 — primary licensing regime

What is the data controller's primary licensing regime? This is the regulatory permission that defines what the entity is — typically a licence under a specific Act administered by a sector regulator.

- Bank licensed under FSA 2013 → Banking
- Hospital licensed under PHFSA 1998 → Healthcare
- ISP licensed under CMA 1998 → Communications
- Insurer licensed under FSA 2013 → Insurance
- Airline / airport / MRO licensed under MAVCOM Act → Aviation
- Electricity supply licensee under ESA 1990 → Utilities Electricity
- Water services licensee under WSIA 2006 → Utilities Water

A controller may have multiple licences. A bank with an insurance arm under separate licence has both Banking AND Insurance CoPs in scope, for the activities under each licence.

### Step 2 — Class registration

Does the licensing regime correspond to a registered Class of Data Users? See the table above.

A regime not on the list (e.g., real estate brokers, accountants, lawyers) falls under the General CoP only — no sectoral CoP exists yet for those sectors.

### Step 3 — activity scope within the CoP

Is the data controller's specific activity within the CoP's scope? Some CoPs cover only certain licensee categories within a regime.

Example: the Communications CoP covers Network Service Provider (NSP) licensees, which is a specific category under CMA 1998. A licensee under CMA 1998 that holds only an Applications Service Provider (ASP) licence is NOT covered by the Communications CoP — the General CoP applies instead.

Where any of the three steps returns "no", the sectoral CoP does not apply.

## The exercise

Three clients. For each, determine which CoP(s) apply, with reasoning.

### Client A — MyBank Berhad

- Licensed under FSA 2013 (commercial banking licence)
- Subsidiary insurance arm licensed under FSA 2013 (general insurance licence)
- Subsidiary brokerage licensed under Capital Markets and Services Act 2007 (CMSA)

**Your answer:**

- For the commercial banking activities → **Banking & Financial Sector CoP** (Class match — FSA 2013 banking licensee)
- For the insurance arm → **Insurance and Takaful CoP** (Class match — FSA 2013 insurance licensee)
- For the brokerage → **General CoP only** (CMSA 2007 is not currently a registered Class of Data Users for any sectoral CoP; capital markets activities currently fall under General CoP plus SC-GTRM as the parallel regulatory regime, not under a PDPA-sectoral CoP)

**Common error**: citing only the Banking CoP for the whole group. Different licences, different CoPs.

### Client B — KL Specialist Hospital

- Licensed under PHFSA 1998 (private hospital licence)
- Operates an outpatient pharmacy under separate licence (Poisons Act 1952)
- Runs employee health screening services for corporate clients

**Your answer:**

- Hospital activities (in-patient, surgical, etc.) → **APHM CoP for Private Hospitals** (Class match — PHFSA 1998 private hospital licensee)
- Outpatient pharmacy → **General CoP** (the APHM CoP is hospital-specific; the pharmacy activity is not within scope; Poisons Act 1952 is not a registered Class)
- Corporate health screening (B2B service) → **General CoP** (this is not the hospital's PHFSA-licensed activity; it's a commercial service contracted to corporate clients)

**Common error**: applying the APHM CoP to the corporate health screening because the data is health data. Health data sensitivity is governed by s40; CoP applicability is governed by the licensing regime and the activity scope.

### Client C — TelcoMy Berhad

- Licensed under CMA 1998 — holds Network Service Provider (NSP) licence
- Also holds Applications Service Provider (ASP) licence for cloud / fintech services
- Operates a separate retail entity (telco shops) under a sister-company corporate structure

**Your answer:**

- NSP-licensed activities (network operations, billing) → **Communications Sector CoP** (Class match — CMA 1998 NSP licensee; the CoP explicitly covers NSP licensees)
- ASP-licensed activities (cloud, fintech) → **General CoP** (ASP licensees are NOT within the Communications CoP scope per the CoP's own definition; the General CoP applies)
- Retail entity → **General CoP** (separate legal entity, separate licensing; if the retail entity has only Companies Commission Malaysia (CCM) registration with no sectoral licence, no sectoral CoP applies)

**Common error**: applying the Communications CoP to the whole TelcoMy Berhad. ASP licensees are excluded from the Communications CoP scope.

## Where sectoral and General CoP conflict

Where both apply (sectoral via specific class, General as the baseline), the sectoral CoP prevails on inconsistency under s23. Where they are consistent, cite the more specific instrument — the sectoral CoP.

Example: General CoP and Banking CoP both address consent for direct marketing. The Banking CoP's specific consent requirement (with additional safeguards for credit information sharing) prevails. Cite the Banking CoP §[specific section]; the General CoP citation is redundant.

## Common citation errors (cross-reference to Citation Discipline Guide §4)

The Citation Discipline Guide lists seven sectoral-CoP-specific errors (S1–S7):

1. Citing General CoP for an in-class organisation without checking the sectoral CoP
2. Citing a sectoral CoP for an organisation NOT in the relevant Class
3. Citing both CoPs for the same matter without resolving the conflict
4. Citing a stale CoP version (most CoPs were revised in 2024)
5. Citing sector-specific requirements against an out-of-class organisation
6. Citing JPDP DPbD / ADMP / DPIA Guidelines instead of the applicable sectoral CoP for matters the CoP addresses
7. Failing to verify whether a sectoral CoP version is post-A1727 aligned

See [`Citation-Discipline-Common-Errors.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md) §4 for the full list with worked examples.

## Deliverable

Class of Data Users determination memo for three worked clients (the three above). The memo should identify, for each client and each licensed activity, which CoP(s) apply, with the three-step check shown. Self-graded against [T2 checkpoint](06-checkpoint.md).

## GDPR parallel

GDPR Article 40 Codes of Conduct are the structural equivalent — sectoral codes approved by SAs (national-level) or EDPB (transnational). The approval mechanism is slower than PDPA's s23 registration; consequently far fewer Article 40 codes exist than PDPA's eight registered sectoral CoPs.

Examples: EU Cloud Code of Conduct (approved); EU Data Protection Code of Conduct for Cloud Service Providers (separate); national health-sector codes in several Member States.

Parallel exercise: [GDPR T2 Lesson 5 — Article 40 Codes of Conduct](../../gdpr/t2-practitioner/05-codes-of-conduct-article40.md).

## What's next

[Lesson 6 — T2 checkpoint](06-checkpoint.md). Five deliverables completed; review them against the rubric before moving to T3.
