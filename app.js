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
  sectorFilter: '',    // active sector filter key (e.g. 'banking', 'healthcare')
};

const cache = new Map();

function renderFetchError(el, url, error) {
  el.innerHTML = '<div class="fetch-error">' +
    '<h2>Failed to load data</h2>' +
    '<p>Could not fetch <strong>' + esc(url) + '</strong></p>' +
    (error ? '<p class="error-detail">' + esc(String(error)) + '</p>' : '') +
    '<button onclick="location.reload()">Retry</button>' +
    '</div>';
}

async function fetchJSON(path) {
  if (cache.has(path)) return cache.get(path);
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cache.set(path, data);
    return data;
  } catch (e) {
    console.error(`Failed to load ${path}:`, e);
    const app = document.getElementById('app');
    if (app) renderFetchError(app, path, e);
    return null;
  }
}

/* ===== ROUTING ===== */
function navigate(hash) {
  location.hash = '#' + hash;
}

function parseRoute() {
  const hash = location.hash.slice(1) || '';
  if (!hash || hash === 'overview') return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  // Framework routes (absorbs principles, parts, sections)
  if (hash === 'framework') return { view: 'framework' };
  if (hash.startsWith('framework/')) return { view: 'framework-detail', id: hash.slice(10) };
  // Legacy routes redirect to framework
  if (hash.startsWith('part/')) return { view: 'framework-detail', id: hash.slice(5) };
  if (hash.startsWith('section/')) return { view: 'section', id: hash.slice(8) };
  if (hash.startsWith('principle/')) return { view: 'principle', id: hash.slice(10) };
  if (hash === 'principles') return { view: 'framework' };
  // Controls routes
  if (hash === 'controls') return { view: 'controls' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
  // Risk management routes
  if (hash === 'risk') return { view: 'risk' };
  if (hash.startsWith('risk/')) return { view: 'risk', sub: hash.slice(5) };
  // Sectors routes
  if (hash === 'sectors') return { view: 'sectors' };
  if (hash.startsWith('sector/')) return { view: 'sector-detail', id: hash.slice(7) };
  // Penalties
  if (hash === 'penalties') return { view: 'penalties' };
  // Supplements routes
  if (hash === 'supplements') return { view: 'supplements' };
  if (hash.startsWith('supplement/')) return { view: 'supplement-detail', id: hash.slice(11) };
  // Reference routes (absorbs cross-references + framework mappings)
  if (hash === 'reference') return { view: 'reference' };
  if (hash.startsWith('reference/')) return { view: 'reference', sub: hash.slice(10) };
  // DPIA routes
  if (hash === 'dpia') return { view: 'dpia' };
  if (hash.startsWith('dpia/')) return { view: 'dpia', sub: hash.slice(5) };
  // Legacy redirects
  if (hash === 'artifacts') return { view: 'controls' };
  if (hash === 'cross-references') return { view: 'reference' };
  if (hash === 'risk-management') return { view: 'risk' };
  return { view: 'overview' };
}

/* ===== INIT ===== */
async function init() {
  const [parts, provisionsArr, principlesArr] = await Promise.all([
    fetchJSON('provisions/parts.json'),
    fetchJSON('provisions/index.json'),
    fetchJSON('principles/index.json'),
  ]);
  state.parts = parts || [];
  state.provisions = {};
  if (provisionsArr) {
    for (const s of provisionsArr) state.provisions[s.id] = s;
  }
  state.principles = principlesArr || [];
  window.addEventListener('hashchange', render);
  document.addEventListener('click', handleClick);
  document.addEventListener('change', handleChange);
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.addEventListener('input', debounce(handleSearch, 300));
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
    case 'framework': renderFramework(app); break;
    case 'framework-detail': renderPart(app, state.route.id); break;
    case 'section': renderSection(app, state.route.id); break;
    case 'principle': renderPrinciple(app, state.route.id); break;
    case 'controls': renderControls(app); break;
    case 'control-detail': renderControlDetail(app, state.route.slug); break;
    case 'risk': renderRiskManagement(app); break;
    case 'sectors': renderSectors(app); break;
    case 'sector-detail': renderSectorDetail(app, state.route.id); break;
    case 'penalties': renderPenalties(app); break;
    case 'supplements': renderSupplements(app); break;
    case 'supplement-detail': renderSupplementDetail(app, state.route.id); break;
    case 'reference': renderReference(app); break;
    case 'dpia': renderDPIA(app); break;
    case 'search': renderSearch(app, state.route.query); break;
    default: renderOverview(app);
  }
  window.scrollTo(0, 0);
}

function updateNav() {
  const rv = state.route.view;
  document.querySelectorAll('.nav-link').forEach(el => {
    const view = el.dataset.view;
    let active = false;
    switch (view) {
      case 'overview':
        active = rv === 'overview';
        break;
      case 'framework':
        active = rv === 'framework' || rv === 'framework-detail' || rv === 'section' || rv === 'principle';
        break;
      case 'controls':
        active = rv === 'controls' || rv === 'control-detail';
        break;
      case 'risk':
        active = rv === 'risk';
        break;
      case 'sectors':
        active = rv === 'sectors' || rv === 'sector-detail';
        break;
      case 'penalties':
        active = rv === 'penalties';
        break;
      case 'supplements':
        active = rv === 'supplements' || rv === 'supplement-detail';
        break;
      case 'reference':
        active = rv === 'reference';
        break;
      case 'dpia':
        active = rv === 'dpia';
        break;
    }
    el.classList.toggle('active', active);
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
      <div class="stat-card"><div class="stat-number">${state.principles ? state.principles.length : '…'}</div><div class="stat-label">Principles</div></div>
      <div class="stat-card"><div class="stat-number">${amended}</div><div class="stat-label">Amended (2024)</div></div>
    </div>
    <h2 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem;">Browse by Part</h2>
    <div class="control-grid">
      ${state.parts.map(p => {
        const sections = Object.values(state.provisions).filter(s => s.part === p.id);
        return `<a href="#framework/${p.id}" class="control-card" data-part="${p.id}" style="text-decoration:none;color:inherit;display:block;border-left:4px solid var(--accent);">
          <div class="control-id">Part ${p.id}</div>
          <h3 class="control-card-title">${esc(p.name)}</h3>
          <div class="control-card-meta"><span class="badge badge-category">${sections.length} sections</span></div>
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
    <div class="breadcrumbs"><a href="#framework">Framework</a><span class="sep">/</span><span class="current">Part ${partId}</span></div>
    <div class="page-title">Part ${partId}: ${esc(part.name)}</div>
    <div class="page-subtitle">${esc(part.description)} &middot; ${sections.length} sections</div>
    <div class="accordion">
      ${Object.entries(divisions).map(([div, secs]) => `
        <div class="accordion-item open">
          <button class="accordion-trigger" data-accordion>
            <span>${esc(div)} (${secs.length} sections)</span>
            <span class="chevron">&#9654;</span>
          </div>
          <div class="accordion-content">
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
      <a href="#framework">Framework</a><span class="sep">/</span>
      <a href="#framework/${s.part}">Part ${s.part}${part ? ': ' + esc(part.name) : ''}</a><span class="sep">/</span>
      <span class="current">${s.id}</span>
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
      state.controls = { domains: domains || {}, library: normalizeControlsLibrary(library), provisionMap: provisionMap || { sectionToControls: {}, controlToSections: {} } };
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
          <div class="maturity-card maturity-basic"><div class="maturity-label">Basic</div><p>${esc(c.maturity.basic || '')}</p></div>
          <div class="maturity-card maturity-mature"><div class="maturity-label">Mature</div><p>${esc(c.maturity.mature || '')}</p></div>
          <div class="maturity-card maturity-advanced"><div class="maturity-label">Advanced</div><p>${esc(c.maturity.advanced || '')}</p></div>
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
    <div class="page-title">The ${state.principles.length} PDPA Principles &amp; Rights</div>
    <div class="page-subtitle">Part II — Personal Data Protection Principles and Data Subject Rights</div>
    <div class="control-grid" style="grid-template-columns:repeat(2,1fr);">
      ${state.principles.map(p => `
        <a href="#principle/${p.id}" class="control-card" data-part="II">
          <div class="control-card-id">Section ${p.section}</div>
          <div class="control-card-name">${esc(p.name)}</div>
          <div class="control-card-meta">${(p.obligations || []).length} obligations &middot; ${(p.exceptions || []).length} exceptions</div>
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
    <div class="breadcrumbs"><a href="#framework">Framework</a><span class="sep">/</span><a href="#framework">Principles</a><span class="sep">/</span><span class="current">${esc(p.name)}</span></div>
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

const SECTOR_LABELS = {
  banking: 'Banking & Finance',
  healthcare: 'Healthcare',
  communications: 'Communications',
  insurance: 'Insurance',
  aviation: 'Aviation',
  electricity: 'Electricity',
  water: 'Water',
};

function getSectorKeys() {
  const sectors = new Set();
  if (!state.controls || !state.controls.library) return [];
  for (const ctrls of Object.values(state.controls.library)) {
    for (const c of ctrls) {
      if (c.sectorVariants) {
        for (const s of Object.keys(c.sectorVariants)) sectors.add(s);
      }
    }
  }
  return [...sectors].sort();
}

function controlHasSector(control, sector) {
  return control.sectorVariants && Object.keys(control.sectorVariants).includes(sector);
}

function normalizeControlsLibrary(library) {
  // If library has a flat {domains, controls} structure, group controls by domain slug
  if (library && library.controls && Array.isArray(library.controls)) {
    const grouped = {};
    for (const c of library.controls) {
      const d = c.domain || 'uncategorized';
      if (!grouped[d]) grouped[d] = [];
      grouped[d].push(c);
    }
    return grouped;
  }
  // Already domain-keyed object (or empty)
  return library || {};
}

async function renderControls(el) {
  if (!state.controls) {
    const [domains, library, provisionMap] = await Promise.all([
      fetchJSON('controls/domains.json'),
      fetchJSON('controls/library.json'),
      fetchJSON('controls/provision-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: normalizeControlsLibrary(library), provisionMap: provisionMap || {} };
  }
  const totalControls = Object.values(state.controls.library).reduce((sum, arr) => sum + arr.length, 0);
  const domainEntries = Object.entries(state.controls.domains);
  const sectors = getSectorKeys();
  const activeSector = state.sectorFilter || '';

  // Count controls matching active sector
  let matchCount = totalControls;
  if (activeSector) {
    matchCount = 0;
    for (const ctrls of Object.values(state.controls.library)) {
      for (const c of ctrls) {
        if (controlHasSector(c, activeSector)) matchCount++;
      }
    }
  }

  el.innerHTML = `
    <div class="page-title">Controls Library</div>
    <div class="page-subtitle">${totalControls} controls across ${domainEntries.length} domains</div>
    <div class="sector-filter-bar">
      <label class="sector-filter-label" for="sector-select">Sector Filter:</label>
      <select class="sector-filter-select" id="sector-select">
        <option value="">All Sectors</option>
        ${sectors.map(s => `<option value="${esc(s)}" ${activeSector === s ? 'selected' : ''}>${esc(SECTOR_LABELS[s] || s)}</option>`).join('')}
      </select>
      ${activeSector ? `<button class="sector-filter-clear" id="sector-clear">Clear</button>` : ''}
    </div>
    ${activeSector ? `<div class="sector-filter-indicator">Showing <strong>${matchCount}</strong> of <strong>${totalControls}</strong> controls with <strong>${esc(SECTOR_LABELS[activeSector] || activeSector)}</strong> sector-specific requirements</div>` : ''}
    <div class="accordion" id="controls-accordion">
      ${domainEntries.map(([key, domain]) => {
        const controls = state.controls.library[key] || [];
        const filteredControls = activeSector ? controls.filter(c => controlHasSector(c, activeSector)) : controls;
        if (activeSector && !filteredControls.length) return '';
        return `
          <div class="accordion-item${activeSector ? ' open' : ''}">
            <button class="accordion-trigger" data-accordion>
              <span>${esc(domain.name)} (${filteredControls.length}${activeSector ? '/' + controls.length : ''})</span>
              <span class="chevron">&#9654;</span>
            </div>
            <div class="accordion-content">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(domain.description)}</p>
              ${filteredControls.map(c => {
                const variant = activeSector && c.sectorVariants ? c.sectorVariants[activeSector] : null;
                return `
                  <a href="#control/${c.slug}" class="section-link">
                    <span class="section-link-title">${esc(c.name)}</span>
                    <span class="section-link-badges">
                      <span class="badge badge-type">${esc(c.type)}</span>
                      <span class="badge badge-layer">${esc(c.layer || '')}</span>
                      ${variant ? '<span class="badge badge-sector-active">Sector</span>' : ''}
                    </span>
                  </a>
                  ${variant ? `<div class="sector-variant-inline"><span class="sector-variant-inline-label">${esc(SECTOR_LABELS[activeSector] || activeSector)}:</span> ${esc(variant.additionalRequirements || '')}</div>` : ''}
                `;
              }).join('')}
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
    state.controls = { domains: domains || {}, library: normalizeControlsLibrary(library), provisionMap: provisionMap || {} };
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

  // --- Audit Package: resolve linked artifacts and evidence (direct mapping) ---
  const controlSlug = control.slug;
  const sections = control.sections || [];

  // Find artifacts that directly reference this control via controlSlugs[]
  const artifactIndex = {};
  Object.values(state.artifacts.inventory).forEach(arr => {
    if (Array.isArray(arr)) arr.forEach(a => { artifactIndex[a.slug] = a; });
  });
  const linkedArtifacts = Object.values(artifactIndex)
    .filter(a => Array.isArray(a.controlSlugs) && a.controlSlugs.includes(controlSlug))
    .sort((a, b) => (b.mandatory ? 1 : 0) - (a.mandatory ? 1 : 0));

  // Find evidence items that reference linked artifacts, scoped to control's sections
  const linkedArtifactSlugs = new Set(linkedArtifacts.map(a => a.slug));
  const linkedEvidence = [];
  sections.forEach(s => {
    const ev = state.evidence[s];
    if (ev && ev.evidenceItems) {
      ev.evidenceItems.forEach(item => {
        if (linkedEvidence.find(e => e.id === item.id)) return;
        // Include if evidence references any of this control's artifacts, or if no artifactSlugs field
        const itemArtifacts = item.artifactSlugs || [];
        if (!itemArtifacts.length || itemArtifacts.some(sl => linkedArtifactSlugs.has(sl))) {
          linkedEvidence.push(item);
        }
      });
    }
  });

  // --- Build Requirements section from state.requirements ---
  if (!state.requirements) {
    state.requirements = await fetchJSON('requirements/index.json') || {};
  }
  // Collect requirements for all mapped sections
  const reqSections = control.sections || [];
  const legalReqs = [], technicalReqs = [], governanceReqs = [];
  for (const sid of reqSections) {
    const req = state.requirements[sid];
    if (!req) continue;
    if (req.legal && req.legal.requirements) legalReqs.push(...req.legal.requirements);
    if (req.technical && req.technical.requirements) technicalReqs.push(...req.technical.requirements);
    if (req.governance && req.governance.requirements) governanceReqs.push(...req.governance.requirements);
  }
  const hasRequirements = legalReqs.length || technicalReqs.length || governanceReqs.length;

  // --- Build Framework Mappings ---
  const fwMappings = [];
  if (control.sections && control.sections.length) fwMappings.push({ label: 'PDPA (Act 709)', codes: control.sections.join(', ') });
  if (control.iso27701 && control.iso27701.length) fwMappings.push({ label: 'ISO 27701', codes: control.iso27701.join(', ') });
  if (control.gdpr && control.gdpr.length) fwMappings.push({ label: 'GDPR', codes: control.gdpr.join(', ') });
  if (control.apecCBPR && control.apecCBPR.length) fwMappings.push({ label: 'APEC CBPR', codes: control.apecCBPR.join(', ') });
  if (control.relatedCodes && control.relatedCodes.length) fwMappings.push({ label: 'Codes of Practice', codes: control.relatedCodes.join(', ') });
  if (control.relatedGuidelines && control.relatedGuidelines.length) fwMappings.push({ label: 'Guidelines', codes: control.relatedGuidelines.join(', ') });
  if (control.relatedStandards && control.relatedStandards.length) fwMappings.push({ label: 'Standards', codes: control.relatedStandards.join(', ') });

  // --- Build Source Provisions with sector variants ---
  const sectorVariantEntries = control.sectorVariants ? Object.entries(control.sectorVariants) : [];

  // --- Build Audit Package HTML (Evidence FIRST, then Artifacts per standard) ---
  const auditPackageHTML = (linkedArtifacts.length || linkedEvidence.length) ? `
    <section class="audit-package">
      <h2 class="audit-package-title">
        Audit Package
        <span class="audit-package-counts">
          <span class="badge badge-evidence">${linkedEvidence.length} evidence item${linkedEvidence.length !== 1 ? 's' : ''}</span>
          <span class="badge badge-artifacts">${linkedArtifacts.length} artifact${linkedArtifacts.length !== 1 ? 's' : ''}</span>
        </span>
      </h2>

      ${linkedEvidence.length ? `
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" aria-expanded="true">
              <span>Evidence Checklist (${linkedEvidence.length})</span>
              <span class="accordion-icon">&#9660;</span>
            </button>
            <div class="accordion-content" role="region">
              ${linkedEvidence.map(item => `
                <div class="evidence-item">
                  <div class="evidence-item-header">
                    ${item.id ? `<span class="evidence-id">${esc(item.id)}</span>` : ''}
                    <span class="evidence-item-name">${esc(item.name)}</span>
                  </div>
                  <p class="evidence-item-desc">${esc(item.description)}</p>
                  ${(item.whatGoodLooksLike && item.whatGoodLooksLike.length) || (item.commonGaps && item.commonGaps.length) ? `
                    <div class="evidence-detail-grid">
                      ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
                        <div class="evidence-block evidence-good">
                          <div class="evidence-block-label">What Good Looks Like</div>
                          <ul>${item.whatGoodLooksLike.map(g => `<li>${esc(g)}</li>`).join('')}</ul>
                        </div>
                      ` : ''}
                      ${item.commonGaps && item.commonGaps.length ? `
                        <div class="evidence-block evidence-gap">
                          <div class="evidence-block-label">Common Gaps</div>
                          <ul>${item.commonGaps.map(g => `<li>${esc(g)}</li>`).join('')}</ul>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                  <div class="evidence-item-meta">
                    ${item.format ? `<span class="meta-item"><strong>Format:</strong> ${esc(item.format)}</span>` : ''}
                    ${item.retentionPeriod ? `<span class="meta-item"><strong>Retention:</strong> ${esc(item.retentionPeriod)}</span>` : ''}
                    ${item.suggestedSources && item.suggestedSources.length ? `<span class="meta-item"><strong>Source:</strong> ${item.suggestedSources.map(s => esc(s)).join(', ')}</span>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      ${linkedArtifacts.length ? `
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" aria-expanded="true">
              <span>Required Artifacts (${linkedArtifacts.length})</span>
              <span class="accordion-icon">&#9660;</span>
            </button>
            <div class="accordion-content" role="region">
              ${linkedArtifacts.map(a => `
                <div class="artifact-card">
                  <div class="artifact-card-header">
                    <span class="artifact-card-name">${esc(a.name)}</span>
                    <div class="artifact-card-badges">
                      ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : '<span class="badge badge-optional">Optional</span>'}
                      <span class="badge badge-category">${esc(a.category)}</span>
                    </div>
                  </div>
                  <p class="artifact-card-desc">${esc(a.description || '')}</p>
                  <div class="artifact-card-meta">
                    <span class="meta-item"><strong>Owner:</strong> ${esc(a.owner || 'N/A')}</span>
                    <span class="meta-item"><strong>Review:</strong> ${esc(a.reviewFrequency || 'N/A')}</span>
                    ${a.format ? `<span class="meta-item"><strong>Format:</strong> ${esc(a.format)}</span>` : ''}
                  </div>
                  ${a.keyContents && a.keyContents.length ? `
                    <div class="artifact-card-contents">
                      <strong>Key Contents:</strong>
                      <ul>${a.keyContents.map(k => `<li>${esc(k)}</li>`).join('')}</ul>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : ''}
    </section>
  ` : '';

  // --- Render Control Detail: Auditor Flow ---
  el.innerHTML = `
    <article class="control-detail">

      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <a href="#controls">Controls</a>
        <span class="sep">/</span>
        <span class="current">${esc(control.name)}</span>
      </nav>

      <!-- Header -->
      <header class="control-detail-header">
        <div class="control-detail-id-row">
          <span class="badge badge-domain" style="--domain-color: var(--accent)">${esc(domain.name || control.domain)}</span>
          <span class="badge badge-type-${(control.type || '').toLowerCase().replace(/[^a-z]/g, '')}">${esc(control.type || '')}</span>
          ${control.layer ? `<span class="badge badge-category">${esc(control.layer)}</span>` : ''}
        </div>
        <h1 class="control-detail-title">${esc(control.name)}</h1>
        <p class="control-detail-desc">${esc(control.description)}</p>
      </header>

      ${renderComplianceToggle(slug)}

      <!-- ========== SECTION 1: Requirements ========== -->
      ${hasRequirements ? `
        <section class="detail-section">
          <h2 class="detail-section-title">Requirements</h2>
          <div class="requirements-grid">
            <div class="requirement-block requirement-legal">
              <div class="requirement-block-label">Legal / Regulatory</div>
              ${legalReqs.length ? `<ul>${legalReqs.map(r => `<li>${esc(r.requirement)}</li>`).join('')}</ul>` : '<p style="color:var(--text-muted);font-size:var(--font-size-sm);">No legal requirements mapped.</p>'}
            </div>
            <div class="requirement-block requirement-technical">
              <div class="requirement-block-label">Technical</div>
              ${technicalReqs.length ? `<ul>${technicalReqs.map(r => `<li>${esc(r.requirement)}</li>`).join('')}</ul>` : '<p style="color:var(--text-muted);font-size:var(--font-size-sm);">No technical requirements mapped.</p>'}
            </div>
            <div class="requirement-block requirement-governance">
              <div class="requirement-block-label">Governance</div>
              ${governanceReqs.length ? `<ul>${governanceReqs.map(r => `<li>${esc(r.requirement)}</li>`).join('')}</ul>` : '<p style="color:var(--text-muted);font-size:var(--font-size-sm);">No governance requirements mapped.</p>'}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- ========== SECTION 2: Key Activities ========== -->
      ${control.keyActivities && control.keyActivities.length ? `
        <section class="detail-section">
          <h2 class="detail-section-title">Key Activities</h2>
          <ul class="activity-list">
            ${control.keyActivities.map(a => `<li>${esc(a)}</li>`).join('')}
          </ul>
        </section>
      ` : ''}

      <!-- ========== SECTION 3: Maturity Levels ========== -->
      ${control.maturity ? `
        <section class="detail-section">
          <h2 class="detail-section-title">Maturity Levels</h2>
          <div class="maturity-grid">
            <div class="maturity-card maturity-basic">
              <div class="maturity-label">Basic</div>
              <p>${esc(control.maturity.basic || '')}</p>
            </div>
            <div class="maturity-card maturity-mature">
              <div class="maturity-label">Mature</div>
              <p>${esc(control.maturity.mature || '')}</p>
            </div>
            <div class="maturity-card maturity-advanced">
              <div class="maturity-label">Advanced</div>
              <p>${esc(control.maturity.advanced || '')}</p>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- ========== SECTION 4: Audit Package ========== -->
      ${auditPackageHTML}

      <!-- ========== SECTION 5: Framework Mappings ========== -->
      ${fwMappings.length ? `
        <section class="detail-section">
          <h2 class="detail-section-title">Framework Mappings</h2>
          <div class="fw-mappings">
            ${fwMappings.map(m => `
              <div class="fw-mapping-row">
                <span class="fw-label">${esc(m.label)}</span>
                <span class="fw-codes">${esc(m.codes)}</span>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- ========== SECTION 6: Source Provisions ========== -->
      ${control.sections && control.sections.length ? `
        <section class="detail-section">
          <h2 class="detail-section-title">Source Provisions</h2>
          <div class="provision-links">
            ${control.sections.map(sid => {
              const prov = state.provisions[sid];
              return `<a href="#section/${sid}" class="provision-link">
                <span class="provision-id">${esc(sid)}</span>
                <span class="provision-title">${prov ? esc(prov.title) : ''}</span>
              </a>`;
            }).join('')}
          </div>
          ${sectorVariantEntries.length ? `
            <h3 style="font-size:0.9rem;font-weight:600;margin-top:1rem;margin-bottom:0.5rem;color:var(--text-secondary);">Sector-Specific Variants</h3>
            <div class="provision-links">
              ${sectorVariantEntries.map(([sector, variant]) => `
                <div class="provision-link" style="cursor:default;">
                  <span class="provision-id">${esc(sector)}</span>
                  <span class="provision-title">${esc(variant.additionalRequirements || '')}</span>
                  ${variant.relatedProvision ? `<span style="font-size:var(--font-size-xs);color:var(--text-muted);margin-top:0.25rem;display:block;">Ref: ${esc(variant.relatedProvision)}</span>` : ''}
                </div>
              `).join('')}
            </div>
          ` : ''}
        </section>
      ` : ''}

    </article>
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
        <div class="control-grid" style="grid-template-columns:repeat(2,1fr);">
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
            <button class="accordion-trigger" data-accordion>
              <span><span style="font-family:var(--mono);color:var(--accent);margin-right:0.5rem;">${esc(p.id)}</span>${esc(p.title)}</span>
              <span class="chevron">&#9654;</span>
            </div>
            <div class="accordion-content">
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

/* ===== SECTORS ===== */
async function renderSectors(el) {
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
  const classes = (state.crossRefs.dataUserClasses && state.crossRefs.dataUserClasses.classes) || [];

  el.innerHTML = `
    <div class="page-title">Data Controller Classes</div>
    <div class="page-subtitle">${classes.length} registered classes of data users under the Personal Data Protection (Class of Data Users) Order</div>
    <div class="control-grid">
      ${classes.map((c, i) => `
        <div class="control-card" onclick="navigate('sector/${i}')" style="cursor:pointer;border-left:4px solid var(--accent);">
          <div class="control-id">#${i + 1}</div>
          <h3 class="control-card-title">${esc(c.name)}</h3>
          <p class="control-card-desc">${esc(c.description || '')}</p>
          <div class="control-card-meta">
            <span class="badge badge-category">${esc(c.orderReference || '')}</span>
            ${c.applicableCode ? `<span class="badge badge-evidence">${esc(c.applicableCode)}</span>` : '<span class="badge badge-artifacts">General COP</span>'}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

async function renderSectorDetail(el, id) {
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
  const classes = (state.crossRefs.dataUserClasses && state.crossRefs.dataUserClasses.classes) || [];
  const idx = parseInt(id, 10);
  const c = classes[idx];
  if (!c) return renderNotFound(el);

  el.innerHTML = `
    <nav class="breadcrumbs">
      <a href="#sectors">Sectors</a>
      <span class="sep">/</span>
      <span class="current">${esc(c.name)}</span>
    </nav>
    <div class="page-title">${esc(c.name)}</div>
    <div class="page-subtitle">${esc(c.description || '')}</div>
    <div class="detail-section">
      <div class="fw-mappings">
        <div class="fw-mapping-row">
          <span class="fw-label">Order Reference</span>
          <span class="fw-codes">${esc(c.orderReference || 'N/A')}</span>
        </div>
        <div class="fw-mapping-row">
          <span class="fw-label">Applicable Code</span>
          <span class="fw-codes">${c.applicableCode ? `<a href="#supplement/${c.applicableCode}">${esc(c.applicableCode)}</a>` : 'General Code of Practice'}</span>
        </div>
      </div>
    </div>
    ${c.obligations && c.obligations.length ? `
      <div class="detail-section">
        <h2 class="detail-section-title">Obligations</h2>
        <ul class="activity-list">
          ${c.obligations.map(o => `<li>${esc(typeof o === 'string' ? o : o.obligation || JSON.stringify(o))}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;
}

/* ===== REFERENCE (absorbs Cross-References + Framework Mappings) ===== */
async function renderReference(el) {
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
    <div class="page-title">Reference</div>
    <div class="page-subtitle">Cross-framework mappings (GDPR, APEC CBPR, ISO 27701) and Act-to-subsidiary instrument cross-references</div>

    <div class="sub-tabs">
      <button class="sub-tab active" data-sub="frameworks">International Frameworks</button>
      <button class="sub-tab" data-sub="regulations">Regulations</button>
      <button class="sub-tab" data-sub="guidelines">Guidelines</button>
      <button class="sub-tab" data-sub="codes">Codes of Practice</button>
      <button class="sub-tab" data-sub="standards">Standards</button>
    </div>

    <div class="sub-panel active" data-subpanel="frameworks">
      ${renderFrameworkMappings(state.crossRefs.frameworkMappings)}
    </div>
    <div class="sub-panel" data-subpanel="regulations">
      ${renderXrefMappings(state.crossRefs.actToRegs)}
    </div>
    <div class="sub-panel" data-subpanel="guidelines">
      ${renderXrefMappings(state.crossRefs.actToGuidelines)}
    </div>
    <div class="sub-panel" data-subpanel="codes">
      ${renderXrefMappings(state.crossRefs.actToCodes)}
    </div>
    <div class="sub-panel" data-subpanel="standards">
      ${renderXrefMappings(state.crossRefs.actToStandards)}
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
            ${(m.regulations || m.guidelines || m.codes || m.codeReferences || m.standards || m.standardReferences || []).map(r => `
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

/* ===== FRAMEWORK EXPLORER ===== */
async function renderFramework(el) {
  if (!state.principles) {
    state.principles = await fetchJSON('principles/index.json') || [];
  }
  const totalSections = Object.keys(state.provisions).length;

  el.innerHTML = `
    <div class="page-title">PDPA Framework</div>
    <div class="page-subtitle">Personal Data Protection Act 2010 (Act 709) — ${state.parts.length} Parts, ${totalSections} sections, ${state.principles.length} principles</div>

    <div class="sub-tabs">
      <button class="sub-tab active" data-sub="parts">Parts (${state.parts.length})</button>
      <button class="sub-tab" data-sub="principles">Principles (${state.principles.length})</button>
    </div>

    <div class="sub-panel active" data-subpanel="parts">
      <div class="control-grid">
        ${state.parts.map(p => {
          const sections = Object.values(state.provisions).filter(s => s.part === p.id);
          return `<a href="#framework/${p.id}" class="control-card" data-part="${p.id}" style="text-decoration:none;color:inherit;display:block;border-left:4px solid var(--accent);">
            <div class="control-id">Part ${p.id}</div>
            <h3 class="control-card-title">${esc(p.name)}</h3>
            <p class="control-card-desc">${esc(p.description || '')}</p>
            <div class="control-card-meta"><span class="badge badge-category">${sections.length} sections</span></div>
          </a>`;
        }).join('')}
      </div>
    </div>

    <div class="sub-panel" data-subpanel="principles">
      <div class="control-grid" style="grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));">
        ${state.principles.map(p => `
          <a href="#principle/${p.id}" class="control-card" style="text-decoration:none;color:inherit;display:block;border-left:4px solid var(--accent);">
            <div class="control-id">Section ${p.section}</div>
            <h3 class="control-card-title">${esc(p.name)}</h3>
            <div class="control-card-meta">
              <span class="badge badge-evidence">${(p.obligations || []).length} obligations</span>
              <span class="badge badge-category">${(p.exceptions || []).length} exceptions</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

/* ===== RISK MANAGEMENT ===== */
async function renderRiskManagement(app) {
  const [methodology, matrix, register, checklist, treatment] = await Promise.all([
    fetchJSON('risk-management/methodology.json'),
    fetchJSON('risk-management/risk-matrix.json'),
    fetchJSON('risk-management/risk-register.json'),
    fetchJSON('risk-management/checklist.json'),
    fetchJSON('risk-management/treatment-options.json'),
  ]);

  if (!methodology && !matrix && !register && !checklist) {
    app.innerHTML = '<div class="empty-state"><div class="empty-state-text">Risk management data not available.</div></div>';
    return;
  }

  // Compute stats from register
  const risks = (register && register.risks) || [];
  const categories = {};
  const bandCounts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  for (const r of risks) {
    const cat = r.category || 'Other';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(r);
    const band = riskBand(r.residualRisk, matrix);
    bandCounts[band] = (bandCounts[band] || 0) + 1;
  }

  app.innerHTML = `
    <div class="page-title">Risk Management</div>
    <div class="page-subtitle">PDPA-aligned data protection risk assessment methodology, risk register, and treatment options <span class="badge badge-ai" title="Constructed indicative content — not authoritative legal guidance">AI Generated</span></div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${risks.length}</div><div class="stat-label">Risks Identified</div></div>
      <div class="stat-card"><div class="stat-number">${Object.keys(categories).length}</div><div class="stat-label">Categories</div></div>
      <div class="stat-card"><div class="stat-number" style="color:#EF4444;">${bandCounts.Critical}</div><div class="stat-label">Critical (Residual)</div></div>
      <div class="stat-card"><div class="stat-number" style="color:#F97316;">${bandCounts.High}</div><div class="stat-label">High (Residual)</div></div>
    </div>

    <div class="sub-tabs">
      <button class="sub-tab active" data-sub="rm-methodology">Methodology</button>
      <button class="sub-tab" data-sub="rm-register">Risk Register (${risks.length})</button>
      <button class="sub-tab" data-sub="rm-checklist">Checklist</button>
      <button class="sub-tab" data-sub="rm-treatment">Treatment Options</button>
    </div>

    <div class="sub-panel active" data-subpanel="rm-methodology">
      ${renderRMMethodology(methodology, matrix)}
    </div>
    <div class="sub-panel" data-subpanel="rm-register">
      ${renderRMRegister(register, matrix)}
    </div>
    <div class="sub-panel" data-subpanel="rm-checklist">
      ${renderRMChecklist(checklist)}
    </div>
    <div class="sub-panel" data-subpanel="rm-treatment">
      ${renderRMTreatment(treatment)}
    </div>
  `;
}

function riskBand(score, matrix) {
  if (!matrix || !matrix.scoreToBand) {
    if (score >= 20) return 'Critical';
    if (score >= 10) return 'High';
    if (score >= 5) return 'Medium';
    return 'Low';
  }
  return matrix.scoreToBand[String(score)] || (score >= 20 ? 'Critical' : score >= 10 ? 'High' : score >= 5 ? 'Medium' : 'Low');
}

function riskBandColor(band) {
  const map = { Critical: '#EF4444', High: '#F97316', Medium: '#EAB308', Low: '#22C55E' };
  return map[band] || '#6B7280';
}

function riskBandClass(band) {
  const map = { Critical: 'risk-critical', High: 'risk-high', Medium: 'risk-medium', Low: 'risk-low' };
  return map[band] || '';
}

function renderRMMethodology(meth, matrix) {
  if (!meth) return '<div class="empty-state"><div class="empty-state-text">Methodology data not available.</div></div>';

  const stepsHTML = (meth.riskAssessmentProcess?.steps || []).map(s => `
    <div class="accordion-item">
      <button class="accordion-trigger" data-accordion>
        <span><strong>Step ${s.step}:</strong> ${esc(s.name)}</span>
        <span class="chevron">&#9654;</span>
      </div>
      <div class="accordion-content">
        <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">${esc(s.description)}</p>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${(s.activities || []).map(a => `<li style="margin-bottom:0.25rem;">${esc(a)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  const matrixHTML = matrix ? renderRiskMatrix(matrix) : '';

  const dpiaHTML = meth.dpiaIntegration ? `
    <div class="card" style="margin-top:1.5rem;">
      <div class="card-title">${esc(meth.dpiaIntegration.title)} <span class="badge badge-mandatory">${esc(meth.dpiaIntegration.pdpaSection)}</span></div>
      <div class="card-body" style="margin-bottom:0.75rem;">${esc(meth.dpiaIntegration.description)}</div>
      <div class="block-label">DPIA Required For</div>
      <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">
        ${(meth.dpiaIntegration.dpiaRequired || []).map(r => `<li style="margin-bottom:0.25rem;">${esc(r)}</li>`).join('')}
      </ul>
      <div class="block-label">DPIA Process</div>
      <ol style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">
        ${(meth.dpiaIntegration.dpiaProcess || []).map(p => `<li style="margin-bottom:0.25rem;">${esc(p)}</li>`).join('')}
      </ol>
      ${meth.dpiaIntegration.notes && meth.dpiaIntegration.notes.length ? `
        <div class="block-label">Important Notes</div>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${meth.dpiaIntegration.notes.map(n => `<li style="margin-bottom:0.25rem;">${esc(n)}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  ` : '';

  return `
    <div class="card">
      <div class="card-title">${esc(meth.title)}</div>
      <div class="card-body">${esc(meth.description)}</div>
      ${meth.alignment && meth.alignment.length ? `
        <div style="display:flex;gap:0.375rem;flex-wrap:wrap;margin-top:0.75rem;">
          ${meth.alignment.map(a => `<span class="badge badge-domain">${esc(a)}</span>`).join('')}
        </div>
      ` : ''}
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Risk Assessment Process</h3>
    <div class="accordion">
      ${stepsHTML}
    </div>

    ${matrixHTML}

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Impact Scale</h3>
    <div class="data-table-wrap" style="overflow-x:auto;">
      <table class="data-table">
        <thead><tr><th>Level</th><th>Label</th><th>Data Subjects</th><th>Data Sensitivity</th><th>Harm to Individuals</th><th>Regulatory Penalty</th></tr></thead>
        <tbody>
          ${(meth.impactScale || []).map(i => `
            <tr>
              <td><strong>${i.level}</strong></td>
              <td><strong>${esc(i.label)}</strong></td>
              <td style="font-size:0.75rem;">${esc(i.dataSubjectsAffected)}</td>
              <td style="font-size:0.75rem;">${esc(i.dataSensitivity)}</td>
              <td style="font-size:0.75rem;">${esc(i.harmToIndividuals)}</td>
              <td style="font-size:0.75rem;">${esc(i.regulatoryPenalty)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Likelihood Scale</h3>
    <div class="data-table-wrap" style="overflow-x:auto;">
      <table class="data-table">
        <thead><tr><th>Level</th><th>Label</th><th>Description</th><th>Indicative Frequency</th></tr></thead>
        <tbody>
          ${(meth.likelihoodScale || []).map(l => `
            <tr>
              <td><strong>${l.level}</strong></td>
              <td><strong>${esc(l.label)}</strong></td>
              <td style="font-size:0.75rem;">${esc(l.description)}</td>
              <td style="font-size:0.75rem;">${esc(l.indicativeFrequency)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    ${dpiaHTML}

    ${meth.reviewSchedule ? `
      <div class="card" style="margin-top:1.5rem;">
        <div class="card-title">Review Schedule</div>
        <div class="card-meta">
          <span>Full Assessment: ${esc(meth.reviewSchedule.fullAssessment)}</span>
          <span>Register Review: ${esc(meth.reviewSchedule.registerReview)}</span>
        </div>
        <div class="block-label" style="margin-top:0.75rem;">Trigger Events</div>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${(meth.reviewSchedule.triggerEvents || []).map(t => `<li style="margin-bottom:0.25rem;">${esc(t)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;
}

function renderRiskMatrix(matrix) {
  if (!matrix) return '';
  const impactLabels = matrix.axes.x.scale;
  const likelihoodLabels = matrix.axes.y.scale;
  const grid = matrix.matrix;
  const stb = matrix.scoreToBand || {};

  return `
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Risk Matrix (5x5)</h3>
    <div class="data-table-wrap" style="overflow-x:auto;">
      <table class="data-table risk-matrix-table">
        <thead>
          <tr>
            <th style="min-width:100px;">Likelihood \\ Impact</th>
            ${impactLabels.map(i => `<th style="text-align:center;">${esc(i.label)}<br><span style="font-size:0.625rem;color:var(--text-muted);">(${i.level})</span></th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${likelihoodLabels.slice().reverse().map((l, rowIdx) => {
            const gridRow = grid[likelihoodLabels.length - 1 - rowIdx];
            return `<tr>
              <td><strong>${esc(l.label)}</strong> <span style="font-size:0.625rem;color:var(--text-muted);">(${l.level})</span></td>
              ${gridRow.map(score => {
                const band = stb[String(score)] || 'Low';
                const cls = riskBandClass(band);
                return `<td class="${cls}" style="text-align:center;"><span style="font-weight:600;">${score}</span></td>`;
              }).join('')}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:0.75rem;">
      ${(matrix.bands || []).map(b => `
        <div style="display:flex;align-items:center;gap:0.375rem;">
          <span style="width:12px;height:12px;border-radius:2px;background:${b.color};display:inline-block;"></span>
          <span style="font-size:0.75rem;font-weight:500;">${esc(b.band)} (${esc(b.range)})</span>
          <span style="font-size:0.6875rem;color:var(--text-muted);">— ${esc(b.action)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderRMRegister(register, matrix) {
  if (!register || !register.risks || !register.risks.length) {
    return '<div class="empty-state"><div class="empty-state-text">No risks in the register.</div></div>';
  }
  const risks = register.risks;
  const categories = {};
  for (const r of risks) {
    const cat = r.category || 'Other';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(r);
  }

  const filterChips = Object.keys(categories);

  return `
    <div class="card-meta" style="margin-bottom:1rem;">
      <span>Last Review: ${esc(register.lastReviewDate || 'N/A')}</span>
      <span>Next Review: ${esc(register.nextReviewDate || 'N/A')}</span>
    </div>
    <div class="filter-bar">
      <span class="filter-chip active" data-filter="all">All (${risks.length})</span>
      ${filterChips.map(cat => `<span class="filter-chip" data-filter="${esc(cat)}">${esc(cat)} (${categories[cat].length})</span>`).join('')}
    </div>
    <div id="risk-register-list">
      ${risks.map(r => {
        const inherentBand = riskBand(r.inherentRisk, matrix);
        const residualBand = riskBand(r.residualRisk, matrix);
        return `
          <div class="card risk-register-card" data-category="${esc(r.category || 'Other')}" style="margin-bottom:0.75rem;">
            <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.375rem;">
              <span style="font-family:var(--mono);font-size:0.8125rem;font-weight:600;color:var(--accent);">${esc(r.id)}</span>
              <span class="badge badge-category">${esc(r.category)}</span>
              <span class="badge badge-domain">${esc(r.pdpaSection)}</span>
            </div>
            <div class="card-title" style="margin-bottom:0.375rem;">${esc(r.title)}</div>
            <div class="card-body" style="margin-bottom:0.75rem;">${esc(r.description)}</div>
            <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
              <div>
                <div style="font-size:0.6875rem;font-weight:600;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.25rem;">Inherent Risk</div>
                <div style="display:flex;align-items:center;gap:0.375rem;">
                  <span style="font-size:0.75rem;color:var(--text-secondary);">L:${r.likelihood} x I:${r.impact}</span>
                  <span style="font-weight:700;color:${riskBandColor(inherentBand)};">${r.inherentRisk}</span>
                  <span style="font-size:0.6875rem;font-weight:600;color:${riskBandColor(inherentBand)};">${inherentBand}</span>
                </div>
              </div>
              <div>
                <div style="font-size:0.6875rem;font-weight:600;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.25rem;">Residual Risk</div>
                <div style="display:flex;align-items:center;gap:0.375rem;">
                  <span style="font-size:0.75rem;color:var(--text-secondary);">L:${r.residualLikelihood} x I:${r.residualImpact}</span>
                  <span style="font-weight:700;color:${riskBandColor(residualBand)};">${r.residualRisk}</span>
                  <span style="font-size:0.6875rem;font-weight:600;color:${riskBandColor(residualBand)};">${residualBand}</span>
                </div>
              </div>
              <div>
                <div style="font-size:0.6875rem;font-weight:600;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.25rem;">Treatment</div>
                <span class="badge badge-type">${esc(r.treatment)}</span>
              </div>
              <div>
                <div style="font-size:0.6875rem;font-weight:600;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.25rem;">Owner</div>
                <span style="font-size:0.75rem;color:var(--text-secondary);">${esc(r.owner)}</span>
              </div>
            </div>
            ${r.existingControls && r.existingControls.length ? `
              <div class="block-label">Existing Controls</div>
              <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">
                ${r.existingControls.map(c => `<li style="margin-bottom:0.125rem;">${esc(c)}</li>`).join('')}
              </ul>
            ` : ''}
            <div class="block-label">Treatment Plan</div>
            <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.25rem;">${esc(r.treatmentPlan)}</div>
            <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:0.5rem;">Review Date: ${esc(r.reviewDate)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderRMChecklist(checklist) {
  if (!checklist || !checklist.items || !checklist.items.length) {
    return '<div class="empty-state"><div class="empty-state-text">No checklist items available.</div></div>';
  }
  const items = checklist.items;
  const areas = {};
  for (const item of items) {
    const area = item.area || 'General';
    if (!areas[area]) areas[area] = [];
    areas[area].push(item);
  }

  return `
    <div class="card" style="margin-bottom:1rem;">
      <div class="card-title">${esc(checklist.title)}</div>
      <div class="card-body">${esc(checklist.description)}</div>
    </div>
    <div class="accordion">
      ${Object.entries(areas).map(([area, areaItems]) => `
        <div class="accordion-item open">
          <button class="accordion-trigger" data-accordion>
            <span>${esc(area)} (${areaItems.length})</span>
            <span class="chevron">&#9654;</span>
          </div>
          <div class="accordion-content">
            ${areaItems.map(item => `
              <div class="card" style="margin-bottom:0.5rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.375rem;">
                  <span style="font-family:var(--mono);font-size:0.75rem;font-weight:600;color:var(--accent);">${esc(item.id)}</span>
                  <span class="req-item-priority priority-${(item.priority || '').toLowerCase()}">${esc(item.priority)}</span>
                  <span class="badge badge-domain">${esc(item.pdpaSection)}</span>
                </div>
                <div class="card-title" style="font-size:0.875rem;margin-bottom:0.25rem;">${esc(item.checkItem)}</div>
                <div class="card-body" style="margin-bottom:0.5rem;">${esc(item.description)}</div>
                ${item.evidenceRequired && item.evidenceRequired.length ? `
                  <div class="block-label">Evidence Required</div>
                  <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
                    ${item.evidenceRequired.map(e => `<li style="margin-bottom:0.125rem;">${esc(e)}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderRMTreatment(treatment) {
  if (!treatment || !treatment.strategies || !treatment.strategies.length) {
    return '<div class="empty-state"><div class="empty-state-text">No treatment options available.</div></div>';
  }

  return `
    <div class="card" style="margin-bottom:1rem;border-left:3px solid #EF4444;">
      <div class="card-title" style="color:#EF4444;">Mandatory Compliance Notice</div>
      <div class="card-body" style="font-size:0.8125rem;">${esc(treatment.mandatoryComplianceNote)}</div>
    </div>
    ${treatment.strategies.map(s => `
      <div class="card" style="margin-bottom:1rem;">
        <div class="card-title">${esc(s.strategy)}</div>
        <div class="card-body" style="margin-bottom:0.75rem;">${esc(s.description)}</div>
        <div class="block-label">When to Use</div>
        <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(s.whenToUse)}</div>

        ${s.pdpaExamples && s.pdpaExamples.length ? `
          <div class="block-label">PDPA Examples</div>
          ${s.pdpaExamples.map(ex => `
            <div style="border-left:3px solid var(--border);padding-left:0.75rem;margin-bottom:0.5rem;">
              <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.125rem;">${esc(ex.risk)}</div>
              <div style="font-size:0.8125rem;color:var(--text-secondary);">${esc(ex.treatment)}</div>
              ${ex.controls && ex.controls.length ? `
                <div style="display:flex;gap:0.25rem;flex-wrap:wrap;margin-top:0.25rem;">
                  ${ex.controls.map(c => `<a href="#control/${c}" class="badge badge-layer" style="font-size:0.625rem;">${esc(c)}</a>`).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        ` : ''}

        ${s.considerations && s.considerations.length ? `
          <div class="block-label" style="margin-top:0.75rem;">Considerations</div>
          <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
            ${s.considerations.map(c => `<li style="margin-bottom:0.125rem;">${esc(c)}</li>`).join('')}
          </ul>
        ` : ''}

        ${s.constraints && s.constraints.length ? `
          <div class="block-label" style="margin-top:0.75rem;">Constraints</div>
          <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
            ${s.constraints.map(c => `<li style="margin-bottom:0.125rem;">${esc(c)}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('')}
  `;
}

/* ===== DPIA ===== */
async function renderDPIA(app) {
  const [methodology, thresholds, examples, templates] = await Promise.all([
    fetchJSON('dpia/methodology.json'),
    fetchJSON('dpia/thresholds.json'),
    fetchJSON('dpia/worked-examples.json'),
    fetchJSON('dpia/templates.json'),
  ]);

  if (!methodology && !thresholds && !examples && !templates) {
    app.innerHTML = '<div class="empty-state"><div class="empty-state-text">DPIA data not available.</div></div>';
    return;
  }

  const phases = (methodology && methodology.phases) || [];
  // Support both old (mandatoryTriggers) and new (mandate.quantitative_thresholds) structures
  const triggers = (thresholds && thresholds.mandatoryTriggers) || (thresholds && thresholds.mandate && thresholds.mandate.quantitative_thresholds) || [];
  const questions = (thresholds && thresholds.screeningQuestions) || (thresholds && thresholds.qualitative_factors) || [];
  const exampleList = (examples && examples.examples) || [];

  app.innerHTML = `
    <div class="page-title">Data Protection Impact Assessment</div>
    <div class="page-subtitle">DPIA methodology, screening tool, worked examples, and assessment template aligned with PDPA 2010 <span class="badge badge-ai" title="Constructed indicative content — not authoritative legal guidance">AI Generated</span></div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${phases.length}</div><div class="stat-label">Assessment Phases</div></div>
      <div class="stat-card"><div class="stat-number">${triggers.length}</div><div class="stat-label">Quantitative Thresholds</div></div>
      <div class="stat-card"><div class="stat-number">${exampleList.length}</div><div class="stat-label">Worked Examples</div></div>
      <div class="stat-card"><div class="stat-number">${(templates && templates.sections || []).length}</div><div class="stat-label">Template Sections</div></div>
    </div>

    <div class="sub-tabs">
      <button class="sub-tab active" data-sub="dpia-methodology">Methodology</button>
      <button class="sub-tab" data-sub="dpia-screening">Screening Tool</button>
      <button class="sub-tab" data-sub="dpia-examples">Worked Examples (${exampleList.length})</button>
      <button class="sub-tab" data-sub="dpia-template">Assessment Template</button>
    </div>

    <div class="sub-panel active" data-subpanel="dpia-methodology">
      ${renderDPIAMethodology(methodology)}
    </div>
    <div class="sub-panel" data-subpanel="dpia-screening">
      ${renderDPIAScreening(thresholds)}
    </div>
    <div class="sub-panel" data-subpanel="dpia-examples">
      ${renderDPIAExamples(examples)}
    </div>
    <div class="sub-panel" data-subpanel="dpia-template">
      ${renderDPIATemplate(templates)}
    </div>
  `;

  // Attach screening tool interactivity
  initDPIAScreening(thresholds);
}

function renderDPIAMethodology(meth) {
  if (!meth) return '<div class="empty-state"><div class="empty-state-text">Methodology data not available.</div></div>';

  const phasesHTML = (meth.phases || []).map(p => `
    <div class="accordion-item">
      <button class="accordion-trigger" data-accordion>
        <span><strong>${esc(p.name)}</strong> <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">${esc(p.description)}</span></span>
        <span class="chevron">&#9654;</span>
      </div>
      <div class="accordion-content">
        <div class="dpia-phase">
          <div class="block-label">Steps</div>
          <ol style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">
            ${(p.steps || []).map(s => `<li style="margin-bottom:0.25rem;">${esc(s)}</li>`).join('')}
          </ol>
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
            <div>
              <div class="block-label">PDPA References</div>
              <div style="display:flex;gap:0.25rem;flex-wrap:wrap;">
                ${(p.pdpaReferences || []).map(r => `<a href="#section/${r}" class="badge badge-domain">${esc(r)}</a>`).join('')}
              </div>
            </div>
            <div>
              <div class="block-label">Outputs</div>
              <div style="display:flex;gap:0.25rem;flex-wrap:wrap;">
                ${(p.outputs || []).map(o => `<span class="badge badge-type">${esc(o)}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="card">
      <div class="card-title">${esc(meth.title)}</div>
      <div class="card-body" style="margin-bottom:0.75rem;">${esc(meth.description)}</div>
      ${meth.legalBasis ? `
        <div class="auditor-focus">
          <div class="block-label" style="color:#92400E;">Legal Basis</div>
          <div style="font-size:0.8125rem;">${esc(meth.legalBasis.description)}</div>
          <div style="display:flex;gap:0.25rem;flex-wrap:wrap;margin-top:0.5rem;">
            ${(meth.legalBasis.pdpaSections || []).map(s => `<a href="#section/${s}" class="badge badge-domain">${esc(s)}</a>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">8-Phase DPIA Process</h3>
    <div class="accordion">
      ${phasesHTML}
    </div>

    ${meth.reviewTriggers && meth.reviewTriggers.length ? `
      <div class="card" style="margin-top:1.5rem;">
        <div class="card-title">Review Triggers</div>
        <div class="card-body" style="margin-bottom:0.5rem;">A DPIA should be reviewed when any of the following occur:</div>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${meth.reviewTriggers.map(t => `<li style="margin-bottom:0.25rem;">${esc(t)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;
}

function renderDPIAScreening(thresholds) {
  if (!thresholds) return '<div class="empty-state"><div class="empty-state-text">Screening data not available.</div></div>';

  // Support both old (mandatoryTriggers/screeningQuestions) and new (mandate/qualitative_factors) structures
  const oldTriggers = thresholds.mandatoryTriggers || [];
  const quantThresholds = (thresholds.mandate && thresholds.mandate.quantitative_thresholds) || [];
  const oldQuestions = thresholds.screeningQuestions || [];
  const qualFactors = thresholds.qualitative_factors || [];
  const bands = (thresholds.scoringGuide && thresholds.scoringGuide.bands) || [];
  const hasOldFormat = oldTriggers.length > 0 || oldQuestions.length > 0;

  // Old-format triggers section
  const oldTriggersHTML = oldTriggers.length ? `
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Mandatory Triggers</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">If any of the following criteria are met, a DPIA is required regardless of the screening score.</p>
    <div class="accordion">
      ${oldTriggers.map(t => `
        <div class="accordion-item">
          <button class="accordion-trigger" data-accordion>
            <span>
              <span style="font-family:var(--mono);font-size:0.75rem;color:var(--accent);margin-right:0.5rem;">${esc(t.id)}</span>
              <strong>${esc(t.criterion)}</strong>
              <span class="badge ${t.riskLevel === 'high' ? 'badge-mandatory' : 'badge-procedural'}" style="margin-left:0.5rem;">${esc(t.riskLevel)}</span>
            </span>
            <span class="chevron">&#9654;</span>
          </div>
          <div class="accordion-content">
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">${esc(t.description)}</p>
            <div style="display:flex;gap:0.25rem;">
              <a href="#section/${Array.isArray(t.pdpaSection) ? t.pdpaSection[0] : t.pdpaSection}" class="badge badge-domain">${esc(Array.isArray(t.pdpaSection) ? t.pdpaSection.join(', ') : t.pdpaSection)}</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  // New-format quantitative thresholds section
  const quantHTML = quantThresholds.length ? `
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Quantitative Thresholds</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(thresholds.mandate.primary || 'A DPIA is mandatory when any of the following quantitative thresholds are met.')}</p>
    <div class="data-table-wrap" style="overflow-x:auto;">
      <table class="data-table">
        <thead><tr><th>Category</th><th>Threshold</th><th>Rationale</th></tr></thead>
        <tbody>
          ${quantThresholds.map(t => `
            <tr>
              <td><strong>${esc(t.category)}</strong></td>
              <td>${esc(t.threshold)}</td>
              <td style="font-size:0.8125rem;color:var(--text-secondary);">${esc(t.rationale)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  ` : '';

  // New-format qualitative factors as screening checklist
  const qualHTML = qualFactors.length ? `
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Qualitative Risk Factors</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">Check applicable factors. If any factor applies, a DPIA should be considered based on the DPO's best judgment.</p>
    <div class="dpia-screening" id="dpia-screening-form">
      ${qualFactors.map(q => `
        <label class="dpia-screening-question" style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:0.5rem;cursor:pointer;transition:all 0.15s;">
          <input type="checkbox" data-weight="1" data-sq-id="${esc(q.id)}" style="margin-top:0.25rem;flex-shrink:0;">
          <div style="flex:1;">
            <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.125rem;">${esc(q.factor)}</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">${esc(q.description)}</div>
          </div>
        </label>
      `).join('')}
    </div>
    <div class="dpia-score" id="dpia-score-display" style="margin-top:1rem;">
      <div class="card" style="text-align:center;padding:1.5rem;">
        <div style="font-size:0.6875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.5rem;">Factors Applicable</div>
        <div id="dpia-score-value" style="font-family:var(--mono);font-size:2.5rem;font-weight:700;color:var(--green);line-height:1;">0</div>
        <div id="dpia-score-recommendation" style="font-size:0.875rem;font-weight:500;color:var(--green);margin-top:0.5rem;">No qualitative factors selected — assess quantitative thresholds</div>
      </div>
    </div>
  ` : '';

  // Old-format screening questionnaire with weights
  const oldQuestionsHTML = oldQuestions.length ? `
    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Screening Questionnaire</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">Check all that apply. The total weighted score determines whether a DPIA is required.</p>
    <div class="dpia-screening" id="dpia-screening-form">
      ${oldQuestions.map(q => `
        <label class="dpia-screening-question" style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:0.5rem;cursor:pointer;transition:all 0.15s;">
          <input type="checkbox" data-weight="${q.weight}" data-sq-id="${esc(q.id)}" style="margin-top:0.25rem;flex-shrink:0;">
          <div style="flex:1;">
            <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.125rem;">${esc(q.question)}</div>
            <div style="display:flex;gap:0.5rem;align-items:center;">
              <span class="badge badge-category">${esc(q.category)}</span>
              <span style="font-size:0.6875rem;color:var(--text-muted);">Weight: ${q.weight}</span>
            </div>
          </div>
        </label>
      `).join('')}
    </div>
    <div class="dpia-score" id="dpia-score-display" style="margin-top:1rem;">
      <div class="card" style="text-align:center;padding:1.5rem;">
        <div style="font-size:0.6875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.5rem;">Screening Score</div>
        <div id="dpia-score-value" style="font-family:var(--mono);font-size:2.5rem;font-weight:700;color:var(--green);line-height:1;">0</div>
        <div id="dpia-score-recommendation" style="font-size:0.875rem;font-weight:500;color:var(--green);margin-top:0.5rem;">DPIA not required — document screening decision</div>
      </div>
    </div>
  ` : '';

  // Decision logic (new format)
  const decisionHTML = thresholds.decision_logic ? `
    <div class="card" style="margin-top:1.5rem;border-left:3px solid var(--accent);">
      <div class="card-title">Decision Logic</div>
      <div class="card-body">${esc(thresholds.decision_logic)}</div>
    </div>
  ` : '';

  return `
    <div class="card" style="margin-bottom:1rem;">
      <div class="card-title">${esc(thresholds.title)}</div>
      <div class="card-body">${esc(thresholds.description)}</div>
    </div>
    ${oldTriggersHTML}
    ${quantHTML}
    ${oldQuestionsHTML}
    ${qualHTML}
    ${decisionHTML}
    ${bands.length ? `
      <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Scoring Guide</h3>
      <div style="display:flex;gap:1rem;flex-wrap:wrap;">
        ${bands.map(b => `
          <div style="flex:1;min-width:200px;padding:0.75rem 1rem;border-radius:var(--radius);border-left:4px solid ${b.color};background:${b.color}10;">
            <div style="font-family:var(--mono);font-size:1rem;font-weight:700;color:${b.color};margin-bottom:0.25rem;">${esc(b.range)}</div>
            <div style="font-size:0.8125rem;color:var(--text-secondary);">${esc(b.recommendation)}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}

function initDPIAScreening(thresholds) {
  if (!thresholds) return;
  const form = document.getElementById('dpia-screening-form');
  if (!form) return;

  const bands = (thresholds.scoringGuide && thresholds.scoringGuide.bands) || [];
  const isQualitativeMode = !!(thresholds.qualitative_factors && !thresholds.screeningQuestions);

  form.addEventListener('change', function() {
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    let score = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) score += parseInt(cb.dataset.weight, 10) || 0;
    });

    const scoreEl = document.getElementById('dpia-score-value');
    const recEl = document.getElementById('dpia-score-recommendation');
    if (!scoreEl || !recEl) return;

    scoreEl.textContent = score;

    // Determine band
    let color = '#22c55e';
    let recommendation;
    if (isQualitativeMode) {
      // Qualitative factor mode: any factor checked suggests DPIA consideration
      recommendation = 'No qualitative factors selected — assess quantitative thresholds';
      if (score >= 2) {
        color = '#ef4444';
        recommendation = 'Multiple risk factors present — DPIA strongly recommended';
      } else if (score >= 1) {
        color = '#f59e0b';
        recommendation = 'Risk factor present — consider DPIA based on DPO judgment';
      }
    } else {
      recommendation = 'DPIA not required — document screening decision';
      if (score >= 8) {
        color = '#ef4444';
        recommendation = 'DPIA required — proceed with full assessment';
      } else if (score >= 5) {
        color = '#f59e0b';
        recommendation = 'DPIA recommended — consider voluntary assessment';
      }
    }

    // Override from bands data if available
    for (const b of bands) {
      const parts = b.range.split('-');
      const low = parseInt(parts[0], 10);
      if (b.range.endsWith('+')) {
        if (score >= low) { color = b.color; recommendation = b.recommendation; }
      } else {
        const high = parseInt(parts[1], 10);
        if (score >= low && score <= high) { color = b.color; recommendation = b.recommendation; }
      }
    }

    scoreEl.style.color = color;
    recEl.style.color = color;
    recEl.textContent = recommendation;
  });
}

function renderDPIAExamples(examples) {
  if (!examples || !examples.examples || !examples.examples.length) {
    return '<div class="empty-state"><div class="empty-state-text">No worked examples available.</div></div>';
  }

  return `
    <div class="card" style="margin-bottom:1rem;">
      <div class="card-title">${esc(examples.title)}</div>
      <div class="card-body">${esc(examples.description)}</div>
    </div>
    <div class="accordion">
      ${examples.examples.map(ex => {
        const scoreColor = ex.screeningScore >= 8 ? '#ef4444' : ex.screeningScore >= 5 ? '#f59e0b' : '#22c55e';
        return `
          <div class="accordion-item">
            <button class="accordion-trigger" data-accordion>
              <span>
                <span style="font-family:var(--mono);font-size:0.75rem;color:var(--accent);margin-right:0.5rem;">${esc(ex.id)}</span>
                <strong>${esc(ex.title)}</strong>
                <span class="badge badge-category" style="margin-left:0.5rem;">${esc(ex.sector)}</span>
                <span style="font-family:var(--mono);font-size:0.75rem;font-weight:700;color:${scoreColor};margin-left:0.5rem;">Score: ${ex.screeningScore}</span>
              </span>
              <span class="chevron">&#9654;</span>
            </div>
            <div class="accordion-content">
              <div class="dpia-example">
                <div class="card-body" style="margin-bottom:0.75rem;">${esc(ex.scenario)}</div>

                <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                  <div>
                    <div class="block-label">Data Subjects</div>
                    <div style="font-size:0.8125rem;color:var(--text-secondary);">${esc(ex.dataSubjects)}</div>
                  </div>
                  <div>
                    <div class="block-label">Screening Result</div>
                    <div style="font-size:0.8125rem;font-weight:600;color:${scoreColor};">${esc(ex.screeningResult)} (Score: ${ex.screeningScore})</div>
                  </div>
                  <div>
                    <div class="block-label">Residual Risk</div>
                    <div style="font-size:0.8125rem;color:var(--text-secondary);">${esc(ex.residualRisk)}</div>
                  </div>
                </div>

                <div class="block-label">Data Categories</div>
                <div style="display:flex;gap:0.25rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                  ${(ex.dataCategories || []).map(c => `<span class="badge badge-layer">${esc(c)}</span>`).join('')}
                </div>

                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                  <div style="flex:1;min-width:200px;">
                    <div class="block-label">PDPA Sections</div>
                    <div style="display:flex;gap:0.25rem;flex-wrap:wrap;">
                      ${(ex.pdpaSections || []).map(s => `<a href="#section/${s}" class="badge badge-domain">${esc(s)}</a>`).join('')}
                    </div>
                  </div>
                  <div style="flex:1;min-width:200px;">
                    <div class="block-label">Triggers Met</div>
                    <div style="display:flex;gap:0.25rem;flex-wrap:wrap;">
                      ${(ex.triggersMet || []).map(t => `<span class="badge badge-mandatory">${esc(t)}</span>`).join('')}
                    </div>
                  </div>
                </div>

                <div class="block-label">Risks Identified</div>
                <div class="data-table-wrap" style="overflow-x:auto;margin-bottom:0.75rem;">
                  <table class="data-table">
                    <thead><tr><th>Risk</th><th style="text-align:center;">L</th><th style="text-align:center;">I</th><th style="text-align:center;">Score</th><th style="text-align:center;">Level</th></tr></thead>
                    <tbody>
                      ${(ex.risksIdentified || []).map(r => {
                        const levelColor = r.level === 'High' ? 'var(--red)' : r.level === 'Medium' ? 'var(--amber)' : 'var(--green)';
                        return `<tr>
                          <td>${esc(r.risk)}</td>
                          <td style="text-align:center;">${r.likelihood}</td>
                          <td style="text-align:center;">${r.impact}</td>
                          <td style="text-align:center;font-weight:600;">${r.score}</td>
                          <td style="text-align:center;font-weight:600;color:${levelColor};">${esc(r.level)}</td>
                        </tr>`;
                      }).join('')}
                    </tbody>
                  </table>
                </div>

                <div class="block-label">Mitigations</div>
                <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">
                  ${(ex.mitigations || []).map(m => `<li style="margin-bottom:0.25rem;">${esc(m)}</li>`).join('')}
                </ul>

                <div style="background:var(--border-light);padding:0.75rem 1rem;border-radius:var(--radius);">
                  <div class="block-label">Decision</div>
                  <div style="font-size:0.8125rem;font-weight:500;color:var(--text-primary);">${esc(ex.decision)}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderDPIATemplate(templates) {
  if (!templates || !templates.sections || !templates.sections.length) {
    return '<div class="empty-state"><div class="empty-state-text">Template data not available.</div></div>';
  }

  return `
    <div class="card" style="margin-bottom:1rem;">
      <div class="card-title">${esc(templates.title)}</div>
      <div class="card-body">${esc(templates.description)}</div>
    </div>

    ${templates.sections.map(section => `
      <div class="card" style="margin-bottom:1rem;">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">
          <span style="font-family:var(--mono);font-size:0.75rem;font-weight:600;color:var(--accent);">${esc(section.id)}</span>
          <span class="card-title" style="margin-bottom:0;">${esc(section.title)}</span>
        </div>
        ${(section.fields || []).map(f => {
          let fieldHTML = '';
          const requiredMark = f.required ? '<span style="color:var(--red);margin-left:0.25rem;">*</span>' : '';
          const pdpaRef = f.pdpaRef ? `<a href="#section/${f.pdpaRef}" class="badge badge-domain" style="font-size:0.5625rem;margin-left:0.375rem;">${esc(f.pdpaRef)}</a>` : '';

          if (f.type === 'text' || f.type === 'number' || f.type === 'date') {
            fieldHTML = `
              <div class="dpia-form-field" style="margin-bottom:0.75rem;">
                <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(f.label)}${requiredMark}${pdpaRef}</div>
                ${f.guidance ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.25rem;">${esc(f.guidance)}</div>` : ''}
                <div style="background:var(--border-light);border:1px solid var(--border);border-radius:6px;padding:0.5rem 0.75rem;font-size:0.8125rem;color:var(--text-muted);">${f.type === 'date' ? 'DD/MM/YYYY' : f.type === 'number' ? '0' : 'Enter text...'}</div>
              </div>
            `;
          } else if (f.type === 'textarea') {
            fieldHTML = `
              <div class="dpia-form-field" style="margin-bottom:0.75rem;">
                <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(f.label)}${requiredMark}${pdpaRef}</div>
                ${f.guidance ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.25rem;">${esc(f.guidance)}</div>` : ''}
                <div style="background:var(--border-light);border:1px solid var(--border);border-radius:6px;padding:0.5rem 0.75rem;min-height:3rem;font-size:0.8125rem;color:var(--text-muted);">Enter details...</div>
              </div>
            `;
          } else if (f.type === 'boolean') {
            fieldHTML = `
              <div class="dpia-form-field" style="margin-bottom:0.75rem;">
                <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(f.label)}${requiredMark}${pdpaRef}</div>
                <div style="display:flex;gap:0.75rem;">
                  <span style="padding:0.375rem 0.75rem;border:1px solid var(--border);border-radius:6px;font-size:0.8125rem;color:var(--text-muted);">Yes</span>
                  <span style="padding:0.375rem 0.75rem;border:1px solid var(--border);border-radius:6px;font-size:0.8125rem;color:var(--text-muted);">No</span>
                </div>
              </div>
            `;
          } else if (f.type === 'select') {
            fieldHTML = `
              <div class="dpia-form-field" style="margin-bottom:0.75rem;">
                <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(f.label)}${requiredMark}${pdpaRef}</div>
                <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
                  ${(f.options || []).map(o => `<span style="padding:0.375rem 0.75rem;border:1px solid var(--border);border-radius:6px;font-size:0.75rem;color:var(--text-secondary);background:var(--card);">${esc(o)}</span>`).join('')}
                </div>
              </div>
            `;
          } else if (f.type === 'checklist') {
            fieldHTML = `
              <div class="dpia-form-field" style="margin-bottom:0.75rem;">
                <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(f.label)}${requiredMark}${pdpaRef}</div>
                <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
                  ${(f.options || []).map(o => `<span style="padding:0.25rem 0.625rem;border:1px solid var(--border);border-radius:9999px;font-size:0.75rem;color:var(--text-secondary);background:var(--card);">${esc(o)}</span>`).join('')}
                </div>
              </div>
            `;
          } else if (f.type === 'risk-table' || f.type === 'mitigation-table') {
            fieldHTML = `
              <div class="dpia-form-field" style="margin-bottom:0.75rem;">
                <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(f.label)}${requiredMark}</div>
                <div class="data-table-wrap" style="overflow-x:auto;">
                  <table class="data-table">
                    <thead><tr>${(f.columns || []).map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
                    <tbody>
                      <tr>${(f.columns || []).map(() => `<td style="color:var(--text-muted);font-size:0.75rem;">—</td>`).join('')}</tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `;
          }
          return fieldHTML;
        }).join('')}
      </div>
    `).join('')}
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

  // Search controls
  if (!state.controls) {
    const [domains, library, provisionMap] = await Promise.all([
      fetchJSON('controls/domains.json'),
      fetchJSON('controls/library.json'),
      fetchJSON('controls/provision-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: normalizeControlsLibrary(library), provisionMap: provisionMap || {} };
  }
  if (state.controls && state.controls.library) {
    for (const [domain, ctrls] of Object.entries(state.controls.library)) {
      for (const c of ctrls) {
        const fields = [c.name, c.description, c.slug, domain].join(' ').toLowerCase();
        if (fields.includes(q)) {
          results.push({ type: 'control', id: `[Control] ${domain}`, title: c.name, snippet: getSnippet(c.description, q), href: `#control/${c.slug}` });
        }
      }
    }
  }

  // Search artifacts
  if (!state.artifacts) {
    const [inventory, provisionMap] = await Promise.all([
      fetchJSON('artifacts/inventory.json'),
      fetchJSON('artifacts/provision-map.json'),
    ]);
    state.artifacts = { inventory: inventory || {}, provisionMap: provisionMap || {} };
  }
  if (state.artifacts && state.artifacts.inventory) {
    for (const [cat, items] of Object.entries(state.artifacts.inventory)) {
      for (const a of items) {
        const fields = [a.name, a.description, a.slug, cat].join(' ').toLowerCase();
        if (fields.includes(q)) {
          results.push({ type: 'artifact', id: `[Artifact] ${cat}`, title: a.name, snippet: getSnippet(a.description, q), href: `#controls` });
        }
      }
    }
  }

  // Search requirements
  if (!state.requirements) {
    state.requirements = await fetchJSON('requirements/index.json') || {};
  }
  if (state.requirements) {
    for (const [sectionId, section] of Object.entries(state.requirements)) {
      for (const perspective of ['legal', 'technical', 'governance']) {
        const reqs = section[perspective]?.requirements || [];
        for (const r of reqs) {
          const fields = [r.id, r.requirement, r.rationale || ''].join(' ').toLowerCase();
          if (fields.includes(q)) {
            results.push({ type: 'requirement', id: `[Requirement] ${r.id}`, title: r.requirement.slice(0, 100), snippet: getSnippet(r.requirement, q), href: `#section/${sectionId}` });
            break; // one match per requirement is enough
          }
        }
      }
    }
  }

  // Search evidence
  if (!state.evidence) {
    state.evidence = await fetchJSON('evidence/index.json') || {};
  }
  if (state.evidence) {
    for (const [sectionId, section] of Object.entries(state.evidence)) {
      for (const item of (section.evidenceItems || [])) {
        const fields = [item.id, item.name, item.description].join(' ').toLowerCase();
        if (fields.includes(q)) {
          results.push({ type: 'evidence', id: `[Evidence] ${item.id || sectionId}`, title: item.name, snippet: getSnippet(item.description, q), href: `#section/${sectionId}` });
        }
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
  // Sector filter clear button
  if (e.target.id === 'sector-clear') {
    state.sectorFilter = '';
    const select = document.getElementById('sector-select');
    if (select) select.value = '';
    render();
    return;
  }

  // Accordion toggle
  const accHeader = e.target.closest('[data-accordion]');
  if (accHeader) {
    const item = accHeader.closest('.accordion-item');
    if (item) item.classList.toggle('open');
    return;
  }

  // Sub-tab switching (standard)
  const subTab = e.target.closest('.sub-tab');
  if (subTab) {
    const subName = subTab.dataset.sub;
    const container = subTab.closest('.sub-tabs')?.parentElement;
    if (!container) return;
    container.querySelectorAll('.sub-tab').forEach(b => b.classList.toggle('active', b === subTab));
    container.querySelectorAll('.sub-panel').forEach(p => p.classList.toggle('active', p.dataset.subpanel === subName));
    return;
  }

  // Tab switching (legacy section detail tabs)
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

  // Accordion toggle (standard)
  const accTrigger = e.target.closest('.accordion-trigger');
  if (accTrigger) {
    const content = accTrigger.nextElementSibling;
    const expanded = accTrigger.getAttribute('aria-expanded') === 'true';
    accTrigger.setAttribute('aria-expanded', !expanded);
    if (content) content.hidden = expanded;
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

function handleChange(e) {
  // Sector filter select
  if (e.target.id === 'sector-select') {
    state.sectorFilter = e.target.value;
    render();
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
  document.getElementById('app').innerHTML = '<div class="error-state"><h2>Failed to load data</h2><p class="error-message">Could not initialize PDPA application</p><button onclick="location.reload()">Retry</button></div>';
});

// === Export Functions ===

function exportToPDF() {
  document.body.classList.add('printing');
  window.print();
  document.body.classList.remove('printing');
}

function exportToCSV() {
  const view = state.route.view;
  let data = [];
  let filename = `export-${view}-${new Date().toISOString().slice(0,10)}.csv`;

  if (view === 'controls') {
    const lib = state.controls && state.controls.library ? state.controls.library : {};
    const list = [];
    for (const [domain, ctrls] of Object.entries(lib)) {
      if (Array.isArray(ctrls)) {
        for (const c of ctrls) list.push(c);
      }
    }
    data = list.map(c => ({
      ID: c.slug || '',
      Name: c.name,
      Domain: c.domain,
      Description: (c.description || '').replace(/\n/g, ' ')
    }));
  } else if (view === 'risk-management') {
    const list = state.riskManagement?.register || [];
    data = list.map(r => ({
      ID: r.id,
      Risk: r.risk,
      Impact: r.impact,
      Likelihood: r.likelihood,
      Level: r.inherentRiskLevel
    }));
  } else {
    alert('CSV export only supported for Controls and Risk Register views.');
    return;
  }

  if (data.length === 0) {
    alert('No data found to export.');
    return;
  }

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// === Compliance Gap Tracker Logic ===

function getComplianceStatus(slug) {
  const data = JSON.parse(localStorage.getItem('pdpa_compliance_status') || '{}');
  return data[slug] || 'pending';
}

function setComplianceStatus(slug, status) {
  const data = JSON.parse(localStorage.getItem('pdpa_compliance_status') || '{}');
  data[slug] = status;
  localStorage.setItem('pdpa_compliance_status', JSON.stringify(data));
  render(); // Refresh UI
}

function renderComplianceToggle(slug) {
  const status = getComplianceStatus(slug);
  const options = [
    { id: 'pending', label: 'Pending', color: '#64748b' },
    { id: 'compliant', label: 'Compliant', color: '#22c55e' },
    { id: 'gap', label: 'Gap (Non-Compliant)', color: '#ef4444' },
    { id: 'na', label: 'Not Applicable', color: '#94a3b8' }
  ];

  const current = options.find(o => o.id === status);

  return `
    <div class="compliance-tracker-box" style="background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:1.25rem; margin-bottom:1.5rem; display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap">
      <div>
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-dim); margin-bottom:0.35rem">Compliance Status</div>
        <div style="font-size:1.1rem; font-weight:700; color:${current.color}">
          ${current.label}
        </div>
      </div>
      <div style="margin-left:auto; display:flex; gap:0.5rem; flex-wrap:wrap">
        ${options.map(o => `
          <button 
            onclick="setComplianceStatus('${slug}', '${o.id}')"
            style="cursor:pointer; border:1px solid ${status === o.id ? o.color : 'var(--border)'}; background:${status === o.id ? o.color + '15' : 'var(--bg-card)'}; color:${status === o.id ? o.color : 'var(--text-secondary)'}; padding:0.4rem 0.75rem; border-radius:6px; font-size:0.75rem; font-weight:600; transition:all 0.2s"
          >${o.label}</button>
        `).join('')}
      </div>
    </div>
  `;
}
