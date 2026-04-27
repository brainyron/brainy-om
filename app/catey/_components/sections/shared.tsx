"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { cateyTranslations, cateyConfig } from "../../../../translations/catey";
import { whatsappLink } from "../cateyHelpers";
import { ReelTile } from "../ReelTile";

export function SectionFrame({
  id,
  eyebrow,
  title,
  tagline,
  children,
  tone = "cream",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  tagline?: string;
  children: ReactNode;
  tone?: "cream" | "white" | "deep";
}) {
  const bg =
    tone === "cream"
      ? "bg-[#FFF8F0] dark:bg-[#161310]"
      : tone === "deep"
        ? "bg-[#FBEBD8] dark:bg-[#1B1612]"
        : "bg-white dark:bg-[#1A1612]";

  return (
    <section id={id} className={`scroll-mt-20 ${bg}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl sm:mb-14"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D26B49]">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
            {title}
          </h2>
          {tagline ? (
            <p className="mt-4 text-base text-[#3A322A]/75 sm:text-lg md:text-xl dark:text-white/70">
              {tagline}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export function PriceBlock({
  primary,
  primaryLabel,
  strikethrough,
  note,
  setup,
  setupLabel,
  share,
  shareLabel,
  minimum,
  minimumLabel,
}: {
  primary: string;
  primaryLabel: string;
  strikethrough?: string;
  note?: string;
  setup?: string;
  setupLabel?: string;
  share?: string;
  shareLabel?: string;
  minimum?: string;
  minimumLabel?: string;
}) {
  return (
    <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 shadow-sm sm:p-7 dark:border-white/10 dark:bg-white/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#3A322A]/60 dark:text-white/50">
            {primaryLabel}
          </div>
          <div className="mt-1 flex items-baseline gap-3">
            <span className="text-4xl font-semibold tracking-tight text-[#1F1A14] sm:text-5xl dark:text-white">
              {primary}
            </span>
            {strikethrough ? (
              <span className="text-lg text-[#3A322A]/50 line-through dark:text-white/40">
                {strikethrough}
              </span>
            ) : null}
          </div>
          {note ? (
            <div className="mt-2 text-xs text-[#3A322A]/60 dark:text-white/50">{note}</div>
          ) : null}
        </div>
        {setup || share || minimum ? (
          <div className="space-y-3 sm:border-l sm:border-[#1F1A14]/10 sm:pl-6 sm:dark:border-white/10">
            {setup ? (
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                  {setupLabel}
                </div>
                <div className="text-xl font-semibold text-[#1F1A14] dark:text-white">{setup}</div>
              </div>
            ) : null}
            {share ? (
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                  {shareLabel}
                </div>
                <div className="text-base font-medium text-[#1F1A14] dark:text-white">{share}</div>
              </div>
            ) : null}
            {minimum ? (
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                  {minimumLabel}
                </div>
                <div className="text-base font-medium text-[#1F1A14] dark:text-white">{minimum}</div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function IncludesGrid({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
        {title}
      </h3>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-3 rounded-2xl border border-[#1F1A14]/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#FCD7C4] text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
              ✓
            </span>
            <span className="text-sm text-[#1F1A14] dark:text-white/90">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

// All 5 catey reels in /public/catey/reels.
const ALL_REELS = [
  "/catey/reels/reel-01.mp4",
  "/catey/reels/reel-02.mp4",
  "/catey/reels/reel-03.mp4",
  "/catey/reels/reel-04.mp4",
  "/catey/reels/reel-05.mp4",
];

export function ReelTilesGrid({
  title,
  sub,
  items,
  reelLimit,
}: {
  title: string;
  sub?: string;
  items: readonly { title: string; type: string }[];
  reelLimit?: number;
}) {
  // Pair each label with a reel src. If items > reels, cycle.
  // If reelLimit is set we cap how many reels show (e.g. Option 1 shows 3).
  const max = reelLimit ?? items.length;
  const tiles = items.slice(0, max).map((item, i) => ({
    ...item,
    src: ALL_REELS[i % ALL_REELS.length],
  }));

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p> : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
      >
        {tiles.map((t) => (
          <ReelTile key={t.title} src={t.src} title={t.title} type={t.type} />
        ))}
      </motion.div>
    </div>
  );
}

// Phone-frame mock for vertical 9:16 imagery (story sets / giveaways).
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#1F1A14]/15 bg-[#1F1A14] p-1.5 shadow-xl shadow-[#1F1A14]/10 dark:border-white/15">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.6rem] bg-black">
          <Image src={src} alt={alt} fill sizes="280px" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export function StoryShowcase({
  title,
  sub,
  images,
}: {
  title: string;
  sub?: string;
  images: readonly { src: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p> : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-6 grid gap-6 sm:grid-cols-2"
      >
        {images.map((img) => (
          <motion.div
            key={img.src}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center gap-3"
          >
            <PhoneFrame src={img.src} alt={img.label} />
            <p className="text-center text-xs text-[#3A322A]/70 dark:text-white/60">{img.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function GiveawayShowcase({
  title,
  sub,
  images,
}: {
  title: string;
  sub?: string;
  images: readonly { src: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p> : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        {images.map((img) => (
          <motion.div
            key={img.src}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center gap-2 border-b border-[#1F1A14]/10 bg-[#FFF8F0] px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[#F08762] to-[#7BB89C]" />
              <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">catey.shop</div>
            </div>
            <div className="relative aspect-square w-full bg-[#FFF8F0] dark:bg-black">
              <Image src={img.src} alt={img.label} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="px-4 py-3 text-xs text-[#3A322A]/70 dark:text-white/60">{img.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function StoryGrid({
  title,
  sub,
  items,
}: {
  title: string;
  sub?: string;
  items: readonly { title: string; desc: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? (
        <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p>
      ) : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 transition-shadow hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-1 inline-flex rounded-full bg-[#D7EDDF] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#3F8D6D] dark:bg-[#7BB89C]/20 dark:text-[#7BB89C]">
              Story
            </div>
            <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{item.title}</div>
            <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Real catey photos pool. Caller passes a count; we cycle through the gallery.
const PHOTO_POOL = [
  "/catey/photos/edited-01.jpg",
  "/catey/photos/edited-02.jpg",
  "/catey/photos/edited-03.jpg",
  "/catey/photos/edited-04.jpg",
  "/catey/photos/edited-05.jpg",
  "/catey/photos/lifestyle.jpg",
  "/catey/photos/product-reaction.jpg",
];

export function PhotoGrid({
  title,
  sub,
  items,
  feature,
}: {
  title: string;
  sub?: string;
  items: readonly string[];
  // Optional featured image rendered larger above the grid (Option 3 use case)
  feature?: { src: string; alt: string };
}) {
  // Map labels to real photos by index, cycling if we have more labels than photos.
  const tiles = items.map((label, i) => ({
    label,
    src: PHOTO_POOL[i % PHOTO_POOL.length],
  }));

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p> : null}

      {feature ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#1F1A14]/10 dark:border-white/10"
        >
          <Image src={feature.src} alt={feature.alt} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
        </motion.div>
      ) : null}

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
        className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
      >
        {tiles.map((t) => (
          <motion.div
            key={t.src + t.label}
            variants={{ hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-square overflow-hidden rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] dark:border-white/10 dark:bg-black/40"
          >
            <Image
              src={t.src}
              alt={t.label}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function QuoteCards({
  title,
  sub,
  items,
}: {
  title: string;
  sub?: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? (
        <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p>
      ) : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4"
      >
        {items.map((q) => (
          <motion.blockquote
            key={q}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="rounded-2xl border border-[#1F1A14]/10 bg-white p-5 text-[15px] leading-relaxed text-[#1F1A14] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/90"
          >
            <span className="mb-2 block text-2xl leading-none text-[#F08762]">&ldquo;</span>
            {q}
          </motion.blockquote>
        ))}
      </motion.div>
    </div>
  );
}

export function WeeklyTimeline({
  title,
  sub,
  weeks,
}: {
  title: string;
  sub?: string;
  weeks: readonly { label: string; items: readonly string[] }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">{title}</h3>
      {sub ? (
        <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{sub}</p>
      ) : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
      >
        {weeks.map((w) => (
          <motion.div
            key={w.label}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="relative overflow-hidden rounded-2xl border border-[#1F1A14]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[#FCD7C4]/60 dark:bg-[#F08762]/10" />
            <div className="relative">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                {w.label}
              </div>
              <ul className="space-y-2">
                {w.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm leading-snug text-[#1F1A14] dark:text-white/90"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function CTAButton({
  optionKey,
}: {
  optionKey: "option1" | "option2" | "option3";
}) {
  const { language } = useLanguage();
  const t = cateyTranslations[language];
  const message = t[optionKey].whatsappMessage;
  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center justify-center rounded-full bg-[#1F1A14] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#F08762]/20 transition hover:bg-[#D26B49] dark:bg-white dark:text-[#1F1A14] dark:hover:bg-[#F08762] dark:hover:text-white"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#F08762]/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative">{t.common.iWantThis}</span>
    </motion.a>
  );
}

export function useCateyT() {
  const { language } = useLanguage();
  return { t: cateyTranslations[language], language, isAr: language === "ar" };
}

// Re-export config for convenience
export { cateyConfig };
