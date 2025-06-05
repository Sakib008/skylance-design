import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

// Define the expertise data
const expertiseData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "Creating beautiful, intuitive interfaces",
    description:
      "We create user-centered designs that not only look stunning but also provide seamless, intuitive experiences that convert visitors into loyal customers.",
    icon: "Palette",
    color: "purple",
    image: "/placeholder.svg?height=600&width=800&text=UI/UX%20Design",
    benefits: [
      "Increased user engagement and satisfaction",
      "Higher conversion rates and reduced bounce rates",
      "Consistent brand experience across all touchpoints",
      "Accessible designs that work for all users",
      "Data-driven design decisions based on user research",
    ],
    process: [
      { title: "Research & Discovery", description: "Understanding your users, business goals, and market landscape" },
      { title: "Wireframing", description: "Creating the structural blueprint of your interface" },
      { title: "Prototyping", description: "Building interactive models to test functionality" },
      { title: "Visual Design", description: "Crafting the aesthetic elements that bring your brand to life" },
      { title: "Testing & Iteration", description: "Refining the design based on real user feedback" },
    ],
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design Systems",
      "Responsive Design",
      "Accessibility Compliance",
    ],
  },
  "web-development": {
    title: "Web Development",
    subtitle: "Building robust, scalable applications",
    description:
      "We develop high-performance web applications using cutting-edge technologies that are optimized for speed, security, and scalability to meet your business needs.",
    icon: "Code",
    color: "blue",
    image: "/placeholder.svg?height=600&width=800&text=Web%20Development",
    benefits: [
      "Fast-loading, responsive websites that work on all devices",
      "Secure, reliable applications with 99.9% uptime",
      "Scalable architecture that grows with your business",
      "SEO-friendly code structure for better rankings",
      "Future-proof technology stack for long-term viability",
    ],
    process: [
      { title: "Planning & Architecture", description: "Defining the technical blueprint and project roadmap" },
      { title: "Frontend Development", description: "Building the user interface with React and Next.js" },
      { title: "Backend Development", description: "Creating APIs and server-side logic" },
      { title: "Database Design", description: "Structuring data for optimal performance and scalability" },
      { title: "Testing & Deployment", description: "Ensuring quality and launching to production" },
    ],
    features: [
      "React & Next.js Development",
      "Full-Stack Solutions",
      "API Development & Integration",
      "Database Design & Management",
      "Authentication & Authorization",
      "Payment Gateway Integration",
      "Third-party API Integration",
      "Cloud Deployment & DevOps",
    ],
  },
  optimization: {
    title: "Performance Optimization",
    subtitle: "Maximizing speed and efficiency",
    description:
      "We optimize your web applications for lightning-fast performance, ensuring excellent user experience and higher search engine rankings through technical excellence.",
    icon: "Zap",
    color: "green",
    image: "/placeholder.svg?height=600&width=800&text=Performance%20Optimization",
    benefits: [
      "Faster page load times and improved user experience",
      "Higher search engine rankings with better Core Web Vitals",
      "Reduced bounce rates and increased conversions",
      "Lower hosting costs through efficient resource usage",
      "Improved mobile performance for on-the-go users",
    ],
    process: [
      { title: "Performance Audit", description: "Identifying bottlenecks and opportunities for improvement" },
      { title: "Asset Optimization", description: "Compressing and optimizing images, scripts, and styles" },
      { title: "Code Refactoring", description: "Improving code quality and efficiency" },
      { title: "Caching Strategy", description: "Implementing effective caching for faster repeat visits" },
      { title: "Monitoring & Maintenance", description: "Ongoing performance tracking and improvements" },
    ],
    features: [
      "Core Web Vitals Optimization",
      "Image & Asset Optimization",
      "Code Splitting & Lazy Loading",
      "Server-Side Rendering & Static Generation",
      "CDN Implementation",
      "Database Query Optimization",
      "Caching Strategies",
      "Performance Monitoring",
    ],
  },
}

export default function ExpertisePage({ params }: { params: { slug: string } }) {
  const expertise = expertiseData[params.slug as keyof typeof expertiseData]

  if (!expertise) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Expertise not found</h1>
          <p className="mb-6">The expertise you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              Our Expertise
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              {expertise.title}{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{expertise.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                Overview
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">{expertise.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{expertise.description}</p>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Key Benefits</h3>
                <div className="space-y-3">
                  {expertise.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src={expertise.image || "/placeholder.svg"}
                  alt={expertise.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful delivery of {expertise.title.toLowerCase()} services.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {expertise.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-8 mb-12">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    {index < expertise.process.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-purple-600/50 to-pink-600/50"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive {expertise.title.toLowerCase()} services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              Ready to Get Started?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Let&apos;s Discuss Your {expertise.title} Needs
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence with our {expertise.title.toLowerCase()} services? Contact us
              today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Explore More
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Related Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our other services that complement {expertise.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(expertiseData)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, data]) => (
                <Link href={`/expertise/${slug}`} key={slug}>
                  <div className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold">{data.title.charAt(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">{data.title}</h3>
                      <p className="text-gray-600 mb-6">{data.subtitle}</p>
                      <Button
                        variant="ghost"
                        className="text-purple-600 hover:text-purple-800 p-0 group-hover:translate-x-2 transition-transform"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
