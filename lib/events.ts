// イベントの単一ソース。トップの NextEvent（次回）と PastEvents（これまでの開催）が参照する。
// 新しい回を追加するときは、この配列の先頭に1件足すだけでよい。
// 参加はホームページの Discord 招待リンク経由（告知・受付は Discord）。

export interface OIFEvent {
  /** 一意なスラッグ（将来の詳細ページ用） */
  slug: string;
  title: string;
  /** 一文の補足。難易度ではなく「何が得られるか」を書く。 */
  subtitle: string;
  /** ロジック用の開催日（YYYY-MM-DD, JST） */
  date: string;
  /** 表示用の日付ラベル */
  dateLabel: string;
  /** 表示用の時間ラベル */
  timeLabel: string;
  /** 会場（オンラインなら "オンライン"） */
  place: string;
  /** 対象。ハードルの低さを明言する。 */
  audience: string;
  /** 安心材料の箇条書き（チェックリストで表示） */
  highlights: string[];
  /** チラシ画像（任意）。/public 配下のパス。 */
  flyer?: string;
  /** チラシ画像の alt テキスト */
  flyerAlt?: string;
}

export const events: OIFEvent[] = [
  {
    slug: "code-deeplearning-2026-06",
    title: "コードで学ぶ！DeepLearning",
    subtitle:
      "ブラックボックスだったAIの仕組みを、お手本コードを動かしながら理解する。最後は自分だけのAIを作って精度を競うコンペ形式。",
    date: "2026-06-19",
    dateLabel: "2026.06.19 (金)",
    timeLabel: "17:00 – 19:00",
    place: "UR森ノ宮ビル「ほとりで」",
    audience: "一回生・初心者大歓迎",
    highlights: [
      "コーディングスキル不要",
      "お手本ありでAIが作れる",
      "Google Colab で環境構築なし",
    ],
    flyer: "/images/events/code-deeplearning.png",
    flyerAlt: "コードで学ぶ！DeepLearning イベントのチラシ",
  },
  {
    slug: "local-llm-handson-2026-05",
    title: "ローカルLLM ハンズオン",
    subtitle:
      "自分のPCで動くローカルLLMを、GUI体験からCLI・curl・Pythonでのアプリ組み込みまで一通り触ってみる第一歩。",
    date: "2026-05-22",
    dateLabel: "2026.05.22 (金)",
    timeLabel: "17:00 – 18:30",
    place: "UR森ノ宮ビル「ほとりで」",
    audience: "興味ある人みんな歓迎",
    highlights: ["ネット不要・自分のPCで完結", "Pythonから使える", "プライバシーも安心"],
    flyer: "/images/events/local-llm-handson.png",
    flyerAlt: "ローカルLLM ハンズオン イベントのチラシ",
  },
  {
    slug: "study-friends-2026-05",
    title: "勉強仲間を作ろう。",
    subtitle:
      "AIやプログラミングに興味ある人同士で、ゆるく交流する会。申し込み不要・出入り自由。",
    date: "2026-05-01",
    dateLabel: "2026.05.01 (金)",
    timeLabel: "17:00 – 19:30",
    place: "UR森ノ宮ビル「ほとりで」",
    audience: "未経験OK・1人参加歓迎",
    highlights: ["申し込み不要", "出入り自由", "友達づくり歓迎"],
    flyer: "/images/events/study-friends.png",
    flyerAlt: "勉強仲間を作ろう 交流イベントのチラシ",
  },
  {
    slug: "vibe-coding-2026-03",
    title: "「Vibe Coding」で学ぶ次世代エンジニアリング",
    subtitle:
      "環境構築なしで、AIと一緒にコードを書く“次世代の開発”を体験するハンズオン。",
    date: "2026-03-13",
    dateLabel: "2026.03.13 (土)",
    timeLabel: "16:00 – 18:00",
    place: "UR森ノ宮ビル「ほとりで」",
    audience: "初心者歓迎",
    highlights: ["環境構築不要", "GitHub / Colab を使用", "成果発表あり"],
    flyer: "/images/events/vibe-coding.png",
    flyerAlt: "「Vibe Coding」で学ぶ次世代エンジニアリング イベントのチラシ",
  },
];

/** 直近の開催予定（開催日が今日以降）を1件返す。なければ null。 */
export function getNextEvent(now: Date = new Date()): OIFEvent | null {
  const today = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return upcoming[0] ?? null;
}

/** これまでの開催（開催日が今日より前）を新しい順に返す。 */
export function getPastEvents(now: Date = new Date()): OIFEvent[] {
  const today = now.toISOString().slice(0, 10);
  return events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
}
