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
   GROWTH DASHBOARD VIZ — chart + legend + KPI in HTML
══════════════════════════════════════════════════════════ */
function GrowthDashboardViz() {
  const [activePt, setActivePt] = useState(3);
  useEffect(() => {
    const id = setInterval(() => setActivePt(p => (p + 1) % 9), 1200);
    return () => clearInterval(id);
  }, []);

  const barData  = [32, 48, 58, 54, 76, 90, 82, 100, 94];
  const lineData = [18, 24, 30, 28, 40, 50, 48, 60, 58];
  const months   = ["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"];

  // viewBox 400 × 170  — bars + line + month labels only
  const CX = 16, CY = 20, CW = 368, CH = 132;
  const maxV = 112;
  const barGap = CW / barData.length;
  const barW = barGap * 0.58;

  const bX = (i: number) => CX + i * barGap + (barGap - barW) / 2;
  const bH = (v: number) => (v / maxV) * CH;
  const bY = (v: number) => CY + CH - bH(v);
  const lX = (i: number) => CX + i * barGap + barGap / 2;
  const lY = (v: number) => CY + CH - (v / maxV) * CH;

  const smoothLine = lineData.map((v, i) => {
    if (i === 0) return `M${lX(0)},${lY(v)}`;
    const x0 = lX(i - 1), y0 = lY(lineData[i - 1]);
    const x1 = lX(i),     y1 = lY(v);
    const cx = (x0 + x1) / 2;
    return `C${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }).join(" ");

  return (
    <div style={{ width: "100%" }}>

      {/* ── Chart SVG — bars + line + month labels only ── */}
      <svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
        <defs>
          <linearGradient id="barDef" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#A5B4FC" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#C7D7FF" stopOpacity="0.08"/>
          </linearGradient>
          <linearGradient id="barAct" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="lineWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#22C55E" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0"/>
          </linearGradient>
          <clipPath id="cc">
            <rect x={CX} y={CY} width={CW} height={CH}/>
          </clipPath>
        </defs>

        {/* Bars */}
        {barData.map((v, i) => {
          const isActive = i === activePt;
          return (
            <g key={i}>
              <rect x={bX(i)} y={bY(v)} width={barW} height={bH(v)} rx="6"
                fill={isActive ? "url(#barAct)" : "url(#barDef)"}/>
              {isActive && (
                <text x={bX(i) + barW / 2} y={bY(v) - 6} textAnchor="middle"
                  fill="#7C3AED" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700">
                  +{Math.round(v * 0.45)}%
                </text>
              )}
            </g>
          );
        })}

        {/* Line area + stroke */}
        <path d={smoothLine + ` L${lX(8)},${CY + CH} L${lX(0)},${CY + CH} Z`}
          fill="url(#lineWash)" clipPath="url(#cc)"/>
        <path d={smoothLine} fill="none" stroke="#22C55E" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" clipPath="url(#cc)"/>

        {/* Month labels — every 2nd */}
        {months.map((m, i) => (
          i % 2 === 1 ? (
            <text key={i} x={lX(i)} y={CY + CH + 16}
              textAnchor="middle" fill="rgba(15,23,42,0.28)"
              fontSize="9" fontFamily="Inter,sans-serif">{m}</text>
          ) : null
        ))}
      </svg>

      {/* ── Legend row ── */}
      <div style={{
        display: "flex", alignItems: "center", gap: 20,
        padding: "8px 20px 12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "#93C5FD", flexShrink: 0 }}/>
          <span style={{ fontSize: 11, color: "rgba(15,23,42,0.4)", fontWeight: 400 }}>Revenue</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 20, height: 3, borderRadius: 2, background: "#22C55E", flexShrink: 0 }}/>
          <span style={{ fontSize: 11, color: "rgba(15,23,42,0.4)", fontWeight: 400 }}>Organic Growth</span>
        </div>
      </div>

      {/* ── KPI strip ── */}
      <div style={{
        borderTop: "1px solid rgba(15,23,42,0.07)",
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
      }}>
        {[
          { val: "+318%", label: "Organic Traffic",   sub: "↑ 12% this month",    color: "#16A34A", border: true },
          { val: "4.8×",  label: "Google Ads ROAS",   sub: "↑ 0.3 vs last month", color: "#2563EB", border: true },
          { val: "−62%",  label: "Cost Per Lead",     sub: "vs. 6 months ago",    color: "#D97706", border: false },
        ].map((kpi) => (
          <div key={kpi.label} style={{
            padding: "18px 20px 20px",
            borderRight: kpi.border ? "1px solid rgba(15,23,42,0.07)" : "none",
          }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: kpi.color, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6 }}>
              {kpi.val}
            </div>
            <div style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", fontWeight: 400, marginBottom: 5 }}>
              {kpi.label}
            </div>
            <div style={{ fontSize: 11.5, color: kpi.color, fontWeight: 600 }}>
              {kpi.sub}
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
  "📈 320% average organic traffic growth within 12 months",
  "🎯 4× ROAS improvement across paid media accounts",
  "📉 65% lower cost-per-lead vs. industry benchmarks",
  "🚀 90+ brands scaled across B2B, SaaS & e-commerce",
  "🔍 Technical SEO, paid media, CRO & content under one roof",
  "📊 Full-funnel attribution — every £ tracked to revenue",
  "🤖 Marketing automation that works 24/7 to close pipeline",
  "🔒 No lock-in — month-to-month engagement terms",
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
   ROI CALCULATOR (Digital Growth)
══════════════════════════════════════════════════════════ */
function ROICalculator() {
  const [adSpend, setAdSpend] = useState(5000);
  const [orgTrafficK, setOrgTrafficK] = useState(10);
  const [convRate, setConvRate] = useState(2);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const avgOrderValue = 120; // assume £120 AOV
  const paidRevenue = adSpend * 4.2; // avg 4.2x ROAS after KeySol
  const currentPaidRevenue = adSpend * 1.8; // typical unoptimised
  const paidUplift = paidRevenue - currentPaidRevenue;

  const organicVisitors = orgTrafficK * 1000 * 3.2; // 320% growth
  const currentOrgVisitors = orgTrafficK * 1000;
  const organicUplift = (organicVisitors - currentOrgVisitors) * (convRate / 100) * avgOrderValue;

  const totalMonthlyUplift = Math.round(paidUplift + organicUplift);
  const annualUplift = totalMonthlyUplift * 12;
  const roiPct = Math.round((totalMonthlyUplift / (adSpend + 3000)) * 100); // 3000 = approx retainer

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
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.14em", textTransform: "uppercase" }}>Revenue Calculator</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 900, color: "#0F172A",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
            }}>
              What could growth look like{" "}
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
                for your brand?
              </motion.span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              Adjust the sliders to estimate the revenue uplift from a KeySol digital growth engagement.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { label: "Monthly paid media ad spend (£)", value: adSpend, min: 1000, max: 50000, step: 500, set: setAdSpend, suffix: "", prefix: "£", color: "#2563EB" },
                { label: "Current monthly organic visitors (thousands)", value: orgTrafficK, min: 1, max: 200, step: 1, set: setOrgTrafficK, suffix: "k", prefix: "", color: "#7C3AED" },
                { label: "Current website conversion rate (%)", value: convRate, min: 0.5, max: 10, step: 0.5, set: setConvRate, suffix: "%", prefix: "", color: "#059669" },
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
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Estimated monthly revenue uplift</div>
                <motion.div
                  key={totalMonthlyUplift}
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
                  £{(totalMonthlyUplift / 1000).toFixed(1)}k
                </motion.div>
                <div style={{ fontSize: 13, color: "rgba(15,23,42,0.4)", marginTop: 8, fontWeight: 500 }}>per month from paid + organic</div>
              </div>

              <div style={{ height: 1, background: "rgba(37,99,235,0.08)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "Paid media revenue (at 4.2× ROAS)", value: `£${Math.round(paidRevenue / 1000)}k/mo`, color: "#2563EB" },
                  { label: "Paid revenue currently (est. 1.8× ROAS)", value: `£${Math.round(currentPaidRevenue / 1000)}k/mo`, color: "#DC2626" },
                  { label: "Organic traffic revenue uplift (320% growth)", value: `£${Math.round(organicUplift / 1000)}k/mo`, color: "#7C3AED" },
                  { label: "Projected annual uplift", value: `£${Math.round(annualUplift / 1000)}k`, color: "#059669" },
                  { label: "Estimated first-year ROI", value: `${roiPct}%`, color: "#D97706" },
                ].map(({ label, value, color }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 14px", borderRadius: 10,
                    background: `${color}08`, border: `1px solid ${color}18`,
                  }}>
                    <span style={{ fontSize: 12.5, color: "rgba(15,23,42,0.6)", fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: 14, fontWeight: 800, color }}>{value}</span>
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
                Get your free growth projection
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <p style={{ fontSize: 11, color: "rgba(15,23,42,0.35)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                Based on median results across 90+ brand engagements. Actual results vary by industry and baseline.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   GROWTH TOOLS MARQUEE
══════════════════════════════════════════════════════════ */
const GROWTH_TOOLS = [
  { name: "Google Ads", color: "#4285F4" },
  { name: "Meta Ads", color: "#1877F2" },
  { name: "SEMrush", color: "#FF642D" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "GA4", color: "#F57C00" },
  { name: "Ahrefs", color: "#1E7CFF" },
  { name: "LinkedIn Ads", color: "#0A66C2" },
  { name: "Hotjar", color: "#FD3A5C" },
  { name: "Klaviyo", color: "#00A36C" },
  { name: "Marketo", color: "#5C4EE5" },
  { name: "Looker Studio", color: "#4285F4" },
  { name: "Optimizely", color: "#0037FF" },
];

function GrowthToolsStrip() {
  const doubled = [...GROWTH_TOOLS, ...GROWTH_TOOLS];
  return (
    <div style={{ padding: "56px 0", background: "#fff", overflow: "hidden", borderTop: "1px solid rgba(37,99,235,0.06)", borderBottom: "1px solid rgba(37,99,235,0.06)" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(15,23,42,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Platforms & Tools We Master
        </span>
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((tool, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 28px", marginRight: 8, borderRadius: 12,
            background: "rgba(248,250,255,0.8)", border: "1.5px solid rgba(37,99,235,0.08)",
            whiteSpace: "nowrap",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: tool.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", letterSpacing: "-0.01em" }}>{tool.name}</span>
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
    metric: "320%", label: "organic traffic growth",
    quote: "KeySol rebuilt our entire SEO strategy from scratch. Within 8 months we went from page 5 to ranking #1 for our primary category. Traffic compounding ever since.",
    name: "CMO, SaaS Platform (Series B)",
    color: "#2563EB",
  },
  {
    metric: "4.8×", label: "paid media ROAS",
    quote: "We were burning £12k/month on Google Ads with a 1.6x return. KeySol restructured everything — within 60 days we hit 4.8x. Wish we'd done this two years ago.",
    name: "Growth Lead, D2C E-commerce Brand",
    color: "#7C3AED",
  },
  {
    metric: "62%", label: "lower cost-per-lead",
    quote: "Our CPL went from £180 to under £70 in a quarter. They completely rethought our targeting, creative strategy, and landing pages. Game-changing for our sales team.",
    name: "Head of Marketing, B2B Tech Company",
    color: "#059669",
  },
  {
    metric: "£1.4M", label: "additional revenue in year 1",
    quote: "The combined SEO, paid, and CRO programme generated £1.4M in attributable new revenue in the first 12 months — that's a 9× return on our engagement with KeySol.",
    name: "CEO, Professional Services Firm",
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
            Real growth from real engagements
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
                }}>{["📈","🎯","💡","💰"][i]}</div>
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
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: "Search Engine Optimisation",
    desc: "Technical SEO audits, on-page optimisation, link building, and content strategy engineered to dominate SERP rankings and compound organic traffic over time.",
    tag: "Most Popular",
  },
  {
    gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)",
    glow: "rgba(124,58,237,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "Performance Marketing",
    desc: "Data-driven paid media across Google, Meta, LinkedIn, and programmatic — precision targeting, ruthless optimisation, and ROAS that outperforms industry benchmarks.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#0891B2,#0E7490)",
    glow: "rgba(8,145,178,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Conversion Rate Optimisation",
    desc: "A/B testing frameworks, user journey analysis, landing page engineering, and funnel redesign that turns existing traffic into measurable revenue uplift.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#059669,#047857)",
    glow: "rgba(5,150,105,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: "Content & SEO Strategy",
    desc: "Editorial planning, long-form content production, thought leadership, and content marketing systems that build domain authority and attract qualified pipeline.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#D97706,#B45309)",
    glow: "rgba(217,119,6,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Marketing Automation",
    desc: "HubSpot, Marketo, and custom-built nurture sequences — automated lead scoring, email flows, and lifecycle campaigns that work 24/7 to move prospects to close.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#DC2626,#B91C1C)",
    glow: "rgba(220,38,38,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Analytics & Growth Intelligence",
    desc: "GA4 implementation, custom dashboards, attribution modelling, and revenue analytics — so every growth decision is grounded in data, not gut feel.",
    tag: "",
  },
];

const stats = [
  { value: 320, suffix: "%", label: "Avg. traffic growth", sub: "organic, within 12 months" },
  { value: 4,   suffix: "×", label: "ROAS improvement", sub: "across paid media accounts" },
  { value: 65,  suffix: "%", label: "Lower CPL", sub: "vs. industry benchmarks" },
  { value: 90,  suffix: "+", label: "Brands scaled", sub: "B2B, SaaS, e-commerce" },
];

const processSteps = [
  {
    num: "01", color: "#2563EB", bg: "rgba(37,99,235,0.12)",
    title: "Audit & Baseline",
    desc: "Comprehensive audit of your current SEO, paid, content, and funnel performance — benchmarked against competitors to identify the highest-leverage gaps.",
  },
  {
    num: "02", color: "#7C3AED", bg: "rgba(124,58,237,0.12)",
    title: "Growth Strategy",
    desc: "A prioritised 90-day roadmap across channels — search, paid, content, and conversion — with clear KPIs and revenue targets baked in from the start.",
  },
  {
    num: "03", color: "#0891B2", bg: "rgba(8,145,178,0.12)",
    title: "Execute & Test",
    desc: "Rapid execution across all agreed channels with continuous A/B testing, weekly optimisation cycles, and transparent performance reporting.",
  },
  {
    num: "04", color: "#059669", bg: "rgba(5,150,105,0.12)",
    title: "Analyse & Iterate",
    desc: "Monthly deep-dive reviews — what&apos;s compounding, what needs pivoting, and where the next wave of growth unlocks lie based on your data.",
  },
  {
    num: "05", color: "#D97706", bg: "rgba(217,119,6,0.12)",
    title: "Scale & Compound",
    desc: "Once channels prove ROI, we scale spend, content volume, and automation — building a self-reinforcing growth engine that compounds month over month.",
  },
];

const useCases = [
  {
    industry: "SaaS & Tech",
    icon: "☁️",
    color: "#2563EB",
    items: ["Product-led SEO & content moats", "Trial-to-paid conversion optimisation", "LinkedIn & intent-based demand gen"],
  },
  {
    industry: "E-commerce",
    icon: "🛍️",
    color: "#059669",
    items: ["Google Shopping & Performance Max", "Retargeting & cart abandonment recovery", "Organic category & brand SEO"],
  },
  {
    industry: "B2B & Enterprise",
    icon: "🏢",
    color: "#7C3AED",
    items: ["Account-based marketing campaigns", "LinkedIn lead generation at scale", "Content-driven pipeline nurturing"],
  },
  {
    industry: "Financial Services",
    icon: "💳",
    color: "#D97706",
    items: ["Compliant paid media for regulated sectors", "Trust-building content & SEO authority", "Lead qualification automation"],
  },
  {
    industry: "Healthcare & MedTech",
    icon: "🏥",
    color: "#0891B2",
    items: ["YMYL-compliant SEO strategy", "Patient acquisition funnels", "HCP-targeted content programmes"],
  },
  {
    industry: "Professional Services",
    icon: "⚖️",
    color: "#DC2626",
    items: ["Thought leadership & SEO authority", "Google Ads for high-intent keywords", "Client journey automation & CRM integration"],
  },
];

const reasons = [
  {
    color: "#2563EB",
    stat: "90+", statLabel: "brands scaled",
    title: "Growth marketers, not generalists",
    desc: "Every strategist on your account has delivered measurable revenue growth — not vanity metrics — across competitive markets and enterprise budgets.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    color: "#7C3AED",
    stat: "320%", statLabel: "avg. traffic growth",
    title: "Revenue-first thinking",
    desc: "We obsess over pipeline, CAC, and LTV — not impressions. Every channel, campaign, and piece of content is tied back to a revenue outcome.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
  {
    color: "#0891B2",
    stat: "100%", statLabel: "transparent reporting",
    title: "Full-funnel visibility",
    desc: "Live dashboards, weekly reports, and monthly strategy sessions — you always know exactly where your budget is going and what return it is generating.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    color: "#059669",
    stat: "24 / 7", statLabel: "campaign monitoring",
    title: "Always-on optimisation",
    desc: "Algorithms do not sleep and neither does your competition. Our monitoring systems and response protocols keep your campaigns at peak efficiency around the clock.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

const faqs = [
  { q: "How long before we see results from SEO?", a: "Technical SEO improvements and indexing gains typically show within 4–8 weeks. Meaningful organic traffic growth usually compounds from month 3 onwards. We set realistic expectations at the start and report weekly so you track every improvement." },
  { q: "What is a realistic ROAS from paid media?", a: "It depends on your industry, average order value, and current baseline. In our experience, most accounts underperform their potential by 30–50% due to poor targeting, weak creative, or structural issues. We audit first, then project realistic targets before spending a pound." },
  { q: "Do you require a minimum monthly budget?", a: "For paid media management, we typically recommend a minimum ad spend of £3,000/month to generate statistically meaningful test data. For SEO and content retainers, there is no minimum spend — engagements are scoped to your goals." },
  { q: "How do you measure success?", a: "We agree on primary KPIs before we start — typically pipeline generated, CAC, ROAS, or organic traffic. Every engagement has a live dashboard you can access at any time, plus weekly summary emails and monthly strategy reviews." },
  { q: "Can you work alongside our internal marketing team?", a: "Yes — and we prefer it. Our best engagements are collaborative. We bring specialist depth in SEO, paid, and analytics; your team brings brand knowledge and product context. Together, the output is significantly stronger than either working alone." },
];

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function DigitalGrowthPage() {
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
                  <span style={{ fontSize: 12, color: "#2563EB", fontWeight: 600 }}>Digital Growth</span>
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
                    Revenue-Driven Marketing
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 style={{ fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 6 }}>
                  Digital{" "}
                  <motion.span
                    animate={{ color: ["#0F172A", "#2563EB", "#0F172A"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "inline" }}
                  >
                    Growth
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
                    that compounds.
                  </motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.19}>
                <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.82, marginBottom: 42, maxWidth: 490 }}>
                  We build and run full-funnel digital growth engines — SEO, paid media, content, CRO, and marketing automation — that compound traffic, reduce CAC, and turn your marketing spend into predictable, measurable revenue.
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
                    Start Growing
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
                    Free Audit
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 48, borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 28 }}>
                  {[
                    { dot: "#22C55E", text: "320% avg. traffic growth", border: true },
                    { dot: "#2563EB", text: "4× ROAS improvement", border: true },
                    { dot: "#7C3AED", text: "No lock-in contracts", border: false },
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
                  {/* Card header */}
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
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.45)", marginLeft: 6 }}>KeySol Growth Dashboard — Q4</span>
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

                  {/* Chart */}
                  <div style={{ padding: "20px 24px 4px" }}>
                    <GrowthDashboardViz />
                  </div>
                </div>
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

      {/* ══ GROWTH TOOLS STRIP ════════════════════════════════════════ */}
      <GrowthToolsStrip />

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
                Full-funnel growth capabilities
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
                From organic search to paid media and conversion optimisation — we build every layer of your growth stack with the same rigour and revenue focus.
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
                How we build growth<br />
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
                  that actually compounds.
                </motion.span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                A proven 5-phase growth methodology refined across 90+ brand engagements — from challenger startups to category leaders.
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
                  Growth that works across every industry
                </h2>
                <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  We have scaled growth across B2B, SaaS, e-commerce, and regulated industries. Each engagement is unique — but our methodology is battle-tested across every vertical.
                </p>
                <Link href="/contact/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff", borderRadius: 12, padding: "13px 24px",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.4)",
                }}>
                  Discuss your growth goals
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
                We don&apos;t chase vanity metrics.
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
                We drive real revenue.
              </motion.h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Real strategists. Real attribution. Real accountability — from first campaign to compounding organic growth.
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
                { val: "No lock-in", label: "Month-to-month terms" },
                { val: "Weekly reports", label: "Full transparency" },
                { val: "ROI guarantee", label: "Or we keep working" },
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
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>Free growth audit — no obligation</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{ fontSize: "clamp(30px,3.6vw,52px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em" }}>
              Ready to turn your marketing into<br />
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
                a compounding revenue engine?
              </motion.span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Book a free growth audit with one of our senior strategists. We&apos;ll analyse your current channels, identify the highest-leverage gaps, and give you a clear 90-day growth plan — no obligation.
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
                Get My Free Audit
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

/* ══════════════════════════════════════════════════════════
   PROCESS CARD
══════════════════════════════════════════════════════════ */
const stepIcons = [
  <svg key="a" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg key="c" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  <svg key="d" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg key="e" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
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
