# kawaii-design

UIそのものに可愛さを持たせるが、キャラクターや作品などのコンテンツがあるときは、UIはそれを引き立てる脇役に回る。

Claude Code 用の Skill です。「cute」ではなく、日本語の「かわいい」(親しみ・愛着・守ってあげたい気持ち) を UI に落とし込みます。

## 考え方

1. **UI単体でも可愛い**: 色、角丸、余白、タイポグラフィ、アイコン、軽い装飾で、親しみと愛着を作る。
2. **主役は状況によって変わる**: キャラクター、商品画像、作品、ゲーム画面があるなら、それが主役。
3. **可愛さは土台として使う**: 何もない画面では UI の可愛さで魅力を作り、強いコンテンツがある画面では UI が一歩引いて支える。

> 空白を埋めるための装飾はOK。主役を食う装飾はNG。
>
> 全部を同じ強さで可愛くしない。すべてが主張すると、結局どこも魅力的に見えなくなる。

## 構成

| ファイル | 内容 |
| --- | --- |
| [SKILL.md](SKILL.md) | 原則、Stage / Star モード、可愛さの予算、作業手順、チェックリスト |
| [references/kawaii-vs-cute.md](references/kawaii-vs-cute.md) | 「kawaii」を具体的なデザイン判断に翻訳する方法 |
| [references/dialects.md](references/dialects.md) | ゆるかわ、ゆめかわ、ワントーン、ポップ、レトロ、大人かわいい、ぶさかわ |
| [references/anti-patterns.md](references/anti-patterns.md) | 主役を食う装飾、cute slop、小さい文字、AI っぽい締め、偽物の可愛さ |
| [references/tokens.md](references/tokens.md) | 角丸、余白、色、フォント、アイコン、モーションの初期値 |
| [references/shapes-and-patterns.md](references/shapes-and-patterns.md) | 丸・角丸・有機的な曲線の選び方、イラストの大きな見せ方、ギンガムチェック・水玉・方眼 |
| [references/backgrounds-and-images.md](references/backgrounds-and-images.md) | 背景の空気感 (シンプル / 透明感グラデーション)、主役の画像と影の仕上げ |
| [references/refs.md](references/refs.md) | 参考サイトの分析 (a monotone portfolio site / an illustrator site / pastel campaign) |

## サンプル

どちらも、この会話の前提を持たないエージェントに `SKILL.md` と `references/` だけを渡して作らせたものです。各 HTML の先頭に、Skill の手順で決めた方針 (Direction) をコメントで残しています。

| サンプル | 内容 |
| --- | --- |
| [examples/youkan/](examples/youkan/) | 主役がいる例 (Star モード)。VRChat のアバターを主役にした紹介ページ。ワントーン、波の縁、文字ごとの登場アニメーション |
| [examples/kotonoha/](examples/kotonoha/) | 素材がない例 (Stage モード)。架空の交換日記アプリのログイン画面と、日記がまだない状態のホーム画面 |

`file://` ではフォントや一部の動きが読み込まれないことがあるので、`examples` フォルダで `python3 -m http.server` を立てて開いてください。

## インストール

```sh
git clone https://github.com/ieyoukan/kawaii-design ~/.claude/skills/kawaii-design
```

または既存のクローンにシンボリックリンクを張ります。

```sh
ln -s "$(pwd)" ~/.claude/skills/kawaii-design
```
