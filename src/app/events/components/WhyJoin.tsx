"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, Gift, Users, Star, Megaphone } from "lucide-react";

const benefits = [
  {
    title: "Registration Updates",
    desc: "Get instant alerts about your registration status and next steps.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Submission Links",
    desc: "Direct access to official portals for uploading your projects.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Challenge Announcements",
    desc: "Be the first to know about new challenges and tasks.",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    title: "Deadlines",
    desc: "Stay on track with reminders for submission windows.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Winner Announcements",
    desc: "Celebrations and results will be shared live in the group.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Support & Help",
    desc: "Direct line to the Vrhaman team for any queries.",
    icon: <Gift className="w-6 h-6" />
  }
];

export default function WhyJoin() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Official Community</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Join our WhatsApp community to stay updated and receive all official instructions.</p>
          <div className="h-1.5 w-24 bg-[#FF9A00] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-[#FF9A00]/30 transition-all group text-left"
            >
              <div className="w-12 h-12 bg-[#FF9A00]/10 rounded-xl flex items-center justify-center text-[#FF9A00] mb-6 group-hover:scale-110 group-hover:bg-[#FF9A00] group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <a 
          href="https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF9A00] text-black font-bold rounded-xl hover:bg-[#FF9A00]/90 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,154,0,0.2)]"
        >
          Join Official WhatsApp Community
        </a>
      </div>
    </section>
  );
}
