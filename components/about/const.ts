import type {
  AboutQuestion,
  AboutRule,
  AboutSource,
  ReadingStep,
} from "./types"

export const ABOUT_HERO_TITLE = "关于这份笔记"

export const ABOUT_HERO_DESCRIPTION =
  "506 实验室学习「哲玄大前端全栈课程」时整理的笔记，用于查阅代码、回看步骤和复习。"

export const ABOUT_SOURCE: AboutSource = {
  course: "哲玄大前端全栈课程",
  platform: "抖音",
  description:
    "笔记记录的是原课程中的 ELPIS 项目。完整讲解请看原课程；笔记如有出入，以原课程为准。",
  attribution: "课程版权归原作者所有。",
}

export const ABOUT_MAINTENANCE_RULES: AboutRule[] = [
  {
    title: "按章节归档",
    description: "章节、小节跟随原课程排列，方便对照查找。",
  },
  {
    title: "保留代码与步骤",
    description: "记录关键代码、配置项和操作步骤，补充相关设计说明。",
  },
  {
    title: "随学习补充",
    description: "有新的学习记录，或发现遗漏和错误时，补到对应章节。",
  },
]

export const ABOUT_READING_STEPS: ReadingStep[] = [
  {
    number: "01",
    label: "定位",
    title: "选择章节",
    description: "初次学习按目录顺序阅读；查某个功能时，可以直接搜索小节标题。",
    detail: "目录 → 章节 → 小节",
  },
  {
    number: "02",
    label: "理解",
    title: "对照视频阅读",
    description:
      "笔记省略了部分演示过程。遇到步骤不清楚的地方，可以回看对应视频。",
    detail: "视频 + 文字 + 图解",
  },
  {
    number: "03",
    label: "实践",
    title: "自己运行一遍",
    description: "照着步骤配置项目，检查依赖版本和运行结果，再尝试修改代码。",
    detail: "阅读 → 实现 → 验证",
  },
  {
    number: "04",
    label: "回看",
    title: "需要时再查阅",
    description:
      "忘记配置或实现细节时，回到对应小节查找。有前后依赖的内容，连同前面的步骤一起看。",
    detail: "目录 → 搜索 → 查阅",
  },
]

export const ABOUT_QUESTIONS: AboutQuestion[] = [
  {
    question: "这份笔记可以替代原课程吗？",
    answer:
      "不能。笔记保留了重点和代码，但省略了部分演示与讲解，需要配合原课程阅读。如有出入，以原课程为准。",
  },
  {
    question: "第一次阅读，从哪里开始？",
    answer:
      "建议先看第一章，了解课程背景和学习方式，再按目录顺序阅读。只想查某个功能的实现，可以在目录中搜索小节标题。",
    href: "/courses/01-introduction/01",
    linkLabel: "从第一节开始",
  },
  {
    question: "代码没有运行出预期结果，应该怎么排查？",
    answer:
      "先检查前面的小节是否有遗漏的步骤，再核对 Node.js 和依赖版本、配置文件、启动命令。环境不同，也可能需要调整配置。",
  },
  {
    question: "可以把笔记转发给实验室以外的人吗？",
    answer:
      "这份笔记仅供 506 实验室成员学习、查阅和复盘。课程版权归原作者所有，请勿对外转发、打包分发或建立镜像站点。",
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
