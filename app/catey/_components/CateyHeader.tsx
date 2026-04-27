"use client";

import { useLanguage } from "../../../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function CateyHeader() {
  const { isRTL } = useLanguage();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/70 backdrop-blur-md dark:border-white/5"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground sm:text-base">
          <span>Catey</span>
          <span className="text-foreground/40">×</span>
          <span>Brainy</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
