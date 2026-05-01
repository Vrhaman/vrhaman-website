"use client";

import Hero from "./components/Hero";
import CollegeCard from "./components/CollegeCard";
import WhyJoin from "./components/WhyJoin";
import { MOCK_EVENTS } from "@/lib/events";
import { Trophy, Users, Star, School } from "lucide-react";
import { motion } from "framer-motion";

const leaderboard = [
  { college: "Chandigarh University", participants: 1284, rank: 1 },
  { college: "Chitkara University", participants: 956, rank: 2 },
  { college: "CGC Landran", participants: 742, rank: 3 },
  { college: "Panjab University", participants: 512, rank: 4 },
];

export default function EventsPage() {
  const whatsappLink = "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA";

  return (
    <main className="min-h-screen bg-black text-white font-primary">
      {/* Hero Section */}
      <Hero />

      {/* College Directory Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
                College Event <span className="text-[#FF9A00]">Directory</span>
              </h2>
              <p className="text-gray-500 max-w-xl">Find your college, join the community, and start your innovation journey.</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
              <button className="px-6 py-2 bg-[#FF9A00] text-black font-bold rounded-xl text-sm">Active</button>
              <button className="px-6 py-2 text-gray-500 font-bold rounded-xl text-sm hover:text-white transition-colors">Past Events</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_EVENTS.map(event => (
              <CollegeCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9A00]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <Trophy className="w-16 h-16 text-[#FF9A00] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Top Participating Colleges</h2>
            <p className="text-gray-500 italic">Competition is heating up. Where does your college stand?</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                    <th className="px-8 py-6">Rank</th>
                    <th className="px-8 py-6">College</th>
                    <th className="px-8 py-6 text-right">Active Participants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leaderboard.map((item) => (
                    <tr key={item.rank} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                          item.rank === 1 ? 'bg-[#FF9A00] text-black' : 'bg-white/10 text-white'
                        }`}>
                          {item.rank}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <School className="w-5 h-5 text-gray-500" />
                          <span className="font-bold text-white text-lg">{item.college}</span>
                          {item.rank === 1 && <Star className="w-4 h-4 text-[#FF9A00] fill-[#FF9A00]" />}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2 text-[#FF9A00] font-black text-xl">
                          <Users className="w-5 h-5" />
                          {item.participants.toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <WhyJoin />
    </main>
  );
}
