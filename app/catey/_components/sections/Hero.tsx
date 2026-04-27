"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations } from "../../../../translations/catey";
import { Pumo } from "../Pumo";

export function CateyHero() {
  const { language } = useLanguage();
  const t = cateyTranslations[language].hero;
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #FCD7C4 0%, #FFF8F0 55%, transparent 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-12 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-28 md:pt-28 md:pb-36">
        <motion.div style={{ y, opacity }} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1F1A14]/10 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-[#3A322A] backdrop-blur sm:text-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80"
          >
            {t.eyebrow}
          </motion.div>

          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="my-2"
          >
            <Pumo className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-2 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[#1F1A14] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base text-[#3A322A]/80 sm:mt-6 sm:text-lg md:text-xl dark:text-white/70"
          >
            {t.sub}
          </motion.p>

          <motion.a
            href="#options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#3A322A]/60 transition hover:text-[#D26B49] sm:text-sm dark:text-white/50 dark:hover:text-[#F08762]"
          >
            {t.scrollCue}
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
