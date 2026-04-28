"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionDivider from "@/components/site/SectionDivider";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Discordって何ですか？",
    answer: (
      <>
        Discordは無料のチャットアプリです。<br />
        OIFでは、AIニュースの共有・イベント案内・メンバー同士の交流など、
        コミュニティの活動をすべてDiscord上で行っています。<br /><br />
        アカウント作成はメールアドレスだけで可能で、スマートフォンからもPCからも利用できます。
      </>
    )
  },
  {
    question: "Discordに参加するだけで大丈夫ですか？",
    answer: (
      <>
        はい、もちろん大丈夫です。<br />
        OIFのDiscordには誰でも無料で参加できます。<br /><br />
        参加後は自分のペースで関わり方を選べます：<br />
        ・<strong>メンバー</strong>…情報の受け取りや相談など、気軽に参加するスタイル<br />
        ・<strong>コアメンバー</strong>…勉強会やプロジェクト開発に積極的に参加するスタイル<br /><br />
        まずは眺めるだけでも歓迎です。
      </>
    )
  },
  {
    question: "大阪公立大学の学生じゃないと参加できませんか？",
    answer: (
      <>
        大阪公立大学以外の学生でも参加できます。<br />
        AIやテクノロジーに興味があれば、学校・学部・専攻は問いません。
      </>
    )
  },
  {
    question: "プログラミング経験がなくても大丈夫ですか？",
    answer: (
      <>
        はい、大丈夫です。<br />
        OIF には、AIやテクノロジーに興味を持つさまざまな学生が参加できます。<br />
        初心者の方も歓迎しています。
      </>
    )
  },
  {
    question: "どのような活動をしていますか？",
    answer: (
      <>
        AIやテクノロジーに関する学びや交流を中心に活動しています。<br /><br />
        例えば<br />
        ・AIツールの紹介<br />
        ・技術の共有<br />
        ・小さなプロジェクト<br />
        ・技術ディスカッション<br />
        などを行っています。
      </>
    )
  },
  {
    question: "活動頻度はどのくらいですか？",
    answer: (
      <>
        イベントや勉強会は不定期に開催されます。<br />
        最新情報はDiscordで共有しています。
      </>
    )
  },
  {
    question: "どのように参加できますか？",
    answer: (
      <>
        まずは Discordコミュニティに参加してください。<br />
        イベント案内やコミュニティの情報はDiscordで共有されています。<br /><br />
        JoinページからDiscordに参加できます。
      </>
    )
  },
  {
    question: "メンバー同士でプロジェクトを作ることはできますか？",
    answer: (
      <>
        はい、可能です。<br />
        OIF では、AIやテクノロジーに関するアイデアを共有し、<br />
        メンバー同士でプロジェクトを進めることも歓迎しています。
      </>
    )
  },
  {
    question: "他の技術コミュニティと連携する予定はありますか？",
    answer: (
      <>
        将来的には、AIやテクノロジーに関するさまざまなコミュニティとの連携も視野に入れています。<br />
        コミュニティの成長に合わせて、新しい活動が生まれていく予定です。
      </>
    )
  }
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Title Section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">FAQ</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter">
            よくあるご質問
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Accordion */}
      <section className="py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="border-t border-black">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left hover:text-black/70 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold tracking-tight">
                    Q. {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    strokeWidth={1.5}
                    className={`shrink-0 mt-1 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                    }`}
                >
                  <div className="text-base md:text-lg leading-relaxed font-medium text-black/80 pl-6 md:pl-8 border-l-2 border-black/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            その他のご質問
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-lg mx-auto font-medium text-white/80">
            上記以外のご質問は、Discordでお気軽にお問い合わせください。
          </p>
          <a
            href="https://discord.gg/pEHeeYKUnX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-12 py-5 text-sm font-bold tracking-widest uppercase border border-white hover:bg-black hover:text-white transition-colors duration-200"
          >
            Join our Discord
          </a>
        </div>
      </section>
    </div>
  );
}
