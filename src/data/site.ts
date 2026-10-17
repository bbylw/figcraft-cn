export const site = {
  name: "FigCraft",
  tagline: "界面设计：一个开源、洁净室重新实现的 Figma，用纯 Rust 重写。",
  description:
    "FigCraft 是一个开源、洁净室、纯 Rust 重写的界面设计工具：画框、自动布局、组件与变体、矢量网络、样式、变量与原型，全部运行于秒开的原生应用，可离线使用。",
  repo: "https://github.com/storytold/figcraft",
  releases: "https://github.com/storytold/figcraft/releases",
  docs: "https://github.com/storytold/figcraft/tree/main/docs",
  mcp: "https://github.com/storytold/figcraft/blob/main/docs/mcp.md",
  discord: "https://discord.gg/artcraft",
  artcraft: "https://getartcraft.com/",
  appsIndex: "https://getartcraft.com/apps",
  figcraftApp: "https://getartcraft.com/apps/figcraft",
};

export const nav = [
  { label: "一览", href: "#look" },
  { label: "功能特性", href: "#features" },
  { label: "为智能体", href: "#agents" },
  { label: "GitHub", href: site.repo },
];

export const hero = {
  line1: "一个用纯 Rust",
  line2: "重写的界面设计工具",
  sub: "画框、自动布局、组件与变体、矢量网络、样式、变量与原型，都在一个秒开的原生应用里，离线可用，开源，属于你。",
  primary: { label: "下载 FigCraft", href: site.releases },
  secondary: { label: "看源码", href: site.repo },
};

/* showcase：输入一条命令，得到一个文件 */
export const showcase = {
  headLeft: "一条命令进去",
  headRight: "一屏设计出来",
  command: `file.newFromTemplate {
  "template": "dashboard"
}`,
  note: "这条命令走的是 MCP 服务器；在界面上点「文件 ▸ 从模板新建…」，跑的是同一条。",
  output: {
    src: "/img/art-dashboard.png",
    w: 2880,
    h: 1920,
    alt: "Ridgeline Studio 仪表盘：深色海军蓝侧边栏带导航，活跃徒步者、签到、平均评分与未决事件的 KPI 卡片带迷你走势图，按天分组的柱状图带提示框，难度环形图，带状态徽标的热门路线表格，以及访客面积图",
    caption:
      "Ridgeline Studio：基于 12 列网格的桌面仪表盘，每张图表都由图形与矢量绘制而成。",
  },
};

/* 一览：真实的编辑器截图 */
export type LookItem = {
  title: string;
  desc: string;
  file?: string;
  src: string;
  w: number;
  h: number;
  alt: string;
};

export const look: LookItem[] = [
  {
    title: "组件与变体",
    desc: "组件集、变体属性与资源面板：按钮组件集由九种变体以三乘三网格自动布局排布，样式与状态都是变体属性。",
    file: "examples/ridgeline-design-system.figcraft",
    src: "/img/shot-2-components.png",
    w: 1440,
    h: 900,
    alt: "Ridgeline UI 设计系统已打开，左侧资源面板显示按钮、难度、搜索框、开关与图标组件的实时缩略图；选中了一个由九种变体组成、以三乘三网格自动布局排布的按钮组件集，设计面板列出其样式（Primary、Tonal、Outline）与状态（Default、Hover、Disabled）变体属性",
  },
  {
    title: "原型制作",
    desc: "连接线、触发器、转场与流程：四块引导注册的手机屏幕由蓝色连接曲线连向下一屏。",
    file: "examples/ridgeline-onboarding.figcraft",
    src: "/img/shot-3-prototype.png",
    w: 1440,
    h: 900,
    alt: "原型标签页中四块引导注册的手机屏幕，由蓝色连接曲线从 Get started、Continue、Allow location 与 Not now 按钮连向下一屏；选中了 Get started 按钮，原型面板显示其 On click、Navigate to 2 Interests 交互",
  },
  {
    title: "开发模式",
    desc: "就绪待开发状态、标注与代码：组件的属性直接成为生成代码的形参。",
    file: "examples/ridgeline-app.figcraft",
    src: "/img/shot-4-devmode.png",
    w: 1440,
    h: 900,
    alt: "Ridgeline 首页的开发模式：画框带有 Ready for dev 徽标，一条 Development 标注指向精选路线卡片，选中了一个路线行实例，检查面板显示生成的 React 代码，含 TrailRow props 接口以及该实例的标题与详情值",
  },
  {
    title: "矢量网络",
    desc: "锚点与控制柄、可变宽度描边、保持可编辑的布尔运算。",
    file: "examples/glass-and-vectors.figcraft",
    src: "/img/shot-5-vector.png",
    w: 1440,
    h: 900,
    alt: "一段带渐变、锥形可变宽度描边的波浪路径的矢量编辑模式：可见其锚点、贝塞尔控制柄以及选中点的变换框，底部是矢量编辑工具栏；其上方是一个由布尔运算构建的山形标记，以及一个由排除环组成的角向渐变结",
  },
  {
    title: "布局网格与样式",
    desc: "12 列网格、填充 / 文本 / 效果 / 网格样式，全部由图形绘制的图表。",
    file: "examples/ridgeline-studio-dashboard.figcraft",
    src: "/img/shot-6-dashboard-light.png",
    w: 1440,
    h: 900,
    alt: "浅色 UI 主题下一个虚构徒步运营商的网站分析仪表盘：深色侧边栏、带迷你走势图的 KPI 卡片、分组柱状图、环形图、热门路线表格与面积图，画框的 12 列布局网格显示为淡色列",
  },
  {
    title: "实时协作会话",
    desc: "光标、选区、光标聊天与聚焦：在一个 figcraft-server 文件上的三个应用。",
    src: "/img/shot-7-collab.png",
    w: 1440,
    h: 900,
    alt: "从一名参与者窗口看到的实时协作会话：右上角三个人的头像，一条 Priya Nair 正在聚焦的横幅带 Follow 按钮，Priya 的深色首页轨迹卡片上的绿色光标与选区，以及 Jonas Ortiz 在 Start hike 按钮上的紫色光标与选区，附带他的光标聊天气泡",
  },
];

/* 功能特性：三种入口，同一条命令 */
export const featureCols = ["界面点击", "命令行", "MCP / JSON"] as const;

export type FeatureRow = {
  name: string;
  ui: string;
  cli: string;
  mcp: string;
};

export const features: FeatureRow[] = [
  {
    name: "新建画框",
    ui: "工具栏取画框，在画布上拖出尺寸",
    cli: "<code>figcraft-cli run make-frame.json</code>",
    mcp: "<code>frame.create</code> 带上宽高与名字",
  },
  {
    name: "设置自动布局",
    ui: "设计面板里选方向、间距与内边距",
    cli: "<code>figcraft-cli commands --filter autoLayout</code>",
    mcp: "<code>autoLayout.set</code> 支持 fr 轨道与换行",
  },
  {
    name: "建组件与变体",
    ui: "右键建组件集，拖出九个变体",
    cli: "<code>figcraft-cli run build-card.json</code>",
    mcp: "<code>component.createVariant</code> 批量铺开",
  },
  {
    name: "绑定变量",
    ui: "在变量表里改模式，画布跟着换",
    cli: "脚本改一处，全文件生效",
    mcp: "<code>variable.bind</code> 绑到填充与描边",
  },
  {
    name: "画矢量路径",
    ui: "钢笔、铅笔与矢量编辑模式",
    cli: "按坐标描点，可复现",
    mcp: "<code>vector.path</code> 逐点写入",
  },
  {
    name: "布尔运算",
    ui: "并集、减去、相交、排除",
    cli: "操作数保持可编辑",
    mcp: "<code>boolean.union</code> 结果实时更新",
  },
  {
    name: "加原型交互",
    ui: "拖一条连接线，选 On click",
    cli: "写成脚本，一次接通十屏",
    mcp: "<code>interaction.add</code> 含条件变量",
  },
  {
    name: "导出资源",
    ui: "选中图层，按倍率导出",
    cli: "<code>figcraft-cli export -o out/ --format svg</code>",
    mcp: "<code>export.run</code> 无界面批量出图",
  },
  {
    name: "跑一个插件",
    ui: "插件菜单里点一下",
    cli: "沙箱内计量执行，算一步撤销",
    mcp: "<code>plugin.run</code> 权限限于清单",
  },
];

/* 功能特性：六个方面，写全 */
export const featureProse = [
  {
    h: "自行构建的布局",
    p: "两个方向的自动布局，支持换行与网格（固定、包裹和 fr 轨道，可跨列的单元格）、内边距、间距、包含文字基线的对齐方式、包裹 / 填充 / 固定尺寸、最小与最大尺寸、绝对定位，以及画布上直接拖动调整内边距与间距的操作手柄；用方向键可以让子元素在流式布局、网格单元与嵌套画框之间移动。其余情况交给约束与布局网格。",
  },
  {
    h: "可扩展的组件",
    p: "主组件、带可保留覆盖的实例、带变体的组件集、属性、交换实例、分离、重置覆盖与跳转主组件，以及带实时缩略图、可搜索并拖拽到画框与自动布局中的资源面板。本地样式与变量（颜色、数字、字符串、布尔）支持模式、别名与作用域，可在变量表中编辑，并绑定到填充、描边、效果、布局网格与实例属性。",
  },
  {
    h: "毫不妥协的矢量",
    p: "真正的矢量网络：钢笔与铅笔工具，带专属工具的矢量编辑模式（可延伸并分叉路径的钢笔、弯曲、油漆桶、套索、裁剪），带控制柄镜像与逐点圆角的点面板。布尔组（并集、减去、相交、排除）的操作数在画布上保持可编辑，结果随每次拖拽实时更新。还有扁平化、描边转轮廓、箭头、虚线、逐边描边与可变宽度描边。",
  },
  {
    h: "填充与效果",
    p: "纯色、线性、径向、角向与菱形渐变（带画布手柄）、图像填充（填充、适配、裁剪、平铺）、多重填充与描边、全部混合模式、投影与内阴影、图层与背景模糊（均匀或渐进）、噪声（单色、双色、多色）、纹理与玻璃（折射、色散、磨砂、光照）、蒙版。文件采用 sRGB 或 Display P3，导出时标记色彩配置。",
  },
  {
    h: "精美的文字排版",
    p: "在画布上就地编辑文字（支持内联输入法合成），段落内混排样式，自动宽度与自动高度，行高、字距与段间距，装饰、大小写、列表、OpenType 特性、可变字体轴与文字样式。从右到左与混合方向文字（阿拉伯语、希伯来语）遵循 Unicode bidi 算法，由 HarfRust 塑形。",
  },
  {
    h: "原型与交付",
    p: "连接、触发器、操作与 Smart Animate 式转场，带条件变量的变量（交互编辑器内置 if / else if / else，以及 count + 1 这类表达式），流程，带设备边框的演示视图与实时预览窗格。按住 Alt 在画布上测量距离与内边距；就绪待开发列表与比较更改；代码输出 CSS、HTML、React、Leptos、SwiftUI、Compose。评论线程与具名版本历史。",
  },
];

/* 三步：一屏走完 */
export const steps = [
  {
    line: "先画好一屏。",
    sub: "自动布局决定间距，组件决定复用，变量决定颜色。两万个节点的文件里新建一个节点，不到一毫秒。",
  },
  {
    line: "再接上交互。",
    sub: "从按钮拖一条连线到下一屏，选 On click ▸ Navigate to。条件逻辑直接写在交互编辑器里。",
  },
  {
    line: "最后交出去。",
    sub: "标注、测量、就绪待开发列表，以及 React、SwiftUI、Compose 代码——组件的属性就是形参。",
  },
];

/* 底层实现：磁贴 */
export const proofTiles = [
  { name: "Rust", note: "引擎、界面与插件，全部纯 Rust" },
  { name: "egui", note: "轻量、可替换的界面层" },
  { name: "tiny-skia", note: "画布与导出的自有渲染" },
  { name: "kurbo", note: "几何：贝塞尔与布尔的底座" },
  { name: "linesweeper", note: "布尔运算的来源" },
  { name: "skrifa", note: "字体度量与可变字体轴" },
  { name: "HarfRust", note: "文字塑形，含阿拉伯语与希伯来语" },
  { name: "WebAssembly", note: "整套引擎与界面都能编译过去" },
  { name: "craft-fonts", note: "开源字体，缺了就回退系统字体" },
  { name: "MIT / Apache-2.0", note: "双重许可，任选其一" },
];

export const proofFacts = [
  { k: "引擎优先", v: "纯数据文档模型与命令引擎，跨 crate 的层级依赖在构建时检查（cargo xtask layers）。" },
  { k: "持久化数据", v: "文档存在不可变有序映射里，撤销快照开销极低，只重访发生变化的部分。" },
  { k: "可在浏览器运行", v: "安装 trunk 后跑 cargo xtask wasm，引擎与界面一起进浏览器。" },
  { k: "无障碍", v: "屏幕阅读器可取到名称、角色、值与状态；F6 在工具栏、图层、画布与属性之间移动焦点。" },
  { k: "多语言", v: "英语、俄语与土耳其语经母语者审校；另有九种草稿语言，新增一门只需一个目录文件。" },
  { k: "永不崩溃", v: "已发布代码中没有 unwrap、expect 或 panic，由 clippy 强制保证。" },
  { k: "洁净室", v: "仅依据公开文档与可观察的行为实现，不含专有代码、文件格式、图标或图像。" },
  { k: "自建服务器（预览）", v: "figcraft-server 保管团队的多个文件，发放编辑或仅查看的链接与加入码。" },
];

/* 由 FigCraft 制作 */
export type Print = {
  src: string;
  w: number;
  h: number;
  alt: string;
  pos: string;
  values: [string, string, string, string];
  meta: [string, string];
  maker: string;
  strip: "a" | "b" | "c" | "d";
};

export const prints: Print[] = [
  {
    src: "/img/art-app-home.png",
    w: 786,
    h: 1704,
    alt: "浅色模式的 Ridgeline 首页：一句问候语、一个搜索框、筛选标签、一张带插画山景的精选路线卡片、附近路线列表，以及半透明标签栏",
    pos: "50% 0%",
    values: ["390 × 844", "Light", "2× 导出", "9 组件"],
    meta: ["ridgeline-app.figcraft", "首页"],
    maker: "Ridgeline · 首页（浅色）",
    strip: "a",
  },
  {
    src: "/img/art-app-trail.png",
    w: 786,
    h: 1704,
    alt: "Ridgeline 路线详情屏幕：一张黄昏山景插画配玻璃按钮、一个带难度标签的表单、路线名称、距离、爬升与时长统计、一条爬升剖面图，以及一个 Start hike 按钮",
    pos: "50% 0%",
    values: ["390 × 844", "Light", "2× 导出", "12 组件"],
    meta: ["ridgeline-app.figcraft", "路线详情"],
    maker: "Ridgeline · 路线详情",
    strip: "b",
  },
  {
    src: "/img/art-app-home-dark.png",
    w: 786,
    h: 1704,
    alt: "同一 Ridgeline 首页的深色模式，其颜色由主题变量集合的 Dark 模式切换",
    pos: "50% 0%",
    values: ["390 × 844", "Dark", "2× 导出", "9 组件"],
    meta: ["ridgeline-app.figcraft", "首页 · Dark"],
    maker: "Ridgeline · 首页（深色）",
    strip: "d",
  },
  {
    src: "/img/art-dashboard.png",
    w: 2880,
    h: 1920,
    alt: "Ridgeline Studio 仪表盘：深色海军蓝侧边栏带导航，活跃徒步者、签到、平均评分与未决事件的 KPI 卡片，按天分组的柱状图，难度环形图，带状态徽标的热门路线表格，以及访客面积图",
    pos: "50% 50%",
    values: ["1440 × 960", "12 列", "2× 导出", "6 图表"],
    meta: ["ridgeline-studio-dashboard.figcraft", "桌面"],
    maker: "Ridgeline Studio · 仪表盘",
    strip: "c",
  },
  {
    src: "/img/art-glass-weather.png",
    w: 2400,
    h: 1520,
    alt: "覆盖在模糊的青、紫、玫红与橙色色块之上的玻璃天气组件：一张显示 14 度、局部多云的 Lake Louise 磨砂卡片，背景是布尔并集云后的渐变太阳，一行逐时预报，以及更小的空气质量、风力与湿度玻璃卡片",
    pos: "50% 50%",
    values: ["1200 × 760", "玻璃", "2× 导出", "3 布尔"],
    meta: ["glass-and-vectors.figcraft", "组件"],
    maker: "玻璃天气 · 玻璃与背景模糊",
    strip: "b",
  },
  {
    src: "/img/art-vector-marks.png",
    w: 1520,
    h: 1520,
    alt: "米色背景上的三块拼贴：一个由两座山峰并集再减去一个太阳得到的渐变山形标记，一个由三个排除环组成的角向渐变结，以及一段带叶子与发光四角星的锥形渐变波浪",
    pos: "50% 50%",
    values: ["760 × 760", "矢量", "2× 导出", "3 标志"],
    meta: ["glass-and-vectors.figcraft", "矢量"],
    maker: "矢量标志 · 并集、减去与排除",
    strip: "a",
  },
  {
    src: "/img/art-ds-colour.png",
    w: 2784,
    h: 1098,
    alt: "Ridgeline UI 色阶：松绿、日落橙与石板灰各六个色板，每个都标有名称与十六进制值",
    pos: "50% 50%",
    values: ["1392 × 549", "3 色阶", "2× 导出", "18 色板"],
    meta: ["ridgeline-design-system.figcraft", "色阶"],
    maker: "Ridgeline UI · 填充样式色阶",
    strip: "d",
  },
  {
    src: "/img/shot-1-hero.png",
    w: 1440,
    h: 900,
    alt: "FigCraft 在深色主题下编辑 Ridgeline 徒步应用的画面：画布上是三块手机屏幕，选中了「精选路线卡片」实例，图层面板显示该屏幕的自动布局树，设计面板显示该实例的填充与包裹式自动布局尺寸、主题变量模式，以及绑定到 surface 颜色变量的一个填充",
    pos: "50% 50%",
    values: ["1440 × 900", "Dark UI", "1× 截屏", "3 画框"],
    meta: ["ridgeline-app.figcraft", "编辑器"],
    maker: "FigCraft · 编辑器本身",
    strip: "c",
  },
];

/* 隐私与在线分享 */
export const privacy = [
  {
    h: "分享会把文件上传到服务器",
    p: "默认是公共服务器 collab.craftapps.dev，可以在偏好设置里换成自己的。文件在你停止分享后仍留在服务器上，直到你移除它，或 30 天内无人打开——届时公共服务器会将其删除。",
  },
  {
    h: "不是端到端加密",
    p: "到服务器的连接是加密的（TLS），但服务器以未加密形式存储文件，运行服务器的人可以读取。要分享机密工作，请跑自己的服务器，或改用本地网络分享——后者不经过服务器，但同样未加密。",
  },
  {
    h: "代码或链接即权限",
    p: "没有账号：拿到编辑码或链接的人就能改，拿到查看码或链接的人就能看。停止分享会撤销它们并断开所有人。公共服务器按「原样」提供，无备份或可用性承诺，请保留自己的本地副本。",
  },
];

/* 创作系列应用 */
export const craftingApps = [
  { name: "FigCraft", icon: "/img/apps/figcraft.png", right: "你在这里", href: site.repo },
  { name: "PhotoCraft", icon: "/img/apps/photocraft.png", right: "图像编辑", href: "https://github.com/storytold/photocraft" },
  { name: "VectorCraft", icon: "/img/apps/vectorcraft.png", right: "矢量插画", href: "https://github.com/storytold/vectorcraft" },
  { name: "FilmCraft", icon: "/img/apps/filmcraft.png", right: "视频编辑、调色与声音", href: "https://github.com/storytold/filmcraft" },
  { name: "LightCraft", icon: "/img/apps/lightcraft.png", right: "照片图库与 RAW 显影", href: "https://github.com/storytold/lightcraft" },
  { name: "PdfCraft", icon: "/img/apps/pdfcraft.png", right: "PDF 阅读、整理与保护", href: "https://github.com/storytold/pdfcraft" },
  { name: "EffectCraft", icon: "/img/apps/effectcraft.png", right: "动态图形与视觉特效", href: "https://github.com/storytold/effectcraft" },
  { name: "DesignCraft", icon: "/img/apps/designcraft.png", right: "页面排版与出版", href: "https://github.com/storytold/designcraft" },
];

export const alsoApp = {
  name: "ArtCraft",
  icon: "/img/brand/artcraft-mark.png",
  right: "AI 图像与视频工作室",
  href: site.artcraft,
};

/* CTA：从模板新建 */
export const templates = [
  "移动应用",
  "落地页",
  "仪表盘",
  "设计系统入门",
  "线框套件",
  "社媒帖子尺寸",
  "演示幻灯片",
  "图标集入门",
];

export const footer = {
  statement:
    "FigCraft 没有账号，没有遥测。你的文件就是磁盘上普通的 .figcraft 归档。",
  nav: [
    { label: "一览", href: "#look" },
    { label: "功能特性", href: "#features" },
    { label: "为智能体而打造", href: "#agents" },
    { label: "底层实现", href: "#under-the-hood" },
    { label: "由 FigCraft 制作", href: "#made-in-figcraft" },
    { label: "创作系列应用", href: "#apps" },
  ],
  mail: { label: "discord.gg/artcraft", href: site.discord },
  invite: "来 Discord 和我们一起创作",
  legal:
    "MIT 或 Apache-2.0 双重许可 · 版权所有 (c) 2026 ArtCraft 团队与 FigCraft 贡献者。Figma 是 Figma, Inc. 的商标；FigCraft 是独立开源项目，与其无隶属、赞助或背书关系。",
};
