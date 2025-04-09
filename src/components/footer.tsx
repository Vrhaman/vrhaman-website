"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/vrhaman-logo.png";

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Car, Bike, Plane, Home, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="container mx-auto px-4 pt-20 pb-10">
          <div className="grid md:grid-cols-2 gap-12 items-center border-b border-white/10 pb-12">
            <div>
              <Image
                src={Logo}
                alt="VRahman"
                width={150}
                height={50}
                className="mb-6"

              />
              <p className="text-gray-400 max-w-md">
                Experience luxury and comfort with our premium vehicle rental service.
                Choose from our extensive fleet of well-maintained vehicles.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for exclusive offers and updates</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              {['About Us', 'Services', 'Pricing', 'Contact'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Link href="#" className="flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              {[
                { name: 'Luxury Cars', icon: <Car className="w-4 h-4 text-amber-500" /> },
                { name: 'Premium Bikes', icon: <Bike className="w-4 h-4 text-amber-500" /> },
                { name: 'City Transfer', icon: <MapPin className="w-4 h-4 text-amber-500" /> },
                { name: 'Airport Transfer', icon: <Plane className="w-4 h-4 text-amber-500" /> },
                { name: 'Doorstep Delivery', icon: <Home className="w-4 h-4 text-amber-500" /> },
                { name: '24/7 Support', icon: <Headphones className="w-4 h-4 text-amber-500" /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Link href="#" className="flex items-center gap-3 group">
                    <div className="w-6 h-6 bg-amber-500/10 rounded-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              {[
                { icon: <Phone className="w-4 h-4" />, text: '+91 8968779413' },
                { icon: <Mail className="w-4 h-4" />, text: 'vrhaman.com@gmail.com' },
                { icon: <MapPin className="w-4 h-4" />, text: 'Jalandhar,India' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, color: 'hover:bg-blue-600' },
                  { icon: <Twitter className="w-5 h-5" />, color: 'hover:bg-blue-400' },
                  { icon: <Instagram className="w-5 h-5" />, color: 'hover:bg-pink-600' },
                  { icon: <Linkedin className="w-5 h-5" />, color: 'hover:bg-blue-700' },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5 }}
                    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${item.color} transition-colors`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 VRahman. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
                <Link href="/delete-page" className="hover:text-amber-500 transition-colors">Delete Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
