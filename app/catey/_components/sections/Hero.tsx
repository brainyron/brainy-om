"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations } from "../../../../translations/catey";

const REELS = [
  "/catey/reels/reel-01.mp4",
  "/catey/reels/reel-02.mp4",
  "/catey/reels/reel-03.mp4",
  "/catey/reels/reel-04.mp4",
  "/catey/reels/reel-05.mp4",
];

export function CateyHero() {
  const { language } = useLanguage();
  const t = cateyTranslations[language].hero;
  const [idx, setIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {
      // Autoplay can be blocked. Silent failure; poster carries the moment.
    });
  }, [idx]);

  const handleEnded = () => setIdx((i) => (i + 1) % REELS.length);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-[#FFF8F0] dark:bg-[#0F0C0A]">
      {/* Text side */}
      <div className="relative order-2 flex h-full flex-col justify-center px-6 py-10 sm:px-10 md:order-1 md:px-12 lg:px-16 xl:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[#1F1A14] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
        >
          {t.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-5 max-w-md text-base text-[#3A322A]/80 sm:text-lg md:text-xl dark:text-white/70"
        >
          {t.sub}
        </motion.p>

        <motion.a
          href="#options"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D26B49] transition hover:text-[#1F1A14] sm:text-sm dark:text-[#F08762] dark:hover:text-white"
        >
          {t.scrollCue}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>

      {/* Video side */}
      <div className="relative order-1 h-full w-full overflow-hidden bg-black md:order-2">
        <video
          ref={videoRef}
          key={idx}
          src={REELS[idx]}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/catey/brand/pumo-hero.png"
        />

        {/* Reel index dots */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {REELS.map((_, i) => (
            <span
              key={i}
              className="h-1 w-6 rounded-full bg-white/30 transition-all duration-300"
              style={{ backgroundColor: i === idx ? "rgba(255,255,255,0.85)" : undefined }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
