"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyConfig, cateyTranslations } from "../../../../translations/catey";
import { whatsappLink } from "../cateyHelpers";
import { optionTheme } from "../optionTheme";

const theme = optionTheme.option1;

/**
 * Condensed summary for Option 1. ~600-800px tall on desktop.
 * Tier label, big price, 2-3 sentence description, 5-7 distinctive bullets,
 * one hero photo, "Choose this" WhatsApp button.
 */
export function CateyOption1() {
  const { language } = useLanguage();
  const t = cateyTranslations[language];
  const s = t.summary.option1;
  const card = t.comparison.cards[0];

  return (
    <section
      id="option-1"
      className="relative scroll-mt-20 bg-white dark:bg-[#1A1612]"
    >
      {/* Top accent stripe ties this section back to its plan color */}
      <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${theme.badgeBg}`} />
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12"
        >
          {/* Left: tier + price + bullets */}
          <div>
            <div className={`text-xs font-semibold uppercase tracking-[0.22em] ${theme.eyebrow}`}>
              {card.tier}
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
              {card.name}
            </h2>

            {/* Price */}
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight text-[#1F1A14] sm:text-6xl dark:text-white">
                {cateyConfig.prices.option1.monthly}
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
                href={whatsappLink(t.option1.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-[#1F1A14]/15 transition ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHoverBg}`}
              >
                {t.summary.chooseThis}
              </motion.a>
            </div>
          </div>

          {/* Right: hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-[#FFF8F0] shadow-xl shadow-[#1F1A14]/5 dark:border-white/10"
          >
            <Image
              src="/catey/photos/product-reaction.jpg"
              alt={s.visualLabel}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div
              className={`absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium backdrop-blur ${theme.iconChipBg} ${theme.iconChipText}`}
            >
              <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${theme.badgeBg}`} />
              {s.visualLabel}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
