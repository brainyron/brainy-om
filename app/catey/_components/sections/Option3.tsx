"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyConfig, cateyTranslations } from "../../../../translations/catey";
import { whatsappLink } from "../cateyHelpers";

/**
 * Condensed summary for Option 3. ~600-800px tall on desktop.
 * Visual: small browser-frame thumbnail of the redesigned website.
 * Lazy-loaded iframe so we don't pay the cost twice (full version lives in Examples).
 */
export function CateyOption3() {
  const { language } = useLanguage();
  const t = cateyTranslations[language];
  const isAr = language === "ar";
  const s = t.summary.option3;
  const card = t.comparison.cards[2];
  const o3 = t.option3;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="option-3"
      className="scroll-mt-20 bg-[#FBEBD8] dark:bg-[#1B1612]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D26B49]">
                {card.tier}
              </span>
              <span className="rounded-full bg-[#F08762] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                {t.summary.recommended}
              </span>
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
              {card.name}
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                  Setup
                </div>
                <div className="mt-1 text-xl font-semibold text-[#1F1A14] dark:text-white">
                  {cateyConfig.prices.option3.currency} {cateyConfig.prices.option3.setup.toLocaleString()}
                </div>
              </div>
              <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                  Monthly
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-xl font-semibold text-[#1F1A14] dark:text-white">
                    {cateyConfig.prices.option3.monthly}
                  </span>
                  <span className="text-xs text-[#3A322A]/50 line-through dark:text-white/40">
                    {cateyConfig.prices.option3.monthlyOriginal}
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                  Performance
                </div>
                <div className="mt-1 text-xl font-semibold text-[#1F1A14] dark:text-white">
                  {cateyConfig.prices.option3.performanceShare}%
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-[#3A322A]/65 dark:text-white/55">
              {isAr
                ? `حد أدنى ${cateyConfig.prices.option3.minimumMonths} شهور.`
                : `${cateyConfig.prices.option3.minimumMonths}-month minimum.`}
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#3A322A]/80 sm:text-lg dark:text-white/75">
              {s.description}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-[#1F1A14] dark:text-white/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#FCD7C4] text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <motion.a
                href={whatsappLink(o3.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-[#F08762] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F08762]/30 transition hover:bg-[#D26B49] dark:bg-[#F08762] dark:text-white dark:hover:bg-[#D26B49]"
              >
                {t.summary.chooseThis}
              </motion.a>
            </div>
          </div>

          {/* Visual: small browser-frame thumbnail of the website */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white shadow-xl shadow-[#1F1A14]/5 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center gap-3 border-b border-[#1F1A14]/10 bg-[#FFF8F0] px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="mx-auto rounded-full bg-white px-4 py-1.5 text-xs text-[#3A322A]/70 shadow-inner dark:bg-white/10 dark:text-white/70">
                {s.websiteUrl}
              </div>
            </div>
            <div className="relative h-[360px] sm:h-[420px]">
              {mounted ? (
                <iframe
                  src={`/catey/preview/website?lang=${isAr ? "ar" : "en"}`}
                  title="Catey website preview thumbnail"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#FFF8F0] text-sm text-[#3A322A]/60">
                  Loading preview...
                </div>
              )}
            </div>
            <div className="border-t border-[#1F1A14]/10 bg-white px-4 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-[#3A322A]/55 dark:border-white/10 dark:bg-white/5 dark:text-white/45">
              {s.visualLabel}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
