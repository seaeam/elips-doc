import {
  BookOpen,
  FileText,
  Lock,
  MessageSquareText,
  Route,
  Users,
} from "lucide-react"

import type { AboutHeroNote, AboutPanel, AboutRule } from "./types"

export const ABOUT_HERO_TITLE = "关于本站点"

export const ABOUT_HERO_DESCRIPTION =
  "整理 ELPIS 相关的学习笔记与章节索引，方便前端开发者查阅、复盘和补充理解。它不是一门新课程，也不替代原课程内容。"

export const ABOUT_HERO_BADGES = ["学习笔记站点", "面向前端开发者", "持续整理"]

export const ABOUT_HERO_NOTES: AboutHeroNote[] = [
  {
    title: "来源",
    description: "抖音「哲玄大前端全栈课程」",
    icon: BookOpen,
    tone: "default",
  },
  {
    title: "内容形式",
    description: "按章节整理目录、重点、实现记录和复盘笔记",
    icon: Route,
    tone: "default",
  },
  {
    title: "使用边界",
    description: "仅用于506实验室学习与复盘，不能对外传播",
    icon: Lock,
    tone: "warning",
  },
]

export const ABOUT_SOURCE_PANELS: AboutPanel[] = [
  {
    badge: "背景",
    title: "为什么要单独整理这个站点",
    description:
      "原课程内容覆盖需求推导、架构设计、Node.js、Webpack 5 和 Vue 3 等主题，信息密度高，很多内容需要反复回看。这个站点的作用，是把这些内容整理成更容易查找和复盘的结构。",
    icon: MessageSquareText,
    items: ["原课程是主要内容来源。", "需要完整上下文时，请回到原课程。"],
  },
  {
    badge: "定位",
    title: "它和原课程是什么关系",
    description:
      "这里更像一份学习索引和笔记。我们保留课程主线、关键概念和自己的理解，但不会把它做成原课程的替代版本。",
    icon: FileText,
    items: [
      "完整讲解、上下文和版权边界以原课程为准。",
      "如果要系统学习，仍然建议直接配合原课程使用。",
    ],
  },
]

export const ABOUT_POLICY_RULES: AboutRule[] = [
  {
    title: "可以怎么用",
    description:
      "可以查目录、回看重点、对照自己的项目做复盘，也可以补充个人理解。",
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
    description: "以原课程为准。这里记录的是学习过程中的整理、总结和理解。",
    icon: BookOpen,
  },
]

export const ABOUT_MAINTENANCE_RULES: AboutRule[] = [
  {
    title: "保留课程主线",
    description: "章节顺序尽量跟随原课程，方便按目录快速定位到具体内容。",
    icon: Route,
  },
  {
    title: "补充自己的理解",
    description: "新增内容以复盘、总结和实现记录为主，不做逐字稿式堆叠。",
    icon: MessageSquareText,
  },
  {
    title: "尊重原课程",
    description: "课程来源、完整讲解和版权归属不会在这里被重新定义。",
    icon: BookOpen,
  },
]
