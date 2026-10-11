# ELPIS 图文素材

本目录的插画和图表用于说明课程中的 ELPIS 框架。

| 文件 | 内容 | 对应笔记 |
| --- | --- | --- |
| [cover.png](cover.png) | 配置、管理界面、BFF 与多项目复用的手绘概览 | 概念插画 |
| [framework-architecture.svg](framework-architecture.svg) | 展示层、BFF 与数据层 | [项目架构](../../content/courses/03-technology-selection-and-architecture/03.mdx)、[技术选型](../../content/courses/03-technology-selection-and-architecture/04.mdx) |
| [model-inheritance.svg](model-inheritance.svg) | 公共电商模型与两个项目的差异配置 | [DSL 设计](../../content/courses/06-vue3-domain-model-architecture/01.mdx)、[解析引擎](../../content/courses/06-vue3-domain-model-architecture/02.mdx) |
| [schema-to-ui.svg](schema-to-ui.svg) | 同一字段在表格、搜索和表单中的使用 | [动态组件 DSL](../../content/courses/07-vue3-dynamic-component-library/01.mdx)、[编辑表单](../../content/courses/07-vue3-dynamic-component-library/05.mdx) |
| [request-flow.svg](request-flow.svg) | 人员列表查询的调用与返回顺序 | [BFF 设计](../../content/courses/03-technology-selection-and-architecture/05.mdx)、[人员管理](../../content/courses/09-bonus-framework-application-and-practice/05.mdx) |
| [learning-map.svg](learning-map.svg) | 9 章、67 节课程的四阶段路线 | [课程目录](../../README.md#courses) |

## 编辑图表

五张 SVG 的源文件是 [generate-diagrams.mjs](generate-diagrams.mjs)。修改后，在仓库根目录运行：

```bash
node docs/readme/generate-diagrams.mjs
```

脚本不依赖额外包，使用固定随机种子绘制手绘线条。文字保留在 SVG 中，中文使用系统字体。修改后检查文字边界和连线方向，课程数量变化时同步更新路线图。

这些图只保留说明问题所需的主要结构。Schema 图中的商品、价格属于示意数据；请求图以人员列表查询为例；封面是概念插画，不作为接口或配置协议。

## 封面

封面通过内置 imagegen 生成，随后修正了数据访问箭头，使其表达 UI → BFF → 数据库。文件保存在 `docs/readme/cover.png`，没有使用外部图床。

### 生成提示词

```text
Use case: illustration-story
Asset type: wide hand-drawn editorial cover for a Chinese introduction to the ELPIS domain-model driven full-stack application framework.
Primary request: Draw a charming but precise engineering sketch on warm ivory dotted paper. The visual story is a reusable business model producing two different admin applications. Center-left: overlapping small configuration sheets with curly braces and abstract structured code strokes, connected by sketched arrows to a large central dashboard with a sidebar, a search input, a data table, and a small floating form panel. The central dashboard connects downward to a small server tower and database cylinder. Two smaller dashboard variations branch out to the right, communicating shared core and different project needs. Include a few pencil marks, hand drawn stars and small sticky tabs. A restrained hand-crafted technical illustration, no video player, no notebook website, no photos.
Style/medium: irregular black fineliner outlines, visible pen strokes, dry marker fills, subtle crosshatching, flat editorial doodle illustration. Palette: warm cream background, denim blue, muted sage, ochre yellow, pale coral.
Composition: extra wide landscape 3:2 or wider, title in the upper left, generous whitespace, keep the diagrams and UI modules comfortably separated, no lines crossing labels. Engineering drawing rather than a marketing splash.
Text (verbatim): Large hand-lettered "ELPIS", smaller "DOMAIN MODEL", small labels "CONFIG", "UI", "BFF" next to the relevant config, interface, and server objects. No other text except simple curly braces and abstract placeholder strokes.
Constraints: preserve readability at README width; all artwork is a conceptual illustration, not a screenshot. No glowing effects, no gradients, no 3D render, no stock-photo styling, no logos, no watermark. Do not add a video play button or browser branding.
```

### 箭头修正提示词

```text
Use case: precise-object-edit
Edit the supplied ELPIS illustration with exactly one change to the data-flow arrows. Remove the curved downward arrow that currently goes from the big central UI dashboard directly to the database cylinder. Draw a short curved hand-ink arrow instead from the BFF server tower's right side to the database cylinder, clearly communicating UI <-> BFF -> database. Keep the existing bidirectional vertical UI/BFF arrow. Keep every other element, lettering, color, placement, paper texture, proportions, and hand-drawn style unchanged. No other edits.
```

