"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "UI/UX Design", href: "/expertise/ui-ux-design" },
      { name: "Web Development", href: "/expertise/web-development" },
      { name: "Optimization", href: "/expertise/optimization" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0B0F]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* --- LOGO --- */}
            <Link href="/" className="group flex items-center gap-3 z-50 relative">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/20 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="h-5 w-5 text-white fill-white/20" />
                </div>
                {/* Glow behind logo */}
                <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-10" />
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none">
                  Skylence
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-widest uppercase mt-1">
                  Designs
                </span>
              </div>
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                
                return (
                  <div key={item.name} className="relative group px-1">
                    {item.dropdown ? (
                      <div className="relative group/dropdown">
                        <button 
                          className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                             isActive ? "text-white" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="w-3 h-3 transition-transform group-hover/dropdown:rotate-180" />
                        </button>

                        {/* Dropdown Menu - Dark Glass */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform group-hover/dropdown:translate-y-0 translate-y-2">
                          <div className="w-56 bg-[#16161a] border border-white/10 rounded-2xl p-2 shadow-2xl shadow-purple-900/20 backdrop-blur-xl overflow-hidden">
                             {item.dropdown.map((subItem) => (
                               <Link
                                 key={subItem.name}
                                 href={subItem.href}
                                 className="block px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                               >
                                 {subItem.name}
                               </Link>
                             ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onMouseEnter={() => setHoveredPath(item.href)}
                        onMouseLeave={() => setHoveredPath(null)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                          isActive ? "text-white" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {item.name}
                        {isActive && (
                           <motion.div 
                             layoutId="navbar-indicator"
                             className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/5"
                             transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                           />
                        )}
                        {hoveredPath === item.href && !isActive && (
                           <motion.div 
                             layoutId="navbar-hover"
                             className="absolute inset-0 bg-white/[0.03] rounded-full -z-10"
                             transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                           />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* --- CTA BUTTON (Desktop) --- */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button 
                   className="bg-white text-black hover:bg-slate-200 rounded-full px-6 py-5 font-semibold transition-all hover:scale-105 active:scale-95"
                >
                   Let&apos;s Talk
                </Button>
              </Link>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0F] md:hidden flex flex-col pt-32 px-6"
          >
             {/* Background Gradients for Mobile */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/20 blur-[100px] pointer-events-none" />

             <div className="flex flex-col space-y-6">
               {navigation.map((item, i) => (
                 <motion.div
                   key={item.name}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.1 + i * 0.1 }}
                 >
                   {item.dropdown ? (
                      <div className="space-y-4">
                        <span className="text-2xl font-bold text-slate-500">{item.name}</span>
                        <div className="pl-4 border-l border-white/10 space-y-3">
                           {item.dropdown.map(sub => (
                             <Link 
                               key={sub.name} 
                               href={sub.href}
                               onClick={() => setIsOpen(false)}
                               className="block text-lg text-slate-300 hover:text-white"
                             >
                               {sub.name}
                             </Link>
                           ))}
                        </div>
                      </div>
                   ) : (
                     <Link
                       href={item.href}
                       onClick={() => setIsOpen(false)}
                       className={`text-3xl font-bold ${
                         pathname === item.href ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" : "text-white"
                       }`}
                     >
                       {item.name}
                     </Link>
                   )}
                 </motion.div>
               ))}
               
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 0.5 }}
                 className="pt-8"
               >
                 <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-white text-black py-6 rounded-xl text-lg font-bold">
                      Get Started
                    </Button>
                 </Link>
               </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
