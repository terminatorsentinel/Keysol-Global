"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   ANIMATION PRIMITIVES
══════════════════════════════════════════════════════════ */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ y: 32 }}
      animate={inView ? { y: 0 } : { y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

function SlideIn({ children, delay = 0, from = "left" }: { children: React.ReactNode; delay?: number; from?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ x: from === "left" ? -40 : 40 }}
      animate={inView ? { x: 0 } : { x: from === "left" ? -40 : 40 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════════════════ */
function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const steps = 60, dur = 2000;
    let s = 0;
    const inc = target / steps;
    const id = setInterval(() => {
      s += inc;
      if (s >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(s));
    }, dur / steps);
    return () => clearInterval(id);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ══════════════════════════════════════════════════════════
   CODE EDITOR VIZ — dark theme, clickable tabs, animated typing
══════════════════════════════════════════════════════════ */
const EDITOR_TABS: {
  name: string;
  dot: string;
  accentColor: string;
  lines: { tokens: { t: string; c: string }[] }[];
}[] = [
  {
    name: "deploy.ts",
    dot: "#4ADE80",
    accentColor: "#A78BFA",
    lines: [
      { tokens: [{ t: "async ", c: "#C792EA" }, { t: "function ", c: "#82AAFF" }, { t: "deployService", c: "#FFCB6B" }, { t: "(", c: "#89DDFF" }, { t: "config", c: "#F78C6C" }, { t: ": ", c: "#89DDFF" }, { t: "Config", c: "#FFCB6B" }, { t: ") {", c: "#89DDFF" }] },
      { tokens: [{ t: "  const ", c: "#C792EA" }, { t: "pipeline ", c: "#EEFFFF" }, { t: "= ", c: "#89DDFF" }, { t: "await ", c: "#C792EA" }, { t: "CI", c: "#82AAFF" }, { t: ".build(config);", c: "#89DDFF" }] },
      { tokens: [{ t: "  await ", c: "#C792EA" }, { t: "pipeline", c: "#EEFFFF" }, { t: ".runTests(", c: "#89DDFF" }, { t: "{ coverage: ", c: "#89DDFF" }, { t: "true", c: "#F78C6C" }, { t: " });", c: "#89DDFF" }] },
      { tokens: [{ t: "  if ", c: "#C792EA" }, { t: "(pipeline.coverage ", c: "#EEFFFF" }, { t: ">= ", c: "#89DDFF" }, { t: "97", c: "#F78C6C" }, { t: ") {", c: "#89DDFF" }] },
      { tokens: [{ t: "    await ", c: "#C792EA" }, { t: "k8s", c: "#82AAFF" }, { t: ".deploy(pipeline);", c: "#89DDFF" }] },
      { tokens: [{ t: "    logger", c: "#82AAFF" }, { t: ".info(", c: "#89DDFF" }, { t: "`✅ Deployed v", c: "#C3E88D" }, { t: "${", c: "#89DDFF" }, { t: "config.version", c: "#EEFFFF" }, { t: "}`", c: "#C3E88D" }, { t: ");", c: "#89DDFF" }] },
      { tokens: [{ t: "  } ", c: "#89DDFF" }, { t: "else ", c: "#C792EA" }, { t: "{", c: "#89DDFF" }] },
      { tokens: [{ t: "    throw ", c: "#C792EA" }, { t: "new ", c: "#C792EA" }, { t: "Error", c: "#FFCB6B" }, { t: "(", c: "#89DDFF" }, { t: "`Coverage below threshold`", c: "#C3E88D" }, { t: ");", c: "#89DDFF" }] },
      { tokens: [{ t: "  }", c: "#89DDFF" }] },
      { tokens: [{ t: "}", c: "#89DDFF" }] },
    ],
  },
  {
    name: "api.ts",
    dot: "#60A5FA",
    accentColor: "#60A5FA",
    lines: [
      { tokens: [{ t: "import ", c: "#C792EA" }, { t: "{ Router } ", c: "#EEFFFF" }, { t: "from ", c: "#C792EA" }, { t: "'express';", c: "#C3E88D" }] },
      { tokens: [{ t: "import ", c: "#C792EA" }, { t: "{ authenticate } ", c: "#EEFFFF" }, { t: "from ", c: "#C792EA" }, { t: "'./middleware';", c: "#C3E88D" }] },
      { tokens: [] },
      { tokens: [{ t: "const ", c: "#C792EA" }, { t: "router ", c: "#EEFFFF" }, { t: "= ", c: "#89DDFF" }, { t: "Router", c: "#FFCB6B" }, { t: "();", c: "#89DDFF" }] },
      { tokens: [] },
      { tokens: [{ t: "router", c: "#82AAFF" }, { t: ".get(", c: "#89DDFF" }, { t: "'/users/:id'", c: "#C3E88D" }, { t: ", authenticate,", c: "#89DDFF" }] },
      { tokens: [{ t: "  async ", c: "#C792EA" }, { t: "(req, res) ", c: "#EEFFFF" }, { t: "=> {", c: "#89DDFF" }] },
      { tokens: [{ t: "    const ", c: "#C792EA" }, { t: "user ", c: "#EEFFFF" }, { t: "= ", c: "#89DDFF" }, { t: "await ", c: "#C792EA" }, { t: "User", c: "#FFCB6B" }, { t: ".findById(req.params.id);", c: "#89DDFF" }] },
      { tokens: [{ t: "    res", c: "#82AAFF" }, { t: ".json(", c: "#89DDFF" }, { t: "{ data: user, status: ", c: "#89DDFF" }, { t: "200 ", c: "#F78C6C" }, { t: "});", c: "#89DDFF" }] },
      { tokens: [{ t: "});", c: "#89DDFF" }] },
    ],
  },
  {
    name: "schema.ts",
    dot: "#A78BFA",
    accentColor: "#A78BFA",
    lines: [
      { tokens: [{ t: "import ", c: "#C792EA" }, { t: "{ z } ", c: "#EEFFFF" }, { t: "from ", c: "#C792EA" }, { t: "'zod';", c: "#C3E88D" }] },
      { tokens: [] },
      { tokens: [{ t: "export ", c: "#C792EA" }, { t: "const ", c: "#C792EA" }, { t: "UserSchema ", c: "#FFCB6B" }, { t: "= z", c: "#EEFFFF" }, { t: ".object({", c: "#89DDFF" }] },
      { tokens: [{ t: "  id: ", c: "#EEFFFF" }, { t: "z", c: "#EEFFFF" }, { t: ".string()", c: "#82AAFF" }, { t: ".uuid(),", c: "#89DDFF" }] },
      { tokens: [{ t: "  name: ", c: "#EEFFFF" }, { t: "z", c: "#EEFFFF" }, { t: ".string()", c: "#82AAFF" }, { t: ".min(", c: "#89DDFF" }, { t: "2", c: "#F78C6C" }, { t: "),", c: "#89DDFF" }] },
      { tokens: [{ t: "  email: ", c: "#EEFFFF" }, { t: "z", c: "#EEFFFF" }, { t: ".string()", c: "#82AAFF" }, { t: ".email(),", c: "#89DDFF" }] },
      { tokens: [{ t: "  role: ", c: "#EEFFFF" }, { t: "z", c: "#EEFFFF" }, { t: ".enum([", c: "#89DDFF" }, { t: "'admin'", c: "#C3E88D" }, { t: ", ", c: "#89DDFF" }, { t: "'user'", c: "#C3E88D" }, { t: "]),", c: "#89DDFF" }] },
      { tokens: [{ t: "  createdAt: ", c: "#EEFFFF" }, { t: "z", c: "#EEFFFF" }, { t: ".date(),", c: "#82AAFF" }] },
      { tokens: [{ t: "});", c: "#89DDFF" }] },
      { tokens: [{ t: "export ", c: "#C792EA" }, { t: "type ", c: "#C792EA" }, { t: "User ", c: "#FFCB6B" }, { t: "= z", c: "#EEFFFF" }, { t: ".infer<", c: "#89DDFF" }, { t: "typeof ", c: "#C792EA" }, { t: "UserSchema>;", c: "#89DDFF" }] },
    ],
  },
];

function CodeEditorViz() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentLines = EDITOR_TABS[activeTab].lines;
  const accentColor = EDITOR_TABS[activeTab].accentColor;

  // Reset animation when tab changes
  useEffect(() => {
    setActiveLine(0);
    setCharCount(0);
  }, [activeTab]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentLine = currentLines[activeLine];
    const fullText = currentLine.tokens.map(t => t.t).join("");
    if (charCount < fullText.length) {
      const id = setTimeout(() => setCharCount(c => c + 1), 36);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => {
        const next = (activeLine + 1) % currentLines.length;
        setActiveLine(next);
        setCharCount(0);
      }, 480);
      return () => clearTimeout(id);
    }
  }, [activeLine, charCount, currentLines]);

  function renderTokens(lineIdx: number) {
    const tokens = currentLines[lineIdx].tokens;
    const fullText = tokens.map(t => t.t).join("");
    const slice = fullText.slice(0, charCount);
    let pos = 0;
    return tokens.map((tok, ti) => {
      const start = pos;
      pos += tok.t.length;
      const visible = slice.slice(start, pos);
      if (!visible) return null;
      return <span key={ti} style={{ color: tok.c }}>{visible}</span>;
    });
  }

  const lineNumbers = Array.from({ length: currentLines.length }, (_, i) => i + 1);
  const TAB_HEADER_HEIGHT = 44;
  const LINE_H = 21;

  return (
    <div style={{
      background: "#0F172A",
      borderRadius: 12,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      fontSize: 11.5,
      lineHeight: `${LINE_H}px`,
      position: "relative",
      overflow: "hidden",
      minHeight: 252,
    }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: 0, left: "30%", width: 200, height: 100,
        background: `radial-gradient(ellipse, ${accentColor}18 0%, transparent 70%)`,
        pointerEvents: "none", transition: "background 0.4s" }} />
      <div style={{ position: "absolute", bottom: 0, right: "10%", width: 180, height: 90,
        background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)",
        pointerEvents: "none" }} />

      {/* File tabs */}
      <div style={{
        display: "flex", alignItems: "flex-end", gap: 0,
        paddingLeft: 10, paddingTop: 6,
        borderBottom: "1.5px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.03)",
        height: TAB_HEADER_HEIGHT,
      }}>
        {EDITOR_TABS.map((tab, ti) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(ti)}
            style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "5px 14px 6px",
              borderRadius: "6px 6px 0 0",
              background: ti === activeTab ? "rgba(255,255,255,0.06)" : "transparent",
              border: "none",
              borderTop: ti === activeTab ? `2px solid ${tab.accentColor}` : "2px solid transparent",
              borderBottom: ti === activeTab ? `1.5px solid #0F172A` : "none",
              cursor: "pointer",
              transition: "background 0.18s, border-color 0.18s",
              marginBottom: ti === activeTab ? "-1.5px" : 0,
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: tab.dot, flexShrink: 0 }} />
            <span style={{
              fontSize: 10.5,
              color: ti === activeTab ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.32)",
              fontWeight: ti === activeTab ? 700 : 400,
              letterSpacing: "0.01em",
              transition: "color 0.18s",
            }}>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Code area */}
      <div style={{ display: "flex", paddingTop: 6, paddingBottom: 4 }}>
        {/* Line numbers */}
        <div style={{ minWidth: 34, padding: "0 6px 0 10px", textAlign: "right", userSelect: "none", flexShrink: 0 }}>
          {lineNumbers.map((n, i) => (
            <div key={n} style={{
              color: i === activeLine ? accentColor : "rgba(255,255,255,0.2)",
              fontSize: 10, lineHeight: `${LINE_H}px`,
              fontWeight: i === activeLine ? 700 : 400,
              transition: "color 0.2s",
            }}>{n}</div>
          ))}
        </div>

        {/* Active line highlight */}
        <div style={{
          position: "absolute", left: 0, right: 0,
          top: `${TAB_HEADER_HEIGHT + 6 + activeLine * LINE_H}px`,
          height: LINE_H,
          background: `${accentColor}12`,
          borderLeft: `2px solid ${accentColor}55`,
          pointerEvents: "none",
          transition: "top 0.12s ease, border-color 0.4s, background 0.4s",
        }} />

        {/* Code tokens */}
        <div style={{ flex: 1, paddingRight: 12 }}>
          {currentLines.map((line, li) => (
            <div key={li} style={{ whiteSpace: "pre", lineHeight: `${LINE_H}px`, display: "flex", alignItems: "center" }}>
              {li < activeLine || (li === activeLine && charCount === line.tokens.map(t => t.t).join("").length)
                ? line.tokens.map((tok, ti) => <span key={ti} style={{ color: tok.c }}>{tok.t}</span>)
                : li === activeLine
                  ? <>
                      {renderTokens(li)}
                      <span style={{
                        display: "inline-block", width: 1.5, height: 13,
                        background: cursorVisible ? accentColor : "transparent",
                        marginLeft: 1, verticalAlign: "middle",
                        boxShadow: cursorVisible ? `0 0 5px ${accentColor}` : "none",
                        transition: "background 0.05s",
                      }} />
                    </>
                  : <span style={{ color: "rgba(255,255,255,0.07)" }}>{line.tokens.map(t => t.t).join("")}</span>
              }
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "6px 12px 7px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.02)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
            <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>TypeScript</span>
          </div>
          <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.3)" }}>Ln {activeLine + 1}, Col {charCount + 1}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 9.5, color: "rgba(74,222,128,0.85)", fontWeight: 700 }}>✓ 0 errors</span>
          <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.25)" }}>UTF-8</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */
const TICKER_ITEMS = [
  "⚡ 150+ production apps shipped globally",
  "🔧 Full-stack engineering from MVP to enterprise",
  "☁️ AWS, GCP & Azure certified architects",
  "🧪 97%+ automated test coverage standard",
  "🚀 Production-ready in as little as 6 weeks",
  "🔐 SOC 2 & ISO 27001 compliant builds",
  "📦 Microservices, APIs & cloud-native architecture",
  "🛡️ Full IP ownership — no lock-in, ever",
];

function TickerBanner() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{
      background: "linear-gradient(90deg, #0D1B3E 0%, #1a3068 50%, #0D1B3E 100%)",
      overflow: "hidden", padding: "12px 0",
      borderBottom: "1px solid rgba(37,99,235,0.2)",
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            paddingRight: 56, whiteSpace: "nowrap",
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em" }}>{item}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(96,165,250,0.5)", flexShrink: 0, display: "inline-block" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   ROI CALCULATOR (Software Engineering)
══════════════════════════════════════════════════════════ */
function ROICalculator() {
  const [devCount, setDevCount] = useState(3);
  const [projectMonths, setProjectMonths] = useState(6);
  const [avgDevSalary, setAvgDevSalary] = useState(75000);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const inHouseCost = devCount * (avgDevSalary / 12) * projectMonths * 1.4; // 40% overhead
  const keysolCost = devCount * 8500 * projectMonths; // avg ~£8,500/dev/month
  const savings = Math.max(0, inHouseCost - keysolCost);
  const roi = savings > 0 ? Math.round((savings / keysolCost) * 100) : 0;
  const fasterDelivery = Math.round(projectMonths * 0.35);

  return (
    <section ref={ref} style={{
      padding: "108px 48px",
      background: "linear-gradient(160deg, #F0F4FF 0%, #F8FAFF 50%, #EEF2FF 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px" }} />
      <div style={{ position: "absolute", top: -200, right: -100, width: 600, height: 600,
        background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500,
        background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ y: 40 }}
          animate={inView ? { y: 0 } : { y: 40 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
              borderRadius: 100, padding: "7px 20px", marginBottom: 24,
            }}>
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.14em", textTransform: "uppercase" }}>Cost Calculator</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 900, color: "#0F172A",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
            }}>
              In-house vs. KeySol:{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  display: "inline",
                }}
              >
                see the difference.
              </motion.span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              Adjust the sliders to compare building in-house versus partnering with KeySol.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { label: "Number of developers needed", value: devCount, min: 1, max: 20, step: 1, set: setDevCount, suffix: "", color: "#2563EB" },
                { label: "Project duration (months)", value: projectMonths, min: 1, max: 24, step: 1, set: setProjectMonths, suffix: " mo", color: "#7C3AED" },
                { label: "Average developer salary (£/year)", value: avgDevSalary, min: 40000, max: 150000, step: 5000, set: setAvgDevSalary, suffix: "", prefix: "£", color: "#059669" },
              ].map(({ label, value, min, max, step, set, suffix, prefix, color }) => (
                <div key={label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(15,23,42,0.65)" }}>{label}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color, letterSpacing: "-0.02em" }}>
                      {prefix}{value.toLocaleString()}{suffix}
                    </span>
                  </div>
                  <div style={{ position: "relative", height: 6, borderRadius: 6, background: "rgba(37,99,235,0.1)" }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, height: "100%",
                      width: `${((value - min) / (max - min)) * 100}%`,
                      background: `linear-gradient(90deg, ${color}66, ${color})`,
                      borderRadius: 6, transition: "width 0.1s",
                    }} />
                    <input
                      type="range" min={min} max={max} step={step} value={value}
                      onChange={e => set(Number(e.target.value))}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", margin: 0 }}
                    />
                    <div style={{
                      position: "absolute", top: "50%",
                      left: `calc(${((value - min) / (max - min)) * 100}% - 10px)`,
                      transform: "translateY(-50%)",
                      width: 20, height: 20, borderRadius: "50%",
                      background: color, boxShadow: `0 0 12px ${color}60`,
                      border: "2.5px solid #fff", pointerEvents: "none",
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(37,99,235,0.12)",
              borderRadius: 28, padding: "40px 36px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 24px 64px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)",
            }}>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Estimated cost saving</div>
                <motion.div
                  key={Math.round(savings / 1000)}
                  initial={{ scale: 0.92 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    fontSize: "clamp(42px,4.5vw,64px)", fontWeight: 900,
                    background: "linear-gradient(135deg, #059669, #047857)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.04em", lineHeight: 1,
                  }}
                >
                  £{Math.round(savings / 1000)}k
                </motion.div>
                <div style={{ fontSize: 13, color: "rgba(15,23,42,0.4)", marginTop: 8, fontWeight: 500 }}>vs. hiring in-house</div>
              </div>

              <div style={{ height: 1, background: "rgba(37,99,235,0.08)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "In-house total cost (incl. overheads)", value: `£${Math.round(inHouseCost / 1000)}k`, color: "#DC2626" },
                  { label: "KeySol engagement cost", value: `£${Math.round(keysolCost / 1000)}k`, color: "#2563EB" },
                  { label: "Time saved vs. in-house hiring", value: `~${fasterDelivery} mo`, color: "#7C3AED" },
                  { label: "Estimated cost ROI", value: `${roi}%`, color: "#059669" },
                ].map(({ label, value, color }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 14px", borderRadius: 10,
                    background: `${color}08`, border: `1px solid ${color}18`,
                  }}>
                    <span style={{ fontSize: 13, color: "rgba(15,23,42,0.6)", fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color }}>{value}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact/" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#fff", borderRadius: 14, padding: "14px 24px",
                fontSize: 14, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 28px rgba(37,99,235,0.35)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 36px rgba(37,99,235,0.45)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.35)"; }}
              >
                Get your personalised cost estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <p style={{ fontSize: 11, color: "rgba(15,23,42,0.35)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                Based on typical UK market rates and 150+ project engagements. Actual results vary.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   TECH STACK MARQUEE
══════════════════════════════════════════════════════════ */
const TECH_STACK = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "AWS", color: "#FF9900" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Docker", color: "#2496ED" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Redis", color: "#DC382D" },
  { name: "Terraform", color: "#7B42BC" },
];

function TechStackStrip() {
  const doubled = [...TECH_STACK, ...TECH_STACK];
  return (
    <div style={{ padding: "56px 0", background: "#fff", overflow: "hidden", borderTop: "1px solid rgba(37,99,235,0.06)", borderBottom: "1px solid rgba(37,99,235,0.06)" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(15,23,42,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Technologies & Frameworks We Master
        </span>
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((tech, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 28px", marginRight: 8, borderRadius: 12,
            background: "rgba(248,250,255,0.8)", border: "1.5px solid rgba(37,99,235,0.08)",
            whiteSpace: "nowrap",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: tech.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", letterSpacing: "-0.01em" }}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   RESULTS / TESTIMONIALS STRIP
══════════════════════════════════════════════════════════ */
const clientResults = [
  {
    metric: "6×", label: "faster time-to-market",
    quote: "KeySol took our concept from design to live product in 9 weeks. We'd been quoted 6 months by two other agencies.",
    name: "CTO, Series A SaaS Startup",
    color: "#2563EB",
  },
  {
    metric: "97.3%", label: "automated test coverage",
    quote: "Their code quality is exceptional. Zero regressions across 18 months of feature releases. That's rare in this industry.",
    name: "VP Engineering, FinTech Platform",
    color: "#7C3AED",
  },
  {
    metric: "40%", label: "lower build cost vs agency",
    quote: "We saved £280k compared to the London agency quote — and got a better product. KeySol is genuinely world-class.",
    name: "COO, E-commerce Scale-up",
    color: "#059669",
  },
  {
    metric: "99.9%", label: "uptime SLA maintained",
    quote: "Our platform processes £4M/day and hasn't had an outage since KeySol rebuilt the infrastructure 14 months ago.",
    name: "Infrastructure Lead, Payments Co.",
    color: "#D97706",
  },
];

function ResultsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} style={{ padding: "108px 48px", background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          initial={{ y: 32 }}
          animate={inView ? { y: 0 } : { y: 32 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "#F0FDF4", borderRadius: 100, padding: "5px 16px", marginBottom: 18,
            border: "1px solid rgba(5,150,105,0.2)",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#059669", letterSpacing: "0.1em", textTransform: "uppercase" }}>Client Results</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
            Real outcomes from real engagements
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {clientResults.map((r, i) => (
            <motion.div
              key={i}
              initial={{ y: 24 }}
              animate={inView ? { y: 0 } : { y: 24 }}
              transition={{ duration: 0.55, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "32px 28px", borderRadius: 22,
                border: "1.5px solid rgba(37,99,235,0.08)",
                background: "#FAFBFF",
                display: "flex", flexDirection: "column", gap: 16,
              }}
            >
              <div>
                <div style={{ fontSize: "clamp(36px,3vw,52px)", fontWeight: 900, color: r.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{r.metric}</div>
                <div style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", fontWeight: 600, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{r.label}</div>
              </div>
              <div style={{ height: 1.5, background: `linear-gradient(90deg, ${r.color}40, transparent)` }} />
              <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, flex: 1, fontStyle: "italic" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${r.color}40, ${r.color}20)`,
                  border: `1.5px solid ${r.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                }}>{["💻","🏦","🛍️","⚡"][i]}</div>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: "#6B7280" }}>{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const capabilities = [
  {
    gradient: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    glow: "rgba(37,99,235,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: "Custom Web Applications",
    desc: "Scalable, high-performance web apps built with React, Next.js, and TypeScript — architected for enterprise scale from day one.",
    tag: "Most Popular",
  },
  {
    gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)",
    glow: "rgba(124,58,237,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: "Mobile App Development",
    desc: "Native-performance iOS & Android apps with React Native or Flutter — single codebase, rapid iteration, app-store ready.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#0891B2,#0E7490)",
    glow: "rgba(8,145,178,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    title: "API & Microservices",
    desc: "RESTful and GraphQL APIs, event-driven microservices, and distributed backends engineered to handle millions of requests with zero downtime.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#059669,#047857)",
    glow: "rgba(5,150,105,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    title: "Cloud Infrastructure & DevOps",
    desc: "AWS, GCP, and Azure architecture, Kubernetes orchestration, CI/CD pipelines, and infrastructure-as-code for production-grade deployments.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#D97706,#B45309)",
    glow: "rgba(217,119,6,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Legacy System Modernisation",
    desc: "Migrate monoliths to modern microservices architecture — strangler pattern migration, zero downtime, full test coverage throughout.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#DC2626,#B91C1C)",
    glow: "rgba(220,38,38,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    title: "QA & Performance Engineering",
    desc: "Comprehensive automated test suites, load testing, security audits, and performance optimisation — ship with confidence every sprint.",
    tag: "",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Apps shipped", sub: "web, mobile & backend" },
  { value: 99,  suffix: "%", label: "Uptime SLA", sub: "production systems" },
  { value: 4,   suffix: "×", label: "Faster delivery", sub: "vs. in-house teams" },
  { value: 40,  suffix: "%", label: "Cost savings", sub: "vs. traditional agencies" },
];

const processSteps = [
  {
    num: "01", color: "#2563EB", bg: "rgba(37,99,235,0.12)",
    title: "Discovery",
    desc: "We map your technical landscape, identify architecture risks, and define clear functional requirements — no assumptions, no surprises.",
  },
  {
    num: "02", color: "#7C3AED", bg: "rgba(124,58,237,0.12)",
    title: "Architecture",
    desc: "System design, stack selection, API contracts, and full technical specification before a single line of production code is written.",
  },
  {
    num: "03", color: "#0891B2", bg: "rgba(8,145,178,0.12)",
    title: "Sprint Build",
    desc: "Agile sprints with weekly demos, continuous integration, peer code reviews, and living documentation — full visibility at every stage.",
  },
  {
    num: "04", color: "#059669", bg: "rgba(5,150,105,0.12)",
    title: "QA & Release",
    desc: "Automated tests, staged rollouts, and production hardening — we deploy when it is genuinely ready, not just deadline-driven.",
  },
  {
    num: "05", color: "#D97706", bg: "rgba(217,119,6,0.12)",
    title: "Scale & Support",
    desc: "Post-launch monitoring, feature velocity, performance tuning, and roadmap execution so your product keeps compounding in value.",
  },
];

const useCases = [
  {
    industry: "SaaS Platforms",
    icon: "☁️",
    color: "#2563EB",
    items: ["Multi-tenant SaaS architecture", "Subscription billing & metering", "Self-serve onboarding & in-app analytics"],
  },
  {
    industry: "FinTech",
    icon: "💳",
    color: "#059669",
    items: ["Secure payment processing integrations", "Real-time transaction ledgers", "Regulatory compliance & audit trails"],
  },
  {
    industry: "E-commerce",
    icon: "🛍️",
    color: "#7C3AED",
    items: ["Custom storefront & checkout flows", "Inventory & order management systems", "Headless commerce architecture"],
  },
  {
    industry: "Enterprise Internal Tools",
    icon: "🏢",
    color: "#D97706",
    items: ["ERP & CRM custom modules", "Workflow automation dashboards", "Data visualisation & reporting portals"],
  },
  {
    industry: "Healthcare Tech",
    icon: "🏥",
    color: "#0891B2",
    items: ["HIPAA-compliant patient portals", "EHR integration & HL7/FHIR APIs", "Telemedicine platform development"],
  },
  {
    industry: "Marketplace & Platforms",
    icon: "🔄",
    color: "#DC2626",
    items: ["Two-sided marketplace architecture", "Matching algorithms & recommendation engines", "Dispute management & escrow systems"],
  },
];

const reasons = [
  {
    color: "#2563EB",
    stat: "150+", statLabel: "products shipped",
    title: "Engineers, not account managers",
    desc: "You work directly with the senior engineers building your product. No middlemen, no telephone-game briefs — just fast, accurate execution.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    color: "#7C3AED",
    stat: "99%", statLabel: "on-time delivery",
    title: "Predictable delivery",
    desc: "Fixed-scope sprints with clear acceptance criteria mean you always know what you're getting and when — budgets and deadlines are respected.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    color: "#0891B2",
    stat: "100%", statLabel: "IP ownership",
    title: "You own everything",
    desc: "Full IP transfer on every engagement. You receive source code, documentation, and deployment scripts — no lock-in, ever.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    color: "#059669",
    stat: "24 / 7", statLabel: "monitoring & support",
    title: "Built to last",
    desc: "We write tests, not just features. Every project ships with a full CI/CD pipeline, monitoring stack, and runbook so operations teams sleep at night.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
];

const faqs = [
  { q: "What technology stack do you use?", a: "We're stack-agnostic and recommend the best technology for your specific problem. Most commonly: Next.js/React/TypeScript for frontend, Node.js/Python/Go for backend, PostgreSQL/MongoDB for data, and AWS/GCP for infrastructure. We always explain our choices before any code is written." },
  { q: "How long does a typical project take?", a: "MVPs typically take 6–12 weeks. Full-scale products range from 16–32 weeks depending on complexity. We provide a detailed, milestone-based timeline after the discovery phase — with no ambiguity or hidden scope built in." },
  { q: "Can you take over an existing codebase?", a: "Yes — and we do this frequently. We start with a thorough codebase audit to understand quality, risks, and technical debt, then propose a migration or enhancement plan. We've successfully rescued dozens of projects from other agencies." },
  { q: "Do you work with early-stage startups?", a: "Absolutely. We offer founder-friendly engagement models including MVP sprints, equity discussions for the right projects, and post-launch retainer arrangements so you can scale development with predictable costs." },
  { q: "How do you handle IP and confidentiality?", a: "NDA-first on every engagement. All code, assets, and documentation are transferred to you at project close. We never reuse your IP for other clients and operate with full confidentiality throughout." },
];

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function SoftwareEngineeringPage() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif", background: "#fff", overflowX: "hidden" }}>

      {/* ══ TICKER BANNER ════════════════════════════════════════════ */}
      <TickerBanner />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(150deg, #F8FAFF 0%, #EEF2FF 35%, #F0F7FF 65%, #F8FAFF 100%)",
        paddingTop: 130, paddingBottom: 120,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 60%)",
          pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -150, left: "30%", width: 600, height: 400,
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 60%)",
          pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: -100, width: 400, height: 400,
          background: "radial-gradient(ellipse at center, rgba(8,145,178,0.05) 0%, transparent 65%)",
          pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 280, pointerEvents: "none" }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute", right: 0,
              height: "1px", width: `${30 + i * 9}px`,
              top: `${i * 20 + 20}px`,
              background: `rgba(37,99,235,${0.04 + i * 0.004})`,
            }} />
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 80, alignItems: "center" }}>

            {/* LEFT COPY */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30 }}>
                  <Link href="/services/" style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", textDecoration: "none", fontWeight: 500 }}>Services</Link>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(15,23,42,0.25)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  <span style={{ fontSize: 12, color: "#2563EB", fontWeight: 600 }}>Software Engineering</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.06}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))",
                  border: "1px solid rgba(37,99,235,0.2)",
                  borderRadius: 100, padding: "7px 18px", marginBottom: 26,
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                    boxShadow: "0 0 8px rgba(37,99,235,0.5)",
                  }} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Enterprise Engineering
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 style={{ fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 6 }}>
                  Software{" "}
                  <motion.span
                    animate={{ color: ["#0F172A", "#2563EB", "#0F172A"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "inline" }}
                  >
                    Engineering
                  </motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.14}>
                <h1 style={{ fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 32, display: "inline-block" }}>
                  <motion.span
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: "linear-gradient(100deg, #60A5FA 0%, #A78BFA 30%, #34D399 55%, #60A5FA 70%, #F472B6 85%, #60A5FA 100%)",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      display: "inline",
                    }}
                  >
                    built to last.
                  </motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.19}>
                <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.82, marginBottom: 42, maxWidth: 490 }}>
                  We design and build scalable web applications, mobile apps, APIs, and cloud infrastructure that power ambitious businesses — shipped fast, engineered to last, and fully owned by you.
                </p>
              </FadeUp>

              <FadeUp delay={0.24}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link href="/contact/" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    color: "#fff", borderRadius: 14, padding: "15px 32px",
                    fontSize: 15, fontWeight: 700, textDecoration: "none",
                    boxShadow: "0 8px 32px rgba(37,99,235,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
                    transition: "transform 0.15s, box-shadow 0.15s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(37,99,235,0.65)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(37,99,235,0.55)"; }}
                  >
                    Start a Project
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                  <Link href="/consultation/" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#fff", color: "#374151",
                    borderRadius: 14, padding: "15px 28px",
                    fontSize: 15, fontWeight: 600, textDecoration: "none",
                    border: "1.5px solid #E5E7EB",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#F8FAFF"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2563EB"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB"; }}
                  >
                    Free Consultation
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 48, borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 28 }}>
                  {[
                    { dot: "#22C55E", text: "Full IP ownership", border: true },
                    { dot: "#2563EB", text: "99% uptime SLA", border: true },
                    { dot: "#7C3AED", text: "1–2 week sprints", border: false },
                  ].map(({ dot, text, border }) => (
                    <div key={text} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      paddingRight: border ? 24 : 0, marginRight: border ? 24 : 0,
                      borderRight: border ? "1px solid rgba(15,23,42,0.1)" : "none",
                    }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: dot, flexShrink: 0, boxShadow: `0 0 8px ${dot}` }} />
                      <span style={{ fontSize: 12.5, color: "rgba(15,23,42,0.5)", fontWeight: 500 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* RIGHT VISUAL */}
            <FadeUp delay={0.22}>
              <div style={{ position: "relative", paddingTop: 48, paddingBottom: 80, paddingLeft: 32 }}>
                <div style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(37,99,235,0.12)",
                  borderRadius: 28, overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}>
                  <div style={{
                    padding: "18px 22px 16px",
                    borderBottom: "1px solid rgba(37,99,235,0.08)",
                    background: "rgba(248,250,255,0.8)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ display: "flex", gap: 5 }}>
                        {["#FF5F57","#FFBD2E","#28C840"].map(c => (
                          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                        ))}
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.45)", marginLeft: 6 }}>KeySol Dev Studio — v2.8</span>
                    </div>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 6,
                      background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.28)",
                      borderRadius: 100, padding: "4px 12px",
                    }}>
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }}
                      />
                      <span style={{ fontSize: 10.5, fontWeight: 800, color: "#4ADE80", letterSpacing: "0.04em" }}>BUILD</span>
                    </div>
                  </div>

                  <div style={{ padding: "20px 24px 16px" }}>
                    <CodeEditorViz />
                  </div>

                  <div style={{ height: 1, background: "rgba(37,99,235,0.07)", margin: "0 22px" }} />

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                    {[
                      { label: "Test Coverage", val: "97.3%", color: "#059669", sub: "↑ 1.4% this sprint" },
                      { label: "Deploy Freq.", val: "3.2/day", color: "#2563EB", sub: "↑ 0.4 vs last week" },
                      { label: "Perf. Score", val: "98/100", color: "#D97706", sub: "↑ 3pts this week" },
                    ].map((m, mi) => (
                      <div key={m.label} style={{ padding: "16px 18px", borderRight: mi < 2 ? "1px solid rgba(37,99,235,0.07)" : "none" }}>
                        <div style={{ fontSize: 22, fontWeight: 900, color: m.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{m.val}</div>
                        <div style={{ fontSize: 10.5, color: "rgba(15,23,42,0.4)", marginTop: 4, fontWeight: 500 }}>{m.label}</div>
                        <div style={{ fontSize: 10, color: m.color, marginTop: 3, fontWeight: 600 }}>{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: 48, right: -240, width: 224,
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,255,0.95))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(37,99,235,0.12)",
                    borderRadius: 18, padding: "16px 18px",
                    boxShadow: "0 16px 48px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.06)",
                    zIndex: 10,
                  }}
                >
                  <div style={{ fontSize: 9.5, fontWeight: 800, color: "rgba(15,23,42,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>CI/CD Pipeline</div>
                  {[
                    { name: "Unit Tests", pct: 100, color: "#4ADE80" },
                    { name: "Build", pct: 95, color: "#60A5FA" },
                    { name: "Deploy", pct: 88, color: "#A78BFA" },
                  ].map(item => (
                    <div key={item.name} style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(15,23,42,0.7)" }}>{item.name}</span>
                        <span style={{ fontSize: 11, fontWeight: 800, color: item.color }}>{item.pct}%</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 4, background: "rgba(37,99,235,0.08)" }}>
                        <div style={{ height: "100%", width: `${item.pct}%`, borderRadius: 4, background: `linear-gradient(90deg, ${item.color}, ${item.color}55)` }} />
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  style={{
                    position: "absolute", bottom: -32, right: 0,
                    background: "rgba(5,150,105,0.9)",
                    backdropFilter: "blur(12px)",
                    color: "#fff", borderRadius: 14, padding: "11px 18px",
                    fontSize: 12, fontWeight: 700,
                    boxShadow: "0 8px 28px rgba(5,150,105,0.5)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex", alignItems: "center", gap: 8,
                    zIndex: 10,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }}
                  />
                  Production Deployed &amp; Live
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ STATS BAND ════════════════════════════════════════════════ */}
      <section style={{ background: "#F8FAFF", padding: "56px 48px", borderTop: "1px solid rgba(37,99,235,0.08)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {stats.map((s, i) => (
            <FadeUp key={i} delay={0.08 * i}>
              <div style={{ textAlign: "center", padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(37,99,235,0.1)" : "none" }}>
                <div style={{ fontSize: "clamp(36px,3.5vw,52px)", fontWeight: 900, background: "linear-gradient(135deg,#2563EB,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginTop: 8 }}>{s.label}</div>
                <div style={{ fontSize: 11.5, color: "rgba(15,23,42,0.42)", marginTop: 4 }}>{s.sub}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══ TECH STACK STRIP ══════════════════════════════════════════ */}
      <TechStackStrip />

      {/* ══ CAPABILITIES ══════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Build</span>
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 18 }}>
                Full-stack engineering capabilities
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
                From frontend UX to cloud infrastructure — we build every layer of your product with the same rigour, craftsmanship, and long-term thinking.
              </p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {capabilities.map((cap, i) => (
              <FadeUp key={i} delay={0.07 * i}>
                <CapabilityCard cap={cap} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════════════ */}
      <section style={{
        padding: "120px 48px",
        background: "linear-gradient(170deg, #F8FAFF 0%, #F1F5FF 50%, #EEF2FF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 900, height: 600, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)",
          pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -160, right: "5%", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)",
          pointerEvents: "none" }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 88 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: 100, padding: "7px 20px", marginBottom: 24,
              }}>
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED" }}
                />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.14em", textTransform: "uppercase" }}>Our Process</span>
              </div>
              <h2 style={{ fontSize: "clamp(34px,3.8vw,58px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.035em", lineHeight: 1.08, marginBottom: 20 }}>
                How we build software<br />
                <motion.span
                  animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    display: "inline",
                  }}
                >
                  that actually ships.
                </motion.span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                A battle-tested 5-phase engineering process refined across 150+ software deliveries — from MVP to enterprise scale.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, alignItems: "stretch" }}>
            {processSteps.map((p, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <ProcessCard step={p} index={i} isLast={i === processSteps.length - 1} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══════════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <SlideIn from="left">
              <div style={{ position: "sticky", top: 120 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 20 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Industry Use Cases</span>
                </div>
                <h2 style={{ fontSize: "clamp(28px,2.8vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 20 }}>
                  Software that works across every industry
                </h2>
                <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  We&apos;ve built production software across a dozen verticals. Each product is unique — but our engineering rigour means faster delivery and fewer surprises.
                </p>
                <Link href="/contact/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff", borderRadius: 12, padding: "13px 24px",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.4)",
                }}>
                  Discuss your project
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {useCases.map((uc, i) => (
                  <FadeUp key={i} delay={0.08 * i}>
                    <div style={{
                      padding: "24px", borderRadius: 18, border: "1.5px solid #E5E7EB",
                      background: "#fff", transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = uc.color; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${uc.color}20`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${uc.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{uc.icon}</div>
                        <span style={{ fontSize: 13.5, fontWeight: 800, color: "#0F172A" }}>{uc.industry}</span>
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                        {uc.items.map((item, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: uc.color, flexShrink: 0, marginTop: 6 }} />
                            <span style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ══ RESULTS STRIP ═════════════════════════════════════════════ */}
      <ResultsStrip />

      {/* ══ ROI CALCULATOR ════════════════════════════════════════════ */}
      <ROICalculator />

      {/* ══ WHY KEYSOL ════════════════════════════════════════════════ */}
      <section style={{
        padding: "120px 48px",
        background: "linear-gradient(160deg, #F8FAFF 0%, #F1F5FF 45%, #EEF2FF 75%, #F8FAFF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: -100, left: -100, width: 600, height: 600,
          background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: -60, width: 500, height: 500,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: 100, padding: "7px 20px", marginBottom: 24,
              }}>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED", flexShrink: 0 }}
                />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.14em", textTransform: "uppercase" }}>Why KeySol Global</span>
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.6vw,54px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                We don&apos;t just write code.
              </h2>
              <motion.h2
                animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  fontSize: "clamp(32px,3.6vw,54px)", fontWeight: 900,
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 28,
                  display: "block",
                }}
              >
                We engineer solutions.
              </motion.h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Real engineers. Clean architecture. Full ownership — from first commit to compounding product value.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {reasons.map((r, i) => (
              <FadeUp key={i} delay={0.09 * i}>
                <ReasonCard reason={r} />
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div style={{ marginTop: 64, display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
              {[
                { val: "NDA-first", label: "Full confidentiality" },
                { val: "Fixed-scope", label: "No scope creep" },
                { val: "Weekly demos", label: "Full transparency" },
                { val: "IP transfer", label: "You own everything" },
              ].map(({ val, label }) => (
                <div key={val} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em", marginBottom: 3 }}>{val}</div>
                  <div style={{ fontSize: 11.5, color: "rgba(15,23,42,0.4)", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>FAQ</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em" }}>
                Common questions
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} delay={0.05 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════════ */}
      <section style={{
        padding: "96px 48px", textAlign: "center",
        background: "linear-gradient(150deg, #F8FAFF 0%, #EEF2FF 40%, #E8F0FF 70%, #F0F4FF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)",
          pointerEvents: "none" }} />

        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
              borderRadius: 100, padding: "8px 18px", marginBottom: 28,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>Free 30-minute technical scoping session</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{ fontSize: "clamp(30px,3.6vw,52px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em" }}>
              Ready to build software that<br />
              <motion.span
                animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  display: "inline",
                }}
              >
                actually scales?
              </motion.span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Book a free scoping session with one of our senior engineers. We&apos;ll review your requirements, propose an architecture approach, and give you a clear cost and timeline estimate — no obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                color: "#fff", borderRadius: 14, padding: "16px 34px",
                fontSize: 15.5, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 32px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
              >
                Book Free Tech Session
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/case-studies/" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#fff", color: "#374151",
                borderRadius: 14, padding: "16px 28px",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                border: "1.5px solid #E5E7EB",
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#F8FAFF"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2563EB"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB"; }}
              >
                View Case Studies
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 52 }}>
              {[
                { icon: "🔒", text: "No commitment required" },
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "🎯", text: "Tailored to your stack" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ fontSize: 12.5, color: "rgba(15,23,42,0.45)", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PROCESS CARD
══════════════════════════════════════════════════════════ */
const stepIcons = [
  <svg key="d" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="a" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="q" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  <svg key="s" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
];

function ProcessCard({ step, index, isLast }: { step: typeof processSteps[0]; index: number; isLast?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 24,
          background: hovered ? `linear-gradient(160deg, #fff 0%, ${step.color}08 100%)` : "#fff",
          border: `1.5px solid ${hovered ? step.color + "55" : "rgba(226,232,240,0.9)"}`,
          padding: "32px 26px 30px",
          boxShadow: hovered
            ? `0 24px 72px ${step.color}22, 0 6px 24px rgba(0,0,0,0.06), inset 0 0 0 1px ${step.color}15`
            : "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(37,99,235,0.05)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "translateY(-12px) scale(1.01)" : "none",
          position: "relative", overflow: "hidden",
          cursor: "default", height: "100%",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 30% 0%, ${step.color}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: -10, right: 14,
          fontSize: 88, fontWeight: 900, lineHeight: 1,
          color: hovered ? `${step.color}12` : "rgba(15,23,42,0.04)",
          letterSpacing: "-0.06em", userSelect: "none",
          transition: "color 0.4s", fontVariantNumeric: "tabular-nums", pointerEvents: "none",
        }}>{step.num}</div>

        <div style={{
          width: 68, height: 68, borderRadius: 20,
          background: `linear-gradient(145deg, ${step.color}, ${step.color}bb)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 12px 40px ${step.color}55, 0 0 0 4px ${step.color}18` : `0 6px 20px ${step.color}35`,
          transition: "box-shadow 0.35s, transform 0.35s",
          transform: hovered ? "translateY(-3px) scale(1.06)" : "none",
          marginBottom: 22, flexShrink: 0, position: "relative", zIndex: 1,
        }}>
          {stepIcons[index]}
        </div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: `${step.color}12`, border: `1px solid ${step.color}30`,
          borderRadius: 100, padding: "4px 12px",
          marginBottom: 14, alignSelf: "flex-start",
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: step.color, flexShrink: 0 }} />
          <span style={{ fontSize: 10.5, fontWeight: 700, color: step.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Step {step.num}
          </span>
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginBottom: 12, lineHeight: 1.25, letterSpacing: "-0.025em", position: "relative", zIndex: 1 }}>{step.title}</h3>

        <p style={{ fontSize: 13.5, color: "rgba(15,23,42,0.55)", lineHeight: 1.75, marginBottom: 24, flexGrow: 1, position: "relative", zIndex: 1 }}>{step.desc}</p>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: `1px solid ${hovered ? step.color + "25" : "rgba(226,232,240,0.8)"}`,
          paddingTop: 16, transition: "border-color 0.3s", position: "relative", zIndex: 1,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <motion.div
              animate={hovered ? { x: [0, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.5, repeat: hovered ? Infinity : 0 }}
              style={{
                width: 28, height: 28, borderRadius: "50%",
                background: hovered ? step.color : `${step.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.25s", flexShrink: 0,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke={hovered ? "white" : step.color} strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </motion.div>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: hovered ? step.color : "rgba(15,23,42,0.38)", transition: "color 0.25s" }}>
              Learn more
            </span>
          </div>
          {!isLast && (
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              {[0,1,2].map(d => (
                <div key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: step.color, opacity: 0.2 + d * 0.2 }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   REASON CARD
══════════════════════════════════════════════════════════ */
function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "32px 26px 36px", borderRadius: 24,
        background: hovered ? `linear-gradient(160deg, #fff 0%, ${reason.color}08 100%)` : "#fff",
        border: `1.5px solid ${hovered ? reason.color + "55" : "rgba(226,232,240,0.9)"}`,
        boxShadow: hovered
          ? `0 24px 72px ${reason.color}20, 0 6px 24px rgba(0,0,0,0.06)`
          : "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(37,99,235,0.05)",
        transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-8px)" : "none",
        position: "relative", overflow: "hidden", height: "100%", cursor: "default",
      }}
    >
      <div style={{ position: "relative", marginBottom: 20 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: `linear-gradient(135deg, ${reason.color}, ${reason.color}bb)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 8px 24px ${reason.color}50` : `0 4px 12px ${reason.color}28`,
          transition: "box-shadow 0.3s, transform 0.3s",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}>
          {reason.icon}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, color: reason.color, marginBottom: 3 }}>{reason.stat}</div>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: "rgba(15,23,42,0.38)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{reason.statLabel}</div>
      </div>
      <div style={{ height: 1.5, borderRadius: 2, marginBottom: 18, background: `linear-gradient(90deg, ${reason.color}60, transparent)`, width: hovered ? "70%" : "28%", transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)" }} />
      <h3 style={{ fontSize: 15.5, fontWeight: 800, color: "#0F172A", marginBottom: 10, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{reason.title}</h3>
      <p style={{ fontSize: 13, color: "rgba(15,23,42,0.55)", lineHeight: 1.78 }}>{reason.desc}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CAPABILITY CARD
══════════════════════════════════════════════════════════ */
function CapabilityCard({ cap }: { cap: typeof capabilities[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px 28px 32px", borderRadius: 20,
        border: `1.5px solid ${hovered ? "transparent" : "#E5E7EB"}`,
        background: hovered ? "linear-gradient(145deg, #F8FAFF, #EEF2FF)" : "#fff",
        boxShadow: hovered ? `0 16px 48px ${cap.glow}` : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "none",
        position: "relative", overflow: "hidden", height: "100%",
      }}
    >
      {hovered && (
        <div style={{
          position: "absolute", top: 0, right: 0, width: 100, height: 100,
          background: `radial-gradient(circle at 100% 0%, ${cap.glow}, transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}
      {cap.tag && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          color: "#fff", borderRadius: 100, padding: "3px 10px",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.05em",
        }}>{cap.tag}</div>
      )}
      <div style={{
        width: 52, height: 52, borderRadius: 14, background: cap.gradient,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 20, boxShadow: `0 6px 20px ${cap.glow}`,
      }}>
        {cap.icon}
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginBottom: 10, lineHeight: 1.3 }}>{cap.title}</h3>
      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75 }}>{cap.desc}</p>
      <div style={{
        display: "flex", alignItems: "center", gap: 6, marginTop: 20,
        color: "#2563EB", fontSize: 13, fontWeight: 700,
        transform: hovered ? "translateX(0)" : "translateX(-4px)",
        transition: "transform 0.2s",
      }}>
        Learn more
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════════════ */
function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div style={{
        borderRadius: 16, overflow: "hidden",
        border: `1.5px solid ${open ? "#2563EB" : "#E5E7EB"}`,
        boxShadow: open ? "0 4px 20px rgba(37,99,235,0.1)" : "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%", padding: "22px 26px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: open ? "#EFF6FF" : "#fff",
            border: "none", cursor: "pointer", textAlign: "left",
            transition: "background 0.2s",
          }}
        >
          <span style={{ fontSize: 15.5, fontWeight: 700, color: "#0F172A", lineHeight: 1.4, paddingRight: 20 }}>{q}</span>
          <div style={{
            width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
            background: open ? "linear-gradient(135deg,#2563EB,#7C3AED)" : "#F1F5F9",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "#94A3B8"} strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "4px 26px 24px", background: "#EFF6FF" }}>
                <p style={{ fontSize: 14.5, color: "#374151", lineHeight: 1.8, margin: 0 }}>{a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}
