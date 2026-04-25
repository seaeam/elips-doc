import { BlurFade } from "@/components/ui/blur-fade"

import type { AboutPanel } from "../../types"
import { SectionHeader } from "../section-header"

type SourceOverviewProps = {
  sourcePanels: AboutPanel[]
}

export function SourceOverview({ sourcePanels }: SourceOverviewProps) {
  return (
    <section className="px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <BlurFade inView>
          <SectionHeader
            badge="说明"
            title="课程来源和使用范围放在这里统一说明"
            description="只保留必要信息，避免重复声明。"
          />
        </BlurFade>

        <div className="grid gap-8 border-t border-border/60 pt-8 lg:grid-cols-2 lg:gap-10">
          {sourcePanels.map((panel, index) => {
            const Icon = panel.icon

            return (
              <BlurFade key={panel.title} inView delay={index * 0.06}>
                <article className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-4 text-foreground/75" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {panel.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {panel.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {panel.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
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
                </article>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
