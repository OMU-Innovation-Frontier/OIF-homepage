export interface NewsItem {
  date: string;
  title: string;
  /** カテゴリタグ（EVENT / RELEASE / INFO など）。LayerX的なニュースの分類表示用 */
  tag?: string;
  isNew?: boolean;
}

// サイト全体のニュースの単一ソース。トップページ(Latest Updates)と
// /news ページの両方がここを参照する。新しい順に並べる。
export const newsItems: NewsItem[] = [
  { date: "2026.03.18", title: "Vibe Codingワークショップを開催しました", tag: "EVENT", isNew: true },
  { date: "2026.01.24", title: "公式サイトを公開しました", tag: "RELEASE" },
  { date: "2025.12.25", title: "第1回ワークショップを開催しました", tag: "EVENT" },
];
