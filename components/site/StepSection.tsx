import type { ReactNode } from "react";
import type { FlowStep } from "@/lib/flow";

interface StepSectionProps {
  step: FlowStep;
  tone?: "white" | "canvas";
  children: ReactNode;
}

// トップの4段それぞれの詳しい説明。左に段の要約、右に補足を置く。
export default function StepSection({ step, tone = "canvas", children }: StepSectionProps) {
  return (
    <section
      id={step.id}
      aria-labelledby={`${step.id}-title`}
      className={`scroll-mt-16 border-t border-ink/10 ${tone === "white" ? "bg-white" : "bg-canvas"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-28 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                {step.step}
              </span>
              <span className="text-base font-bold">{step.name}</span>
            </div>
            <h2 id={`${step.id}-title`} className="mt-5 text-[1.75rem] md:text-4xl font-black leading-snug">
              {step.title}
            </h2>
            <p className="mt-5 text-base leading-loose text-ink/70">{step.body}</p>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-12 md:space-y-14">{children}</div>
      </div>
    </section>
  );
}

interface StepBlockProps {
  title: string;
  lead?: string;
  children: ReactNode;
}

export function StepBlock({ title, lead, children }: StepBlockProps) {
  return (
    <div className="reveal">
      <h3 className="text-xl md:text-2xl font-black leading-snug">{title}</h3>
      {lead && <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/70">{lead}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}
