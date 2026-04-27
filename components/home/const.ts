import {
  BookOpen,
  Boxes,
  Braces,
  Cpu,
  Layers3,
  Network,
  PackageOpen,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react"

import type { CourseHighlight, CourseSection } from "./types"

export const HERO_PLAYBACK_ID = "q4uXxXiO4YDSbsuZjr882PuAaAiNyNWdMiE18JaHPuM"

export const TECH_STACK = [
  "Node.js",
  "Koa",
  "Webpack 5",
  "Vue 3",
  "BFF",
  "领域模型",
  "DSL",
  "模板引擎",
  "npm 发布",
]

export const COURSE_SECTIONS: CourseSection[] = [
  {
    number: "01",
    title: "前言",
    href: "/courses/01-introduction/01",
    lessons: 6,
    status: "已更新",
    summary: "从课程设计初衷、时代背景和学习方式切入，建立完整课程上下文。",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "行业分析与需求推导",
    href: "/courses/02-requirement/01",
    lessons: 1,
    status: "持续更新",
    summary: "从重复性工作和平台化目标出发，推导领域模型架构的真实需求。",
    icon: Workflow,
  },
  {
    number: "03",
    title: "技术选型与架构设计",
    href: "/courses/03-technology-selection-and-architecture/01",
    lessons: 6,
    status: "已更新",
    summary: "完成命名、方案调研、架构设计、技术选型、BFF 与前端领域模型设计。",
    icon: Layers3,
  },
  {
    number: "04",
    title: "基于 Node.js 实现服务端内核引擎",
    href: "/courses/04-nodejs-server-core-engine/01",
    lessons: 10,
    status: "已更新",
    summary: "从 Git 流程到项目初始化，再到 elpis-core 服务端内核的完整实现。",
    icon: ServerCog,
  },
  {
    number: "05",
    title: "基于 Webpack5 完成工程化建设",
    href: "/courses/05-webpack5-engineering/01",
    lessons: 7,
    status: "已更新",
    summary: "搭建前端工程体系，并逐步补齐 Elpis 的前端基础设施和工程能力。",
    icon: Boxes,
  },
  {
    number: "06",
    title: "基于 Vue3 完成领域模型架构构建",
    href: "/courses/06-vue3-domain-model-architecture/01",
    lessons: 19,
    status: "已更新",
    summary:
      "覆盖 DSL、解析引擎、模型应用与模板引擎，落到 dashboard 具体实现。",
    icon: Braces,
  },
  {
    number: "07",
    title: "基于 Vue3 完成动态组件库建设",
    href: "/courses/07-vue3-dynamic-component-library/01",
    lessons: 6,
    status: "持续更新",
    summary: "动态组件体系部分已经建好目录，内容正在逐步补充与整理。",
    icon: Cpu,
  },
  {
    number: "08",
    title: "完成框架 npm 包抽象封装并发布",
    href: "/courses/08-framework-npm-package-and-release/01",
    lessons: 1,
    status: "持续更新",
    summary: "框架抽象、封装与发布流程部分已经预留，后续会继续完善。",
    icon: PackageOpen,
  },
  {
    number: "09",
    title: "赠课扩展：框架应用与项目实践",
    href: "/courses/09-bonus-framework-application-and-practice/01",
    lessons: 1,
    status: "持续更新",
    summary: "用于承接更贴近真实项目的框架应用和实践总结，目前仍在更新中。",
    icon: BookOpen,
  },
]

export const COURSE_HIGHLIGHTS: CourseHighlight[] = [
  {
    title: "不是零散技术课",
    description: "从需求、目标到架构与实现，完整走一遍系统设计与落地过程。",
    icon: Network,
  },
  {
    title: "覆盖前后端关键链路",
    description: "BFF、服务端内核、Webpack 工程化、Vue3 领域模型都会串起来。",
    icon: Workflow,
  },
  {
    title: "强调工程思维",
    description: "重点不是会用某个框架，而是理解为什么这样设计、如何持续演进。",
    icon: Cpu,
  },
]
