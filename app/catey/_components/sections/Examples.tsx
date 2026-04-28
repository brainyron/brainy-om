"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ScopeIndicator } from "./ScopeIndicator";
import { useCateyT } from "./shared";
import { EXAMPLES, type ExampleId, type Inclusion } from "./examples/registry";

import { ExReels } from "./examples/ExReels";
import { ExStories } from "./examples/ExStories";
import { ExPhotos } from "./examples/ExPhotos";
import { ExCaptions } from "./examples/ExCaptions";
import { ExMonthlyPlan } from "./examples/ExMonthlyPlan";
import { ExStoryTypes } from "./examples/ExStoryTypes";
import { ExCampaigns } from "./examples/ExCampaigns";
import { ExVet } from "./examples/ExVet";
import { ExGiveaways } from "./examples/ExGiveaways";
import { ExReport } from "./examples/ExReport";
import { ExPumo } from "./examples/ExPumo";
import { ExBrandFoundation } from "./examples/ExBrandFoundation";
import { ExWebsite } from "./examples/ExWebsite";
import { ExTracking } from "./examples/ExTracking";
import { ExExperience } from "./examples/ExExperience";
import { ExAI } from "./examples/ExAI";
import { ExPerformance } from "./examples/ExPerformance";
import { ExMinimum } from "./examples/ExMinimum";

type ExComponent = (props: { index: number }) => React.ReactElement;

const COMPONENTS: Record<ExampleId, ExComponent> = {
  reels: ExReels,
  stories: ExStories,
  photos: ExPhotos,
  captions: ExCaptions,
  "monthly-plan": ExMonthlyPlan,
  "story-types": ExStoryTypes,
  campaigns: ExCampaigns,
  vet: ExVet,
  giveaways: ExGiveaways,
  report: ExReport,
  pumo: ExPumo,
  brand: ExBrandFoundation,
  website: ExWebsite,
  tracking: ExTracking,
  experience: ExExperience,
  ai: ExAI,
  performance: ExPerformance,
  minimum: ExMinimum,
};

export function CateyExamples() {
  const { t } = useCateyT();
  const e = t.examples;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<{ id: ExampleId; scope: Inclusion; index: number } | null>(
    () => ({ id: EXAMPLES[0].id, scope: EXAMPLES[0].scope, index: 0 }),
  );

  const titleFor = useCallback(
    (id: ExampleId) => {
      const map: Record<ExampleId, string> = {
        reels: e.sections.reels.title,
        stories: e.sections.stories.title,
        photos: e.sections.photos.title,
        captions: e.sections.captions.title,
        "monthly-plan": e.sections.monthlyPlan.title,
        "story-types": e.sections.storyTypes.title,
        campaigns: e.sections.campaigns.title,
        vet: e.sections.vet.title,
        giveaways: e.sections.giveaways.title,
        report: e.sections.report.title,
        pumo: e.sections.pumo.title,
        brand: e.sections.brand.title,
        website: e.sections.website.title,
        tracking: e.sections.tracking.title,
        experience: e.sections.experience.title,
        ai: e.sections.ai.title,
        performance: e.sections.performance.title,
        minimum: e.sections.minimum.title,
      };
      return map[id];
    },
    [e],
  );

  // IntersectionObserver: pick the section closest to the top of the viewport.
  useEffect(() => {
    if (!wrapperRef.current) return;
    const sections = Array.from(
      wrapperRef.current.querySelectorAll<HTMLElement>("section[data-example-id]"),
    );

    if (sections.length === 0) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Reference line: just below the sticky pill bar.
        const ref = (window.innerHeight || 0) * 0.25;
        let best: { el: HTMLElement; dist: number } | null = null;
        for (const el of sections) {
          const rect = el.getBoundingClientRect();
          // Distance: 0 if ref line is inside the section, otherwise distance to nearest edge.
          if (rect.top <= ref && rect.bottom >= ref) {
            best = { el, dist: 0 };
            break;
          }
          const dist = rect.top > ref ? rect.top - ref : ref - rect.bottom;
          if (!best || dist < best.dist) best = { el, dist };
        }
        if (!best) return;
        const id = best.el.dataset.exampleId as ExampleId | undefined;
        const scope = best.el.dataset.exampleScope as Inclusion | undefined;
        if (!id || !scope) return;
        const idx = EXAMPLES.findIndex((x) => x.id === id);
        if (idx < 0) return;
        setActive((prev) => {
          if (prev && prev.id === id) return prev;
          return { id, scope, index: idx };
        });
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const total = EXAMPLES.length;
  const indicator = useMemo(() => {
    if (!active) return null;
    return (
      <ScopeIndicator
        scope={active.scope}
        activeTitle={titleFor(active.id)}
        activeIndex={active.index + 1}
        total={total}
      />
    );
  }, [active, total, titleFor]);

  return (
    <section
      id="examples"
      ref={wrapperRef}
      className="relative scroll-mt-20 bg-white dark:bg-[#1A1612]"
    >
      {/* Heading */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-24 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D26B49]">
            {e.eyebrow}
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#1F1A14] sm:text-4xl md:text-5xl dark:text-white">
            {e.title}
          </h2>
          <p className="mt-4 text-base text-[#3A322A]/75 sm:text-lg md:text-xl dark:text-white/70">
            {e.sub}
          </p>
        </motion.div>
      </div>

      {/* Sticky scope indicator, pinned only inside this wrapper */}
      {indicator}

      {/* Sub-sections */}
      <div className="pb-8">
        {EXAMPLES.map((entry, i) => {
          const C = COMPONENTS[entry.id];
          return <C key={entry.id} index={i} />;
        })}
      </div>
    </section>
  );
}
