# Backgrounds and the star's image

## Atmosphere

Decide this in the direction. It depends on what the page should feel like, not on a rule. If the user names a style ("Liquid Glass っぽく", "シンプルに"), use that one. There are four options.

| Atmosphere | Feels | Background | Good for |
| --- | --- | --- | --- |
| **Simple** | clear, focused, graphic | White, or one flat pale tint taken from the star | A single strong character, chunky or chibi art, ポップ, ワントーン |
| **透明感** | airy, light, a little grown-up | One page-wide pastel gradient, very gentle | Dreamy illustration, 大人かわいい, beauty and fashion, pages with several colors in the art |
| **ゆめかわ** | dreamy, iridescent, rich | A complex multi-point pastel gradient (marble or bubbles) with glass UI on top | ゆめかわ, SNS and community apps, fan pages, music, anything asked for as 「ゆめかわいい」 |
| **Liquid Glass** | smooth, glossy, iridescent, fluid | The iridescent background behind refractive, glossy glass shapes | Modern apps and SNS, music, fan pages, anything asked for as 「Liquid Glass」「つるっと」「ぬるぬる動く」 |

A page in one flat color from top to bottom can feel dull. When the star has several colors (pink hair and a blue dress, for example), 透明感 often fits better than one-tone.

### Background images and patterns

- Look through the supplied assets for a background illustration, photo, or texture that fits the product. Check that its focal point survives wide and narrow crops and that it leaves a quiet area for text.
- If a missing background image would materially change the design, invite the user to share an appropriate asset. Describe the motif and the area that needs to stay quiet. Keep building with a local CSS pattern or plain tint so the missing image does not block the draft.
- If the design only needs texture, use a faint [pattern](shapes-and-patterns.md#patterns). Dots, gingham, and dashed checks can be drawn in CSS or inline SVG. Base the tint on the palette and leave faces, fine artwork, and reading areas clear.

### The 透明感 page gradient

One gradient covers the **whole page**: the container that holds every section, from top to bottom. Not each section, and not `background-attachment: fixed` on a single screen. Because it stretches over thousands of pixels, any single screen shows only a slight shift. It reads as air and light, not as "a gradient".

```css
.page {
  background: linear-gradient(168deg,
    #FCEEF7 0, #FFFFFF 10%, #E0F4F8 23%, #E6EFF9 41%,
    #FFF8FF 51%, #F7D8EC 65%, #F6EDF5 72%, #D9F2DB 100%);
}
```

Rules:

- Use only very pale colors, close to white (about 92 to 97% lightness). Mix pink, aqua, lavender, mint and plain white, and take the hues from the star where possible.
- Put a white or near-white stop between colored stops so the hues never meet directly.
- Use a slight diagonal (160 to 170deg), so the shift isn't a horizontal band.
- Keep soft color blends on the page background. CSS gradients with hard stops can draw dots and checks.
- Check text contrast at the most colored stop.
- Patterns and wave edges can sit on top of it.

### ゆめかわ background (iridescent, 虹色)

For the ゆめかわ dialect, or whenever the direction asks for something dreamy or rainbow-like, the background is the main source of color and must not be simple. It should look like holographic foil or iridescent film: colors that swirl into each other organically, with white light between them.

**Three rules:**

1. **White between the colors.** Hues never touch directly. Put white (or near-white) pools and bands between them, the way light catches on foil. Without white, it turns into a muddy rainbow.
2. **Never one straight gradient.** Combine radial pools from several points with a few soft linear bands at different angles, then let the result undulate: distort it with an SVG `feTurbulence` + `feDisplacementMap` filter, or layer large, blurred, rotated blobs. It should flow like marble or liquid, not run in straight stripes.
3. **The character's main color leads.** Decide the main hue from the character: an aqua character gets aqua, a pink one pink, a purple one lavender. By area, roughly:
   - main hue: 50 to 70%
   - one or two partner hues (for an aqua main, pink and lavender): 20 to 40%
   - small accents (lemon, mint, peach): under 10%
   - white light between them throughout

```css
/* Example: an aqua character */
body { background: #EEF8FC; }
.page { position: relative; isolation: isolate; }   /* keeps the layer behind the content */
.page::before {
  content: ""; position: fixed; inset: -10%; z-index: -1; pointer-events: none;
  background:
    radial-gradient(38% 30% at 18% 22%, #A9E3F5 0%, transparent 70%),   /* main: aqua */
    radial-gradient(42% 34% at 78% 30%, #BFE9F7 0%, transparent 72%),   /* main */
    radial-gradient(36% 30% at 60% 78%, #9FD8F2 0%, transparent 70%),   /* main */
    radial-gradient(24% 20% at 38% 55%, #FFFFFF 0%, transparent 70%),   /* white light */
    radial-gradient(22% 18% at 88% 70%, #F7C8E4 0%, transparent 70%),   /* partner: pink */
    radial-gradient(22% 18% at 10% 75%, #D6C8F6 0%, transparent 70%),   /* partner: lavender */
    radial-gradient(12% 10% at 52% 18%, #FFF3B8 0%, transparent 70%),   /* accent: lemon */
    linear-gradient(118deg, transparent 30%, #FFFFFF 42%, transparent 54%),            /* light band */
    linear-gradient(28deg, transparent 55%, rgb(247 200 228 / .5) 64%, transparent 74%); /* pink band */
  filter: url(#swirl) blur(6px);
}
```

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="swirl">
    <feTurbulence type="fractalNoise" baseFrequency="0.004 0.007" numOctaves="2" seed="7"/>
    <feDisplacementMap in="SourceGraphic" scale="120"/>
  </filter>
</svg>
```

- Check the area ratio at thumbnail size. If the partner hues dominate, the character's color is lost.
- Sparkles: a few tiny white dots or four-point stars on top, at low density. Not a polka-dot wallpaper.
- Accents in the same foil: glossy bubbles, balloons, curled ribbons and stars, used in a few places around the edges.
- Display lettering (the logo, a big title) may use the same iridescent foil, with a white sticker edge so it stays readable. Body text stays solid.
- Die-cut sticker labels (white edge, soft shadow) suit this world for small buttons and badges.
- This replaces the page-wide 透明感 gradient. Don't stack both.
- Reference: "An iridescent, aqua-led anniversary site" in [refs.md](refs.md).

### Glass UI

```css
.glass {
  background: rgb(255 255 255 / 0.55);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border: 1px solid rgb(255 255 255 / 0.7);       /* the glass edge, not a dividing border */
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.8),          /* top highlight */
    0 12px 32px rgb(150 120 200 / 0.18);           /* soft colored shadow */
  border-radius: 24px;
}
```

- The thin white edge is part of the glass material, so it is allowed even though the skill otherwise avoids borders.
- Raise the white to 65 to 75% behind long text. Lower it to 35 to 45% for small floating elements.
- Buttons: a more opaque glass pill, or a solid pastel pill from the palette with white text only if the contrast passes. An iridescent rim (a thin pink-to-aqua gradient border) is a nice accent for the one primary button.
- Provide a fallback for browsers without `backdrop-filter`: a more opaque white.

### Liquid Glass

Glossy glass that bends what is behind it at its rim, with a soft prism fringe, over a colorful background. Plain liquid glass looks cool and techy. Make it kawaii with color: a pastel gradient tint in the glass, iridescent rims and a colorful background for it to bend.

**Where to use it**: the UI chrome, not the content. The header (often floating as a capsule), cards, the footer and buttons. Long text sits inside the glass, where it stays readable.

**How**: use the helper in [liquid-glass.js](liquid-glass.js). Copy it next to the page and call it on each glass element. It builds a displacement map for the element's size, bends the backdrop only in a band at the rim (the middle stays still), splits the bend per color channel for the prism fringe, and falls back to a frosted blur outside Chromium.

```html
<script src="liquid-glass.js"></script>
<script>document.querySelectorAll('.liquid').forEach(el => liquidGlass(el));</script>
```

```css
.liquid {
  border-radius: 28px;                                   /* the helper reads this */
  background: linear-gradient(135deg,                    /* pastel tint: the kawaii part */
    rgb(255 214 236 / 0.35), rgb(255 255 255 / 0.18) 45%, rgb(190 232 248 / 0.35));
  box-shadow:
    0 14px 36px rgb(var(--star-dark) / 0.22),            /* soft colored shadow */
    inset 0 1px 1px rgb(255 255 255 / 0.8),              /* specular top edge */
    inset 0 -6px 16px rgb(255 255 255 / 0.15),
    inset 0 0 0 1px rgb(255 255 255 / 0.45);             /* the glass edge */
}
```

- **Color makes it cute.** Tint every glass piece with a soft pastel gradient taken from the palette (the character's main color plus a partner), and keep the background colorful (the iridescent background, bubbles, the character). Add an iridescent rim to the primary button.
- **Refraction needs something to bend.** Let colorful shapes, the title or the character pass behind the glass, for example a fixed header over scrolling content, or cards over bubbles. Over an empty, smooth area the glass just looks frosted.
- **Strength**: `strength` 40 to 70 for cards and headers, a little more for small buttons. If text inside smears, lower `strength` or raise `rim`.
- **Readability**: raise the white in the tint behind long text. Text on glass stays solid deep ink.
- **Size**: keep glass pieces under about 800px per side, for performance.
- **No glass inside glass.** A glass element can only bend what is behind it on the page, not another glass panel. Buttons inside a glass header or footer get the highlights and tint only, without the helper.
- **Glass header**: a floating capsule with in-page links is fine on a single-character page. Don't put a site name in it.
- **Motion**: buttons can stretch slightly on press. Smooth, long ease-out curves. Respect `prefers-reduced-motion`.

## Make the star's image good

The image is the star. Improving the image itself does more than any frame, mat or decoration around it. Do this before adding shapes.

### Cutout edges

- Crop transparent padding, and keep the relative scale when several characters appear together.
- Look at the edge at 100% zoom. Remove halos or fringe left from the background. If the source has a jagged or dirty edge, a deliberate white sticker edge (6 to 10px, made with stacked `drop-shadow(0 0 0 #fff)` or an outline baked into the image) hides it and adds charm.
- Make sure the source has enough resolution: at least 2× the displayed size for the star.
- Small corrections for display are fine (a little contrast or saturation when a render looks washed out on a pale page). Don't change the character's own colors, and don't redraw or retouch official art.

### Shadows

A good shadow places the character in the space, so it doesn't look pasted on. Use two or three layers, tinted with the star's own darkest color. Never use gray or black shadows.

```css
:root { --star-dark: 33 74 118; } /* the star's darkest color as space-separated RGB */
.star { position: relative; }
.star img {
  filter:
    drop-shadow(0 2px 2px rgb(var(--star-dark) / 0.18))    /* tight, defines the edge */
    drop-shadow(10px 18px 24px rgb(var(--star-dark) / 0.16)); /* soft, gives depth */
}
.star::after {            /* contact shadow on the floor */
  content: ""; position: absolute; left: 50%; bottom: 2%;
  width: 46%; height: 4%; translate: -50% 0;
  border-radius: 50%;
  background: rgb(var(--star-dark) / 0.22);
  filter: blur(6px);
}
```

- **Contact shadow**: a blurred ellipse where the feet touch the ground. It is the single most effective detail for a standing character.
- **Edge shadow**: tight and subtle, so a white character separates from a white or pale background.
- **Depth shadow**: large, soft and offset in a consistent light direction. Use the same direction for every shadow on the page.
- Floating characters (no ground): skip the contact shadow, and make the depth shadow larger and softer.
- For a sticker look, use a solid offset shadow instead (`drop-shadow(8px 10px 0 rgb(var(--star-dark) / 0.18))`). Use one shadow style per page.

### Shapes behind the star are composition, not containers

- A circle, arch or blob behind the star is a design element in the layout. It can be partial, offset, cut by the screen edge, or shared with the title. The star overlaps it freely.
- Don't size a shape to "hold" the whole character, as if the star needed a box to stay visible. If the star doesn't separate from the background, fix the shadow and edge first.
- A white character on a white or pale page is fine. Many illustrator sites do exactly this.
