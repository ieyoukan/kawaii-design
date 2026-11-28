/*
  kawaii-design: glitter helper (no dependencies, no animation)

  Glitter like cosmetics: a pressed glitter eyeshadow, glitter nail polish,
  the lid of a makeup case. White, silver, or the colors of the page. Two looks:

    'rim'    glitter gathers at the edge of a piece and fades gradually toward
             the middle. A little dust spills past the edge, so the edge never
             reads as a hard line.
    'dense'  packed, opaque glitter over the whole piece, like a glitter pan.

  The textures are drawn once and reused, so it stays light. Nothing moves.

  Usage:
    <script src="kawaii-glitter.js"></script>
    kawaiiGlitter(card);                         // 'rim', white
    kawaiiGlitter(button, { mode: 'dense' });    // packed silver

  Options:
    mode    'rim' (default) or 'dense'
    tone    'white' (default for 'rim'), 'silver' (default for 'dense'),
            one color '#rrggbb', or a list of them from the page palette.
            A color becomes flakes in light, true and deep shades of it, plus white
    depth   how far rim glitter reaches toward the middle (px).
            Default: 35% of the shorter side, up to 72px
    spill   how far dust spills past the edge (px). Default 6. 0 keeps it inside
    amount  overall strength of rim glitter, 0 to 1. Default 0.9
*/
(function () {
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const cache = {};

  const TONES = {
    white: ['#ffffff', '#ffffff', '#f7f8fb', '#eceef4', '#dfe2ea'],
    silver: ['#ffffff', '#eef0f4', '#d9dce3', '#c3c6ce', '#aeb1ba', '#9a9da7'],
  };

  const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const mixTo = ([r, g, b], t, c) => `rgb(${Math.round(r + (c - r) * t)} ${Math.round(g + (c - g) * t)} ${Math.round(b + (c - b) * t)})`;

  // Flake colors, a bevel color and a base color for the packed glitter.
  function palette(tone) {
    if (TONES[tone]) {
      return {
        flakes: TONES[tone],
        bevel: tone === 'white' ? 'rgb(150 160 185 / 0.45)' : 'rgb(110 116 135 / 0.5)',
        base: tone === 'white' ? '#e4e6ec' : '#b4b7c0',
      };
    }
    const list = [].concat(tone).map(rgb);
    const flakes = [];
    list.forEach((c) => flakes.push(mixTo(c, 0, 0), mixTo(c, 0, 0), mixTo(c, 0.45, 255), mixTo(c, 0.22, 0)));
    flakes.push('#ffffff');
    return { flakes, bevel: mixTo(list[0], 0.55, 0).replace(')', ' / 0.4)'), base: mixTo(list[0], 0.12, 0) };
  }

  function tile(size, draw) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = size;
    const ctx = cv.getContext('2d');
    // Draw each flake at its wrapped positions too, so the tile repeats without seams.
    const wrap = (fn) => {
      for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
        ctx.save(); ctx.translate(ox, oy); fn(); ctx.restore();
      }
    };
    draw(ctx, size, wrap);
    return `url(${cv.toDataURL()})`;
  }

  function shard(ctx, x, y, r) {              // an irregular flat flake
    const n = 4 + ((rnd() * 3) | 0), a0 = rnd() * Math.PI * 2;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = a0 + (i / n) * Math.PI * 2, rr = r * (0.65 + rnd() * 0.45);
      ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    ctx.fill();
  }

  function hex(ctx, x, y, r) {                // a cut glitter hexagon
    const a0 = rnd() * Math.PI;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = a0 + i * Math.PI / 3;
      ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r, y + Math.sin(a) * r);
    }
    ctx.fill();
  }

  // Scattered flakes on transparent, for the rim. Each larger flake gets a thin
  // bevel underneath, so white glitter still reads on white glass without gray dots.
  function scattered(tone) {
    const key = 's' + JSON.stringify(tone);
    if (cache[key]) return cache[key];
    const { flakes: colors, bevel } = palette(tone);
    return (cache[key] = tile(160, (ctx, s, wrap) => {
      for (let n = 0; n < 460; n++) {
        const x = rnd() * s, y = rnd() * s, roll = rnd();
        const r = roll < 0.72 ? 0.5 + rnd() * 0.6 : roll < 0.95 ? 1.3 + rnd() * 0.9 : 2.4 + rnd();
        const c = colors[(rnd() * colors.length) | 0];
        const isHex = rnd() < 0.55;
        const sd = seed;                                // same shape for the bevel and the flake
        wrap(() => {
          if (r < 1.1) {
            ctx.globalAlpha = 0.9; ctx.fillStyle = c;
            ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
            return;
          }
          const draw = (dx, dy) => { seed = sd; isHex ? hex(ctx, x + dx, y + dy, r) : shard(ctx, x + dx, y + dy, r); };
          ctx.globalAlpha = 1;
          ctx.fillStyle = bevel; draw(0.45, 0.6);
          ctx.fillStyle = c; draw(0, 0);
          ctx.fillStyle = '#ffffff'; ctx.globalAlpha = 0.95;   // the facet catching light
          ctx.beginPath(); ctx.arc(x - r * 0.25, y - r * 0.25, Math.max(0.5, r * 0.3), 0, 7); ctx.fill();
        });
      }
    }));
  }

  // Packed, opaque glitter, for 'dense'.
  function packed(tone) {
    const key = 'p' + JSON.stringify(tone);
    if (cache[key]) return cache[key];
    const { flakes: colors, base } = palette(tone);
    return (cache[key] = tile(220, (ctx, s, wrap) => {
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, s, s);
      for (let n = 0; n < 1900; n++) {              // the packed layer of shards
        const x = rnd() * s, y = rnd() * s, r = 2 + rnd() * 4.2;
        const c = colors[(rnd() * colors.length) | 0];
        wrap(() => { ctx.globalAlpha = 0.9; ctx.fillStyle = c; shard(ctx, x, y, r); });
      }
      for (let n = 0; n < 55; n++) {                // bright hexagons catching the light
        const x = rnd() * s, y = rnd() * s, r = 3 + rnd() * 4;
        wrap(() => {
          const g = ctx.createRadialGradient(x, y, 0, x, y, r * 2.2);
          g.addColorStop(0, 'rgb(255 255 255 / 0.7)');
          g.addColorStop(1, 'rgb(255 255 255 / 0)');
          ctx.globalAlpha = 1; ctx.fillStyle = g;
          ctx.fillRect(x - r * 2.2, y - r * 2.2, r * 4.4, r * 4.4);
          ctx.fillStyle = '#ffffff';
          hex(ctx, x, y, r);
        });
      }
    }));
  }

  // The rim mask: opaque at the edge, easing out toward the middle, and a short fade
  // outside the edge for the spilled dust.
  function rimMask(w, h, radius, depth, spill, amount) {
    const W0 = w + spill * 2, H0 = h + spill * 2;
    const k = Math.min(1, 300 / Math.max(W0, H0));
    const W = Math.max(2, Math.round(W0 * k)), H = Math.max(2, Math.round(H0 * k));
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(W, H), d = img.data;
    const hx = w / 2, hy = h / 2, r = Math.min(radius, hx, hy);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        // signed distance to the piece's rounded edge, positive inside
        const px = (x + 0.5) / k - spill - hx, py = (y + 0.5) / k - spill - hy;
        const qx = Math.abs(px) - (hx - r), qy = Math.abs(py) - (hy - r);
        const out = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
        const inset = -out;
        let a;
        if (inset >= 0) {
          const t = Math.max(0, 1 - inset / depth);
          a = t * t * (3 - 2 * t);                    // smooth, no line where it ends
        } else {
          const t = spill > 0 ? Math.max(0, 1 + inset / spill) : 0;
          a = t * t * 0.8;
        }
        const i = (y * W + x) * 4;
        d[i] = d[i + 1] = d[i + 2] = 0;
        d[i + 3] = 255 * a * amount;
      }
    }
    ctx.putImageData(img, 0, 0);
    return `url(${cv.toDataURL()})`;
  }

  window.kawaiiGlitter = function (el, opts = {}) {
    const mode = opts.mode || 'rim';
    const o = Object.assign({
      tone: mode === 'dense' ? 'silver' : 'white', depth: null, spill: 6, amount: 0.9,
    }, opts);

    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.style.isolation = 'isolate';
    const layer = document.createElement('span');
    layer.setAttribute('aria-hidden', 'true');
    Object.assign(layer.style, { position: 'absolute', zIndex: '-1', pointerEvents: 'none' });
    el.prepend(layer);

    function apply() {
      const b = el.getBoundingClientRect();
      const w = Math.max(1, Math.round(b.width)), h = Math.max(1, Math.round(b.height));
      const css = getComputedStyle(el).borderTopLeftRadius, r0 = parseFloat(css) || 0;
      const radius = Math.min(css.endsWith('%') ? r0 / 100 * Math.min(w, h) : r0, Math.min(w, h) / 2);
      if (mode === 'dense') {
        Object.assign(layer.style, { inset: '0', borderRadius: radius + 'px', backgroundImage: packed(o.tone) });
        return;
      }
      const spill = Math.max(0, o.spill);
      const depth = o.depth != null ? o.depth : Math.min(72, Math.min(w, h) * 0.35);
      const mask = rimMask(w, h, radius, Math.max(4, depth), spill, o.amount);
      Object.assign(layer.style, {
        inset: -spill + 'px', borderRadius: radius + spill + 'px',
        backgroundImage: scattered(o.tone),
        webkitMaskImage: mask, maskImage: mask,
        webkitMaskSize: '100% 100%', maskSize: '100% 100%',
      });
    }

    const size = () => { const b = el.getBoundingClientRect(); return Math.round(b.width) + 'x' + Math.round(b.height); };
    let last = size();
    apply();
    const ro = new ResizeObserver(() => { const k = size(); if (k !== last) { last = k; apply(); } });
    ro.observe(el);

    return {
      refresh: apply,
      destroy() { ro.disconnect(); layer.remove(); },
    };
  };
})();
