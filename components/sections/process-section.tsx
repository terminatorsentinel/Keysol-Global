"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Deep Analysis",
    description: "We analyze your business challenges, goals, and existing systems to understand the full picture — uncovering hidden opportunities and key pain points.",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    glow: "rgba(99,102,241,0.3)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategize",
    subtitle: "Precision Planning",
    description: "We design a tailored roadmap with clear milestones, deliverables, and success metrics — ensuring every stakeholder is aligned before a single line of code is written.",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    glow: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Execute",
    subtitle: "Flawless Build",
    description: "Our expert team builds your solution with surgical precision and continuous updates — leveraging cutting-edge technology to deliver beyond your expectations.",
    gradient: "linear-gradient(135deg, #10b981, #22c55e)",
    glow: "rgba(16,185,129,0.3)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimize",
    subtitle: "Continuous Growth",
    description: "We refine, scale, and ensure long-term success — monitoring performance, iterating on data insights, and evolving your platform as your business grows.",
    gradient: "linear-gradient(135deg, #f97316, #f59e0b)",
    glow: "rgba(249,115,22,0.3)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

function LightningBolt({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.svg
          width="20" height="34" viewBox="0 0 20 34"
          initial={{ opacity: 0, scale: 0.5, y: -8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], y: [-8, 0, 0, -4] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          style={{ position: "absolute", top: 8, right: 10, filter: "drop-shadow(0 0 8px #fbbf24)" }}
        >
          <path d="M12 0 L4 16 L10 16 L4 34 L16 18 L10 18 L16 0" fill="#fbbf24" />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="process-section-pad" style={{
      width: "100%",
      background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
      padding: "120px 0",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 80px" }}>
          <motion.div
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "white", border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 99, padding: "10px 20px", marginBottom: 28,
              boxShadow: "0 4px 15px rgba(99,102,241,0.1)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1], boxShadow: ["0 0 0 0 rgba(99,102,241,0.4)", "0 0 0 8px rgba(99,102,241,0)", "0 0 0 0 rgba(99,102,241,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1" }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#6366f1", textTransform: "uppercase" }}>
              Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 30 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            How we deliver{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                background: "linear-gradient(90deg, #6366f1, #3b82f6, #10b981, #6366f1)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              excellence
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 18, color: "#64748b", lineHeight: 1.75 }}
          >
            Our proven four-step methodology ensures every project is delivered on time, on budget, and above expectations.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="process-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>

          {/* Connecting line */}
          <motion.div
            className="process-connector-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 52,
              left: "12.5%",
              width: "75%",
              height: 2,
              background: "linear-gradient(90deg, #6366f1, #3b82f6, #10b981, #f97316)",
              transformOrigin: "left center",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process-step-pad"
              initial={{ y: 50 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, type: "spring", stiffness: 90 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{
                background: "white",
                borderRadius: 24,
                padding: "40px 32px",
                position: "relative",
                zIndex: 1,
                boxShadow: hoveredIndex === i
                  ? `0 24px 60px ${step.glow}, 0 0 0 1px rgba(0,0,0,0.06)`
                  : "0 4px 20px rgba(0,0,0,0.06)",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <LightningBolt active={hoveredIndex === i} />

              {/* Glow blob */}
              <motion.div
                animate={{ scale: hoveredIndex === i ? [1, 1.4, 1] : [1, 1.1, 1], opacity: hoveredIndex === i ? 0.35 : 0.15 }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                style={{
                  position: "absolute", top: -20, left: -20,
                  width: 100, height: 100, borderRadius: "50%",
                  background: step.gradient, filter: "blur(35px)",
                }}
              />

              {/* Animated gradient border on hover */}
              <motion.div
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute", inset: 0, borderRadius: 24, padding: 1.5,
                  background: step.gradient,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor", maskComposite: "exclude",
                }}
              />

              {/* Icon circle */}
              <motion.div
                animate={{ scale: hoveredIndex === i ? 1.08 : 1, y: hoveredIndex === i ? -4 : 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: step.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 28, position: "relative",
                  boxShadow: hoveredIndex === i ? `0 12px 30px ${step.glow}` : `0 6px 20px ${step.glow}`,
                }}
              >
                {step.icon}
                {/* Step number badge */}
                <div style={{
                  position: "absolute", top: -8, right: -8,
                  width: 22, height: 22, borderRadius: "50%",
                  background: "white", border: `2px solid`,
                  borderColor: step.glow,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 800, color: "#0f172a",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}>
                  {i + 1}
                </div>
              </motion.div>

              {/* Big number watermark */}
              <div style={{
                position: "absolute", bottom: 16, right: 20,
                fontSize: 72, fontWeight: 900, lineHeight: 1,
                background: step.gradient,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                opacity: 0.08, userSelect: "none", pointerEvents: "none",
              }}>
                {step.number}
              </div>

              {/* Subtitle */}
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: 8,
                background: step.gradient,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {step.subtitle}
              </div>

              {/* Title */}
              <motion.h3
                animate={{ letterSpacing: hoveredIndex === i ? "-0.02em" : "-0.01em" }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 22, fontWeight: 700, color: "#0f172a",
                  marginBottom: 14, lineHeight: 1.2,
                }}
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
