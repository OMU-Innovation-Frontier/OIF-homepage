// LT会（ライトニングトーク）の単一ソース。回を重ねるたびにこの配列の先頭に1件足す。
// 個人名は出さない方針（発表タイトルとスライドリンクのみ）。

export interface LTTalk {
  title: string;
  /** Google Drive 等のスライドURL（任意） */
  slideUrl?: string;
}

export interface LTPhoto {
  src: string;
  alt: string;
}

export interface LTEvent {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  place: string;
  summary: string;
  photos: LTPhoto[];
  talks: LTTalk[];
}

export const ltEvents: LTEvent[] = [
  {
    slug: "lt-2026-07-01",
    title: "第1回 LT会",
    date: "2026-07-01",
    dateLabel: "2026.07.01 (水)",
    place: "中百舌鳥キャンパス スマートエネルギー棟",
    summary:
      "中百舌鳥キャンパスのスマートエネルギー棟にて「第1回 LT（ライトニングトーク）会」を開催しました。メンバーそれぞれが今挑戦していることの共有や、OIFという組織を今後どう盛り上げていくかなど、非常に実りあるディスカッションの場となりました。",
    photos: [
      { src: "/images/lt/lt1-01.jpg", alt: "第1回LT会の発表の様子（Siri AI）" },
      { src: "/images/lt/lt1-02.jpg", alt: "第1回LT会の発表の様子（形式ニューロン）" },
      { src: "/images/lt/lt1-03.jpg", alt: "第1回LT会の発表の様子（OIFの現状と、これから）" },
    ],
    talks: [
      {
        title: "OIFの現状と、これから",
        slideUrl: "https://drive.google.com/file/d/1-sRQGOlRKTGbtdYkdaRU-U4GyErKggUT/view",
      },
      {
        title: "Siri AI",
        slideUrl: "https://drive.google.com/file/d/1cO1r6OTyzBy29W8Nn0XleRWIQ1uAxgrB/view",
      },
      {
        title: "形式ニューロン",
        slideUrl: "https://drive.google.com/file/d/1FXgT3Z5WWl4afJ8hKbTTVY5AJ87jkReO/view",
      },
    ],
  },
];
