import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | KeySol Global",
  description: "Find answers to frequently asked questions about our services, process, and how we can help your business.",
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does KeySol Global offer?",
        a: "We offer end-to-end technology solutions including AI & automation, custom software development, enterprise solutions (ERP/CRM), digital marketing and growth strategies, no-code/low-code development, emerging technologies (Web3/blockchain), and e-commerce solutions.",
      },
      {
        q: "How is KeySol Global different from other agencies?",
        a: "We combine deep technical expertise with strategic business thinking. Unlike agencies that focus on just one area, we offer comprehensive solutions that integrate AI, software, and marketing—ensuring all aspects of your digital presence work together seamlessly.",
      },
      {
        q: "Do you work with startups or only enterprises?",
        a: "We work with businesses of all sizes—from early-stage startups to large enterprises. Our solutions are scalable and tailored to meet you where you are, whether you need an MVP or a complete digital transformation.",
      },
    ],
  },
  {
    category: "Process",
    questions: [
      {
        q: "What is your typical project process?",
        a: "Our process follows four key phases: Discover (understanding your needs), Strategize (planning the solution), Execute (building with regular updates), and Optimize (refining and scaling). We maintain transparent communication throughout.",
      },
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive ERP system could take 3-6 months. We provide detailed timelines during our initial consultation.",
      },
      {
        q: "How do you handle project communication?",
        a: "We assign a dedicated project manager to each client and use modern project management tools for transparency. You'll receive regular updates, have access to a client portal, and can schedule check-in calls as needed.",
      },
    ],
  },
  {
    category: "Pricing & Engagement",
    questions: [
      {
        q: "How do you price your services?",
        a: "We offer flexible engagement models: fixed-price projects for well-defined scopes, time-and-materials for evolving requirements, and retainer arrangements for ongoing support. We provide detailed quotes after understanding your specific needs.",
      },
      {
        q: "Do you offer ongoing support after project completion?",
        a: "Yes, we offer various support and maintenance packages. This includes technical support, performance monitoring, security updates, and continuous optimization. Many clients choose our retainer model for ongoing partnership.",
      },
      {
        q: "What is your payment structure?",
        a: "For fixed-price projects, we typically structure payments as: 30% upfront, 40% at midpoint, and 30% upon completion. For ongoing engagements, we bill monthly. We're flexible and can discuss structures that work for your business.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What technologies do you work with?",
        a: "We're technology-agnostic and choose the best tools for each project. Our expertise includes React, Next.js, Node.js, Python, various AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and popular no-code tools like Webflow and Bubble.",
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Absolutely. System integration is one of our core strengths. We have extensive experience integrating with existing ERPs, CRMs, databases, and third-party APIs to ensure seamless data flow across your organization.",
      },
      {
        q: "How do you ensure data security?",
        a: "Security is built into everything we do. We follow industry best practices, implement proper authentication and authorization, use encrypted connections, conduct regular security audits, and ensure compliance with relevant regulations (GDPR, HIPAA, etc.).",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-normal text-[#454648] mb-6">
                Frequently asked questions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#6B7280]">
                Find answers to common questions about our services, process, and how we can help your business grow.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, categoryIndex) => (
              <FadeIn key={category.category} delay={categoryIndex * 0.1}>
                <div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-8">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <details
                        key={faqIndex}
                        className="group bg-white rounded-xl border border-[#E8F4F8] overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#F9FAFB] transition-colors">
                          <span className="font-medium text-[#454648] pr-4">{faq.q}</span>
                          <span className="w-8 h-8 bg-[#E8F4F8] rounded-full flex items-center justify-center flex-shrink-0 group-open:bg-[#0052CC] transition-colors">
                            <svg
                              className="w-4 h-4 text-[#0052CC] group-open:text-white transition-transform group-open:rotate-180"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-[#6B7280] leading-relaxed">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-normal text-[#454648] mb-4">
                Still have questions?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-[#6B7280] mb-8">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact/">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0052CC] text-white rounded-full hover:bg-[#0043A7] transition-colors">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </div>
                </Link>
                <Link href="/consultation/">
                  <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#454648] text-[#454648] rounded-full hover:bg-[#454648] hover:text-white transition-colors">
                    Book a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
