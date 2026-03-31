"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ══════════════════════════════════════════════════════════════
   TAB DATA
══════════════════════════════════════════════════════════════ */
const TABS = [
  {
    id: "retail",
    label: "Digital Retail",
    tabGrad:  ["#7B2FE0", "#9D4EDD"],
    leftBg:   "linear-gradient(155deg,#F5EFFE 0%,#E8DDFB 40%,#D8C8F8 100%)",
    midBg:    "linear-gradient(155deg,#FDFAFF 0%,#F2EBFD 100%)",
    illBg:    "linear-gradient(140deg,#EDE3FA 0%,#D8C8F5 100%)",
    bmBg:     "linear-gradient(140deg,#F8F3FE 0%,#EBE0FB 100%)",
    accent:   "#A855F7",
    accentDark:"#7B2FE0",
    accentRgb: "124,47,224",
    pillGrad: ["#7B2FE0","#38BDF8"],
    title:    "KeySol Retail",
    desc:     "End-to-end orchestration for OEMs and dealers. Modular and scalable to unify showroom and online journeys into one seamless retail experience.",
    cta:      "Learn More",
    tagline:  "Auto retail redefined. Personalized paths, connected touchpoints and AI-driven precision.",
    pills:    ["Dealer Groups","OEMs","Independent Dealers"],
    defaultPill: 1,
    visual:   "cubes",
  },
  {
    id: "finance",
    label: "Finance",
    tabGrad:  ["#059669","#10B981"],
    leftBg:   "linear-gradient(155deg,#ECFDF5 0%,#D1FAE5 40%,#A7F3D0 100%)",
    midBg:    "linear-gradient(155deg,#F6FEFB 0%,#DCFCE7 100%)",
    illBg:    "linear-gradient(140deg,#BBFFD8 0%,#86EFBA 100%)",
    bmBg:     "linear-gradient(140deg,#EFFDF5 0%,#CDFACE 100%)",
    accent:   "#10B981",
    accentDark:"#059669",
    accentRgb: "5,150,105",
    pillGrad: ["#059669","#0891B2"],
    title:    "KeySol Finance",
    desc:     "AI-driven intelligence for the full contract lifecycle — boosting decisions, onboarding and operations across auto, equipment and commercial finance.",
    cta:      "Get in touch",
    tagline:  "Smarter lending starts here. AI-enabled speed, flexibility, and precision.",
    pills:    ["Auto Finance","Equipment Finance","Fleet Finance"],
    defaultPill: 1,
    visual:   "coins",
  },
  {
    id: "ai-labs",
    label: "AI Labs",
    tabGrad:  ["#0284C7","#06B6D4"],
    leftBg:   "linear-gradient(155deg,#ECFEFF 0%,#CFFAFE 40%,#A5F3FC 100%)",
    midBg:    "linear-gradient(155deg,#F0FEFF 0%,#CFFAFE 100%)",
    illBg:    "linear-gradient(140deg,#A5F3FC 0%,#67E8F9 100%)",
    bmBg:     "linear-gradient(140deg,#E0FAFF 0%,#BAF5FC 100%)",
    accent:   "#06B6D4",
    accentDark:"#0284C7",
    accentRgb: "2,132,199",
    pillGrad: ["#0284C7","#0D9468"],
    title:    "KeySol AI Labs",
    desc:     "AI innovation for lending, leasing and retail. Purpose-built tools that accelerate transformation and deliver real-world impact across workflows.",
    cta:      "Learn More",
    tagline:  "Transforming BFSI, finance and leasing with intelligent, industry-specific AI.",
    pills:    ["Lab Innovations","AI Applications","AI Services"],
    defaultPill: 1,
    visual:   "sparkle",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    tabGrad:  ["#DC2626","#F43F5E"],
    leftBg:   "linear-gradient(155deg,#FFF1F2 0%,#FFE4E6 40%,#FECDD3 100%)",
    midBg:    "linear-gradient(155deg,#FFF5F6 0%,#FFE4E6 100%)",
    illBg:    "linear-gradient(140deg,#FECDD3 0%,#FDA4AF 100%)",
    bmBg:     "linear-gradient(140deg,#FFF1F2 0%,#FFD7DA 100%)",
    accent:   "#F43F5E",
    accentDark:"#DC2626",
    accentRgb: "220,38,38",
    pillGrad: ["#DC2626","#9333EA"],
    title:    "KeySol Marketplace",
    desc:     "A unified marketplace of modular, API-driven solutions for lending, leasing and retail. Built to simplify and accelerate every workflow.",
    cta:      "Learn More",
    tagline:  "Smarter. Faster. Connected. Your modular marketplace for finance and leasing.",
    pills:    ["Subscription-based","API-first","Component-based"],
    defaultPill: 2,
    visual:   "bag",
  },
  {
    id: "consultancy",
    label: "Consultancy",
    tabGrad:  ["#4338CA","#6366F1"],
    leftBg:   "linear-gradient(155deg,#EEF2FF 0%,#E0E7FF 40%,#C7D2FE 100%)",
    midBg:    "linear-gradient(155deg,#F5F7FF 0%,#E8ECFF 100%)",
    illBg:    "linear-gradient(140deg,#C7D2FE 0%,#A5B4FC 100%)",
    bmBg:     "linear-gradient(140deg,#EEF2FF 0%,#DDE3FF 100%)",
    accent:   "#6366F1",
    accentDark:"#4338CA",
    accentRgb: "67,56,202",
    pillGrad: ["#4338CA","#0284C7"],
    title:    "KeySol Consultancy",
    desc:     "Expertise in AI, data, cloud and security — helping BFSI and lenders modernize, scale confidently and build resilient, future-ready operations.",
    cta:      "Get in touch",
    tagline:  "Turning complex challenges into transformative opportunities.",
    pills:    ["Bespoke Development","Information Security","Data & AI Services"],
    defaultPill: 1,
    visual:   "layers",
  },
];

/* ──────────────────────────────────────────────────────────────
   TICK BARS
────────────────────────────────────────────────────────────── */
function Ticks({ color, accentRgb, flip }: { color: string; accentRgb: string; flip?: boolean }) {
  const pattern = [18, 8, 5, 12, 18, 8, 5, 12, 8, 5];
  const count   = 80;
  return (
    <div style={{
      display: "flex", alignItems: "flex-end",
      gap: 2.5, height: 24, padding: "0 28px",
      overflow: "hidden",
      transform: flip ? "rotate(180deg)" : undefined,
    }}>
      {Array.from({ length: count }).map((_, i) => {
        const h  = pattern[i % pattern.length];
        const op = h === 18 ? 0.9 : h === 12 ? 0.55 : 0.22;
        return (
          <div key={i} style={{
            width: 2.5, height: h, borderRadius: 2,
            background: `rgba(${accentRgb},${op})`,
            flexShrink: 0, alignSelf: "flex-end",
          }}/>
        );
      })}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   ICON BADGE
────────────────────────────────────────────────────────────── */
function IconBadge({ grad, size = 40 }: { grad: string[]; size?: number }) {
  const uid = grad[0].replace(/[^a-z0-9]/gi, "");
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, borderRadius: 11 }}>
      <defs>
        <linearGradient id={`ib-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={grad[0]}/>
          <stop offset="100%" stopColor={grad[1]}/>
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#ib-${uid})`}/>
      {/* K letterform */}
      <path d="M13 9v22M13 20l11-11M13 20l11 11"
        stroke="white" strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
   WAVEFORM  (animated bars)
────────────────────────────────────────────────────────────── */
function Waveform({ color, accentRgb, tabIdx }: { color: string; accentRgb: string; tabIdx: number }) {
  const bars = [10,16,24,34,44,54,64,72,82,88,92,94,90,84,76,68,58,48,40,32,42,50,58,48,38,30,22,32,40,34,26,20,14,22,30,24,18,14,10,16,22,18];
  const W = bars.length * 9;
  return (
    <svg viewBox={`0 0 ${W} 100`} width="100%" height="96" preserveAspectRatio="none" style={{ display:"block" }}>
      <defs>
        <linearGradient id={`wv-${color.replace(/[^a-z0-9]/gi,"")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="1"/>
          <stop offset="70%"  stopColor={color} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.15"/>
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <motion.rect
          key={`${tabIdx}-${i}`}
          x={i * 9 + 1.5} y={100 - h} width={7} height={h} rx={3}
          fill={`url(#wv-${color.replace(/[^a-z0-9]/gi,"")})`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: i * 0.016, duration: 0.38, ease: [0.34,1.56,0.64,1] }}
          style={{ transformOrigin: "50% 100%" }}
        />
      ))}
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
   3-D ILLUSTRATIONS  (premium per-tab SVGs)
────────────────────────────────────────────────────────────── */
function Illus({ type, c, cm, cr }: { type: string; c: string; cm: string; cr: string }) {
  const uid = c.replace(/[^a-z0-9]/gi,"");

  if (type === "cubes") return (
    <svg width="200" height="168" viewBox="0 0 200 168" fill="none">
      <defs>
        <linearGradient id={`il-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={cm} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={c} stopOpacity="0.2"/>
        </linearGradient>
        <filter id={`f-${uid}`}>
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* shadow */}
      <ellipse cx="108" cy="158" rx="62" ry="8" fill={c} opacity="0.1"/>
      {/* back cube */}
      <path d="M36 76 L70 58 L104 76 L104 116 L70 134 L36 116Z" fill={`rgba(${cr},0.08)`} stroke={c} strokeWidth="1.2" opacity="0.5"/>
      <path d="M36 76 L70 94 L104 76" stroke={c} strokeWidth="1.2" fill="none" opacity="0.4"/>
      <path d="M70 94 L70 134" stroke={c} strokeWidth="1.2" opacity="0.4"/>
      {/* front cube */}
      <path d="M88 44 L126 24 L164 44 L164 92 L126 112 L88 92Z" fill={`url(#il-${uid})`} opacity="0.28"/>
      <path d="M88 44 L126 64 L164 44" stroke={cm} strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M126 64 L126 112" stroke={cm} strokeWidth="2" opacity="0.8"/>
      <path d="M88 44 L88 92 L126 112" stroke={c} strokeWidth="1.6" fill="none" opacity="0.65"/>
      <path d="M164 44 L164 92 L126 112" stroke={c} strokeWidth="1.6" fill="none" opacity="0.65"/>
      <path d="M88 44 L126 24 L164 44" stroke={cm} strokeWidth="2.5" fill="none" opacity="0.95"/>
      {/* connector dashed */}
      <path d="M104 76 C118 68 140 58 164 44" stroke={cm} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6"/>
      {/* dots */}
      <circle cx="126" cy="24" r="6" fill={cm} opacity="0.9" filter={`url(#f-${uid})`}/>
      <circle cx="88"  cy="44" r="4" fill={c}  opacity="0.7"/>
      <circle cx="164" cy="44" r="4" fill={c}  opacity="0.7"/>
    </svg>
  );

  if (type === "coins") return (
    <svg width="176" height="158" viewBox="0 0 176 158" fill="none">
      <defs>
        <linearGradient id={`il-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={cm}/>
          <stop offset="100%" stopColor={c} stopOpacity="0.55"/>
        </linearGradient>
      </defs>
      <ellipse cx="88" cy="150" rx="54" ry="7" fill={c} opacity="0.08"/>
      {/* stacked coin rim layers */}
      {[3,2,1].map(i => (
        <g key={i}>
          <path d={`M34 ${76+i*16} L34 ${92+i*16} A54 19 0 0 0 142 ${92+i*16} L142 ${76+i*16}`}
            fill={`rgba(${cr},${0.06+i*0.04})`} stroke={c} strokeWidth="1.3" opacity={0.28+i*0.12}/>
        </g>
      ))}
      {/* top face */}
      <ellipse cx="88" cy="48" rx="54" ry="19" fill={`url(#il-${uid})`} opacity="0.22"/>
      <ellipse cx="88" cy="48" rx="54" ry="19" fill="white" stroke={cm} strokeWidth="2.2" opacity="0.9"/>
      <ellipse cx="88" cy="48" rx="38" ry="12" fill={`rgba(${cr},0.08)`}/>
      <ellipse cx="88" cy="48" rx="38" ry="12" stroke={c} strokeWidth="0.8" fill="none" opacity="0.35"/>
      <text x="88" y="53" textAnchor="middle" fontSize="14" fontWeight="900" fill={c} opacity="0.65">$</text>
      {/* rim */}
      <path d="M34 48 L34 76" stroke={c} strokeWidth="1.3" opacity="0.35"/>
      <path d="M142 48 L142 76" stroke={c} strokeWidth="1.3" opacity="0.35"/>
      <ellipse cx="88" cy="76" rx="54" ry="19" fill="white" stroke={c} strokeWidth="2" opacity="0.9"/>
    </svg>
  );

  if (type === "sparkle") return (
    <svg width="188" height="162" viewBox="0 0 188 162" fill="none">
      <defs>
        <linearGradient id={`il-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={cm} stopOpacity="0.85"/>
          <stop offset="100%" stopColor={c} stopOpacity="0.3"/>
        </linearGradient>
        <filter id={`gw-${uid}`}>
          <feGaussianBlur stdDeviation="10" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <ellipse cx="94" cy="81" rx="65" ry="58" fill={cm} opacity="0.08" filter={`url(#gw-${uid})`}/>
      {/* large sparkle */}
      <path d="M94 10 C96 47 114 64 151 66 C114 68 96 85 94 122 C92 85 74 68 37 66 C74 64 92 47 94 10Z"
        fill="white" stroke={cm} strokeWidth="1.8" opacity="0.93"/>
      <path d="M94 10 C96 47 114 64 151 66 C114 68 96 85 94 122 C92 85 74 68 37 66 C74 64 92 47 94 10Z"
        fill={`url(#il-${uid})`} opacity="0.2"/>
      {/* small top-right */}
      <path d="M152 16 C153 29 160 36 173 37 C160 38 153 45 152 58 C151 45 144 38 131 37 C144 36 151 29 152 16Z"
        fill="white" stroke={cm} strokeWidth="1.1" opacity="0.85"/>
      {/* small bottom-left */}
      <path d="M28 96 C29 106 34 111 44 112 C34 113 29 118 28 128 C27 118 22 113 12 112 C22 111 27 106 28 96Z"
        fill="white" stroke={cm} strokeWidth="1.1" opacity="0.72"/>
      <circle cx="94" cy="66" r="4" fill={cm} opacity="0.6"/>
    </svg>
  );

  if (type === "bag") return (
    <svg width="170" height="158" viewBox="0 0 170 158" fill="none">
      <defs>
        <linearGradient id={`il-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={cm} stopOpacity="0.75"/>
          <stop offset="100%" stopColor={c}  stopOpacity="0.25"/>
        </linearGradient>
      </defs>
      <ellipse cx="85" cy="150" rx="50" ry="7" fill={c} opacity="0.09"/>
      {/* body */}
      <rect x="16" y="50" width="138" height="98" rx="20"
        fill="white" stroke={cm} strokeWidth="2" opacity="0.9"/>
      <rect x="16" y="50" width="138" height="98" rx="20"
        fill={`url(#il-${uid})`} opacity="0.12"/>
      {/* handle */}
      <path d="M48 50 C48 22 122 22 122 50"
        stroke={cm} strokeWidth="3.2" fill="none"
        strokeLinecap="round" opacity="0.82"/>
      {/* clasp */}
      <circle cx="85" cy="100" r="14" fill="white" stroke={c} strokeWidth="2" opacity="0.92"/>
      <circle cx="85" cy="100" r="6"  fill={cm} opacity="0.7"/>
      {/* shine */}
      <path d="M26 70 Q50 60 68 70" stroke="white" strokeWidth="3"
        strokeLinecap="round" opacity="0.6"/>
    </svg>
  );

  // layers (consultancy)
  return (
    <svg width="192" height="158" viewBox="0 0 192 158" fill="none">
      <defs>
        <linearGradient id={`il-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={cm} stopOpacity="0.75"/>
          <stop offset="100%" stopColor={c}  stopOpacity="0.3"/>
        </linearGradient>
      </defs>
      <ellipse cx="96" cy="150" rx="58" ry="7" fill={c} opacity="0.08"/>
      {[2,1,0].map(i => {
        const cy = 36 + i * 36, rx = 64 - i * 5;
        return (
          <g key={i}>
            <path d={`M${96-rx} ${cy+18} L96 ${cy} L${96+rx} ${cy+18} L${96+rx} ${cy+30} L96 ${cy+12} L${96-rx} ${cy+30}Z`}
              fill="white" stroke={cm} strokeWidth="1.5" opacity={0.82-i*0.1}/>
            <path d={`M${96-rx} ${cy+18} L96 ${cy} L${96+rx} ${cy+18}`}
              fill={`url(#il-${uid})`} opacity={0.14+i*0.07}/>
          </g>
        );
      })}
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
   BRAND MARK  (conveyor stripes + K glow)
────────────────────────────────────────────────────────────── */
function BrandMark({ accentDark, accent, accentRgb }: { accentDark: string; accent: string; accentRgb: string }) {
  const uid = accentDark.replace(/[^a-z0-9]/gi,"");
  const W = 224, H = 124, GAP = 9, COUNT = 30, LEAN = 12;

  return (
    <>
      <style>{`
        @keyframes ks-scroll-${uid} {
          from { transform: translateX(0); }
          to   { transform: translateX(${GAP * 2}px); }
        }
        @keyframes ks-beam-${uid} {
          0%   { opacity:0; transform:translateX(-${W*0.9}px) skewX(-${LEAN}deg); }
          10%  { opacity:1; }
          88%  { opacity:1; }
          100% { opacity:0; transform:translateX(${W*1.8}px) skewX(-${LEAN}deg); }
        }
        @keyframes ks-halo-${uid} {
          0%,100% { opacity:0.18; filter:blur(9px); }
          50%     { opacity:0.42; filter:blur(14px); }
        }
        @keyframes ks-draw-${uid} {
          from { stroke-dashoffset: 320; opacity:0; }
          20%  { opacity:1; }
          to   { stroke-dashoffset: 0; opacity:1; }
        }
        @keyframes ks-pulse-${uid} {
          0%,100% { opacity:0.82; }
          50%     { opacity:1; }
        }
        .kss-${uid} { animation: ks-scroll-${uid} 0.55s linear infinite; }
        .ksb-${uid} { animation: ks-beam-${uid} 3s cubic-bezier(0.4,0,0.6,1) infinite; }
        .ksg-${uid} { animation: ks-halo-${uid} 2.4s ease-in-out infinite; }
        .ksd-${uid} {
          stroke-dasharray: 320;
          animation: ks-draw-${uid} 1.2s ease-out forwards,
                     ks-pulse-${uid} 2.4s ease-in-out 1.2s infinite;
        }
      `}</style>

      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" style={{ display:"block" }}>
        <defs>
          <linearGradient id={`ksg-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={accentDark} stopOpacity="0.1"/>
            <stop offset="45%"  stopColor={accent}     stopOpacity="0.8"/>
            <stop offset="100%" stopColor={accentDark} stopOpacity="0.35"/>
          </linearGradient>
          <linearGradient id={`ksb-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="0"/>
            <stop offset="30%"  stopColor="white" stopOpacity="0.45"/>
            <stop offset="50%"  stopColor="white" stopOpacity="0.72"/>
            <stop offset="70%"  stopColor="white" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id={`ksmk-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={accent}      stopOpacity="1"/>
            <stop offset="100%" stopColor={accentDark}   stopOpacity="0.9"/>
          </linearGradient>
          <clipPath id={`ksclip-${uid}`}>
            <rect width={W} height={H}/>
          </clipPath>
        </defs>

        <g clipPath={`url(#ksclip-${uid})`}>
          {/* scrolling stripes */}
          <g className={`kss-${uid}`}>
            {Array.from({ length: COUNT * 2 }).map((_,i) => {
              const cx  = -W * 0.12 + i * GAP;
              const frac= (i % COUNT) / COUNT;
              const op  = 0.12 + frac * 0.65;
              return (
                <rect key={i}
                  x={cx - 2.5} y={-10} width={5} height={H+20}
                  rx={2.5} fill={`url(#ksg-${uid})`}
                  opacity={op} transform={`skewX(-${LEAN})`}
                />
              );
            })}
          </g>

          {/* shimmer beam */}
          <rect className={`ksb-${uid}`}
            x={0} y={-10} width={W*0.28} height={H+20}
            fill={`url(#ksb-${uid})`}
          />

          {/* K glow halo */}
          <path className={`ksg-${uid}`}
            d="M78 18 L78 106 M78 62 L134 18 M78 62 L134 106"
            stroke={accentDark} strokeWidth="26"
            strokeLinecap="round" strokeLinejoin="round"
          />

          {/* K main stroke — draws in on mount, always fully visible */}
          <path className={`ksd-${uid}`}
            d="M78 18 L78 106 M78 62 L134 18 M78 62 L134 106"
            stroke={accentDark}
            strokeWidth="9"
            strokeLinecap="round" strokeLinejoin="round"
          />

          {/* K highlight overlay for extra contrast */}
          <path
            d="M78 18 L78 106 M78 62 L134 18 M78 62 L134 106"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round"
            opacity="0.35"
          />
        </g>
      </svg>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export function SolutionsShowcase() {
  const [active,  setActive]  = useState(0);
  const [pills,   setPills]   = useState(TABS.map(t => t.defaultPill));
  const [pillDir, setPillDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tab = TABS[active];
  const c0  = tab.tabGrad[0], c1 = tab.tabGrad[1];

  function startCycle() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPillDir(1);
      setPills(prev => prev.map((v, idx) =>
        idx !== active ? v : (v + 1) % TABS[idx].pills.length
      ));
    }, 2200);
  }

  useEffect(() => {
    startCycle();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function selectPill(i: number) {
    setPillDir(i > pills[active] ? 1 : -1);
    setPills(prev => prev.map((v, idx) => idx === active ? i : v));
    startCycle();
  }

  return (
    <section style={{
      width: "100%",
      background: "#ffffff",
      padding: "96px 0 110px",
      fontFamily: "-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',Roboto,sans-serif",
    }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 44px" }}>

        {/* ── HEADER ── */}
        <motion.div
          style={{ textAlign: "center", marginBottom: 52 }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div style={{ display:"inline-flex", alignItems:"center", gap:13, marginBottom:18 }}>
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
                animate={{ scale: 1,   opacity: 1, rotate: 0  }}
                exit={{    scale: 0.7, opacity: 0, rotate:  8 }}
                transition={{ duration: 0.25, ease: [0.34,1.56,0.64,1] }}
              >
                <IconBadge grad={tab.tabGrad} size={48}/>
              </motion.div>
            </AnimatePresence>
            <h2 style={{
              margin: 0, fontSize: 34, fontWeight: 800,
              color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1,
            }}>
              KeySol Platform
            </h2>
          </div>
          <p style={{
            margin: "0 auto", maxWidth: 620,
            fontSize: 16.5, color: "#6B7280",
            lineHeight: 1.68, fontWeight: 400,
          }}>
            An AI-driven, composable platform for businesses — uniting digital retail,
            asset finance, and enterprise operations with trust and transparency.
          </p>
        </motion.div>

        {/* ── TABS ── */}
        <div style={{
          display:"flex", justifyContent:"center",
          gap:8, marginBottom:36, flexWrap:"wrap",
        }}>
          {TABS.map((t, i) => {
            const on = i === active;
            return (
              <motion.button key={t.id}
                onClick={() => setActive(i)}
                whileHover={{ y: on ? 0 : -3, scale: on ? 1 : 1.03 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  position: "relative",
                  padding: "11px 28px",
                  borderRadius: 9999,
                  border: on ? "none" : "1.5px solid #E2E8F0",
                  background: on
                    ? `linear-gradient(135deg,${t.tabGrad[0]},${t.tabGrad[1]})`
                    : "#ffffff",
                  color: on ? "#ffffff" : "#475569",
                  fontSize: 15, fontWeight: on ? 700 : 500,
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  boxShadow: on
                    ? `0 6px 22px ${t.tabGrad[0]}48, 0 2px 8px ${t.tabGrad[0]}28`
                    : "0 1px 3px rgba(0,0,0,0.05)",
                  transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {/* shimmer on active tab */}
                {on && (
                  <span style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.22) 50%,transparent 65%)",
                    borderRadius: 9999,
                    animation: "tab-shine 2.5s ease-in-out infinite",
                  }}/>
                )}
                {t.label}
              </motion.button>
            );
          })}
        </div>

        {/* ── CONTENT GRID ── */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.25,0.1,0.25,1] }}
            style={{
              display: "grid",
              gridTemplateColumns: "1.85fr 2.15fr 1.7fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >

            {/* ╔══════════════╗
                ║  LEFT CARD   ║
                ╚══════════════╝ */}
            <div style={{
              background:    tab.leftBg,
              borderRadius:  22,
              overflow:      "hidden",
              display:       "flex",
              flexDirection: "column",
              justifyContent:"space-between",
              minHeight:     500,
              boxShadow:     `0 2px 24px rgba(${tab.accentRgb},0.12), 0 1px 4px rgba(0,0,0,0.04)`,
            }}>
              <div style={{ paddingTop: 18 }}>
                <Ticks color={tab.accent} accentRgb={tab.accentRgb}/>
              </div>

              <div style={{
                flex:1, display:"flex", flexDirection:"column",
                justifyContent:"flex-end", padding:"30px 34px 38px",
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:13, marginBottom:16 }}>
                  <IconBadge grad={tab.tabGrad} size={42}/>
                  <span style={{
                    fontSize:22, fontWeight:800,
                    color:"#111827", letterSpacing:"-0.022em",
                  }}>
                    {tab.title}
                  </span>
                </div>

                <p style={{
                  fontSize:15, color:"#374151",
                  lineHeight:1.72, marginBottom:30, fontWeight:400,
                }}>
                  {tab.desc}
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: `0 8px 28px rgba(${tab.accentRgb},0.2)`,
                    borderColor: tab.accent,
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display:"inline-flex", alignItems:"center", gap:8,
                    padding:"10px 20px",
                    border:`1.5px solid #CBD5E1`,
                    borderRadius:10,
                    background:"#ffffff",
                    color:"#111827",
                    fontSize:14.5, fontWeight:600,
                    cursor:"pointer",
                    width:"fit-content",
                    boxShadow:"0 2px 8px rgba(0,0,0,0.07)",
                    transition:"all 0.18s",
                  }}
                >
                  {tab.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 11L11 2M7 2h4v4"
                      stroke="currentColor" strokeWidth="1.9"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>

              <div style={{ paddingBottom: 18 }}>
                <Ticks color={tab.accent} accentRgb={tab.accentRgb} flip/>
              </div>
            </div>

            {/* ╔═══════════════════╗
                ║  CENTER COLUMN    ║
                ╚═══════════════════╝ */}
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

              {/* chart card */}
              <div style={{
                flex:1,
                background: tab.midBg,
                borderRadius:22,
                overflow:"hidden",
                display:"flex", flexDirection:"column",
                position:"relative",
                boxShadow:`0 2px 20px rgba(${tab.accentRgb},0.1)`,
              }}>
                <AnimatePresence mode="wait" custom={pillDir}>
                  <motion.div
                    key={`ctr-${active}-${pills[active]}`}
                    custom={pillDir}
                    variants={{
                      enter: (d:number) => ({ opacity:0, y:d*30 }),
                      show:  ()         => ({ opacity:1, y:0    }),
                      exit:  (d:number) => ({ opacity:0, y:d*-30}),
                    }}
                    initial="enter" animate="show" exit="exit"
                    transition={{ duration:0.3, ease:[0.25,0.1,0.25,1] }}
                    style={{ display:"flex", flexDirection:"column", flex:1 }}
                  >
                    <p style={{
                      textAlign:"center",
                      fontSize:15, fontWeight:500,
                      color:"#374151", lineHeight:1.62,
                      padding:"26px 30px 14px",
                    }}>
                      {tab.tagline}
                    </p>
                    <div style={{
                      flex:1, padding:"0 18px 24px",
                      display:"flex", alignItems:"flex-end",
                    }}>
                      <Waveform color={tab.accent} accentRgb={tab.accentRgb} tabIdx={active}/>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* pill card */}
              <div style={{
                background: tab.midBg,
                borderRadius:22,
                padding:"28px 24px",
                display:"flex", flexDirection:"column",
                gap:10,
                boxShadow:`0 2px 20px rgba(${tab.accentRgb},0.1)`,
              }}>
                {tab.pills.map((pill, bi) => {
                  const on = pills[active] === bi;
                  return (
                    <button key={pill}
                      onClick={() => selectPill(bi)}
                      style={{
                        position:"relative",
                        width:"100%", padding:"14px 20px",
                        borderRadius:11,
                        border:"1.5px solid",
                        borderColor: on ? "transparent" : "#E5E7EB",
                        background:"transparent",
                        color: on ? "#ffffff" : "#374151",
                        fontSize:15, fontWeight: on ? 700 : 500,
                        cursor:"pointer", textAlign:"center",
                        letterSpacing:"-0.01em",
                        overflow:"hidden", zIndex:0,
                        transition:"color 0.22s, border-color 0.22s",
                      }}
                    >
                      {on && (
                        <motion.span
                          layoutId={`pill-bg-${active}`}
                          style={{
                            position:"absolute", inset:0, borderRadius:10,
                            background:`linear-gradient(135deg,${tab.pillGrad[0]},${tab.pillGrad[1]})`,
                            zIndex:-1,
                            boxShadow:`0 5px 18px ${tab.pillGrad[0]}48`,
                          }}
                          transition={{ type:"spring", stiffness:440, damping:38 }}
                        />
                      )}
                      {!on && (
                        <span style={{
                          position:"absolute", inset:0, borderRadius:10,
                          background:"#ffffff", zIndex:-1,
                        }}/>
                      )}
                      {pill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ╔═══════════════╗
                ║  RIGHT COLUMN ║
                ╚═══════════════╝ */}
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

              {/* illustration card */}
              <div style={{
                flex:1,
                background: tab.illBg,
                borderRadius:22,
                display:"flex", alignItems:"center", justifyContent:"center",
                overflow:"hidden", position:"relative",
                minHeight:222,
                boxShadow:`0 2px 22px rgba(${tab.accentRgb},0.14)`,
              }}>
                <div style={{
                  position:"absolute", inset:0,
                  background:`radial-gradient(ellipse at 50% 38%, rgba(${tab.accentRgb},0.22) 0%, transparent 65%)`,
                  pointerEvents:"none",
                }}/>
                <AnimatePresence mode="wait" custom={pillDir}>
                  <motion.div
                    key={`ill-${active}-${pills[active]}`}
                    custom={pillDir}
                    variants={{
                      enter: (d:number) => ({ opacity:0, y:d*44, scale:0.92 }),
                      show:  ()         => ({ opacity:1, y:0,    scale:1     }),
                      exit:  (d:number) => ({ opacity:0, y:d*-44,scale:0.92  }),
                    }}
                    initial="enter" animate="show" exit="exit"
                    transition={{ duration:0.34, ease:[0.34,1.56,0.64,1] }}
                  >
                    <Illus type={tab.visual} c={tab.accentDark} cm={tab.accent} cr={tab.accentRgb}/>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* brand mark card */}
              <div style={{
                background: tab.bmBg,
                borderRadius:22,
                display:"flex", alignItems:"center", justifyContent:"center",
                padding:"16px 10px",
                overflow:"hidden", position:"relative",
                minHeight:152,
                boxShadow:`0 2px 18px rgba(${tab.accentRgb},0.12)`,
              }}>
                <div style={{
                  position:"absolute", inset:0,
                  background:`radial-gradient(ellipse at 58% 50%, rgba(${tab.accentRgb},0.16) 0%, transparent 65%)`,
                  pointerEvents:"none",
                }}/>
                <BrandMark
                  accentDark={tab.accentDark}
                  accent={tab.accent}
                  accentRgb={tab.accentRgb}
                />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* ── PROGRESS BAR ── */}
      <div style={{ marginTop:52, height:3, background:"#F1F5F9" }}>
        <motion.div
          key={`pb-${active}`}
          initial={{ width:0 }}
          animate={{ width:`${((active+1)/TABS.length)*100}%` }}
          transition={{ duration:0.5, ease:[0.4,0,0.2,1] }}
          style={{
            height:"100%",
            background:`linear-gradient(to right,${c0},${c1})`,
            borderRadius:"0 3px 3px 0",
            boxShadow:`0 0 10px ${c0}70`,
          }}
        />
      </div>

      <style>{`
        @keyframes tab-shine {
          0%   { transform:translateX(-100%) skewX(-15deg); }
          100% { transform:translateX(300%)  skewX(-15deg); }
        }
        @media (max-width:1024px) {
          .ks-pg { grid-template-columns:1fr 1fr !important; }
          .ks-pg > div:last-child { flex-direction:row !important; }
        }
        @media (max-width:680px) {
          .ks-pg { grid-template-columns:1fr !important; }
          .ks-pg > div:last-child { flex-direction:column !important; }
        }
      `}</style>
    </section>
  );
}
