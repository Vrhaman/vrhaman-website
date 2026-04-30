"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, Gift, Users, Star, Megaphone } from "lucide-react";

const reasons = [
  {
    title: "Build your resume",
    desc: "Get hands-on experience solving real-world startup problems.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Internship opportunities",
    desc: "Top performers get a chance to join the Vrhaman core team.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Win free rides",
    desc: "Experience our premium mobility services for free.",
    icon: <Gift className="w-6 h-6" />
  },
  {
    title: "Network with startups",
    desc: "Connect with industry leaders and innovative founders.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Become campus ambassador",
    desc: "Lead your campus and represent the Vrhaman brand.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Get featured on social media",
    desc: "Showcase your talent to our thousands of followers.",
    icon: <Megaphone className="w-6 h-6" />
  }
];

export default function WhyJoin() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Why Join?</h2>
          <div className="h-1.5 w-24 bg-[#FF9A00] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-[#FF9A00]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#FF9A00]/10 rounded-xl flex items-center justify-center text-[#FF9A00] mb-6 group-hover:scale-110 group-hover:bg-[#FF9A00] group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
