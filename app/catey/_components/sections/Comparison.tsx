"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations, cateyConfig } from "../../../../translations/catey";

export function CateyComparison() {
  const { language } = useLanguage();
  const t = cateyTranslations[language].comparison;
  const isAr = language === "ar";

  const prices: Record<string, { label: string; sub?: string }> = {
    "option-1": { label: `${cateyConfig.prices.option1.monthly}` },
    "option-2": {
      label: `${cateyConfig.prices.option2.monthly}`,
      sub: isAr
        ? `كان ${cateyConfig.prices.option2.monthlyOriginal}`
        : `Was ${cateyConfig.prices.option2.monthlyOriginal}`,
    },
    "option-3": {
      label: `${cateyConfig.prices.option3.monthly}`,
      sub: isAr
        ? `+ تأسيس ${cateyConfig.prices.option3.setup}`
        : `+ ${cateyConfig.prices.option3.setup} setup`,
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
          className="grid gap-5 sm:gap-6 lg:grid-cols-3"
        >
          {t.cards.map((card, i) => {
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
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white/90 p-6 shadow-[0_2px_30px_-12px_rgba(31,26,20,0.18)] transition-all duration-300 hover:shadow-[0_18px_50px_-12px_rgba(240,135,98,0.35)] sm:p-7 dark:bg-white/5 ${
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
                <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{card.tagline}</div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-[#1F1A14] sm:text-5xl dark:text-white">
                    {p.label}
                  </span>
                  <span className="text-sm font-medium text-[#3A322A]/70 dark:text-white/60">
                    {t.currency}
                    {t.perMonth}
                  </span>
                </div>
                {p.sub ? (
                  <div className="mt-1 text-xs text-[#3A322A]/60 dark:text-white/50">{p.sub}</div>
                ) : null}

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

                <div className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1F1A14] px-5 py-3 text-sm font-medium text-white transition group-hover:bg-[#D26B49] dark:bg-white dark:text-[#1F1A14] dark:group-hover:bg-[#F08762] dark:group-hover:text-white">
                  {t.seeDetails}
                </div>

                {/* subtle index for stagger feel */}
                <span className="sr-only">{i}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
