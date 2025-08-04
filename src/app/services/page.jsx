import { Button } from "@/components/ui/button"
import { CheckCircle, Code, Palette, Zap, Smartphone, Database, Shield, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen ">
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
              What We Offer
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs. From initial concept to final deployment,
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">What We Do Best</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across design and development to deliver complete digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* UI/UX Design */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Palette className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">UI/UX Design</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  We create intuitive, beautiful interfaces that users love and that drive conversions. Our design
                  process is user-centered and data-driven.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">User Research & Personas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Wireframing & Architecture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Interactive Prototyping</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Visual Design & Branding</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Usability Testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Design Systems</span>
                    </div>
                  </div>
                </div>
                <Link href="/expertise/ui-ux-design">
                  <Button
                    variant="ghost"
                    className="text-purple-600 hover:text-purple-800 p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Learn more about our design process
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Web Development */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Web Development</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Robust, scalable web applications built with modern technologies. We focus on performance, security,
                  and maintainability.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">React & Next.js</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Full-Stack Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">API Development</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Database Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Cloud Deployment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">DevOps & CI/CD</span>
                    </div>
                  </div>
                </div>
                <Link href="/expertise/web-development">
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Explore our tech stack
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Additional Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Complete Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting services to ensure your web application succeeds throughout its lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Performance Optimization</h3>
              <p className="text-gray-600">
                Lightning-fast loading times, SEO optimization, and Core Web Vitals improvement.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Mobile Optimization</h3>
              <p className="text-gray-600">
                Responsive design and mobile-first approach for perfect experience on all devices.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Database Management</h3>
              <p className="text-gray-600">
                Secure, scalable database solutions with backup and recovery systems.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Security & Maintenance</h3>
              <p className="text-gray-600">
                Regular security updates, monitoring, and maintenance to keep your app secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project plans, wireframes, and technical architecture.",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your application with clean, maintainable code and best practices.",
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, deployment, and ongoing support to ensure your success.",
              },
            ].map((phase, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let&apos;s Build Something Amazing</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let&apos;s discuss your project and see how we can help bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/20 text-lg px-8 py-6 rounded-xl"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
