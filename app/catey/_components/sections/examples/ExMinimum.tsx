"use client";

import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExMinimum({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o3 = t.option3;
  return (
    <ExFrame
      id="minimum"
      index={index}
      scope="plusOnly"
      title={e.sections.minimum.title}
      caption={e.sections.minimum.caption}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-6 sm:p-7 dark:border-white/10 dark:bg-white/5">
          <h4 className="text-lg font-semibold text-[#1F1A14] dark:text-white">{o3.minimum.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75">{o3.minimum.body}</p>
        </div>
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-6 sm:p-7 dark:border-white/10 dark:bg-white/5">
          <h4 className="text-lg font-semibold text-[#1F1A14] dark:text-white">{o3.guarantee.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75">{o3.guarantee.body}</p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
            {o3.guarantee.canGuaranteeLabel}
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {o3.guarantee.canGuarantee.map((it) => (
              <li key={it} className="text-sm text-[#1F1A14] dark:text-white/90">• {it}</li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl bg-white p-3 text-xs text-[#3A322A]/75 dark:bg-white/5 dark:text-white/70">
            {o3.guarantee.delivery}
          </p>
        </div>
      </div>
    </ExFrame>
  );
}
