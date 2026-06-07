import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import Analytics from "@/components/site/Analytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oif-ai.com"),
  title: {
    default: "OIF | 大阪公立大学のAI・プログラミングサークル OMU Innovation Frontier",
    template: "%s | OIF - OMU Innovation Frontier",
  },
  description:
    "OIF（OMU Innovation Frontier）は大阪公立大学のAI・プログラミングサークルです。AIや機械学習を一緒に学びたい学生を募集中。初心者歓迎、プログラミング経験不問。",
  keywords: [
    "OIF",
    "OMU Innovation Frontier",
    "OMU AI",
    "大阪公立大学 AI",
    "大阪公立大学 AIサークル",
    "大阪公立大学 プログラミングサークル",
    "大阪公立大学 学生団体",
    "大阪公立大学 IT",
    "大阪公立大学 機械学習",
    "大阪公立大学 エンジニア",
    "AI サークル 大阪",
    "プログラミングサークル 大阪公立大学",
    "学生AI コミュニティ",
    "AI学習 学生",
    "技術コミュニティ",
    "プログラミング",
    "AI",
    "IT",
    "機械学習",
    "深層学習",
  ],
  authors: [{ name: "OMU Innovation Frontier" }],
  creator: "OMU Innovation Frontier",
  publisher: "OMU Innovation Frontier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "OIF | 大阪公立大学のAI・プログラミングサークル",
    description: "OIF（OMU Innovation Frontier）は大阪公立大学のAI・プログラミングサークルです。AIや機械学習を一緒に学びたい学生を募集中。初心者歓迎。",
    url: "https://oif-ai.com",
    siteName: "OIF - OMU Innovation Frontier",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OIF - 大阪公立大学のAI・プログラミングサークル OMU Innovation Frontier",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OIF | 大阪公立大学のAI・プログラミングサークル",
    description: "OIF（OMU Innovation Frontier）は大阪公立大学のAI・プログラミングサークルです。AIや機械学習を一緒に学びたい学生を募集中。",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png" }],
  },
  verification: {
    other: {
      "msvalidate.01": "B000C411350589C064A6B35ACBF14EA8",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-14 md:pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
