---
name: kawaii-design
description: Design or revise UI with a Japanese kawaii (かわいい) feel. Use for cute, playful or approachable UI, ゆるかわ, ゆめかわ, 大人かわいい, character and fan sites, or when a cute interface feels generic or noisy. Identify the content that should lead and give the interface a coherent visual personality.
---

# Kawaii Design

Use shape, space, color, type, and copy to create 親しみ and 愛着. Give each region one focal point (愛嬌ポイント). A quiet motif repeated across related elements can tie them together.

Honor the user's style or reference, such as Liquid Glass, シンプル, or 虹色. Use existing brand colors and type for decisions the request leaves open. Choose one [dialect](references/dialects.md) to guide remaining decisions.

## Read the character first

Look for the character's apparent age, main and secondary temperament, voice and kana use, palette, and signature features. Let these set the type, shapes, copy, and motion. For products without a character, read the audience and product personality the same way. Use [character.md](references/character.md) for design mappings such as sleepy, shy, or 大人かわいい.

## Stage mode and Star mode

Choose the mode per region. A hero illustration, product photo, or game view can lead in Star mode. A text-only feed, chat, form, or dashboard uses Stage mode. Artwork within those views can still be a local star.

### Stage mode

- Give the user something to grow attached to. Use the existing product character prominently, or create one suited to the product. Let its voice and motif extend to controls, avatars, and empty states. A small logo alone has little presence. Keep new illustrations in a shared style and palette.
- Start with three hues plus white and ink. In ゆめかわ, lead with the character's hue and keep any extra accent in the background. Colorful or Liquid Glass directions can use up to two more shared hues.
- For a bright direction, use clear pastels and check the thumbnail for personality. Muted tones fit a grown-up or brand-led direction. Let a motif or a warm label give key controls character.

### Star mode

- Make the star immediately visible on mobile. Aim for at least half of the first screen for wide artwork or roughly 85–100% of the viewport height for a tall full-body character. Let it overlap its backdrop when that helps the composition.
- Clear the focal area of decoration. Take softer UI colors from the star and make sure it separates from the background. For cutouts, use the star's tinted shadows and check edge quality, resolution, and relative scale when showing several characters. See [the star's image](references/backgrounds-and-images.md#make-the-stars-image-good).
- Carry one visual detail into the supporting sections below the hero. One character or person's name can serve as the page title. Existing app navigation still has a job to do.

## Design choices

- **Frames and curves.** Use open space and shared backgrounds. Borrow a featured frame or edge from its content, such as a folded paper corner for notes or a quiet heart around a personal gift. Where fills meet, use a visible organic curve. Give the footer or the end of an app feed a clear curve, and apply it to the bottom bar when that is the visible end. See [frames and section boundaries](references/shapes-and-patterns.md#content-shaped-frames-and-edges).
- **Backgrounds.** Reuse suitable art first. If an illustration would change the design, ask for it while using a simple fallback. If the surface feels bare, try faint dots, gingham, or a dashed check in open space. See [backgrounds and images](references/backgrounds-and-images.md). Glass is frosted by default. When the direction calls for refracting [Liquid Glass](references/liquid-glass.md) or glitter (ラメ), read the implementation there.
- **Headings.** Give each major section one visible `h2`. When asked for background lettering, render that heading as large type with a thin, soft outline, and layer artwork over part of it. Small companion text can add information or a helpful reading. See [title treatments](references/shapes-and-patterns.md#title-treatments).
- **Copy.** Keep content, useful state messages, and action labels. Let functional feed metadata such as handles, times, and reaction counts use at least 13px and 4.5:1 contrast. Skip filler labels, captions, redundant instructions, and generic closing calls to action. Keep a speech bubble's tail aimed at its speaker.
- **Motion.** Include one decorative animation per page or app view by default. Use native smooth scrolling for in-page navigation. Preserve functional feedback and give both effects a reduced-motion state. See [motion](references/tokens.md#motion).

## Run it

1. **Inspect.** Locate the render files and review supplied art, branding, UI copy, and the intended audience. Render the current page if possible. Use official sources when researching the character's public art or colors. Use third-party art only when its use is authorized.
2. **Set the direction.** Briefly describe the product and audience, the character or product personality, the dialect and world, the focal point in each region, the palette and atmosphere, the shapes, the type, and what moves. Ask up to three questions only when the answers would materially change the design, each with a suggested default. Show the direction before editing and wait for confirmation. If the user has already asked you to proceed or says おまかせ, continue and record your assumptions.
3. **Build.** Establish shape and spacing, then color and type, then copy, icons and motifs, and finally motion. Consult [tokens](references/tokens.md) for implementation values. Read only the reference sections relevant to the current decisions.
4. **Render and review.** Check the layout at narrow and wide widths, including the functional screens below the hero. Report the direction and material changes, and identify invented characters or placeholder assets. Keep the direction as a comment in the main file.

## What to check in the render

- At a glance, does the character feel like themselves? Does the chosen focal point lead each region, and does a Stage view carry enough personality on its own?
- Do frames reflect their content? Are the curved joins clearly visible and seamless at narrow and wide widths?
- Do headings, patterns, and other background details leave copy and artwork clear? Check normal text for 4.5:1 contrast and keep essential controls visible.
- Does the single decorative animation play in normal motion mode, and do in-page links still work in reduced-motion mode?
- When a treatment is hard to judge, compare against the relevant [anti-patterns](references/anti-patterns.md). Use [kawaii vs. cute](references/kawaii-vs-cute.md) for interpreting vague style briefs and [site references](references/refs.md) when studying a specific technique.
