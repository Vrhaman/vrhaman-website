"use client";

import { motion } from "framer-motion";
import { X, Plus, Trash2, Save } from "lucide-react";
import { useState } from "react";

export default function AdminEventForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8 md:p-12 no-scrollbar"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-tight">Create New College Event</h2>

        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Event Title</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" placeholder="e.g. Campus Innovation Challenge" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">College Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" placeholder="e.g. Chandigarh University" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Event Slug</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" placeholder="e.g. cu-hackathon" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">WhatsApp Link</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" placeholder="https://chat.whatsapp.com/..." />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">College Banner URL</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" placeholder="https://unsplash.com/..." />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Event Description</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none resize-none" placeholder="Short description of the event..."></textarea>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Start Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">End Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Event Theme</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF9A00] outline-none" placeholder="e.g. Mobility" />
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <button className="w-full py-5 bg-[#FF9A00] text-black font-black rounded-2xl hover:bg-[#FF9A00]/90 transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest shadow-2xl shadow-[#FF9A00]/20">
              <Save className="w-6 h-6" />
              Publish Event
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
