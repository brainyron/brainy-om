"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import { CateyHeader } from "./CateyHeader";
import { CateyFooter } from "./CateyFooter";

export function CateyShell({ children }: { children: ReactNode }) {
  const { isRTL, language } = useLanguage();
  const pathname = usePathname();
  const isPreview = pathname?.startsWith("/catey/preview");

  // Enable smooth scrolling for the catey route only.
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className={`flex min-h-screen flex-col bg-[#FFF8F0] text-[#1F1A14] dark:bg-[#161310] dark:text-white ${
        language === "ar" ? "font-arabic" : ""
      }`}
    >
      {isPreview ? null : <CateyHeader />}
      {/* key by language so motion `once: true` reveals re-fire when switching languages,
          which prevents items from staying hidden if they were scrolled past at switch time. */}
      <main key={language} className="flex-1">{children}</main>
      {isPreview ? null : <CateyFooter />}
    </div>
  );
}
