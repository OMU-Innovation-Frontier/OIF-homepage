// 階層ではなく同心円。内側ほど関わる量と責任が増えるだけで、上下関係ではない。
const rings = [
  {
    name: "コミュニティ",
    body: "Discord に参加している人全員です。お知らせを受け取るだけ、という関わり方でもかまいません。",
  },
  {
    name: "勉強・制作",
    body: "OIF学習で学び、チームで開発する人たちです。Discord で勉強・制作のロールが付いた人がここに入ります。",
  },
  {
    name: "運営",
    body: "団体の方針を決め、活動を回す人たちです。",
  },
];

export default function OrgStructure() {
  return (
    <div className="space-y-6">
      <div aria-hidden className="rounded-3xl border border-ink/20 bg-white p-3 sm:p-5">
        <p className="mb-3 text-sm font-bold">{rings[0].name}</p>
        <div className="rounded-2xl border border-ink/20 bg-ink/[0.03] p-3 sm:p-5">
          <p className="mb-3 text-sm font-bold">{rings[1].name}</p>
          <div className="rounded-xl border-2 border-ink bg-white px-4 py-6 text-center text-sm font-bold">{rings[2].name}</div>
        </div>
      </div>

      <dl className="divide-y divide-ink/10 border-y border-ink/10">
        {rings.map((r) => (
          <div key={r.name} className="py-4">
            <dt className="font-bold">{r.name}</dt>
            <dd className="mt-1 text-sm md:text-base leading-relaxed text-ink/70">{r.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
