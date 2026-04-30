"use client";

import { motion } from "framer-motion";
import { Video, Code2, Users, Trophy, Rocket, Instagram, Smartphone, Sparkles, Target, Award } from "lucide-react";

const tracks = [
  {
    id: "content",
    title: "Vrhaman Viral Content Challenge",
    subtitle: "TRACK 1 — CONTENT CREATOR CHALLENGE",
    description: "Create the best Instagram reel/post/story/meme/content promoting Vrhaman. Showcase your creativity and help us build the future of mobility branding.",
    icon: <Video className="w-8 h-8 text-[#FF9A00]" />,
    formats: ["Reels", "Memes", "Edits", "Cinematic Videos", "Campus Content", "Storytelling Posts"],
    criteria: ["Creativity", "Engagement", "Originality", "Storytelling", "Brand Alignment"],
    rewards: {
      winner: ["Free 1-day ride", "Featured on Vrhaman Instagram", "Certificate", "Ambassador fast-track"],
      top10: ["50% OFF rides", "Social media feature"],
      all: ["10% OFF coupon"]
    },
    color: "from-orange-500/20 to-orange-600/5"
  },
  {
    id: "hackathon",
    title: "Vrhaman AI Innovation Hackathon",
    subtitle: "TRACK 2 — AI & INNOVATION HACKATHON",
    description: "Solve real-world mobility and startup problems using AI, automation, design thinking, and coding. Build the next generation of transport tech.",
    icon: <Code2 className="w-8 h-8 text-[#FF9A00]" />,
    teamSize: "2–4 members",
    formats: ["AI tools", "No-code tools", "Full-stack apps", "Prototypes", "Figma ideas"],
    criteria: ["Innovation", "Usability", "Execution", "Real-world impact", "Presentation"],
    rewards: {
      winner: ["Free ride", "Internship opportunity", "Certificate", "Social media spotlight"],
      runnerUp: ["50% OFF rides"],
      all: ["Participation certificate", "10% OFF ride coupon"]
    },
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
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {track.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#FF9A00]" /> Format
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
                    <Trophy className="w-5 h-5 text-[#FF9A00]" /> Top Rewards
                  </h4>
                  <ul className="space-y-3">
                    {track.rewards.winner.slice(0, 2).map((r, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-[#FF9A00]" /> {r}
                      </li>
                    ))}
                    <li className="text-[#FF9A00] text-sm font-semibold">+ more rewards for participants</li>
                  </ul>
                </div>

                <button
                  onClick={() => onParticipate(track.id)}
                  className="w-full py-4 bg-white/10 hover:bg-[#FF9A00] text-white hover:text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Participate Now
                  <Rocket className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
