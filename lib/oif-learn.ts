// 学習プログラム「OIF学習」の対外向けの説明。URL と画面は載せない（メンバー外に共有しない約束）。

export interface LearnStage {
  name: string;
  body: string;
}

export const learnStages: LearnStage[] = [
  {
    name: "基礎編",
    body: "勉強・制作のメンバー全員が最初に進めます。AI の使い方と注意点、GitHub の始め方までを扱います。",
  },
  {
    name: "コースを選ぶ",
    body: "基礎編の最後に、3つのコースから進むものを選びます。いくつでも同時に進められます。",
  },
  {
    name: "修了課題",
    body: "各コースの最後に修了課題があります。出したものは定例会で発表します。",
  },
];

export const learnBasics = [
  "AI に頼んで自己紹介のページをつくる",
  "ChatGPT・Gemini・Claude を使う",
  "AI の用語（機械学習・LLM など）",
  "AI の間違いと注意点",
  "GitHub の始め方",
  "コースを選ぶ",
];

export interface LearnCourse {
  name: string;
  body: string;
}

export const learnCourses: LearnCourse[] = [
  { name: "アプリ開発", body: "AI と一緒に Web アプリをつくり、公開します。" },
  { name: "データサイエンス・機械学習", body: "Python でデータを扱い、予測のモデルをつくります。" },
  { name: "AI の仕組み・研究", body: "AI がなぜ動くのかを、数学と論文から学びます。" },
];
