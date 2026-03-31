"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { SERVICES } from "@/lib/constants";
import { 
  Brain, Code, Building2, TrendingUp, Zap, Rocket, ShoppingCart, 
  ArrowRight 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Code,
  Building2,
  TrendingUp,
  Zap,
  Rocket,
  ShoppingCart,
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
              Our Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#454648] mb-6">
              End-to-end solutions for modern businesses
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[#6B7280]">
              From AI automation to custom software development, we provide comprehensive 
              technology solutions that drive growth and efficiency.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <StaggerItem key={service.id}>
                <Link href={service.href}>
                  <Card className="h-full group cursor-pointer">
                    <CardHeader>
                      <div className="w-14 h-14 bg-[#E8F4F8] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0052CC] transition-colors duration-300">
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-[#0052CC] group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <CardTitle className="group-hover:text-[#0052CC] transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                            <span className="w-1.5 h-1.5 bg-[#0052CC] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center text-[#0052CC] font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center">
            <Link href="/services/">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
