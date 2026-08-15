# AGENTS.md — OIF公式サイト

このファイルは、このリポジトリで作業するAIエージェント（Codexなど）向けの追加指示です。
人間の新メンバー向け手順の正本は [`ONBOARDING.md`](./ONBOARDING.md) です。AIツールを使わなくても開発できます。

- はじめて参加する人 → [`ONBOARDING.md`](./ONBOARDING.md)
- Next.js がわからない人 → [`docs/nextjs-guide.md`](./docs/nextjs-guide.md)
- Codexを任意で使う場合 → [`docs/codex-guide.md`](./docs/codex-guide.md)

> AIエージェント向け指示の正本はこのファイルです。`CLAUDE.md` はこのファイルへのポインタにすぎません。人間向けの手順は `ONBOARDING.md`、AI向けのルールはこのファイルで管理します。

---

## このリポジトリは何か

OMU Innovation Frontier（OIF、大阪公立大学のAIサークル）の公式サイト。公開URL: https://oif-ai.com

**Next.js App Router を静的サイトジェネレータとして使っています。** `next.config.js` の `output: "export"` により、`next build` が `out/` に素のHTML/CSS/JSを書き出します。

つまり、このプロジェクトには存在しないものがあります:

- バックエンドサーバー
- データベース
- API ルート（`app/api/`）
- 実行時のデータ取得（`fetch` によるSSR/ISR）
- 認証・セッション
- 環境変数に依存する実行時の分岐

**これらを必要とする実装を提案・追加しないでください。** 静的書き出しでは動きません。動的機能が本当に必要になった場合は、実装する前にissueかPRで方針を議論します。

## 技術構成

| | |
|---|---|
| フレームワーク | Next.js 15（App Router） |
| UI | React 19 / TypeScript 5 |
| スタイル | Tailwind CSS 3（+ `@tailwindcss/typography`） |
| コンテンツ | MDX（`next-mdx-remote` + `gray-matter`） |
| アイコン | `lucide-react` |
| Node | 20以上（CIは20を使用） |
| ブランチ | `develop`（デフォルト・開発の基準） → リリース時に `main` へマージ |
| 本番公開 | `main` への push → GitHub Actions（`.github/workflows/deploy.yml`）→ GitHub Pages |
| プレビュー | PRごとに Vercel が自動デプロイ（プロジェクト `oif-homepage`）。**本番とはホスティングが別** |

## コマンド

```bash
npm ci          # 依存関係のインストール（npm install ではなくこれ）
npm run dev     # 開発サーバー（http://localhost:3000）
npm run build   # 本番ビルド。out/ に静的ファイルを書き出す
```

- **`npm start` はありません。** 本番は静的ファイル配信であり、Node サーバーは動きません。追加しないでください
- **テストとリンタのスクリプトはありません。** 品質の担保は「`npm run build` が通ること」と「ブラウザでの目視確認」の2つだけです
- 変更を加えたら **必ず `npm run build` を通してから** 完了と報告すること。CIが同じビルドを走らせるため、ここで落ちる変更は公開されません

## ディレクトリ構成

```text
app/          ルーティング。フォルダ名 = URL、page.tsx = そのページ
              layout.tsx が全ページ共通の枠（ヘッダー・フッター・メタ）
              sitemap.ts / robots.ts / not-found.tsx もここ
components/   共有UI
  layout/       Header / Footer
  ui/           汎用の小さい部品（Button, Reveal, Tilt など）
  site/         このサイト固有のセクション（NextEvent, PastEvents など）
  SEO/          構造化データ（JsonLd）
lib/           コンテンツのデータソース。実質のCMS
              events.ts / news.ts / projects.ts / links.ts /
              blog.ts / analytics.ts
content/blog/  ブログ記事（.mdx）
public/        静的資産。/ からの絶対パスで参照
docs/          ドキュメント
```

### 重要な分離

**コンテンツとプレゼンテーションを混ぜないこと。**

- イベント・お知らせ・プロジェクトの「データ」は `lib/*.ts` の配列に置く
- 表示側（`app/`・`components/`）は、そのデータを読んで描画するだけ
- 記事を1本追加する変更が、コンポーネントの変更を伴ってはいけない

新しい種類のコンテンツを足すときも、この分離を守ってください。

## コード規約

- **読み込みパスは `@/` 始まり**（`tsconfig.json` の `paths` でルートに解決）。`../../` の相対パスを新規に書かない
- **デフォルトはサーバーコンポーネント。** `"use client"` は、状態・イベントハンドラ・ブラウザAPIが本当に必要な部品だけに、できるだけ小さい範囲で付ける。ページ全体に付けない
- **`any` を使わない。** データの形は `lib/` 側で `interface` として定義する
- **`.map()` には一意な `key`** を渡す（配列の添字ではなく `slug` や `id`）
- **スタイルは Tailwind のユーティリティクラス。** 新しいCSSファイルを作らない。`app/globals.css` への追加は、本当に全体に効くものだけ
- **レスポンシブはモバイルファースト。** ベースがスマホ、`md:` `lg:` で上書き。訪問者の多くはスマホ
- **画像は `next/image` の最適化が無効**（静的書き出しのため `images.unoptimized: true`）。既存ページのやり方に合わせる
- **URLは末尾スラッシュ付き**（`trailingSlash: true`）。内部リンクは `/about/` の形で書く
- **各 `page.tsx` にメタデータを書く**（コード上の名前は`metadata`。`title` / `description` / `alternates.canonical`を指定）。SEO流入が主な導線
- **既存のパターンに合わせる。** 新しい書き方・新しい抽象を持ち込む前に、似たことをしている既存ファイルを探して真似る

### デザインについて

**見た目の方向性は自由です。** 配色・レイアウト・演出の変更提案を「既存のデザイン方針に反する」という理由で却下しないでください。[`docs/design-direction.md`](./docs/design-direction.md) は現状の説明であって規則ではありません。

守るべきは4つだけです: スマホで壊れないこと／読めるコントラストであること／表示を重くしないこと／対外的な文言を勝手に変えないこと。

ただし、色や余白は `p-6` `gap-4` `text-ink` など既存のTailwindクラスを優先してください。サイト全体で繰り返す新しい値は `tailwind.config.ts` のトークンにします。生の色コードや任意値を各コンポーネントへ重複して直書きしないでください。

## 依存関係

**新しいライブラリを勝手に追加しないでください。** 追加が必要だと判断した場合は、実装せずにまず提案し、以下を説明してください:

1. なぜ既存の依存関係では実現できないのか
2. バンドルサイズへの影響
3. 静的書き出しと互換性があるか

採用が決まったら、README かこのファイルに理由を記録します。

## Git 運用

**ブランチは2本立てです。`develop` が開発の基準で、リポジトリのデフォルトブランチです。**

| ブランチ | 役割 |
|---|---|
| `main` | 公開中の本番そのもの。push されると即デプロイされる |
| `develop` | 開発の統合先。**作業ブランチはここから切り、ここへ PR を出す** |

`develop` → `main` は「リリース」であり、サイト更新をSNSで発信するタイミングに合わせて代表（田口）がまとめて行います。**エージェントが `main` への PR を作成・マージすることはありません。**

- **`main` にも `develop` にも直接コミット・プッシュしない。** 必ず作業ブランチを切って PR
- **PR の base は `develop`。** `main` を base にした PR を作らない（本番へ未完成分が流れ込みます）
- **`develop` は「いつ `main` に出しても壊れない」状態を保つ。** 未完成・ダミーデータ入りのものは作業ブランチに留め、`develop` へマージしない
- ブランチ名: `feat/` `fix/` `docs/` `refactor/` + 内容（例: `feat/add-lt-2026-09`）
- コミットメッセージ: `<種類>(<場所>): <何をしたか>`（日本語可）。例 `fix(header): モバイルでロゴが見切れる問題を修正`
- **`git push --force` を使わない**
- `git add .` ではなく、変更したファイルを明示的に指定する
- `node_modules/` `.next/` `out/` `.env*` はコミットしない（`.gitignore` 済み）

## やってはいけないこと（厳守）

1. **`main` への直接の変更・`main` を base にした PR**、および `git push --force`。`main` は本番であり、リリース以外で触らない
2. **デプロイ操作・`.github/workflows/` の変更** — 公開に直結する。必ず代表（田口）の承認を得てから
3. **APIキー・認証情報・`.env` のコミット** — 公開リポジトリです
4. **メンバーの個人情報のコミット** — 本名・学籍番号・連絡先・非公開の議事録・無断の顔写真など
5. **対外的な文言の独断変更** — サイトのキャッチコピー、団体の説明文、ポジショニング、SEOのメタ情報。**OIFの方向性の正本は Notion**（`docs/notion.md` 参照）であり、このリポジトリではない。文言を変えるPRは必ず代表の確認を通す
6. **`output: "export"` を外す、または前提を崩す変更** — 静的サイトであることは設計上の決定であり、都合が悪いからと外さない
7. **ルートディレクトリへの使い捨てスクリプトの追加** — 再利用可能で、かつドキュメント化されているものだけ
8. **理解されていないコードのコミット** — エージェントが生成したコードであっても、PRを出す人間がその内容を説明できなければマージしない

## 参照すべきドキュメント

| ファイル | 内容 |
|---|---|
| [`README.md`](./README.md) | このリポジトリの概要 |
| [`ONBOARDING.md`](./ONBOARDING.md) | 新メンバー向け。環境構築から初PRまで |
| [`docs/architecture.md`](./docs/architecture.md) | サイト構成・ルーティング・データフロー |
| [`docs/nextjs-guide.md`](./docs/nextjs-guide.md) | Next.js / React / Tailwind の初心者向け解説 |
| [`docs/codex-guide.md`](./docs/codex-guide.md) | Codexを任意で使う場合の設定と禁止事項 |
| [`docs/design-direction.md`](./docs/design-direction.md) | デザインの現状と、守ってほしい最低限。**規則ではないので勝手に「違反」を指摘しない** |
| [`docs/notion.md`](./docs/notion.md) | OIF の方向性の正本（Notion）への入口 |
| [`docs/analytics.md`](./docs/analytics.md) | アクセス解析 |

## エージェントへの作業依頼のしかた

作業を依頼された場合、以下を守ってください。

- **範囲を勝手に広げない。** 頼まれていないファイルを変更しない。リファクタリングを巻き込まない
- **変更前に、対象ファイルと似た既存の実装を読む**（このリポジトリの流儀に合わせるため）
- **変更後は `npm run build` を通す**。通らないまま完了と報告しない
- **何を変えたか、なぜそうしたかを日本語で簡潔に説明する**
- **判断に迷ったら、実装する前に質問する。** 特に、対外文言・依存追加・アーキテクチャに関わることは勝手に決めない
