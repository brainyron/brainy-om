"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyConfig, cateyTranslations } from "../../../../translations/catey";
import { whatsappLink } from "../cateyHelpers";
import { optionTheme } from "../optionTheme";

const theme = optionTheme.option3;

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
      className="relative scroll-mt-20 bg-[#FBEBD8] dark:bg-[#1B1612]"
    >
      <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${theme.badgeBg}`} />
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
              <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${theme.eyebrow}`}>
                {card.tier}
              </span>
              <span
                className={`rounded-full ${theme.badgeBg} px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${theme.badgeText}`}
              >
                {t.summary.recommended}
              </span>
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
              {card.name}
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${theme.eyebrow}`}>
                  Setup
                </div>
                <div className="mt-1 text-xl font-semibold text-[#1F1A14] dark:text-white">
                  {cateyConfig.prices.option3.currency} {cateyConfig.prices.option3.setup.toLocaleString()}
                </div>
              </div>
              <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${theme.eyebrow}`}>
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
                <div className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${theme.eyebrow}`}>
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

            {/* Inline explainer for the 12% number, so it doesn't sit there as a
                bare percentage. Worked example expands inside ExPerformance. */}
            <div
              className={`mt-4 rounded-2xl border bg-white p-4 text-[13px] leading-snug dark:bg-white/5 ${theme.border}`}
            >
              <div className={`mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${theme.eyebrow}`}>
                {isAr ? "كيف تشتغل حصة الـ 12%" : "What the 12% means"}
              </div>
              <p className="text-[#1F1A14] dark:text-white/85">
                {isAr
                  ? "Brainy تستلم 12% من الإيرادات اللي نقدر نتتبّعها بوضوح للحملات والروابط والأكواد والصفحات اللي نسوّيها. مثال: لو حملة Pumo سوّت 10,000 ريال متتبَّع، Brainy تستلم 1,200 ريال زيادة على الرسوم الشهرية. الإيرادات اللي ما نقدر نتتبّعها مثل المشي للمتجر مباشرة، ما تحتسب."
                  : `Brainy receives ${cateyConfig.prices.option3.performanceShare}% of revenue we can clearly trace back to systems we build or run, promo codes, campaign links, landing pages, QR codes, booking forms. Example: a Pumo campaign drives 10,000 OMR in tracked sales, Brainy receives 1,200 OMR on top of the monthly fee. Walk-in customers and existing-customer reorders that don't reference a campaign do not count.`}
              </p>
              <a
                href="#ex-performance"
                className={`mt-2 inline-flex items-center gap-1 text-[12px] font-semibold ${theme.eyebrow} hover:underline`}
              >
                {isAr ? "شوف المثال الكامل" : "See the worked example"}
                <span aria-hidden>{isAr ? "←" : "→"}</span>
              </a>
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
                href={whatsappLink(o3.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-[#F08762]/30 transition ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHoverBg}`}
              >
                {t.summary.chooseThis}
              </motion.a>
            </div>
          </div>

          {/* Visual: minimal mobile phone frame with the redesigned site */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Phone shell */}
              <div className="relative rounded-[3rem] border-[10px] border-[#1F1A14] bg-[#1F1A14] p-1.5 shadow-[0_30px_80px_-30px_rgba(31,26,20,0.5)] dark:border-white/15 dark:shadow-black/60">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#1F1A14] dark:bg-white/15" />
                {/* Screen */}
                <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[2.25rem] bg-[#FFF8F0] sm:h-[720px] sm:w-[360px]">
                  {mounted ? (
                    <iframe
                      src="/catey/preview/website"
                      title="Catey website preview"
                      className="h-full w-full border-0"
                      loading="lazy"
                      style={{
                        touchAction: "pan-y",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-[#3A322A]/60">
                      Loading preview...
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 text-center text-[11px] uppercase tracking-[0.2em] text-[#3A322A]/55 dark:text-white/45">
              {s.visualLabel}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
