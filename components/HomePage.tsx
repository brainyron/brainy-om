"use client";
import { Hero } from "./Hero";
import { DashboardShowcase } from "./DashboardShowcase";
import { ProblemAgitation } from "./ProblemAgitation";
import { OmanContext } from "./OmanContext";
import { Work } from "./Work";
import { Proof } from "./Proof";
import { Process } from "./Process";
import { FinalCTA } from "./FinalCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <DashboardShowcase />
      <ProblemAgitation />
      <OmanContext />
      <Work />
      <Proof />
      <Process />
      <FinalCTA />
    </>
  );
}
