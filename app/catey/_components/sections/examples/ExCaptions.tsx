"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExCaptions({ index }: { index: number }) {
  const { t } = useCateyT();
  const sec = t.examples.sections.captions;
  const basic = t.option1.captions.items as readonly string[];
  return (
    <ExFrame
      id="captions"
      index={index}
      scope="all"
      title={sec.title}
      caption={sec.caption}
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        <ComparisonCard
          variant="basic"
          label={sec.basicLabel}
          scope={sec.basicScope}
          items={basic}
        />
        <ComparisonCard
          variant="upgrade"
          label={sec.seoLabel}
          scope={sec.seoScope}
          items={sec.seoItems}
        />
      </div>
    </ExFrame>
  );
}

function ComparisonCard({
  variant,
  label,
  scope,
  items,
}: {
  variant: "basic" | "upgrade";
  label: string;
  scope: string;
  items: readonly string[];
}) {
  const isUpgrade = variant === "upgrade";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`flex h-full flex-col rounded-3xl border p-5 sm:p-6 ${
        isUpgrade
          ? "border-[#F08762]/40 bg-[#FFE9DC]/40 dark:border-[#F08762]/40 dark:bg-[#F08762]/[0.06]"
          : "border-[#1F1A14]/10 bg-white dark:border-white/10 dark:bg-white/5"
      }`}
    >
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
          isUpgrade ? "text-[#D26B49]" : "text-[#3A322A]/65 dark:text-white/55"
        }`}
      >
        {scope}
      </span>
      <h4 className="mt-2 text-xl font-semibold tracking-tight text-[#1F1A14] sm:text-2xl dark:text-white">
        {label}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((c, i) => (
          <li
            key={i}
            className={`rounded-2xl border p-4 text-sm leading-relaxed ${
              isUpgrade
                ? "border-[#F08762]/20 bg-white text-[#1F1A14] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/85"
                : "border-[#1F1A14]/8 bg-[#FFF8F0] text-[#1F1A14] dark:border-white/10 dark:bg-white/[0.03] dark:text-white/85"
            }`}
          >
            {c}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
