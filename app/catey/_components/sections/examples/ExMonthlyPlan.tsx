"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExMonthlyPlan({ index }: { index: number }) {
  const { t } = useCateyT();
  const sec = t.examples.sections.monthlyPlan;
  const weeks = t.option1.plan.weeks;
  const strategy = t.option2.strategy;
  return (
    <ExFrame
      id="monthly-plan"
      index={index}
      scope="all"
      title={sec.title}
      caption={sec.caption}
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {/* Basic plan -- Option 1 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex h-full flex-col rounded-3xl border border-[#1F1A14]/10 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/5"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A322A]/65 dark:text-white/55">
            {sec.basicScope}
          </span>
          <h4 className="mt-2 text-xl font-semibold tracking-tight text-[#1F1A14] sm:text-2xl dark:text-white">
            {sec.basicLabel}
          </h4>
          <ul className="mt-5 space-y-3">
            {weeks.map((w) => (
              <li
                key={w.label}
                className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-4 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                  {w.label}
                </div>
                <ul className="mt-2 space-y-1.5">
                  {w.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm leading-snug text-[#1F1A14] dark:text-white/85"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Upgraded strategy -- Option 2 + 3 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex h-full flex-col rounded-3xl border border-[#F08762]/40 bg-[#FFE9DC]/40 p-5 sm:p-6 dark:border-[#F08762]/40 dark:bg-[#F08762]/[0.06]"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D26B49]">
            {sec.strategyScope}
          </span>
          <h4 className="mt-2 text-xl font-semibold tracking-tight text-[#1F1A14] sm:text-2xl dark:text-white">
            {sec.strategyLabel}
          </h4>

          {/* Theme card */}
          <div className="mt-5 rounded-2xl border border-[#F08762]/20 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
              {strategy.themeLabel}
            </div>
            <div className="mt-1.5 text-base font-semibold text-[#1F1A14] dark:text-white">
              {strategy.theme}
            </div>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3A322A]/55 dark:text-white/45">
              {strategy.focusLabel}
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {strategy.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-[#FFF8F0] px-2.5 py-0.5 text-[11px] text-[#1F1A14] dark:bg-white/10 dark:text-white/80"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3A322A]/55 dark:text-white/45">
            {strategy.pillarsLabel}
          </div>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {strategy.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[#F08762]/15 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">
                  {p.title}
                </div>
                <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/65">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </ExFrame>
  );
}
