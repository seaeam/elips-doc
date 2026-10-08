import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react"

import { cn } from "@/lib/utils"

// Adapted from Magic UI. See magicui.LICENSE.txt.

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  style,
  ...props
}) => {
  return (
    <span
      {...props}
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
          ...style,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600 dark:text-neutral-400",

        // Shine effect
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat motion-reduce:animate-none",

        // Shine gradient
        "bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",

        className
      )}
    >
      {children}
    </span>
  )
}
