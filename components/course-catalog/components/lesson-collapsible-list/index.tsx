import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { getLessonHref } from "../../utils"

type LessonCollapsibleListProps = {
  sectionHref: string
  lessons: string[]
  lessonIndices: number[]
  query: string
}

function LessonTitle({ title, query }: { title: string; query: string }) {
  const search = query.trim()
  const matchIndex = search
    ? title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())
    : -1

  if (matchIndex < 0) return title

  return (
    <>
      {title.slice(0, matchIndex)}
      <mark className="rounded-xs bg-foreground/10 px-0.5 text-foreground">
        {title.slice(matchIndex, matchIndex + search.length)}
      </mark>
      {title.slice(matchIndex + search.length)}
    </>
  )
}

export function LessonCollapsibleList({
  sectionHref,
  lessons,
  lessonIndices,
  query,
}: LessonCollapsibleListProps) {
  return (
    <ol className="grid grid-cols-1 gap-x-7 sm:grid-cols-2">
      {lessonIndices.map((index) => (
        <li
          key={getLessonHref(sectionHref, index)}
          className="min-w-0 border-t border-border/60"
        >
          <Link
            href={getLessonHref(sectionHref, index)}
            prefetch={false}
            className="catalog-lesson-link group grid min-h-12 grid-cols-[1.5rem_minmax(0,1fr)_1rem] items-start gap-2 rounded-sm py-3 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="pt-0.5 font-mono text-[10px] leading-6 text-muted-foreground"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="leading-7">
              <LessonTitle title={lessons[index]} query={query} />
            </span>
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
