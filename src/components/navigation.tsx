"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

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
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with enhanced design */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Skylence
              </span>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-purple-600" : "text-purple-300"
                } -mt-1`}
              >
                Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group ${
                        pathname === item.href ||
                        pathname.startsWith("/expertise")
                          ? scrolled
                            ? "text-purple-600 bg-purple-50"
                            : "text-white bg-white/10"
                          : scrolled
                          ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 transition-all duration-300 ${
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                          onClick={() => setServicesOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                      pathname === item.href
                        ? scrolled
                          ? "text-purple-600 bg-purple-50"
                          : "text-white bg-white/10"
                        : scrolled
                        ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-slate-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/20 backdrop-blur-xl mt-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-600"
                        : scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={closeMobileMenu}>
                <Button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl mx-4">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
