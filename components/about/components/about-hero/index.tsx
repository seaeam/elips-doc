type AboutHeroProps = {
  heroDescription: string
  heroTitle: string
}

export function AboutHero({ heroDescription, heroTitle }: AboutHeroProps) {
  return (
    <header className="pt-8 pb-12 md:pt-12 md:pb-16">
      <p className="about-enter mb-4 text-sm text-muted-foreground">
        ELPIS 文档
      </p>
      <h1 className="text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl">
        {heroTitle}
      </h1>
      <p
        className="about-enter mt-5 max-w-2xl text-base leading-8 text-muted-foreground"
        style={{ animationDelay: "80ms" }}
      >
        {heroDescription}
      </p>
    </header>
  )
}
