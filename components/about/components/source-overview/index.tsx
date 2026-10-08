import type { AboutSource } from "../../types"
import { SectionHeader } from "../section-header"

type SourceOverviewProps = {
  source: AboutSource
}

export function SourceOverview({ source }: SourceOverviewProps) {
  return (
    <section
      aria-labelledby="about-source-title"
      className="grid gap-7 border-t border-border py-10 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 md:py-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14"
    >
      <SectionHeader
        id="about-source-title"
        title="课程来源"
        eyebrow="01 / THE SOURCE"
        description="笔记整理自以下课程。"
      />
      <div className="max-w-2xl">
        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <cite className="text-xl leading-8 font-medium text-foreground not-italic">
            {source.course}
          </cite>
          <span className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground">
            来源 · {source.platform}
          </span>
        </p>
        <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
          {source.description}
        </p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {source.attribution}
        </p>
      </div>
    </section>
  )
}
