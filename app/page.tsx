import { Hero } from "@/components/sections/hero";
import { TrustLogos } from "@/components/sections/trust-logos";
import { SolutionsShowcase } from "@/components/sections/solutions-showcase";
import { StatsSection } from "@/components/sections/stats-section";

import { ProcessSection } from "@/components/sections/process-section";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <SolutionsShowcase />
      <StatsSection />
      <ProcessSection />
      <WhoWeServe />
      <Testimonials />
      <CTASection />
    </>
  );
}
