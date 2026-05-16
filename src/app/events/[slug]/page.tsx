"use client";

import { useParams, useRouter } from "next/navigation";
import { getEventBySlug } from "@/lib/events";
import Hero from "../components/Hero";
import ChallengeTracks from "../components/ChallengeTracks";
import WhyJoin from "../components/WhyJoin";
import Ambassador from "../components/Ambassador";
import SubmissionFlow from "../components/SubmissionFlow";
import TrackDetail from "../components/TrackDetail";
import { useEffect, useState } from "react";
import { CollegeEvent } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

export default function CollegeEventPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [event, setEvent] = useState<CollegeEvent | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  useEffect(() => {
    const data = getEventBySlug(slug);
    if (data) {
      setEvent(data);
    }
  }, [slug]);

  const handleTrackSelect = (trackId: string) => {
    setSelectedTrack(trackId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#FF9A00]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white font-primary">
      <AnimatePresence mode="wait">
        {!selectedTrack ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero event={event} />
            
            {/* Dynamic Challenges Section */}
            <section id="challenges" className="py-24 bg-black">
              <ChallengeTracks onSelect={handleTrackSelect} />
            </section>

            <WhyJoin />
            <Ambassador />
            <SubmissionFlow event={event} />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <TrackDetail 
              trackId={selectedTrack} 
              onBack={() => setSelectedTrack(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
