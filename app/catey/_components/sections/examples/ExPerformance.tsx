"use client";

import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExPerformance({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option3.performance;
  return (
    <ExFrame
      id="performance"
      index={index}
      scope="plusOnly"
      title={e.sections.performance.title}
      caption={e.sections.performance.caption}
    >
      <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
        <div className="text-base font-semibold text-[#1F1A14] dark:text-white">{o.title}</div>
        <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">{o.sub}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {o.sources.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[#F08762]/30 bg-[#FFE9DC] px-3 py-1.5 text-xs text-[#D26B49] dark:bg-[#F08762]/10 dark:text-[#F08762]"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-[#3A322A]/75 dark:text-white/70">{o.fairness}</p>
      </div>
    </ExFrame>
  );
}
