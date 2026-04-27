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
      className="w-full border-t border-black/5 bg-[#FFF8F0] dark:border-white/5 dark:bg-[#161310]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-3 px-4 py-6 text-xs text-[#3A322A]/70 sm:py-8 sm:text-sm dark:text-white/60">
        {text}
      </div>
    </footer>
  );
}
