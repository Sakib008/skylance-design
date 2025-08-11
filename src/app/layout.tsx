import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Skylence Design - Best Web Agency in Delhi",
  description:
    "We craft exceptional web applications in Delhi that drive business growth. Specializing in UI/UX design, web development, and digital transformation .",
  keywords: "web design,web design in delhi, web development,best web agency in delhi, UI/UX design, web applications,best web development, digital agency,digital agency in south delhi",
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
