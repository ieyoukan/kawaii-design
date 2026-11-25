---
name: kawaii-design
description: Designs or redesigns UI so it feels kawaii (かわいい) in the Japanese sense, meaning warm, approachable and easy to grow attached to, without falling into pastel-and-sparkle "cute" slop. The UI carries its own charm through shape, spacing, color, type, icons and small details. When a screen has strong content such as characters, illustrations, product photos, artwork, screenshots or a game view, the UI steps back and presents that content. Use when the user asks for kawaii, cute, かわいい, ゆるかわ, ゆめかわ, 大人かわいい, friendly, playful or 親しみやすい UI, for character and IP sites, fan pages, shops, galleries, hobby, kids or community apps, or when an existing cute UI feels noisy, childish or generic. Works on React, Tailwind, HTML and CSS.
---

# Kawaii Design

> UIそのものに可愛さを持たせるが、キャラクターや作品などのコンテンツがあるときは、UIはそれを引き立てる脇役に回る。

The UI is the stage. Characters, illustrations, products and people's work may be the star.

## Kawaii is not "cute"

Ask a model for "cute" and you usually get the same thing: a pink or purple pastel gradient, ✨ and emoji in every label, heart icons, pill-shaped everything, a bouncing animation and "Yay!" copy. That is **cute slop**. It spreads decoration evenly over every element and ends up feeling like a template.

Kawaii (かわいい) is a feeling the viewer has, not a filter you apply. It is made of **親しみ** (approachability), **愛着** (attachment, "I want to keep using this") and a soft **守ってあげたい** (the urge to look after something small). In design it comes from:

- **丸み**: softness in shapes, chosen per size, not maximum radius everywhere.
- **ゆとり**: generous space. Kawaii never feels cramped.
- **小ささと控えめさ**: small, modest, slightly imperfect details, like a tiny tail on a speech bubble or a face in an empty state.
- **抜け感・ゆるさ**: a little looseness. It doesn't look like it is trying hard.
- **一点の愛嬌**: one charming detail per area, not one on everything.
- **やさしい言葉**: gentle, warm copy instead of hype.
- **世界観**: a small coherent world (one motif, one palette, one material) instead of random cute stickers.

Kawaii also comes in **dialects**: ゆるかわ, ゆめかわ, ポップ, レトロ, 大人かわいい and others. Always pick one. Unqualified "cute" is exactly the default you are avoiding. See [references/dialects.md](references/dialects.md).

How to turn the word "kawaii" into concrete design decisions is covered in [references/kawaii-vs-cute.md](references/kawaii-vs-cute.md).

## Core principles

- The interface should feel cute even without illustrations.
- Cuteness comes from shape, spacing, color, typography, and gentle detail.
- When strong content exists, the interface should support it rather than compete with it.
- The UI is the stage; characters, illustrations, products, or user content may become the star.
- Decorative elements should frame the experience, not overwhelm it.
- **Do not make every element equally cute. If everything is loud, nothing feels special.**
- If the design lacks warmth or personality, request assets instead of faking cuteness with excessive decoration.

## Stage mode and Star mode

Before changing anything, find the star. Star content means characters, mascots, illustrations, product photos, artwork, user-made work, screenshots, game screens, and photos of people or pets.

Decide the mode **per region**, not per page. A hero with a character is Star mode, and the settings form under it is Stage mode.

### Stage mode: no strong content

The UI is the only thing to look at, so it carries the charm.

- Buttons, cards and inputs carry the softness and personality.
- Add small motifs, at most one per region.
- Build the 世界観 with the background tint and the headings.
- Empty states, loading, 404 and success screens may have a small face or character. These are the moments where the UI is the only thing on screen.

### Star mode: strong content present

The UI keeps its soft shapes, type and copy, but lowers its voice.

- **Go big.** An illustration that is the star takes at least half of the first screen. For a tall full-body character, measure only by height: about 85 to 100% of the viewport height. The area rule doesn't apply. For wide art, measure by area. It may go full bleed, break out of its frame, or cross into the next section. On mobile, the star must appear in the first screen, so reorder if needed. See the layouts in [references/shapes-and-patterns.md](references/shapes-and-patterns.md).
- Keep backgrounds quiet, and choose the atmosphere on purpose: white, a flat tint from the star, or a page-wide 透明感 pastel gradient (see [references/backgrounds-and-images.md](references/backgrounds-and-images.md)). Don't use a competing hue, and don't default to warm cream or to an all-one-color page.
- Keep decoration minimal and push it to the edges, away from faces and focal points.
- **Make the image itself good before adding anything around it.** Clean cutout edges, a contact shadow where the character touches the ground, a soft drop shadow tinted with the star's own dark color, and enough resolution do more than any frame. See [references/backgrounds-and-images.md](references/backgrounds-and-images.md).
- Shapes behind the star are part of the composition, not a box that holds it. A circle, arch or blob can be partial, offset and shared with other elements, and the star overlaps it freely. Don't enclose the star to "protect" it, and don't use borders.
- Lead the eye toward the star with whitespace, alignment and one accent that points in.
- Take UI colors from the star's palette, at lower saturation.
- The cutest thing on the screen is the star. Never place a UI mascot next to the product's own character.
- Check the star against its own tinted background. When the star is muted or grayish, a background of the same hue swallows it. Lighten the background until the star clearly separates. When the star is **lighter** than the background (white hair, a white dress), don't be afraid of it. A white character on a pale page works when the image has a clean edge and a good tinted shadow. Separate it with shadow and edge quality first. A colored shape behind it is optional composition, not a requirement.
- When several characters appear together, keep their relative scale, so they look like they are standing side by side. Crop transparent padding from the images, but don't scale each one to the same height.
- If the product already has design tokens (theme colors per character, a brand font), use them instead of the dialect palette. The star's own website or brand counts as the product. Existing tokens win over this skill's house-style warnings for the values they actually define, like colors and fonts. Use the subset that fits the star. A brand accent that fights the dialect can stay unused. You may add a display face for titles on top of a brand body font. A brand font is fine even if this skill warns about overusing it.
- Keep the world going below the hero. Stage sections after a Star hero often drop back to generic cards, tables and lists. Show photos like prints, use the motif in timelines, and carry one element of the hero through the middle of the page. See "Keeping Stage sections warm" in [references/shapes-and-patterns.md](references/shapes-and-patterns.md).
- Don't add a site-name header on a page about one character or person. The star's name in the hero is the title. Apps keep their normal app header.
- A speech bubble's tail points at the speaker. Put quotes next to the character they belong to. On mobile, place the bubble above or beside the head inside the star's area, with the tail pointing down or sideways at the face. If the star changes pose, check that arms don't cover the bubble. Move it or hide it during the other pose.
- No hint text ("tap to change pose"). Let the star respond on hover and tap, and let people discover it.

> 空白を埋めるための装飾はOK。主役を食う装飾はNG。

## Write less

Every line of text on the page has to be content: the star's own words, an essential fact, or the name of something. Don't add captions, hints, sub-labels, source notes or narration that comments on the page. Small text is almost always one of these, so if you're setting something small, delete it instead. Use only two text roles for content: body and display. Display text (a logo, the star's name, titles) may come in a few sizes, but nothing on the page is smaller than body. If a detail needs a smaller size to fit (a description under a timeline entry, a category or price under a product), it shouldn't be there. Short names of things at body size are fine. Functional UI text is content too: form labels, error messages, button labels and one sentence in an empty state that says what will happen. Keep it at body size and as short as possible. Structure stays simple: a title and its content, without a stack of label, heading, lead paragraph and buttons.

Images that come from the star's own official sources need no credit line on the star's own page. Don't use third-party art, like fan art or illustrations of other people, unless the user confirms the rights.

## Where the cuteness lives

Cuteness can come from many layers: the shape language, display type, a faint pattern (gingham, polka dots, a dashed grid), the illustration's layout, copy and motion. **Titles and motion deserve real effort**: set the star's name and section titles in a display face with a treatment, and animate arrivals (the star settling in, titles appearing letter by letter, sections rising). Pick two or three for a project and leave the rest plain. Which ones you pick should change with the star and the world. If every project gets the same cream background, raised yellow button and outlines, that is a house style, not a design.

## Cuteness budget

Each region gets one **charm point** (愛嬌ポイント), the single element that carries the most personality. A motif repeated quietly as a system (bullets, small label icons, timeline markers in the same style) belongs to the world and doesn't count as extra charm points. Neither do shapes used for their function, like round avatars. What counts is anything that stands out. Everything else stays soft and quiet. In Star mode the charm point is the star itself, and the UI's charm only lives in shape, type and copy. An interaction on the star (a pose change on tap, a blink) counts as part of the star, not as a separate UI charm point.

If you can't name the charm point of a region, it has either none or too many.

## Run it

1. **Look.** Find the files that render the screen. Render and screenshot it if you can, so you judge what people actually see. When building something new, there is nothing to look at yet. Do the investigation in "When the request is vague" instead, and still render each draft as you go.
2. **Find the star.** List the content on the screen and assign Stage or Star mode to each region.
3. **Set the direction.** Write eight lines:
   - **Product**: what it is and who it is for, in one plain sentence.
   - **Dialect**: one from [references/dialects.md](references/dialects.md), with a reason.
   - **Feel**: two or three concrete words. "Cute", "kawaii", "playful" and "fun" are banned on their own because they say nothing. Write something like `ふわっと、のんびり、少し照れ屋` or `ぽてっとした文房具みたい`.
   - **World**: the small world the UI belongs to, such as a stationery shop, a bakery, a picture book or a sticker sheet. It sets the motif, the material and the palette.
   - **Star**: what the star is on each screen, or "none, Stage mode".
   - **Shape language**: circle, rounded rectangle or organic, read from the star, and where each one is used. Also decide how sections meet: no boundary, or a layered wave edge. See [references/shapes-and-patterns.md](references/shapes-and-patterns.md).
   - **Atmosphere**: simple (white or a flat tint from the star) or 透明感 (a page-wide, very gentle pastel gradient, a little more grown-up and airy). Say why. See [references/backgrounds-and-images.md](references/backgrounds-and-images.md).
   - **Type and motion**: the display face and title treatment, and how the star and titles arrive.
4. **Confirm.** Show the direction and wait for the user's answer before editing. Skip this only when the user has already said to just do it.
5. **Apply the passes in order**, each across the whole screen before the next: shape → spacing → color → type → copy → icons → motif and detail → motion. Shape and spacing come first because they decide most of the warmth. Motif and motion come last because they should only add to a screen that already works. Values are in [references/tokens.md](references/tokens.md).
6. **Check** against the checklist below and [references/anti-patterns.md](references/anti-patterns.md). Render again and fix what remains.
7. **Report** the direction, the mode per region, the charm point per region and what each pass changed. For a new build, report what you decided in each pass instead. Also keep the direction as a comment at the top of the main file, so the next person can see why things look the way they do.

### When the request is vague

"Make it cute" says nothing about the star, the audience or the dialect, and those three decide almost everything. Resolve them in this order.

1. **Investigate first.** Look in the code and the page for existing assets (images, SVGs, character art, product photos), brand colors, the logo, the copy, the README and hints about who it is for. If the product, brand or character exists publicly and you can browse, look up its official art and colors. Never research "kawaii design trends". The direction comes from the product, not from what is popular.
2. **Ask only what you couldn't find**, and only questions whose answer changes the design. Ask three at most, each with a recommended default:
   - Is there star content (a character, illustrations, product photos, people's work)? Can you share it?
   - Who uses it and how old are they? This decides between childish and 大人かわいい.
   - Which dialect feels closest? Offer two or three candidates, one line each.
3. **If the user says おまかせ or "just do it"**, still investigate, but skip both the questions and the confirmation. Write your assumptions at the top of the direction, and clearly mark anything you invented (a fictional character, placeholder copy).

Never invent a mascot for a real product without asking. It becomes the star, and it is hard to undo. For demos and fictional products it's fine.

### When the screen has no warmth to work with

Do not fake it with stacks of emoji, sparkles, hearts or generic clip-art creatures. First build warmth from shape, color, type and copy. If it still feels flat, tell the user what asset would help (a mascot, a spot illustration, real product photos) and leave a clearly marked, correctly sized slot for it. If an image generation tool is available, offer to make one that matches the dialect and the world.

## Checklist

- [ ] Star mode: when you squint, is the star the first thing you see?
- [ ] Stage mode: does the UI still feel warm with every image removed?
- [ ] Can you point to exactly one charm point per region?
- [ ] Is the radius different for small and large elements, instead of everything being a pill?
- [ ] Does the shape language (circle, rounded rectangle, organic) match the star, and can you say why?
- [ ] Is every border, cream background and raised button justified by the world or dialect, rather than habit?
- [ ] Star mode: is the illustration big enough to be the star, at least half of the first screen?
- [ ] Are patterns faint (you almost miss them) and kept away from text, faces and works?
- [ ] Are there no hard straight edges between section colors, and no per-section gradients?
- [ ] Do the name and section titles use a display face with a treatment, and do they animate in?
- [ ] Do the Stage sections below the hero still belong to the same world (prints, motif markers, the hero's shapes)?
- [ ] Does every speech-bubble tail point at its speaker, on desktop and mobile?
- [ ] Is there no habitual site-name header on a single-character page?
- [ ] Does text meet 4.5:1 contrast even on pastel backgrounds? Pastel surfaces need deep ink text.
- [ ] No emoji used as icons or labels, no ✨, and no gradients except the one page-wide 透明感 background.
- [ ] Is the star's image good on its own: clean edges, a contact shadow, a tinted soft shadow and enough resolution?
- [ ] Is the star free in the composition rather than boxed inside a shape?
- [ ] No captions, hints, sub-labels, source notes or narration. Every line is the star's own words, an essential fact or a name.
- [ ] Only two text sizes for content (body and display). No small secondary text anywhere.
- [ ] Does the page end quietly, without a dark band, circle badges, accent pill buttons or a label-heading-paragraph-buttons stack?
- [ ] Is the copy gentle and specific, without stacked exclamation marks or baby talk (unless that is the brand's established voice)?
- [ ] At most one looping animation on screen, and `prefers-reduced-motion` is respected.
- [ ] Do the forms, tables, toggles and errors share the same softness, not just the hero?
- [ ] Does it fit the audience? Kawaii does not have to be childish. For adults, lean toward 大人かわいい.
