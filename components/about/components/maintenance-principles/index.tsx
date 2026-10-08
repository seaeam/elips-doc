import type { AboutRule } from "../../types"
import { SectionHeader } from "../section-header"

type MaintenancePrinciplesProps = {
  maintenanceRules: AboutRule[]
}

export function MaintenancePrinciples({
  maintenanceRules,
}: MaintenancePrinciplesProps) {
  return (
    <section
      aria-labelledby="about-notes-title"
      className="grid gap-5 border-t border-border py-9 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 md:py-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14"
    >
      <SectionHeader id="about-notes-title" title="整理方式" />
      <dl className="max-w-2xl space-y-6">
        {maintenanceRules.map((rule) => (
          <div key={rule.title}>
            <dt className="text-base leading-7 font-medium text-foreground">
              {rule.title}
            </dt>
            <dd className="mt-1 text-sm leading-7 text-muted-foreground">
              {rule.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
