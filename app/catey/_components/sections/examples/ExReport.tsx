"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FileText, Calendar } from "lucide-react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

// Monthly Report is intentionally styled to read as a polished print-friendly
// summary, not a live dashboard. Compared to ExTracking it uses:
//   - a paper-card surface with a "Brainy report" letterhead
//   - a horizontal sparkline-style reach trend (not a big area chart)
//   - vertical bars with rounded tops for posted-by-type
//   - a donut for content interest
//   - summary highlight tiles instead of KPI tiles with deltas
// Color palette also leans on cream/coffee while Tracking leans on tan/coral.

const palette = ["#DA9552", "#764C24", "#F8E1AC", "#100E0B"];

export function ExReport({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option2.report;
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

  const reachData = o.chartLabels.weeks.map((w, i) => ({
    name: w,
    value: [3200, 5400, 4900, 8200][i],
  }));
  const reachMax = Math.max(...reachData.map((d) => d.value));
  const reachTotal = reachData.reduce((sum, d) => sum + d.value, 0);
  const postedData = o.chartLabels.posted.map((p, i) => ({
    name: p,
    [o.chartLabels.posts]: [8, 10, 10][i],
  }));
  const interestData = o.chartLabels.interest.map((p, i) => ({
    name: p,
    value: [42, 28, 18, 12][i],
  }));

  return (
    <ExFrame
      id="report"
      index={index}
      scope="growthAndPlus"
      title={e.sections.report.title}
      caption={e.sections.report.caption}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-[#1F1A14]/10 bg-[#FFFCF6] shadow-[0_30px_80px_-40px_rgba(31,26,20,0.25)] dark:border-white/10 dark:bg-[#171310]"
      >
        {/* Letterhead band, makes this read like a printable PDF page */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1F1A14]/10 bg-white/70 px-6 py-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1F1A14] text-white dark:bg-white/15">
              <FileText className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3A322A]/55 dark:text-white/45">
                {isAr ? "تقرير من Brainy" : "Brainy report"}
              </div>
              <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{o.title}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#1F1A14]/10 bg-white px-2.5 py-1 text-[11px] text-[#3A322A]/70 sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-white/60">
              <Calendar className="h-3 w-3" strokeWidth={2} />
              {isAr ? "شهر العينة" : "Sample month"}
            </span>
            <span className="rounded-full bg-[#FCD7C4] px-3 py-1 text-xs font-medium text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
              {t.common.sample}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Highlight tiles, no deltas, just final-state numbers */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#1F1A14]/8 bg-white p-4 dark:border-white/10 dark:bg-white/5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A322A]/55 dark:text-white/45">
                {isAr ? "إجمالي الوصول" : "Total reach"}
              </div>
              <div className="mt-1 text-[22px] font-semibold tracking-tight text-[#1F1A14] dark:text-white">
                {reachTotal.toLocaleString()}
              </div>
            </div>
            <div className="rounded-2xl border border-[#1F1A14]/8 bg-white p-4 dark:border-white/10 dark:bg-white/5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A322A]/55 dark:text-white/45">
                {isAr ? "منشورات هذا الشهر" : "Posts this month"}
              </div>
              <div className="mt-1 text-[22px] font-semibold tracking-tight text-[#1F1A14] dark:text-white">
                {postedData.reduce((s, d) => s + (d[o.chartLabels.posts] as number), 0)}
              </div>
            </div>
            <div className="rounded-2xl border border-[#1F1A14]/8 bg-white p-4 dark:border-white/10 dark:bg-white/5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A322A]/55 dark:text-white/45">
                {isAr ? "أعلى اهتمام" : "Top interest"}
              </div>
              <div className="mt-1 truncate text-[22px] font-semibold tracking-tight text-[#1F1A14] dark:text-white">
                {interestData[0].name}
              </div>
            </div>
          </div>

          {/* Reach trend rendered as a simple stepped bar sparkline (one tile per week)
              so it visually contrasts with the tracking dashboard's continuous area chart. */}
          <div className="mt-5 rounded-2xl border border-[#1F1A14]/8 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.chartTitles.reach}
              </div>
              <div className="font-mono text-[11px] tabular-nums text-[#3A322A]/55 dark:text-white/45">
                {reachData.length} {isAr ? "أسابيع" : "weeks"}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {reachData.map((d, i) => {
                const pct = (d.value / reachMax) * 100;
                return (
                  <div key={d.name} className="flex flex-col items-center gap-2">
                    <div className="relative flex h-32 w-full items-end justify-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        className="w-full rounded-md"
                        style={{ background: palette[i % palette.length], minHeight: 4 }}
                      />
                    </div>
                    <div className="font-mono text-[11px] font-semibold tabular-nums text-[#1F1A14] dark:text-white">
                      {d.value.toLocaleString()}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#3A322A]/55 dark:text-white/45">
                      {d.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Two charts side by side: vertical bars + donut */}
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-[#1F1A14]/8 bg-white p-5 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.chartTitles.posted}
              </div>
              <div className="mt-4 h-52 min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={postedData} margin={{ top: 8, right: 12, bottom: 8, left: 0 }} barCategoryGap="30%">
                    <CartesianGrid stroke={gridStroke} vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: axisColor, fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      reversed={isAr}
                      interval={0}
                      height={26}
                    />
                    <YAxis
                      tick={{ fill: axisColor, fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      orientation={isAr ? "right" : "left"}
                      width={32}
                    />
                    <Tooltip cursor={{ fill: "#DA9552", fillOpacity: 0.08 }} contentStyle={tooltipStyle} />
                    <Bar dataKey={o.chartLabels.posts} radius={[10, 10, 2, 2]}>
                      {postedData.map((_, i) => (
                        <Cell key={i} fill={palette[i % palette.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl border border-[#1F1A14]/8 bg-white p-5 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
                {o.chartTitles.interest}
              </div>
              <div className="mt-2 grid grid-cols-[140px_1fr] items-center gap-3">
                <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={interestData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={42}
                        outerRadius={68}
                        paddingAngle={2}
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
                <ul className="space-y-1.5 text-[12px]">
                  {interestData.map((d, i) => (
                    <li
                      key={d.name}
                      className="flex items-center justify-between gap-2 text-[#3A322A]/85 dark:text-white/75"
                    >
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: palette[i % palette.length] }}
                        />
                        {d.name}
                      </span>
                      <span className="font-mono font-semibold tabular-nums text-[#1F1A14] dark:text-white">
                        {d.value}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {o.sectionsLabel}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {o.sections.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#1F1A14]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{s.title}</div>
                  <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ExFrame>
  );
}
