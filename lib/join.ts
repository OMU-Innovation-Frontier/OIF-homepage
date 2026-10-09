// 参加の流れ・Discord の説明・よくある質問。トップと /join の両方がここを参照する。
// 文言は docs/redesign-2026-10.md（代表確認済み）が根拠。

export const discordAbout = [
  "Discord は無料のチャットアプリです。OIF の連絡や相談は、すべて Discord で行っています。",
  "アカウントはメールアドレスだけで作れます。スマートフォンでもパソコンでも使えます。",
];

export interface JoinStep {
  title: string;
  body: string;
}

export const joinSteps: JoinStep[] = [
  {
    title: "Discord に参加する",
    body: "OIF の Discord サーバーに入ります。会費はかかりません。",
  },
  {
    title: "質問に選択肢で答える",
    body: "入るとすぐに、所属と OIF でやりたいことを選ぶ質問が出ます。",
  },
  {
    title: "ロールが付く",
    body: "選んだ内容に合わせて、Discord 上のロールが付きます。ロールは、その人の所属や役割を表す印です。",
  },
  {
    title: "OIF学習を始める",
    body: "勉強・制作のロールが付くと、学習プログラム「OIF学習」が使えるようになります。",
  },
];

export interface RoleGroup {
  name: string;
  options: string[];
  note: string;
}

export const roleGroups: RoleGroup[] = [
  {
    name: "所属",
    options: ["大阪公立大学", "学外"],
    note: "どちらか1つを選びます。",
  },
  {
    name: "やりたいこと",
    options: ["勉強・制作", "運営"],
    note: "選ばずに、様子を見るだけでもかまいません。あとから変えることもできます。",
  },
];

export const welcomeConditions = [
  "AI をやってみたい気持ちがある人",
  "キャンパスで直接会って、一緒に活動できる人",
  "大阪公立大学の学生（学外の人も参加できます）",
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "プログラミングの経験がなくても参加できますか？",
    answer:
      "参加できます。OIF学習の基礎編は、プログラミングをしたことがない人を想定してつくっています。最初は、AI に頼んで自分の紹介ページをつくるところから始めます。",
  },
  {
    question: "大阪公立大学の学生でなくても参加できますか？",
    answer:
      "参加できます。Discord の質問で、所属に「学外」を選んでください。ただ、キャンパスで直接会って活動することが多いので、大阪公立大学の学生をおすすめしています。",
  },
  {
    question: "どのくらいの頻度で集まりますか？",
    answer: "定例会を週に1回開いています。進み具合を報告し合う回と、集まって作業する回があります。",
  },
  {
    question: "勉強・制作や運営に加わるには、どうすればいいですか？",
    answer:
      "Discord の質問で、やりたいことに「勉強・制作」や「運営」を選んでください。最初は選ばずに入って、あとから加わることもできます。その場合は Discord で運営に連絡してください。",
  },
  {
    question: "OIF学習を進めるには何が必要ですか？",
    answer:
      "パソコンが必要です。スマートフォンでは進められないステップがあります。期限はないので、自分のペースで進められます。",
  },
];
