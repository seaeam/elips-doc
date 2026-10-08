import type { AboutRule, AboutSource } from "./types"

export const ABOUT_HERO_TITLE = "关于这份笔记"

export const ABOUT_HERO_DESCRIPTION =
  "由 506 实验室整理，记录 ELPIS 的学习过程，方便查章节、回看代码。"

export const ABOUT_SOURCE: AboutSource = {
  course: "哲玄大前端全栈课程",
  platform: "抖音",
  description:
    "笔记对应原课程中的 ELPIS 项目。完整讲解请配合原课程阅读；如有出入，以原课程为准。",
  attribution: "课程版权归原作者所有。",
}

export const ABOUT_MAINTENANCE_RULES: AboutRule[] = [
  {
    title: "按章节归档",
    description: "章节、小节跟随原课程排列，方便对照查找。",
  },
  {
    title: "保留代码与步骤",
    description: "记录关键代码、配置和实现过程，补充学习时的理解。",
  },
  {
    title: "随学习补充",
    description: "有新的学习记录，再补到对应章节。视频和笔记会继续更新。",
  },
]

export const ABOUT_POLICY_RULES: AboutRule[] = [
  {
    title: "内部学习",
    description: "仅供 506 实验室成员学习、查阅和复盘。",
  },
  {
    title: "请勿外传",
    description: "请勿对外转发、打包分发或建立镜像站点。",
  },
]
