import Image from "next/image";
import { Check, CalendarDays, MapPin } from "lucide-react";
import DiscordCTA from "@/components/ui/DiscordCTA";
import { getNextEvent } from "@/lib/events";

/**
 * 「次のイベント」バンド — 認知→参加の段差を下げる“今すぐの理由”。
 * 開催予定があれば日付つきで前面に出し、なければ Discord 告知へ誘導する。
 * 申込み・告知は Discord で完結するため、CTA は DiscordCTA（location 別に計測）。
 */
export default function NextEvent() {
  const event = getNextEvent();

  return (
    <section id="next-event" className="border-b border-ink/10 bg-night-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        {event ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* left: event detail + CTA */}
            <div className="max-w-2xl">
              <p className="section-label mb-4">NEXT EVENT</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight">
                {event.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-ink/65 leading-relaxed">
                {event.subtitle}
              </p>

              {/* date / place */}
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-ink/70">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-ink/45" aria-hidden />
                  {event.dateLabel}　{event.timeLabel}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ink/45" aria-hidden />
                  {event.place}
                </span>
              </div>

              {/* reassurance checklist */}
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <li className="inline-flex items-center gap-2 text-sm font-bold tracking-tight">
                  <Check className="w-4 h-4 text-ink" aria-hidden />
                  {event.audience}
                </li>
                {event.highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-2 text-sm text-ink/75"
                  >
                    <Check className="w-4 h-4 text-ink/55" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <DiscordCTA location="home_event" label="Discordで参加する" />
                <p className="mt-3 font-mono text-xs tracking-widest text-ink/50">
                  受付・告知は Discord で
                </p>
              </div>
            </div>

            {/* right: flyer (shown only when provided) */}
            {event.flyer && (
              <div className="shrink-0 w-full sm:max-w-xs lg:max-w-sm">
                <div className="border border-ink/10 bg-paper p-2 shadow-card">
                  <Image
                    src={event.flyer}
                    alt={event.flyerAlt ?? event.title}
                    width={600}
                    height={849}
                    sizes="(max-width: 640px) 100vw, 24rem"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          /* fallback: 開催予定がないときも空白にしない */
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-label mb-3">EVENTS</p>
              <p className="text-lg md:text-xl font-bold tracking-tight">
                次回のハンズオンは Discord で告知中。
              </p>
              <p className="mt-1 text-sm text-ink/60">
                初心者向けの単発イベントを定期開催しています。
              </p>
            </div>
            <DiscordCTA location="home_event_fallback" label="Discordに参加" />
          </div>
        )}
      </div>
    </section>
  );
}
