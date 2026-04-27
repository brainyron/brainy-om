"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations, cateyConfig } from "../../../../translations/catey";

type PriceMeta = {
  monthly?: { value: string; was?: string; note?: string };
  setup?: { value: string; label: string };
  bundleStrike?: string;
};

export function CateyComparison() {
  const { language } = useLanguage();
  const t = cateyTranslations[language].comparison;
  const isAr = language === "ar";

  const yearlyNote = isAr ? "خصم 25% للعقد السنوي" : "25% off for yearly contract";

  const prices: Record<string, PriceMeta> = {
    "option-1": {
      monthly: { value: `${cateyConfig.prices.option1.monthly}` },
    },
    "option-2": {
      monthly: {
        value: `${cateyConfig.prices.option2.monthly}`,
        was: `${cateyConfig.prices.option2.monthlyOriginal}`,
        note: yearlyNote,
      },
    },
    "option-3": {
      bundleStrike: `${cateyConfig.prices.option3.bundleOriginal}+`,
      setup: {
        value: `${cateyConfig.prices.option3.setup}`,
        label: isAr ? "تأسيس (مرة واحدة)" : "setup (one-time)",
      },
      monthly: {
        value: `${cateyConfig.prices.option3.monthly}`,
        was: `${cateyConfig.prices.option3.monthlyOriginal}`,
        note: yearlyNote,
      },
    },
  };

  return (
    <section
      id="options"
      className="relative scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 bg-[linear-gradient(180deg,transparent_0%,#FFF8F0_25%,#FFF8F0_75%,transparent_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,#161310_25%,#161310_75%,transparent_100%)]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-[#3A322A]/70 sm:text-lg dark:text-white/70">{t.sub}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-3"
        >
          {t.cards.map((card) => {
            const recommended = card.id === "option-3";
            const p = prices[card.id];

            return (
              <motion.a
                key={card.id}
                href={`#${card.id}`}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                whileHover={{ y: -6 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/90 p-6 shadow-[0_2px_30px_-12px_rgba(31,26,20,0.18)] transition-all duration-300 hover:shadow-[0_18px_50px_-12px_rgba(240,135,98,0.35)] sm:p-7 dark:bg-white/5 ${
                  recommended
                    ? "border-[#F08762]/40 ring-1 ring-[#F08762]/30"
                    : "border-[#1F1A14]/10 dark:border-white/10"
                }`}
              >
                {recommended ? (
                  <span
                    className={`absolute top-4 ${
                      isAr ? "left-4" : "right-4"
                    } rounded-full bg-[#F08762] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white`}
                  >
                    {t.recommended}
                  </span>
                ) : null}

                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                  {card.tier}
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl dark:text-white">
                  {card.name}
                </div>
                <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">
                  {card.tagline}
                </div>

                {/* Price block */}
                <div className="mt-6">
                  {p.bundleStrike ? (
                    <div className="mb-3 text-sm font-medium text-[#3A322A]/40 line-through dark:text-white/35">
                      {p.bundleStrike} {t.currency}
                    </div>
                  ) : null}

                  {p.setup ? (
                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl dark:text-white">
                          {p.setup.value}
                        </span>
                        <span className="text-xs font-medium text-[#3A322A]/70 dark:text-white/60">
                          {t.currency}
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-[#3A322A]/60 dark:text-white/50">
                        {p.setup.label}
                      </div>
                    </div>
                  ) : null}

                  {p.monthly ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-semibold tracking-tight text-[#1F1A14] sm:text-5xl dark:text-white">
                          {p.monthly.value}
                        </span>
                        <span className="text-sm font-medium text-[#3A322A]/70 dark:text-white/60">
                          {t.currency}
                          {t.perMonth}
                        </span>
                      </div>
                      {p.monthly.was || p.monthly.note ? (
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                          {p.monthly.was ? (
                            <span className="text-[#3A322A]/40 line-through dark:text-white/35">
                              {p.monthly.was} {t.currency}
                            </span>
                          ) : null}
                          {p.monthly.note ? (
                            <span className="rounded-full bg-[#F08762]/10 px-2 py-0.5 font-medium text-[#D26B49] dark:bg-[#F08762]/15 dark:text-[#F08762]">
                              {p.monthly.note}
                            </span>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/70">
                  {card.oneLiner}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {card.bullets.map((b) => (
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

                <div className="mt-auto pt-7">
                  <span className="flex w-full items-center justify-center rounded-full bg-[#1F1A14] px-5 py-3 text-sm font-medium text-white transition group-hover:bg-[#D26B49] dark:bg-white dark:text-[#1F1A14] dark:group-hover:bg-[#F08762] dark:group-hover:text-white">
                    {t.seeDetails}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
