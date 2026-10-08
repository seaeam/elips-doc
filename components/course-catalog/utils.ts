import type { CourseSection, CourseSectionStatus } from "./types"

export function getTotalLessons(sections: CourseSection[]) {
  return sections.reduce((sum, section) => sum + section.lessonTitles.length, 0)
}

export function getSectionStatusVariant(status: CourseSectionStatus) {
  return status === "已更新" ? "secondary" : "outline"
}

export function createSectionsByHref(sections: CourseSection[]) {
  return sections.reduce<Record<string, CourseSection>>((lookup, section) => {
    lookup[section.href] = section
    return lookup
  }, {})
}

export function getLessonHref(sectionHref: string, lessonIndex: number) {
  const sectionPath = sectionHref.slice(0, sectionHref.lastIndexOf("/"))
  return `${sectionPath}/${String(lessonIndex + 1).padStart(2, "0")}`
}
