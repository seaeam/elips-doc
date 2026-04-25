import { BookOpen, FileText, Lock, Users } from "lucide-react"

import type { AboutHeroNote, AboutPanel, AboutRule } from "./types"

export const ABOUT_HERO_TITLE = "关于这个站点"

export const ABOUT_HERO_DESCRIPTION =
  "这是 506 实验室内部整理的课程资料站，仅供内部学习、查阅和复盘使用。"

export const ABOUT_HERO_BADGES = ["506 实验室内部参考", "禁止外传"]

export const ABOUT_HERO_NOTES: AboutHeroNote[] = [
  {
    title: "使用范围",
    description: "仅限 506 实验室内部使用。",
    icon: Users,
    tone: "default",
  },
  {
    title: "课程来源",
    description: "内容来自抖音「哲玄大前端全栈课程」，原课程为付费内容。",
    icon: BookOpen,
    tone: "default",
  },
  {
    title: "传播限制",
    description: "请勿对外转发、分享或公开传播。",
    icon: Lock,
    tone: "warning",
  },
]

export const ABOUT_SOURCE_PANELS: AboutPanel[] = [
  {
    badge: "来源",
    title: "课程来源",
    description:
      "内容来自抖音「哲玄大前端全栈课程」。本站只保留内部学习所需的章节索引和笔记整理。",
    icon: FileText,
    items: ["原课程为付费内容。", "需要完整学习时，请以原课程内容为准。"],
  },
  {
    badge: "范围",
    title: "使用范围",
    description: "资料只在 506 实验室内部流转，用于查阅、回顾和补充内部笔记。",
    icon: Users,
    items: [
      "不要对外转发、分享、镜像或公开发布。",
      "本站不替代原课程，也不提供对外分发入口。",
    ],
  },
]

export const ABOUT_POLICY_RULES: AboutRule[] = [
  {
    title: "内部使用",
    description: "资料仅供实验室内部学习、查阅和复盘。",
    icon: Users,
  },
  {
    title: "不要外传",
    description: "不要向外部转发、分享、镜像或公开发布。",
    icon: Lock,
  },
  {
    title: "以原课为准",
    description: "需要系统学习时，请回到原课程并支持正版。",
    icon: BookOpen,
  },
]

export const ABOUT_MAINTENANCE_RULES: AboutRule[] = [
  {
    title: "整理方式",
    description: "内容会按课程主线继续补充，方便内部检索和回顾。",
    icon: FileText,
  },
  {
    title: "使用边界不变",
    description: "后续更新仍然只面向实验室内部，不会改变当前的使用范围。",
    icon: Users,
  },
  {
    title: "学习建议",
    description: "如果要完整理解课程内容，还是以原课程为准。",
    icon: BookOpen,
  },
]
