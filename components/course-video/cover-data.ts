export type CoverArtwork =
  | "course-origin"
  | "industry-context"
  | "course-roadmap"
  | "audience"
  | "study-method"
  | "team"
  | "repetitive-work"
  | "architecture-foundation"
  | "domain-requirements"
  | "elpis-identity"
  | "solution-research"
  | "layered-architecture"
  | "vue-node"
  | "bff-design"
  | "model-architecture"
  | "git-init"
  | "gitflow"
  | "project-bootstrap"
  | "kernel-design"
  | "module-loader"
  | "engine-boot"
  | "request-router"
  | "static-api"
  | "logging"
  | "schema-validation"
  | "webpack-design"
  | "build-entry"
  | "resource-loaders"
  | "build-plugins"
  | "bundle-output"
  | "client-entry"
  | "runtime-integration"
  | "dsl-design"
  | "dsl-parser"
  | "model-api"
  | "model-page"
  | "app-list"
  | "app-config"
  | "header-view"
  | "dashboard-entry"
  | "lazy-load"
  | "sider-view"
  | "iframe-view"
  | "schema-view"
  | "table-fields"
  | "table-columns"
  | "table-interaction"
  | "table-business"
  | "search-config"
  | "search-linkage"
  | "model-review"
  | "component-dsl"
  | "component-registry"
  | "schema-form"
  | "create-form"
  | "edit-form"
  | "detail-panel"
  | "extract-package"
  | "package-boundary"
  | "build-extension"
  | "page-extension"
  | "package-publish"
  | "continuous-integration"
  | "continuous-deployment"
  | "login"
  | "auth-session"
  | "people-management"

type LessonCover = {
  artwork: CoverArtwork
  focus: string
  topics: string[]
}

type ChapterCover = {
  label: string
  lessons: LessonCover[]
}

const lesson = (
  artwork: CoverArtwork,
  focus: string,
  ...topics: string[]
): LessonCover => ({
  artwork,
  focus,
  topics,
})

export const CHAPTER_COVERS: Record<string, ChapterCover> = {
  "01": {
    label: "前言与学习路线",
    lessons: [
      lesson("course-origin", "ORIGIN", "课程初衷", "技术根基", "项目实践"),
      lesson("industry-context", "CONTEXT", "行业变化", "技术趋势", "成长路径"),
      lesson("course-roadmap", "ROADMAP", "课程全貌", "框架设计", "学习路线"),
      lesson("audience", "FOR YOU", "适合人群", "知识储备", "学习目标"),
      lesson("study-method", "METHOD", "学习方法", "动手实践", "复盘总结"),
      lesson("team", "ZTEAM", "团队协作", "经验分享", "共同成长"),
    ],
  },
  "02": {
    label: "行业分析与需求推导",
    lessons: [
      lesson("repetitive-work", "PROBLEM", "重复开发", "业务痛点", "效率瓶颈"),
      lesson(
        "architecture-foundation",
        "PURPOSE",
        "架构设计",
        "基础建设",
        "能力成长"
      ),
      lesson(
        "domain-requirements",
        "DOMAIN",
        "领域模型",
        "需求推导",
        "框架抽象"
      ),
    ],
  },
  "03": {
    label: "技术选型与架构设计",
    lessons: [
      lesson("elpis-identity", "ELPIS", "框架定位", "设计愿景", "项目边界"),
      lesson(
        "solution-research",
        "RESEARCH",
        "业界方案",
        "能力对比",
        "技术取舍"
      ),
      lesson(
        "layered-architecture",
        "LAYERS",
        "分层设计",
        "模块边界",
        "系统协作"
      ),
      lesson("vue-node", "VUE + NODE", "Vue 3", "Node.js", "技术选型"),
      lesson("bff-design", "BFF", "接口聚合", "服务分层", "前后端协作"),
      lesson("model-architecture", "MODEL", "领域模型", "配置驱动", "页面架构"),
    ],
  },
  "04": {
    label: "Node.js 服务端内核",
    lessons: [
      lesson("git-init", "GIT", "仓库初始化", "版本管理", "开发环境"),
      lesson("gitflow", "GITFLOW", "分支管理", "协同开发", "代码合并"),
      lesson(
        "project-bootstrap",
        "BOOTSTRAP",
        "项目结构",
        "依赖配置",
        "启动流程"
      ),
      lesson("kernel-design", "KERNEL", "内核设计", "分层职责", "加载机制"),
      lesson("module-loader", "LOADER", "模块加载", "目录约定", "自动装配"),
      lesson("engine-boot", "ENGINE", "配置加载", "路由装配", "服务启动"),
      lesson("request-router", "ROUTER", "请求路由", "页面渲染", "业务接入"),
      lesson("static-api", "API", "静态资源", "接口联调", "请求链路"),
      lesson("logging", "LOGGER", "日志记录", "异常处理", "签名校验"),
      lesson("schema-validation", "VALIDATE", "JSON Schema", "参数校验", "Ajv"),
    ],
  },
  "05": {
    label: "Webpack 工程化",
    lessons: [
      lesson("webpack-design", "WEBPACK", "构建设计", "开发环境", "编译流程"),
      lesson("build-entry", "ENTRY", "构建入口", "基础配置", "开发服务"),
      lesson("resource-loaders", "LOADER", "资源处理", "编译转换", "模块解析"),
      lesson("build-plugins", "PLUGIN", "构建插件", "页面生成", "资源管理"),
      lesson("bundle-output", "BUNDLE", "构建输出", "配置组织", "工程联调"),
      lesson("client-entry", "CLIENT", "前端入口", "基础建设", "页面组织"),
      lesson(
        "runtime-integration",
        "RUNTIME",
        "开发联调",
        "工程配置",
        "框架集成"
      ),
    ],
  },
  "06": {
    label: "Vue 3 领域模型",
    lessons: [
      lesson("dsl-design", "DSL", "配置语言", "领域建模", "JSON Schema"),
      lesson("dsl-parser", "PARSER", "DSL 解析", "配置转换", "模型引擎"),
      lesson("model-api", "API", "模型接口", "数据契约", "服务实现"),
      lesson("model-page", "PAGE", "模型应用", "页面渲染", "接口联动"),
      lesson("app-list", "APP LIST", "Dashboard", "应用列表", "接口设计"),
      lesson("app-config", "CONFIG", "应用配置", "模型入口", "数据加载"),
      lesson("header-view", "HEADER", "HeaderView", "头部导航", "应用切换"),
      lesson(
        "dashboard-entry",
        "DASHBOARD",
        "应用入口",
        "页面布局",
        "视图组织"
      ),
      lesson("lazy-load", "LAZY LOAD", "懒加载", "按需渲染", "模块拆分"),
      lesson("sider-view", "SIDER", "SiderView", "侧边导航", "路由联动"),
      lesson("iframe-view", "IFRAME", "IframeView", "页面嵌入", "视图扩展"),
      lesson("schema-view", "VIEW", "SchemaView", "配置驱动", "动态视图"),
      lesson(
        "table-fields",
        "TABLE / 01",
        "SchemaTable",
        "表格配置",
        "字段映射"
      ),
      lesson(
        "table-columns",
        "TABLE / 02",
        "SchemaTable",
        "数据展示",
        "列配置"
      ),
      lesson(
        "table-interaction",
        "TABLE / 03",
        "SchemaTable",
        "表格交互",
        "数据联动"
      ),
      lesson(
        "table-business",
        "TABLE / 04",
        "SchemaTable",
        "能力完善",
        "业务应用"
      ),
      lesson(
        "search-config",
        "SEARCH / 01",
        "查询配置",
        "条件表单",
        "数据筛选"
      ),
      lesson(
        "search-linkage",
        "SEARCH / 02",
        "条件联动",
        "接口查询",
        "查询重置"
      ),
      lesson("model-review", "RECAP", "模型复用", "组件边界", "设计复盘"),
    ],
  },
  "07": {
    label: "Vue 3 动态组件",
    lessons: [
      lesson("component-dsl", "DSL", "组件协议", "配置结构", "动态渲染"),
      lesson(
        "component-registry",
        "DYNAMIC",
        "组件注册",
        "动态加载",
        "调用机制"
      ),
      lesson("schema-form", "SCHEMA FORM", "字段配置", "表单渲染", "输入校验"),
      lesson("create-form", "CREATE", "新增表单", "数据提交", "组件复用"),
      lesson("edit-form", "EDIT", "数据回填", "编辑表单", "更新操作"),
      lesson("detail-panel", "DETAIL", "详情面板", "只读展示", "字段映射"),
    ],
  },
  "08": {
    label: "框架封装与发布",
    lessons: [
      lesson(
        "extract-package",
        "EXTRACT",
        "内核抽离",
        "npm link",
        "使用方验证"
      ),
      lesson(
        "package-boundary",
        "ENCAPSULATE",
        "框架封装",
        "依赖边界",
        "能力复用"
      ),
      lesson("build-extension", "EXTEND", "构建扩展", "配置合并", "业务入口"),
      lesson("page-extension", "INTEGRATE", "页面扩展", "组件协议", "业务接入"),
      lesson(
        "package-publish",
        "PUBLISH",
        "发布准备",
        "npm publish",
        "安装验证"
      ),
    ],
  },
  "09": {
    label: "应用与项目实践",
    lessons: [
      lesson("continuous-integration", "CI", "持续集成", "自动构建", "流水线"),
      lesson("continuous-deployment", "CD", "持续部署", "容器镜像", "应用发布"),
      lesson("login", "LOGIN", "登录流程", "身份认证", "会话管理"),
      lesson("auth-session", "AUTH", "登录校验", "访问控制", "安全登出"),
      lesson("people-management", "PEOPLE", "人员管理", "业务模型", "框架实践"),
    ],
  },
}

export function getLessonCover(chapterNumber: string, lessonNumber: number) {
  const chapter = CHAPTER_COVERS[chapterNumber] ?? CHAPTER_COVERS["01"]
  return {
    ...chapter,
    ...(chapter.lessons[lessonNumber - 1] ?? chapter.lessons[0]),
    chapterNumber,
    lessonNumber,
    totalLessons: chapter.lessons.length,
  }
}

export type LessonCoverData = ReturnType<typeof getLessonCover>
