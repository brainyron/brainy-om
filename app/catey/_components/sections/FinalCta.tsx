"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useCateyT } from "./shared";
import { whatsappLink } from "../cateyHelpers";
import { CateyLogo } from "../CateyLogo";

export function CateyFinalCta() {
  const { t } = useCateyT();
  const f = t.finalCta;

  const buttons: { key: "option1" | "option2" | "option3"; label: string; recommended?: boolean }[] = [
    { key: "option1", label: f.buttons.opt1 },
    { key: "option2", label: f.buttons.opt2, recommended: false },
    { key: "option3", label: f.buttons.opt3, recommended: true },
  ];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_50%_100%,#FCD7C4_0%,#FFF8F0_60%,transparent_100%)] dark:bg-[radial-gradient(120%_80%_at_50%_100%,#2A1D1A_0%,#1A1410_60%,transparent_100%)]">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 flex justify-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#1F1A14]/10 shadow-md dark:border-white/10">
              <Image src="/catey/brand/pumo-hero.png" alt="Pumo" fill sizes="80px" className="object-cover" />
            </div>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
            {f.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#3A322A]/75 sm:text-lg dark:text-white/70">
            {f.sub}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-[#3A322A]/70 dark:text-white/70">
            <CateyLogo className="h-6 w-auto sm:h-7" />
            <span className="text-xl font-light text-[#3A322A]/40 dark:text-white/40">×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/brainy-dark.svg"
              alt="Brainy"
              className="h-5 w-auto sm:h-6 dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/brainy-light.svg"
              alt="Brainy"
              className="hidden h-5 w-auto sm:h-6 dark:block"
            />
          </div>
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
