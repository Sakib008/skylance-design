"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Crown, Store, HelpCircle, Palette, PenTool, Layers, ShieldCheck, Clock } from "lucide-react";
import { CTAButton, BackgroundElements } from "@/components/ui";

const pricingPlans = [
  {
    name: "Launchpad",
    price: "₹15,000",
    description: "For local shops needing a digital business card.",
    icon: Store,
    color: "blue",
    popular: false,
    features: [
      "5-Page Modular System",
      "Google Business Profile Setup",
      "WhatsApp Chat Integration",
      "Stock Photography Access",
      "Mobile Optimization",
    ],
    limitations: ["Standard Brand Assets", "No Custom Blog", "Basic SEO Only"],
  },
  {
    name: "Digital Twin",
    price: "₹60,000",
    description: "For established offline businesses scaling online.",
    icon: Zap,
    color: "purple",
    popular: true,
    features: [
      "Custom 'Vibe-Match' Design",
      "Local SEO Domination Setup",
      "Photo Direction & Optimization",
      "Trust & Review Migration",
      "Speed Guarantee (< 2s)",
      "CMS for Easy Updates",
    ],
    limitations: ["Standard Brand Identity"],
  },
  {
    name: "Brand Authority",
    price: "₹85,000",
    description: "Complete identity overhaul to dominate the market.",
    icon: Crown,
    color: "gold",
    popular: false,
    features: [
      "Full Brand Identity Kit (Logo+)",
      "Strategic Sales Copywriting",
      "Custom Next.js Architecture",
      "Advanced Schema & Analytics",
      "Blog & Content Strategy",
      "Priority Support",
    ],
    limitations: [],
  },
];

const addons = [
  {
    name: "Brand Identity Lite",
    price: "₹8,000",
    description: "Don't have a logo? We design a professional Logo + Color Palette + Typography Guide.",
    icon: Palette,
  },
  {
    name: "Content Writing Studio",
    price: "₹5,000",
    description: "We interview you for 30 mins and write 5 pages of professional, sales-focused copy.",
    icon: PenTool,
  },
  {
    name: "Social Media Launch",
    price: "₹10,000",
    description: "5 Custom Instagram Posts + Bio Optimization to announce your new website.",
    icon: Layers,
  },
];

const faqs = [
  {
    q: "Why don't you offer custom design in the Launchpad?",
    a: "To keep the price accessible at ₹15,000, we use our premium 'Skylance Modular System'. It's faster and proven to convert. If you want 100% custom artistry, our Digital Twin package is perfect for you.",
  },
  {
    q: "What is 'Vibe-Match' design?",
    a: "For established offline brands, we don't just pick a theme. We visit your store (or analyze photos), pick colors from your interiors, and match your fonts to your signage so your online brand feels exactly like your offline shop.",
  },
  {
    q: "Do I own the code?",
    a: "Yes. Once the final payment is made, you own 100% of the intellectual property, source code, and assets.",
  },
  {
    q: "What is your payment structure?",
    a: "50% upfront to reserve your slot in our development calendar. 50% upon successful launch.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden text-center">
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* SCARCITY BANNER - The Final Touch */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-purple-200 tracking-wide uppercase">
                Now Booking for February 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Stop Buying Websites. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Buy Revenue.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t sell code. We sell digital assets that build trust, authority, and sales for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- 2. PRICING CARDS ---------------- */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              const isPopular = plan.popular;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                    isPopular
                      ? "bg-white/10 border-purple-500/50 shadow-2xl shadow-purple-900/20 scale-105 z-10"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      isPopular
                        ? "bg-purple-500 text-white"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 h-10">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 ml-2">/ project</span>
                  </div>

                  <CTAButton
                    href="/contact"
                    variant={isPopular ? "primary" : "outline"}
                    className="w-full justify-center mb-8"
                  >
                    Get {plan.name}
                  </CTAButton>

                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      What You Get
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <ul className="space-y-3 pt-4 border-t border-white/5">
                        {plan.limitations.map((limitation) => (
                          <li
                            key={limitation}
                            className="flex items-start gap-3 text-sm text-slate-500"
                          >
                            <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 3. POWER-UPS SECTION (ADD-ONS) ---------------- */}
      <section className="py-12 relative z-10 bg-[#08080C] border-t border-white/5">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-white mb-4">Customize Your Build</h2>
               <p className="text-slate-400">Add power-ups to any package to perfectly fit your needs.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
               {addons.map((addon, i) => (
                  <motion.div 
                     key={addon.name}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors"
                  >
                     <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                        <addon.icon className="w-5 h-5" />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-1">{addon.name}</h3>
                     <p className="text-2xl font-bold text-slate-200 mb-3">{addon.price}</p>
                     <p className="text-sm text-slate-400 leading-relaxed">{addon.description}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ---------------- 4. MAINTENANCE PROTOCOLS (New Section) ---------------- */}
      <section className="py-24 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Peace of Mind Protocols</h2>
              <p className="text-slate-400">Protect your investment with our care plans.</p>
           </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-blue-400"/>
                    <h4 className="text-xl font-bold text-white">The Guard</h4>
                </div>
                <span className="text-blue-400 font-bold text-xl">₹1,000<span className="text-sm text-slate-500 font-normal">/mo</span></span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-400 mt-0.5"/> Hosting & SSL Fees Included</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-400 mt-0.5"/> Monthly Code Backups</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-400 mt-0.5"/> 24/7 Uptime Monitoring</li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl border border-purple-500/30 bg-purple-900/5">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-purple-400"/>
                    <h4 className="text-xl font-bold text-white">The Concierge</h4>
                </div>
                <span className="text-purple-400 font-bold text-xl">₹3,000<span className="text-sm text-slate-500 font-normal">/mo</span></span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3"><Check className="w-4 h-4 text-purple-400 mt-0.5"/> <strong>Everything in Guard</strong></li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-purple-400 mt-0.5"/> 2 Hours of Content Updates/mo</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-purple-400 mt-0.5"/> Priority Phone Support</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            *SEO and Social Media Management packages are customized based on your competition and goals. 
            <a href="/contact" className="text-purple-400 hover:text-purple-300 underline ml-1 cursor-pointer">Ask for a Growth Audit.</a>
          </p>
        </div>
      </section>

      {/* ---------------- 5. FAQ SECTION ---------------- */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-500" />
                  {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 6. FINAL CTA ---------------- */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Your competitors are already online. <br />
            <span className="text-purple-400">Catch up today.</span>
          </h2>
          <CTAButton href="/contact" variant="white" size="lg">
            Start Project
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
