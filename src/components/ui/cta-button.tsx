"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "white"; // Added 'white' variant
  size?: "default" | "lg";
  className?: string;
  showArrow?: boolean;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  showArrow = true,
}: CTAButtonProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Variant Styles
  const variants = {
    primary: "bg-slate-950 text-white border border-white/10 shadow-2xl shadow-purple-900/20",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-sm",
    outline: "bg-transparent text-white border border-white/20 hover:border-white/40",
    white: "bg-white text-black hover:bg-slate-200 border border-transparent shadow-xl" // High contrast option
  };

  return (
    <Link href={href} className="inline-block">
      <motion.div
        ref={divRef}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative group overflow-hidden rounded-xl transition-colors duration-300",
          variants[variant],
          size === "lg" ? "px-8 py-5 text-lg" : "px-6 py-3 text-base",
          className
        )}
      >
        {/* --- SPOTLIGHT EFFECT (Only for Dark Buttons) --- */}
        {variant !== "white" && (
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.15), transparent 40%)`,
            }}
          />
        )}
        
        {/* --- BORDER GLOW (Only for Primary) --- */}
        {variant === "primary" && (
            <div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.4), transparent 40%)`,
              maskImage: "linear-gradient(black, black), linear-gradient(black, black)",
              maskClip: "content-box, border-box",
              padding: "1px",
              maskComposite: "exclude", // This creates the border effect
              WebkitMaskComposite: "xor",
            }}
          />
        )}


        <div className="relative flex items-center justify-center font-semibold tracking-wide z-10">
          {children}
          {showArrow && (
            <ArrowRight 
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                variant === "primary" ? "text-purple-400" : "currentColor"
              )} 
            />
          )}
        </div>
        
        {/* Subtle Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      </motion.div>
    </Link>
  );
}
