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
   ABOUT VIZ — Premium service dashboard
══════════════════════════════════════════════════════════ */
function AboutViz() {
  const [activeService, setActiveService] = useState(0);
  const [activityIdx, setActivityIdx] = useState(0);
  const [projectCount, setProjectCount] = useState(214);

  const services = [
    {
      label: "AI & Automation", color: "#2563EB", bg: "linear-gradient(135deg,#2563EB,#1D4ED8)",
      tag: "Most Active", metric: "73%", metricLabel: "efficiency gain",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>,
    },
    {
      label: "Digital Growth", color: "#7C3AED", bg: "linear-gradient(135deg,#7C3AED,#6D28D9)",
      tag: "High Demand", metric: "4.2×", metricLabel: "revenue multiplier",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
    {
      label: "Custom Software", color: "#059669", bg: "linear-gradient(135deg,#059669,#047857)",
      tag: "Enterprise", metric: "99.9%", metricLabel: "uptime SLA",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    },
    {
      label: "Consultancy", color: "#0891B2", bg: "linear-gradient(135deg,#0891B2,#0E7490)",
      tag: "Strategic", metric: "340%", metricLabel: "average ROI",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    },
    {
      label: "Marketplace", color: "#D97706", bg: "linear-gradient(135deg,#D97706,#B45309)",
      tag: "1,200+ Solutions", metric: "75%", metricLabel: "faster procurement",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    },
  ];

  const activities = [
    { text: "AI workflow deployed", client: "FinTech Group", color: "#2563EB", icon: "⚡" },
    { text: "New client onboarded", client: "NHS Trust",     color: "#059669", icon: "✅" },
    { text: "ROI milestone hit",    client: "RetailCo",      color: "#D97706", icon: "📈" },
    { text: "Custom build shipped", client: "ManuTech",      color: "#7C3AED", icon: "🚀" },
    { text: "Strategy deck signed", client: "InsuGroup",     color: "#0891B2", icon: "📋" },
  ];

  useEffect(() => {
    const id = setInterval(() => setActiveService(s => (s + 1) % 5), 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActivityIdx(a => (a + 1) % activities.length), 2800);
    return () => clearInterval(id);
  }, [activities.length]);

  useEffect(() => {
    const id = setInterval(() => setProjectCount(n => n + 1), 6000);
    return () => clearInterval(id);
  }, []);

  const active = services[activeService];
  const act = activities[activityIdx];

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>

      {/* ── Top status bar ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(15,23,42,0.04)", border: "1px solid rgba(15,23,42,0.08)",
        borderRadius: 10, padding: "8px 14px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.div animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "#22C55E", letterSpacing: "0.06em", textTransform: "uppercase" }}>All systems operational</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(15,23,42,0.35)", letterSpacing: "0.04em" }}>
            <motion.span key={projectCount} initial={{ y: -5 }} animate={{ y: 0 }} transition={{ duration: 0.25 }}
              style={{ display: "inline-block" }}>{projectCount}</motion.span> projects live
          </span>
        </div>
      </div>

      {/* ── Service line cards (2×3 grid then 2 wide) ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }}>
        {services.map((s, i) => (
          <motion.div key={i}
            animate={i === activeService
              ? { y: -3, boxShadow: `0 12px 32px ${s.color}40` }
              : { y: 0,  boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
            transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
            onClick={() => setActiveService(i)}
            style={{
              borderRadius: 12, padding: "12px 10px", cursor: "pointer",
              background: i === activeService ? s.bg : "rgba(255,255,255,0.9)",
              border: `1.5px solid ${i === activeService ? "transparent" : "rgba(226,232,240,0.9)"}`,
              transition: "background 0.3s, border 0.3s",
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 9,
              background: i === activeService ? "rgba(255,255,255,0.2)" : s.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 8,
            }}>
              <div style={{ color: i === activeService ? "white" : "white" }}>{s.icon}</div>
            </div>
            <div style={{ fontSize: 9.5, fontWeight: 800, color: i === activeService ? "white" : "#0F172A", lineHeight: 1.25, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 8.5, fontWeight: 600, color: i === activeService ? "rgba(255,255,255,0.65)" : "rgba(15,23,42,0.38)", letterSpacing: "0.03em" }}>{s.tag}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Active service detail card ── */}
      <AnimatePresence mode="wait">
        <motion.div key={activeService}
          initial={{ y: 8, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: -8, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
          style={{
            background: `linear-gradient(135deg, ${active.color}0D, ${active.color}06)`,
            border: `1.5px solid ${active.color}30`,
            borderRadius: 14, padding: "16px 18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 11,
                background: active.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 6px 18px ${active.color}50`,
              }}>{active.icon}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: active.color }}>{active.label}</div>
                <div style={{ fontSize: 10.5, color: "rgba(15,23,42,0.45)", fontWeight: 500 }}>{active.tag}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: active.color, lineHeight: 1, letterSpacing: "-0.04em" }}>{active.metric}</div>
              <div style={{ fontSize: 9.5, color: "rgba(15,23,42,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{active.metricLabel}</div>
            </div>
          </div>
          {/* Mini sparkline bars */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 28 }}>
            {[40,55,48,70,62,80,74,90,85,95].map((h, i) => (
              <motion.div key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22,1,0.36,1] }}
                style={{ flex: 1, borderRadius: 3, background: `${active.color}${i > 6 ? "CC" : "40"}` }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Live activity feed ── */}
      <div style={{
        background: "rgba(255,255,255,0.95)", border: "1px solid rgba(226,232,240,0.8)",
        borderRadius: 12, padding: "12px 14px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: `${act.color}15`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, flexShrink: 0,
          }}>{act.icon}</div>
          <AnimatePresence mode="wait">
            <motion.div key={activityIdx}
              initial={{ y: 6 }} animate={{ y: 0 }} exit={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{ minWidth: 0 }}
            >
              <div style={{ fontSize: 11.5, fontWeight: 700, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{act.text}</div>
              <div style={{ fontSize: 10, color: "rgba(15,23,42,0.4)", fontWeight: 500 }}>{act.client}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
          <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.2, repeat: Infinity }}
            style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#22C55E", letterSpacing: "0.06em" }}>LIVE</span>
        </div>
      </div>

      {/* ── Bottom metric row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[
          { val: "200+", lbl: "Projects",  color: "#2563EB",
            bar: <svg width="24" height="16" viewBox="0 0 24 16"><rect x="0" y="8" width="4" height="8" rx="1.5" fill="#2563EB" /><rect x="6" y="4" width="4" height="12" rx="1.5" fill="#2563EB" /><rect x="12" y="0" width="4" height="16" rx="1.5" fill="#2563EB" /><rect x="18" y="3" width="4" height="13" rx="1.5" fill="#2563EB" /></svg> },
          { val: "50+",  lbl: "Countries", color: "#7C3AED",
            bar: <svg width="24" height="16" viewBox="0 0 24 16"><circle cx="5" cy="12" r="3" fill="#7C3AED40"/><circle cx="12" cy="7" r="4" fill="#7C3AED80"/><circle cx="19" cy="4" r="5" fill="#7C3AED"/></svg> },
          { val: "98%",  lbl: "Retention", color: "#059669",
            bar: <svg width="24" height="16" viewBox="0 0 24 16"><circle cx="12" cy="8" r="7" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="40 4" strokeLinecap="round"/></svg> },
        ].map((m, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.95)", border: `1px solid ${m.color}18`,
            borderRadius: 11, padding: "12px 10px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{ flexShrink: 0 }}>{m.bar}</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 900, color: m.color, lineHeight: 1, letterSpacing: "-0.03em" }}>{m.val}</div>
              <div style={{ fontSize: 9, color: "rgba(15,23,42,0.4)", fontWeight: 600, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.lbl}</div>
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
  "🌍 Trusted by 200+ businesses across 50+ countries",
  "🤖 End-to-end AI, Software & Digital Growth partner",
  "🏆 98% client retention — our work speaks for itself",
  "⚡ From strategy to delivery — one partner, zero friction",
  "📈 340% average ROI across client engagements",
  "🧭 Senior practitioners, not career consultants",
  "💡 5 integrated service lines under one roof",
  "🚀 5+ years of relentless execution",
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
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingRight: 56, whiteSpace: "nowrap" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em" }}>{item}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(96,165,250,0.5)", flexShrink: 0, display: "inline-block" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   ROI CALCULATOR
══════════════════════════════════════════════════════════ */
function ROICalculator() {
  const [revenue, setRevenue] = useState(5000000);
  const [inefficiency, setInefficiency] = useState(20);
  const [teamSize, setTeamSize] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const reclaimable = revenue * (inefficiency / 100) * 0.4;
  const teamProductivity = teamSize * 8 * 52 * 0.15 * 65;
  const totalAnnual = Math.round(reclaimable + teamProductivity);
  const roi = Math.round((totalAnnual / 50000) * 100);

  const fmt = (n: number) => n >= 1000000
    ? `£${(n / 1000000).toFixed(1)}M`
    : `£${Math.round(n / 1000)}k`;

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

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
        <motion.div initial={{ y: 40 }} animate={inView ? { y: 0 } : { y: 40 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
              borderRadius: 100, padding: "7px 20px", marginBottom: 24,
            }}>
              <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.14em", textTransform: "uppercase" }}>Business Impact Calculator</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              How much is operational{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline",
                }}
              >inefficiency costing you?</motion.span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              Adjust the sliders to estimate your annual value unlock from working with KeySol as your end-to-end technology partner.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { label: "Annual company revenue", value: revenue, min: 500000, max: 50000000, step: 500000, set: setRevenue, display: fmt(revenue), color: "#2563EB" },
                { label: "Estimated operational inefficiency (%)", value: inefficiency, min: 5, max: 40, step: 1, set: setInefficiency, display: `${inefficiency}%`, color: "#7C3AED" },
                { label: "Number of employees", value: teamSize, min: 10, max: 500, step: 10, set: setTeamSize, display: `${teamSize}`, color: "#059669" },
              ].map(({ label, value, min, max, step, set, display, color }) => (
                <div key={label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(15,23,42,0.65)" }}>{label}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color, letterSpacing: "-0.02em" }}>{display}</span>
                  </div>
                  <div style={{ position: "relative", height: 6, borderRadius: 6, background: "rgba(37,99,235,0.1)" }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, height: "100%",
                      width: `${((value - min) / (max - min)) * 100}%`,
                      background: `linear-gradient(90deg, ${color}66, ${color})`,
                      borderRadius: 6, transition: "width 0.1s",
                    }} />
                    <input type="range" min={min} max={max} step={step} value={value}
                      onChange={e => set(Number(e.target.value))}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", cursor: "pointer", margin: 0 }}
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
              background: "rgba(255,255,255,0.95)", border: "1px solid rgba(37,99,235,0.12)",
              borderRadius: 28, padding: "40px 36px", backdropFilter: "blur(20px)",
              boxShadow: "0 24px 64px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.04)",
            }}>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Estimated annual value unlock</div>
                <motion.div key={totalAnnual} initial={{ scale: 0.92 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    fontSize: "clamp(42px,4.5vw,64px)", fontWeight: 900,
                    background: "linear-gradient(135deg, #059669, #047857)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.04em", lineHeight: 1,
                  }}
                >{fmt(totalAnnual)}</motion.div>
                <div style={{ fontSize: 13, color: "rgba(15,23,42,0.4)", marginTop: 8, fontWeight: 500 }}>per year</div>
              </div>

              <div style={{ height: 1, background: "rgba(37,99,235,0.08)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "Revenue reclaimable from inefficiency (40%)", value: fmt(reclaimable), color: "#059669" },
                  { label: "Team productivity recaptured", value: fmt(teamProductivity), color: "#2563EB" },
                  { label: "Total annual value unlock", value: fmt(totalAnnual), color: "#7C3AED" },
                  { label: "Estimated ROI on KeySol partnership", value: `${roi}%`, color: "#D97706" },
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
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
              >
                Unlock this value with KeySol
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <p style={{ fontSize: 11, color: "rgba(15,23,42,0.35)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                Based on median outcomes across 200+ KeySol client engagements. Results vary by organisation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   VALUES STRIP (marquee)
══════════════════════════════════════════════════════════ */
const PILLARS = [
  { name: "Excellence",      color: "#2563EB" },
  { name: "Speed",           color: "#7C3AED" },
  { name: "Partnership",     color: "#059669" },
  { name: "Integrity",       color: "#0891B2" },
  { name: "Global Thinking", color: "#D97706" },
  { name: "Impact",          color: "#DC2626" },
  { name: "Transparency",    color: "#2563EB" },
  { name: "Ownership",       color: "#7C3AED" },
  { name: "Curiosity",       color: "#059669" },
  { name: "Craft",           color: "#D97706" },
];

function PillarStrip() {
  const doubled = [...PILLARS, ...PILLARS];
  return (
    <div style={{ padding: "48px 0", background: "#fff", overflow: "hidden", borderTop: "1px solid rgba(37,99,235,0.06)", borderBottom: "1px solid rgba(37,99,235,0.06)" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(15,23,42,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Our Core Values
        </span>
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((p, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 28px", marginRight: 8, borderRadius: 12,
            background: "rgba(248,250,255,0.8)", border: "1.5px solid rgba(37,99,235,0.08)",
            whiteSpace: "nowrap",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{p.name}</span>
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
    metric: "340%", label: "average client ROI",
    quote: "KeySol transformed our operations completely. Within 90 days of engagement we had measurable ROI across every service line — AI, growth and consultancy working as one integrated engine.",
    name: "CEO, Financial Services Group",
    color: "#2563EB",
  },
  {
    metric: "£2.4M", label: "cost savings Year 1",
    quote: "Their consultancy team identified operational inefficiencies worth £2.4M in our first engagement. The AI automation work they subsequently delivered automated 70% of the manual processes causing the waste.",
    name: "COO, Retail & E-commerce Group",
    color: "#7C3AED",
  },
  {
    metric: "6 wks", label: "time to first outcome",
    quote: "From our first call to a deployed AI workflow in production — 6 weeks. No other partner we'd worked with had ever moved this fast without compromising on quality. The team is exceptional.",
    name: "CTO, Healthcare Scale-up",
    color: "#059669",
  },
  {
    metric: "4.9★", label: "client satisfaction",
    quote: "98% client retention isn't marketing — it's real. We've worked with KeySol across three separate engagements over two years and every single one has exceeded expectations on outcomes and delivery quality.",
    name: "VP Technology, Manufacturing Group",
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
          initial={{ y: 32 }} animate={inView ? { y: 0 } : { y: 32 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "#F0FDF4", borderRadius: 100, padding: "5px 16px", marginBottom: 18,
            border: "1px solid rgba(5,150,105,0.2)",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#059669", letterSpacing: "0.1em", textTransform: "uppercase" }}>Client Stories</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
            Results that speak louder than promises
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {clientResults.map((r, i) => (
            <motion.div key={i}
              initial={{ y: 24 }} animate={inView ? { y: 0 } : { y: 24 }}
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
              <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, flex: 1, fontStyle: "italic" }}>&ldquo;{r.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${r.color}40, ${r.color}20)`,
                  border: `1.5px solid ${r.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                }}>{["💼","🛍️","🏥","⚙️"][i]}</div>
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
    gradient: "linear-gradient(135deg,#2563EB,#1D4ED8)", glow: "rgba(37,99,235,0.3)", tag: "Most Popular",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>,
    title: "AI & Automation",
    desc: "Intelligent process automation, AI agents, and workflow orchestration that eliminate manual effort and unlock scale across your entire organisation.",
  },
  {
    gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)", glow: "rgba(124,58,237,0.3)", tag: "",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
    title: "Digital Growth",
    desc: "Performance marketing, SEO, conversion optimisation, and data-driven growth strategies that deliver compounding, measurable revenue growth.",
  },
  {
    gradient: "linear-gradient(135deg,#059669,#047857)", glow: "rgba(5,150,105,0.3)", tag: "",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: "Custom Software",
    desc: "Bespoke web and mobile applications, APIs, and enterprise integrations engineered for performance, scalability, and long-term maintainability.",
  },
  {
    gradient: "linear-gradient(135deg,#0891B2,#0E7490)", glow: "rgba(8,145,178,0.3)", tag: "",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "Strategic Consultancy",
    desc: "Technology advisory, transformation roadmaps, and embedded delivery support from senior practitioners with real-world operational experience.",
  },
  {
    gradient: "linear-gradient(135deg,#D97706,#B45309)", glow: "rgba(217,119,6,0.3)", tag: "",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    title: "Technology Marketplace",
    desc: "A curated ecosystem of 500+ verified technology partners and pre-built solutions — procurement made frictionless and fully managed.",
  },
  {
    gradient: "linear-gradient(135deg,#DC2626,#B91C1C)", glow: "rgba(220,38,38,0.3)", tag: "R&D",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
    title: "AI Labs",
    desc: "Dedicated research and development division designing, testing, and deploying frontier AI systems — from prototype to production at enterprise scale.",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects delivered",  sub: "across all service lines" },
  { value: 50,  suffix: "+", label: "Countries reached",   sub: "global partner network" },
  { value: 98,  suffix: "%", label: "Client retention",    sub: "industry-leading" },
  { value: 340, suffix: "%", label: "Average client ROI",  sub: "measured outcomes" },
];

const processSteps = [
  {
    num: "01", color: "#2563EB", bg: "rgba(37,99,235,0.12)",
    title: "Discovery & Diagnosis",
    desc: "We start by deeply understanding your business — rapid stakeholder interviews, tech audits, and process mapping to build an accurate picture of where you are and where you need to be.",
  },
  {
    num: "02", color: "#7C3AED", bg: "rgba(124,58,237,0.12)",
    title: "Strategy Design",
    desc: "We co-design a clear, prioritised technology roadmap aligned to your commercial objectives — with KPIs, a business case, and a phased delivery plan your board can back.",
  },
  {
    num: "03", color: "#0891B2", bg: "rgba(8,145,178,0.12)",
    title: "Solution Matching",
    desc: "We identify the right combination of our service lines — AI, software, growth, marketplace, and consultancy — to address each initiative on your roadmap efficiently.",
  },
  {
    num: "04", color: "#059669", bg: "rgba(5,150,105,0.12)",
    title: "Embedded Execution",
    desc: "Our team embeds alongside yours. We don't hand over specs and disappear — we build, iterate, and deliver with you, maintaining full accountability for outcomes.",
  },
  {
    num: "05", color: "#D97706", bg: "rgba(217,119,6,0.12)",
    title: "Optimise & Scale",
    desc: "We measure, report, and continuously improve — quarterly reviews, KPI tuning, and scaling what works to build compounding competitive advantage over time.",
  },
];

const useCases = [
  {
    industry: "Financial Services", icon: "🏦", color: "#2563EB",
    items: ["AI-driven compliance and RegTech automation", "Core banking platform modernisation", "Fraud detection and risk analytics systems"],
  },
  {
    industry: "Healthcare", icon: "🏥", color: "#059669",
    items: ["Digital health platform development", "Clinical workflow automation", "Patient data interoperability systems"],
  },
  {
    industry: "Retail & E-commerce", icon: "🛍️", color: "#7C3AED",
    items: ["Personalisation and recommendation engines", "Inventory forecasting AI", "Multi-channel growth marketing"],
  },
  {
    industry: "Manufacturing", icon: "⚙️", color: "#D97706",
    items: ["Predictive maintenance systems", "Supply chain optimisation AI", "ERP integration and modernisation"],
  },
  {
    industry: "Professional Services", icon: "💼", color: "#0891B2",
    items: ["Practice management automation", "Knowledge management systems", "Client portal and CRM builds"],
  },
  {
    industry: "Public Sector", icon: "🏛️", color: "#DC2626",
    items: ["Accessible digital citizen services", "G-Cloud compliant platform delivery", "Data governance and security systems"],
  },
];

const reasons = [
  {
    color: "#2563EB", stat: "1 Partner", statLabel: "end-to-end",
    title: "One partner for everything",
    desc: "AI, software, growth, consultancy, and marketplace — all under one roof. No vendor fragmentation, no communication overhead, no accountability gaps.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    color: "#7C3AED", stat: "Senior", statLabel: "practitioners only",
    title: "No junior teams on your account",
    desc: "Every engagement is led by senior practitioners with real-world operational experience — not analysts or project managers who've never shipped a product.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    color: "#059669", stat: "90 days", statLabel: "to measurable ROI",
    title: "Outcomes within 90 days",
    desc: "We are structurally built for speed. Most clients see their first measurable business outcome within 90 days of kicking off — often within 6 weeks.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    color: "#D97706", stat: "98%", statLabel: "client retention",
    title: "We earn trust through results",
    desc: "Our 98% client retention rate is the most honest indicator of quality. Clients don't leave because the work delivers — they scale up and bring us into more of their business.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
];

const faqs = [
  { q: "What does 'end-to-end technology partner' mean in practice?", a: "It means we handle everything — from initial strategy and roadmapping through design, development, integration, deployment, and ongoing optimisation. One partner, one accountable team, across your entire technology journey." },
  { q: "How is KeySol different from a traditional digital agency?", a: "Traditional agencies deliver a brief. We build a partnership. We embed in your team, align to your commercial objectives, and measure our success by your business outcomes — not hours billed or deliverables shipped." },
  { q: "What size businesses do you typically work with?", a: "We work with ambitious businesses of all sizes — from funded startups and scale-ups to mid-market companies and listed enterprises. Our solutions flex with your stage, budget, and pace of growth." },
  { q: "How quickly can you mobilise on a new engagement?", a: "In most cases we can onboard within 5 business days. For urgent engagements, we offer a rapid-start programme that can mobilise a senior team within 48 hours of contract signature." },
  { q: "Can we start with one service and expand later?", a: "Absolutely — and most clients do. Many start with a single service line (AI automation is most common) and progressively add consultancy, digital growth, or marketplace as results build trust and appetite to scale." },
];

/* ══════════════════════════════════════════════════════════
   PROCESS CARD
══════════════════════════════════════════════════════════ */
const stepIcons = [
  <svg key="a" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg key="c" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v3l2 2"/></svg>,
  <svg key="d" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="e" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
];

function ProcessCard({ step, index, isLast }: { step: typeof processSteps[0]; index: number; isLast?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 24,
          background: hovered ? `linear-gradient(160deg, #fff 0%, ${step.color}08 100%)` : "#fff",
          border: `1.5px solid ${hovered ? step.color + "55" : "rgba(226,232,240,0.9)"}`,
          padding: "32px 26px 30px",
          boxShadow: hovered ? `0 24px 72px ${step.color}22, 0 6px 24px rgba(0,0,0,0.06)` : "0 1px 4px rgba(15,23,42,0.06)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "translateY(-12px) scale(1.01)" : "none",
          position: "relative", overflow: "hidden",
          cursor: "default", height: "100%",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 30% 0%, ${step.color}10 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -10, right: 14, fontSize: 88, fontWeight: 900, lineHeight: 1, color: hovered ? `${step.color}12` : "rgba(15,23,42,0.04)", letterSpacing: "-0.06em", userSelect: "none", transition: "color 0.4s", pointerEvents: "none" }}>{step.num}</div>

        <div style={{
          width: 68, height: 68, borderRadius: 20,
          background: `linear-gradient(145deg, ${step.color}, ${step.color}bb)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 12px 40px ${step.color}55, 0 0 0 4px ${step.color}18` : `0 6px 20px ${step.color}35`,
          transition: "box-shadow 0.35s, transform 0.35s",
          transform: hovered ? "translateY(-3px) scale(1.06)" : "none",
          marginBottom: 22, flexShrink: 0, position: "relative", zIndex: 1,
        }}>{stepIcons[index]}</div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: `${step.color}12`, border: `1px solid ${step.color}30`,
          borderRadius: 100, padding: "4px 12px", marginBottom: 14, alignSelf: "flex-start",
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: step.color, flexShrink: 0 }} />
          <span style={{ fontSize: 10.5, fontWeight: 700, color: step.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>Step {step.num}</span>
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
              style={{ width: 28, height: 28, borderRadius: "50%", background: hovered ? step.color : `${step.color}15`, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.25s", flexShrink: 0 }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={hovered ? "white" : step.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </motion.div>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: hovered ? step.color : "rgba(15,23,42,0.38)", transition: "color 0.25s" }}>Learn more</span>
          </div>
          {!isLast && (
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              {[0,1,2].map(d => <div key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: step.color, opacity: 0.2 + d * 0.2 }} />)}
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
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        padding: "32px 26px 36px", borderRadius: 24,
        background: hovered ? `linear-gradient(160deg, #fff 0%, ${reason.color}08 100%)` : "#fff",
        border: `1.5px solid ${hovered ? reason.color + "55" : "rgba(226,232,240,0.9)"}`,
        boxShadow: hovered ? `0 24px 72px ${reason.color}20, 0 6px 24px rgba(0,0,0,0.06)` : "0 1px 4px rgba(15,23,42,0.06)",
        transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-8px)" : "none",
        position: "relative", overflow: "hidden", height: "100%", cursor: "default",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: `linear-gradient(135deg, ${reason.color}, ${reason.color}bb)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 8px 24px ${reason.color}50` : `0 4px 12px ${reason.color}28`,
          transition: "box-shadow 0.3s, transform 0.3s",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}>{reason.icon}</div>
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
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
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
      {cap.tag && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          color: "#fff", borderRadius: 100, padding: "3px 10px",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.05em",
        }}>{cap.tag}</div>
      )}
      <div style={{ width: 52, height: 52, borderRadius: 14, background: cap.gradient, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: `0 6px 20px ${cap.glow}` }}>{cap.icon}</div>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginBottom: 10, lineHeight: 1.3 }}>{cap.title}</h3>
      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75 }}>{cap.desc}</p>
      <div style={{
        display: "flex", alignItems: "center", gap: 6, marginTop: 20,
        color: "#2563EB", fontSize: 13, fontWeight: 700,
        transform: hovered ? "translateX(0)" : "translateX(-4px)", transition: "transform 0.2s",
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
        <button onClick={() => setOpen(!open)} style={{
          width: "100%", padding: "22px 26px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: open ? "#EFF6FF" : "#fff",
          border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.2s",
        }}>
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
              initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
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
export default function AboutPage() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif", background: "#fff", overflowX: "hidden" }}>

      {/* ══ TICKER ══════════════════════════════════════════════════ */}
      <TickerBanner />

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(150deg, #F8FAFF 0%, #EEF2FF 35%, #F0F7FF 65%, #F8FAFF 100%)",
        paddingTop: 130, paddingBottom: 120,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -150, left: "30%", width: 600, height: 400,
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
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

            {/* LEFT */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30 }}>
                  <Link href="/" style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(15,23,42,0.25)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  <span style={{ fontSize: 12, color: "#60A5FA", fontWeight: 600 }}>About Us</span>
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
                  }} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    End-to-End Technology Partner
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 style={{ fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 6 }}>
                  We build{" "}
                  <motion.span
                    animate={{ color: ["#0F172A", "#2563EB", "#0F172A"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "inline" }}
                  >technology</motion.span>
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
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline",
                    }}
                  >that transforms businesses.</motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.19}>
                <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.82, marginBottom: 42, maxWidth: 490 }}>
                  KeySol Global is an end-to-end technology partner for ambitious organisations worldwide — combining AI, custom software, digital growth, strategic consultancy, and a curated marketplace under one roof, aligned to one goal: your success.
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
                    Work With Us
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                  <Link href="/consultancy/" style={{
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
                    Our Approach
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 0, marginTop: 48,
                  borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 28,
                }}>
                  {[
                    { dot: "#22C55E", text: "200+ projects delivered", border: true },
                    { dot: "#2563EB", text: "50+ countries served", border: true },
                    { dot: "#7C3AED", text: "98% client retention", border: false },
                  ].map(({ dot, text, border }) => (
                    <div key={text} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      paddingRight: border ? 24 : 0, marginRight: border ? 24 : 0,
                      borderRight: border ? "1px solid rgba(15,23,42,0.1)" : "none",
                    }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: dot, flexShrink: 0 }} />
                      <span style={{ fontSize: 12.5, color: "rgba(15,23,42,0.5)", fontWeight: 500 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — About VIZ */}
            <FadeUp delay={0.22}>
              <div style={{ position: "relative", paddingTop: 48, paddingBottom: 80, paddingLeft: 32 }}>
                <div style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(37,99,235,0.12)",
                  borderRadius: 28, overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}>
                  <div style={{ padding: "18px 22px 16px", borderBottom: "1px solid rgba(37,99,235,0.08)", background: "rgba(248,250,255,0.8)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ display: "flex", gap: 5 }}>
                        {["#FF5F57","#FFBD2E","#28C840"].map(c => (
                          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                        ))}
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.45)", marginLeft: 6 }}>KeySol Global — Overview</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.28)", borderRadius: 100, padding: "4px 12px" }}>
                      <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
                      <span style={{ fontSize: 10.5, fontWeight: 800, color: "#4ADE80", letterSpacing: "0.04em" }}>LIVE</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 16px" }}>
                    <AboutViz />
                  </div>
                </div>

                {/* Floating badge 1 */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: 48, right: -220, width: 208,
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,255,0.95))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(37,99,235,0.12)",
                    borderRadius: 18, padding: "16px 18px",
                    boxShadow: "0 16px 48px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.06)",
                    zIndex: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                    <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.3, repeat: Infinity }}
                      style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
                    <div style={{ fontSize: 9.5, fontWeight: 800, color: "#22C55E", letterSpacing: "0.12em", textTransform: "uppercase" }}>5 Lines Active</div>
                  </div>
                  {[
                    { name: "AI & Automation", val: "Most Popular", color: "#2563EB" },
                    { name: "Digital Growth",  val: "High Demand",  color: "#7C3AED" },
                    { name: "Custom Software", val: "Enterprise",   color: "#059669" },
                    { name: "Consultancy",     val: "Strategic",    color: "#0891B2" },
                    { name: "Marketplace",     val: "1,200+",       color: "#D97706" },
                  ].map(item => (
                    <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 10.5, fontWeight: 600, color: "rgba(15,23,42,0.7)" }}>{item.name}</span>
                      <span style={{ fontSize: 9.5, fontWeight: 700, color: item.color, background: `${item.color}12`, borderRadius: 100, padding: "2px 7px" }}>{item.val}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Floating badge 2 */}
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
                  <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
                  98% Client Retention Rate
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ STATS BAND ══════════════════════════════════════════════ */}
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

      {/* ══ PILLAR STRIP ════════════════════════════════════════════ */}
      <PillarStrip />

      {/* ══ CAPABILITIES ════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Service Lines</span>
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 18 }}>
                Six integrated capabilities. One unified partner.
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
                Each service line operates independently or together as a fully integrated technology ecosystem — designed to compound value over time.
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

      {/* ══ PROCESS ═════════════════════════════════════════════════ */}
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
          background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 88 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 100, padding: "7px 20px", marginBottom: 24 }}>
                <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.14em", textTransform: "uppercase" }}>How We Work</span>
              </div>
              <h2 style={{ fontSize: "clamp(34px,3.8vw,58px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.035em", lineHeight: 1.08, marginBottom: 20 }}>
                From first conversation<br />
                <motion.span
                  animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)", backgroundSize: "300% 100%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline" }}
                >to measurable results.</motion.span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                A clear, structured engagement model — from discovery through to continuous optimisation — designed to deliver value at every stage.
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

      {/* ══ USE CASES ═══════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <SlideIn from="left">
              <div style={{ position: "sticky", top: 120 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 20 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>By Industry</span>
                </div>
                <h2 style={{ fontSize: "clamp(28px,2.8vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 20 }}>
                  Deep expertise across every sector
                </h2>
                <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  Our team brings first-hand domain knowledge from each industry we serve — so solutions fit your market nuances and compliance context from day one.
                </p>
                <Link href="/contact/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff", borderRadius: 12, padding: "13px 24px",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.4)",
                }}>
                  Tell us your sector
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {useCases.map((uc, i) => (
                  <FadeUp key={i} delay={0.08 * i}>
                    <div
                      style={{ padding: "24px", borderRadius: 18, border: "1.5px solid #E5E7EB", background: "#fff", transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s" }}
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

      {/* ══ RESULTS ═════════════════════════════════════════════════ */}
      <ResultsStrip />

      {/* ══ ROI CALCULATOR ══════════════════════════════════════════ */}
      <ROICalculator />

      {/* ══ WHY KEYSOL ══════════════════════════════════════════════ */}
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 100, padding: "7px 20px", marginBottom: 24 }}>
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2.2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED", flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.14em", textTransform: "uppercase" }}>Why KeySol Global</span>
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.6vw,54px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                Not just another agency.
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
              >A true end-to-end partner.</motion.h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                One team, full accountability, outcomes measured in business results — not deliverables, hours, or project milestones.
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
                { val: "Senior-led",   label: "No junior teams" },
                { val: "Embedded",     label: "Not arms-length" },
                { val: "Outcome-based", label: "Not hourly billing" },
                { val: "NDA protected", label: "Full confidentiality" },
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

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
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

      {/* ══ CTA ═════════════════════════════════════════════════════ */}
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
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 100, padding: "8px 18px", marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>Free initial consultation — no commitment required</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{ fontSize: "clamp(30px,3.6vw,52px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em" }}>
              Ready to build something<br />
              <motion.span
                animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline",
                }}
              >remarkable together?</motion.span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Whether you&apos;re starting from scratch or scaling at pace — one conversation with our team is all it takes to find out exactly how we can help.
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
                Start a Conversation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/marketplace/" style={{
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
                Explore the Marketplace
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 52 }}>
              {[
                { icon: "🔒", text: "No commitment required" },
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "✅", text: "Senior team guaranteed" },
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
