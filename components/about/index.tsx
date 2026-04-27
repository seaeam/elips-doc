"use client"

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
  } = useAboutPageStore()

  return (
    <div className="not-prose relative overflow-hidden">
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
