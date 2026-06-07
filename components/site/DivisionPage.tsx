import type { LucideIcon } from "lucide-react";
import SectionDivider from "@/components/site/SectionDivider";
import Eyebrow from "@/components/ui/Eyebrow";

type Accent = "dev" | "theory";

const A: Record<
  Accent,
  {
    text: string;
    eyebrow: "dev" | "theory";
    tint: string;
    border: string;
    borderL: string;
    dot: string;
    icon: string;
    flowNum: string;
    headline: string;
    bright: string;
  }
> = {
  dev: {
    text: "text-dev-bright",
    eyebrow: "dev",
    tint: "bg-dev/10",
    border: "border-dev/30",
    borderL: "border-l-dev",
    dot: "bg-dev-bright",
    icon: "text-dev-bright",
    flowNum: "text-dev-bright/30",
    headline: "text-dev-bright",
    bright: "text-dev-bright",
  },
  theory: {
    text: "text-theory-bright",
    eyebrow: "theory",
    tint: "bg-theory/10",
    border: "border-theory/30",
    borderL: "border-l-theory",
    dot: "bg-theory-bright",
    icon: "text-theory-bright",
    flowNum: "text-theory-bright/30",
    headline: "text-theory-bright",
    bright: "text-theory-bright",
  },
};

export interface DivisionPageProps {
  accent: Accent;
  eyebrowEn: string;
  title: string;
  lead: string;
  overview: { label: string; body: string }[];
  headline: { pre: string; accent: string; post: string };
  intro: string[];
  pillarsLead: string;
  pillars: { icon: LucideIcon; title: string; body: string }[];
  themesTitle?: string;
  themes: string[];
  flow: { step: string; title: string; body: string }[];
  closing: { accent: string; afterAccent: string; lines: string[] };
}

export default function DivisionPage({
  accent,
  eyebrowEn,
  title,
  lead,
  overview,
  headline,
  intro,
  pillarsLead,
  pillars,
  themes,
  flow,
  closing,
}: DivisionPageProps) {
  const a = A[accent];

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero */}
      <section className="section-y-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Eyebrow tone={a.eyebrow} className="mb-6 tracking-[0.3em] text-sm">
                {eyebrowEn}
              </Eyebrow>
              <h1 className="text-5xl font-black leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl">
                {title}
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/72 md:text-xl">
                {lead}
              </p>
            </div>

            {/* Overview box — symmetric across divisions */}
            <div className={`border ${a.border} ${a.tint} p-6 md:p-8`}>
              <Eyebrow tone={a.eyebrow} className="tracking-[0.3em] text-[11px]">
                Overview
              </Eyebrow>
              <div className="mt-6 space-y-4">
                {overview.map((o) => (
                  <div key={o.label} className={`border-t ${a.border} pt-4`}>
                    <p className="text-sm font-semibold text-ink/55">{o.label}</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-ink/80">
                      {o.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Lead statement */}
      <section className="section-y-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black tracking-tighter md:text-4xl lg:text-6xl">
              {headline.pre}
              <br className="hidden md:block" />
              <span className={a.headline}>{headline.accent}</span>
              {headline.post}
            </h2>
            <div className="mt-14 space-y-8 text-lg font-medium leading-relaxed text-ink/80 md:text-xl lg:text-2xl">
              {intro.map((p, i) => (
                <p key={i} className={i === intro.length - 1 ? "text-ink" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Pillars */}
      <section className="section-y-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow tone={a.eyebrow} className="mb-4">What we do</Eyebrow>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                {accent === "dev" ? "開発部門でやること" : "理論部門でやること"}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-ink/60 md:text-base">
              {pillarsLead}
            </p>
          </div>

          <div className="grid gap-0 border-t border-white/12 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`pt-12 pb-16 ${
                    i < pillars.length - 1 ? "border-b border-white/12 lg:border-b-0 lg:border-r" : ""
                  } ${i === 0 ? "pr-8" : "lg:px-10"} ${i === pillars.length - 1 ? "lg:pl-10" : ""}`}
                >
                  <Icon size={28} strokeWidth={1.5} className={`mb-8 ${a.icon}`} />
                  <h3 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-ink/70 md:text-lg lg:text-xl">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Themes */}
      <section className="section-y-lg bg-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow tone={a.eyebrow} className="mb-4">Themes</Eyebrow>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                こんなテーマを扱います
              </h2>
            </div>

            <div className="border border-white/12 bg-night-2 shadow-card">
              {themes.map((item, index) => (
                <div
                  key={item}
                  className={`px-6 py-6 md:px-8 ${index < themes.length - 1 ? "border-b border-ink/10" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`mt-2 h-2 w-2 shrink-0 ${a.dot}`} />
                    <span className="text-lg font-medium leading-relaxed text-ink/82">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Workflow */}
      <section className="section-y-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Eyebrow tone={a.eyebrow} className="mb-4">Workflow</Eyebrow>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            進め方のイメージ
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {flow.map((item) => (
              <div
                key={item.step}
                className="border border-white/12 bg-night-2 p-6 shadow-card transition-transform duration-300 ease-smooth hover:-translate-y-1"
              >
                <p className={`text-4xl font-black tracking-tighter ${a.flowNum}`}>
                  {item.step}
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Closing statement */}
      <section className="on-dark py-32 md:py-48 lg:py-64 bg-night-2 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="max-w-5xl text-4xl font-black tracking-tighter leading-[1.1] md:text-5xl lg:text-7xl">
            <span className={a.bright}>{closing.accent}</span>
            {closing.afterAccent}
            <br />
            {closing.lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < closing.lines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
      </section>
    </div>
  );
}
