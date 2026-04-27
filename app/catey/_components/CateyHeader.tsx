"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { CateyLogo } from "./CateyLogo";

export function CateyHeader() {
  const { isRTL } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const last = lastY.current;
      if (y < 80) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-black/5 bg-[#FFF8F0] transition-transform duration-300 ease-out dark:border-white/5 dark:bg-[#0F0C0A] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
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
            className="h-5 w-auto sm:h-6 dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/brainy-light.svg"
            alt="Brainy"
            className="hidden h-5 w-auto sm:h-6 dark:block"
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
