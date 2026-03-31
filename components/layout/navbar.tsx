"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exact NETSOL nav structure
  const navItems = [
    { name: "Solutions",   href: "#",             hasDropdown: true  },
    { name: "Marketplace", href: "/marketplace/", hasDropdown: false },
    { name: "Consultancy", href: "/consultancy/", hasDropdown: false },
    { name: "Insights",    href: "/insights/",    hasDropdown: false },
    { name: "About Us",    href: "/about/",       hasDropdown: false },
    { name: "Contact Us",  href: "/contact/",     hasDropdown: false },
  ];

  const platformItems = [
    { title: "AI & Automation", desc: "Autonomous AI agents, chatbots, and intelligent business process automation", href: "/services/ai-automation/" },
    { title: "Custom Software", desc: "Tailor-made SaaS platforms, web apps, and enterprise-grade software solutions", href: "/services/software-engineering/" },
    { title: "ERP & CRM Systems", desc: "End-to-end enterprise resource and customer relationship management systems", href: "/services/software-engineering/" },
    { title: "Digital Growth", desc: "SEO, paid advertising, content marketing and conversion optimization", href: "/services/digital-growth/" },
    { title: "Consultancy", desc: "Strategic technology consulting to align your digital roadmap with business goals", href: "/consultancy/" },
    { title: "AI Labs", desc: "Applied intelligence research accelerating enterprise transformation and innovation", href: "/services/ai-labs/" },
    { title: "Marketplace", desc: "Connect with verified technology partners and solution providers globally", href: "/marketplace/" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200",
        isScrolled ? "shadow-[0_1px_0_0_#e5e7eb]" : "border-b border-[#f0f0f0]"
      )}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>
        <nav className="flex items-center justify-between" style={{ height: 64 }}>

          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="kg1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#60A5FA"/>
                  <stop offset="100%" stopColor="#1D4ED8"/>
                </linearGradient>
              </defs>
              {/* Full K as single path — spine + upper arm + lower arm */}
              <path d="
                M2,2 L8,2 L8,13 L22,2 L30,2 L16,16 L30,30 L22,30 L8,19 L8,30 L2,30 Z
              " fill="url(#kg1)"/>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontWeight: 800, fontSize: 17, color: "#0f172a", letterSpacing: "0.12em", fontFamily: "Inter, sans-serif" }}>KEYSOL</span>
              <span style={{ fontWeight: 400, fontSize: 9, color: "#6B7280", letterSpacing: "0.18em", fontFamily: "Inter, sans-serif", marginTop: 1 }}>GLOBAL</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.name}
                style={{ position: "static" }}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-[3px] px-4 py-2 text-[14px] font-medium transition-colors whitespace-nowrap",
                    activeDropdown === item.name
                      ? "text-[#1A56DB]"
                      : "text-[#374151] hover:text-[#1A56DB]"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 text-[#9CA3AF] transition-transform duration-200 mt-[1px]",
                        activeDropdown === item.name && "rotate-180 text-[#1A56DB]"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      style={{
                        position: "fixed",
                        top: 64,
                        left: 0,
                        right: 0,
                        margin: "0 auto",
                        width: "min(1100px, 96vw)",
                        zIndex: 100,
                        paddingTop: 4,
                      }}
                    >
                      <div style={{
                        background: "white",
                        borderRadius: 16,
                        boxShadow: "0 8px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                        {item.name === "Solutions" ? (
                          <>
                            {/* Solutions mega-menu */}
                            <div style={{ display: "flex" }}>
                              {/* Left sidebar */}
                              <div style={{
                                width: 220, flexShrink: 0,
                                borderRight: "1px solid #F1F5F9",
                                padding: "24px 12px",
                                background: "#FAFBFC",
                              }}>
                                <div style={{
                                  display: "flex", alignItems: "center", justifyContent: "space-between",
                                  padding: "10px 12px", borderRadius: 8,
                                  background: "#F1F5F9", cursor: "pointer",
                                }}>
                                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Overview</span>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"/>
                                  </svg>
                                </div>
                              </div>

                              {/* Right content */}
                              <div style={{ flex: 1, padding: "28px 36px 24px" }}>
                                <div style={{ marginBottom: 6 }}>
                                  <span style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>Solutions</span>
                                </div>
                                <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20, lineHeight: 1.5 }}>
                                  AI-enabled solutions orchestrating intelligent commerce, automation, and growth.
                                </p>
                                <div style={{ height: 1, background: "#E5E7EB", marginBottom: 24 }} />

                                {/* 3-column grid */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px 32px" }}>
                                  {platformItems.map((pi, idx) => (
                                    <Link
                                      key={idx}
                                      href={pi.href}
                                      onClick={() => setActiveDropdown(null)}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <div style={{ cursor: "pointer" }}>
                                        <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 4, lineHeight: 1.3 }}>
                                          {pi.title}
                                        </div>
                                        <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.55 }}>
                                          {pi.desc}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Bottom bar with Get Started */}
                            <div style={{
                              borderTop: "1px solid #F1F5F9",
                              padding: "16px 36px",
                              display: "flex", justifyContent: "flex-end",
                            }}>
                              <Link
                                href="/contact/"
                                onClick={() => setActiveDropdown(null)}
                                style={{
                                  background: "#2563EB", color: "white",
                                  borderRadius: 10, padding: "10px 24px",
                                  fontSize: 14, fontWeight: 600,
                                  textDecoration: "none",
                                  display: "inline-flex", alignItems: "center", gap: 8,
                                }}
                              >
                                Get Started
                              </Link>
                            </div>
                          </>
                        ) : (
                          /* Generic small dropdown for other items */
                          <div style={{ padding: 8 }}>
                            <Link
                              href={item.href}
                              style={{
                                display: "block", padding: "10px 16px",
                                fontSize: 13, fontWeight: 500, color: "#374151",
                                textDecoration: "none", borderRadius: 8,
                              }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              View {item.name}
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right — US flag circle icon */}
          <div className="hidden lg:flex items-center">
            <div
              style={{
                width: 36, height: 36,
                borderRadius: "50%",
                border: "1.5px solid #D1D5DB",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="flag-clip">
                  <circle cx="18" cy="18" r="18"/>
                </clipPath>
                <g clipPath="url(#flag-clip)">
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                    <rect key={i} x="0" y={i * 2.77} width="36" height="2.77"
                      fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
                  ))}
                  <rect x="0" y="0" width="15" height="11.5" fill="#3C3B6E"/>
                  {[1,3,5,7,9].map((row) =>
                    [1,2,3,4,5].map((col) => (
                      <circle key={`${row}-${col}`}
                        cx={col * 2.4} cy={row * 2.1}
                        r="0.6" fill="white" />
                    ))
                  )}
                </g>
              </svg>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#374151]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div style={{ padding: "8px 24px" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-[#374151] text-sm font-medium hover:bg-[#F0F7FF] hover:text-[#1A56DB] rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 ml-1 text-[#9CA3AF]" />}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
