import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Route } from "lucide-react"

import { useCourseCatalogStore } from "../../store"

export function RoadmapPanel() {
  const roadmapSteps = useCourseCatalogStore((state) => state.roadmapSteps)

  return (
    <Card className="border-border/60 bg-background/80">
      <CardHeader className="gap-2">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-muted/60">
            <Route className="size-4" />
          </span>
          <div>
            <CardDescription>Learning Roadmap</CardDescription>
            <CardTitle>推荐学习路径</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {roadmapSteps.map((step, index) => (
          <div key={step.title} className="grid grid-cols-[auto_1fr] gap-3">
            <div className="flex flex-col items-center gap-2 pt-1">
              <span className="flex size-7 items-center justify-center rounded-full border border-border bg-background text-xs font-medium">
                {index + 1}
              </span>
              {index < roadmapSteps.length - 1 ? (
                <span className="h-full min-h-8 w-px bg-border" />
              ) : null}
            </div>
            <div className="pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-medium">{step.title}</p>
                <Badge variant="outline">{step.range}</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
