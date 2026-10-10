import Link from "next/link";

interface MovedPageProps {
  to: string;
  label: string;
}

// 2026-10 刷新で統合したページ用。古いリンクから来た人を移動先へ送る。
export default function MovedPage({ to, label }: MovedPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <p className="text-lg font-bold">このページは移動しました。</p>
      <Link href={to} className="mt-4 inline-block font-bold underline underline-offset-4">
        {label}へ
      </Link>
    </div>
  );
}
