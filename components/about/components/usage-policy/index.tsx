import type { AboutRule } from "../../types"
import { SectionHeader } from "../section-header"

type UsagePolicyProps = {
  policyRules: AboutRule[]
}

export function UsagePolicy({ policyRules }: UsagePolicyProps) {
  return (
    <section
      aria-labelledby="about-usage-title"
      className="grid gap-7 border-t border-border py-10 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 md:py-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14"
    >
      <SectionHeader
        id="about-usage-title"
        title="使用说明"
        eyebrow="06 / FOR THE LAB"
      />
      <dl className="grid max-w-2xl gap-7 sm:grid-cols-2">
        {policyRules.map((rule) => (
          <div key={rule.title}>
            <dt className="text-base leading-7 font-medium text-foreground">
              {rule.title}
            </dt>
            <dd className="mt-1 text-sm leading-7 text-muted-foreground">
              {rule.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
