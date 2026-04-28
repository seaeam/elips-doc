import type { MetaRecord } from "nextra"

const meta: MetaRecord = {
  index: {
    title: "课程目录",
    theme: {
      copyPage: false,
      pagination: false,
      sidebar: true,
      layout: "full",
      toc: false,
    },
  },
  "01-introduction": "前言",
  "02-requirement": "行业分析与需求推导",
  "03-technology-selection-and-architecture": "技术选型与架构设计",
  "04-nodejs-server-core-engine": "基于 nodejs 实现服务端内核引擎",
  "05-webpack5-engineering": "基于 webpack5 完成工程化建设",
  "06-vue3-domain-model-architecture": "基于 vue3 完成领域模型架构构建",
  "07-vue3-dynamic-component-library": "基于 vue3 完成动态组件库建设",
  "08-framework-npm-package-and-release": "完成框架 npm 包抽象封装并发布",
  "09-bonus-framework-application-and-practice":
    "【赠课扩展】框架应用与项目实践",
}

export default meta
