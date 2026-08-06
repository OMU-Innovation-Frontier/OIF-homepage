# CLAUDE.md — Project: OIF-homepage

> **このプロジェクトの開発規約の正本は [`AGENTS.md`](./AGENTS.md) です。**
> Claude Code で作業する場合も、そちらのルールに従ってください。
> 二重管理を避けるため、ルールの追加・変更は `AGENTS.md` 側にのみ書きます。

@AGENTS.md

## Claude Code 固有のメモ

- このフォルダは独立 git repo（`OMU-Innovation-Frontier/OIF-homepage`）。
  親 second-brain では gitignore 済み。変更はこのrepo自身のリモートへ push する。
- OIF運営全体の文脈は親リポジトリの [[oif]] にある。サイト単体の文脈は `AGENTS.md`。
- 2026-08 以降、チームの標準ツールは **Codex**（[`docs/codex-guide.md`](./docs/codex-guide.md)）。
  Claude Code は田口個人の作業でのみ使用する。

## Open Questions

- コンテンツ更新フロー（誰が・どの粒度で `lib/` と `content/` を編集するか）
- 古い remote ブランチの整理。`explore/frontier-os` `feat/design-system-refresh`
  `feat/homepage-improvements` は main に取り込み済みで削除可（PR #4/#5 はクローズ済み）。
  `feat/add-activities-session` `mani_workspace` は作業者に要確認
- **GitHub Pages の Source が legacy（`gh-pages` ブランチ）のまま。**
  実配信は Actions のビルド成果物。PR #7（`deploy.yml` に `actions/configure-pages`
  を追加）が main に入れば自動で `workflow` に切り替わる。その後 `gh-pages` を削除する
- ホスティングが2系統ある点に注意: **本番 = GitHub Pages / PRプレビュー = Vercel**
  （プロジェクト `oif-homepage`、GitHub連携でPRごとに自動デプロイ）。
  ローカルの `.vercel/` は別プロジェクト `research-os-app` への誤リンクで削除済み（2026-08-06）。
  プレビューとは無関係なので混同しないこと
