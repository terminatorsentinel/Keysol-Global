import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { Check, Calendar, Clock, Video, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | KeySol Global",
  description: "Schedule a free 30-minute consultation with our team to discuss your project and explore how we can help.",
};

const benefits = [
  "Free 30-minute strategy session",
  "Discuss your specific challenges and goals",
  "Get expert recommendations tailored to your needs",
  "Learn about our approach and process",
  "No commitment required",
];

const howItWorks = [
  {
    icon: Calendar,
    title: "Choose a Time",
    description: "Select a date and time that works best for your schedule.",
  },
  {
    icon: Video,
    title: "Meet Your Team",
    description: "Connect with our experts via video call at your scheduled time.",
  },
  {
    icon: Clock,
    title: "Get Insights",
    description: "Receive actionable recommendations within 30 minutes.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Free Consultation
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-normal text-[#454648] mb-6">
                Let&apos;s discuss your project
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#6B7280]">
                Schedule a free 30-minute consultation with our team. We&apos;ll discuss 
                your challenges, goals, and how we can help transform your business.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <FadeIn>
              <div className="space-y-12">
                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-6">
                    What you&apos;ll get
                  </h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0052CC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#454648]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h2 className="text-2xl font-medium text-[#454648] mb-6">
                    How it works
                  </h2>
                  <div className="space-y-6">
                    {howItWorks.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-[#E8F4F8] rounded-xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-[#0052CC]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#454648] mb-1">{step.title}</h3>
                          <p className="text-[#6B7280] text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-white rounded-2xl p-6 border border-[#E8F4F8]">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-[#E8F4F8] rounded-full border-2 border-white flex items-center justify-center"
                        >
                          <span className="text-[#0052CC] text-xs font-bold">{String.fromCharCode(64 + i)}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-[#454648]">Trusted by 50+ companies</p>
                      <p className="text-sm text-[#6B7280]">Join businesses transforming with us</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column - Booking Form Placeholder */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-medium text-[#454648] mb-2">
                  Book your consultation
                </h2>
                <p className="text-[#6B7280] mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#454648] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#454648] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#454648] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#454648] mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#454648] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#454648] mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="software">Software & Engineering</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="marketing">Digital Growth & Marketing</option>
                      <option value="nocode">No-Code / Low-Code</option>
                      <option value="emerging">Emerging Technology</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#454648] mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#454648] mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F4F8] focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 outline-none transition-all resize-none"
                      placeholder="Describe your challenges, goals, and what you're looking to achieve..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 w-4 h-4 text-[#0052CC] border-[#E8F4F8] rounded focus:ring-[#0052CC]"
                    />
                    <label htmlFor="consent" className="text-sm text-[#6B7280]">
                      I agree to receive communications from KeySol Global and understand 
                      that I can unsubscribe at any time.
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Request Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
