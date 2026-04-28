"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../../../context/LanguageContext";
import type { ReactNode } from "react";

export function CateyProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider initialLanguage="ar">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}
