import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { BookOpenCheck } from "lucide-react"
import { useCourseCatalogStore } from "../../store"
import { SectionCard } from "../section-card"

export function SectionIndex() {
  const sections = useCourseCatalogStore((state) => state.sections)

  return (
    <div className="flex flex-col gap-6">
      <BlurFade inView>
        <div className="flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit px-3 py-1">
            <BookOpenCheck data-icon="inline-start" />
            章节索引
          </Badge>
          <h2 className="text-2xl font-semibold md:text-3xl">
            章节索引与更新状态
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            每个模块都对应真实 MDX
            页面，这里只负责展示入口、节数、进度和小节标题，便于按学习阶段快速跳转。
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section, index) => (
          <SectionCard
            key={section.href}
            sectionHref={section.href}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
