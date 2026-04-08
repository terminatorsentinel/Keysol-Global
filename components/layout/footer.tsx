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
                { name: "News", href: "/insights/" },
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
              { name: "Blogs", href: "/insights/" },
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

            {/* Dubai */}
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 5 }}>Dubai Head Office</p>
            <p style={{ fontSize: 12, color: "#b0b0b0", lineHeight: 1.65, marginBottom: 3 }}>
              Office #38, Mezzanine Floor, NBD Building<br/>
              Al Wuheida Road, Al Mamzar, Dubai
            </p>
            <p style={{ fontSize: 12, color: "#b0b0b0", marginBottom: 16 }}>+971 4 286 5433</p>

            {/* Pakistan */}
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 5 }}>Pakistan Office</p>
            <p style={{ fontSize: 12, color: "#b0b0b0", lineHeight: 1.65, marginBottom: 3 }}>
              1st Floor, Plot No 154, Block-B<br/>
              PCSIR Staff Coop. Housing Society<br/>
              Main College Road, Lahore 54700
            </p>
            <p style={{ fontSize: 12, color: "#b0b0b0", marginBottom: 16 }}>+92 310 439 8921</p>

            <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>Connect With Us</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/keysolglobalofficial/" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut} title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/keysolglobalofficial" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut} title="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/keysolglobalofficial/" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut} title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/keysolglobal" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut} title="X (Twitter)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://api.whatsapp.com/send/?phone=%2B923104398921&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut} title="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="https://www.pinterest.com/keysolglobalofficial/" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b0b0" }} onMouseEnter={hoverIn} onMouseLeave={hoverOut} title="Pinterest">
                <svg width="15" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
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
