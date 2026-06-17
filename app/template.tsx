"use client";

/** Re-mounts on every navigation → gives each page a subtle entrance. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
