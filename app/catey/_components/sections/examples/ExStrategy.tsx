"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExStrategy({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option2.strategy;
  return (
    <ExFrame
      id="strategy"
      index={index}
      scope="growthAndPlus"
      title={e.sections.strategy.title}
      caption={e.sections.strategy.caption}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-2xl bg-[#FFF8F0] p-5 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
              {o.themeLabel}
            </div>
            <div className="mt-2 text-2xl font-semibold text-[#1F1A14] dark:text-white">{o.theme}</div>
            <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {o.focusLabel}
            </div>
            <ul className="mt-2 space-y-1.5">
              {o.focus.map((f) => (
                <li key={f} className="text-sm text-[#1F1A14] dark:text-white/90">• {f}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {o.pillarsLabel}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {o.pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{p.title}</div>
                  <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ExFrame>
  );
}
