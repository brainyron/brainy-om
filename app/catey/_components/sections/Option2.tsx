"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  SectionFrame,
  PriceBlock,
  IncludesGrid,
  ReelTilesGrid,
  StoryGrid,
  PhotoGrid,
  StoryShowcase,
  GiveawayShowcase,
  CTAButton,
  useCateyT,
} from "./shared";
import { cateyConfig } from "../../../../translations/catey";

// Catey-aligned palette for chart series
const palette = ["#DA9552", "#764C24", "#F8E1AC", "#100E0B"];

export function CateyOption2() {
  const { t, isAr } = useCateyT();
  const o = t.option2;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
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

  const reachData = o.report.chartLabels.weeks.map((w, i) => ({
    name: w,
    [o.report.chartLabels.reach]: [3200, 5400, 4900, 8200][i],
  }));
  const postedData = o.report.chartLabels.posted.map((p, i) => ({
    name: p,
    [o.report.chartLabels.posts]: [8, 10, 10][i],
  }));
  const interestData = o.report.chartLabels.interest.map((p, i) => ({
    name: p,
    value: [42, 28, 18, 12][i],
  }));

  return (
    <SectionFrame id="option-2" eyebrow={o.label} title={o.title} tagline={o.tagline} tone="cream">
      <div className="space-y-12 sm:space-y-16">
        <PriceBlock
          primary={`${cateyConfig.prices.option2.monthly}`}
          primaryLabel={`${o.priceLabel} (${cateyConfig.prices.option2.currency})`}
          strikethrough={`${cateyConfig.prices.option2.monthlyOriginal}`}
          note={o.strikethroughNote}
        />
        <IncludesGrid title={t.common.includes} items={o.includesItems} />
        <ReelTilesGrid title={o.reels.title} sub={o.reels.sub} items={o.reels.items} />
        <StoryGrid title={o.stories.title} sub={o.stories.sub} items={o.stories.items} />
        <StoryShowcase
          title={isAr ? "أمثلة من ستوري حقيقية" : "Real story examples"}
          sub={isAr ? "هذي أمثلة من ستوري سويناها لحسابات شبيهة." : "Examples of story sets we've produced for similar accounts."}
          images={[
            { src: "/catey/stories/story-sets-01.jpg", label: isAr ? "مجموعة ستوري عناية" : "Care story set" },
            { src: "/catey/stories/story-sets-02.jpg", label: isAr ? "مجموعة ستوري منتج" : "Product story set" },
          ]}
        />
        <PhotoGrid title={o.photos.title} items={o.photos.items} />

        {/* Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
        >
          <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
            {o.strategy.title}
          </h3>
          <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{o.strategy.sub}</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_2fr]">
            <div className="rounded-2xl bg-[#FFF8F0] p-5 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
                {o.strategy.themeLabel}
              </div>
              <div className="mt-2 text-2xl font-semibold text-[#1F1A14] dark:text-white">
                {o.strategy.theme}
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.strategy.focusLabel}
              </div>
              <ul className="mt-2 space-y-1.5">
                {o.strategy.focus.map((f) => (
                  <li key={f} className="text-sm text-[#1F1A14] dark:text-white/90">
                    • {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.strategy.pillarsLabel}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {o.strategy.pillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">
                      {p.title}
                    </div>
                    <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Campaigns */}
        <div>
          <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
            {o.campaigns.title}
          </h3>
          <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{o.campaigns.sub}</p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="mt-5 grid gap-4 lg:grid-cols-2"
          >
            {o.campaigns.items.map((c) => (
              <motion.div
                key={c.title}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-base font-semibold text-[#1F1A14] dark:text-white">
                  {c.title}
                </div>
                <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{c.desc}</div>
                <ul className="mt-4 space-y-1.5">
                  {c.includes.map((i) => (
                    <li key={i} className="text-sm text-[#1F1A14] dark:text-white/90">
                      • {i}
                    </li>
                  ))}
                </ul>
                {"promo" in c && c.promo ? (
                  <div className="mt-5 inline-flex items-center gap-3 rounded-xl border-2 border-dashed border-[#F08762] bg-[#FFE9DC] px-4 py-2.5 dark:border-[#F08762] dark:bg-[#F08762]/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D26B49]">
                      Promo
                    </span>
                    <span className="font-mono text-base font-bold tracking-wider text-[#1F1A14] dark:text-white">
                      {c.promo}
                    </span>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vet */}
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
            {o.vet.title}
          </h3>
          <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{o.vet.sub}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {o.vet.items.map((i) => (
              <span
                key={i}
                className="rounded-full bg-[#D7EDDF] px-3 py-1.5 text-sm text-[#3F8D6D] dark:bg-[#7BB89C]/15 dark:text-[#7BB89C]"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        {/* Giveaways */}
        <div>
          <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
            {o.giveaways.title}
          </h3>
          <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{o.giveaways.sub}</p>

          <div className="mt-6">
            <GiveawayShowcase
              title={isAr ? "أمثلة جوائز" : "Giveaway examples"}
              sub={isAr ? "أمثلة بصرية من حملات جوائز سابقة." : "Visual examples from past giveaway campaigns."}
              images={[
                { src: "/catey/giveaways/giveaway-01.jpg", label: isAr ? "حملة جائزة فيرال" : "Viral giveaway post" },
                { src: "/catey/giveaways/giveaway-ideas.jpg", label: isAr ? "أفكار جوائز" : "Giveaway ideas grid" },
              ]}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="mt-5 grid gap-4 lg:grid-cols-2"
          >
            {o.giveaways.items.map((g) => (
              <motion.div
                key={g.prompt}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">
                  {g.prompt}
                </div>
                <div className="mt-4 space-y-2.5">
                  {g.comments.map((c) => (
                    <div
                      key={c}
                      className="flex items-start gap-3 rounded-2xl bg-[#FFF8F0] p-3 dark:bg-white/5"
                    >
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
        </div>

        {/* Report dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
                {o.report.title}
              </h3>
              <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{o.report.sub}</p>
            </div>
            <span className="rounded-full bg-[#FCD7C4] px-3 py-1 text-xs font-medium text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
              {t.common.sample}
            </span>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.report.chartTitles.reach}
              </div>
              <div className="mt-3 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={reachData} margin={{ top: 16, right: 16, bottom: 24, left: 24 }}>
                    <CartesianGrid stroke={gridStroke} vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} reversed={isAr} />
                    <YAxis tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} orientation={isAr ? "right" : "left"} />
                    <Tooltip cursor={{ stroke: "#DA9552", strokeOpacity: 0.25 }} contentStyle={tooltipStyle} />
                    <Line
                      type="monotone"
                      dataKey={o.report.chartLabels.reach}
                      stroke="#DA9552"
                      strokeWidth={2.5}
                      dot={{ r: 4, fill: "#DA9552" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.report.chartTitles.posted}
              </div>
              <div className="mt-3 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={postedData} margin={{ top: 16, right: 16, bottom: 24, left: 24 }}>
                    <CartesianGrid stroke={gridStroke} vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} reversed={isAr} />
                    <YAxis tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} orientation={isAr ? "right" : "left"} />
                    <Tooltip cursor={{ fill: "#DA9552", fillOpacity: 0.1 }} contentStyle={tooltipStyle} />
                    <Bar dataKey={o.report.chartLabels.posts} radius={[8, 8, 0, 0]}>
                      {postedData.map((_, i) => (
                        <Cell key={i} fill={palette[i % palette.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.report.chartTitles.interest}
              </div>
              <div className="mt-3 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={interestData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={36}
                      outerRadius={64}
                      paddingAngle={3}
                      stroke="none"
                    >
                      {interestData.map((_, i) => (
                        <Cell key={i} fill={palette[i % palette.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                {interestData.map((d, i) => (
                  <span key={d.name} className="inline-flex items-center gap-1.5 text-[#3A322A]/80 dark:text-white/70">
                    <span className="h-2 w-2 rounded-full" style={{ background: palette[i % palette.length] }} />
                    {d.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {o.report.sectionsLabel}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {o.report.sections.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">
                    {s.title}
                  </div>
                  <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pumo lines */}
        <div className="rounded-3xl border border-[#1F1A14]/10 bg-gradient-to-br from-[#FFF8F0] to-[#FCD7C4] p-6 sm:p-8 dark:border-white/10 dark:from-white/5 dark:to-[#F08762]/10">
          <h3 className="text-lg font-semibold text-[#1F1A14] sm:text-xl dark:text-white">
            {o.pumo.title}
          </h3>
          <p className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{o.pumo.sub}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {o.pumo.lines.map((line) => (
              <span
                key={line}
                className="rounded-full border border-[#1F1A14]/15 bg-white px-3 py-1.5 text-sm text-[#1F1A14] shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white"
              >
                {line}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#3A322A]/80 dark:text-white/70">
            {o.pumo.why}
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <CTAButton optionKey="option2" />
        </div>
      </div>
    </SectionFrame>
  );
}
