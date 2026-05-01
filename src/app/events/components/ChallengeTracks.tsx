"use client";

import { motion } from "framer-motion";
import { Video, Code2, Users, Trophy, Rocket, Instagram, Smartphone, Sparkles, Target, Award } from "lucide-react";

const tracks = [
  {
    id: "content",
    title: "THE AI CREATOR BATTLE",
    subtitle: "CHALLENGE 01 — CREATE. ENGAGE. VIRAL.",
    tagline: "Create content that makes people want to ride.",
    description: "Create engagements AI-powered visual storytelling content that emotionally connects with students and captures the excitement of student life, adventure, and travel culture.",
    icon: <Video className="w-8 h-8 text-[#FF9A00]" />,
    formats: ["AI-generated reels", "Cinematic edits", "AI-generated videos", "AI posters", "Storytelling edits", "Short-form creative videos"],
    criteria: ["Creativity", "Engagement", "Storytelling", "AI Integration", "Brand Alignment"],
    rewards: {
      winner: ["FREE Ride from Vrhaman", "Vrhaman T-Shirt", "Winner Certificate", "Internship Opportunity"],
      top2: ["30% OFF Ride Coupon", "Vrhaman Goodies"],
      top3: ["20% OFF Ride Coupon", "Vrhaman Goodies"],
      all: ["10% OFF Ride Coupon"]
    },
    mission: "Participants must create AI-enhanced creative content for Vrhaman that captures the excitement of student life, freedom, adventure, and travel culture.",
    theme: "COLLEGE ESCAPE WEEKEND (Friends planning sudden trips, late-night rides, post-exam freedom)",
    color: "from-orange-500/20 to-orange-600/5"
  },
  {
    id: "hackathon",
    title: "BUILD THE FUTURE OF MOBILITY",
    subtitle: "CHALLENGE 02 — INNOVATE. SOLVE. SCALE.",
    tagline: "Solve startup problems with smart ideas.",
    description: "Build a smart student discount system for Vrhaman. Create a scalable system that improves student engagement and encourages repeat bookings.",
    icon: <Code2 className="w-8 h-8 text-[#FF9A00]" />,
    teamSize: "Individual or Team",
    formats: ["GitHub Repository", "Project Explanation", "Optional Demo Video"],
    criteria: ["Innovation", "Scalability", "Usability", "Real-world Impact", "Execution"],
    rewards: {
      winner: ["FREE Ride from Vrhaman", "Vrhaman T-Shirt", "Winner Certificate", "Internship Opportunity"],
      top2: ["30% OFF Ride Coupon", "Vrhaman Goodies"],
      top3: ["20% OFF Ride Coupon", "Vrhaman Goodies"],
      all: ["10% OFF Ride Coupon"]
    },
    problemStatement: "STUDENT DISCOUNT ENGINE: Build a smart student discount system based on referrals, booking frequency, verification, and loyalty.",
    color: "from-blue-500/10 to-blue-600/5"
  }
];

export default function ChallengeTracks({ onParticipate }: { onParticipate: (track: string) => void }) {
  return (
    <section id="challenges" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Track</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${track.color} border border-white/10 overflow-hidden group`}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#FF9A00]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {track.icon}
                </div>
                
                <span className="text-xs font-bold text-[#FF9A00] tracking-widest uppercase mb-2 block">
                  {track.subtitle}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                  {track.title}
                </h3>
                <p className="text-[#FF9A00] font-bold text-sm mb-4 tracking-wide uppercase">{track.tagline}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {track.description}
                </p>

                {track.id === 'content' ? (
                  <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Mission & Theme</p>
                    <p className="text-sm text-gray-300 leading-relaxed italic">"{track.theme}"</p>
                  </div>
                ) : (
                  <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Problem Statement</p>
                    <p className="text-sm text-gray-300 leading-relaxed font-semibold">{track.problemStatement}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#FF9A00]" /> Submission
                    </h4>
                    <ul className="space-y-2">
                      {track.formats.map(f => (
                        <li key={f} className="text-gray-500 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#FF9A00] rounded-full" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#FF9A00]" /> Criteria
                    </h4>
                    <ul className="space-y-2">
                      {track.criteria.map(c => (
                        <li key={c} className="text-gray-500 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#FF9A00] rounded-full" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#FF9A00]" /> Winner Rewards
                  </h4>
                  <ul className="space-y-3">
                    {track.rewards.winner.map((r, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-[#FF9A00]" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white/10 hover:bg-[#FF9A00] text-white hover:text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
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
