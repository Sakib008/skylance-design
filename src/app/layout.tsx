import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Skylence Design | Premium Web Design & Development Agency in Delhi",
    template: "%s | Skylence Design",
  },
  description:
    "Skylence Design is a top-tier web design and development agency in Delhi. We craft stunning, high-performance websites and digital experiences that drive business growth.",
  keywords: [
    "Web Design Delhi",
    "Web Development",
    "UI/UX Design",
    "Digital Agency",
    "Next.js Developers",
    "Premium Websites",
  ],
  authors: [{ name: "Skylence Design Team" }],
  creator: "Skylence Design",
  metadataBase: new URL("https://skylencedesigns.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skylencedesigns.com",
    title: "Skylence Design | Premium Web Design & Development",
    description:
      "Transform your brand with Skylence Design. We specialize in creating bespoke, high-performance websites that captivate and convert.",
    siteName: "Skylence Design",
    images: [
      {
        url: "/og-image.png", // Ensure you have an og-image.jpg in public folder
        width: 1200,
        height: 630,
        alt: "Skylence Design Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylence Design | Premium Web Design & Development",
    description:
      "Expert web design and development services in Delhi. Elevate your digital presence with Skylence Design.",
    images: ["/og-image.jpg"],
    creator: "@skylencedesign",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token", // Replace with actual token
  },
  other: {
    "nextjs-portal": "disabled",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebDesignCompany",
  name: "Skylence Design",
  url: "https://skylencedesigns.com",
  logo: "https://skylencedesigns.com/logo.png",
  sameAs: [
    "https://www.instagram.com/skylencedesigns",
    "https://www.linkedin.com/company/skylence-design",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  description:
    "Skylence Design is a premium web design and development agency based in Delhi, specializing in creating unique digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ErrorBoundary>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
