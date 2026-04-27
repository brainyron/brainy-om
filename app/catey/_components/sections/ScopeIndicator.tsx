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
      className="sticky top-14 z-30 sm:top-16"
      dir={isAr ? "rtl" : "ltr"}
      aria-hidden={false}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          layout
          className="mx-auto mt-3 flex w-full max-w-3xl flex-wrap items-center gap-2 rounded-full border border-[#1F1A14]/10 bg-white/85 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-3 sm:px-4 dark:border-white/10 dark:bg-[#1F1A14]/85"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3A322A]/55 sm:text-[11px] dark:text-white/50">
            {e.includedIn}
          </span>

          <motion.div layout className="flex flex-wrap items-center gap-1.5 sm:gap-2">
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
                    className="inline-flex items-center gap-1 overflow-hidden whitespace-nowrap rounded-full border border-[#F08762]/40 bg-[#FFE9DC] px-2.5 py-1 text-[11px] font-semibold text-[#D26B49] dark:border-[#F08762]/40 dark:bg-[#F08762]/15 dark:text-[#F08762] sm:text-xs"
                  >
                    <span aria-hidden className="text-[10px]">✓</span>
                    {p.label}
                  </motion.span>
                ) : null,
              )}
            </AnimatePresence>
          </motion.div>

          <span className="ms-auto flex items-center gap-2 ps-1">
            {activeTitle ? (
              <motion.span
                key={activeTitle}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="hidden truncate text-[11px] font-medium text-[#1F1A14] sm:inline-block sm:max-w-[220px] sm:text-xs dark:text-white/85"
              >
                {activeTitle}
              </motion.span>
            ) : null}
            <span className="font-mono text-[10px] tabular-nums text-[#3A322A]/60 sm:text-[11px] dark:text-white/50">
              {activeIndex} {e.ofLabel} {total}
            </span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
