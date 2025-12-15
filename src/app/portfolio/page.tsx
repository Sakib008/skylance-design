"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTAButton, BackgroundElements } from "@/components/ui";
import { projects } from "@/lib/projects";

// Extract unique categories for the filter
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30">
      
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundElements variant="hero" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-bold text-purple-200 tracking-widest uppercase">Our Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Selected <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Masterpieces
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just build websites; we build digital assets that drive revenue.
              Check out our latest deployments.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ---------------- 2. FILTER & GRID ---------------- */}
      <section className="py-12 relative z-10 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.slug}
                  className="group relative"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block">
                    {/* Image Card */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                        <div className="px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                          View Case Study <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Floating Tag */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                        {project.category}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="px-2">
                       <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                             {/* Mini tech stack icons could go here */}
                          </div>
                       </div>
                       <p className="text-slate-400 line-clamp-2 mb-4">
                         {project.description}
                       </p>
                       <div className="flex flex-wrap gap-2">
                         {project.tags.slice(0, 3).map(tag => (
                           <span key={tag} className="text-xs text-slate-500 border border-white/10 px-2 py-1 rounded-md">
                             {tag}
                           </span>
                         ))}
                       </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>


      {/* ---------------- 3. BOTTOM CTA ---------------- */}
      <section className="py-32 relative overflow-hidden text-center border-t border-white/5 bg-[#08080C]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            We only take on 3 new clients per month to ensure quality. Secure your spot now.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Book Discovery Call
          </CTAButton>
        </div>
      </section>

    </div>
  );
}
