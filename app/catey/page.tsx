"use client";

import { CateyHero } from "./_components/sections/Hero";
import { CateyOpportunity } from "./_components/sections/Opportunity";
import { CateyComparison } from "./_components/sections/Comparison";
import { CateyOption1 } from "./_components/sections/Option1";
import { CateyOption2 } from "./_components/sections/Option2";
import { CateyOption3 } from "./_components/sections/Option3";
import { CateyFaq } from "./_components/sections/Faq";
import { CateyFinalCta } from "./_components/sections/FinalCta";
import { CateyStickyMobileCta } from "./_components/sections/StickyMobileCta";

export default function CateyPage() {
  return (
    <>
      <CateyHero />
      <CateyOpportunity />
      <CateyComparison />
      <CateyOption1 />
      <CateyOption2 />
      <CateyOption3 />
      <CateyFaq />
      <CateyFinalCta />
      <CateyStickyMobileCta />
    </>
  );
}
