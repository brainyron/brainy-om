"use client";

import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";
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

  // On mobile, the iframe traps the page scroll once a finger lands inside it.
  // Default state: iframe receives no pointer events, so vertical swipes bubble
  // up and the page keeps scrolling. The user explicitly taps "Try it" to
  // engage the preview, taps "Done" (or anywhere outside) to release it.
  const [interactive, setInteractive] = useState(false);

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
            <>
              <iframe
                src="/catey/preview/website"
                title="Catey website preview"
                className={`h-full w-full border-0 transition-opacity ${
                  interactive ? "pointer-events-auto" : "pointer-events-none lg:pointer-events-auto"
                }`}
                loading="lazy"
              />
              {/* Mobile/tablet overlay. Two states, no nested
                  pointer-events trickery: when not interactive the whole
                  iframe is covered by a button overlay so swipes pass through
                  to the page; once tapped, the overlay collapses to a small
                  exit pill and the iframe is fully scrollable. lg+ skips the
                  overlay entirely. */}
              {!interactive ? (
                <button
                  type="button"
                  onClick={() => setInteractive(true)}
                  className="absolute inset-0 z-10 flex items-end justify-center pb-4 lg:hidden"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#1F1A14] px-4 py-2 text-[12px] font-semibold text-white shadow-lg shadow-[#1F1A14]/30">
                    <MousePointer2 className="h-3.5 w-3.5" strokeWidth={2.4} />
                    {isAr ? "اضغط للتفاعل" : "Tap to interact"}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setInteractive(false)}
                  className="absolute bottom-4 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1F1A14] px-4 py-2 text-[12px] font-semibold text-white opacity-90 shadow-lg shadow-[#1F1A14]/30 lg:hidden"
                >
                  <MousePointer2 className="h-3.5 w-3.5" strokeWidth={2.4} />
                  {isAr ? "اضغط للخروج" : "Tap to exit"}
                </button>
              )}
            </>
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
