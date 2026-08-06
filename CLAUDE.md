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
- 別ブランチ `explore/frontier-os` 系との関係整理
- `.vercel/` が別プロジェクト（`research-os-app`）を指したまま残っている。
  実際の公開経路は GitHub Actions → GitHub Pages。整理が必要
