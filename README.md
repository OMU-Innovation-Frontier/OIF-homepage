# OIF公式サイト

OMU Innovation Frontier（OIF）の公式ウェブサイトです。

公開URL: https://oif-ai.com

## はじめて参加する人へ

開発に参加する人は **[`ONBOARDING.md`](./ONBOARDING.md)** から読んでください。環境構築から最初のPRを出すまでを、前提知識ゼロの状態から順に案内しています。

| ドキュメント | 内容 |
|---|---|
| [`ONBOARDING.md`](./ONBOARDING.md) | 環境構築 → 最初のPRまで。**まずここ** |
| [`docs/nextjs-guide.md`](./docs/nextjs-guide.md) | Next.js / React / TypeScript / Tailwind の初心者向け解説 |
| [`docs/codex-guide.md`](./docs/codex-guide.md) | Codexを任意で使う場合のガイド。利用しなくても開発可能 |
| [`docs/architecture.md`](./docs/architecture.md) | サイトの構成・データフロー・公開の仕組み |
| [`AGENTS.md`](./AGENTS.md) | AIエージェント向けの追加指示 |

## このリポジトリについて

このプロジェクトはNext.jsのApp Routerで構築し、通常のHTML・CSS・JavaScriptとして書き出す静的ウェブサイトです。

- バックエンドサーバーはありません
- データベースはありません
- APIルートはありません
- 実行時のコンテンツ取得は行いません
- 静的ファイルを配信する環境へ公開します

この動作は[`output: "export"`](./next.config.js)で指定しています。`next build`を実行すると、静的サイトが生成されます。

## 静的サイトでもNext.jsを使う理由

このリポジトリでは、Next.jsを次の機能を備えた静的サイトジェネレーターとして使っています。

- ファイル構成に基づくルーティング
- SEO向けメタデータの管理
- レイアウト・ヘッダー・フッターの共通化
- 静的資産の扱いやすい管理
- 少量の画面操作を実現する単純なReactコンポーネント

開発時とビルド時にはReactとNext.jsを使いますが、公開されるサイトは静的ファイルだけで動作します。

## ブラウザ上の画面操作

ほとんどのページは静的です。一部のコンポーネントだけが、小さな画面操作のためにブラウザ上でReactを使います。

- [`components/layout/Header.tsx`](./components/layout/Header.tsx): モバイルメニューの開閉状態
- [`app/faq/FAQClient.tsx`](./app/faq/FAQClient.tsx): アコーディオンの開閉状態
- [`app/HomeClient.tsx`](./app/HomeClient.tsx): トップページを描画するコンポーネント

これらはいずれもバックエンドを必要としません。

## プロジェクト構成

```text
app/          ページ、レイアウト、メタデータ、サイトマップ、robots.txt
components/   共通の画面部品とSEO用コンポーネント
lib/          コンテンツデータ（イベント、お知らせ、プロジェクト、リンク）。実質的なCMS
content/      MDX形式のブログ記事
public/       静的な画像とアイコン
docs/         プロジェクト文書
```

コンテンツは`lib/*.ts`と`content/blog/*.mdx`で管理します。イベントや記事を追加するだけなら、`app/`や`components/`を変更する必要はありません。

詳しい構成: [`docs/architecture.md`](./docs/architecture.md)

## 開発

```bash
npm ci
npm run dev
```

## 本番用ビルド

```bash
npm run build
```

ビルドすると、静的ファイル配信に適した成果物が`out/`へ出力されます。

本番環境ではNode.jsサーバーではなく書き出した静的ファイルを使うため、`npm start`スクリプトは意図的に用意していません。

テストやリンタのスクリプトはありません。PRを出す前に、`npm run build`の成功とブラウザでの目視確認を必ず行ってください。この2つが現在の品質確認手順です。

## 公開

ブランチは2本立てです。開発の基準は**`develop`**（デフォルトブランチ）、公開中の本番が**`main`**です。作業ブランチは`develop`から切り、`develop`へPRを出します。`develop`から`main`への「リリース」は、サイト更新のSNS告知に合わせて代表がまとめて行います。

`main`へプッシュすると、[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)が起動します。Node.js 20で`npm ci`と`npm run build`を実行し、`out/`をGitHub Pagesへ公開します。手作業での公開操作はありません。

`main`にも`develop`にも直接コミットしないでください。また、`main`をbaseにしたPRを作らないでください。

## 保守上の注意

- 動的な機能が明確に必要でない限り、静的サイトとして保ってください
- 依存パッケージを追加した場合は、その理由を文書に残してください
- 再利用できて説明も用意されている場合を除き、リポジトリ直下に使い捨ての補助スクリプトを置かないでください
