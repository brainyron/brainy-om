"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function CateyPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const headline = isAr ? "اقتراح من Brainy لـ Catey" : "A proposal from Brainy to Catey";
  const subhead = isAr ? "قريبًا" : "Coming soon";
  const footnote = isAr ? "صُنع بعناية" : "Built with care";
  const logoLabel = isAr ? "Catey" : "Catey";

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-28 md:py-36">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-black/10 bg-white/60 text-lg font-semibold text-foreground/70 shadow-sm backdrop-blur sm:h-24 sm:w-24 dark:border-white/10 dark:bg-white/5 dark:text-foreground/70">
        {logoLabel}
      </div>

      <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {headline}
      </h1>

      <p className="mt-4 text-base text-foreground/70 sm:mt-6 sm:text-lg md:text-xl">
        {subhead}
      </p>

      <p className="mt-10 text-xs uppercase tracking-[0.2em] text-foreground/40 sm:mt-14 sm:text-sm">
        {footnote}
      </p>
    </section>
  );
}
