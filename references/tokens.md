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

**Borders**: none by default. Separate surfaces by value and tint. Use outlines only to match an illustration's line art (same weight and color, usually 1.5 to 2.5px), or where a control would otherwise disappear.

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

Display type can be the main decoration of the page (font list and title treatments in [shapes-and-patterns.md](shapes-and-patterns.md)): a chunky, rounded, geometric face for the logo and section titles, and giant faint ghost titles behind sections. Rotate through faces. Zen Maru Gothic on everything turns into a house style too. Also consider a clean non-rounded gothic (Noto Sans JP, BIZ UDPGothic) for body when the display type and the illustration already carry the softness.

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

Motion is one of the main ways a page feels alive and kawaii. Plan it as part of the direction, not as an afterthought. The rule is simple: animate **arrivals and responses** generously, keep **idle** motion rare.

```css
--ease-poyon: cubic-bezier(0.34, 1.56, 0.64, 1);   /* small overshoot */
--ease-soft:  cubic-bezier(0.22, 1, 0.36, 1);      /* gentle settle */
```

### Arrivals (play once)

- **The star**: rises 16 to 32px and settles with `--ease-poyon`, 500 to 800ms, on load.
- **Titles**: letter-by-letter. Wrap each character in a span and stagger it by 30 to 60ms, rising 8 to 12px with `--ease-poyon`. Trigger on load for the hero and when scrolled into view for section titles (IntersectionObserver, or `animation-timeline: view()` where supported).
- **Letter-by-letter titles without breaking Japanese or accessibility**:
  - Group the letters by phrase (文節). Wrap each phrase in a `white-space: nowrap` span and the letters inside it in their own spans, so lines still break between phrases and never before 、。.
  - Put the readable text on the heading (`aria-label="5のつく夜は、ぷぷりえへ"`) and mark the letter spans `aria-hidden="true"`, or keep a visually hidden copy of the text.
  - Start from the visible final state in CSS and only add the hidden starting state from JS, so the title is never lost if the script fails.

  ```html
  <h2 aria-label="5のつく夜は、ぷぷりえへ"><span class="ph" aria-hidden="true"><i>5</i><i>の</i><i>つ</i><i>く</i><i>夜</i><i>は</i><i>、</i></span><span class="ph" aria-hidden="true"><i>ぷ</i><i>ぷ</i><i>り</i><i>え</i><i>へ</i></span></h2>
  ```

  ```css
  .ph { white-space: nowrap; display: inline-block; }
  .ph i { font-style: normal; display: inline-block; }
  ```
- **Sections and cards**: fade and rise 12 to 24px with `--ease-soft`, 400 to 600ms, staggered by 60 to 100ms.
- **Photos as prints**: drop in with a slight rotation that settles to their resting tilt.

### Responses

- Press: 150 to 250ms with a slight overshoot.
- Hover on a title: letters wiggle or hop once in sequence.
- Tap or hover on the star: change the pose or expression, with a small hop. Use pointer events and check `pointerType`, so a mouse click after a hover doesn't toggle the pose twice.
- Success moments may get a small celebration. Normal clicks don't.

### Idle

- At most one looping animation visible in the viewport at any time, and keep it subtle: a blink, a 1 to 2° sway, or a 4px float over 3 to 5 seconds. It usually belongs on the star.
- No infinite bounce, pulse or glow on UI.

### Always

- Provide a `prefers-reduced-motion: reduce` fallback. Show everything in its final state with no movement. Content must never stay hidden if the script or observer fails.
