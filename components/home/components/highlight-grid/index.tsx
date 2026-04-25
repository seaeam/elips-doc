import { BlurFade } from "@/components/ui/blur-fade"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "../section-header"
import type { CourseHighlight } from "../../types"

type HighlightGridProps = {
  highlights: CourseHighlight[]
}

export function HighlightGrid({ highlights }: HighlightGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
      <BlurFade inView>
        <SectionHeader
          badge="学习收益"
          title="完整的系统搭建过程"
          description="不只是框架 API 使用，更是问题抽象、架构判断、工程建设与模型落地。"
        />
      </BlurFade>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <BlurFade key={item.title} inView delay={index * 0.06}>
            <Card className="h-full border border-border/60 bg-background/70">
              <CardContent className="space-y-3 pt-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-border/70 bg-muted/60 p-2">
                    <item.icon className="size-4 text-foreground/80" />
                  </div>
                  <h3 className="text-base font-medium">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
