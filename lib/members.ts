// メンバー紹介の単一ソース。Home の MEMBERS セクションが参照する。
// 掲載は「運営」「制作」のみ（役割なしメンバーは載せない）。
//
// 使い方:
// - 写真は public/images/members/ に置き、photo に "/images/members/xxx.jpg" を設定。
//   photo 未設定のあいだは initials のタイルが表示される（仮運用OK）。
// - 掲載は本人の同意を得てから。本名/ハンドルの選択も本人に合わせる（repo規約: 個人情報の扱いに注意）。
// - 下の配列はダミーデータ。実データに差し替えて使う。

export type MemberRole = "運営" | "制作";

export interface Member {
  /** 表示名（本名でもハンドルでもOK） */
  name: string;
  /** イニシャル等の1〜3文字（photo 未設定時のタイル表示に使う） */
  initials: string;
  role: MemberRole;
  /** ひとこと自己紹介（1〜2文・50字目安） */
  intro: string;
  /** /public 配下のパス（任意） */
  photo?: string;
}

export const members: Member[] = [
  {
    name: "メンバー 01",
    initials: "01",
    role: "運営",
    intro: "（ダミー）代表。AIを少し学ぶだけで世界が変わるのを、いちばん近くで見たい人。",
  },
  {
    name: "メンバー 02",
    initials: "02",
    role: "運営",
    intro: "（ダミー）イベント企画と外部連携の窓口。非エンジニアから運営に合流。",
  },
  {
    name: "メンバー 03",
    initials: "03",
    role: "制作",
    intro: "（ダミー）教材とサービス開発が主戦場。最近はLLMのTool Callingに夢中。",
  },
  {
    name: "メンバー 04",
    initials: "04",
    role: "制作",
    intro: "（ダミー）SNSとデザイン担当。ポスターからサイトまで「見た目」をつくる。",
  },
];
