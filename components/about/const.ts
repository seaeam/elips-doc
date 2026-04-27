import {
  BookOpen,
  FileText,
  Lock,
  MessageSquareText,
  Route,
  Users,
} from "lucide-react"

import type { AboutHeroNote, AboutPanel, AboutRule } from "./types"

export const ABOUT_HERO_TITLE = "关于这份课程笔记"

export const ABOUT_HERO_DESCRIPTION =
  "我们把学习 ELPIS 课程时需要反复回看的内容整理在这里。它不是一份新的课程，而是一份方便查找、复盘和继续补充的学习笔记。"

export const ABOUT_HERO_BADGES = ["506 实验室整理", "课程笔记", "持续补充"]

export const ABOUT_HERO_NOTES: AboutHeroNote[] = [
  {
    title: "来源",
    description: "抖音「哲玄大前端全栈课程」",
    icon: BookOpen,
    tone: "default",
  },
  {
    title: "整理",
    description: "按章节记录课程脉络、关键实现和复盘笔记",
    icon: Route,
    tone: "default",
  },
  {
    title: "边界",
    description: "用于内部学习，不搬运、不替代原课程",
    icon: Lock,
    tone: "warning",
  },
]

export const ABOUT_SOURCE_PANELS: AboutPanel[] = [
  {
    badge: "背景",
    title: "为什么会有这个站点",
    description:
      "课程内容比较长，涉及需求推导、架构设计、Node.js 内核、Webpack 工程化和 Vue3 领域模型。学习过程中，很多章节需要反复回看，所以我们把目录和笔记单独整理出来。",
    icon: MessageSquareText,
    items: ["原课程为付费内容。", "需要完整学习时，请以原课程内容为准。"],
  },
  {
    badge: "定位",
    title: "它和原课程的关系",
    description:
      "这里更像一份学习索引。我们保留章节脉络、关键概念和自己的复盘记录，但不把它做成原课程的替代品。",
    icon: FileText,
    items: [
      "完整讲解、上下文和版权边界都以原课程为准。",
      "如果要系统学习，仍然建议回到原课程。",
    ],
  },
]

export const ABOUT_POLICY_RULES: AboutRule[] = [
  {
    title: "可以怎么用",
    description:
      "查目录、回看笔记、补充自己的理解，或者在实验室内部讨论时引用。",
    icon: Users,
  },
  {
    title: "不要怎么用",
    description:
      "不要打包外传、镜像站点，也不要把这里的内容当作原课程材料分发。",
    icon: Lock,
  },
  {
    title: "遇到分歧时",
    description: "以原课程为准。这里的笔记只记录学习过程中的整理和理解。",
    icon: BookOpen,
  },
]

export const ABOUT_MAINTENANCE_RULES: AboutRule[] = [
  {
    title: "保留课程主线",
    description: "章节顺序尽量跟随原课程，方便从目录直接回到具体内容。",
    icon: Route,
  },
  {
    title: "写清自己的理解",
    description: "补充内容以复盘、总结和实现记录为主，不做逐字稿堆叠。",
    icon: MessageSquareText,
  },
  {
    title: "尊重原课程",
    description: "课程来源、完整讲解和版权归属不在这里重新定义。",
    icon: BookOpen,
  },
]
