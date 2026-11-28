# Anti-patterns

## How to read this list

Most of these rules protect a star. With strong visual content (Star mode), apply them strictly. In Stage mode, where the UI has to be cute on its own, the rules against eating the star and against too much decoration relax, and the danger flips: a screen that is tasteful but not cute. Too little cuteness is a failure too.

## The most important one

**Do not make every element equally cute. If everything is loud, nothing feels special.**

全部を同じ強さで可愛くしない。すべてが主張すると、結局どこも魅力的に見えなくなる。

Every other item on this list is mostly a specific case of this one.

## Eating the star (主役を食う)

- Decorations, stickers, sparkles or frames that overlap a character's face, a product or a piece of artwork.
- Busy patterned or gradient backgrounds behind illustrations or photos. Faint gingham, dots or grid lines are fine in the margins and empty areas, never behind the star's face or a gallery of works.
- A UI mascot placed next to the product's own character, so two characters compete.
- UI accent colors more saturated than the star's colors.
- Thick decorative frames around every thumbnail in a gallery. The works should be the loudest thing in a grid, not their borders.
- Animated UI near the star while the star sits still.

## Cute slop

- Pink or lavender chosen by default instead of from the world and the dialect.
- ✨ 💖 🎀 🌸 used in labels, headings, buttons or as icons.
- `border-radius: 9999px` on everything, including large cards and modals.
- A heading entrance, staggered cards, and a moving wave all on the same page. Give the motion to one target and preserve functional feedback.
- Visible color blends anywhere except the page background (the gentle 透明感 gradient, or the complex ゆめかわ background) and small iridescent accents like bubbles or the rim of one primary button. Never on body text. Iridescent foil on the logo or one big display title is allowed when it has a white sticker edge and stays readable. Gradient functions with hard stops that draw patterns, lines or dots are fine, because they don't blend colors: no gradients on section transitions, fades at the bottom of images or mats, buttons, cards or body text. Even the page-wide one must be very gentle and pale. See [backgrounds-and-images.md](backgrounds-and-images.md).
- Boxing the star: putting a character inside a colored arch or panel just to separate it from the background. Fix the image's edge and shadow instead.
- A page in one flat color from top to bottom when the direction asked for something airy. One-tone is a choice, not a default.
- Glowing buttons, neon shadows.
- Copy stuffed with "Yay!!", 「〜だよっ☆」, stacked exclamation marks and emoji, unless that is the established brand voice.
- Handwritten or comic fonts for body text.
- Hearts and stars sprinkled to fill space.

## Curves too small to see

- A row of tiny scallops, lace or bumps (under about 24px) as the only boundary between colors. At a glance it reads as a straight band, and the page feels boxed in. Use a few big rises instead, at least 56px tall on desktop.
- A footer that starts with a straight edge.

## Wallpaper patterns

- A loud all-over print, or a flat background left bare when the composition needs texture. Try faint dots or checks in open space and keep the foreground readable.

## Scattered palettes

- Each element in a different color: a pink nav, a green background, a yellow button, a purple tag. Pick three hues plus white and ink, and take every color on the page from that set.

## Too tasteful to be cute

- An earthy or muted palette (moss, sage, beige, gray-heavy) on a screen with no star, even when it comes from the world. It reads as calm or natural, not cute.
- A muted, gray-heavy palette, flat buttons, initials for avatars and no illustrations, on a screen with no star. It looks calm and "designed", but nobody would call it kawaii. In Stage mode, compare it with a generic cute result. If the generic one is cuter, yours failed.

## The kawaii-design house style

This skill's own defaults can become slop too. This combination keeps showing up when nobody decided anything:

- A warm cream background (`#FBF7F0`-ish) on every project.
- A yellow or apricot button with a dark outline and a solid 3D drop shadow.
- Dark outlines around every card, input and button.
- Zen Maru Gothic on everything.
- Rounded rectangles as the only shape, whatever the star looks like.

Any one of these can be right for a specific world, like the ポップ dialect or a bakery. All of them together, chosen by habit, is a template. Before using one, say where it comes from: the star, the world or the dialect.

## Small illustration, big empty hero

- A character shown at 300px in a 900px hero, surrounded by empty space and UI. If the illustration is the star, it should take at least half of the first screen, and it may bleed off the edge or out of its frame.
- An illustration placed neatly inside a card like any other content. Stars break the grid.

## Template structure

- A site-name header bar at the top left on a page about one character or person, added out of habit. The star's name in the hero is the title. Navigation, if needed at all, is a small floating menu or a corner tab.
- Hard, straight edges between alternating white and tinted section bands. Let spacing group content on a shared background and add a curved seam where fills change.
- Identical rounded boxes around unrelated content. Let text sit on the page and use asymmetric fills where a shape adds to the composition.
- A section title repeated as large background text. Let one visible `h2` carry the section and add smaller text only when it tells the reader something useful.
- Oversized background lettering placed entirely above the artwork when the requested effect is layering. Let a foreground element cross the edge of the title while keeping the word legible.
- Stage sections that turn into a bordered table, a bare photo grid or a row of identical link cards.
- A speech bubble whose tail points at nothing, or away from the speaker.

## Small text and narration

- Captions under photos, hint text ("tap to change pose"), source notes, sub-labels under headings, small Latin labels over titles, footnotes and "kicker" lines.
- Narration written by the designer, like 「ちかいちかい。ウインクひとつ」. It sounds like a comment on the design, not part of it.
- Descriptions in a smaller size under timeline entries, products or links, like categories, prices or one-line explanations. If it needs to be smaller, it doesn't belong.
- If a line of text exists only to explain, describe or annotate something on the page, delete it. Keep only the star's own words, the essential facts and the names of things.
- The one exception is a legally required credit, as a single line at the very end of the page.

## The AI closing section

The final section is where generated pages look most generated:

- Switching to a dark "night" or inverted band at the end.
- Information inside a big circle badge (a time, a date, a number).
- A yellow or accent pill button next to a ghost pill button.
- A stack of small label, heading, paragraph, buttons and a row of link pills.

End the page quietly instead. Use a wave edge into a calm footer that holds only the star's links (icons, or names in the display face) and nothing else. State essential facts such as opening hours once, as one line in the display face where they belong (often the hero). Add a button only for a real action, and then only one.

## Fake cuteness

- Adding a creature in a style that doesn't match the rest of the page, or a second mascot next to the product's existing character.
- Mixing illustration styles: a flat icon set next to hand-drawn characters next to emoji.
- Replacing every picture with initials in circles because drawing felt risky. In Stage mode, that is the opposite of kawaii.
- Adding a face to every icon and button. Faces are for empty, loading, error and success moments.
- Using kawaii only as a coat of paint on the hero while forms, tables, toggles and errors stay default. Kawaii lives in the foundation.

## Broken basics

- Pastel text on pastel backgrounds. Contrast still has to meet 4.5:1 for body text.
- Pure black `#000` ink on soft pastel surfaces. It reads harsh. Use a deep warm or tinted ink.
- Cramped spacing. Kawaii needs ゆとり. Tight layouts feel stressed no matter how round they are.
- Ignoring `prefers-reduced-motion`.
- Mixing dialects on one screen, like ゆめかわ waves next to レトロ stamps.
- A childish result for an adult audience. Kawaii does not mean childish.
