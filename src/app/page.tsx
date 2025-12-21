"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Code, Rocket } from "lucide-react";
import {
  Badge,
  CTAButton,
  ServiceCard,
  // StatCard,
  PortfolioCard,
} from "@/components/ui";
import NoiseOverlay from "@/components/ui/NoiseOverlay"; // Import the new component
import VelocityScroll from "@/components/ui/VelocityScroll"; // Import the new component

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Spotlight Mouse Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-slate-200 selection:bg-pink-500/30">
      <NoiseOverlay />

      {/* ---------------- 1. CINEMATIC SPOTLIGHT HERO ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        {/* Dynamic Background Spotlight */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%)`,
          }}
        />

        {/* Static Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Accepting New Clients</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8"
          >
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-300% animate-gradient-x">
              Alchemy.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We don&apos;t just build websites. We engineer <span className="text-white font-medium">premium digital assets</span> for brands ready to dominate their market.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <CTAButton href="/contact" variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]">
              Start Your Transformation
            </CTAButton>
            <CTAButton href="/portfolio" variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Portfolio
            </CTAButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* ---------------- 2. VELOCITY SCROLL BAR ---------------- */}
      <VelocityScroll />

      {/* ---------------- 3. IMMERSIVE SERVICES (STICKY LAYOUT) ---------------- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Title */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <Badge variant="purple" className="mb-6">Our Expertise</Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Design that <br/> drives <span className="italic text-purple-400 font-serif">revenue.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                We combine aesthetic perfection with technical excellence to create websites that convert visitors into loyal clients.
              </p>
              <CTAButton href="/services" variant="outline">View All Services</CTAButton>
            </div>

            {/* Cards Column */}
            <div className="lg:w-2/3 flex flex-col gap-8">
              <ServiceCard 
                index={0}
                title="Premium UI/UX Design"
                description="Custom interfaces tailored to your brand psychology. No templates, just pure strategy."
                icon={Palette}
                href="/expertise/ui-ux-design"
              />
              <ServiceCard 
                index={1}
                title="Full-Stack Engineering"
                description="Blazing fast Next.js applications deployed on AWS. Security and scalability included."
                icon={Code}
                href="/expertise/web-development"
              />
              <ServiceCard 
                index={2}
                title="Conversion Optimization"
                description="We turn traffic into customers through data-driven design and psychological triggers."
                icon={Rocket}
                href="/expertise/optimization"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. FEATURED PROJECT (Large Reveal) ---------------- */}
      <section className="py-32 bg-[#0A0A0E] relative overflow-hidden">
        {/* Background Gradient Mesh */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Selected Works</h2>
            <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <PortfolioCard 
              title="Fitz Yoga Studio"
              description="Hybrid booking and mentorship platform for a luxury yoga brand."
              imageSrc="https://res.cloudinary.com/de0bt7qfe/image/upload/v1765868125/Screenshot_663_fevv6o.png"
              imageAlt="Yoga Studio"
              caseLink="fitz-yoga-studio"
              technologies={["Next.js", "Three.js", "GSAP"]}
              className="lg:col-span-2 h-[600px] shadow-2xl shadow-purple-900/20"
            />
            <PortfolioCard 
              title="Golden Spoon Restaurant"
              description="Mobile-first dining platform focusing on visual appetite appeal and rapid reservations."
              imageSrc="https://res.cloudinary.com/de0bt7qfe/image/upload/v1766298745/Screenshot_684_yym23b.png"
              imageAlt="Golden Spoon"
              caseLink="Golden-spoon-restaurant"
              technologies={["Next.js", "Tailwind CSS", "Framer Motion"]}
              className="h-[400px]"
            />
            <PortfolioCard 
              title="Dentelle"
              description="Premium dental clinic website focused on trust, hygiene, and effortless appointment booking."
              imageSrc="https://res.cloudinary.com/de0bt7qfe/image/upload/v1765868127/Screenshot_683_rjibht.png"
              imageAlt="Dentelle"
              caseLink="dentelle-dental-clinic"
              technologies={["Next.js", "Tailwind CSS", "Framer Motion", "SEO"]}
              className="h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ---------------- 5. THE "LUXURY" FOOTER CALL ---------------- */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            Let&apos;s build <br/> the <span className="text-purple-400">extraordinary.</span>
          </h2>
          <div className="flex justify-center gap-6 mt-12">
            <CTAButton href="/contact" variant="primary" size="lg" className="bg-white text-black hover:bg-slate-200 border-none px-12">
              Book a Call
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}
