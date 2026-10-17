import { useState } from "react";
import "../../styles/fragment.css";

const TEMPLATES = [
  "移动应用",
  "落地页",
  "仪表盘",
  "设计系统入门",
  "线框套件",
  "社媒帖子尺寸",
  "演示幻灯片",
  "图标集入门",
];

export default function TemplateDialog({ releases }: { releases: string }) {
  const [name, setName] = useState("ridgeline-app");
  const [tpl, setTpl] = useState(TEMPLATES[0]);
  const [target, setTarget] = useState<"桌面应用" | "浏览器版">("桌面应用");

  return (
    <div data-ui className="dlg" aria-label="FigCraft 的从模板新建对话框">
      <div className="dlg__head">从模板新建</div>
      <div className="dlg__body">
        <div className="dlg__field">
          <span className="ui__label">文件名</span>
          <input
            className="dlg__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="文件名"
            spellCheck={false}
          />
        </div>

        <div className="dlg__field">
          <span className="ui__label">模板</span>
          <div className="dlg__tpl">
            {TEMPLATES.map((t) => (
              <button
                key={t}
                type="button"
                className="dlg__t"
                aria-pressed={tpl === t}
                onClick={() => setTpl(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="dlg__field">
          <span className="ui__label">打开方式</span>
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
            ? `将新建 ${name || "未命名"}.figcraft`
            : `在浏览器里打开 ${tpl}`}
        </span>
        <a className="dlg__go" href={releases}>
          打开 FigCraft
        </a>
      </div>
    </div>
  );
}
