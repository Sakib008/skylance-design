"use client";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index: number; // For staggered animation
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  index,
}: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.05] transition-colors"
      >
        {/* Hover Gradient Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-3xl transition-colors duration-500 pointer-events-none" />

        {/* Gradient Orb on Hover */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-7 w-7 text-purple-400 group-hover:text-pink-400 transition-colors" />
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {title}
          </h3>

          <p className="text-slate-400 mb-8 leading-relaxed">{description}</p>

          <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-pink-400 transition-colors">
            Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
