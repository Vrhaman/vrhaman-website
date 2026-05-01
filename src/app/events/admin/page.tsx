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
  Calendar
} from "lucide-react";
import { MOCK_EVENTS } from "@/lib/events";
import AdminEventForm from "./components/AdminEventForm";

// Dashboard Cards
const stats = [
  { label: "Total Events", value: "12", change: "+2", icon: <Calendar className="w-6 h-6" /> },
  { label: "Total Registrations", value: "4,512", change: "+12%", icon: <Users className="w-6 h-6" /> },
  { label: "Total Submissions", value: "1,284", change: "+18%", icon: <FileCheck className="w-6 h-6" /> },
  { label: "Most Active College", value: "CU", sub: "1,284 joins", icon: <TrendingUp className="w-6 h-6" /> },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2 uppercase tracking-tight flex items-center gap-3">
              <LayoutDashboard className="text-[#FF9A00]" />
              Event Management
            </h1>
            <p className="text-gray-500">Manage college-wise events, track performance, and view submissions.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-bold">
              <Download className="w-4 h-4" /> Export Report
            </button>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#FF9A00] text-black rounded-xl hover:bg-[#FF9A00]/90 transition-all text-sm font-black uppercase tracking-widest shadow-xl shadow-[#FF9A00]/10"
            >
              <Plus className="w-4 h-4" /> Create Event
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
              className="p-8 bg-black border border-white/10 rounded-3xl relative overflow-hidden group hover:border-[#FF9A00]/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.icon}
              </div>
              <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-black">{stat.value}</span>
                {stat.change && <span className="text-xs font-bold text-green-500 mb-2">{stat.change}</span>}
                {stat.sub && <span className="text-xs font-bold text-gray-600 mb-2">{stat.sub}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters & Content */}
        <div className="bg-black border border-white/10 rounded-3xl overflow-hidden mb-8 shadow-2xl">
          <div className="p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              {["All Events", "Active", "Upcoming", "Past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`text-sm font-black pb-4 transition-all whitespace-nowrap uppercase tracking-widest ${
                    activeTab === tab.toLowerCase() 
                      ? "text-[#FF9A00] border-b-2 border-[#FF9A00]" 
                      : "text-gray-600 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="Search college or event..." 
                  className="bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-[#FF9A00] w-full md:w-72"
                />
              </div>
              <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Event & College</th>
                  <th className="px-8 py-5">Registrations</th>
                  <th className="px-8 py-5">Submissions</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_EVENTS.map((event) => (
                  <tr key={event.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                          <img src={event.banner} alt={event.collegeName} className="w-full h-full object-cover opacity-60" />
                        </div>
                        <div>
                          <p className="font-black text-white uppercase tracking-tight">{event.title}</p>
                          <p className="text-xs text-[#FF9A00] font-bold">{event.collegeName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-lg">{event.participantsCount.toLocaleString()}</span>
                        <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">+12% growth</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-gray-400">
                      {event.submissionsCount} Projects
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                        event.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-[#FF9A00] transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Admin Event Form Overlay */}
      <AnimatePresence>
        {showForm && <AdminEventForm onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </div>
  );
}
