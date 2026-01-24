"use client";

import { ReactNode } from "react";
import { ChapterProvider } from "@/contexts/ChapterContext";

export function Providers({ children }: { children: ReactNode }) {
  return <ChapterProvider>{children}</ChapterProvider>;
}
