import Link from "next/link"
import { ArrowRight, Info } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShineBorder } from "@/components/ui/shine-border"
import { NoiseTexture } from "@/components/ui/noise-texture"

export function FinalCta() {
  return (
    <section className="px-6 pb-20 md:px-10">
      <BlurFade inView className="mx-auto max-w-6xl">
        <Card className="relative overflow-hidden border border-foreground/10 bg-linear-to-br from-background to-muted/50">
          <ShineBorder
            borderWidth={1}
            duration={10}
            shineColor={[
              "rgba(255,255,255,0)",
              "rgba(120,119,198,0.5)",
              "rgba(255,255,255,0)",
            ]}
          />
          <CardContent className="grid gap-8 px-6 py-8 md:grid-cols-[1fr_auto] md:px-8 md:py-10">
            <NoiseTexture noiseOpacity={0.45} />
            <div className="flex flex-col gap-3">
              <Badge variant="secondary" className="px-3 py-1">
                开始阅读
              </Badge>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                从导览开始，再按章节深入
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                想先判断内容是否匹配自己的方向，可以先看导览；如果已经明确目标，直接进入课程目录即可。
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-stretch">
              <Button asChild>
                <Link href="/courses">
                  查看课程目录
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">
                  了解站点说明
                  <Info data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </section>
  )
}
