"use client"

import { useId } from "react"
import { Check } from "lucide-react"
import { Checkbox } from "radix-ui"
import {
  LEARNING_LESSONS,
  saveLessonCompletion,
  useLearningProgress,
} from "./store"

export function LessonCompletion({
  href,
  mediaId,
}: {
  href: string
  mediaId: string
}) {
  const id = useId()
  const progress = useLearningProgress()
  const saved = progress.lessons[href]
  const record = saved?.mediaId === mediaId ? saved : undefined
  const completed = !!record?.completed
  if (!mediaId || !LEARNING_LESSONS.some((lesson) => lesson.href === href))
    return null

  return (
    <div
      data-slot="lesson-completion"
      className="mt-3 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-lg border border-border bg-card px-4 py-3"
    >
      <div className="flex items-center gap-2.5">
        <Checkbox.Root
          id={id}
          checked={completed}
          onCheckedChange={(checked) =>
            saveLessonCompletion(href, mediaId, checked === true)
          }
          className="flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-muted-foreground bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=checked]:border-foreground data-[state=checked]:text-foreground"
        >
          <Checkbox.Indicator>
            <Check className="size-2.5" strokeWidth={2.5} aria-hidden="true" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          htmlFor={id}
          className="cursor-pointer text-sm font-medium select-none"
        >
          已完成本节
        </label>
      </div>
    </div>
  )
}
