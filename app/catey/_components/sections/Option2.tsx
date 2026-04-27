"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyConfig, cateyTranslations } from "../../../../translations/catey";
import { whatsappLink } from "../cateyHelpers";

/**
 * Condensed summary for Option 2. ~600-800px tall on desktop.
 * Visual: campaign coupon (PUMO10) + monthly strategy theme card.
 */
export function CateyOption2() {
  const { language } = useLanguage();
  const t = cateyTranslations[language];
  const s = t.summary.option2;
  const card = t.comparison.cards[1];

  return (
    <section
      id="option-2"
      className="scroll-mt-20 bg-[#FFF8F0] dark:bg-[#161310]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D26B49]">
              {card.tier}
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
              {card.name}
            </h2>

            <div className="mt-5 flex flex-wrap items-baseline gap-3">
              <span className="text-5xl font-semibold tracking-tight text-[#1F1A14] sm:text-6xl dark:text-white">
                {cateyConfig.prices.option2.monthly}
              </span>
              <span className="text-xl text-[#3A322A]/50 line-through dark:text-white/40">
                {cateyConfig.prices.option2.monthlyOriginal}
              </span>
              <span className="text-base font-medium text-[#3A322A]/70 dark:text-white/60">
                {t.comparison.currency}
                {t.comparison.perMonth}
              </span>
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
                href={whatsappLink(t.option2.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-[#1F1A14] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F08762]/20 transition hover:bg-[#D26B49] dark:bg-white dark:text-[#1F1A14] dark:hover:bg-[#F08762] dark:hover:text-white"
              >
                {t.summary.chooseThis}
              </motion.a>
            </div>
          </div>

          {/* Visual: campaign coupon + strategy card stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Strategy card behind */}
            <div className="absolute -top-4 -right-4 hidden w-[70%] rotate-3 rounded-3xl border border-[#1F1A14]/10 bg-white p-5 shadow-xl shadow-[#1F1A14]/5 sm:block dark:border-white/10 dark:bg-white/5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D26B49]">
                {s.strategyLabel}
              </div>
              <div className="mt-1 text-base font-semibold text-[#1F1A14] dark:text-white">
                {s.strategyTheme}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.option2.strategy.focus.slice(0, 3).map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-[#FFF8F0] px-2 py-0.5 text-[10px] text-[#3A322A]/80 dark:bg-white/10 dark:text-white/70"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Campaign coupon card front */}
            <div className="relative rounded-3xl border border-[#1F1A14]/10 bg-white p-6 shadow-xl shadow-[#1F1A14]/5 sm:p-8 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D26B49]">
                Campaign
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-tight text-[#1F1A14] dark:text-white">
                {s.campaignTitle}
              </div>
              <p className="mt-3 text-sm text-[#3A322A]/75 dark:text-white/70">
                {t.option2.campaigns.items[0].desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border-2 border-dashed border-[#F08762] bg-[#FFE9DC] px-4 py-2.5 dark:border-[#F08762] dark:bg-[#F08762]/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D26B49]">
                  Promo
                </span>
                <span className="font-mono text-lg font-bold tracking-wider text-[#1F1A14] dark:text-white">
                  {s.promoCode}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {t.option2.campaigns.items[0].includes.map((i) => (
                  <div
                    key={i}
                    className="rounded-full bg-[#FFF8F0] px-2.5 py-1 text-[11px] text-[#3A322A]/80 dark:bg-white/10 dark:text-white/70"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#3A322A]/55 dark:text-white/45">
                {s.visualLabel}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
