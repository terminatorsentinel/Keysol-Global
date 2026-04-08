"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView, useSpring, useMotionValue } from "framer-motion";

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

/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */
const TICKER_ITEMS = [
  "⚡ Average first-response within 2 hours",
  "🌍 Serving 50+ countries worldwide",
  "🤝 Senior team — no junior hand-offs",
  "📅 Book a free 30-min strategy call",
  "🏆 98% client satisfaction rate",
  "🚀 From first message to proposal in 24 hours",
  "💡 5 integrated service lines — one conversation covers all",
  "🔒 NDA available on request",
];
function TickerBanner() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{
      background: "linear-gradient(90deg,#0D1B3E 0%,#1a3068 50%,#0D1B3E 100%)",
      overflow: "hidden", padding: "12px 0",
      borderBottom: "1px solid rgba(37,99,235,0.2)",
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingRight: 56, whiteSpace: "nowrap" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em" }}>{item}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(96,165,250,0.5)", flexShrink: 0, display: "inline-block" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT VIZ — Live availability dashboard
══════════════════════════════════════════════════════════ */
function ContactViz() {
  const [msgCount, setMsgCount] = useState(47);
  const [responseIdx, setResponseIdx] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);

  const channels = [
    { label: "Email",       color: "#2563EB", icon: "✉️", status: "Online",  avg: "< 2h" },
    { label: "Live Chat",   color: "#059669", icon: "💬", status: "Online",  avg: "< 5m" },
    { label: "Phone",       color: "#7C3AED", icon: "📞", status: "Online",  avg: "< 1m" },
    { label: "Video Call",  color: "#D97706", icon: "🎥", status: "By appt", avg: "Same day" },
  ];

  const recentMsgs = [
    { from: "Sarah T.",  co: "FinTech Group", text: "AI workflow proposal", time: "2m ago",  color: "#2563EB" },
    { from: "James K.",  co: "RetailCo",      text: "Custom ERP quote",    time: "8m ago",  color: "#059669" },
    { from: "Priya M.",  co: "NHS Trust",     text: "Strategy call booked",time: "15m ago", color: "#7C3AED" },
    { from: "Carlos D.", co: "ManuTech",      text: "Marketplace access",  time: "22m ago", color: "#D97706" },
    { from: "Aisha N.",  co: "InsuGroup",     text: "Digital growth plan", time: "31m ago", color: "#0891B2" },
  ];

  useEffect(() => {
    const id1 = setInterval(() => setMsgCount(n => n + 1), 8000);
    const id2 = setInterval(() => setResponseIdx(i => (i + 1) % recentMsgs.length), 3200);
    const id3 = setInterval(() => setActiveChannel(c => (c + 1) % channels.length), 2600);
    return () => { clearInterval(id1); clearInterval(id2); clearInterval(id3); };
  }, []);

  const act = channels[activeChannel];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

      {/* Status bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(5,150,105,0.06)", border: "1px solid rgba(5,150,105,0.18)",
        borderRadius: 10, padding: "8px 14px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.div animate={{ scale: [1,1.6,1] }} transition={{ duration: 1.4, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "#22C55E", letterSpacing: "0.07em", textTransform: "uppercase" }}>Team online now</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(15,23,42,0.4)", letterSpacing: "0.04em" }}>
            <motion.span key={msgCount} initial={{ y: -5 }} animate={{ y: 0 }} transition={{ duration: 0.2 }}
              style={{ display: "inline-block" }}>{msgCount}</motion.span> enquiries today
          </span>
        </div>
      </div>

      {/* Channel cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
        {channels.map((ch, i) => (
          <motion.div key={i}
            animate={i === activeChannel
              ? { y: -3, boxShadow: `0 10px 28px ${ch.color}40` }
              : { y: 0,  boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
            style={{
              borderRadius: 12, padding: "12px 8px", cursor: "pointer",
              background: i === activeChannel
                ? `linear-gradient(135deg,${ch.color},${ch.color}CC)`
                : "rgba(255,255,255,0.95)",
              border: `1.5px solid ${i === activeChannel ? "transparent" : "rgba(226,232,240,0.9)"}`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 6 }}>{ch.icon}</div>
            <div style={{ fontSize: 9.5, fontWeight: 800, color: i === activeChannel ? "white" : "#0F172A", lineHeight: 1.2, marginBottom: 3 }}>{ch.label}</div>
            <div style={{ fontSize: 8.5, fontWeight: 600, color: i === activeChannel ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.4)" }}>{ch.avg}</div>
          </motion.div>
        ))}
      </div>

      {/* Active channel detail */}
      <AnimatePresence mode="wait">
        <motion.div key={activeChannel}
          initial={{ y: 8, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: -8, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
          style={{
            background: `linear-gradient(135deg,${act.color}0D,${act.color}06)`,
            border: `1.5px solid ${act.color}30`,
            borderRadius: 14, padding: "14px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 20 }}>{act.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: act.color }}>{act.label}</span>
            </div>
            <div style={{ fontSize: 11, color: "rgba(15,23,42,0.5)", fontWeight: 500 }}>Avg response: <strong style={{ color: act.color }}>{act.avg}</strong></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              background: "#22C55E", color: "white", borderRadius: 100,
              padding: "3px 10px", fontSize: 9.5, fontWeight: 800,
              letterSpacing: "0.07em", textTransform: "uppercase",
            }}>{act.status}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Recent enquiries feed */}
      <div style={{
        background: "rgba(255,255,255,0.95)", border: "1px solid rgba(226,232,240,0.8)",
        borderRadius: 13, padding: "14px 16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ fontSize: 10.5, fontWeight: 800, color: "rgba(15,23,42,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Recent Enquiries</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.2, repeat: Infinity }}
              style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontSize: 9.5, fontWeight: 700, color: "#22C55E", letterSpacing: "0.06em" }}>LIVE</span>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={responseIdx}
            initial={{ y: 6 }} animate={{ y: 0 }} exit={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {recentMsgs.map((m, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: i < recentMsgs.length - 1 ? 10 : 0,
                padding: "8px 10px",
                background: i === responseIdx ? `${recentMsgs[responseIdx].color}08` : "transparent",
                borderRadius: 9,
                border: `1px solid ${i === responseIdx ? `${recentMsgs[responseIdx].color}18` : "transparent"}`,
                transition: "background 0.3s, border 0.3s",
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg,${m.color},${m.color}99)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 800, color: "white",
                }}>{m.from[0]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.from} <span style={{ fontWeight: 400, color: "rgba(15,23,42,0.4)" }}>· {m.co}</span></div>
                  <div style={{ fontSize: 10, color: "rgba(15,23,42,0.5)", fontWeight: 500 }}>{m.text}</div>
                </div>
                <div style={{ fontSize: 9.5, color: "rgba(15,23,42,0.3)", fontWeight: 600, flexShrink: 0 }}>{m.time}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Response time metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[
          { val: "< 2h",  lbl: "Email reply",   color: "#2563EB" },
          { val: "< 5m",  lbl: "Chat response", color: "#059669" },
          { val: "24h",   lbl: "To proposal",   color: "#7C3AED" },
        ].map((m, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.95)", border: `1px solid ${m.color}18`,
            borderRadius: 11, padding: "12px 8px", textAlign: "center",
          }}>
            <div style={{ fontSize: 17, fontWeight: 900, color: m.color, lineHeight: 1, letterSpacing: "-0.03em" }}>{m.val}</div>
            <div style={{ fontSize: 9, color: "rgba(15,23,42,0.4)", fontWeight: 600, marginTop: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════════ */
function ContactForm() {
  const [step, setStep] = useState<"form" | "sent" | "error">("form");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const services = [
    { value: "ai-automation",  label: "AI & Automation",       color: "#2563EB" },
    { value: "digital-growth", label: "Digital Growth",        color: "#7C3AED" },
    { value: "custom-software",label: "Custom Software",       color: "#059669" },
    { value: "consultancy",    label: "Strategic Consultancy", color: "#0891B2" },
    { value: "marketplace",    label: "Technology Marketplace",color: "#D97706" },
    { value: "ai-labs",        label: "AI Labs / R&D",         color: "#DC2626" },
  ];
  const budgets = ["< £10k", "£10k – £50k", "£50k – £200k", "£200k+", "Not sure yet"];

  const inputStyle = (name: string) => ({
    width: "100%", padding: "13px 16px",
    border: `1.5px solid ${focused === name ? "#2563EB" : "rgba(226,232,240,0.9)"}`,
    borderRadius: 12, outline: "none", fontSize: 14, fontWeight: 500,
    color: "#0F172A", background: focused === name ? "rgba(37,99,235,0.02)" : "rgba(248,250,252,0.8)",
    transition: "border 0.2s, background 0.2s",
    boxSizing: "border-box" as const,
  });

  const labelStyle = {
    fontSize: 12, fontWeight: 700, color: "rgba(15,23,42,0.6)",
    letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 7, display: "block",
  };

  if (step === "sent") return (
    <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
      style={{
        textAlign: "center", padding: "64px 40px",
        background: "rgba(255,255,255,0.97)",
        borderRadius: 24, border: "1.5px solid rgba(37,99,235,0.12)",
      }}
    >
      <motion.div
        animate={{ scale: [0.8, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        style={{
          width: 72, height: 72, borderRadius: "50%",
          background: "linear-gradient(135deg,#22C55E,#16A34A)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px", fontSize: 32,
          boxShadow: "0 8px 32px rgba(34,197,94,0.4)",
        }}
      >✓</motion.div>
      <h3 style={{ fontSize: 26, fontWeight: 900, color: "#0F172A", marginBottom: 12, letterSpacing: "-0.025em" }}>Message sent!</h3>
      <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, maxWidth: 340, margin: "0 auto 32px" }}>
        We&apos;ll have a senior team member review your enquiry and respond within 2 hours.
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <button onClick={() => setStep("form")} style={{
          padding: "11px 24px", borderRadius: 12, border: "1.5px solid rgba(226,232,240,0.9)",
          fontSize: 13, fontWeight: 700, color: "#0F172A", cursor: "pointer", background: "white",
        }}>Send another</button>
        <a href="/" style={{
          padding: "11px 24px", borderRadius: 12,
          background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
          fontSize: 13, fontWeight: 700, color: "white", cursor: "pointer",
          textDecoration: "none", display: "inline-block",
          boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
        }}>Back to home</a>
      </div>
    </motion.div>
  );

  return (
    <div style={{
      background: "rgba(255,255,255,0.97)", borderRadius: 24,
      border: "1.5px solid rgba(226,232,240,0.9)",
      padding: "40px 40px 44px",
    }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em" }}>Start a conversation</h2>
        </div>
        <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>Fill in your details and a senior team member will respond within 2 hours.</p>
      </div>

      <form onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      firstName: firstNameRef.current?.value || "",
                      lastName: lastNameRef.current?.value || "",
                      email: emailRef.current?.value || "",
                      company: companyRef.current?.value || "",
                      service,
                      budget,
                      message: messageRef.current?.value || "",
                    }),
                  });
                  if (res.ok) { setStep("sent"); } else { setStep("error"); }
                } catch { setStep("error"); } finally { setLoading(false); }
              }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Name row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input type="text" ref={firstNameRef} placeholder="John" required style={inputStyle("first")}
              onFocus={() => setFocused("first")} onBlur={() => setFocused(null)} />
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input type="text" ref={lastNameRef} placeholder="Doe" required style={inputStyle("last")}
              onFocus={() => setFocused("last")} onBlur={() => setFocused(null)} />
          </div>
        </div>

        {/* Email + Company */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>Work Email</label>
            <input type="email" ref={emailRef} placeholder="john@company.com" required style={inputStyle("email")}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
          </div>
          <div>
            <label style={labelStyle}>Company</label>
            <input type="text" ref={companyRef} placeholder="Your Company" style={inputStyle("company")}
              onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />
          </div>
        </div>

        {/* Service interest */}
        <div>
          <label style={labelStyle}>Service Interest</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {services.map(s => (
              <button key={s.value} type="button"
                onClick={() => setService(service === s.value ? "" : s.value)}
                style={{
                  padding: "9px 8px", borderRadius: 10, cursor: "pointer", fontSize: 11, fontWeight: 700,
                  textAlign: "center", lineHeight: 1.3,
                  border: `1.5px solid ${service === s.value ? s.color : "rgba(226,232,240,0.9)"}`,
                  background: service === s.value ? `${s.color}0F` : "rgba(248,250,252,0.8)",
                  color: service === s.value ? s.color : "rgba(15,23,42,0.55)",
                  transition: "all 0.2s",
                }}
              >{s.label}</button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label style={labelStyle}>Approximate Budget</label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {budgets.map(b => (
              <button key={b} type="button"
                onClick={() => setBudget(budget === b ? "" : b)}
                style={{
                  padding: "8px 14px", borderRadius: 100, cursor: "pointer", fontSize: 12, fontWeight: 700,
                  border: `1.5px solid ${budget === b ? "#2563EB" : "rgba(226,232,240,0.9)"}`,
                  background: budget === b ? "rgba(37,99,235,0.08)" : "rgba(248,250,252,0.8)",
                  color: budget === b ? "#2563EB" : "rgba(15,23,42,0.5)",
                  transition: "all 0.2s",
                }}
              >{b}</button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>Tell us about your project</label>
          <textarea ref={messageRef} placeholder="Describe your challenge, goals, or what you'd like to achieve..." rows={4}
            style={{ ...inputStyle("msg"), resize: "none" }}
            onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
        </div>

        {/* Submit */}
        <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          style={{
            width: "100%", padding: "15px 32px", borderRadius: 14, border: "none",
            background: loading ? "linear-gradient(135deg,#93C5FD,#60A5FA)" : "linear-gradient(135deg,#2563EB 0%,#1D4ED8 100%)",
            color: "white", fontSize: 15, fontWeight: 800, cursor: loading ? "not-allowed" : "pointer",
            letterSpacing: "0.01em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: "0 8px 28px rgba(37,99,235,0.38)",
          }}
        >
          {loading ? "Sending..." : "Send message"}
          {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>}
        </motion.button>

        {step === "error" && (
          <p style={{ fontSize: 13, color: "#DC2626", textAlign: "center", fontWeight: 600, background: "#FEF2F2", padding: "10px 16px", borderRadius: 10, border: "1px solid #FECACA" }}>
            Something went wrong. Please try again or email us directly at Wajahat@keysolglobal.com
          </p>
        )}

        <p style={{ fontSize: 11.5, color: "rgba(15,23,42,0.35)", textAlign: "center", fontWeight: 500 }}>
          🔒 Your information is kept strictly confidential. NDA available on request.
        </p>
      </form>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FAQ ITEM
══════════════════════════════════════════════════════════ */
function FaqItem({ q, a, color = "#2563EB" }: { q: string; a: string; color?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1.5px solid ${open ? color + "30" : "rgba(226,232,240,0.8)"}`,
      borderRadius: 16, overflow: "hidden",
      background: open ? `${color}04` : "rgba(255,255,255,0.95)",
      transition: "border 0.25s, background 0.25s",
    }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", padding: "20px 24px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 16, background: "none", border: "none",
        cursor: "pointer", textAlign: "left",
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", lineHeight: 1.4 }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}
          style={{ width: 24, height: 24, borderRadius: "50%", background: open ? color : "rgba(226,232,240,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16,
            color: open ? "white" : "#64748B", fontWeight: 700, transition: "background 0.25s, color 0.25s" }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }} style={{ overflow: "hidden" }}>
            <p style={{ padding: "0 24px 22px", fontSize: 14.5, color: "#6B7280", lineHeight: 1.75 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT INFO CARD
══════════════════════════════════════════════════════════ */
function InfoCard({ icon, title, value, sub, color, href }: { icon: React.ReactNode; title: string; value: string; sub: string; color: string; href?: string }) {
  const [hovered, setHovered] = useState(false);
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 16, padding: "18px 22px",
        background: hovered ? `${color}07` : "rgba(255,255,255,0.97)",
        border: `1.5px solid ${hovered ? color + "35" : "rgba(226,232,240,0.85)"}`,
        borderRadius: 16, textDecoration: "none", cursor: href ? "pointer" : "default",
        transition: "background 0.2s, border 0.2s",
      }}
    >
      <motion.div animate={{ y: hovered ? -2 : 0 }} transition={{ duration: 0.2 }}
        style={{
          width: 46, height: 46, borderRadius: 13,
          background: `linear-gradient(135deg,${color},${color}CC)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 6px 20px ${color}50` : "none",
          transition: "box-shadow 0.2s", flexShrink: 0,
        }}
      >{icon}</motion.div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(15,23,42,0.4)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 15, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em" }}>{value}</div>
        <div style={{ fontSize: 12, color: "rgba(15,23,42,0.45)", fontWeight: 500, marginTop: 2 }}>{sub}</div>
      </div>
    </Tag>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const faqColors = ["#2563EB","#7C3AED","#059669","#0891B2","#D97706"];

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", fontFamily: "inherit" }}>
      <TickerBanner />

      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section style={{
        padding: "100px 48px 80px",
        background: "linear-gradient(160deg,#F8FAFF 0%,#FFFFFF 50%,#F0F4FF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle,rgba(37,99,235,0.07) 1px,transparent 1px)",
          backgroundSize: "28px 28px" }} />
        {/* Ambient blobs */}
        <div style={{ position: "absolute", top: -180, right: "10%", width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: "5%", width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(124,58,237,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* LEFT */}
          <div>
            <FadeUp>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
                background: "rgba(37,99,235,0.07)", borderRadius: 100, padding: "8px 16px",
                border: "1px solid rgba(37,99,235,0.15)" }}>
                <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.4, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.07em", textTransform: "uppercase" }}>Get in touch</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 style={{ fontSize: "clamp(40px,4.5vw,64px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24, color: "#0F172A" }}>
                Let&apos;s build{" "}
                <motion.span
                  animate={{ color: ["#0F172A","#2563EB","#7C3AED","#0F172A"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >something</motion.span>
                {" "}
                <motion.span
                  animate={{ backgroundPosition: ["200% center","-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "linear-gradient(100deg,#60A5FA 0%,#A78BFA 30%,#34D399 55%,#FBBF24 75%,#60A5FA 100%)",
                    backgroundSize: "300% 100%", WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent", backgroundClip: "text",
                    display: "inline-block",
                  }}
                >remarkable.</motion.span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.75, maxWidth: 520, marginBottom: 40 }}>
                Tell us about your challenge. Our senior team will respond within 2 hours — no boilerplate, no junior hand-offs. Just expert thinking from day one.
              </p>
            </FadeUp>

            {/* Trust chips */}
            <FadeUp delay={0.2}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
                {[
                  { icon: "⚡", text: "2h response time" },
                  { icon: "🎯", text: "Senior team only" },
                  { icon: "🔒", text: "NDA available" },
                  { icon: "🌍", text: "50+ countries" },
                ].map((c, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 7,
                    background: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(226,232,240,0.9)",
                    borderRadius: 100, padding: "7px 14px",
                  }}>
                    <span>{c.icon}</span>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(15,23,42,0.6)" }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Contact info cards */}
            <FadeUp delay={0.25}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <InfoCard color="#2563EB" href="mailto:Wajahat@keysolglobal.com"
                  title="Email us"
                  value="Wajahat@keysolglobal.com"
                  sub="We reply within 2 hours"
                  icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                />
                <InfoCard color="#059669" href="tel:+923104398921"
                  title="Call us"
                  value="+92 310 4398921"
                  sub="Mon–Fri 9AM–6PM GMT"
                  icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.87-1.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                />
                <InfoCard color="#7C3AED"
                  title="Dubai Head Office"
                  value="Office #38, NBD Building, Al Mamzar, Dubai"
                  sub="Al Wuheida Road · +971 4 286 5433"
                  icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                />
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — Viz */}
          <FadeUp delay={0.1}>
            <div style={{ position: "relative" }}>
              {/* Mac window chrome */}
              <div style={{
                background: "rgba(255,255,255,0.9)", borderRadius: 20,
                border: "1.5px solid rgba(226,232,240,0.9)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.08), 0 8px 24px rgba(37,99,235,0.06)",
              }}>
                <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(226,232,240,0.8)", display: "flex", alignItems: "center", gap: 8 }}>
                  {["#FF5F57","#FEBC2E","#28C840"].map((c,i) => (
                    <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                  ))}
                  <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(15,23,42,0.35)", marginLeft: 8 }}>KeySol Global — Contact Hub</span>
                  <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6,
                    background: "rgba(34,197,94,0.1)", borderRadius: 100, padding: "3px 10px" }}>
                    <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.4, repeat: Infinity }}
                      style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: "#22C55E" }}>LIVE</span>
                  </div>
                </div>
                <div style={{ padding: 18 }}>
                  <ContactViz />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0,-6,0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: 28, right: -140,
                  background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
                  borderRadius: 14, padding: "12px 16px",
                  boxShadow: "0 12px 36px rgba(37,99,235,0.18)",
                  border: "1.5px solid rgba(37,99,235,0.12)",
                  zIndex: 10,
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 800, color: "rgba(15,23,42,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Avg. Response</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#2563EB", letterSpacing: "-0.04em", lineHeight: 1 }}>{"< 2h"}</div>
                <div style={{ fontSize: 10, color: "rgba(15,23,42,0.4)", fontWeight: 500, marginTop: 3 }}>guaranteed</div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0,6,0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                style={{
                  position: "absolute", bottom: -52, left: 28,
                  background: "rgba(5,150,105,0.92)", backdropFilter: "blur(12px)",
                  color: "white", borderRadius: 14, padding: "11px 16px",
                  boxShadow: "0 8px 28px rgba(5,150,105,0.45)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex", alignItems: "center", gap: 8, zIndex: 10,
                }}
              >
                <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 700 }}>98% Client Satisfaction</span>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ CONTACT FORM SECTION ════════════════════════════════════ */}
      <section style={{
        padding: "100px 48px",
        background: "linear-gradient(170deg,#F8FAFF 0%,#F0F4FF 50%,#EEF2FF 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle,rgba(37,99,235,0.06) 1px,transparent 1px)",
          backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left — Form */}
          <FadeUp>
            <ContactForm />
          </FadeUp>

          {/* Right — Info + Schedule */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <FadeUp delay={0.1}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 20,
                  background: "rgba(37,99,235,0.07)", borderRadius: 100, padding: "7px 14px",
                  border: "1px solid rgba(37,99,235,0.15)" }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "#2563EB", letterSpacing: "0.07em", textTransform: "uppercase" }}>Why teams choose us</span>
                </div>
                <h2 style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 16 }}>
                  Your project deserves{" "}
                  <motion.span animate={{ color: ["#0F172A","#2563EB","#0F172A"] }} transition={{ duration: 4, repeat: Infinity }}>
                    senior expertise
                  </motion.span>
                </h2>
                <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75, marginBottom: 32 }}>
                  Every client gets direct access to experienced practitioners — no account managers, no junior teams. We start adding value from the first conversation.
                </p>
              </div>
            </FadeUp>

            {/* Reason cards */}
            {[
              { color: "#2563EB", icon: "⚡", title: "2-hour response", desc: "A senior team member will review your enquiry and respond with tailored thinking — not a template." },
              { color: "#7C3AED", icon: "🎯", title: "No junior hand-offs", desc: "You'll always speak directly with the people doing the work. Senior-only policy across every engagement." },
              { color: "#059669", icon: "📈", title: "Outcomes within 90 days", desc: "We move fast. Expect a clear proposal within 24 hours and measurable results within 90 days of kickoff." },
              { color: "#D97706", icon: "🤝", title: "One partner for everything", desc: "AI, software, growth, consultancy — one unified team that compounds value across every service line." },
            ].map((r, i) => (
              <FadeUp key={i} delay={0.12 + i * 0.07}>
                <ReasonCard r={r} />
              </FadeUp>
            ))}

            {/* Book a call CTA */}
            <FadeUp delay={0.5}>
              <div style={{
                background: "linear-gradient(135deg,#0D1B3E 0%,#1a3068 100%)",
                borderRadius: 20, padding: "32px 30px",
              }}>
                <div style={{ fontSize: 10.5, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Prefer a call?</div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "white", letterSpacing: "-0.02em", marginBottom: 10 }}>Book a free strategy session</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 24 }}>
                  30 minutes with a senior consultant. No sales pitch — just expert insight into your challenge.
                </p>
                <motion.a href="https://api.whatsapp.com/send/?phone=%2B923104398921&text=Hi%20KeySol%20Global%2C%20I'd%20like%20to%20book%20a%20free%20strategy%20session&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                    color: "white", borderRadius: 12, padding: "12px 24px",
                    fontSize: 13, fontWeight: 800, textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(37,99,235,0.4)",
                  }}
                >
                  Book a free call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 48px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 20,
                background: "rgba(37,99,235,0.07)", borderRadius: 100, padding: "7px 14px",
                border: "1px solid rgba(37,99,235,0.15)" }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: "#2563EB", letterSpacing: "0.07em", textTransform: "uppercase" }}>Common questions</span>
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.2vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>
                Everything you need to know
              </h2>
              <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75 }}>
                Quick answers before you reach out.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "How quickly will you respond to my enquiry?", a: "A senior team member will respond to every enquiry within 2 hours during business hours (Mon–Fri, 9AM–6PM GMT). For urgent matters, you can reach us directly by phone or live chat.", c: "#2563EB" },
              { q: "What happens after I send a message?", a: "You'll receive an acknowledgment immediately. Within 2 hours, a senior consultant will review your brief, ask any clarifying questions, and send a tailored response — not a generic template.", c: "#7C3AED" },
              { q: "Is there a minimum project size?", a: "We work with businesses of all sizes, from startups to global enterprises. While our typical engagement starts from £10,000, we're happy to discuss your specific situation and find an approach that works.", c: "#059669" },
              { q: "Do you sign NDAs?", a: "Yes, absolutely. We can have an NDA signed before any sensitive information is shared. Just mention it in your initial message and we'll arrange it as part of onboarding.", c: "#0891B2" },
              { q: "Can I talk to someone before committing to anything?", a: "Of course. Book a free 30-minute strategy session — no obligations, no sales pitch. It's a genuine conversation with a senior consultant about your challenge.", c: "#D97706" },
            ].map((item, i) => (
              <FadeUp key={i} delay={0.06 * i}>
                <FaqItem q={item.q} a={item.a} color={item.c} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═══════════════════════════════════════════════ */}
      <section style={{
        padding: "100px 48px",
        background: "linear-gradient(135deg,#0D1B3E 0%,#1a3068 40%,#0D1B3E 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <FadeUp>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 24,
              background: "rgba(255,255,255,0.07)", borderRadius: 100, padding: "8px 16px",
              border: "1px solid rgba(255,255,255,0.12)" }}>
              <motion.div animate={{ scale: [1,1.5,1] }} transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Team available now</span>
            </div>
            <h2 style={{ fontSize: "clamp(34px,4vw,58px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
              Ready to{" "}
              <motion.span
                animate={{ backgroundPosition: ["200% center","-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(100deg,#60A5FA 0%,#A78BFA 30%,#34D399 55%,#FBBF24 75%,#60A5FA 100%)",
                  backgroundSize: "300% 100%", WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block",
                }}
              >transform your business?</motion.span>
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 40 }}>
              Join 200+ businesses that trust KeySol Global to build, automate, and grow. Your first conversation is free.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <motion.a href="#form" whileHover={{ y: -2 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "white", borderRadius: 14, padding: "15px 32px",
                  fontSize: 15, fontWeight: 800, textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(37,99,235,0.5)",
                }}
              >
                Send a message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </motion.a>
              <motion.a href="mailto:Wajahat@keysolglobal.com" whileHover={{ y: -2 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)",
                  color: "white", borderRadius: 14, padding: "15px 32px",
                  fontSize: 15, fontWeight: 800, textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                }}
              >
                Wajahat@keysolglobal.com
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   REASON CARD (inline)
══════════════════════════════════════════════════════════ */
function ReasonCard({ r }: { r: { color: string; icon: string; title: string; desc: string } }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 22px",
        background: hovered ? `${r.color}06` : "rgba(255,255,255,0.97)",
        border: `1.5px solid ${hovered ? r.color + "30" : "rgba(226,232,240,0.85)"}`,
        borderRadius: 18, cursor: "default",
        transition: "background 0.2s, border 0.2s",
      }}
    >
      <motion.div animate={{ y: hovered ? -2 : 0 }} transition={{ duration: 0.2 }}
        style={{
          width: 42, height: 42, borderRadius: 12, flexShrink: 0,
          background: `linear-gradient(135deg,${r.color},${r.color}CC)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, boxShadow: hovered ? `0 6px 18px ${r.color}45` : "none",
          transition: "box-shadow 0.2s",
        }}
      >{r.icon}</motion.div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A", marginBottom: 5, letterSpacing: "-0.01em" }}>{r.title}</div>
        <div style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.65 }}>{r.desc}</div>
        <motion.div animate={{ width: hovered ? "100%" : "0%" }} transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
          style={{ height: 2, background: r.color, borderRadius: 1, marginTop: 10 }} />
      </div>
    </div>
  );
}
