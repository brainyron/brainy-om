"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { Inclusion } from "./registry";
import { useCateyT } from "../shared";
import {
  optionTheme,
  optionsForScope,
  type OptionKey,
} from "../../optionTheme";

type Props = {
  id: string;
  index: number; // 0-based for alt background
  scope: Inclusion;
  title: string;
  caption?: string;
  perOption?: { content?: string; growth?: string; growthPlus?: string };
  children: ReactNode;
};

function scopeLabels(
  scope: Inclusion,
  t: ReturnType<typeof useCateyT>["t"],
): { label: string; optionKey: OptionKey }[] {
  const e = t.examples;
  const map: Record<OptionKey, string> = {
    option1: e.pills.content,
    option2: e.pills.growth,
    option3: e.pills.growthPlus,
  };
  return optionsForScope(scope).map((k) => ({ label: map[k], optionKey: k }));
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
          <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]">
            <span className="text-[#3A322A]/55 dark:text-white/45">{t.examples.includedIn}</span>
            {labels.map((l, i) => {
              const lt = optionTheme[l.optionKey];
              return (
                <span key={l.optionKey} className="inline-flex items-center gap-1.5">
                  {i > 0 ? <span className="text-[#3A322A]/35 dark:text-white/30">+</span> : null}
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 ${lt.pill}`}
                  >
                    <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${lt.badgeBg}`} />
                    {l.label}
                  </span>
                </span>
              );
            })}
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
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${optionTheme.option1.pill}`}
                >
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${optionTheme.option1.badgeBg}`} />
                  <span className="font-semibold">{t.examples.contentLabel}</span>
                  <span className="font-normal opacity-90">{perOption.content}</span>
                </span>
              ) : null}
              {perOption.growth ? (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${optionTheme.option2.pill}`}
                >
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${optionTheme.option2.badgeBg}`} />
                  <span className="font-semibold">{t.examples.growthLabel}</span>
                  <span className="font-normal opacity-90">{perOption.growth}</span>
                </span>
              ) : null}
              {perOption.growthPlus ? (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${optionTheme.option3.pill}`}
                >
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${optionTheme.option3.badgeBg}`} />
                  <span className="font-semibold">{t.examples.growthPlusLabel}</span>
                  <span className="font-normal opacity-90">{perOption.growthPlus}</span>
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
