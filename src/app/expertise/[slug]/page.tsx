"use client";

import { use,} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  CheckCircle2, Palette, Code, Zap, Sparkles, 
  ArrowUpRight
} from "lucide-react";
import { CTAButton, BackgroundElements } from "@/components/ui";

// --- PASTE THE UPDATED 'expertiseData' OBJECT HERE ---
const expertiseData = {
  // ... (Use the updated content I provided in the previous response)
  "ui-ux-design": {
    title: "UI/UX Architecture",
    subtitle: "We don't just design screens. We design behavior.",
    description: "Your users judge your credibility in 0.05 seconds. We craft interfaces that don't just look expensive—they feel intuitive. By combining behavioral psychology with precision aesthetics, we build digital products that turn passive visitors into addicted users.",
    icon: Palette,
    color: "purple",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    benefits: [
      "Conversion Engineering: Every button placement is data-backed.",
      "Instant Trust: Visuals that command premium pricing.",
      "Retention Loops: UX patterns that keep users coming back.",
      "Zero Friction: We remove every barrier to purchase."
    ],
    process: [
      { step: "01", title: "User Psychology", desc: "Mapping the emotional journey of your customer." },
      { step: "02", title: "Strategic Wireframing", desc: "Solving the logic before we touch the pixels." },
      { step: "03", title: "High-Fidelity UI", desc: "Applying a world-class visual identity." },
      { step: "04", title: "Interaction Polish", desc: "Adding the motion that makes it feel 'alive'." }
    ]
  },
  "web-development": {
    title: "Full-Stack Engineering",
    subtitle: "Built for speed. Built to scale. Built to last.",
    description: "Stop building technical debt. We engineer robust, secure applications using the modern React ecosystem. Whether you need a complex SaaS dashboard or a high-traffic marketing site, we write clean, documented code that scales with your ambition.",
    icon: Code,
    color: "blue",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    benefits: [
      "Lightning Performance: 99+ Google Lighthouse scores.",
      "Bank-Grade Security: Advanced data protection standards.",
      "SEO Native: Architecture that Google loves to rank.",
      "Future-Proof: Built on Next.js, not outdated templates."
    ],
    process: [
      { step: "01", title: "System Architecture", desc: "Designing the database and API structure." },
      { step: "02", title: "Frontend Development", desc: "Pixel-perfect implementation of the design." },
      { step: "03", title: "Backend Integration", desc: "Connecting the logic, auth, and data." },
      { step: "04", title: "QA & Launch", desc: "Rigorous stress testing before deployment." }
    ]
  },
  "branding": {
    title: "Brand Identity",
    subtitle: "Turn your business into a legacy.",
    description: "A logo is not a brand. A brand is a promise. We build cohesive visual identities that tell your story without saying a word. From typography systems to color theory, we give you the tools to stand out in a noisy marketplace.",
    icon: Sparkles,
    color: "pink",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    benefits: [
      "Market Authority: Look like the market leader from Day 1.",
      "Price Elasticity: Premium brands command premium prices.",
      "Tribal Loyalty: Create an emotional connection with users.",
      "Scalability: A design system that grows with you."
    ],
    process: [
      { step: "01", title: "Brand Core", desc: "Defining your mission, vision, and archetypes." },
      { step: "02", title: "Visual Direction", desc: "Moodboards and style exploration." },
      { step: "03", title: "Asset Creation", desc: "Logo, typography, and color systems." },
      { step: "04", title: "Brand Bible", desc: "The guidelines for keeping your brand consistent." }
    ]
  },
  "optimization": {
    title: "Growth & SEO",
    subtitle: "Traffic is vanity. Revenue is sanity.",
    description: "We don't just chase traffic; we chase qualified leads. By optimizing your technical foundation and content strategy, we ensure your site ranks for the keywords that actually drive revenue, not just random clicks.",
    icon: Zap,
    color: "green",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    benefits: [
      "Dominant Rankings: Own the keywords that matter.",
      "Technical Health: Fix the errors holding you back.",
      "Local Authority: Own your local market (GMB).",
      "User Experience: Speed optimizations that lower bounce rate."
    ],
    process: [
      { step: "01", title: "Deep Audit", desc: "Finding the hidden technical debt." },
      { step: "02", title: "Keyword Strategy", desc: "Identifying high-intent search terms." },
      { step: "03", title: "On-Page Optimization", desc: "Fixing meta, structure, and content." },
      { step: "04", title: "Authority Building", desc: "Increasing your domain trust over time." }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ExpertisePage({ params }: PageProps) {
  // Unwrap params using React.use()
  const { slug } = use(params);
  const expertise = expertiseData[slug as keyof typeof expertiseData];

  // Parallax Scroll Effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); // Text moves slower
  const y2 = useTransform(scrollY, [0, 500], [0, -50]); // Image moves up slightly

  if (!expertise) return null; // Or 404 component

  const Icon = expertise.icon;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30">
      
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center">
        <BackgroundElements variant="hero" />
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: y1 }} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <Icon className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-purple-200 tracking-widest uppercase">Expertise</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              {expertise.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl">
              {expertise.subtitle}
            </p>
          </motion.div>

          <motion.div style={{ y: y2 }} className="order-1 lg:order-2 relative">
             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
                <Image 
                  src={expertise.image} 
                  alt={expertise.title} 
                  fill 
                  className="object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
             </div>
          </motion.div>
        </div>
      </section>


      {/* ---------------- 2. DEEP DIVE CONTENT ---------------- */}
      <section className="py-24 relative border-t border-white/5 bg-[#08080C]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* MAIN CONTENT (Left) */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The Philosophy</h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  {expertise.description}
                </p>
              </div>

              {/* Benefits Grid (Glowing Cards) */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Impact & ROI</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {expertise.benefits.map((benefit, i) => {
                     const [title, desc] = benefit.split(": ");
                     return (
                        <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                           <div className="flex items-center gap-3 mb-3">
                              <CheckCircle2 className="w-5 h-5 text-purple-400" />
                              <h3 className="font-bold text-white">{title}</h3>
                           </div>
                           <p className="text-slate-400 text-sm pl-8">{desc}</p>
                        </div>
                     )
                  })}
                </div>
              </div>

              {/* The Process (Interactive Steps) */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-10">Execution Roadmap</h2>
                <div className="relative border-l border-white/10 ml-4 space-y-12 pb-4">
                  {expertise.process.map((step, i) => (
                    <div key={i} className="relative pl-12 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors" />
                      
                      <div className="flex flex-col md:flex-row gap-2 md:items-baseline mb-2">
                         <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">{step.step}</span>
                         <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 max-w-lg">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>


            {/* STICKY SIDEBAR (Right) */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 p-8 rounded-3xl bg-[#0F0F13] border border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                   <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Transform your business.</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  You&apos;ve seen our process. Now let&apos;s see how it applies to your specific goals. Book a free 15-minute strategy audit.
                </p>
                
                <CTAButton href="/contact" variant="primary" className="w-full justify-center mb-4">
                  Book Strategy Audit
                </CTAButton>
                
                <Link href="/portfolio">
                   <CTAButton href="/portfolio" variant="secondary" className="w-full justify-center">
                     View Case Studies
                   </CTAButton>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
