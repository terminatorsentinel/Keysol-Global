"use client";

/* ================================================================
   TrustLogos — NETSOL-exact trust bar
   - Full-bleed card (16px margin)
   - Dense tick borders TOP and BOTTOM (both visible)
   - All logos redrawn cleanly
   ================================================================ */

function TickBorder() {
  const items: { h: number; gap: boolean }[] = [];
  for (let i = 0; i < 1200; i++) {
    if (i % 20 === 19) {
      items.push({ h: 0, gap: true });
      continue;
    }
    const mod = i % 4;
    items.push({ h: mod === 0 ? 13 : mod === 2 ? 8 : 5, gap: false });
  }
  return (
    <div style={{
      display: "flex", alignItems: "flex-end",
      width: "100%", height: 18, overflow: "hidden",
    }}>
      {items.map((item, i) =>
        item.gap ? (
          <div key={i} style={{ flexShrink: 0, width: 8 }} />
        ) : (
          <div key={i} style={{
            flexShrink: 0,
            width: 2,
            marginRight: 1.5,
            height: item.h,
            background: "#93C5FD",
            borderRadius: 1,
            opacity: item.h === 13 ? 1 : item.h === 8 ? 0.6 : 0.32,
            alignSelf: "flex-end",
          }} />
        )
      )}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   LOGOS — all redrawn for accuracy
─────────────────────────────────────────────────────────────── */

const GreatWallLogo = () => (
  <svg width="100" height="46" viewBox="0 0 100 46" fill="none">
    <text x="50" y="13" textAnchor="middle" fontSize="10.5" fontWeight="400"
      fill="#0F172A" fontFamily="sans-serif" letterSpacing="0.3">Great Wall</text>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        {/* Full merlon rectangle */}
        <rect x={4 + i*18} y={19} width={12} height={16} fill="none" stroke="#0F172A" strokeWidth="1.4"/>
        {/* Filled top cap */}
        <rect x={4 + i*18} y={19} width={12} height={7} fill="#0F172A"/>
      </g>
    ))}
    {/* Ground line */}
    <line x1="2" y1="35" x2="98" y2="35" stroke="#0F172A" strokeWidth="1.4"/>
  </svg>
);

const PeterbiltLogo = () => (
  <svg width="136" height="46" viewBox="0 0 136 46" fill="none">
    <ellipse cx="68" cy="23" rx="63" ry="19" stroke="#0F172A" strokeWidth="2.2" fill="none"/>
    <text x="68" y="28" textAnchor="middle" fontSize="16"
      fontWeight="700" fontStyle="italic" fill="#0F172A"
      fontFamily="Georgia,'Times New Roman',serif" letterSpacing="0.3">Peterbilt</text>
  </svg>
);

/* BMW: roundel emblem (64×64) + bold "BMW" wordmark to the right */
const BMWLogo = () => (
  <svg width="128" height="64" viewBox="0 0 128 64" fill="none">
    {/* ── Roundel ── center at (32,32) */}
    {/* Outer filled black disc */}
    <circle cx="32" cy="32" r="30" fill="#0F172A"/>
    {/* White band ring */}
    <circle cx="32" cy="32" r="26" fill="white"/>
    {/* Four quadrant fills inside r=21 */}
    {/* Top-left = black */}
    <path d="M32,11 A21,21 0 0,0 11,32 L32,32 Z" fill="#0F172A"/>
    {/* Top-right = white */}
    <path d="M32,11 A21,21 0 0,1 53,32 L32,32 Z" fill="white"/>
    {/* Bottom-right = black */}
    <path d="M53,32 A21,21 0 0,1 32,53 L32,32 Z" fill="#0F172A"/>
    {/* Bottom-left = white */}
    <path d="M32,53 A21,21 0 0,1 11,32 L32,32 Z" fill="white"/>
    {/* Inner circle border */}
    <circle cx="32" cy="32" r="21" stroke="#0F172A" strokeWidth="1" fill="none"/>
    {/* Cross dividers */}
    <line x1="32" y1="11" x2="32" y2="53" stroke="#0F172A" strokeWidth="1"/>
    <line x1="11" y1="32" x2="53" y2="32" stroke="#0F172A" strokeWidth="1"/>
    {/* ── Wordmark beside roundel ── */}
    <text x="95" y="39" textAnchor="middle" fontSize="20"
      fontWeight="900" fill="#0F172A"
      fontFamily="'Arial Black','Arial',sans-serif" letterSpacing="1.5">BMW</text>
  </svg>
);

/* Yamaha: outer circle icon + gap + YAMAHA wordmark */
const YamahaLogo = () => (
  <svg width="148" height="46" viewBox="0 0 148 46" fill="none">
    <circle cx="22" cy="23" r="19" stroke="#0F172A" strokeWidth="1.8" fill="none"/>
    {/* Three spokes — 120° apart */}
    <line x1="22" y1="23" x2="22"  y2="4"    stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="22" y1="23" x2="5.5" y2="35.5" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="22" y1="23" x2="38.5" y2="35.5" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Dots at spoke tips */}
    <circle cx="22"  cy="4"    r="3" fill="#0F172A"/>
    <circle cx="5.5" cy="35.5" r="3" fill="#0F172A"/>
    <circle cx="38.5" cy="35.5" r="3" fill="#0F172A"/>
    {/* YAMAHA wordmark — shifted right for clear gap */}
    <text x="100" y="28" textAnchor="middle" fontSize="17"
      fontWeight="700" fill="#0F172A" fontFamily="sans-serif" letterSpacing="1">YAMAHA</text>
  </svg>
);

/* Mercedes-Benz: exact 3-pointed star logo
   Simple and accurate: thick ring + 3 separate arm paths with concave curves */
const MercedesLogo = () => (
  <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
    {/* Thick outer ring */}
    <circle cx="50" cy="50" r="45" stroke="#0F172A" strokeWidth="5" fill="none"/>
    {/* Star: 3 arms drawn as filled paths. Each arm = narrow spike with inward-curving sides.
        Tips at r=42: top(50,8), lower-right(86.4,71), lower-left(13.6,71) */}
    {/* TOP ARM */}
    <path d="M50,8 Q53,28 56,46 L50,50 L44,46 Q47,28 50,8 Z" fill="#0F172A"/>
    {/* LOWER-RIGHT ARM */}
    <path d="M86.4,71 Q68,68 54,54 L50,50 L52,44 Q70,52 86.4,71 Z" fill="#0F172A"/>
    {/* LOWER-LEFT ARM */}
    <path d="M13.6,71 Q32,68 46,54 L50,50 L48,44 Q30,52 13.6,71 Z" fill="#0F172A"/>
  </svg>
);

/* Close Brothers: ring icon + two-line text — icon properly sized & positioned */
const CloseBrothersLogo = () => (
  <svg width="144" height="46" viewBox="0 0 144 46" fill="none">
    <circle cx="13" cy="21" r="10" stroke="#0F172A" strokeWidth="1.8" fill="none"/>
    <circle cx="13" cy="21" r="5"  fill="#0F172A"/>
    <text x="82" y="17" textAnchor="middle" fontSize="13.5"
      fontWeight="700" fill="#0F172A" fontFamily="sans-serif">Close Brothers</text>
    <text x="82" y="30" textAnchor="middle" fontSize="8.5"
      fill="#64748B" fontFamily="sans-serif" letterSpacing="0.1">Modern Merchant Banking</text>
  </svg>
);

/* Nissan: premium emblem — thick outer oval, solid horizontal bar with raised edges, NISSAN wordmark */
const NissanLogo = () => (
  <svg width="96" height="50" viewBox="0 0 96 50" fill="none">
    {/* Outer oval — thicker stroke for premium feel */}
    <ellipse cx="48" cy="25" rx="45" ry="23" stroke="#0F172A" strokeWidth="2.8" fill="none"/>
    {/* Horizontal bar: solid filled rectangle spanning the oval width */}
    <rect x="5" y="17.5" width="86" height="15" fill="#0F172A" rx="1"/>
    {/* White inner area of bar for text */}
    <rect x="5" y="19" width="86" height="12" fill="white"/>
    {/* Top and bottom bar edge lines for definition */}
    <line x1="5"  y1="17.5" x2="91" y2="17.5" stroke="#0F172A" strokeWidth="2.2"/>
    <line x1="5"  y1="32.5" x2="91" y2="32.5" stroke="#0F172A" strokeWidth="2.2"/>
    {/* NISSAN wordmark — bold, spaced */}
    <text x="48" y="28.5" textAnchor="middle" fontSize="10"
      fontWeight="900" fill="#0F172A" fontFamily="'Arial Black','Arial',sans-serif" letterSpacing="4">NISSAN</text>
  </svg>
);

/* Toyota: correct 3-oval emblem — body oval, vertical center oval, top crossbar oval */
const ToyotaLogo = () => (
  <svg width="84" height="52" viewBox="0 0 84 52" fill="none">
    {/* Large body oval (left) */}
    <ellipse cx="36" cy="24" rx="22" ry="15" stroke="#0F172A" strokeWidth="2" fill="none"/>
    {/* Large body oval (right) — symmetric */}
    <ellipse cx="48" cy="24" rx="22" ry="15" stroke="#0F172A" strokeWidth="2" fill="none"/>
    {/* Vertical center oval — white fill to cut through body ovals */}
    <ellipse cx="42" cy="24" rx="8.5" ry="15" stroke="#0F172A" strokeWidth="2" fill="white"/>
    {/* Top horizontal crossbar oval */}
    <ellipse cx="42" cy="11" rx="17" ry="7" stroke="#0F172A" strokeWidth="2" fill="none"/>
    {/* Wordmark */}
    <text x="42" y="46" textAnchor="middle" fontSize="8"
      fontWeight="700" fill="#0F172A" fontFamily="sans-serif" letterSpacing="3.5">TOYOTA</text>
  </svg>
);

const PaccarLogo = () => (
  <svg width="122" height="46" viewBox="0 0 122 46" fill="none">
    <text x="61" y="33" textAnchor="middle" fontSize="29"
      fontWeight="900" fill="#0F172A"
      fontFamily="'Arial Black','Arial',sans-serif" letterSpacing="0.5">PACCAR</text>
  </svg>
);

const HaydockLogo = () => (
  <svg width="112" height="46" viewBox="0 0 112 46" fill="none">
    <text x="56" y="24" textAnchor="middle" fontSize="18"
      fontWeight="700" fill="#0F172A"
      fontFamily="Georgia,'Times New Roman',serif">Haydock</text>
    <text x="56" y="38" textAnchor="middle" fontSize="11"
      fill="#555" fontFamily="sans-serif" letterSpacing="0.4">Finance</text>
  </svg>
);

const IsuzuLogo = () => (
  <svg width="98" height="46" viewBox="0 0 98 46" fill="none">
    <text x="49" y="24" textAnchor="middle" fontSize="17"
      fontWeight="900" fill="#0F172A"
      fontFamily="'Arial Black','Arial',sans-serif" letterSpacing="2">ISUZU</text>
    <text x="49" y="37" textAnchor="middle" fontSize="10"
      fill="#555" fontFamily="sans-serif" letterSpacing="1">Leasing</text>
  </svg>
);

const brands = [
  { name: "Great Wall",     logo: <GreatWallLogo />,     pad: 52 },
  { name: "Peterbilt",      logo: <PeterbiltLogo />,     pad: 44 },
  { name: "BMW",            logo: <BMWLogo />,            pad: 52 },
  { name: "Yamaha",         logo: <YamahaLogo />,         pad: 44 },
  { name: "Mercedes-Benz",  logo: <MercedesLogo />,       pad: 62 },
  { name: "Close Brothers", logo: <CloseBrothersLogo />,  pad: 36 },
  { name: "Nissan",         logo: <NissanLogo />,         pad: 52 },
  { name: "PACCAR",         logo: <PaccarLogo />,         pad: 44 },
  { name: "Haydock",        logo: <HaydockLogo />,        pad: 48 },
  { name: "Isuzu",          logo: <IsuzuLogo />,          pad: 52 },
];

export function TrustLogos() {
  return (
    <section style={{ width: "100%", background: "#fff", padding: "32px 0" }}>

      <div style={{
        margin: "0 16px",
        borderRadius: 16,
        border: "1px solid #BFDBFE",
        background: "linear-gradient(170deg,#EFF6FF 0%,#F2F7FF 50%,#EEF2FF 100%)",
        overflow: "hidden",
        position: "relative",
        isolation: "isolate",
        /* explicit height so bottom ticks are always visible */
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Blobs */}
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
          <div style={{
            position:"absolute", left:"24%", top:"50%",
            transform:"translate(-50%,-50%)",
            width:360, height:240,
            borderRadius:"50%",
            background:"radial-gradient(ellipse,rgba(191,219,254,1) 0%,transparent 60%)",
            filter:"blur(30px)",
          }}/>
          <div style={{
            position:"absolute", right:"9%", top:"50%",
            transform:"translateY(-50%)",
            width:300, height:210,
            borderRadius:"50%",
            background:"radial-gradient(ellipse,rgba(199,210,254,1) 0%,transparent 60%)",
            filter:"blur(26px)",
          }}/>
        </div>

        {/* ── TOP tick border ── */}
        <div style={{ position:"relative", zIndex:1, paddingTop:10, paddingBottom:2, flexShrink:0 }}>
          <TickBorder />
        </div>

        {/* Headline */}
        <p style={{
          position:"relative", zIndex:1, flexShrink:0,
          margin:0, padding:"18px 0 20px",
          textAlign:"center",
          fontSize:17, fontWeight:700, color:"#0F172A",
          letterSpacing:"-0.01em", lineHeight:1,
          fontFamily:"sans-serif",
        }}>
          The world&apos;s leading brands are powered by KeySol
        </p>

        {/* Logo strip */}
        <div style={{ position:"relative", zIndex:1, overflow:"hidden", paddingBottom:28, flexShrink:0 }}>
          <div style={{
            position:"absolute", left:0, top:0, bottom:0, width:120, zIndex:2, pointerEvents:"none",
            background:"linear-gradient(to right,#EFF6FF 20%,transparent 100%)",
          }}/>
          <div style={{
            position:"absolute", right:0, top:0, bottom:0, width:120, zIndex:2, pointerEvents:"none",
            background:"linear-gradient(to left,#EEF2FF 20%,transparent 100%)",
          }}/>
          <div style={{
            display:"flex", alignItems:"center",
            width:"max-content",
            animation:"ks-marquee 44s linear infinite",
          }}>
            {[...brands, ...brands].map((b, i) => (
              <div key={`${b.name}-${i}`} style={{
                flexShrink:0,
                paddingLeft: b.pad / 2,
                paddingRight: b.pad / 2,
                height:64,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                {b.logo}
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM tick border — NOT flipped, aligned to top so ticks hang down ── */}
        <div style={{
          position:"relative", zIndex:1, flexShrink:0,
          paddingBottom:10, paddingTop:2,
          /* flip vertically so ticks point upward from bottom edge */
          transform:"scaleY(-1)",
        }}>
          <TickBorder />
        </div>

      </div>

      <style>{`
        @keyframes ks-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
