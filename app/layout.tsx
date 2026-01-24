import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "OIF - Osaka Innovation Frontier",
    template: "%s | OIF",
  },
  description:
    "大学を超える技術者ネットワーク。理論を学び、応用する。",
  keywords: ["OIF", "技術コミュニティ", "プログラミング", "学生団体", "大学連携"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
