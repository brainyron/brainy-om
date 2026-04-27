"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useCateyT } from "./shared";

export function CateyFaq() {
  const { t } = useCateyT();
  const f = t.faq;

  return (
    <section className="bg-white dark:bg-[#1A1612]">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl dark:text-white">
            {f.title}
          </h2>
          <p className="mt-3 text-base text-[#3A322A]/70 dark:text-white/70">{f.sub}</p>
        </motion.div>

        <Accordion type="single" collapsible className="rounded-3xl border border-[#1F1A14]/10 bg-[#FFF8F0] px-5 dark:border-white/10 dark:bg-white/5">
          {f.items.map((it, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b-[#1F1A14]/10 dark:border-b-white/10">
              <AccordionTrigger className="text-base font-semibold text-[#1F1A14] dark:text-white">
                {it.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75">{it.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
