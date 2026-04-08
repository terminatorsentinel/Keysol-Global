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
   LOGOS — KeySol Global Partners (bold, attractive black & white)
─────────────────────────────────────────────────────────────── */

const WisteriaCafeLogo = () => (
  <svg width="160" height="64" viewBox="0 0 160 64" fill="none">
    {/* Elegant circular wreath */}
    <circle cx="32" cy="32" r="28" stroke="#0F172A" strokeWidth="2.5" fill="none"/>
    <circle cx="32" cy="32" r="22" stroke="#0F172A" strokeWidth="1.5" fill="none"/>
    <circle cx="32" cy="32" r="16" stroke="#0F172A" strokeWidth="1" fill="none"/>
    {/* Large flower petals */}
    <ellipse cx="32" cy="18" rx="6" ry="8" fill="#0F172A"/>
    <ellipse cx="44" cy="24" rx="6" ry="8" fill="#0F172A" transform="rotate(72, 44, 24)"/>
    <ellipse cx="42" cy="38" rx="6" ry="8" fill="#0F172A" transform="rotate(144, 42, 38)"/>
    <ellipse cx="22" cy="38" rx="6" ry="8" fill="#0F172A" transform="rotate(216, 22, 38)"/>
    <ellipse cx="20" cy="24" rx="6" ry="8" fill="#0F172A" transform="rotate(288, 20, 24)"/>
    <circle cx="32" cy="32" r="6" fill="white"/>
    {/* Text */}
    <text x="105" y="28" textAnchor="middle" fontSize="18" fontWeight="600" fill="#0F172A" fontFamily="Georgia, serif" fontStyle="italic">Wistéria</text>
    <text x="105" y="50" textAnchor="middle" fontSize="18" fontWeight="600" fill="#0F172A" fontFamily="Georgia, serif" fontStyle="italic">Café</text>
  </svg>
);

const KidsTownLogo = () => (
  <svg width="160" height="64" viewBox="0 0 160 64" fill="none">
    {/* Castle towers */}
    <rect x="8" y="28" width="48" height="28" stroke="#0F172A" strokeWidth="2.5" fill="none"/>
    <rect x="12" y="12" width="12" height="20" fill="#0F172A"/>
    <polygon points="18,2 26,12 10,12" fill="#0F172A"/>
    <rect x="28" y="18" width="12" height="14" fill="#0F172A"/>
    <polygon points="34,6 42,18 26,18" fill="#0F172A"/>
    <rect x="44" y="22" width="10" height="10" fill="#0F172A"/>
    <polygon points="49,12 56,22 42,22" fill="#0F172A"/>
    {/* Door */}
    <rect x="26" y="40" width="12" height="16" fill="white" stroke="#0F172A" strokeWidth="1.5"/>
    {/* Sparkle stars */}
    <circle cx="6" cy="8" r="3" fill="#0F172A"/>
    <circle cx="58" cy="10" r="3" fill="#0F172A"/>
    <circle cx="54" cy="4" r="2" fill="#0F172A"/>
    {/* Text */}
    <text x="110" y="26" textAnchor="middle" fontSize="20" fontWeight="900" fill="#0F172A" fontFamily="sans-serif" letterSpacing="2">KIDS</text>
    <text x="110" y="52" textAnchor="middle" fontSize="20" fontWeight="900" fill="#0F172A" fontFamily="sans-serif" letterSpacing="2">TOWN</text>
  </svg>
);

const AlnafayLogo = () => (
  <svg width="180" height="64" viewBox="0 0 180 64" fill="none">
    {/* Bold underline accent */}
    <rect x="10" y="48" width="140" height="4" fill="#0F172A" rx="2"/>
    {/* Main text */}
    <text x="80" y="42" textAnchor="middle" fontSize="34" fontWeight="900" fill="#0F172A" fontFamily="'Arial Black', sans-serif" letterSpacing="4">ALNAFAY</text>
    {/* Vertical accent */}
    <rect x="152" y="20" width="3" height="36" fill="#0F172A" rx="1"/>
    <text x="165" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B" fontFamily="sans-serif" letterSpacing="1" transform="rotate(-90, 165, 50)">STORE</text>
  </svg>
);

const BrandDesireLogo = () => (
  <svg width="160" height="64" viewBox="0 0 160 64" fill="none">
    {/* Large circular emblem */}
    <circle cx="36" cy="32" r="26" stroke="#0F172A" strokeWidth="3" fill="none"/>
    <circle cx="36" cy="32" r="20" stroke="#0F172A" strokeWidth="2" fill="none"/>
    <circle cx="36" cy="32" r="14" stroke="#0F172A" strokeWidth="1.5" fill="none"/>
    {/* Sparkle stars */}
    <circle cx="36" cy="16" r="3" fill="#0F172A"/>
    <circle cx="48" cy="22" r="2" fill="#0F172A"/>
    <circle cx="50" cy="36" r="2.5" fill="#0F172A"/>
    {/* Center dot */}
    <circle cx="36" cy="32" r="4" fill="#0F172A"/>
    {/* Text */}
    <text x="108" y="28" textAnchor="middle" fontSize="20" fontWeight="500" fill="#0F172A" fontFamily="Georgia, serif" fontStyle="italic">Brand</text>
    <text x="108" y="52" textAnchor="middle" fontSize="20" fontWeight="500" fill="#0F172A" fontFamily="Georgia, serif" fontStyle="italic">Desire</text>
  </svg>
);

const SwagSalonLogo = () => (
  <svg width="170" height="64" viewBox="0 0 170 64" fill="none">
    {/* Large face outline */}
    <circle cx="32" cy="26" r="22" stroke="#0F172A" strokeWidth="2.5" fill="none"/>
    {/* Sunglasses - bold */}
    <rect x="16" y="20" width="12" height="8" rx="2" fill="#0F172A"/>
    <rect x="34" y="20" width="12" height="8" rx="2" fill="#0F172A"/>
    <rect x="28" y="22" width="6" height="3" fill="#0F172A"/>
    {/* Beard - thick */}
    <path d="M18 36 Q32 52 46 36" stroke="#0F172A" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M22 38 Q32 48 42 38" stroke="#0F172A" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Text */}
    <text x="115" y="24" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="3">THE SWAG</text>
    <text x="115" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="3">SALON</text>
  </svg>
);

const BarkaHomesLogo = () => (
  <svg width="170" height="64" viewBox="0 0 170 64" fill="none">
    {/* Shield shape */}
    <path d="M28 6 L52 6 L52 38 Q40 58 28 38 Z" stroke="#0F172A" strokeWidth="3" fill="none"/>
    {/* House inside */}
    <polygon points="40,24 28,14 16,24" fill="#0F172A" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="22" y="24" width="12" height="14" fill="#0F172A"/>
    <rect x="26" y="28" width="4" height="10" fill="white"/>
    {/* Vertical lines in shield */}
    <line x1="32" y1="10" x2="32" y2="44" stroke="#0F172A" strokeWidth="1" opacity="0.3"/>
    <line x1="38" y1="10" x2="38" y2="44" stroke="#0F172A" strokeWidth="1" opacity="0.3"/>
    {/* Text */}
    <text x="115" y="24" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="2">BARKA</text>
    <text x="115" y="46" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="2">HOMES</text>
  </svg>
);

const MMBTrustLogo = () => (
  <svg width="160" height="64" viewBox="0 0 160 64" fill="none">
    {/* Sun with rays */}
    <circle cx="36" cy="32" r="14" fill="#0F172A"/>
    {[0,45,90,135,180,225,270,315].map((angle, i) => (
      <line key={i} x1="36" y1="32" x2={36 + 22 * Math.cos((angle - 90) * Math.PI / 180)} y2={32 + 22 * Math.sin((angle - 90) * Math.PI / 180)} stroke="#0F172A" strokeWidth="3" strokeLinecap="round"/>
    ))}
    {/* Inner circle */}
    <circle cx="36" cy="32" r="8" fill="white"/>
    {/* Text */}
    <text x="108" y="24" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="1">MMB</text>
    <text x="108" y="46" textAnchor="middle" fontSize="12" fontWeight="600" fill="#64748B" fontFamily="sans-serif" letterSpacing="1">TRUST</text>
  </svg>
);

const NewCityParadiseLogo = () => (
  <svg width="170" height="64" viewBox="0 0 170 64" fill="none">
    {/* Large triangle cityscape */}
    <polygon points="40,8 64,56 16,56" stroke="#0F172A" strokeWidth="3" fill="none"/>
    <polygon points="40,16 56,48 24,48" fill="#0F172A"/>
    {/* Building windows */}
    <rect x="34" y="28" width="4" height="4" fill="white"/>
    <rect x="42" y="32" width="4" height="4" fill="white"/>
    <rect x="36" y="38" width="4" height="4" fill="white"/>
    {/* Text */}
    <text x="115" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="1">NEW CITY</text>
    <text x="115" y="46" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="1">PARADISE</text>
  </svg>
);

const Century21Logo = () => (
  <svg width="170" height="64" viewBox="0 0 170 64" fill="none">
    {/* Building silhouette */}
    <rect x="10" y="12" width="16" height="44" fill="#0F172A"/>
    <rect x="28" y="20" width="12" height="36" stroke="#0F172A" strokeWidth="2.5" fill="none"/>
    <rect x="42" y="28" width="8" height="28" stroke="#0F172A" strokeWidth="2" fill="none"/>
    {/* Windows */}
    <rect x="14" y="18" width="4" height="4" fill="white"/>
    <rect x="20" y="18" width="4" height="4" fill="white"/>
    <rect x="14" y="26" width="4" height="4" fill="white"/>
    <rect x="20" y="26" width="4" height="4" fill="white"/>
    <rect x="14" y="34" width="4" height="4" fill="white"/>
    <rect x="20" y="34" width="4" height="4" fill="white"/>
    {/* Text */}
    <text x="115" y="26" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" fontFamily="sans-serif">CENTURY</text>
    <text x="115" y="52" textAnchor="middle" fontSize="26" fontWeight="900" fill="#0F172A" fontFamily="'Arial Black', sans-serif">21</text>
  </svg>
);

const SheherSaazLogo = () => (
  <svg width="160" height="64" viewBox="0 0 160 64" fill="none">
    {/* Geometric blocks */}
    <rect x="10" y="14" width="18" height="18" fill="#0F172A"/>
    <rect x="30" y="14" width="10" height="32" fill="#0F172A"/>
    <rect x="42" y="32" width="14" height="14" fill="#0F172A"/>
    {/* Accent squares */}
    <rect x="14" y="18" width="6" height="6" fill="white"/>
    <rect x="24" y="24" width="4" height="4" fill="white"/>
    <rect x="46" y="38" width="6" height="6" fill="white"/>
    {/* Text */}
    <text x="110" y="26" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="1">Sheher</text>
    <text x="110" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F172A" fontFamily="sans-serif" letterSpacing="1">Saaz</text>
  </svg>
);

const brands = [
  { name: "Wisteria Café",      logo: <WisteriaCafeLogo />,      pad: 56 },
  { name: "Kids Town",         logo: <KidsTownLogo />,         pad: 56 },
  { name: "ALNAFAY Store",     logo: <AlnafayLogo />,          pad: 52 },
  { name: "Brand Desire",      logo: <BrandDesireLogo />,      pad: 52 },
  { name: "The Swag Salon",    logo: <SwagSalonLogo />,        pad: 64 },
  { name: "Barka Homes",       logo: <BarkaHomesLogo />,       pad: 56 },
  { name: "MMB Trust",         logo: <MMBTrustLogo />,         pad: 52 },
  { name: "New City Paradise", logo: <NewCityParadiseLogo />,  pad: 56 },
  { name: "Century 21",        logo: <Century21Logo />,        pad: 56 },
  { name: "Sheher Saaz",       logo: <SheherSaazLogo />,       pad: 52 },
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
                height:80,
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
