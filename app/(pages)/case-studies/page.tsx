"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  created_at: string;
}

export default function CaseStudiesPage() {
  const [items, setItems] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/case-studies")
      .then(r => r.json())
      .then(data => { setItems(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const industries = ["All", ...Array.from(new Set(items.map(i => i.industry).filter(Boolean)))];
  const filtered = filter === "All" ? items : items.filter(i => i.industry === filter);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: "#fff" }}>
      {/* Hero */}
      <section style={{ padding: "100px 40px 60px", textAlign: "center", borderBottom: "1px solid #1a1a1a" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span style={{ display: "inline-block", background: "#1a1a2e", color: "#818cf8", fontSize: 12, fontWeight: 600, letterSpacing: 2, padding: "5px 14px", borderRadius: 20, marginBottom: 18, textTransform: "uppercase" }}>
            Case Studies
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, margin: "0 0 18px", lineHeight: 1.1 }}>
            Real Results for<br />
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Real Businesses</span>
          </h1>
          <p style={{ color: "#888", fontSize: 18, maxWidth: 560, margin: "0 auto" }}>
            Explore how KeySol Global has helped companies transform through technology.
          </p>
        </motion.div>
      </section>

      {/* Filter chips */}
      {!loading && industries.length > 1 && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", padding: "32px 40px 0", justifyContent: "center" }}>
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              style={{
                background: filter === ind ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "#111",
                border: filter === ind ? "none" : "1px solid #222",
                color: filter === ind ? "#fff" : "#888",
                padding: "8px 18px",
                borderRadius: 20,
                fontSize: 13,
                cursor: "pointer",
                fontWeight: filter === ind ? 600 : 400,
                transition: "all 0.2s",
              }}
            >
              {ind}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <section style={{ padding: "40px", maxWidth: 1200, margin: "0 auto" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#555" }}>Loading case studies…</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#555" }}>
            No case studies published yet. Check back soon.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(item)}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  borderRadius: 14,
                  padding: "28px",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                whileHover={{ borderColor: "#3b82f6" }}
              >
                {item.industry && (
                  <span style={{ display: "inline-block", background: "#1a1a2e", color: "#818cf8", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 12, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                    {item.industry}
                  </span>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#fff" }}>{item.title}</h3>
                {item.client && <p style={{ color: "#666", fontSize: 13, margin: "0 0 14px" }}>Client: {item.client}</p>}
                {item.outcome && (
                  <p style={{ color: "#4ade80", fontSize: 13, margin: 0, fontWeight: 500 }}>
                    ✓ {item.outcome.slice(0, 100)}{item.outcome.length > 100 ? "…" : ""}
                  </p>
                )}
                <div style={{ marginTop: 18, color: "#3b82f6", fontSize: 13, fontWeight: 600 }}>Read more →</div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#111", border: "1px solid #222", borderRadius: 16, padding: "40px", maxWidth: 680, width: "100%", maxHeight: "85vh", overflowY: "auto" }}
          >
            {selected.industry && (
              <span style={{ display: "inline-block", background: "#1a1a2e", color: "#818cf8", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 12, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
                {selected.industry}
              </span>
            )}
            <h2 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 6px", color: "#fff" }}>{selected.title}</h2>
            {selected.client && <p style={{ color: "#666", margin: "0 0 28px" }}>Client: {selected.client}</p>}

            {[
              { label: "The Problem", text: selected.problem, color: "#f87171" },
              { label: "Our Solution", text: selected.solution, color: "#818cf8" },
              { label: "Outcome & Results", text: selected.outcome, color: "#4ade80" },
            ].map(({ label, text, color }) => text ? (
              <div key={label} style={{ marginBottom: 24 }}>
                <h4 style={{ color, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>{label}</h4>
                <p style={{ color: "#ccc", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ) : null)}

            <button
              onClick={() => setSelected(null)}
              style={{ background: "#1e1e1e", border: "1px solid #333", color: "#ccc", padding: "10px 20px", borderRadius: 8, cursor: "pointer", marginTop: 8 }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
