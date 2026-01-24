"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Chapter = "global" | "omu";

interface ChapterContextType {
  chapter: Chapter;
  setChapter: (chapter: Chapter) => void;
}

const ChapterContext = createContext<ChapterContextType | undefined>(undefined);

export function ChapterProvider({ children }: { children: ReactNode }) {
  const [chapter, setChapterState] = useState<Chapter>("omu");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("oif-chapter") as Chapter | null;
    if (stored === "global" || stored === "omu") {
      setChapterState(stored);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage when chapter changes
  const setChapter = (newChapter: Chapter) => {
    setChapterState(newChapter);
    localStorage.setItem("oif-chapter", newChapter);
  };

  // Prevent hydration mismatch by not rendering until client-side
  if (!isHydrated) {
    return (
      <ChapterContext.Provider value={{ chapter: "omu", setChapter }}>
        {children}
      </ChapterContext.Provider>
    );
  }

  return (
    <ChapterContext.Provider value={{ chapter, setChapter }}>
      {children}
    </ChapterContext.Provider>
  );
}

export function useChapter() {
  const context = useContext(ChapterContext);
  if (context === undefined) {
    throw new Error("useChapter must be used within a ChapterProvider");
  }
  return context;
}
