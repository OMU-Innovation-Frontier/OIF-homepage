import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join",
  description: "OIFへの参加方法 - 活動の始め方",
};

const steps = [
  {
    number: "01",
    title: "Discordに参加する",
    content: [
      "OIFの活動はすべてDiscordで行われます。",
      "まずはサーバーに入り、自己紹介チャンネルで挨拶してください。ここから全てが始まります。",
    ],
  },
  {
    number: "02",
    title: "プロジェクトを覗く",
    content: [
      "動いているプロジェクト（AIの輪読会やアプリ開発など）のチャンネルはオープンになっています。",
      "興味がある場所を見つけたら、まずは「見るだけ」でも構わないので参加してみてください。",
    ],
  },
  {
    number: "03",
    title: "3人で立ち上げる",
    content: [
      "もしやりたいことが既存の活動になければ、自分で作ることができます。",
      "「3人」の賛同者が集まれば、誰の許可も要らずに新しいプロジェクトとして活動を開始できます。",
    ],
  },
  {
    number: "04",
    title: "社会へ出す",
    content: [
      "学んだことや作ったものは、LT会（発表会）やハッカソンでアウトプットします。",
      "学外のメンバーからのフィードバックを受けることで、さらに成長できます。",
    ],
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter">
            参加までの流れ
          </h1>
        </div>
      </section>

      {/* Discord Structure Section */}
      <section className="py-16 md:py-20 border-b border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Discord サーバーの構成
          </h2>
          <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed">
            <p>入り口は一つの Global サーバーです。</p>
            <p>
              参加後、所属大学のロール（@OMU など）を申請すると、
              学内専用チャンネルが見えるようになります。
            </p>
          </div>

          {/* Visual Diagram */}
          <div className="mt-12 max-w-xl">
            <div className="border border-white p-6 md:p-8">
              <p className="text-sm font-medium tracking-widest uppercase mb-6">
                OIF Global Discord
              </p>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <span className="text-white/60">#</span>
                  <span>general</span>
                  <span className="text-white/40 text-xs ml-auto">全員</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/60">#</span>
                  <span>announcements</span>
                  <span className="text-white/40 text-xs ml-auto">全員</span>
                </div>
                <div className="border-t border-white/20 my-4" />
                <div className="flex items-center gap-3">
                  <span className="text-white/60">🔒</span>
                  <span>omu-internal</span>
                  <span className="text-white/40 text-xs ml-auto">@OMU</span>
                </div>
                <div className="flex items-center gap-3 pl-6">
                  <span className="text-white/60">🔒</span>
                  <span>omu-projects</span>
                  <span className="text-white/40 text-xs ml-auto">@OMU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] ${
                index < steps.length - 1 ? "border-b border-black" : ""
              }`}
            >
              {/* Step Number */}
              <div className="p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-black">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="p-8 md:p-10 lg:p-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                    {step.title}
                  </h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed">
                    {step.content.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Area */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-base md:text-lg mb-12 max-w-lg mx-auto">
            すべてはDiscordから始まります。
          </p>
          <a
            href="https://discord.gg/TfdmrXKNgD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-12 py-6 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
          >
            まずはDiscordへ
          </a>
        </div>
      </section>
    </div>
  );
}
