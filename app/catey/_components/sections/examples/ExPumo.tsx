"use client";

import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExPumo({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option2.pumo;
  return (
    <ExFrame
      id="pumo"
      index={index}
      scope="growthAndPlus"
      title={e.sections.pumo.title}
      caption={e.sections.pumo.caption}
    >
      <div className="rounded-3xl border border-[#1F1A14]/10 bg-gradient-to-br from-[#FFF8F0] to-[#FCD7C4] p-6 sm:p-8 dark:border-white/10 dark:from-white/5 dark:to-[#F08762]/10">
        <div className="flex flex-wrap gap-2">
          {o.lines.map((line) => (
            <span
              key={line}
              className="rounded-full border border-[#1F1A14]/15 bg-white px-3 py-1.5 text-sm text-[#1F1A14] shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              {line}
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/70">{o.why}</p>
      </div>
    </ExFrame>
  );
}
