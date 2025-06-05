import { Button } from "@/components/ui/button"
import { CheckCircle, X, ArrowRight, Star, Zap, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups looking to establish their online presence.",
      icon: Sparkles,
      color: "blue",
      popular: false,
      features: [
        "5-page responsive website",
        "Modern UI/UX design",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "Social media integration",
        "1 month free support",
        "Basic analytics setup",
      ],
      notIncluded: ["E-commerce functionality", "Advanced animations", "Custom CMS", "Priority support"],
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses that need advanced features and functionality.",
      icon: Zap,
      color: "purple",
      popular: true,
      features: [
        "Up to 15 pages",
        "Advanced UI/UX design",
        "Custom animations",
        "E-commerce integration",
        "CMS integration",
        "Advanced SEO optimization",
        "Payment gateway setup",
        "3 months free support",
        "Advanced analytics",
        "Performance optimization",
        "Security features",
        "Email marketing setup",
      ],
      notIncluded: ["Custom backend development", "Third-party integrations"],
    },
    {
      name: "Enterprise",
      price: "$15,999",
      period: "one-time",
      description: "Complete solution for large businesses requiring custom development and integrations.",
      icon: Crown,
      color: "gold",
      popular: false,
      features: [
        "Unlimited pages",
        "Premium UI/UX design",
        "Custom backend development",
        "Advanced e-commerce features",
        "Custom CMS development",
        "Third-party integrations",
        "Advanced security features",
        "6 months free support",
        "Priority support",
        "Performance monitoring",
        "Custom analytics dashboard",
        "Staff training included",
        "Maintenance plan included",
        "Scalable architecture",
      ],
      notIncluded: [],
    },
  ]

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              Transparent Pricing
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Pricing Plans
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No monthly fees, no hidden costs. Pay once and own your website forever.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <div key={index} className={`relative group ${plan.popular ? "lg:scale-105 lg:-mt-8 lg:mb-8" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      plan.popular
                        ? "border-purple-200 bg-gradient-to-b from-purple-50/50 to-white"
                        : "border-gray-100 hover:border-purple-200"
                    } h-full`}
                  >
                    <div className="text-center mb-8">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                          plan.color === "purple"
                            ? "bg-gradient-to-br from-purple-500 to-purple-700"
                            : plan.color === "blue"
                              ? "bg-gradient-to-br from-blue-500 to-blue-700"
                              : "bg-gradient-to-br from-yellow-500 to-yellow-700"
                        } group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-slate-900 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        What's included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.notIncluded.length > 0 && (
                        <div className="pt-4">
                          <h4 className="font-semibold text-slate-900 flex items-center mb-3">
                            <X className="h-5 w-5 text-gray-400 mr-2" />
                            Not included:
                          </h4>
                          <ul className="space-y-2">
                            {plan.notIncluded.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : "bg-slate-900 hover:bg-slate-800"
                      } text-white rounded-xl h-12`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Custom Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Need Something Custom?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Have unique requirements? We create custom solutions tailored specifically to your business needs and
              budget.
            </p>

            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    Custom features and functionality built specifically for your business
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Flexible Pricing</h3>
                  <p className="text-gray-600">Pricing based on your specific requirements and project scope</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Premium Support</h3>
                  <p className="text-gray-600">Dedicated project manager and priority support throughout development</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900 mb-4">Starting from $25,000</p>
                <p className="text-gray-600 mb-8">Get a detailed quote based on your specific requirements</p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl px-8 py-6"
                  >
                    Request Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Pricing Questions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our pricing and what's included in each plan.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Are there any hidden fees or monthly charges?",
                answer:
                  "No, our pricing is completely transparent. You pay once and own your website forever. The only ongoing costs might be hosting and domain renewal, which we can help you set up.",
              },
              {
                question: "What happens after the free support period ends?",
                answer:
                  "After the free support period, you can continue using your website without any issues. If you need additional support or updates, we offer maintenance packages starting from $199/month.",
              },
              {
                question: "Can I upgrade my plan later?",
                answer:
                  "Yes! You can upgrade your plan at any time. We'll credit the amount you've already paid towards the higher plan and only charge the difference.",
              },
              {
                question: "Do you offer payment plans?",
                answer:
                  "Yes, we offer flexible payment plans. You can pay 50% upfront and the remaining 50% upon project completion. For larger projects, we can discuss custom payment schedules.",
              },
              {
                question: "What if I'm not satisfied with the final result?",
                answer:
                  "We offer unlimited revisions during the design phase and a 30-day satisfaction guarantee. If you're not completely happy, we'll work with you until you are, or provide a full refund.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="font-bold text-slate-900 mb-4 text-lg group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              Ready to Start?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project and get a personalized quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
