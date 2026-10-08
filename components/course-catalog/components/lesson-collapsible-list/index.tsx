import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { getLessonHref } from "../../utils"

type LessonCollapsibleListProps = {
  sectionHref: string
  lessons: string[]
}

export function LessonCollapsibleList({
  sectionHref,
  lessons,
}: LessonCollapsibleListProps) {
  return (
    <ol className="grid grid-cols-1 gap-x-7 sm:grid-cols-2">
      {lessons.map((title, index) => (
        <li
          key={getLessonHref(sectionHref, index)}
          className="min-w-0 border-t border-border/60"
        >
          <Link
            href={getLessonHref(sectionHref, index)}
            prefetch={false}
            className="catalog-lesson-link group grid min-h-12 grid-cols-[1.5rem_minmax(0,1fr)_1rem] items-start gap-2 rounded-sm py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="pt-0.5 font-mono text-xs leading-6 text-muted-foreground"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="leading-7">{title}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1.5 size-3.5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </Link>
        </li>
      ))}
    </ol>
  )
}
