"use client";

import { LanguageProvider } from "../context/LanguageContext";
import { Toaster } from "./ui/sonner";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}
