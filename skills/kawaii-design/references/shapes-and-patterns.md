# Shapes, illustration layouts and patterns

## Shape language: circle, rounded rectangle or organic

Choose a shape language before choosing radius values. Write it into the direction with a reason. Most screens use one main language plus one supporting one.

| Language | What it says | Use for | Avoid for |
| --- | --- | --- | --- |
| **Circle** | "One thing, in focus." Faces, coins, buttons you want to press. | Avatars and icons, a mat behind a single character or bust, round arrow or icon buttons, polka dots | Containers for text or lists; info badges with a time or date inside a circle (they read as a template) |
| **Rounded rectangle** | "Things in order." Calm, readable, reliable. | Controls and dense groups that need a visible container | Wrapping every section, list, or paragraph in a panel |
| **Organic** (waves, drips, clouds, blobs) | "A soft world around you." Liquid, sweet, dreamy, alive. | Section transitions, large background shapes, a mat behind a star, a speech bubble | Small controls and dense grids where the shape could interfere with use |

### How to pick

Read the star first.

- **Chibi, round, compact characters** (big heads, short bodies) → circles. Put the character on a circular mat, use round badges and round icon buttons.
- **Long flowing hair, ribbons, liquids, sweets, clouds** in the illustration → organic. Let one wave or drip shape echo the illustration's curves at the section edges.
- **Graphic, flat or geometric illustration, product photos, screenshots, many works in a grid** → rounded rectangles, with circles as an accent.
- **No star (Stage mode)** → use alignment and spacing for structure. Give a selected surface an organic shape when it fits the world.

Rules:

- Organic shapes are large and few: one or two per screen. Many small blobs look like clip art.
- Organic edges should come from the world (cream, syrup, clouds, water, fabric), not be random wobble.
- Place text and lists directly on the section surface when grouping is clear. When a mat, bubble, or illustrated panel needs a shape, choose a contour that reflects its content. Keep readable text in the generous inner area, with room to grow when it wraps.

### Content-shaped frames and edges

Read the content before drawing the outline. Choose one recognizable feature from the object, action, or character in that section and build it into the silhouette. Related items can share a frame. When the section tells a different story, its edge can change while the palette and line weight connect the page.

| Content | Shape to try |
| --- | --- |
| A personal gift or thank-you | A low-contrast heart behind the gift, or a heart accent tucked into one corner of the frame |
| A memo, diary, or stationery collection | A folded paper corner, torn seam, or the perforation of a notebook |
| A conversation or reply | A speech-bubble edge with a tail aimed at the speaker |
| A character with a signature motif | Echo one feature such as a rounded ear, the curve of a ribbon, or a crescent from an accessory |

Use the whole silhouette for a decorative background or illustration frame. Use just part of it at the edge of a text-heavy section. A tinted fill or a short, quiet stroke can suggest a frame. A full outline works when it carries the motif and leaves the contents clear. See the [folded paper](organic-sections.html#paper) and [heart-shaped gift frame](organic-sections.html#wrap) in the same sample.

### Organic surfaces

Use an inline SVG with a closed Bézier path for the visible fill. Put it behind the content as its own decorative layer with `aria-hidden="true"` and `pointer-events: none`, so the text and controls can wrap and size normally. To crop an image or texture to the same shape, clip only that decorative layer with an SVG `<clipPath>` or use a fill pattern on the path. Keep focus indicators and click targets outside the clipping layer. See the patterned shapes in the [HTML example](organic-sections.html).

## Borders

Default to **no borders**. Separate surfaces by value and tint instead: a slightly darker page behind a lighter panel, or a white card on a pale tinted section.

Use outlines when:

- They match the line art of the illustration (same weight and color), as in the ポップ dialect,
- A quiet stroke traces a content-shaped edge and makes its motif clear, or
- A control would otherwise be invisible (an input on a white background needs a faint 1.5px line or a tinted fill).

## Section boundaries

A hard, straight edge between two background colors looks like a template, and it chops the page into boxes. Don't use per-section gradients to hide the edge either. (A single page-wide 透明感 gradient isn't a boundary. See [backgrounds-and-images.md](backgrounds-and-images.md).) Choose one of these:

1. **No boundary.** Keep the same flat background through the whole page. Separate sections only with space and titles. This is the default.
2. **A shallow organic edge.** Use it where the background color actually changes. Draw a few smooth rises and dips of uneven widths and heights, and use the next section's fill. A second, fainter offset layer can add depth if the composition calls for it.

**The curve must read at a glance.** Squint at the screenshot: if the boundary still looks like a straight line, it is one.
- Height of the curve: at least 56px on desktop and 32px on mobile, measured from the highest rise to the lowest dip. 80 to 120px on desktop is a good range.
- The two fills must differ clearly. If the section above and the footer are almost the same pale tint, the curve disappears even when it is big. Make the next fill noticeably lighter, darker or more saturated (for example white against a mid pastel, or a mid pastel against white), or add the fainter offset layer in a stronger tint so the edge shows.
- Use two to four big rises across the full width, not dozens of tiny bumps. A row of small scallops or lace (under about 24px) reads as a straight band with a texture, so it doesn't count as a curve. Small scallops can decorate a big curve, but never replace it.

**The footer always gets a clear curve.** The footer is where the page usually changes color, so it is the one boundary every page has. Enter it with a big wave, cloud, drip or hill shape, or make the footer itself an organic shape (a large blob rising from the bottom, or a mound with a big rounded top). A footer that starts with a straight edge or a tiny scallop row makes the whole page feel boxed in.

### Curved join between fills

```html
<section class="has-wave">
  <svg class="wave" viewBox="0 0 1440 112" preserveAspectRatio="none" aria-hidden="true">
    <path fill="currentColor" d="M0 55 C116 55 142 23 272 25 S445 88 594 79 S785 37 902 36 S1026 61 1110 60 S1300 19 1440 46 V112 H0 Z"/>
  </svg>
  <h2>お知らせ</h2>
  ...
</section>
```

```css
.has-wave { position: relative; background: var(--section-bg); }
.wave {
  position: absolute;
  inset-inline-start: 0;
  inset-block-end: calc(100% - 1px);
  width: 100%;
  height: clamp(36px, 7vw, 112px);
  color: var(--section-bg);
  pointer-events: none;
}
```

Leave room for the wave in the preceding section's bottom padding so it cannot cover content. The one-pixel overlap hides the rasterization seam. Check both ends at narrow and wide widths. Inline paths keep the curve self-contained and let it inherit the theme's color. Store a local SVG if several pages need to share the exact silhouette.

## Keeping Stage sections warm

After a Star hero, the sections below (photos, timeline, profile, links) tend to fall back to plain cards, tables and lists. Keep them in the same world without adding noise:

- **Photos**: show them like prints. Use a white margin (polaroid style), tape or a clip and a slight alternating tilt (-2° to 2°). No captions. Don't use a bare rectangle grid.
- **Timeline and history**: use the motif as markers (a small moon, a paw, a cup), a dotted or hand-drawn line, and the newest entry slightly emphasized. Offset the entries left and right or give them small tilted date tags.
- **Profile facts**: write them as short labeled lines with the motif as a bullet, or as name-card-style tags. Don't use a bordered table.
- **Link lists**: use round icon buttons or small tag-like pills in the star's color. Don't use a row of identical white cards.
- At least one element of the hero (the mat shape, the pattern, the edge style or the display type) should reappear in the middle of the page.

## Speech bubbles

A speech bubble says "this person is talking". Its tail must point at the speaker.

- Place the bubble next to the character's image, with the tail aimed at the face or mouth area. If the layout separates the quote from the character, either move the quote next to the character or drop the tail.
- When the speaker isn't visible near the quote, put a small round face icon of the speaker at the tail.
- Re-check the tail's direction on mobile, where the layout reflows.

## Illustration-led layouts

When there is a strong illustration, the layout serves it. Pick one:

1. **Full bleed.** The illustration fills the first screen edge to edge. The logo and one line of text sit in a calm area of the picture. Navigation is a small tab or icon in a corner. Nothing else is in the hero.
2. **Bleeding out of the frame.** The character sits inside a rounded panel but breaks out of it: the head above the top edge, or the body cut off at the bottom edge. Breaking the frame is what makes it feel alive.
3. **On a mat.** A circle or soft organic shape sits behind the character in a pale tint of the character's colors. Use this for chibi or bust-up art.
4. **Hung like a print.** Works hang on clips, tape or pins on a white card with soft shadows. This works well for galleries and portfolios.

Rules:

- Go big. If the illustration is the star, it gets at least half of the first screen. A small character in a big empty hero is the most common mistake.
- Let the illustration break out of something at least once: the boundary between sections if there is one, or otherwise its own mat or frame. It ties the page together.
- A sticker-style cutout (white edge, soft offset shadow in a dark tint of the character's color) works for characters on plain backgrounds.
- Check the resolution. A character shown at 600px tall needs at least a 1200px source for high-density screens. If the source is too small, say so and ask for a larger one.

## Patterns

When a blank background feels flat, give it a material. Try tiny polka dots for a soft, airy finish, gingham for a fabric or stationery feel, or a dashed grid for paper. Start with one pattern in a background area with open space. A very faint page-wide repeat can work when the page reads as a single sheet of paper or fabric.

- Start with a tint of the page ink or accent at roughly 4 to 10% opacity and render it on the actual surface. It should recede behind the content while still being visible at normal zoom. Gingham overlaps two color layers, so use less opacity per layer.
- Take the colors from the star or the dialect.
- Never place them directly behind body text, behind the star's face, or behind a gallery of works. With a full-body character in a patterned hero, put a mat behind the upper body so the face sits on a plain surface, and keep the pattern outside the mat.
- Use one pattern per page, or two at most if they are clearly in separate sections.
- When a pattern covers only part of the page, contain it inside a shape: a circle, an arch or an organic blob. A patterned rectangle shows straight edges, which become new boundaries. Never fade a pattern's edge out with a gradient mask. If a line pattern makes the shape's edge look ragged, give the shape a faint solid fill as well, so the edge reads as a clean curve.
- Good places: the hero background, empty margins, behind a section title, inside a big organic shape, and the background of a footer.

### Gingham (ギンガムチェック)

```css
.gingham {
  --c: rgb(120 170 220 / 0.10);
  background-color: #fff;
  background-image:
    linear-gradient(90deg, var(--c) 50%, transparent 50%),
    linear-gradient(var(--c) 50%, transparent 50%);
  background-size: 32px 32px;
}
```

### Polka dots (水玉)

```css
.dots {
  --c: rgb(138 77 107 / 0.09);
  background-color: #fff;
  background-image: radial-gradient(circle, var(--c) 1px, transparent 1.5px);
  background-size: 22px 22px;
}
```

### Dashed grid (方眼・破線チェック)

Draw one cell as an SVG tile, so the lines stay thin and dashed:

```css
.grid-dashed {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cpath d='M0 .5H96M.5 0V96' fill='none' stroke='%23788aa6' stroke-opacity='.22' stroke-dasharray='6 6'/%3E%3C/svg%3E");
  background-size: 96px 96px;
}
```

### Faint line motifs

Thin outlines of the motif (stars, circles, waves, small squares) scattered as a tiled SVG at about 8% opacity. Draw the tile in SVG and use it with `background-image: url("data:image/svg+xml,...")`.

## Display type as decoration

Type can carry the cuteness so the UI doesn't have to. Titles are one of the best places to put effort: the star's name and the section titles should look designed, not just typed in a bigger size.

### Faces with character

| Mood | Japanese | Latin |
| --- | --- | --- |
| Chunky, round, toy-like | Mochiy Pop One, Dela Gothic One, RocknRoll One | Fredoka, Baloo 2, Bagel Fat One, Sniglet |
| Soft and handmade | Yusei Magic, Hachi Maru Pop, Kiwi Maru | Chewy, Gaegu |
| Retro and printed | Rampart One, Reggae One, Potta One | Chango, Paytone One |
| Pixel or game-like | DotGothic16 | Silkscreen, Press Start 2P |

Use one display face per page, for the name and section titles only. Keep body text plain. Before committing to a handwritten or decorative face, render the actual title text and check every glyph. Some faces draw katakana like ノ as a plain slash, or make ー and 一 look alike.

### Title treatments

Choose treatments that fit the composition and repeat the ones that connect related sections:

- **A lettered name.** Set the star's name in the display face, very large, with one detail: a dot or motif replacing a counter or a dakuten, one letter in the accent color, or letters slightly rotated and offset like stickers.
- **One section title**: use the `h2` itself as the visual feature. A short title can go very large; a longer one can use a smaller display size with the same typeface and weight. Use `clamp()` and check the actual text on narrow screens. Hiragana can soften the title, as in 「つつむもの」.
- **Background lettering on request**: for 「見出しを背景に重ねる」, 「作品の背面に大きな文字」, or headings like an illustrator site, use the actual `h2` as a large outlined layer across much of the section width. Put a foreground illustration, image or gallery partly over its lower or trailing edge so the layers visibly intersect. Start with a thin outline in a muted tint of the text color, and keep enough of each character visible to read. If the title draws the eye first, soften the tint or thin the stroke before reducing the scale. Check legibility and layering on mobile. The [紙もの example](organic-sections.html#paper) uses one readable heading with artwork over the edge.
- **A large title with a small companion**: use a quieter line only when it adds information. For example, 「紙もの」 can sit above 「便箋とメモ帳」 to name what the section contains. Keep only the title in the `h2`. If the companion is a useful reading of a kanji term, use `<ruby>` with `<rt>` to keep the term and its reading together.
- **A sticker title**: the display face with a thick outline in the background color and a soft offset shadow in the star's dark tint, so the title looks cut out and stuck on.
- **A custom SVG logotype** for the star's name when the page is about one character. Build the letters from circles and rounded strokes. This is the strongest option and worth the time on a personal page.

If a heading carries the page's decorative animation, move one heading as a unit on entry. See [Motion](tokens.md#motion).
