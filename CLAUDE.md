# CLAUDE.md — OIF公式サイト

> **このプロジェクトの開発規約の正本は [`AGENTS.md`](./AGENTS.md) です。**
> Claude Code で作業する場合も、そちらのルールに従ってください。
> 二重管理を避けるため、ルールの追加・変更は `AGENTS.md` 側にのみ書きます。

@AGENTS.md

## Claude Code 固有のメモ

- サイト単体の開発文脈は [`AGENTS.md`](./AGENTS.md)、OIFの方向性の正本は
  [`docs/notion.md`](./docs/notion.md) 経由の Notion。
- AIツールは任意。Codexを使う場合は [`docs/codex-guide.md`](./docs/codex-guide.md) を参照する。
  人間向けの参加手順は [`ONBOARDING.md`](./ONBOARDING.md) が正本。

## デプロイ設定（2026-08-11 解消済み・事故記録）

- GitHub Pages の公開元は **Actions 方式（`build_type: workflow` / source `main`）** に切り替え済み。
  上記の「手作業が必要」項目は完了した。
- **⚠️ 順序を間違えて本番を約8分落とした（2026-08-11）。** 設定が旧方式（`legacy` + source `gh-pages`）のまま
  `gh-pages` ブランチを削除したところ、**Pages サイトの設定ごと消滅**し `oif-ai.com` が 404 になった。
  ブランチを復元しても Pages は自動復活せず、API でサイト再作成 → カスタムドメイン再設定 →
  `deploy.yml` 手動実行、まで必要だった。教訓は2つ:
  - `/pages/builds`（旧方式のビルド履歴）が止まっていても、legacy のブランチ束縛は生きている。
    **ビルド履歴は「そのブランチを消して安全」の根拠にならない。** 破壊的操作の前に
    `gh api repos/OMU-Innovation-Frontier/OIF-homepage/pages` の `build_type` を必ず確認する。
  - 作業ブランチが `main` より遅れているとき、**`main` 側のドキュメントを読まずに判断しない。**
    この事故の時点で、正しい手順は `main` の本ファイルに既に書かれていた。
- `gh-pages` ブランチ（`911e7b7`）は現構成では未使用のまま残置。削除するなら Settings→Pages の
  Source が「GitHub Actions」表示であることを目視確認してから。
- Pages 設定など管理系 API は既定の `gh` アカウント（push 権限のみ・`admin:false`）では 404 になる。
  `GH_TOKEN=$(gh auth token --user OMU-Innovation-Frontier)` を使う。
- HTTPS 強制は未有効（ドメイン再設定で証明書が再発行待ち）。発行後に Settings→Pages で有効化する。

## 未解決事項

- コンテンツ更新フロー（誰が・どの粒度で `lib/` と `content/` を編集するか）
- 古いリモートブランチは整理済み（2026-08-11）。`explore/frontier-os` `feat/design-system-refresh`
  `feat/homepage-improvements` `feat/add-activities-session` `mani_workspace` を削除。
  `feat/site-refresh-2026-07` は **`develop` に改名して存続**（未マージ。作業者へ確認せず削除しない）。
- ホスティングが2系統ある点に注意: **本番 = GitHub Pages / PRプレビュー = Vercel**
  （プロジェクト `oif-homepage`、GitHub連携でPRごとに自動デプロイ）。
  ローカルの `.vercel/` は別プロジェクト `research-os-app` への誤リンクで削除済み（2026-08-06）。
  プレビューとは無関係なので混同しないこと
