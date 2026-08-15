import { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import DiscordCTA from "@/components/ui/DiscordCTA";
import { ltEvents } from "@/lib/lt-events";

export const metadata: Metadata = {
  title: "LT会 | OIF 大阪公立大学のAIサークルの活動",
  description:
    "OIF（OMU Innovation Frontier）が開催しているLT（ライトニングトーク）会の記録。メンバーそれぞれの挑戦を共有する場です。",
  alternates: {
    canonical: "https://oif-ai.com/lt/",
  },
};

export default function LTPage() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* HERO */}
      <section className="relative min-h-[50svh] flex items-center border-b border-ink/10 bg-paper">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 w-full animate-fade-up">
          <p className="section-label mb-6">LT会</p>
          <h1 className="display mb-8">LT会</h1>
          <p className="lede max-w-2xl">
            メンバーそれぞれが今挑戦していることを共有するライトニングトーク会。
            定期的に開催しています。
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-20 md:space-y-28">
          {ltEvents.map((event) => (
            <div key={event.slug} className="border border-ink/12">
              <div className="p-8 md:p-10 border-b border-ink/12">
                <p className="font-mono text-xs tracking-widest text-ink/50 mb-2">
                  {event.dateLabel} ・ {event.place}
                </p>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">
                  {event.title}
                </h2>
                <p className="text-base leading-relaxed text-ink/75 max-w-3xl">
                  {event.summary}
                </p>
              </div>

              {event.photos.length > 0 && (
                <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10 border-b border-ink/12">
                  {event.photos.map((p) => (
                    <div key={p.src} className="relative aspect-[4/3] overflow-hidden bg-night-2">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </Reveal>
              )}

              <div className="p-8 md:p-10">
                <p className="text-xs font-medium tracking-widest uppercase text-ink/60 mb-4">
                  発表一覧
                </p>
                <ul className="space-y-3">
                  {event.talks.map((talk) => (
                    <li
                      key={talk.title}
                      className="flex items-center justify-between gap-4 py-3 border-b border-ink/10 last:border-b-0"
                    >
                      <span className="text-base font-bold tracking-tight">{talk.title}</span>
                      {talk.slideUrl && (
                        <a
                          href={talk.slideUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide underline underline-offset-4 hover:text-ink/60 transition-colors duration-200 shrink-0"
                        >
                          スライド
                          <ExternalLink size={16} strokeWidth={1.75} />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-base md:text-lg mb-10 max-w-xl mx-auto">
            次回のLT会もDiscordで告知します。
          </p>
          <div className="flex justify-center">
            <DiscordCTA location="lt_cta" />
          </div>
        </div>
      </section>
    </div>
  );
}
