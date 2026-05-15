# PDPA-MY Explorer — Design Notes & Lessons Learnt

**Last updated:** 2026-05-13

This file captures the design decisions, lessons learnt, and deferred items from the May 2026 UX iteration. It is the single source of truth for "why does the Learn view look like this?" and "what design patterns were considered and rejected?".

## Provenance — references that shaped this iteration

| Source | What we took |
|---|---|
| [OT-Security `app.js` & `style.css`](https://github.com/dawuds/OT-Security) | Route schema (`#learn/tier:.../lesson:...:...`), tiny markdown renderer (`mdToHtml`, ~110 lines, zero deps), `loadText()` helper, lesson reader anatomy (breadcrumb + body + prev/next + back-to-tier) |
| `~/claude/design-templates/patterns/07-research/feature-explainer.md` | TL;DR-card pattern (clay-bordered lead-in), citations-as-files-block pattern, lesson-objectives block design |
| `~/claude/design-templates/tokens.md` (warm-paper palette) | Considered as a full restyle — **rejected this iteration** for cost; partially borrowed (single-accent restraint, no-shadow cards, mono for meta-labels) |
| Four parallel review agents (QA, ID, UX, live-tester) — May 2026 | The "three implementable wins" from each |

## The single biggest UX defect we fixed

Click-through from a curriculum card opened the lesson in GitHub's `?raw=` rendered view in a new tab. The user lost place, lost the SPA chrome, and had to manually return.

**Fix:** in-app markdown rendering via a vendored-zero-deps `mdToHtml()`, served from the same origin (CSP-safe). Lessons now open inside the SPA with breadcrumb, prev/next, and a "View raw on GitHub ↗" link kept as a secondary escape hatch.

## Route schema (final)

```
#learn                                       Learn landing (callout + index)
#learn/pdpa/tier:<tierId>                    PDPA tier detail
#learn/gdpr/tier:<tierId>                    GDPR tier detail
#learn/pdpa/lesson:<tierId>:<lessonId>       In-app PDPA lesson reader
#learn/gdpr/lesson:<tierId>:<lessonId>       In-app GDPR lesson reader
#learn/guideline:<id>                        JPDP guideline deep-dive (g1..g7)
#learn/article:<id>                          GDPR article deep-dive
#learn/crossref:<slug>                       Cross-reference doc (concepts / obligations / pdpa-vs-gdpr)
```

Routes are deep-linkable, back-button safe (no JS history mutation), and bookmark-friendly. The pattern matches OT-Security's `#learn/lesson:t1-orientation:01-why-ot-is-different`.

## Card differentiation — the "ISSUED 30 APR 2026" callout

UX agent's #1 finding: the recent-issuance cards were visually identical to every other card.

**Fix:** new `.guideline-card-issued` variant with:
- `border-left: 4px solid var(--accent)` (vs 1px gray on regular cards)
- A `.badge-issued` pill ("ISSUED 30 APR 2026 · BM")
- Gradient background (`linear-gradient(135deg, rgba(37,99,235,0.05), rgba(37,99,235,0.02))`)
- Hover transform + shadow

This is the single highest-signal element in the Learn view. A consultant scanning for "what's new from JPDP?" finds it in <2 seconds.

## Scaffold-as-expertise-grows — the design principle

The user's instruction: *"the idea is to scaffold and enhance as expertise grows"*.

Concretely, the curriculum and the explorer should let a junior consultant progress without context-loss:

1. **Land on Overview** → see the explorer's scope.
2. **Nav to Learn (position 2)** → see the April 2026 callout, then the curriculum tiers.
3. **Click a tier card** → see all its lessons with deliverables.
4. **Click a lesson** → read inline; learning objectives at the top, prev/next at the bottom, GDPR parallel cross-link below.
5. **Progress through T1 → T2 → T3 → T4** without ever leaving the SPA.

The deferred features that complete the scaffold (see Roadmap below) — localStorage progress tracking, side-nav TOC, completed-lesson badges — are the natural next layer.

## What did NOT make this iteration (and why)

| Deferred | Rationale | Notes |
|---|---|---|
| Sticky left-rail TOC (feature-explainer pattern) | Cost ~150 lines of JS + CSS; not blocking | Tracked: render `<h2>`/`<h3>` from `mdToHtml` into a sidebar with IntersectionObserver-driven `.active` |
| localStorage progress tracking ("I've read this" toggle) | Adds state mgmt complexity | Tracked: per-lesson read flag + per-tier % progress badge in tier cards |
| Inline `<details>` retrieval prompts in lessons (ID agent's #1 win) | Requires editing 22+ lesson `.md` files | Tracked: scriptable pass via index.json |
| Foundation-refresher block in T2/T3/T4 checkpoints | Requires authoring 15+ new questions | Tracked: bulk edit of 3 checkpoint files |
| Warm-paper palette (design-templates tokens) | Full restyle — disruptive | Considered. Current Inter/blue palette retained for brand consistency with NACSA/OT-Security/IESP sibling repos |
| Search index expansion (Learn corpus + DPbD aliases) | Live-tester P1 — but search refactor is deep | Tracked: tester report cites the exact synonym map needed |
| Mobile hamburger nav | Live-tester P1 — but acceptable as horizontal scroll for now | Added scroll-snap + 44px tap target as interim fix |
| Overview rebuild as briefing dashboard | UX agent's recommendation; biggest single UX lift but biggest scope | Tracked for next sprint |

## Content accuracy fixes (May 2026 cycle)

Cross-cutting issues caught by the QA agent and corrected:

| # | Issue | Files touched | Authoritative source |
|---|---|---|---|
| 1 | Class of Data Users Order cited as `P.U.(A) 339/2013` (corpus) and `P.U.(A) 168/2013` (JSON data layer) — both wrong | `docs/learn/pdpa/t1-orientation/01-why-pdpa-matters.md`, `docs/learn/pdpa/index.json`, `supplements/regulations/class-of-data-users-order-2013.json`, `supplements/regulations/index.json`, `cross-references/data-user-classes.json` | Gazette extraction: **P.U.(A) 336/2013**, empowered by Act 709 s14, gazetted 14 Nov 2013, in force 15 Nov 2013, amended by P.U.(A) 7/2016 |
| 2 | "Four new data subject rights" heading vs three-row table in T1 lesson 3 | `docs/learn/pdpa/t1-orientation/03-a1727.md`, `02-seven-principles.md`, `index.json` | Three new (erasure s43, portability s43A, restriction s44) + two refined (access s30, correction s34) |
| 3 | Materially wrong claim "PDPA has no legitimate-interests basis" | `docs/learn/cross-reference/concepts.md`, `cross-reference/pdpa-vs-gdpr.md`, `docs/learn/pdpa/guidelines/g7-privacy-notice.md` | Act 709 s6(2)(g) IS the legitimate-interests basis, with a balancing test similar to GDPR Art 6(1)(f) |
| 4 | s6(2) basis-letter mapping wrong across the cross-reference tables (consent listed as s6(2)(a), contract as s6(2)(b), etc.) | Same as #3 | Per gazette text: s6(1) = consent default; s6(2)(a)–(h) = bases without consent. Corrected to authoritative letter mapping. |
| 5 | DPbD domain description still said "7 foundational DPbD principles" | `controls/domains.json` | Issued April 2026 text has 4 elements, not 7 Cavoukian. The standalone children's-privacy chapter from PCP No.2/2025 was not carried into the issued text — only §5.3 / §10.2 / §11.2 remain |
| 6 | Sectors view subtitle said "registered classes of data users" | `app.js` Sectors render | Post-A1727 terminology is "data controllers" — the JPDP retains the Order's historical title ("Class of Data Users") but data subjects of the obligation are now called controllers |

## Lessons learnt — process

1. **Run review agents in parallel, not series.** Four reviewers (QA, ID, UX, live-tester) returned 6,000+ words of useful findings in 7 minutes wall-clock. Series would have been ~25 minutes.
2. **Hand the implementer specific files + lines.** Every agent's top-three list named files and what to change. That converted to ~2 hours of work; vague advice would have stalled.
3. **Verify against gazette PDFs, not against your own JSON data layer.** Three different files in this repo cited three different (all wrong) P.U.(A) numbers. The PDF cover page is authoritative; the data layer is a model.
4. **Sister-repo conventions are cheap reuse.** OT-Security's route schema, markdown renderer, and tier-card pattern dropped into pdpa-my with zero friction because both repos share base.css conventions. **Standardise the convention; copy the implementation.**
5. **One commit per concern.** Content fixes + UX fixes + new lesson reader = three commits, not one. Easier to revert if any single concern regresses.

## Lessons learnt — content

1. **A repo that teaches citation discipline must itself pass citation discipline.** We had 5 distinct citation errors in the corpus, including one (the P.U.(A) number) that appears three times. The t4/03 citation-discipline lesson teaches an 11-row error list — those errors live in the corpus that teaches the lesson. Audit your own auditing tools.
2. **"No legitimate-interests basis" is the kind of confident wrong claim that survives because it sounds like a known difference.** PDPA-vs-GDPR comparators frequently get this wrong; the actual answer requires reading s6(2)(g). Lesson: every cross-regime claim needs a citation from the primary source, not from a comparator article.
3. **Counts drift.** "Seven foundational principles" / "Four new rights" / "151 sections" — each one was correct at some point in some draft and survived into the issued/current version where it stopped being correct. Lesson: numbers in text are content debt; prefer numbers computed from data layers (`controls.length`, `provisions.length`).

## Iteration 2 (2026-05-15) — what landed

Second round of two parallel agent reviews (UX + ID), both scoped against `~/claude/design-templates/` patterns and the live Pages site. Where they converged, we shipped.

### Convergent wins (both agents independently picked these in their top-2)

1. **Sticky in-lesson TOC** (feature-explainer pattern). `mdToHtml()` now returns `{ html, headings }` — h2/h3 emit stable slug IDs as they render. `buildToc(headings)` produces a left-rail `<nav class="lesson-toc">`. `wireTocObserver()` runs after `setHTML`: click-to-scroll (preventDefault, `scrollIntoView({behavior:'smooth'})`) plus an IntersectionObserver that flips `.active` on the link for the currently-visible section. Applied to all four long-form views: `renderLearnLesson`, `renderGuidelineDeepDive`, `renderGdprArticle`, `renderCrossRefDoc`. New `.lesson-page` 2-column grid (220px / 1fr), collapses to single column below 920px. Approximate cost: 80 LOC in app.js, 70 LOC in style.css.

2. **Collapsible answer keys on checkpoints** (ID agent #5). Extended `mdToHtml` with raw-HTML passthrough for `<details>`, `<summary>`, `<div>` block tags (and a single-line `<summary>…</summary>` form that still applies inline markdown formatting to the inner text). Added `.md-body details` styling — clay-coloured rotating-triangle marker, no native disclosure marker. Converted `t1-orientation/05-checkpoint.md` to 10 collapsibles as the proof; the same pattern unblocks T2/06, T3/06, T4/05 checkpoint refactors (deferred — mechanical, scriptable).

### Where the agents disagreed

- **UX agent #1** was to rebuild Overview into a briefing dashboard. **ID agent pushed back**: Overview is read once per visit, the Learn-callout already covers "what's new", and the cost is medium-to-high. **Decision: defer to round 3** (kept in roadmap below). The ID agent's framing was stronger — Learn-callout already does the job for return visitors, and one-time-visitor optimisation is the wrong leverage point.
- **UX agent expected ID agent to push inline retrieval prompts in lessons**. The ID agent actually de-prioritised those in favour of *anchoring* primitives (scope blocks, prerequisites, TOC). Aligned with current evidence: anchoring is what the corpus most lacks; retrieval prompts are an end-stage refinement.

### Patterns considered from `~/claude/design-templates/` and the disposition

| Pattern | Disposition | Note |
|---|---|---|
| `feature-explainer` (sticky left nav, TL;DR, collapsible steps, callouts, FAQ) | **Adopted** (TOC) | Highest-leverage match for long-form documentation. TL;DR card promoted to roadmap. |
| `concept-explainer` (interactive SVG demos, playable concepts) | **Rejected** | Wrong tone for GRC consulting tool. The compare-table colouring sub-pattern is on the roadmap. |
| `module-map` (codebase tour, step-trail, key-files block) | **Partially adopted in spirit** | Critical-tier sidebar for Controls view is on the roadmap as a step-trail variant. |
| `living-design-system` (tokens, component gallery) | **Not adopted** | Existing token system already adequate; documenting it post-hoc has low return. |
| `status-report` (summary-band, highlights, risk-dot table) | **Roadmap (round 3)** | UX agent #1 target — Overview-as-briefing-dashboard. |
| `tokens.md` warm-paper palette (ivory / slate / clay / olive / rust) | **Rejected** (re-confirmed) | Brand coherence with NACSA/OT-Security/IESP sibling repos requires Inter+blue. Borrow the *shape* (3-4px accent left-borders, no shadows) without the colour swap. |
| `animation-sandbox` | **N/A** | Reference tool — no micro-interaction worth documenting. |
| `arrow-key-deck` (scroll-snap slides) | **N/A** | Possibly useful for a 30 Apr 2026 briefing presentation but that's a separate artifact. |

### Lessons learnt — iteration 2

1. **Two reviewers running in parallel produces sharper convergence than one running deep.** UX and ID agents disagreed on Overview vs in-lesson TOC priorities — the disagreement itself was the most useful output. Where two reviewers agree, ship it; where they disagree, the disagreement names the trade-off you actually need to think about. **Single-reviewer mode hides trade-offs.**
2. **A markdown renderer that returns metadata is more useful than one that returns only HTML.** Changing `mdToHtml` from `string` to `{ html, headings }` was a small API break (5 callsites in app.js) but unlocked the entire TOC feature without touching the markdown corpus. Same pattern would unlock: word-count per heading, "minutes to read" estimates, exportable outlines.
3. **The right way to add `<details>` to a custom markdown parser is to make it permeable to raw HTML, not to invent a new sigil.** Trying to invent a `???` or `:::collapsible` syntax would have been one more thing for content authors to learn. Author writes plain HTML; renderer passes it through. Lower cognitive load for the corpus.
4. **CSP+href interaction:** `href="javascript:void(0)"` IS blocked by our CSP even with `unsafe-inline` because the directive applies to inline scripts in HTML attributes only via `'unsafe-inline'` — but Chrome's CSP enforcement of `javascript:` URIs varies by browser version. **Use `href="#"` + `preventDefault()`** for in-app anchor links. Safer across browsers, cleaner CSP semantics, no surprise behaviour from agent CSP rules.

## Roadmap — round 3 (next iteration, ≈2 weeks)

Six items sized to land in one focused iteration. Convergent picks from the UX + ID agents that are concrete, low-medium effort, and unblock other work.

1. **Apply checkpoint collapsibles to T2/06, T3/06, T4/05.** Scriptable; mechanical port of the T1 pattern landed in iteration 2. Effort: low.
2. **Per-lesson "Scope of this lesson" boundary blocks** (ID agent's strongest anchoring primitive). Add `outOfScope: string[]` to lessons in `index.json`; render between header and objectives. Currently only 3 of 22 PDPA lessons have scope-boundary prose; the other 19 leak. Effort: low-medium (mostly JSON authoring).
3. **Per-lesson `prerequisites` chips** (anchoring primitive #2). Add `prerequisites: ["t1:02-seven-principles"]` to each T2/T3/T4 lesson; render as chip row above objectives. Today tier-level prerequisites are invisible from a lesson-direct deep-link. Effort: low.
4. **Wire guideline deep-dives to comparator anchors.** The `pdpa-vs-gdpr.md` doc has 15 numbered sections; add stable anchors (the iteration-2 slugify pass mostly did this) and link from each guideline deep-dive's "GDPR parallel" row to the matching section. Effort: low.
5. **Mobile hamburger nav.** Below 768px, collapse the nav strip into a button that toggles a slide-over. P1 from the live tester. Effort: medium.
6. **Search index expansion.** Include the Learn corpus, the `dpbd/` + `dpia/` + `automated-decisions/` data layers, and synonym maps ("Privacy by Design" → DPbD). Effort: medium.

## Roadmap — round 4+ (parked, ≈1–3 months)

Larger or lower-priority items waiting for a second cycle. Each is genuinely worth doing — just not first.

- **Overview rebuild as briefing dashboard** (UX agent #1, deferred twice now). Replace "Browse by Part" duplication. Lead with: "What changed 30 April 2026" + 3-card jump-to + breach-clock comparator + audit-work-program pointer + `status-report`-style risk-dotted recently-issued table.
- **localStorage read-state memory.** `state.readState[trackId/tierId/lessonId] = timestamp` on lesson-reader page-load. Tier cards show `3/5 read`. Label "read-state" not "progress" — avoids gamification framing.
- **Foundation-refresher blocks in T2/T3/T4 checkpoints.** Pull 2-3 questions from earlier-tier checkpoints. Combats forgetting curve.
- **Controls view step-trail enhancement** (UX agent #3) — step-numbered domain badges + `.hot` class on dpbd/admp + sticky right-sidebar with critical-tier (28 control) list. Module-map-flavoured.
- **Lesson `.tldr` card** (UX agent #4) — one-sentence-per-lesson backfill, render above objectives block, accent left-border.
- **Worked-example artefacts for T2 deliverables** — finished RoPA, privacy notice, DPIA, breach notice, sectoral-CoP determination as standalone reference artefacts under `docs/learn/pdpa/t2-practitioner/worked-examples/`.
- **Inline retrieval prompts in lessons.** Now genuinely unblocked by the iteration-2 raw-HTML passthrough — could land any time but lower priority than anchoring primitives.
- **Compare-table colouring on cross-reference docs** — extend `mdToHtml` to flag `td` cells whose text starts with ✗ / "no equivalent" / "diverges" with a left-bar. Concept-explainer sub-pattern.
- **Print stylesheet.** The nav has PDF/CSV buttons but the underlying `window.print()` produces a poor artefact. `@media print` rules for the Reference + Penalties views specifically, so the print is usable as a client deliverable.

## Future considerations — 1 year horizon (strategic, not committed)

These are direction-of-travel items. They become roadmap items only when a specific engagement, client need, or regulatory event makes them concrete. Listed so the next reviewer doesn't waste time re-inventing them.

### 1. Sister-repo synchronisation via a portable learn-renderer

The lesson-reader pattern now exists in two repos (`OT-Security`, `pdpa-my`) and would be useful in three more (`nacsa`, `IESP`, `AI-Governance`, possibly `sc-gtrm` and `Tech-Audit`). Each one has its own `app.js` with a hand-ported markdown renderer.

The right end-state: extract `mdToHtml`, `buildToc`, `wireTocObserver`, `loadText`, plus the `.lesson-page` / `.md-body` styles into a small **vendored** `learn-renderer.js` + `learn-renderer.css` that each repo copies into its own tree. Not an npm package — too much ceremony for a 200-LOC dependency and a static-site target. A single source-of-truth file under `~/claude/_shared/` with documented "how to update" instructions per repo.

Improvements then propagate by copy-paste from one canonical version. Same maintenance model the design-templates folder already uses.

### 2. BM-first content strand

The April 2026 JPDP Guidelines (DPIA, DPbD, ADMP) are **BM-only authoritative**. The current corpus is EN-primary with BM section citations interspersed. A consultant briefing a Malaysian board, a JPDP inspector, or a Bahasa-first counsel cannot use the corpus directly — they have to translate as they go.

Two paths:
- **(a) Parallel BM tracks**: author `docs/learn/pdpa-bm/` mirroring the EN structure. Highest fidelity; highest authoring cost (≈ 22 lessons × 2-4 hours = 44-88 hours of expert translation).
- **(b) Inline BM badges**: keep the EN corpus, add per-paragraph BM-equivalent text in collapsible badges for high-stakes claims (statutory citations, defined terms). Cheaper, less complete.

Decision deferred until a Malaysian engagement requires it. Track which clients ask.

### 3. Curriculum versioning + freshness signals

JPDP will issue more guidelines. The current "Last verified: 2026-05-13" footers degrade silently — there is no mechanism to detect when a document is stale.

Build:
- Per-doc `verifiedAgainstVersion: { "DPbD": "2026-04", "ADMP": "2026-04" }` frontmatter
- A surface-wide "verification freshness" badge that turns yellow when the most-recently-issued JPDP guideline version differs from any cited version
- `tools/check-freshness.js` script that queries JPDP's published-guidelines list (or a manually-maintained `references/issued-versions.json`) and flags stale references

Becomes load-bearing the first time JPDP reissues a guideline (probably DPO Appointment, given the August 2025 / February 2025 dual versions).

### 4. Audit-AWP integration (gated)

The audit work programme, PBC list, finding templates, and rating methodology live in `~/claude/Tech-Audit/Regulatory/PDPA/` — a **separate private repo**. Currently the public SPA doesn't reference these by name (the original CLAUDE.md says "AWP artifacts are private").

Useful next step: add `aw-program-section` references on control cards in the SPA — `AWP §9.4 / PBC item 67` — that **don't link to private content** but signal where the cross-reference lives. A consultant with access to Tech-Audit can navigate; one without access sees a "this is in the private engagement toolkit" placeholder explaining the split.

Pre-requisite: `audit-integration.json` (already exists, v1.1.0) is the right data layer. Just needs to be surfaced in the Controls view.

### 5. Multi-jurisdiction PDPA tracks

PDPA-MY is one of several ASEAN regimes. PDPA-SG (Singapore), PDPA-TH (Thailand), PDPA-PH (Philippines) all share family-resemblance with Malaysia's framework but diverge on specific points (consent thresholds, breach timing, sensitive-PD categories, sectoral coverage).

The cross-reference module today does PDPA-MY vs GDPR. Same machinery could do PDPA-MY vs PDPA-SG or three-way. The route schema (`#learn/crossref:<slug>`) already supports it without app.js changes. Authoring is the bottleneck — a credible PDPA-SG comparator is 15-20 hours of expert work and needs ongoing maintenance as SG amends.

Trigger: a regional engagement that needs this. Don't pre-build.

### 6. Regulatory-update tracking ("What changed since I last looked")

A consultant returning to the corpus monthly needs to know what changed. Today they have to read git log. Build a **"Recently updated"** feed driven from `git log` + file modification timestamps, surfaced on the Overview as a small panel ("3 lessons updated in the last 14 days · 1 guideline deep-dive · 2 cross-ref docs").

Pure read-side feature; no schema change. ~30 LOC. Roadmap promotion when Overview rebuild lands (round 4+).

### 7. Inspection-pack export

T3 checkpoint deliverable is "13-document 24-hour inspection pack" — what the JPDP would ask for in an inspection's first 24 hours. Today this is a list, not a packageable artefact.

A "Generate inspection-pack scaffold" feature that bundles the listed templates (RoPA blank, privacy notice template, DPIA template, breach plan skeleton, training-records template) into a single downloadable folder or zip. Pure static-asset packaging; no backend.

### 8. Accessibility — WCAG AA pass

Currently unmeasured. Known gaps:
- Disclaimer banner contrast (live tester flagged the placeholder text in header search input)
- `<details>` markers and `.fw-chip` focus rings not tested for keyboard navigation
- Tab transitions in the Risk view lack `aria-live` announcements
- "AI Generated" hover badge fails on mobile (no hover state) — content-only fallback exists, but not tested with NVDA/VoiceOver

Becomes load-bearing if the consultancy targets public-sector clients, where WCAG conformance is contractual.

### 9. Performance budget

Today: unmeasured but probably acceptable. Inter + JetBrains Mono fonts add ~200KB (cached on subsequent loads). app.js + style.css ≈ 100KB unminified. No build step, no bundle.

Set a hard budget: **first-paint under 1.5s on 3G, full-load under 3s, JSON data layers cached aggressively**. If the corpus grows or we add the AI assistant (point 10), this needs structure.

### 10. AI assistant over the corpus

The corpus is structured data + long-form markdown. A retrieval-augmented assistant ("ask the PDPA-MY corpus") would let a consultant query partner-level questions without remembering which lesson covers what.

Out of scope this year — privacy implications (queries are sensitive), hosting cost, model-update treadmill. **But** the corpus is being structured (verified citations, per-document metadata, freshness signals from point 3) in a way that makes this *easy* in a year. The right artefact to build first is the retrieval-friendly metadata; the assistant follows.

## Explicitly out of scope (don't waste time re-proposing)

- **Video / audio lesson summaries.** Reading speed > playback speed for reference content. Maintenance cost compounds with every JPDP reissue. (ID agent's argument, re-confirmed.)
- **Gamification / streaks / badges / completion counters.** Wrong incentive — comprehension survives partner review, completion does not. localStorage read-state in the round-4+ roadmap is the careful version of this and is explicitly framed as memory, not gamification.
- **Warm-paper palette swap.** Brand coherence with NACSA / OT-Security / IESP / AI-Governance sibling repos requires Inter + blue. Borrow the *shape* (3-4px accent left-borders, no shadows, mono labels) without the colour swap.
- **Real-time collaboration / multi-user state.** The corpus is a reference, not a workspace. Engagement workspaces live in Tech-Audit (private) or in client tooling. PDPA-MY is read-mostly.
- **Submission / grading workflows on checkpoints.** Checkpoints are self-grade by design — that is the pedagogical contract, not a missing feature.
- **Built-in PDF generation for lessons** (beyond the existing print stylesheet). Lessons are linkable, citable, and version-controlled — that is more durable than a snapshot PDF. The Reference + Penalties views getting print stylesheets is different (those are deliverables); the lessons are not.

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Captures the OT-Security pattern adoption, the design-templates references considered, the May 2026 review-agent findings, and the deferred roadmap. |
| 2.0 | 2026-05-15 | Iteration 2 — sticky in-lesson TOC + collapsible answer-key support shipped. Captures the UX↔ID agent disagreement on Overview vs anchoring, the design-templates pattern dispositions, and lessons learnt on markdown-renderer API design. |
| 2.1 | 2026-05-15 | Restructured roadmap into Round 3 (6 items, next iteration) + Round 4+ (parked). Added Future considerations section covering 10 strategic items on the 1-year horizon (sister-repo sync, BM-first content, curriculum versioning, audit-AWP integration, multi-jurisdiction, regulatory-update tracking, inspection-pack export, accessibility, performance, AI assistant). Added Explicitly-out-of-scope section to capture rejected proposals so they aren't re-litigated. |
