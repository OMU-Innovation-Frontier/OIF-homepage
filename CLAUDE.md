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
- 古い remote ブランチ（`explore/frontier-os` `feat/design-system-refresh`
  `feat/homepage-improvements` `feat/add-activities-session` `mani_workspace`）の整理
- **GitHub Pages の Source が legacy（`gh-pages` ブランチ）のまま。**
  実配信は Actions のビルド成果物。Settings → Pages → Source を「GitHub Actions」に
  変更してから `gh-pages` を削除する。オーナー権限が必要（詳細は `docs/architecture.md`）
- Vercel ダッシュボードに `research-os-app` プロジェクトが残っていないか要確認
  （ローカルの `.vercel/` リンクは 2026-08-06 に削除済み）
