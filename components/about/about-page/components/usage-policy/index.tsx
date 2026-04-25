import { BlurFade } from "@/components/ui/blur-fade"

import type { AboutRule } from "../../types"
import { SectionHeader } from "../section-header"

type UsagePolicyProps = {
  policyRules: AboutRule[]
}

export function UsagePolicy({ policyRules }: UsagePolicyProps) {
  return (
    <section className="px-6 pb-14 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <BlurFade inView>
          <SectionHeader
            badge="边界"
            title="使用范围很简单，按这三条理解就够了"
            description="这部分只保留最直接的表述。"
          />
        </BlurFade>

        <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-background/65">
          {policyRules.map((rule, index) => {
            const Icon = rule.icon

            return (
              <BlurFade key={rule.title} inView delay={index * 0.06}>
                <div className="grid gap-3 px-5 py-4 md:grid-cols-[180px_1fr] md:gap-6 md:px-6">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-4 text-foreground/75" />
                    <p className="text-sm font-medium text-foreground">
                      {rule.title}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {rule.description}
                  </p>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
