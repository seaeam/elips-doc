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
