import { Circle, CircleCheck } from "lucide-react"
import type { LessonProgress } from "@/lib/learning-progress"
import { cn } from "@/lib/utils"

export function LessonStatus({
  record,
  className,
}: {
  record?: LessonProgress
  className?: string
}) {
  const completed = !!record?.completed
  const Icon = completed ? CircleCheck : Circle
  return (
    <span
      data-learning-state={completed ? "completed" : "incomplete"}
      className={cn(
        "inline-flex shrink-0 items-center",
        completed ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      <span className="sr-only">{completed ? "已完成" : "未完成"}</span>
    </span>
  )
}
