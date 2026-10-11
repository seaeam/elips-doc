// Dependency-free, deterministic SVG drawings for the repository's README.
// Run from the repository root: node docs/readme/generate-diagrams.mjs
import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const colors = {
  ink: "#263b45",
  muted: "#52616a",
  paper: "#fbf7ed",
  blue: "#dae9f1",
  green: "#e3ecd9",
  yellow: "#f8e9b6",
  coral: "#f7dfd0",
}
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]
  )
let seed = 506
const jitter = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0
  return (seed / 4294967296 - 0.5) * 4
}
const text = (x, y, value, size = 24, options = "") =>
  `<text x="${x}" y="${y}" font-size="${size}" ${options}>${escape(value)}</text>`
const path = (d, options = "") => {
  const defaults = {
    fill: "none",
    stroke: colors.ink,
    "stroke-width": "2.4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  }
  const attributes = Object.entries(defaults)
    .filter(([key]) => !new RegExp(`\\b${key}=`).test(options))
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")
  return `<path d="${d}" ${attributes} ${options}/>`
}
const arrow = (d, options = "") =>
  path(d, `marker-end="url(#arrow)" ${options}`)
function box(x, y, w, h, fill = colors.paper) {
  const d = `M ${x + 8} ${y} Q ${x + w / 2} ${y + jitter()} ${x + w - 6} ${y + 1} Q ${x + w + 2} ${y + 2} ${x + w} ${y + 10} L ${x + w + jitter()} ${y + h - 7} Q ${x + w} ${y + h + 2} ${x + w - 10} ${y + h} Q ${x + w / 2} ${y + h + jitter()} ${x + 5} ${y + h} Q ${x - 2} ${y + h} ${x} ${y + h - 8} L ${x + jitter()} ${y + 8} Q ${x} ${y - 1} ${x + 8} ${y} Z`
  return (
    `<path d="${d}" fill="${fill}" stroke="${colors.ink}" stroke-width="2.2"/>` +
    path(
      `M ${x + 12} ${y + h + 5} Q ${x + w / 2} ${y + h + 7} ${x + w + 5} ${y + h + 4} L ${x + w + 5} ${y + 14}`,
      'opacity=".16" stroke-width="1.5"'
    )
  )
}
function tag(x, y, value, fill = colors.yellow, width = 168) {
  return (
    box(x, y - 26, width, 38, fill) +
    text(x + 14, y, value, 19, 'font-weight="600"')
  )
}
function number(x, y, value, fill) {
  return (
    `<ellipse cx="${x}" cy="${y}" rx="27" ry="25" fill="${fill}" stroke="${colors.ink}" stroke-width="2.3" transform="rotate(-6 ${x} ${y})"/>` +
    text(
      x,
      y + 8,
      value,
      25,
      'text-anchor="middle" font-weight="700" class="hand"'
    )
  )
}
function star(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">${path("M 0 -13 L 4 -4 L 14 -3 L 6 4 L 9 14 L 0 8 L -10 14 L -7 3 L -14 -3 L -4 -5 Z", `fill="${colors.yellow}"`)}</g>`
}
function heading(title, subtitle, label) {
  return (
    text(52, 59, title, 34, 'font-weight="700"') +
    path(
      "M 52 77 Q 181 72 334 78",
      `stroke="${colors.yellow}" stroke-width="9" opacity=".9"`
    ) +
    text(52, 116, subtitle, 22, `fill="${colors.muted}"`) +
    text(
      1068,
      55,
      label,
      18,
      'text-anchor="end" class="hand" letter-spacing="2"'
    ) +
    star(1048, 103, 0.7)
  )
}
function save(name, height, title, description, body) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 ${height}" fill="${colors.ink}" role="img" aria-labelledby="title desc">
<title id="title">${escape(title)}</title><desc id="desc">${escape(description)}</desc>
<defs>
  <pattern id="paper-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".7" fill="#8e9ba0" opacity=".18"/></pattern>
  <marker id="arrow" markerWidth="11" markerHeight="11" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="${colors.ink}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <style>text { font-family: "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif; } .hand { font-family: "Chalkboard SE", "Comic Sans MS", cursive; }</style>
</defs>
<rect width="1120" height="${height}" rx="18" fill="${colors.paper}"/>
<rect width="1120" height="${height}" rx="18" fill="url(#paper-dots)"/>
${body}
${text(52, height - 24, "506 LAB  /  ELPIS COURSE NOTES", 15, 'class="hand" letter-spacing="2"')}
</svg>
`
  writeFileSync(fileURLToPath(new URL(name, import.meta.url)), svg)
}

// 01 / A winding learning route with phase-level lesson totals.
function phase(x, y, n, title, range, count, lines, fill) {
  return (
    box(x, y, 446, 211, fill) +
    number(x + 36, y + 37, n, colors.paper) +
    text(x + 79, y + 46, title, 29, 'font-weight="700"') +
    text(x + 27, y + 93, `${range}  /  ${count} 节`, 22, 'font-weight="600"') +
    lines.map((line, i) => text(x + 27, y + 136 + i * 35, line, 22)).join("")
  )
}
save(
  "learning-map.svg",
  736,
  "ELPIS 四阶段学习路线",
  "9 章、67 节：需求与架构 15 节，内核与工程化 17 节，模型与组件 25 节，发布与实践 10 节。按箭头从左上到右上，再到右下、左下阅读。",
  heading("课程学习路线", "9 章 · 67 节 · 4 个学习阶段", "05 / LEARNING MAP") +
    arrow("M 511 280 Q 558 268 601 280") +
    arrow("M 829 389 Q 840 420 829 451") +
    arrow("M 608 561 Q 560 571 519 560") +
    phase(
      62,
      174,
      "01",
      "需求与架构",
      "第 01–03 章",
      15,
      ["前言 → 需求推导 → 技术选型", "梳理需求，确定架构方案。"],
      colors.yellow
    ) +
    phase(
      610,
      174,
      "02",
      "内核与工程化",
      "第 04–05 章",
      17,
      ["Node.js 内核 + Webpack 5", "搭建服务端与构建环境。"],
      colors.blue
    ) +
    phase(
      610,
      455,
      "03",
      "模型与组件",
      "第 06–07 章",
      25,
      ["领域模型 + Vue 3 动态组件", "从 DSL 配置生成业务页面。"],
      colors.green
    ) +
    phase(
      62,
      455,
      "04",
      "发布与实践",
      "第 08–09 章",
      10,
      ["npm 封装 → 框架应用 → CI/CD", "发布框架，完成业务开发与部署。"],
      colors.coral
    ) +
    tag(429, 421, "按章节顺序学习", colors.paper, 252)
)

function panel(x, y, w, h, title, lines, fill = colors.paper) {
  return (
    box(x, y, w, h, fill) +
    text(x + 22, y + 37, title, 25, 'font-weight="700"') +
    lines.map((line, i) => text(x + 22, y + 75 + i * 32, line, 21)).join("")
  )
}

// 01 / Course framework architecture: UI -> BFF -> data and services.
save(
  "framework-architecture.svg",
  906,
  "ELPIS 框架架构",
  "展示层使用 Vue 3、Element Plus 和 Dashboard 模板，包含 Schema、Custom、Iframe 视图。请求进入 Node.js 与 Koa BFF 的接入层，再由 Controller 调用 Service，访问 MySQL 或外部服务。elpis-core 加载服务端模块，Webpack 5 负责前端构建。",
  heading(
    "ELPIS 整体架构",
    "展示层处理交互，BFF 组织业务，数据层提供存储与服务。",
    "01 / ARCHITECTURE"
  ) +
    box(52, 169, 1016, 211, colors.blue) +
    text(78, 211, "展示层 · Vue 3 + Element Plus", 28, 'font-weight="700"') +
    panel(
      78,
      237,
      290,
      114,
      "Dashboard 模板",
      ["头部导航 · 侧栏 · 路由"],
      colors.paper
    ) +
    panel(
      415,
      237,
      290,
      114,
      "Schema View",
      ["搜索 · 表格 · 动态表单"],
      colors.paper
    ) +
    panel(
      751,
      237,
      290,
      114,
      "扩展视图",
      ["Custom View / Iframe"],
      colors.paper
    ) +
    arrow("M 560 387 Q 555 415 560 445") +
    text(590, 423, "页面与接口请求", 21) +
    box(52, 452, 1016, 189, colors.green) +
    text(78, 493, "BFF · Node.js + Koa", 28, 'font-weight="700"') +
    panel(
      78,
      519,
      290,
      96,
      "接入层",
      ["Router · 校验 · 中间件"],
      colors.paper
    ) +
    panel(
      415,
      519,
      290,
      96,
      "Controller",
      ["参数整理 · 业务处理"],
      colors.paper
    ) +
    panel(751, 519, 290, 96, "Service", ["数据访问 · 服务调用"], colors.paper) +
    arrow("M 375 565 Q 390 561 407 565") +
    arrow("M 712 565 Q 728 569 743 565") +
    arrow("M 899 648 Q 894 674 899 704") +
    text(668, 682, "读写数据 / 调用服务", 21) +
    box(52, 711, 1016, 106, colors.coral) +
    text(78, 752, "数据与基础服务", 27, 'font-weight="700"') +
    text(78, 789, "MySQL · 业务数据", 23) +
    text(451, 789, "外部服务", 23) +
    text(770, 789, "Log4js · 日志", 23) +
    text(
      52,
      852,
      "elpis-core 加载服务端模块；Webpack 5 编译前端页面与资源。",
      21
    )
)

// 02 / Shared model and separate project overrides produce two applications.
save(
  "model-inheritance.svg",
  790,
  "领域模型与项目配置",
  "公共电商模型使用 Dashboard 模板，包含商品、订单和客户管理。项目 A 新增运营活动并覆盖订单视图，项目 B 新增数据分析并修改菜单名称。分别合并配置后形成两个应用，项目之间互不修改对方的配置。",
  heading(
    "同一模型，不同项目",
    "公共模块在模型中定义，各项目补充自己的菜单和配置。",
    "02 / DOMAIN MODEL"
  ) +
    panel(
      310,
      169,
      500,
      151,
      "电商领域模型",
      ["模板：dashboard", "公共模块：商品 / 订单 / 客户"],
      colors.yellow
    ) +
    arrow("M 457 327 C 455 376 286 348 286 403") +
    arrow("M 660 327 C 660 377 831 347 831 403") +
    text(88, 374, "模型 + 项目 A 配置", 22) +
    text(850, 374, "模型 + 项目 B 配置", 21) +
    panel(
      62,
      411,
      450,
      150,
      "项目 A · 差异配置",
      ["新增：运营活动", "覆盖：订单模块改用 iframe"],
      colors.blue
    ) +
    panel(
      608,
      411,
      450,
      150,
      "项目 B · 差异配置",
      ["新增：数据分析", "覆盖：部分菜单名称"],
      colors.coral
    ) +
    arrow("M 286 568 Q 292 594 286 620") +
    arrow("M 831 568 Q 825 594 831 620") +
    panel(
      62,
      628,
      450,
      98,
      "应用 A",
      ["商品 · 订单 · 客户 · 运营活动"],
      colors.green
    ) +
    panel(
      608,
      628,
      450,
      98,
      "应用 B",
      ["商品 · 订单 · 客户 · 数据分析"],
      colors.green
    ) +
    tag(430, 374, "按菜单 key 合并", colors.paper, 243)
)

// 03 / A field is consumed by three UI surfaces through different options.
save(
  "schema-to-ui.svg",
  758,
  "字段配置与界面组件",
  "商品名称字段的 tableOption 由 SchemaTable 消费，searchOption 由 SchemaSearchBar 消费，createFormOption 和 editFormOption 用于新增和编辑表单。界面中的商品与价格仅为示意数据。",
  heading(
    "一份字段，多个使用位置",
    "字段定义保持一致，表格、搜索和表单读取各自的 Option。",
    "03 / SCHEMA TO UI"
  ) +
    box(52, 183, 430, 493, colors.yellow) +
    text(79, 231, "productName", 29, 'font-weight="700"') +
    text(79, 272, "商品名称 / string", 23) +
    path("M 79 298 Q 247 300 453 298", 'opacity=".28"') +
    text(79, 350, "tableOption", 24) +
    text(79, 412, "searchOption", 24) +
    text(79, 475, "createFormOption", 24) +
    text(79, 538, "editFormOption", 24) +
    text(79, 630, "同一字段，按用途读取配置", 22) +
    arrow("M 488 344 C 572 344 559 259 643 259") +
    arrow("M 488 406 C 552 406 583 432 643 432") +
    arrow("M 488 469 C 565 469 554 600 643 600") +
    arrow("M 488 532 C 540 532 558 638 643 638") +
    box(652, 183, 414, 148, colors.blue) +
    text(675, 218, "SchemaTable", 25, 'font-weight="700"') +
    path(
      "M 675 239 L 1040 239 M 675 279 L 1040 279 M 930 239 L 930 312",
      'stroke-width="1.4" opacity=".45"'
    ) +
    text(682, 266, "商品名称", 20) +
    text(948, 266, "价格", 20) +
    text(682, 308, "无线键盘", 20) +
    text(948, 308, "¥299", 20) +
    box(652, 365, 414, 133, colors.green) +
    text(675, 403, "SchemaSearchBar", 25, 'font-weight="700"') +
    box(675, 424, 267, 47, colors.paper) +
    text(690, 454, "商品名称…", 20, `fill="${colors.muted}"`) +
    box(963, 424, 79, 47, colors.paper) +
    text(983, 455, "查询", 19) +
    box(652, 541, 414, 135, colors.coral) +
    text(675, 578, "新增 / 编辑表单", 25, 'font-weight="700"') +
    text(676, 629, "商品名称", 20) +
    box(780, 602, 259, 45, colors.paper) +
    text(796, 632, "填写或修改名称", 19, `fill="${colors.muted}"`) +
    text(52, 716, "界面为配置效果示意；查询和保存仍需对应的业务 API。", 22)
)

// 04 / Request sequence: the data source is reached through Service.
function lane(x, title, subtitle, fill) {
  return (
    box(x - 87, 169, 174, 87, fill) +
    text(x, 205, title, 24, 'text-anchor="middle" font-weight="700"') +
    text(x, 237, subtitle, 18, 'text-anchor="middle"') +
    path(`M ${x} 265 L ${x} 699`, 'stroke-dasharray="6 8" opacity=".28"')
  )
}
function message(from, to, y, label, response = false) {
  return (
    arrow(
      `M ${from} ${y} Q ${(from + to) / 2} ${y + 2} ${to} ${y}`,
      response ? 'stroke-dasharray="5 5"' : ""
    ) + text((from + to) / 2, y - 13, label, 19, 'text-anchor="middle"')
  )
}
save(
  "request-flow.svg",
  811,
  "人员列表查询流程",
  "页面向接入层发送查询条件和分页参数；接入层校验后调用 Controller，Controller 调用 Service，Service 访问数据源。数据记录沿反方向返回，由 Controller 组织分页结果，最后页面更新列表。实线表示调用，虚线表示返回。",
  heading(
    "人员列表查询流程",
    "请求经过接入层、Controller 和 Service，结果逐层返回页面。",
    "04 / REQUEST FLOW"
  ) +
    lane(148, "页面", "搜索栏 / 表格", colors.blue) +
    lane(354, "接入层", "路由 / 校验 / 中间件", colors.yellow) +
    lane(560, "Controller", "业务处理", colors.green) +
    lane(766, "Service", "数据访问", colors.green) +
    lane(972, "数据源", "MySQL / 外部服务", colors.coral) +
    message(148, 346, 310, "查询条件 / 分页") +
    message(354, 552, 368, "通过校验") +
    message(560, 758, 426, "查询业务数据") +
    message(766, 964, 484, "读库 / 调用服务") +
    message(972, 774, 535, "数据记录", true) +
    message(766, 568, 583, "返回查询结果", true) +
    message(560, 362, 631, "组织分页结果", true) +
    message(354, 156, 679, "返回 JSON", true) +
    tag(62, 745, "页面更新列表", colors.blue, 218) +
    text(611, 745, "实线：调用     虚线：返回", 21)
)

console.log("Generated 5 ELPIS course diagrams in docs/readme/.")
