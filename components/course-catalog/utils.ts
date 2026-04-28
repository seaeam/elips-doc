import type {
  CourseHeroStat,
  CourseSection,
  CourseSectionStatus,
} from "./types"

export function getTotalLessons(sections: CourseSection[]) {
  return sections.reduce((sum, section) => sum + section.lessons, 0)
}

export function getUpdatedModules(sections: CourseSection[]) {
  return sections.filter((section) => section.status === "已更新").length
}

export function getSectionStatusVariant(status: CourseSectionStatus) {
  return status === "已更新" ? "secondary" : "outline"
}

export function buildHeroStats(
  totalLessons: number,
  updatedModules: number,
  totalModules: number
): CourseHeroStat[] {
  return [
    {
      label: "已整理课程页面",
      value: totalLessons,
      suffix: "+",
    },
    {
      label: "主线章节已成型",
      value: updatedModules,
      delay: 0.1,
    },
    {
      label: "章节模块持续扩展",
      value: totalModules,
      delay: 0.2,
    },
  ]
}

export function createSectionsByHref(sections: CourseSection[]) {
  return sections.reduce<Record<string, CourseSection>>((lookup, section) => {
    lookup[section.href] = section
    return lookup
  }, {})
}

export function getCurrentFocusSection(
  sections: CourseSection[],
  sectionNumber: string
) {
  const fallbackSection = sections[0]

  if (!fallbackSection) {
    throw new Error("Course catalog requires at least one section.")
  }

  return (
    sections.find((section) => section.number === sectionNumber) ??
    fallbackSection
  )
}
