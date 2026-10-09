// メンバー紹介。「OIFについて」ページに表示する。空のあいだはセクションごと表示しない。
// 載せるのは本人が公開に同意した内容だけ。本名・学籍番号・連絡先は載せない。

export interface Member {
  /** 表示する名前（ニックネーム可） */
  name: string;
  /** 運営・勉強・制作など */
  role: string;
  /** 本人が書いたひとこと */
  comment?: string;
  /** /images/members/ 以下の画像（本人の同意があるものだけ） */
  image?: string;
}

export const members: Member[] = [];
