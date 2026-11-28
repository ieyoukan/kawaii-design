# Kawaii vs cute

"Cute" in English is mostly an adjective about how something looks. かわいい in Japanese is closer to a relationship: something is kawaii when you feel close to it, want to keep it around, and want to look after it a little. That's why a slightly awkward character, a worn stationery item or a clumsy loading message can all be kawaii.

So never use "kawaii" as a style keyword. Translate it into the feelings it should produce, and then into decisions.

## The feelings to aim for

| Feeling | What it means | How a UI gets there |
| --- | --- | --- |
| 親しみ (approachable) | "This won't judge me." | Soft shapes, warm ink color instead of pure black, polite and plain copy, forgiving errors |
| 愛着 (attachment) | "I like coming back to this." | A consistent small world, one recurring motif, small details found on the second visit |
| 守ってあげたい (gentle care) | "It's small and doing its best." | Small scale, a little imperfection, modest tone, a tiny character in empty states |
| ゆるさ (ease) | "No pressure here." | Generous space, slow and soft motion, not too many choices at once |
| ときめき (a small flutter) | "Oh, that's nice." | One charm point per region, a small reward on success, a detail that rewards attention |

## Cute slop vs kawaii

| Cute slop | Kawaii |
| --- | --- |
| Pink and lavender gradient by default | Palette taken from the world and the dialect. Kawaii can be cream and tomato red, or mint and charcoal. |
| `border-radius: 9999px` on everything | Radius chosen per size. Small chips can be pills, large cards stay gently rounded. |
| ✨ 💖 🎀 in labels and headings | Real icons with rounded ends and a consistent stroke. One custom motif at most. |
| Bounce on every hover, floating loops | One deliberate animation, such as an entrance on the focal element. Clear interaction feedback where needed. |
| "Yay!! 🎉 You did it!!!" | 「できました。おつかれさまです」, or a small illustration that does the celebrating |
| Handwritten or comic font for body text | Readable rounded gothic for body, handwritten only for one accent |
| Same amount of decoration everywhere | One charm point per region, quiet everywhere else |
| Decoration over the illustration | Decoration framing the illustration, pushed to the edges |
| Light pastel text on pastel background | Pastel surfaces with deep, warm ink text |
| Childish no matter who the user is | Tuned to the audience. Adults get 大人かわいい. |

## Where kawaii comes from visually

- **Baby-schema proportions (ベビースキーマ)**: big heads, low-set eyes, short limbs, round bodies. In UI this becomes bottom-heavy shapes, slightly oversized icons in small buttons, and rounded, chunky ("ぽてっと") weights.
- **Line art**: give UI outlines the same weight and color as the illustration's line art (usually 1.5 to 2.5px, a dark tint rather than black). The UI then looks like it belongs to the same picture book.
- **Sticker and stationery material**: solid offset shadows, die-cut white borders, washi tape, dotted lines, stamps. Choose one material per product.
- **Faces**: two dots and a small mouth turn any shape into a character. This is powerful, so use it only where the UI has nothing else to show (empty, loading, 404, success).
- **ひらがな**: in Japanese UI, a slightly higher ratio of hiragana softens the voice (「よみこみ中」「おしらせ」). Do it in a few labels, not in whole paragraphs, and never where it hurts readability.
- **オノマトペ**: ふわっ, ぽちっ, ころん. One in a heading or button can carry a lot of charm. Several on one screen feels forced.

## Turning a request into decisions

When the user says "make it kawaii", answer these before writing any CSS:

1. Who will feel the 親しみ, and how old are they?
2. Which dialect fits them and the product?
3. What small world does it belong to?
4. Where is the star, and where is the UI on its own?
5. What is the one charm point on each screen?

If you can't answer these, ask. Don't guess pink.
