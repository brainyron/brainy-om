"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface SystemDef {
  id: string;
  labelEn: string;
  labelAr: string;
  color: string;
  // 3x3 grid pattern (1 = lit, 0 = dim)
  pattern: number[][];
}

const SYSTEMS: SystemDef[] = [
  {
    id: 'banking',
    labelEn: 'Banking',
    labelAr: 'البنوك',
    color: '#C41E3A',
    pattern: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ],
  },
  {
    id: 'telecom',
    labelEn: 'Telecom',
    labelAr: 'الاتصالات',
    color: '#009689',
    pattern: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    id: 'government',
    labelEn: 'Government',
    labelAr: 'الحكومة',
    color: '#FFFFFF',
    pattern: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
  },
];

const CYCLE_MS = 3000;

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function SystemGrid({ system }: { system: SystemDef }) {
  const isWhite = system.color === '#FFFFFF';
  return (
    <div
      className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3"
      style={{ width: 'min(280px, 70vw)', aspectRatio: '1 / 1' }}
      aria-hidden="true"
    >
      {system.pattern.flat().map((cell, idx) => {
        const lit = cell === 1;
        return (
          <motion.div
            key={`${system.id}-${idx}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.04, duration: 0.3 }}
            className="rounded-md"
            style={{
              backgroundColor: lit ? system.color : '#2c2c2c',
              opacity: lit ? 1 : 0.25,
              boxShadow: lit
                ? isWhite
                  ? '0 0 24px 2px rgba(255,255,255,0.7), 0 0 48px 6px rgba(255,255,255,0.35)'
                  : `0 0 24px 2px ${hexToRgba(system.color, 0.7)}, 0 0 48px 6px ${hexToRgba(system.color, 0.35)}`
                : 'none',
              border: lit
                ? isWhite
                  ? '1.5px solid rgba(255,255,255,0.9)'
                  : `1px solid ${hexToRgba(system.color, 0.8)}`
                : '1px solid rgba(255,255,255,0.05)',
            }}
          />
        );
      })}
    </div>
  );
}

export function OmanContext() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SYSTEMS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const active = SYSTEMS[activeIndex];

  return (
    <section
      className="bg-[#1e1e1e] relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '720px',
        padding: '80px 20px',
      }}
      aria-labelledby="oman-context-heading"
    >
      {/* Subtle ambient glow tied to active system */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{
          background: `radial-gradient(circle at 50% 50%, ${hexToRgba(
            active.color === '#FFFFFF' ? '#ffffff' : active.color,
            0.08
          )} 0%, transparent 60%)`,
        }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center gap-10 md:gap-14">
        {/* Heading */}
        <motion.div
          className="flex flex-col gap-5 items-center justify-center text-center max-w-[820px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {/* Progress badge */}
          <div className="inline-flex flex-col gap-2 px-5 py-3 rounded-xl bg-[rgba(0,150,137,0.15)] border border-[rgba(0,150,137,0.3)] min-w-[260px]">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-[#009689]">
                ⚡ {t.buildSystems}
              </span>
              <span className="text-xs text-[rgba(255,255,255,0.5)]">
                {language === 'ar'
                  ? `${SYSTEMS.length}/${activeIndex + 1}`
                  : `${activeIndex + 1}/${SYSTEMS.length}`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#009689]"
                initial={{ width: 0 }}
                animate={{ width: `${((activeIndex + 1) / SYSTEMS.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>

          <h2
            id="oman-context-heading"
            className="font-['Inter',sans-serif] font-medium leading-tight text-white tracking-[0.3691px]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}
          >
            {t.scalingPlatforms}
          </h2>

          <p
            className="font-['Inter',sans-serif] font-normal text-[rgba(255,255,255,0.7)] tracking-[-0.4395px] max-w-[748px]"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1rem)', lineHeight: 1.7 }}
          >
            {t.platformsDesc}
          </p>
        </motion.div>

        {/* Animated grid + label */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="relative flex items-center justify-center" style={{ minHeight: '320px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-5"
              >
                <SystemGrid system={active} />
                <div
                  className="px-4 py-2 rounded-md text-sm font-semibold"
                  style={{
                    backgroundColor:
                      active.color === '#FFFFFF' ? 'rgba(255,255,255,0.95)' : active.color,
                    color: active.color === '#FFFFFF' ? '#1e1e1e' : '#ffffff',
                    boxShadow:
                      active.color === '#FFFFFF'
                        ? '0 0 20px rgba(255,255,255,0.5)'
                        : `0 0 20px ${hexToRgba(active.color, 0.5)}`,
                  }}
                >
                  {language === 'ar' ? active.labelAr : active.labelEn}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Systems">
            {SYSTEMS.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={s.labelEn}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 8,
                  height: 8,
                  backgroundColor:
                    i === activeIndex
                      ? s.color === '#FFFFFF'
                        ? '#ffffff'
                        : s.color
                      : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
