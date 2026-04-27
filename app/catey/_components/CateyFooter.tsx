"use client";

import { useLanguage } from "../../../context/LanguageContext";

export function CateyFooter() {
  const { language, isRTL } = useLanguage();
  const year = new Date().getFullYear();

  const text =
    language === "ar"
      ? `© ${year} Brainy · صُنع لـ Catey`
      : `© ${year} Brainy · Made for Catey`;

  return (
    <footer
      className="w-full border-t border-black/5 dark:border-white/5"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-6 text-xs text-foreground/60 sm:py-8 sm:text-sm">
        {text}
      </div>
    </footer>
  );
}
