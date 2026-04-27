"use client";

import { ExFrame } from "./ExFrame";
import { StoryGrid, useCateyT } from "../shared";

export function ExStoryTypes({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  return (
    <ExFrame
      id="story-types"
      index={index}
      scope="growthAndPlus"
      title={e.sections.storyTypes.title}
      caption={e.sections.storyTypes.caption}
    >
      <StoryGrid title="" items={t.option2.stories.items} />
    </ExFrame>
  );
}
