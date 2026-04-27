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
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

const palette = ["#DA9552", "#764C24", "#F8E1AC", "#100E0B", "#F08762"];

export function ExTracking({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option3.tracking;
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

  const clicksData = o.chartLabels.weeks.map((w, i) => ({
    name: w,
    Clicks: [120, 180, 240, 320, 410, 530][i],
  }));
  const sourcesData = o.chartLabels.sources.map((s, i) => ({
    name: s,
    Messages: [240, 110, 175, 95][i],
  }));
  const funnelData = o.chartLabels.funnel.map((s, i) => ({
    name: s,
    value: [820, 410, 120][i],
  }));

  return (
    <ExFrame
      id="tracking"
      index={index}
      scope="plusOnly"
      title={e.sections.tracking.title}
      caption={e.sections.tracking.caption}
    >
      <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/5">
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
              {o.chartTitles.clicks}
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
              {o.chartTitles.sources}
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
              {o.chartTitles.funnel}
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
