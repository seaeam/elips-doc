"use client"

import { useId, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Boxes,
  Code2,
  Component,
  Database,
  Package,
  RotateCw,
  Server,
} from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const examples = {
  product: {
    title: "商品管理",
    key: "product",
    field: "productName",
    label: "商品名称",
    second: "价格",
    rows: [
      ["无线键盘", "¥ 299"],
      ["桌面支架", "¥ 129"],
      ["便携显示器", "¥ 899"],
    ],
  },
  user: {
    title: "人员管理",
    key: "user",
    field: "userName",
    label: "姓名",
    second: "角色",
    rows: [
      ["张同学", "管理员"],
      ["李同学", "开发者"],
      ["王同学", "开发者"],
    ],
  },
}

export function SchemaPlayground() {
  const [active, setActive] = useState<keyof typeof examples>("product")
  const [query, setQuery] = useState("")
  const [submittedQuery, setSubmittedQuery] = useState("")
  const searchId = useId()
  const example = examples[active]
  const visibleRows = example.rows.filter(([name]) =>
    name.toLocaleLowerCase().includes(submittedQuery.toLocaleLowerCase())
  )

  function resetQuery() {
    setQuery("")
    setSubmittedQuery("")
  }

  return (
    <section
      aria-labelledby="home-playground-title"
      className="border-t border-border py-16 md:py-24"
    >
      <BlurFade inView>
        <p className="experience-eyebrow">02 / CONFIGURATION EXAMPLE</p>
        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2
            id="home-playground-title"
            className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl"
          >
            字段配置与页面示例
          </h2>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            以商品和人员两个模型为例，看看字段配置如何对应到表格。
          </p>
        </div>
      </BlurFade>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        <BlurFade
          inView
          className="min-w-0 rounded-2xl border border-border bg-muted/10 p-6 sm:p-8"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium">商品与人员管理</span>
            <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
              交互示例
            </span>
          </div>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            输入名称试试查询，也可以切换商品和人员模型。
          </p>
          <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
            <div className="min-w-0 overflow-hidden rounded-xl bg-zinc-950 text-zinc-200">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="size-1.5 rounded-full bg-zinc-600" />
                <span className="size-1.5 rounded-full bg-zinc-600" />
                <span className="size-1.5 rounded-full bg-zinc-600" />
                <span className="ml-2 font-mono text-[10px] text-zinc-400">
                  {example.key}.config.js
                </span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-7">
                <code>
                  <span className="text-zinc-500">{"// 字段配置片段\n"}</span>
                  {"{\n  "}
                  <span className="text-zinc-100">{example.field}</span>
                  {": {\n    type: 'string',\n    label: '"}
                  {example.label}
                  {"',\n    tableOption: {\n      visible: true\n    }\n  }\n}"}
                </code>
              </pre>
            </div>
            <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-background">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 text-[11px]">
                <span>{example.title}</span>
                <span className="text-[9px] text-muted-foreground">
                  PREVIEW
                </span>
              </div>
              <div className="px-4 py-5">
                <form
                  role="search"
                  aria-label={`${example.title}示例查询`}
                  onSubmit={(event) => {
                    event.preventDefault()
                    setSubmittedQuery(query.trim())
                  }}
                  onReset={resetQuery}
                  className="mb-4 flex items-center gap-2 text-[10px]"
                >
                  <label htmlFor={searchId} className="sr-only">
                    按{example.label}查询
                  </label>
                  <input
                    id={searchId}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={`按${example.label}查询…`}
                    autoComplete="off"
                    aria-describedby={`${searchId}-results`}
                    className="h-8 min-w-0 flex-1 rounded border border-border bg-muted/30 px-2 text-foreground outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="experience-focus h-8 shrink-0 cursor-pointer rounded bg-foreground px-2.5 text-background transition-opacity hover:opacity-80"
                  >
                    查询
                  </button>
                  <button
                    type="reset"
                    disabled={!query && !submittedQuery}
                    className="experience-focus h-8 shrink-0 cursor-pointer rounded border border-border px-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-default disabled:opacity-40"
                  >
                    重置
                  </button>
                </form>
                <table className="w-full text-left text-[11px]">
                  <caption className="sr-only">{example.title}示例数据</caption>
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="pb-3 font-normal">{example.label}</th>
                      <th className="pb-3 text-right font-normal">
                        {example.second}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map(([name, value]) => (
                      <tr key={name} className="border-b border-border/50">
                        <td className="py-3">{name}</td>
                        <td className="py-3 text-right text-muted-foreground">
                          {value}
                        </td>
                      </tr>
                    ))}
                    {visibleRows.length === 0 && (
                      <tr>
                        <td
                          colSpan={2}
                          className="py-8 text-center leading-6 text-muted-foreground"
                        >
                          未找到匹配的{active === "product" ? "商品" : "人员"}
                          <span className="block text-[10px]">
                            换个关键词，或重置查看全部
                          </span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <p
                  id={`${searchId}-results`}
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className="mt-5 text-[9px] text-muted-foreground"
                >
                  {example.title}示例 · 显示 {visibleRows.length} / {example.rows.length} 条
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <ShimmerButton
              type="button"
              onClick={() => {
                setActive(active === "product" ? "user" : "product")
                resetQuery()
              }}
              background="var(--foreground)"
              shimmerColor="#999999"
              borderRadius="999px"
              className="experience-focus gap-2 px-4 py-2.5 text-xs text-background"
            >
              <RotateCw className="size-3.5" aria-hidden="true" />
              切换{active === "product" ? "人员" : "商品"}模型
            </ShimmerButton>
            <Link
              href="/courses/06-vue3-domain-model-architecture/01"
              className="experience-focus inline-flex items-center gap-1 rounded text-xs text-muted-foreground hover:text-foreground"
            >
              阅读 DSL 设计{" "}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </BlurFade>
        <BlurFade
          inView
          delay={0.1}
          className="flex flex-col overflow-hidden rounded-2xl border border-border bg-muted/15"
        >
          <div
            className="relative flex h-[280px] shrink-0 items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute size-32 rounded-full bg-muted blur-2xl" />
            <div className="relative z-10 flex size-20 flex-col items-center justify-center rounded-full border border-border bg-background shadow-sm">
              <Component className="size-6" />
              <span className="mt-1 font-mono text-[9px]">REUSABLE</span>
            </div>
            <OrbitingCircles
              radius={108}
              duration={45}
              iconSize={42}
              className="border border-border bg-background shadow-sm"
            >
              <Braces className="size-5" />
              <Server className="size-5" />
              <Boxes className="size-5" />
              <Database className="size-5" />
              <Package className="size-5" />
            </OrbitingCircles>
          </div>
          <div className="mt-auto px-7 pt-1 pb-8">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
              NPM PACKAGE
            </p>
            <h3 className="mt-3 text-xl font-medium">封装成 npm 包</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              将服务端内核、构建配置和公共组件抽离到 npm
              包，供业务项目安装使用。
            </p>
            <Link
              href="/courses/08-framework-npm-package-and-release/01"
              className="experience-focus mt-5 inline-flex items-center gap-2 rounded text-xs"
            >
              查看封装与发布章节{" "}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </BlurFade>
      </div>
      <div className="mt-7 grid gap-6 sm:grid-cols-3">
        {[
          {
            icon: Server,
            title: "服务端内核",
            text: "实现 Loader、路由、中间件与业务服务。",
            href: "/courses/04-nodejs-server-core-engine/04",
          },
          {
            icon: Code2,
            title: "动态组件",
            text: "实现表格、搜索、表单与详情组件。",
            href: "/courses/07-vue3-dynamic-component-library/01",
          },
          {
            icon: Package,
            title: "持续集成与部署",
            text: "配置构建任务、镜像发布和应用部署。",
            href: "/courses/09-bonus-framework-application-and-practice/01",
          },
        ].map(({ icon: Icon, title, text, href }) => (
          <Link
            key={title}
            href={href}
            className="experience-focus group flex items-start gap-3 rounded-lg p-2"
          >
            <Icon
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-sm font-medium underline-offset-4 group-hover:underline">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">
                {text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
