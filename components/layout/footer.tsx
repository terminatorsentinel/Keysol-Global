"use client";

import Link from "next/link";

const linkStyle = { color: "#b0b0b0", fontSize: 13, textDecoration: "none" } as const;
const hoverIn  = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "#fff"; };
const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "#b0b0b0"; };

function Col({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>{title}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map(l => (
          <li key={l.name}>
            <Link href={l.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#2a2a2a", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif", borderTop: "4px solid #1d4ed8" }}>

      {/* ── MAIN FOOTER ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "35px 53px 26px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "198px 1fr 1fr 1fr 1fr", gap: "0 31px" }}>

          {/* COL 1: Logo + Company + Investors */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 20 }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="4" fill="white"/>
                <path d="M7 7 L14 14 L7 21 M14 7 L21 14 L14 21" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>KeySol</span>
            </Link>

            <Col title="" links={[
              { name: "Why KeySol", href: "/about/" },
              { name: "Board Of Directors", href: "/about/board/" },
              { name: "Management Team", href: "/about/team/" },
              { name: "Careers", href: "/careers/" },
            ]}/>

            <div style={{ marginTop: 20 }}>
              <Col title="Investors" links={[
                { name: "Company Information", href: "/investors/" },
                { name: "News", href: "/investors/news/" },
                { name: "Stock Data", href: "/investors/stock/" },
                { name: "SEC Filings", href: "/investors/sec/" },
              ]}/>
            </div>
          </div>

          {/* COL 2: Products */}
          <Col title="Products" links={[
            { name: "Transcend Platform", href: "/products/transcend/" },
            { name: "Digital Retail", href: "/products/digital-retail/" },
            { name: "Intermediary Portals", href: "/products/intermediary-portals/" },
            { name: "Originations", href: "/products/originations/" },
            { name: "Servicing", href: "/products/servicing/" },
            { name: "Wholesale Finance", href: "/products/wholesale-finance/" },
            { name: "Mobility Solutions", href: "/products/mobility/" },
          ]}/>

          {/* COL 3: Consultancy + Insights */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <Col title="Consultancy" links={[
              { name: "Information Security", href: "/consultancy/information-security/" },
              { name: "Digital Solutions", href: "/consultancy/digital-solutions/" },
              { name: "AI, ML & Data Analytics", href: "/consultancy/ai-ml/" },
              { name: "Generative AI", href: "/consultancy/generative-ai/" },
              { name: "Emerging Technologies", href: "/consultancy/emerging-technologies/" },
              { name: "Cloud Services", href: "/consultancy/cloud/" },
              { name: "Data Engineering", href: "/consultancy/data-engineering/" },
            ]}/>
            <Col title="Insights" links={[
              { name: "Case Studies", href: "/insights/case-studies/" },
              { name: "Guides", href: "/insights/guides/" },
              { name: "Blogs", href: "/insights/blogs/" },
              { name: "Events", href: "/insights/events/" },
            ]}/>
          </div>

          {/* COL 4: Solutions + Marketplace */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <Col title="Solutions" links={[
              { name: "Asset Finance", href: "/solutions/asset-finance/" },
              { name: "Automotive Finance", href: "/solutions/automotive-finance/" },
              { name: "Equipment Finance", href: "/solutions/equipment-finance/" },
            ]}/>
            <Col title="Marketplace" links={[
              { name: "Calculation Engine", href: "/marketplace/calculation-engine/" },
              { name: "Document Generation", href: "/marketplace/document-generation/" },
              { name: "API Library", href: "/marketplace/api-library/" },
              { name: "Loan Origination System", href: "/marketplace/loan-origination/" },
              { name: "Customer Care Portal", href: "/marketplace/customer-care/" },
              { name: "Tax Calculation Engine", href: "/marketplace/tax-calculation/" },
              { name: "Credit Decisioning Engine", href: "/marketplace/credit-decisioning/" },
            ]}/>
          </div>

          {/* COL 5: Contact Us */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact Us</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 9 }}>Corporate Headquarters</p>
            <p style={{ fontSize: 13, color: "#b0b0b0", marginBottom: 4, lineHeight: 1.55 }}>
              Address: 16000 Ventura Blvd, Suite 770 Encino, CA 91436, USA
            </p>
            <p style={{ fontSize: 13, color: "#b0b0b0", marginBottom: 20 }}>Phone: +1 818 222 9195</p>

            <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>Connect With Us</p>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="https://x.com/keysolglobal" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/keysolglobal" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://facebook.com/keysolglobal" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com/@keysolglobal" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2a2a2a"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "15px 53px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 13, color: "#888" }}>© {new Date().getFullYear()} KeySol Global. All Rights Reserved.</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            {[
              { name: "Terms of Use", href: "/terms/" },
              { name: "Privacy Policy", href: "/privacy/" },
              { name: "Human Rights Policy", href: "/human-rights/" },
              { name: "Modern Slavery Act", href: "/modern-slavery/" },
            ].map((l, i) => (
              <span key={l.name} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ color: "#555", margin: "0 10px" }}>|</span>}
                <Link href={l.href} style={{ fontSize: 13, color: "#888", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                >{l.name}</Link>
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
