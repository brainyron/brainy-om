"use client";

import { ExFrame } from "./ExFrame";
import { StoryShowcase, useCateyT } from "../shared";

export function ExStories({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  return (
    <ExFrame
      id="stories"
      index={index}
      scope="all"
      title={e.sections.stories.title}
      caption={e.sections.stories.caption}
      perOption={{
        content: e.perOption.stories.content,
        growth: e.perOption.stories.growth,
        growthPlus: e.perOption.stories.growthPlus,
      }}
    >
      <StoryShowcase
        title=""
        images={[
          { src: "/catey/stories/story-sets-01.jpg", label: isAr ? "مجموعة ستوري عناية" : "Care story set" },
          { src: "/catey/stories/story-sets-02.jpg", label: isAr ? "مجموعة ستوري منتج" : "Product story set" },
        ]}
      />
    </ExFrame>
  );
}
