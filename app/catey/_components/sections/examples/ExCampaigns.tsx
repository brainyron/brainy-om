"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExCampaigns({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  const o = t.option2.campaigns;
  return (
    <ExFrame
      id="campaigns"
      index={index}
      scope="growthAndPlus"
      title={e.sections.campaigns.title}
      caption={e.sections.campaigns.caption}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-4 lg:grid-cols-2"
      >
        {o.items.map((c) => (
          <motion.div
            key={c.title}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
          >
            <div className="text-base font-semibold text-[#1F1A14] dark:text-white">{c.title}</div>
            <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{c.desc}</div>
            <ul className="mt-4 space-y-1.5">
              {c.includes.map((i) => (
                <li key={i} className="text-sm text-[#1F1A14] dark:text-white/90">• {i}</li>
              ))}
            </ul>
            {"promo" in c && c.promo ? (
              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border-2 border-dashed border-[#F08762] bg-[#FFE9DC] px-4 py-2.5 dark:border-[#F08762] dark:bg-[#F08762]/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D26B49]">Promo</span>
                <span className="font-mono text-base font-bold tracking-wider text-[#1F1A14] dark:text-white">
                  {c.promo}
                </span>
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </ExFrame>
  );
}
