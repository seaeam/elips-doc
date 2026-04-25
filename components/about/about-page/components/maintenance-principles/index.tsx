import { BlurFade } from "@/components/ui/blur-fade"

import type { AboutRule } from "../../types"
import { SectionHeader } from "../section-header"

type MaintenancePrinciplesProps = {
  maintenanceRules: AboutRule[]
}

export function MaintenancePrinciples({
  maintenanceRules,
}: MaintenancePrinciplesProps) {
  return (
    <section className="px-6 pb-14 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
        <BlurFade inView>
          <SectionHeader
            badge="补充"
            title="后续会继续整理，但页面职责保持不变"
            description="它的作用一直是内部查阅，不会变成公开资料页。"
          />
        </BlurFade>

        <BlurFade inView delay={0.08}>
          <div className="rounded-2xl border border-border/60 bg-background/65">
            <div className="space-y-0">
              {maintenanceRules.map((rule, index) => {
                const Icon = rule.icon
                const isLast = index === maintenanceRules.length - 1

                return (
                  <div
                    key={rule.title}
                    className={`flex gap-3 px-5 py-4 md:px-6 ${isLast ? "" : "border-b border-border/60"}`}
                  >
                    <Icon className="mt-1 size-4 shrink-0 text-foreground/75" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-foreground">
                        {rule.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
