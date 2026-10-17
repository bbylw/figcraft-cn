import { useCallback, useEffect, useState } from "react";
import "../../styles/fragment.css";

type StyleKey = "Primary" | "Tonal" | "Outline";
type StateKey = "Default" | "Hover" | "Disabled";

const STYLES: StyleKey[] = ["Primary", "Tonal", "Outline"];
const STATES: StateKey[] = ["Default", "Hover", "Disabled"];

const TOKEN_MAP: Record<StyleKey, { fill: string; stroke: string; text: string; hex: string }> = {
  Primary: { fill: "color/pine-600", stroke: "none", text: "color/white", hex: "#1c7a54" },
  Tonal: { fill: "color/pine-100", stroke: "none", text: "color/pine-800", hex: "#d8ebe0" },
  Outline: { fill: "color/surface", stroke: "color/pine-600", text: "color/pine-600", hex: "#ffffff" },
};

function toHex(rgb: string): string {
  const m = rgb.match(/(\d+(?:\.\d+)?)/g);
  if (!m || m.length < 3) return rgb;
  const hex = m
    .slice(0, 3)
    .map((n) => Math.round(Number(n)).toString(16).padStart(2, "0"))
    .join("");
  return "#" + hex.toUpperCase();
}

export default function VariantBoard() {
  const [style, setStyle] = useState<StyleKey>("Primary");
  const [state, setState] = useState<StateKey>("Default");
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState({ bg: "#E6E6E3", size: "48px" });

  const read = useCallback(() => {
    const bg = getComputedStyle(document.body).backgroundColor;
    const head = document.querySelector("[data-hero-headline]");
    const size = head ? `${Math.round( parseFloat(getComputedStyle(head).fontSize) )}px` : "48px";
    setPage({ bg: toHex(bg), size });
  }, []);

  useEffect(() => {
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, [read]);

  const command = `setVariant { "node": "Button", "props": { "Style": "${style}", "State": "${state}" } }`;
  const token = TOKEN_MAP[style];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      data-ui
      className="vboard"
      style={{ width: "min(480px, 86vw)" }}
      aria-label="FigCraft 组件集面板：点选一个变体，读出驱动它的那条命令"
    >
      <div className="ui__bar">
        <span className="ui__bar-left">
          <span className="ui__comp-glyph" aria-hidden="true">❖</span>
          <b>组件集</b>
          <span>·</span>
          <span>Button</span>
        </span>
        <span className="ui__bar-meta">3 × 3 自动布局 · 9 变体</span>
      </div>

      <div className="ui__body">
        <div className="vcanvas">
          <div className="vcanvas__header">
            <span className="vcanvas__badge">❖ Button</span>
            <span className="vcanvas__dim">296 × 192</span>
          </div>
          <div className="vgrid" role="group" aria-label="变体网格">
            {STYLES.map((s) =>
              STATES.map((t) => {
                const on = s === style && t === state;
                return (
                  <button
                    key={s + t}
                    type="button"
                    className="vcell"
                    aria-pressed={on}
                    aria-label={`${s} · ${t}`}
                    onClick={() => {
                      setStyle(s);
                      setState(t);
                    }}
                  >
                    <span className="vcell__box">
                      <span
                        className={`vbtn vbtn--${s.toLowerCase()} ${
                          t === "Hover" ? "vbtn--hover" : ""
                        } ${t === "Disabled" ? "vbtn--disabled" : ""}`}
                      >
                        Start hike
                      </span>
                    </span>
                    <span className="vcell__tag">
                      {s} · {t}
                    </span>
                  </button>
                );
              }),
            )}
          </div>
        </div>

        <div className="read">
          <div className="read__row">
            <span>变体</span>
            <div className="read__pills">
              <div className="read__pillgroup" role="group" aria-label="Style 属性">
                {STYLES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`read__chip${style === s ? " is-on" : ""}`}
                    onClick={() => setStyle(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <span className="read__sep">/</span>
              <div className="read__pillgroup" role="group" aria-label="State 属性">
                {STATES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`read__chip${state === t ? " is-on" : ""}`}
                    onClick={() => setState(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="read__row">
            <span>绑定</span>
            <b className="read__tokens">
              <span className="sw">
                <i style={{ background: token.hex }} />
                {token.fill}
              </span>
              <span className="read__sep">·</span>
              <span>圆角 5</span>
              <span className="read__sep">·</span>
              <span>内距 8×12</span>
            </b>
          </div>

          <div className="read__row read__row--cmd">
            <span>命令</span>
            <div className="read__cmdwrap">
              <code>{command}</code>
              <button
                type="button"
                className="read__copy"
                onClick={handleCopy}
                aria-label="复制 MCP 命令"
              >
                {copied ? "已复制" : "复制"}
              </button>
            </div>
          </div>

          <div className="read__row">
            <span>宿主</span>
            <b className="read__host">
              画布 {page.bg} · 标题字号 {page.size}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
