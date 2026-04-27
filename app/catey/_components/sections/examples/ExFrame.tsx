"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { Inclusion } from "./registry";
import { useCateyT } from "../shared";

type Props = {
  id: string;
  index: number; // 0-based for alt background
  scope: Inclusion;
  title: string;
  caption?: string;
  perOption?: { content?: string; growth?: string; growthPlus?: string };
  children: ReactNode;
};

function scopeLabels(scope: Inclusion, t: ReturnType<typeof useCateyT>["t"]) {
  const e = t.examples;
  if (scope === "all") return [e.pills.content, e.pills.growth, e.pills.growthPlus];
  if (scope === "growthAndPlus") return [e.pills.growth, e.pills.growthPlus];
  return [e.pills.growthPlus];
}

export function ExFrame({ id, index, scope, title, caption, perOption, children }: Props) {
  const { t } = useCateyT();
  const labels = scopeLabels(scope, t);
  const isAlt = index % 2 === 1;

  return (
    <section
      id={`ex-${id}`}
      data-example-id={id}
      data-example-scope={scope}
      className={`scroll-mt-32 sm:scroll-mt-36 ${
        isAlt
          ? "bg-[#FFF8F0]/60 dark:bg-white/[0.025]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-8 max-w-3xl sm:mb-10"
        >
          <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D26B49] sm:text-[11px]">
            <span className="text-[#3A322A]/55 dark:text-white/45">{t.examples.includedIn}</span>
            {labels.map((l, i) => (
              <span key={l} className="inline-flex items-center gap-1.5">
                {i > 0 ? <span className="text-[#3A322A]/35 dark:text-white/30">+</span> : null}
                <span>{l}</span>
              </span>
            ))}
          </div>
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl md:text-4xl dark:text-white">
            {title}
          </h3>
          {caption ? (
            <p className="mt-3 text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">{caption}</p>
          ) : null}
          {perOption ? (
            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
              {perOption.content ? (
                <span className="rounded-full border border-[#1F1A14]/10 bg-white px-2.5 py-1 text-[#1F1A14] dark:border-white/10 dark:bg-white/10 dark:text-white/80">
                  <span className="me-1.5 text-[#D26B49]">{t.examples.contentLabel}</span>
                  {perOption.content}
                </span>
              ) : null}
              {perOption.growth ? (
                <span className="rounded-full border border-[#1F1A14]/10 bg-white px-2.5 py-1 text-[#1F1A14] dark:border-white/10 dark:bg-white/10 dark:text-white/80">
                  <span className="me-1.5 text-[#D26B49]">{t.examples.growthLabel}</span>
                  {perOption.growth}
                </span>
              ) : null}
              {perOption.growthPlus ? (
                <span className="rounded-full border border-[#F08762]/40 bg-[#FFE9DC] px-2.5 py-1 text-[#D26B49] dark:border-[#F08762]/40 dark:bg-[#F08762]/15 dark:text-[#F08762]">
                  <span className="me-1.5">{t.examples.growthPlusLabel}</span>
                  {perOption.growthPlus}
                </span>
              ) : null}
            </div>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
