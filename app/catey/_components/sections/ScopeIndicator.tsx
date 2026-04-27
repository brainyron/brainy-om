"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Inclusion } from "./examples/registry";
import { useCateyT } from "./shared";

type Props = {
  scope: Inclusion;
  activeTitle: string | null;
  activeIndex: number; // 1-based for display
  total: number;
};

/**
 * Sticky pill bar that pins to the top of the viewport while inside the
 * Examples timeline. Three pills (full plan names) animate on/off as the
 * active sub-section's scope changes. Each pill links to its option summary.
 *
 * Tracks the same scroll-direction logic as CateyHeader so when the main
 * header is hidden, this indicator slides up to sit at the top instead of
 * leaving an awkward gap.
 */
export function ScopeIndicator({ scope, activeTitle, activeIndex, total }: Props) {
  const { t, isAr } = useCateyT();
  const e = t.examples;

  const [headerHidden, setHeaderHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const last = lastY.current;
      if (y < 80) setHeaderHidden(false);
      else if (y > last + 6) setHeaderHidden(true);
      else if (y < last - 6) setHeaderHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pills: {
    key: "content" | "growth" | "plus";
    label: string;
    href: string;
    visible: boolean;
  }[] = [
    {
      key: "content",
      label: e.pills.content,
      href: "#option-1",
      visible: scope === "all",
    },
    {
      key: "growth",
      label: e.pills.growth,
      href: "#option-2",
      visible: scope === "all" || scope === "growthAndPlus",
    },
    {
      key: "plus",
      label: e.pills.growthPlus,
      href: "#option-3",
      visible: true,
    },
  ];

  return (
    <div
      className={`sticky z-30 transition-[top] duration-300 ease-out ${
        headerHidden ? "top-2 sm:top-3" : "top-10 sm:top-12"
      }`}
      dir={isAr ? "rtl" : "ltr"}
      aria-hidden={false}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          layout
          className="mx-auto flex w-full max-w-3xl flex-wrap items-center gap-3 rounded-full border border-[#1F1A14]/10 bg-white/90 px-4 py-3 shadow-md shadow-[#1F1A14]/5 backdrop-blur-md sm:gap-4 sm:px-6 sm:py-3.5 dark:border-white/10 dark:bg-[#1F1A14]/90"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3A322A]/65 sm:text-xs dark:text-white/55">
            {e.includedIn}
          </span>

          <motion.div layout className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <AnimatePresence initial={false} mode="popLayout">
              {pills.map((p) =>
                p.visible ? (
                  <motion.a
                    key={p.key}
                    href={p.href}
                    layout
                    initial={{ opacity: 0, scale: 0.8, width: 0 }}
                    animate={{ opacity: 1, scale: 1, width: "auto" }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.8 }}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full border border-[#F08762]/40 bg-[#FFE9DC] px-3 py-1.5 text-xs font-semibold text-[#D26B49] transition-colors hover:bg-[#FCD7C4] dark:border-[#F08762]/40 dark:bg-[#F08762]/15 dark:text-[#F08762] dark:hover:bg-[#F08762]/25 sm:px-3.5 sm:text-sm"
                  >
                    <span aria-hidden className="text-[11px]">✓</span>
                    {p.label}
                  </motion.a>
                ) : null,
              )}
            </AnimatePresence>
          </motion.div>

          <span className="ms-auto flex items-center gap-2.5 ps-1">
            {activeTitle ? (
              <motion.span
                key={activeTitle}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="hidden max-w-[180px] truncate text-xs font-medium text-[#1F1A14] sm:inline-block sm:max-w-[260px] sm:text-sm dark:text-white/85"
              >
                {activeTitle}
              </motion.span>
            ) : null}
            <span className="font-mono text-[11px] tabular-nums text-[#3A322A]/65 sm:text-xs dark:text-white/55">
              {activeIndex} {e.ofLabel} {total}
            </span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
