// 学習プログラム「OIF学習」の対外向けの説明。URL と画面は載せない（メンバー外に共有しない約束）。

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
  goal: string;
}

export const learnCourses: LearnCourse[] = [
  {
    name: "アプリ開発",
    body: "AI と一緒に Web アプリをつくり、公開する",
    goal: "自分でつくった Web アプリを公開し、URL で人に見せられる",
  },
  {
    name: "データサイエンス・機械学習",
    body: "Python でデータを扱い、予測のモデルをつくる",
    goal: "表のデータを扱い、予測のモデルをつくって当たり具合を確かめられる",
  },
  {
    name: "AI の仕組み・研究",
    body: "AI がなぜ動くのかを、数学と論文から知る",
    goal: "AI の仕組みを図と数式で説明でき、論文を1本読んで人に紹介できる",
  },
];
