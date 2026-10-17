<p align="center">
  <a href="https://getartcraft.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/storytold/vectorcraft/main/docs/brand/artcraft-logo-white.png">
      <img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/vectorcraft/main/docs/brand/artcraft-logo.png" width="200">
    </picture>
  </a>
</p>

<h1 align="center">FigCraft</h1>

<p align="center">
  <b>界面设计：一个开源、洁净室重新实现的 Figma，用纯 Rust 重写。</b><br>
  画框、自动布局、组件与变体、矢量网络、样式、变量与原型，<br>
  全部运行于秒开的原生应用，可离线使用。开源，且属于你。
</p>

<p align="center">
  <img alt="100% Rust" src="https://img.shields.io/badge/100%25-Rust-b7410e?style=flat-square&logo=rust">
  <img alt="macOS · Windows · Linux · FreeBSD · Web" src="https://img.shields.io/badge/macOS%20%C2%B7%20Windows%20%C2%B7%20Linux%20%C2%B7%20FreeBSD%20%C2%B7%20Web-native-0EA5C6?style=flat-square">
  <img alt="License: MIT OR Apache-2.0" src="https://img.shields.io/badge/license-MIT%20%2F%20Apache--2.0-3a3a3a?style=flat-square">
  <img alt="Status: early alpha" src="https://img.shields.io/badge/status-early%20alpha-d69e2e?style=flat-square">
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="Join the ArtCraft community on Discord" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<p align="center">
  <a href="https://getartcraft.com/apps/figcraft"><b>getartcraft.com 上的 FigCraft</b></a> ·
  <a href="https://getartcraft.com/">ArtCraft</a> ·
  <a href="https://getartcraft.com/apps">全部创作应用</a>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-1-hero.png" alt="FigCraft 在深色主题下编辑 Ridgeline 徒步应用的画面：画布上是三块手机屏幕（浅色模式的首页、一个路线详情页，以及深色模式的首页），选中了「精选路线卡片」实例，图层面板显示该屏幕的自动布局树，设计面板则显示该实例的填充与包裹式自动布局尺寸、它的主题变量模式，以及绑定到 surface 颜色变量的一个填充" width="100%">
  <br><sub><b>Ridgeline</b>：由组件构建的自动布局屏幕，通过一组颜色变量实现浅色与深色模式 · <code>examples/ridgeline-app.figcraft</code></sub>
</p>

<br>

> [!NOTE]
> **ArtCraft 是一个由各行各业艺术家组成的社区。** 设计师、插画师、开发者、
> 音乐人、游戏制作者——只要你创作，你就属于我们。**[来 Discord 和我们打个招呼吧](https://discord.gg/artcraft)。**

<p align="center">
  <a href="#a-look-around">一览</a> ·
  <a href="#made-in-figcraft">由 FigCraft 制作</a> ·
  <a href="#features">功能特性</a> ·
  <a href="#built-for-agents">智能体</a> ·
  <a href="#under-the-hood">底层实现</a> ·
  <a href="#get-started">快速开始</a> ·
  <a href="#the-crafting-apps">创作应用</a> ·
  <a href="https://discord.gg/artcraft">Discord</a>
</p>

<br>

<table>
  <tr>
    <td width="25%" valign="top">
      <h3>🎛️ 设计即熟悉</h3>
      工具栏、图层面板、设计面板、菜单和快捷键都放在你手部习惯的位置。如果你会用 Figma，就已经会用了 FigCraft。
    </td>
    <td width="25%" valign="top">
      <h3>⚡ 原生且飞快</h3>
      Rust 引擎搭配持久化文档模型：编辑只触及发生变化的部分，因此在两万个节点的文件中创建一个节点只需不到一毫秒。没有 Electron，没有 Web 视图。
    </td>
    <td width="25%" valign="top">
      <h3>🔌 离线且私密</h3>
      你的文件就是磁盘上普通的 <code>.figcraft</code> 归档。没有账号，没有遥测，除非你分享文件，否则没有任何数据离开你的电脑（<a href="#privacy-and-online-sharing">分享究竟会上传什么</a>）。SVG、PNG、JPG、WebP 和 PDF 自由导入导出；<code>.fig</code> 文件可尽力打开，以公开 REST API 文件 JSON 导出的设计（含其原型与变量）同样可以打开。
    </td>
    <td width="25%" valign="top">
      <h3>🤖 为智能体而生</h3>
      每一个菜单项、工具和拖拽动作都是一条命令，因此同一套引擎既可从 UI、CLI、JSON 控制通道，也可从 MCP 服务器驱动。
    </td>
  </tr>
</table>

<br>

<a id="a-look-around"></a>
## 一览

<table>
<tr>
<td width="50%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-2-components.png" alt="Ridgeline UI 设计系统已打开，左侧资源面板显示按钮、难度、搜索框、开关与图标组件的实时缩略图；选中了一个由九种变体组成、以三乘三网格自动布局排布的按钮组件集，设计面板列出其样式（Primary、Tonal、Outline）与状态（Default、Hover、Disabled）变体属性" width="100%">
  <p align="center"><sub><b>组件与变体</b>：组件集、变体属性与资源面板 · <code>examples/ridgeline-design-system.figcraft</code></sub></p>
</td>
<td width="50%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-3-prototype.png" alt="原型标签页中四块引导注册的手机屏幕，由蓝色连接曲线从 Get started、Continue、Allow location 与 Not now 按钮连向下一屏；选中了 Get started 按钮，原型面板显示其 On click、Navigate to 2 Interests 交互" width="100%">
  <p align="center"><sub><b>原型制作</b>：连接线、转场、返回操作与流程 · <code>examples/ridgeline-onboarding.figcraft</code></sub></p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-4-devmode.png" alt="Ridgeline 首页的开发模式：画框带有 Ready for dev 徽标，一条 Development 标注指向精选路线卡片，选中了一个路线行实例，检查面板显示生成的 React 代码，含 TrailRow props 接口以及该实例的标题与详情值" width="100%">
  <p align="center"><sub><b>开发模式</b>：就绪待开发状态、标注与 React 代码（组件属性即 props）· <code>examples/ridgeline-app.figcraft</code></sub></p>
</td>
<td width="50%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-5-vector.png" alt="一段带渐变、锥形可变宽度描边的波浪路径的矢量编辑模式：可见其锚点、贝塞尔控制柄以及选中点的变换框，底部是矢量编辑工具栏；其上方是一个由布尔运算构建的山形标记，以及一个由排除环组成的角向渐变结" width="100%">
  <p align="center"><sub><b>矢量网络</b>：锚点与控制柄、可变宽度描边、保持可编辑的布尔运算 · <code>examples/glass-and-vectors.figcraft</code></sub></p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-6-dashboard-light.png" alt="浅色 UI 主题下一个虚构徒步运营商的网站分析仪表盘：深色侧边栏、带迷你走势图的 KPI 卡片、分组柱状图、环形图、热门路线表格与面积图，画框的 12 列布局网格显示为淡色列，其填充绑定到一个 paint 样式" width="100%">
  <p align="center"><sub><b>布局网格与样式（浅色主题）</b>：12 列网格、填充 / 文本 / 效果 / 网格样式，全部由图形绘制的图表 · <code>examples/ridgeline-studio-dashboard.figcraft</code></sub></p>
</td>
<td width="50%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/shot-7-collab.png" alt="从一名参与者窗口看到的实时协作会话：右上角三个人的头像，一条 Priya Nair 正在聚焦（spotlighting）的横幅带 Follow 按钮，Priya 的深色首页轨迹卡片上的绿色光标与选区，以及 Jonas Ortiz 在 Start hike 按钮上的紫色光标与选区，附带他的光标聊天气泡，询问按钮是否应在滚动时保持固定" width="100%">
  <p align="center"><sub><b>实时协作会话</b>：在一个 <code>figcraft-server</code> 文件上的三个应用，带有光标、选区、光标聊天与聚焦</sub></p>
</td>
</tr>
</table>

<a id="made-in-figcraft"></a>
## 由 FigCraft 制作

下面每一份设计都完全通过 FigCraft 的命令 API 构建——也就是 MCP 服务器暴露给智能体的同一套 API——并由 FigCraft 自带的渲染器以 2 倍分辨率导出。源文件位于
[`examples/`](https://github.com/storytold/figcraft/tree/main/examples)。

<table>
<tr>
<td width="33%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-app-home.png" alt="浅色模式的 Ridgeline 首页：一句问候语、一个搜索框、筛选标签、一张带插画山景的精选路线卡片、附近路线列表，以及半透明标签栏" width="100%">
  <p align="center"><sub><b>首页（浅色）</b></sub></p>
</td>
<td width="33%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-app-trail.png" alt="Ridgeline 路线详情屏幕：一张黄昏山景插画配玻璃按钮、一个带难度标签的表单、路线名称、距离、爬升与时长统计、一条爬升剖面图，以及一个 Start hike 按钮" width="100%">
  <p align="center"><sub><b>路线详情</b></sub></p>
</td>
<td width="33%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-app-home-dark.png" alt="同一 Ridgeline 首页的深色模式，其颜色由主题变量集合的 Dark 模式切换" width="100%">
  <p align="center"><sub><b>首页（深色）</b>：同一画框的 Dark 模式</sub></p>
</td>
</tr>
<tr>
<td colspan="3" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-dashboard.png" alt="Ridgeline Studio 仪表盘：深色海军蓝侧边栏带导航，活跃徒步者、签到、平均评分与未决事件的 KPI 卡片带迷你走势图，按天分组的柱状图带提示框，难度环形图，带状态徽标的热门路线表格，以及访客面积图" width="100%">
  <p align="center"><sub><b>Ridgeline Studio</b>：基于 12 列网格的桌面仪表盘，每张图表都由图形与矢量绘制而成</sub></p>
</td>
</tr>
<tr>
<td colspan="2" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-glass-weather.png" alt="一张覆盖在模糊的青、紫、玫红与橙色色块之上的玻璃天气组件：一张显示 14 度、局部多云的 Lake Louise 磨砂卡片，背景是布尔并集云后的渐变太阳、一行逐时预报，以及更小的空气质量、风力与湿度玻璃卡片" width="100%">
  <p align="center"><sub><b>玻璃天气</b>：玻璃质感与背景模糊、图层模糊的色块、布尔云</sub></p>
</td>
<td width="33%" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-vector-marks.png" alt="米色背景上的三块拼贴：一个由两座山峰并集再减去一个太阳得到的渐变山形标记，一个由三个排除环组成的角向渐变结，以及一段带叶子与发光四角星的锥形渐变波浪" width="100%">
  <p align="center"><sub><b>矢量标志</b>：并集、减去与排除，角向渐变，可变宽度描边</sub></p>
</td>
</tr>
<tr>
<td colspan="3" valign="top">
  <img src="https://raw.githubusercontent.com/storytold/figcraft/main/docs/images/art-ds-colour.png" alt="Ridgeline UI 色阶：松绿、日落橙与石板灰各六个色板，每个都标有名称与十六进制值" width="100%">
  <p align="center"><sub><b>Ridgeline UI</b>：每一色块都是一种填充样式的色阶，通过切片导出</sub></p>
</td>
</tr>
</table>

<a id="features"></a>
## 功能特性

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>自行构建的布局</h3>
      两个方向的自动布局，支持换行与网格（固定、包裹和 <code>fr</code> 轨道，可跨列的单元格）、内边距、间距、包含文字基线的对齐方式、包裹 / 填充 / 固定尺寸、最小与最大尺寸、绝对定位、画布上直接拖动调整内边距与间距的操作手柄，以及用方向键让子元素在流式布局、网格单元与嵌套画框之间移动。其余情况则使用约束与布局网格。
    </td>
    <td width="50%" valign="top">
      <h3>可扩展的组件</h3>
      主组件、带可保留覆盖的实例、带变体的组件集、属性、交换实例、分离、重置覆盖与跳转主组件，以及带实时缩略图、搜索并拖拽到画框与自动布局中的资源面板。本地样式与变量（颜色、数字、字符串、布尔）支持模式、别名与作用域，可在变量表中编辑，并绑定到填充、描边、效果、布局网格与实例属性。填充、描边、效果与布局网格均可通过拖动行来重新排序。
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>毫不妥协的矢量</h3>
      真正的矢量网络：钢笔与铅笔工具，带专属工具的矢量编辑模式（可延伸并分叉路径的钢笔、弯曲、对任意闭合区域进行油漆桶填充、套索、裁剪），带控制柄镜像与逐点圆角的点面板，连接、拆分与删除即愈合，形状生成器（在重叠的图形、描边与开放路径的区域上点击或拖拽以合并，按住 Alt 移除它们），布尔组（并集、减去、相交、排除），其操作数在画布上保持可编辑，结果随每次拖拽实时更新，每个操作数可执行独立操作，还有扁平化、描边转轮廓、箭头、虚线、逐边描边与可变宽度描边（宽度预设，以及可变宽度工具沿路径拖动宽度点，配合 Alt 一次只处理一侧）。带平滑（squircle 圆角）矩形的圆角矩形、多边形、星形，以及可用画布上的扫掠、起点与比例手柄或设计面板的 Arc 字段塑形的弧线与圆环。
    </td>
    <td width="50%" valign="top">
      <h3>填充与效果</h3>
      纯色、线性、径向、角向与菱形渐变（带画布手柄）、图像填充（填充、适配、裁剪、平铺，带调整与预设）、多重填充与描边、全部混合模式、投影与内阴影（扩散精确偏移轮廓）、图层与背景模糊（均匀或渐进）、噪声（单色、双色、多色）、纹理与玻璃（折射、色散、磨砂、光照）、蒙版。文件采用 sRGB 或 Display P3，导出时标记文件的色彩配置。
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>精美的文字排版</h3>
      在画布上就地编辑文字（支持内联输入法合成），段落内混排样式，自动宽度与自动高度，行高，字距与段间距，装饰，大小写，列表，OpenType 特性，可变字体轴与文字样式，从右到左与混合方向文字（阿拉伯语、希伯来语）遵循 Unicode bidi 算法，由 HarfRust 与来自 craft-fonts 的开源字体以及你的系统字体塑形。
    </td>
    <td width="50%" valign="top">
      <h3>原型与交付</h3>
      连接、触发器、操作与 Smart Animate 式转场，带条件变量的变量（交互编辑器中内置 if / else if / else，以及 <code>count + 1</code> 这类表达式），流程，带设备边框的演示视图、热点提示与检查面板，以及实时预览窗格。按住 Alt 在画布上测量距离与内边距；带测量的检查模式；按颜色分类的标注；就绪待开发列表（带聚焦视图）与比较更改（自画框标记为就绪以来的前后属性级差异）；以及代码（CSS、HTML、React、Leptos、SwiftUI、Compose），其中组件将其属性作为形参，固定在画框上的评论线程（回复、@提及、表情回应、已读状态）与具名版本历史。任意图层可按任意比例导出为 PNG、JPG、WebP、SVG 或 PDF。
    </td>
  </tr>
</table>

<br>

<a id="built-for-agents"></a>
## 为智能体而打造

每一个菜单项、工具与手势都来自一个拥有 400+ 条命令的注册表运行一条命令。UI、CLI、JSON 控制通道与 MCP 服务器调用的都是同一批命令，因此你点击得到的任何效果，脚本或 AI 智能体同样能做到。

```sh
# 无界面：渲染与导出
figcraft-cli render landing.figcraft -o landing.png --scale 2
figcraft-cli export landing.figcraft -o out/ --format svg

# 不带窗口地运行一段命令脚本
figcraft-cli run build-card.json --out card.figcraft

# 列出每条命令及其参数
figcraft-cli commands --filter autoLayout

# 让智能体通过 MCP 驱动它（无界面，或附加到正在运行的应用）
figcraft-cli mcp
figcraft-cli mcp --attach 47800
```

桌面应用还提供一个仅回环的控制通道（`figcraft --control <port>`），用于检查 UI 状态、用指针与按键事件驱动工具，以及截图。参见 [`docs/control-protocol.md`](https://github.com/storytold/figcraft/blob/main/docs/control-protocol.md)、[`docs/mcp.md`](https://github.com/storytold/figcraft/blob/main/docs/mcp.md) 与 [`docs/cli.md`](https://github.com/storytold/figcraft/blob/main/docs/cli.md)。

<a id="under-the-hood"></a>
## 底层实现

- **引擎优先：** 纯数据文档模型与命令引擎，上层是轻量、可替换的 egui UI。跨工作区 crate 的层级依赖在构建时检查（`cargo xtask layers`）。
- **持久化数据：** 文档存放于不可变有序映射中，因此撤销快照开销极低，布局、组件同步与文字测量只需重访发生变化的部分。
- **自有渲染器：** 每个核心都用 tiny-skia 进行画布与导出渲染，支持图层混合、效果与蒙版；布尔运算来自 linesweeper，几何来自 kurbo，文字来自 skrifa 与 HarfRust。
- **可在浏览器中运行：** 整套引擎与 UI 都能编译到 WebAssembly。
- **无障碍：** 屏幕阅读器可为工具、图层行、字段、下拉框、标签页与菜单提供名称、角色、值与状态（桌面端通过 AccessKit），F6 在工具栏、图层、画布与属性之间移动键盘焦点（其中用 Tab，按 Esc 返回画布），并遵循系统的减弱动效设置，面板文字在两种主题下均满足 WCAG AA 对比度。
- **多语言：** 英语、俄语与土耳其语（经母语者审校），以及西班牙语、法语、德语、巴西葡萄牙语、日语、韩语、简体中文、捷克语与印尼语的草稿版本，可在偏好设置中选择、取用系统或浏览器语言并实时切换；新增一门语言只需一个目录文件（[`docs/translating.md`](https://github.com/storytold/figcraft/blob/main/docs/translating.md)）。
- **插件：** 沙箱化的 WebAssembly 插件（带计量、纯 Rust 解释器，有内存上限，无文件或网络访问，浏览器中同样如此），通过同一批命令发挥作用，每次运行算作一步撤销，权限限于其清单所申请的。Rust SDK 与两个示例插件位于 [`plugins/`](https://github.com/storytold/figcraft/tree/main/plugins)；参见 [`docs/plugins.md`](https://github.com/storytold/figcraft/blob/main/docs/plugins.md)。
- **实时协作会话（预览）：** 从应用中分享打开的文件（分享 ▸ 开始分享：通过服务器在线，或本地网络），把显示的短加入码（或邀请链接）交给其他人，即可共同编辑：所有人的更改实时同步，带有光标、选区、头像与跟随，撤销只撤回你自己的更改。其他人可从桌面应用（邀请链接会打开它）或浏览器版本加入。参见 [`docs/collab-protocol.md`](https://github.com/storytold/figcraft/blob/main/docs/collab-protocol.md)。
- **自建服务器（预览）：** `figcraft-server` 保管团队的多个文件，从应用发布它们（文件 ▸ 发布到服务器…，或在偏好设置中分享 ▸ 在线并使用你自己的服务器），并发放分享链接与加入码，让人们可编辑或仅查看；文件在重启后保留，应用在原处重新连接。目前还没有账号：链接即权限。各发行版为 Linux 提供它，桌面应用通过 `wss://` 连接；[在租用的 Linux 服务器上托管](https://github.com/storytold/figcraft/blob/main/docs/server.md#deploy-on-a-linux-server) 需要 systemd 单元与 Caddy 或 nginx（或 Docker）。参见 [`docs/server.md`](https://github.com/storytold/figcraft/blob/main/docs/server.md)。
- **永不崩溃：** 已发布的代码中没有任何 `unwrap`、`expect` 或 `panic`，由 clippy 强制保证；命令运行在守卫之后，因此一个 bug 只会使单个操作失败，而不会毁掉整个会话。
- **洁净室：** 仅依据公开文档与可观察的行为实现。不含专有代码、文件格式、图标或图像。

<a id="get-started"></a>
## 快速开始

```sh
git clone https://github.com/storytold/figcraft
cd figcraft
cargo run --release -p figcraft            # 桌面应用
cargo run --release -p figcraft-server     # 协作服务器（docs/server.md）
cargo test --workspace                     # 测试套件
cargo xtask ci                             # 格式化、clippy、测试、层级与资源检查
```

界面与文字工具所需的字体来自 [craft-fonts](https://github.com/storytold/craft-fonts)，请克隆到本仓库旁边（`../craft-fonts`）；缺少它时 FigCraft 会回退到你的系统字体。

```sh
git clone https://github.com/storytold/craft-fonts ../craft-fonts
```

如果你在首次构建之后才克隆它，请运行一次 `cargo clean -p figcraft-text`，以便下一次构建嵌入字体。

**从模板开始。** 首页的「模板」标签页提供八个入门文件（移动应用、落地页、仪表盘、设计系统入门、线框套件、社媒帖子尺寸、演示幻灯片与图标集入门），也可以通过文件 ▸ 从模板新建… 打开。它们由原创的合成内容在代码中构建，因此脚本与智能体也能打开它们：`file.newFromTemplate {template}`（[`docs/mcp.md#starter-templates`](https://github.com/storytold/figcraft/blob/main/docs/mcp.md#starter-templates)）。

对于 Web 版本，请安装 [trunk](https://trunkrs.dev/) 并运行 `cargo xtask wasm`。

新的贡献者与 AI 智能体：请先从 [`AGENTS.md`](https://github.com/storytold/figcraft/blob/main/AGENTS.md) 看起，再阅读 [`docs/`](https://github.com/storytold/figcraft/tree/main/docs)。

macOS（通用版，已签名并公证）、Windows（x64、x86 与 arm64）、Linux（AppImage、`.deb`、`.rpm`、Flatpak 与 tarball）、FreeBSD 与 Web 的安装包都附在每次 [GitHub release](https://github.com/storytold/figcraft/releases) 中。维护者：[`docs/releasing.md`](https://github.com/storytold/figcraft/blob/main/docs/releasing.md) 说明了发布版本如何构建、签名与发布。

> [!IMPORTANT]
> **状态：** FigCraft 目前处于 **alpha（早期测试）** 阶段：按我们自己的估算，距离能真正替代 Figma 完成实际工作大约完成了 49%。Figma 几乎所有的主菜单都已接入（[`docs/parity-checklist.md`](https://github.com/storytold/figcraft/blob/main/docs/parity-checklist.md)），核心编辑器端到端可用，但 FigCraft 打开 `.fig` 文件仅是尽力而为，多人协作仅有首个预览版（由应用或自托管服务器托管的实时协作会话，带逐人撤销，以及用于编辑或仅查看的分享链接；目前还没有账号、团队或云），运行的是自己的 WebAssembly 插件而非 Figma 的，且尚未针对真实的 Figma 文档做过校验。逐领域如实的情况见 [roadmap](https://github.com/storytold/figcraft/blob/main/ROADMAP.md) 与 [`docs/target-app-parity.md`](https://github.com/storytold/figcraft/blob/main/docs/target-app-parity.md)。请预期会有粗糙的边缘，并欢迎提交 issue，或到 [Discord](https://discord.gg/artcraft) 告诉我们哪里出了问题。

<a id="privacy-and-online-sharing"></a>
## 隐私与在线分享

FigCraft 可离线工作：它没有账号，没有遥测，在你分享或加入文件之前不会连接任何服务器。实时协作会话属于**预览**功能。在分享任何要紧内容之前，请先了解分享会带来什么：

- **分享 ▸ 在线会把文件上传到服务器。** 默认是公共服务器
  `collab.craftapps.dev`；你可以在偏好设置中改为另一个或你自己的服务器（构建时也可不包含它：[`docs/releasing.md`](https://github.com/storytold/figcraft/blob/main/docs/releasing.md#the-default-server)）。文件在你停止分享后仍保留在服务器上，直到你移除它（分享 ▸ 高级 ▸ 从服务器移除…）
  或 30 天内无人打开——届时公共服务器会将其删除。
- **它并非端到端加密。** 到服务器的连接是加密的（TLS），但服务器以未加密形式存储文件，运行服务器的人可以读取。不要通过你不信任的服务器分享机密工作；请运行自己的
  服务器（[`docs/server.md`](https://github.com/storytold/figcraft/blob/main/docs/server.md)）或改用本地网络分享。
- **代码或链接即权限。** 没有账号：任何持有编辑码或链接的人都能打开并修改文件，任何持有查看码或链接的人都能打开它。停止分享会撤销它们并断开其他所有人。
- **分享 ▸ 本地网络不涉及服务器**，但它同样未加密：你的应用托管该会话，其他人直接连接过来，因此请只在你信任的网络上使用。
- **不作任何保证。** 公共服务器按「原样」提供，无备份或可用性承诺，其上的文件可能被删除。请为你分享的任何内容保留自己的本地副本。

默认服务器的条款见 [`docs/online-sharing-terms.md`](https://github.com/storytold/figcraft/blob/main/docs/online-sharing-terms.md)。

<a id="the-crafting-apps"></a>
## 创作系列应用

FigCraft 是 **创作系列应用（Crafting Apps）** 之一：来自 [ArtCraft](https://getartcraft.com/) 团队的免费、开源创意工具，每一个都用 Rust 从零编写，且都能独当一面。

| | 应用 | 用途 | 代码 | 了解更多 |
|:-:|---|---|---|---|
| <img src="https://raw.githubusercontent.com/storytold/figcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.figcraft.png" alt="" width="32" height="32"> | **FigCraft** | **界面设计、组件与原型 · 你在这里** | [GitHub](https://github.com/storytold/figcraft) | [官网](https://getartcraft.com/apps/figcraft) |
| <img src="https://raw.githubusercontent.com/storytold/photocraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.photocraft.png" alt="" width="32" height="32"> | **PhotoCraft** | 图像编辑 | [GitHub](https://github.com/storytold/photocraft) | [官网](https://getartcraft.com/apps/photocraft) |
| <img src="https://raw.githubusercontent.com/storytold/vectorcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.vectorcraft.png" alt="" width="32" height="32"> | **VectorCraft** | 矢量插画 | [GitHub](https://github.com/storytold/vectorcraft) | [官网](https://getartcraft.com/apps/vectorcraft) |
| <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.filmcraft.png" alt="" width="32" height="32"> | **FilmCraft** | 视频编辑、调色与声音 | [GitHub](https://github.com/storytold/filmcraft) | [官网](https://getartcraft.com/apps/filmcraft) |
| <img src="https://raw.githubusercontent.com/storytold/lightcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.lightcraft.png" alt="" width="32" height="32"> | **LightCraft** | 照片图库与 RAW 显影 | [GitHub](https://github.com/storytold/lightcraft) | [官网](https://getartcraft.com/apps/lightcraft) |
| <img src="https://raw.githubusercontent.com/storytold/pdfcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.pdfcraft.png" alt="" width="32" height="32"> | **PdfCraft** | PDF 阅读、整理与保护 | [GitHub](https://github.com/storytold/pdfcraft) | [官网](https://getartcraft.com/apps/pdfcraft) |
| <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.effectcraft.png" alt="" width="32" height="32"> | **EffectCraft** | 动态图形与视觉特效 | [GitHub](https://github.com/storytold/effectcraft) | [官网](https://getartcraft.com/apps/effectcraft) |
| <img src="https://raw.githubusercontent.com/storytold/designcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.designcraft.png" alt="" width="32" height="32"> | **DesignCraft** | 页面排版与出版 | [GitHub](https://github.com/storytold/designcraft) | [官网](https://getartcraft.com/apps/designcraft) |

以及 [**ArtCraft**](https://getartcraft.com/) 本身，我们为渴望真正掌控权的艺术家打造的 AI 图像与视频工作室。

创作系列应用遵循相同的约定：洁净室与纯 Rust、原生支持 macOS、Windows、Linux 与 FreeBSD、通过 WebAssembly 在浏览器中运行，并且完全可由智能体驱动。

<br>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="Join the ArtCraft community on Discord" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<h3 align="center">来和我们一起创作吧</h3>

<p align="center">
  我们的 Discord 是创作者们聚集的地方：勾勒第一个应用的设计师、只想要按钮好看点的开发者、插画师、电影制作人、字体控，
  以及许多仍在摸索自己想做什么的人。分享你正在构建的东西、寻求帮助、告诉我们哪里出了问题，
  或者你希望 FigCraft 能做什么。这里欢迎你。
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><b>discord.gg/artcraft</b></a> ·
  <a href="https://getartcraft.com/">getartcraft.com</a> ·
  <a href="https://getartcraft.com/apps">创作系列应用</a> ·
  <a href="https://getartcraft.com/apps/figcraft">FigCraft</a>
</p>

---

## 许可证与致谢

FigCraft 采用双重许可，你可任选 [MIT](https://github.com/storytold/figcraft/blob/main/LICENSE-MIT) 或 [Apache-2.0](https://github.com/storytold/figcraft/blob/main/LICENSE-APACHE) 之一。
版权所有 (c) 2026 ArtCraft 团队与 FigCraft 贡献者。必要的声明见 [NOTICE](https://github.com/storytold/figcraft/blob/main/NOTICE)。

FigCraft 中的每个图标都由代码绘制或为该项目专门制作，捆绑的字体、图像及其他资源保留其各自的开源许可证；每一项都以其作者、来源与许可证列于
[ATTRIBUTION.md](https://github.com/storytold/figcraft/blob/main/ATTRIBUTION.md)。

[`docs/brand/`](https://github.com/storytold/figcraft/tree/main/docs/brand/) 中的 ArtCraft 名称、文字商标与徽标是 ArtCraft 团队的商号，不受本许可证覆盖。它们只能原样、且只能作为本仓库与 FigCraft 的一部分使用，遵循 [`docs/brand/LICENSE-brand.txt`](https://github.com/storytold/figcraft/blob/main/docs/brand/LICENSE-brand.txt)。
分支与修改版本必须移除它们。

<sub>Figma 是 Figma, Inc. 的商标。FigCraft 是一个独立的开源项目，与 Figma, Inc. 无隶属、赞助或背书关系；该名称仅用于描述 FigCraft 兼容的工作流。</sub>

<p align="center">
  <a href="https://getartcraft.com/"><img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/vectorcraft/main/docs/brand/artcraft-mark.png" width="28"></a><br>
  <sub>由 <a href="https://getartcraft.com/">ArtCraft</a> 团队与社区打造。</sub>
</p>

## Star history

[![Star History Chart](https://api.star-history.com/svg?repos=storytold/figcraft&type=Date&legend=top-left)](https://www.star-history.com/?repos=storytold%2Ffigcraft&type=date&legend=top-left)
