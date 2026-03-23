import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://oif-ai.com/",
  },
};

export default function Home() {
  return <HomeClient />;
}
