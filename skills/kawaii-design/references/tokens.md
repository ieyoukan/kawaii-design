# Tokens

Starting values. Adjust per dialect (see [dialects.md](dialects.md)). Choose the shape language (circle, rounded rectangle or organic) first. See [shapes-and-patterns.md](shapes-and-patterns.md).

These are not a house style. If two of your projects end up with the same background, button and outline, you are using defaults instead of the product. See "The kawaii-design house style" in [anti-patterns.md](anti-patterns.md).

## Shape

Radius scales with size. Small things can be very round, large things stay gently round, so the whole screen doesn't turn into pills.

| Element | Radius |
| --- | --- |
| Chips, tags, small badges | pill (`9999px`) |
| Buttons | 12 to 16px, or pill for one primary style |
| Inputs | 12px |
| Cards | 16 to 24px |
| Modals and sheets | 24 to 28px |
| Image frames in Star mode | 12 to 20px, never so round that the image gets cropped badly |

大人かわいい uses roughly 60% of these values. ポップ may go a little higher.

**Points and corners in illustrations and motifs**: round them too. A sharp tip (a raindrop, a star, a speech-bubble tail) reads cold next to soft UI. Give it a small curve.

**Borders**: none by default. Separate surfaces by value and tint. Use an outline where a control needs it, to match an illustration's line art, or to trace a [content-shaped edge](shapes-and-patterns.md#content-shaped-frames-and-edges).

**Buttons**: pick a style that comes from the world, not a default:

- Flat pill in the star's main color with white text (most character and illustrator sites).
- A white or translucent pill on a tinted or patterned background.
- A circular icon button (arrows, play, menu).
- A raised sticker button, **only** in the ポップ dialect or when the illustration itself uses thick outlines.

**Sticker shadow** (ポップ only):

```css
.button {
  box-shadow: 0 3px 0 var(--ink-shadow);
  transition: transform 120ms ease-out, box-shadow 120ms ease-out;
}
.button:active {
  transform: translateY(3px);
  box-shadow: 0 0 0 var(--ink-shadow);
}
```

Use it on primary actions only. Soft blurred shadows should stay low and tinted with the star's dark color (`0 8px 24px rgb(<star-dark> / 0.10)`), never glowing.

**Character shadows**: see [backgrounds-and-images.md](backgrounds-and-images.md).

## Spacing

A 4px base, with more breathing room than a typical app.

- Card padding: 20 to 28px.
- Gap between cards: 16 to 24px.
- Section spacing: 64 to 96px on desktop.
- Star mode: give the star at least 1.5 times the space around it that other elements get.

## Color

- **Surface**: decide it from the star and the atmosphere, not from a wish for "warmth". See [backgrounds-and-images.md](backgrounds-and-images.md) for the 透明感 page gradient.
  - **Pure white `#FFFFFF`** is often the best choice when the star is an illustration. Illustrations are drawn on white, and white makes their colors look cleanest.
  - **A pale tint of the star's own colors** (for example `#EEF1F6` behind a blue-gray character) for a one-tone, coherent world.
  - **Warm cream** only when the world is actually paper, bread or wood. It is not the default.
  - Use two surface values (page and panel) instead of borders to separate areas.
- **Ink**: a deep, slightly tinted dark, never `#000`. Examples: cocoa `#3A302C`, plum `#3E2F4F`, navy `#2B3445`.
- **Muted ink** for secondary text: ink at about 65% mixed into the surface, still at 4.5:1 or above.
- **Accent**: one main accent plus at most two supporting colors, taken from the star first and the dialect palette second. Yellow and apricot are not kawaii by default.
- **Pastel rule**: pastels are for surfaces, fills and illustrations. Text on them is always deep ink.
- **Star mode**: sample two or three colors from the star, lower their saturation, and use them for surfaces and accents. The star stays the most saturated thing on screen.

## Type

Japanese:

| Role | Fonts |
| --- | --- |
| Rounded body and UI | Zen Maru Gothic, M PLUS Rounded 1c, Kosugi Maru |
| Soft headings | Kiwi Maru, Zen Maru Gothic Bold, M PLUS Rounded 1c ExtraBold |
| Handwritten accent (one place only) | Klee One, Yomogi, Zen Kurenaido |
| 大人かわいい headings | Zen Old Mincho, Shippori Mincho |

Latin pairing: Nunito, M PLUS Rounded 1c (Latin glyphs), Fredoka for ポップ display.

Display type can be the main decoration of the page. Give a short section heading room to work at a large scale. Use a smaller size for longer headings, and consider hiragana where it suits the wording. See [title treatments](shapes-and-patterns.md#title-treatments). Zen Maru Gothic on everything turns into a house style too. Consider a clean non-rounded gothic (Noto Sans JP, BIZ UDPGothic) for body when the display type and the illustration already carry the softness.

- Body line height: 1.7 to 1.9 for Japanese, 1.5 to 1.6 for Latin.
- Letter spacing: `0.02em` to `0.05em` for Japanese body, up to `0.08em` for headings.
- Weights: medium (500) for body in rounded faces looks warmer than 400. Use bold, chunky ("ぽてっと") weights for headings.
- Never use handwritten fonts for paragraphs, forms or numbers.
- **Japanese line breaks**: a heading that breaks mid-word (「おしら/せします」) ruins the softness instantly. Set `word-break: auto-phrase` on the body, `text-wrap: balance` on headings, and add `<wbr>` at phrase boundaries in short headings as a fallback for browsers without `auto-phrase`.

## Icons

- Rounded line caps and joins, 1.5 to 2px stroke, consistent across the set. Phosphor (regular or bold), Tabler and Lucide with `stroke-linecap: round` work well.
- Slightly oversized inside small buttons (20px icon in a 36px button) for a ぽてっと feel.
- No emoji as icons.

## Motion

Include one decorative animation per page or app view in normal motion mode. Pick one target and one effect. A heading can settle once as a whole, the hero illustration can arrive once, or one quiet ambient detail can move. If the main title moves, keep section titles, images, waves, and patterns static.

```css
--ease-poyon: cubic-bezier(0.34, 1.56, 0.64, 1);   /* small overshoot */
--ease-soft:  cubic-bezier(0.22, 1, 0.36, 1);      /* gentle settle */
```

### A single entrance

- **Heading**: move the entire heading 8 to 12px into place with `--ease-soft` in about 450 to 600ms. Keep it as one text node or phrase-grouped text so Japanese wraps naturally.
- **Star**: as an alternative, let the image settle once with `--ease-poyon` over about 500 to 800ms. A small movement is enough.

### Interaction feedback

- Keep immediate focus, pressed, validation, and success states. A short transition can clarify a state change.
- If a pose or expression change is an intended interaction, respond to tap or keyboard activation. For hover support, check the input type so a mouse click after hover does not toggle the pose twice.

### Idle

- An ambient animation uses the same single slot as an entrance, even when it is behind the content. Keep the motion subtle and stop it after five seconds or provide a pause control if it keeps running alongside content.

### In-page scrolling

Use ordinary fragment links and set `scroll-behavior` on the page root for smooth navigation. If the app scrolls a nested panel, apply it to that scroll container instead. Set `scroll-margin-block-start` on targets when a fixed header would cover them. Keep the browser's native wheel, touch, and keyboard scrolling. Navigation scrolling and functional feedback can coexist with the single decorative animation.

```css
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

### Always

- In reduced-motion mode, show everything in its final state and let in-page navigation jump directly. Content must never stay hidden if the script or observer fails.
