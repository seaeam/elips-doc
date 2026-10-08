import { useCourseCatalogStore } from "../../store"

export function RoadmapPanel() {
  const roadmapSteps = useCourseCatalogStore((state) => state.roadmapSteps)

  return (
    <nav
      aria-label="按内容查阅"
      className="hidden lg:sticky lg:top-28 lg:block"
    >
      <p className="mb-4 text-xs font-medium text-muted-foreground">
        按内容查阅
      </p>
      <ol className="space-y-1">
        {roadmapSteps.map((step) => (
          <li key={step.range}>
            <a
              href={step.href}
              className="catalog-group-link flex min-h-12 items-center gap-4 rounded-md text-sm transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <span className="w-12 shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                {step.range}
              </span>
              <span>{step.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
