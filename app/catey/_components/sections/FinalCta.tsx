"use client";

import { motion } from "motion/react";
import { useCateyT } from "./shared";
import { whatsappLink } from "../cateyHelpers";
import { CateyLogo } from "../CateyLogo";
import { optionTheme, type OptionKey } from "../optionTheme";

export function CateyFinalCta() {
  const { t } = useCateyT();
  const f = t.finalCta;

  const buttons: { key: OptionKey; label: string; recommended?: boolean }[] = [
    { key: "option1", label: f.buttons.opt1 },
    { key: "option2", label: f.buttons.opt2 },
    { key: "option3", label: f.buttons.opt3, recommended: true },
  ];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_50%_100%,#FCD7C4_0%,#FFF8F0_60%,transparent_100%)] dark:bg-[radial-gradient(120%_80%_at_50%_100%,#2A1D1A_0%,#1A1410_60%,transparent_100%)]">
        {/* Visible separator above the section, with breathing room from the
            previous block. The hairline runs through the page max-width. */}
        <div className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="h-px w-full bg-[#1F1A14]/10 dark:bg-white/10" />
        </div>

        {/* Pumo hangs from the top of the footer, paw dangling down into the
            section. Wide image anchored to the top edge so it reads like he's
            looking over the lip. Image has built-in transparency. */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-10 flex w-full max-w-3xl justify-center px-6 sm:mt-14"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/catey/brand/pumo-paw.png"
            alt="Pumo peeking over the edge"
            className="h-auto w-full max-w-[640px] select-none"
            decoding="async"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

      <div className="mx-auto w-full max-w-4xl px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-24 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
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
              className="h-6 w-auto sm:h-7 dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/brainy-light.svg"
              alt="Brainy"
              className="hidden h-6 w-auto sm:h-7 dark:block"
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
          {buttons.map((b) => {
            const theme = optionTheme[b.key];
            return (
              <motion.a
                key={b.key}
                href={whatsappLink(t[b.key].whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -3 }}
                className={`relative flex items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition ${theme.buttonBg} ${theme.buttonText}`}
              >
                {b.label}
              </motion.a>
            );
          })}
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
