"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   COUNTER
───────────────────────────────────────────────────────────── */
function Counter({ target, prefix = "", suffix = "", inView }: { 
  target: number; prefix?: string; suffix?: string; inView: boolean 
}) {
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
  return <>{prefix}{val}{suffix}</>;
}

/* ─────────────────────────────────────────────────────────────
   LIGHTNING BOLT — animated electric strike
───────────────────────────────────────────────────────────── */
function LightningBolt({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.svg
          width="28"
          height="44"
          viewBox="0 0 28 44"
          initial={{ opacity: 0, scale: 0.5, y: -10 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], y: [-10, 0, 0, -5] }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          style={{ 
            position: "absolute", 
            top: 8, 
            right: 12,
            filter: "drop-shadow(0 0 12px #fbbf24) drop-shadow(0 0 24px #f59e0b)",
          }}
        >
          <motion.path
            d="M16 0 L8 20 L14 20 L6 44 L18 24 L12 24 L20 0"
            fill="#fbbf24"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0.8] }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────
   ELECTRIC SPARK — burst effect
───────────────────────────────────────────────────────────── */
function ElectricSpark({ active }: { active: boolean }) {
  const sparks = [
    { x: 0, y: -18, rotate: 0 },
    { x: 12, y: -12, rotate: 45 },
    { x: 18, y: 0, rotate: 90 },
    { x: 12, y: 12, rotate: 135 },
    { x: 0, y: 18, rotate: 180 },
    { x: -12, y: 12, rotate: 225 },
    { x: -18, y: 0, rotate: 270 },
    { x: -12, y: -12, rotate: 315 },
  ];

  return (
    <AnimatePresence>
      {active && sparks.map((spark, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            x: spark.x,
            y: spark.y,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: i * 0.02 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 2,
            height: 6,
            background: "linear-gradient(to bottom, #fef3c7, #f59e0b)",
            borderRadius: 1,
            transform: `rotate(${spark.rotate}deg)`,
            marginLeft: -1,
            marginTop: -3,
          }}
        />
      ))}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────
   GLOWING BORDER — animated gradient
───────────────────────────────────────────────────────────── */
function GlowingBorder({ color, active }: { color: string; active: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: 24,
        padding: 2,
        background: `linear-gradient(90deg, ${color}, #fbbf24, ${color})`,
        backgroundSize: "200% 200%",
        animation: active ? "gradientShift 2s linear infinite" : "none",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAT CARD — Premium with lightning
───────────────────────────────────────────────────────────── */
function StatCard({ value, prefix = "", suffix = "", label, inView, delay, icon, gradient, index }: {
  value: number; prefix?: string; suffix?: string; label: string;
  inView: boolean; delay: number; icon: React.ReactNode; gradient: string; index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const accentColor = gradient.split(',')[1].trim().split(' ')[0];

  return (
    <motion.div
      initial={{ y: 40, scale: 0.95 }}
      animate={inView ? { y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        background: "white",
        borderRadius: 24,
        padding: "44px 36px",
        textAlign: "center",
        boxShadow: isHovered 
          ? `0 20px 60px ${accentColor}30, 0 0 0 1px ${accentColor}20`
          : "0 4px 20px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <GlowingBorder color={accentColor} active={isHovered} />
      <LightningBolt active={isHovered} />

      {/* Pulsing glow */}
      <motion.div
        animate={{ 
          scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1], 
          opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: gradient,
          filter: "blur(30px)",
        }}
      />

      {/* Icon with electric spark */}
      <motion.div
        animate={{ y: isHovered ? -6 : 0, scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        style={{
          position: "relative",
          width: 64,
          height: 64,
          borderRadius: 18,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          boxShadow: isHovered 
            ? `0 15px 40px ${accentColor}60, 0 0 30px ${accentColor}40`
            : `0 10px 30px ${accentColor}40`,
        }}
      >
        <ElectricSpark active={isHovered} />
        {icon}
        
        {/* Inner glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: 6,
            borderRadius: 12,
            background: "rgba(255,255,255,0.25)",
          }}
        />
      </motion.div>

      {/* Number with glow */}
      <motion.div
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        style={{
          fontSize: 48,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: 10,
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <Counter target={value} prefix={prefix} suffix={suffix} inView={inView}/>
      </motion.div>

      <motion.div
        animate={{ letterSpacing: isHovered ? "0.05em" : "0.01em" }}
        transition={{ duration: 0.3 }}
        style={{ fontSize: 14, color: "#64748b", fontWeight: 500, textTransform: "uppercase" }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════════════════════
   MAIN SECTION — Enhanced with lightning
═════════════════════════════════════════════════════════════ */
export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      value: 200, suffix: "+", label: "Projects Delivered",
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7, #6366f1)",
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>)
    },
    { 
      value: 50, suffix: "+", label: "Global Clients",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4, #0ea5e9)",
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>)
    },
    { 
      value: 15, suffix: "+", label: "Countries Served",
      gradient: "linear-gradient(135deg, #10b981, #22c55e, #34d399)",
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>)
    },
    { 
      value: 98, suffix: "%", label: "Client Satisfaction",
      gradient: "linear-gradient(135deg, #f97316, #f59e0b, #fbbf24)",
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>)
    },
  ];

  return (
    <section ref={ref} className="stats-section-pad" style={{
      width: "100%",
      background: "linear-gradient(180deg, #fafafa 0%, #f8fafc 50%, #fafafa 100%)",
      padding: "120px 0",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      
      {/* Background lightning glow */}
      <motion.div
        animate={{ opacity: [0, 0.04, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 7 }}
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 100,
          height: 150,
          background: "linear-gradient(135deg, #fbbf24, transparent)",
          filter: "blur(50px)",
          transform: "rotate(15deg)",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>
        <div className="stats-content-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          
          {/* Left — Content */}
          <div>
            <motion.div
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, type: "spring" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "white",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: 99,
                padding: "10px 20px",
                marginBottom: 28,
                boxShadow: "0 4px 15px rgba(99,102,241,0.1)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0 0 rgba(99,102,241,0.4)", "0 0 0 10px rgba(99,102,241,0)", "0 0 0 0 rgba(99,102,241,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1" }}
              />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#6366f1", textTransform: "uppercase" }}>
                Why KeySol Global
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 30 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              Technology partner to the{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                world&apos;s leading brands
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 17, color: "#475569", lineHeight: 1.8, marginBottom: 18 }}
            >
              For over a decade, we&apos;ve been helping businesses transform their operations 
              through innovative technology solutions. Our team of experts brings deep industry 
              knowledge and technical excellence to every project.
            </motion.p>

            <motion.p
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: 17, color: "#475569", lineHeight: 1.8, marginBottom: 36 }}
            >
              We don&apos;t just deliver projects — we build lasting partnerships that drive 
              continuous growth and innovation across the globe.
            </motion.p>

            <motion.button
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(99,102,241,0.4), 0 15px 40px rgba(99,102,241,0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                color: "white",
                border: "none",
                borderRadius: 14,
                padding: "18px 32px",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                fontFamily: "inherit",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                Explore Our Work
              </motion.span>
              <motion.svg 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                animate={{ x: [0, 6, 0], y: [0, -6, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </motion.svg>
              
              {/* Button shine */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </motion.button>
          </div>

          {/* Right — Stats Grid */}
          <div className="stats-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                gradient={stat.gradient}
                icon={stat.icon}
                inView={inView}
                delay={0.25 + i * 0.1}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
