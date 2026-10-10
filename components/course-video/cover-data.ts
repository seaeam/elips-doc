export type CoverArtwork =
  | "orbit"
  | "discovery"
  | "architecture"
  | "core"
  | "build"
  | "schema"
  | "components"
  | "package"
  | "deployment"

type LessonCover = {
  focus: string
  topics: string[]
}

type ChapterCover = {
  artwork: CoverArtwork
  label: string
  accent: string
  background: string
  lessons: LessonCover[]
}

const lesson = (focus: string, ...topics: string[]): LessonCover => ({
  focus,
  topics,
})

export const CHAPTER_COVERS: Record<string, ChapterCover> = {
  "01": {
    artwork: "orbit",
    label: "THE BEGINNING",
    accent: "#e9c58d",
    background: "#191510",
    lessons: [
      lesson("ORIGIN", "课程初衷", "技术根基", "项目实践"),
      lesson("CONTEXT", "行业变化", "技术趋势", "成长路径"),
      lesson("ROADMAP", "课程全貌", "框架设计", "学习路线"),
      lesson("FOR YOU", "适合人群", "知识储备", "学习目标"),
      lesson("METHOD", "学习方法", "动手实践", "复盘总结"),
      lesson("ZTEAM", "团队协作", "经验分享", "共同成长"),
    ],
  },
  "02": {
    artwork: "discovery",
    label: "FIND THE PROBLEM",
    accent: "#f3a976",
    background: "#1c130e",
    lessons: [
      lesson("PROBLEM", "重复开发", "业务痛点", "效率瓶颈"),
      lesson("PURPOSE", "架构设计", "基础建设", "能力成长"),
      lesson("DOMAIN", "领域模型", "需求推导", "框架抽象"),
    ],
  },
  "03": {
    artwork: "architecture",
    label: "SYSTEM ARCHITECTURE",
    accent: "#91baff",
    background: "#0d1729",
    lessons: [
      lesson("ELPIS", "框架定位", "设计愿景", "项目边界"),
      lesson("RESEARCH", "业界方案", "能力对比", "技术取舍"),
      lesson("LAYERS", "分层设计", "模块边界", "系统协作"),
      lesson("VUE + NODE", "Vue 3", "Node.js", "技术选型"),
      lesson("BFF", "接口聚合", "服务分层", "前后端协作"),
      lesson("MODEL", "领域模型", "配置驱动", "页面架构"),
    ],
  },
  "04": {
    artwork: "core",
    label: "THE SERVER CORE",
    accent: "#8bdfb8",
    background: "#0c1c19",
    lessons: [
      lesson("GIT", "仓库初始化", "版本管理", "开发环境"),
      lesson("GITFLOW", "分支管理", "协同开发", "代码合并"),
      lesson("BOOTSTRAP", "项目结构", "依赖配置", "启动流程"),
      lesson("KERNEL", "内核设计", "分层职责", "加载机制"),
      lesson("LOADER", "模块加载", "目录约定", "自动装配"),
      lesson("ENGINE", "配置加载", "路由装配", "服务启动"),
      lesson("ROUTER", "请求路由", "页面渲染", "业务接入"),
      lesson("API", "静态资源", "接口联调", "请求链路"),
      lesson("LOGGER", "日志记录", "异常处理", "签名校验"),
      lesson("VALIDATE", "JSON Schema", "参数校验", "Ajv"),
    ],
  },
  "05": {
    artwork: "build",
    label: "BUILD ENGINEERING",
    accent: "#80d6f6",
    background: "#0b1b25",
    lessons: [
      lesson("WEBPACK", "构建设计", "开发环境", "编译流程"),
      lesson("ENTRY", "构建入口", "基础配置", "开发服务"),
      lesson("LOADER", "资源处理", "编译转换", "模块解析"),
      lesson("PLUGIN", "构建插件", "页面生成", "资源管理"),
      lesson("BUNDLE", "构建输出", "配置组织", "工程联调"),
      lesson("CLIENT", "前端入口", "基础建设", "页面组织"),
      lesson("RUNTIME", "开发联调", "工程配置", "框架集成"),
    ],
  },
  "06": {
    artwork: "schema",
    label: "SCHEMA TO INTERFACE",
    accent: "#b7a3ff",
    background: "#18132b",
    lessons: [
      lesson("DSL", "配置语言", "领域建模", "JSON Schema"),
      lesson("PARSER", "DSL 解析", "配置转换", "模型引擎"),
      lesson("API", "模型接口", "数据契约", "服务实现"),
      lesson("PAGE", "模型应用", "页面渲染", "接口联动"),
      lesson("APP LIST", "Dashboard", "应用列表", "接口设计"),
      lesson("CONFIG", "应用配置", "模型入口", "数据加载"),
      lesson("HEADER", "HeaderView", "头部导航", "应用切换"),
      lesson("DASHBOARD", "应用入口", "页面布局", "视图组织"),
      lesson("LAZY LOAD", "懒加载", "按需渲染", "模块拆分"),
      lesson("SIDER", "SiderView", "侧边导航", "路由联动"),
      lesson("IFRAME", "IframeView", "页面嵌入", "视图扩展"),
      lesson("VIEW", "SchemaView", "配置驱动", "动态视图"),
      lesson("TABLE / 01", "SchemaTable", "表格配置", "字段映射"),
      lesson("TABLE / 02", "SchemaTable", "数据展示", "列配置"),
      lesson("TABLE / 03", "SchemaTable", "表格交互", "数据联动"),
      lesson("TABLE / 04", "SchemaTable", "能力完善", "业务应用"),
      lesson("SEARCH / 01", "查询配置", "条件表单", "数据筛选"),
      lesson("SEARCH / 02", "条件联动", "接口查询", "查询重置"),
      lesson("RECAP", "模型复用", "组件边界", "设计复盘"),
    ],
  },
  "07": {
    artwork: "components",
    label: "COMPOSABLE INTERFACES",
    accent: "#f1a6d1",
    background: "#241222",
    lessons: [
      lesson("DSL", "组件协议", "配置结构", "动态渲染"),
      lesson("DYNAMIC", "组件注册", "动态加载", "调用机制"),
      lesson("SCHEMA FORM", "字段配置", "表单渲染", "输入校验"),
      lesson("CREATE", "新增表单", "数据提交", "组件复用"),
      lesson("EDIT", "数据回填", "编辑表单", "更新操作"),
      lesson("DETAIL", "详情面板", "只读展示", "字段映射"),
    ],
  },
  "08": {
    artwork: "package",
    label: "PACKAGE & RELEASE",
    accent: "#f5a997",
    background: "#231411",
    lessons: [
      lesson("EXTRACT", "内核抽离", "npm link", "使用方验证"),
      lesson("ENCAPSULATE", "框架封装", "依赖边界", "能力复用"),
      lesson("EXTEND", "构建扩展", "配置合并", "业务入口"),
      lesson("INTEGRATE", "页面扩展", "组件协议", "业务接入"),
      lesson("PUBLISH", "发布准备", "npm publish", "安装验证"),
    ],
  },
  "09": {
    artwork: "deployment",
    label: "FROM CODE TO PRODUCTION",
    accent: "#8ddcd7",
    background: "#0c2023",
    lessons: [
      lesson("CI", "持续集成", "自动构建", "流水线"),
      lesson("CD", "持续部署", "容器镜像", "应用发布"),
      lesson("LOGIN", "登录流程", "身份认证", "会话管理"),
      lesson("AUTH", "登录校验", "访问控制", "安全登出"),
      lesson("PEOPLE", "人员管理", "业务模型", "框架实践"),
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
