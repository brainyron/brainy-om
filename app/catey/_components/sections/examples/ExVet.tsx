"use client";

import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExVet({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option2.vet;
  return (
    <ExFrame
      id="vet"
      index={index}
      scope="growthAndPlus"
      title={e.sections.vet.title}
      caption={e.sections.vet.caption}
    >
      <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
          {o.title}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {o.items.map((i) => (
            <span
              key={i}
              className="rounded-full bg-[#D7EDDF] px-3 py-1.5 text-sm text-[#3F8D6D] dark:bg-[#7BB89C]/15 dark:text-[#7BB89C]"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </ExFrame>
  );
}
