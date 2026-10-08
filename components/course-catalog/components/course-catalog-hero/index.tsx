import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCourseCatalogStore } from "../../store"

export function CourseCatalogHero() {
  const totalLessons = useCourseCatalogStore((state) => state.totalLessons)
  const totalModules = useCourseCatalogStore((state) => state.totalModules)

  return (
    <header className="catalog-enter flex flex-col gap-6 pt-8 pb-10 md:pt-12 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          ELPIS{" "}
          <span aria-hidden="true" className="mx-2 text-border">
            /
          </span>{" "}
          {totalModules} 章 · {totalLessons} 节
        </p>
        <h1 className="text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
          课程笔记
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
          按原课程顺序整理。展开章节，点击小节标题即可阅读。
        </p>
      </div>
      <Button
        asChild
        size="lg"
        className="h-11 w-fit shrink-0 gap-3 px-5 has-data-[icon=inline-end]:pr-4"
      >
        <Link href="/courses/01-introduction/01">
          从第一节开始
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </Link>
      </Button>
    </header>
  )
}
