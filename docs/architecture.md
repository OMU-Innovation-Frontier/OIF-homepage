# Architecture

OIF公式サイトの構成。実装に入る前に読むと迷いが減ります。

初心者向けの Next.js そのものの解説は [`nextjs-guide.md`](./nextjs-guide.md) にあります。ここは「このサイトがどう組まれているか」に絞ります。

---

## 1. 設計の前提

**このサイトは静的サイトです。** `next.config.js`:

```js
{
  output: "export",        // next build が out/ に素のHTMLを書き出す
  images: { unoptimized: true },   // 画像最適化は実行時サーバーが要るため無効
  trailingSlash: true,     // URLは /about/ の形になる
}
```

この3つの設定が、実装できることの範囲をほぼ決めています。

| できない | 理由 |
|---|---|
| API ルート（`app/api/`） | 実行時サーバーがない |
| SSR / ISR / 実行時 `fetch` | 同上 |
| 認証・セッション・フォーム送信の受け口 | 同上。外部サービス（Google Forms など）に逃がす |
| `next/image` の自動最適化 | `unoptimized: true` |
| 実行時の環境変数による分岐 | ビルド時に値が固定される |

**外部と通信が必要な機能は、原則として外部サービスへのリンクで解決します。** 参加受付は Discord、告知は SNS、というのが現在の設計です。

---

## 2. ビルドと公開の流れ

```
 ローカル                    GitHub                        公開
────────────           ─────────────────────      ──────────────────
 npm run dev
     ↓
 ブランチで作業  ──push──→  PR → レビュー → main
                                    ↓
                          .github/workflows/deploy.yml
                          （actions/setup-node@20
                            → npm ci
                            → npm run build
                            → out/ を artifact 化）
                                    ↓
                            GitHub Pages へ deploy
                                    ↓
                             https://oif-ai.com
```

- トリガーは **`main` への push** のみ（手動実行 `workflow_dispatch` も可）
- CI は Node 20 を使用。ローカルもそれ以上を推奨
- **CIは `npm run build` を走らせるだけ**です。テストもリンタもありません。ローカルでビルドが通らない変更は、CIでも必ず落ちます
- 反映まで数分。失敗は GitHub の Actions タブで確認できます

### プレビュー環境（Vercel）

**本番とは別に、PRごとのプレビューが Vercel から自動で出ます。**

PRを作ると Vercel の bot がコメントで一時URLを貼ってくれます。そこを開けば、**マージ前に自分の変更を実際の環境で確認できます。** ローカル環境を持たない人（デザイン担当など）にレビューを頼むときにも、このURLを共有すれば済みます。

- Vercel プロジェクト: `oif-homepage`（team: `omuinnovationfrontier-6238s-projects`）
- GitHub連携によりPRごとに自動デプロイ。設定ファイルはリポジトリ内に無く、Vercel 側の GitHub インテグレーションで動いています
- **本番 `oif-ai.com` は Vercel ではなく GitHub Pages です。** プレビューと本番でホスティングが別、という点に注意

> ローカルの `.vercel/` ディレクトリは**このプレビューとは無関係**です。過去に誤って別プロジェクト（`research-os-app`）へリンクされたもので、2026-08-06 に削除しました。`.vercel/` は `.gitignore` 済みなので、各自の手元で `vercel` コマンドを実行しないかぎり生成されません。

---

## 3. レイヤー構成

```
   app/            ルーティングとページ
     ↓ import
   components/     見た目の部品
     ↓ import
   lib/            データ（実質のCMS）
   content/        記事本文（.mdx）
```

依存の向きは常に上から下です。`lib/` が `components/` を import することはありません。

### app/ — ルーティング

フォルダ名がそのままURL。`page.tsx` がそのページの中身。

| パス | 内容 |
|---|---|
| `app/page.tsx` + `app/HomeClient.tsx` | トップページ |
| `app/about/` | 団体紹介 |
| `app/activities/` | 活動一覧 |
| `app/lt/` | LT会 |
| `app/projects/[slug]/` | プロジェクト個別ページ（動的） |
| `app/blog/` `app/blog/[slug]/` | ブログ一覧・記事（動的） |
| `app/news/` | お知らせ |
| `app/faq/` + `FAQClient.tsx` | FAQ |
| `app/join/` | 参加案内（Discordへの導線） |
| `app/developers/` `app/theory/` | テーマ別ページ（旧「つくる／理解する」の2軸） |

横断的なファイル:

- `app/layout.tsx` — 全ページ共通の枠。フォント（Inter / JetBrains Mono）、`Header`、`Footer`、`JsonLd`、`Analytics`、`ScrollProgress`、サイト全体のデフォルト `metadata`
- `app/template.tsx` — ページ遷移時の演出
- `app/globals.css` — Tailwind の読み込みとグローバルスタイル
- `app/sitemap.ts` — sitemap.xml を生成。**静的ルートは手書きの配列**で、ブログとプロジェクトは `lib/` から自動生成
- `app/robots.ts` — robots.txt
- `app/not-found.tsx` — 404

> **新しいページを作ったら `app/sitemap.ts` の `staticRoutes` にも追加してください。** ここは自動で増えません。忘れやすい箇所です。

### components/

| ディレクトリ | 役割 | 例 |
|---|---|---|
| `layout/` | サイト全体の骨格 | `Header`（モバイルメニューのstateを持つClient Component）、`Footer` |
| `ui/` | 汎用の小さい部品 | `Button` `Eyebrow` `Reveal` `Tilt` `Parallax` `Magnetic` `Typewriter` `DiscordCTA` `InstagramCTA` |
| `site/` | このサイト固有のセクション | `NextEvent` `PastEvents` `SectionDivider` `DivisionSplit` `HeroBackground` `NeuralBackground` `CursorGlow` `ScrollProgress` `Analytics` |
| `SEO/` | 構造化データ | `JsonLd`（検索エンジンに団体情報を伝える） |

`ui/` のアニメーション系（`Reveal` `Tilt` `Parallax` `Magnetic`）と背景演出（`HeroBackground` `NeuralBackground` `CursorGlow`）は Client Component です。**これらは見た目の演出であり、内容を持ちません。** 増やす前に、本当に必要かを考えてください。JSが増えるとスマホで重くなります。

### lib/ — コンテンツの単一ソース

このサイトに管理画面はありません。**`lib/` の TypeScript 配列がCMSの代わり**です。

| ファイル | 内容 | 使う側 |
|---|---|---|
| `events.ts` | イベント（`OIFEvent`） | `NextEvent`（配列の先頭＝次回）、`PastEvents` |
| `lt-events.ts` | LT会 | `app/lt/` |
| `news.ts` | お知らせ | `app/news/` |
| `projects.ts` | プロジェクト | `app/projects/[slug]/`、`sitemap.ts` |
| `members.ts` | メンバー紹介 | トップ |
| `links.ts` | 外部リンク（Discord招待・X・Instagram・GitHub）の単一ソース | 各所のCTA |
| `blog.ts` | `content/blog/*.mdx` を読み込む | `app/blog/`、`sitemap.ts` |
| `analytics.ts` | アクセス解析 | `components/site/Analytics` |

**各ファイルは `interface` で形を定義しています。** 追加するときはその定義に従ってください。項目を書き忘れると `npm run build` が型エラーで止まります（そういう設計です）。

**外部リンクをハードコードしないでください。** Discord招待URLなどは `lib/links.ts` にあります。URLが変わったとき1箇所で直せるようにするためです。

### content/blog/ — 記事

`.mdx` ファイル1つ = 記事1本。ファイル名（拡張子を除く）がURLのslugになります。

`lib/blog.ts` が `fs.readFileSync` で読み、`gray-matter` で先頭のフロントマター（`title` `date` `excerpt` `tags` など）と本文を分離します。読了時間は本文の文字数から自動計算されます（日本語500字/分）。

**この読み込みはビルド時にサーバー側で走ります。** Client Component から `fs` は使えません。

記事を1本足せば、`app/blog/[slug]/page.tsx` の `generateStaticParams` が拾って、ビルド時に静的ページとsitemapエントリが自動生成されます。表示側のコードを触る必要はありません。

---

## 4. Server / Client の境界

デフォルトは Server Component。`"use client"` は必要最小限にします。現在 Client なのは:

- `components/layout/Header.tsx` — モバイルメニューの開閉
- `app/faq/FAQClient.tsx` — アコーディオンの開閉
- `app/HomeClient.tsx` — トップの描画
- `components/ui/` `components/site/` のアニメーション・背景演出系

パターンとして、**ページの `page.tsx` は Server のまま `metadata` を持ち、動きのある部分だけを別ファイルの Client Component に切り出す**、という形をとっています（`app/faq/page.tsx` → `FAQClient.tsx` が典型）。新しいページでもこれに倣ってください。

---

## 5. SEO

サイトへの流入は検索経由が主です。以下は運用上の必須事項です。

- 各 `page.tsx` に `metadata`（`title` / `description` / `alternates.canonical`）を書く
- `canonical` は末尾スラッシュ付きの絶対URL（`https://oif-ai.com/faq/`）
- ページを追加したら `app/sitemap.ts` に追加
- `app/layout.tsx` の `title.template` により、各ページのタイトルは `<ページ名> | OIF - OMU Innovation Frontier` になる
- 団体情報の構造化データは `components/SEO/JsonLd.tsx`

**ただし、これらの文言は対外的な表現です。** OIFのポジショニングの正本は Notion（[`notion.md`](./notion.md)）であり、コピーを変えるPRは必ず代表の確認を通してください。

---

## 6. 既知の課題

### GitHub Pages の設定が実態とずれている（2026-08-06 調査）

**現在配信されているのは Actions のビルド成果物です**（`last-modified` が main への最終 push 時刻と一致、`/blog/` が配信されている＝`gh-pages` ブランチには存在しないページ）。

しかし Pages の設定 API は今も legacy モードのまま、配信元として `gh-pages` ブランチを指しています。

```
build_type: "legacy"
source: { branch: "gh-pages", path: "/" }
最後の legacy ビルド: 2026-03-16
```

`gh-pages` ブランチの中身は2026年3月時点の古いビルドで、実際には使われていません。ただし**設定が参照している以上、先にブランチを消すのは危険**です。

正しい順序:

1. リポジトリ Settings → Pages → Build and deployment → Source を **「GitHub Actions」** に変更（org のオーナー権限が必要）
2. その後 `git push origin --delete gh-pages`

カスタムドメインは `public/CNAME` がビルドで `out/CNAME` に出るので、ブランチを消しても失われません。

### その他

- テスト・リンタが未整備。品質の担保がビルドと目視のみ
- `app/sitemap.ts` の静的ルートが手書きで、ページ追加時に更新漏れが起きうる
- コンテンツ更新のフロー（誰がどの粒度で `lib/` を編集するか）が未定
- 古いブランチが remote に残っている。うち `explore/frontier-os` `feat/design-system-refresh` `feat/homepage-improvements` の3本は**すべて `main` に取り込み済み**（`git merge-base --is-ancestor` で確認、2026-08-06）なので削除して問題ない。関連していた PR #4 / #5 はクローズ済み。`feat/add-activities-session` `mani_workspace` は未確認なので作業者に確認する

> ローカルの `.vercel/` は別プロジェクト（`research-os-app`）を指す誤ったリンクだったため 2026-08-06 に削除済み。ただし**このリポジトリ自体は Vercel と連携しています**（下記のプレビュー環境）。混同しないこと。
