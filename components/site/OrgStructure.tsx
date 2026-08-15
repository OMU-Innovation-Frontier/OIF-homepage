"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import DiscordCTA from "@/components/ui/DiscordCTA";

// 正本: marketing/org-chart-target.svg（同心円モデル）。
// 階層ではなく同心円 — 内側ほど責任が増えるだけで、偉さではない。
// 対外の役割募集は community-design.md 決定0（デザイン/技術/運営）に従う。

interface Ring {
  index: string;
  name: string;
  tagline: string;
  detail: string;
  wanted?: string;
}

const rings: Ring[] = [
  {
    index: "00",
    name: "コミュニティ",
    tagline: "入るだけで歓迎",
    detail: "Discordでイベント情報を受け取る。LT会にふらっと参加する。ほとんどのメンバーはここ。",
  },
  {
    index: "01",
    name: "勉強・制作",
    tagline: "初心者から、即戦力へ",
    detail:
      "友達と共に学び、先輩から知識を吸収する。学んだことをチーム開発・教材づくり・SNS/デザインの形にする。LT会・勉強会・質問チャンネル。",
    wanted: "デザイン募集中",
  },
  {
    index: "02",
    name: "運営",
    tagline: "組織全体を見て動く",
    detail: "イベント企画・新歓・広報・他団体や企業との連携。非エンジニアも主戦力。",
    wanted: "募集中",
  },
];

// 外側→内側の面。白から始まり、中心（運営）だけ黒塗り。
const ringSurface = [
  "bg-paper",
  "bg-ink/[0.05]",
  "bg-ink text-white",
];

export default function OrgStructure() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
        {/* ---- nested-rectangles diagram (concentric, sharp corners) ---- */}
        <div className="bg-paper p-6 md:p-10">
          {rings.reduceRight<ReactNode>(
            (child, r, i) => (
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`border transition-colors duration-300 ${ringSurface[i]} ${
                  active === i ? "border-ink" : "border-ink/15"
                } ${i === rings.length - 1 ? "p-5 md:p-6" : "p-4 md:p-5"}`}
              >
                <div className="flex items-baseline justify-between gap-3 mb-3 md:mb-4">
                  <p
                    className={`font-mono text-[11px] tracking-[0.3em] uppercase ${
                      i === rings.length - 1 ? "text-white/80" : "text-ink/45"
                    }`}
                  >
                    {r.index}
                  </p>
                  <p
                    className={`text-sm md:text-base font-black tracking-tight ${
                      i === rings.length - 1 ? "text-white" : "text-ink"
                    }`}
                  >
                    {r.name}
                  </p>
                </div>
                {child}
              </div>
            ),
            <p className="text-[11px] md:text-xs leading-relaxed text-white/85">
              組織設計・対外連携。
              <br className="hidden md:block" />
              組織全体を起点に、人と活動を動かす。
            </p>
          )}
          <p className="mt-5 font-mono text-[11px] leading-relaxed text-ink/45">
            階層ではなく同心円。内側ほど責任が増えるだけで、偉さではない。
          </p>
        </div>

        {/* ---- legend / persona rows ---- */}
        <div className="bg-paper flex flex-col divide-y divide-ink/10">
          {rings.map((r, i) => (
            <div
              key={r.index}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`flex-1 px-6 py-5 md:px-8 md:py-6 transition-colors duration-300 border-l-2 ${
                active === i ? "border-l-ink bg-ink/[0.03]" : "border-l-transparent"
              }`}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                <span className="font-mono text-[11px] tracking-[0.3em] text-ink/45">
                  {r.index}
                </span>
                <h3 className="text-lg md:text-xl font-black tracking-tighter">{r.name}</h3>
                <span className="text-xs md:text-sm text-ink/55">{r.tagline}</span>
                {r.wanted && (
                  <span className="ml-auto font-mono text-[10px] tracking-widest uppercase border border-ink/30 bg-ink text-white px-2 py-0.5">
                    {r.wanted}
                  </span>
                )}
              </div>
              <p className="text-sm text-ink/60 leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---- recruit strip ---- */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border border-ink/10 bg-night-2 px-6 py-6 md:px-8">
        <div className="flex-1">
          <p className="section-label mb-2">RECRUITING</p>
          <p className="text-sm md:text-base text-ink/70 leading-relaxed">
            入り方は、Discordで「デザインやりたい」「運営やりたい」とひとことだけ。
            スキルは入ってから身につければ大丈夫。
            <Link
              href="/join/#roles"
              className="ml-2 font-bold text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink transition-colors whitespace-nowrap"
            >
              役割の詳細 →
            </Link>
          </p>
        </div>
        <div className="shrink-0">
          <DiscordCTA location="home_org_recruit" size="md" label="Discordで声をかける" />
        </div>
      </div>
    </div>
  );
}
