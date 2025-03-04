"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/vrhaman-logo.png";
import { Menu, X, Phone,} from "lucide-react";


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
    { title: "About" , href: "/about" },
    { title: "Contact" , href: "/contact" },
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src={Logo}
              alt="VRahman"
              width={120}
              height={40}
              className="h-10 w-auto"

            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href || "#"}
                  className={`flex items-center gap-1 font-medium ${
                    isScrolled ? "text-gray-800" : "text-black"
                  } hover:text-amber-500 transition-colors`}

                >
                  {item.title}


                </Link>

              
              </div>

            ))}
          </div>

          {/* Contact Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${
                isScrolled
                  ? "bg-amber-500 text-black hover:bg-amber-600"
                  : "bg-white text-amber-500 hover:bg-gray-100"
              }`}
            >
              
              Download App
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50"
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-gray-800" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
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
                className="fixed inset-0 bg-gray-900 z-40 md:hidden"
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
                        href="#"
                        className="text-2xl font-medium text-white hover:text-amber-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.a
                    href="tel:+1234567890"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="flex items-center gap-2 px-8 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors"
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
