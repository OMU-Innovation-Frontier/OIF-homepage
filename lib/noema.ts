// 技術メディア Noema の説明。シリーズが増えたら noemaSeries に足す。

export const NOEMA_URL = "https://noema-learn.uk/";

export const noemaFeatures = [
  {
    title: "具体例から説明する",
    body: "AI で何ができるかと、それがなぜ動くのかを、具体例を使って説明しています。",
  },
  {
    title: "使ってから仕組みを知る",
    body: "まず動かしてみて、そのあと仕組みを理解する、という順番で読めるように書いています。",
  },
  {
    title: "シリーズで順番に読める",
    body: "記事はテーマごとのシリーズにまとまっていて、前から順番に読み進められます。",
  },
  {
    title: "記事について質問できる",
    body: "記事のページには、表示している記事の内容について質問できるアシスタントがあります。",
  },
];

export interface NoemaSeries {
  title: string;
  href: string;
}

export const noemaSeries: NoemaSeries[] = [
  { title: "ニューラルネットワークの構造", href: `${NOEMA_URL}series/series-c4dqru` },
  { title: "はじめよう、AI駆動開発", href: `${NOEMA_URL}series/start-ai-development` },
  { title: "履修登録から試験まで", href: `${NOEMA_URL}series/school-practice` },
  { title: "実践する自動化", href: `${NOEMA_URL}series/practical-automation` },
];
