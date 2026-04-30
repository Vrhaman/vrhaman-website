"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const perks = [
  "Commission per booking",
  "Free rides & discounts",
  "Leadership certificate",
  "Startup exposure",
  "Networking access",
  "Exclusive events",
  "Internship opportunities"
];

export default function Ambassador() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF9A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Become a Vrhaman <br />
              <span className="text-[#FF9A00]">Campus Ambassador</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Lead the movement at your college. Represent India's coolest mobility startup and unlock exclusive perks while building your professional network.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF9A00]" />
                  <span className="text-gray-300 font-medium">{perk}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-[#FF9A00] text-black font-bold rounded-xl hover:bg-[#FF9A00]/90 transition-all flex items-center gap-2 group">
              Apply as Ambassador
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                alt="Students collaborating" 
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-800">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#FF9A00]">Join 50+ ambassadors</span>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-[#FF9A00]/30 p-6 rounded-2xl shadow-2xl z-20 hidden md:block">
              <p className="text-white font-bold text-lg mb-1">2026 Cohort</p>
              <p className="text-[#FF9A00] text-sm uppercase tracking-widest font-bold">Open for Admissions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
