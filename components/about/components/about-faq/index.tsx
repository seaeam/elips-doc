import Link from "next/link"
import { ArrowUpRight, Plus } from "lucide-react"
import type { AboutQuestion } from "../../types"
import { SectionHeader } from "../section-header"

type AboutFaqProps = {
  questions: AboutQuestion[]
}

export function AboutFaq({ questions }: AboutFaqProps) {
  return (
    <section
      aria-labelledby="about-faq-title"
      className="grid gap-7 border-t border-border py-10 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 md:py-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14"
    >
      <SectionHeader
        id="about-faq-title"
        title="常见问题"
        eyebrow="05 / A FEW ANSWERS"
      />
      <div className="min-w-0 divide-y divide-border">
        {questions.map((question) => (
          <details key={question.question} className="group">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-sm leading-7 font-medium text-foreground outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
              {question.question}
              <Plus
                className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <div className="pr-6 pb-5">
              <p className="text-sm leading-8 text-muted-foreground">
                {question.answer}
              </p>
              {question.href && question.linkLabel && (
                <Link
                  href={question.href}
                  className="about-link mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground"
                >
                  {question.linkLabel}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
