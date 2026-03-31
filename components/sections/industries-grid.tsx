"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "AI & Automation",
    description: "We empower businesses with next-generation AI — from autonomous agentic solutions and intelligent chatbots to full business process automation — transforming how enterprises operate, scale, and compete.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        <circle cx="9" cy="14" r="1" fill="#374151"/><circle cx="15" cy="14" r="1" fill="#374151"/>
      </svg>
    ),
  },
  {
    title: "Software & Enterprise",
    description: "We architect and build custom software, SaaS platforms, ERP and CRM systems tailored to your exact operations — delivering scalable, high-performance solutions engineered for long-term growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="6 9 9 12 6 15"/><line x1="12" y1="15" x2="17" y2="15"/>
      </svg>
    ),
  },
  {
    title: "Digital Growth",
    description: "We accelerate revenue through data-driven digital strategies — combining SEO, paid advertising, content marketing, and conversion optimization to drive qualified leads and measurable business outcomes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export function IndustriesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{
      width: "100%",
      background: "#ffffff",
      padding: "100px 0 80px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <h2 style={{
            fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 700,
            color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20,
          }}>
            What we deliver
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>
            Orchestrating intelligence, engineering, and growth across AI automation,
            enterprise software, and digital marketing ecosystems.
          </p>
        </motion.div>

        {/* 3-column grid with dividers */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr" }}>

          {services.map((svc, i) => (
            <>
              {/* Card */}
              <motion.div
                key={`card-${i}`}
                initial={{ y: 24, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                style={{
                  padding: "0 48px 48px",
                  textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center",
                }}
              >
                {/* Icon box */}
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  border: "1.5px solid #E5E7EB",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 28, background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}>
                  {svc.icon}
                </div>

                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: "#111827",
                  marginBottom: 16, letterSpacing: "-0.01em",
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontSize: 15, color: "#6B7280", lineHeight: 1.8,
                  maxWidth: 300,
                }}>
                  {svc.description}
                </p>
              </motion.div>

              {/* Vertical divider (except after last) */}
              {i < services.length - 1 && (
                <div key={`divider-${i}`} style={{ background: "#E5E7EB", width: 1, margin: "0 0 48px" }} />
              )}
            </>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <a
            href="/contact/"
            style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              background: "#2563EB",
              color: "white", textDecoration: "none",
              borderRadius: 14, padding: "16px 36px",
              fontSize: 16, fontWeight: 600,
              boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
            }}
          >
            Connect with us
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
