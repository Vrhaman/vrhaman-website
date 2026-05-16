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
  Code2,
  ShieldAlert,
  Terminal,
  Cpu,
  Database,
  Globe,
  Zap,
  CheckCircle2,
  AlertCircle,
  Headphones,
  CreditCard,
  Truck,
  XCircle,
  Ticket
} from "lucide-react";

interface TrackDetailProps {
  trackId: string;
  onBack: () => void;
}

const Search = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;

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
    title: "AI CUSTOMER SUPPORT CHATBOT",
    subtitle: "Post-Sales Support for Vrhaman",
    tagline: "Build an AI-powered support assistant that helps Vrhaman customers after booking vehicles.",
    description: "Vrhaman is organizing a hackathon where participants will build an intelligent post-sales customer support chatbot for the Vrhaman platform.",
    issues: [
      { icon: <Search className="w-5 h-5" />, title: "Booking Status", desc: "Real-time updates on vehicle booking status." },
      { icon: <CreditCard className="w-5 h-5" />, title: "Payments & Refunds", desc: "Support for transaction and refund queries." },
      { icon: <Truck className="w-5 h-5" />, title: "Pickup/Delivery", desc: "Help with vehicle pickup or delivery delays." },
      { icon: <XCircle className="w-5 h-5" />, title: "Cancellations", desc: "Smooth cancellation and modification help." },
      { icon: <Headphones className="w-5 h-5" />, title: "Escalations", desc: "Vendor or support escalation routing." },
      { icon: <Ticket className="w-5 h-5" />, title: "Ticket Creation", desc: "Automated support ticket generation." }
    ],
    features: [
      "AI-powered chatbot responses",
      "Booking ID & mobile number collection",
      "Support ticket generation",
      "Emergency issue escalation",
      "WhatsApp support redirect",
      "Admin dashboard for ticket management"
    ],
    tech: {
      frontend: ["React.js / Next.js", "Tailwind CSS"],
      backend: ["Node.js + Express"],
      database: ["MongoDB Atlas"],
      ai: ["OpenAI API or Gemini API"],
      deployment: ["Vercel / Render / Railway"]
    },
    rewards: {
      winner: ["Free Vrhaman ride", "Vrhaman T-shirt/goodies", "Winner certificate", "internship opportunity if selected"],
      second: ["30% ride discount", "Vrhaman goodies"],
      third: ["20% ride discount", "Vrhaman goodies"],
      all: ["10% ride discount"]
    }
  }
};


export default function TrackDetail({ trackId, onBack }: TrackDetailProps) {
  const isHackathon = trackId === "hackathon";
  const data = isHackathon ? DATA.hackathon : DATA.content;
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
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter leading-none">
                {data.title}
              </h2>
              {isHackathon ? (
                <p className="text-[#FF9A00] font-black text-xl tracking-widest uppercase mb-4">
                  {DATA.hackathon.subtitle}
                </p>
              ) : (
                <p className="text-[#FF9A00] font-black text-xl tracking-widest uppercase mb-4">
                  Theme: {DATA.content.theme}
                </p>
              )}
              {isHackathon && (
                <p className="text-gray-400 text-lg font-medium max-w-2xl">
                  {DATA.hackathon.tagline}
                </p>
              )}
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#FF9A00] text-black font-black rounded-xl hover:scale-105 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,154,0,0.3)]"
            >
              <MessageCircle className="w-6 h-6" />
              Join WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-12">
              {/* Mission/Description */}
              <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-6 text-[#FF9A00]">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-black uppercase tracking-tight">The Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                  {isHackathon ? DATA.hackathon.description : DATA.content.mission}
                </p>
              </div>

              {isHackathon ? (
                <>
                  {/* Issues Solving Section */}
                  <div>
                    <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tight flex items-center gap-3">
                      <Zap className="text-[#FF9A00] w-6 h-6" /> Solving Real Problems
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {DATA.hackathon.issues.map((issue, i) => (
                        <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-[#FF9A00]/30 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-[#FF9A00] group-hover:scale-110 transition-transform">
                            {issue.icon}
                          </div>
                          <h4 className="text-white font-bold mb-2 uppercase tracking-tight">{issue.title}</h4>
                          <p className="text-gray-500 text-sm">{issue.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Features */}
                  <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem]">
                    <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                      <Sparkles className="text-[#FF9A00] w-6 h-6" /> Recommended Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {DATA.hackathon.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-400 font-bold text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#FF9A00] flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Escalation Section (Highlighted) */}
                  <div className="p-8 bg-[#FF9A00]/5 border border-[#FF9A00]/20 rounded-[2rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                      <ShieldAlert className="w-24 h-24 text-[#FF9A00]" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 text-[#FF9A00]">
                        <AlertCircle className="w-6 h-6" />
                        <h3 className="text-xl font-black uppercase tracking-tight">Emergency Escalation</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-medium max-w-xl">
                        A critical feature of the chatbot should be the ability to identify <span className="text-[#FF9A00] font-bold">breakdown or emergency situations</span> and immediately route the customer to priority human support or emergency services.
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem]">
                    <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tight flex items-center gap-3">
                      <Terminal className="text-[#FF9A00] w-6 h-6" /> Recommended Tech Stack
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <Globe className="w-3 h-3" /> Frontend
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {DATA.hackathon.tech.frontend.map(t => <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white">{t}</span>)}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <Cpu className="w-3 h-3" /> Backend & AI
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {DATA.hackathon.tech.backend.concat(DATA.hackathon.tech.ai).map(t => <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white">{t}</span>)}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <Database className="w-3 h-3" /> Database & Cloud
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {DATA.hackathon.tech.database.concat(DATA.hackathon.tech.deployment).map(t => <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Note */}
                  <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <p className="text-blue-300/80 text-sm font-bold">
                      <span className="text-white">Important:</span> The solution should be built as a separate web chatbot platform and should not directly modify the existing Vrhaman Flutter customer application.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Creator Battle Content (Restored for the other track) */}
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                    <div className="flex items-center gap-3 mb-4 text-[#FF9A00]">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-xl font-bold uppercase tracking-tight">The Goal</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{DATA.content.goal}</p>
                  </div>

                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                    <div className="flex items-center gap-3 mb-4 text-[#FF9A00]">
                      <ListChecks className="w-6 h-6" />
                      <h3 className="text-xl font-bold uppercase tracking-tight">Allowed Content</h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {DATA.content.allowed.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400 font-medium">
                          <div className="w-1.5 h-1.5 bg-[#FF9A00] rounded-full" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Rewards & CTA Sidebar */}
            <div className="space-y-6">
              {/* CTA Section */}
              <div className="p-8 bg-gradient-to-br from-[#FF9A00] to-[#FF7A00] rounded-3xl text-black relative overflow-hidden group shadow-[0_0_40px_rgba(255,154,0,0.2)]">
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Rocket className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 relative z-10 leading-tight">
                  Build the future of AI-powered customer support for mobility platforms.
                </h3>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-black text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm relative z-10 hover:bg-black/90"
                >
                  Join Challenge
                </a>
              </div>

              {/* Rewards */}
              <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl">
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
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">Second & Third</p>
                    <p className="text-gray-400 text-sm font-bold">Up to 30% discounts + goodies</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Updates</h3>
                <p className="text-gray-500 text-sm mb-6 font-medium">Get live rules, mentors, and submission links in the group.</p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-white/10 hover:bg-white/5 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                  WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

