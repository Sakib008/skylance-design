"use client"

import Image from "next/image";
import {
  Code,
  Palette,
  Zap,
  Star,
} from "lucide-react";
import {
  Badge,
  CTAButton,
  ServiceCard,
  StatCard,
  PortfolioCard,
  SectionHeader,
  BackgroundElements,
  FloatingElement
} from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern asymmetric design with overlapping elements */}
      <section className="relative overflow-hidden md:px-12 bg-slate-900 py-20 lg:py-32">
        {/* Background elements */}
        <BackgroundElements variant="hero" />

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="default" icon={<span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>}>
                Premium Web Agency
              </Badge>
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
                <CTAButton href="/contact" variant="primary" size="lg">
                  Start Your Project
                </CTAButton>
                <CTAButton href="/portfolio" variant="secondary" size="lg" showArrow={false}>
                  View Our Work
                </CTAButton>
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
              <FloatingElement
                icon={<div className="w-3 h-3 rounded-full bg-green-500"></div>}
                text="Live Project"
                position="top-right"
              />

              <FloatingElement
                icon={<Star className="h-4 w-4 text-yellow-400" />}
                text="5.0 Rating"
                position="bottom-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern card design with hover effects */}
      <section className="py-24 md:px-12 bg-white relative overflow-hidden">
        {/* Background elements */}
        <BackgroundElements variant="section" />

        <div className="container mx-auto px-4 relative">
          <SectionHeader
            badge="Our Expertise"
            title="What We Do Best"
            description="We specialize in creating cutting-edge web applications that combine stunning design with powerful functionality."
            linkText="View All Services"
            linkHref="/services"
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <ServiceCard
              title="UI/UX Design"
              description="Beautiful, intuitive interfaces that users love. We create designs that not only look amazing but convert visitors into customers."
              features={["User Research & Testing", "Wireframing & Prototyping", "Visual Design Systems"]}
              icon={Palette}
              href="/expertise/ui-ux-design"
              color="purple"
            />

            <ServiceCard
              title="Web Development"
              description="Robust, scalable web applications built with modern technologies. Fast, secure, and optimized for performance."
              features={["React & Next.js", "Full-Stack Solutions", "API Integration"]}
              icon={Code}
              href="/expertise/web-development"
              color="blue"
            />

            <ServiceCard
              title="Optimization"
              description="Lightning-fast performance and SEO optimization. We ensure your web app ranks high and loads instantly."
              features={["Performance Optimization", "SEO Implementation", "Analytics Setup"]}
              icon={Zap}
              href="/expertise/optimization"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism effect */}
      <section className="py-24 md:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        {/* Background elements */}
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20 p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <StatCard value="7+" label="Projects Completed" />
              <StatCard value="98%" label="Client Satisfaction" />
              <StatCard value="1+" label="Years Experience" />
              <StatCard value="24/7" label="Support Available" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Modern masonry-style layout */}
      <section className="py-24 md:px-12 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <BackgroundElements variant="section" />

        <div className="container mx-auto px-4 relative">
          <SectionHeader
            badge="Featured Work"
            title="Recent Projects"
            description="Take a look at some of our latest projects that showcase our expertise in web app design and development."
            linkText="View All Projects"
            linkHref="/portfolio"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="E-Commerce Platform"
              description="Modern shopping experience with advanced features"
              imageSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="E-commerce platform"
              technologies={["React", "Next.js", "Stripe"]}
              height="h-96"
              offset="lg:mb-12"
            />
            <PortfolioCard
              title="SaaS Dashboard"
              description="Comprehensive analytics dashboard with real-time data"
              imageSrc="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="SaaS dashboard"
              technologies={["React", "TypeScript", "Chart.js"]}
              height="h-96"
              offset="lg:mt-12"
            />
            <PortfolioCard
              title="Healthcare App"
              description="Patient management system with appointment scheduling"
              imageSrc="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Healthcare app"
              technologies={["Next.js", "Prisma", "Tailwind"]}
              height="h-96"
              offset="lg:mb-12"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Modern gradient with floating elements */}
      <section className="py-24 md:px-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>

        {/* Decorative elements */}
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="white" icon={<span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>}>
              Let&apos;s Collaborate
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something extraordinary
              together. Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="white" size="lg" showArrow={false}>
                Get Free Consultation
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" size="lg" showArrow={false}>
                View Pricing
              </CTAButton>
            </div>
                 `
            {/* Floating elements */}
            <FloatingElement
              icon={<div className="w-3 h-3 rounded-full bg-green-500"></div>}
              text="24/7 Support"
              position="bottom-left"
              className="absolute -bottom-10 left-1/4 transform -translate-x-1/2"
            />

            <FloatingElement
              icon={<Star className="h-4 w-4 text-yellow-400" />}
              text="Premium Service"
              position="top-right"
              className="absolute -top-10 right-1/4 transform translate-x-1/2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
