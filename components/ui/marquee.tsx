import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

// Adapted from Magic UI. See magicui.LICENSE.txt.

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group/marquee flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem] motion-reduce:overflow-visible",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(Number.isFinite(repeat) ? Math.max(1, Math.floor(repeat)) : 4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            aria-hidden={i > 0 ? true : undefined}
            inert={i > 0 ? true : undefined}
            className={cn(
              "flex shrink-0 justify-around gap-(--gap) motion-reduce:animate-none",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-focus-within/marquee:[animation-play-state:paused] group-hover/marquee:[animation-play-state:paused]":
                  pauseOnHover,
                "[animation-direction:reverse]": reverse,
                "motion-reduce:hidden": i > 0,
                "motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap":
                  i === 0,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
