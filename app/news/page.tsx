import { Metadata } from "next";
import HeroBackground from "@/components/site/HeroBackground";
import Reveal from "@/components/ui/Reveal";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "OMU Innovation Frontier (OIF) の最新ニュースと更新情報。イベント情報やレポートはこちらです。",
  alternates: {
    canonical: "https://oif-ai.com/news/",
  },
};

export default function NewsPage() {
  return (
    <div className="on-dark bg-night text-white -mt-14 md:-mt-16 pt-14 md:pt-16 min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <HeroBackground accent="accent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 animate-fade-up">
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6">
            // NEWS — $ tail -f updates.log
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            News
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            イベント・募集・お知らせ。OIFの最新の動きはここに記録されます。
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="border-t border-white/10">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-10 py-7 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
              >
                {item.date ? (
                  <time className="font-mono text-sm tracking-widest text-white/60 w-28 shrink-0">
                    {item.date}
                  </time>
                ) : (
                  <div className="w-28 shrink-0 hidden md:block" />
                )}

                <span className="flex-1 text-base md:text-lg font-bold tracking-tight group-hover:text-accent-bright transition-colors">
                  {item.title}
                </span>

                {item.isNew && (
                  <span className="font-mono text-[11px] font-bold tracking-widest bg-accent text-white px-3 py-1 w-fit">
                    NEW
                  </span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
