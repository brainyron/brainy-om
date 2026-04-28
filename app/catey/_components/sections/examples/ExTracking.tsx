"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUpRight, Activity, MousePointerClick, ScanLine, MessageCircle } from "lucide-react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

// Tracking gets a live-feel analytics look:
//   - KPI tiles with deltas at the top
//   - one big area chart for clicks-over-time
//   - horizontal source bars (stacked feel) instead of vertical bars
//   - the existing funnel block
// This intentionally differs from the monthly Report (small line + vertical bars + pie)
// so the user can tell at a glance that one is a live dashboard and the other
// is a polished month-end summary.

const sourcePalette = ["#DA9552", "#764C24", "#F8E1AC", "#100E0B"];

export function ExTracking({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option3.tracking;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
  const axisColor = isDark ? "rgba(229,229,229,0.7)" : "rgba(31,26,20,0.65)";
  const gridStroke = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const tooltipStyle = {
    borderRadius: 12,
    border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(31,26,20,0.1)"}`,
    background: isDark ? "#1F1A14" : "#fff",
    color: isDark ? "#fff" : "#1F1A14",
    fontSize: 12,
  } as const;

  const clicksData = o.chartLabels.weeks.map((w, i) => ({
    name: w,
    Clicks: [120, 180, 240, 320, 410, 530][i],
  }));
  const sourcesData = o.chartLabels.sources.map((s, i) => ({
    name: s,
    Messages: [240, 110, 175, 95][i],
  }));
  const sourcesTotal = sourcesData.reduce((sum, d) => sum + d.Messages, 0);
  const funnelData = o.chartLabels.funnel.map((s, i) => ({
    name: s,
    value: [820, 410, 120][i],
  }));

  // KPI tile content. Deltas are sample values , this is a tracking demo,
  // not the production dashboard.
  const kpis = [
    {
      label: isAr ? "نقرات" : "Clicks",
      value: "1,800",
      delta: "+18%",
      Icon: MousePointerClick,
      tone: "#DA9552",
    },
    {
      label: isAr ? "مسحات QR" : "QR scans",
      value: "412",
      delta: "+9%",
      Icon: ScanLine,
      tone: "#764C24",
    },
    {
      label: isAr ? "محادثات" : "Conversations",
      value: "238",
      delta: "+24%",
      Icon: MessageCircle,
      tone: "#F08762",
    },
  ];

  return (
    <ExFrame
      id="tracking"
      index={index}
      scope="plusOnly"
      title={e.sections.tracking.title}
      caption={e.sections.tracking.caption}
    >
      <div className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/5">
        {/* Header row: live indicator + sample badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F1A14] dark:text-white">
              {isAr ? "لوحة تتبع مباشرة" : "Live tracking dashboard"}
            </span>
          </div>
          <span className="rounded-full bg-[#FCD7C4] px-3 py-1 text-xs font-medium text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
            {t.common.sample}
          </span>
        </div>

        {/* KPI strip */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {kpis.map(({ label, value, delta, Icon, tone }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-4 dark:border-white/8 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl text-white"
                  style={{ background: tone }}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-[11px] font-semibold text-[#16A34A]">
                  <ArrowUpRight className="h-3 w-3" strokeWidth={2.4} />
                  {delta}
                </span>
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/55">
                {label}
              </div>
              <div className="mt-0.5 font-mono text-2xl font-semibold tabular-nums text-[#1F1A14] dark:text-white">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Main area chart: Campaign clicks over time, full width */}
        <div className="mt-5 min-w-0 rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              <Activity className="me-1.5 inline h-3.5 w-3.5 align-[-2px]" strokeWidth={2} />
              {o.chartTitles.clicks}
            </div>
            <div className="hidden gap-3 text-[11px] text-[#3A322A]/60 sm:flex dark:text-white/55">
              <span>{isAr ? "آخر 6 أسابيع" : "Last 6 weeks"}</span>
            </div>
          </div>
          <div className="mt-4 h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={clicksData} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
                <defs>
                  <linearGradient id="trackingClicksFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DA9552" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#DA9552" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={gridStroke} vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: axisColor, fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  reversed={isAr}
                  interval={0}
                  height={28}
                />
                <YAxis
                  tick={{ fill: axisColor, fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  orientation={isAr ? "right" : "left"}
                  width={36}
                />
                <Tooltip cursor={{ stroke: "#DA9552", strokeOpacity: 0.25 }} contentStyle={tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="Clicks"
                  stroke="#DA9552"
                  strokeWidth={2.5}
                  fill="url(#trackingClicksFill)"
                  dot={{ r: 3.5, fill: "#DA9552", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Two-column row below the area chart: horizontal source bars + funnel */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="min-w-0 rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.chartTitles.sources}
              </div>
              <div className="font-mono text-[11px] tabular-nums text-[#3A322A]/60 dark:text-white/55">
                {sourcesTotal} {isAr ? "إجمالي" : "total"}
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {sourcesData.map((d, i) => {
                const pct = (d.Messages / sourcesTotal) * 100;
                return (
                  <div key={d.name}>
                    <div className="mb-1 flex items-center justify-between text-xs text-[#3A322A]/85 dark:text-white/75">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: sourcePalette[i % sourcePalette.length] }}
                        />
                        {d.name}
                      </span>
                      <span className="font-mono tabular-nums text-[#1F1A14] dark:text-white">
                        {d.Messages}
                        <span className="ms-1.5 text-[#3A322A]/45 dark:text-white/40">
                          {pct.toFixed(0)}%
                        </span>
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#1F1A14]/5 dark:bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.08 }}
                        className="h-full rounded-full"
                        style={{ background: sourcePalette[i % sourcePalette.length] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {o.chartTitles.funnel}
            </div>
            <div className="mt-4 space-y-3">
              {funnelData.map((d, i) => {
                const max = funnelData[0].value;
                const pct = (d.value / max) * 100;
                const conv = i === 0 ? 100 : Math.round((d.value / funnelData[i - 1].value) * 100);
                return (
                  <div key={d.name}>
                    <div className="mb-1 flex justify-between text-xs text-[#3A322A]/80 dark:text-white/70">
                      <span>{d.name}</span>
                      <span className="inline-flex items-baseline gap-2 font-mono tabular-nums">
                        <span className="font-semibold text-[#1F1A14] dark:text-white">
                          {d.value}
                        </span>
                        {i > 0 ? (
                          <span className="text-[10px] text-[#3A322A]/45 dark:text-white/40">
                            {conv}%
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <div className="h-7 w-full overflow-hidden rounded-md bg-[#1F1A14]/5 dark:bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        className="h-full rounded-md"
                        style={{ background: sourcePalette[i % sourcePalette.length] }}
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
            {o.items.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
            Tools we use
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {o.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-[#D7EDDF] px-2.5 py-1 text-xs text-[#3F8D6D] dark:bg-[#7BB89C]/15 dark:text-[#7BB89C]">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ExFrame>
  );
}
