"use client";

import { motion } from "motion/react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations } from "../../../../translations/catey";

export function CateyOpportunity() {
  const { language } = useLanguage();
  const t = cateyTranslations[language].opportunity;

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-[#D26B49] sm:text-sm">{t.title}</p>
        <p className="mt-4 text-balance text-2xl font-medium leading-snug text-[#1F1A14] sm:text-3xl md:text-4xl dark:text-white">
          {t.body}
        </p>
      </motion.div>
    </section>
  );
}
