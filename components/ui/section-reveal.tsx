"use client"

import { useEffect, useRef, type ReactNode } from "react"

type SectionRevealProps = {
  children: ReactNode
  className?: string
}

export function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      element.getBoundingClientRect().top < window.innerHeight - 24
    ) {
      return
    }

    element.dataset.reveal = "pending"
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          if (element.dataset.reveal === "pending") {
            element.dataset.reveal = "visible"
          }
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -24px 0px", threshold: 0.08 }
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      delete element.dataset.reveal
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`section-reveal ${className}`}
      onFocusCapture={() => {
        if (ref.current?.dataset.reveal === "pending") {
          delete ref.current.dataset.reveal
        }
      }}
    >
      {children}
    </div>
  )
}
