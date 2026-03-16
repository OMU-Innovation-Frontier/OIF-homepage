import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://oif-ai.com"),
  title: {
    default: "OIF - OMU Innovation Frontier | 大阪公立大学 AI・ITコミュニティ",
    template: "%s | OIF - OMU Innovation Frontier",
  },
  description:
    "大阪公立大学のAI・IT学習コミュニティ。理論を学び、応用する。最新のテクノロジーを共に探究し、未来を形作る学生団体です。",
  keywords: ["OIF", "OMU Innovation Frontier", "技術コミュニティ", "プログラミング", "学生団体", "大阪公立大学", "AI", "IT", "エンジニア"],
  authors: [{ name: "OMU Innovation Frontier" }],
  creator: "OMU Innovation Frontier",
  publisher: "OMU Innovation Frontier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OIF - OMU Innovation Frontier",
    description: "大阪公立大学のAI・IT学習コミュニティ。理論を学び、応用する。",
    url: "https://oif-ai.com",
    siteName: "OIF - OMU Innovation Frontier",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "OIF Logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "OIF - OMU Innovation Frontier",
    description: "大阪公立大学のAI・IT学習コミュニティ。理論を学び、応用する。",
    images: ["/logo.png"],
  },
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
        <JsonLd />
        <Providers>
          <Header />
          <main className="flex-1 pt-14 md:pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
