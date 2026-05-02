"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import ChallengeTracks from "./components/ChallengeTracks";
import Ambassador from "./components/Ambassador";
import TrackDetail from "./components/TrackDetail";
import { motion, AnimatePresence } from "framer-motion";

export default function EventsPage() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const handleTrackSelect = (trackId: string) => {
    setSelectedTrack(trackId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black text-white font-primary">
      <AnimatePresence mode="wait">
        {!selectedTrack ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero Section */}
            <Hero />

            {/* Choose Your Track Section */}
            <ChallengeTracks onSelect={handleTrackSelect} />

            {/* Ambassador Section */}
            <Ambassador />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
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
