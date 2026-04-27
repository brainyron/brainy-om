"use client";

import { ExFrame } from "./ExFrame";
import { WeeklyTimeline, useCateyT } from "../shared";

export function ExMonthlyPlan({ index }: { index: number }) {
  const { t } = useCateyT();
  const e = t.examples;
  return (
    <ExFrame
      id="monthly-plan"
      index={index}
      scope="all"
      title={e.sections.monthlyPlan.title}
      caption={e.sections.monthlyPlan.caption}
    >
      <WeeklyTimeline title="" weeks={t.option1.plan.weeks} />
    </ExFrame>
  );
}
