# CLAUDE.md — Project: OIF-homepage

> **このプロジェクトの開発規約の正本は [`AGENTS.md`](./AGENTS.md) です。**
> Claude Code で作業する場合も、そちらのルールに従ってください。
> 二重管理を避けるため、ルールの追加・変更は `AGENTS.md` 側にのみ書きます。

@AGENTS.md

## Claude Code 固有のメモ

- このフォルダは独立 git repo（`OMU-Innovation-Frontier/OIF-homepage`）。
  親 second-brain では gitignore 済み。変更はこのrepo自身のリモートへ push する。
- OIF運営全体の文脈は親リポジトリの [[oif]] にある。サイト単体の文脈は `AGENTS.md`。
- AIツールは任意。Codexを使う場合は [`docs/codex-guide.md`](./docs/codex-guide.md) を参照する。
  人間向けの参加手順は [`ONBOARDING.md`](./ONBOARDING.md) が正本。

## Open Questions

- コンテンツ更新フロー（誰が・どの粒度で `lib/` と `content/` を編集するか）
- 古いremoteブランチの整理。`explore/frontier-os` `feat/design-system-refresh`
  `feat/homepage-improvements` `feat/add-activities-session` `mani_workspace` は履歴上mainに取り込み済み。
  `feat/site-refresh-2026-07` は未マージなので、作業者へ確認せず削除しない
- **GitHub Pages の Source が legacy（`gh-pages` ブランチ）のまま。**
  実配信は Actions のビルド成果物なのでサイトは正常。PR #7 で `configure-pages` を
  追加したが設定は切り替わらなかった（`enablement` は無効時の有効化のみ）。
  **手作業が必要**: Settings → Pages → Source を「GitHub Actions」に変更 →
  確認 → `git push origin --delete gh-pages`。org オーナー権限が要る
- ホスティングが2系統ある点に注意: **本番 = GitHub Pages / PRプレビュー = Vercel**
  （プロジェクト `oif-homepage`、GitHub連携でPRごとに自動デプロイ）。
  ローカルの `.vercel/` は別プロジェクト `research-os-app` への誤リンクで削除済み（2026-08-06）。
  プレビューとは無関係なので混同しないこと
