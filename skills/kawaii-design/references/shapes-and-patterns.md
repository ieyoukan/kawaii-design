# Shapes, illustration layouts and patterns

## Shape language: circle, rounded rectangle or organic

Choose a shape language before choosing radius values. Write it into the direction with a reason. Most screens use one main language plus one supporting one.

| Language | What it says | Use for | Avoid for |
| --- | --- | --- | --- |
| **Circle** | "One thing, in focus." Faces, coins, buttons you want to press. | Avatars and icons, a mat behind a single character or bust, round arrow or icon buttons, polka dots | Containers for text or lists; info badges with a time or date inside a circle (they read as a template) |
| **Rounded rectangle** | "Things in order." Calm, readable, reliable. | Cards, galleries, forms, lists, panels, any area with dense information | Being the only shape on a page whose star is soft and flowing; then it feels like a spreadsheet |
| **Organic** (waves, drips, clouds, blobs) | "A soft world around you." Liquid, sweet, dreamy, alive. | Section transitions, large background masses, hero edges, a menu tab, one big frame around the star | Small controls, text boxes holding paragraphs, anything that has to align in a grid |

### How to pick

Read the star first.

- **Chibi, round, compact characters** (big heads, short bodies) → circles. Put the character on a circular mat, use round badges and round icon buttons.
- **Long flowing hair, ribbons, liquids, sweets, clouds** in the illustration → organic. Let one wave or drip shape echo the illustration's curves at the section edges.
- **Graphic, flat or geometric illustration, product photos, screenshots, many works in a grid** → rounded rectangles, with circles as an accent.
- **No star (Stage mode)** → rounded rectangles for structure, plus one circle or organic element as the charm point.

Rules:

- Organic shapes are large and few: one or two per screen. Many small blobs look like clip art.
- Organic edges should come from the world (cream, syrup, clouds, water, fabric), not be random wobble.
- Even with organic edges, the content inside stays in rounded rectangles so it can still be read.

### Organic edges in CSS

Use an SVG path for the edge, not `border-radius` hacks.

```html
<svg class="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 64 C 180 20, 360 108, 560 70 C 760 32, 900 96, 1100 66 C 1260 42, 1360 70, 1440 56 V120 H0 Z" fill="currentColor"/>
</svg>
```

```css
.wave { display: block; width: 100%; height: clamp(48px, 8vw, 120px); color: var(--next-section-bg); margin-bottom: -1px; }
```

For a drip, add a few rounded downward bumps to the path. Keep it to three or four drips across the full width.

For regular edges (a scalloped frill, lace, a ticket edge), a repeating `radial-gradient` is lighter and more even than a path:

```css
.scallop { height: 20px; background: radial-gradient(circle at 50% 100%, var(--next-section-bg) 10px, transparent 10.5px) 0 0 / 28px 20px repeat-x; }
```

## Borders

Default to **no borders**. Separate surfaces by value and tint instead: a slightly darker page behind a lighter panel, or a white card on a pale tinted section.

Use outlines only when:

- They match the line art of the illustration (same weight and color), as in the ポップ dialect, or
- A control would otherwise be invisible (an input on a white background needs a faint 1.5px line or a tinted fill).

## Section boundaries

A hard, straight edge between two background colors looks like a template, and it chops the page into boxes. Don't use per-section gradients to hide the edge either. (A single page-wide 透明感 gradient isn't a boundary. See [backgrounds-and-images.md](backgrounds-and-images.md).) Choose one of these:

1. **No boundary.** Keep the same flat background through the whole page. Separate sections only with space and titles. This is the default.
2. **A layered wave edge** (the `wave` + `wave back` technique). Use it where the color really has to change, usually once or twice per page (into the footer, for example).

### Layered wave edge

Two copies of the same hand-drawn wave sit on top of the next section's top edge:

- **Front wave**: the next section's color, fully opaque.
- **Back wave**: the same path mirrored horizontally, same color, at about 40% opacity. It peeks out above and between the front wave's bumps and gives depth.
- Both are wide strips (three times the screen width) that drift sideways very slowly at different speeds, like water or cream. The drift is ambient and doesn't count as the page's one idle loop, but it must stop under `prefers-reduced-motion`.
- Draw the wave by hand: irregular bumps of different widths and heights, not a sine curve. Keep it low, about 60 to 110px tall on desktop.
- Use the same wave everywhere the color changes on the page.
- If the world has its own edge (a scalloped frill, lace, a cloud), you can use that instead of a wave, with the same front and back layering.

```html
<footer class="has-wave">
  <div class="wave back" aria-hidden="true">
    <svg viewBox="0 0 945 8" preserveAspectRatio="none"><use href="#wave-path"/><use href="#wave-path" x="315"/><use href="#wave-path" x="630"/></svg>
  </div>
  <div class="wave" aria-hidden="true">
    <svg viewBox="0 0 945 8" preserveAspectRatio="none">
      <defs><path id="wave-path" d="M0 2 C 18 0.4, 30 5.6, 52 3.4 S 88 0.2, 110 2.8 S 150 6.2, 176 2.6 S 220 0.6, 246 3.6 S 292 5.4, 315 2 V8 H0 Z"/></defs>
      <use href="#wave-path"/><use href="#wave-path" x="315"/><use href="#wave-path" x="630"/>
    </svg>
  </div>
  ...
</footer>
```

```css
.has-wave { position: relative; background: var(--next-bg); }
.wave {
  position: absolute; left: 0; top: 1px; transform: translateY(-100%);
  width: 100%; height: clamp(60px, 8vw, 110px); overflow: hidden; pointer-events: none;
}
.wave svg { width: 300%; height: 100%; fill: var(--next-bg); animation: wave-drift 40s linear infinite; }
.wave.back { opacity: 0.4; }
.wave.back svg { transform: scaleX(-1); animation-duration: 60s; animation-direction: reverse; }
@keyframes wave-drift { to { translate: -33.333% 0; } }
@media (prefers-reduced-motion: reduce) { .wave svg { animation: none; } }
```

For the drift to loop without a jump, the path must start and end at the same height, so the three copies tile cleanly. The SVG is three screens wide and moves by one copy (a third of its width) per cycle.

The bottom of a mat, arch or frame behind the star doesn't count as a section boundary. Letting the star overlap it is fine, but don't fade it out with a gradient.

Don't alternate white and tinted bands with straight edges. If you can see a horizontal line across the page where one color stops, redo it.

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

Patterns carry a lot of kawaii with very little effort, but only as a faint background texture.

- Keep them to around 4 to 10% contrast against the surface. You should almost miss them.
- Take the colors from the star or the dialect.
- Never place them directly behind body text, behind the star's face, or behind a gallery of works. With a full-body character in a patterned hero, put a mat behind the upper body so the face sits on a plain surface, and keep the pattern outside the mat.
- Use one pattern per page, or two at most if they are clearly in separate sections.
- When a pattern covers only part of the page, contain it inside a shape: a circle, an arch or an organic blob. A patterned rectangle shows straight edges, which become new boundaries. Never fade a pattern's edge out with a gradient mask.
- Good places: the hero background, empty margins, behind a section title, inside a big organic shape, and the background of a footer.

### Gingham (ギンガムチェック)

```css
.gingham {
  --c: rgb(120 170 220 / 0.14);
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
  --c: rgb(240 160 190 / 0.22);
  background-color: #fff;
  background-image:
    radial-gradient(var(--c) 22%, transparent 23%),
    radial-gradient(var(--c) 22%, transparent 23%);
  background-size: 28px 28px;
  background-position: 0 0, 14px 14px;
}
```

### Dashed grid (方眼・破線チェック)

```css
.grid-dashed {
  --c: rgb(120 130 160 / 0.16);
  background-image:
    repeating-linear-gradient(90deg, var(--c) 0 6px, transparent 6px 12px),
    repeating-linear-gradient(0deg, var(--c) 0 6px, transparent 6px 12px);
  background-size: 96px 2px, 2px 96px;
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

Pick one or two per page and use them consistently on every section title:

- **A lettered name.** Set the star's name in the display face, very large, with one detail: a dot or motif replacing a counter or a dakuten, one letter in the accent color, or letters slightly rotated and offset like stickers.
- **Ghost titles**: giant section titles in a very faint tint (white on a pale tint, or 6 to 10% ink) behind the section, partly cut off by the screen edge. Keep the real, readable heading separate.
- **A sticker title**: the display face with a thick outline in the background color and a soft offset shadow in the star's dark tint, so the title looks cut out and stuck on.
- **A custom SVG logotype** for the star's name when the page is about one character. Build the letters from circles and rounded strokes. This is the strongest option and worth the time on a personal page.

Animate titles on entrance. See Motion in [tokens.md](tokens.md).
