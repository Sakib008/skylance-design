import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Skylence Design - Premium Web Agency",
  description:
    "We craft exceptional web applications that drive business growth. Specializing in UI/UX design, web development, and digital transformation.",
  keywords: "web design, web development, UI/UX design, web applications, digital agency",
  metadataBase: new URL("https://skylencedesigns.com"),
  // This disables the Next.js watermark
  other: {
    "nextjs-portal": "disabled",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
