"use client"

import { useShallow } from "zustand/react/shallow"

import { AboutFinalCta } from "./components/about-final-cta"
import { AboutHero } from "./components/about-hero"
import { MaintenancePrinciples } from "./components/maintenance-principles"
import { SourceOverview } from "./components/source-overview"
import { UsagePolicy } from "./components/usage-policy"
import { useAboutPageStore } from "./store"

export function AboutPage() {
  const {
    heroBadges,
    heroDescription,
    heroNotes,
    heroTitle,
    maintenanceRules,
    policyRules,
    sourcePanels,
  } = useAboutPageStore(
    useShallow((state) => ({
      heroBadges: state.heroBadges,
      heroDescription: state.heroDescription,
      heroNotes: state.heroNotes,
      heroTitle: state.heroTitle,
      maintenanceRules: state.maintenanceRules,
      policyRules: state.policyRules,
      sourcePanels: state.sourcePanels,
    }))
  )

  return (
    <div className="not-prose relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[240px] border-b border-border/50 bg-linear-to-b from-blue-500/[0.08] via-background to-background" />

      <AboutHero
        heroBadges={heroBadges}
        heroDescription={heroDescription}
        heroNotes={heroNotes}
        heroTitle={heroTitle}
      />
      <SourceOverview sourcePanels={sourcePanels} />
      <UsagePolicy policyRules={policyRules} />
      <MaintenancePrinciples maintenanceRules={maintenanceRules} />
      <AboutFinalCta />
    </div>
  )
}
