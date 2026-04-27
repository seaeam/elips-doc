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
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
        <BlurFade inView>
          <SectionHeader
            badge="整理方式"
            title="后续怎么维护这份笔记"
            description="内容会继续补，但不把笔记写成逐字稿，也不改变它和原课程的关系。"
          />
        </BlurFade>

        <BlurFade inView delay={0.08}>
          <div className="rounded-2xl border border-border/60 bg-background/70">
            <div className="border-b border-border/60 px-5 py-5 md:px-6">
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                我们更关心“以后能不能快速找到”和“回看时能不能接上思路”。所以这里会保留课程主线，也会补充自己的理解，但不会把原课程内容重新摊开一遍。
              </p>
            </div>
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
