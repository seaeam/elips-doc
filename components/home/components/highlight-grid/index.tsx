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
          badge="课程定位"
          title="你会在这里学到什么"
          description="围绕真实业务中的重复问题，理解抽象、建模和框架落地的完整路径。"
        />
      </BlurFade>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <BlurFade key={item.title} inView delay={index * 0.06}>
            <Card className="h-full border border-border/60 bg-background/70">
              <CardContent className="flex flex-col gap-3 pt-5">
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
