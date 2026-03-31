"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    headline: "InnovateCorp transforms operations with KeySol Global's AI automation suite",
    quote: "We've been building enterprise software for decades, but partnering with KeySol Global was a turning point. Their AI automation solutions gave us capabilities we couldn't have built in-house in years. The implementation was seamless and the results were immediate — a 40% increase in operational efficiency within just three months of going live.",
    name: "James Morrison",
    title: "Chief Technology Officer at Accenture",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=face",
  },
  {
    headline: "GlobalTech scales across 15 markets using KeySol Global's enterprise platform",
    quote: "Scaling a business across multiple countries is incredibly complex — different regulations, languages, workflows. KeySol Global understood our challenges from day one and built a platform that adapts to every market we operate in. They don't just deliver software, they deliver outcomes. I can say with confidence that they are the best technology partner we've ever had.",
    name: "David Reynolds",
    title: "Chief Executive Officer at Deloitte Digital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
  },
  {
    headline: "KeySol Global partners with TechVentures to power its new era of digital transformation",
    quote: "At TechVentures, we decided it was time to create an end-to-end AI-powered operations system for our enterprise clients, and it was important to create something more than a simple automation tool. Our partnership with KeySol Global has enabled us not only to catch up with industry leaders, but also to set new benchmarks in enterprise AI, which traditional vendors in the industry could not provide.",
    name: "Sarah Chen",
    title: "Chief Operating Officer at McKinsey & Company",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&crop=face",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto cycle
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section style={{
      width: "100%",
      background: "linear-gradient(160deg, #e8f4fb 0%, #f0f9ff 40%, #e8f6fb 70%, #eaf7f5 100%)",
      padding: "80px 0 100px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Vertical line pattern — left */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "45%",
        height: "100%",
        backgroundImage: "repeating-linear-gradient(90deg, rgba(180,220,240,0.35) 0px, rgba(180,220,240,0.35) 1px, transparent 1px, transparent 28px)",
        pointerEvents: "none",
      }} />

      {/* Vertical line pattern — right */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "45%",
        height: "100%",
        backgroundImage: "repeating-linear-gradient(90deg, rgba(160,220,210,0.3) 0px, rgba(160,220,210,0.3) 1px, transparent 1px, transparent 28px)",
        pointerEvents: "none",
      }} />

      {/* Decorative rectangles top-left */}
      <div style={{ position: "absolute", top: 20, left: 60, width: 160, height: 70, borderRadius: 10, background: "rgba(180,220,240,0.25)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 30, left: 240, width: 340, height: 70, borderRadius: 10, background: "rgba(180,220,240,0.2)", pointerEvents: "none" }} />

      {/* Decorative rectangles top-right */}
      <div style={{ position: "absolute", top: 20, right: 60, width: 160, height: 70, borderRadius: 10, background: "rgba(160,220,210,0.25)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 30, right: 240, width: 200, height: 70, borderRadius: 10, background: "rgba(160,220,210,0.2)", pointerEvents: "none" }} />

      {/* Main content */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 10 }}>

        {/* White card */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          style={{
            background: "white",
            borderRadius: 28,
            boxShadow: "0 8px 60px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            minHeight: 480,
          }}
        >
          {/* ─── LEFT: text content ─── */}
          <div style={{
            padding: "64px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ x: direction * 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 40, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {/* Headline */}
                <h2 style={{
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.25,
                  marginBottom: 28,
                  letterSpacing: "-0.02em",
                }}>
                  {current.headline}
                </h2>

                {/* Quote */}
                <p style={{
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  color: "#3d3d3d",
                  lineHeight: 1.85,
                  marginBottom: 36,
                }}>
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Name & title */}
                <div>
                  <div style={{
                    fontSize: "clamp(18px, 1.8vw, 24px)",
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}>
                    {current.name}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: "#6b7280",
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}>
                    {current.title}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots + arrows */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
              paddingTop: 32,
              borderTop: "1px solid #f1f5f9",
            }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === currentIndex ? 28 : 8,
                      height: 8,
                      borderRadius: 999,
                      background: i === currentIndex ? "#0052CC" : "#d1d5db",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={prev}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1.5px solid #e5e7eb",
                    background: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#374151",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "white")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button
                  onClick={next}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1.5px solid #e5e7eb",
                    background: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#374151",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "white")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: person photo ─── */}
          <div style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #e8f4fb 0%, #d0ecf7 100%)",
          }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={`image-${currentIndex}`}
                src={current.image}
                alt={current.name}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.05, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(current.name)}&size=600&background=e8f4fb&color=0052CC&bold=true&font-size=0.3`;
                  }
                }}
              />
            </AnimatePresence>

            {/* Subtle gradient overlay bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: "linear-gradient(to top, rgba(255,255,255,0.1), transparent)",
              pointerEvents: "none",
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
