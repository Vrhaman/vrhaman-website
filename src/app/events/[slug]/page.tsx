"use client";

import { useParams, useRouter } from "next/navigation";
import { getEventBySlug } from "@/lib/events";
import Hero from "../components/Hero";
import ChallengeTracks from "../components/ChallengeTracks";
import WhyJoin from "../components/WhyJoin";
import Ambassador from "../components/Ambassador";
import SubmissionFlow from "../components/SubmissionFlow";
import { useEffect, useState } from "react";
import { CollegeEvent } from "@/lib/types";

export default function CollegeEventPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [event, setEvent] = useState<CollegeEvent | null>(null);

  useEffect(() => {
    const data = getEventBySlug(slug);
    if (data) {
      setEvent(data);
    }
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#FF9A00]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white font-primary">
      <Hero event={event} />
      
      {/* Dynamic Challenges Section */}
      <section id="challenges" className="py-24 bg-black">
        <ChallengeTracks />
      </section>

      <WhyJoin />
      <Ambassador />
      <SubmissionFlow event={event} />
    </main>
  );
}
