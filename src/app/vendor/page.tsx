"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, ChartBar, Shield, Wallet2, Users, BadgeCheck, Clock, Settings, CheckCircle2, Smartphone, FileCheck, Star } from 'lucide-react';
import HeroImage from "../../../public/Vendor Mockups/4.png";
import { useState } from 'react';
import GuideImage1 from "../../../public/Vendor Mockups/2.png";
import GuideImage2 from "../../../public/Vendor Mockups/1.png";
import GuideImage3 from "../../../public/Vendor Mockups/3.png";
import GuideImage4 from "../../../public/Vendor Mockups/4.png";

export default function VendorPage() {
  const [activeGuide, setActiveGuide] = useState(0);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/50" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                VRahman for Vendors
              </span>
              
              <h1 className="font-heading text-6xl md:text-7xl font-bold leading-tight">
                Grow Your Vehicle 
                <span className="block text-amber-500">Rental Business</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                Join VRahman&apos;s trusted network of vehicle providers. List your fleet, manage bookings, 
                and grow your revenue with our powerful vendor platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/vendor/register"
                    className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-all group"
                  >
                    Download Vendor App
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/vendor/demo"
                    className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-medium border-2 border-amber-500 hover:bg-amber-50 transition-all"
                  >
                    Request Demo
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                {[
                  { value: "10K+", label: "Active Rentals", icon: <Car className="w-6 h-6" /> },
                  { value: "95%", label: "Booking Rate", icon: <ChartBar className="w-6 h-6" /> },
                  { value: "₹50K+", label: "Avg. Monthly", icon: <Wallet2 className="w-6 h-6" /> },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-6 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-base text-gray-600 font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-[400px] mx-auto">
                <Image
                  src={HeroImage}
                  alt="Vendor Dashboard"
                  width={400}
                  height={800}
                  quality={100}
                  priority
                  className="w-full h-auto rounded-[2rem] shadow-2xl"
                />

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-12 top-1/4 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="text-amber-500" />
                    <div>
                      <div className="font-medium">Secure Platform</div>
                      <div className="text-sm text-gray-600">Protected Transactions</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-12 bottom-1/4 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <ChartBar className="text-amber-500" />
                    <div>
                      <div className="font-medium">Real-time Analytics</div>
                      <div className="text-sm text-gray-600">Track Performance</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#fef3c7_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#fef9c3_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Platform Features
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Everything You Need to
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Succeed and Grow
              </span>
            </motion.h2>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 group"
            >
              <div className="relative h-full bg-gradient-to-br from-amber-500 to-yellow-500 p-10 rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-auto">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
                      <ChartBar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Real-time Analytics</h3>
                    <p className="text-white/80 text-lg max-w-lg">
                      Track performance, revenue, and booking trends with detailed insights. Make data-driven decisions to grow your business.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Revenue Tracking</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Booking Analytics</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Regular Feature Cards */}
            <div className="lg:col-span-4 grid gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Secure Payments",
                  description: "Reliable payment processing with instant transfers"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Instant Bookings",
                  description: "Automated booking system with real-time updates"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row Feature Cards */}
            {[
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Fleet Management",
                description: "Easily manage your vehicle listings and availability"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Customer Management",
                description: "Handle customer communications efficiently"
              },
              {
                icon: <BadgeCheck className="w-6 h-6" />,
                title: "Verified Renters",
                description: "Pre-verified customers for safer rentals"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="lg:col-span-4 group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              Simple Registration Process
            </span>
            <h2 className="font-heading text-4xl font-bold mb-6 text-black">
              Start Your Journey in 3 Easy Steps
            </h2>
            <p className="font-body text-xl text-gray-600">
              Get started with VRahman in minutes. Our streamlined registration process makes it easy to begin listing your vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: <FileCheck className="w-8 h-8" />,
                title: "Complete Registration",
                description: "Fill out basic information and verify your identity",
                step: "01"
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "List Your Vehicles",
                description: "Add your fleet with photos and detailed descriptions",
                step: "02"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Get Verified",
                description: "Quick verification process by our team",
                step: "03"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-900 rounded-lg flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>

                <h3 className="font-heading text-xl font-semibold mb-4 text-black">{step.title}</h3>
                <p className="font-body text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First Booking Guide Section */}
      <section className="py-24 bg-[#1C1E23] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-[#2A2D36] rounded-full text-sm font-medium mb-6">
              Getting Started Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Path to First Booking
            </h2>
            <p className="text-lg text-gray-400">
              Follow these proven steps to secure your first rental and start earning
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Side - Guide Steps */}
            <div className="lg:col-span-5 space-y-3">
              {[
                {
                  title: "Optimize Your Listing",
                  description: "Add high-quality photos and detailed descriptions of your vehicles",
                  icon: <Smartphone className="w-6 h-6" />,
                  image: GuideImage1,
                  iconBg: "bg-amber-500"
                },
                {
                  title: "Set Competitive Prices",
                  description: "Use our pricing tools to set attractive rates for your market",
                  icon: <Wallet2 className="w-6 h-6" />,
                  image: GuideImage2,
                  iconBg: "bg-amber-500"
                },
                {
                  title: "Quick Response Time",
                  description: "Enable instant booking and respond to inquiries promptly",
                  icon: <Clock className="w-6 h-6" />,
                  image: GuideImage3,
                  iconBg: "bg-amber-500"
                },
                {
                  title: "Maintain High Standards",
                  description: "Keep your vehicles well-maintained and clean for great reviews",
                  icon: <Star className="w-6 h-6" />,
                  image: GuideImage4,
                  iconBg: "bg-amber-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveGuide(index)}
                  className={`flex items-start gap-4 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeGuide === index 
                      ? 'bg-amber-500' 
                      : 'bg-[#2A2D36] hover:bg-[#32363F]'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    activeGuide === index ? 'bg-white text-amber-500' : item.iconBg + ' text-white'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${
                      activeGuide === index ? 'text-white' : 'text-gray-400'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Image Preview */}
            <div className="lg:col-span-7 relative lg:sticky lg:top-24">
              <div className="relative aspect-[375/812] max-w-[375px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-[#2A2D36] rounded-[2.5rem] shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl" />
                </div>

                {/* Phone Screen Content */}
                <div className="absolute inset-[4px] rounded-[2.3rem] overflow-hidden bg-white">
                  {[GuideImage1, GuideImage2, GuideImage3, GuideImage4].map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeGuide === index ? 1 : 0,
                        scale: activeGuide === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`absolute inset-0 ${activeGuide === index ? 'z-10' : 'z-0'}`}
                    >
                      <Image
                        src={image}
                        alt={`Guide Step ${index + 1}`}
                        fill
                        className="object-cover"
                        quality={100}
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-[3rem] blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="font-body text-xl mb-8 text-white/90">
              Join thousands of successful vehicle providers on VRahman
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/vendor/register"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all"
              >
                Download Vendor App
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
