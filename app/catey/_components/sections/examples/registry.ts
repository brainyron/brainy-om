// Inclusion model for the Examples timeline.
// "all"            -> Content + Growth + Growth+
// "growthAndPlus"  -> Growth + Growth+
// "plusOnly"       -> Growth+
export type Inclusion = "all" | "growthAndPlus" | "plusOnly";

export type ExampleId =
  | "reels"
  | "stories"
  | "photos"
  | "captions"
  | "monthly-plan"
  | "story-types"
  | "campaigns"
  | "vet"
  | "giveaways"
  | "report"
  | "pumo"
  | "brand"
  | "website"
  | "tracking"
  | "experience"
  | "ai"
  | "performance"
  | "minimum";

export type ExampleEntry = {
  id: ExampleId;
  scope: Inclusion;
};

export const EXAMPLES: ExampleEntry[] = [
  { id: "reels", scope: "all" },
  { id: "stories", scope: "all" },
  { id: "photos", scope: "all" },
  { id: "captions", scope: "all" },
  { id: "monthly-plan", scope: "all" },
  { id: "story-types", scope: "all" },
  { id: "campaigns", scope: "growthAndPlus" },
  { id: "vet", scope: "growthAndPlus" },
  { id: "giveaways", scope: "growthAndPlus" },
  { id: "report", scope: "growthAndPlus" },
  { id: "pumo", scope: "growthAndPlus" },
  { id: "brand", scope: "plusOnly" },
  { id: "website", scope: "plusOnly" },
  { id: "tracking", scope: "plusOnly" },
  { id: "experience", scope: "plusOnly" },
  { id: "ai", scope: "plusOnly" },
  { id: "performance", scope: "plusOnly" },
  { id: "minimum", scope: "plusOnly" },
];
