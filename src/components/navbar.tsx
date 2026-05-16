"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, } from "lucide-react";
import Logo from "../../public/vrhaman-logo.png";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="inline-block bg-white px-3 py-1.5 rounded-lg shadow-sm hover:scale-105 transition-transform">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href || "/"}
                  className={`flex items-center gap-1 font-bold ${isScrolled ? "text-gray-800" : "text-gray-900"
                    } hover:text-brand transition-all`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact Button & Mobile Menu Trigger */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${isScrolled
                  ? "bg-brand text-white hover:bg-opacity-90"
                  : "bg-white text-brand hover:bg-gray-100"
                }`}
            >
              Download App
            </motion.a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="text-gray-900" />
              ) : (
                <Menu className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween" }}
                className="fixed inset-0 bg-brand z-40 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href || "/"}
                        className="text-2xl font-medium text-white hover:opacity-80 transition-all"
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
                    className="flex items-center gap-2 px-8 py-3 bg-white text-brand rounded-full font-medium hover:bg-gray-100 transition-colors"
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
