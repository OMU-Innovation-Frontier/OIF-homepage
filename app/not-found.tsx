import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <p className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-accent-bright mb-6">
          404 — Not Found
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
          ページが<br />見つかりません
        </h1>
        <p className="text-base md:text-lg text-ink/70 font-medium leading-relaxed max-w-md mb-12">
          お探しのページは移動または削除された可能性があります。
          URLをご確認いただくか、トップページからお進みください。
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border border-accent hover:bg-accent-bright hover:text-night hover:border-accent-bright transition-colors duration-200 shadow-[0_0_50px_-12px_rgba(11,12,14,0.25)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
