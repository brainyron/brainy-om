"use client";

import { ExFrame } from "./ExFrame";
import { QuoteCards, useCateyT } from "../shared";

export function ExCaptions({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  return (
    <ExFrame
      id="captions"
      index={index}
      scope="all"
      title={e.sections.captions.title}
      caption={e.sections.captions.caption}
    >
      <QuoteCards title="" items={t.option1.captions.items} />
    </ExFrame>
  );
}
