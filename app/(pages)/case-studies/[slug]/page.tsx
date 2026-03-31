import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight, Check, Quote } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const caseStudies = [
  {
    id: "techventures-ai-automation",
    title: "Transforming Operations with AI Automation",
    client: "TechVentures Inc.",
    industry: "Technology",
    service: "AI & Automation",
    description: "How we helped a growing tech company reduce operational costs by 40% through intelligent automation.",
    challenge: "TechVentures Inc. was struggling with manual processes that were slowing down their operations and increasing costs. Their customer support team was overwhelmed, and internal workflows were creating bottlenecks.",
    solution: "We implemented a comprehensive AI automation strategy that included intelligent chatbots for customer support, automated workflow processes, and predictive analytics for resource planning.",
    results: [
      { metric: "Cost Reduction", value: "40%", description: "Annual operational cost savings" },
      { metric: "Time Saved", value: "120hrs/week", description: "Across all departments" },
      { metric: "ROI", value: "300%", description: "Return on investment within 12 months" },
      { metric: "Response Time", value: "-75%", description: "Faster customer support responses" },
    ],
    testimonial: {
      quote: "KeySol Global transformed our operations with their AI automation solutions. We've seen a 40% increase in efficiency within just three months.",
      author: "Sarah Chen",
      title: "COO",
    },
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    duration: "4 months",
    team: "5 specialists",
  },
  {
    id: "industrial-erp",
    title: "Modernizing Legacy Systems for Growth",
    client: "Industrial Solutions Co.",
    industry: "Manufacturing",
    service: "Enterprise Solutions",
    description: "A complete ERP transformation that unified operations across 12 locations and improved efficiency.",
    challenge: "Industrial Solutions Co. was running on outdated legacy systems across 12 different locations. Data was siloed, processes were inconsistent, and real-time visibility was impossible.",
    solution: "We designed and implemented a modern, cloud-based ERP system that unified all locations, standardized processes, and provided real-time analytics and reporting.",
    results: [
      { metric: "Efficiency Gain", value: "35%", description: "Overall operational efficiency improvement" },
      { metric: "Locations Unified", value: "12", description: "All facilities on single platform" },
      { metric: "Data Accuracy", value: "99.5%", description: "Improved data reliability" },
      { metric: "Reporting Time", value: "-80%", description: "Faster financial reporting" },
    ],
    testimonial: {
      quote: "Their team delivered a custom ERP system that perfectly fits our manufacturing needs. Professional, responsive, and incredibly skilled.",
      author: "Michael Rodriguez",
      title: "Operations Director",
    },
    technologies: ["SAP", "Node.js", "PostgreSQL", "Azure"],
    duration: "8 months",
    team: "8 specialists",
  },
  {
    id: "growthfirst-marketing",
    title: "Doubling Lead Generation in 6 Months",
    client: "GrowthFirst Agency",
    industry: "Marketing",
    service: "Digital Growth",
    description: "A comprehensive digital marketing strategy that doubled qualified leads and improved conversion rates.",
    challenge: "GrowthFirst Agency needed to scale their client acquisition but was struggling with inconsistent lead quality and high customer acquisition costs.",
    solution: "We implemented an integrated digital marketing strategy including SEO optimization, content marketing, automated lead nurturing, and conversion rate optimization.",
    results: [
      { metric: "Lead Increase", value: "2x", description: "Doubled qualified leads" },
      { metric: "Conversion Rate", value: "+45%", description: "Improved lead-to-customer conversion" },
      { metric: "Revenue Growth", value: "60%", description: "Year-over-year revenue increase" },
      { metric: "CAC Reduction", value: "-30%", description: "Lower customer acquisition cost" },
    ],
    testimonial: {
      quote: "The digital marketing strategy they implemented doubled our lead generation in six months. Truly exceptional results.",
      author: "Emily Watson",
      title: "Marketing VP",
    },
    technologies: ["HubSpot", "Google Ads", "Facebook Ads", "Google Analytics"],
    duration: "6 months",
    team: "4 specialists",
  },
];

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found | KeySol Global",
    };
  }

  return {
    title: `${study.title} | KeySol Global`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <FadeIn>
            <Link 
              href="/case-studies/" 
              className="inline-flex items-center text-[#6B7280] hover:text-[#0052CC] mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Case Studies
            </Link>
          </FadeIn>

          <div className="max-w-4xl">
            {/* Tags */}
            <FadeIn>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-[#E8F4F8] text-[#0052CC] text-sm font-medium rounded-full">
                  {study.industry}
                </span>
                <span className="px-4 py-2 bg-[#F5F5F5] text-[#6B7280] text-sm font-medium rounded-full">
                  {study.service}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-normal text-[#454648] mb-6">
                {study.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                {study.description}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Results Bar */}
      <section className="py-12 bg-[#0052CC]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {study.results.map((result) => (
              <div key={result.metric} className="text-center text-white">
                <div className="text-3xl sm:text-4xl font-bold mb-1">{result.value}</div>
                <div className="text-blue-200 text-sm">{result.metric}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-4">The Challenge</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn delay={0.1}>
                <div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-4">Our Solution</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </FadeIn>

              {/* Results Detail */}
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-6">Key Results</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {study.results.map((result) => (
                      <div key={result.metric} className="bg-[#F5F5F5] rounded-xl p-6">
                        <div className="text-3xl font-bold text-[#0052CC] mb-2">{result.value}</div>
                        <div className="font-medium text-[#454648] mb-1">{result.metric}</div>
                        <div className="text-sm text-[#6B7280]">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Testimonial */}
              <FadeIn delay={0.3}>
                <div className="bg-[#E8F4F8] rounded-2xl p-8">
                  <Quote className="w-10 h-10 text-[#0052CC] mb-4" />
                  <blockquote className="text-xl text-[#454648] leading-relaxed mb-6">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0052CC] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {study.testimonial.author.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-[#454648]">{study.testimonial.author}</div>
                      <div className="text-sm text-[#6B7280]">{study.testimonial.title}, {study.client}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <FadeIn delay={0.2} direction="left">
              <div className="space-y-8">
                {/* Project Info */}
                <div className="bg-[#F5F5F5] rounded-2xl p-6">
                  <h3 className="font-medium text-[#454648] mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-[#6B7280]">Client</div>
                      <div className="font-medium text-[#454648]">{study.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Industry</div>
                      <div className="font-medium text-[#454648]">{study.industry}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Duration</div>
                      <div className="font-medium text-[#454648]">{study.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Team Size</div>
                      <div className="font-medium text-[#454648]">{study.team}</div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-[#F5F5F5] rounded-2xl p-6">
                  <h3 className="font-medium text-[#454648] mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-[#454648] text-sm rounded-lg border border-[#E8F4F8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0052CC] rounded-2xl p-6 text-white">
                  <h3 className="font-medium mb-2">Want similar results?</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Let&apos;s discuss how we can help your business achieve similar success.
                  </p>
                  <Link href="/consultation/">
                    <Button className="w-full bg-white text-[#0052CC] hover:bg-blue-50">
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
