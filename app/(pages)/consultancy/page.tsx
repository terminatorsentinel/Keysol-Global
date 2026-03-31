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
   CONSULTANCY VIZ — Strategy roadmap animation
══════════════════════════════════════════════════════════ */
function ConsultancyViz() {
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep(s => (s + 1) % 5);
      setLineProgress(0);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(p + 1.8, 100);
      setLineProgress(p);
    }, 48);
    return () => clearInterval(id);
  }, [activeStep]);

  const phases = [
    {
      label: "Discovery", color: "#2563EB",
      svgIcon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
      desc: "Rapid diagnostic sprint",
      bullets: ["Stakeholder interviews", "Tech & process audit", "Gap & opportunity map"],
    },
    {
      label: "Analysis", color: "#7C3AED",
      svgIcon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
      desc: "Deep data synthesis",
      bullets: ["Root-cause analysis", "Competitive benchmarking", "Risk & dependency mapping"],
    },
    {
      label: "Strategy", color: "#0891B2",
      svgIcon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
      desc: "Roadmap design",
      bullets: ["Prioritised initiative backlog", "KPIs & success metrics", "Board-ready strategy deck"],
    },
    {
      label: "Execution", color: "#059669",
      svgIcon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
      desc: "Embedded delivery support",
      bullets: ["Programme governance", "Risk & blocker management", "Weekly progress reporting"],
    },
    {
      label: "Optimise", color: "#D97706",
      svgIcon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
      desc: "Continuous improvement",
      bullets: ["Quarterly strategic reviews", "KPI measurement & tuning", "Expansion opportunities"],
    },
  ];

  const metrics = [
    { label: "Avg. ROI", val: "340%", color: "#059669", icon: "📈" },
    { label: "Time-to-Strategy", val: "6wks", color: "#2563EB", icon: "⚡" },
    { label: "Satisfaction", val: "98%", color: "#7C3AED", icon: "⭐" },
  ];

  const active = phases[activeStep];

  return (
    <div style={{ width: "100%" }}>

      {/* ── Stepper timeline ── */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 20, position: "relative", paddingTop: 4 }}>
        {phases.map((ph, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>



            {/* Node */}
            <motion.div
              animate={i === activeStep
                ? { scale: [1, 1.12, 1], boxShadow: [`0 0 0px ${ph.color}00`, `0 0 22px ${ph.color}70`, `0 0 12px ${ph.color}40`] }
                : { scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                width: 56, height: 56, borderRadius: "50%",
                background: i < activeStep
                  ? `linear-gradient(135deg, ${ph.color}, ${ph.color}cc)`
                  : i === activeStep
                    ? `linear-gradient(145deg, ${ph.color}, ${ph.color}dd)`
                    : "rgba(226,232,240,0.7)",
                border: `2.5px solid ${i <= activeStep ? ph.color : "rgba(203,213,225,0.8)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1, position: "relative",
                transition: "background 0.5s, border 0.5s",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onClick={() => setActiveStep(i)}
            >
              {ph.svgIcon}
            </motion.div>

            {/* Label */}
            <div style={{
              marginTop: 8, fontSize: 9.5, fontWeight: 800,
              color: i === activeStep ? ph.color : i < activeStep ? "rgba(15,23,42,0.55)" : "rgba(15,23,42,0.3)",
              letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center",
              transition: "color 0.4s",
            }}>{ph.label}</div>

            {/* Active indicator dot */}
            {i === activeStep && (
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ width: 5, height: 5, borderRadius: "50%", background: ph.color, marginTop: 4 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Active phase detail card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(135deg, ${active.color}0D, ${active.color}06)`,
            border: `1.5px solid ${active.color}30`,
            borderRadius: 16, padding: "16px 18px", marginBottom: 16,
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Corner glow */}
          <div style={{
            position: "absolute", top: -20, right: -20, width: 80, height: 80,
            background: `radial-gradient(circle, ${active.color}25, transparent 70%)`,
            pointerEvents: "none",
          }} />

          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            {/* Icon bubble */}
            <div style={{
              width: 40, height: 40, borderRadius: 12, flexShrink: 0,
              background: `linear-gradient(135deg, ${active.color}, ${active.color}cc)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 4px 14px ${active.color}45`,
            }}>
              {active.svgIcon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: active.color }}>{active.label} Phase</span>
                <div style={{
                  background: `${active.color}18`, border: `1px solid ${active.color}30`,
                  borderRadius: 100, padding: "1px 8px",
                  fontSize: 9.5, fontWeight: 700, color: active.color, letterSpacing: "0.06em", textTransform: "uppercase",
                }}>Active</div>
              </div>
              <div style={{ fontSize: 11, color: "rgba(15,23,42,0.5)", fontWeight: 500, marginBottom: 10 }}>{active.desc}</div>

              {/* Bullet deliverables */}
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {active.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${active.color}18`, border: `1px solid ${active.color}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={active.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: 11.5, color: "rgba(15,23,42,0.65)", fontWeight: 500 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress ring */}
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <svg width="44" height="44" viewBox="0 0 44 44">
                <circle cx="22" cy="22" r="18" fill="none" stroke={`${active.color}18`} strokeWidth="3"/>
                <motion.circle
                  cx="22" cy="22" r="18" fill="none"
                  stroke={active.color} strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 18}`}
                  strokeDashoffset={`${2 * Math.PI * 18 * (1 - lineProgress / 100)}`}
                  style={{ transformOrigin: "22px 22px", transform: "rotate(-90deg)" }}
                />
                <text x="22" y="27" textAnchor="middle" fontSize="10" fontWeight="800" fill={active.color}>
                  {Math.round(lineProgress)}%
                </text>
              </svg>
              <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(15,23,42,0.35)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Progress</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Metrics row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {metrics.map((m, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.9)",
            border: `1px solid ${m.color}20`,
            borderRadius: 12, padding: "10px 12px",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: `${m.color}12`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13,
            }}>{m.icon}</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 900, color: m.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{m.val}</div>
              <div style={{ fontSize: 9.5, color: "rgba(15,23,42,0.45)", marginTop: 2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */
const TICKER_ITEMS = [
  "🧭 Strategic technology advisory for enterprise leaders",
  "📋 Digital transformation roadmaps in as little as 2 weeks",
  "💡 Expert-led workshops, audits & discovery sprints",
  "🔗 Vendor-neutral recommendations you can trust",
  "📈 340% average client ROI across engagements",
  "🌍 Serving clients across 14+ countries",
  "🏆 Senior consultants with 10–20 years of industry depth",
  "⚡ From strategy to execution — one partner, end-to-end",
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
   ROI CALCULATOR (Consultancy)
══════════════════════════════════════════════════════════ */
function ROICalculator() {
  const [revenue, setRevenue] = useState(5000000);
  const [inefficiencyPct, setInefficiencyPct] = useState(18);
  const [teamSize, setTeamSize] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const wastedRevenue = revenue * (inefficiencyPct / 100);
  const recoverable = wastedRevenue * 0.65;
  const teamProductivity = teamSize * 12000 * 0.25;
  const totalAnnualValue = Math.round(recoverable + teamProductivity);
  const roi = Math.round((totalAnnualValue / 40000) * 100);

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
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.14em", textTransform: "uppercase" }}>Value Calculator</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 900, color: "#0F172A",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
            }}>
              How much is inefficiency{" "}
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
                costing you?
              </motion.span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              Adjust the sliders to estimate the annual value a strategic consultancy engagement could unlock.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { label: "Annual business revenue (£)", value: revenue, min: 500000, max: 50000000, step: 500000, set: setRevenue, suffix: "", prefix: "£", color: "#2563EB" },
                { label: "Estimated operational inefficiency (%)", value: inefficiencyPct, min: 5, max: 40, step: 1, set: setInefficiencyPct, suffix: "%", prefix: "", color: "#7C3AED" },
                { label: "Team size (headcount)", value: teamSize, min: 10, max: 500, step: 5, set: setTeamSize, suffix: "", prefix: "", color: "#059669" },
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
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Estimated annual value unlocked</div>
                <motion.div
                  key={totalAnnualValue}
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
                  £{Math.round(totalAnnualValue / 1000)}k
                </motion.div>
                <div style={{ fontSize: 13, color: "rgba(15,23,42,0.4)", marginTop: 8, fontWeight: 500 }}>per year</div>
              </div>

              <div style={{ height: 1, background: "rgba(37,99,235,0.08)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "Revenue lost to inefficiency", value: `£${Math.round(wastedRevenue / 1000)}k`, color: "#DC2626" },
                  { label: "Recoverable with strategy (65%)", value: `£${Math.round(recoverable / 1000)}k`, color: "#059669" },
                  { label: "Team productivity gains", value: `£${Math.round(teamProductivity / 1000)}k`, color: "#2563EB" },
                  { label: "Estimated engagement ROI", value: `${roi}%`, color: "#7C3AED" },
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
                Book a free strategy session
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>

              <p style={{ fontSize: 11, color: "rgba(15,23,42,0.35)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                Based on median outcomes across 120+ consultancy engagements. Actual results vary.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   PARTNER / FRAMEWORK MARQUEE
══════════════════════════════════════════════════════════ */
const FRAMEWORKS = [
  { name: "McKinsey 7S", color: "#1D4ED8" },
  { name: "OKR Framework", color: "#059669" },
  { name: "TOGAF", color: "#7C3AED" },
  { name: "SAFe Agile", color: "#D97706" },
  { name: "ITIL 4", color: "#0891B2" },
  { name: "Lean Six Sigma", color: "#DC2626" },
  { name: "PRINCE2", color: "#374151" },
  { name: "Balanced Scorecard", color: "#2563EB" },
  { name: "Design Thinking", color: "#7C3AED" },
  { name: "Business Model Canvas", color: "#059669" },
  { name: "Porter's Five Forces", color: "#D97706" },
  { name: "Jobs-to-be-Done", color: "#0891B2" },
];

function FrameworksStrip() {
  const doubled = [...FRAMEWORKS, ...FRAMEWORKS];
  return (
    <div style={{ padding: "56px 0", background: "#fff", overflow: "hidden", borderTop: "1px solid rgba(37,99,235,0.06)", borderBottom: "1px solid rgba(37,99,235,0.06)" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(15,23,42,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Frameworks &amp; Methodologies We Apply
        </span>
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((fw, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 28px", marginRight: 8, borderRadius: 12,
            background: "rgba(248,250,255,0.8)", border: "1.5px solid rgba(37,99,235,0.08)",
            whiteSpace: "nowrap",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: fw.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", letterSpacing: "-0.01em" }}>{fw.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CLIENT RESULTS
══════════════════════════════════════════════════════════ */
const clientResults = [
  {
    metric: "£8.4M", label: "operational value unlocked",
    quote: "KeySol mapped every hidden inefficiency across our supply chain and operations. The strategic roadmap they delivered has generated over £8M in recoverable value in under 18 months.",
    name: "Group COO, Global Manufacturing Co.",
    color: "#2563EB",
  },
  {
    metric: "3.4×", label: "improvement in team throughput",
    quote: "Their OKR framework and operating model redesign transformed how our 200-person org works. We shipped 3× more strategic initiatives without adding a single headcount.",
    name: "CTO, Series C FinTech Platform",
    color: "#7C3AED",
  },
  {
    metric: "14mo", label: "faster digital transformation",
    quote: "We were 2 years into a stalled digital transformation. KeySol came in, diagnosed the blockers in 3 weeks, and gave us a clear path. We hit our target 14 months ahead of plan.",
    name: "Chief Digital Officer, NHS Trust",
    color: "#059669",
  },
  {
    metric: "94%", label: "board alignment on strategy",
    quote: "Getting the board to align on a tech strategy had been impossible for 3 years. KeySol's facilitated strategy sprint achieved full board consensus in two days. Remarkable.",
    name: "CEO, Professional Services Group",
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
            Strategic clarity that drives real outcomes
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
                }}>{["🏭","💳","🏥","🏛️"][i]}</div>
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
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "Digital Transformation Strategy",
    desc: "End-to-end transformation roadmaps — from legacy system modernisation to cloud migration and operating model redesign — that actually deliver ROI.",
    tag: "Most Popular",
  },
  {
    gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)",
    glow: "rgba(124,58,237,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Technology & Vendor Advisory",
    desc: "Unbiased vendor selection, technology stack evaluation, and build-vs-buy analysis to ensure you invest in the right tools for your unique business context.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#0891B2,#0E7490)",
    glow: "rgba(8,145,178,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Operating Model Design",
    desc: "Org structure optimisation, process re-engineering, and capability model redesign that align your team structure with strategic priorities for maximum throughput.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#059669,#047857)",
    glow: "rgba(5,150,105,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Data & Analytics Strategy",
    desc: "Data governance frameworks, BI architecture design, and analytics capability roadmaps that transform raw data into a genuine competitive moat.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#D97706,#B45309)",
    glow: "rgba(217,119,6,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Cybersecurity & Risk Advisory",
    desc: "Security posture assessments, regulatory compliance strategy (GDPR, ISO 27001, SOC 2), and incident response planning to protect your critical assets.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#DC2626,#B91C1C)",
    glow: "rgba(220,38,38,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    title: "Change Management & Enablement",
    desc: "Structured change programmes, leadership alignment workshops, and organisation-wide adoption strategies that ensure strategic initiatives land as intended.",
    tag: "",
  },
];

const stats = [
  { value: 120, suffix: "+", label: "Engagements delivered", sub: "across 14+ countries" },
  { value: 340, suffix: "%", label: "Average client ROI", sub: "within 12 months" },
  { value: 98, suffix: "%", label: "Client satisfaction", sub: "across all engagements" },
  { value: 6, suffix: "wk", label: "Time-to-strategy", sub: "from discovery to roadmap" },
];

const processSteps = [
  {
    num: "01", color: "#2563EB", bg: "rgba(37,99,235,0.12)",
    title: "Discovery Sprint",
    desc: "Rapid diagnostic of your current state — people, processes, technology, and data — to surface blockers, gaps, and the highest-value opportunities.",
  },
  {
    num: "02", color: "#7C3AED", bg: "rgba(124,58,237,0.12)",
    title: "Stakeholder Alignment",
    desc: "Facilitated workshops with your leadership team to align on strategic priorities, define success metrics, and build the internal coalition needed to execute.",
  },
  {
    num: "03", color: "#0891B2", bg: "rgba(8,145,178,0.12)",
    title: "Roadmap Design",
    desc: "We construct a prioritised, phased roadmap with clear workstreams, dependencies, and KPIs — sequenced to deliver quick wins and long-term compounding value.",
  },
  {
    num: "04", color: "#059669", bg: "rgba(5,150,105,0.12)",
    title: "Implementation Support",
    desc: "Embedded advisory and programme governance through execution — ensuring delivery teams stay on plan, risks are managed, and decisions have expert backing.",
  },
  {
    num: "05", color: "#D97706", bg: "rgba(217,119,6,0.12)",
    title: "Review & Optimise",
    desc: "Quarterly strategic reviews, KPI measurement, and course-correction recommendations to compound the return on your transformation investment over time.",
  },
];

const useCases = [
  {
    industry: "Financial Services",
    icon: "🏦",
    color: "#2563EB",
    items: ["Core banking modernisation advisory", "Regulatory compliance strategy (FCA, PSD2)", "FinTech integration & API strategy"],
  },
  {
    industry: "Healthcare & Life Sciences",
    icon: "🏥",
    color: "#059669",
    items: ["NHS digital transformation roadmaps", "Clinical system selection & migration", "Data governance & IG strategy"],
  },
  {
    industry: "Retail & E-commerce",
    icon: "🛍️",
    color: "#7C3AED",
    items: ["Unified commerce platform strategy", "Supply chain & inventory optimisation", "Customer data platform design"],
  },
  {
    industry: "Professional Services",
    icon: "⚖️",
    color: "#D97706",
    items: ["Knowledge management transformation", "Practice management system selection", "AI & automation adoption strategy"],
  },
  {
    industry: "Manufacturing & Industrial",
    icon: "⚙️",
    color: "#0891B2",
    items: ["Industry 4.0 & IoT strategy", "ERP modernisation & vendor selection", "Digital twin & predictive ops advisory"],
  },
  {
    industry: "Public Sector & NGOs",
    icon: "🏛️",
    color: "#DC2626",
    items: ["Digital citizen service strategies", "Legacy system decommissioning plans", "Cloud adoption & data residency strategy"],
  },
];

const reasons = [
  {
    color: "#2563EB",
    stat: "120+", statLabel: "engagements shipped",
    title: "Practitioners with real scars",
    desc: "Our consultants have led transformation programmes from inside the enterprise — not just from the outside. We know what the boardroom needs to hear and what actually works on the ground.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    color: "#7C3AED",
    stat: "100%", statLabel: "vendor-neutral advice",
    title: "No conflicts of interest",
    desc: "We have zero reseller relationships or commission arrangements. Every recommendation is made solely in your best interest — not ours. You can trust that completely.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    color: "#0891B2",
    stat: "6wk", statLabel: "avg. time-to-roadmap",
    title: "Fast, decisive, executable",
    desc: "We move at the pace your business needs. Our discovery-to-strategy methodology consistently delivers a board-ready roadmap within 6 weeks — no endless workshops.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    color: "#059669",
    stat: "24 / 7", statLabel: "engagement support",
    title: "Embedded, not arms-length",
    desc: "We show up as a true partner — attending your senior team meetings, joining your stand-ups, and staying accountable for outcomes long after the strategy deck is delivered.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const faqs = [
  { q: "What makes KeySol's consultancy different from a Big 4 firm?", a: "We're faster, more cost-effective, and our consultants have hands-on delivery experience — not just advisory theory. We've led transformations from inside enterprises, so we understand the operational realities that large firms often overlook." },
  { q: "How quickly can you begin an engagement?", a: "Most engagements kick off within 5–7 business days of signing. We keep capacity reserved for fast-start clients and can mobilise a team with minimal ramp-up time." },
  { q: "Do you only work with large enterprises?", a: "No — we work with scaling SMEs through to FTSE 250 businesses. Our engagement models are flexible and scoped appropriately for your stage of growth and strategic complexity." },
  { q: "Can you support implementation, not just strategy?", a: "Absolutely. Our consultancy and delivery capabilities are fully integrated. We can move from strategy directly into execution — providing programme management, engineering, and change management in one unified engagement." },
  { q: "How do you ensure your strategies are actually implemented?", a: "We stay embedded through execution. Every engagement includes milestone governance, risk management, and quarterly reviews. We're not done when the deck is presented — we're done when outcomes are delivered." },
];

/* ══════════════════════════════════════════════════════════
   PROCESS CARD
══════════════════════════════════════════════════════════ */
const stepIcons = [
  <svg key="a" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="c" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg key="d" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  <svg key="e" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
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
              {[0, 1, 2].map(d => (
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

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function ConsultancyPage() {
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
              position: "absolute", right: 0, height: "1px",
              width: `${30 + i * 9}px`, top: `${i * 20 + 20}px`,
              background: `rgba(37,99,235,${0.04 + i * 0.004})`,
            }} />
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 80, alignItems: "center" }}>

            {/* ── LEFT COPY ───────────────────────────────── */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30 }}>
                  <Link href="/services/" style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", textDecoration: "none", fontWeight: 500 }}>Services</Link>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(15,23,42,0.25)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  <span style={{ fontSize: 12, color: "#60A5FA", fontWeight: 600 }}>Consultancy</span>
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
                    Strategic Technology Consulting
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 style={{
                  fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900,
                  color: "#0F172A", lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 6,
                }}>
                  Strategy &amp;{" "}
                  <motion.span
                    animate={{ color: ["#0F172A", "#2563EB", "#0F172A"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "inline" }}
                  >
                    Consultancy
                  </motion.span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.14}>
                <h1 style={{
                  fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900,
                  lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 32,
                  position: "relative", display: "inline-block",
                }}>
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
                    that transforms.
                  </motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.19}>
                <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.82, marginBottom: 42, maxWidth: 490 }}>
                  We help enterprise leaders navigate digital transformation, technology strategy, and operating model design — with experienced practitioners who have built and led transformations from the inside.
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
                    Book a Strategy Session
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                  <Link href="/contact/" style={{
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
                    View Case Studies
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 0, marginTop: 48,
                  borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 28,
                }}>
                  {[
                    { dot: "#22C55E", text: "Vendor-neutral advice", border: true },
                    { dot: "#2563EB", text: "Strategy in 6 weeks", border: true },
                    { dot: "#7C3AED", text: "340% avg. ROI", border: false },
                  ].map(({ dot, text, border }) => (
                    <div key={text} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      paddingRight: border ? 24 : 0,
                      marginRight: border ? 24 : 0,
                      borderRight: border ? "1px solid rgba(15,23,42,0.1)" : "none",
                    }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: dot, flexShrink: 0, boxShadow: `0 0 8px ${dot}` }} />
                      <span style={{ fontSize: 12.5, color: "rgba(15,23,42,0.5)", fontWeight: 500 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* ── RIGHT VISUAL ──────────────────────────────── */}
            <FadeUp delay={0.22}>
              <div style={{ position: "relative", paddingTop: 48, paddingBottom: 80, paddingLeft: 32 }}>

                {/* ── MAIN GLASS CARD ── */}
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
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.45)", marginLeft: 6 }}>KeySol Strategy Engine — v2.1</span>
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
                      <span style={{ fontSize: 10.5, fontWeight: 800, color: "#4ADE80", letterSpacing: "0.04em" }}>LIVE</span>
                    </div>
                  </div>

                  <div style={{ padding: "24px 24px 20px" }}>
                    <ConsultancyViz />
                  </div>

                  <div style={{ height: 1, background: "rgba(37,99,235,0.07)", margin: "0 22px" }} />

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                    {[
                      { label: "Active Engagements", val: "28", color: "#2563EB", sub: "↑ 4 this quarter" },
                      { label: "Strategies Shipped", val: "120+", color: "#7C3AED", sub: "across 14 countries" },
                      { label: "Avg. Client ROI", val: "340%", color: "#059669", sub: "↑ within 12 months" },
                    ].map((m, mi) => (
                      <div key={m.label} style={{
                        padding: "16px 18px",
                        borderRight: mi < 2 ? "1px solid rgba(37,99,235,0.07)" : "none",
                      }}>
                        <div style={{ fontSize: 22, fontWeight: 900, color: m.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{m.val}</div>
                        <div style={{ fontSize: 10.5, color: "rgba(15,23,42,0.4)", marginTop: 4, fontWeight: 500 }}>{m.label}</div>
                        <div style={{ fontSize: 10, color: m.color, marginTop: 3, fontWeight: 600 }}>{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── FLOATING BADGE: ENGAGEMENTS ── */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: 48, right: -220,
                    width: 208,
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,255,0.95))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(37,99,235,0.12)",
                    borderRadius: 18, padding: "16px 18px",
                    boxShadow: "0 16px 48px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.06)",
                    zIndex: 10,
                  }}
                >
                  <div style={{ fontSize: 9.5, fontWeight: 800, color: "rgba(15,23,42,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Active Workstreams</div>
                  {[
                    { name: "Tech Strategy", pct: 88, color: "#2563EB" },
                    { name: "Org Design", pct: 72, color: "#7C3AED" },
                    { name: "Data Governance", pct: 95, color: "#059669" },
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

                {/* ── FLOATING BADGE: STRATEGY DELIVERED ── */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  style={{
                    position: "absolute", bottom: -32, right: 0,
                    background: "rgba(5,150,105,0.9)", backdropFilter: "blur(12px)",
                    color: "#fff", borderRadius: 14, padding: "11px 18px",
                    fontSize: 12, fontWeight: 700,
                    boxShadow: "0 8px 28px rgba(5,150,105,0.5)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex", alignItems: "center", gap: 8, zIndex: 10,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }}
                  />
                  Strategies Delivered &amp; Active
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

      {/* ══ FRAMEWORKS STRIP ══════════════════════════════════════════ */}
      <FrameworksStrip />

      {/* ══ CAPABILITIES ══════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Do</span>
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 18 }}>
                End-to-end consultancy capabilities
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
                From digital transformation strategy to operating model redesign — we provide the expert advisory and hands-on support your organisation needs to move faster and smarter.
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
                How we build strategy<br />
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
                  that actually lands.
                </motion.span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                A proven 5-phase consultancy methodology refined across 120+ engagements — from early-stage growth businesses to FTSE 250 enterprises.
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
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Industry Expertise</span>
                </div>
                <h2 style={{ fontSize: "clamp(28px,2.8vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 20 }}>
                  Deep expertise across every major sector
                </h2>
                <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  Our consultants have led transformation programmes across financial services, healthcare, retail, and the public sector. Each engagement draws on sector-specific pattern recognition you simply cannot buy.
                </p>
                <Link href="/contact/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff", borderRadius: 12, padding: "13px 24px",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.4)",
                }}>
                  Discuss your sector challenge
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {useCases.map((uc, i) => (
                  <FadeUp key={i} delay={0.08 * i}>
                    <div
                      style={{
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
                We don&apos;t sell slides.
              </h2>
              <motion.h2
                animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  fontSize: "clamp(32px,3.6vw,54px)", fontWeight: 900,
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 28, display: "block",
                }}
              >
                We deliver transformation.
              </motion.h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Real practitioners. Real accountability. Real outcomes — from first discovery to compounding long-term performance.
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
                { val: "Vendor-neutral", label: "Zero commission conflicts" },
                { val: "Weekly updates", label: "Full transparency" },
                { val: "Outcome-based", label: "We stay until it works" },
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
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>Free strategy session — no obligation</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{ fontSize: "clamp(30px,3.6vw,52px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em" }}>
              Ready to build a strategy that<br />
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
                actually gets executed?
              </motion.span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Book a free strategy session with one of our senior consultants. We&apos;ll review your current challenges, identify the highest-impact opportunities, and give you a clear 90-day strategic agenda — no obligation.
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
                Book My Free Session
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/insights/" style={{
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
                Read Our Insights
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 52 }}>
              {[
                { icon: "🔒", text: "No commitment required" },
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "🎯", text: "Tailored to your industry" },
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
