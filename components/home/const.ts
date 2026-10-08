import type { CourseHighlight } from "./types"

export const HERO_PLAYBACK_ID = "q4uXxXiO4YDSbsuZjr882PuAaAiNyNWdMiE18JaHPuM"

export const COURSE_HIGHLIGHTS: CourseHighlight[] = [
  {
    chapters: "01–03",
    title: "需求与架构",
    description:
      "梳理中后台开发中的重复工作，确定框架要解决的问题，划分前后端职责。",
    href: "/courses/01-introduction/01",
  },
  {
    chapters: "04–05",
    title: "服务端与工程化",
    description:
      "用 Node.js 和 Koa 编写配置加载、路由与中间件，搭建 Webpack 5 开发和构建环境。",
    href: "/courses/04-nodejs-server-core-engine/01",
  },
  {
    chapters: "06–07",
    title: "页面与动态组件",
    description:
      "用 DSL 描述页面，编写解析器，再用 Vue 3 实现表格、查询和动态表单。",
    href: "/courses/06-vue3-domain-model-architecture/01",
  },
  {
    chapters: "08–09",
    title: "封装与项目实践",
    description:
      "拆分并发布 npm 包，再完成 CI/CD、登录鉴权和人员管理，把框架用到项目里。",
    href: "/courses/08-framework-npm-package-and-release/01",
  },
]
