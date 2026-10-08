import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function AboutFinalCta() {
  return (
    <nav
      aria-label="相关页面"
      className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border pt-6 md:pt-8"
    >
      <Link
        href="/"
        className="about-link inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground"
      >
        <ArrowLeft
          aria-hidden="true"
          className="about-link-arrow-back size-4"
        />
        返回首页
      </Link>
      <Link
        href="/courses"
        className="about-link inline-flex min-h-11 items-center gap-3 text-sm font-medium text-foreground"
      >
        查看课程目录
        <ArrowRight
          aria-hidden="true"
          className="about-link-arrow-forward size-4"
        />
      </Link>
    </nav>
  )
}
