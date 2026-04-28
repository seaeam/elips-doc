import { Cpu, Network, Workflow } from "lucide-react"

import type { CourseHighlight } from "./types"

export const HERO_PLAYBACK_ID = "q4uXxXiO4YDSbsuZjr882PuAaAiNyNWdMiE18JaHPuM"

export const COURSE_HIGHLIGHTS: CourseHighlight[] = [
  {
    title: "从重复业务里抽象框架",
    description: "先识别真实项目里的重复结构，再判断哪些能力值得沉淀成框架。",
    icon: Network,
  },
  {
    title: "用领域模型统一语言",
    description: "把页面、接口、配置和组件背后的共性，用模型和 DSL 表达清楚。",
    icon: Workflow,
  },
  {
    title: "训练架构取舍能力",
    description: "关注为什么这样设计，以及一个框架如何在复杂业务里持续演进。",
    icon: Cpu,
  },
]
