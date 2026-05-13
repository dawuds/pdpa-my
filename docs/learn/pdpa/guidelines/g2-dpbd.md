# JPDP DPbD Guideline (April 2026) — section-by-section deep-dive

> **Deep-dive reference.** Source PDF: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPbD-2026-04.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPbD-2026-04.pdf) (BM-only, 1715 lines extracted).

## Structure of the issued guideline

The guideline is organised across ten Bahagian plus an appendix:

- **Bahagian A: Pengenalan** — Sections 1 (background), 2 (legal basis), 3 (Tafsiran / definitions)
- **Bahagian B: Elemen-elemen DPbD** — Section 4 — the four elements
- **Bahagian C: DPbD bagi Prinsip Am** — Section 5
- **Bahagian D: DPbD bagi Prinsip Notis dan Pilihan** — Section 6 (including deceptive design patterns at 6.4)
- **Bahagian E: DPbD bagi Prinsip Penzahiran** — Section 7
- **Bahagian F: DPbD bagi Prinsip Keselamatan** — Section 8
- **Bahagian G: DPbD bagi Prinsip Penyimpanan** — Section 9
- **Bahagian H: DPbD bagi Prinsip Integriti Data** — Section 10
- **Bahagian I: DPbD bagi Prinsip Akses** — Section 11 (+ checklist intro at 12)
- **Bahagian J: Amalan Terbaik bagi Tadbir Urus DPbD** — Section 13 (governance practices)
- **Lampiran A**: 18-item Data-Oriented + Process-Oriented checklist

The structure differs materially from the March 2025 PCP. The PCP listed seven foundational principles in [B] then applied them across the seven PDP Principles in [C] and had a standalone children's privacy chapter in [D]. The issued guideline replaced the Cavoukian seven with four elements and removed the standalone children's chapter — children appear only in three short paragraphs inside Sections 5.3, 10.2, and 11.2.

## Section 3 — definition

The issued definition of DPbD (§3.1):

> "Suatu pendekatan yang menyepadukan langkah-langkah teknikal dan organisasi yang sewajarnya, yang direka untuk melaksanakan Prinsip-Prinsip PDP ke dalam seluruh kitaran hayat aktiviti pemprosesan data, bermula daripada reka bentuk, pembangunan dan pelaksanaan sehinggalah kepada pelupusan."

EN: "An approach that integrates appropriate technical and organisational measures, designed to implement the PDP Principles, into the entire lifecycle of data processing activities, from design, development, and deployment through to decommissioning."

Three observations:

1. **Lifecycle stages named: design / development / deployment / decommissioning** — four stages. The repo's `dpbd/lifecycle.json` uses a five-stage model that adds "operation" between deployment and decommissioning; that addition is analyst-supplied and should be flagged as such in any audit finding.
2. **Implementation of PDP Principles** — the definition explicitly anchors DPbD to the seven PDP Principles rather than presenting DPbD as an independent regime. This matters: DPbD does not create new statutory obligations beyond what the PDP Principles already require — it operationalises them.
3. **Technical AND organisational measures** — both categories are required. A controller relying only on policy without technical implementation, or only on encryption without policy, does not meet DPbD.

## Section 4 — the four elements

The issued guideline lists **four (4) elements** — NOT the seven Cavoukian foundational principles in the PCP. The four:

| # | Element (BM) | EN | Folds in |
|---|---|---|---|
| 1 | Sifat Proaktif | Proactiveness | PCP's "proactive not reactive" AND "privacy as default" (§4.2.2) |
| 2 | Perlindungan Hujung-ke-hujung | End-to-end Protection | PCP's "end-to-end security" |
| 3 | Ketelusan | Transparency | PCP's "visibility and transparency" |
| 4 | Berpusatkan Pengguna | User-centricity | PCP's "respect for user privacy" |

**Two PCP principles that did not survive as named elements:**

- **"Privacy embedded into design"** (PCP P3) — implicit but not named in issued §4
- **"Full functionality / positive sum"** (PCP P4) — not named at all

**Section 4.2.2** is where privacy-as-default lives in the issued guideline. The PCP had it as a standalone foundational principle (P2); the issued guideline folds it into Proactiveness as a sub-element.

For control library and audit narrative purposes: cite "Element 1 (Sifat Proaktif), specifically §4.2.2 privacy-as-default" not "Cavoukian P2".

## Section 5–11 — DPbD applied to each PDP Principle

Sections 5 through 11 apply DPbD to each of the seven PDP Principles in turn:

| Section | PDP Principle | Notable contents |
|---|---|---|
| 5 | General | Lawful basis, purpose specification, data minimisation. **§5.3 — parental consent for under-18 subjects** (one of three children's protections) |
| 6 | Notice and Choice | s7(1) elements as DPbD. **§6.4 — six prohibited deceptive design patterns** (see below) |
| 7 | Disclosure | Class-of-recipients specification; vendor / processor due diligence |
| 8 | Security | Operationalising s9 and the PDP Standards 2015 via DPbD. Encryption, access control, audit trails, key management |
| 9 | Retention | Storage limitation; auto-deletion; retention schedule integration |
| 10 | Data Integrity | Accuracy validation. **§10.2 — accessible correction by parent/guardian for under-18 subjects** |
| 11 | Access | Data subject rights mechanisms. **§11.2 — accessible access by parent/guardian for under-18 subjects** |

Each section includes a per-principle **Senarai Semak** (checklist) at the end. These are operational checklists, not exhaustive, but reflect JPDP expectations.

## Section 6.4 — the six prohibited deceptive design patterns

Listed verbatim (BM and EN):

| Pattern BM | Pattern EN | Example |
|---|---|---|
| Sarat maklumat | Overloading | 60-paragraph notice with key consent buried in paragraph 47 |
| Melangkau | Skipping | Cookie banner that closes on click-outside, treating click-outside as consent |
| Perangsangan | Stirring | "Yes, I want a better experience" (consent) vs "No, give me a worse experience" (reject) |
| Menghalang | Obstructing | Reject-all takes 4 clicks; accept-all takes 1 |
| Tidak tetap | Fickle | Different cookie banner each visit |
| Dibiarkan tidak termaklum | Left in the dark | Settings page that does not actually disable processing despite the toggle |

A finding citing one of these is a clear DPbD §6.4 + s7 Notice and Choice double-citation. The deceptive pattern itself violates DPbD; the underlying notice may also fail s7(1).

## Children's privacy — only three short paragraphs

The PCP had a comprehensive standalone chapter [D] (Paras 2.38-2.57) on children — best-interests-of-child framework (citing UN CRC Article 3), eight age-verification mechanisms, anti-lockout principle, **prohibition on profiling/ADM/marketing of children unless demonstrably in their best interests**.

**Almost none of this survived into the issued guideline.** Children appear in only three places:

| Section | Rule | Source quote |
|---|---|---|
| 5.3 | Parental consent for under-18 subjects | "Pendekatan DPbD dalam pematuhan Prinsip Am juga menghendaki pengawal data untuk menerapkan pertimbangan privasi terhadap data peribadi subjek data yang berumur di bawah lapan belas (18) tahun dengan memastikan persetujuan yang sah diperoleh bagi pihak subjek data tersebut." |
| 10.2 | Accessible correction mechanism for parent/guardian | Brief mention — correction mechanism easily usable by parent/guardian |
| 11.2 | Accessible access mechanism for parent/guardian | Brief mention — access mechanism easily usable by parent/guardian |

**No best-interests test, no age-verification mechanism list, no anti-lockout principle, no prohibition on profiling/marketing of children.**

This is the single most important issued-vs-PCP divergence in DPbD. A consultant citing the JPDP DPbD Guideline for a profiling-of-children prohibition is incorrectly citing PCP content. The correct citation framing:

- **Issued requirement (cite JPDP DPbD)**: parental consent + accessible parent/guardian rights mechanisms only
- **Leading practice (cite GDPR Recital 38, EU DSA Article 28, UK ICO Children's Code)**: everything else from PCP §2.38-2.57

## Section 13 — governance best practices (NEW)

Section 13 ("Amalan Terbaik bagi Tadbir Urus DPbD") is new content versus PCP — it consolidates governance expectations that the PCP scattered through the Cavoukian "Proactive" principle.

The nine practices:

| ID | Practice |
|---|---|
| GOV-1 | Board-level data protection expertise OR director training |
| GOV-2 | Board-resourced DPbD measures |
| GOV-3 | Senior accountability assignment (designate at least one senior manager / Head of Department) |
| GOV-4 | Personal data compliance KPIs in senior management performance evaluation |
| GOV-5 | Periodic board reporting on data protection programme |
| GOV-6 | DPO meeting cadence with senior management |
| GOV-7 | Periodic policy audits |
| GOV-8 | Systematic DPIA programme |
| GOV-9 | Culture of continuous improvement |

The verb is "amalan terbaik" (best practice), not strict obligation. The §13 items should be cited as ISSUED guidance for senior governance — they appear in the issued text — but the verb hedges the legal force.

## Lampiran A — the 18-item consolidated checklist

Lampiran A organises 18 items in two groups:

| Category | Items (8 Data-Oriented + 10 Process-Oriented) |
|---|---|
| **Data-Oriented (8)** | Ketetapan Awal (Predetermination); Kekhususan (Specificity); Peminimuman data (Data minimisation); Pemisahan (Separation); Pengabstrakan (Abstraction); Pengehadan akses (Access limitation); Keselamatan (Security); Reka bentuk berpusatkan pengguna (User-centric design) |
| **Process-Oriented (10)** | Persetujuan (Consent); Notis (Notice); Kawalan pengguna (User control); Komitmen peringkat atasan (Senior commitment); Kebertanggungjawaban (Accountability); Penilaian / DPIA; Semakan (Review); Penilaian risiko dan audit (Risk assessment and audit); Pengurusan pihak ketiga (Third-party management); Pengurusan pelanggaran (Breach management) |

This is the audit-ready compliance checklist. Use it as the cross-principle compliance reference when scoping an audit.

## Common implementation gaps

The patterns the audit team catches:

1. **DPbD policy references "seven principles"** — programme built on Cavoukian language, not updated to four elements
2. **Children's protections cite PCP §2.57** — profiling/marketing prohibition asserted under JPDP authority that does not exist
3. **No Section 13 governance evidence** — DPbD operational but no board reporting / DPO meeting cadence / senior accountability assignment
4. **Deceptive design patterns present in cookie banners and consent flows** — common; DPbD §6.4 not internalised
5. **Lifecycle includes "operation" without flagging it as analyst extension** — defensible interpretation but should be acknowledged
6. **Cavoukian / GDPR Art 25 / ISO 27701 cited as "referenced by JPDP guideline"** — they are not cited in the issued text

## GDPR parallel

GDPR Article 25 is the equivalent obligation. The mapping:

| Issued PDPA DPbD | GDPR Article 25 / EDPB | Notes |
|---|---|---|
| 4 elements per Section 4 | EDPB Guidelines 4/2019 | Different structure; GDPR doesn't enumerate elements |
| Privacy as default §4.2.2 | Article 25(2) data protection by default | Direct equivalent |
| Section 13 governance | Article 5(2) accountability + Article 24 | GDPR codifies in statute; PDPA in guideline |
| §5.3 / §10.2 / §11.2 children's protections | Article 8 + Recital 38 | GDPR broader — Article 8 age-of-consent threshold (default 16, can be lowered to 13 by Member State), specific protections in Recital 38 |
| §6.4 deceptive design patterns | EDPB Guidelines on Dark Patterns (Guidelines 03/2022) | GDPR has more developed dark-pattern doctrine via EDPB guidance |

Parallel reading: [GDPR Article 25 deep-dive](../../gdpr/articles/article-25-data-protection-by-design.md).

## Cross-references

- Data layer: [`pdpa-my/dpbd/index.json`](../../../dpbd/index.json) — verified module
- Data layer: [`pdpa-my/dpbd/principles.json`](../../../dpbd/principles.json) — 4 elements
- Data layer: [`pdpa-my/dpbd/childrens-privacy.json`](../../../dpbd/childrens-privacy.json) — issuedRequirements vs analystGuidance split
- Data layer: [`pdpa-my/dpbd/governance-best-practices.json`](../../../dpbd/governance-best-practices.json) — Section 13
- Audit programme: [`Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/PDPA-Audit-Program.md) §11 (DPB-01 to DPB-04)
- Citation discipline: [`Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md`](../../../../Tech-Audit/Regulatory/PDPA/Work-Program/Citation-Discipline-Common-Errors.md) §3 rows 4 and 5 (profiling-of-children + Cavoukian errors)
- Source PDF: [`Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPbD-2026-04.pdf`](../../../../Tech-Audit/Regulatory/PDPA/References/Guidelines/JPDP-Guideline-DPbD-2026-04.pdf)

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Verified against issued JPDP DPbD Guideline April 2026. |
