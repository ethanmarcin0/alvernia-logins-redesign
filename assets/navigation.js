/* Local, progressively enhanced university navigation. No remote script or API. */
(() => {
  'use strict';
  const header = document.querySelector('.university-site-header');
  if (!header) return;
  const controls = document.getElementById('university-header-controls');
  const toggle = document.getElementById('university-menu-toggle');
  const menus = [...header.querySelectorAll('.university-dropdown')];
  const desktop = window.matchMedia('(min-width: 1300px)');
  const search = document.getElementById('university-link-search');
  const results = document.getElementById('university-find-results');
  const status = document.getElementById('university-find-status');
  const defaultLinks = [...results.querySelectorAll('a')].map(a => ({label:a.textContent.trim(),url:a.getAttribute('href')}));
  const normalize = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const targets = [];
  const add = target => {
    const existing = targets.find(item => item.url === target.url);
    if (existing) {
      existing.keywords = [existing.keywords || '', target.label, target.keywords || ''].join(' ');
    } else {
      targets.push({...target});
    }
  };
  header.querySelectorAll('.university-primary-nav a, .university-inquire-link').forEach(a => add({label:a.textContent.trim().replace(/\s*↗$/, ''),url:a.getAttribute('href'),keywords:''}));
  defaultLinks.forEach(add);
  (window.ALVERNIA_SERVICES || []).forEach(service => {
    service.variants.forEach(variant => variant.links.forEach(link => add({
      label:service.name+' — '+link.label,
      url:link.url,
      keywords:service.aliases+' '+service.description+' '+variant.audience
    })));
  });

  function closeMenus(except) {
    menus.forEach(menu => {if (menu !== except) menu.open = false;});
  }
  function closeMobile() {
    if (!desktop.matches) {
      controls.hidden = true;
      toggle.setAttribute('aria-expanded','false');
    }
  }
  function syncViewport() {
    const focused = document.activeElement;
    const focusInControls = controls.contains(focused);
    const focusOnToggle = focused === toggle;
    // Keep an active dropdown available when a visitor resizes the window.
    const activeMenu = menus.find(menu => menu.open);
    const showing = desktop.matches || Boolean(activeMenu);
    toggle.hidden = desktop.matches;
    controls.hidden = !showing;
    toggle.setAttribute('aria-expanded',String(!desktop.matches && showing));
    if (!desktop.matches && !showing && focusInControls) toggle.focus();
    if (desktop.matches && focusOnToggle) (activeMenu || menus[0]).querySelector('summary').focus();
  }
  toggle.addEventListener('click', () => {
    const opening = controls.hidden;
    controls.hidden = !opening;
    toggle.setAttribute('aria-expanded',String(opening));
    if (!opening) closeMenus();
  });
  menus.forEach(menu => {
    menu.addEventListener('toggle', () => {
      if (menu.open) closeMenus(menu);
    });
    const summary = menu.querySelector('summary');
    summary.addEventListener('keydown', event => {
      if (event.key !== 'ArrowDown') return;
      event.preventDefault();
      closeMenus(menu);
      menu.open = true;
      menu.querySelector('.university-dropdown-panel input, .university-dropdown-panel a')?.focus();
    });
  });
  document.addEventListener('pointerdown', event => {
    if (!header.contains(event.target)) {
      closeMenus();
      closeMobile();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openMenu = menus.find(menu => menu.open);
    if (openMenu) {
      event.preventDefault();
      const restore = openMenu.contains(document.activeElement);
      closeMenus();
      if (restore) openMenu.querySelector('summary').focus();
    } else if (!desktop.matches && !controls.hidden) {
      event.preventDefault();
      closeMobile();
      toggle.focus();
    }
  });
  header.addEventListener('focusout', event => {
    // Related target can be null while a browser menu is active: don't hide it then.
    const next = event.relatedTarget;
    const isControl = next instanceof HTMLElement && next.matches('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
    if (isControl && !header.contains(next)) {
      closeMenus();
      closeMobile();
    }
  });
  function renderSearch() {
    const words = normalize(search.value).split(' ').filter(Boolean);
    const matching = words.length ? targets.filter(target => {
      const text = normalize(target.label+' '+(target.keywords || ''));
      return words.every(word => text.includes(word));
    }) : defaultLinks;
    const visible = matching.slice(0,8);
    results.replaceChildren();
    visible.forEach(target => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = target.url;
      a.textContent = target.label;
      if (target.url === 'classic.html') a.setAttribute('aria-current','page');
      li.append(a);results.append(li);
    });
    if (!matching.length) {
      const li = document.createElement('li');
      li.className = 'university-find-empty';
      li.textContent = 'No matching links. Try another name, such as Canvas, email, or library.';
      results.append(li);
    }
    status.textContent = !words.length ? 'Popular links' : matching.length ?
      (matching.length > visible.length ? 'Showing '+visible.length+' of '+matching.length+' matching links.' : matching.length+' matching '+(matching.length===1?'link.':'links.')) : 'No matching links.';
  }
  search.addEventListener('input',renderSearch);
  desktop.addEventListener('change',syncViewport);
  syncViewport();
})();
