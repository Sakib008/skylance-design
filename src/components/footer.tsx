"use client";

import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowUpRight, 
  Heart,
  Sparkles, 
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialInfo : {icon: LucideIcon, url: string}[] = [
    { icon: Twitter, url: "https://x.com/skylencedesigns" },
    { icon: Instagram, url: "https://www.instagram.com/skylencedesigns/" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/skylencedesigns/" },
  ]

  return (
    <footer className="relative bg-[#050505] text-slate-200 overflow-hidden pt-24 border-t border-white/5">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- 1. TOP SECTION: CTA & NEWSLETTER --- */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
          
          {/* Brand Promise */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Skylence</span>
            </Link>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to elevate your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                digital presence?
              </span>
            </h2>
            <p className="text-slate-400 max-w-md text-lg">
              We craft premium digital experiences for forward-thinking brands. Let&apos;s build something extraordinary together.
            </p>
          </div>

          {/* Newsletter Glass Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold text-white mb-2">Join our inner circle.</h3>
            <p className="text-slate-400 mb-6 text-sm">Get exclusive design insights and agency updates.</p>
            
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500 rounded-xl h-12"
              />
              <Button className="bg-white text-black hover:bg-slate-200 h-12 rounded-xl px-6 font-semibold transition-transform hover:scale-105">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* --- 2. MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 py-16">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-4">
              {['UI/UX Design', 'Web Development', 'Optimization', 'Branding'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                <span>242, Hari Nagar Ashram<br/>New Delhi 110014</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                <a href="mailto:skylencedesigns@gmail.com">skylencedesigns@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <a href="tel:+919990111593">+91 9990111593</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-4">Socials</h4>
            <div className="flex gap-4">
              {socialInfo.map((Icon, i) => (
                <a 
                  key={i} 
                  href={Icon.url} 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300"
                >
                  <Icon.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-sm text-slate-500">
          <div className="flex items-center gap-1 mb-4 md:mb-0">
            <span>© {currentYear} Skylence Designs.</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Mohammad Sakib
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* --- LARGE TYPOGRAPHY SIGNATURE (The "Big Finish") --- */}
        <div className="pb-8 pt-4 overflow-hidden select-none pointer-events-none">
          <h1 className="text-[12vw] leading-[0.8] font-bold text-center text-white/[0.03] tracking-tighter">
            SKYLENCE
          </h1>
        </div>
      </div>
    </footer>
  );
}
