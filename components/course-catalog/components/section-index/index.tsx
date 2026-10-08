import { useCourseCatalogStore } from "../../store"
import { SectionCard } from "../section-card"

export function SectionIndex() {
  const sections = useCourseCatalogStore((state) => state.sections)

  return (
    <section aria-labelledby="catalog-chapters-title" className="min-w-0">
      <h2 id="catalog-chapters-title" className="sr-only">
        全部章节
      </h2>
      <div>
        {sections.map((section) => (
          <SectionCard key={section.href} sectionHref={section.href} />
        ))}
      </div>
    </section>
  )
}
