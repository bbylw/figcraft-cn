import { useEffect, useRef, useState } from "react";
import "../../styles/fragment.css";

const TABS = ["设计", "原型", "开发模式"] as const;

function Ridge() {
  return (
    <svg viewBox="0 0 160 78" width="100%" height="78" role="img" aria-label="山脊插画">
      <defs>
        <linearGradient id="rg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4c98a" />
          <stop offset="100%" stopColor="#e98a5a" />
        </linearGradient>
      </defs>
      <rect width="160" height="78" fill="url(#rg-sky)" />
      <circle cx="118" cy="30" r="14" fill="#fbe7b8" />
      <path d="M0 78 L38 34 L62 56 L88 26 L124 78 Z" fill="#1c7a54" />
      <path d="M62 78 L98 40 L140 78 Z" fill="#145f41" />
      <path d="M38 34 L48 45 L38 48 L28 45 Z" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}

function PhoneScreen({
  children,
  dim,
}: {
  children?: React.ReactNode;
  dim?: boolean;
}) {
  return (
    <div className="phone" style={dim ? { opacity: 0.45 } : undefined}>
      {children ?? (
        <>
          <div className="ph__card">
            <Ridge />
          </div>
          <div className="ph__line ph__line--w60" />
          <div className="ph__line ph__line--w40" />
          <div className="ph__btn">Start hike</div>
        </>
      )}
    </div>
  );
}

export default function EditorStates() {
  const [active, setActive] = useState(0);
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
    blocks.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className="steps__col">
        {[
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
        ].map((s, i) => (
          <div
            key={s.line}
            data-index={i}
            data-step
            ref={(el) => {
              blocks.current[i] = el;
            }}
            className={`stepblock${active === i ? " is-active" : ""}`}
          >
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
            </div>

            <div className="ui__stage">
              {/* 设计 */}
              <div className={`ui__state${active === 0 ? " is-on" : ""}`}>
                <div className="two">
                  <PhoneScreen />
                  <div className="layers">
                    <div className="layer layer--on">▸ Home</div>
                    <div className="layer layer--deep">◆ 自动布局 · 垂直</div>
                    <div className="layer layer--deep">▭ TrailRow</div>
                    <div className="layer layer--deep">▭ TrailRow</div>
                    <div className="layer layer--deep">▭ 标签栏</div>
                  </div>
                </div>
                <div className="insp" style={{ marginTop: 14 }}>
                  <div className="insp__row">
                    <span>自动布局</span>
                    <span className="insp__val">包裹 · 垂直 · 间距 16</span>
                  </div>
                  <div className="insp__row">
                    <span>填充</span>
                    <span className="insp__val">
                      <span className="sw">
                        <i style={{ background: "#1c7a54" }} />
                        color/primary
                      </span>
                    </span>
                  </div>
                  <div className="insp__row">
                    <span>模式</span>
                    <span className="insp__val">Theme · Light</span>
                  </div>
                </div>
              </div>

              {/* 原型 */}
              <div className={`ui__state${active === 1 ? " is-on" : ""}`}>
                <div className="proto">
                  <svg className="proto__wire" viewBox="0 0 400 300" aria-hidden="true">
                    <path
                      d="M150 214 C 214 214, 186 120, 258 120"
                      fill="none"
                      stroke="#1668c4"
                      strokeWidth="2"
                      strokeDasharray="5 4"
                    />
                    <circle cx="258" cy="120" r="5" fill="#1668c4" />
                  </svg>
                  <PhoneScreen />
                  <PhoneScreen dim />
                </div>
                <div className="insp" style={{ marginTop: 14 }}>
                  <div className="insp__row">
                    <span>触发器</span>
                    <span className="insp__val">On click</span>
                  </div>
                  <div className="insp__row">
                    <span>操作</span>
                    <span className="insp__val">Navigate to · 2 Interests</span>
                  </div>
                  <div className="insp__row">
                    <span>转场</span>
                    <span className="insp__val">Smart animate · 300ms</span>
                  </div>
                </div>
              </div>

              {/* 开发模式 */}
              <div className={`ui__state${active === 2 ? " is-on" : ""}`}>
                <pre className="codebox">
                  <code>
                    <div>
                    <span className="k">import</span> {"{ TrailRow }"}{" "}
                    <span className="k">from</span>{" "}
                    <span className="s">&quot;./TrailRow&quot;</span>;
                  </div>
                  <br />
                  <div>
                    <span className="k">export function</span> Home() {"{"}
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="k">return</span> (
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;TrailRow
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title=
                    <span className="s">&quot;Lake Louise&quot;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail=
                    <span className="s">&quot;8.4 km · 爬升 420 m&quot;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;difficulty=
                    <span className="s">&quot;中等&quot;</span>
                  </div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
                  <div>&nbsp;&nbsp;);</div>
                  <div>{"}"}</div>
                    <br />
                    <div className="c">// 组件的属性即形参</div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
