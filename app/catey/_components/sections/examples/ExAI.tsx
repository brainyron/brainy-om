"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExAI({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option3.ai;
  return (
    <ExFrame
      id="ai"
      index={index}
      scope="plusOnly"
      title={e.sections.ai.title}
      caption={e.sections.ai.caption}
    >
      <div className="rounded-3xl border border-[#1F1A14]/10 bg-gradient-to-br from-[#1F1A14] to-[#3A322A] p-6 text-white sm:p-8 dark:border-white/10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {o.items.map((it) => (
            <motion.div
              key={it.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm font-semibold">{it.title}</div>
              <div className="mt-1 text-xs text-white/65">{it.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ExFrame>
  );
}
