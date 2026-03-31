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
   ANIMATED NEURAL NETWORK
══════════════════════════════════════════════════════════ */
function NeuralNetworkViz() {
  const [tick, setTick] = useState(0);
  const [packetPos, setPacketPos] = useState<{ si: number; ti: number; progress: number }[]>([]);
  const [h1h2Pos, setH1h2Pos] = useState<{ si: number; ti: number; progress: number }[]>([]);
  const [h2outPos, setH2outPos] = useState<{ si: number; ti: number; progress: number }[]>([]);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1200);
    return () => clearInterval(id);
  }, []);

  // Animate data packets — input→h1
  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress = (progress + 0.022) % 1;
      setPacketPos([
        { si: 0, ti: 0, progress },
        { si: 2, ti: 1, progress: (progress + 0.33) % 1 },
        { si: 4, ti: 2, progress: (progress + 0.66) % 1 },
      ]);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Animate data packets — h1→h2 (middle connector)
  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress = (progress + 0.020) % 1;
      setH1h2Pos([
        { si: 0, ti: 1, progress },
        { si: 1, ti: 2, progress: (progress + 0.38) % 1 },
        { si: 2, ti: 0, progress: (progress + 0.72) % 1 },
      ]);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Animate data packets — h2→output (last two)
  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress = (progress + 0.024) % 1;
      setH2outPos([
        { si: 0, ti: 0, progress },
        { si: 2, ti: 2, progress: (progress + 0.42) % 1 },
        { si: 1, ti: 1, progress: (progress + 0.78) % 1 },
      ]);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const inputY  = [50, 95, 140, 185, 230];
  const hidden1Y = [75, 130, 185];
  const hidden2Y = [80, 140, 200];
  const outputY  = [95, 155, 215];
  const pulseIdx = tick % 5;
  const h1PulseIdx = tick % 3;
  const h2PulseIdx = tick % 3;

  return (
    <svg viewBox="0 0 380 290" width="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#0a1628" stopOpacity="0"/>
        </radialGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="lineGlowPurple">
          <feGaussianBlur stdDeviation="1.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="lineGlowGreen">
          <feGaussianBlur stdDeviation="1.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="packetGlow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <ellipse cx="190" cy="148" rx="170" ry="130" fill="url(#centerGlow)"/>

      {/* Connection lines — input→h1 */}
      {inputY.map((sy, si) => hidden1Y.map((ty, ti) => (
        <line key={`i${si}h${ti}`} x1="62" y1={sy} x2="155" y2={ty}
          stroke={si === pulseIdx ? "rgba(96,165,250,0.6)" : "rgba(96,165,250,0.12)"}
          strokeWidth={si === pulseIdx ? 1.5 : 0.8}
          filter={si === pulseIdx ? "url(#lineGlow)" : undefined}
        />
      )))}
      {/* h1→h2 (middle connector — pulse animated) */}
      {hidden1Y.map((sy, si) => hidden2Y.map((ty, ti) => (
        <line key={`h1${si}h2${ti}`} x1="168" y1={sy} x2="245" y2={ty}
          stroke={si === h1PulseIdx ? "rgba(139,92,246,0.55)" : "rgba(139,92,246,0.18)"}
          strokeWidth={si === h1PulseIdx ? 1.4 : 0.8}
          filter={si === h1PulseIdx ? "url(#lineGlowPurple)" : undefined}
        />
      )))}
      {/* h2→output (last connector — pulse animated) */}
      {hidden2Y.map((sy, si) => outputY.map((ty, ti) => (
        <line key={`h2${si}o${ti}`} x1="258" y1={sy} x2="320" y2={ty}
          stroke={si === h2PulseIdx ? "rgba(34,197,94,0.55)" : "rgba(34,197,94,0.2)"}
          strokeWidth={si === h2PulseIdx ? 1.4 : 0.8}
          filter={si === h2PulseIdx ? "url(#lineGlowGreen)" : undefined}
        />
      )))}

      {/* Animated data packets — input→h1 */}
      {packetPos.map((p, idx) => {
        const colors = ["#60A5FA", "#A78BFA", "#4ADE80"];
        const sy = inputY[p.si];
        const ty = hidden1Y[p.ti];
        const cx = 62 + (155 - 62) * p.progress;
        const cy = sy + (ty - sy) * p.progress;
        return (
          <g key={`p1-${idx}`} filter="url(#packetGlow)">
            <circle cx={cx} cy={cy} r={4} fill={colors[idx]} opacity={0.9} />
            <circle cx={cx} cy={cy} r={8} fill={colors[idx]} opacity={0.2} />
          </g>
        );
      })}

      {/* Animated data packets — h1→h2 (middle) */}
      {h1h2Pos.map((p, idx) => {
        const colors = ["#A78BFA", "#C4B5FD", "#8B5CF6"];
        const sy = hidden1Y[p.si];
        const ty = hidden2Y[p.ti];
        const cx = 168 + (245 - 168) * p.progress;
        const cy = sy + (ty - sy) * p.progress;
        return (
          <g key={`p2-${idx}`} filter="url(#packetGlow)">
            <circle cx={cx} cy={cy} r={3.5} fill={colors[idx]} opacity={0.92} />
            <circle cx={cx} cy={cy} r={7} fill={colors[idx]} opacity={0.22} />
          </g>
        );
      })}

      {/* Animated data packets — h2→output (last) */}
      {h2outPos.map((p, idx) => {
        const colors = ["#4ADE80", "#6EE7B7", "#34D399"];
        const sy = hidden2Y[p.si];
        const ty = outputY[p.ti];
        const cx = 258 + (320 - 258) * p.progress;
        const cy = sy + (ty - sy) * p.progress;
        return (
          <g key={`p3-${idx}`} filter="url(#packetGlow)">
            <circle cx={cx} cy={cy} r={3.5} fill={colors[idx]} opacity={0.92} />
            <circle cx={cx} cy={cy} r={7} fill={colors[idx]} opacity={0.22} />
          </g>
        );
      })}

      {/* Input nodes */}
      {inputY.map((y, i) => (
        <g key={`in${i}`} filter="url(#nodeGlow)">
          <circle cx="62" cy={y} r="12" fill={i === pulseIdx ? "#3B82F6" : "#1D4ED8"}/>
          <circle cx="62" cy={y} r="6" fill={i === pulseIdx ? "#93C5FD" : "#60A5FA"}/>
        </g>
      ))}
      {/* Hidden layer 1 */}
      {hidden1Y.map((y, i) => (
        <g key={`h1${i}`} filter="url(#nodeGlow)">
          <circle cx="162" cy={y} r="14" fill="#6D28D9"/>
          <circle cx="162" cy={y} r="7" fill="#A78BFA"/>
        </g>
      ))}
      {/* Hidden layer 2 */}
      {hidden2Y.map((y, i) => (
        <g key={`h2${i}`} filter="url(#nodeGlow)">
          <circle cx="252" cy={y} r="14" fill="#0891B2"/>
          <circle cx="252" cy={y} r="7" fill="#67E8F9"/>
        </g>
      ))}
      {/* Output nodes */}
      {outputY.map((y, i) => (
        <g key={`out${i}`} filter="url(#nodeGlow)">
          <circle cx="325" cy={y} r="12" fill="#059669"/>
          <circle cx="325" cy={y} r="6" fill="#6EE7B7"/>
        </g>
      ))}

      {/* Labels */}
      {[
        { x: 62, label: "Input" }, { x: 162, label: "Layer 1" },
        { x: 252, label: "Layer 2" }, { x: 325, label: "Output" },
      ].map(({ x, label }) => (
        <text key={label} x={x} y="270" textAnchor="middle"
          fill="rgba(255,255,255,0.35)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="600">
          {label}
        </text>
      ))}
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */
const TICKER_ITEMS = [
  "🤖 Agentic AI · autonomous multi-step reasoning",
  "⚡ 75% average reduction in manual tasks",
  "🔗 Seamless CRM & ERP integration",
  "📊 Real-time predictive analytics",
  "🛡️ Enterprise-grade security & compliance",
  "🚀 Production AI delivered in as little as 2 weeks",
  "💡 LLM-powered intelligent document processing",
  "🌍 Deployed across 12+ industries globally",
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
            paddingRight: 56,
            whiteSpace: "nowrap",
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
   ROI CALCULATOR
══════════════════════════════════════════════════════════ */
function ROICalculator() {
  const [employees, setEmployees] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [avgSalary, setAvgSalary] = useState(50000);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const annualCostWasted = (employees * hoursPerWeek * 52 * (avgSalary / 2080));
  const automationSavings = annualCostWasted * 0.72;
  const roi = Math.round((automationSavings / 15000) * 100);

  return (
    <section ref={ref} style={{
      padding: "108px 48px",
      background: "linear-gradient(160deg, #F0F4FF 0%, #F8FAFF 50%, #EEF2FF 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background dot grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px" }} />
      {/* Ambient glows */}
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
          {/* Header */}
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
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.14em", textTransform: "uppercase" }}>ROI Calculator</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 900, color: "#0F172A",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
            }}>
              What could AI save{" "}
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
                your business?
              </motion.span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 460, margin: "0 auto", lineHeight: 1.75 }}>
              Adjust the sliders to estimate your annual savings from intelligent automation.
            </p>
          </div>

          {/* Calculator grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { label: "Employees doing repetitive tasks", value: employees, min: 1, max: 200, step: 1, set: setEmployees, suffix: "", color: "#2563EB" },
                { label: "Hours/week spent on manual work (per person)", value: hoursPerWeek, min: 1, max: 40, step: 1, set: setHoursPerWeek, suffix: "h", color: "#7C3AED" },
                { label: "Average employee salary (£/year)", value: avgSalary, min: 20000, max: 150000, step: 1000, set: setAvgSalary, suffix: "", prefix: "£", color: "#059669" },
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
                      style={{
                        position: "absolute", inset: 0, width: "100%", height: "100%",
                        opacity: 0, cursor: "pointer", margin: 0,
                      }}
                    />
                    <div style={{
                      position: "absolute", top: "50%",
                      left: `calc(${((value - min) / (max - min)) * 100}% - 10px)`,
                      transform: "translateY(-50%)",
                      width: 20, height: 20, borderRadius: "50%",
                      background: color,
                      boxShadow: `0 0 12px ${color}60`,
                      border: "2.5px solid #fff",
                      pointerEvents: "none",
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Results card */}
            <div style={{
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(37,99,235,0.12)",
              borderRadius: 28, padding: "40px 36px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 24px 64px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)",
            }}>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Estimated annual savings</div>
                <motion.div
                  key={Math.round(automationSavings / 1000)}
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
                  £{Math.round(automationSavings / 1000)}k
                </motion.div>
                <div style={{ fontSize: 13, color: "rgba(15,23,42,0.4)", marginTop: 8, fontWeight: 500 }}>per year</div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(37,99,235,0.08)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "Annual cost of manual work", value: `£${Math.round(annualCostWasted / 1000)}k`, color: "#DC2626" },
                  { label: "AI automation savings (72%)", value: `£${Math.round(automationSavings / 1000)}k`, color: "#059669" },
                  { label: "Estimated ROI", value: `${roi}%`, color: "#2563EB" },
                ].map(({ label, value, color }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 14px", borderRadius: 10,
                    background: `${color}08`,
                    border: `1px solid ${color}18`,
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
                Get your personalised ROI report
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>

              <p style={{ fontSize: 11, color: "rgba(15,23,42,0.35)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                Based on industry averages across 80+ deployments. Actual results vary.
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
  { name: "OpenAI", color: "#10A37F" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "AWS", color: "#FF9900" },
  { name: "Azure AI", color: "#0078D4" },
  { name: "Vertex AI", color: "#4285F4" },
  { name: "Hugging Face", color: "#FFD21E" },
  { name: "Pinecone", color: "#430098" },
  { name: "Weaviate", color: "#00C0C0" },
  { name: "n8n", color: "#EA4B71" },
  { name: "Apache Kafka", color: "#231F20" },
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
            padding: "10px 28px",
            marginRight: 8,
            borderRadius: 12,
            background: "rgba(248,250,255,0.8)",
            border: "1.5px solid rgba(37,99,235,0.08)",
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
    metric: "82%", label: "processing time reduced",
    quote: "KeySol built us an AI document processor that eliminated our entire data entry team's manual backlog — in 8 weeks.",
    name: "COO, FinTech firm",
    color: "#2563EB",
  },
  {
    metric: "4×", label: "faster customer response",
    quote: "Their AI chatbot handles 74% of all inbound support queries automatically. Our team now focuses on complex issues only.",
    name: "Head of CX, SaaS Platform",
    color: "#7C3AED",
  },
  {
    metric: "£1.2M", label: "saved in year one",
    quote: "The predictive inventory AI they built has essentially paid for itself 80 times over. The ROI was extraordinary.",
    name: "Operations Director, Retailer",
    color: "#059669",
  },
  {
    metric: "99.1%", label: "fraud detection accuracy",
    quote: "We went from 340 fraud cases a month to fewer than 3, and virtually no false positives. Life-changing for our business.",
    name: "Risk Director, Banking Group",
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
            Real outcomes from real deployments
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
                padding: "32px 28px",
                borderRadius: 22,
                border: "1.5px solid rgba(37,99,235,0.08)",
                background: "#FAFBFF",
                display: "flex", flexDirection: "column", gap: 16,
              }}
            >
              {/* Metric */}
              <div>
                <div style={{
                  fontSize: "clamp(36px,3vw,52px)", fontWeight: 900,
                  color: r.color, letterSpacing: "-0.04em", lineHeight: 1,
                }}>{r.metric}</div>
                <div style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", fontWeight: 600, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{r.label}</div>
              </div>
              {/* Divider */}
              <div style={{ height: 1.5, background: `linear-gradient(90deg, ${r.color}40, transparent)` }} />
              {/* Quote */}
              <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, flex: 1, fontStyle: "italic" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              {/* Attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${r.color}40, ${r.color}20)`,
                  border: `1.5px solid ${r.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                }}>
                  {["🏦","🚀","🛍️","🏛️"][i]}
                </div>
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
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="9" cy="14" r="1" fill="white"/><circle cx="15" cy="14" r="1" fill="white"/></svg>,
    title: "Agentic AI Systems",
    desc: "Autonomous agents that plan, reason, and execute multi-step tasks — from research orchestrators to full workflow automation engines.",
    tag: "Most Popular",
  },
  {
    gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)",
    glow: "rgba(124,58,237,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Intelligent Chatbots",
    desc: "Context-aware LLM-powered bots for customer service, sales qualification, HR operations, and internal knowledge management.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#0891B2,#0E7490)",
    glow: "rgba(8,145,178,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Business Process Automation",
    desc: "End-to-end automation of repetitive workflows — data entry, document routing, approvals, and reporting — cutting manual effort by 60–80%.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#059669,#047857)",
    glow: "rgba(5,150,105,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "ML & Predictive Analytics",
    desc: "Custom machine learning models that forecast demand, detect anomalies, score leads, and surface insights for smarter decisions.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#D97706,#B45309)",
    glow: "rgba(217,119,6,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
    title: "AI System Integration",
    desc: "Embedding AI intelligence directly into your existing CRMs, ERPs, and communication platforms — zero disruption, instant value.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#DC2626,#B91C1C)",
    glow: "rgba(220,38,38,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "Intelligent Document Processing",
    desc: "Auto-extract, classify, and process data from invoices, contracts, and forms — eliminating manual data entry entirely.",
    tag: "",
  },
];

const stats = [
  { value: 70, suffix: "%", label: "Cost reduction", sub: "avg. across deployments" },
  { value: 80, suffix: "%", label: "Less manual work", sub: "process automation savings" },
  { value: 3,  suffix: "×", label: "Faster decisions", sub: "with real-time AI insights" },
  { value: 98, suffix: "%", label: "Model accuracy", sub: "production-grade systems" },
];

const processSteps = [
  {
    num: "01", color: "#2563EB", bg: "rgba(37,99,235,0.12)",
    title: "Discover",
    desc: "Deep-dive audit of your workflows, data landscape, and automation opportunities — we map every pain point and quantify its ROI.",
  },
  {
    num: "02", color: "#7C3AED", bg: "rgba(124,58,237,0.12)",
    title: "Strategize",
    desc: "We build a prioritised AI roadmap ranked by business impact, feasibility, and timeline — with clear KPIs baked in from day one.",
  },
  {
    num: "03", color: "#0891B2", bg: "rgba(8,145,178,0.12)",
    title: "Design & Build",
    desc: "Our engineers develop, train, and iterate on custom models and agents with your team fully in the loop at every milestone.",
  },
  {
    num: "04", color: "#059669", bg: "rgba(5,150,105,0.12)",
    title: "Integrate",
    desc: "Seamless deployment into your live environment with comprehensive staff enablement — no disruption, no data loss.",
  },
  {
    num: "05", color: "#D97706", bg: "rgba(217,119,6,0.12)",
    title: "Optimise & Scale",
    desc: "Post-launch model monitoring, continuous retraining on fresh data, and expansion to new automation opportunities as ROI compounds.",
  },
];

const useCases = [
  {
    industry: "Financial Services",
    icon: "💳",
    color: "#2563EB",
    items: ["Automated loan origination & underwriting", "Real-time fraud detection", "Intelligent client reporting & compliance"],
  },
  {
    industry: "Healthcare",
    icon: "🏥",
    color: "#059669",
    items: ["Patient intake & triage automation", "Clinical data extraction from records", "AI-powered appointment scheduling"],
  },
  {
    industry: "Retail & E-commerce",
    icon: "🛍️",
    color: "#7C3AED",
    items: ["Demand forecasting & inventory AI", "Personalised product recommendation engines", "Automated customer support agents"],
  },
  {
    industry: "Manufacturing",
    icon: "⚙️",
    color: "#D97706",
    items: ["Predictive maintenance & downtime prevention", "Computer vision quality control", "AI-optimised supply chain logistics"],
  },
  {
    industry: "Professional Services",
    icon: "⚖️",
    color: "#0891B2",
    items: ["Contract analysis & risk extraction", "Automated billing & time tracking", "AI project management assistants"],
  },
  {
    industry: "HR & Recruitment",
    icon: "👥",
    color: "#DC2626",
    items: ["Intelligent CV screening & shortlisting", "Automated onboarding workflows", "Employee query & policy chatbots"],
  },
];

const reasons = [
  {
    color: "#2563EB",
    stat: "80+", statLabel: "deployments shipped",
    title: "Practitioners, not theorists",
    desc: "Our engineers have shipped production AI across finance, healthcare, retail, and SaaS. We know what works — and we know what to avoid.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    color: "#7C3AED",
    stat: "40–70%", statLabel: "cost reduction avg.",
    title: "Outcome-obsessed",
    desc: "We define success metrics before we write a single line of code. Every engagement is measured against real business outcomes, not deliverables.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    color: "#0891B2",
    stat: "100%", statLabel: "explainable decisions",
    title: "No black boxes",
    desc: "We explain every AI decision in plain language. Your team knows exactly how the system works and why it makes the recommendations it does.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    color: "#059669",
    stat: "24 / 7", statLabel: "monitoring & support",
    title: "Long-term partnership",
    desc: "AI compounds with data. We offer ongoing model monitoring, retraining, and expansion — your ROI grows over time, not just at launch.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
];

const faqs = [
  { q: "Do I need to already have data to get started?", a: "Not at all. We help clients at every stage — from building data collection strategies from scratch to scaling on existing datasets. We assess your data readiness in discovery and design accordingly." },
  { q: "How long does an AI automation project typically take?", a: "Simple automation workflows ship in 2–4 weeks. Complex agentic systems or enterprise ML deployments typically take 8–16 weeks. You'll get a detailed, honest timeline during the strategy phase — no surprises." },
  { q: "Will AI replace our team?", a: "Our philosophy is augmentation, not replacement. We build AI to handle repetitive, low-value tasks so your team can focus on the high-value work that requires human judgement, creativity, and relationships." },
  { q: "Can you integrate AI into our existing software stack?", a: "Yes — this is one of our core specialisms. We connect AI capabilities into existing CRMs, ERPs, customer portals, and internal tools via APIs and custom connectors with zero disruption." },
  { q: "How do you ensure the AI outputs are accurate?", a: "Rigorous testing, human-in-the-loop validation for critical workflows, continuous monitoring dashboards, and structured feedback loops. Accuracy compounds as models learn from your specific data over time." },
];

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function AIAutomationPage() {
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
        {/* Fine dot grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px" }} />

        {/* Large right-side glow */}
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 60%)",
          pointerEvents: "none" }} />
        {/* Bottom purple glow */}
        <div style={{ position: "absolute", bottom: -150, left: "30%", width: 600, height: 400,
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 60%)",
          pointerEvents: "none" }} />
        {/* Top-left cyan accent */}
        <div style={{ position: "absolute", top: 0, left: -100, width: 400, height: 400,
          background: "radial-gradient(ellipse at center, rgba(8,145,178,0.05) 0%, transparent 65%)",
          pointerEvents: "none" }} />

        {/* Horizontal scan lines — right decoration */}
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

            {/* ── LEFT COPY ───────────────────────────────── */}
            <div>
              {/* Breadcrumb */}
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30 }}>
                  <Link href="/services/" style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", textDecoration: "none", fontWeight: 500, letterSpacing: "0.01em" }}>Services</Link>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(15,23,42,0.25)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  <span style={{ fontSize: 12, color: "#60A5FA", fontWeight: 600, letterSpacing: "0.01em" }}>AI & Automation</span>
                </div>
              </FadeUp>

              {/* Eyebrow */}
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
                    Intelligent Automation
                  </span>
                </div>
              </FadeUp>

              {/* Headline */}
              <FadeUp delay={0.1}>
                <h1 style={{
                  fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900,
                  color: "#0F172A", lineHeight: 1.0, letterSpacing: "-0.035em",
                  marginBottom: 6,
                }}>
                  AI &amp;{" "}
                  <motion.span
                    animate={{ color: ["#0F172A", "#2563EB", "#0F172A"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "inline" }}
                  >
                    Automation
                  </motion.span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.14}>
                <h1 style={{
                  fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900,
                  lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 32,
                  position: "relative", display: "inline-block",
                }}>
                  {/* Shimmer sweep layer */}
                  <motion.span
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: "linear-gradient(100deg, #60A5FA 0%, #A78BFA 30%, #34D399 55%, #60A5FA 70%, #F472B6 85%, #60A5FA 100%)",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline",
                    }}
                  >
                    that actually works.
                  </motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.19}>
                <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.82, marginBottom: 42, maxWidth: 490 }}>
                  We build agentic AI systems, intelligent automation, and production-grade machine learning that eliminate manual work, reduce costs by 40–70%, and help your business make smarter decisions — at any scale.
                </p>
              </FadeUp>

              {/* CTAs */}
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

              {/* Trust row */}
              <FadeUp delay={0.32}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 0, marginTop: 48,
                  borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 28,
                }}>
                  {[
                    { dot: "#22C55E", text: "40–70% cost reduction", border: true },
                    { dot: "#2563EB", text: "24/7 automated ops", border: true },
                    { dot: "#7C3AED", text: "1–2 week delivery", border: false },
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

            {/* ── RIGHT VISUAL DASHBOARD ─────────────────── */}
            <FadeUp delay={0.22}>
              {/* Outer wrapper — gives room for all absolute children */}
              <div style={{ position: "relative", paddingTop: 48, paddingBottom: 80, paddingLeft: 32 }}>

                {/* ── MAIN GLASS CARD ── */}
                <div style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(37,99,235,0.12)",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}>
                  {/* Card top bar */}
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
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.45)", marginLeft: 6 }}>KeySol AI Engine — v3.2</span>
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

                  {/* Neural net */}
                  <div style={{ padding: "20px 24px 16px" }}>
                    <NeuralNetworkViz />
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "rgba(37,99,235,0.07)", margin: "0 22px" }} />

                  {/* Metric row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                    {[
                      { label: "Model Accuracy", val: "98.4%", color: "#059669", sub: "↑ 2.1% this week" },
                      { label: "Tasks / day", val: "12,847", color: "#2563EB", sub: "↑ 340 vs yesterday" },
                      { label: "Cost Saved", val: "$2.4M", color: "#D97706", sub: "↑ $180K this month" },
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

                {/* ── ACTIVE PIPELINES CARD — below main card ── */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: 48, right: -240,
                    width: 224,
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,255,0.95))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(37,99,235,0.12)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 16px 48px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.06)",
                    zIndex: 10,
                  }}
                >
                  <div style={{ fontSize: 9.5, fontWeight: 800, color: "rgba(15,23,42,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Active Pipelines</div>
                  {[
                    { name: "Invoice OCR", pct: 92, color: "#2563EB" },
                    { name: "Lead Scoring", pct: 78, color: "#7C3AED" },
                    { name: "Fraud Detect", pct: 99, color: "#059669" },
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

                {/* ── MODELS DEPLOYED BADGE — bottom-right, clears the main card ── */}
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
                  Models Deployed &amp; Running
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
              <div style={{
                textAlign: "center", padding: "0 24px",
                borderRight: i < 3 ? "1px solid rgba(37,99,235,0.1)" : "none",
              }}>
                <div style={{
                  fontSize: "clamp(36px,3.5vw,52px)", fontWeight: 900,
                  background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.04em", lineHeight: 1,
                }}>
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
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Build</span>
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 18 }}>
                End-to-end AI capabilities
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
                From intelligent agents to predictive models — we build AI that integrates directly with your business and delivers measurable, compounding ROI.
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
        {/* Fine grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px" }} />
        {/* Wide ambient glow top-center */}
        <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 900, height: 600, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)",
          pointerEvents: "none" }} />
        {/* Bottom right accent */}
        <div style={{ position: "absolute", bottom: -160, right: "5%", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)",
          pointerEvents: "none" }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>

          {/* ── HEADER ── */}
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
                How we deliver<br />
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
                  AI that actually sticks.
                </motion.span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                A proven 5-phase methodology refined across 80+ AI deployments — from startups to Fortune 500.
              </p>
            </div>
          </FadeUp>

          {/* ── STEP CARDS ── */}
          <div style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, alignItems: "stretch" }}>
              {processSteps.map((p, i) => (
                <FadeUp key={i} delay={0.1 * i}>
                  <ProcessCard step={p} index={i} isLast={i === processSteps.length - 1} />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══════════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <SlideIn from="left">
              <div style={{ position: "sticky", top: 120 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 20,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Industry Use Cases</span>
                </div>
                <h2 style={{ fontSize: "clamp(28px,2.8vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 20 }}>
                  AI that works across every industry
                </h2>
                <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  We've deployed AI across a dozen verticals. Each implementation is unique — but our proven methodology means faster delivery and higher accuracy in every sector.
                </p>
                <Link href="/contact/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff", borderRadius: 12, padding: "13px 24px",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.4)",
                }}>
                  Discuss your use case
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {useCases.map((uc, i) => (
                  <FadeUp key={i} delay={0.08 * i}>
                    <div style={{
                      padding: "24px", borderRadius: 18,
                      border: "1.5px solid #E5E7EB",
                      background: "#fff",
                      transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = uc.color; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${uc.color}20`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <div style={{
                          width: 40, height: 40, borderRadius: 10,
                          background: `${uc.color}15`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 18,
                        }}>{uc.icon}</div>
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

      {/* ══ CLIENT RESULTS ════════════════════════════════════════════ */}
      <ResultsStrip />

      {/* ══ ROI CALCULATOR ════════════════════════════════════════════ */}
      <ROICalculator />

      {/* ══ WHY KEYSOL ════════════════════════════════════════════════ */}
      <section style={{
        padding: "120px 48px",
        background: "linear-gradient(160deg, #F8FAFF 0%, #EEF2FF 45%, #F0F4FF 75%, #F8FAFF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Fine dot grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px" }} />
        {/* Left blue ambient */}
        <div style={{ position: "absolute", top: -100, left: -100, width: 600, height: 600,
          background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        {/* Right purple ambient */}
        <div style={{ position: "absolute", bottom: -80, right: -60, width: 500, height: 500,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>

          {/* ── HEADER ── */}
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
                We don&apos;t sell AI hype.
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
                We deliver results.
              </motion.h2>

              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Real engineers. Real metrics. Real accountability — from kickoff to compounding ROI.
              </p>
            </div>
          </FadeUp>

          {/* ── REASON CARDS ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {reasons.map((r, i) => (
              <FadeUp key={i} delay={0.09 * i}>
                <ReasonCard reason={r} />
              </FadeUp>
            ))}
          </div>

          {/* ── BOTTOM TRUST STRIP ── */}
          <FadeUp delay={0.4}>
            <div style={{
              marginTop: 64, display: "flex", alignItems: "center", justifyContent: "center",
              gap: 48, flexWrap: "wrap",
            }}>
              {[
                { val: "NDA-first", label: "Full confidentiality" },
                { val: "Fixed-scope", label: "No scope creep" },
                { val: "Weekly demos", label: "Full transparency" },
                { val: "ROI guarantee", label: "Or we keep working" },
              ].map(({ val, label }) => (
                <div key={val} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em",
                    marginBottom: 3,
                  }}>{val}</div>
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
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18,
              }}>
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
        background: "linear-gradient(150deg, #F0F4FF 0%, #EEF2FF 40%, #E8EEFF 70%, #F0F4FF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px" }} />
        {/* Large center glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 65%)",
          pointerEvents: "none" }} />

        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)",
              borderRadius: 100, padding: "8px 18px", marginBottom: 28,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>Free 30-minute strategy session</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{
              fontSize: "clamp(30px,3.6vw,52px)", fontWeight: 900, color: "#0F172A",
              lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em",
            }}>
              Ready to put AI to work<br />
              <span style={{
                background: "linear-gradient(90deg,#2563EB,#7C3AED)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                in your business?
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Book a free strategy session with one of our AI engineers. We&apos;ll map your highest-value automation opportunities and give you a clear ROI estimate — no obligation.
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
                Book Free AI Session
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/case-studies/" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#fff", color: "#374151",
                borderRadius: 14, padding: "16px 28px",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                border: "1.5px solid #E5E7EB",
              }}>
                View Case Studies
              </Link>
            </div>
          </FadeUp>

          {/* Bottom trust row */}
          <FadeUp delay={0.28}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 52 }}>
              {[
                { icon: "🔒", text: "No commitment required" },
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "🎯", text: "Tailored to your industry" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ fontSize: 12.5, color: "rgba(15,23,42,0.5)", fontWeight: 500 }}>{text}</span>
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
  /* Discover */
  <svg key="d" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  /* Strategize */
  <svg key="s" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  /* Design & Build */
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  /* Integrate */
  <svg key="i" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  /* Optimise */
  <svg key="o" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
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
          background: hovered
            ? `linear-gradient(160deg, #fff 0%, ${step.color}08 100%)`
            : "#fff",
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
        {/* Full bleed gradient wash on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 30% 0%, ${step.color}10 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "opacity 0.4s",
        }} />

        {/* Top-right large ghost number */}
        <div style={{
          position: "absolute", top: -10, right: 14,
          fontSize: 88, fontWeight: 900, lineHeight: 1,
          color: hovered ? `${step.color}12` : "rgba(15,23,42,0.04)",
          letterSpacing: "-0.06em",
          userSelect: "none",
          transition: "color 0.4s",
          fontVariantNumeric: "tabular-nums",
          pointerEvents: "none",
        }}>{step.num}</div>

        {/* Icon block — large, prominent */}
        <div style={{
          width: 68, height: 68, borderRadius: 20,
          background: `linear-gradient(145deg, ${step.color}, ${step.color}bb)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered
            ? `0 12px 40px ${step.color}55, 0 0 0 4px ${step.color}18`
            : `0 6px 20px ${step.color}35`,
          transition: "box-shadow 0.35s, transform 0.35s",
          transform: hovered ? "translateY(-3px) scale(1.06)" : "none",
          marginBottom: 22, flexShrink: 0,
          position: "relative", zIndex: 1,
        }}>
          {stepIcons[index]}
        </div>

        {/* Step pill tag */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: `${step.color}12`,
          border: `1px solid ${step.color}30`,
          borderRadius: 100, padding: "4px 12px",
          marginBottom: 14, alignSelf: "flex-start",
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: step.color, flexShrink: 0 }} />
          <span style={{ fontSize: 10.5, fontWeight: 700, color: step.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Step {step.num}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 17, fontWeight: 800, color: "#0F172A",
          marginBottom: 12, lineHeight: 1.25,
          letterSpacing: "-0.025em",
          position: "relative", zIndex: 1,
        }}>{step.title}</h3>

        {/* Description */}
        <p style={{
          fontSize: 13.5, color: "rgba(15,23,42,0.55)",
          lineHeight: 1.75, marginBottom: 24,
          flexGrow: 1,
          position: "relative", zIndex: 1,
        }}>{step.desc}</p>

        {/* Bottom accent line + learn more */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: `1px solid ${hovered ? step.color + "25" : "rgba(226,232,240,0.8)"}`,
          paddingTop: 16, transition: "border-color 0.3s",
          position: "relative", zIndex: 1,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <motion.div
              animate={hovered ? { x: [0, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.5, repeat: hovered ? Infinity : 0 }}
              style={{
                width: 28, height: 28, borderRadius: "50%",
                background: hovered ? step.color : `${step.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.25s",
                flexShrink: 0,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke={hovered ? "white" : step.color} strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </motion.div>
            <span style={{
              fontSize: 12.5, fontWeight: 700,
              color: hovered ? step.color : "rgba(15,23,42,0.38)",
              transition: "color 0.25s",
            }}>
              Learn more
            </span>
          </div>

          {/* Connector dot — shows flow */}
          {!isLast && (
            <div style={{
              display: "flex", alignItems: "center", gap: 3,
            }}>
              {[0,1,2].map(d => (
                <div key={d} style={{
                  width: 4, height: 4, borderRadius: "50%",
                  background: step.color,
                  opacity: 0.2 + d * 0.2,
                }} />
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
        padding: "32px 26px 36px",
        borderRadius: 24,
        background: hovered
          ? `linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,250,255,0.95) 100%)`
          : "rgba(255,255,255,0.8)",
        border: `1px solid ${hovered ? reason.color + "50" : "rgba(37,99,235,0.1)"}`,
        boxShadow: hovered
          ? `0 0 0 1px ${reason.color}20, 0 24px 64px ${reason.color}14, 0 4px 16px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(37,99,235,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-8px)" : "none",
        position: "relative", overflow: "hidden",
        height: "100%", cursor: "default",
      }}
    >
      {/* Color bleed on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% -10%, ${reason.color}16 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Icon block */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 15,
          background: `linear-gradient(135deg, ${reason.color}cc, ${reason.color}77)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 8px 24px ${reason.color}50` : `0 4px 12px ${reason.color}28`,
          transition: "box-shadow 0.3s",
        }}>
          {reason.icon}
        </div>
      </div>

      {/* Stat highlight */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1,
          color: reason.color, marginBottom: 3,
        }}>{reason.stat}</div>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: "rgba(15,23,42,0.45)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{reason.statLabel}</div>
      </div>

      {/* Animated color bar */}
      <div style={{
        height: 1.5, borderRadius: 2, marginBottom: 18,
        background: `linear-gradient(90deg, ${reason.color}, transparent)`,
        width: hovered ? "70%" : "28%",
        transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)",
      }} />

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
        padding: "28px 28px 32px",
        borderRadius: 20,
        border: `1.5px solid ${hovered ? "transparent" : "#E5E7EB"}`,
        background: hovered
          ? "linear-gradient(145deg, #F8FAFF, #EEF2FF)"
          : "#fff",
        boxShadow: hovered ? `0 16px 48px ${cap.glow}` : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "none",
        position: "relative", overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Subtle gradient accent top-right */}
      {hovered && (
        <div style={{
          position: "absolute", top: 0, right: 0, width: 100, height: 100,
          background: `radial-gradient(circle at 100% 0%, ${cap.glow}, transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Tag badge */}
      {cap.tag && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          color: "#fff", borderRadius: 100, padding: "3px 10px",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.05em",
        }}>
          {cap.tag}
        </div>
      )}

      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: cap.gradient,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 20,
        boxShadow: `0 6px 20px ${cap.glow}`,
      }}>
        {cap.icon}
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginBottom: 10, lineHeight: 1.3 }}>{cap.title}</h3>
      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75 }}>{cap.desc}</p>

      {/* Bottom arrow link on hover */}
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
