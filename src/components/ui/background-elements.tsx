"use client";

import { cn } from "@/lib/utils";

type VariantName = "hero" | "section" | "footer";

interface BackgroundVariant {
  container: string;
  elements: React.ReactNode[]; // Changed to ReactNode to allow complex SVGs/divs
  grid?: string;
  showMeteors?: boolean; // New prop for shooting stars
}

const BASE_CONTAINER = "absolute inset-0 w-full h-full overflow-hidden pointer-events-none";

// --- Meteor Effect Component (Subtle shooting stars) ---
const Meteors = () => {
  return (
    <>
      {[...Array(6)].map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "animate-meteor-effect"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

const variants: Record<VariantName, BackgroundVariant> = {
  hero: {
    container: BASE_CONTAINER,
    showMeteors: true,
    elements: [
      // 1. Primary "North Star" Glow
      <div key="orb1" className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />,
      
      // 2. Secondary "Pink Nebula"
      <div key="orb2" className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />,
      
      // 3. Central Subtle Highlight (Focuses eye on content)
      <div key="orb3" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[100px]" />
    ],
    // Finer, crisper grid with a radial fade mask
    grid: "absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"
  },
  
  section: {
    container: BASE_CONTAINER,
    showMeteors: false,
    elements: [
      // Asymmetric subtle glow for reading sections
      <div key="sec1" className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] opacity-60" />,
      <div key="sec2" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] opacity-40" />
    ],
    grid: "absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"
  },
  
  footer: {
    container: BASE_CONTAINER,
    showMeteors: true,
    elements: [
      <div key="foot1" className="absolute bottom-0 w-full h-[400px] bg-gradient-to-t from-purple-900/20 via-[#050505] to-transparent" />
    ],
    grid: "absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_100%,#000_80%,transparent_100%)]"
  }
};

export default function BackgroundElements({
  variant = "section",
  className,
}: {
  variant?: VariantName;
  className?: string;
}) {
  const currentVariant = variants[variant];
  if (!currentVariant) return null;

  return (
    <div className={cn(currentVariant.container, className)}>
      {/* 1. Base Dark Layer */}
      <div className="absolute inset-0 bg-[#050505]" /> 
      
      {/* 2. Grid Layer */}
      {currentVariant.grid && <div className={currentVariant.grid} />}
      
      {/* 3. Glowing Orbs */}
      {currentVariant.elements.map((element) => element)}
      
      {/* 4. Optional Meteors */}
      {currentVariant.showMeteors && <Meteors />}
    </div>
  );
}
