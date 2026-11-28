/*
  kawaii-design: liquid glass helper (no dependencies)

  Refracts what is behind an element at its rim, with a soft prism fringe,
  while keeping the middle readable. Chromium renders real refraction.
  Other browsers get a frosted blur.

  Usage:
    <script src="liquid-glass.js"></script>
    document.querySelectorAll('.liquid').forEach(el => liquidGlass(el));

  Options:
    strength  how far the rim bends the backdrop (px). 40 subtle, 70 default, 110 strong
    prism     extra bend per color channel, for the rainbow fringe. 0 turns it off
    rim       width of the bending band, as a fraction of the shorter side
    soften    blur of the bend (px). Small = sharp rim, large = dome
    blur      backdrop blur inside the glass (px)
    saturate  backdrop saturation
*/
(function () {
  const isChromium = !!window.chrome && CSS.supports('backdrop-filter', 'url(#a)');
  let count = 0;

  function buildMap(w, h, radius, rim, soften) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const x = c.getContext('2d');

    // Red encodes horizontal push, blue encodes vertical push. 128 is neutral.
    let g = x.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'rgb(0,0,0)'); g.addColorStop(1, 'rgb(255,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    x.globalCompositeOperation = 'lighter';
    g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgb(0,0,0)'); g.addColorStop(1, 'rgb(0,0,255)');
    x.fillStyle = g; x.fillRect(0, 0, w, h);

    // A neutral gray inset keeps the middle still, so refraction stays at the rim.
    x.globalCompositeOperation = 'source-over';
    x.filter = `blur(${soften}px)`;
    const inset = Math.min(w, h) * rim;
    x.fillStyle = 'rgb(128,128,128)';
    x.beginPath();
    x.roundRect(inset, inset, w - inset * 2, h - inset * 2, Math.max(radius - inset, 0));
    x.fill();
    return c.toDataURL();
  }

  function channel(id, map, scale, keep) {
    const m = {
      r: '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0',
      g: '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0',
      b: '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0',
    }[keep];
    return `<feDisplacementMap in="SourceGraphic" in2="${map}" scale="${scale}" xChannelSelector="R" yChannelSelector="B" result="${id}d"/>` +
           `<feColorMatrix in="${id}d" type="matrix" values="${m}" result="${id}"/>`;
  }

  window.liquidGlass = function (el, opts = {}) {
    const o = Object.assign({ strength: 70, prism: 5, rim: 0.12, soften: 10, blur: 2, saturate: 1.5 }, opts);
    const id = 'lg' + (++count);
    let svg = null;

    function apply() {
      if (!isChromium) {
        el.style.backdropFilter = el.style.webkitBackdropFilter = `blur(14px) saturate(${o.saturate})`;
        return;
      }
      const r = el.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
      const radius = Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, Math.min(w, h) / 2);
      const map = buildMap(w, h, radius, o.rim, o.soften);
      const s = -o.strength;
      if (svg) svg.remove();
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
      svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'absolute';
      svg.innerHTML =
        `<filter id="${id}" x="0" y="0" width="${w}" height="${h}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">` +
        `<feImage href="${map}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="map"/>` +
        channel('r', 'map', s - o.prism, 'r') +
        channel('g', 'map', s, 'g') +
        channel('b', 'map', s + o.prism, 'b') +
        `<feBlend in="r" in2="g" mode="screen" result="rg"/><feBlend in="rg" in2="b" mode="screen"/>` +
        `</filter>`;
      document.body.appendChild(svg);
      el.style.backdropFilter = `url(#${id}) blur(${o.blur}px) saturate(${o.saturate})`;
    }

    apply();
    const ro = new ResizeObserver(() => apply());
    ro.observe(el);
    return {
      supported: isChromium,
      refresh: apply,
      destroy() { ro.disconnect(); if (svg) svg.remove(); el.style.backdropFilter = ''; },
    };
  };
})();
