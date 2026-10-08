"use client"

import { useId, type SVGProps } from "react"

import { cn } from "@/lib/utils"

// Adapted from Magic UI. See magicui.LICENSE.txt.
interface DotPatternProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  glow?: boolean
  [key: string]: unknown
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId()

  // A repeating SVG tile uses a constant number of nodes at any viewport size.
  return (
    <svg
      {...props}
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        glow && "animate-pulse motion-reduce:animate-none",
        className
      )}
    >
      <defs>
        {glow && (
          <radialGradient id={`${id}-gradient`}>
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        )}
        <pattern
          id={id}
          width={Math.max(width, 1)}
          height={Math.max(height, 1)}
          x={x}
          y={y}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={cx}
            cy={cy}
            r={Math.max(cr, 0)}
            fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
