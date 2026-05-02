"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Trophy, 
  Target, 
  Lightbulb, 
  ListChecks, 
  MessageCircle, 
  Rocket, 
  Sparkles,
  Github,
  Video,
  ExternalLink,
  Code2
} from "lucide-react";

interface TrackDetailProps {
  trackId: string;
  onBack: () => void;
}

const DATA = {
  content: {
    title: "THE AI CREATOR BATTLE",
    theme: "COLLEGE ESCAPE WEEKEND",
    mission: "Participants must create AI-enhanced creative content for Vrhaman that captures student life, freedom, weekend travel, and college adventure.",
    goal: "Capture the excitement of post-exam freedom and sudden trips through AI storytelling.",
    allowed: [
      "AI-generated reel",
      "AI-generated poster",
      "AI-generated video",
      "Instagram post",
      "short creative ad",
      "storytelling content"
    ],
    rewards: {
      winner: ["Free Vrhaman ride", "Vrhaman T-shirt/goodies", "Winner certificate", "internship opportunity if selected"],
      second: ["30% ride discount", "Vrhaman goodies"],
      third: ["20% ride discount", "Vrhaman goodies"],
      all: ["10% ride discount"]
    }
  },
  hackathon: {
    title: "BUILD THE FUTURE OF MOBILITY",
    challenge: "AI Customer Support Chatbot — Post-Sales Support",
    problem: "Build a chatbot that helps Vrhaman customers after booking. The bot should help with booking help, refund questions, vehicle pickup/delivery support, suggestions, trip guidance, and emergency support routing.",
    tech: ["React/Next.js frontend", "Node.js/Express backend", "MongoDB", "OpenAI/Gemini API", "WhatsApp support redirect"],
    rewards: {
      winner: ["Free Vrhaman ride", "Vrhaman T-shirt/goodies", "Winner certificate", "internship opportunity if selected"],
      second: ["30% ride discount", "Vrhaman goodies"],
      third: ["20% ride discount", "Vrhaman goodies"],
      all: ["10% ride discount"]
    }
  }
};

export default function TrackDetail({ trackId, onBack }: TrackDetailProps) {
  const data = trackId === "content" ? DATA.content : DATA.hackathon;
  const whatsappLink = "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA";

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#FF9A00] transition-colors mb-12 font-bold uppercase tracking-widest group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to tracks
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
                {data.title}
              </h2>
              {'theme' in data && (
                <p className="text-[#FF9A00] font-black text-xl tracking-widest uppercase mb-4">
                  Theme: {data.theme}
                </p>
              )}
              {'challenge' in data && (
                <p className="text-[#FF9A00] font-black text-xl tracking-widest uppercase mb-4">
                  {data.challenge}
                </p>
              )}
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-black rounded-xl hover:scale-105 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-6 h-6" />
              Join WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              {/* Mission/Problem */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-3 mb-4 text-[#FF9A00]">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">The Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {'mission' in data ? data.mission : data.problem}
                </p>
              </div>

              {/* Goal/Tech Stack */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-3 mb-4 text-[#FF9A00]">
                  {trackId === 'content' ? <Lightbulb className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    {trackId === 'content' ? 'Goal' : 'Suggested Tech Stack'}
                  </h3>
                </div>
                {trackId === 'content' ? (
                  <p className="text-gray-300 text-lg leading-relaxed">{'goal' in data && data.goal}</p>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {'tech' in data && data.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 text-white rounded-lg font-bold text-sm border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Rules/Allowed Content */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-3 mb-4 text-[#FF9A00]">
                  <ListChecks className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    {trackId === 'content' ? 'Allowed Content' : 'Rules & Guidelines'}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trackId === 'content' ? (
                    'allowed' in data && data.allowed.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#FF9A00] rounded-full" /> {item}
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-center gap-3 text-gray-400 font-medium"><div className="w-1.5 h-1.5 bg-[#FF9A00] rounded-full" /> Standalone web chatbot</li>
                      <li className="flex items-center gap-3 text-gray-400 font-medium"><div className="w-1.5 h-1.5 bg-[#FF9A00] rounded-full" /> WebView integration ready</li>
                      <li className="flex items-center gap-3 text-gray-400 font-medium"><div className="w-1.5 h-1.5 bg-[#FF9A00] rounded-full" /> Minimum code changes</li>
                      <li className="flex items-center gap-3 text-gray-400 font-medium"><div className="w-1.5 h-1.5 bg-[#FF9A00] rounded-full" /> Support emergency routing</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Rewards Sidebar */}
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-[#FF9A00]/20 to-transparent border border-[#FF9A00]/20 rounded-3xl">
                <div className="flex items-center gap-3 mb-6 text-[#FF9A00]">
                  <Trophy className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">Rewards</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black text-[#FF9A00] uppercase tracking-[0.2em] mb-2">Winner</p>
                    <ul className="space-y-2">
                      {data.rewards.winner.map((r, i) => (
                        <li key={i} className="flex items-center gap-2 text-white text-sm font-bold">
                          <Sparkles className="w-4 h-4 text-[#FF9A00]" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">Second Place</p>
                    <ul className="space-y-1">
                      {data.rewards.second.map((r, i) => (
                        <li key={i} className="text-gray-400 text-sm font-bold flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-600 rounded-full" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">Third Place</p>
                    <ul className="space-y-1">
                      {data.rewards.third.map((r, i) => (
                        <li key={i} className="text-gray-400 text-sm font-bold flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-600 rounded-full" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submission Area */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Submission</h3>
                <p className="text-gray-500 text-sm mb-6 font-medium">Join the WhatsApp group for submission links and instructions.</p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white/10 hover:bg-[#FF9A00] text-white hover:text-black font-black rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                  Join Group for Updates
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
