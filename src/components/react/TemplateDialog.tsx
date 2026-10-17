import { useState } from "react";
import "../../styles/fragment.css";

type TemplateInfo = {
  label: string;
  id: string;
  spec: string;
};

const TEMPLATES: TemplateInfo[] = [
  { label: "移动应用", id: "mobile-app", spec: "390 × 844 · 3 画框 · 12 组件 · Light/Dark 变量" },
  { label: "落地页", id: "landing", spec: "1440 × 3200 · 12 列网格 · 响应式自动布局" },
  { label: "仪表盘", id: "dashboard", spec: "1440 × 960 · 12 列网格 · 6 张纯矢量图表" },
  { label: "设计系统入门", id: "design-system", spec: "色阶样式 · 按钮 9 变体 · 令牌变量表" },
  { label: "线框套件", id: "wireframe", spec: "24 个低保真常用区块 · 支持拖拽复用" },
  { label: "社媒帖子尺寸", id: "social", spec: "1:1 / 4:5 / 16:9 多画框导出预设" },
  { label: "演示幻灯片", id: "slides", spec: "1920 × 1080 · 16 页版式主组件与切页原型" },
  { label: "图标集入门", id: "icons", spec: "24 × 24 像素网格 · 布尔运算与可变描边" },
];

export default function TemplateDialog({ releases }: { releases: string }) {
  const [name, setName] = useState("ridgeline-app");
  const [tpl, setTpl] = useState<TemplateInfo>(TEMPLATES[0]);
  const [target, setTarget] = useState<"桌面应用" | "浏览器版">("桌面应用");

  const cleanName = (name || "untitled").trim();

  return (
    <div data-ui className="dlg" aria-label="FigCraft 的从模板新建对话框">
      <div className="dlg__head">
        <span>从模板新建</span>
        <span className="dlg__head-meta">file.newFromTemplate</span>
      </div>
      <div className="dlg__body">
        <div className="dlg__field">
          <span className="ui__label">文件名</span>
          <div className="dlg__inputwrap">
            <input
              className="dlg__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="文件名"
              spellCheck={false}
            />
            <span className="dlg__ext">.figcraft</span>
          </div>
        </div>

        <div className="dlg__field">
          <div className="dlg__labelrow">
            <span className="ui__label">选择入门模板</span>
            <span className="ui__label">8 个合成模板</span>
          </div>
          <div className="dlg__tpl">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                type="button"
                className="dlg__t"
                aria-pressed={tpl.id === t.id}
                onClick={() => setTpl(t)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="dlg__spec">{tpl.spec}</div>
        </div>

        <div className="dlg__field">
          <span className="ui__label">运行环境</span>
          <div className="seg">
            {(["桌面应用", "浏览器版"] as const).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={target === t}
                onClick={() => setTarget(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="dlg__foot">
        <span className="dlg__alt">
          {target === "桌面应用"
            ? `新建 ${cleanName}.figcraft · ${tpl.label}`
            : `WebAssembly 引擎 · 打开「${tpl.label}」`}
        </span>
        <a className="dlg__go" href={releases}>
          {target === "桌面应用" ? "下载 FigCraft" : "获取 FigCraft"}
        </a>
      </div>
    </div>
  );
}
