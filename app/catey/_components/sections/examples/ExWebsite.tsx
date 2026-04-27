"use client";

import { useEffect, useState } from "react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

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

export function ExWebsite({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option3.website;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ExFrame
      id="website"
      index={index}
      scope="plusOnly"
      title={e.sections.website.title}
      caption={e.sections.website.caption}
    >
      <BrowserFrame url={o.previewUrl} label={o.previewLabel}>
        <div className="relative h-[440px] sm:h-[560px] lg:h-[640px]">
          {mounted ? (
            <iframe
              src={`/catey/preview/website?lang=${isAr ? "ar" : "en"}`}
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

      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {o.improvements.map((i) => (
          <li
            key={i}
            className="rounded-2xl border border-[#1F1A14]/10 bg-white p-3 text-sm text-[#1F1A14] dark:border-white/10 dark:bg-white/5 dark:text-white/90"
          >
            <span className="me-2 text-[#F08762]">•</span>
            {i}
          </li>
        ))}
      </ul>
    </ExFrame>
  );
}
