"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black py-20 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/events-hero.png" 
          alt="Innovation Challenge" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FF9A00"
        />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#FF9A00] uppercase bg-[#FF9A00]/10 border border-[#FF9A00]/20 rounded-full">
            Limited Time Opportunity
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            VRHAMAN CAMPUS <br />
            <span className="text-[#FF9A00]">INNOVATION</span> CHALLENGE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Participate in exciting college competitions, solve real-world startup problems, create viral content, build AI solutions, and win rides, rewards, certificates, and internship opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-black bg-[#FF9A00] rounded-xl hover:bg-[#FF9A00]/90 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,154,0,0.3)]"
            onClick={() => {
              document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Event
          </button>
          <a
            href="https://wa.me/your-whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Join WhatsApp Community
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">50+</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Colleges</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">1000+</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">5+</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Challenges</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">₹1L+</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Prizes</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#FF9A00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#FF9A00]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
