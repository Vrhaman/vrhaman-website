"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/vrhaman-logo.png";

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Car, Bike, Plane, Home, Headphones, ChevronDown, ChevronUp, Download, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const cities = [
    'Agra', 'Ahmedabad', 'Bangalore', 'Chandigarh', 'Chennai',
    'Bhubaneswar', 'Shimla', 'Gokarna', 'Kochi', 'Mangalore',
    'Bhopal', 'Agartala', 'Jodhpur', 'Udaipur', 'Vadodara',
    'Amritsar', 'Mount Abu', 'Gwalior', 'Dehradun', 'Delhi',
    'Ghaziabad', 'Goa', 'Gurgaon', 'Pondicherry', 'Ooty',
    'Trivandrum', 'Wayanad', 'Puri', 'Varanasi', 'Vijayawada',
    'Kota', 'Mathura', 'Madurai', 'Thrissur', 'Nainital',
    'Dharamshala', 'Guwahati', 'Hyderabad', 'Jaipur', 'Kolkata',
    'Leh', 'Indore', 'Coorg', 'Munnar', 'Lucknow',
    'Varkala', 'Mysore', 'Tirupati', 'Surat', 'Raipur',
    'Ranchi', 'Rameshwaram', 'Cuttack', 'Manali', 'Mumbai',
    'Noida', 'Pune', 'Udaipur', 'Vizag', 'Faridabad',
    'Bir Billing', 'Rishikesh', 'Coimbatore', 'Nagpur', 'Siliguri',
    'Chikmagalur', 'Hampi', 'Srinagar', 'Alibaug', 'Mahabaleshwar',
    'Mussoorie'
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 pt-20 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 border-b border-white/10 pb-16">
            {/* Brand Info */}
            <div className="space-y-6">
              <Link href="/" className="inline-block bg-white px-3 py-1.5 rounded-lg shadow-sm hover:scale-105 transition-transform mb-2">
                <Image
                  src={Logo}
                  alt="Vrhaman Logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Vrhaman is India's leading self-drive vehicle rental platform, connecting riders with premium bikes, cars, and EVs through a seamless digital experience.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/vrhaman" },
                  { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/vrhaman" },
                  { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/vrhaman" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/vrhaman" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Customer Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Customer Experience</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Book a Ride', href: 'https://app.vrhaman.com/' },
                  { name: 'Download Android App', href: 'https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman' },
                  { name: 'Browse Vehicles', href: 'https://app.vrhaman.com/' },
                  { name: 'How it Works', href: '/#how-it-works' },
                  { name: 'Safety Standards', href: '/safety' },
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-400 hover:text-brand transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vendor Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Vendor Partners</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Join as Vendor', href: 'https://vendor.vrhaman.com/' },
                  { name: 'List Your Vehicle', href: 'https://vendor.vrhaman.com/' },
                  { name: 'Vendor Dashboard', href: 'https://vendor.vrhaman.com/' },
                  { name: 'Partner Benefits', href: '/vendor' },
                  { name: 'Business Support', href: '/contact' },
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-400 hover:text-brand transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Support & Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Call Us</p>
                    <a href="tel:+918968779413" className="hover:text-brand">+91 8968779413</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Email Us</p>
                    <a href="mailto:vrhaman.com@gmail.com" className="hover:text-brand">vrhaman.com@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Location</p>
                    <span>Gurgaon, Haryana, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h4 className="text-xl font-bold text-white">Available in {cities.length}+ Cities</h4>
            <button
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 text-gray-400 hover:text-brand hover:border-brand transition-all bg-white/5"
            >
              {isLocationsOpen ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Explore All Cities <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            {(isLocationsOpen ? cities : cities.slice(0, 12)).map((city, i) => (
              <Link 
                key={i} 
                href="#" 
                className="text-gray-500 hover:text-brand text-sm transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                Bike & Car Rental in {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                <p>© 2024 Vrhaman Mobitech Pvt Ltd. All rights reserved.</p>
                <div className="hidden md:block w-px h-4 bg-gray-800" />
                <div className="flex gap-6">
                  <Link href="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">100% Secure & Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
