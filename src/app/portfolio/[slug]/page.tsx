import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { projects } from "@/lib/projects";
import { BackgroundElements, CTAButton } from "@/components/ui";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30">
      {/* ---------------- 1. IMMERSIVE HERO ---------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Works
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-slate-600 text-sm">/</span>
              <span className="text-slate-400 text-sm">2025 Case Study</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mb-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <CTAButton
                href={project.liveUrl}
                variant="white"
                className="flex items-center"
              >
                Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. PROJECT SHOWCASE IMAGE ---------------- */}
      <section className="relative z-10 -mt-10 mb-24 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------------- 3. METRICS BAR (The "Proof") ---------------- */}
      <section className="py-12 border-y border-white/5 bg-[#08080C]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            {project.caseStudy.outcomes.map((outcome, i) => (
              <div key={i} className="py-4 md:py-0 px-4">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-lg md:text-xl font-medium text-white/90">
                    {outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 4. DEEP DIVE (Split Layout) ---------------- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* LEFT: The Story (8 cols) */}
            <div className="lg:col-span-8 space-y-24">
              {/* Challenge */}
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                  The Challenge
                </h3>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Friction was killing growth.
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                  The Solution
                </h3>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Engineered for conversion.
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                  {project.caseStudy.solution}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.caseStudy.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Tech Stack Card */}
              <div className="p-8 rounded-3xl bg-[#0F0F13] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Similar Projects CTA */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                <Rocket className="w-8 h-8 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Need results like this?
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Let&apos;s build a {project.category.toLowerCase()} solution
                  tailored to your goals.
                </p>
                <CTAButton
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Start Your Project
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. NEXT PROJECT NAV ---------------- */}
      <section className="py-20 border-t border-white/5 bg-[#08080C] text-center">
        <div className="container mx-auto px-6">
          <p className="text-slate-500 mb-4 text-sm uppercase tracking-widest">
            Next Case Study
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-4 group"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
              View All Projects
            </h2>
            <ArrowUpRight className="w-8 h-8 text-slate-400 group-hover:text-purple-400 transition-colors" />
          </Link>
        </div>
      </section>
    </div>
  );
}
