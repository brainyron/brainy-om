"use client";

import { LanguageProvider } from "../context/LanguageContext";
import { Toaster } from "./ui/sonner";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Toaster />
    </LanguageProvider>
  );
}
