import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { INDUSTRIES } from "@/lib/constants";
import { 
  Factory, Home, Store, GraduationCap, Heart, Truck, Landmark, Sparkles,
  ArrowRight, Check 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | KeySol Global",
  description: "Explore our industry-specific solutions for manufacturing, real estate, retail, healthcare, and more.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Home,
  Store,
  GraduationCap,
  Heart,
  Truck,
  Landmark,
  Sparkles,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Industries
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#454648] mb-8 leading-tight">
                Solutions tailored to your industry
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#6B7280] leading-relaxed max-w-3xl">
                We bring deep industry expertise and proven solutions to help businesses 
                across diverse sectors achieve their goals and overcome unique challenges.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => {
              const IconComponent = iconMap[industry.icon];
              return (
                <StaggerItem key={industry.id}>
                  <Link href={industry.href}>
                    <Card className="h-full group cursor-pointer text-center p-8">
                      <div className="w-16 h-16 bg-[#E8F4F8] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0052CC] transition-colors duration-300">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-[#0052CC] group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <h2 className="text-xl font-medium text-[#454648] mb-2 group-hover:text-[#0052CC] transition-colors">
                        {industry.title}
                      </h2>
                      <p className="text-sm text-[#6B7280]">
                        {industry.description}
                      </p>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                  Industry Expertise
                </p>
                <h2 className="text-3xl sm:text-4xl font-normal text-[#454648] mb-6">
                  Why industry-specific solutions matter
                </h2>
                <p className="text-lg text-[#6B7280] mb-8">
                  Every industry has unique challenges, regulations, and opportunities. 
                  Our deep understanding of your sector means we can deliver solutions 
                  that truly fit your needs.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Regulatory Compliance",
                      description: "Solutions built with industry regulations in mind from day one.",
                    },
                    {
                      title: "Proven Best Practices",
                      description: "Leverage our experience from 200+ projects in your industry.",
                    },
                    {
                      title: "Faster Implementation",
                      description: "Start with industry templates and customize for your needs.",
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
                  Don&apos;t see your industry?
                </h3>
                <p className="text-[#6B7280] mb-6">
                  We work with businesses across many sectors. Contact us to discuss 
                  how we can help with your specific industry challenges.
                </p>
                <Link href="/consultation/">
                  <Button showArrow>Get in Touch</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
