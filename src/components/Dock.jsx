"use client";

import { useTheme } from "next-themes";

export default function Dock() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/70 p-2 shadow-2xl backdrop-blur-xl">
        <a
          href="/Faik-Patel-CV.pdf"
          download
          className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          CV
        </a>

        <a
          href="YOUR_GITHUB_URL"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          GitHub
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
