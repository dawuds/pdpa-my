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

## Roadmap — next iteration (round 3)

Updated after iteration 2. Items 1 and 2 (in-lesson TOC, checkpoint collapsibles) are done — removed.

1. **Apply checkpoint collapsibles to T2/06, T3/06, T4/05** (scriptable; mechanical port of the T1 pattern).
2. **localStorage progress tracking** — `state.progress[tierId+lessonId] = true` on lesson-reader page-load. Tier cards show `3/5 complete`. Overview shows current tier. Label "read-state memory" not "progress" (ID agent's framing — avoids the gamification trap).
3. **Foundation-refresher blocks in T2/T3/T4 checkpoints** — pull 2-3 questions from earlier-tier checkpoints. Combats forgetting curve.
4. **Per-lesson "scope of this lesson" boundary block** (ID agent's anchoring primitive #2). Add `outOfScope: string[]` to lessons in `index.json`; render alongside `lesson-objectives`. Currently only 3 of 22 PDPA lessons have scope-boundary prose; the other 19 leak.
5. **Per-lesson `prerequisites` chips** (ID agent's anchoring primitive #3). Add `prerequisites: ["t1:02-seven-principles"]` to each T2/T3/T4 lesson; render as chip row.
6. **Controls view enhancement** (UX agent #3) — step-numbered domain badges + `.hot` class on dpbd/admp + sticky right-sidebar with critical-tier (28 control) list. Module-map-flavoured.
7. **Lesson `.tldr` card** (UX agent #4) — one-sentence-per-lesson backfill, render above objectives block, clay-accent left-border.
8. **Mobile hamburger nav.** Below 768px, collapse the nav strip into a button that toggles a slide-over.
9. **Overview rebuild as briefing dashboard** (UX agent #1, deferred from round 2). Replace "Browse by Part" duplication. Lead with: "What changed 30 April 2026" + 3-card jump-to + breach-clock comparator + audit-work-program pointer + `status-report`-style risk-dotted recently-issued table.
10. **Search index expansion.** Include the Learn corpus, the `dpbd/` + `dpia/` + `automated-decisions/` data layers, and synonym maps ("Privacy by Design" → DPbD).
11. **Wire guideline deep-dives to comparator anchors** (ID agent #4). The `pdpa-vs-gdpr.md` doc has 15 numbered sections; add stable anchors and link from each guideline deep-dive's "GDPR parallel" row to the matching section.
12. **Worked-example artefacts for T2 deliverables** — finished RoPA, privacy notice, DPIA, breach notice, sectoral-CoP determination.
13. **Inline retrieval prompts in lessons** (ID agent round 1 #1, deferred again). Now genuinely unblocked by the raw-HTML passthrough — could land any time. Lower priority than anchoring primitives 4–5.

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-13 | Initial release. Captures the OT-Security pattern adoption, the design-templates references considered, the May 2026 review-agent findings, and the deferred roadmap. |
| 2.0 | 2026-05-15 | Iteration 2 — sticky in-lesson TOC + collapsible answer-key support shipped. Captures the UX↔ID agent disagreement on Overview vs anchoring, the design-templates pattern dispositions, and lessons learnt on markdown-renderer API design. |
