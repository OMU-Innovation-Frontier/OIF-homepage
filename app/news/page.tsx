"use client";

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
    date: "2026.01.24",
    title: "公式サイトを公開しました",
    isNew: true,
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
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-black"
              >
                {/* Date */}
                <time className="text-sm font-medium tracking-wider w-28 shrink-0">
                  {item.date}
                </time>

                {/* Scope Badge */}
                {item.scope !== chapter && item.scope === "all" && (
                  <span className="text-xs font-medium tracking-widest border border-black px-2 py-0.5 w-fit">
                    ALL
                  </span>
                )}

                {/* Title */}
                <span className="flex-1 text-base md:text-lg font-medium">
                  {item.title}
                </span>

                {/* New Badge */}
                {item.isNew && (
                  <span className="text-xs font-bold tracking-widest bg-black text-white px-3 py-1 w-fit">
                    NEW
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
