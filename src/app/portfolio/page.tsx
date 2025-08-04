import Image from "next/image"
import { ExternalLink, Github, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Badge, CTAButton, StatCard, BackgroundElements } from "@/components/ui"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
      category: "E-Commerce",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard for a SaaS platform with real-time data visualization.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "TypeScript", "Chart.js", "Node.js"],
      category: "SaaS",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare App",
      description: "Patient management system with appointment scheduling and medical records.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
      category: "Healthcare",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent profiles.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "MongoDB", "Express", "AWS"],
      category: "Real Estate",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "Online education platform with course creation, progress tracking, and video streaming.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Supabase", "Video.js", "Stripe"],
      category: "Education",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Booking App",
      description: "Table reservation system with menu display, online ordering, and payment processing.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Firebase", "PayPal", "PWA"],
      category: "Restaurant",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <BackgroundElements variant="hero" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" icon={<span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>}>
              Featured Work
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence with
              innovative web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Recent Projects
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Work That Speaks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each project represents our commitment to excellence and innovation in web development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                      <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Button size="sm" className="bg-white text-slate-900 hover:bg-gray-100">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-slate-900"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-slate-900 rounded-full text-sm font-medium backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="text-purple-600 hover:text-purple-800 p-0 group-hover:translate-x-2 transition-transform"
                    >
                      View project details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20 p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Project Success Metrics</h2>
              <p className="text-gray-300">Real results from our portfolio projects</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <StatCard value="150+" label="Projects Delivered" />
              <StatCard value="98%" label="Client Satisfaction" />
              <StatCard value="5+" label="Years Experience" />
              <StatCard value="24/7" label="Support Available" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="white" icon={<span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>}>
              Ready to Start?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let&apos;s Build Your Next Project</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Inspired by our work? Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="white" size="lg">
                Start Your Project
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" size="lg" showArrow={false}>
                View Pricing
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
