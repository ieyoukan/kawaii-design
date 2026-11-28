# Liquid Glass

Glossy glass over a colorful background. Its rim stretches what is behind it, all the way around, and leans a little toward the palette's colors. The middle stays clear. Plain liquid glass looks cool and techy. Make it kawaii with color and smoothness: a colorful background that flows, a pastel tint in the glass and a candy-colored rim.

Refraction is heavier than frosted glass: the browser re-filters every refracting piece on every frame while the page scrolls. Use it only when the user asks for Liquid Glass or refraction. Otherwise use the frosted [Glass UI](backgrounds-and-images.md#glass-ui), which looks almost as good and costs little.

**Colorful and smooth.** When the user asks for Liquid Glass, カラフル or つるっと, go for a colorful, smooth world rather than a flat colorful one:

- **Palette**: one set, a little larger than usual. The main hue, two partners and up to two accents (for example peach, lavender and aqua, plus lemon and mint). That set is used everywhere: background, glass tint, rim tint, icons and illustrations. Colorful does not mean a new color for every element.
- **Background**: the [ゆめかわ iridescent gradient](backgrounds-and-images.md#ゆめかわ-background-iridescent-虹色), a little more saturated, still light and still led by the main color. Add a few big soft color blobs (bubbles, drops, jelly shapes) so the glass always has color to bend. Place them where glass rims pass, such as the gutters between columns and the edges of the screen, not behind the middle of a text card, where they look like a stain under the text.
- **Smooth, not looping**: the smoothness comes from the glass sliding over color while the page scrolls. Keep the blobs fixed or move them with the scroll (a slow parallax). Don't loop them: an endless drift uses the page's one decorative animation and would have to stop after five seconds (see [Motion](tokens.md#motion)). Use long ease-out curves, things that glide and stretch rather than hop, and colors that blend into each other. No hard flat blocks of color, no tilted stickers, no bouncy springs.
- **Dialect**: Liquid Glass usually pairs with ゆめかわ. With ポップ, keep its bright palette but drop the thick sticker outlines on the glass.

**Where to use it**: a few pieces of UI chrome, not the content. The header (often floating as a capsule), the nav, the bottom bar, a few buttons and at most one or two showpiece cards over something colorful. Posts, list items and other repeated cards stay frosted glass. Long text sits inside the glass, where it stays readable.

**How**: use the helper in [kawaii-glass.js](kawaii-glass.js). Copy it next to the page and call it on each glass element. It builds a map for the element's size and shape, stretches the backdrop only in a band at the rim, tints that band toward the colors you pass, adds a faint prism fringe at the edge, and falls back to a frosted blur outside Chromium.

```html
<script src="kawaii-glass.js"></script>
<script>
  const palette = { tint: ['#FFB3DC', '#FFE6A6', '#A9E4FF', '#D4C2FF'] };   // the page palette, light
  document.querySelectorAll('.glass').forEach(el => kawaiiGlass(el, palette));
</script>
```

```css
.glass {
  border-radius: 28px;                                   /* the helper reads this */
  background: linear-gradient(135deg,                    /* pastel tint: the kawaii part */
    rgb(255 214 236 / 0.35), rgb(255 255 255 / 0.18) 45%, rgb(190 232 248 / 0.35));
  box-shadow:
    0 14px 36px rgb(var(--star-dark) / 0.22),            /* soft colored shadow */
    inset 0 1px 1px rgb(255 255 255 / 0.8),              /* specular top edge */
    inset 0 0 0 1px rgb(255 255 255 / 0.45);             /* the glass edge */
}
```

The options that change the look:

| Option | Default | What it does |
| --- | --- | --- |
| `rim` | 22% of the shorter side, 10 to 30px | Width of the stretched band |
| `bend` | 1.6 × `rim` | How far inward the rim reaches. Equal to `rim`: a clean stretch. 2 to 3 × `rim`: a lens-like flip at the very edge |
| `tint` | pink, lemon, aqua, lavender | Colors the rim leans toward, going around the glass from the top. Use the page palette |
| `tintAmount` | 0.38 | 0 keeps the rim's real colors. 0.3 to 0.5 gives a candy-colored rim |
| `prism` | 3 | The rainbow fringe at the edge. 0 turns it off |
| `blur` | 0 | Blur inside the glass. 0 keeps the middle sharp. Chromium blurs strongly, so 1 already reads as frosted |

- **Refraction needs something to bend.** Let colorful shapes, the title or the character pass behind the glass, for example a fixed header over scrolling content, or cards over drifting blobs. Over an empty, smooth area the glass just looks frosted.
- **Readability**: text on glass stays solid deep ink. Behind long text, don't make the whole tint whiter, because that also hides the colorful rim. Add a soft white layer inside the card instead, inset by about the rim width, so the rim keeps its color and the middle gets calm:

  ```css
  .glass.reading::before {
    content: ""; position: absolute; inset: 10px; z-index: -1;
    border-radius: inherit; background: rgb(255 255 255 / 0.6); filter: blur(8px);
  }
  ```

  Over a header or bottom bar where posts scroll underneath, pass `blur: 6` to `blur: 10` so the text behind doesn't show through as letters. If text near the rim smears, give the glass more padding or lower `rim`.
- **Performance**: keep it to a handful of refracting pieces per screen, each under about 800px per side, and check that scrolling stays smooth on a phone. Never refract every card in a long feed. When in doubt, use frosted glass.
- **No glass inside glass.** A glass element can only bend what is behind it on the page, not another glass panel. Buttons inside a glass header, nav or compose box get the highlights and tint only.
- **Shapes**: the helper handles rounded rectangles, capsules and circles. For a speech bubble or a hill, use plain frosted glass, or put the shape inside a rounded glass piece.
- **Glass header**: a floating capsule with in-page links is fine on a single-character page. Don't put a site name in it.
- **Motion**: buttons can stretch slightly on press. Smooth, long ease-out curves. Respect `prefers-reduced-motion`.

## Glitter (ラメ)

Glitter like cosmetics: a pressed glitter eyeshadow, glitter nail polish, the lid of a makeup case. White, silver, or the page's own colors.

- **When**: only when the user asks for ラメ, キラキラ or glitter, or the world is literally glittery (cosmetics, snow, a jewelry box). It is not a default way to add sparkle.
- **Color**: white, silver, or one to three hues from the page palette, in medium-deep shades so the flakes show on pale glass. Don't bring in new colors for the glitter. Put glitter on frosted glass or a plain surface, not on glossy refracting glass: the two shines fight each other.
- **No motion**: the glitter doesn't flash, twinkle or follow the pointer. It is a still texture.
- No sparkle emoji, no ✨-style sparkle icons as filler next to it. Icons drawn from the world's own motif (a hexagon flake for the like in a glitter world) are fine.

Use the helper in [kawaii-glitter.js](kawaii-glitter.js). It has two looks:

- **`rim`**: glitter gathers at the edge of a card and thins out gradually toward the middle, with no line where it ends. A little dust spills past the edge. Drop the glass edge line (the inset white outline) on these cards, so the card melts into the background instead of ending at a line.
- **`dense`**: packed, opaque glitter, like a glitter pan in a makeup palette. Silver by default, or one palette color. Use it on one small piece per screen, such as the primary button or a badge, and set its label on a white pill so it stays readable.

```html
<script src="kawaii-glitter.js"></script>
<script>
  const tone = ['#5CCBF2', '#FF8CC6', '#A68CFF'];   // the page palette, medium-deep
  document.querySelectorAll('.post').forEach(el => kawaiiGlitter(el, { tone }));   // rim
  kawaiiGlitter(document.querySelector('.compose-button'), { mode: 'dense', tone: '#7DD8F5' });   // packed
</script>
```

| Option | Default | What it does |
| --- | --- | --- |
| `mode` | `'rim'` | `'rim'` or `'dense'` |
| `tone` | `'white'` for rim, `'silver'` for dense | `'white'`, `'silver'`, one `#rrggbb`, or a list of them. Each color becomes light, true and deep flakes plus white |
| `depth` | 35% of the shorter side, up to 72px | How far rim glitter reaches toward the middle. Keep it off the text |
| `spill` | 6 | How far dust spills past the edge (px). 0 keeps it inside, for example in a clipped circle |
| `amount` | 0.9 | Overall strength of rim glitter |

The textures are drawn once and reused, so glitter is light. It works in every browser and doesn't need the refraction helper.
