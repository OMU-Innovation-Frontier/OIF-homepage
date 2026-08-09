# Next.js 入門 — このリポジトリを教材にして

[`ONBOARDING.md`](../ONBOARDING.md) で環境構築が終わった人向けです。「なんとなく動かせるが、何が起きているかわからない」を解消するのが目的です。

一般論ではなく、**このリポジトリの実在するファイルを例に**説明します。手元でファイルを開きながら読んでください。

---

## 0. 全体像 — 一枚の絵

```
   あなたが書くもの                Next.js がやること              訪問者が見るもの
─────────────────────────    ─────────────────────    ──────────────────────
  app/about/page.tsx
  components/ui/Button.tsx  ──→   npm run build      ──→   out/about/index.html
  lib/events.ts                   （静的HTMLに変換）        out/_next/....js
  content/blog/*.mdx                                        out/_next/....css
```

ポイントは、**あなたが書く .tsx ファイルが、そのままの形で公開されるわけではない**ということ。ビルド時にHTML/CSS/JavaScriptへ変換され、その結果が公開されます。Client Componentの処理は、変換後のJavaScriptとしてブラウザにも送られます。

なぜわざわざ変換するのか。手書きのHTMLだと、ページが増えるたびにヘッダーを繰り返し書くことになり、1箇所直すために何ファイルも触ることになります。それを避けるための仕組みが React と Next.js です。

---

## 1. React — 「部品」でページを組み立てる

### コンポーネント = 見た目を返す関数

React では、画面の部品を**関数**として書きます。

`components/ui/Eyebrow.tsx` のような小さい部品を見てみてください。だいたいこういう形をしています:

```tsx
export default function Eyebrow({ children }) {
  return <span className="text-sm text-cyan-400">{children}</span>;
}
```

読み方:

- `function Eyebrow(...)` — `Eyebrow` という名前の部品を定義
- `return <span>...</span>` — HTMLっぽい記法（**JSX** と呼びます）で、見た目を返す
- `export default` — 「この部品を他のファイルから使えるようにする」という意味

使う側はこう書きます:

```tsx
import Eyebrow from "@/components/ui/Eyebrow";

<Eyebrow>次回イベント</Eyebrow>
```

**部品を1回直せば、使っている全箇所が直ります。** これが React を使う最大の理由です。

### props — 部品に値を渡す

同じ見た目で中身だけ違うものを作りたい。そのとき使うのが **props**（プロパティ）です。関数の引数だと思ってください。

```tsx
function EventCard({ title, date }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

// 使う側
<EventCard title="LT会 第3回" date="2026.09.12" />
```

JSX の中で `{ }` で囲むと、その中はJavaScriptとして評価されます。`{title}` は「title という変数の中身を表示しろ」の意味です。

### state — 画面が変化する仕組み

props は「渡されたら変わらない値」ですが、ユーザーの操作で変わる値もあります。それが **state** です。

実物が `app/faq/FAQClient.tsx` にあります。FAQのアコーディオン（クリックで開閉する）です。

```tsx
"use client";
import { useState } from "react";

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState(null);
  // openIndex     = 今どの質問が開いているか
  // setOpenIndex  = それを変更する関数

  return (
    <button onClick={() => setOpenIndex(0)}>
      Discordって何ですか？
    </button>
  );
}
```

`setOpenIndex(0)` が呼ばれると、React が「値が変わった」と検知して、**その部品だけ描き直します**。DOMを手で書き換えるコードは一切書きません。

### 一覧を描く — `.map()`

配列から複数の要素を作るときは `.map()` を使います。このリポジトリで最頻出のパターンです。

```tsx
import { events } from "@/lib/events";

{events.map((event) => (
  <EventCard key={event.slug} title={event.title} date={event.dateLabel} />
))}
```

`key` は React が「どれがどれか」を見分けるための目印です。**忘れると警告が出ます。** 一意な値（`slug` や `id`）を渡してください。配列の添字（index）は避けます。

---

## 2. Next.js — ルーティングとビルド

React だけでは「URLとページの対応」を自分で書く必要があります。それを引き受けてくれるのが Next.js です。

### App Router — フォルダ構造がそのままURL

このリポジトリは **App Router** という方式を使っています。ルールは1つだけ:

> `app/` 以下のフォルダ名がURLになり、その中の `page.tsx` がそのページの中身になる。

| ファイル | URL |
|---|---|
| `app/page.tsx` | `/` |
| `app/about/page.tsx` | `/about/` |
| `app/faq/page.tsx` | `/faq/` |
| `app/blog/page.tsx` | `/blog/` |
| `app/blog/[slug]/page.tsx` | `/blog/なんでも/` |

**新しいページを作る = `app/名前/page.tsx` を作る。** ルーティングの登録作業は不要です。

> URLの末尾に `/` が付くのは `next.config.js` の `trailingSlash: true` の設定によるものです。リンクを書くときも `/about/` のように末尾スラッシュを付けてください。

### layout.tsx — 全ページ共通の枠

`app/layout.tsx` は、**すべてのページを包む枠**です。ヘッダー・フッター・フォント・SEOの基本設定がここにあります。

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}   {/* ← ここに各ページの page.tsx が入る */}
        <Footer />
      </body>
    </html>
  );
}
```

`{children}` の場所に、そのときのページが差し込まれます。だからすべてのページにヘッダーがあるのに、ヘッダーを呼ぶコードは1箇所しかありません。

**ヘッダー・フッターを直したいときは `components/layout/` を見る**、と覚えてください。

### 動的ルート `[slug]` — 1つのテンプレートで複数ページ

ブログ記事が10本あっても、`page.tsx` を10個作りません。`app/blog/[slug]/page.tsx` が1つあるだけです。

`[slug]` の角括弧は「ここは可変」の意味。`/blog/transformer-self-attention-note/` にアクセスすると `slug = "transformer-self-attention-note"` としてページが作られます。

ただし**このサイトは静的サイトなので、どのURLを作るかをビルド時に確定させる必要があります。** それをやるのが `generateStaticParams` です。

```tsx
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
```

「`content/blog/` にある記事の分だけURLを作れ」という指示です。実際、`npm run build` の出力にこう出ていました:

```
● /blog/[slug]
  ├ /blog/transformer-self-attention-note
  └ /blog/local-llm-handson-report
```

記事のmdxを1本足せば、ビルド時に自動でこのリストに増えます。

### metadata — SEOの設定

各 `page.tsx` で `metadata` を export すると、そのページの `<title>` や検索結果の説明文になります。

```tsx
export const metadata: Metadata = {
  title: "FAQ",
  description: "OIFについてよくある質問と回答。参加方法、活動内容、Discordについてなど。",
  alternates: { canonical: "https://oif-ai.com/faq/" },
};
```

`title` は `app/layout.tsx` の `template: "%s | OIF - OMU Innovation Frontier"` と合成されて、`FAQ | OIF - OMU Innovation Frontier` になります。

**新しいページを作るときは metadata を必ず書いてください。** サイトへの流入は検索経由が主です。ただし文言は対外的な表現なので、田口の確認を通してください。

---

## 3. Server Component と Client Component — いちばん混乱するところ

App Router では、**何も書かなければ Server Component** です。この静的サイトではビルド時（＝手元のPCやGitHub Actions）に処理されます。Server Component自身のJavaScriptは、Client Component用のJavaScript bundleには入りません。

一方、クリックや入力に反応する必要がある部品は **Client Component** にします。ファイルの**先頭行**にこう書きます:

```tsx
"use client";
```

`app/faq/FAQClient.tsx` の1行目がまさにこれです。

### 使い分け

| | Server Component（デフォルト） | Client Component（`"use client"`） |
|---|---|---|
| 主に処理される場所 | このサイトではビルド時 | 初期HTML生成後、ブラウザで操作可能になる |
| `useState` / `useEffect` | **使えない** | 使える |
| `onClick` などのイベント | **使えない** | 使える |
| `fs` でファイルを読む | 使える | 使えない |
| ブラウザに送るJS | ゼロ | 送られる（重くなる） |

**原則: 迷ったら Server Component。動きが必要な部分だけを小さく切り出して Client Component にする。**

このリポジトリが実際そうなっています。`app/faq/page.tsx` は Server Component で metadata だけを持ち、開閉の動きがある部分だけを `FAQClient.tsx` に分離しています。

```tsx
// app/faq/page.tsx — Server（"use client" なし）
export const metadata = { title: "FAQ", ... };
export default function FAQPage() {
  return <FAQClient />;   // 動く部分だけ Client に委譲
}
```

`"use client"` の境界を大きくすると、ブラウザへ送るJavaScriptが増えやすくなります。また、Client Componentからは `metadata` をexportできません。**動きが必要な部分だけに留めてください。**

### よくあるエラー

> `You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client"`

→ `useState` や `onClick` を使う部分を小さなコンポーネントに分け、そのファイルの先頭に `"use client"` を付けます。ページ全体へ付ける前に、`app/faq/page.tsx` と `FAQClient.tsx` の分け方を参考にしてください。

---

## 4. データはどこにあるか — `lib/` が実質のCMS

このサイトにはデータベースがありません。イベントもお知らせもプロジェクトも、**TypeScriptの配列として `lib/` に直書き**されています。

`lib/events.ts` を開いてみてください:

```ts
export interface OIFEvent {
  slug: string;       // 一意なID
  title: string;
  subtitle: string;
  date: string;       // "2026-06-19" 形式。並び替え用
  dateLabel: string;  // "2026.06.19 (金)" 表示用
  timeLabel: string;
  place: string;
  audience: string;
  highlights: string[];
  flyer?: string;     // 「?」は「あってもなくてもいい」
}

export const events: OIFEvent[] = [
  { slug: "code-deeplearning-2026-06", title: "コードで学ぶ！DeepLearning", ... },
];
```

`interface` が「このデータはこの形でなければならない」という決まりです。項目名を間違えたり、必須項目を書き忘れたりすると、`npm run build` のときにエラーで教えてくれます。これが TypeScript の恩恵です。

**イベントを1件追加する = `events` 配列にオブジェクトを1個足す。** 次回イベントは `getNextEvent()` が日付から選び、過去イベントは `getPastEvents()` が新しい順に並べるため、配列の位置だけに頼って表示順を決めません。表示側のコードは触りません。

ブログだけは別で、`content/blog/*.mdx` というファイルを `lib/blog.ts` が読みに行きます（`fs.readFileSync`）。これはビルド時にサーバー側で動くので許されている書き方です。Client Component からは絶対にできません。

---

## 5. TypeScript — 最低限これだけ

`.tsx` は「TypeScript + JSX」です。JavaScript に「型」を足したもので、変数がどんな種類の値かを書きます。

```ts
const title: string = "LT会";        // 文字列
const count: number = 3;              // 数値
const isOpen: boolean = true;         // true / false
const tags: string[] = ["AI", "LT"];  // 文字列の配列
let flyer: string | undefined;        // 文字列、または値なし
```

型が合っていないと、実行する前に、エディタが赤波線で教えてくれます。**バグを実行前に見つけるための仕組み**です。最初は鬱陶しく感じますが、初心者ほど恩恵が大きいので、赤波線は必ず消してからコミットしてください。

`any` という「何でもあり」の型がありますが、TypeScript を使う意味が消えるので使わないでください。

---

## 6. Tailwind CSS — className の読み方

このサイトは CSS ファイルをほとんど書きません。代わりに `className` に短い名前を並べます。

```tsx
<div className="flex items-center gap-4 rounded-lg bg-slate-900 p-6 text-white">
```

これは以下のCSSと同じ意味です:

```css
display: flex;
align-items: center;
gap: 1rem;
border-radius: 0.5rem;
background-color: #0f172a;
padding: 1.5rem;
color: white;
```

覚え方の基本:

| 種類 | 例 | 意味 |
|---|---|---|
| 余白 | `p-4` `px-6` `mt-2` | padding / 横方向のpadding / 上のmargin |
| 並べ方 | `flex` `grid` `gap-4` | 横並び / 格子 / 要素間の隙間 |
| 文字 | `text-sm` `font-bold` `text-white` | サイズ / 太さ / 色 |
| 背景・枠 | `bg-slate-900` `rounded-lg` `border` | 背景色 / 角丸 / 枠線 |
| レスポンシブ | `md:flex-row` | 画面が中サイズ以上のときだけ適用 |
| 状態 | `hover:text-cyan-400` | ホバー時だけ適用 |

数字は基本 `1 = 0.25rem = 4px` です。`p-4` は 16px。

**スマホ優先で書きます。** 何も付いていないクラスがスマホ、`md:` `lg:` が付いたものが画面が広いときの上書きです。

```tsx
<div className="flex flex-col md:flex-row">
  {/* スマホ: 縦積み / PC: 横並び */}
</div>
```

クラス名を覚える必要はありません。VS Code に Tailwind CSS IntelliSense を入れると補完が効きます。既存のコンポーネントからコピーして調整するのが最速です。

---

## 7. import のパス — `@/` は何か

```tsx
import Header from "@/components/layout/Header";
import { events } from "@/lib/events";
```

`@/` は **プロジェクトのルートフォルダ**を指す別名です（`tsconfig.json` の `paths` で設定）。`../../../components/...` のような相対パス地獄を避けるためのものです。

**このリポジトリでは常に `@/` を使ってください。**

`import X from` と `import { X } from` の違い:

- `export default` されたものは `import X from "..."`（名前は自由に付けられる）
- `export const X` されたものは `import { X } from "..."`（名前は一致させる）

---

## 8. 実際にやってみる — 新しいページを1枚作る

ここまでの内容を全部使います。`/example/` というページを作る手順:

**1.** `app/example/page.tsx` を新規作成

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サンプルページ",
  description: "練習用のページです。",
  alternates: { canonical: "https://oif-ai.com/example/" },
};

export default function ExamplePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold md:text-5xl">サンプルページ</h1>
      <p className="mt-4 text-slate-400">
        ここが本文です。
      </p>
    </main>
  );
}
```

**2.** `npm run dev` が動いている状態で `http://localhost:3000/example/` を開く。表示されるはずです。

**3.** `app/sitemap.ts` の `staticRoutes` に `https://oif-ai.com/example/` を追加します。

**4.** `npm run build` を実行。出力されるルート一覧に `/example` が増えていれば成功です。

ヘッダー・フッターは `app/layout.tsx` が自動で付けているので、書く必要がなかったことを確認してください。

（練習が終わったらこのファイルは消してください。実際に公開するページはPRで相談してからにしましょう。）

---

## 9. つまずきポイント早見表

| エラー / 症状 | 意味と対処 |
|---|---|
| `useState only works in a Client Component` | stateが必要な部分を小さなコンポーネントへ分け、そのファイル先頭に `"use client"` を追加 |
| `Module not found: Can't resolve '@/...'` | パスのタイプミス。フォルダ名・大文字小文字を確認（Macは大小を区別しないがCIのLinuxは区別する。ここでの事故が多い） |
| `Each child in a list should have a unique "key" prop` | `.map()` の中の要素に `key={一意な値}` を付ける |
| `Type 'string' is not assignable to type 'number'` | 型が違う。`lib/` の `interface` の定義を見て合わせる |
| ページが404になる | ファイル名が `page.tsx` か確認（`Page.tsx` や `index.tsx` ではダメ）。URL末尾の `/` も確認 |
| `next/image` でエラー | `next.config.js` では `images.unoptimized: true`。まず `components/site/NextEvent.tsx` など既存の `next/image` の使い方に合わせ、画像パス・`width` / `height` または `fill` を確認 |
| 変更が反映されない | `npm run dev` を止める → `.next` フォルダを削除 → 再起動 |

---

## 10. もっと知りたい人へ

- **Next.js 公式（App Router）** https://nextjs.org/docs/app — 一次情報。英語だが図が多い
- **React 公式（日本語）** https://ja.react.dev/learn — 「UIの記述」「インタラクティビティの追加」の2章だけで十分戦えます
- **Tailwind 公式** https://tailwindcss.com/docs — 検索窓に「padding」等と入れて使う辞書
- **サルワカ / MDN** — HTML/CSS の基礎から不安なとき

ただし、**このリポジトリの既存コードを読むのがいちばん速い**です。似たことをやっているファイルを探して真似る。それで9割は片が付きます。

わからないことは Discord で聞いてください。「調べてから聞く」より「30分詰まったら聞く」を推奨します。
