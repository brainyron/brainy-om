"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SectionFrame, CTAButton, useCateyT, ReelTilesGrid, StoryShowcase, GiveawayShowcase, PhotoGrid } from "./shared";
import { cateyConfig, cateyTranslations } from "../../../../translations/catey";

// Catey brand palette extracted from /public/catey/brand/color-0X.svg
const CATEY_PALETTE = [
  { hex: "#DA9552", name: "Warm Tan" },
  { hex: "#100E0B", name: "Ink" },
  { hex: "#F8E1AC", name: "Cream Gold" },
  { hex: "#FFFCF9", name: "Paper" },
  { hex: "#764C24", name: "Coffee" },
];

// Catey-aligned palette for chart series
const palette = ["#DA9552", "#764C24", "#F8E1AC", "#100E0B", "#F08762"];

function BrowserFrame({ url, label, children }: { url: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white shadow-xl shadow-[#1F1A14]/5 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3 border-b border-[#1F1A14]/10 bg-[#FFF8F0] px-4 py-3 dark:border-white/10 dark:bg-white/5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="mx-auto rounded-full bg-white px-4 py-1.5 text-xs text-[#3A322A]/70 shadow-inner dark:bg-white/10 dark:text-white/70">
            {url}
          </div>
        </div>
        {children}
      </div>
      <p className="mt-3 text-center text-xs text-[#3A322A]/60 dark:text-white/50">{label}</p>
    </div>
  );
}

export function CateyOption3() {
  const { t, isAr } = useCateyT();
  const o = t.option3;

  // Iframe ready only on client to avoid SSR issues with iframe and theme
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const axisColor = isDark ? "#e5e5e5" : "#1F1A14";
  const gridStroke = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const tooltipStyle = {
    borderRadius: 12,
    border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(31,26,20,0.1)"}`,
    background: isDark ? "#1F1A14" : "#fff",
    color: isDark ? "#fff" : "#1F1A14",
    fontSize: 12,
  } as const;

  const clicksData = o.tracking.chartLabels.weeks.map((w, i) => ({
    name: w,
    Clicks: [120, 180, 240, 320, 410, 530][i],
  }));
  const sourcesData = o.tracking.chartLabels.sources.map((s, i) => ({
    name: s,
    Messages: [240, 110, 175, 95][i],
  }));
  const funnelData = o.tracking.chartLabels.funnel.map((s, i) => ({
    name: s,
    value: [820, 410, 120][i],
  }));

  return (
    <SectionFrame id="option-3" eyebrow={o.label} title={o.title} tagline={o.tagline} tone="deep">
      <div className="space-y-12 sm:space-y-16">
        {/* Pill + goal */}
        <div className="-mt-6 flex flex-col items-start gap-4 sm:-mt-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1F1A14] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white dark:bg-[#F08762]">
            {o.pill}
          </span>
          <p className="max-w-3xl text-base leading-relaxed text-[#3A322A]/85 sm:text-lg dark:text-white/80">
            {o.goal}
          </p>
        </div>

        {/* Pricing */}
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.pricing.normalValueLabel}
              </div>
              <div className="mt-1 text-2xl font-medium text-[#3A322A]/60 line-through dark:text-white/50 sm:text-3xl">
                {o.pricing.normalValue}
              </div>
              <p className="mt-2 max-w-md text-xs text-[#3A322A]/60 dark:text-white/50">
                {o.pricing.normalNote}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl bg-[#FFF8F0] p-5 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D26B49]">
                {o.pricing.setup}
              </div>
              <div className="mt-2 text-2xl font-semibold text-[#1F1A14] dark:text-white">
                {cateyConfig.prices.option3.currency} {cateyConfig.prices.option3.setup.toLocaleString()}
              </div>
            </div>
            <div className="rounded-2xl bg-[#FFF8F0] p-5 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D26B49]">
                {o.pricing.monthly}
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-[#1F1A14] dark:text-white">
                  {cateyConfig.prices.option3.currency} {cateyConfig.prices.option3.monthly}
                </span>
                <span className="text-sm text-[#3A322A]/50 line-through dark:text-white/40">
                  {cateyConfig.prices.option3.monthlyOriginal}
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-[#FFF8F0] p-5 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D26B49]">
                {o.pricing.share}
              </div>
              <div className="mt-2 text-2xl font-semibold text-[#1F1A14] dark:text-white">
                {o.pricing.shareValue}
              </div>
            </div>
            <div className="rounded-2xl bg-[#FFF8F0] p-5 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D26B49]">
                {o.pricing.minimum}
              </div>
              <div className="mt-2 text-2xl font-semibold text-[#1F1A14] dark:text-white">
                {o.pricing.minimumValue}
              </div>
            </div>
          </div>
        </div>

        {/* Includes lead */}
        <div className="rounded-3xl border border-[#F08762]/30 bg-[#FFE9DC] p-5 text-base text-[#1F1A14] dark:border-[#F08762]/30 dark:bg-[#F08762]/10 dark:text-white">
          <span className="font-semibold">{o.includesLead}</span>
        </div>

        {/* Reels — uses Option 2 reel set since Option 3 includes everything in Option 2. */}
        <ReelTilesGrid
          title={cateyTranslations[isAr ? "ar" : "en"].option2.reels.title}
          sub={cateyTranslations[isAr ? "ar" : "en"].option2.reels.sub}
          items={cateyTranslations[isAr ? "ar" : "en"].option2.reels.items}
        />

        {/* Photos — feature shot + grid */}
        <PhotoGrid
          title={cateyTranslations[isAr ? "ar" : "en"].option2.photos.title}
          items={cateyTranslations[isAr ? "ar" : "en"].option2.photos.items}
          feature={{ src: "/catey/option-3/feature-01.jpg", alt: isAr ? "صورة مميزة لـ Pumo" : "Featured Pumo lifestyle shot" }}
        />

        {/* Stories */}
        <StoryShowcase
          title={isAr ? "أمثلة من ستوري حقيقية" : "Real story examples"}
          sub={isAr ? "هذي أمثلة من ستوري سويناها لحسابات شبيهة." : "Examples of story sets we've produced for similar accounts."}
          images={[
            { src: "/catey/stories/story-sets-01.jpg", label: isAr ? "مجموعة ستوري عناية" : "Care story set" },
            { src: "/catey/stories/story-sets-02.jpg", label: isAr ? "مجموعة ستوري منتج" : "Product story set" },
          ]}
        />

        {/* Giveaways */}
        <GiveawayShowcase
          title={isAr ? "أمثلة جوائز" : "Giveaway examples"}
          sub={isAr ? "أمثلة بصرية من حملات جوائز سابقة." : "Visual examples from past giveaway campaigns."}
          images={[
            { src: "/catey/giveaways/giveaway-01.jpg", label: isAr ? "حملة جائزة فيرال" : "Viral giveaway post" },
            { src: "/catey/option-3/giveaway-ideas.jpg", label: isAr ? "أفكار جوائز" : "Giveaway ideas grid" },
          ]}
        />

        {/* Brand foundation */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl dark:text-white">
            {o.brand.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">
            {o.brand.sub}
          </p>

          {/* Logo demo */}
          <div className="mt-6 rounded-2xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {isAr ? "نظام الشعار" : "Logo system"}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <div className="rounded-xl bg-[#F8E1AC] p-6">
                <Image
                  src="/catey/brand/catey-logo.svg"
                  alt="Catey logo on cream"
                  width={280}
                  height={64}
                  className="h-10 w-auto sm:h-12"
                />
              </div>
              <div className="rounded-xl bg-[#100E0B] p-6">
                <Image
                  src="/catey/brand/catey-logo.svg"
                  alt="Catey logo inverted"
                  width={280}
                  height={64}
                  className="h-10 w-auto invert sm:h-12"
                />
              </div>
              <div className="rounded-xl bg-[#DA9552] p-6">
                <Image
                  src="/catey/brand/catey-logo.svg"
                  alt="Catey logo on tan"
                  width={280}
                  height={64}
                  className="h-10 w-auto invert sm:h-12"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-[#3A322A]/60 dark:text-white/50">
              {isAr
                ? "نسخ متعددة من الشعار للاستخدام على خلفيات مختلفة."
                : "Logo variations across light, dark, and accent surfaces."}
            </p>
          </div>

          {/* Color system: Catey brand palette + working shades */}
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
                // Strip steps from -30% to +30% (mix with black/white via color-mix).
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
                      <div
                        className="h-12 w-12 flex-none rounded-lg border border-[#1F1A14]/10 dark:border-white/10"
                        style={{ background: c.hex }}
                      />
                      <div>
                        <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{c.name}</div>
                        <div className="text-[11px] font-mono text-[#3A322A]/60 dark:text-white/50">{c.hex}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {steps.map((s) => (
                        <div key={s.label} className="flex flex-col items-center gap-1">
                          <div
                            className="h-9 w-full rounded-md border border-[#1F1A14]/10 dark:border-white/10"
                            style={{ background: s.mix }}
                          />
                          <div className="text-[10px] text-[#3A322A]/60 dark:text-white/50">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Typography demo: 3 fonts for 2026 feel */}
          <div className="mt-4 rounded-2xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {isAr ? "الخطوط" : "Typography"}
            </div>
            <p className="mt-2 text-xs text-[#3A322A]/70 dark:text-white/60">
              {isAr
                ? "ثلاثة خطوط مرشحة للعلامة. عرض فقط."
                : "Three candidate fonts for the system. Demo only."}
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
                  {/* Lazy-load font face for demo */}
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
                  <div
                    className="mt-4 text-2xl leading-tight text-[#1F1A14] dark:text-white"
                    style={{ fontFamily: f.family }}
                  >
                    Aa Bb 1234
                  </div>
                  <div
                    className="mt-3 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75"
                    style={{ fontFamily: f.family }}
                  >
                    {f.sample}
                  </div>
                  <div
                    className="mt-2 text-base leading-relaxed text-[#3A322A]/80 dark:text-white/75"
                    dir="rtl"
                    style={{ fontFamily: f.family }}
                  >
                    {f.sampleAr}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {o.brand.sections.map((s) => (
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
        </div>

        {/* Website preview iframe */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl dark:text-white">
            {o.website.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">
            {o.website.sub}
          </p>

          <div className="mt-6">
            <BrowserFrame url={o.website.previewUrl} label={o.website.previewLabel}>
              <div className="relative h-[440px] sm:h-[560px] lg:h-[640px]">
                {mounted ? (
                  <iframe
                    src="/catey/_preview/website"
                    title="Catey website preview"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#FFF8F0] text-sm text-[#3A322A]/60">
                    Loading preview...
                  </div>
                )}
              </div>
            </BrowserFrame>
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {o.website.improvements.map((i) => (
              <li
                key={i}
                className="rounded-2xl border border-[#1F1A14]/10 bg-white p-3 text-sm text-[#1F1A14] dark:border-white/10 dark:bg-white/5 dark:text-white/90"
              >
                <span className="me-2 text-[#F08762]">•</span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Tracking */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl dark:text-white">
            {o.tracking.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">
            {o.tracking.sub}
          </p>

          <div className="mt-6 rounded-3xl border border-[#1F1A14]/10 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                Dashboard preview
              </span>
              <span className="rounded-full bg-[#FCD7C4] px-3 py-1 text-xs font-medium text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
                {t.common.sample}
              </span>
            </div>
            <div className="mt-4 grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                  {o.tracking.chartTitles.clicks}
                </div>
                <div className="mt-3 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={clicksData} margin={{ top: 16, right: 16, bottom: 24, left: 24 }}>
                      <CartesianGrid stroke={gridStroke} vertical={false} />
                      <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} reversed={isAr} />
                      <YAxis tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} orientation={isAr ? "right" : "left"} />
                      <Tooltip cursor={{ stroke: "#DA9552", strokeOpacity: 0.25 }} contentStyle={tooltipStyle} />
                      <Line type="monotone" dataKey="Clicks" stroke="#DA9552" strokeWidth={2.5} dot={{ r: 4, fill: "#DA9552" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                  {o.tracking.chartTitles.sources}
                </div>
                <div className="mt-3 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sourcesData} margin={{ top: 16, right: 16, bottom: 24, left: 24 }}>
                      <CartesianGrid stroke={gridStroke} vertical={false} />
                      <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} reversed={isAr} />
                      <YAxis tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} orientation={isAr ? "right" : "left"} />
                      <Tooltip cursor={{ fill: "#DA9552", fillOpacity: 0.1 }} contentStyle={tooltipStyle} />
                      <Bar dataKey="Messages" radius={[8, 8, 0, 0]}>
                        {sourcesData.map((_, i) => (
                          <Cell key={i} fill={palette[i % palette.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                  {o.tracking.chartTitles.funnel}
                </div>
                <div className="mt-4 space-y-2.5">
                  {funnelData.map((d, i) => {
                    const max = funnelData[0].value;
                    const pct = (d.value / max) * 100;
                    return (
                      <div key={d.name}>
                        <div className="mb-1 flex justify-between text-xs text-[#3A322A]/80 dark:text-white/70">
                          <span>{d.name}</span>
                          <span className="font-semibold">{d.value}</span>
                        </div>
                        <div className="h-7 w-full overflow-hidden rounded-md bg-[#1F1A14]/5 dark:bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className="h-full rounded-md"
                            style={{ background: palette[i % palette.length] }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                What we track
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-1.5 text-sm text-[#1F1A14] dark:text-white/90">
                {o.tracking.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                Tools we use
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {o.tracking.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#D7EDDF] px-2.5 py-1 text-xs text-[#3F8D6D] dark:bg-[#7BB89C]/15 dark:text-[#7BB89C]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand experience */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl dark:text-white">
            {o.experience.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">
            {o.experience.sub}
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {o.experience.items.map((it) => (
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
        </div>

        {/* AI ideas */}
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-gradient-to-br from-[#1F1A14] to-[#3A322A] p-6 text-white sm:p-8 dark:border-white/10">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {o.ai.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-white/70 sm:text-base">{o.ai.sub}</p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {o.ai.items.map((it) => (
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

        {/* Performance share */}
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-2xl font-semibold tracking-tight text-[#1F1A14] sm:text-3xl dark:text-white">
            {o.performance.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">
            {o.performance.sub}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {o.performance.sources.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#F08762]/30 bg-[#FFE9DC] px-3 py-1.5 text-xs text-[#D26B49] dark:bg-[#F08762]/10 dark:text-[#F08762]"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#3A322A]/75 dark:text-white/70">{o.performance.fairness}</p>
        </div>

        {/* Minimum + guarantee */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-6 sm:p-7 dark:border-white/10 dark:bg-white/5">
            <h4 className="text-lg font-semibold text-[#1F1A14] dark:text-white">
              {o.minimum.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75">
              {o.minimum.body}
            </p>
          </div>
          <div className="rounded-3xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-6 sm:p-7 dark:border-white/10 dark:bg-white/5">
            <h4 className="text-lg font-semibold text-[#1F1A14] dark:text-white">
              {o.guarantee.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75">
              {o.guarantee.body}
            </p>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
              {o.guarantee.canGuaranteeLabel}
            </div>
            <ul className="mt-2 grid grid-cols-2 gap-1.5">
              {o.guarantee.canGuarantee.map((it) => (
                <li key={it} className="text-sm text-[#1F1A14] dark:text-white/90">
                  • {it}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-2xl bg-white p-3 text-xs text-[#3A322A]/75 dark:bg-white/5 dark:text-white/70">
              {o.guarantee.delivery}
            </p>
          </div>
        </div>

        {/* Conditions + exclusivity */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-7 dark:border-white/10 dark:bg-white/5">
            <h4 className="text-lg font-semibold text-[#1F1A14] dark:text-white">
              {o.conditions.title}
            </h4>
            <ul className="mt-3 grid gap-1.5">
              {o.conditions.items.map((it) => (
                <li key={it} className="text-sm text-[#1F1A14] dark:text-white/90">
                  • {it}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#3A322A]/65 dark:text-white/55">{o.conditions.extras}</p>
          </div>
          <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-7 dark:border-white/10 dark:bg-white/5">
            <h4 className="text-lg font-semibold text-[#1F1A14] dark:text-white">
              {o.exclusivity.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/75">
              {o.exclusivity.body}
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <CTAButton optionKey="option3" />
        </div>
      </div>
    </SectionFrame>
  );
}
