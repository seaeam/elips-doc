import React from "react"

import { cn } from "@/lib/utils"

// Adapted from Magic UI. See magicui.LICENSE.txt.

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  style,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = Math.max(duration, 0.1) / Math.max(speed, 0.1)
  const items = React.Children.toArray(children)
  return (
    <>
      {path && (
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {items.map((child, index) => {
        const angle = (360 / items.length) * index
        return (
          <div
            key={React.isValidElement(child) ? (child.key ?? index) : index}
            {...props}
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
                animationDelay: `${delay}s`,
                transform: `rotate(${angle}deg) translateY(${radius}px) rotate(${-angle}deg)`,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex size-(--icon-size) transform-gpu animate-orbit items-center justify-center rounded-full motion-reduce:animate-none",
              { "[animation-direction:reverse]": reverse },
              className
            )}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
