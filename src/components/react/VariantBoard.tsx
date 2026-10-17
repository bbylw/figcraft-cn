import { useCallback, useEffect, useState } from "react";
import "../../styles/fragment.css";

type StyleKey = "Primary" | "Tonal" | "Outline";
type StateKey = "Default" | "Hover" | "Disabled";

const STYLES: StyleKey[] = ["Primary", "Tonal", "Outline"];
const STATES: StateKey[] = ["Default", "Hover", "Disabled"];

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
  const [page, setPage] = useState({ bg: "#E6E6E3", size: "32px" });

  const read = useCallback(() => {
    const bg = getComputedStyle(document.body).backgroundColor;
    const head = document.querySelector("[data-hero-headline]");
    const size = head ? getComputedStyle(head).fontSize : "32px";
    setPage({ bg: toHex(bg), size });
  }, []);

  useEffect(() => {
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, [read]);

  const command = `setVariant { "node": "Button", "props": { "Style": "${style}", "State": "${state}" } }`;

  return (
    <div
      data-ui
      style={{ width: "min(460px, 78vw)" }}
      aria-label="FigCraft 组件集面板：点选一个变体，读出驱动它的那条命令"
    >
      <div className="ui__bar">
        <span>
          <b>组件集</b> · Button
        </span>
        <span>9 变体</span>
      </div>
      <div className="ui__body">
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

        <div className="read">
          <div className="read__row">
            <span>选中</span>
            <b>
              Button / Style · {style} &nbsp; State · {state}
            </b>
          </div>
          <div className="read__row">
            <span>命令</span>
            <code>{command}</code>
          </div>
          <div className="read__row">
            <span>页面</span>
            <b>
              地面 {page.bg} · 标题 {page.size}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
