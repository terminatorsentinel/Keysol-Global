import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { SERVICES } from "@/lib/constants";
import { 
  Brain, Code, Building2, TrendingUp, Zap, Rocket, ShoppingCart,
  Check, ArrowRight, Lightbulb, Target, Users 
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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  
  if (!service) {
    return {
      title: "Service Not Found | KeySol Global",
    };
  }

  return {
    title: `${service.title} | KeySol Global`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon];

  // Extended content for each service
  const serviceContent: Record<string, {
    overview: string;
    benefits: string[];
    process: { title: string; description: string }[];
    whoItsFor: string[];
  }> = {
    "ai-automation": {
      overview: "Transform your business operations with intelligent AI solutions. From automated customer service to predictive analytics, we help you leverage the power of artificial intelligence to reduce costs, improve efficiency, and deliver better experiences.",
      benefits: [
        "Reduce operational costs by up to 40%",
        "24/7 automated customer support",
        "Data-driven decision making",
        "Scalable solutions that grow with you",
        "Seamless integration with existing systems",
      ],
      process: [
        { title: "Assessment", description: "We analyze your current processes and identify automation opportunities" },
        { title: "Strategy", description: "Develop a tailored AI implementation roadmap" },
        { title: "Development", description: "Build and train custom AI models for your needs" },
        { title: "Integration", description: "Deploy solutions with minimal disruption" },
        { title: "Optimization", description: "Continuously improve based on performance data" },
      ],
      whoItsFor: [
        "Businesses looking to reduce manual tasks",
        "Companies seeking 24/7 customer support",
        "Organizations with data-heavy operations",
        "Enterprises wanting predictive capabilities",
      ],
    },
    "software-engineering": {
      overview: "Build custom software solutions tailored to your unique business needs. Our engineering team combines technical excellence with business acumen to deliver scalable, reliable applications that drive growth.",
      benefits: [
        "Custom solutions built for your exact needs",
        "Scalable architecture for future growth",
        "Modern tech stack and best practices",
        "Ongoing support and maintenance",
        "Integration with existing systems",
      ],
      process: [
        { title: "Discovery", description: "Understand your requirements and business goals" },
        { title: "Architecture", description: "Design scalable, secure system architecture" },
        { title: "Development", description: "Build with agile methodology and regular updates" },
        { title: "Testing", description: "Rigorous QA to ensure quality and reliability" },
        { title: "Deployment", description: "Smooth launch with monitoring and support" },
      ],
      whoItsFor: [
        "Startups building MVPs",
        "Businesses with unique workflow needs",
        "Companies outgrowing off-the-shelf solutions",
        "Enterprises requiring custom integrations",
      ],
    },
    "enterprise-solutions": {
      overview: "Streamline your enterprise operations with comprehensive ERP, CRM, and internal system solutions. We help large organizations modernize legacy systems and implement enterprise-grade solutions that improve efficiency across departments.",
      benefits: [
        "Unified data across departments",
        "Streamlined business processes",
        "Real-time reporting and analytics",
        "Improved collaboration and communication",
        "Enterprise-grade security and compliance",
      ],
      process: [
        { title: "Analysis", description: "Map current processes and identify improvement areas" },
        { title: "Design", description: "Create integrated system architecture" },
        { title: "Implementation", description: "Deploy with change management support" },
        { title: "Migration", description: "Secure data transfer from legacy systems" },
        { title: "Training", description: "Comprehensive user training and documentation" },
      ],
      whoItsFor: [
        "Large enterprises with complex operations",
        "Organizations with legacy system challenges",
        "Companies needing unified data platforms",
        "Businesses requiring compliance solutions",
      ],
    },
    "digital-growth": {
      overview: "Accelerate your business growth with data-driven digital marketing strategies. From SEO and content marketing to paid advertising and conversion optimization, we help you attract, engage, and convert your ideal customers.",
      benefits: [
        "Increased organic traffic and visibility",
        "Higher conversion rates",
        "Better ROI on marketing spend",
        "Data-driven strategy adjustments",
        "Sustainable long-term growth",
      ],
      process: [
        { title: "Audit", description: "Analyze current marketing performance" },
        { title: "Strategy", description: "Develop comprehensive growth plan" },
        { title: "Execution", description: "Implement campaigns across channels" },
        { title: "Optimize", description: "Continuously improve based on data" },
        { title: "Scale", description: "Expand successful strategies" },
      ],
      whoItsFor: [
        "Businesses seeking more leads",
        "Companies wanting better online visibility",
        "Organizations with underperforming marketing",
        "Startups needing growth acceleration",
      ],
    },
    "no-code-low-code": {
      overview: "Rapidly build and deploy applications using modern no-code and low-code platforms. Perfect for fast-moving businesses that need solutions quickly without sacrificing quality or scalability.",
      benefits: [
        "Faster time to market",
        "Lower development costs",
        "Easy to maintain and update",
        "Empower non-technical teams",
        "Rapid prototyping and iteration",
      ],
      process: [
        { title: "Planning", description: "Define requirements and platform selection" },
        { title: "Design", description: "Create user-friendly interfaces" },
        { title: "Build", description: "Rapid development with visual tools" },
        { title: "Integrate", description: "Connect with existing systems" },
        { title: "Launch", description: "Deploy and train your team" },
      ],
      whoItsFor: [
        "Startups needing quick MVPs",
        "Businesses with limited dev resources",
        "Teams wanting to automate workflows",
        "Companies testing new ideas rapidly",
      ],
    },
    "emerging-tech": {
      overview: "Stay ahead of the curve with cutting-edge Web3, blockchain, and emerging technology solutions. We help forward-thinking businesses leverage these technologies for competitive advantage.",
      benefits: [
        "Future-proof your business",
        "Access to new markets and opportunities",
        "Enhanced security and transparency",
        "Competitive differentiation",
        "Innovation leadership",
      ],
      process: [
        { title: "Consultation", description: "Explore use cases and feasibility" },
        { title: "Strategy", description: "Develop implementation roadmap" },
        { title: "Development", description: "Build secure, scalable solutions" },
        { title: "Testing", description: "Rigorous security and functionality testing" },
        { title: "Launch", description: "Deploy with ongoing support" },
      ],
      whoItsFor: [
        "Forward-thinking enterprises",
        "Companies exploring Web3 opportunities",
        "Businesses needing transparent systems",
        "Organizations wanting innovation leadership",
      ],
    },
    "ecommerce": {
      overview: "Build high-converting e-commerce experiences that drive sales and customer loyalty. From platform selection to optimization, we help you create online stores that perform.",
      benefits: [
        "Higher conversion rates",
        "Improved customer experience",
        "Scalable platform architecture",
        "Integrated payment and shipping",
        "Data-driven optimization",
      ],
      process: [
        { title: "Strategy", description: "Define goals and platform selection" },
        { title: "Design", description: "Create conversion-focused experiences" },
        { title: "Develop", description: "Build with best practices" },
        { title: "Integrate", description: "Connect inventory, payments, shipping" },
        { title: "Optimize", description: "Continuous improvement for conversions" },
      ],
      whoItsFor: [
        "Retailers going online",
        "Brands wanting better conversions",
        "Businesses scaling e-commerce",
        "Companies needing multi-channel sales",
      ],
    },
  };

  const content = serviceContent[service.id] || {
    overview: service.description,
    benefits: service.features,
    process: [],
    whoItsFor: [],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <FadeIn>
            <Link 
              href="/services/" 
              className="inline-flex items-center text-[#6B7280] hover:text-[#0052CC] mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Services
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="w-20 h-20 bg-[#E8F4F8] rounded-2xl flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent className="w-10 h-10 text-[#0052CC]" />}
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-normal text-[#454648] mb-6">
                  {service.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                  {content.overview}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/consultation/">
                  <Button size="lg" showArrow>
                    Discuss Your Project
                  </Button>
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <h3 className="text-xl font-medium text-[#454648] mb-6">What&apos;s Included</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0052CC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[#454648]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#E8F4F8]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Benefits
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#454648]">
                Why choose our {service.title.toLowerCase()} services
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-6 h-full">
                  <div className="w-10 h-10 bg-[#E8F4F8] rounded-lg flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-[#0052CC]" />
                  </div>
                  <p className="text-[#454648] font-medium">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Process Section */}
      {content.process.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                  Our Process
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-normal text-[#454648]">
                  How we deliver excellence
                </h2>
              </FadeIn>
            </div>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="space-y-8">
                {content.process.map((step, index) => (
                  <StaggerItem key={index}>
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#0052CC] rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        {index < content.process.length - 1 && (
                          <div className="w-0.5 h-full bg-[#E8F4F8] mt-4" />
                        )}
                      </div>
                      <div className="pb-8">
                        <h3 className="text-xl font-medium text-[#454648] mb-2">{step.title}</h3>
                        <p className="text-[#6B7280]">{step.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </section>
      )}

      {/* Who It's For */}
      {content.whoItsFor.length > 0 && (
        <section className="py-24 bg-[#F5F5F5]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div>
                  <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                    Who It&apos;s For
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-normal text-[#454648] mb-6">
                    Is this right for your business?
                  </h2>
                  <p className="text-lg text-[#6B7280]">
                    Our {service.title.toLowerCase()} services are designed for businesses 
                    that want to leverage technology for growth and efficiency.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="left">
                <div className="bg-white rounded-2xl p-8">
                  <ul className="space-y-4">
                    {content.whoItsFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#E8F4F8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-3 h-3 text-[#0052CC]" />
                        </div>
                        <span className="text-[#454648]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#454648]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
                Ready to get started?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s discuss how our {service.title.toLowerCase()} services can help 
                transform your business.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/consultation/">
                <Button size="lg" className="bg-[#0052CC] hover:bg-[#0043A7] text-white">
                  Schedule a Free Consultation
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
