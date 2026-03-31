import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { INDUSTRIES, SERVICES } from "@/lib/constants";
import { 
  Factory, Home, Store, GraduationCap, Heart, Truck, Landmark, Sparkles,
  ArrowRight, Check, TrendingUp, Shield, Zap 
} from "lucide-react";

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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.id === slug);
  
  if (!industry) {
    return {
      title: "Industry Not Found | KeySol Global",
    };
  }

  return {
    title: `${industry.title} Solutions | KeySol Global`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.id === slug);

  if (!industry) {
    notFound();
  }

  const IconComponent = iconMap[industry.icon];

  // Extended content for each industry
  const industryContent: Record<string, {
    challenges: string[];
    solutions: { title: string; description: string }[];
    stats: { value: string; label: string }[];
    relatedServices: string[];
  }> = {
    "manufacturing": {
      challenges: [
        "Supply chain visibility and optimization",
        "Production efficiency and downtime reduction",
        "Quality control and compliance",
        "Inventory management across multiple locations",
      ],
      solutions: [
        { title: "Smart Factory Solutions", description: "IoT-enabled production monitoring and predictive maintenance" },
        { title: "ERP Integration", description: "Unified systems for inventory, procurement, and production planning" },
        { title: "Quality Management", description: "Automated quality control and compliance tracking" },
        { title: "Supply Chain Visibility", description: "Real-time tracking and optimization across your supply network" },
      ],
      stats: [
        { value: "30%", label: "Average efficiency gain" },
        { value: "40%", label: "Reduction in downtime" },
        { value: "50%", label: "Faster order fulfillment" },
      ],
      relatedServices: ["ai-automation", "enterprise-solutions", "software-engineering"],
    },
    "real-estate": {
      challenges: [
        "Property management across portfolios",
        "Client relationship management",
        "Marketing and lead generation",
        "Document and transaction management",
      ],
      solutions: [
        { title: "Property Management Systems", description: "Comprehensive tools for managing properties and tenants" },
        { title: "CRM for Real Estate", description: "Track leads, clients, and transactions in one place" },
        { title: "Digital Marketing", description: "Property listings, virtual tours, and lead generation" },
        { title: "Document Automation", description: "Streamline contracts, leases, and paperwork" },
      ],
      stats: [
        { value: "3x", label: "More qualified leads" },
        { value: "60%", label: "Faster deal closing" },
        { value: "45%", label: "Reduction in admin time" },
      ],
      relatedServices: ["digital-growth", "enterprise-solutions", "software-engineering"],
    },
    "retail": {
      challenges: [
        "Omnichannel customer experience",
        "Inventory optimization",
        "Customer data and personalization",
        "Competition from e-commerce giants",
      ],
      solutions: [
        { title: "E-Commerce Platforms", description: "Custom online stores with seamless POS integration" },
        { title: "Inventory Management", description: "Real-time tracking across all channels" },
        { title: "Customer Analytics", description: "Understand and personalize the shopping experience" },
        { title: "Marketing Automation", description: "Targeted campaigns that drive repeat business" },
      ],
      stats: [
        { value: "25%", label: "Increase in sales" },
        { value: "35%", label: "Higher customer retention" },
        { value: "50%", label: "Reduction in stockouts" },
      ],
      relatedServices: ["ecommerce", "digital-growth", "ai-automation"],
    },
    "education": {
      challenges: [
        "Engaging digital learning experiences",
        "Administrative efficiency",
        "Student data management",
        "Remote and hybrid learning",
      ],
      solutions: [
        { title: "Learning Management Systems", description: "Custom LMS tailored to your curriculum" },
        { title: "Student Portals", description: "Self-service platforms for students and parents" },
        { title: "Administrative Tools", description: "Streamline admissions, grading, and reporting" },
        { title: "Virtual Classroom", description: "Interactive online learning environments" },
      ],
      stats: [
        { value: "40%", label: "Improved engagement" },
        { value: "60%", label: "Less admin time" },
        { value: "90%", label: "Student satisfaction" },
      ],
      relatedServices: ["software-engineering", "no-code-low-code", "ai-automation"],
    },
    "healthcare": {
      challenges: [
        "Patient data security and HIPAA compliance",
        "Appointment scheduling and management",
        "Electronic health records integration",
        "Patient communication and engagement",
      ],
      solutions: [
        { title: "HIPAA-Compliant Systems", description: "Secure platforms that meet healthcare regulations" },
        { title: "Practice Management", description: "Scheduling, billing, and patient records in one system" },
        { title: "Patient Portals", description: "Secure access to health information and appointments" },
        { title: "Telehealth Platforms", description: "Virtual consultation and remote care solutions" },
      ],
      stats: [
        { value: "99.9%", label: "Uptime guarantee" },
        { value: "50%", label: "Reduced no-shows" },
        { value: "100%", label: "HIPAA compliance" },
      ],
      relatedServices: ["software-engineering", "enterprise-solutions", "ai-automation"],
    },
    "logistics": {
      challenges: [
        "Route optimization and fuel costs",
        "Real-time shipment tracking",
        "Warehouse management",
        "Customer visibility and communication",
      ],
      solutions: [
        { title: "Fleet Management", description: "GPS tracking, route optimization, and maintenance" },
        { title: "Warehouse Systems", description: "Inventory control and fulfillment automation" },
        { title: "Tracking Platforms", description: "Real-time visibility for you and your customers" },
        { title: "Predictive Analytics", description: "AI-powered demand forecasting and planning" },
      ],
      stats: [
        { value: "20%", label: "Fuel cost reduction" },
        { value: "35%", label: "Faster deliveries" },
        { value: "99%", label: "Tracking accuracy" },
      ],
      relatedServices: ["ai-automation", "software-engineering", "enterprise-solutions"],
    },
    "finance": {
      challenges: [
        "Security and regulatory compliance",
        "Customer onboarding and KYC",
        "Data analytics and reporting",
        "Digital transformation",
      ],
      solutions: [
        { title: "Fintech Platforms", description: "Secure, scalable financial applications" },
        { title: "Compliance Systems", description: "Automated regulatory reporting and monitoring" },
        { title: "Customer Onboarding", description: "Streamlined KYC and account opening" },
        { title: "Analytics Dashboards", description: "Real-time insights for better decisions" },
      ],
      stats: [
        { value: "SOC2", label: "Type II Certified" },
        { value: "70%", label: "Faster onboarding" },
        { value: "24/7", label: "Security monitoring" },
      ],
      relatedServices: ["software-engineering", "emerging-tech", "enterprise-solutions"],
    },
    "startups": {
      challenges: [
        "Building MVPs quickly and cost-effectively",
        "Scaling technology as you grow",
        "Limited technical resources",
        "Competing with established players",
      ],
      solutions: [
        { title: "Rapid MVP Development", description: "Launch fast with no-code and low-code solutions" },
        { title: "Scalable Architecture", description: "Build on foundations that grow with you" },
        { title: "Growth Marketing", description: "Data-driven strategies to acquire customers" },
        { title: "Technical Partnership", description: "Expert team without the overhead" },
      ],
      stats: [
        { value: "4x", label: "Faster time to market" },
        { value: "60%", label: "Lower dev costs" },
        { value: "200+", label: "Startups launched" },
      ],
      relatedServices: ["no-code-low-code", "digital-growth", "software-engineering"],
    },
  };

  const content = industryContent[industry.id] || {
    challenges: [],
    solutions: [],
    stats: [],
    relatedServices: [],
  };

  const relatedServicesList = SERVICES.filter(s => content.relatedServices.includes(s.id));

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <FadeIn>
            <Link 
              href="/industries/" 
              className="inline-flex items-center text-[#6B7280] hover:text-[#0052CC] mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Industries
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
                  {industry.title} Solutions
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                  {industry.description} We understand the unique challenges of the {industry.title.toLowerCase()} 
                  industry and deliver tailored solutions that drive results.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/consultation/">
                  <Button size="lg" showArrow>
                    Discuss Your Needs
                  </Button>
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, index) => (
                  <div key={index} className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#0052CC] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#6B7280]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Challenges Section */}
      {content.challenges.length > 0 && (
        <section className="py-24 bg-[#F5F5F5]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              <FadeIn>
                <div>
                  <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                    Challenges
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-normal text-[#454648] mb-6">
                    Common challenges we solve
                  </h2>
                  <p className="text-lg text-[#6B7280]">
                    The {industry.title.toLowerCase()} industry faces unique obstacles. 
                    Here are the key challenges our solutions address.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  {content.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 font-bold">!</span>
                      </div>
                      <p className="text-[#454648] font-medium pt-2">{challenge}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      )}

      {/* Solutions Section */}
      {content.solutions.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                  Our Solutions
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-normal text-[#454648]">
                  How we help {industry.title.toLowerCase()} businesses
                </h2>
              </FadeIn>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {content.solutions.map((solution, index) => (
                <StaggerItem key={index}>
                  <div className="bg-[#F5F5F5] rounded-2xl p-8 h-full">
                    <div className="w-12 h-12 bg-[#0052CC] rounded-xl flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-[#454648] mb-2">{solution.title}</h3>
                    <p className="text-[#6B7280]">{solution.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      )}

      {/* Related Services */}
      {relatedServicesList.length > 0 && (
        <section className="py-24 bg-[#E8F4F8]">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                  Related Services
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-normal text-[#454648]">
                  Services for {industry.title}
                </h2>
              </FadeIn>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServicesList.map((service) => (
                <StaggerItem key={service.id}>
                  <Link href={service.href}>
                    <div className="bg-white rounded-xl p-6 h-full group hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-medium text-[#454648] mb-2 group-hover:text-[#0052CC] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#6B7280]">{service.description}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#454648]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
                Ready to transform your {industry.title.toLowerCase()} business?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s discuss how our industry-specific solutions can help you 
                overcome challenges and achieve your goals.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/consultation/">
                <Button size="lg" className="bg-[#0052CC] hover:bg-[#0043A7] text-white">
                  Schedule a Consultation
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
