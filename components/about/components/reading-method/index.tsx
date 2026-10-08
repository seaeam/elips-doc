import type { ReadingStep } from "../../types"
import { SectionHeader } from "../section-header"

type ReadingMethodProps = {
  steps: ReadingStep[]
}

export function ReadingMethod({ steps }: ReadingMethodProps) {
  return (
    <section
      aria-labelledby="about-reading-title"
      className="border-t border-border py-10 md:py-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader
          id="about-reading-title"
          title="阅读建议"
          eyebrow="03 / READING NOTES"
        />
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">
          第一次学习时，建议一边看课程，一边运行代码。之后需要复习，可以直接查阅对应小节。
        </p>
      </div>
      <ol className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
        {steps.map((step) => (
          <li
            key={step.number}
            className="group border-t border-border pt-5 transition-colors hover:border-foreground/40"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className="font-mono text-3xl leading-none tracking-tight text-foreground/20 transition-colors group-hover:text-foreground/50"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span className="pt-1 text-xs text-muted-foreground">
                {step.label}
              </span>
            </div>
            <h3 className="mt-5 text-base leading-7 font-medium text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {step.description}
            </p>
            <p className="mt-5 font-mono text-[10px] leading-6 text-muted-foreground">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
