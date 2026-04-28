"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

const CATEY_PALETTE = [
  { hex: "#DA9552", name: "Warm Tan" },
  { hex: "#100E0B", name: "Ink" },
  { hex: "#F8E1AC", name: "Cream Gold" },
  { hex: "#FFFCF9", name: "Paper" },
  { hex: "#764C24", name: "Coffee" },
  { hex: "#2D6BA1", name: "Catey Blue" },
];

// Catey blue, used as the wrong-pairing example in the do/don't logo demo.
const WRONG_BLUE = "#2D6BA1";

export function ExBrandFoundation({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option3.brand;

  return (
    <ExFrame
      id="brand"
      index={index}
      scope="plusOnly"
      title={e.sections.brand.title}
      caption={e.sections.brand.caption}
    >
      {/* Logo demo */}
      <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
          {isAr ? "نظام الشعار" : "Logo system"}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Approved on cream */}
          <div className="relative">
            <div className="flex h-32 items-center justify-center rounded-xl bg-[#F8E1AC] p-6">
              <Image src="/catey/brand/catey-logo.svg" alt="Catey logo on cream" width={280} height={64} className="h-10 w-auto sm:h-12" />
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#1A8754]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1A8754]/10 text-[#1A8754]">✓</span>
              {isAr ? "صحيح" : "Approved"}
            </div>
            <div className="mt-0.5 text-[11px] text-[#3A322A]/60 dark:text-white/50">
              {isAr ? "براون على ذهبي كريمي" : "Coffee on Cream Gold"}
            </div>
          </div>
          {/* Approved on ink */}
          <div className="relative">
            <div className="flex h-32 items-center justify-center rounded-xl bg-[#100E0B] p-6">
              <Image src="/catey/brand/catey-logo.svg" alt="Catey logo inverted" width={280} height={64} className="h-10 w-auto invert sm:h-12" />
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#1A8754]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1A8754]/10 text-[#1A8754]">✓</span>
              {isAr ? "صحيح" : "Approved"}
            </div>
            <div className="mt-0.5 text-[11px] text-[#3A322A]/60 dark:text-white/50">
              {isAr ? "أبيض على حبر" : "White on Ink"}
            </div>
          </div>
          {/* Wrong: white on warm tan */}
          <div className="relative">
            <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-xl bg-[#DA9552] p-6 ring-2 ring-[#C0392B]/70">
              <Image src="/catey/brand/catey-logo.svg" alt="Catey logo wrong usage: white on warm tan" width={280} height={64} className="h-10 w-auto invert sm:h-12" />
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden
              >
                <line x1="0" y1="0" x2="100" y2="100" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C0392B] text-[12px] font-bold text-white shadow-lg">
                ✕
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#C0392B]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C0392B]/10">✕</span>
              {isAr ? "خطأ" : "Wrong usage"}
            </div>
            <div className="mt-0.5 text-[11px] text-[#3A322A]/60 dark:text-white/50">
              {isAr ? "أبيض على بني فاتح، تباين منخفض" : "White on Warm Tan, low contrast"}
            </div>
          </div>
          {/* Wrong: blue on warm tan */}
          <div className="relative">
            <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-xl bg-[#DA9552] p-6 ring-2 ring-[#C0392B]/70">
              {/* Blue-tinted Catey logo via CSS mask, so we recolor the SVG without
                  shipping a second asset. Sized to match the approved tiles' logo: h-10
                  on mobile, h-12 on sm+, with width set from the SVG's intrinsic 1116:254
                  ratio so the wordmark renders at the same visual size as the others. */}
              <div
                role="img"
                aria-label="Catey logo wrong usage: blue on warm tan"
                className="h-10 w-[176px] sm:h-12 sm:w-[211px]"
                style={{
                  backgroundColor: WRONG_BLUE,
                  WebkitMaskImage: "url(/catey/brand/catey-logo.svg)",
                  maskImage: "url(/catey/brand/catey-logo.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
              {/* Diagonal cross overlay marking wrong usage */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden
              >
                <line x1="0" y1="0" x2="100" y2="100" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C0392B] text-[12px] font-bold text-white shadow-lg">
                ✕
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#C0392B]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C0392B]/10">✕</span>
              {isAr ? "خطأ" : "Wrong usage"}
            </div>
            <div className="mt-0.5 text-[11px] text-[#3A322A]/60 dark:text-white/50">
              {isAr ? "أزرق على بني فاتح، تباين منخفض" : "Blue on Warm Tan, low contrast"}
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-[#3A322A]/60 dark:text-white/50">
          {isAr
            ? "نسخ معتمدة على الكريمي والحبر فقط. لا تضع الشعار باللون الأبيض أو الأزرق فوق البني الفاتح، التباين ضعيف."
            : "Approved on cream and ink only. Never place the logo in white or blue on Warm Tan, the contrast is too low."}
        </p>
      </div>

      {/* Color system */}
      <div className="mt-4 rounded-2xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
          {isAr ? "نظام الألوان" : "Color system"}
        </div>
        <p className="mt-2 text-xs text-[#3A322A]/70 dark:text-white/60">
          {isAr
            ? "ألوان Catey الأساسية + درجات عمل للمنتجات والتغليف وواجهات المستخدم."
            : "Catey brand palette + working shades for products, packaging, and UI."}
        </p>
        <div className="mt-5 space-y-4">
          {CATEY_PALETTE.map((c) => {
            const steps = [
              { label: "+30%", mix: `color-mix(in oklab, ${c.hex} 70%, white)` },
              { label: "+15%", mix: `color-mix(in oklab, ${c.hex} 85%, white)` },
              { label: "Base", mix: c.hex },
              { label: "−15%", mix: `color-mix(in oklab, ${c.hex} 85%, black)` },
              { label: "−30%", mix: `color-mix(in oklab, ${c.hex} 70%, black)` },
            ];
            return (
              <div key={c.hex} className="grid items-center gap-3 sm:grid-cols-[180px_1fr]">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex-none rounded-lg border border-[#1F1A14]/10 dark:border-white/10" style={{ background: c.hex }} />
                  <div>
                    <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{c.name}</div>
                    <div className="text-[11px] font-mono text-[#3A322A]/60 dark:text-white/50">{c.hex}</div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {steps.map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-1">
                      <div className="h-9 w-full rounded-md border border-[#1F1A14]/10 dark:border-white/10" style={{ background: s.mix }} />
                      <div className="text-[10px] text-[#3A322A]/60 dark:text-white/50">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Typography */}
      <div className="mt-4 rounded-2xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
          {isAr ? "الخطوط" : "Typography"}
        </div>
        <p className="mt-2 text-xs text-[#3A322A]/70 dark:text-white/60">
          {isAr ? "ثلاثة خطوط مرشحة للعلامة. عرض فقط." : "Three candidate fonts for the system. Demo only."}
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Instrument Serif",
              role: isAr ? "خط عرض" : "Display serif",
              family: '"Instrument Serif", Georgia, serif',
              weights: ["400"],
              sample: "The quick fox jumps over the lazy cat",
              sampleAr: "Pumo يأكل من Catey",
              url: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
            },
            {
              name: "DM Sans",
              role: isAr ? "نص" : "Body sans",
              family: '"DM Sans", system-ui, sans-serif',
              weights: ["200", "400", "700"],
              sample: "The quick fox jumps over the lazy cat",
              sampleAr: "Pumo يأكل من Catey",
              url: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@200;400;700&display=swap",
            },
            {
              name: "Cairo",
              role: isAr ? "عربي" : "Arabic-friendly",
              family: 'Cairo, "DM Sans", system-ui, sans-serif',
              weights: ["400", "600", "700"],
              sample: "The quick fox jumps over the lazy cat",
              sampleAr: "بومو يأكل من Catey",
              url: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
            },
          ].map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-5 dark:border-white/10 dark:bg-white/5"
            >
              <link rel="stylesheet" href={f.url} />
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#D26B49]">{f.role}</div>
              <div className="mt-1 text-base font-semibold text-[#1F1A14] dark:text-white">{f.name}</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {f.weights.map((w) => (
                  <span
                    key={w}
                    className="rounded-full border border-[#1F1A14]/10 bg-white px-2 py-0.5 text-[10px] text-[#3A322A]/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                  >
                    {w}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-2xl leading-tight text-[#1F1A14] dark:text-white" style={{ fontFamily: f.family }}>
                Aa Bb 1234
              </div>
              <div className="mt-3 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75" style={{ fontFamily: f.family }}>
                {f.sample}
              </div>
              <div className="mt-2 text-base leading-relaxed text-[#3A322A]/80 dark:text-white/75" dir="rtl" style={{ fontFamily: f.family }}>
                {f.sampleAr}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand sections */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {o.sections.map((s) => (
          <motion.div
            key={s.title}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="rounded-2xl border border-[#1F1A14]/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{s.title}</div>
            <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{s.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </ExFrame>
  );
}
