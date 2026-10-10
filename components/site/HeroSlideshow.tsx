import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

const SECONDS_PER_SLIDE = 5;

// 写真を数秒ごとに入れ替える。CSS だけで動かす（globals.css の .hero-slide）。枚数を変えたら keyframes の割合も直す。
export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 bg-ink/5">
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(max-width: 1024px) 0px, 45vw"
          className="hero-slide object-cover"
          style={{ animationDelay: `${i * SECONDS_PER_SLIDE - 1}s` }}
        />
      ))}
    </div>
  );
}
