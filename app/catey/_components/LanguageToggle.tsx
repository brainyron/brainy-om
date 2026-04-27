"use client";

import { useLanguage } from "../../../context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const next = language === "ar" ? "en" : "ar";
  const label = language === "ar" ? "EN" : "AR";

  return (
    <button
      type="button"
      onClick={() => setLanguage(next)}
      aria-label={`Switch to ${next === "ar" ? "Arabic" : "English"}`}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 px-3 text-sm font-medium text-foreground/80 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-foreground/80 dark:hover:bg-white/10"
    >
      {label}
    </button>
  );
}
