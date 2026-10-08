import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { useChapterNavigation } from "../../hooks/use-chapter-navigation"
import { COURSE_PHASES } from "../../journey"
import { useCourseCatalogStore } from "../../store"

export function LearningPath() {
  const navigateToChapter = useChapterNavigation()

  return (
    <section
      aria-labelledby="learning-path-title"
      className="border-t border-border py-10 md:py-14"
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground">
            COURSE OUTLINE
          </p>
          <h2
            id="learning-path-title"
            className="mt-2 text-xl font-semibold tracking-tight md:text-2xl"
          >
            课程安排
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">
          初次学习建议按章节顺序阅读
        </p>
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {COURSE_PHASES.map((phase) => (
          <li key={phase.id}>
            <a
              href={`#chapter-${phase.chapters[0]}`}
              onClick={() => navigateToChapter(phase.chapters[0])}
              className="group flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {phase.number} /
                </span>
                <span className="text-[11px] text-muted-foreground">
                  第 {phase.range} 章
                </span>
              </div>
              <h3 className="text-sm font-semibold">{phase.title}</h3>
              <p className="mt-3 flex-1 text-xs leading-6 text-muted-foreground">
                {phase.summary}
              </p>
              <p className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
                {phase.outcome}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                />
              </p>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function RoadmapPanel() {
  const sections = useCourseCatalogStore((state) => state.sections)
  const navigateToChapter = useChapterNavigation()

  return (
    <aside className="hidden lg:sticky lg:top-28 lg:block">
      <nav aria-label="章节快速导航">
        <p className="mb-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          章节索引 <ArrowDownRight aria-hidden="true" className="size-3.5" />
        </p>
        <ol className="space-y-5">
          {COURSE_PHASES.map((phase) => (
            <li key={phase.id}>
              <p className="mb-2 text-[11px] text-muted-foreground">
                {phase.shortTitle}
              </p>
              <ol className="space-y-1">
                {sections
                  .filter((section) =>
                    (phase.chapters as readonly string[]).includes(
                      section.number
                    )
                  )
                  .map((section) => (
                    <li key={section.href}>
                      <a
                        href={`#chapter-${section.number}`}
                        onClick={() => navigateToChapter(section.number)}
                        className="flex min-h-9 items-start gap-2 rounded-md py-1.5 text-xs leading-5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        <span className="shrink-0 font-mono text-[10px]">
                          {section.number}
                        </span>
                        <span>
                          {section.title.replace(/^【赠课扩展】\s*/, "")}
                        </span>
                      </a>
                    </li>
                  ))}
              </ol>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-8 border-t border-border pt-5">
        <p className="text-xs font-medium">阅读建议</p>
        <p className="mt-2 text-xs leading-6 text-muted-foreground">
          章节中的代码有前后依赖。遇到不熟悉的模块或配置，可以回看前面的实现步骤。
        </p>
      </div>
    </aside>
  )
}
