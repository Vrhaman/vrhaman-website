"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, School, Github, ExternalLink, Send, Rocket } from "lucide-react";

export default function SubmissionFlow() {
  const whatsappLink = "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA";

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem]"
          >
            <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Register to Participate</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">Fill in your details to start your journey with the Vrhaman Innovation Challenge.</p>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <School className="w-4 h-4" /> College Name
                </label>
                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="Your College/University" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Address
                  </label>
                  <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="name@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone Number
                  </label>
                  <input required type="tel" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-[#FF9A00] text-black font-bold rounded-xl hover:bg-[#FF9A00]/90 transition-all flex items-center justify-center gap-2 mt-8 text-lg shadow-[0_0_20px_rgba(255,154,0,0.2)]"
              >
                Join Event & Register
                <Send className="w-5 h-5" />
              </a>
            </form>
          </motion.div>

          {/* Submission Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#FF9A00]/10 to-transparent border border-[#FF9A00]/20 rounded-[2.5rem]">
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Project Submission</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Participants can submit their GitHub project repositories and demo links after completing their challenge submissions.
              </p>

              <div className="space-y-4">
                <button className="w-full py-5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
                  <Github className="w-5 h-5" />
                  Submit GitHub Repository
                </button>
                <button className="w-full py-5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
                  <ExternalLink className="w-5 h-5" />
                  Submit Project Demo
                </button>
                <p className="text-xs text-gray-500 text-center italic">Links will be active during the submission window.</p>
              </div>
            </div>

            {/* Final CTA Card */}
            <div className="p-8 md:p-12 bg-white text-black rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Rocket className="w-24 h-24" />
              </div>
              <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase leading-none">Ready to Build, <br />Create & Win?</h2>
              <p className="text-gray-600 mb-8 font-medium">Join 500+ students already participating in India's coolest mobility challenge.</p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FF9A00] text-black font-black rounded-xl hover:bg-black hover:text-[#FF9A00] transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-xl"
                >
                  Join the Challenge
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-black text-white font-black rounded-xl hover:bg-[#FF9A00] hover:text-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
