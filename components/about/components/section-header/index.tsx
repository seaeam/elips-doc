type SectionHeaderProps = {
  id: string
  title: string
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className="text-xl leading-8 font-medium tracking-tight text-foreground"
    >
      {title}
    </h2>
  )
}
