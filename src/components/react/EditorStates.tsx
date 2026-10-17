import { useEffect, useRef, useState } from "react";
import "../../styles/fragment.css";

const TABS = ["设计", "原型", "开发模式"] as const;
const CODE_LANGS = ["React", "SwiftUI", "Leptos"] as const;
type CodeLang = (typeof CODE_LANGS)[number];

type LayerId = "home" | "autolayout" | "card" | "trail1" | "tabbar";

const LAYERS: {
  id: LayerId;
  label: string;
  deep?: boolean;
  layout: string;
  fill: string;
  fillHex: string;
  dim: string;
}[] = [
  {
    id: "home",
    label: "▸ Home",
    layout: "垂直 · 间距 12 · 内距 14",
    fill: "surface/bg",
    fillHex: "#ffffff",
    dim: "390 × 844",
  },
  {
    id: "autolayout",
    label: "◆ 精选路线卡片",
    deep: true,
    layout: "包裹 · 垂直 · 间距 10",
    fill: "color/pine-600",
    fillHex: "#1c7a54",
    dim: "362 × 168",
  },
  {
    id: "trail1",
    label: "▭ TrailRow · Lake Louise",
    deep: true,
    layout: "填充 × 包裹 · 水平 · 间距 8",
    fill: "surface/card",
    fillHex: "#eeeeea",
    dim: "362 × 44",
  },
  {
    id: "card",
    label: "▭ TrailRow · Moraine",
    deep: true,
    layout: "填充 × 包裹 · 水平 · 间距 8",
    fill: "surface/card",
    fillHex: "#eeeeea",
    dim: "362 × 44",
  },
  {
    id: "tabbar",
    label: "▭ 底部操作按钮",
    deep: true,
    layout: "固定高度 36 · 居中对齐",
    fill: "color/pine-600",
    fillHex: "#1c7a54",
    dim: "362 × 36",
  },
];

function Ridge({ dark }: { dark?: boolean }) {
  return (
    <svg viewBox="0 0 160 78" width="100%" height="78" role="img" aria-label="山脊插画">
      <defs>
        <linearGradient id={dark ? "rg-sky-d" : "rg-sky"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={dark ? "#243547" : "#f4c98a"} />
          <stop offset="100%" stopColor={dark ? "#16222f" : "#e98a5a"} />
        </linearGradient>
      </defs>
      <rect width="160" height="78" fill={`url(#${dark ? "rg-sky-d" : "rg-sky"})`} />
      <circle cx="118" cy="28" r="13" fill={dark ? "#f3dca2" : "#fbe7b8"} opacity={dark ? 0.85 : 1} />
      <path d="M0 78 L38 34 L62 56 L88 26 L124 78 Z" fill={dark ? "#175e42" : "#1c7a54"} />
      <path d="M62 78 L98 40 L140 78 Z" fill={dark ? "#0f442f" : "#145f41"} />
      <path d="M38 34 L48 45 L38 48 L28 45 Z" fill="#ffffff" opacity="0.82" />
    </svg>
  );
}

function PhoneScreen({
  selectedLayer,
  dark,
  dim,
  protoStep,
  onTriggerProto,
}: {
  selectedLayer?: LayerId;
  dark?: boolean;
  dim?: boolean;
  protoStep?: "start" | "interests";
  onTriggerProto?: () => void;
}) {
  return (
    <div
      className={`phone${dark ? " phone--dark" : ""}${
        selectedLayer === "home" ? " phone--sel" : ""
      }`}
      style={dim ? { opacity: 0.45 } : undefined}
    >
      <div className="ph__top">
        <span>9:41</span>
        <span>Ridgeline</span>
      </div>
      <div
        className={`ph__card${selectedLayer === "autolayout" ? " ph--sel" : ""}`}
      >
        <Ridge dark={dark} />
      </div>
      <div
        className={`ph__row${selectedLayer === "trail1" ? " ph--sel" : ""}`}
      >
        <span className="ph__title">Lake Louise</span>
        <span className="ph__meta">8.4 km</span>
      </div>
      <div
        className={`ph__row${selectedLayer === "card" ? " ph--sel" : ""}`}
      >
        <span className="ph__title">Moraine Ridge</span>
        <span className="ph__meta">6.1 km</span>
      </div>
      <button
        type="button"
        onClick={onTriggerProto}
        className={`ph__btn${selectedLayer === "tabbar" ? " ph--sel" : ""}`}
      >
        {protoStep === "interests" ? "2 Interests →" : "Start hike"}
      </button>
    </div>
  );
}

export default function EditorStates() {
  const [active, setActive] = useState(0);
  const [selectedLayer, setSelectedLayer] = useState<LayerId>("autolayout");
  const [darkTheme, setDarkTheme] = useState(false);
  const [protoActiveScreen, setProtoActiveScreen] = useState<0 | 1>(0);
  const [codeLang, setCodeLang] = useState<CodeLang>("React");
  const [copiedCode, setCopiedCode] = useState(false);
  const blocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sync = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestD = Infinity;
      blocks.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const go = (i: number) => {
    setActive(i);
    blocks.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const currentLayer = LAYERS.find((l) => l.id === selectedLayer) ?? LAYERS[1];

  const codeSnippets: Record<CodeLang, string> = {
    React: `import { TrailRow } from "./TrailRow";

export function Home() {
  return (
    <TrailRow
      title="Lake Louise"
      detail="8.4 km · 爬升 420 m"
      difficulty="中等"
    />
  );
}
// 组件的属性即形参`,
    SwiftUI: `import SwiftUI

struct HomeView: View {
  var body: some View {
    TrailRow(
      title: "Lake Louise",
      detail: "8.4 km · 爬升 420 m",
      difficulty: .moderate
    )
    .padding(16)
  }
}
// 自动布局直接映射为 VStack / HStack`,
    Leptos: `use leptos::prelude::*;

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <TrailRow
            title="Lake Louise"
            detail="8.4 km · 爬升 420 m"
            difficulty=Difficulty::Moderate
        />
    }
}
// 纯 Rust 工程可直接导出 Leptos 组件`,
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippets[codeLang]);
      setCopiedCode(true);
      window.setTimeout(() => setCopiedCode(false), 1500);
    } catch {
      setCopiedCode(false);
    }
  };

  return (
    <>
      <div className="steps__col">
        {[
          {
            num: "01 / 03",
            line: "先画好一屏。",
            sub: "自动布局决定间距，组件决定复用，变量决定颜色。两万个节点的文件里新建一个节点，不到一毫秒。",
          },
          {
            num: "02 / 03",
            line: "再接上交互。",
            sub: "从按钮拖一条连线到下一屏，选 On click ▸ Navigate to。条件逻辑直接写在交互编辑器里。",
          },
          {
            num: "03 / 03",
            line: "最后交出去。",
            sub: "标注、测量、就绪待开发列表，以及 React、SwiftUI、Leptos 代码——组件的属性就是形参。",
          },
        ].map((s, i) => (
          <div
            key={s.line}
            data-index={i}
            data-step
            ref={(el) => {
              blocks.current[i] = el;
            }}
            onClick={() => go(i)}
            className={`stepblock${active === i ? " is-active" : ""}`}
          >
            <span className="stepblock__num">{s.num}</span>
            <p className="stepblock__line">{s.line}</p>
            <p className="stepblock__sub">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="steps__stage">
        <div className="steps__stageinner">
          <div data-ui style={{ width: "100%" }}>
            <div className="ui__tabs" role="tablist" aria-label="FigCraft 编辑器视图">
              {TABS.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  className="ui__tab"
                  aria-selected={active === i}
                  onClick={() => go(i)}
                >
                  {t}
                </button>
              ))}
              <span className="ui__tabs-right">ridgeline-app.figcraft</span>
            </div>

            <div className="ui__stage">
              {/* 设计 */}
              <div className={`ui__state${active === 0 ? " is-on" : ""}`}>
                <div className="two">
                  <PhoneScreen
                    selectedLayer={selectedLayer}
                    dark={darkTheme}
                    onTriggerProto={() => setSelectedLayer("tabbar")}
                  />
                  <div className="layers" role="listbox" aria-label="图层树">
                    <div className="ui__label" style={{ marginBottom: 4 }}>
                      图层 · 点选查看属性
                    </div>
                    {LAYERS.map((l) => (
                      <button
                        key={l.id}
                        type="button"
                        role="option"
                        aria-selected={selectedLayer === l.id}
                        onClick={() => setSelectedLayer(l.id)}
                        className={`layer${selectedLayer === l.id ? " layer--on" : ""}${
                          l.deep ? " layer--deep" : ""
                        }`}
                      >
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="insp" style={{ marginTop: 14 }}>
                  <div className="insp__row">
                    <span>尺寸</span>
                    <span className="insp__val">{currentLayer.dim}</span>
                  </div>
                  <div className="insp__row">
                    <span>自动布局</span>
                    <span className="insp__val">{currentLayer.layout}</span>
                  </div>
                  <div className="insp__row">
                    <span>填充变量</span>
                    <span className="insp__val">
                      <span className="sw">
                        <i style={{ background: currentLayer.fillHex }} />
                        {currentLayer.fill}
                      </span>
                    </span>
                  </div>
                  <div className="insp__row">
                    <span>变量模式</span>
                    <div className="insp__mode">
                      <button
                        type="button"
                        className={`read__chip${!darkTheme ? " is-on" : ""}`}
                        onClick={() => setDarkTheme(false)}
                      >
                        Theme · Light
                      </button>
                      <button
                        type="button"
                        className={`read__chip${darkTheme ? " is-on" : ""}`}
                        onClick={() => setDarkTheme(true)}
                      >
                        Theme · Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 原型 */}
              <div className={`ui__state${active === 1 ? " is-on" : ""}`}>
                <div className="proto">
                  <svg className="proto__wire" viewBox="0 0 400 240" aria-hidden="true">
                    <path
                      d="M148 188 C 208 188, 186 96, 248 96"
                      fill="none"
                      stroke="#1668c4"
                      strokeWidth="2"
                      strokeDasharray="5 4"
                    />
                    <circle cx="148" cy="188" r="4" fill="#1668c4" />
                    <circle cx="248" cy="96" r="5" fill="#1668c4" />
                  </svg>
                  <div
                    onClick={() => setProtoActiveScreen(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <PhoneScreen
                      dim={protoActiveScreen === 1}
                      onTriggerProto={() => setProtoActiveScreen(1)}
                    />
                  </div>
                  <div
                    onClick={() => setProtoActiveScreen(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <PhoneScreen
                      dim={protoActiveScreen === 0}
                      protoStep="interests"
                      onTriggerProto={() => setProtoActiveScreen(0)}
                    />
                  </div>
                </div>
                <div className="insp" style={{ marginTop: 14 }}>
                  <div className="insp__row">
                    <span>触发器</span>
                    <span className="insp__val">On click · 点按「Start hike」可预览跳转</span>
                  </div>
                  <div className="insp__row">
                    <span>目标画框</span>
                    <span className="insp__val">
                      Navigate to · {protoActiveScreen === 1 ? "1 Home (已跳转)" : "2 Interests"}
                    </span>
                  </div>
                  <div className="insp__row">
                    <span>转场曲线</span>
                    <span className="insp__val">Smart animate · cubic-bezier(0.16, 1, 0.3, 1) · 300ms</span>
                  </div>
                </div>
              </div>

              {/* 开发模式 */}
              <div className={`ui__state${active === 2 ? " is-on" : ""}`}>
                <div className="devbar">
                  <div className="devbar__langs" role="tablist" aria-label="目标代码语言">
                    {CODE_LANGS.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        className={`read__chip${codeLang === lang ? " is-on" : ""}`}
                        onClick={() => setCodeLang(lang)}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                  <button type="button" className="read__copy" onClick={copyCode}>
                    {copiedCode ? "已复制" : "复制代码"}
                  </button>
                </div>
                <pre className="codebox codebox--dev">
                  <code>{codeSnippets[codeLang]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
