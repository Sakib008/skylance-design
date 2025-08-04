"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return
    }

    setIsSubscribing(true)
    setSubscribeStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email)
      
      setSubscribeStatus('success')
      setEmail("")
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubscribeStatus('idle'), 5000)
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setSubscribeStatus('error')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

      <div className="relative container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              Stay Updated
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get the latest{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                design insights
              </span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for web design tips, industry trends, and exclusive updates on our latest
              projects.
            </p>
            
            {/* Success/Error Messages */}
            {subscribeStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center gap-3 max-w-md mx-auto">
                <span className="text-green-400">✓</span>
                <p className="text-green-300">Successfully subscribed to our newsletter!</p>
              </div>
            )}

            {subscribeStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center gap-3 max-w-md mx-auto">
                <span className="text-red-400">✗</span>
                <p className="text-red-300">Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                required
              />
              <Button 
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl px-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Skylence</span>
                  <span className="text-sm font-medium text-purple-300 -mt-1">Design</span>
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Creating exceptional web applications that drive business growth through innovative design and
                cutting-edge development. Your vision, our expertise.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <div className="space-y-3">
                {[
                  { name: "UI/UX Design", href: "/expertise/ui-ux-design" },
                  { name: "Web Development", href: "/expertise/web-development" },
                  { name: "Performance Optimization", href: "/expertise/optimization" },
                  { name: "E-commerce Solutions", href: "/services" },
                  { name: "Maintenance & Support", href: "/services" },
                ].map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email us</p>
                    <p className="text-white font-medium">hello@skylencedesign.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Call us</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Visit us</p>
                    <p className="text-white font-medium">
                      123 Design Street
                      <br />
                      Creative District, CD 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {new Date().getFullYear()} Skylence Design. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Mohammad Sakib</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
