"use client";

import { ExFrame } from "./ExFrame";
import { PhotoGrid, useCateyT } from "../shared";

export function ExPhotos({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  // Show all 7 photos via Option 2's full label list.
  const items = t.option2.photos.items;
  return (
    <ExFrame
      id="photos"
      index={index}
      scope="all"
      title={e.sections.photos.title}
      caption={e.sections.photos.caption}
      perOption={{
        content: e.perOption.photos.content,
        growth: e.perOption.photos.growth,
        growthPlus: e.perOption.photos.growthPlus,
      }}
    >
      <PhotoGrid title="" items={items} />
    </ExFrame>
  );
}
