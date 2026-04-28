"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyConfig, cateyTranslations } from "../../../../translations/catey";
import { whatsappLink } from "../cateyHelpers";
import { optionTheme } from "../optionTheme";

const theme = optionTheme.option2;

/**
 * Condensed summary for Option 2. ~600-800px tall on desktop.
 * Visual: campaign coupon (PUMO10) + monthly strategy theme card.
 */
export function CateyOption2() {
  const { language } = useLanguage();
  const t = cateyTranslations[language];
  const isAr = language === "ar";
  const s = t.summary.option2;
  const card = t.comparison.cards[1];

  return (
    <section
      id="option-2"
      className="relative scroll-mt-20 bg-[#FFF8F0] dark:bg-[#161310]"
    >
      <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${theme.badgeBg}`} />
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12"
        >
          <div>
            <div className={`text-xs font-semibold uppercase tracking-[0.22em] ${theme.eyebrow}`}>
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
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${theme.iconChipBg} ${theme.iconChipText}`}
                  >
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
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-[#2D6BA1]/25 transition ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHoverBg}`}
              >
                {t.summary.chooseThis}
              </motion.a>
            </div>
          </div>

          {/* Visual: Pumo gift box with floating stickers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Floating sticker , top-left. Solid ink chip with a coral dot so
                it reads cleanly on any background, including the light photo. */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, y: 14 }}
              whileInView={{ opacity: 1, rotate: -8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -left-3 -top-3 z-20 inline-flex items-center gap-1.5 rounded-2xl bg-[#1F1A14] px-3 py-1.5 shadow-lg shadow-[#1F1A14]/30 ring-1 ring-white/20 sm:-left-4 sm:-top-4 sm:px-4 sm:py-2 dark:bg-[#1F1A14] dark:ring-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#F08762]" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                {isAr ? "هدية الشهر" : "Monthly drop"}
              </span>
            </motion.div>

            {/* Floating sticker , top-right (promo code) */}
            <motion.div
              initial={{ opacity: 0, rotate: 6, y: 14 }}
              whileInView={{ opacity: 1, rotate: 6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className={`absolute -right-2 -top-2 z-20 rounded-2xl px-3.5 py-2 shadow-lg shadow-[#2D6BA1]/40 sm:-right-3 sm:-top-3 sm:px-4 sm:py-2.5 ${theme.badgeBg}`}
            >
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-white/80 sm:text-[10px]">
                {isAr ? "كود" : "Promo"}
              </span>
              <span className="block font-mono text-base font-bold text-white sm:text-lg">
                {s.promoCode}
              </span>
            </motion.div>

            {/* Main giveaway / gift-box image card */}
            <div className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white shadow-xl shadow-[#1F1A14]/10 dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[4/5] w-full bg-[#FFF8F0] dark:bg-[#0F0C0A]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/catey/option-3/giveaway-ideas.jpg"
                  alt={isAr ? "صندوق هدية Catey مع منتجات بومو" : "Catey-branded gift box with Pumo products"}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="border-t border-[#1F1A14]/10 px-5 py-4 dark:border-white/10">
                <div className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${theme.eyebrow}`}>
                  {s.campaignTitle}
                </div>
                <div className="mt-1 text-sm font-medium text-[#1F1A14] dark:text-white/90">
                  {isAr
                    ? "صندوق مع لاصقات بومو ومنتج كل شهر"
                    : "Branded gift box with Pumo stickers and a featured product each month"}
                </div>
              </div>
            </div>

            {/* Floating sticker , bottom-left (sticker pack) */}
            <motion.div
              initial={{ opacity: 0, rotate: -4, y: -10 }}
              whileInView={{ opacity: 1, rotate: -4, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-3 left-6 z-20 rounded-2xl bg-[#1F1A14] px-3.5 py-1.5 shadow-lg shadow-[#1F1A14]/20 sm:-bottom-4 sm:left-8 sm:px-4 sm:py-2 dark:bg-[#FFF8F0]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white sm:text-xs dark:text-[#1F1A14]">
                {isAr ? "لاصقات بومو" : "Pumo sticker pack"}
              </span>
            </motion.div>

            {/* Floating sticker , bottom-right (strategy theme) */}
            <motion.div
              initial={{ opacity: 0, rotate: 5, y: -10 }}
              whileInView={{ opacity: 1, rotate: 5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="absolute -bottom-2 -right-3 z-20 rounded-2xl bg-white px-3.5 py-2 shadow-lg shadow-[#1F1A14]/15 sm:-bottom-3 sm:-right-4 dark:bg-white/10"
            >
              <div className={`text-[9px] font-semibold uppercase tracking-wider sm:text-[10px] ${theme.eyebrow}`}>
                {s.strategyLabel}
              </div>
              <div className="text-xs font-semibold text-[#1F1A14] sm:text-sm dark:text-white">
                {s.strategyTheme}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
