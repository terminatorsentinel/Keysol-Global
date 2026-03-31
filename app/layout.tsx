import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { KeySolChatbot } from "@/components/layout/keysol-chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keysolglobal.com'),
  title: {
    default: "KeySol Global | AI, Software & Growth Solutions",
    template: "%s | KeySol Global",
  },
  description: "End-to-end AI, software, and growth solutions for modern businesses. We build, automate, and scale enterprises with cutting-edge technology.",
  keywords: ["AI solutions", "software development", "digital transformation", "automation", "enterprise solutions", "ERP", "CRM", "web development", "digital marketing"],
  authors: [{ name: "KeySol Global" }],
  creator: "KeySol Global",
  publisher: "KeySol Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keysolglobal.com",
    siteName: "KeySol Global",
    title: "KeySol Global | AI, Software & Growth Solutions",
    description: "End-to-end AI, software, and growth solutions for modern businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KeySol Global - AI, Software & Growth Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeySol Global | AI, Software & Growth Solutions",
    description: "End-to-end AI, software, and growth solutions for modern businesses.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://keysolglobal.com",
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KeySol Global',
  url: 'https://keysolglobal.com',
  logo: 'https://keysolglobal.com/logo.png',
  description: 'End-to-end AI, software, and growth solutions for modern businesses.',
  sameAs: [
    'https://linkedin.com/company/keysolglobal',
    'https://twitter.com/keysolglobal',
    'https://facebook.com/keysolglobal',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-890',
    contactType: 'sales',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <KeySolChatbot />
      </body>
    </html>
  );
}
