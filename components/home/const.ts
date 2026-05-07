import { Cpu, Network, Workflow } from "lucide-react"

import type { CourseHighlight } from "./types"

export const HERO_PLAYBACK_ID = "q4uXxXiO4YDSbsuZjr882PuAaAiNyNWdMiE18JaHPuM"

export const COURSE_HIGHLIGHTS: CourseHighlight[] = [
  {
    title: "识别值得抽象的问题",
    description:
      "从页面、接口、表单和配置中的重复模式出发，判断哪些能力值得沉淀。",
    icon: Network,
  },
  {
    title: "建立统一的模型语言",
    description:
      "用领域模型和 DSL 描述界面结构、数据关系和运行规则，减少口头约定。",
    icon: Workflow,
  },
  {
    title: "把设计落到工程实现",
    description:
      "继续推进到 Node.js 服务端、Webpack 工程化和 Vue 3 运行时，形成完整链路。",
    icon: Cpu,
  },
]
