/*
  kawaii-design: candy glass helper (no dependencies)

  Refraction for a few pieces of glass chrome:
  - The rim stretches what is behind it, all the way around, and leans a
    little toward the page palette. The middle stays clear and still.
  - A faint prism fringe at the very edge.

  It costs more than frosted glass: the browser re-filters each piece on
  every frame while the page scrolls. Use it only when the user asks for
  Liquid Glass or refraction, and only on a few pieces (a header, a nav,
  a couple of buttons), never on every card of a long feed. Everything else
  stays plain frosted glass (backdrop-filter: blur()).

  The refraction needs a Chromium browser. Elsewhere it falls back to a
  frosted blur. For glitter, see kawaii-glitter.js.

  Usage:
    <script src="kawaii-glass.js"></script>
    document.querySelectorAll('.liquid').forEach(el => kawaiiGlass(el, { tint: [...] }));

  Works on rounded rectangles, capsules and circles (border-radius in px or %).

  Options:
    bend      how far the rim reaches inward for what it shows (px).
              Equal to rim: a clean stretch. Larger: a lens-like flip at the edge
    rim       width of the stretched band (px). Default: 22% of the shorter side, 10 to 30px
    tint      colors the rim leans toward, going around the glass (top, right,
              bottom, left). Take them from the page palette
    tintAmount   how far the rim leans toward the tint. 0 keeps the real colors
    rimSaturate  extra saturation inside the rim
    prism     extra bend per color channel, for the rainbow fringe (px). 0 turns it off
    blur      backdrop blur inside the glass (px). 0 keeps the middle sharp.
              Chromium blurs strongly, so 1 already reads as frosted
    saturate  backdrop saturation

  Returns { supported, refresh(), destroy() }.
*/
(function () {
  const refracts = !!window.chrome && CSS.supports('backdrop-filter', 'url(#a)');
  const NS = 'http://www.w3.org/2000/svg';
  let uid = 0;

  /* ---------- the rim map ----------
     One pixel per point of the glass. R and B say where to look (128 = here):
     inside the rim band they point inward along the surface, so the rim shows
     what lies a little further in, stretched out to the edge. G says how deep
     into the band the point is, and drives the rim's color shift. */
  function rimMap(w, h, radius, rim, bend) {
    const k = Math.min(1, 360 / Math.max(w, h));
    const W = Math.max(2, Math.round(w * k)), H = Math.max(2, Math.round(h * k));
    const band = Math.max(1, rim * k);
    const r = Math.min(Math.max(radius, rim) * k, Math.min(W, H) / 2);
    const reach = bend / (2 * bend + 1e-6);          // 0.5 at most: the filter scale is 2 * bend
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(W, H), d = img.data;
    const hx = W / 2, hy = H / 2;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const px = x + 0.5 - hx, py = y + 0.5 - hy;
        const qx = Math.abs(px) - (hx - r), qy = Math.abs(py) - (hy - r);
        let inset, nx, ny;
        if (qx > 0 && qy > 0) {
          const l = Math.hypot(qx, qy) || 1;
          inset = r - l; nx = qx / l; ny = qy / l;
        } else if (qx > qy) {
          inset = r - qx; nx = 1; ny = 0;
        } else {
          inset = r - qy; nx = 0; ny = 1;
        }
        if (px < 0) nx = -nx;
        if (py < 0) ny = -ny;
        const t = Math.min(1, Math.max(0, 1 - inset / band));
        const i = (y * W + x) * 4;
        // Ease in, so the band starts without a crease and stretches most at the edge.
        const m = t * t * (1.6 - 0.6 * t) * reach * 2;
        d[i] = 128 - nx * m * 127;
        d[i + 1] = 255 * t * t * (3 - 2 * t);
        d[i + 2] = 128 - ny * m * 127;
        d[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return cv.toDataURL();
  }

  // The rim's color: a soft ring of palette colors around the center.
  function tintMap(w, h, colors) {
    const k = Math.min(1, 160 / Math.max(w, h));
    const W = Math.max(2, Math.round(w * k)), H = Math.max(2, Math.round(h * k));
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    const list = [].concat(colors);
    if (list.length === 1 || !ctx.createConicGradient) {
      ctx.fillStyle = list[0];
    } else {
      const g = ctx.createConicGradient(-Math.PI / 2, W / 2, H / 2);
      list.concat(list[0]).forEach((c, i, all) => g.addColorStop(i / (all.length - 1), c));
      ctx.fillStyle = g;
    }
    ctx.fillRect(0, 0, W, H);
    return cv.toDataURL();
  }

  function bent(scale, keep, out) {
    const m = {
      r: '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0',
      g: '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0',
      b: '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0',
    }[keep];
    return `<feDisplacementMap in="SourceGraphic" in2="map" scale="${scale}" xChannelSelector="R" yChannelSelector="B" result="${out}d"/>` +
           `<feColorMatrix in="${out}d" type="matrix" values="${m}" result="${out}"/>`;
  }

  /* ---------- public ---------- */
  window.kawaiiGlass = function (el, opts = {}) {
    const o = Object.assign({
      rim: null, bend: null, prism: 3, blur: 0, saturate: 1.45,
      tint: ['#ffb3dc', '#d4c2ff', '#a9e4ff', '#d4c2ff'], tintAmount: 0.38, rimSaturate: 1.3,
    }, opts);
    // measured on every rebuild, so pieces that start hidden still get the right rim
    const rimOf = (w, h) => o.rim != null ? o.rim : Math.min(30, Math.max(10, Math.min(w, h) * 0.22));
    const id = 'kg' + (++uid);
    let svg = null;

    function apply() {
      if (!refracts) {
        el.style.backdropFilter = el.style.webkitBackdropFilter = `blur(14px) saturate(${o.saturate})`;
        return;
      }
      const box = el.getBoundingClientRect();
      const w = Math.max(1, Math.round(box.width)), h = Math.max(1, Math.round(box.height));
      const css = getComputedStyle(el).borderTopLeftRadius;
      const r0 = parseFloat(css) || 0;
      const radius = Math.min(css.endsWith('%') ? r0 / 100 * Math.min(w, h) : r0, Math.min(w, h) / 2);
      const rim = Math.max(1, Math.min(rimOf(w, h), Math.min(w, h) / 2 - 1));
      const bend = o.bend != null ? o.bend : rim * 1.6;
      const map = rimMap(w, h, radius, rim, bend);
      const s = 2 * bend;
      if (!svg) {
        svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
        svg.setAttribute('aria-hidden', 'true');
        svg.style.position = 'absolute';
        document.body.appendChild(svg);
      }
      svg.innerHTML =
        `<filter id="${id}" x="0" y="0" width="${w}" height="${h}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">` +
          `<feImage href="${map}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="map"/>` +
          (o.prism
            ? bent(s + o.prism * 2, 'r', 'r') + bent(s, 'g', 'g') + bent(s - o.prism * 2, 'b', 'b') +
              `<feBlend in="r" in2="g" mode="screen" result="rg"/><feBlend in="rg" in2="b" mode="screen" result="glass"/>`
            : `<feDisplacementMap in="SourceGraphic" in2="map" scale="${s}" xChannelSelector="R" yChannelSelector="B" result="glass"/>`) +
          // the rim's own color: the stretched light, leaning toward the palette
          `<feImage href="${tintMap(w, h, o.tint)}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="tint"/>` +
          `<feComposite in="glass" in2="tint" operator="arithmetic" k1="0" k2="${1 - o.tintAmount}" k3="${o.tintAmount}" k4="0" result="mix"/>` +
          `<feColorMatrix in="mix" type="saturate" values="${o.rimSaturate}" result="ms"/>` +
          `<feColorMatrix in="map" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 1 0 0 0" result="band"/>` +
          `<feComposite in="ms" in2="band" operator="in" result="rimColor"/>` +
          `<feComposite in="rimColor" in2="glass" operator="over"/>` +
        `</filter>`;
      el.style.backdropFilter = `url(#${id}) blur(${o.blur}px) saturate(${o.saturate})`;
    }

    const size = () => { const b = el.getBoundingClientRect(); return Math.round(b.width) + 'x' + Math.round(b.height); };
    let last = size();
    apply();
    const ro = new ResizeObserver(() => {           // rebuild the map only when the size really changes
      const key = size();
      if (key !== last) { last = key; apply(); }
    });
    ro.observe(el);

    return {
      supported: refracts,
      refresh: apply,
      destroy() {
        ro.disconnect();
        if (svg) svg.remove();
        el.style.backdropFilter = el.style.webkitBackdropFilter = '';
      },
    };
  };
})();
