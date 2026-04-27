"use client";

import { motion } from "motion/react";
import { ExFrame } from "./ExFrame";
import { GiveawayShowcase, useCateyT } from "../shared";

export function ExGiveaways({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option2.giveaways;
  return (
    <ExFrame
      id="giveaways"
      index={index}
      scope="growthAndPlus"
      title={e.sections.giveaways.title}
      caption={e.sections.giveaways.caption}
    >
      <GiveawayShowcase
        title=""
        images={[
          { src: "/catey/giveaways/giveaway-01.jpg", label: isAr ? "حملة جائزة فيرال" : "Viral giveaway post" },
          { src: "/catey/giveaways/giveaway-ideas.jpg", label: isAr ? "أفكار جوائز" : "Giveaway ideas grid" },
        ]}
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-8 grid gap-4 lg:grid-cols-2"
      >
        {o.items.map((g) => (
          <motion.div
            key={g.prompt}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
          >
            <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{g.prompt}</div>
            <div className="mt-4 space-y-2.5">
              {g.comments.map((c) => (
                <div key={c} className="flex items-start gap-3 rounded-2xl bg-[#FFF8F0] p-3 dark:bg-white/5">
                  <div className="h-8 w-8 flex-none rounded-full bg-gradient-to-br from-[#F08762] to-[#7BB89C]" />
                  <div className="text-sm text-[#1F1A14] dark:text-white/90">{c}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex rounded-full bg-[#1F1A14] px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-[#1F1A14]">
              {g.prize}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ExFrame>
  );
}
