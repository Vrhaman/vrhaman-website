"use client";

import { motion } from "framer-motion";
import { Users, Calendar, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { CollegeEvent } from "@/lib/types";

export default function CollegeCard({ event }: { event: CollegeEvent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-[#FF9A00]/50 transition-all shadow-2xl"
    >
      {/* Banner */}
      <div className="h-48 relative overflow-hidden">
        <img 
          src={event.banner} 
          alt={event.collegeName} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          event.status === 'active' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
        }`}>
          {event.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-[#FF9A00] text-xs font-bold uppercase tracking-widest mb-3">
          <MapPin className="w-3 h-3" />
          {event.collegeName}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF9A00] transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Participants</span>
            <div className="flex items-center gap-2 text-white font-bold">
              <Users className="w-4 h-4 text-[#FF9A00]" />
              {event.participantsCount}+
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Date</span>
            <div className="flex items-center gap-2 text-white font-bold">
              <Calendar className="w-4 h-4 text-[#FF9A00]" />
              {new Date(event.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        </div>

        <Link 
          href={`/events/${event.slug}`}
          className="w-full py-4 bg-white/5 group-hover:bg-[#FF9A00] text-white group-hover:text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
        >
          Join Event
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
