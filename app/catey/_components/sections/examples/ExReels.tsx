"use client";

import { ExFrame } from "./ExFrame";
import { ReelTilesGrid, useCateyT } from "../shared";

export function ExReels({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  // Use Option 2's reel set — it's the richest list of titles.
  const items = t.option2.reels.items;
  return (
    <ExFrame
      id="reels"
      index={index}
      scope="all"
      title={e.sections.reels.title}
      caption={e.sections.reels.caption}
      perOption={{
        content: e.perOption.reels.content,
        growth: e.perOption.reels.growth,
        growthPlus: e.perOption.reels.growthPlus,
      }}
    >
      <ReelTilesGrid title="" items={items} />
    </ExFrame>
  );
}
