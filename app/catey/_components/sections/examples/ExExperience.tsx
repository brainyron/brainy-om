"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExExperience({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option3.experience;
  return (
    <ExFrame
      id="experience"
      index={index}
      scope="plusOnly"
      title={e.sections.experience.title}
      caption={e.sections.experience.caption}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {o.items.map((it) => (
          <motion.div
            key={it.title}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="rounded-2xl border border-[#1F1A14]/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{it.title}</div>
            <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{it.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </ExFrame>
  );
}
