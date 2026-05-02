"use client";

import { motion } from "framer-motion";
import { Video, Code2, Rocket, ArrowRight } from "lucide-react";
import { EventChallenge } from "@/lib/types";

const TRACKS: EventChallenge[] = [
  {
    id: "content",
    title: "THE AI CREATOR BATTLE",
    tagline: "Create content that makes people want to ride.",
    description: "Create AI-powered content that makes students want to ride with Vrhaman.",
    rewards: {
      winner: ["Free Vrhaman ride", "Vrhaman T-shirt/goodies", "Winner certificate", "Internship opportunity if selected"],
      top2: ["30% ride discount", "Vrhaman goodies"],
      top3: ["20% ride discount", "Vrhaman goodies"],
      all: ["10% ride discount"]
    },
    mission: "Participants must create AI-enhanced creative content for Vrhaman that captures student life, freedom, weekend travel, and college adventure.",
    theme: "COLLEGE ESCAPE WEEKEND",
  },
  {
    id: "hackathon",
    title: "BUILD THE FUTURE OF MOBILITY",
    tagline: "Solve startup problems with smart ideas.",
    description: "Build a smart mobility solution that can help Vrhaman improve customer experience.",
    rewards: {
      winner: ["Free Vrhaman ride", "Vrhaman T-Shirt/goodies", "Winner certificate", "Internship opportunity if selected"],
      top2: ["30% ride discount", "Vrhaman goodies"],
      top3: ["20% ride discount", "Vrhaman goodies"],
      all: ["10% ride discount"]
    },
    problemStatement: "AI Customer Support Chatbot — Post-Sales Support: Build a chatbot that helps Vrhaman customers after booking.",
  }
];

export default function ChallengeTracks({ onSelect }: { onSelect: (trackId: string) => void }) {
  return (
    <section id="challenges" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">Choose Your <span className="text-[#FF9A00]">Track</span></h2>
          <div className="h-1.5 w-24 bg-[#FF9A00] mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg">
            Select a track to view specific challenge details and start your innovation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {TRACKS.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden group hover:border-[#FF9A00]/50 transition-all flex flex-col"
            >
              <div className="mb-8 p-5 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-[#FF9A00] group-hover:text-black transition-all text-[#FF9A00]">
                {idx === 0 ? <Video className="w-10 h-10" /> : <Code2 className="w-10 h-10" />}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                {track.title}
              </h3>
              
              <p className="text-gray-400 mb-10 leading-relaxed text-lg font-medium">
                {track.description}
              </p>

              <button
                onClick={() => onSelect(track.id)}
                className="mt-auto w-full py-5 bg-white/10 hover:bg-[#FF9A00] text-white hover:text-black font-black rounded-2xl transition-all flex items-center justify-center gap-3 group/btn uppercase tracking-widest"
              >
                View Challenge
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

