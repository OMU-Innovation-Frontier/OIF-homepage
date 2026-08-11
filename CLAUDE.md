# CLAUDE.md — Project: OIF-homepage

> このフォルダは独立 git repo（`OMU-Innovation-Frontier/OIF-homepage`）。
> 親 second-brain では gitignore 済み。変更はこのrepo自身のリモートへ push する。
> このファイルは Claude Code が作業時に読む文脈。OIF運営全体の文脈は親の [[oif]] にある。

## Context
- OMU Innovation Frontier の公式ウェブサイト。公開URL: https://oif-ai.com
- **OIFの方向性の正本は Notion。方針・コピー・ポジショニングを変える前に必ず確認する → `docs/notion.md`**
- Next.js App Router を**静的サイトジェネレータ**として使用（`next.config.js` の `output: "export"`）。
  バックエンド・DB・APIルート・実行時フェッチなし。
- クライアント側JSは最小（Header のモバイルメニュー、FAQ アコーディオン、HomeClient 程度）。

## Deploy（Vercel ではない）
- 本番は **GitHub Pages**。`main` への push で `.github/workflows/deploy.yml` が走り、
  `out/` を upload-pages-artifact → deploy-pages で配信（**Actions 方式 / `build_type: workflow`**）。前段に Cloudflare。
- カスタムドメインは Pages 設定側（`cname: oif-ai.com`）＋ `public/CNAME`。
- **破壊的操作の前に必ず `gh api repos/OMU-Innovation-Frontier/OIF-homepage/pages` の `build_type` を見ること。**
  2026-08-11 に `legacy`（`source: gh-pages`）のまま `gh-pages` ブランチを削除して Pages サイトごと消滅し、本番が約8分 404 になった。
  ビルド履歴が止まっていても legacy バインドは生きている＝履歴は安全性の根拠にならない。現在は `workflow` へ是正済み、`gh-pages` は未使用のまま残置。
- Pages 設定など管理系 API は既定の `gh` アカウント（push 権限のみ）では 404 になる。
  `GH_TOKEN=$(gh auth token --user OMU-Innovation-Frontier)` を使う。

## Stack
- Next.js 15 / React 19 / TypeScript / Tailwind CSS / MDX（next-mdx-remote, gray-matter）
- 構成: `app/`(ルート・メタ・sitemap/robots) `components/`(共有UI・SEO) `content/`(MDX) `public/`(静的資産) `docs/`
- 詳細: `docs/architecture.md`

## Conventions
- 対外発信の文面（コピー・告知・SEOメタ）は公開前に本人確認。
- 組織repoのため、メンバー個人情報・非公開情報はコミットしない。
- 公開・デプロイ等の操作は本人承認後。

## Open Questions
- コンテンツ更新フロー（誰が・どの粒度で content/ を編集するか）
