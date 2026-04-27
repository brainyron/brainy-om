"use client";

import { useLanguage } from "../../../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { CateyLogo } from "./CateyLogo";

export function CateyHeader() {
  const { isRTL } = useLanguage();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/70 backdrop-blur-md dark:border-white/5"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground sm:text-base">
          <CateyLogo className="h-5 w-auto sm:h-6" />
          <span className="text-foreground/40">×</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/brainy-dark.svg"
            alt="Brainy"
            className="h-4 w-auto sm:h-5 dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/brainy-light.svg"
            alt="Brainy"
            className="hidden h-4 w-auto sm:h-5 dark:block"
          />
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
