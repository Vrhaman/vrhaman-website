"use client";

import Hero from "./components/Hero";
import ChallengeTracks from "./components/ChallengeTracks";
import WhyJoin from "./components/WhyJoin";
import SubmissionFlow from "./components/SubmissionFlow";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EventsPage() {
  const whatsappLink = "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA";

  return (
    <main className="min-h-screen bg-black text-white font-primary">
      {/* Hero Section */}
      <Hero />

      {/* Challenge Tracks */}
      <ChallengeTracks onParticipate={() => {}} />

      {/* Why Join / WhatsApp Community Section */}
      <WhyJoin />

      {/* Submission Flow & GitHub & Final CTA */}
      <SubmissionFlow />

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-4 bg-black border border-white/10 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Join WhatsApp Community
        </span>
      </motion.a>

      {/* Sticky Join Button for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-[80]">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#FF9A00] text-black font-bold rounded-xl shadow-2xl flex items-center justify-center"
        >
          Participate Now
        </a>
      </div>
    </main>
  );
}
