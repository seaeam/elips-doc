import type { CourseSection } from "./types"

export const COURSE_PHASES = [
  {
    id: "design",
    number: "01",
    title: "需求分析与架构设计",
    shortTitle: "需求与架构",
    range: "01–03",
    chapters: ["01", "02", "03"],
    summary: "分析中后台开发需求，比较技术方案，设计前后端架构。",
    outcome: "技术选型、BFF 与领域模型",
  },
  {
    id: "foundation",
    number: "02",
    title: "服务端与构建环境",
    shortTitle: "内核与工程化",
    range: "04–05",
    chapters: ["04", "05"],
    summary: "编写 Node.js 服务端内核，配置 Webpack 5 开发与构建环境。",
    outcome: "加载器、路由与构建配置",
  },
  {
    id: "model",
    number: "03",
    title: "领域模型与动态组件",
    shortTitle: "模型与组件",
    range: "06–07",
    chapters: ["06", "07"],
    summary: "定义页面 DSL，编写解析器，实现表格、查询与动态表单。",
    outcome: "DSL 解析与 Vue 3 组件",
  },
  {
    id: "practice",
    number: "04",
    title: "框架发布与项目实践",
    shortTitle: "发布与实践",
    range: "08–09",
    chapters: ["08", "09"],
    summary: "发布 npm 包，实现登录和人员管理，配置 CI/CD。",
    outcome: "npm 发布、登录与部署",
  },
] as const

export type CoursePhaseId = "all" | (typeof COURSE_PHASES)[number]["id"]

export function getCoursePhase(chapterNumber: string) {
  return COURSE_PHASES.find((phase) =>
    (phase.chapters as readonly string[]).includes(chapterNumber)
  )
}

export function getVisibleLessons(
  sections: CourseSection[],
  query: string,
  selectedPhase: CoursePhaseId
) {
  const normalizedQuery = query.trim().toLocaleLowerCase()

  return sections.flatMap((section) => {
    if (
      selectedPhase !== "all" &&
      getCoursePhase(section.number)?.id !== selectedPhase
    ) {
      return []
    }

    const chapterMatches = section.title
      .toLocaleLowerCase()
      .includes(normalizedQuery)
    const lessonIndices = section.lessonTitles.flatMap((title, index) =>
      chapterMatches || title.toLocaleLowerCase().includes(normalizedQuery)
        ? [index]
        : []
    )

    return lessonIndices.length > 0 ? [{ section, lessonIndices }] : []
  })
}
