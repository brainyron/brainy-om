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
      // Autoplay can be blocked. Stay silent; poster image carries the moment.
    });
  }, [idx]);

  const handleEnded = () => setIdx((i) => (i + 1) % REELS.length);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Blurred backdrop fill so vertical reels never letterbox */}
      <video
        key={`bg-${idx}`}
        src={REELS[idx]}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-50 saturate-125"
        aria-hidden="true"
      />

      {/* Foreground reel, contained so the full vertical frame reads */}
      <video
        ref={videoRef}
        key={`fg-${idx}`}
        src={REELS[idx]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        className="absolute inset-0 m-auto h-full w-auto max-w-none object-contain sm:h-full"
        poster="/catey/brand/pumo-hero.png"
      />

      {/* Legibility overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.85)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/85 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base text-white/85 drop-shadow-lg sm:text-lg md:text-xl"
        >
          {t.sub}
        </motion.p>

        <motion.a
          href="#options"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-8 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/65 transition hover:text-white sm:text-sm"
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

      {/* Reel index dots — subtle, bottom-right */}
      <div className="absolute bottom-8 right-6 z-10 hidden gap-1.5 sm:flex">
        {REELS.map((_, i) => (
          <span
            key={i}
            className="h-1 w-6 rounded-full bg-white/25 transition-all duration-300"
            style={{ backgroundColor: i === idx ? "rgba(255,255,255,0.85)" : undefined }}
          />
        ))}
      </div>
    </section>
  );
}
