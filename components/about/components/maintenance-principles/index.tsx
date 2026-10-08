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
      className="grid gap-7 border-t border-border py-10 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 md:py-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14"
    >
      <SectionHeader
        id="about-notes-title"
        title="笔记怎么整理"
        eyebrow="04 / KEEP IT USEFUL"
        description="按原课程顺序记录，保留关键代码和操作步骤。"
      />
      <dl className="max-w-2xl divide-y divide-border">
        {maintenanceRules.map((rule, index) => (
          <div
            key={rule.title}
            className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 py-6 first:pt-0 last:pb-0"
          >
            <dt className="col-span-2 grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 text-base leading-7 font-medium text-foreground">
              <span
                className="pt-1 font-mono text-xs font-normal text-muted-foreground"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <span>{rule.title}</span>
            </dt>
            <dd className="col-start-2 mt-1 text-sm leading-7 text-muted-foreground">
              {rule.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
