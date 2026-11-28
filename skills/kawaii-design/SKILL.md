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

## Read the character first

Understanding the character is the core of this skill. Before choosing colors or shapes, read who the character is: apparent age (幼い, 少女, 大人), temperament (元気, おっとり, 眠たげ, クール, ダウナー, 照れ屋, 上品), voice (how they write, how much ひらがな), main color and signature details (accessories, colors, motifs). Then let that decide the type, shapes, color, copy and motion.

- A child-like character gets mostly ひらがな headings, very round chunky type, round shapes, bright pastels and bouncy motion.
- A grown-up character gets 大人かわいい, which looks very different: thin, light titles, small body text (12 to 14px with a line height around 2), one flat pale background with one accent color, lots of whitespace, slow motion and exactly one sweet detail per screen.
- A sleepy or shy character gets soft, slow and round. A cool or downer character gets cooler colors, straighter lines and little motion.
- Design for the character's fans. Everything follows the character, including headings, labels and decoration.

When there is no character, read the product's persona the same way. Details and tables are in [references/character.md](references/character.md).

## Stage mode and Star mode

Before changing anything, find the star. Star content is **visually strong**: characters, mascots, illustrations, product photos, artwork, user-made images, screenshots, game screens, and photos of people or pets. Text is never the star on its own. A timeline of text posts, an article list, a chat, a form or a dashboard is Stage mode, even though the posts are the "content". Only the images inside them (a photo in a post, a cover image) are small stars.

Decide the mode **per region**, not per page. A hero with a character is Star mode, and the settings form under it is Stage mode.

### Stage mode: no strong content

The UI is the only thing to look at, so it has to be **clearly cute on its own**. This is where kawaii-design must win against a generic "make it cute" result, not just look more tasteful. Restraint is for Star mode. In Stage mode, spend the cuteness budget generously, and keep it coherent.

- **Draw.** Illustration is the strongest source of cuteness, so make your own: a mascot or a face in the logo, small character avatars (animals, objects, round creatures) instead of initials, spot illustrations in posts, empty states and headers. Draw them in inline SVG with one consistent style (same line weight, same proportions, same palette). Inventing characters is expected, for real products as well as fictional ones. If the product already has a character, use that one instead of adding a second.
- **Unify the palette.** Pick three hues plus white and an ink color (in ゆめかわ: the character's main hue plus two partners, with a small accent allowed only inside the background), and take every color on the page from that set: background, panels, buttons, icons, avatars and illustrations. A pink nav on a green page with yellow buttons is scattered, not cute.
- **Use color with joy, and pass the first-glance test.** Cuteness is judged in the first second, mostly by color. Choose a palette that reads as cute before anyone looks at the details: clear, light pastels (pink, peach, lemon, mint, sky, lavender) with a clear main color and two or three supporting colors that work as a set. Cream, pastel washes and rich pastel gradients are available.
  - Earthy or muted palettes (moss, sage, olive, beige, dusty or gray-heavy colors) read as calm, natural or tasteful, not cute. Even if the world is a forest or a rainy day, find its bright, light side: young leaves in spring sun, a pink sky after rain, red persimmons, lemon light. Use muted palettes only when the direction explicitly asks for 大人かわいい or the brand demands them.
  - Check: take a screenshot, shrink it to thumbnail size and look at it next to a generic "make it cute" result. If the generic one reads as cuter at a glance, raise the lightness and saturation of your pastels, or bring in a warmer accent such as pink or peach.
- **Give the controls personality.** Buttons, tabs, toggles, the compose box and the like/reaction can carry the motif (a paw like button, a drop counter, a sticker button). Raised sticker buttons are allowed here.
- **Name things in the world's words** (a post is a 「もちる」, a like is a 「しずく」) and keep the copy warm.
- **Coherence still matters.** One world, one illustration style, one shape language and one motif family. The difference from cute slop is not less cuteness. It is that everything comes from the same world, and that each region still has one thing that stands out most.
- Empty states, loading, 404 and success screens get a character moment.

### Star mode: strong content present

The UI keeps its soft shapes, type and copy, but lowers its voice.

- **Go big.** An illustration that is the star takes at least half of the first screen. For a tall full-body character, measure only by height: about 85 to 100% of the viewport height. The area rule doesn't apply. For wide art, measure by area. It may go full bleed, break out of its frame, or cross into the next section. On mobile, the star must appear in the first screen, so reorder if needed. See the layouts in [references/shapes-and-patterns.md](references/shapes-and-patterns.md).
- Keep backgrounds quiet, and choose the atmosphere on purpose: white, a flat tint from the star, a page-wide 透明感 pastel gradient, or the ゆめかわ background behind a character with pastel colors (see [references/backgrounds-and-images.md](references/backgrounds-and-images.md)). Don't use a competing hue, and don't default to warm cream or to an all-one-color page.
- Keep decoration minimal and push it to the edges, away from faces and focal points.
- **Make the image itself good before adding anything around it.** Clean cutout edges, a contact shadow where the character touches the ground, a soft drop shadow tinted with the star's own dark color, and enough resolution do more than any frame. See [references/backgrounds-and-images.md](references/backgrounds-and-images.md).
- Let the star overlap the edge of any shape behind it. A partial frame, offset mat, or low-contrast edge can echo the character or product while leaving its focal point open.
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

Every line of text on the page has to be content: the star's own words, an essential fact, or the name of something. Don't add captions, hints, sub-labels, source notes or narration that comments on the page. Use body and display text for most content. Display text may come in a few sizes. Keep supporting context at a readable body size, and use `<ruby>` when a word genuinely needs a reading. If a detail only fits when shrunk below body size, reconsider the detail or give it room. Functional UI text is content too: form labels, error messages, button labels and one sentence in an empty state that says what will happen. Structure stays simple: a title and its content, without a stack of label, heading, lead paragraph and buttons.

Images that come from the star's own official sources need no credit line on the star's own page. Don't use third-party art, like fan art or illustrations of other people, unless the user confirms the rights.

## Where the cuteness lives

- **Shapes and seams.** Start with an open layout, shared backgrounds, and generous gaps. When a frame or edge adds something, borrow its shape from what it holds or does: a heart for a personal gift, a paper fold for notes, or a speech-bubble edge for a reply. Use a tinted fill, a partial outline, or a curved edge to carry that silhouette. Let background color changes meet at a shallow curve. See [content-shaped frames and edges](references/shapes-and-patterns.md#content-shaped-frames-and-edges).
- **Background texture.** If a plain draft feels sparse, try a low-contrast pattern in the open parts of the background: tiny polka dots, gingham, or a dashed check. Look for usable background art first. If a specific illustration or texture would shape the design, invite the user to share it and keep working with a CSS pattern as a fallback. See [backgrounds-and-images.md](references/backgrounds-and-images.md).
- **Section titles.** Give each major section one visible `h2`. When the user asks for background lettering, text layered behind artwork, or section titles like an illustrator site, make that `h2` oversized with a thin, soft outline. Layer the artwork over part of it so the artwork draws the eye first. For regular headings, vary the display scale or use hiragana when it suits the wording. See [title treatments](references/shapes-and-patterns.md#title-treatments) and the [HTML example](references/organic-sections.html#paper).
- **Motion and scrolling.** Include one decorative animation per page or app view by default, such as a single entrance on the hero heading or the star. Use native smooth scrolling for in-page navigation. Preserve functional feedback and honor `prefers-reduced-motion` for both the animation and scrolling. See [tokens.md](references/tokens.md#motion).

## Cuteness budget

Each region gets one **charm point** (愛嬌ポイント), the single element that carries the most personality. A motif repeated quietly as a system (bullets, small label icons, timeline markers in the same style) belongs to the world and doesn't count as extra charm points. Neither do shapes used for their function, like round avatars. What counts is anything that stands out. Everything else stays soft and quiet. In Star mode the charm point is the star itself, and the UI's charm only lives in shape, type and copy. An interaction on the star (a pose change on tap, a blink) counts as part of the star, not as a separate UI charm point.

If you can't name the charm point of a region, it has either none or too many.

## Run it

1. **Look.** Find the files that render the screen. Render and screenshot it if you can, so you judge what people actually see. When building something new, there is nothing to look at yet. Do the investigation in "When the request is vague" instead, and still render each draft as you go.
2. **Read the character and find the star.** Read the character (or the product's persona) as described in "Read the character first". List the content on the screen and assign Stage or Star mode to each region.
3. **Set the direction.** Write nine lines:
   - **Character**: apparent age, main and second temperament, voice, main color and signature details, in one line. For example `幼い・眠たげ+照れ屋・ひらがなで「〜」が多い・ねこみみ、三日月のピン` or `大人・上品+少しおちゃめ・です・ます・リボンと真珠`. See [references/character.md](references/character.md).
   - **Product**: what it is and who it is for, in one plain sentence.
   - **Dialect**: one from [references/dialects.md](references/dialects.md), with a reason.
   - **Feel**: two or three concrete words. "Cute", "kawaii", "playful" and "fun" are banned on their own because they say nothing. Write something like `ふわっと、のんびり、少し照れ屋` or `ぽてっとした文房具みたい`.
   - **World**: the small world the UI belongs to, such as a stationery shop, a bakery, a picture book or a sticker sheet. It sets the motif, the material and the palette.
   - **Star**: what the star is on each screen, or "none, Stage mode".
   - **Shape language**: where the layout stays open, which detail from each featured section can shape its frame or edge, and where a change of background needs a curved edge. See [references/shapes-and-patterns.md](references/shapes-and-patterns.md).
   - **Atmosphere**: simple, 透明感, or ゆめかわ. Decide which background image or faint pattern fits the direction and where the background needs to stay quiet. See [references/backgrounds-and-images.md](references/backgrounds-and-images.md).
   - **Type and motion**: the scale and layering of the section headings, the one element that moves and when it starts, and which in-page links scroll smoothly.
4. **Confirm.** Show the direction and wait for the user's answer before editing. Skip this only when the user has already said to just do it.
5. **Apply the passes in order**, each across the whole screen before the next: shape → spacing → color → type → copy → icons → motif and detail → motion. Shape and spacing come first because they decide most of the warmth. Motif and motion come last because they should only add to a screen that already works. Values are in [references/tokens.md](references/tokens.md).
6. **Check** against the checklist below and [references/anti-patterns.md](references/anti-patterns.md). Render again and fix what remains.
7. **Report** the direction, the mode per region, the charm point per region and what each pass changed. For a new build, report what you decided in each pass instead. Also keep the direction as a comment at the top of the main file, so the next person can see why things look the way they do.

### When the request is vague

"Make it cute" says nothing about the star, the character or the dialect, and those three decide almost everything. Resolve them in this order.

1. **Investigate first.** Look in the code and the page for existing assets (character art, product photos, background images or textures), brand colors, the logo, the copy, the README and hints about who it is for. If the product, brand or character exists publicly and you can browse, look up its official art and colors. Never research "kawaii design trends". The direction comes from the product, not from what is popular.
2. **Ask only what you couldn't find**, and only questions whose answer changes the design. Ask three at most, each with a recommended default:
   - Is there star content (a character, illustrations, product photos, people's work)? Can you share it?
   - What is the character like (age, temperament, voice, main color)? This decides between ひらがな-and-round and 大人かわいい, and which color leads.
   - Which dialect feels closest? Offer two or three candidates, one line each.
3. **If the user says おまかせ or "just do it"**, still investigate, but skip both the questions and the confirmation. Write your assumptions at the top of the direction, and clearly mark anything you invented (a fictional character, placeholder copy).


### When the screen has no warmth to work with

Don't fake it with stacks of emoji, sparkles and hearts. Draw instead: create the illustrations and characters yourself, in one consistent style that fits the world. Mention in the report what you invented, so the user can swap in real assets later. If an image generation tool is available, offer to make richer illustrations that match the dialect and the world.

## Checklist

- [ ] Can you state the character in one line (apparent age, temperament, voice), and would the character feel at home on this page? Do the type, kana ratio, shapes, color and motion match it?

- [ ] Star mode: when you squint, is the star the first thing you see?
- [ ] Stage mode: put your screen next to what a generic "make it cute" prompt would produce. Is yours clearly **cuter**, not just calmer? If it only looks more tasteful, add illustration, color and personality until it wins.
- [ ] Is the mode right? Text-only content (posts, articles, chats) is Stage mode.
- [ ] Stage mode: does the palette pass the first-glance test at thumbnail size (light, clear pastels, not earthy or muted)?
- [ ] Can you point to exactly one charm point per region?
- [ ] Is the radius different for small and large elements, instead of everything being a pill?
- [ ] Does the shape language (circle, rounded rectangle, organic) match the star, and can you say why?
- [ ] Can you trace each decorative frame or edge back to its content? Do text, artwork, and controls have enough room clear of points and notches?
- [ ] Does each cream background or raised button fit the world or dialect?
- [ ] Star mode: is the illustration big enough to be the star, at least half of the first screen?
- [ ] If the background feels sparse, did you try a faint pattern or suitable background art? Do text, faces and works stay easy to see?
- [ ] Does every color on the page come from one set of three hues plus white and ink?
- [ ] Do spacing and headings separate sections first? Where colors change, does the curved join stay seamless at mobile and desktop sizes?
- [ ] Does each major section have one visible heading that fits on narrow screens? If the user requested background lettering, does the artwork overlap the oversized type while leaving it readable?
- [ ] Do the Stage sections below the hero still belong to the same world (prints, motif markers, the hero's shapes)?
- [ ] Does every speech-bubble tail point at its speaker, on desktop and mobile?
- [ ] Is there no habitual site-name header on a single-character page?
- [ ] Does text meet 4.5:1 contrast even on pastel backgrounds? Pastel surfaces need deep ink text.
- [ ] Are icons free of emoji and sparkle filler? Are soft color blends confined to the page background, with hard stops allowed for CSS patterns?
- [ ] Is the star's image good on its own: clean edges, a contact shadow, a tinted soft shadow and enough resolution?
- [ ] Is the star free in the composition rather than boxed inside a shape?
- [ ] No captions, hints, sub-labels, source notes or narration. Every line is the star's own words, an essential fact or a name.
- [ ] Are body text, supporting context, and any reading aids legible?
- [ ] Does the page end quietly, without a dark band, circle badges, accent pill buttons or a label-heading-paragraph-buttons stack?
- [ ] Is the copy gentle and specific, without stacked exclamation marks or baby talk (unless that is the brand's established voice)?
- [ ] Does one decorative animation play in normal motion mode? Do in-page links scroll smoothly in that mode and jump directly in reduced-motion mode?
- [ ] Do the forms, tables, toggles and errors share the same softness, not just the hero?
- [ ] Does it fit the character's apparent age? A grown-up character gets 大人かわいい (thin type, small body text), not childish round type.
- [ ] With a ゆめかわ or rainbow background: is there white between the colors, does it swirl rather than run straight, and does the character's main color take 50 to 70% of it?
