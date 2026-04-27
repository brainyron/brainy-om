"use client";

import type { ReactNode } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { CateyHeader } from "./CateyHeader";
import { CateyFooter } from "./CateyFooter";

export function CateyShell({ children }: { children: ReactNode }) {
  const { isRTL, language } = useLanguage();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className={`flex min-h-screen flex-col bg-background text-foreground ${
        language === "ar" ? "font-arabic" : ""
      }`}
    >
      <CateyHeader />
      <main className="flex-1">{children}</main>
      <CateyFooter />
    </div>
  );
}
