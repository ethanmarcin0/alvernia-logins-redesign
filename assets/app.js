/* Portable, framework-free UI. The only persistence is this browser's saved links. */
(() => {
  'use strict';
  const data = window.ALVERNIA_SERVICES;
  const classic = document.body.dataset.concept === 'classic';
  const storageKey = 'alvernia-logins-' + document.body.dataset.concept + '-saved-v1';
  const state = {query:'', audience:'all', category:'all', savedOnly:false, saved:new Set()};
  const $ = id => document.getElementById(id);
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = text => text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g,' ').trim();
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) state.saved = new Set(saved.filter(id => data.some(s => s.id === id)));
    localStorage.setItem(storageKey, JSON.stringify([...state.saved]));
  } catch { storageAvailable = false; }
  function storageMessage() {
    $('storage-note').textContent = storageAvailable ? 'Saved links stay in this browser. No account needed.' : 'Browser storage is unavailable. Saved links will last for this visit.';
  }
  storageMessage();
  document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = auIcon(el.dataset.icon));
  const sorted = [...data].sort((a,b) => a.name.localeCompare(b.name));
  const quickIds = ['canvas','office','myalvernia','selfservice'];
  const quickCaptions = {canvas:'Courses & assignments',office:'Email & collaboration',myalvernia:'Your university portal',selfservice:'Registration & schedules'};
  const badge = audience => audience === 'Faculty/Staff' ? 'Faculty & Staff' : audience;
  function visibleVariants(service) {
    return service.variants.filter(v => state.audience === 'all' || v.audience === state.audience);
  }
  function matches(service) {
    const haystack = normalize([service.name,service.description,service.aliases,service.category,...service.variants.map(v=>v.sourceName)].join(' '));
    return visibleVariants(service).length && (state.category === 'all' || state.category === service.category) && (!state.savedOnly || state.saved.has(service.id)) && normalize(state.query).split(' ').filter(Boolean).every(word => haystack.includes(word));
  }
  function saveButton(service) {
    const saved = state.saved.has(service.id);
    return '<button type="button" class="save-button'+(saved?' is-saved':'')+'" data-save="'+service.id+'" aria-pressed="'+saved+'" aria-label="'+escape((saved?'Unsave ':'Save ')+service.name)+'" title="'+(saved?'Remove from saved':'Save this service')+'">'+auIcon('star')+'</button>';
  }
  function uniqueLinks(variants) {
    const links = [];
    variants.forEach(v => v.links.forEach(l => {
      if (!links.some(existing => existing.url === l.url)) links.push({...l,audience:v.audience});
    }));
    // The Accommodations login stays the primary action; first-time applications remain available.
    const login = links.findIndex(l => /^(login|alvernia.edu email)$/i.test(l.label));
    if (login > 0) links.unshift(...links.splice(login,1));
    return links;
  }
  function linkLabel(link, service, index, links) {
    if (service.id === 'bookstore') return link.audience === 'Students' ? 'Student bookstore' : 'Faculty textbook adoptions';
    if (index === 0 && link.label === 'Login') return 'Open ' + service.name;
    if (link.label === 'Alvernia.edu email') return 'Sign in with Alvernia email';
    if (link.label === 'Login' && links.length > 1) return badge(link.audience) + ' login';
    return link.label;
  }
  function card(service, variants) {
    const links = uniqueLinks(variants);
    const primary = links[0];
    const audiences = [...new Set(variants.map(v=>badge(v.audience)))].join(' · ');
    const categoryClass = service.category.toLowerCase().replace(/ /g,'-');
    return '<article class="service-card '+categoryClass+'" data-service="'+service.id+'"><div class="card-top"><span class="service-icon">'+auIcon(service.icon)+'</span>'+saveButton(service)+'</div><div class="card-info"><span class="audience-badge">'+escape(audiences)+'</span><h3>'+escape(service.name)+'</h3><p>'+escape(service.description)+'</p></div><div class="card-actions"><a class="primary-link" href="'+escape(primary.url)+'">'+escape(linkLabel(primary,service,0,links)) + auIcon('arrow')+'</a>'+(links.length>1?'<div class="secondary-links">'+links.slice(1).map((l,i)=>'<a href="'+escape(l.url)+'">'+escape(linkLabel(l,service,i+1,links))+'</a>').join('')+'</div>':'')+'</div></article>';
  }
  function renderQuick() {
    const filtered = state.query.trim() || state.category !== 'all' || state.savedOnly;
    $('quick-section').hidden = Boolean(filtered);
    $('quick-links').innerHTML = quickIds.map(id=>data.find(s=>s.id===id)).filter(s=>visibleVariants(s).length).map(service=>{
      const link=uniqueLinks(visibleVariants(service))[0];
      return '<a class="quick-card" href="'+escape(link.url)+'"><span class="quick-icon">'+auIcon(service.icon)+'</span><span><strong>'+escape(service.name)+'</strong><small>'+quickCaptions[service.id]+'</small></span>'+auIcon('arrow','quick-arrow')+'</a>';
    }).join('');
  }
  function updateSaveCounts() {
    $('saved-count').textContent = state.saved.size;
    $('saved-filter').setAttribute('aria-pressed',String(state.savedOnly));
  }
  function render() {
    const matched=sorted.filter(matches);
    let count=0;
    if (classic) {
      const audiences = state.audience === 'all' ? ['Students','Faculty/Staff'] : [state.audience];
      $('service-results').innerHTML = '<div class="classic-groups'+(audiences.length===1?' single-group':'')+'">'+audiences.map(audience=>{
        const items=matched.filter(s=>s.variants.some(v=>v.audience===audience));
        count+=items.length;
        if (!items.length) return '';
        return '<section class="audience-section" aria-label="'+escape(badge(audience))+' services"><div class="group-heading"><span>'+auIcon(audience==='Students'?'cap':'users')+'<h3>'+badge(audience)+'</h3></span><small>'+items.length+' services</small></div><div class="group-cards">'+items.map(s=>card(s,s.variants.filter(v=>v.audience===audience))).join('')+'</div></section>';
      }).join('')+'</div>';
    } else {
      count=matched.length;
      $('service-results').innerHTML='<div class="service-grid">'+matched.map(s=>card(s,visibleVariants(s))).join('')+'</div>';
    }
    $('result-count').textContent=count+' '+(classic?(count===1?'listing':'listings'):(count===1?'service':'services'))+(state.audience==='all'?' for everyone':' for '+badge(state.audience).toLowerCase());
    $('empty-state').hidden=Boolean(count);
    $('empty-title').textContent=state.savedOnly && !state.saved.size ? (classic ? 'No saved services' : 'Your shortcuts start here.') : 'No services found';
    $('empty-description').textContent=state.savedOnly && !state.saved.size ? 'Select the star on any service to keep it close at hand.' : 'Try another search or clear your filters to explore all services.';
    updateSaveCounts(); renderQuick();
  }
  function reset() {
    state.query='';state.audience='all';state.category='all';state.savedOnly=false;
    $('service-search').value='';$('category').value='all';
    document.querySelectorAll('[data-audience]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.audience==='all')));
    render();
  }
  $('service-search').addEventListener('input',e=>{state.query=e.target.value;render();});
  $('category').addEventListener('change',e=>{state.category=e.target.value;render();});
  document.querySelectorAll('[data-audience]').forEach(b=>b.addEventListener('click',()=>{
    state.audience=b.dataset.audience;
    document.querySelectorAll('[data-audience]').forEach(other=>other.setAttribute('aria-pressed',String(other===b)));
    render();
  }));
  $('saved-filter').addEventListener('click',()=>{state.savedOnly=!state.savedOnly;render();});
  $('clear-filters').addEventListener('click',reset);
  $('empty-clear').addEventListener('click',()=>{reset();$('service-search').focus();});
  $('service-results').addEventListener('click',event=>{
    const button=event.target.closest('[data-save]'); if(!button) return;
    const id=button.dataset.save;
    state.saved.has(id)?state.saved.delete(id):state.saved.add(id);
    try {localStorage.setItem(storageKey,JSON.stringify([...state.saved]));}catch{storageAvailable=false;storageMessage();}
    const service=data.find(s=>s.id===id), saved=state.saved.has(id);
    // Preserve focus and avoid rebuilding every card when simply toggling a star.
    document.querySelectorAll('[data-save="'+id+'"]').forEach(b=>{
      b.classList.toggle('is-saved',saved);b.setAttribute('aria-pressed',String(saved));
      b.setAttribute('aria-label',(saved?'Unsave ':'Save ')+service.name);
      b.title=saved?'Remove from saved':'Save this service';
    });
    updateSaveCounts();
    $('save-status').textContent=service.name+(saved?' saved.':' removed from saved.');
    if(state.savedOnly) {
      const remaining=[...document.querySelectorAll('[data-save]')].filter(b=>b.dataset.save!==id).map(b=>b.dataset.save);
      render();
      const next=document.querySelector('[data-save="'+remaining[0]+'"]');
      (next||$('saved-filter')).focus();
    }
  });
  document.addEventListener('keydown',event=>{
    const editing=/INPUT|TEXTAREA|SELECT/.test(event.target.tagName)||event.target.isContentEditable;
    if(event.key==='/'&&!editing&&!event.metaKey&&!event.ctrlKey&&!event.altKey){event.preventDefault();$('service-search').focus();}
  });
  render();
})();
