import { BlurFade } from "@/components/ui/blur-fade"

import type { AboutPanel } from "../../types"
import { SectionHeader } from "../section-header"

type SourceOverviewProps = {
  sourcePanels: AboutPanel[]
}

export function SourceOverview({ sourcePanels }: SourceOverviewProps) {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
        <BlurFade inView>
          <SectionHeader
            badge="来源"
            title="先说清楚这个站点的来源和定位"
            description="它的目标是帮助查阅和复盘，不是重新包装一门课程。"
          />
        </BlurFade>

        <div className="grid gap-5">
          {sourcePanels.map((panel, index) => {
            const Icon = panel.icon

            return (
              <BlurFade key={panel.title} inView delay={index * 0.06}>
                <article className="grid gap-5 rounded-2xl border border-border/60 bg-background/70 p-5 md:grid-cols-[160px_1fr] md:p-6">
                  <div className="space-y-3">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-border/70 bg-muted/40">
                      <Icon className="size-4 text-foreground/75" />
                    </div>
                    <span className="block text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                      {panel.badge}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {panel.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {panel.description}
                      </p>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {panel.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                        >
                          <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-foreground/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
