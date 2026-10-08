"use client"

import {
  useCallback,
  useEffect,
  type PointerEvent,
  type ReactNode,
} from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionStyle,
} from "motion/react"

import { cn } from "@/lib/utils"

// Adapted from Magic UI. See magicui.LICENSE.txt.
interface MagicCardBaseProps {
  children?: ReactNode
  className?: string
  gradientSize?: number
  gradientFrom?: string
  gradientTo?: string
}

interface MagicCardGradientProps extends MagicCardBaseProps {
  mode?: "gradient"
  gradientColor?: string
  gradientOpacity?: number
  glowFrom?: never
  glowTo?: never
  glowAngle?: never
  glowSize?: never
  glowBlur?: never
  glowOpacity?: never
}

interface MagicCardOrbProps extends MagicCardBaseProps {
  mode: "orb"
  glowFrom?: string
  glowTo?: string
  glowAngle?: number
  glowSize?: number
  glowBlur?: number
  glowOpacity?: number
  gradientColor?: never
  gradientOpacity?: never
}

type MagicCardProps = MagicCardGradientProps | MagicCardOrbProps

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#a3a3a3",
  gradientOpacity = 0.12,
  gradientFrom = "#d4d4d4",
  gradientTo = "#737373",
  mode = "gradient",
  glowFrom = "#d4d4d4",
  glowTo = "#737373",
  glowAngle = 90,
  glowSize = 420,
  glowBlur = 60,
  glowOpacity = 0.25,
}: MagicCardProps) {
  const reduceMotion = useReducedMotion()
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)
  const orbX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbVisible = useSpring(0, { stiffness: 300, damping: 35 })
  const borderBackground = useMotionTemplate`
    linear-gradient(var(--color-background) 0 0) padding-box,
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom}, ${gradientTo}, var(--color-border) 100%
    ) border-box
  `
  const gradientBackground = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor}, transparent 100%
    )
  `

  const reset = useCallback(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
    orbVisible.set(0)
  }, [gradientSize, mouseX, mouseY, orbVisible])

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      // Coarse pointers should scroll cards without a hover effect following them.
      if (reduceMotion || event.pointerType === "touch") return
      const rect = event.currentTarget.getBoundingClientRect()
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
      if (mode === "orb") orbVisible.set(glowOpacity)
    },
    [glowOpacity, mode, mouseX, mouseY, orbVisible, reduceMotion]
  )

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset()
    }
    window.addEventListener("blur", reset)
    document.addEventListener("visibilitychange", handleVisibility)
    return () => {
      window.removeEventListener("blur", reset)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [reset])

  return (
    <motion.div
      className={cn(
        "group/magic-card relative isolate overflow-hidden rounded-[inherit] border border-transparent",
        className
      )}
      onPointerMove={reduceMotion ? undefined : handlePointerMove}
      onPointerLeave={reduceMotion ? undefined : reset}
      style={{
        background: reduceMotion ? "var(--color-border)" : borderBackground,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-px z-20 rounded-[inherit] bg-background"
      />
      {!reduceMotion && mode === "gradient" && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/magic-card:opacity-(--magic-gradient-opacity)"
          style={
            {
              background: gradientBackground,
              "--magic-gradient-opacity": gradientOpacity,
            } as MotionStyle
          }
        />
      )}
      {!reduceMotion && mode === "orb" && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-30 mix-blend-multiply dark:mix-blend-screen"
          style={{
            width: glowSize,
            height: glowSize,
            x: orbX,
            y: orbY,
            translateX: "-50%",
            translateY: "-50%",
            borderRadius: 9999,
            filter: `blur(${glowBlur}px)`,
            opacity: orbVisible,
            background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
          }}
        />
      )}
      <div className="relative z-40">{children}</div>
    </motion.div>
  )
}
