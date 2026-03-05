/* ===== PDPA-MY Explorer — Single-Page Application ===== */

const state = {
  parts: null,
  provisions: null,   // keyed by id
  principles: null,
  requirements: null,
  evidence: null,
  controls: null,      // { domains, library, provisionMap }
  artifacts: null,     // { inventory, provisionMap }
  penalties: null,
  crossRefs: null,
  supplements: null,
  route: { view: 'overview' },
};

const cache = new Map();
async function fetchJSON(path) {
  if (cache.has(path)) return cache.get(path);
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cache.set(path, data);
    return data;
  } catch (e) {
    console.warn(`Failed to load ${path}:`, e);
    return null;
  }
}

/* ===== ROUTING ===== */
function parseRoute() {
  const hash = location.hash.slice(1) || '';
  if (!hash) return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  if (hash.startsWith('part/')) return { view: 'part', id: hash.slice(5) };
  if (hash.startsWith('section/')) return { view: 'section', id: hash.slice(8) };
  if (hash.startsWith('principle/')) return { view: 'principle', id: hash.slice(10) };
  if (hash === 'principles') return { view: 'principles' };
  if (hash === 'penalties') return { view: 'penalties' };
  if (hash === 'controls') return { view: 'controls' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
  if (hash === 'artifacts') return { view: 'artifacts' };
  if (hash === 'supplements') return { view: 'supplements' };
  if (hash.startsWith('supplement/')) return { view: 'supplement-detail', id: hash.slice(11) };
  if (hash === 'cross-references') return { view: 'cross-references' };
  if (hash === 'framework') return { view: 'framework' };
  return { view: 'overview' };
}

/* ===== INIT ===== */
async function init() {
  const [parts, provisionsArr] = await Promise.all([
    fetchJSON('provisions/parts.json'),
    fetchJSON('provisions/index.json'),
  ]);
  state.parts = parts || [];
  state.provisions = {};
  if (provisionsArr) {
    for (const s of provisionsArr) state.provisions[s.id] = s;
  }
  window.addEventListener('hashchange', render);
  document.addEventListener('click', handleClick);
  document.getElementById('search-input').addEventListener('input', debounce(handleSearch, 300));
  render();
}

function debounce(fn, ms) {
  let t;
  return function(...args) { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), ms); };
}

/* ===== RENDER DISPATCHER ===== */
function render() {
  state.route = parseRoute();
  const app = document.getElementById('app');
  updateNav();
  switch (state.route.view) {
    case 'overview': renderOverview(app); break;
    case 'part': renderPart(app, state.route.id); break;
    case 'section': renderSection(app, state.route.id); break;
    case 'principles': renderPrinciples(app); break;
    case 'principle': renderPrinciple(app, state.route.id); break;
    case 'penalties': renderPenalties(app); break;
    case 'controls': renderControls(app); break;
    case 'control-detail': renderControlDetail(app, state.route.slug); break;
    case 'artifacts': renderArtifacts(app); break;
    case 'supplements': renderSupplements(app); break;
    case 'supplement-detail': renderSupplementDetail(app, state.route.id); break;
    case 'cross-references': renderCrossReferences(app); break;
    case 'framework': renderFramework(app); break;
    case 'search': renderSearch(app, state.route.query); break;
    default: renderOverview(app);
  }
  window.scrollTo(0, 0);
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(el => {
    const view = el.dataset.view;
    el.classList.toggle('active', view === state.route.view ||
      (view === 'overview' && state.route.view === 'part') ||
      (view === 'overview' && state.route.view === 'section') ||
      (view === 'principles' && state.route.view === 'principle') ||
      (view === 'controls' && state.route.view === 'control-detail') ||
      (view === 'supplements' && state.route.view === 'supplement-detail') ||
      (view === 'framework' && state.route.view === 'framework')
    );
  });
}

/* ===== OVERVIEW ===== */
function renderOverview(el) {
  const totalSections = Object.keys(state.provisions).length;
  const amended = Object.values(state.provisions).filter(s => s.amendedBy).length;
  el.innerHTML = `
    <div class="disclaimer">
      This database is for educational and indicative purposes only. It does not constitute legal advice. The content represents a structured interpretation of the Personal Data Protection Act 2010 (Act 709) and its amendments. Always consult the official Gazette text and qualified legal counsel for compliance decisions.
    </div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${totalSections}</div><div class="stat-label">Sections</div></div>
      <div class="stat-card"><div class="stat-number">11</div><div class="stat-label">Parts</div></div>
      <div class="stat-card"><div class="stat-number">11</div><div class="stat-label">Principles</div></div>
      <div class="stat-card"><div class="stat-number">${amended}</div><div class="stat-label">Amended (2024)</div></div>
    </div>
    <h2 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem;">Browse by Part</h2>
    <div class="part-grid">
      ${state.parts.map(p => {
        const sections = Object.values(state.provisions).filter(s => s.part === p.id);
        return `<a href="#part/${p.id}" class="part-card" data-part="${p.id}">
          <div class="part-card-id">Part ${p.id}</div>
          <div class="part-card-name">${esc(p.name)}</div>
          <div class="part-card-meta">${sections.length} sections &middot; ${p.sections}</div>
        </a>`;
      }).join('')}
    </div>
  `;
}

/* ===== PART VIEW ===== */
function renderPart(el, partId) {
  const part = state.parts.find(p => p.id === partId);
  if (!part) return renderNotFound(el);
  const sections = Object.values(state.provisions)
    .filter(s => s.part === partId)
    .sort((a, b) => a.sectionNumber - b.sectionNumber);

  // Group by division if applicable
  const divisions = {};
  for (const s of sections) {
    const key = s.division ? `Division ${s.division}` : 'General';
    if (!divisions[key]) divisions[key] = [];
    divisions[key].push(s);
  }

  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span>Part ${partId}</div>
    <div class="page-title">Part ${partId}: ${esc(part.name)}</div>
    <div class="page-subtitle">${esc(part.description)} &middot; ${sections.length} sections</div>
    <div class="accordion">
      ${Object.entries(divisions).map(([div, secs]) => `
        <div class="accordion-item open">
          <div class="accordion-header" data-accordion>
            <span>${esc(div)} (${secs.length} sections)</span>
            <span class="accordion-arrow">&#9654;</span>
          </div>
          <div class="accordion-body">
            ${secs.map(s => `
              <a href="#section/${s.id}" class="section-link">
                <span class="section-link-id">${s.id}</span>
                <span class="section-link-title">${esc(s.title)}</span>
                <span class="section-link-badges">
                  ${badgeFor(s.obligationType)}
                  ${s.amendedBy ? '<span class="badge badge-amended">Amended</span>' : ''}
                </span>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* ===== SECTION DETAIL ===== */
function renderSection(el, sectionId) {
  const s = state.provisions[sectionId];
  if (!s) return renderNotFound(el);
  const part = state.parts.find(p => p.id === s.part);

  el.innerHTML = `
    <div class="breadcrumbs">
      <a href="#">Overview</a><span class="sep">/</span>
      <a href="#part/${s.part}">Part ${s.part}${part ? ': ' + esc(part.name) : ''}</a><span class="sep">/</span>
      ${s.id}
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.25rem;">
      <span style="font-family:var(--mono);font-size:1rem;color:var(--accent);font-weight:600;">${s.id}</span>
      ${badgeFor(s.obligationType)}
      ${s.amendedBy ? `<span class="badge badge-amended">Amended by ${esc(s.amendedBy)}</span>` : ''}
      ${s.relatedPrinciple ? `<a href="#principle/${s.relatedPrinciple}" class="badge badge-domain">${esc(s.relatedPrinciple)} principle</a>` : ''}
    </div>
    <div class="page-title">${esc(s.title)}</div>
    <div class="page-subtitle">Part ${s.part}${s.division ? ', Division ' + s.division : ''} &middot; Effective: ${s.effectiveDate || 'N/A'}</div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="overview">Overview</button>
      <button class="tab-btn" data-tab="requirements">Requirements</button>
      <button class="tab-btn" data-tab="evidence">Evidence</button>
      <button class="tab-btn" data-tab="controls">Controls</button>
      <button class="tab-btn" data-tab="artifacts">Artifacts</button>
    </div>

    <div class="tab-panel active" id="tab-overview">
      <div class="block-label">Verbatim Text</div>
      <div class="verbatim-block">${esc(s.verbatim)}</div>
      <div class="block-label">Plain-Language Translation <span class="badge badge-ai" title="AI-generated interpretation of statutory text — not authoritative legal text">AI Generated</span></div>
      <div class="translation-block">${esc(s.translation)}</div>
      ${s.keywords && s.keywords.length ? `
        <div style="margin-top:1rem;">
          <div class="block-label">Keywords</div>
          <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
            ${s.keywords.map(k => `<span class="badge badge-category">${esc(k)}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
    <div class="tab-panel" id="tab-requirements"><div class="loading"><div class="spinner"></div><span>Loading requirements…</span></div></div>
    <div class="tab-panel" id="tab-evidence"><div class="loading"><div class="spinner"></div><span>Loading evidence…</span></div></div>
    <div class="tab-panel" id="tab-controls"><div class="loading"><div class="spinner"></div><span>Loading controls…</span></div></div>
    <div class="tab-panel" id="tab-artifacts"><div class="loading"><div class="spinner"></div><span>Loading artifacts…</span></div></div>
  `;
}

/* ===== TAB ACTIVATION ===== */
async function activateTab(tabName, sectionId) {
  const panel = document.getElementById(`tab-${tabName}`);
  if (!panel) return;
  if (panel.dataset.loaded) return;

  if (tabName === 'requirements') {
    if (!state.requirements) {
      state.requirements = await fetchJSON('requirements/index.json') || {};
    }
    const req = state.requirements[sectionId];
    if (!req) {
      panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No requirements data for this section.</div></div>';
    } else {
      panel.innerHTML = renderRequirementsPanel(req);
    }
  } else if (tabName === 'evidence') {
    if (!state.evidence) {
      state.evidence = await fetchJSON('evidence/index.json') || {};
    }
    const ev = state.evidence[sectionId];
    if (!ev) {
      panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No evidence data for this section.</div></div>';
    } else {
      panel.innerHTML = renderEvidencePanel(ev);
    }
  } else if (tabName === 'controls') {
    if (!state.controls) {
      const [domains, library, provisionMap] = await Promise.all([
        fetchJSON('controls/domains.json'),
        fetchJSON('controls/library.json'),
        fetchJSON('controls/provision-map.json'),
      ]);
      state.controls = { domains: domains || {}, library: library || {}, provisionMap: provisionMap || { sectionToControls: {}, controlToSections: {} } };
    }
    const slugs = state.controls.provisionMap.sectionToControls?.[sectionId] || [];
    if (!slugs.length) {
      panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No controls mapped to this section.</div></div>';
    } else {
      const controls = [];
      for (const [domain, ctrls] of Object.entries(state.controls.library)) {
        for (const c of ctrls) {
          if (slugs.includes(c.slug)) controls.push(c);
        }
      }
      panel.innerHTML = controls.map(c => renderControlCard(c)).join('');
    }
  } else if (tabName === 'artifacts') {
    if (!state.artifacts) {
      const [inventory, provisionMap] = await Promise.all([
        fetchJSON('artifacts/inventory.json'),
        fetchJSON('artifacts/provision-map.json'),
      ]);
      state.artifacts = { inventory: inventory || {}, provisionMap: provisionMap || { sectionToArtifacts: {}, artifactToSections: {} } };
    }
    const slugs = state.artifacts.provisionMap.sectionToArtifacts?.[sectionId] || [];
    if (!slugs.length) {
      panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No artifacts mapped to this section.</div></div>';
    } else {
      const arts = [];
      for (const [cat, items] of Object.entries(state.artifacts.inventory)) {
        for (const a of items) {
          if (slugs.includes(a.slug)) arts.push(a);
        }
      }
      panel.innerHTML = arts.map(a => renderArtifactCard(a)).join('');
    }
  }
  panel.dataset.loaded = 'true';
}

/* ===== REQUIREMENTS PANEL ===== */
function sourceBadge(sourceType) {
  const map = {
    act: 'badge-source-act',
    standard: 'badge-source-standard',
    guideline: 'badge-source-guideline',
    'general-code': 'badge-source-general-code',
    'sector-code': 'badge-source-sector-code',
  };
  const labels = { act: 'Act', standard: 'Standard', guideline: 'Guideline', 'general-code': 'Gen Code', 'sector-code': 'Sector' };
  const cls = map[sourceType] || 'badge-source-act';
  const label = labels[sourceType] || sourceType || 'Act';
  return `<span class="badge ${cls}">${esc(label)}</span>`;
}

function renderRequirementsPanel(req) {
  const cols = ['legal', 'technical', 'governance'];
  const colLabels = { legal: 'Legal / Compliance', technical: 'Technical / Operational', governance: 'Governance' };

  // Collect all sourceTypes present for filter chips
  const sourceTypes = new Set();
  for (const col of cols) {
    for (const r of (req[col]?.requirements || [])) {
      sourceTypes.add(r.sourceType || 'act');
    }
  }
  const sourceTypeLabels = { act: 'Act', standard: 'Standard', guideline: 'Guideline', 'general-code': 'General Code', 'sector-code': 'Sector Codes' };

  const filterBar = sourceTypes.size > 1 ? `
    <div class="filter-bar" id="req-source-filter">
      <span class="filter-chip active" data-source-filter="all">All</span>
      ${[...sourceTypes].map(st => `<span class="filter-chip" data-source-filter="${esc(st)}">${esc(sourceTypeLabels[st] || st)}</span>`).join('')}
    </div>
  ` : '';

  return `
    ${filterBar}
    <div class="req-columns">
      ${cols.map(col => {
        const data = req[col];
        if (!data) return `<div class="req-column"><div class="req-column-header ${col}">${colLabels[col]}</div><div class="req-column-body"><em style="color:var(--text-muted);font-size:0.8125rem;">No data</em></div></div>`;
        return `
          <div class="req-column">
            <div class="req-column-header ${col}">${colLabels[col]}</div>
            <div class="req-column-body">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(data.summary)} <span class="badge badge-ai" title="AI-generated interpretive summary">AI Generated</span></p>
              ${(data.requirements || []).map(r => `
                <div class="req-item" data-source-type="${esc(r.sourceType || 'act')}">
                  <div style="display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap;">
                    <span class="req-item-id">${esc(r.id)}</span>
                    ${sourceBadge(r.sourceType)}
                    ${r.sector ? `<span class="badge badge-sector">${esc(r.sector)}</span>` : ''}
                    ${r.tightens ? `<span class="badge badge-tightens">tightens ${esc(r.tightens)}</span>` : ''}
                  </div>
                  <div class="req-item-text">${esc(r.requirement)}</div>
                  <div class="req-item-meta">
                    <span class="req-item-priority priority-${(r.priority || '').toLowerCase()}">${esc(r.priority || '')}</span>
                    <span>${esc(r.owner || '')}</span>
                    <span>${esc(r.frequency || '')}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ===== EVIDENCE PANEL ===== */
function renderEvidencePanel(ev) {
  return `
    ${ev.auditorFocus ? `
      <div class="auditor-focus">
        <div class="block-label">JPDP Inspector Focus <span class="badge badge-ai" title="AI-generated interpretation — verify against official JPDP guidance">AI Generated</span></div>
        ${esc(ev.auditorFocus)}
      </div>
    ` : ''}
    ${(ev.evidenceItems || []).map(item => `
      <div class="card evidence-card">
        <div class="card-title">${esc(item.name)}</div>
        <div class="card-meta">
          <span>${esc(item.format || '')}</span>
          <span>Retain: ${esc(item.retentionPeriod || 'N/A')}</span>
        </div>
        <div class="card-body">${esc(item.description || '')}</div>
        ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
          <div class="block-label" style="margin-top:0.75rem;">What Good Looks Like <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive or prescriptive">Example</span></div>
          <ul class="good-list">${item.whatGoodLooksLike.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>
        ` : ''}
        ${item.commonGaps && item.commonGaps.length ? `
          <div class="block-label" style="margin-top:0.5rem;">Common Gaps <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive">Example</span></div>
          <ul class="gap-list">${item.commonGaps.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>
        ` : ''}
        ${item.suggestedSources && item.suggestedSources.length ? `
          <div class="block-label" style="margin-top:0.5rem;">Suggested Sources</div>
          <div style="font-size:0.8125rem;color:var(--text-secondary);">${item.suggestedSources.map(s => esc(s)).join(' &middot; ')}</div>
        ` : ''}
      </div>
    `).join('')}
    ${ev.auditTips && ev.auditTips.length ? `
      <div class="card">
        <div class="card-title">Audit Preparation Tips <span class="badge badge-ai" title="AI-generated guidance — verify against official JPDP inspection criteria">AI Generated</span></div>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${ev.auditTips.map(t => `<li style="margin-bottom:0.25rem;">${esc(t)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;
}

/* ===== CONTROL CARD ===== */
function renderControlCard(c) {
  return `
    <div class="control-card">
      <div class="control-card-header">
        <div>
          <div class="control-card-name"><a href="#control/${c.slug}" style="color:inherit;text-decoration:none;">${esc(c.name)}</a></div>
        </div>
        <div style="display:flex;gap:0.375rem;">
          <span class="badge badge-type">${esc(c.type || '')}</span>
          <span class="badge badge-layer">${esc(c.layer || '')}</span>
        </div>
      </div>
      <div class="control-card-desc">${esc(c.description)}</div>
      ${c.keyActivities && c.keyActivities.length ? `
        <ul class="control-activities">${c.keyActivities.map(a => `<li>${esc(a)}</li>`).join('')}</ul>
      ` : ''}
      ${c.maturity ? `
        <div class="maturity-grid">
          <div class="maturity-level basic"><div class="maturity-label">Basic</div>${esc(c.maturity.basic || '')}</div>
          <div class="maturity-level mature"><div class="maturity-label">Mature</div>${esc(c.maturity.mature || '')}</div>
          <div class="maturity-level advanced"><div class="maturity-label">Advanced</div>${esc(c.maturity.advanced || '')}</div>
        </div>
      ` : ''}
      <div class="control-frameworks">
        ${(c.iso27701 || []).map(r => `<span class="badge badge-domain">ISO ${esc(r)}</span>`).join('')}
        ${(c.gdpr || []).map(r => `<span class="badge badge-type">GDPR ${esc(r)}</span>`).join('')}
        ${(c.apecCBPR || []).map(r => `<span class="badge badge-layer">CBPR: ${esc(r)}</span>`).join('')}
      </div>
    </div>
  `;
}

/* ===== ARTIFACT CARD ===== */
function renderArtifactCard(a) {
  return `
    <div class="artifact-card">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
        <span class="artifact-card-name">${esc(a.name)}</span>
        ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : ''}
        <span class="badge badge-category">${esc(a.category)}</span>
      </div>
      <div class="artifact-card-desc">${esc(a.description)}</div>
      <div class="card-meta">
        <span>Owner: ${esc(a.owner || 'N/A')}</span>
        <span>Review: ${esc(a.reviewFrequency || 'N/A')}</span>
        <span>Format: ${esc(a.format || 'N/A')}</span>
      </div>
      ${a.keyContents && a.keyContents.length ? `
        <ul class="artifact-contents">${a.keyContents.map(k => `<li>${esc(k)}</li>`).join('')}</ul>
      ` : ''}
    </div>
  `;
}

/* ===== PRINCIPLES LIST ===== */
async function renderPrinciples(el) {
  if (!state.principles) {
    state.principles = await fetchJSON('principles/index.json') || [];
  }
  el.innerHTML = `
    <div class="page-title">The 7 PDPA Principles</div>
    <div class="page-subtitle">Part II, Division 1 — Personal Data Protection Principles (Sections 5-12)</div>
    <div class="part-grid" style="grid-template-columns:repeat(2,1fr);">
      ${state.principles.map(p => `
        <a href="#principle/${p.id}" class="part-card" data-part="II">
          <div class="part-card-id">Section ${p.section}</div>
          <div class="part-card-name">${esc(p.name)}</div>
          <div class="part-card-meta">${(p.obligations || []).length} obligations &middot; ${(p.exceptions || []).length} exceptions</div>
        </a>
      `).join('')}
    </div>
  `;
}

/* ===== PRINCIPLE DETAIL ===== */
async function renderPrinciple(el, id) {
  if (!state.principles) {
    state.principles = await fetchJSON('principles/index.json') || [];
  }
  const p = state.principles.find(pr => pr.id === id);
  if (!p) return renderNotFound(el);

  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span><a href="#principles">Principles</a><span class="sep">/</span>${esc(p.name)}</div>
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.25rem;">
      <span style="font-family:var(--mono);font-size:1rem;color:var(--accent);font-weight:600;">Section ${p.section}</span>
    </div>
    <div class="page-title">${esc(p.name)}</div>
    <div class="page-subtitle">${esc(p.summary)}</div>

    <div class="card">
      <div class="card-title">Obligations</div>
      ${(p.obligations || []).map(o => `
        <div class="req-item">
          <div class="req-item-id">${esc(o.id)}</div>
          <div class="req-item-text">${esc(o.obligation)}</div>
          <div class="req-item-meta">
            <span>Basis: ${esc(o.basis)}</span>
            <span class="badge badge-mandatory">${esc(o.type)}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="card">
      <div class="card-title">Exceptions</div>
      ${(p.exceptions || []).map(x => `
        <div class="req-item">
          <div class="req-item-id">${esc(x.id)}</div>
          <div class="req-item-text">${esc(x.exception)}</div>
          <div class="req-item-meta">
            <span>Basis: ${esc(x.basis)}</span>
            ${x.conditions ? `<span>${esc(x.conditions)}</span>` : ''}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="card">
      <div class="card-title">Practical Guidance <span class="badge badge-ai" title="AI-generated implementation guidance — not official JPDP guidance">AI Generated</span></div>
      <div class="card-body">${esc(p.practicalGuidance || '')}</div>
    </div>

    ${p.commonViolations && p.commonViolations.length ? `
      <div class="card">
        <div class="card-title">Common Violations <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive">Example</span></div>
        <ul style="padding-left:1.25rem;">
          ${p.commonViolations.map(v => `<li style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.25rem;">${esc(v)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div style="display:flex;gap:0.375rem;flex-wrap:wrap;margin-top:1rem;">
      ${(p.relatedGuidelines || []).map(g => `<span class="badge badge-domain">Guideline: ${esc(g)}</span>`).join('')}
      ${(p.relatedStandards || []).map(s => `<span class="badge badge-type">Standard: ${esc(s)}</span>`).join('')}
      ${(p.relatedCodeSections || []).map(c => `<span class="badge badge-layer">COP: ${esc(c)}</span>`).join('')}
    </div>
  `;
}

/* ===== PENALTIES ===== */
async function renderPenalties(el) {
  if (!state.penalties) {
    state.penalties = await fetchJSON('penalties/index.json') || [];
  }
  const categories = {};
  for (const p of state.penalties) {
    const cat = p.category || 'general';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(p);
  }

  el.innerHTML = `
    <div class="page-title">Penalties & Enforcement</div>
    <div class="page-subtitle">Offences under Act 709 (with 2024 Amendment enhancements)</div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${state.penalties.length}</div><div class="stat-label">Offences</div></div>
      <div class="stat-card"><div class="stat-number">${state.penalties.filter(p => p.amendedPenalty).length}</div><div class="stat-label">Enhanced (2024)</div></div>
      <div class="stat-card"><div class="stat-number">RM1M</div><div class="stat-label">Max Fine</div></div>
      <div class="stat-card"><div class="stat-number">3 yrs</div><div class="stat-label">Max Imprisonment</div></div>
    </div>
    <div class="filter-bar">
      <span class="filter-chip active" data-filter="all">All</span>
      ${Object.keys(categories).map(cat => `<span class="filter-chip" data-filter="${esc(cat)}">${esc(cat)}</span>`).join('')}
    </div>
    <div id="penalty-list">
      ${state.penalties.map(p => renderPenaltyCard(p)).join('')}
    </div>
  `;
}

function renderPenaltyCard(p) {
  const hasAmended = !!p.amendedPenalty;
  return `
    <div class="penalty-card ${hasAmended ? 'enhanced' : ''}" data-category="${esc(p.category || 'general')}">
      <div class="penalty-section">${esc(p.section)}</div>
      <div class="penalty-offence">${esc(p.offence)}</div>
      <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(p.description)}</div>
      <div class="penalty-amounts">
        ${p.originalPenalty ? `
          <div class="${hasAmended ? 'penalty-original' : 'penalty-amended'}">
            ${hasAmended ? 'Original: ' : ''}Fine ${esc(p.originalPenalty.fine || 'N/A')}
            ${p.originalPenalty.imprisonment ? ' / ' + esc(p.originalPenalty.imprisonment) + ' imprisonment' : ''}
            ${p.originalPenalty.or_both ? ' (or both)' : ''}
          </div>
        ` : ''}
        ${hasAmended ? `
          <div class="penalty-amended">
            Amended: Fine ${esc(p.amendedPenalty.fine || 'N/A')}
            ${p.amendedPenalty.imprisonment ? ' / ' + esc(p.amendedPenalty.imprisonment) + ' imprisonment' : ''}
            ${p.amendedPenalty.or_both ? ' (or both)' : ''}
          </div>
        ` : ''}
      </div>
      ${p.compoundable ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem;">Compoundable: ${esc(p.compoundAmount || 'Yes')}</div>` : ''}
    </div>
  `;
}

/* ===== CONTROLS BROWSER ===== */
async function renderControls(el) {
  if (!state.controls) {
    const [domains, library, provisionMap] = await Promise.all([
      fetchJSON('controls/domains.json'),
      fetchJSON('controls/library.json'),
      fetchJSON('controls/provision-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: library || {}, provisionMap: provisionMap || {} };
  }
  const totalControls = Object.values(state.controls.library).reduce((sum, arr) => sum + arr.length, 0);
  const domainEntries = Object.entries(state.controls.domains);

  el.innerHTML = `
    <div class="page-title">Controls Library</div>
    <div class="page-subtitle">${totalControls} controls across ${domainEntries.length} domains</div>
    <div class="accordion">
      ${domainEntries.map(([key, domain]) => {
        const controls = state.controls.library[key] || [];
        return `
          <div class="accordion-item">
            <div class="accordion-header" data-accordion>
              <span>${esc(domain.name)} (${controls.length})</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(domain.description)}</p>
              ${controls.map(c => `
                <a href="#control/${c.slug}" class="section-link">
                  <span class="section-link-title">${esc(c.name)}</span>
                  <span class="section-link-badges">
                    <span class="badge badge-type">${esc(c.type)}</span>
                    <span class="badge badge-layer">${esc(c.layer || '')}</span>
                  </span>
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ===== CONTROL DETAIL ===== */
async function renderControlDetail(el, slug) {
  if (!state.controls) {
    const [domains, library, provisionMap] = await Promise.all([
      fetchJSON('controls/domains.json'),
      fetchJSON('controls/library.json'),
      fetchJSON('controls/provision-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: library || {}, provisionMap: provisionMap || {} };
  }
  if (!state.artifacts) {
    const [inventory, provisionMap] = await Promise.all([
      fetchJSON('artifacts/inventory.json'),
      fetchJSON('artifacts/provision-map.json'),
    ]);
    state.artifacts = { inventory: inventory || {}, provisionMap: provisionMap || {} };
  }
  if (!state.evidence) {
    state.evidence = await fetchJSON('evidence/index.json') || {};
  }

  let control = null;
  for (const [, ctrls] of Object.entries(state.controls.library)) {
    control = ctrls.find(c => c.slug === slug);
    if (control) break;
  }
  if (!control) return renderNotFound(el);

  const domain = state.controls.domains[control.domain] || {};

  // Build supplement links sections
  const hasStandards = control.relatedStandards && control.relatedStandards.length;
  const hasGuidelines = control.relatedGuidelines && control.relatedGuidelines.length;
  const hasCodes = control.relatedCodes && control.relatedCodes.length;
  const hasSectorVariants = control.sectorVariants && Object.keys(control.sectorVariants).length;

  // --- Audit Package: resolve linked artifacts and evidence ---
  const sections = control.sections || [];
  const sectionToArtifacts = (state.artifacts.provisionMap && state.artifacts.provisionMap.sectionToArtifacts) || {};
  const artifactSlugsSet = new Set();
  sections.forEach(s => {
    const slugs = sectionToArtifacts[s] || [];
    slugs.forEach(sl => artifactSlugsSet.add(sl));
  });
  // Look up full artifact objects from inventory (search all categories)
  const artifactIndex = {};
  Object.values(state.artifacts.inventory).forEach(arr => {
    if (Array.isArray(arr)) arr.forEach(a => { artifactIndex[a.slug] = a; });
  });
  const linkedArtifacts = [];
  artifactSlugsSet.forEach(sl => { if (artifactIndex[sl]) linkedArtifacts.push(artifactIndex[sl]); });
  linkedArtifacts.sort((a, b) => (b.mandatory ? 1 : 0) - (a.mandatory ? 1 : 0));

  // Collect evidence items from linked sections
  const linkedEvidence = [];
  sections.forEach(s => {
    const ev = state.evidence[s];
    if (ev && ev.evidenceItems) {
      ev.evidenceItems.forEach(item => {
        if (!linkedEvidence.find(e => e.id === item.id)) linkedEvidence.push(item);
      });
    }
  });

  const auditPackageHTML = (linkedArtifacts.length || linkedEvidence.length) ? `
    <div class="audit-package">
      <div class="audit-package-title">AUDIT PACKAGE</div>
      <div class="audit-package-summary">${linkedArtifacts.length} artifact${linkedArtifacts.length !== 1 ? 's' : ''} required, ${linkedEvidence.length} evidence item${linkedEvidence.length !== 1 ? 's' : ''}</div>

      ${linkedArtifacts.length ? `
        <div class="accordion">
          <div class="accordion-item open">
            <div class="accordion-header" data-accordion>
              <span>Required Artifacts (${linkedArtifacts.length})</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
              ${linkedArtifacts.map(a => `
                <div class="artifact-link-card">
                  <div class="artifact-link-card-header">
                    <span class="artifact-link-card-name">${esc(a.name)}</span>
                    ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : ''}
                    <span class="badge badge-category">${esc(a.category)}</span>
                  </div>
                  <div class="artifact-link-card-meta">
                    <span>Owner: ${esc(a.owner || 'N/A')}</span>
                    <span>Review: ${esc(a.reviewFrequency || 'N/A')}</span>
                  </div>
                  ${a.keyContents && a.keyContents.length ? `
                    <ul class="artifact-link-card-checklist">
                      ${a.keyContents.map(k => `<li>${esc(k)}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      ${linkedEvidence.length ? `
        <div class="accordion">
          <div class="accordion-item open">
            <div class="accordion-header" data-accordion>
              <span>Evidence Checklist (${linkedEvidence.length})</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
              ${linkedEvidence.map(item => `
                <div class="evidence-checklist-item">
                  <div class="evidence-checklist-item-header">
                    <span class="evidence-checklist-item-name">${esc(item.name)}</span>
                    <span class="badge badge-category">${esc(item.format || '')}</span>
                    ${item.retentionPeriod ? `<span class="badge badge-layer">${esc(item.retentionPeriod)}</span>` : ''}
                  </div>
                  <div class="evidence-checklist-item-desc">${esc(item.description)}</div>
                  ${item.suggestedSources && item.suggestedSources.length ? `
                    <div class="evidence-checklist-item-sources">
                      <strong>Suggested Sources:</strong> ${item.suggestedSources.map(s => esc(s)).join('; ')}
                    </div>
                  ` : ''}
                  ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
                    <div class="accordion">
                      <div class="accordion-item">
                        <div class="accordion-header" data-accordion>
                          <span>What Good Looks Like (${item.whatGoodLooksLike.length})</span>
                          <span class="accordion-arrow">&#9654;</span>
                        </div>
                        <div class="accordion-body">
                          <ul class="evidence-good">${item.whatGoodLooksLike.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>
                        </div>
                      </div>
                    </div>
                  ` : ''}
                  ${item.commonGaps && item.commonGaps.length ? `
                    <div class="accordion">
                      <div class="accordion-item">
                        <div class="accordion-header" data-accordion>
                          <span>Common Gaps (${item.commonGaps.length})</span>
                          <span class="accordion-arrow">&#9654;</span>
                        </div>
                        <div class="accordion-body">
                          <ul class="evidence-gap">${item.commonGaps.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>
                        </div>
                      </div>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  ` : '';

  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span><a href="#controls">Controls</a><span class="sep">/</span>${esc(control.name)}</div>
    <div style="display:flex;gap:0.375rem;margin-bottom:0.25rem;">
      <span class="badge badge-domain">${esc(domain.name || control.domain)}</span>
      <span class="badge badge-type">${esc(control.type)}</span>
      <span class="badge badge-layer">${esc(control.layer || '')}</span>
    </div>
    <div class="page-title">${esc(control.name)}</div>
    <div class="page-subtitle">${esc(control.description)}</div>
    ${renderControlCard(control)}
    ${control.sections && control.sections.length ? `
      <div class="card">
        <div class="card-title">Mapped Sections</div>
        <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
          ${control.sections.map(s => `<a href="#section/${s}" class="badge badge-domain">${esc(s)}</a>`).join('')}
        </div>
      </div>
    ` : ''}
    ${hasStandards ? `
      <div class="card">
        <div class="card-title">Related Standards</div>
        <div class="supplement-links">
          ${control.relatedStandards.map(s => `<a href="#supplement/${s}" class="supplement-link-badge supplement-link-standard">${esc(s)}</a>`).join('')}
        </div>
      </div>
    ` : ''}
    ${hasGuidelines ? `
      <div class="card">
        <div class="card-title">Related Guidelines</div>
        <div class="supplement-links">
          ${control.relatedGuidelines.map(g => `<a href="#supplement/${g}" class="supplement-link-badge supplement-link-guideline">${esc(g)}</a>`).join('')}
        </div>
      </div>
    ` : ''}
    ${hasCodes ? `
      <div class="card">
        <div class="card-title">Related Codes of Practice</div>
        <div class="supplement-links">
          ${control.relatedCodes.map(c => `<a href="#supplement/${c}" class="supplement-link-badge supplement-link-code">${esc(c)}</a>`).join('')}
        </div>
      </div>
    ` : ''}
    ${hasSectorVariants ? `
      <div class="card">
        <div class="card-title">Sector-Specific Variants</div>
        ${Object.entries(control.sectorVariants).map(([sector, variant]) => `
          <div class="sector-variant-card">
            <div class="sector-variant-name">${esc(sector)}</div>
            <div class="sector-variant-reqs">${esc(variant.additionalRequirements || '')}</div>
            ${variant.relatedProvision ? `<div class="sector-variant-provision">${esc(variant.relatedProvision)}</div>` : ''}
          </div>
        `).join('')}
      </div>
    ` : ''}
    ${auditPackageHTML}
  `;
}

/* ===== ARTIFACTS BROWSER ===== */
async function renderArtifacts(el) {
  if (!state.artifacts) {
    const [inventory, provisionMap] = await Promise.all([
      fetchJSON('artifacts/inventory.json'),
      fetchJSON('artifacts/provision-map.json'),
    ]);
    state.artifacts = { inventory: inventory || {}, provisionMap: provisionMap || {} };
  }
  const cats = Object.entries(state.artifacts.inventory);
  const total = cats.reduce((sum, [, arr]) => sum + arr.length, 0);

  el.innerHTML = `
    <div class="page-title">Compliance Artifacts</div>
    <div class="page-subtitle">${total} artifacts across ${cats.length} categories</div>
    <div class="filter-bar">
      <span class="filter-chip active" data-filter="all">All (${total})</span>
      ${cats.map(([cat, arr]) => `<span class="filter-chip" data-filter="${esc(cat)}">${esc(cat)} (${arr.length})</span>`).join('')}
    </div>
    <div id="artifact-list">
      ${cats.map(([cat, items]) => items.map(a => `
        <div class="artifact-item" data-category="${esc(cat)}">
          ${renderArtifactCard(a)}
        </div>
      `).join('')).join('')}
    </div>
  `;
}

/* ===== SUPPLEMENTS ===== */
async function renderSupplements(el) {
  if (!state.supplements) {
    const [regs, guidelines, standards, codes] = await Promise.all([
      fetchJSON('supplements/regulations/index.json'),
      fetchJSON('supplements/guidelines/index.json'),
      fetchJSON('supplements/standards/index.json'),
      fetchJSON('supplements/codes-of-practice/index.json'),
    ]);
    state.supplements = {
      regulations: (regs && regs.regulations) || (Array.isArray(regs) ? regs : []),
      guidelines: (guidelines && guidelines.guidelines) || (Array.isArray(guidelines) ? guidelines : []),
      standards: (standards && standards.standards) || (Array.isArray(standards) ? standards : []),
      codesOfPractice: (codes && codes.codes) || (codes && codes.codesOfPractice) || (Array.isArray(codes) ? codes : []),
    };
  }

  const groups = [
    { key: 'regulations', label: 'Regulations & Orders', color: '#1D4ED8' },
    { key: 'guidelines', label: 'Guidelines', color: '#16A34A' },
    { key: 'standards', label: 'Standards', color: '#D97706' },
    { key: 'codesOfPractice', label: 'Codes of Practice', color: '#7C3AED' },
  ];

  el.innerHTML = `
    <div class="page-title">Subsidiary Instruments</div>
    <div class="page-subtitle">Regulations, guidelines, standards, and codes of practice under Act 709</div>
    ${groups.map(g => {
      const items = state.supplements[g.key] || [];
      if (!items.length) return '';
      return `
        <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;color:${g.color};">${g.label}</h3>
        <div class="part-grid" style="grid-template-columns:repeat(2,1fr);">
          ${items.map(item => `
            <div class="supplement-card" onclick="location.hash='#supplement/${item.id}'">
              <div class="supplement-type" style="color:${g.color};">${esc(item.type || g.key)}</div>
              <div class="supplement-title">${esc(item.title)}</div>
              <div class="supplement-meta">
                ${item.effectiveDate ? 'Effective: ' + esc(item.effectiveDate) : ''}
                ${item.enablingSection ? ' &middot; Enabling: ' + esc(item.enablingSection) : ''}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('')}
  `;
}

/* ===== SUPPLEMENT DETAIL ===== */
async function renderSupplementDetail(el, id) {
  // First check if supplements are loaded and find a filePath
  if (state.supplements) {
    const allItems = [
      ...state.supplements.regulations,
      ...state.supplements.guidelines,
      ...state.supplements.standards,
      ...state.supplements.codesOfPractice,
    ];
    const item = allItems.find(i => i.id === id);
    if (item && item.filePath) {
      const data = await fetchJSON(item.filePath);
      if (data) return renderSupplementContent(el, data, id);
    }
  }
  // Fallback: try to load from each supplement category by ID
  const paths = [
    `supplements/regulations/${id}.json`,
    `supplements/guidelines/${id}.json`,
    `supplements/standards/${id}.json`,
    `supplements/codes-of-practice/${id}.json`,
  ];
  let data = null;
  for (const path of paths) {
    data = await fetchJSON(path);
    if (data) break;
  }
  if (!data) return renderNotFound(el);
  renderSupplementContent(el, data, id);
}

function renderSupplementContent(el, data, id) {
  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span><a href="#supplements">Supplements</a><span class="sep">/</span>${esc(data.title || id)}</div>
    <div style="display:flex;gap:0.375rem;margin-bottom:0.25rem;">
      <span class="badge badge-domain">${esc(data.type || 'supplement')}</span>
      ${data.enablingSection ? `<span class="badge badge-category">Enabling: ${esc(data.enablingSection)}</span>` : ''}
    </div>
    <div class="page-title">${esc(data.title || id)}</div>
    <div class="page-subtitle">
      ${data.issuedBy ? 'Issued by: ' + esc(data.issuedBy) + ' &middot; ' : ''}
      ${data.effectiveDate ? 'Effective: ' + esc(data.effectiveDate) : ''}
    </div>

    ${data.summary ? `<div class="translation-block">${esc(data.summary)}</div>` : ''}

    ${data.provisions && data.provisions.length ? `
      <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Provisions</h3>
      <div class="accordion">
        ${data.provisions.map(p => `
          <div class="accordion-item">
            <div class="accordion-header" data-accordion>
              <span><span style="font-family:var(--mono);color:var(--accent);margin-right:0.5rem;">${esc(p.id)}</span>${esc(p.title)}</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">${esc(p.content || '')}</p>
              ${p.requirements && p.requirements.length ? `
                <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
                  ${p.requirements.map(r => `<li style="margin-bottom:0.25rem;">${esc(typeof r === 'string' ? r : r.requirement || JSON.stringify(r))}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${data.timelines ? `
      <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Key Timelines</h3>
      <div class="data-table-wrap" style="overflow-x:auto;">
        <table class="data-table">
          <thead><tr><th>Action</th><th>Deadline</th></tr></thead>
          <tbody>
            ${Object.entries(data.timelines).map(([k, v]) => `<tr><td>${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    ` : ''}
  `;
}

/* ===== CROSS-REFERENCES ===== */
async function renderCrossReferences(el) {
  if (!state.crossRefs) {
    const [actToRegs, actToGuidelines, actToCodes, actToStandards, frameworkMappings, dataUserClasses] = await Promise.all([
      fetchJSON('cross-references/act-to-regulations.json'),
      fetchJSON('cross-references/act-to-guidelines.json'),
      fetchJSON('cross-references/act-to-codes.json'),
      fetchJSON('cross-references/act-to-standards.json'),
      fetchJSON('cross-references/framework-mappings.json'),
      fetchJSON('cross-references/data-user-classes.json'),
    ]);
    state.crossRefs = { actToRegs, actToGuidelines, actToCodes, actToStandards, frameworkMappings, dataUserClasses };
  }

  el.innerHTML = `
    <div class="page-title">Cross-References</div>
    <div class="page-subtitle">Mappings between Act sections and subsidiary instruments, plus international framework comparisons</div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="xref-regulations">Regulations</button>
      <button class="tab-btn" data-tab="xref-guidelines">Guidelines</button>
      <button class="tab-btn" data-tab="xref-codes">Codes of Practice</button>
      <button class="tab-btn" data-tab="xref-standards">Standards</button>
      <button class="tab-btn" data-tab="xref-frameworks">International Frameworks</button>
      <button class="tab-btn" data-tab="xref-classes">Data User Classes</button>
    </div>

    <div class="tab-panel active" id="tab-xref-regulations">
      ${renderXrefMappings(state.crossRefs.actToRegs)}
    </div>
    <div class="tab-panel" id="tab-xref-guidelines">
      ${renderXrefMappings(state.crossRefs.actToGuidelines)}
    </div>
    <div class="tab-panel" id="tab-xref-codes">
      ${renderXrefMappings(state.crossRefs.actToCodes)}
    </div>
    <div class="tab-panel" id="tab-xref-standards">
      ${renderXrefMappings(state.crossRefs.actToStandards)}
    </div>
    <div class="tab-panel" id="tab-xref-frameworks">
      ${renderFrameworkMappings(state.crossRefs.frameworkMappings)}
    </div>
    <div class="tab-panel" id="tab-xref-classes">
      ${renderDataUserClasses(state.crossRefs.dataUserClasses)}
    </div>
  `;
}

function renderXrefMappings(data) {
  if (!data || !data.mappings || !data.mappings.length) return '<div class="empty-state"><div class="empty-state-text">No mappings available.</div></div>';
  return `
    <div>
      ${data.mappings.map(m => `
        <div class="xref-row">
          <span class="xref-section" onclick="location.hash='#section/${m.section}'">${esc(m.section)}</span>
          <div class="xref-targets">
            <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(m.sectionTitle || '')}</div>
            ${(m.regulations || m.guidelines || m.codes || m.standards || []).map(r => `
              <span class="xref-tag" onclick="location.hash='#supplement/${r.id}'">${esc(r.title || r.id)}</span>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderFrameworkMappings(data) {
  if (!data) return '<div class="empty-state"><div class="empty-state-text">No framework mappings available.</div></div>';
  const frameworks = ['gdpr', 'apecCBPR', 'iso27701'];
  const labels = { gdpr: 'GDPR', apecCBPR: 'APEC CBPR', iso27701: 'ISO 27701' };

  return frameworks.map(fw => {
    const fwData = data[fw];
    if (!fwData) return '';
    const items = fwData.mappings || (Array.isArray(fwData) ? fwData : []);
    if (!items.length) return '';
    const fwName = fwData.frameworkName || labels[fw];
    return `
      <h3 style="font-size:1rem;font-weight:600;margin:1rem 0 0.75rem;">${esc(fwName)}</h3>
      <div class="framework-grid">
        ${items.map(item => `
          <div class="framework-card">
            <div class="framework-card-pdpa">${esc(item.pdpaSection || '')} — ${esc(item.pdpaName || '')}</div>
            <div class="framework-card-foreign">${esc(item.foreignRef || item.gdprArticle || item.apecPrinciple || item.isoClause || '')}: ${esc(item.foreignName || '')}</div>
            <span class="similarity-badge similarity-${(item.similarity || 'medium').toLowerCase()}">${esc(item.similarity || 'medium')}</span>
            <div class="framework-card-notes">${esc(item.notes || '')}</div>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
}

function renderDataUserClasses(data) {
  if (!data || !data.classes) return '<div class="empty-state"><div class="empty-state-text">No data user classes available.</div></div>';
  return `
    <div class="data-table-wrap" style="overflow-x:auto;">
      <table class="data-table">
        <thead><tr><th>#</th><th>Class</th><th>Order Reference</th><th>Applicable Code</th><th>Description</th></tr></thead>
        <tbody>
          ${data.classes.map((c, i) => `
            <tr>
              <td>${i + 1}</td>
              <td><strong>${esc(c.name)}</strong></td>
              <td style="font-family:var(--mono);font-size:0.75rem;">${esc(c.orderReference || '')}</td>
              <td>${c.applicableCode ? `<span class="xref-tag" onclick="location.hash='#supplement/${c.applicableCode}'">${esc(c.applicableCode)}</span>` : 'General COP'}</td>
              <td style="font-size:0.8125rem;color:var(--text-secondary);">${esc(c.description || '')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ===== FRAMEWORK EXPLORER ===== */
async function renderFramework(el) {
  // Ensure requirements data is loaded for counts
  if (!state.requirements) {
    state.requirements = await fetchJSON('requirements/index.json') || {};
  }
  if (!state.controls) {
    const [domains, library, provisionMap] = await Promise.all([
      fetchJSON('controls/domains.json'),
      fetchJSON('controls/library.json'),
      fetchJSON('controls/provision-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: library || {}, provisionMap: provisionMap || {} };
  }

  // Count requirements by sourceType
  let totalReqs = 0, actReqs = 0, stdReqs = 0, glReqs = 0, gcReqs = 0, scReqs = 0;
  for (const sec of Object.values(state.requirements)) {
    for (const perspective of ['legal', 'technical', 'governance']) {
      const reqs = sec[perspective]?.requirements || [];
      for (const r of reqs) {
        totalReqs++;
        switch (r.sourceType) {
          case 'standard': stdReqs++; break;
          case 'guideline': glReqs++; break;
          case 'general-code': gcReqs++; break;
          case 'sector-code': scReqs++; break;
          default: actReqs++;
        }
      }
    }
  }

  const totalControls = Object.values(state.controls.library).reduce((sum, arr) => sum + arr.length, 0);

  el.innerHTML = `
    <div class="page-title">Compliance Framework Architecture</div>
    <div class="page-subtitle">How the PDPA ecosystem connects: from sources through requirements to controls, evidence, and artifacts</div>

    <!-- Section 1: Compliance Chain Flow -->
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Compliance Chain</h3>
    <div class="framework-flow">
      <div class="framework-step" onclick="location.hash='#framework'">
        <div class="framework-step-label">Sources</div>
        <div class="framework-step-count">Act + 22 supplements</div>
      </div>
      <div class="framework-step" onclick="location.hash='#framework'">
        <div class="framework-step-label">Requirements</div>
        <div class="framework-step-count">${totalReqs} obligations</div>
      </div>
      <div class="framework-step" onclick="location.hash='#controls'">
        <div class="framework-step-label">Controls</div>
        <div class="framework-step-count">${totalControls} controls</div>
      </div>
      <div class="framework-step" onclick="location.hash='#framework'">
        <div class="framework-step-label">Evidence</div>
        <div class="framework-step-count">40 evidence items</div>
      </div>
      <div class="framework-step" onclick="location.hash='#artifacts'">
        <div class="framework-step-label">Artifacts</div>
        <div class="framework-step-count">60 documents</div>
      </div>
    </div>

    <!-- Section 2: Source Hierarchy -->
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Source Hierarchy</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">
      Each tier adds increasingly specific requirements. Sector codes don't replace higher tiers — they tighten or extend the base obligations for specific industries.
    </p>
    <div class="source-hierarchy">
      <div class="source-tier" data-tier="1">
        <div class="source-tier-num">Tier 1</div>
        <div class="source-tier-name">Act 709</div>
        <div class="source-tier-desc">Primary legislation — 151 sections establishing core data protection obligations</div>
        <div class="source-tier-badge"><span class="badge badge-source-act">${actReqs} reqs</span></div>
      </div>
      <div class="source-tier" data-tier="2">
        <div class="source-tier-num">Tier 2</div>
        <div class="source-tier-name">Standards 2015</div>
        <div class="source-tier-desc">Mandatory technical minimums implementing s9 (Security), s10 (Retention), s11 (Integrity)</div>
        <div class="source-tier-badge"><span class="badge badge-source-standard">${stdReqs} reqs</span></div>
      </div>
      <div class="source-tier" data-tier="3">
        <div class="source-tier-num">Tier 3</div>
        <div class="source-tier-name">Guidelines</div>
        <div class="source-tier-desc">Procedural guidance for s7 (Notices), s129A (Cross-Border), s129B (DPO), s143A (Breach)</div>
        <div class="source-tier-badge"><span class="badge badge-source-guideline">${glReqs} reqs</span></div>
      </div>
      <div class="source-tier" data-tier="4">
        <div class="source-tier-num">Tier 4</div>
        <div class="source-tier-name">General Code 2022</div>
        <div class="source-tier-desc">Implementation baseline for all sectors — ROPA, consent, notices, security governance</div>
        <div class="source-tier-badge"><span class="badge badge-source-general-code">${gcReqs} reqs</span></div>
      </div>
      <div class="source-tier" data-tier="5">
        <div class="source-tier-num">Tier 5</div>
        <div class="source-tier-name">Sector Codes (7)</div>
        <div class="source-tier-desc">Sector-specific tightening for banking, healthcare, communications, insurance, aviation, electricity, water</div>
        <div class="source-tier-badge"><span class="badge badge-source-sector-code">${scReqs} reqs</span></div>
      </div>
    </div>

    <!-- Section 3: Worked Example (s9 Security Principle) -->
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Worked Example: s9 Security Principle</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">
      Tracing the full compliance chain for the Security Principle shows how each layer builds on the previous.
    </p>
    <div class="framework-trace">
      <div class="framework-trace-col">
        <div class="framework-trace-col-header">Sources</div>
        <div class="framework-trace-col-body">
          <div class="trace-item"><span class="badge badge-source-act" style="font-size:0.625rem;">Act</span> s9</div>
          <div class="trace-item"><span class="badge badge-source-standard" style="font-size:0.625rem;">Standard</span> esec-2..7</div>
          <div class="trace-item"><span class="badge badge-source-standard" style="font-size:0.625rem;">Standard</span> nesec-2..4</div>
          <div class="trace-item"><span class="badge badge-source-guideline" style="font-size:0.625rem;">Guideline</span> dbn-1, dbn-8</div>
          <div class="trace-item"><span class="badge badge-source-general-code" style="font-size:0.625rem;">Gen Code</span> cop-gen-s7</div>
          <div class="trace-item"><span class="badge badge-source-sector-code" style="font-size:0.625rem;">Banking</span> cop-bank-s6</div>
          <div class="trace-item"><span class="badge badge-source-sector-code" style="font-size:0.625rem;">Health</span> cop-health-s3</div>
        </div>
      </div>
      <div class="framework-trace-col">
        <div class="framework-trace-col-header">Requirements</div>
        <div class="framework-trace-col-body">
          <div class="trace-item"><span class="badge badge-source-act" style="font-size:0.625rem;">Act</span> s9-L1..T3, G1..G2</div>
          <div class="trace-item"><span class="badge badge-source-standard" style="font-size:0.625rem;">Std</span> s9-ST1..ST11</div>
          <div class="trace-item"><span class="badge badge-source-guideline" style="font-size:0.625rem;">GL</span> s9-GL1</div>
          <div class="trace-item"><span class="badge badge-source-general-code" style="font-size:0.625rem;">CG</span> s9-CG1..CG2</div>
          <div class="trace-item"><span class="badge badge-source-sector-code" style="font-size:0.625rem;">CS</span> s9-CS-BNK1, HLT1, COM1, INS1, AVI1, ELC1, WTR1</div>
        </div>
      </div>
      <div class="framework-trace-col">
        <div class="framework-trace-col-header">Controls</div>
        <div class="framework-trace-col-body">
          <div class="trace-item"><a href="#control/encryption-and-data-protection-in-transit-at-rest" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Encryption</a></div>
          <div class="trace-item"><a href="#control/access-control-and-identity-management" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Access Control</a></div>
          <div class="trace-item"><a href="#control/security-monitoring-and-siem" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Security Monitoring</a></div>
          <div class="trace-item"><a href="#control/vulnerability-and-patch-management" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Vulnerability Mgmt</a></div>
          <div class="trace-item"><a href="#control/physical-security-controls" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Physical Security</a></div>
          <div class="trace-item"><a href="#control/data-loss-prevention" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">DLP</a></div>
        </div>
      </div>
      <div class="framework-trace-col">
        <div class="framework-trace-col-header">Evidence</div>
        <div class="framework-trace-col-body">
          <div class="trace-item">Security policy document</div>
          <div class="trace-item">Access control logs</div>
          <div class="trace-item">Vulnerability scan reports</div>
          <div class="trace-item">Penetration test results</div>
          <div class="trace-item">Incident response records</div>
          <div class="trace-item">Training records</div>
        </div>
      </div>
      <div class="framework-trace-col">
        <div class="framework-trace-col-header">Artifacts</div>
        <div class="framework-trace-col-body">
          <div class="trace-item"><a href="#artifacts" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Information Security Policy</a></div>
          <div class="trace-item"><a href="#artifacts" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Incident Response Plan</a></div>
          <div class="trace-item"><a href="#artifacts" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Encryption Register</a></div>
          <div class="trace-item"><a href="#artifacts" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Access Control Matrix</a></div>
          <div class="trace-item"><a href="#artifacts" style="color:var(--accent);text-decoration:none;font-size:0.75rem;">Vendor Security Assessment</a></div>
        </div>
      </div>
    </div>

    <!-- Section 4: 8-Layer Summary Grid -->
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">8-Layer Data Architecture</h3>
    <div class="layer-grid">
      <div class="layer-card" onclick="location.hash='#'">
        <div class="layer-card-num">1</div>
        <div class="layer-card-name">Provisions</div>
        <div class="layer-card-count">151 sections</div>
        <div class="layer-card-desc">Act verbatim text + plain-language translation across 11 Parts</div>
      </div>
      <div class="layer-card" onclick="location.hash='#principles'">
        <div class="layer-card-num">2</div>
        <div class="layer-card-name">Principles</div>
        <div class="layer-card-count">11 principles</div>
        <div class="layer-card-desc">Deep dive into obligations, exceptions, and practical guidance</div>
      </div>
      <div class="layer-card" onclick="location.hash='#framework'">
        <div class="layer-card-num">3</div>
        <div class="layer-card-name">Requirements</div>
        <div class="layer-card-count">${totalReqs} obligations</div>
        <div class="layer-card-desc">Three-perspective breakdowns with source tracking from Act + supplements</div>
      </div>
      <div class="layer-card" onclick="location.hash='#framework'">
        <div class="layer-card-num">4</div>
        <div class="layer-card-name">Evidence</div>
        <div class="layer-card-count">40 items</div>
        <div class="layer-card-desc">Compliance evidence guidance with auditor focus and audit tips</div>
      </div>
      <div class="layer-card" onclick="location.hash='#artifacts'">
        <div class="layer-card-num">5</div>
        <div class="layer-card-name">Artifacts</div>
        <div class="layer-card-count">60 documents</div>
        <div class="layer-card-desc">Compliance document inventory across 7 categories</div>
      </div>
      <div class="layer-card" onclick="location.hash='#controls'">
        <div class="layer-card-num">6</div>
        <div class="layer-card-name">Controls</div>
        <div class="layer-card-count">${totalControls} controls</div>
        <div class="layer-card-desc">10 domains with maturity levels, supplement links, and sector variants</div>
      </div>
      <div class="layer-card" onclick="location.hash='#penalties'">
        <div class="layer-card-num">7</div>
        <div class="layer-card-name">Penalties</div>
        <div class="layer-card-count">22 offences</div>
        <div class="layer-card-desc">Offences with original and 2024-amended penalties</div>
      </div>
      <div class="layer-card" onclick="location.hash='#cross-references'">
        <div class="layer-card-num">8</div>
        <div class="layer-card-name">Cross-References</div>
        <div class="layer-card-count">31 mappings</div>
        <div class="layer-card-desc">Act to subsidiary instruments, GDPR, ISO 27701, APEC CBPR</div>
      </div>
    </div>
  `;
}

/* ===== SEARCH ===== */
async function renderSearch(el, query) {
  if (!query || query.length < 2) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">Enter at least 2 characters to search.</div></div>';
    return;
  }

  const q = query.toLowerCase();
  const results = [];

  // Search provisions
  for (const s of Object.values(state.provisions)) {
    const fields = [s.id, s.title, s.verbatim, s.translation, ...(s.keywords || [])].join(' ').toLowerCase();
    if (fields.includes(q)) {
      results.push({ type: 'provision', id: s.id, title: s.title, snippet: getSnippet(s.verbatim || s.translation, q), href: `#section/${s.id}` });
    }
  }

  // Search principles
  if (state.principles) {
    for (const p of state.principles) {
      const fields = [p.id, p.name, p.summary, p.practicalGuidance || ''].join(' ').toLowerCase();
      if (fields.includes(q)) {
        results.push({ type: 'principle', id: `Section ${p.section}`, title: p.name, snippet: getSnippet(p.summary, q), href: `#principle/${p.id}` });
      }
    }
  }

  // Search penalties
  if (state.penalties) {
    for (const p of state.penalties) {
      const fields = [p.section, p.offence, p.description].join(' ').toLowerCase();
      if (fields.includes(q)) {
        results.push({ type: 'penalty', id: p.section, title: p.offence, snippet: getSnippet(p.description, q), href: `#penalties` });
      }
    }
  }

  // Update search input
  const input = document.getElementById('search-input');
  if (input && input.value !== query) input.value = query;

  el.innerHTML = `
    <div class="page-title">Search Results</div>
    <div class="page-subtitle">${results.length} result${results.length !== 1 ? 's' : ''} for "${esc(query)}"</div>
    ${results.length === 0 ? '<div class="empty-state"><div class="empty-state-text">No results found.</div></div>' : ''}
    ${results.map(r => `
      <div class="search-result" onclick="location.hash='${r.href}'">
        <div class="search-result-section">${esc(r.id)}</div>
        <div class="search-result-title">${esc(r.title)}</div>
        <div class="search-result-snippet">${r.snippet}</div>
        <div class="search-result-type">${esc(r.type)}</div>
      </div>
    `).join('')}
  `;
}

function getSnippet(text, query) {
  if (!text) return '';
  const lower = text.toLowerCase();
  const idx = lower.indexOf(query);
  if (idx === -1) return esc(text.slice(0, 150)) + '…';
  const start = Math.max(0, idx - 60);
  const end = Math.min(text.length, idx + query.length + 60);
  let snippet = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  // Highlight match
  const re = new RegExp(`(${escRegex(query)})`, 'gi');
  return esc(snippet).replace(re, '<mark>$1</mark>');
}

function escRegex(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* ===== NOT FOUND ===== */
function renderNotFound(el) {
  el.innerHTML = '<div class="empty-state"><div class="empty-state-text">Page not found. <a href="#">Return to overview</a></div></div>';
}

/* ===== EVENT HANDLERS ===== */
function handleClick(e) {
  // Accordion toggle
  const accHeader = e.target.closest('[data-accordion]');
  if (accHeader) {
    const item = accHeader.closest('.accordion-item');
    if (item) item.classList.toggle('open');
    return;
  }

  // Tab switching
  const tabBtn = e.target.closest('.tab-btn');
  if (tabBtn) {
    const tabName = tabBtn.dataset.tab;
    const container = tabBtn.closest('.tabs')?.parentElement;
    if (!container) return;
    container.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === tabBtn));
    container.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${tabName}`));

    // Lazy load for section detail tabs
    const sectionId = state.route.view === 'section' ? state.route.id : null;
    if (sectionId && ['requirements', 'evidence', 'controls', 'artifacts'].includes(tabName)) {
      activateTab(tabName, sectionId);
    }
    return;
  }

  // Filter chips (source type filter for requirements)
  const sourceFilterChip = e.target.closest('[data-source-filter]');
  if (sourceFilterChip) {
    const filter = sourceFilterChip.dataset.sourceFilter;
    const bar = sourceFilterChip.closest('.filter-bar');
    if (bar) {
      bar.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === sourceFilterChip));
    }
    // Apply source type filter across all requirement columns
    const container = sourceFilterChip.closest('.filter-bar')?.parentElement;
    if (container) {
      const items = container.querySelectorAll('[data-source-type]');
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.sourceType === filter) ? '' : 'none';
      });
    }
    return;
  }

  // Filter chips (category filter)
  const chip = e.target.closest('.filter-chip:not([data-source-filter])');
  if (chip) {
    const filter = chip.dataset.filter;
    const bar = chip.closest('.filter-bar');
    if (bar) {
      bar.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));
    }
    // Apply filter
    const listEl = chip.closest('.filter-bar')?.parentElement;
    if (listEl) {
      const items = listEl.querySelectorAll('[data-category]');
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    }
    return;
  }
}

function handleSearch() {
  const query = document.getElementById('search-input').value.trim();
  if (query.length >= 2) {
    location.hash = `#search/${encodeURIComponent(query)}`;
  } else if (location.hash.startsWith('#search/')) {
    location.hash = '#';
  }
}

/* ===== HELPERS ===== */
function esc(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

function badgeFor(type) {
  const map = {
    mandatory: 'badge-mandatory',
    administrative: 'badge-administrative',
    procedural: 'badge-procedural',
    'rights-based': 'badge-rights',
    definitional: 'badge-definitional',
    penalty: 'badge-penalty',
  };
  const cls = map[type] || 'badge-administrative';
  return `<span class="badge ${cls}">${esc(type || 'N/A')}</span>`;
}

/* ===== BOOTSTRAP ===== */
init().catch(err => {
  console.error('Failed to initialize:', err);
  document.getElementById('app').innerHTML = '<div class="empty-state"><div class="empty-state-text">Failed to load PDPA data. Please check the console for errors.</div></div>';
});
