"use client";

import { motion } from "framer-motion";
import { Video, Code2, Users, Trophy, Rocket, Instagram, Smartphone, Sparkles, Target, Award } from "lucide-react";
import { EventChallenge } from "@/lib/types";

const DEFAULT_CHALLENGES: EventChallenge[] = [
  {
    id: "content",
    title: "THE AI CREATOR BATTLE",
    tagline: "Create content that makes people want to ride.",
    description: "Create engagements AI-powered visual storytelling content that emotionally connects with students and captures the excitement of student life, adventure, and travel culture.",
    rewards: {
      winner: ["FREE Ride from Vrhaman", "Vrhaman T-Shirt", "Winner Certificate", "Internship Opportunity"],
      top2: ["30% OFF Ride Coupon", "Vrhaman Goodies"],
      top3: ["20% OFF Ride Coupon", "Vrhaman Goodies"],
      all: ["10% OFF Ride Coupon"]
    },
    mission: "Participants must create AI-enhanced creative content for Vrhaman that captures the excitement of student life, freedom, adventure, and travel culture.",
    theme: "COLLEGE ESCAPE WEEKEND (Friends planning sudden trips, late-night rides, post-exam freedom)",
  },
  {
    id: "hackathon",
    title: "BUILD THE FUTURE OF MOBILITY",
    tagline: "Solve startup problems with smart ideas.",
    description: "Build a smart student discount system for Vrhaman. Create a scalable system that improves student engagement and encourages repeat bookings.",
    rewards: {
      winner: ["FREE Ride from Vrhaman", "Vrhaman T-Shirt", "Winner Certificate", "Internship Opportunity"],
      top2: ["30% OFF Ride Coupon", "Vrhaman Goodies"],
      top3: ["20% OFF Ride Coupon", "Vrhaman Goodies"],
      all: ["10% OFF Ride Coupon"]
    },
    problemStatement: "STUDENT DISCOUNT ENGINE: Build a smart student discount system based on referrals, booking frequency, verification, and loyalty.",
  }
];

export default function ChallengeTracks({ challenges }: { challenges?: EventChallenge[] }) {
  const tracks = challenges || DEFAULT_CHALLENGES;

  return (
    <section id="challenges" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">Choose Your <span className="text-[#FF9A00]">Track</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            Whether you're a storyteller or a builder, there's a place for you to shine and win big.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${idx === 0 ? 'from-orange-500/10 to-transparent' : 'from-blue-500/10 to-transparent'} border border-white/10 overflow-hidden group hover:border-[#FF9A00]/50 transition-all`}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#FF9A00]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Video className="w-8 h-8 text-[#FF9A00]" /> : <Code2 className="w-8 h-8 text-[#FF9A00]" />}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight uppercase tracking-tight">
                  {track.title}
                </h3>
                <p className="text-[#FF9A00] font-bold text-sm mb-4 tracking-wide uppercase">{track.tagline}</p>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {track.description}
                </p>

                {track.id === 'content' || idx === 0 ? (
                  <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-black">Mission & Theme</p>
                    <p className="text-sm text-gray-300 leading-relaxed italic">"{track.theme || track.mission}"</p>
                  </div>
                ) : (
                  <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-black">Problem Statement</p>
                    <p className="text-sm text-gray-300 leading-relaxed font-semibold">{track.problemStatement}</p>
                  </div>
                )}

                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                    <Trophy className="w-4 h-4 text-[#FF9A00]" /> Winner Rewards
                  </h4>
                  <ul className="space-y-3">
                    {track.rewards.winner.map((r, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-3 font-medium">
                        <Sparkles className="w-4 h-4 text-[#FF9A00]" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-white/5 hover:bg-[#FF9A00] text-white hover:text-black font-black rounded-2xl transition-all flex items-center justify-center gap-2 group/btn uppercase tracking-widest"
                >
                  Participate Now
                  <Rocket className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

