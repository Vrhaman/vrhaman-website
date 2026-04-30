"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight, CheckCircle2, User, Mail, Phone, School, Instagram, MapPin, Sparkles } from "lucide-react";

type Step = "whatsapp" | "form" | "success";

export default function RegistrationModal({ 
  isOpen, 
  onClose, 
  initialTrack 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  initialTrack: string | null;
}) {
  const [step, setStep] = useState<Step>("whatsapp");
  const [track, setTrack] = useState(initialTrack);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTrack) setTrack(initialTrack);
    if (!isOpen) {
      setStep("whatsapp");
    }
  }, [initialTrack, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, track }),
      });

      if (response.ok) {
        setStep("success");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 md:p-12">
            {step === "whatsapp" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Step 1: Join Community</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  To participate in the <span className="text-[#FF9A00] font-bold">{track === 'content' ? 'Viral Content' : 'AI Hackathon'}</span>, you must join our WhatsApp community first for all updates and announcements.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/your-whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Join WhatsApp Community
                  </a>
                  <button
                    onClick={() => setStep("form")}
                    className="w-full py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    I have joined
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === "form" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Register for {track === 'content' ? 'Content Challenge' : 'AI Hackathon'}</h3>
                <p className="text-gray-500 mb-8">Tell us about yourself to get started.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                        <User className="w-4 h-4" /> Full Name
                      </label>
                      <input name="fullName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Phone Number
                      </label>
                      <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email Address
                    </label>
                    <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="john@example.com" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                        <School className="w-4 h-4" /> College Name
                      </label>
                      <input name="college" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="IIT Bombay" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> City
                      </label>
                      <input name="city" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="Mumbai" />
                    </div>
                  </div>

                  {track === 'content' ? (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                        <Instagram className="w-4 h-4" /> Instagram Handle
                      </label>
                      <input name="instagram" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="@yourhandle" />
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Team Name</label>
                        <input name="teamName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors" placeholder="The Innovators" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Team Size</label>
                        <select name="teamSize" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9A00] transition-colors">
                          <option value="2">2 Members</option>
                          <option value="3">3 Members</option>
                          <option value="4">4 Members</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#FF9A00] text-black font-bold rounded-xl hover:bg-[#FF9A00]/90 transition-all flex items-center justify-center gap-2 mt-8 disabled:opacity-50"
                  >
                    {isSubmitting ? "Registering..." : "Submit Registration"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                </form>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-24 h-24 bg-[#FF9A00]/10 rounded-full flex items-center justify-center text-[#FF9A00] mx-auto mb-8 relative">
                  <CheckCircle2 className="w-12 h-12" />
                  <Sparkles className="absolute -top-2 -right-2 text-[#FF9A00] w-8 h-8 animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">You're In!</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  Your registration for <span className="text-[#FF9A00] font-bold">{track === 'content' ? 'Viral Content' : 'AI Hackathon'}</span> was successful. Check your email/WhatsApp for next steps!
                </p>
                <button
                  onClick={onClose}
                  className="px-12 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
