"use client";

import { ArrowUpRight } from "lucide-react";
import { useChapter, Chapter } from "@/contexts/ChapterContext";

type NewsScope = "global" | "omu" | "all";

interface NewsItem {
  date: string;
  title: string;
  isNew: boolean;
  scope: NewsScope;
}

const allNewsItems: NewsItem[] = [
  {
    date: "2026.04.05",
    title: "OIF Global LT大会 参加者募集",
    isNew: true,
    scope: "global",
  },
  {
    date: "2026.04.01",
    title: "新入生向け説明会のお知らせ",
    isNew: true,
    scope: "omu",
  },
  {
    date: "2026.03.20",
    title: "阪大・東科大との合同ハッカソン開催",
    isNew: true,
    scope: "global",
  },
  {
    date: "2026.03.15",
    title: "ハッカソンの開催報告",
    isNew: false,
    scope: "omu",
  },
  {
    date: "2026.03.01",
    title: "新規チャプター設立のお知らせ",
    isNew: false,
    scope: "global",
  },
  {
    date: "2026.02.28",
    title: "春季輪読会の参加者募集",
    isNew: false,
    scope: "omu",
  },
  {
    date: "2026.02.10",
    title: "Code.Gate?との合同LT会を開催しました",
    isNew: false,
    scope: "all",
  },
  {
    date: "2026.01.20",
    title: "冬季開発合宿の報告",
    isNew: false,
    scope: "omu",
  },
  {
    date: "2026.01.10",
    title: "公式サイトを公開しました",
    isNew: false,
    scope: "all",
  },
];

function filterNews(items: NewsItem[], chapter: Chapter): NewsItem[] {
  return items.filter(
    (item) => item.scope === "all" || item.scope === chapter
  );
}

export default function NewsPage() {
  const { chapter } = useChapter();
  const newsItems = filterNews(allNewsItems, chapter);

  return (
    <div className="min-h-screen">
      {/* Title Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-end justify-between gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
              News
            </h1>
            <p className="text-xs font-medium tracking-widest uppercase text-black/60 pb-2">
              {chapter === "global" ? "Global" : "OMU Chapter"}
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="border-t border-black">
            {newsItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-black hover:bg-black hover:text-white hover:px-6 transition-all duration-200"
              >
                {/* Date */}
                <time className="text-sm font-medium tracking-wider w-28 shrink-0">
                  {item.date}
                </time>

                {/* Scope Badge */}
                {item.scope !== chapter && item.scope === "all" && (
                  <span className="text-xs font-medium tracking-widest border border-current px-2 py-0.5 w-fit">
                    ALL
                  </span>
                )}

                {/* Title */}
                <span className="flex-1 text-base md:text-lg font-medium">
                  {item.title}
                </span>

                {/* New Badge */}
                {item.isNew && (
                  <span className="text-xs font-bold tracking-widest bg-black text-white group-hover:bg-white group-hover:text-black px-3 py-1 w-fit">
                    NEW
                  </span>
                )}

                {/* Arrow */}
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
