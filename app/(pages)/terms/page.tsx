import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Terms of Service | KeySol Global",
  description: "Read our Terms of Service to understand the rules and regulations for using KeySol Global's website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <p className="text-[#0052CC] font-medium mb-4 tracking-wide uppercase text-sm">
                Legal
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-normal text-[#454648] mb-8">
                Terms of Service
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-[#6B7280]">
                Last updated: March 17, 2025
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#454648] prose-p:text-[#6B7280]">
            <FadeIn>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using KeySol Global&apos;s website and services, you agree to be bound by these 
                Terms of Service. If you disagree with any part of these terms, you may not access our 
                website or use our services.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                The content, features, and functionality of our website, including but not limited to text, 
                graphics, logos, and software, are owned by KeySol Global and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                publicly perform, republish, download, store, or transmit any of the material on our website 
                without our prior written consent.
              </p>

              <h2>Use of Services</h2>
              <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul>
                <li>Use our services in any way that violates applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Transmit any malicious code or harmful content</li>
                <li>Scrape or harvest data from our website</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2>Service Engagement</h2>
              <p>
                Any services provided by KeySol Global are subject to separate service agreements. 
                These Terms of Service govern your use of our website, while specific project terms 
                are outlined in individual contracts.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, KeySol Global shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages resulting from your 
                use of or inability to use our website or services.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless KeySol Global and its officers, 
                directors, employees, and agents from any claims, liabilities, damages, judgments, 
                awards, losses, costs, or expenses arising out of your use of our website or services.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We have no control over and 
                assume no responsibility for the content, privacy policies, or practices of any 
                third-party websites.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to our website immediately, without prior 
                notice or liability, for any reason, including breach of these Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of New York, without regard to its conflict of law provisions.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any 
                changes by posting the new Terms on this page. Your continued use of our website 
                after such changes constitutes acceptance of the new Terms.
              </p>

              <h2>Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that 
                provision will be limited or eliminated to the minimum extent necessary, and the 
                remaining provisions will continue in full force and effect.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                Email: legal@keysolglobal.com
                <br />
                Address: KeySol Global, New York, NY 10001
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
