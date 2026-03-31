"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "AI & Automation",
    subtitle: "Intelligent Systems",
    tagline: "The future of enterprise operations",
    description: "We empower businesses with next-generation AI — from autonomous agentic solutions and intelligent chatbots to full business process automation — transforming how enterprises operate, scale, and compete.",
    features: ["Agentic AI Solutions", "AI Chatbots & Assistants", "AI Call Agents", "Business Process Automation", "AI Integrations"],
    href: "/services/ai-automation/",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
    gradientText: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
    glow: "rgba(99,102,241,0.35)",
    softBg: "rgba(99,102,241,0.05)",
    accentColor: "#6366f1",
    sparkColor: "#a78bfa",
    stat: { value: "10×", label: "Faster Operations" },
    icon: (color: string) => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        <circle cx="9" cy="14" r="1" fill={color}/><circle cx="15" cy="14" r="1" fill={color}/>
      </svg>
    ),
  },
  {
    title: "Software & Enterprise",
    subtitle: "Custom Engineering",
    tagline: "Precision-built for your scale",
    description: "We architect and build custom software, SaaS platforms, ERP and CRM systems tailored to your exact operations — delivering scalable, high-performance solutions engineered for long-term growth.",
    features: ["Custom Software Development", "SaaS Platforms", "ERP & CRM Systems", "Web Applications & APIs", "Legacy Modernization"],
    href: "/services/software-engineering/",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #4f46e5 100%)",
    gradientText: "linear-gradient(90deg, #0ea5e9, #2563eb, #4f46e5)",
    glow: "rgba(37,99,235,0.35)",
    softBg: "rgba(37,99,235,0.05)",
    accentColor: "#2563eb",
    sparkColor: "#60a5fa",
    stat: { value: "99%", label: "Uptime Guaranteed" },
    icon: (color: string) => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="6 9 9 12 6 15"/><line x1="12" y1="15" x2="17" y2="15"/>
      </svg>
    ),
  },
  {
    title: "Digital Growth",
    subtitle: "Marketing & Scale",
    tagline: "Revenue through intelligent strategy",
    description: "We accelerate revenue through data-driven digital strategies — combining SEO, paid advertising, content marketing, and conversion optimization to drive qualified leads and measurable business outcomes.",
    features: ["SEO, AEO & GEO", "Paid Advertising", "Content Marketing", "Social Media Growth", "Conversion Optimization"],
    href: "/services/digital-growth/",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    gradientText: "linear-gradient(90deg, #10b981, #059669, #047857)",
    glow: "rgba(16,185,129,0.35)",
    softBg: "rgba(16,185,129,0.05)",
    accentColor: "#10b981",
    sparkColor: "#34d399",
    stat: { value: "3×", label: "Lead Generation" },
    icon: (color: string) => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

/* ── Multiple lightning bolts ── */
function LightningCluster({ active, color }: { active: boolean; color: string }) {
  const config = [
    { top: 10, right: 16, delay: 0, size: 1.0 },
    { top: 7,  right: 38, delay: 0.07, size: 0.65 },
    { top: 16, right: 26, delay: 0.14, size: 0.45 },
  ];
  return (
    <AnimatePresence>
      {active && config.map((c, i) => (
        <motion.svg
          key={i}
          width={Math.round(16 * c.size)} height={Math.round(28 * c.size)}
          viewBox="0 0 16 28"
          initial={{ scale: 0.2, rotate: -10 }}
          animate={{
            scale: [0.2, c.size * 1.4, c.size, c.size * 0.9],
            rotate: [-10, 5, 0, 0],
          }}
          transition={{ duration: 0.5, delay: c.delay, repeat: Infinity, repeatDelay: 2.2 }}
          style={{
            position: "absolute", top: c.top, right: c.right, zIndex: 20,
            filter: `drop-shadow(0 0 6px #fbbf24) drop-shadow(0 0 14px ${color})`,
          }}
        >
          <path d="M9 0 L2 13 L7 13 L2 28 L14 12 L8 12 L13 0" fill="#fbbf24"/>
        </motion.svg>
      ))}
    </AnimatePresence>
  );
}

/* ── Radial spark burst ── */
function SparkRing({ active, color }: { active: boolean; color: string }) {
  return (
    <AnimatePresence>
      {active && Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * 360) / 10;
        const dist = 28;
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: [0, Math.cos((angle * Math.PI) / 180) * dist],
              y: [0, Math.sin((angle * Math.PI) / 180) * dist],
            }}
            transition={{ duration: 0.55, delay: i * 0.02, repeat: Infinity, repeatDelay: 2.2 }}
            style={{
              position: "absolute", top: 18, right: 24,
              width: 3, height: 8, borderRadius: 2,
              background: `linear-gradient(to bottom, #fef9c3, ${color})`,
              rotate: `${angle}deg`,
              zIndex: 19, pointerEvents: "none",
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}

/* ── Floating stat chip ── */
function StatChip({ value, label, gradient, active }: { value: string; label: string; gradient: string; active: boolean }) {
  return (
    <motion.div
      animate={{ y: active ? [0, -6, 0] : 0, scale: active ? 1.05 : 1 }}
      transition={{ duration: 2, repeat: active ? Infinity : 0 }}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "white",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 99, padding: "8px 16px",
        boxShadow: active ? "0 8px 24px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: 28,
      }}
    >
      <span style={{
        fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em",
        background: gradient, WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>{value}</span>
      <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{label}</span>
    </motion.div>
  );
}

export function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} style={{
      width: "100%",
      background: "linear-gradient(180deg, #f1f5f9 0%, #ffffff 20%, #f8fafc 80%, #f1f5f9 100%)",
      padding: "130px 0 120px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      position: "relative", overflow: "hidden",
    }}>

      {/* Fine dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)",
        backgroundSize: "36px 36px", pointerEvents: "none",
      }} />

      {/* Large ambient orbs */}
      {[
        { x: "-8%", y: "0%", c: "rgba(99,102,241,0.07)", s: 600, d: 7 },
        { x: "60%",  y: "50%", c: "rgba(37,99,235,0.05)", s: 500, d: 9 },
        { x: "85%",  y: "5%",  c: "rgba(16,185,129,0.06)", s: 450, d: 8 },
      ].map((o, i) => (
        <motion.div key={i}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: o.d, repeat: Infinity, delay: i * 2 }}
          style={{
            position: "absolute", left: o.x, top: o.y,
            width: o.s, height: o.s, borderRadius: "50%",
            background: `radial-gradient(circle, ${o.c}, transparent 70%)`,
            pointerEvents: "none", transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Ambient side lightning */}
      {[{ x: "3%", delay: 0 }, { x: "97%", delay: 3.5 }].map((l, i) => (
        <motion.svg key={i} width="3" height="150" viewBox="0 0 3 150"
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 5 + i * 3, delay: l.delay }}
          style={{
            position: "absolute", top: "15%", left: l.x,
            filter: "drop-shadow(0 0 10px rgba(251,191,36,0.9))",
            pointerEvents: "none", zIndex: 1,
          }}
        >
          <path d="M1.5 0 L0 45 L2.5 45 L0.5 95 L3 95 L1 150"
            stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </motion.svg>
      ))}

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 100px" }}>

          <motion.div
            initial={{ y: 20 }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "white", border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: 99, padding: "10px 22px", marginBottom: 30,
              boxShadow: "0 4px 20px rgba(99,102,241,0.12)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.6, 1], boxShadow: ["0 0 0 0 rgba(99,102,241,0.6)", "0 0 0 10px rgba(99,102,241,0)", "0 0 0 0 rgba(99,102,241,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1" }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#6366f1", textTransform: "uppercase" }}>
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 30 }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "clamp(42px, 5.5vw, 68px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}
          >
            What we{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "300% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                background: "linear-gradient(90deg, #6366f1, #3b82f6, #10b981, #f59e0b, #ef4444, #6366f1)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              deliver
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ y: 20 }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 19, color: "#64748b", lineHeight: 1.8, maxWidth: 640, margin: "0 auto" }}
          >
            Orchestrating intelligence, engineering, and growth across AI automation,
            enterprise software, and digital marketing ecosystems.
          </motion.p>
        </div>

        {/* ── CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ y: 70, scale: 0.92 }}
              animate={inView ? { y: 0, scale: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.2 + i * 0.14, type: "spring", stiffness: 80 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -14, transition: { type: "spring", stiffness: 250, damping: 20 } }}
              style={{
                background: hovered === i ? svc.softBg : "white",
                borderRadius: 32,
                padding: "48px 42px 44px",
                position: "relative", overflow: "hidden",
                boxShadow: hovered === i
                  ? `0 40px 90px ${svc.glow}, 0 0 0 2px ${svc.accentColor}40`
                  : "0 4px 30px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                cursor: "pointer",
                transition: "background 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              {/* Lightning + sparks */}
              <LightningCluster active={hovered === i} color={svc.sparkColor} />
              <SparkRing active={hovered === i} color={svc.sparkColor} />

              {/* Animated gradient border */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: "absolute", inset: 0, borderRadius: 32, padding: 2,
                  background: `linear-gradient(135deg, ${svc.accentColor}, #fbbf24, ${svc.accentColor})`,
                  backgroundSize: "200% 200%",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor", maskComposite: "exclude",
                  animation: hovered === i ? "rotateBorder 3s linear infinite" : "none",
                }}
              />
              <style>{`@keyframes rotateBorder { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }`}</style>

              {/* Top glow orb */}
              <motion.div
                animate={{ scale: hovered === i ? [1, 1.5, 1] : [1, 1.15, 1], opacity: hovered === i ? [0.3, 0.55, 0.3] : [0.1, 0.18, 0.1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  position: "absolute", top: -50, right: -50,
                  width: 220, height: 220, borderRadius: "50%",
                  background: svc.gradient, filter: "blur(65px)", pointerEvents: "none",
                }}
              />

              {/* Bottom glow on hover */}
              <motion.div
                animate={{ opacity: hovered === i ? 0.25 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute", bottom: -30, left: -30,
                  width: 180, height: 180, borderRadius: "50%",
                  background: svc.gradient, filter: "blur(55px)", pointerEvents: "none",
                }}
              />

              {/* Stat chip */}
              <StatChip value={svc.stat.value} label={svc.stat.label} gradient={svc.gradientText} active={hovered === i} />

              {/* Icon */}
              <motion.div
                animate={{
                  y: hovered === i ? -10 : 0,
                  scale: hovered === i ? 1.08 : 1,
                  boxShadow: hovered === i
                    ? `0 20px 50px ${svc.glow}, 0 0 0 4px ${svc.accentColor}18`
                    : `0 6px 18px ${svc.glow.replace("0.35", "0.2")}`,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{
                  width: 76, height: 76, borderRadius: 22,
                  background: hovered === i ? svc.gradient : "white",
                  border: `1.5px solid ${svc.accentColor}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 28, position: "relative",
                  transition: "background 0.35s ease",
                }}
              >
                {hovered === i && (
                  <motion.div
                    animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.75, 1.05, 0.75] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ position: "absolute", inset: 8, borderRadius: 14, background: "rgba(255,255,255,0.3)" }}
                  />
                )}
                <div style={{ position: "relative", zIndex: 1 }}>
                  {hovered === i ? svc.icon("white") : svc.icon(svc.accentColor)}
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                animate={{ letterSpacing: hovered === i ? "0.14em" : "0.09em" }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 10, fontWeight: 800, textTransform: "uppercase", marginBottom: 8,
                  background: svc.gradient, WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                {svc.subtitle}
              </motion.div>

              <motion.h3
                animate={{ letterSpacing: hovered === i ? "-0.035em" : "-0.025em" }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 8, lineHeight: 1.15 }}
              >
                {svc.title}
              </motion.h3>

              <div style={{
                fontSize: 13, fontStyle: "italic", marginBottom: 14,
                background: svc.gradientText, WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", backgroundClip: "text",
                fontWeight: 500,
              }}>
                {svc.tagline}
              </div>

              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 28 }}>
                {svc.description}
              </p>

              {/* Animated gradient divider */}
              <motion.div
                animate={{ scaleX: hovered === i ? 1 : 0.35, opacity: hovered === i ? 1 : 0.5 }}
                transition={{ duration: 0.45 }}
                style={{
                  height: 2, borderRadius: 2, background: svc.gradient,
                  marginBottom: 24, transformOrigin: "left",
                  boxShadow: hovered === i ? `0 0 12px ${svc.accentColor}60` : "none",
                  transition: "box-shadow 0.4s ease",
                }}
              />

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {svc.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ x: -14 }}
                    animate={inView ? { x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.1 + j * 0.05 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#1e293b", fontWeight: 500 }}
                  >
                    <motion.div
                      animate={{
                        scale: hovered === i ? [1, 1.7, 1] : 1,
                        boxShadow: hovered === i ? [`0 0 0 0 ${svc.accentColor}70`, `0 0 0 6px ${svc.accentColor}00`] : "none",
                      }}
                      transition={{ duration: 0.5, delay: j * 0.08 }}
                      style={{ width: 8, height: 8, borderRadius: "50%", background: svc.gradient, flexShrink: 0 }}
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* Learn more */}
              <motion.a
                href={svc.href}
                animate={{ x: hovered === i ? 6 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  marginTop: 32, fontSize: 14, fontWeight: 700,
                  background: svc.gradientText, WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", backgroundClip: "text", textDecoration: "none",
                }}
              >
                Explore service
                <motion.svg
                  animate={{ x: hovered === i ? 4 : 0, y: hovered === i ? -4 : 0 }}
                  transition={{ duration: 0.3 }}
                  width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke={svc.accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </motion.svg>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ y: 30 }} animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{ textAlign: "center", marginTop: 72 }}
        >
          <motion.a
            href="/contact/"
            whileHover={{ scale: 1.06, boxShadow: "0 0 70px rgba(37,99,235,0.55), 0 28px 70px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 16,
              background: "linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #3b82f6 80%, #60a5fa 100%)",
              color: "white", textDecoration: "none",
              borderRadius: 20, padding: "22px 52px",
              fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em",
              boxShadow: "0 12px 50px rgba(37,99,235,0.4)",
              fontFamily: "inherit", position: "relative", overflow: "hidden",
            }}
          >
            {/* Sweep shine */}
            <motion.div
              animate={{ x: ["-120%", "250%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
              style={{
                position: "absolute", top: 0, left: 0, width: "35%", height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
            {/* Inline lightning */}
            <motion.svg
              animate={{ scale: [0.6, 1.2, 0.6] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
              width="14" height="22" viewBox="0 0 14 22"
              style={{ filter: "drop-shadow(0 0 5px #fef08a)", flexShrink: 0 }}
            >
              <path d="M8 0 L1 11 L6 11 L1 22 L13 9 L7 9 L12 0" fill="#fef9c3"/>
            </motion.svg>
            <span>Connect with us</span>
            <motion.div
              animate={{ rotate: [0, 45, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
              style={{
                width: 42, height: 42, borderRadius: 14,
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
