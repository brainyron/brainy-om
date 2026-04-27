"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations } from "../../../../translations/catey";

const HERO_REEL = "/catey/reels/reel-00.mp4";

export function CateyHero() {
  const { language } = useLanguage();
  const t = cateyTranslations[language].hero;
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.play().catch(() => {
      // Autoplay can be blocked when unmuted. Fall back to muted.
      if (!muted) {
        setMuted(true);
        v.muted = true;
        v.play().catch(() => {
          // Still blocked. Leave the poster visible.
        });
      }
    });
  }, [muted]);

  const toggleMute = () => setMuted((m) => !m);

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
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute inset-0 z-10 cursor-pointer focus:outline-none"
        >
          <video
            ref={videoRef}
            src={HERO_REEL}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            poster="/catey/brand/pumo-hero.png"
          />
        </button>

        {/* Mute / unmute icon */}
        <motion.div
          key={`icon-${muted}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </motion.div>
      </div>
    </section>
  );
}
