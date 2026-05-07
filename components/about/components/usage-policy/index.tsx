import { BlurFade } from "@/components/ui/blur-fade"

import type { AboutRule } from "../../types"
import { SectionHeader } from "../section-header"

type UsagePolicyProps = {
  policyRules: AboutRule[]
}

export function UsagePolicy({ policyRules }: UsagePolicyProps) {
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <BlurFade inView>
          <SectionHeader
            badge="边界"
            title="把使用边界提前说明白"
            description="这些内容可以正常用于学习和复盘，但不应被当作原课程替代品传播。"
          />
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-3">
          {policyRules.map((rule, index) => {
            const Icon = rule.icon

            return (
              <BlurFade key={rule.title} inView delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-border/60 bg-background/70 p-5 transition-colors hover:border-foreground/15">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-border/70 bg-muted/40">
                      <Icon className="size-4 text-foreground/75" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-medium text-foreground">
                      {rule.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {rule.description}
                    </p>
                  </div>
                </article>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
