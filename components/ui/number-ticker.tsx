"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const initialValue = direction === "down" ? value : startValue
  const finalValue = direction === "down" ? startValue : value
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })
  const finalLabel = formatter.format(finalValue)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (reduceMotion) {
      springValue.jump(finalValue)
      return
    }

    let timer: ReturnType<typeof setTimeout> | null = null

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [
    delay,
    direction,
    finalValue,
    isInView,
    motionValue,
    reduceMotion,
    springValue,
    startValue,
    value,
  ])

  useEffect(() => {
    if (reduceMotion) return
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    })
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatter.format(latest)
      }
    })
  }, [decimalPlaces, reduceMotion, springValue])

  return (
    <span
      className={cn(
        "inline-block tracking-tight text-foreground tabular-nums",
        className
      )}
      {...props}
    >
      <span className="sr-only">{finalLabel}</span>
      <span ref={ref} aria-hidden="true">
        {reduceMotion ? finalLabel : formatter.format(initialValue)}
      </span>
    </span>
  )
}
