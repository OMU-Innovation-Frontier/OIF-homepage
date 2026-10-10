import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

// 写真を少しずつずらして重ねる。位置は枚数ぶんだけ用意してある。
const placements = [
  "left-0 top-[8%] w-[46%] -rotate-3 z-10",
  "left-[27%] top-0 w-[44%] rotate-2 z-20",
  "right-0 top-[14%] w-[42%] -rotate-1 z-30",
  "left-[10%] bottom-0 w-[40%] rotate-3 z-40",
  "right-[6%] bottom-[2%] w-[40%] -rotate-2 z-50",
];

export default function PhotoStack({ photos }: { photos: Photo[] }) {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl sm:aspect-[16/10]">
      {photos.slice(0, placements.length).map((p, i) => (
        <span
          key={p.src}
          className={`absolute block overflow-hidden rounded-xl border-4 border-white bg-white shadow-card ${placements[i]}`}
        >
          <span className="relative block aspect-[4/3]">
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 46vw, 18rem" className="object-cover" />
          </span>
        </span>
      ))}
    </div>
  );
}
