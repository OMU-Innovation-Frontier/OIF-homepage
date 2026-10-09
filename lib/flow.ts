// 活動の流れ（4段）。トップの骨組み。文言は代表が確定したもの（2026-10-09）。

export interface FlowStep {
  id: string;
  step: string;
  name: string;
  title: string;
  body: string;
}

export const flowSteps: FlowStep[] = [
  {
    id: "step-join",
    step: "01",
    name: "入る",
    title: "まずは Discord から",
    body: "会費は無料で、プログラミングの経験もいりません。Discord に入って、所属とやりたいことを選ぶところから始まります。",
  },
  {
    id: "step-learn",
    step: "02",
    name: "学ぶ",
    title: "Noema と OIF学習",
    body: "技術メディア Noema では、AI で何ができるかと、それがなぜ動くのかを具体例で説明しています。勉強・制作のメンバーは、全員が学習プログラム「OIF学習」で同じ土台をつくります。",
  },
  {
    id: "step-build",
    step: "03",
    name: "つくる",
    title: "実際に動くものをつくる",
    body: "記事を読んで分かることと、自分でつくれることは別です。週1回の定例会で進み具合を共有しながら、動くものをつくるところまで取り組みます。",
  },
  {
    id: "step-present",
    step: "04",
    name: "発表する",
    title: "つくったものを人前に出す",
    body: "つくったものは定例会で発表します。完成していなくてもかまいません。学外のコンテストにも出ています。",
  },
];
