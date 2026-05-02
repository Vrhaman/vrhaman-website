"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  School, 
  MessageCircle, 
  FileCheck, 
  Search, 
  Download, 
  Plus, 
  Filter,
  CheckCircle,
  Clock,
  MoreVertical,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  LayoutDashboard,
  Calendar,
  Settings,
  Eye,
  EyeOff
} from "lucide-react";
import { MOCK_EVENTS } from "@/lib/events";
import AdminEventForm from "./components/AdminEventForm";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [showForm, setShowForm] = useState(false);
  
  // New Toggles State (Defaults as per requirements)
  const [config, setConfig] = useState({
    showHeroStats: false,
    showCollegeDirectory: false,
    showTopColleges: false,
    showWhatsAppHero: false,
    showAmbassadorSection: true
  });

  const toggleConfig = (key: keyof typeof config) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2 uppercase tracking-tight flex items-center gap-3">
              <LayoutDashboard className="text-[#FF9A00]" />
              Event Control Center
            </h1>
            <p className="text-gray-500">Manage tracks, rewards, and platform visibility toggles.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#FF9A00] text-black rounded-xl hover:bg-[#FF9A00]/90 transition-all text-sm font-black uppercase tracking-widest shadow-xl shadow-[#FF9A00]/10"
            >
              <Plus className="w-4 h-4" /> Create Track
            </button>
          </div>
        </div>

        {/* Visibility Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {Object.entries(config).map(([key, value]) => (
            <button
              key={key}
              onClick={() => toggleConfig(key as keyof typeof config)}
              className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                value 
                  ? 'bg-[#FF9A00]/10 border-[#FF9A00]/50 text-[#FF9A00]' 
                  : 'bg-white/5 border-white/10 text-gray-500'
              }`}
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-black uppercase tracking-widest mb-1">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className="text-xs font-bold">{value ? 'Visible' : 'Hidden'}</span>
              </div>
              {value ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-8 bg-black border border-white/10 rounded-3xl relative overflow-hidden group hover:border-[#FF9A00]/30 transition-all">
            <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Total Registrations</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black">4,512</span>
              <span className="text-xs font-bold text-green-500 mb-2">+12%</span>
            </div>
          </div>
          <div className="p-8 bg-black border border-white/10 rounded-3xl relative overflow-hidden group hover:border-[#FF9A00]/30 transition-all">
            <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Active Challenges</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black">2</span>
              <span className="text-xs font-bold text-gray-600 mb-2">Live</span>
            </div>
          </div>
          <div className="p-8 bg-black border border-white/10 rounded-3xl relative overflow-hidden group hover:border-[#FF9A00]/30 transition-all">
            <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Submissions</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black">1,284</span>
              <span className="text-xs font-bold text-[#FF9A00] mb-2">New</span>
            </div>
          </div>
          <div className="p-8 bg-black border border-white/10 rounded-3xl relative overflow-hidden group hover:border-[#FF9A00]/30 transition-all">
            <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Ambassadors</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black">52</span>
              <span className="text-xs font-bold text-green-500 mb-2">+4</span>
            </div>
          </div>
        </div>

        {/* Challenges Table */}
        <div className="bg-black border border-white/10 rounded-3xl overflow-hidden mb-8 shadow-2xl">
          <div className="p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-xl font-bold uppercase tracking-tight">Active Tracks</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="Search tracks..." 
                  className="bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-[#FF9A00] w-full md:w-72"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Track Title</th>
                  <th className="px-8 py-5">Registrations</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { title: "THE AI CREATOR BATTLE", reg: 2840, status: "Active" },
                  { title: "BUILD THE FUTURE OF MOBILITY", reg: 1672, status: "Active" }
                ].map((track, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6 font-black text-white uppercase tracking-tight">
                      {track.title}
                    </td>
                    <td className="px-8 py-6 font-bold text-lg">
                      {track.reg.toLocaleString()}
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-lg text-[10px] font-black uppercase tracking-widest">
                        {track.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-[#FF9A00] transition-colors">
                        <Settings className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showForm && <AdminEventForm onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </div>
  );
}
