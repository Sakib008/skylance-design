"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// --- 1. Helper Function: Wrap Logic (Replaces @motionone/utils) ---
// This ensures the numbers loop between a range (min to max)
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  
  // Speed up scroll based on velocity
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Calculate X position
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Switch direction based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap m-0 select-none">
      <motion.div 
        className="font-bold uppercase text-7xl md:text-9xl tracking-tighter flex whitespace-nowrap flex-nowrap" 
        style={{ x }}
      >
        <span className="block mr-12 text-white/5 transition-colors hover:text-white/20 duration-500 cursor-default">{children} </span>
        <span className="block mr-12 text-white/5 transition-colors hover:text-white/20 duration-500 cursor-default">{children} </span>
        <span className="block mr-12 text-white/5 transition-colors hover:text-white/20 duration-500 cursor-default">{children} </span>
        <span className="block mr-12 text-white/5 transition-colors hover:text-white/20 duration-500 cursor-default">{children} </span>
      </motion.div>
    </div>
  );
}

export default function VelocityScroll() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative z-10 border-y border-white/5">
      {/* Top Line: Moving Left */}
      <ParallaxText baseVelocity={2}>
        WEB DESIGN • BRANDING • DEVELOPMENT • STRATEGY •
      </ParallaxText>
      
      {/* Bottom Line: Moving Right */}
      <div className="mt-2 md:mt-4">
        <ParallaxText baseVelocity={-2}>
          PREMIUM • LUXURY • INNOVATION • PERFORMANCE •
        </ParallaxText>
      </div>
    </section>
  );
}
