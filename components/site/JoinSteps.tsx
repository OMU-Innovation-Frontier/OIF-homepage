import { joinSteps } from "@/lib/join";

interface JoinStepsProps {
  tone?: "light" | "dark";
}

export default function JoinSteps({ tone = "light" }: JoinStepsProps) {
  const dark = tone === "dark";

  return (
    <ol className="space-y-3">
      {joinSteps.map((s, i) => (
        <li
          key={s.title}
          className={`reveal flex gap-4 rounded-2xl p-5 md:p-6 ${dark ? "bg-white/[0.06]" : "border border-ink/10 bg-white"}`}
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
              dark ? "border border-white/30" : "bg-ink text-white"
            }`}
          >
            {i + 1}
          </span>
          <span>
            <span className="block font-bold leading-relaxed">{s.title}</span>
            <span className={`mt-1 block text-sm leading-relaxed ${dark ? "text-white/65" : "text-ink/65"}`}>
              {s.body}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
