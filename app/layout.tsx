import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "OIF - OMU Innovation Frontier",
    template: "%s | OIF",
  },
  description:
    "大阪公立大学のAI・IT学習コミュニティー。理論を学び、応用する。",
  keywords: ["OIF", "OMU Innovation Frontier", "技術コミュニティ", "プログラミング", "学生団体", "大阪公立大学"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
          <main className="flex-1 pt-14 md:pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
