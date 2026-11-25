# Backgrounds and the star's image

## Atmosphere: simple or 透明感

Decide this in the direction. It depends on what the page should feel like, not on a rule. There are three options.

| Atmosphere | Feels | Background | Good for |
| --- | --- | --- | --- |
| **Simple** | clear, focused, graphic | White, or one flat pale tint taken from the star | A single strong character, chunky or chibi art, ポップ, ワントーン |
| **透明感** | airy, light, a little grown-up | One page-wide pastel gradient, very gentle | Dreamy illustration, 大人かわいい, beauty and fashion, pages with several colors in the art |
| **ゆめかわ** | dreamy, iridescent, rich | A complex multi-point pastel gradient (marble or bubbles) with glass UI on top | ゆめかわ, SNS and community apps, fan pages, music, anything asked for as 「ゆめかわいい」 |

A page in one flat color from top to bottom can feel dull. When the star has several colors (pink hair and a blue dress, for example), 透明感 often fits better than one-tone.

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
- Use only this one gradient. No gradients on sections, cards, buttons, text, or fades at the bottom of images and mats.
- Check text contrast at the most colored stop.
- Patterns and wave edges can sit on top of it.

### ゆめかわ background (complex pastel)

For the ゆめかわ dialect, or whenever the direction asks for something dreamy and rich, the background is the main source of color and must not be simple. Layer several large radial color pools of the palette's hues over a pale base, so it reads like holographic marble or bubbles in light.

```css
.page {
  background-color: #F4ECFB;
  background-image:
    radial-gradient(40% 35% at 15% 20%, #F6C6E3 0%, transparent 70%),
    radial-gradient(45% 40% at 85% 15%, #B8E6F5 0%, transparent 70%),
    radial-gradient(50% 45% at 70% 70%, #CDBDF4 0%, transparent 70%),
    radial-gradient(35% 30% at 20% 85%, #B8E6F5 0%, transparent 70%),
    radial-gradient(30% 30% at 50% 45%, #FFFFFF 0%, transparent 70%);
  background-attachment: fixed;
}
```

- Use only the palette's hues and white. Five to seven pools are enough.
- For a marbled swirl, add an SVG `feTurbulence` + `feDisplacementMap` filter to a fixed background layer, or place two or three large, blurred, rotated blobs (`filter: blur(60px)`).
- Sparkles: a few tiny white dots or four-point stars in an SVG layer, at low density. Not a polka-dot wallpaper.
- This replaces the page-wide 透明感 gradient. Don't stack both.

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
