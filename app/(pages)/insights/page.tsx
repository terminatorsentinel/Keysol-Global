"use client";

import { useState } from "react";
import Link from "next/link";

const types = ["All", "Blogs", "Case Studies", "Whitepapers", "Podcasts", "Webinars"];

const tags = [
  "AI & Automation", "Software Engineering", "Digital Growth",
  "ERP & CRM", "Cloud Services", "Data Analytics",
  "Digital Strategy", "Emerging Tech", "Business Growth",
  "Cybersecurity", "SaaS", "Industry Trends",
];

const posts = [
  {
    id: "ai-enabled-business-transformation",
    title: "AI-Enabled Business Transformation: What Leaders Need to Know in 2025",
    excerpt: "Four in five business leaders want to integrate AI — but nearly half of IT budgets are stuck maintaining legacy systems. Here's how to break through.",
    type: "Blogs",
    tag: "AI & Automation",
    readTime: "8 min read",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=90",
  },
  {
    id: "choosing-right-erp-system",
    title: "How to Choose the Right ERP System for Your Business",
    excerpt: "A comprehensive guide to evaluating, selecting, and implementing an ERP system that fits your organization's unique needs and growth trajectory.",
    type: "Blogs",
    tag: "ERP & CRM",
    readTime: "12 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=90",
  },
  {
    id: "seo-aeo-geo-guide",
    title: "SEO, AEO, and GEO: The Complete Guide to Search Visibility",
    excerpt: "Understanding the differences between Search Engine Optimization, Answer Engine Optimization, and Generative Engine Optimization.",
    type: "Blogs",
    tag: "Digital Growth",
    readTime: "10 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=90",
  },
  {
    id: "automation-roi",
    title: "Calculating ROI on Business Process Automation",
    excerpt: "Learn how to measure the true return on investment when implementing automation solutions across your enterprise operations.",
    type: "Whitepapers",
    tag: "AI & Automation",
    readTime: "7 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=90",
  },
  {
    id: "startup-tech-stack",
    title: "The Ideal Tech Stack for Modern Startups in 2025",
    excerpt: "A curated guide to selecting technologies that scale with your startup from MVP through enterprise — without costly rewrites.",
    type: "Blogs",
    tag: "Software Engineering",
    readTime: "9 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=90",
  },
  {
    id: "lead-generation-2025",
    title: "Lead Generation Strategies That Actually Work in 2025",
    excerpt: "Proven tactics and emerging channels for generating high-quality leads in today's competitive, AI-saturated landscape.",
    type: "Blogs",
    tag: "Digital Growth",
    readTime: "8 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=90",
  },
  {
    id: "cloud-migration-guide",
    title: "Enterprise Cloud Migration: A Step-by-Step Playbook",
    excerpt: "From assessment to go-live — a practical framework for migrating enterprise workloads to the cloud with minimal disruption.",
    type: "Whitepapers",
    tag: "Cloud Services",
    readTime: "15 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=90",
  },
  {
    id: "ai-chatbots-customer-service",
    title: "Why AI Chatbots Are Transforming Customer Service Forever",
    excerpt: "The new generation of agentic AI is not just answering FAQs — it is resolving complex issues, escalating intelligently, and delighting customers.",
    type: "Blogs",
    tag: "AI & Automation",
    readTime: "6 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=90",
  },
  {
    id: "data-analytics-growth",
    title: "How Data Analytics Drives Smarter Business Decisions",
    excerpt: "Organizations that embed data analytics into their decision-making processes consistently outperform peers by 20% or more.",
    type: "Case Studies",
    tag: "Data Analytics",
    readTime: "11 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=90",
  },
  {
    id: "ai-automation-enterprise",
    title: "AI Automation in the Enterprise: A Practical Implementation Guide",
    excerpt: "How large organizations are moving from AI pilots to enterprise-wide automation — the frameworks, pitfalls, and playbooks that actually work.",
    type: "Blogs",
    tag: "AI & Automation",
    readTime: "14 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=90",
  },
  {
    id: "digital-transformation-whitepaper",
    title: "The Digital Transformation Playbook: From Strategy to Execution",
    excerpt: "A comprehensive whitepaper covering the five pillars of successful digital transformation — technology, people, process, data, and culture.",
    type: "Whitepapers",
    tag: "Digital Strategy",
    readTime: "18 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=90",
  },
  {
    id: "partnership-models",
    title: "Technology Partnership Models: Build, Buy, or Partner?",
    excerpt: "The strategic framework every business leader needs when deciding whether to build software in-house, buy a SaaS solution, or partner with a technology firm.",
    type: "Blogs",
    tag: "Business Growth",
    readTime: "11 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=90",
  },
  {
    id: "enterprise-cybersecurity-2025",
    title: "Enterprise Cybersecurity in 2025: Threats, Frameworks, and the Zero Trust Imperative",
    excerpt: "Ransomware attacks are up 74% year-over-year. Supply chain breaches have become the norm. Here is how enterprise security teams are rebuilding their defences for an AI-era threat landscape.",
    type: "Whitepapers",
    tag: "Cybersecurity",
    readTime: "16 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=90",
  },
  {
    id: "saas-metrics-that-matter",
    title: "The SaaS Metrics That Actually Matter: ARR, NRR, and the Path to Efficient Growth",
    excerpt: "The era of growth-at-all-costs is over. Investors and boards are demanding efficient growth. Here are the metrics that define a healthy, scalable SaaS business in 2025.",
    type: "Blogs",
    tag: "SaaS",
    readTime: "10 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=90",
  },
  {
    id: "emerging-tech-2025",
    title: "Emerging Technologies That Will Reshape Business in the Next 3 Years",
    excerpt: "From spatial computing and quantum-ready encryption to autonomous agents and synthetic data — the technologies moving from research labs to enterprise boardrooms.",
    type: "Blogs",
    tag: "Emerging Tech",
    readTime: "13 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=90",
  },
  {
    id: "industry-trends-enterprise-software",
    title: "The State of Enterprise Software: 2025 Industry Trends Report",
    excerpt: "A data-driven analysis of where enterprise software investment is flowing, which categories are consolidating, and what the shift to AI-native architecture means for technology buyers.",
    type: "Case Studies",
    tag: "Industry Trends",
    readTime: "15 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=90",
  },
  {
    id: "saas-procurement-guide",
    title: "The Enterprise SaaS Procurement Guide: Negotiating, Evaluating, and Managing Vendors",
    excerpt: "Most organizations overpay for SaaS by 20–40%. A structured procurement process recovers that margin and builds a vendor portfolio that actually serves the business.",
    type: "Whitepapers",
    tag: "SaaS",
    readTime: "12 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=90",
  },
  {
    id: "software-engineering-best-practices",
    title: "Software Engineering Best Practices for Scalable Enterprise Systems",
    excerpt: "The principles, patterns, and practices that separate codebases that scale gracefully from those that become unmaintainable under growth — from architecture to deployment.",
    type: "Blogs",
    tag: "Software Engineering",
    readTime: "13 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=90",
  },
  {
    id: "digital-growth-case-study",
    title: "Case Study: How a B2B SaaS Company Grew Organic Traffic by 410% in 18 Months",
    excerpt: "A detailed breakdown of the SEO, content, and conversion strategy that took a mid-market SaaS company from 8,000 to 41,000 monthly organic visitors — without a single paid link.",
    type: "Case Studies",
    tag: "Digital Growth",
    readTime: "9 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=90",
  },
  {
    id: "crm-implementation-guide",
    title: "CRM Implementation Done Right: The Complete Guide for 2025",
    excerpt: "CRM projects have a 60% failure rate — not because of the software, but because of how implementations are managed. Here is the framework that consistently delivers adoption and ROI.",
    type: "Blogs",
    tag: "ERP & CRM",
    readTime: "11 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=90",
  },
];


export default function InsightsPage() {
  const [activeType, setActiveType] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const featuredPost = posts.find((p) => p.featured);
  const filtered = posts.filter((p) => {
    if (p.featured) return false;
    if (activeType !== "All" && p.type !== activeType) return false;
    if (activeTag && p.tag !== activeTag) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif", background: "#fff", minHeight: "100vh" }}>

      {/* ── Hero Banner ── */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0f2d5e 50%, #1a4480 100%)",
        paddingTop: 120, paddingBottom: 80,
        position: "relative", overflow: "hidden",
      }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <p style={{ color: "#60A5FA", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Insights
          </p>
          <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
            Resource Center
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 620, marginBottom: 40 }}>
            Explore expert insights and resources on AI automation, enterprise software, digital growth, and the latest in technology innovation.
          </p>

          {/* Search bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 12, padding: "12px 20px",
            maxWidth: 480,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search by keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "transparent", border: "none", outline: "none",
                color: "#fff", fontSize: 15, flex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section style={{ borderBottom: "1px solid #E5E7EB", background: "#fff", padding: "20px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

          {/* Type filter pills */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase", marginRight: 4, whiteSpace: "nowrap" }}>
              Search by type
            </span>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                style={{
                  padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 500, cursor: "pointer",
                  border: "1.5px solid",
                  borderColor: activeType === t ? "#2563EB" : "#E5E7EB",
                  background: activeType === t ? "#2563EB" : "#fff",
                  color: activeType === t ? "#fff" : "#374151",
                  transition: "all 0.15s",
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tag filter pills */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase", marginRight: 4, whiteSpace: "nowrap" }}>
              Search by tags
            </span>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                style={{
                  padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer",
                  border: "1.5px solid",
                  borderColor: activeTag === tag ? "#2563EB" : "#E5E7EB",
                  background: activeTag === tag ? "#EFF6FF" : "#F9FAFB",
                  color: activeTag === tag ? "#2563EB" : "#6B7280",
                  transition: "all 0.15s",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Reads ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 48px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#111827", marginBottom: 36 }}>Latest Reads</h2>

        {/* Featured post — full width 2-col card */}
        {featuredPost && (
          <Link href={`/insights/${featuredPost.id}/`} style={{ textDecoration: "none", display: "block", marginBottom: 48 }}>
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid #E5E7EB",
              display: "grid", gridTemplateColumns: "1fr 1fr",
            }}>
              <div style={{ height: 300, overflow: "hidden" }}>
                <img src={featuredPost.thumbnail} alt={featuredPost.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{
                  display: "inline-block", padding: "4px 12px", borderRadius: 20,
                  background: "#EFF6FF", color: "#2563EB",
                  fontSize: 12, fontWeight: 600, marginBottom: 16,
                }}>
                  {featuredPost.type}
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111827", lineHeight: 1.35, marginBottom: 16 }}>
                  {featuredPost.title}
                </h3>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 24 }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "#9CA3AF" }}>
                  <span>{featuredPost.readTime}</span>
                </div>
                <div style={{ marginTop: 28 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "#2563EB", fontSize: 14, fontWeight: 600,
                  }}>
                    Read more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Article grid */}
        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {filtered.map((post) => (
              <Link key={post.id} href={`/insights/${post.id}/`} style={{ textDecoration: "none" }}>
                <div style={{
                  borderRadius: 14, overflow: "hidden",
                  border: "1px solid #E5E7EB",
                  background: "#fff",
                  height: "100%", display: "flex", flexDirection: "column",
                }}>
                  <div style={{ height: 180, overflow: "hidden" }}>
                    <img src={post.thumbnail} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "22px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{
                      display: "inline-block", padding: "3px 10px", borderRadius: 20,
                      background: "#F3F4F6", color: "#6B7280",
                      fontSize: 11, fontWeight: 600, marginBottom: 12,
                    }}>
                      {post.type}
                    </span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", lineHeight: 1.45, marginBottom: 10, flex: 1 }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: 13, color: "#6B7280", lineHeight: 1.65, marginBottom: 16,
                      display: "-webkit-box", WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                      <span style={{ color: "#2563EB", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                        Read more
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#6B7280", fontSize: 16 }}>
            No results found. Try adjusting your filters.
          </div>
        )}
      </section>

      {/* ── Newsletter Banner ── */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a4480 100%)",
        padding: "80px 48px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Stay ahead of the curve</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 36 }}>
            Get the latest insights on AI, software, and digital growth delivered to your inbox. No spam — unsubscribe anytime.
          </p>
          <form
            style={{ display: "flex", gap: 12, maxWidth: 460, margin: "0 auto" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1, padding: "14px 18px", borderRadius: 10,
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)", color: "#fff",
                fontSize: 14, outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#2563EB", color: "#fff",
                border: "none", borderRadius: 10,
                padding: "14px 24px", fontSize: 14, fontWeight: 600,
                cursor: "pointer", whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
