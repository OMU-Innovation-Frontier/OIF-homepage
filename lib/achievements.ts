// メンバーの実績。個人名と人数は出さない。増えたら配列に足す。
// 今後足す予定（2026-10-10 代表）: 白鷺祭／PDA 京橋／PDA なかもず。
// 載せる内容と書いてよい範囲（主催の名前など）を代表が確認してから足す。

export interface Achievement {
  category: string;
  title: string;
  detail: string;
}

export const achievements: Achievement[] = [
  {
    category: "コンテスト",
    title: "O-BUCs ファイナル進出",
    detail:
      "第4回学生ビジネスプランコンテスト（大阪信用金庫 主催）で、コードを書かずに機械学習を学べるサービス「samurAI」を発表しました。",
  },
  {
    category: "講座",
    title: "東京大学 松尾研究室の講座を受講",
    detail: "AI・機械学習を学ぶ講座を、メンバーが受講しています。",
  },
  {
    category: "資格",
    title: "G検定・E資格などの資格を取得",
    detail: "AI に関する資格を、メンバーが取得しています。",
  },
  {
    category: "執筆",
    title: "Noema に記事を執筆",
    detail: "技術メディア Noema に、メンバーが書いた記事を公開しています。",
  },
];
