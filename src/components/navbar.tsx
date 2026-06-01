"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, X, Phone } from "lucide-react";
import Logo from "../../public/vrhaman-logo.png";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Vendor",
      href: "/vendor"
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 border-b border-gray-100 shadow-sm backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-block hover:scale-105 transition-transform shrink-0">
              <Image 
                src={Logo} 
                alt="Vrhaman Logo" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Side: Navigation & CTA Button */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation (Aligned next to CTA on right) */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href || "/"}
                    className="flex items-center gap-1 font-bold text-gray-900 hover:text-[#FF9A00] transition-all"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://app.vrhaman.com/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden min-h-11 items-center gap-2 rounded-full bg-[#FF9A00] px-6 py-2.5 font-bold text-white shadow-lg shadow-[#FF9A00]/25 transition-all hover:bg-[#FF9A00]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A00] md:flex"
              >
                <Globe className="h-4 w-4" />
                Web version
              </motion.a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50 rounded-xl p-2 text-gray-900 transition hover:bg-gray-100 md:hidden"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X />
                ) : (
                  <Menu />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.18 }}
                className="absolute left-4 right-4 top-full z-40 mt-3 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl md:hidden"
              >
                <div className="flex flex-col p-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href || "/"}
                        className="block rounded-xl px-4 py-3 text-base font-bold text-gray-900 transition hover:bg-[#FF9A00]/10 hover:text-[#FF9A00]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.a
                    href="tel:+918968779413"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF9A00] px-4 py-3 font-bold text-white transition-colors hover:bg-[#FF9A00]/90"
                  >
                    <Phone className="w-4 h-4" />
                    Book Now
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
