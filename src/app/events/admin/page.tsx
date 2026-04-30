"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  ChevronRight
} from "lucide-react";

// Mock Data
const stats = [
  { label: "Total Registrations", value: "1,284", change: "+12%", icon: <Users className="w-6 h-6" /> },
  { label: "Total Colleges", value: "52", change: "+4", icon: <School className="w-6 h-6" /> },
  { label: "WhatsApp Joins", value: "956", change: "+18%", icon: <MessageCircle className="w-6 h-6" /> },
  { label: "Total Submissions", value: "412", change: "+24", icon: <FileCheck className="w-6 h-6" /> },
];

const participants = [
  { id: 1, name: "Aarav Sharma", college: "IIT Delhi", track: "AI Hackathon", status: "Approved", date: "2026-04-28" },
  { id: 2, name: "Ananya Iyer", college: "SRM University", track: "Content Challenge", status: "Pending", date: "2026-04-27" },
  { id: 3, name: "Rohan Gupta", college: "BITS Pilani", track: "AI Hackathon", status: "Under Review", date: "2026-04-27" },
  { id: 4, name: "Ishita Verma", college: "VIT Vellore", track: "Content Challenge", status: "Approved", date: "2026-04-26" },
  { id: 5, name: "Kabir Singh", college: "Delhi University", track: "Content Challenge", status: "Pending", date: "2026-04-26" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Event Dashboard</h1>
            <p className="text-gray-500">Manage participants and monitor innovation challenge stats.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-sm font-semibold">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#FF9A00] text-black rounded-lg hover:bg-[#FF9A00]/90 transition-all text-sm font-bold">
              <Plus className="w-4 h-4" /> Add Event
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-black border border-white/10 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.icon}
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">{stat.label}</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-xs font-bold text-green-500 mb-1">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden mb-8">
          <div className="p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {["All", "AI Hackathon", "Content Challenge", "Winners"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`text-sm font-bold pb-2 transition-all whitespace-nowrap ${
                    activeTab === tab.toLowerCase() 
                      ? "text-[#FF9A00] border-b-2 border-[#FF9A00]" 
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search participants..." 
                  className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#FF9A00] w-full md:w-64"
                />
              </div>
              <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10">
                <Filter className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <th className="px-6 py-4">Participant</th>
                  <th className="px-6 py-4">College</th>
                  <th className="px-6 py-4">Track</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {participants.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{p.name}</p>
                          <p className="text-xs text-gray-500">Joined {p.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">{p.college}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        p.track === 'AI Hackathon' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'
                      }`}>
                        {p.track}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {p.status === 'Approved' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-yellow-500" />
                        )}
                        <span className="text-sm font-medium">{p.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-white/10 flex items-center justify-between text-sm text-gray-500">
            <p>Showing 5 of 1,284 participants</p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
