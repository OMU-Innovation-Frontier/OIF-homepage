import { roleGroups } from "@/lib/join";

// Discord に入ったときに選ぶ項目。実際の画面ではなく、選べる内容の一覧。
export default function RoleChoices() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {roleGroups.map((g) => (
        <div key={g.name} className="rounded-2xl border border-ink/10 bg-white p-5">
          <p className="text-sm font-bold text-ink/55">{g.name}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {g.options.map((o) => (
              <li key={o} className="rounded-full border border-ink/20 px-4 py-1.5 text-sm font-bold">
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">{g.note}</p>
        </div>
      ))}
    </div>
  );
}
