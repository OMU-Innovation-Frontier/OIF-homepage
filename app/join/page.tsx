import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import JoinSteps from "@/components/site/JoinSteps";
import RoleChoices from "@/components/site/RoleChoices";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";
import { faqs, welcomeConditions } from "@/lib/join";

export const metadata: Metadata = {
  title: "参加する | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）への参加は Discord から。会費無料・プログラミング経験不問・文系も1年生も歓迎。Discord で所属とやりたいことを選ぶと、学習プログラム「OIF学習」が使えるようになります。",
  alternates: {
    canonical: "https://oif-ai.com/join/",
  },
};

export default function JoinPage() {
  return (
    <div className="bg-canvas text-ink">
      <PageHeader
        title="参加する"
        lead="OIF への参加は Discord から行います。会費は無料で、プログラミングの経験もいりません。文系の学生も1年生も参加できます。"
      />

      <section className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="参加の流れ">
              <p>Discord に入ったあと、所属とやりたいことを選択肢から選びます。選んだ内容に合わせてロールが付きます。</p>
            </SectionHeading>
            <div className="mt-8">
              <DiscordCTA location="join_steps" variant="brand" size="md" label="Discord に参加する" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <JoinSteps />
            <RoleChoices />
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal>
            <SectionHeading title="参加の条件" />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {welcomeConditions.map((c, i) => (
              <li
                key={c}
                className="reveal rounded-2xl border border-ink/10 bg-canvas p-6 font-bold leading-relaxed"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading title="よくある質問" />
          </Reveal>
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="group rounded-2xl border border-ink/10 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 font-bold leading-relaxed [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-ink/50 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base leading-loose text-ink/70">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xl md:text-2xl font-black leading-snug">ほかに質問があれば、Discord で運営に連絡してください。</p>
          <DiscordCTA location="join_bottom" variant="brandOnDark" size="md" label="Discord に参加する" />
        </div>
      </section>
    </div>
  );
}
