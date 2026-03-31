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
   MARKETPLACE VIZ — Live listing + partner network animation
══════════════════════════════════════════════════════════ */
function MarketplaceViz() {
  const [activeCard, setActiveCard] = useState(0);
  const [liveCount, setLiveCount] = useState(1284);

  useEffect(() => {
    const id = setInterval(() => setActiveCard(c => (c + 1) % 4), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setLiveCount(n => n + Math.floor(Math.random() * 3)), 1800);
    return () => clearInterval(id);
  }, []);

  const listings = [
    { title: "AI Chatbot Suite", cat: "AI & Automation", rating: 4.9, reviews: 312, price: "From £299/mo", badge: "Top Rated", color: "#2563EB" },
    { title: "ERP Integration Layer", cat: "Enterprise Software", rating: 4.8, reviews: 218, price: "From £599/mo", badge: "Verified", color: "#7C3AED" },
    { title: "Growth Analytics Pro", cat: "Data & Analytics", rating: 4.9, reviews: 405, price: "From £149/mo", badge: "New", color: "#059669" },
    { title: "CRM Automation Pack", cat: "Sales & CRM", rating: 4.7, reviews: 189, price: "From £249/mo", badge: "Hot", color: "#D97706" },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Live counter bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.12)",
        borderRadius: 10, padding: "8px 14px", marginBottom: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }}
          />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", letterSpacing: "0.04em" }}>LIVE MARKETPLACE</span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(15,23,42,0.5)" }}>
          <motion.span
            key={liveCount}
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{ display: "inline-block" }}
          >{liveCount.toLocaleString()}</motion.span> solutions listed
        </span>
      </div>

      {/* Listing cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {listings.map((l, i) => (
          <motion.div
            key={i}
            animate={i === activeCard ? {
              background: `linear-gradient(135deg, ${l.color}10, ${l.color}05)`,
              borderColor: `${l.color}40`,
              x: 3,
            } : {
              background: "rgba(255,255,255,0.9)",
              borderColor: "rgba(226,232,240,0.8)",
              x: 0,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              border: "1px solid rgba(226,232,240,0.8)",
              borderRadius: 12, padding: "10px 14px",
              display: "flex", alignItems: "center", gap: 12,
              cursor: "pointer",
            }}
            onClick={() => setActiveCard(i)}
          >
            {/* Icon */}
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: `linear-gradient(135deg, ${l.color}, ${l.color}cc)`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {[
                <svg key="a" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>,
                <svg key="b" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                <svg key="c" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
                <svg key="d" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
              ][i]}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 800, color: "#0F172A" }}>{l.title}</span>
                <div style={{
                  background: i === activeCard ? l.color : "rgba(37,99,235,0.08)",
                  color: i === activeCard ? "#fff" : "#2563EB",
                  borderRadius: 100, padding: "1px 7px",
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0,
                  transition: "background 0.35s, color 0.35s",
                }}>{l.badge}</div>
              </div>
              <div style={{ fontSize: 10.5, color: "rgba(15,23,42,0.45)", fontWeight: 500 }}>{l.cat}</div>
            </div>

            {/* Rating */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#D97706" }}>★ {l.rating}</div>
              <div style={{ fontSize: 9.5, color: "rgba(15,23,42,0.4)", fontWeight: 500 }}>{l.reviews} reviews</div>
            </div>

            {/* Price */}
            <div style={{
              background: i === activeCard ? `${l.color}15` : "#F8FAFF",
              border: `1px solid ${i === activeCard ? l.color + "30" : "rgba(37,99,235,0.08)"}`,
              borderRadius: 8, padding: "5px 10px", flexShrink: 0, textAlign: "center",
              transition: "background 0.35s, border 0.35s",
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: i === activeCard ? l.color : "#374151", whiteSpace: "nowrap" }}>{l.price}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[
          { val: "500+", label: "Verified Partners", color: "#2563EB", icon: "🤝" },
          { val: "14", label: "Categories", color: "#7C3AED", icon: "🗂️" },
          { val: "99%", label: "Uptime SLA", color: "#059669", icon: "✅" },
        ].map((m, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.9)",
            border: `1px solid ${m.color}20`,
            borderRadius: 12, padding: "10px 12px",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: `${m.color}12`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
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
  "🛒 1,200+ verified technology solutions in one marketplace",
  "🤝 Connect with certified partners across 14+ industries",
  "🔒 Every vendor independently verified & background-checked",
  "⚡ Deploy pre-integrated solutions in days, not months",
  "💡 AI-powered matchmaking — find the right partner fast",
  "📊 Side-by-side vendor comparison with real user reviews",
  "🌍 Global partner network across 40+ countries",
  "🚀 From discovery to contract — fully managed procurement",
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
   ROI CALCULATOR
══════════════════════════════════════════════════════════ */
function ROICalculator() {
  const [solutions, setSolutions] = useState(3);
  const [procurementDays, setProcurementDays] = useState(60);
  const [teamSize, setTeamSize] = useState(20);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const dayRate = 650;
  const procurementSavingDays = procurementDays * 0.75;
  const procurementSaving = procurementSavingDays * dayRate * solutions;
  const teamTimeSaving = teamSize * 8 * 52 * 0.12 * (dayRate / 5);
  const totalAnnual = Math.round(procurementSaving + teamTimeSaving);
  const roi = Math.round((totalAnnual / 5000) * 100);

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
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.14em", textTransform: "uppercase" }}>Procurement Savings Calculator</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 900, color: "#0F172A",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
            }}>
              How much is slow vendor procurement{" "}
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
              Adjust the sliders to estimate your annual savings from faster, marketplace-driven vendor procurement.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { label: "Technology solutions procured per year", value: solutions, min: 1, max: 20, step: 1, set: setSolutions, suffix: "", prefix: "", color: "#2563EB" },
                { label: "Current avg. procurement cycle (days)", value: procurementDays, min: 10, max: 180, step: 5, set: setProcurementDays, suffix: "d", prefix: "", color: "#7C3AED" },
                { label: "Team members involved in procurement", value: teamSize, min: 2, max: 100, step: 2, set: setTeamSize, suffix: "", prefix: "", color: "#059669" },
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
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Estimated annual procurement saving</div>
                <motion.div
                  key={totalAnnual}
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
                  £{Math.round(totalAnnual / 1000)}k
                </motion.div>
                <div style={{ fontSize: 13, color: "rgba(15,23,42,0.4)", marginTop: 8, fontWeight: 500 }}>per year</div>
              </div>

              <div style={{ height: 1, background: "rgba(37,99,235,0.08)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { label: "Time saved per procurement cycle (75%)", value: `${Math.round(procurementDays * 0.75)}d saved`, color: "#059669" },
                  { label: "Procurement cost saving (all solutions)", value: `£${Math.round(procurementSaving / 1000)}k`, color: "#2563EB" },
                  { label: "Team productivity recaptured", value: `£${Math.round(teamTimeSaving / 1000)}k`, color: "#7C3AED" },
                  { label: "Marketplace platform ROI", value: `${roi}%`, color: "#D97706" },
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
                Get free access to the Marketplace
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <p style={{ fontSize: 11, color: "rgba(15,23,42,0.35)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                Based on median procurement outcomes across 200+ enterprise clients. Actual results vary.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   CATEGORY STRIP MARQUEE
══════════════════════════════════════════════════════════ */
const CATEGORIES = [
  { name: "AI & Automation", color: "#2563EB" },
  { name: "ERP & CRM", color: "#7C3AED" },
  { name: "Cloud Infrastructure", color: "#0891B2" },
  { name: "Cybersecurity", color: "#DC2626" },
  { name: "Data & Analytics", color: "#059669" },
  { name: "Digital Marketing", color: "#D97706" },
  { name: "Custom Software", color: "#2563EB" },
  { name: "IoT & Hardware", color: "#7C3AED" },
  { name: "Payments & FinTech", color: "#0891B2" },
  { name: "HR & People Tech", color: "#059669" },
  { name: "Compliance & Legal", color: "#DC2626" },
  { name: "Supply Chain", color: "#D97706" },
];

function CategoryStrip() {
  const doubled = [...CATEGORIES, ...CATEGORIES];
  return (
    <div style={{ padding: "56px 0", background: "#fff", overflow: "hidden", borderTop: "1px solid rgba(37,99,235,0.06)", borderBottom: "1px solid rgba(37,99,235,0.06)" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(15,23,42,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          14 Solution Categories Available
        </span>
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((cat, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 28px", marginRight: 8, borderRadius: 12,
            background: "rgba(248,250,255,0.8)", border: "1.5px solid rgba(37,99,235,0.08)",
            whiteSpace: "nowrap",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", letterSpacing: "-0.01em" }}>{cat.name}</span>
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
    metric: "75%", label: "faster vendor selection",
    quote: "We used to spend 3 months evaluating CRM vendors. Through KeySol Marketplace we found, evaluated, and onboarded in under 3 weeks. The verified reviews and comparison tools are exceptional.",
    name: "VP Operations, FinTech Scale-up",
    color: "#2563EB",
  },
  {
    metric: "£420k", label: "procurement cost avoided",
    quote: "The AI-matching tool surfaced an ERP integration partner we never would have found through traditional channels. The savings versus our previous vendor were immediate and significant.",
    name: "CTO, Manufacturing Group",
    color: "#7C3AED",
  },
  {
    metric: "4.9★", label: "average partner rating",
    quote: "We've procured 6 different technology solutions through the marketplace over 18 months. Every single partner has been exactly what their profile promised. The vetting is genuinely rigorous.",
    name: "Head of Technology, NHS Trust",
    color: "#059669",
  },
  {
    metric: "2×", label: "implementation speed",
    quote: "The pre-integration layer meant our new analytics stack connected to our existing systems twice as fast. What was a 6-month project was delivered in under 3 months.",
    name: "Chief Data Officer, Retailer",
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
            <span style={{ fontSize: 11, fontWeight: 700, color: "#059669", letterSpacing: "0.1em", textTransform: "uppercase" }}>Partner Stories</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
            Procurement that actually works
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
                }}>{["💳","⚙️","🏥","🛍️"][i]}</div>
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
    title: "AI-Powered Vendor Matching",
    desc: "Our intelligent matching engine analyses your requirements, budget, and existing tech stack to surface the most compatible vendors — cutting discovery time by up to 80%.",
    tag: "Most Popular",
  },
  {
    gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)",
    glow: "rgba(124,58,237,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Verified Partner Network",
    desc: "Every solution provider is independently verified — covering financial health, technical capability, security posture, and reference checks before listing on the platform.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#0891B2,#0E7490)",
    glow: "rgba(8,145,178,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    title: "Managed Procurement",
    desc: "From shortlist to signed contract — we manage the entire procurement workflow including RFP distribution, evaluation scoring, negotiation support, and contract review.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#059669,#047857)",
    glow: "rgba(5,150,105,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Side-by-Side Comparison",
    desc: "Standardised vendor scorecards, real user reviews, pricing breakdowns, and integration compatibility matrices — everything you need to make a confident decision.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#D97706,#B45309)",
    glow: "rgba(217,119,6,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "Pre-Built Integrations",
    desc: "Hundreds of pre-built connectors between listed solutions mean faster deployment — no bespoke integration work, no long implementation timelines.",
    tag: "",
  },
  {
    gradient: "linear-gradient(135deg,#DC2626,#B91C1C)",
    glow: "rgba(220,38,38,0.3)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Partner Success Management",
    desc: "A dedicated partner success manager oversees every relationship post-contract — ensuring implementations stay on track and performance commitments are met.",
    tag: "",
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "Listed solutions", sub: "across 14 categories" },
  { value: 500,  suffix: "+", label: "Verified partners", sub: "globally vetted" },
  { value: 75,   suffix: "%", label: "Faster procurement", sub: "vs. traditional RFP" },
  { value: 98,   suffix: "%", label: "Client satisfaction", sub: "post-placement" },
];

const processSteps = [
  {
    num: "01", color: "#2563EB", bg: "rgba(37,99,235,0.12)",
    title: "Define Requirements",
    desc: "Tell us your use case, budget, and existing stack. Our AI intake form captures everything needed to power precise matching in minutes — no lengthy briefing documents.",
  },
  {
    num: "02", color: "#7C3AED", bg: "rgba(124,58,237,0.12)",
    title: "AI Matching",
    desc: "Our matching engine cross-references 140+ compatibility signals to surface the top 3–5 vendors perfectly suited to your requirements — ranked by fit score.",
  },
  {
    num: "03", color: "#0891B2", bg: "rgba(8,145,178,0.12)",
    title: "Evaluate & Compare",
    desc: "Side-by-side scorecards, live demos, reference calls with similar clients, and detailed pricing breakdowns — everything you need to choose with confidence.",
  },
  {
    num: "04", color: "#059669", bg: "rgba(5,150,105,0.12)",
    title: "Negotiate & Contract",
    desc: "Our procurement specialists negotiate on your behalf — ensuring you get the best commercial terms, SLAs, and contractual protections before you sign anything.",
  },
  {
    num: "05", color: "#D97706", bg: "rgba(217,119,6,0.12)",
    title: "Deploy & Succeed",
    desc: "Post-contract onboarding support, integration assistance, and ongoing partner success management — we stay involved until you're live and performing.",
  },
];

const useCases = [
  {
    industry: "Financial Services",
    icon: "🏦",
    color: "#2563EB",
    items: ["Compliance & RegTech solutions", "Core banking platform vendors", "Risk & fraud analytics tools"],
  },
  {
    industry: "Healthcare",
    icon: "🏥",
    color: "#059669",
    items: ["Clinical system suppliers", "Patient data & interoperability", "Digital health & telehealth platforms"],
  },
  {
    industry: "Retail & E-commerce",
    icon: "🛍️",
    color: "#7C3AED",
    items: ["OMS & fulfilment platforms", "Customer data & personalisation", "Loyalty & retention solutions"],
  },
  {
    industry: "Manufacturing",
    icon: "⚙️",
    color: "#D97706",
    items: ["ERP & MES vendors", "IoT & connected factory tools", "Supply chain optimisation platforms"],
  },
  {
    industry: "Professional Services",
    icon: "⚖️",
    color: "#0891B2",
    items: ["Practice management software", "Document & matter management", "Client portal & collaboration tools"],
  },
  {
    industry: "Public Sector",
    icon: "🏛️",
    color: "#DC2626",
    items: ["G-Cloud compliant solutions", "Digital citizen service platforms", "Data residency & security tools"],
  },
];

const reasons = [
  {
    color: "#2563EB",
    stat: "1,200+", statLabel: "solutions listed",
    title: "The largest vetted marketplace",
    desc: "More verified solutions in one place than any other enterprise technology marketplace in the UK — across every category your business needs.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    color: "#7C3AED",
    stat: "100%", statLabel: "vendor-verified",
    title: "No unvetted listings",
    desc: "Every partner on the platform has passed our 14-point verification process. You will never discover a reputation problem after the contract is signed.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    color: "#0891B2",
    stat: "75%", statLabel: "faster procurement",
    title: "From brief to contract in weeks",
    desc: "Our structured process and AI matching compress a typical 60–90 day procurement cycle down to 2–3 weeks — without sacrificing due diligence.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    color: "#059669",
    stat: "£0", statLabel: "cost to buyers",
    title: "Always free for buyers",
    desc: "The marketplace is completely free to use for procurement teams. Vendors fund the platform — so your interests and ours are always perfectly aligned.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
];

const faqs = [
  { q: "Is the marketplace really free for buyers?", a: "Yes — 100% free. Buyers pay nothing to use the platform, access vendor profiles, request demos, or get matching recommendations. Solution providers fund their listings, which means our incentives are always aligned with helping you find the best solution." },
  { q: "How are vendors verified on the platform?", a: "Every vendor passes a 14-point verification process including financial health checks, security questionnaires, reference validation, and technical capability assessment. Verification is renewed annually. Any vendor that fails renewal is immediately suspended from the platform." },
  { q: "How long does the matching process take?", a: "Most buyers receive a curated shortlist within 24–48 hours of submitting their requirements. Complex enterprise searches may take up to 5 business days. Our AI matching runs continuously in the background and alerts you as new matching solutions are listed." },
  { q: "Can you help with contract negotiations?", a: "Absolutely. Our managed procurement service includes commercial negotiation, SLA review, and contract structuring support. We have specialist procurement advisors who handle hundreds of contracts annually and know exactly where to push back on vendor standard terms." },
  { q: "What if a listed solution doesn't perform as promised?", a: "All listed vendors are held to their marketplace profile commitments. If a solution significantly underperforms against its stated capabilities, our partner success team intervenes directly — including commercial remedies, transitions to alternative vendors, or escalation to the vendor's leadership." },
];

/* ══════════════════════════════════════════════════════════
   PROCESS CARD
══════════════════════════════════════════════════════════ */
const stepIcons = [
  <svg key="a" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="c" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  <svg key="d" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  <svg key="e" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
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
export default function MarketplacePage() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif", background: "#fff", overflowX: "hidden" }}>

      {/* ══ TICKER ═══════════════════════════════════════════════════ */}
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
                  <span style={{ fontSize: 12, color: "#60A5FA", fontWeight: 600 }}>Marketplace</span>
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
                    Verified Technology Marketplace
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 style={{
                  fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900,
                  color: "#0F172A", lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 6,
                }}>
                  Find &amp;{" "}
                  <motion.span
                    animate={{ color: ["#0F172A", "#2563EB", "#0F172A"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "inline" }}
                  >
                    deploy
                  </motion.span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.14}>
                <h1 style={{
                  fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900,
                  lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 32,
                  display: "inline-block",
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
                    the right solution.
                  </motion.span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.19}>
                <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.82, marginBottom: 42, maxWidth: 490 }}>
                  The UK&apos;s most comprehensive marketplace of independently verified technology solutions. 1,200+ solutions across 14 categories — matched to your exact requirements by AI and procured in weeks, not months.
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
                    Find My Solution
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
                    List Your Solution
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 0, marginTop: 48,
                  borderTop: "1px solid rgba(15,23,42,0.08)", paddingTop: 28,
                }}>
                  {[
                    { dot: "#22C55E", text: "Always free for buyers", border: true },
                    { dot: "#2563EB", text: "1,200+ solutions", border: true },
                    { dot: "#7C3AED", text: "Verified partners only", border: false },
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

            {/* RIGHT — Marketplace VIZ */}
            <FadeUp delay={0.22}>
              <div style={{ position: "relative", paddingTop: 48, paddingBottom: 80, paddingLeft: 32 }}>
                <div style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(37,99,235,0.12)",
                  borderRadius: 28, overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}>
                  {/* Header */}
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
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.45)", marginLeft: 6 }}>KeySol Marketplace — Live</span>
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

                  <div style={{ padding: "20px 20px 16px" }}>
                    <MarketplaceViz />
                  </div>
                </div>

                {/* Floating badge: New Listings */}
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
                  <div style={{ fontSize: 9.5, fontWeight: 800, color: "rgba(15,23,42,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Top Categories</div>
                  {[
                    { name: "AI & Automation", count: 284, color: "#2563EB" },
                    { name: "ERP & CRM", count: 196, color: "#7C3AED" },
                    { name: "Data & Analytics", count: 158, color: "#059669" },
                  ].map(item => (
                    <div key={item.name} style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(15,23,42,0.7)" }}>{item.name}</span>
                        <span style={{ fontSize: 11, fontWeight: 800, color: item.color }}>{item.count}</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 4, background: "rgba(37,99,235,0.08)" }}>
                        <div style={{ height: "100%", width: `${(item.count / 284) * 100}%`, borderRadius: 4, background: `linear-gradient(90deg, ${item.color}, ${item.color}55)` }} />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Floating badge: Partners */}
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
                  500+ Verified Partners Online
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

      {/* ══ CATEGORY STRIP ════════════════════════════════════════════ */}
      <CategoryStrip />

      {/* ══ CAPABILITIES ══════════════════════════════════════════════ */}
      <section style={{ padding: "108px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EFF6FF", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Platform Features</span>
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 18 }}>
                Everything you need to procure with confidence
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
                From AI-powered matching to managed contracts — the Marketplace removes every friction point in enterprise technology procurement.
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
          background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

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
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.14em", textTransform: "uppercase" }}>How It Works</span>
              </div>
              <h2 style={{ fontSize: "clamp(34px,3.8vw,58px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.035em", lineHeight: 1.08, marginBottom: 20 }}>
                From brief to deployed<br />
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
                  in five simple steps.
                </motion.span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                A structured procurement journey — from initial requirements to live deployment — managed end-to-end by our marketplace platform and expert team.
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
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>By Industry</span>
                </div>
                <h2 style={{ fontSize: "clamp(28px,2.8vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 20 }}>
                  Solutions for every sector
                </h2>
                <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  Whether you&apos;re in regulated financial services, complex manufacturing, or fast-moving SaaS — we have vetted vendors who understand your industry, compliance context, and technical requirements.
                </p>
                <Link href="/contact/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff", borderRadius: 12, padding: "13px 24px",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.4)",
                }}>
                  Browse my sector
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

      {/* ══ RESULTS ═══════════════════════════════════════════════════ */}
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
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.14em", textTransform: "uppercase" }}>Why KeySol Marketplace</span>
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.6vw,54px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                Not a directory.
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
                A managed procurement platform.
              </motion.h2>
              <p style={{ fontSize: 16, color: "rgba(15,23,42,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                End-to-end support — from requirements through to live deployment — with expert procurement advisors at every stage.
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
                { val: "Free for buyers", label: "Zero cost to procure" },
                { val: "100% verified", label: "No unvetted vendors" },
                { val: "NDA protected", label: "Full confidentiality" },
                { val: "End-to-end", label: "Brief to deployment" },
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
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
              borderRadius: 100, padding: "8px 18px", marginBottom: 28,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>Free to use — no credit card required</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 style={{ fontSize: "clamp(30px,3.6vw,52px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em" }}>
              Ready to find your next<br />
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
                technology partner?
              </motion.span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p style={{ fontSize: 17, color: "rgba(15,23,42,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Tell us what you need and our AI matching engine will surface the top verified vendors for your use case in 24 hours — completely free, no obligation.
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
                Find My Solution — Free
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/contact/" style={{
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
                List Your Solution
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 52 }}>
              {[
                { icon: "🔒", text: "No commitment required" },
                { icon: "⚡", text: "Matched within 24 hours" },
                { icon: "✅", text: "All vendors verified" },
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
