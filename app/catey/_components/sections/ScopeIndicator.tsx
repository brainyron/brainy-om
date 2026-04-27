"use client";

import { AnimatePresence, motion } from "motion/react";
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
 * Examples timeline. Three pills (Content, Growth, Growth+) animate on/off
 * as the active sub-section's scope changes.
 */
export function ScopeIndicator({ scope, activeTitle, activeIndex, total }: Props) {
  const { t, isAr } = useCateyT();
  const e = t.examples;

  const pills: { key: "content" | "growth" | "plus"; label: string; visible: boolean }[] = [
    { key: "content", label: e.pills.content, visible: scope === "all" },
    { key: "growth", label: e.pills.growth, visible: scope === "all" || scope === "growthAndPlus" },
    { key: "plus", label: e.pills.growthPlus, visible: true },
  ];

  return (
    <div
      className="sticky top-20 z-30 sm:top-24"
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
                  <motion.span
                    key={p.key}
                    layout
                    initial={{ opacity: 0, scale: 0.8, width: 0 }}
                    animate={{ opacity: 1, scale: 1, width: "auto" }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.8 }}
                    className="inline-flex items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full border border-[#F08762]/40 bg-[#FFE9DC] px-3 py-1.5 text-xs font-semibold text-[#D26B49] dark:border-[#F08762]/40 dark:bg-[#F08762]/15 dark:text-[#F08762] sm:px-3.5 sm:text-sm"
                  >
                    <span aria-hidden className="text-[11px]">✓</span>
                    {p.label}
                  </motion.span>
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
