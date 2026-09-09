/* Forma connector v2. Install with data-editor="https://your-cms.vercel.app". */
(() => {
  'use strict';
  const script = document.currentScript;
  const editorOrigin = script?.dataset.editor
    ? new URL(script.dataset.editor).origin
    : location.origin;
  const contentUrl = script?.dataset.content;
  const editing = window.parent !== window;
  let publishedState = null;
  let contentReady = !contentUrl;
  const channel = 'forma-cms-v1';
  let active = false,
    preview = false,
    selected = null;
  const properties = [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'fontStyle',
    'lineHeight',
    'letterSpacing',
    'textAlign',
    'color',
    'backgroundColor',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'width',
    'maxWidth',
    'minHeight',
    'height',
    'display',
    'gap',
    'gridTemplateColumns',
    'alignItems',
    'justifyContent',
    'flexDirection',
    'opacity',
    'objectFit',
  ];
  const records = new Map();
  const selector =
    'header,nav,main,section,article,footer,div,h1,h2,h3,h4,p,a,button,img,span,ul,li,figure,figcaption,svg';
  const send = (type, payload = {}) => {
    if (editing && active)
      parent.postMessage({ channel, type, ...payload }, editorOrigin);
  };
  const safeUrl = (value, image = false) => {
    try {
      const u = new URL(value, location.href);
      return (
        ['https:', 'http:'].includes(u.protocol) ||
        (!image && ['mailto:', 'tel:'].includes(u.protocol)) ||
        (!image && value.startsWith('#')) ||
        (image && /^data:image\/(png|jpeg|webp|gif);base64,/.test(value))
      );
    } catch {
      return false;
    }
  };
  const leaf = (el) =>
    el.tagName.toLowerCase() !== 'svg' &&
    !el.children.length &&
    !['IMG', 'INPUT', 'TEXTAREA'].includes(el.tagName);
  function capture() {
    let index = 0;
    document.body.querySelectorAll(selector).forEach((el) => {
      if (el.closest('[data-cms-ignore]')) return;
      let id = el.getAttribute('data-cms-id') || el.id || `forma-${++index}`;
      while (records.has(id)) id = `forma-${++index}`;
      el.setAttribute('data-cms-id', id);
      records.set(id, {
        el,
        style: el.getAttribute('style'),
        text: leaf(el) ? el.textContent : null,
        href: el.getAttribute('href'),
        src: el.getAttribute('src'),
        srcset: el.getAttribute('srcset'),
        alt: el.getAttribute('alt'),
        svgAttrs: Object.fromEntries(
          ['viewBox', 'fill', 'stroke', 'stroke-width'].map((a) => [
            a,
            el.getAttribute(a),
          ]),
        ),
        children: [...el.childNodes],
      });
    });
  }
  function info(id) {
    const r = records.get(id);
    if (!r) return null;
    const el = r.el,
      css = getComputedStyle(el),
      styles = {};
    properties.forEach((p) => (styles[p] = css[p]));
    let p = el.parentElement;
    while (p && !records.has(p.dataset.cmsId)) p = p.parentElement;
    return {
      id,
      parent: p?.dataset.cmsId || null,
      tag: el.tagName.toLowerCase(),
      name:
        el.dataset.cmsName ||
        (el.tagName === 'IMG'
          ? el.getAttribute('alt') || 'Imagen'
          : r.text !== null
            ? el.textContent.trim().slice(0, 44)
            : {
                HEADER: 'Cabecera',
                NAV: 'Navegación',
                MAIN: 'Página',
                SECTION: 'Sección',
                FOOTER: 'Pie de página',
                DIV: 'Contenedor',
              }[el.tagName] || el.tagName.toLowerCase()),
      text: r.text !== null ? el.textContent : null,
      href: el.getAttribute('href'),
      src: el.getAttribute('src'),
      alt: el.getAttribute('alt'),
      styles,
      hidden: css.display === 'none',
    };
  }
  function tree() {
    return [...document.body.querySelectorAll('[data-cms-id]')]
      .filter((el) => records.has(el.dataset.cmsId))
      .map((el) => info(el.dataset.cmsId));
  }
  function select(id, scroll = false) {
    records.forEach((r) => r.el.removeAttribute('data-cms-selected'));
    selected = records.has(id) ? id : null;
    if (selected && !preview) {
      const el = records.get(id).el;
      el.setAttribute('data-cms-selected', '');
      if (scroll) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    send('selection', { node: info(selected) });
  }
  const attr = (el, name, value) =>
    value === null ? el.removeAttribute(name) : el.setAttribute(name, value);
  function apply(state) {
    if (!state || typeof state !== 'object') return;
    records.forEach((r) => {
      attr(r.el, 'style', r.style);
      if (r.text !== null) r.el.textContent = r.text;
      else r.el.replaceChildren(...r.children);
      if (r.el.tagName.toLowerCase() === 'svg')
        Object.entries(r.svgAttrs).forEach(([k, v]) => attr(r.el, k, v));
      ['href', 'src', 'srcset', 'alt'].forEach((k) => attr(r.el, k, r[k]));
    });
    for (const [id, patch] of Object.entries(state.patches || {})) {
      const r = records.get(id);
      if (!r || !patch || typeof patch !== 'object') continue;
      if (typeof patch.text === 'string' && r.text !== null)
        r.el.textContent = patch.text.slice(0, 50000);
      if (
        typeof patch.href === 'string' &&
        r.el.tagName === 'A' &&
        safeUrl(patch.href)
      )
        r.el.setAttribute('href', patch.href);
      if (
        typeof patch.src === 'string' &&
        r.el.tagName === 'IMG' &&
        safeUrl(patch.src, true)
      ) {
        r.el.setAttribute('src', patch.src);
        r.el.removeAttribute('srcset');
      }
      if (
        r.el.tagName.toLowerCase() === 'svg' &&
        typeof patch.icon === 'string'
      ) {
        const icons = {
          'arrow-up-right': 'M7 17 17 7M7 7h10v10',
          'arrow-right': 'M5 12h14m-6-6 6 6-6 6',
          check: 'm5 12 4 4L19 6',
          plus: 'M12 5v14M5 12h14',
          star: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z',
          heart:
            'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
        };
        if (Object.hasOwn(icons, patch.icon)) {
          const path = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path',
          );
          path.setAttribute('d', icons[patch.icon]);
          r.el.replaceChildren(path);
          r.el.setAttribute('viewBox', '0 0 24 24');
          r.el.setAttribute('fill', 'none');
          r.el.setAttribute('stroke', 'currentColor');
          r.el.setAttribute('stroke-width', '1.8');
        }
      }
      if (typeof patch.alt === 'string' && r.el.tagName === 'IMG')
        r.el.setAttribute('alt', patch.alt);
      for (const [key, value] of Object.entries(patch.styles || {}))
        if (
          properties.includes(key) &&
          typeof value === 'string' &&
          value.length < 500 &&
          !/url\s*\(|expression|@import/i.test(value)
        )
          r.el.style[key] = value;
    }
    for (const [parentId, ids] of Object.entries(state.orders || {})) {
      const p = records.get(parentId)?.el;
      if (p && Array.isArray(ids))
        ids.forEach((id) => {
          const c = records.get(id)?.el;
          if (c?.parentElement === p) p.appendChild(c);
        });
    }
    if (active) {
      select(selected);
      send('tree', { nodes: tree() });
    }
  }
  function onClick(e) {
    if (!active || preview) return;
    const el = e.target.closest?.('[data-cms-id]');
    e.preventDefault();
    e.stopImmediatePropagation();
    if (el) select(el.dataset.cmsId);
  }
  function start() {
    capture();
    const highlight = document.createElement('style');
    highlight.dataset.cmsOverlay = '';
    highlight.textContent =
      'html[data-cms-editing] [data-cms-id]:hover{outline:1px dashed #8b74ee;outline-offset:3px;cursor:default}html[data-cms-editing] [data-cms-selected]{outline:2px solid #8063e6!important;outline-offset:5px}html[data-cms-editing] [contenteditable=true]{cursor:text!important}';
    document.head.appendChild(highlight);
    document.addEventListener('click', onClick, true);
    document.addEventListener(
      'submit',
      (e) => {
        if (active && !preview) e.preventDefault();
      },
      true,
    );
    document.addEventListener('dblclick', (e) => {
      if (!active || preview) return;
      const el = e.target.closest?.('[data-cms-id]');
      if (!el || !leaf(el)) return;
      e.preventDefault();
      el.contentEditable = 'plaintext-only';
      el.focus();
      el.addEventListener(
        'blur',
        () => {
          el.removeAttribute('contenteditable');
          send('text-change', { id: el.dataset.cmsId, text: el.textContent });
        },
        { once: true },
      );
    });
    document.addEventListener('keydown', (e) => {
      if (!active) return;
      const inText =
        e.target.isContentEditable ||
        /INPUT|TEXTAREA|SELECT/.test(e.target.tagName);
      if (inText) {
        if (e.key === 'Escape') e.target.blur();
        return;
      }
      if (
        (e.ctrlKey || e.metaKey) &&
        ['z', 'y', 's'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        send('shortcut', { key: e.key.toLowerCase(), shift: e.shiftKey });
      }
    });
    window.addEventListener('message', (e) => {
      if (
        e.source !== parent ||
        e.origin !== editorOrigin ||
        e.data?.channel !== channel
      )
        return;
      const m = e.data;
      if (m.type === 'hello') {
        if (!contentReady) return;
        active = true;
        document.documentElement.toggleAttribute('data-cms-editing', !preview);
        send('ready', { nodes: tree(), title: document.title, publishedState });
        return;
      }
      if (!active) return;
      if (m.type === 'apply') apply(m.state);
      if (m.type === 'select') select(m.id, m.scroll !== false);
      if (m.type === 'preview') {
        preview = !!m.value;
        document.documentElement.toggleAttribute('data-cms-editing', !preview);
        select(selected);
      }
      if (m.type === 'export-html') {
        const clone = document.documentElement.cloneNode(true);
        clone.removeAttribute('data-cms-editing');
        clone
          .querySelectorAll('[data-cms-selected],[contenteditable]')
          .forEach((el) => {
            el.removeAttribute('data-cms-selected');
            el.removeAttribute('contenteditable');
          });
        clone
          .querySelectorAll('[data-cms-overlay],script[src*="visual-cms.js"]')
          .forEach((el) => el.remove());
        const base = document.createElement('base');
        base.href = location.href;
        clone.querySelector('head').prepend(base);
        send('html', { html: '<!doctype html>\n' + clone.outerHTML });
      }
    });
    // Load the published baseline before answering the editor handshake.
    if (contentUrl)
      fetch(new URL(contentUrl, location.href), {
        signal: AbortSignal.timeout(6000),
        cache: 'no-cache',
      })
        .then((r) => {
          if (!r.ok) throw new Error('Content unavailable');
          return r.json();
        })
        .then((data) => {
          publishedState =
            data.version === 2
              ? data.pages?.[location.pathname] || null
              : data.version === 1 &&
                  (!data.path || data.path === location.pathname)
                ? data.state
                : null;
          if (publishedState && !active) apply(publishedState);
        })
        .catch(() => {})
        .finally(() => {
          contentReady = true;
        });
  }
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
