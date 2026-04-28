"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

export function ExPerformance({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option3.performance;

  // Worked example so the 12% share stops being abstract: an actual Pumo
  // campaign with a promo code drives revenue, that revenue is what the share
  // is calculated on. Numbers chosen for clarity, not as a forecast.
  const counts: Array<{ tracked: boolean; label: string }> = [
    {
      tracked: true,
      label: isAr
        ? "زبون يستخدم كود PUMO10 على الموقع، يدفع 50 ريال."
        : "Customer uses PUMO10 at checkout. Pays 50 OMR.",
    },
    {
      tracked: true,
      label: isAr
        ? "زبون يضغط رابط حملة من إنستاجرام ويكمل الطلب على واتساب."
        : "Customer taps a campaign link from Instagram, completes the order on WhatsApp.",
    },
    {
      tracked: true,
      label: isAr
        ? "زبون يحجز موعد للعيادة عبر صفحة الحجز اللي صممناها."
        : "Customer books a clinic visit via the landing page we built.",
    },
    {
      tracked: false,
      label: isAr
        ? "زبون يدخل المتجر مباشرة بدون رابط أو كود."
        : "Walk-in shopper, no campaign code or link.",
    },
    {
      tracked: false,
      label: isAr
        ? "زبون قديم يطلب عبر واتساب بدون مرجع لحملة."
        : "Existing customer messages WhatsApp directly, no campaign reference.",
    },
  ];

  return (
    <ExFrame
      id="performance"
      index={index}
      scope="plusOnly"
      title={e.sections.performance.title}
      caption={e.sections.performance.caption}
    >
      <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
        <div className="text-base font-semibold text-[#1F1A14] dark:text-white">{o.title}</div>
        <p className="mt-2 max-w-3xl text-sm text-[#3A322A]/75 sm:text-base dark:text-white/70">
          {o.sub}
        </p>

        {/* Worked numeric example */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-6 overflow-hidden rounded-2xl border border-[#F08762]/30 bg-[#FFE9DC]/55 dark:border-[#F08762]/30 dark:bg-[#F08762]/10"
        >
          <div className="grid items-stretch gap-0 sm:grid-cols-[1.1fr_auto_1fr]">
            <div className="p-5 sm:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D26B49] dark:text-[#F08762]">
                {isAr ? "مثال على الشهر" : "Example month"}
              </div>
              <div className="mt-1.5 text-sm text-[#1F1A14] dark:text-white/85">
                {isAr
                  ? "حملات Brainy تحقق إيراد متتبَّع قدره"
                  : "Brainy campaigns drive tracked revenue of"}
              </div>
              <div className="mt-2 font-mono text-[28px] font-bold tracking-tight text-[#1F1A14] tabular-nums sm:text-[32px] dark:text-white">
                10,000 <span className="text-[14px] font-medium text-[#3A322A]/70 dark:text-white/60">OMR</span>
              </div>
              <div className="mt-1 text-[11px] text-[#3A322A]/65 dark:text-white/55">
                {isAr ? "خلال 30 يوم من الحملات والروابط والعيادة" : "Across promo codes, links, and clinic bookings"}
              </div>
            </div>
            <div className="hidden items-center justify-center px-3 sm:flex">
              <ArrowRight className="h-5 w-5 text-[#D26B49] dark:text-[#F08762]" strokeWidth={2.4} />
            </div>
            <div className="border-t border-[#F08762]/20 bg-white/60 p-5 sm:border-l sm:border-t-0 sm:p-6 dark:border-[#F08762]/20 dark:bg-white/5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D26B49] dark:text-[#F08762]">
                {isAr ? "حصة الأداء 12%" : "12% performance share"}
              </div>
              <div className="mt-1.5 text-sm text-[#1F1A14] dark:text-white/85">
                {isAr ? "Brainy تستلم" : "Brainy receives"}
              </div>
              <div className="mt-2 font-mono text-[28px] font-bold tracking-tight text-[#1F1A14] tabular-nums sm:text-[32px] dark:text-white">
                1,200 <span className="text-[14px] font-medium text-[#3A322A]/70 dark:text-white/60">OMR</span>
              </div>
              <div className="mt-1 text-[11px] text-[#3A322A]/65 dark:text-white/55">
                {isAr ? "زيادة على رسوم الشراكة الشهرية" : "On top of the monthly partnership fee"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What counts vs what doesn't, visualized */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#1A8754]/25 bg-[#1A8754]/[0.04] p-4 dark:border-[#1A8754]/40 dark:bg-[#1A8754]/10">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1A8754]">
              <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.4} />
              {isAr ? "محسوب" : "Counts toward the share"}
            </div>
            <ul className="mt-3 space-y-2">
              {counts
                .filter((c) => c.tracked)
                .map((c) => (
                  <li
                    key={c.label}
                    className="text-[13px] leading-snug text-[#1F1A14] dark:text-white/85"
                  >
                    {c.label}
                  </li>
                ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#C0392B]/25 bg-[#C0392B]/[0.04] p-4 dark:border-[#C0392B]/40 dark:bg-[#C0392B]/10">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C0392B]">
              <XCircle className="h-3.5 w-3.5" strokeWidth={2.4} />
              {isAr ? "غير محسوب" : "Doesn't count"}
            </div>
            <ul className="mt-3 space-y-2">
              {counts
                .filter((c) => !c.tracked)
                .map((c) => (
                  <li
                    key={c.label}
                    className="text-[13px] leading-snug text-[#1F1A14] dark:text-white/85"
                  >
                    {c.label}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Tracking sources, the actual mechanisms we use */}
        <div className="mt-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A322A]/60 dark:text-white/55">
            {isAr ? "آليات التتبّع" : "How we track"}
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {o.sources.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#F08762]/30 bg-[#FFE9DC] px-3 py-1.5 text-xs text-[#D26B49] dark:bg-[#F08762]/10 dark:text-[#F08762]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-[#3A322A]/75 dark:text-white/70">
          {o.fairness}
        </p>
      </div>
    </ExFrame>
  );
}
