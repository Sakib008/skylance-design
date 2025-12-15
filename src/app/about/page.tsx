"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Target, Users, Award, Heart, Sparkles } from "lucide-react";
import { CTAButton, BackgroundElements } from "@/components/ui";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200">
      {/* ---------------- 1. HERO SECTION (Personal & Cinematic) ---------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-200">
                  The Story Behind the Screen
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              More than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                pixels & code.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              &quot;Skylence Designs isn&apos;t a factory. It&apos;s a studio
              where I personally craft digital assets for business owners who
              demand excellence.&quot;
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- 2. THE FOUNDER'S STORY (Split Layout) ---------------- */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side - Styled like a Magazine Profile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 group">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1g7JtGt12PPd8xf628S3Ui6yPlDKwmiNE"
                  alt="Mohammad Sakib"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <h3 className="text-white font-bold text-lg">
                    Mohammad Sakib
                  </h3>
                  <p className="text-purple-300 text-sm">
                    Founder & Lead Developer
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 rounded-full blur-[50px]" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-600/30 rounded-full blur-[50px]" />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                One Vision.{" "}
                <span className="text-purple-400">Your Success.</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  I started Skylence Designs in 2025 with a simple frustration:
                  too many agencies treat clients like numbers on a spreadsheet.
                  They use templates, outsource the work, and disappear after
                  launch.
                </p>
                <p>
                  <strong className="text-white">
                    I chose a different path.
                  </strong>
                </p>
                <p>
                  As a solo founder, I handle everything personally—from the
                  first sketch to the final line of code. This ensures that the
                  vision we discuss is exactly what gets built. No &quot;lost in
                  translation,&quot; no middle management. Just direct,
                  high-quality execution.
                </p>
                <p>
                  While I plan to expand, my commitment remains the same:{" "}
                  <span className="text-white underline decoration-pink-500/50 underline-offset-4">
                    Quality over quantity.
                  </span>
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-slate-500">
                    Client Satisfaction
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">
                    Direct
                  </div>
                  <div className="text-sm text-slate-500">Founder Access</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. CORE VALUES (Cards) ---------------- */}
      <section className="py-24 relative overflow-hidden bg-[#08080C]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Code We Live By
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These aren&apos;t just buzzwords. They are the operating system of
              this agency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Target}
              title="Precision"
              desc="We don't guess. We measure, test, and refine until it's perfect."
              color="purple"
            />
            <ValueCard
              icon={Users}
              title="Partnership"
              desc="I work with you, not just for you. Your goals become my goals."
              color="blue"
            />
            <ValueCard
              icon={Award}
              title="Excellence"
              desc="Good enough is not enough. We aim for world-class in every pixel."
              color="green"
            />
            <ValueCard
              icon={Heart}
              title="Passion"
              desc="I love building the web. That energy goes directly into your project."
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* ---------------- 4. FINAL CTA ---------------- */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Enough about me. <br /> Let&apos;s talk about{" "}
            <span className="text-purple-400">you.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            You have a vision. I have the tools to build it. Let&apos;s combine
            them.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Start the Conversation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

import { LucideIcon } from "lucide-react";

// 1. Define valid colors as a specific type
type ValidColor = "purple" | "blue" | "green" | "pink";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: ValidColor; 
}

function ValueCard({ icon: Icon, title, desc, color }: ValueCardProps) {
  // 4. Record<ValidColor, string> ensures every color in your type is handled here
  const colors: Record<ValidColor, string> = {
    purple: "text-purple-400 group-hover:text-purple-300",
    blue: "text-blue-400 group-hover:text-blue-300",
    green: "text-emerald-400 group-hover:text-emerald-300",
    pink: "text-pink-400 group-hover:text-pink-300",
  };

  return (
    <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
      <div className={`mb-6 p-4 rounded-2xl bg-white/5 w-fit ${colors[color]}`}>
        {/* Now TypeScript knows Icon accepts className */}
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
