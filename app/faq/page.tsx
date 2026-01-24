"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "初心者でも参加できますか？",
    answer:
      "はい。技術への興味と学ぶ意欲があれば歓迎します。初心者向けの勉強会も開催しています。",
  },
  {
    question: "活動頻度はどのくらいですか？",
    answer:
      "プロジェクトや勉強会によって異なります。自分のペースで自由に参加可能です。強制的な出席義務はありません。",
  },
  {
    question: "他大学の学生も参加できますか？",
    answer:
      "はい。学外メンバーとして参加可能です。オンラインでの活動には特に制限なく参加できます。",
  },
  {
    question: "他のサークルとの兼部はできますか？",
    answer:
      "できます。活動は主にオンライン（Discord）で行われるため、物理的な制約は少ないです。",
  },
  {
    question: "どんな技術を扱っていますか？",
    answer:
      "Web開発、機械学習、競技プログラミングなど、メンバーの興味に応じて幅広く扱っています。",
  },
  {
    question: "費用はかかりますか？",
    answer:
      "基本的な活動への参加は無料です。合宿や外部イベントへの参加には実費がかかる場合があります。",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Title Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="border-t border-black">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black">
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={`shrink-0 mt-1 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 border-t border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
            その他の質問
          </h2>
          <p className="text-base mb-10 max-w-lg mx-auto">
            上記以外の質問は、Discordでお気軽にお問い合わせください。
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
          >
            Discordに参加
          </a>
        </div>
      </section>
    </div>
  );
}
