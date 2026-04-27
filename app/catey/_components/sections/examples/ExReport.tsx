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
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

const palette = ["#DA9552", "#764C24", "#F8E1AC", "#100E0B"];

export function ExReport({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option2.report;
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

  const reachData = o.chartLabels.weeks.map((w, i) => ({
    name: w,
    [o.chartLabels.reach]: [3200, 5400, 4900, 8200][i],
  }));
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
        className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="text-base font-semibold text-[#1F1A14] dark:text-white">{o.title}</div>
          <span className="rounded-full bg-[#FCD7C4] px-3 py-1 text-xs font-medium text-[#D26B49] dark:bg-[#F08762]/20 dark:text-[#F08762]">
            {t.common.sample}
          </span>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#1F1A14]/8 bg-[#FFF8F0] p-5 dark:border-white/8 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A322A]/60 dark:text-white/50">
              {o.chartTitles.reach}
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
                    dataKey={o.chartLabels.reach}
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
              {o.chartTitles.posted}
            </div>
            <div className="mt-3 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={postedData} margin={{ top: 16, right: 16, bottom: 24, left: 24 }}>
                  <CartesianGrid stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} reversed={isAr} />
                  <YAxis tick={{ fill: axisColor, fontSize: 11 }} tickLine={false} axisLine={false} orientation={isAr ? "right" : "left"} />
                  <Tooltip cursor={{ fill: "#DA9552", fillOpacity: 0.1 }} contentStyle={tooltipStyle} />
                  <Bar dataKey={o.chartLabels.posts} radius={[8, 8, 0, 0]}>
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
              {o.chartTitles.interest}
            </div>
            <div className="mt-3 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={interestData} dataKey="value" cx="50%" cy="50%" innerRadius={36} outerRadius={64} paddingAngle={3} stroke="none">
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
            {o.sectionsLabel}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {o.sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-sm font-semibold text-[#1F1A14] dark:text-white">{s.title}</div>
                <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </ExFrame>
  );
}
