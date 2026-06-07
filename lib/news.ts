export interface NewsItem {
  date: string;
  title: string;
  isNew?: boolean;
}

// サイト全体のニュースの単一ソース。トップページ(Latest Updates)と
// /news ページの両方がここを参照する。新しい順に並べる。
export const newsItems: NewsItem[] = [
  { date: "2026.01.24", title: "公式サイトを公開しました", isNew: true },
  { date: "", title: "新メンバー募集を開始しました" },
];
