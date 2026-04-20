import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "OMU Innovation Frontier (OIF) についてよくある質問と回答。参加方法、活動内容、Discord についてなど。",
  alternates: {
    canonical: "https://oif-ai.com/faq/",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}