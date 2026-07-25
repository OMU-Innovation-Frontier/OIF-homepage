# OIF サイト デザイン方向性

> 最終更新: 2026-07-25（本人決定: グレー廃止・ディープブルーのアクセント導入）

## North Star — Vercel (vercel.com)

OIF サイトが目指すのは **Vercel 型の「開発者ブランドのミニマル」**。
黒×白×シャープを基調に、**情報を静かに、余白とタイポで“完成度”を出す**方向。

「完成度」を漠然とではなく、次の5レバーの徹底として定義する：

1. **タイポの階層** — 見出し〜本文のサイズ/字間/行間が一貫した比率
2. **余白とリズム** — セクション間隔・グリッドがブレない
3. **モーションの節度** — 動くのは意味がある所だけ・速度を揃える
4. **ディテール** — hover / focus / 境界線 / 角の処理が同じ語彙
5. **一貫したトーン** — 配色・言葉・写真の質感がブレない

---

## コア原則（Vercel 路線・2026-07-25 改訂v3）

- **完全白黒**（本人決定 2026-07-25。青アクセントは同日試作→撤回）: 黒 `#0B0C0E` / 白 `#FFFFFF` のみ。
  浮かせる面は近白（`night-2 #F7F7F8` 等）、テキスト階層の `ink/60` 等の透過は可。色アクセントは足さない。
- **写真で語る（v3の主変更）**: 文字だけの帯を避け、**実写（活動写真）をフルブリードの背景に使う**。
  - 型: `overflow-hidden` セクション + `fill` 画像に `.parallax-bg`（CSS scroll-driven、JS不要・非対応ブラウザは静止画）+ 黒グラデオーバーレイ（`from-black/85〜/40`）+ 白文字。
  - ダーク面のCTAは白反転（`DiscordCTA variant="light"` / 白枠ボタン）。
  - 明→暗→明のリズムでページを組む（連続するダーク帯は避ける）。
- **角はゼロ**：`border-radius: 0`（既存のブランド identity を踏襲）。
- **境界線で構造を作る**：`border-ink/10` のヘアラインでセクションを仕切る（面の塗り分けより線で語る）。
- **余白で語る**：1画面に詰め込まず、要素を減らして一つひとつを大きく。
- **動きは節度**: fade-up / scroll-reveal / `.parallax-bg` の3種のみ。グラデ文字・発光・JSパララックスは使わない。

### 既存トークン（`tailwind.config.ts` / `globals.css`）を土台にする
- 色: `ink` `paper` `muted` `line` `accent`（DEFAULT=黒 / bright `#3F3F46`＝文字強調のみ / tint 近白。dev/theory も同値）
- 書体: Inter（`--font-inter`） + JetBrains Mono（`--font-mono`、ラベル/数値に限定使用）
- 間隔: `container-wide` / `section-y(-lg/-sm)` / `eyebrow` / `link-underline`
- イージング: `ease-smooth` = `cubic-bezier(0.22, 1, 0.36, 1)`

---

## 他サイトから盗むもの（レバー別）

Vercel を軸に、足りない部分を各サイトの強みで補う。

| 盗む先 | URL | 盗む要素 | OIF への適用 |
|---|---|---|---|
| **Vercel** | vercel.com | 黒白シャープの型組み・余白・境界線・コードブロック的な質感 | 全体の基調。見出しスケール・ヘアライン・ボタン |
| **Nothing** | nothing.tech | 禁欲性・mono/ドット書体の使いどころ・ラベルの無機質さ | `section-label` を mono で統一、装飾を削ぐ判断基準 |
| **Linear** | linear.app | モーションの“節度”と速度の統一・段階的な scroll reveal | reveal の距離/速度を1セットに固定、過剰演出を禁止 |
| **Teenage Engineering** | teenage.engineering | プロダクト/カードの整列・等間隔グリッド | SNAPSHOTS や将来の Products をグリッドで端正に |
| **Stripe** | stripe.com | マイクロインタラクションとフォーカス/hover の丁寧さ | hover/focus を全要素で同じ語彙に（リング・下線） |
| **Anthropic** | anthropic.com | エディトリアルな本文組み・言葉のトーン | コピーの落ち着き・本文 `lede` の読みやすさ |

> スタジオ系（basement.studio / unseen.co / locomotive.ca）は“雰囲気の刺激”用。OIF には過剰なので演出は持ち込まない。

---

## Do / Don't

**Do**
- 見出しは少数の決まったサイズだけを使う（display / statement / headline）
- ラベルは mono、本文は sans の役割分担を守る
- 余白を恐れない。要素を減らす方向で迷う
- hover/focus は控えめに、ただし全要素で統一

**Don't**
- 色アクセントを足す（白黒厳守）・グレーの面で塗る
- グラデ文字・常時アニメ・発光シャドウ・JSパララックス（`.parallax-bg` のCSS版のみ可）
- 1セクションに見出しサイズを混在させる
- mono を本文に使う（可読性が落ちる）

---

## 参考リンク
- North Star: https://vercel.com
- 盗む先: https://nothing.tech / https://linear.app / https://teenage.engineering / https://stripe.com / https://anthropic.com
- 探索用ギャラリー: https://godly.website / https://minimal.gallery / https://www.siteinspire.com/websites/category/monochrome

---

## 組織のファネル設計（代表の方針）

サイトは「認知→参加」の段差を下げる装置。**高い天井・低い床・登れる階段**で設計する。

- **L0 のぞく**（Discord・0コミット）→ **L1 来てみる**（単発イベント）→ **L2 続ける**（勉強会/班）→ **L3 つくる**（プロダクト/研究）
- **Discord＝常設の床、イベント＝今すぐの理由**。両方を正面玄関に。
- CTA は低ハードルを主役に（「Join the Frontier」→「Discordに参加」）。安心コピー（経験不問・文系歓迎・入会費なし）を全CTAに添える。
- 計測は `DiscordCTA` の location 別クリックで導線を分離（home_hero / home_event / home_door_discord …）。
- イベント運用：定例化・申込みは極限まで軽く・告知導線は「次回イベント」に着地。
- 「勉強仲間を作ろう」型（申込み不要・出入り自由・1人参加歓迎）が最も低いドア＝Door 02 の人格。

## ステータス（2026-06-12 実装済み）
- ヒーロー: **「AIを、当たり前に。」/ AI, as default.**（Vercel路線で実装）
- `lib/events.ts` ＋ `components/site/NextEvent.tsx`：次回イベント「コードで学ぶ！DeepLearning（6/19）」を表示。`flyer` フィールドでチラシ画像も表示可（画像は `public/images/events/` に要設置）。
- ホーム末尾を「はじめの一歩（Discord / イベントの2ドア＋L0→L3の階段）」に刷新。
- ブランチ `explore/frontier-os`・未コミット。構成は維持し完成度（上記5レバー）を上げる方針。
