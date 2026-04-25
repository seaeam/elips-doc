import { Badge } from "@/components/ui/badge"

type SectionHeaderProps = {
  badge: string
  description: string
  title: string
}

export function SectionHeader({
  badge,
  description,
  title,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <Badge variant="secondary" className="px-3 py-1">
        {badge}
      </Badge>
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
