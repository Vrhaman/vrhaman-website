"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { CollegeEvent } from "@/lib/types";

export default function Hero({ event }: { event?: CollegeEvent }) {
  const title = event?.title || "VRHAMAN CAMPUS INNOVATION CHALLENGE";
  const college = event?.collegeName || "India's Coolest Student Community";
  const desc = event?.description || "Join the ultimate student innovation challenge by Vrhaman. Create AI-powered content, solve startup problems, compete with students, and win exciting rewards.";
  const banner = event?.banner || "/events-hero.png";

  const scrollToTracks = () => {
    const element = document.getElementById("challenges");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-black py-20 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={banner} 
          alt={college} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <SparklesCore
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
            {college}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight uppercase">
            {title.split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-[#FF9A00]">{title.split(' ').slice(-1)}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            {desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToTracks}
            className="w-full sm:w-auto px-12 py-5 text-lg font-black text-black bg-[#FF9A00] rounded-xl hover:bg-[#FF9A00]/90 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,154,0,0.3)] flex items-center justify-center gap-2 uppercase tracking-widest"
          >
            Join Event
          </button>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#FF9A00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#FF9A00]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

