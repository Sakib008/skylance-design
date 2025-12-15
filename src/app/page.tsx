"use client";

import Image from "next/image";
import { Code, Palette, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import {
  Badge,
  CTAButton,
  ServiceCard,
  StatCard,
  PortfolioCard,
  BackgroundElements,
  FloatingElement,
} from "@/components/ui";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-slate-200 selection:bg-purple-500/30 selection:text-white">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="purple">Sky Lance Designs • 2025</Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-[1.1]"
              >
                We craft <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
                  digital luxury.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
              >
                A premium design agency transforming dental clinics, studios,
                and brands into modern digital experiences.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <CTAButton href="/contact" variant="primary" size="lg">
                  Start Your Project
                </CTAButton>
                <CTAButton href="/portfolio" variant="secondary" size="lg">
                  View Our Work
                </CTAButton>
              </motion.div>

              {/* Minimal Social Proof */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 border-t border-white/10 pt-8"
              >
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  Trusted by
                </p>
                <div className="flex gap-6 grayscale opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {/* Replace text with SVG logos for better premium feel */}
                  <span className="text-xl font-bold text-white">
                    The Pure Jam
                  </span>
                  <span className="text-xl font-bold text-white">
                    Prime Fit
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Floating Glass Cards */}
              <FloatingElement
                text="Live Project"
                icon={
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                }
                position="top-right"
                className="top-10 -right-10 bg-slate-800/80 backdrop-blur-md border-slate-700"
              />

              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 bg-slate-900">
                {/* Use a darker, high-contrast dashboard image */}
                <Image
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                  alt="Dashboard Mockup"
                  width={800}
                  height={600}
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section className="py-32 relative">
        <BackgroundElements variant="section" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Expertise beyond expectations.
            </h2>
            <p className="text-slate-400 text-lg">
              We merge technical precision with aesthetic brilliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              index={0}
              title="UI/UX Design"
              description="Interfaces that feel like second nature. We design systems, not just pages."
              icon={Palette}
              href="/services/design"
            />
            <ServiceCard
              index={1}
              title="Modern Development"
              description="Built on Next.js and React. Blazing fast, SEO optimized, and scalable."
              icon={Code}
              href="/services/dev"
            />
            <ServiceCard
              index={2}
              title="Growth & SEO"
              description="We ensure your brand isn't just seen, but remembered and ranked."
              icon={Rocket}
              href="/services/growth"
            />
          </div>
        </div>
      </section>

      {/* ---------------- STATS (Glass Bar) ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <StatCard
                value="10+"
                label="Active Clients"
                className="text-purple-400"
              />
              <StatCard
                value="100%"
                label="Completion Rate"
                className="text-pink-400"
              />
              <StatCard value="24/7" label="Support" className="text-white" />
              <StatCard
                value="5.0"
                label="Client Rating"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PORTFOLIO SECTION ---------------- */}
      <section className="py-32 bg-[#08080C] relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Selected Works
              </h2>
              <p className="text-slate-500">Curated digital experiences.</p>
            </div>
            <CTAButton
              href="/portfolio"
              variant="outline"
              className="hidden md:flex"
            >
              View All
            </CTAButton>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioCard
              title="Bhanu Dental Clinic"
              description="A calming, trustworthy digital presence for a premium dental practice."
              imageSrc="https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Dental Clinic Website"
              technologies={["Next.js", "Tailwind", "Framer"]}
              className="md:row-span-2 h-[600px]"
            />
            <PortfolioCard
              title="Yoga Arts Life"
              description="Minimalist booking platform for a luxury yoga studio."
              imageSrc="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Yoga Studio"
              technologies={["React", "Node.js"]}
              className="h-[280px]"
            />
            <PortfolioCard
              title="Al Fushan Restaurant"
              description="High-performance food ordering system."
              imageSrc="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Restaurant App"
              technologies={["Next.js", "Stripe"]}
              className="h-[280px]"
            />
          </div>
        </div>
      </section>

      {/* ---------------- CTA / FOOTER PREVIEW ---------------- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              ascend?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute consultation. No sales pressure, just
            strategy.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Schedule Discovery Call
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
