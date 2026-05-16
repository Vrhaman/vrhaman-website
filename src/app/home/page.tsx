"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Car, 
  Bike, 
  Calendar, 
  SmileIcon, 
  ArrowRight, 
  Star, 
  Shield, 
  Clock, 
  MapPin, 
  FastForward, 
  Gift, 
  Wallet2, 
  Check, 
  MessageCircleQuestion, 
  ChevronDown, 
  MessageSquare, 
  Globe, 
  User, 
  Download, 
  Zap, 
  Smartphone, 
  Users, 
  BadgeCheck,
  Search,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { useState } from 'react';

// Images - using the existing paths from public directory
import HeroImage from "../../../public/Customer Mockups/2.png";
import AppImage from "../../../public/Customer Mockups/3.png";
import AppImage2 from "../../../public/Customer Mockups/4.png";

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-amber-100/30" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#fef3c7_0%,_transparent_50%)] opacity-40" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 md:space-y-8"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md text-[#f99825] rounded-full text-xs md:text-sm font-bold border border-[#f99825]/20 shadow-sm"
              >
                <span className="w-2 h-2 bg-[#f99825] rounded-full animate-pulse" />
                Trusted by 50,000+ Happy Riders
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-gray-900"
              >
                Rent Bikes, Cars & EVs <br />
                <span className="text-[#f99825]">Easily with Vrhaman</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-base md:text-xl text-gray-600 max-w-xl leading-relaxed font-medium"
              >
                Explore nearby vehicles, compare options, book in a few taps, and enjoy a smooth self-drive rental experience with transparent pricing and convenient support.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="https://app.vrhaman.com/"
                  className="flex items-center justify-center gap-3 bg-[#f99825] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#e68a00] shadow-xl shadow-[#f99825]/20 transition-all hover:-translate-y-1 active:translate-y-0"
                >
                  Explore Vehicles
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                  className="flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-[#f99825] hover:text-[#f99825] shadow-lg transition-all hover:-translate-y-1 active:translate-y-0"
                >
                  Get App
                </Link>
                
                <Link
                  href="https://app.vrhaman.com/"
                  className="hidden md:flex items-center justify-center gap-3 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:text-[#f99825] transition-all"
                >
                  Book Now <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Hero Badges */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 md:flex items-center gap-4 md:gap-8 pt-4"
              >
                {[
                  { label: "Nearby Vehicles", icon: <Navigation className="w-4 h-4" /> },
                  { label: "Transparent Pricing", icon: <Wallet2 className="w-4 h-4" /> },
                  { label: "Easy Booking", icon: <BadgeCheck className="w-4 h-4" /> },
                  { label: "Self-Drive Rentals", icon: <Car className="w-4 h-4" /> }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">
                    <div className="w-7 h-7 bg-[#f99825]/10 rounded-lg flex items-center justify-center text-[#f99825]">
                      {badge.icon}
                    </div>
                    {badge.label}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - App Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-[450px] mx-auto">
                {/* Floating Glow */}
                <div className="absolute -inset-10 bg-[#f99825]/10 rounded-full blur-[100px] animate-pulse" />
                
                <Image
                  src={HeroImage}
                  alt="Rent self-drive bikes and cars in Pune and Gurgaon - Vrhaman App Preview"
                  width={450}
                  height={900}
                  className="relative z-10 w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.12)] pointer-events-none select-none"
                  priority
                />

                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-16 top-1/4 bg-white/90 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl z-20 border border-white max-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-tight">Verified</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight">Secure Booking</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-16 bottom-1/4 bg-white/90 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl z-20 border border-white max-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-[#f99825] fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-tight">Top Rated</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight">Best in Pune</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - How it Works */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#fef3c7_0%,_transparent_50%)] opacity-30" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#fef9c3_0%,_transparent_50%)] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-[#f99825] rounded-full text-xs md:text-sm font-bold mb-6 border border-amber-100"
            >
              <Search className="w-4 h-4" />
              Easy Booking Process
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">How Vrhaman Works</h2>
            <p className="text-base md:text-lg text-gray-600 font-medium">Get on the road in minutes with our streamlined customer experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-amber-100 -translate-y-1/2 z-0" />

            {[
              {
                step: "01",
                title: "Explore nearby vehicles",
                description: "Browse a wide range of bikes, cars, and EVs available in your immediate location.",
                icon: <Search className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Choose date & time",
                description: "Select your preferred rental duration and choose the vehicle that fits your style.",
                icon: <Calendar className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Book and start your ride",
                description: "Confirm your booking instantly and pick up your vehicle or have it delivered.",
                icon: <Zap className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 group transition-all duration-300 z-10"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-sm group-hover:bg-[#f99825] transition-colors">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-amber-50 text-[#f99825] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 md:mt-24">
            <Link 
              href="https://app.vrhaman.com/" 
              className="inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-[#f99825] transition-all group"
            >
              Start Exploring Available Vehicles 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Benefits Section */}
      <section className="py-20 md:py-32 bg-[#FDFBF7] relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[#f99825] font-black tracking-[0.2em] uppercase text-xs"
                >
                  Customer First
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Why Rent with Vrhaman?
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-lg font-medium leading-relaxed">
                  We&apos;ve removed the friction from traditional rentals. No more offline shop hopping or hidden surprises.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { title: "No offline shop hopping", icon: <CheckCircle2 className="w-5 h-5" /> },
                  { title: "Nearby bikes, cars, & EVs", icon: <MapPin className="w-5 h-5" /> },
                  { title: "Transparent pricing", icon: <Wallet2 className="w-5 h-5" /> },
                  { title: "Easy booking flow", icon: <Smartphone className="w-5 h-5" /> },
                  { title: "Home delivery available", icon: <Clock className="w-5 h-5" /> },
                  { title: "24/7 Support", icon: <MessageSquare className="w-5 h-5" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <div className="text-[#f99825]">{item.icon}</div>
                    <span className="font-bold text-gray-700 text-sm">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#f99825]/5 rounded-[3rem] blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4 md:gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="w-12 h-12 bg-amber-50 text-[#f99825] rounded-xl flex items-center justify-center mb-6">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold mb-2 text-gray-900 tracking-tight">50K+</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Happy Riders</p>
                  </div>
                  <div className="bg-[#f99825] p-8 rounded-[2.5rem] shadow-xl text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold mb-2 tracking-tight">50+</h4>
                    <p className="text-xs text-white/70 font-bold uppercase tracking-widest">Cities Covered</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-4 md:space-y-6 pt-12"
                >
                  <div className="bg-gray-900 p-8 rounded-[2.5rem] shadow-xl text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                      <Star className="w-6 h-6 text-[#f99825] fill-current" />
                    </div>
                    <h4 className="text-xl font-extrabold mb-2 tracking-tight">4.8★</h4>
                    <p className="text-xs text-white/50 font-bold uppercase tracking-widest">User Rating</p>
                  </div>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                    <div className="w-12 h-12 bg-amber-50 text-[#f99825] rounded-xl flex items-center justify-center mb-6">
                      <Car className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold mb-2 text-gray-900 tracking-tight">500+</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Vehicles</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#f99825] to-[#ffae42] rounded-[3rem] md:rounded-[5rem] p-8 md:p-24 relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tight">
                    Ready for Your <br />
                    Next Ride?
                  </h2>
                  <p className="text-lg md:text-2xl text-white/90 font-medium max-w-lg leading-relaxed">
                    Book your vehicle online and avoid last-minute offline rental confusion. Experience the difference.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="https://app.vrhaman.com/" 
                      className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-black transition-all shadow-2xl shadow-black/20"
                    >
                      Book Now
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman" 
                      className="inline-flex items-center gap-3 bg-white text-[#f99825] px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-gray-50 transition-all shadow-xl shadow-white/10"
                    >
                      <Download className="w-6 h-6" />
                      Get App
                    </Link>
                  </motion.div>
                </div>

                <div className="flex items-center gap-6 pt-4 text-white/90 font-bold text-sm uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> No Hidden Fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Fast Confirmation
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image 
                    src={AppImage2} 
                    alt="Best bike and car rental mobile app for instant bookings in India" 
                    width={400} 
                    height={800} 
                    className="mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
                  />
                </motion.div>
                {/* Glow behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-gray-600 font-medium">Everything you need to know about renting with Vrhaman.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                q: "How fast can I book a vehicle?", 
                a: "You can book a vehicle in less than 5 minutes! Simply select your ride, choose your duration, and confirm. Instant confirmation ensures you're ready to hit the road immediately." 
              },
              { 
                q: "Can I rent both bikes and cars?", 
                a: "Yes! Vrhaman offers a wide variety of vehicles including self-drive bikes, cars, and even EVs (Electric Vehicles) across 50+ cities in India." 
              },
              { 
                q: "Is pricing shown before booking?", 
                a: "Absolutely. We believe in 100% transparent pricing. You'll see the complete cost, including any deposits, before you make a payment. No hidden surprises." 
              },
              { 
                q: "Is home delivery available?", 
                a: "Yes, we offer convenient doorstep delivery and pickup in most of our operating cities. You can select this option during the booking process." 
              },
              { 
                q: "How do I get support after booking?", 
                a: "Our integrated support system is available 24/7. You can contact us directly through the app or website for any assistance during your rental period." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className={`text-base md:text-xl font-bold transition-colors ${openFaqIndex === i ? 'text-[#f99825]' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaqIndex === i ? 'bg-[#f99825] text-white rotate-180' : 'bg-amber-50 text-[#f99825] group-hover:bg-amber-100'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                {openFaqIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 md:px-8 pb-8 text-sm md:text-base text-gray-500 leading-relaxed font-medium"
                  >
                    <div className="pt-2 border-t border-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
