"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Crown, Sparkles, HelpCircle } from "lucide-react";
import { CTAButton, BackgroundElements } from "@/components/ui";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹15,000",
    description:
      "Perfect for small businesses establishing a digital footprint.",
    icon: Sparkles,
    color: "blue",
    popular: false,
    features: [
      "5-Page Responsive Website",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Support",
      "Mobile Optimization",
    ],
    limitations: ["No E-commerce", "Standard Design", "No CMS"],
  },
  {
    name: "Growth",
    price: "₹25,000",
    description: "For businesses ready to scale and convert visitors.",
    icon: Zap,
    color: "purple",
    popular: true,
    features: [
      "Up to 15 Pages",
      "Advanced UI/UX Design",
      "Custom Animations",
      "CMS Integration",
      "Advanced SEO & Analytics",
      "3 Months Support",
    ],
    limitations: ["No Custom Backend"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complex applications requiring custom architecture.",
    icon: Crown,
    color: "gold",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Web App Development",
      "E-commerce (100+ Products)",
      "Database Integration",
      "Priority 24/7 Support",
      "Cloud Architecture (AWS)",
    ],
    limitations: [],
  },
];

const faqs = [
  {
    q: "Do I own the code?",
    a: "Yes. Once the final payment is made, you own 100% of the intellectual property, source code, and assets.",
  },
  {
    q: "What is your payment structure?",
    a: "We typically require a 50% deposit to start the project, with the remaining 50% due upon successful launch.",
  },
  {
    q: "How long does a project take?",
    a: "A standard website takes 2-4 weeks. Complex web applications can take 6-12 weeks depending on scope.",
  },
  {
    q: "Do you provide hosting?",
    a: "We help you set up hosting (Vercel/AWS) on your own accounts so you maintain full control. We don't gatekeep your site.",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">
                Transparent Pricing
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Invest in <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Performance.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No hourly billing surprises. Just flat-rate
              pricing for world-class digital assets.
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
                    {plan.price !== "Custom" && (
                      <span className="text-slate-500 ml-2">/ project</span>
                    )}
                  </div>

                  <CTAButton
                    href="/contact"
                    variant={isPopular ? "primary" : "outline"}
                    className="w-full justify-center mb-8"
                  >
                    Choose {plan.name}
                  </CTAButton>

                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Features
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

      {/* ---------------- 3. COMPARISON TABLE (Glass) ---------------- */}
      <section className="py-24 border-t border-white/5 bg-[#08080C]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Detailed Breakdown
            </h2>
            <p className="text-slate-400">
              Compare features side-by-side to find your fit.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-slate-500 font-medium">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-white font-bold text-center">
                    Starter
                  </th>
                  <th className="py-4 px-6 text-purple-400 font-bold text-center">
                    Growth
                  </th>
                  <th className="py-4 px-6 text-white font-bold text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Custom Design", true, true, true],
                  ["Responsive Mobile", true, true, true],
                  ["CMS (Admin Panel)", false, true, true],
                  ["SEO Optimization", "Basic", "Advanced", "Enterprise"],
                  ["Support Period", "1 Month", "3 Months", "6 Months"],
                  [
                    "Analytics",
                    "Basic",
                    "Google Analytics 4",
                    "Custom Dashboard",
                  ],
                  ["Custom Backend", false, false, true],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="py-4 px-6 text-slate-300 font-medium">
                      {row[0]}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400">
                      {renderCell(row[1])}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400 bg-purple-500/5">
                      {renderCell(row[2])}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400">
                      {renderCell(row[3])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- 4. FAQ SECTION ---------------- */}
      <section className="py-24 relative">
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

      {/* ---------------- 5. FINAL CTA ---------------- */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Stop leaving money <br /> on the table.
          </h2>
          <CTAButton href="/contact" variant="white" size="lg">
            Get Your Free Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

// Helper to render table cells (Check, X, or Text)
function renderCell(value: string | boolean) {
  if (value === true)
    return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-slate-600 mx-auto" />;
  return <span className="text-white">{value}</span>;
}
