type SectionHeaderProps = {
  id: string
  title: string
  eyebrow?: string
  description?: string
}

export function SectionHeader({
  id,
  title,
  eyebrow,
  description,
}: SectionHeaderProps) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="scroll-mt-24 text-xl leading-8 font-medium tracking-tight text-foreground md:text-2xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
