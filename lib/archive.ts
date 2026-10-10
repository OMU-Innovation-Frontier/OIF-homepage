// これまでに開いたハンズオン・ワークショップ。
// イベントは今後開く予定がない（2026-10-08）ため、記録としてだけ載せる。

export interface PastSession {
  date: string;
  title: string;
  description: string;
  materialLabel?: string;
  materialHref?: string;
  image?: string;
  imageAlt?: string;
}

export const pastSessions: PastSession[] = [
  {
    date: "2026.06.19",
    title: "コードで学ぶ！DeepLearning",
    description:
      "お手本のコードを動かして深層学習の中身を追ったあと、一人ひとりが自分の AI をつくり、精度を競う形で締めくくりました。",
    materialLabel: "資料（Colab）",
    materialHref:
      "https://colab.research.google.com/drive/1UfNWw9uG94879sYiCuuj8bqXsWyGTSir?usp=sharing",
  },
  {
    date: "2026.05.22",
    title: "ローカルLLMハンズオン",
    description: "手元のパソコンで LLM を動かすまでの流れを、実際にモデルを動かしながら追いました。",
    materialLabel: "資料（PDF）",
    materialHref: "https://drive.google.com/file/d/1E6FYe200ioRtAAPW8TDyS8e2XkS2g-qu/view?usp=sharing",
    image: "/images/llm-handson.webp",
    imageAlt: "ローカルLLMハンズオンの参加者",
  },
  {
    date: "2026.03.18",
    title: "Vibe Codingワークショップ",
    description:
      "AI を使った開発のやり方を説明したあと、一人ひとりが自分のアイデアからアプリやホームページをつくりました。",
    materialLabel: "活動レポート",
    materialHref: "https://www.omu.ac.jp/i-academy/info/activity/entry-105828.html",
    image: "/images/vibe-coding-workshop.webp",
    imageAlt: "Vibe Codingワークショップの様子",
  },
  {
    date: "2025.12.25",
    title: "第1回ワークショップ",
    description: "AI を使って、アプリの発案から実装、発表用のスライドづくりまでを行い、完成したアプリを発表しました。",
    image: "/images/first-workshop.webp",
    imageAlt: "第1回ワークショップでの発表",
  },
];
