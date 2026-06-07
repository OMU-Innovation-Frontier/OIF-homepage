# 計測（Join ファネル）

加入ファネル「トップ → 興味喚起 → FAQ → Discord」のコンバージョンを測定するための仕組み。

## 有効化

1. GA4 のプロパティを作成し、測定ID（`G-XXXXXXXXXX`）を取得。
2. ビルド時の環境変数に設定する（静的エクスポートのため**ビルド時**に注入が必要）。
   - ローカル: `.env.local` に `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
   - 本番(GitHub Actions): リポジトリの Secrets に `NEXT_PUBLIC_GA_ID` を追加し、`deploy.yml` の build ステップに `env:` で渡す。
3. 設定すると `components/site/Analytics.tsx` が GA4 を読み込む。未設定なら何も読み込まれない（ID をリポジトリに残さない設計）。

## 送信されるイベント

| イベント名 | 発火タイミング | パラメータ |
|---|---|---|
| `discord_join_click` | Discord 参加ボタンのクリック | `location`（どのCTAか） |

`location` の値（コンバージョン経路の特定に使用）:

- `join_hero` … /join ヒーローの主CTA
- `join_interest` … /join「こんな人におすすめ」の中間CTA
- `join_footer` … /join 最下部CTA
- `faq_contact` … /faq お問い合わせ
- `activities_cta` … /activities 最下部CTA

## 実装

- `lib/analytics.ts` … `trackEvent(name, params)`。プロバイダ非依存（gtag / dataLayer に送信、無ければ no-op）。
- `components/ui/DiscordCTA.tsx` … 計測付きの共通 Discord ボタン（`location` 必須）。すべての Discord 導線はこれを使う。
- `lib/links.ts` … Discord 招待URL等の単一ソース。

## 推奨ファネル分析

GA4 の探索（ファネルデータ探索）で:
1. `page_view`（/） → 2. `page_view`（/join） → 3. `discord_join_click`
の3ステップを設定し、各段の離脱率を見る。`location` 別に最も効くCTAを把握する。
