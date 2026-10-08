import { SectionReveal } from "@/components/ui/section-reveal"
import { AboutFinalCta } from "./components/about-final-cta"
import { AboutHero } from "./components/about-hero"
import { MaintenancePrinciples } from "./components/maintenance-principles"
import { SourceOverview } from "./components/source-overview"
import { UsagePolicy } from "./components/usage-policy"
import {
  ABOUT_HERO_DESCRIPTION,
  ABOUT_HERO_TITLE,
  ABOUT_MAINTENANCE_RULES,
  ABOUT_POLICY_RULES,
  ABOUT_SOURCE,
} from "./const"

export function AboutPage() {
  return (
    <div className="about-page not-prose mx-auto w-full max-w-6xl pb-10 md:pb-16">
      <AboutHero
        heroDescription={ABOUT_HERO_DESCRIPTION}
        heroTitle={ABOUT_HERO_TITLE}
      />
      <SectionReveal>
        <SourceOverview source={ABOUT_SOURCE} />
      </SectionReveal>
      <SectionReveal>
        <MaintenancePrinciples maintenanceRules={ABOUT_MAINTENANCE_RULES} />
      </SectionReveal>
      <SectionReveal>
        <UsagePolicy policyRules={ABOUT_POLICY_RULES} />
      </SectionReveal>
      <SectionReveal>
        <AboutFinalCta />
      </SectionReveal>
    </div>
  )
}
