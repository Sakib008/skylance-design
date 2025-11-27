import { Code, Palette, Zap, Smartphone, Database, Shield } from "lucide-react"
import { Badge, CTAButton, ServiceCard, BackgroundElements } from "@/components/ui"

export default function ServicesPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <BackgroundElements variant="hero" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3" variant="default" icon={<span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>}>
              What We Offer
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs. From initial concept to final deployment,
              we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundElements variant="section" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="purple">
              Core Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">What We Do Best</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across design and development to deliver complete digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <ServiceCard
              title="UI/UX Design"
              description="We create intuitive, beautiful interfaces that users love and that drive conversions. Our design process is user-centered and data-driven."
              features={[
                "User Research & Personas",
                "Wireframing & Architecture", 
                "Interactive Prototyping",
                "Visual Design & Branding",
                "Usability Testing",
                "Design Systems"
              ]}
              icon={Palette}
              href="/expertise/ui-ux-design"
              color="purple"
            />

            <ServiceCard
              title="Web Development"
              description="Robust, scalable web applications built with modern technologies. We focus on performance, security, and maintainability."
              features={[
                "React & Next.js",
                "Full-Stack Development",
                "API Development",
                "Database Design",
                "Cloud Deployment",
                "DevOps & CI/CD"
              ]}
              icon={Code}
              href="/expertise/web-development"
              color="blue"
            />
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="white" icon={<span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>}>
              Ready to Get Started?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let&apos;s Build Something Amazing</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let&apos;s discuss your project and see how we can help bring your
              vision to life.
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
