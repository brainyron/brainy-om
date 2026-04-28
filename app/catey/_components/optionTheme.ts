// Per-plan color theme. Each plan gets a distinct accent so the user can
// trace any element back to the option it belongs to.
//
//   Option 1 (Content)    : warm neutral gray
//   Option 2 (Growth)     : Catey Blue (the brand-system blue)
//   Option 3 (Growth+)    : coral, the existing recommended color
//
// Surfaces that consume this: Comparison cards, Option1/2/3 sections,
// ScopeIndicator pills, ExFrame scope labels, per-option chips.

export type OptionKey = "option1" | "option2" | "option3";

export type OptionTheme = {
  // raw hex values
  accent: string; // primary accent
  accentDeep: string; // darker variant for hover / text
  accentSoft: string; // tint for badge backgrounds (light mode)
  accentSoftText: string; // text color on accentSoft

  // tailwind class fragments
  eyebrow: string; // small label / eyebrow text
  pill: string; // rounded badge: bg + border + text
  pillHover: string; // hover variant for pill
  ring: string; // ring on cards
  border: string; // card border
  badgeBg: string; // bg-[hex] solid for "recommended" style badge
  badgeText: string;
  buttonBg: string; // primary button background
  buttonHoverBg: string;
  buttonText: string;
  ctaBg: string; // section CTA solid (used for option3 today)
  iconChipBg: string; // small inline chip
  iconChipText: string;
  cardActiveOutline: string;
};

export const optionTheme: Record<OptionKey, OptionTheme> = {
  option1: {
    accent: "#7A7470",
    accentDeep: "#5C5752",
    accentSoft: "#E8E4DF",
    accentSoftText: "#5C5752",
    eyebrow: "text-[#5C5752] dark:text-[#B8B2AC]",
    pill: "border-[#7A7470]/40 bg-[#E8E4DF] text-[#5C5752] dark:border-[#7A7470]/40 dark:bg-[#7A7470]/15 dark:text-[#D8D2CB]",
    pillHover: "hover:bg-[#DAD4CD] dark:hover:bg-[#7A7470]/25",
    ring: "ring-[#7A7470]/25",
    border: "border-[#7A7470]/20 dark:border-[#7A7470]/30",
    badgeBg: "bg-[#7A7470]",
    badgeText: "text-white",
    buttonBg: "bg-[#1F1A14]",
    buttonHoverBg: "hover:bg-[#5C5752]",
    buttonText: "text-white",
    ctaBg: "bg-[#5C5752]",
    iconChipBg: "bg-[#E8E4DF] dark:bg-[#7A7470]/25",
    iconChipText: "text-[#5C5752] dark:text-[#D8D2CB]",
    cardActiveOutline: "ring-1 ring-[#7A7470]/30 border-[#7A7470]/30",
  },
  option2: {
    accent: "#2D6BA1",
    accentDeep: "#1F4F7E",
    accentSoft: "#DCEAF5",
    accentSoftText: "#2D6BA1",
    eyebrow: "text-[#2D6BA1] dark:text-[#7DB6DC]",
    pill: "border-[#2D6BA1]/40 bg-[#DCEAF5] text-[#2D6BA1] dark:border-[#2D6BA1]/40 dark:bg-[#2D6BA1]/15 dark:text-[#9CC8E8]",
    pillHover: "hover:bg-[#C8DEEF] dark:hover:bg-[#2D6BA1]/25",
    ring: "ring-[#2D6BA1]/25",
    border: "border-[#2D6BA1]/20 dark:border-[#2D6BA1]/30",
    badgeBg: "bg-[#2D6BA1]",
    badgeText: "text-white",
    buttonBg: "bg-[#2D6BA1]",
    buttonHoverBg: "hover:bg-[#1F4F7E]",
    buttonText: "text-white",
    ctaBg: "bg-[#2D6BA1]",
    iconChipBg: "bg-[#DCEAF5] dark:bg-[#2D6BA1]/25",
    iconChipText: "text-[#2D6BA1] dark:text-[#9CC8E8]",
    cardActiveOutline: "ring-1 ring-[#2D6BA1]/35 border-[#2D6BA1]/35",
  },
  option3: {
    accent: "#F08762",
    accentDeep: "#D26B49",
    accentSoft: "#FFE9DC",
    accentSoftText: "#D26B49",
    eyebrow: "text-[#D26B49] dark:text-[#F08762]",
    pill: "border-[#F08762]/40 bg-[#FFE9DC] text-[#D26B49] dark:border-[#F08762]/40 dark:bg-[#F08762]/15 dark:text-[#F08762]",
    pillHover: "hover:bg-[#FCD7C4] dark:hover:bg-[#F08762]/25",
    ring: "ring-[#F08762]/30",
    border: "border-[#F08762]/30 dark:border-[#F08762]/30",
    badgeBg: "bg-[#F08762]",
    badgeText: "text-white",
    buttonBg: "bg-[#F08762]",
    buttonHoverBg: "hover:bg-[#D26B49]",
    buttonText: "text-white",
    ctaBg: "bg-[#F08762]",
    iconChipBg: "bg-[#FCD7C4] dark:bg-[#F08762]/20",
    iconChipText: "text-[#D26B49] dark:text-[#F08762]",
    cardActiveOutline: "ring-1 ring-[#F08762]/40 border-[#F08762]/40",
  },
};

// Map between Inclusion scope (used in ExFrame / registry) and the option keys
// that scope corresponds to. "all" includes every plan, "growthAndPlus" excludes
// option1, "plusOnly" is option3 only.
export const scopeOrder: ("option1" | "option2" | "option3")[] = [
  "option1",
  "option2",
  "option3",
];

export function optionsForScope(
  scope: "all" | "growthAndPlus" | "plusOnly",
): OptionKey[] {
  if (scope === "all") return ["option1", "option2", "option3"];
  if (scope === "growthAndPlus") return ["option2", "option3"];
  return ["option3"];
}

// Card id (used in Comparison) → option key
export function optionKeyFromCardId(id: string): OptionKey {
  if (id === "option-1") return "option1";
  if (id === "option-2") return "option2";
  return "option3";
}
