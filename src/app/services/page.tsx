"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Smartphone,
  Database,
  Shield,
  Layers,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  LucideIcon, // Import the type for icons
} from "lucide-react";
import { CTAButton, BackgroundElements } from "@/components/ui";

// --- TYPES ---
interface ServiceBentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "blue" | "pink" | "green"; // Explicit color names
  tags: string[];
  delay: number;
  className?: string; // Allow passing extra classes for grid positioning
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
  detail: string; // New field for hover tooltip
}

interface StatCardProps {
  number: string;
  label: string;
  subtext: string;
}

// --- ANIMATIONS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-medium text-purple-200 tracking-wide uppercase">
                What We Offer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Digital Excellence.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              We don&apos;t just &quot;make websites.&quot; We build scalable,
              high-performance digital infrastructure for ambitious brands.
            </motion.p>

            {/* Added: Trust Ticker (Conceptual) */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-white/5 max-w-4xl mx-auto"
            >
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">
                Trusted by ambitious teams
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder logos - replace with real client logos */}
                {["ACME Corp", "Nebula Inc", "Quantum", "Vertex"].map(
                  (name) => (
                    <span
                      key={name}
                      className="text-xl font-bold font-mono text-white/50"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- 2. CORE SERVICES (Bento Grid) ---------------- */}
      <section className="py-24 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Core Engines
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              We separate our expertise into four distinct engines that drive
              your digital success.
            </p>
          </div>

          {/* ASYMMETRIC BENTO GRID */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* 1. DESIGN (Large Card - Spans 2 Columns) */}
            <div className="lg:col-span-2 group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/[0.07] transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-colors" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                    <Palette className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Premium UI/UX Design
                  </h3>
                  <p className="text-slate-400 text-lg max-w-md mb-8">
                    We craft interfaces that feel inevitable. Every pixel serves
                    a psychological purpose, guiding users from
                    &quot;curious&quot; to &quot;converted.&quot;
                  </p>
                </div>

                {/* Visual "Fake UI" for Design */}
                <div className="w-full h-48 rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden group-hover:border-purple-500/20 transition-colors">
                  {/* Abstract UI Elements */}
                  <div className="w-1/3 h-4 bg-white/10 rounded-full mb-4" />
                  <div className="flex gap-4 mb-6">
                    <div className="w-1/2 h-24 bg-purple-500/10 rounded-lg border border-purple-500/20" />
                    <div className="w-1/2 h-24 bg-white/5 rounded-lg border border-white/5" />
                  </div>
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-purple-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-purple-500/20 flex items-center gap-2">
                    Convert User <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. DEVELOPMENT (Tall Card - Spans 1 Column, 2 Rows) */}
            <div className="lg:row-span-2 group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/[0.07] transition-all duration-500 flex flex-col">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent opacity-50" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <Code className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Full-Stack Engineering
                </h3>
                <p className="text-slate-400 text-base mb-8 flex-grow">
                  Blazing fast applications built on Next.js. We build systems
                  that scale effortlessly from 100 to 1M users.
                </p>

                <div className="space-y-3 mt-auto">
                  {[
                    "React & Next.js",
                    "Node.js Backend",
                    "PostgreSQL / Mongo",
                    "AWS / Vercel",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-3 text-sm text-slate-300 bg-black/20 p-3 rounded-xl border border-white/5 group-hover:border-blue-500/20 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. GROWTH / SEO (Standard Card) */}
            <ServiceBentoCard
              title="Growth & SEO"
              description="Technical SEO and performance optimization to ensure you rank #1 in your niche."
              icon={Zap}
              color="pink"
              tags={["Tech SEO", "Core Web Vitals", "Analytics"]}
              delay={0.2}
            />

            {/* 4. MAINTENANCE (Standard Card) */}
            <ServiceBentoCard
              title="Care & Support"
              description="24/7 monitoring and updates. We don't just launch and leave; we keep you secure."
              icon={Shield}
              color="green"
              tags={["Security", "Updates", "Backups"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ---------------- 2.5 RESULTS / ROI (New Section) ---------------- */}
      <section className="py-20 border-t border-white/5 bg-[#08080C]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <StatCard
              number="99/100"
              label="Performance Score"
              subtext="Average Google PageSpeed"
            />
            <StatCard
              number="2.5x"
              label="Traffic Increase"
              subtext="Average client growth in 6mo"
            />
            <StatCard
              number="100%"
              label="Client Retention"
              subtext="We build long-term partners"
            />
          </div>
        </div>
      </section>

      {/* ---------------- 3. BRANDING & STRATEGY ---------------- */}
      <section className="py-24 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Beyond the Code.
            </h2>
            <p className="text-slate-400 text-lg">
              A beautiful website is useless if no one sees it. We give your
              brand a voice and a megaphone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* --- LEFT: BRANDING --- */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <Palette className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Premium Branding
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We don&apos;t just design logos; we architect identities. From
                  typography systems to color psychology, we ensure your brand
                  tells the right story before a user reads a single word.
                </p>

                <ul className="space-y-3">
                  {[
                    "Logo Design & Refresh",
                    "Visual Identity Systems",
                    "Brand Voice & Guidelines",
                    "Social Media Assets",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --- RIGHT: SEO --- */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-pink-900/10 to-transparent border border-pink-500/20 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
                  <Zap className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  SEO & Performance
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Ranking on Google isn&apos;t magic; it&apos;s math. We
                  optimize your site&apos;s architecture, speed, and content to
                  ensure you dominate search results for your local niche.
                </p>

                {/* Mini Stats Grid for SEO Proof */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-black/20 border border-white/5 group-hover:border-pink-500/20 transition-colors">
                    <div className="text-2xl font-bold text-white">99/100</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      PageSpeed Score
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/20 border border-white/5 group-hover:border-pink-500/20 transition-colors">
                    <div className="text-2xl font-bold text-green-400">
                      +300%
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      Organic Traffic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. THE TOOLKIT ---------------- */}
      <section className="py-24 relative bg-[#08080C] overflow-hidden">
        {/* Subtle Background Mesh */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                The Toolkit
              </h2>
              <p className="text-slate-400">
                Everything you need to scale, all in one place.
              </p>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-white/10 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Performance First"
              desc="We optimize for Core Web Vitals. If it doesn't load in <1s, it's not finished."
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile Perfection"
              desc="Responsive isn't enough. We design mobile-first experiences that feel native."
            />
            <FeatureCard
              icon={Database}
              title="Scalable Backend"
              desc="Databases that grow with you. From 100 to 1 million users without a hiccup."
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              desc="Bank-grade encryption and security practices standard on every project."
            />
            <FeatureCard
              icon={Layers}
              title="SEO Architecture"
              desc="Built to rank. Technical SEO is baked into the code, not added later."
            />
            <FeatureCard
              icon={Cpu}
              title="AI Integration"
              desc="Future-proof your business with custom AI agents and automation."
            />
          </div>
        </div>
      </section>

      {/* ---------------- 5. THE PROCESS ---------------- */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Build
            </h2>
            <p className="text-slate-400">
              A transparent, agile process designed for speed and quality.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              <ProcessStep
                number="01"
                title="Discovery"
                desc="We dig deep into your business goals and user needs."
                detail="User Personas, Competitor Analysis, Goal Setting"
              />
              <ProcessStep
                number="02"
                title="Blueprint"
                desc="Wireframes and technical architecture before code."
                detail="Sitemaps, Wireframes, Tech Stack Selection"
              />
              <ProcessStep
                number="03"
                title="Execution"
                desc="Agile development sprints with weekly updates."
                detail="Weekly Demos, Git Version Control, CI/CD"
              />
              <ProcessStep
                number="04"
                title="Launch"
                desc="Rigorous testing, deployment, and post-launch support."
                detail="QA Testing, Analytics Setup, 30-Day Support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. CTA SECTION ---------------- */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to upgrade?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* UPDATED CTA TEXT for better conversion */}
            <CTAButton href="/contact" variant="primary" size="lg">
              Book Free Strategy Call
            </CTAButton>
            <CTAButton href="/work" variant="outline" size="lg">
              View Our Work
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- UPDATED SUB-COMPONENTS ---

function ServiceBentoCard({
  title,
  description,
  icon: Icon,
  color,
  tags,
  className,
}: ServiceBentoCardProps) {
  const colors = {
    purple:
      "from-purple-500/20 to-pink-500/20 group-hover:border-purple-500/50 text-purple-400",
    blue: "from-blue-500/20 to-cyan-500/20 group-hover:border-blue-500/50 text-blue-400",
    pink: "from-pink-500/20 to-rose-500/20 group-hover:border-pink-500/50 text-pink-400",
    green:
      "from-emerald-500/20 to-green-500/20 group-hover:border-emerald-500/50 text-emerald-400",
  };

  // Extract base color class for gradients vs text
  const colorClass = colors[color];

  return (
    <div
      className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.07] ${className}`}
    >
      {/* Background Gradient Blob */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass.split(" ")[0]} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`}
      />

      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 ${colorClass.split(" ").pop()}`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md text-[10px] uppercase tracking-wide font-semibold bg-white/5 border border-white/10 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300">
      <div className="mb-4 text-purple-400 group-hover:text-pink-400 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
        {desc}
      </p>
    </div>
  );
}

function ProcessStep({ number, title, desc, detail }: ProcessStepProps) {
  return (
    <div className="group text-center relative">
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0B0B0F] border border-white/10 mb-6 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-black">
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 group-hover:from-purple-400 group-hover:to-pink-400">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm px-4">{desc}</p>

      {/* Added: Tooltip interaction */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-3 bg-zinc-900 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
        <p className="text-xs text-slate-300">{detail}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label, subtext }: StatCardProps) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
        {number}
      </div>
      <div className="text-sm font-semibold text-white mb-1">{label}</div>
      <div className="text-xs text-slate-500">{subtext}</div>
    </div>
  );
}
