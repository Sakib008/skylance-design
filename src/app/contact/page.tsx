"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Star } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0  bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              Let&apos;s Connect
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? We&apos;d love to hear from you. Let&apos;s discuss how we can bring your vision to
              life with our expertise and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                    Send Message
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">Tell Us About Your Project</h2>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl h-12"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-xl shadow-lg transform rotate-6 hidden lg:block">
                <div className="bg-white p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <div className="text-xs text-slate-900 font-medium">Quick Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                  Contact Info
                </div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Let&apos;s Start a Conversation</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@skylencedesign.com</p>
                    <p className="text-gray-600">projects@skylencedesign.com</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Design Street</p>
                    <p className="text-gray-600">Creative District, CD 12345</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                  <h3 className="font-bold text-slate-900">Quick Response Guarantee</h3>
                </div>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters,
                  please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Got Questions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity, but most web applications take 6-12 weeks from start to finish. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What's included in your web development service?",
                answer:
                  "Our service includes UI/UX design, front-end and back-end development, testing, deployment, and 30 days of post-launch support. We also provide training and documentation.",
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer:
                  "Yes! We offer various maintenance packages including security updates, performance monitoring, content updates, and feature enhancements.",
              },
              {
                question: "Can you work with our existing brand guidelines?",
                answer:
                  "We can work within your existing brand guidelines or help you develop new ones if needed. We're flexible and adapt to your requirements.",
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let&apos;s Build Something Amazing</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? Contact us today and let&apos;s discuss how we can help bring your
              vision to life.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
