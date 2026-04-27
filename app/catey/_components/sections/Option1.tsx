"use client";

import { motion } from "motion/react";
import {
  SectionFrame,
  PriceBlock,
  IncludesGrid,
  ReelTilesGrid,
  StoryGrid,
  PhotoGrid,
  QuoteCards,
  WeeklyTimeline,
  CTAButton,
  useCateyT,
} from "./shared";
import { cateyConfig } from "../../../../translations/catey";

export function CateyOption1() {
  const { t } = useCateyT();
  const o = t.option1;

  return (
    <SectionFrame id="option-1" eyebrow={o.label} title={o.title} tagline={o.tagline} tone="white">
      <div className="space-y-12 sm:space-y-16">
        <PriceBlock
          primary={`${cateyConfig.prices.option1.monthly}`}
          primaryLabel={`${o.priceLabel} (${cateyConfig.prices.option1.currency})`}
        />
        <IncludesGrid title={t.common.includes} items={o.includesItems} />
        <ReelTilesGrid title={o.reels.title} sub={o.reels.sub} items={o.reels.items} reelLimit={3} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-5 dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D26B49]">
            Each reel includes
          </div>
          <div className="flex flex-wrap gap-2">
            {o.reels.included.map((i) => (
              <span
                key={i}
                className="rounded-full border border-[#1F1A14]/10 bg-white px-3 py-1.5 text-xs text-[#1F1A14] dark:border-white/10 dark:bg-white/10 dark:text-white/90"
              >
                {i}
              </span>
            ))}
          </div>
        </motion.div>

        <StoryGrid title={o.stories.title} sub={o.stories.sub} items={o.stories.items} />
        <PhotoGrid title={o.photos.title} sub={o.photos.sub} items={o.photos.items} />
        <QuoteCards title={o.captions.title} sub={o.captions.sub} items={o.captions.items} />
        <WeeklyTimeline title={o.plan.title} sub={o.plan.sub} weeks={o.plan.weeks} />
        <QuoteCards title={o.clinic.title} sub={o.clinic.sub} items={o.clinic.items} />

        <div className="flex justify-center pt-2">
          <CTAButton optionKey="option1" />
        </div>
      </div>
    </SectionFrame>
  );
}
