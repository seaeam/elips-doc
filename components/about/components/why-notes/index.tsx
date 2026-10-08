import { ReadingFlow } from "../reading-flow"
import { SectionHeader } from "../section-header"

export function WhyNotes() {
  return (
    <section
      aria-labelledby="about-why-title"
      className="border-t border-border py-10 md:py-14"
    >
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12 lg:gap-20">
        <div>
          <SectionHeader
            id="about-why-title"
            title="为什么整理这份笔记"
            eyebrow="02 / WHY WE TAKE NOTES"
          />
          <p className="mt-5 max-w-lg text-sm leading-8 text-muted-foreground">
            视频适合跟着演示学习，但想找一段代码、一个配置项时，来回拖动进度条并不方便。把这些内容按章节记下来，之后查找会容易一些。
          </p>
          <p className="mt-4 max-w-lg text-sm leading-8 text-muted-foreground">
            笔记保留了 ELPIS 的主要实现步骤，包括 Node.js 服务端、Vue 3
            页面、Webpack 5 构建、npm 封装和
            CI/CD。章节顺序与原课程一致，方便对照视频。
          </p>
          <p className="mt-7 border-l-2 border-foreground/25 pl-4 text-sm leading-7 text-foreground">
            讲解和演示看视频，代码与配置查笔记。
          </p>
        </div>
        <ReadingFlow />
      </div>
    </section>
  )
}
