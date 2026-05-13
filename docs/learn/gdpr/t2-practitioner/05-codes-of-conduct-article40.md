# Article 40 Codes of Conduct and Article 42 Certification

> **Tier 2 / Lesson 5 — 60 minutes.** Parallel to PDPA T2 Lesson 5. Deliverable: applicability assessment for three worked clients (cloud, AdTech, health).

## The Article 40 mechanism

Article 40 enables associations and bodies representing categories of controllers and processors to prepare codes of conduct that **specify how GDPR applies in a particular sector or context**. Approved codes serve three purposes:

1. **Compliance demonstration** — Article 24(3) — adherence to an approved code can serve as evidence of compliance
2. **Lawful basis evidence** — Article 6(1)(f) legitimate interest balancing test can reference code adherence
3. **Cross-border safeguard** — Article 46(2)(e) — an approved code with binding and enforceable commitments by non-EU controllers can serve as a transfer safeguard

Approval is by the competent SA (Article 40(5)) or, for codes with cross-border scope, by EDPB (Article 40(9)).

## How Article 40 differs from PDPA s23

| | GDPR Art 40 | PDPA s23 |
|---|---|---|
| Authority approving | SA (national-level) or EDPB (cross-border) | Personal Data Protection Commissioner |
| Effect | Voluntary adherence by participating controllers; demonstrates compliance | Mandatory for the Class of Data Users where registered |
| Speed of approval | Slow — multi-year for cross-border codes | Comparatively faster |
| Number of approved codes (2026) | Limited — perhaps a dozen across EU | Eight in Malaysia |

The structural difference: PDPA sectoral CoPs are **regulator-mandated for specific Classes**; GDPR Article 40 codes are **industry-developed and voluntarily adhered to**. PDPA's approach has produced wider sectoral coverage; GDPR's approach has produced deeper, industry-driven codes where they exist.

## Existing Article 40 codes (illustrative, as of 2026-05-13)

| Code | Approving authority | Sector |
|---|---|---|
| EU Cloud Code of Conduct | French CNIL (then EDPB) | Cloud service providers |
| CISPE Code of Conduct for Cloud Infrastructure Services | French CNIL | Cloud infrastructure |
| EU Data Pharma Code of Conduct | Belgian SA | Pharmaceutical industry |
| Future of Privacy Forum (FPF) AdTech codes | Various national SAs (some pending EDPB) | Digital advertising |
| Several national health-sector codes | Respective Member State SAs | Healthcare |

Codes are listed on the EDPB website with status (approved, under review, pending).

## Article 42 certification mechanism

Article 42 allows controllers and processors to obtain certification demonstrating compliance with specific processing activities. Certification:

- Is voluntary
- Is granted by accredited certification bodies (Article 43)
- Is time-limited (maximum 3 years)
- Can serve as a transfer safeguard (Article 46(2)(f)) for the certified processing
- Does NOT reduce the controller's responsibility (Article 42(4))

The relevant standards / schemes that have emerged:

| Scheme | Type | Status |
|---|---|---|
| EuroPriSe | Privacy seal | Active in several Member States |
| ISO/IEC 27701 | International standard for PIMS | Widely adopted as a controller/processor assurance backbone (not GDPR-specific but extensively aligned) |
| ePrivacyseal | Privacy seal | Active |
| Various national certification schemes | National | Varies |

In practice ISO/IEC 27701 has become the de facto international standard for controller/processor assurance. Article 42 formal certification is more limited.

## The exercise

Three clients. For each, assess Article 40 / Article 42 applicability and value.

### Client A — CloudCo Ltd

A B2B cloud infrastructure provider operating EU-based data centres. Customer base: 200+ enterprise controllers using CloudCo as a processor.

**Your assessment:**

- **EU Cloud Code of Conduct** — directly applicable; CloudCo should consider becoming an adherent. Benefits: customer-facing compliance demonstration, Article 28 contract simplification, potential transfer-safeguard support
- **CISPE Code** — also potentially applicable for infrastructure-specific commitments
- **ISO/IEC 27701** — standard practice for cloud providers; supports Article 32 security + Article 28 processor obligations
- **Article 27 representative** — CloudCo is EU-based, no Article 27 trigger

**Common error**: ignoring Article 40 codes because "we're already ISO 27701 certified". Codes and certification are different instruments serving different purposes; both should be in scope for a mature provider.

### Client B — AdTechCo

An AdTech firm operating real-time bidding (RTB) infrastructure. Processes EU subjects' data via cookies and device fingerprints; relies on Article 6(1)(f) legitimate interests for non-consent processing.

**Your assessment:**

- **FPF AdTech / IAB Europe codes** — applicable depending on the specific code's scope and status. Note that IAB Europe's Transparency and Consent Framework (TCF) was subject to enforcement action by the Belgian SA in 2022 — TCF v2 was found non-compliant in significant respects; v2.2 was issued in response. Verify current TCF status before relying on it as a code
- **Article 22 risk** — RTB profiling for ad targeting can trigger Article 22 where the profiling has significant effect; assess carefully
- **Article 6(1)(f) LIA** — required; the post-TCF enforcement landscape makes legitimate-interests LIAs for AdTech subject to heightened scrutiny

**Common error**: treating TCF adherence as conclusive proof of consent validity. TCF is one mechanism; SAs still assess the underlying consent quality.

### Client C — HealthCo

A healthcare provider operating across the Netherlands and Germany. Processes Article 9 health data at scale.

**Your assessment:**

- **National health-sector codes** — verify the Dutch SA's code (if any) and the Bavarian / Federal-level German codes. Where both apply (cross-jurisdictional), navigate carefully — the codes may differ on specific requirements
- **Article 9 conditions** — Article 9(2)(h) preventive medicine + Article 9(2)(i) public health are typical bases for healthcare; verify specifically per processing activity
- **ISO 27701 + ISO 27799 (health information security)** — typical certification stack
- **DPIA** — almost any large-scale health processing is auto-triggered under Article 35(3)(b)
- **Article 27 representative** — HealthCo is EU-based, no trigger

**Common error**: assuming a national code in one Member State automatically applies across the EU. National codes are jurisdiction-specific unless explicitly approved for cross-border scope.

## Deliverable

Article 40 / Article 42 applicability assessment memo for the three worked clients. The memo should identify, per client, which approved codes are within scope, whether certification offers a meaningful compliance demonstration, and any specific risks (TCF status for AdTech; cross-Member-State code variation for HealthCo).

## PDPA parallel

PDPA's eight registered sectoral CoPs (Banking, Communications, Healthcare, Insurance, Aviation, Utilities Electricity, Utilities Water, General) are mandatory for the relevant Class. GDPR's Article 40 codes are voluntary.

Structural mapping:

| GDPR | PDPA | Note |
|---|---|---|
| Article 40 Codes of Conduct | s23 sectoral Codes of Practice | PDPA mandatory; GDPR voluntary |
| Article 42 certification | No direct equivalent | PDPA has no certification scheme equivalent |
| ISO/IEC 27701 | Implicit baseline; no formal recognition in PDPA | Both regimes accept ISO/IEC 27701 as best practice |

Parallel exercise: [PDPA T2 Lesson 5 — when a sectoral CoP applies](../../pdpa/t2-practitioner/05-sectoral-cop.md).

## What's next

[Lesson 6 — T2 GDPR checkpoint](06-checkpoint.md).
