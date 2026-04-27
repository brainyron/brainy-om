"use client";

import { motion } from "motion/react";
import { useCateyT } from "./shared";
import { whatsappLink } from "../cateyHelpers";
import { Pumo } from "../Pumo";

export function CateyFinalCta() {
  const { t } = useCateyT();
  const f = t.finalCta;

  const buttons: { key: "option1" | "option2" | "option3"; label: string; recommended?: boolean }[] = [
    { key: "option1", label: f.buttons.opt1 },
    { key: "option2", label: f.buttons.opt2, recommended: false },
    { key: "option3", label: f.buttons.opt3, recommended: true },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(120% 80% at 50% 100%, #FCD7C4 0%, #FFF8F0 60%, transparent 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 flex justify-center">
            <Pumo className="h-20 w-20" />
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
            {f.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#3A322A]/75 sm:text-lg dark:text-white/70">
            {f.sub}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-3 sm:grid-cols-3"
        >
          {buttons.map((b) => (
            <motion.a
              key={b.key}
              href={whatsappLink(t[b.key].whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3 }}
              className={`relative flex items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                b.recommended
                  ? "bg-[#F08762] text-white shadow-lg shadow-[#F08762]/30 hover:bg-[#D26B49]"
                  : "bg-white text-[#1F1A14] shadow-md hover:bg-[#FFF8F0] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              }`}
            >
              {b.label}
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-6">
          <a
            href={whatsappLink("Hi Catey, I want to talk first.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#3A322A]/70 underline-offset-4 hover:text-[#D26B49] hover:underline dark:text-white/70 dark:hover:text-[#F08762]"
          >
            {t.common.talkFirst}
          </a>
        </div>
      </div>
    </section>
  );
}
