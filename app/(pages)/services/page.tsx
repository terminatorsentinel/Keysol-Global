import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { SERVICES } from "@/lib/constants";
import { 
  Brain, Code, Building2, TrendingUp, Zap, Rocket, ShoppingCart, 
  ArrowRight, Check 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | KeySol Global",
  description: "Explore our comprehensive range of AI, software, and growth solutions designed to transform your business.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Code,
  Building2,
  TrendingUp,
  Zap,
  Rocket,
  ShoppingCart,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Our Services
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#454648] mb-8 leading-tight">
                End-to-end solutions for modern businesses
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#6B7280] leading-relaxed max-w-3xl">
                From AI automation to custom software development, we provide comprehensive 
                technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <StaggerItem key={service.id}>
                  <Link href={service.href}>
                    <Card className="h-full group cursor-pointer p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-[#E8F4F8] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052CC] transition-colors duration-300">
                          {IconComponent && (
                            <IconComponent className="w-8 h-8 text-[#0052CC] group-hover:text-white transition-colors duration-300" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-medium text-[#454648] mb-3 group-hover:text-[#0052CC] transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-[#6B7280] mb-4">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                                <Check className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-[#0052CC] font-medium group-hover:gap-2 transition-all">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                  Why Choose Us
                </p>
                <h2 className="text-3xl sm:text-4xl font-normal text-[#454648] mb-6">
                  The KeySol Global difference
                </h2>
                <p className="text-lg text-[#6B7280] mb-8">
                  We don&apos;t just deliver projects—we build lasting partnerships that drive 
                  continuous growth and innovation.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Integrated Approach",
                      description: "We combine AI, software, and marketing expertise for holistic solutions.",
                    },
                    {
                      title: "Proven Results",
                      description: "200+ successful projects with measurable business impact.",
                    },
                    {
                      title: "Scalable Solutions",
                      description: "Built to grow with your business, from startup to enterprise.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-[#E8F4F8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#0052CC]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#454648] mb-1">{item.title}</h3>
                        <p className="text-[#6B7280] text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="bg-[#E8F4F8] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-medium text-[#454648] mb-4">
                  Not sure what you need?
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Schedule a free consultation with our team. We&apos;ll help you identify 
                  the right solutions for your specific challenges and goals.
                </p>
                <Link href="/consultation/">
                  <Button showArrow>Book a Free Consultation</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
