"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  CheckCircle,
  ChevronRight,
  Star,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern asymmetric design with overlapping elements */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Premium Web Agency
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                We craft{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  digital
                </span>{" "}
                experiences
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Transforming ideas into exceptional web applications that drive
                business growth through innovative design and cutting-edge
                development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 rounded-xl"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-white hover:text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-12">
                <p className="text-gray-400 mb-3 text-sm">
                  TRUSTED BY INNOVATIVE COMPANIES
                </p>
                <div className="flex flex-wrap gap-8 items-center opacity-70">
                  {["The Pure Jam", "Prime Fit", "Smile Bright Dental"].map(
                    (i) => (
                      <div key={i} className="h-8">
                        <div className="text-white font-bold text-xl">{i}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              {/* 3D-like mockup display */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
                <Image
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                  alt="Web application dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute z-10 -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-xl shadow-lg transform rotate-6">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-white font-medium">
                      Live Project
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute z-10 -bottom-8 -left-8 bg-white p-1 rounded-xl shadow-lg transform -rotate-6">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <div className="text-xs text-white font-medium">
                      5.0 Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern card design with hover effects */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                Our Expertise
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                What We Do Best
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                We specialize in creating cutting-edge web applications that
                combine stunning design with powerful functionality.
              </p>
            </div>
            <Link
              href="/services"
              className="text-purple-600 flex items-center p-2.5 rounded-2xl hover:text-purple-800 hover:bg-purple-50 mt-6 md:mt-0"
            >
              View All Services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/expertise/ui-ux-design"
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 mb-6">
                  Beautiful, intuitive interfaces that users love. We create
                  designs that not only look amazing but convert visitors into
                  customers.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>User Research & Testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Visual Design Systems</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
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

            <Link
              href="/expertise/web-development"
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Web Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Robust, scalable web applications built with modern
                  technologies. Fast, secure, and optimized for performance.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Full-Stack Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>API Integration</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link
              href="/expertise/optimization"
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Lightning-fast performance and SEO optimization. We ensure
                  your web app ranks high and loads instantly.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>SEO Implementation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Analytics Setup</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    className="text-green-600 hover:text-green-800 p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism effect */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20 p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  150+
                </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  5+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Modern masonry-style layout */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                Featured Work
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                Recent Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Take a look at some of our latest projects that showcase our
                expertise in web app design and development.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-purple-600 flex items-center hover:text-purple-800 p-2.5 rounded-2xl hover:bg-purple-50 mt-6 md:mt-0"
            >
              View All Projects <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { height: "h-80", offset: "" },
              { height: "h-96", offset: "lg:mt-12" },
              { height: "h-80", offset: "" },
            ].map((item, index) => (
              <div key={index} className={`group ${item.offset}`}>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <Image
                    src={`https://images.pexels.com/photos/${1779487 + index}/pexels-photo-${1779487 + index}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={`Project ${index + 1}`}
                    width={400}
                    height={600}
                    className={`w-full ${item.height} object-cover group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      E-Commerce Platform
                    </h3>
                    <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Modern shopping experience with advanced features
                    </p>
                    <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                        Stripe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern gradient with floating elements */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              Let&apos;s Collaborate
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something extraordinary
              together. Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-10 left-1/4 transform -translate-x-1/2 bg-white p-1 rounded-xl shadow-lg rotate-6 hidden md:block">
              <div className="bg-slate-900 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-white font-medium">
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 right-1/4 transform translate-x-1/2 bg-white p-1 rounded-xl shadow-lg -rotate-6 hidden md:block">
              <div className="bg-slate-900 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <div className="text-xs text-white font-medium">
                    Premium Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
