import Image from "next/image";
import Link from "next/link";
import { getPastEvents } from "@/lib/events";

/**
 * これまでの開催 — 過去イベントのチラシを並べる社会的証明。
 * 「定期的に・初心者向けに開催している」ことが伝わり、参加ハードルを下げる。
 * チラシ画像のある過去イベントのみ表示する。
 */
export default function PastEvents() {
  const past = getPastEvents().filter((e) => e.flyer);
  if (past.length === 0) return null;

  return (
    <section className="border-b border-ink/10 bg-night">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <p className="section-label mb-6">PAST EVENTS</p>
        <div className="flex flex-wrap gap-6">
          {past.map((e) => (
            <Link
              key={e.slug}
              href="/activities/"
              className="group w-40 sm:w-48"
            >
              <div className="relative aspect-[3/4] border border-ink/10 overflow-hidden bg-night-2">
                <Image
                  src={e.flyer as string}
                  alt={e.flyerAlt ?? e.title}
                  fill
                  sizes="12rem"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-smooth"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] tracking-widest text-ink/55">
                {e.dateLabel}
              </p>
              <p className="mt-1 text-sm font-bold tracking-tight leading-snug group-hover:text-ink transition-colors">
                {e.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
