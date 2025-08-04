"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Sparkles, Heart } from "lucide-react"
import { 
  NewsletterForm, 
  SocialIcon, 
  LinkList, 
  ContactInfo, 
  BackgroundElements 
} from "@/components/ui"

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements variant="footer" />

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
            
            <NewsletterForm />
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
                <SocialIcon icon={Facebook} href="#" label="Facebook" />
                <SocialIcon icon={Twitter} href="#" label="Twitter" />
                <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
                <SocialIcon icon={Instagram} href="#" label="Instagram" />
              </div>
            </div>

            {/* Quick Links */}
            <LinkList 
              title="Quick Links"
              links={[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ]}
            />

            {/* Services */}
            <LinkList 
              title="Services"
              links={[
                { name: "UI/UX Design", href: "/expertise/ui-ux-design" },
                { name: "Web Development", href: "/expertise/web-development" },
                { name: "Performance Optimization", href: "/expertise/optimization" },
                { name: "E-commerce Solutions", href: "/services" },
                { name: "Maintenance & Support", href: "/services" },
              ]}
            />

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <ContactInfo 
                  icon={Mail} 
                  label="Email us" 
                  value="hello@skylencedesign.com" 
                />
                <ContactInfo 
                  icon={Phone} 
                  label="Call us" 
                  value="+1 (555) 123-4567" 
                />
                <ContactInfo 
                  icon={MapPin} 
                  label="Visit us" 
                  value={
                    <>
                      123 Design Street
                      <br />
                      Creative District, CD 12345
                    </>
                  } 
                />
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
