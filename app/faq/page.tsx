import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "OMU Innovation Frontier (OIF) に関するよくある質問。入会方法、活動頻度、プログラミング経験の必要性などについてお答えします。",
};

export default function FAQPage() {
  return <FAQClient />;
}
