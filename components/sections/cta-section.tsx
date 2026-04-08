"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    type: "Blog",
    title: "Five ways AI automation is reshaping enterprise operations in 2025",
    description: "How forward-thinking companies are using intelligent automation to cut costs and accelerate growth.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=380&fit=crop",
    cta: "Read more",
    href: "/insights/ai-automation-enterprise/",
    typeColor: "#2563eb",
  },
  {
    type: "Whitepaper",
    title: "Why digital transformation in enterprise software needs an AI-first approach",
    description: "A deep dive into the frameworks and strategies that separate leaders from laggards.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=380&fit=crop",
    cta: "Download the Report",
    href: "/insights/digital-transformation-whitepaper/",
    typeColor: "#2563eb",
  },
  {
    type: "Blog",
    title: "From manual workflows to intelligent pipelines: How AI is changing operations",
    description: "Real-world examples of businesses cutting operational overhead by 40% with AI integrations.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=380&fit=crop",
    cta: "Read more",
    href: "/insights/intelligent-pipelines/",
    typeColor: "#2563eb",
  },
  {
    type: "Blog",
    title: "Shared growth models for high-value enterprise clients: a new partnership era",
    description: "How KeySol Global structures long-term partnerships that deliver measurable ROI.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=380&fit=crop",
    cta: "Read more",
    href: "/insights/partnership-models/",
    typeColor: "#2563eb",
  },
];

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const prev = () => setStartIndex((p) => Math.max(0, p - 1));
  const next = () => setStartIndex((p) => Math.min(articles.length - 4, p + 1));

  return (
    <section ref={ref} style={{
      width: "100%",
      background: "#ffffff",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    }}>

      {/* ── FEATURED READS ── */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 48px 80px" }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 52 }}>
          <div style={{ maxWidth: 520 }}>
            <motion.h2
              initial={{ y: 20 }} animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.03em" }}
            >
              Featured{" "}
              <span style={{
                background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                reads &amp; insights
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 15 }} animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 16, color: "#64748b", lineHeight: 1.75 }}
            >
              Stay informed with the latest from KeySol Global. Thought leadership,
              product updates, industry perspectives, and company news, all in one place.
            </motion.p>
          </div>

          {/* Arrow nav */}
          <motion.div
            initial={{ y: 15 }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", gap: 10, paddingTop: 8 }}
          >
            {[{ dir: "prev", onClick: prev, disabled: startIndex === 0 }, { dir: "next", onClick: next, disabled: startIndex >= articles.length - 4 }].map((btn) => (
              <button
                key={btn.dir}
                onClick={btn.onClick}
                disabled={btn.disabled}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  border: `1.5px solid ${btn.disabled ? "#e2e8f0" : "#cbd5e1"}`,
                  background: "white", cursor: btn.disabled ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: btn.disabled ? "#cbd5e1" : "#475569",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { if (!btn.disabled) { (e.currentTarget as HTMLButtonElement).style.background = "#f8fafc"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#94a3b8"; } }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "white"; (e.currentTarget as HTMLButtonElement).style.borderColor = btn.disabled ? "#e2e8f0" : "#cbd5e1"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {btn.dir === "prev"
                    ? <polyline points="15 18 9 12 15 6"/>
                    : <polyline points="9 18 15 12 9 6"/>
                  }
                </svg>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              initial={{ y: 40 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -6, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
              style={{
                textDecoration: "none",
                background: "white",
                borderRadius: 16,
                border: `1px solid ${hoveredCard === i ? "#e2e8f0" : "#f1f5f9"}`,
                overflow: "hidden",
                boxShadow: hoveredCard === i
                  ? "0 16px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)"
                  : "0 2px 10px rgba(0,0,0,0.04)",
                display: "block",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
            >
              {/* Image */}
              <div style={{ width: "100%", aspectRatio: "16/10", overflow: "hidden", background: "#f1f5f9" }}>
                <motion.img
                  src={article.image}
                  alt={article.title}
                  animate={{ scale: hoveredCard === i ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=380&fit=crop`;
                    }
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "20px 20px 24px" }}>
                {/* Type badge */}
                <div style={{
                  fontSize: 12, fontWeight: 700, color: article.typeColor,
                  marginBottom: 10, letterSpacing: "0.02em",
                }}>
                  {article.type}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: 15, fontWeight: 700, color: "#0f172a",
                  lineHeight: 1.5, marginBottom: 20,
                  display: "-webkit-box", WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                  {article.title}
                </h3>

                {/* CTA link */}
                <motion.div
                  animate={{ x: hoveredCard === i ? 4 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 14, fontWeight: 600, color: "#0f172a",
                  }}
                >
                  {article.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── NEWSLETTER BANNER ── */}
      <NewsletterBanner />
    </section>
  );
}

/* ─────────────────────────────────────────────
   Newsletter Banner — Premium upgrade
───────────────────────────────────────────── */
function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const stripes = [0, 1, 2, 3, 4, 5, 6, 7];
  const topCards = [
    { top: 22, left: 24, w: 115, h: 88, delay: 0 },
    { top: 22, left: 150, w: 88, h: 88, delay: 0.1 },
    { top: 22, left: 250, w: 65, h: 88, delay: 0.2 },
  ];
  const bottomCards = [
    { top: 218, left: 24, w: 168, h: 62 },
    { top: 292, left: 24, w: 168, h: 62 },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{
        width: "100%",
        display: "flex",
        minHeight: 400,
        overflow: "hidden",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
        position: "relative",
      }}
    >
      {/* LEFT PANEL */}
      <div style={{
        flex: "0 0 50%",
        background: "linear-gradient(145deg, #e8fafa 0%, #c0f0f4 35%, #82dde6 70%, #4fc8d8 100%)",
        position: "relative",
        overflow: "visible",
      }}>
        {stripes.map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${10 + i * 11}%`,
              width: 1,
              background: `rgba(255,255,255,${0.12 + (i % 3) * 0.08})`,
            }}
          />
        ))}

        {topCards.map((r, i) => (
          <motion.div
            key={i}
            initial={{ y: 10 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.7, delay: r.delay }}
            style={{
              position: "absolute",
              top: r.top,
              left: r.left,
              width: r.w,
              height: r.h,
              border: "1.5px solid rgba(80,185,205,0.5)",
              borderRadius: 14,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(4px)",
            }}
          />
        ))}

        {bottomCards.map((r, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: r.top,
              left: r.left,
              width: r.w,
              height: r.h,
              border: "1.5px solid rgba(80,185,205,0.45)",
              borderRadius: 12,
              background: "rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                style={{
                  position: "absolute",
                  top: 10 + l * 10,
                  left: 10,
                  right: 10,
                  height: 1,
                  background: "rgba(80,185,205,0.4)",
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div style={{
        flex: "0 0 50%",
        background: "linear-gradient(145deg, #1562d6 0%, #1e72e8 30%, #1a9de0 70%, #12b8e8 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 72px 0 60px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ x: -16 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 99,
              padding: "6px 16px",
              marginBottom: 22,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7ef4ff" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Newsletter</span>
          </motion.div>
          <motion.h2
            initial={{ x: -20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(20px, 2.4vw, 32px)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.45,
              marginBottom: 32,
              maxWidth: 420,
              letterSpacing: "-0.01em",
            }}
          >
            Subscribe to our newsletter to get{" "}
            <strong style={{ fontWeight: 700 }}>the latest news in your inbox.</strong>
          </motion.h2>
          <motion.form
            initial={{ x: -16 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: 0,
              maxWidth: 500,
              boxShadow: focused ? "0 0 0 3px rgba(255,255,255,0.4), 0 16px 40px rgba(0,0,0,0.2)" : "0 8px 30px rgba(0,0,0,0.18)",
              borderRadius: 12,
              overflow: "hidden",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <input
              type="email"
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                flex: 1,
                padding: "17px 24px",
                fontSize: 15,
                border: "none",
                outline: "none",
                background: "white",
                color: "#1e293b",
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "17px 38px",
                background: submitted ? "#059669" : "#1d4ed8",
                color: "white",
                border: "none",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                transition: "background 0.25s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => { if (!submitted) e.currentTarget.style.background = "#1e40af"; }}
              onMouseLeave={(e) => { if (!submitted) e.currentTarget.style.background = "#1d4ed8"; }}
            >
              {submitted ? "✓ Subscribed!" : "Subscribe"}
            </button>
          </motion.form>
          <motion.p
            initial={{ x: -12 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 14 }}
          >
            No spam. Unsubscribe anytime. Trusted by 10,000+ professionals.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

