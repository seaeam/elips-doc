"use client"

import { useRef, useState } from "react"
import {
  Boxes,
  Braces,
  Code2,
  Layers3,
  Package,
  PanelsTopLeft,
  Server,
} from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { BorderBeam } from "@/components/ui/border-beam"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

export function FrameworkMap() {
  const [view, setView] = useState<"map" | "code">("map")
  const container = useRef<HTMLDivElement>(null)
  const model = useRef<HTMLDivElement>(null)
  const server = useRef<HTMLDivElement>(null)
  const build = useRef<HTMLDivElement>(null)
  const core = useRef<HTMLDivElement>(null)
  const pages = useRef<HTMLDivElement>(null)
  const sdk = useRef<HTMLDivElement>(null)
  const nodeClass =
    "relative z-10 flex w-[88px] flex-col items-center gap-2 rounded-xl border border-border bg-background px-2 py-3 shadow-sm sm:w-[100px]"
  return (
    <div className="relative isolate min-w-0 overflow-hidden rounded-3xl border border-border/70 bg-muted/15">
      <div className="relative z-10 flex items-center justify-between border-b border-border/70 px-4 py-4 sm:px-6">
        <span className="font-mono text-[10px] tracking-[.16em] text-muted-foreground">
          INSIDE ELPIS
        </span>
        <div
          className="flex rounded-full border border-border bg-background p-1"
          aria-label="框架展示方式"
        >
          {(
            [
              ["map", "架构总览"],
              ["code", "入口代码"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={view === value}
              onClick={() => setView(value)}
              className={cn(
                "experience-focus cursor-pointer rounded-full px-3 py-1.5 text-[11px] transition-colors",
                view === value
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {view === "map" ? (
        <div
          ref={container}
          className="relative flex h-[330px] items-center justify-between px-5 sm:h-[360px] sm:px-8"
          aria-label="ELPIS 框架示意：领域模型、服务端、构建、页面与 npm 包"
        >
          <DotPattern
            width={20}
            height={20}
            cr={0.7}
            className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)] text-muted-foreground/25"
          />
          <div className="flex flex-col gap-5">
            <div ref={model} className={nodeClass}>
              <Braces className="size-5" />
              <span className="text-xs">领域模型</span>
              <span className="font-mono text-[9px] text-muted-foreground">
                JSON / DSL
              </span>
            </div>
            <div ref={server} className={nodeClass}>
              <Server className="size-5" />
              <span className="text-xs">服务内核</span>
              <span className="font-mono text-[9px] text-muted-foreground">
                NODE / KOA
              </span>
            </div>
            <div ref={build} className={nodeClass}>
              <Boxes className="size-5" />
              <span className="text-xs">工程构建</span>
              <span className="font-mono text-[9px] text-muted-foreground">
                WEBPACK 5
              </span>
            </div>
          </div>
          <div
            ref={core}
            className="relative z-10 flex size-[76px] flex-col items-center justify-center gap-1 rounded-2xl border border-foreground/20 bg-foreground text-background shadow-[0_0_50px_-15px_var(--muted-foreground)] sm:size-[92px]"
          >
            <Layers3 className="size-6 sm:size-7" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight">elpis</span>
            <BorderBeam
              colorFrom="#aaaaaa"
              colorTo="#ffffff"
              size={50}
              duration={8}
            />
          </div>
          <div className="flex flex-col gap-12">
            <div ref={pages} className={nodeClass}>
              <PanelsTopLeft className="size-5" />
              <span className="text-xs">动态页面</span>
              <span className="font-mono text-[9px] text-muted-foreground">
                VUE 3
              </span>
            </div>
            <div ref={sdk} className={nodeClass}>
              <Package className="size-5" />
              <span className="text-xs">npm 封装</span>
              <span className="font-mono text-[9px] text-muted-foreground">
                NPM / CI
              </span>
            </div>
          </div>
          <AnimatedBeam
            containerRef={container}
            fromRef={model}
            toRef={core}
            curvature={55}
            duration={7}
            gradientStartColor="var(--foreground)"
            gradientStopColor="var(--muted-foreground)"
          />
          <AnimatedBeam
            containerRef={container}
            fromRef={server}
            toRef={core}
            duration={7}
            delay={0.7}
            gradientStartColor="var(--foreground)"
            gradientStopColor="var(--muted-foreground)"
          />
          <AnimatedBeam
            containerRef={container}
            fromRef={build}
            toRef={core}
            curvature={-55}
            duration={7}
            delay={1.4}
            gradientStartColor="var(--foreground)"
            gradientStopColor="var(--muted-foreground)"
          />
          <AnimatedBeam
            containerRef={container}
            fromRef={core}
            toRef={pages}
            duration={7}
            delay={2}
            gradientStartColor="var(--foreground)"
            gradientStopColor="var(--muted-foreground)"
          />
          <AnimatedBeam
            containerRef={container}
            fromRef={core}
            toRef={sdk}
            duration={7}
            delay={2.6}
            gradientStartColor="var(--foreground)"
            gradientStopColor="var(--muted-foreground)"
          />
        </div>
      ) : (
        <div className="flex h-[330px] flex-col justify-center px-6 sm:h-[360px] sm:px-9">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Code2 className="size-4" /> index.js
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-8 sm:text-sm">
            <code>
              <span className="text-muted-foreground">
                {"// 业务项目入口\n"}
              </span>
              {
                "const elpis = require('elpis')\n\nelpis.serverStart({\n  name: 'my-application'\n})"
              }
            </code>
          </pre>
          <p className="mt-5 text-xs leading-6 text-muted-foreground">
            业务项目调用 serverStart 启动服务，框架负责加载配置、注册路由。
            <br />
            以上为调用方式示例。
          </p>
        </div>
      )}
      <div className="flex items-center justify-between border-t border-border/70 px-5 py-4 text-[11px] text-muted-foreground sm:px-6">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-foreground" /> 配置驱动 ·
          分层实现
        </span>
        <span className="font-mono">ELPIS FRAMEWORK</span>
      </div>
    </div>
  )
}
