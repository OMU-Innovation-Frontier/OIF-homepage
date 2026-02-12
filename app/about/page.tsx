"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter">
            About
          </h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-20 md:py-28 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-medium mb-8">
              OIF — OMU Innovation Frontier
            </p>
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                OIFは、大阪公立大学の学生が運営するAI・ITの技術サークルです。
              </p>
              <p>
                「技術を学び、ものを創り、発信する。」
                この3つを軸に、メンバー一人ひとりが主体的に活動しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="border-b border-black">
        <div className="py-20 md:py-28 border-b border-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
              OIFでできること
            </h2>
            <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                機械学習やWeb開発など、興味のある分野を仲間と一緒に深掘りできます。
              </p>
              <p>
                輪読会や勉強会で基礎を固め、プロジェクト開発やハッカソンで実践に繋げます。
              </p>
              <p className="font-medium">
                「やりたいこと」があれば、誰でも活動を始められる場所です。
              </p>
            </div>
          </div>
        </div>

        {/* Two Parts Grid */}
        <div className="grid md:grid-cols-2">
          {/* Part A: Study */}
          <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black">
            <p className="text-xs font-medium tracking-widest uppercase mb-4">
              Learn
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              学ぶ・深める
            </h3>
            <div className="space-y-4 text-base leading-relaxed">
              <p>技術書の輪読会や論文解説会を定期的に開催しています。</p>
              <p>AI・機械学習からWeb開発まで、幅広いテーマを扱います。</p>
            </div>
          </div>

          {/* Part B: Create */}
          <div className="p-8 md:p-12 lg:p-16 bg-black text-white">
            <p className="text-xs font-medium tracking-widest uppercase mb-4">
              Create
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              創る・発信する
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-white/80">
              <p>学んだ知識を活かして、チームでプロダクトを開発します。</p>
              <p>ハッカソンやコンテストへの参加を通じて、成果を社会に発信します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Environment */}
      <section className="py-20 md:py-28 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
            活動環境
          </h2>
          <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              活動の拠点はDiscordサーバーです。オンラインでの情報共有や議論を日常的に行っています。
            </p>
            <p>
              また、他大学のエンジニア学生との交流機会もあり、学外からの刺激を受けながら成長できる環境です。
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Partner */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
            Partner
          </h2>

          <div className="max-w-2xl">
            <div className="border border-black p-8 md:p-10">
              <div className="flex items-start justify-between gap-6 mb-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Code.Gate?
                </h3>
                <a
                  href="https://code-gate.webflow.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium tracking-wide border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors shrink-0"
                >
                  Website
                </a>
              </div>
              <p className="text-base leading-relaxed">
                プログラミングの基礎から始めたい方は、提携団体の Code.Gate?
                を推奨しています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
