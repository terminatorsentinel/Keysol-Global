import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Privacy Policy | KeySol Global",
  description: "Learn how KeySol Global collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
                Privacy Policy
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
              <h2>Introduction</h2>
              <p>
                KeySol Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul>
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information</li>
                <li>Information you provide in consultation requests</li>
                <li>Communications with us</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers who assist our operations</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information. However, no method of transmission over the internet is 
                100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have rights to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain processing</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience on our website. 
                You can control cookies through your browser settings.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices of these websites.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect 
                information from children under 13.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new policy on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@keysolglobal.com
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
