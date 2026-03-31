import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { 
  Users, Settings, TrendingUp, Globe, Search, Zap, BarChart3, Shield,
  ArrowRight, Check 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | KeySol Global",
  description: "Discover solutions tailored to your business challenges—lead generation, automation, system modernization, and growth.",
};

const solutions = [
  {
    icon: Users,
    title: "Need More Leads?",
    description: "Generate qualified leads with AI-powered marketing automation, SEO optimization, and targeted ad campaigns that convert.",
    features: [
      "AI-powered lead scoring and qualification",
      "Automated nurture campaigns",
      "SEO and content marketing",
      "Paid advertising optimization",
      "Landing page conversion optimization",
    ],
    href: "/services/digital-growth/",
    color: "blue",
  },
  {
    icon: Settings,
    title: "Need Automation?",
    description: "Streamline operations with intelligent workflow automation, AI agents, and business process optimization.",
    features: [
      "Business process automation",
      "AI-powered chatbots and assistants",
      "Workflow optimization",
      "Integration with existing systems",
      "Custom automation solutions",
    ],
    href: "/services/ai-automation/",
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Need Better Systems?",
    description: "Modernize legacy systems with custom ERP, CRM solutions, and enterprise-grade software architecture.",
    features: [
      "Legacy system modernization",
      "Custom ERP development",
      "CRM implementation",
      "API integration",
      "Cloud migration",
    ],
    href: "/services/enterprise-solutions/",
    color: "purple",
  },
  {
    icon: Globe,
    title: "Need Growth?",
    description: "Scale your business with data-driven strategies, conversion optimization, and digital transformation.",
    features: [
      "Digital transformation strategy",
      "Growth marketing",
      "Conversion rate optimization",
      "Analytics and reporting",
      "Customer journey optimization",
    ],
    href: "/services/",
    color: "orange",
  },
];

const additionalSolutions = [
  {
    icon: Search,
    title: "SEO & Visibility",
    description: "Improve your search rankings and online visibility",
    href: "/services/digital-growth/",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Leverage AI to enhance your products and operations",
    href: "/services/ai-automation/",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn data into actionable business insights",
    href: "/services/software-engineering/",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your business and meet regulatory requirements",
    href: "/services/enterprise-solutions/",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Solutions
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#454648] mb-8 leading-tight">
                Solutions for every business challenge
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#6B7280] leading-relaxed max-w-3xl">
                Whatever challenge you&apos;re facing, we have a solution designed to deliver results. 
                Explore our problem-based solutions to find the right fit for your needs.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Main Solutions */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#E8F4F8] rounded-2xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-[#0052CC]" />
                  </div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-[#6B7280] mb-6 flex-1">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-[#6B7280]">
                        <Check className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-[#0052CC] font-medium group"
                  >
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Additional Solutions */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                More Solutions
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#454648]">
                Additional ways we can help
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSolutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <Link href={solution.href}>
                  <div className="bg-[#F5F5F5] rounded-xl p-6 h-full group hover:bg-[#E8F4F8] transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0052CC] transition-colors">
                      <solution.icon className="w-6 h-6 text-[#0052CC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-medium text-[#454648] mb-2">{solution.title}</h3>
                    <p className="text-sm text-[#6B7280]">{solution.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#E8F4F8]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Our Approach
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#454648]">
                How we solve your challenges
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discover", description: "We analyze your challenges and goals" },
              { number: "02", title: "Strategize", description: "Design a tailored solution roadmap" },
              { number: "03", title: "Execute", description: "Build and implement with precision" },
              { number: "04", title: "Optimize", description: "Continuously improve and scale" },
            ].map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#0052CC]/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-medium text-[#454648] mb-2">{step.title}</h3>
                  <p className="text-[#6B7280]">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="bg-[#454648] rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
                Not sure which solution is right for you?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and we&apos;ll help you identify the best approach 
                for your specific challenges and goals.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/consultation/">
                <Button size="lg" className="bg-[#0052CC] hover:bg-[#0043A7] text-white">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
