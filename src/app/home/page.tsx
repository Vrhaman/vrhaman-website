"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Car, Calendar, SmileIcon, ArrowRight, Star, Shield, Clock, MapPin, FastForward, Gift, Wallet2, Check, MessageCircleQuestion, ChevronDown, MessageSquare,  } from 'lucide-react';
import { useState } from 'react';
import HeroImage from "../../../public/Customer Mockups/2.png";
import AppImage from "../../../public/Customer Mockups/3.png";
import AppImage2 from "../../../public/Customer Mockups/4.png";


export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
                Premium Vehicle Rentals
              </span>

          


              <h1 className="font-heading text-5xl md:text-5xl font-bold leading-tight text-black">
              Rent Bikes and Cars at the Best Prices 
                <span className="block text-amber-500"> Fast, Easy & Reliable with Vrhaman</span>
              </h1>

              <p className="text-md text-gray-500 max-w-lg">
              Looking for an affordable bike for your daily commute or a luxury car for a special occasion? Vrhaman offers
a wide range of well-maintained bikes and premium cars for rent, tailored to suit every budget and lifestyle.
With doorstep delivery, real-time booking, and transparent pricing, renting a vehicle has never been this
easy. Enjoy a hassle-free rental experience with our 24/7 customer support, 100% insurance coverage, and
a seamless booking process—all from the comfort of your phone.
Whether you're in Jalandhar, Delhi, Chandigarh, Pune, or anywhere we operate, Vrhaman is your trusted
partner for safe, secure, and convenient bike and car rentals.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                    className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-all group"
                  >
                    Download App
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8">
                {[
                  { value: "500+", label: "Vehicles" },
                  { value: "50k+", label: "Happy Customers" },
                  { value: "100%", label: "Safe Rides" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-amber-500">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
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
                  alt="Vrhaman App"
                  width={400}
                  height={800}
                  quality={100}
                  priority
                  className="w-full h-auto"
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
                      <div className="font-medium">Fully Insured</div>
                      <div className="text-sm text-gray-600">Safe & Secure</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-12 bottom-1/4 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="text-amber-500" />
                    <div>
                      <div className="font-medium">24/7 Support</div>
                      <div className="text-sm text-gray-600">Always Available</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

         {/* Features Section - Modern Cards */}
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Why Choose Vrhaman
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Experience the Best in
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Vehicle Rentals
              </span>
            </motion.h2>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Feature Card */}
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
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Safe & Secure Rentals</h3>
                    <p className="text-white/80 text-lg max-w-lg">
                      Every vehicle is thoroughly inspected and verified. Enjoy peace of mind with our comprehensive insurance coverage.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Verified Vehicles</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">24/7 Support</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Insurance Included</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side Feature Cards */}
            <div className="lg:col-span-4 grid gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors text-black">Quick Booking</h3>
                  <p className="text-gray-600">Book your vehicle in minutes with our easy-to-use platform</p>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Wallet2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors text-black">Best Prices</h3>
                  <p className="text-gray-600">Competitive rates with no hidden charges</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Feature Cards */}
            {[
              {
                icon: <Car className="w-6 h-6" />,
                title: "Wide Selection",
                description: "Choose from our extensive fleet of vehicles"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Convenient Locations",
                description: "Multiple pickup and drop-off points"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Premium Service",
                description: "Exceptional customer service 24/7"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
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

      {/* Comparison Section */}
      <section className="py-32 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Why Choose Vrhaman
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Vrhaman vs
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent px-4">
                Competitors
              </span>
            </motion.h2>
            <p className="text-gray-600 text-lg">
              See how we compare to other rental services and why customers choose us
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-3">
                {/* Features Column */}
                <div className="bg-gray-50 p-8">
                  <div className="h-24 flex items-end mb-8">
                    <h3 className="text-xl font-semibold text-gray-700">Features</h3>
                  </div>
                  
                  {[
                    "Pricing",
                    "Vehicle Quality",
                    "Booking Process",
                    "Customer Support",
                    "Insurance Coverage",
                    "Cancellation Policy",
                    "Loyalty Program"
                  ].map((feature, index) => (
                    <div key={index} className="py-6 border-t border-gray-200">
                      <p className="font-medium text-gray-800">{feature}</p>
                    </div>
                  ))}
                </div>
                
                {/* VRahman Column */}
                <div className="p-8 border-l border-r border-gray-200">
                  <div className="h-24 flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2">V</div>
                      <h3 className="text-xl font-bold text-amber-600">Vrhaman</h3>
                    </div>
                  </div>
                  
                  {[
                    { text: "Transparent pricing with no hidden fees", highlight: true },
                    { text: "Premium, well-maintained vehicles", highlight: true },
                    { text: "5-minute booking process", highlight: true },
                    { text: "24/7 dedicated support team", highlight: true },
                    { text: "Comprehensive coverage included", highlight: true },
                    { text: "Free cancellation up to 24 hours", highlight: true },
                    { text: "Earn points on every booking", highlight: true }
                  ].map((item, index) => (
                    <div key={index} className="py-6 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Check className={`w-5 h-5 ${item.highlight ? 'text-green-500' : 'text-gray-400'}`} />
                        <p className={`${item.highlight ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Other Competitors Column */}
                <div className="p-8">
                  <div className="h-24 flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-2xl font-bold mx-auto mb-2">T</div>
                      <h3 className="text-xl font-bold text-gray-600">Other Competitors</h3>
                    </div>
                  </div>
                  
                  {[
                    { text: "Additional fees often added", highlight: false },
                    { text: "Variable vehicle quality", highlight: false },
                    { text: "15-20 minute booking process", highlight: false },
                    { text: "Limited hours support", highlight: false },
                    { text: "Basic coverage, extras cost more", highlight: false },
                    { text: "Strict cancellation policy with fees", highlight: false },
                    { text: "No rewards program", highlight: false }
                  ].map((item, index) => (
                    <div key={index} className="py-6 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        {item.highlight ? 
                          <Check className="w-5 h-5 text-green-500" /> : 
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        }
                        <p className={`${item.highlight ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Comparison */}
        
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 mb-4 text-sm font-medium text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full shadow-sm border border-amber-100/50"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                Simple Process
              </span>
            </motion.span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              How It{' '}
              <span className="relative">
                Works
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience our seamless rental process</p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-8 pt-8">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Additional Info */}
                      <div className="pt-6 border-t border-dashed border-amber-200">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                          {step.additionalInfo}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ 
                          x: [0, 10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 mb-4 text-sm font-medium text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full shadow-sm border border-amber-100/50"
            >
              Customer Stories
            </motion.span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              What Our{' '}
              <span className="relative inline-block">
                Customers
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
              </span>
              {' '}Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real experiences from our valued customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-amber-50">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-400 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed italic">&quot;{testimonial.comment}&quot;</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-dashed border-amber-200">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-amber-600 font-medium">Verified Customer</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#fef3c7_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#fef9c3_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Frequently Asked Questions
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Got
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent px-4">
                Questions?
              </span>
              We&#39;ve Got Answers
            </motion.h2>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto mb-16">
           
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What documents do I need to rent a vehicle?",
                answer: "You'll need a valid driver's license, proof of identity (Aadhar/PAN), and a credit card for security deposit. For certain vehicles, additional documentation may be required."
              },
              {
                question: "Is insurance included in the rental price?",
                answer: "Yes, basic insurance is included in all our rentals. We also offer premium insurance options for additional coverage and peace of mind."
              },
              {
                question: "Can I modify or cancel my booking?",
                answer: "Yes, you can modify or cancel your booking up to 24 hours before the pickup time. Changes may affect pricing, and cancellation fees may apply."
              },
              {
                question: "What is your fuel policy?",
                answer: "We provide vehicles with a full tank of fuel, and we expect them to be returned with a full tank. This ensures transparency and fairness in fuel charges."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    className="w-full text-left p-6 focus:outline-none"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                          <MessageCircleQuestion className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <ChevronDown 
                          className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                            openFaqIndex === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0,
                        marginTop: openFaqIndex === index ? 16 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-14"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 max-w-2xl mx-auto border border-amber-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Still have questions?</h4>
              <p className="text-gray-600 mb-6">
                Can&#39;t find the answer you&#39;re looking for? Our team is here to help!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact Support
                </motion.a>
               
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated 3D background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#fef3c7_0%,_#fef9c3_25%,_#fff_100%)]">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5 }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>

              <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* Left Content - Takes 3 columns */}
                <div className="lg:col-span-3 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold">
                        Limited Time Offer
                      </span>
                      <span className="px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold">
                        Save 20% Today
                      </span>
                    </div>
                    
                    <h2 className="text-5xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 bg-clip-text text-transparent">
                        Start Your Journey
                      </span>
                      <span className="block mt-2 bg-gradient-to-br from-purple-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                        With Premium Service
                      </span>
                    </h2>

                    <p className="text-xl text-gray-600">
                      Join thousands of satisfied customers experiencing luxury and comfort. 
                      Special welcome bonus for new members!
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Download App
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </span>

                          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full font-semibold transition-colors duration-300"
                        >
                          Learn More
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Content - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <FastForward className="text-amber-500 h-10 w-10" />, title: "Quick Booking", desc: "5-min process" },
                      { icon: <Shield className="text-amber-500 h-10 w-10" />, title: "Full Insurance", desc: "100% coverage" },
                      { icon: <Star className="text-amber-500 h-10 w-10" />, title: "Best Rates", desc: "Price match guarantee" },
                      { icon: <Gift className="text-amber-500 h-10 w-10" />, title: "Rewards", desc: "Earn points on rides" }

                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative">
                          <span className="block text-3xl mb-2">{item.icon}</span>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-500 to-yellow-500">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 2px, transparent 0)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                📱 Mobile App Available
              </motion.span>

              <h2 className="text-5xl font-bold leading-tight">
              Get the Vrhaman App
                <span className="block mt-2 text-3xl font-normal text-white/90">
                 Rent Anytime, Anywhere!
                </span>
              </h2>

              <p className="text-xl text-white/80 max-w-lg">
              Book your ride in minutes with our easy-to-use app! Enjoy exclusive deals, real-time tracking, and
              hassle-free booking—available on iOS & Android. Download now and ride with ease!
              </p>

              <div className="flex flex-wrap gap-4">
                {/* App Store Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-gray-900 pl-4 pr-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="leading-none">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-gray-900 pl-4 pr-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="leading-none">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { text: "Real-time Availability – Find your ride instantly" },
                  { text: "Instant Booking – Just a few clicks & you're set!" },
                  { text: "No Hidden Charges – 100% price transparency" },
                  { text: "Exclusive Mobile Deals – Unlock special discounts" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <Check className="w-5 h-5" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative h-[600px] w-full">
                {/* First Phone Mockup */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute left-0 top-0 w-[280px]"
                >
                  <Image
                    src={AppImage}
                    alt="Vrhaman App Screen 1"
                    width={280}
                    height={560}
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                  />
                </motion.div>

                {/* Second Phone Mockup */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute right-0 top-12 w-[280px]"
                >
                  <Image
                    src={AppImage2}
                    alt="Vrhaman App Screen 2"
                    width={280}
                    height={560}
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                >
                  <div className="text-white text-sm">
                    <div className="font-semibold">Quick Booking</div>
                    <div className="text-white/80">Book in 5 minutes</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                >
                  <div className="text-white text-sm">
                    <div className="font-semibold">Track Real-time</div>
                    <div className="text-white/80">Know your ride status</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// const stats = [
//   { value: "500+", label: "Vehicles" },
//   { value: "50k+", label: "Happy Customers" },
//   { value: "100%", label: "Safe Rides" },
//   { value: "24/7", label: "Support" },
// ];

// const features = [
//   {
//     icon: "🏃",
//     title: "Lightning Fast Booking",
//     description: "Get on the road in minutes with our streamlined 5-minute booking process"
//   },
//   {
//     icon: "🛡️",
//     title: "Premium Insurance",
//     description: "Drive worry-free with our comprehensive vehicle insurance coverage"
//   },
//   {
//     icon: "✨",
//     title: "Crystal Clear Pricing",
//     description: "What you see is what you pay - transparent pricing, always"
//   }
// ];

// const categories = [
//   {
//     name: "Luxury Cars",
//     description: "Premium vehicles for special occasions",
//     startingPrice: "2999",
//     image: "/images/luxury-car.jpg"
//   },
//   {
//     name: "SUVs",
//     description: "Perfect for family trips and adventures",
//     startingPrice: "1999",
//     image: "/images/suv.jpg"
//   },
//   {
//     name: "Sports Bikes",
//     description: "Experience the thrill of riding",
//     startingPrice: "1499",
//     image: "/images/sports-bike.jpg"
//   },
//   {
//     name: "Economy Cars",
//     description: "Reliable and fuel-efficient vehicles",
//     startingPrice: "999",
//     image: "/images/economy-car.jpg"
//   }
// ];

const steps = [
  { 
    icon: <Car className="text-amber-500 h-10 w-10" />,
    title: "Choose Your Vehicle",
    description: "Browse through our extensive collection of well-maintained vehicles. Filter by type, price, or features to find your perfect match.",
    additionalInfo: "100+ vehicles available"
  },
  {
    icon: <Calendar className="text-amber-500 h-10 w-10" />,
    title: "Book & Pay",
    description: "Select your dates, add any extras you need, and complete your booking with our secure payment system. Get instant confirmation.",
    additionalInfo: "Secure payment options"
  },
  {
    icon: <SmileIcon className="text-amber-500 h-10 w-10" />,
    title: "Enjoy Your Ride",
    description: "Pick up your vehicle at the scheduled time. Our team will guide you through everything you need to know for a great experience.",
    additionalInfo: "24/7 customer support"
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    comment: "Best rental service I've ever used. The cars are always in perfect condition and the staff is super helpful.",
    avatar: "/images/avatar1.jpg"
  },
  {
    name: "Priya Patel",
    location: "Bangalore",
    comment: "Incredibly smooth booking process and great rates. Will definitely use again!",
    avatar: "/images/avatar2.jpg"
  },
  {
    name: "Amit Kumar",
    location: "Delhi",
    comment: "The variety of vehicles and the quality of service is unmatched. Highly recommended!",
    avatar: "/images/avatar3.jpg"
  }
]; 
 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Car, Calendar, SmileIcon, ArrowRight, Star, Shield, Clock, MapPin, FastForward, Gift, Wallet2, Check, MessageCircleQuestion, ChevronDown, MessageSquare,  } from 'lucide-react';
import { useState } from 'react';
import HeroImage from "../../../public/Customer Mockups/2.png";
import AppImage from "../../../public/Customer Mockups/3.png";
import AppImage2 from "../../../public/Customer Mockups/4.png";


export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
                Premium Vehicle Rentals
              </span>

          


              <h1 className="font-heading text-5xl md:text-5xl font-bold leading-tight text-black">
              Rent Bikes and Cars at the Best Prices 
                <span className="block text-amber-500"> Fast, Easy & Reliable with Vrhaman</span>
              </h1>

              <p className="text-md text-gray-500 max-w-lg">
              Looking for an affordable bike for your daily commute or a luxury car for a special occasion? Vrhaman offers
a wide range of well-maintained bikes and premium cars for rent, tailored to suit every budget and lifestyle.
With doorstep delivery, real-time booking, and transparent pricing, renting a vehicle has never been this
easy. Enjoy a hassle-free rental experience with our 24/7 customer support, 100% insurance coverage, and
a seamless booking process—all from the comfort of your phone.
Whether you're in Jalandhar, Delhi, Chandigarh, Pune, or anywhere we operate, Vrhaman is your trusted
partner for safe, secure, and convenient bike and car rentals.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                    className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-all group"
                  >
                    Download App
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8">
                {[
                  { value: "500+", label: "Vehicles" },
                  { value: "50k+", label: "Happy Customers" },
                  { value: "100%", label: "Safe Rides" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-amber-500">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
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
                  alt="Vrhaman App"
                  width={400}
                  height={800}
                  quality={100}
                  priority
                  className="w-full h-auto"
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
                      <div className="font-medium">Fully Insured</div>
                      <div className="text-sm text-gray-600">Safe & Secure</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-12 bottom-1/4 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="text-amber-500" />
                    <div>
                      <div className="font-medium">24/7 Support</div>
                      <div className="text-sm text-gray-600">Always Available</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

         {/* Features Section - Modern Cards */}
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Why Choose Vrhaman
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Experience the Best in
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Vehicle Rentals
              </span>
            </motion.h2>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Feature Card */}
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
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Safe & Secure Rentals</h3>
                    <p className="text-white/80 text-lg max-w-lg">
                      Every vehicle is thoroughly inspected and verified. Enjoy peace of mind with our comprehensive insurance coverage.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Verified Vehicles</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">24/7 Support</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Insurance Included</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side Feature Cards */}
            <div className="lg:col-span-4 grid gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors text-black">Quick Booking</h3>
                  <p className="text-gray-600">Book your vehicle in minutes with our easy-to-use platform</p>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Wallet2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors text-black">Best Prices</h3>
                  <p className="text-gray-600">Competitive rates with no hidden charges</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Feature Cards */}
            {[
              {
                icon: <Car className="w-6 h-6" />,
                title: "Wide Selection",
                description: "Choose from our extensive fleet of vehicles"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Convenient Locations",
                description: "Multiple pickup and drop-off points"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Premium Service",
                description: "Exceptional customer service 24/7"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
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

      {/* Comparison Section */}
      <section className="py-32 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Why Choose Vrhaman
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Vrhaman vs
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent px-4">
                Competitors
              </span>
            </motion.h2>
            <p className="text-gray-600 text-lg">
              See how we compare to other rental services and why customers choose us
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-3">
                {/* Features Column */}
                <div className="bg-gray-50 p-8">
                  <div className="h-24 flex items-end mb-8">
                    <h3 className="text-xl font-semibold text-gray-700">Features</h3>
                  </div>
                  
                  {[
                    "Pricing",
                    "Vehicle Quality",
                    "Booking Process",
                    "Customer Support",
                    "Insurance Coverage",
                    "Cancellation Policy",
                    "Loyalty Program"
                  ].map((feature, index) => (
                    <div key={index} className="py-6 border-t border-gray-200">
                      <p className="font-medium text-gray-800">{feature}</p>
                    </div>
                  ))}
                </div>
                
                {/* VRahman Column */}
                <div className="p-8 border-l border-r border-gray-200">
                  <div className="h-24 flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2">V</div>
                      <h3 className="text-xl font-bold text-amber-600">Vrhaman</h3>
                    </div>
                  </div>
                  
                  {[
                    { text: "Transparent pricing with no hidden fees", highlight: true },
                    { text: "Premium, well-maintained vehicles", highlight: true },
                    { text: "5-minute booking process", highlight: true },
                    { text: "24/7 dedicated support team", highlight: true },
                    { text: "Comprehensive coverage included", highlight: true },
                    { text: "Free cancellation up to 24 hours", highlight: true },
                    { text: "Earn points on every booking", highlight: true }
                  ].map((item, index) => (
                    <div key={index} className="py-6 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Check className={`w-5 h-5 ${item.highlight ? 'text-green-500' : 'text-gray-400'}`} />
                        <p className={`${item.highlight ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Other Competitors Column */}
                <div className="p-8">
                  <div className="h-24 flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-2xl font-bold mx-auto mb-2">T</div>
                      <h3 className="text-xl font-bold text-gray-600">Other Competitors</h3>
                    </div>
                  </div>
                  
                  {[
                    { text: "Additional fees often added", highlight: false },
                    { text: "Variable vehicle quality", highlight: false },
                    { text: "15-20 minute booking process", highlight: false },
                    { text: "Limited hours support", highlight: false },
                    { text: "Basic coverage, extras cost more", highlight: false },
                    { text: "Strict cancellation policy with fees", highlight: false },
                    { text: "No rewards program", highlight: false }
                  ].map((item, index) => (
                    <div key={index} className="py-6 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        {item.highlight ? 
                          <Check className="w-5 h-5 text-green-500" /> : 
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        }
                        <p className={`${item.highlight ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Comparison */}
        
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 mb-4 text-sm font-medium text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full shadow-sm border border-amber-100/50"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                Simple Process
              </span>
            </motion.span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              How It{' '}
              <span className="relative">
                Works
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience our seamless rental process</p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-8 pt-8">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Additional Info */}
                      <div className="pt-6 border-t border-dashed border-amber-200">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                          {step.additionalInfo}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ 
                          x: [0, 10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 mb-4 text-sm font-medium text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full shadow-sm border border-amber-100/50"
            >
              Customer Stories
            </motion.span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              What Our{' '}
              <span className="relative inline-block">
                Customers
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
              </span>
              {' '}Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real experiences from our valued customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-amber-50">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-400 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed italic">&quot;{testimonial.comment}&quot;</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-dashed border-amber-200">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-amber-600 font-medium">Verified Customer</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#fef3c7_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#fef9c3_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Frequently Asked Questions
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Got
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent px-4">
                Questions?
              </span>
              We&#39;ve Got Answers
            </motion.h2>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto mb-16">
           
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What documents do I need to rent a vehicle?",
                answer: "You'll need a valid driver's license, proof of identity (Aadhar/PAN), and a credit card for security deposit. For certain vehicles, additional documentation may be required."
              },
              {
                question: "Is insurance included in the rental price?",
                answer: "Yes, basic insurance is included in all our rentals. We also offer premium insurance options for additional coverage and peace of mind."
              },
              {
                question: "Can I modify or cancel my booking?",
                answer: "Yes, you can modify or cancel your booking up to 24 hours before the pickup time. Changes may affect pricing, and cancellation fees may apply."
              },
              {
                question: "What is your fuel policy?",
                answer: "We provide vehicles with a full tank of fuel, and we expect them to be returned with a full tank. This ensures transparency and fairness in fuel charges."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    className="w-full text-left p-6 focus:outline-none"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                          <MessageCircleQuestion className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <ChevronDown 
                          className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                            openFaqIndex === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0,
                        marginTop: openFaqIndex === index ? 16 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-14"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 max-w-2xl mx-auto border border-amber-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Still have questions?</h4>
              <p className="text-gray-600 mb-6">
                Can&#39;t find the answer you&#39;re looking for? Our team is here to help!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact Support
                </motion.a>
               
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated 3D background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#fef3c7_0%,_#fef9c3_25%,_#fff_100%)]">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5 }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>

              <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* Left Content - Takes 3 columns */}
                <div className="lg:col-span-3 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold">
                        Limited Time Offer
                      </span>
                      <span className="px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold">
                        Save 20% Today
                      </span>
                    </div>
                    
                    <h2 className="text-5xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 bg-clip-text text-transparent">
                        Start Your Journey
                      </span>
                      <span className="block mt-2 bg-gradient-to-br from-purple-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                        With Premium Service
                      </span>
                    </h2>

                    <p className="text-xl text-gray-600">
                      Join thousands of satisfied customers experiencing luxury and comfort. 
                      Special welcome bonus for new members!
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Download App
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </span>

                          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full font-semibold transition-colors duration-300"
                        >
                          Learn More
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Content - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <FastForward className="text-amber-500 h-10 w-10" />, title: "Quick Booking", desc: "5-min process" },
                      { icon: <Shield className="text-amber-500 h-10 w-10" />, title: "Full Insurance", desc: "100% coverage" },
                      { icon: <Star className="text-amber-500 h-10 w-10" />, title: "Best Rates", desc: "Price match guarantee" },
                      { icon: <Gift className="text-amber-500 h-10 w-10" />, title: "Rewards", desc: "Earn points on rides" }

                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative">
                          <span className="block text-3xl mb-2">{item.icon}</span>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-500 to-yellow-500">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 2px, transparent 0)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                📱 Mobile App Available
              </motion.span>

              <h2 className="text-5xl font-bold leading-tight">
              Get the Vrhaman App
                <span className="block mt-2 text-3xl font-normal text-white/90">
                 Rent Anytime, Anywhere!
                </span>
              </h2>

              <p className="text-xl text-white/80 max-w-lg">
              Book your ride in minutes with our easy-to-use app! Enjoy exclusive deals, real-time tracking, and
              hassle-free booking—available on iOS & Android. Download now and ride with ease!
              </p>

              <div className="flex flex-wrap gap-4">
                {/* App Store Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-gray-900 pl-4 pr-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="leading-none">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-gray-900 pl-4 pr-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="leading-none">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { text: "Real-time Availability – Find your ride instantly" },
                  { text: "Instant Booking – Just a few clicks & you're set!" },
                  { text: "No Hidden Charges – 100% price transparency" },
                  { text: "Exclusive Mobile Deals – Unlock special discounts" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <Check className="w-5 h-5" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative h-[600px] w-full">
                {/* First Phone Mockup */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute left-0 top-0 w-[280px]"
                >
                  <Image
                    src={AppImage}
                    alt="Vrhaman App Screen 1"
                    width={280}
                    height={560}
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                  />
                </motion.div>

                {/* Second Phone Mockup */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute right-0 top-12 w-[280px]"
                >
                  <Image
                    src={AppImage2}
                    alt="Vrhaman App Screen 2"
                    width={280}
                    height={560}
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                >
                  <div className="text-white text-sm">
                    <div className="font-semibold">Quick Booking</div>
                    <div className="text-white/80">Book in 5 minutes</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                >
                  <div className="text-white text-sm">
                    <div className="font-semibold">Track Real-time</div>
                    <div className="text-white/80">Know your ride status</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// const stats = [
//   { value: "500+", label: "Vehicles" },
//   { value: "50k+", label: "Happy Customers" },
//   { value: "100%", label: "Safe Rides" },
//   { value: "24/7", label: "Support" },
// ];

// const features = [
//   {
//     icon: "🏃",
//     title: "Lightning Fast Booking",
//     description: "Get on the road in minutes with our streamlined 5-minute booking process"
//   },
//   {
//     icon: "🛡️",
//     title: "Premium Insurance",
//     description: "Drive worry-free with our comprehensive vehicle insurance coverage"
//   },
//   {
//     icon: "✨",
//     title: "Crystal Clear Pricing",
//     description: "What you see is what you pay - transparent pricing, always"
//   }
// ];

// const categories = [
//   {
//     name: "Luxury Cars",
//     description: "Premium vehicles for special occasions",
//     startingPrice: "2999",
//     image: "/images/luxury-car.jpg"
//   },
//   {
//     name: "SUVs",
//     description: "Perfect for family trips and adventures",
//     startingPrice: "1999",
//     image: "/images/suv.jpg"
//   },
//   {
//     name: "Sports Bikes",
//     description: "Experience the thrill of riding",
//     startingPrice: "1499",
//     image: "/images/sports-bike.jpg"
//   },
//   {
//     name: "Economy Cars",
//     description: "Reliable and fuel-efficient vehicles",
//     startingPrice: "999",
//     image: "/images/economy-car.jpg"
//   }
// ];

const steps = [
  { 
    icon: <Car className="text-amber-500 h-10 w-10" />,
    title: "Choose Your Vehicle",
    description: "Browse through our extensive collection of well-maintained vehicles. Filter by type, price, or features to find your perfect match.",
    additionalInfo: "100+ vehicles available"
  },
  {
    icon: <Calendar className="text-amber-500 h-10 w-10" />,
    title: "Book & Pay",
    description: "Select your dates, add any extras you need, and complete your booking with our secure payment system. Get instant confirmation.",
    additionalInfo: "Secure payment options"
  },
  {
    icon: <SmileIcon className="text-amber-500 h-10 w-10" />,
    title: "Enjoy Your Ride",
    description: "Pick up your vehicle at the scheduled time. Our team will guide you through everything you need to know for a great experience.",
    additionalInfo: "24/7 customer support"
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    comment: "Best rental service I've ever used. The cars are always in perfect condition and the staff is super helpful.",
    avatar: "/images/avatar1.jpg"
  },
  {
    name: "Priya Patel",
    location: "Bangalore",
    comment: "Incredibly smooth booking process and great rates. Will definitely use again!",
    avatar: "/images/avatar2.jpg"
  },
  {
    name: "Amit Kumar",
    location: "Delhi",
    comment: "The variety of vehicles and the quality of service is unmatched. Highly recommended!",
    avatar: "/images/avatar3.jpg"
  }
]; 
 