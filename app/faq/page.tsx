import { Metadata } from "next";
import MovedPage from "@/components/site/MovedPage";

export const metadata: Metadata = { robots: { index: false } };

export default function Page() {
  return <MovedPage to="/join/#faq" label="よくある質問" />;
}
