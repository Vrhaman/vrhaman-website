"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('sent');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/50" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6"
            >
              Contact Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Get in Touch
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="w-5 h-5" />, title: "Phone", content: "+91 89687 79413", href: "tel:+91 89687 79413" },
                    { icon: <Mail className="w-5 h-5" />, title: "Email", content: "support@vrahman.com", href: "mailto:support @vrhaman.com" },
                    { icon: <MapPin className="w-5 h-5" />, title: "Address", content: "123 Business Hub, Mumbai, India", href: "#map" },
                    { icon: <Clock className="w-5 h-5" />, title: "Working Hours", content: "Mon - Sat: 9:00 AM - 7:00 PM", href: null },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-gray-600 hover:text-amber-600 transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 gap-6">
                <motion.a
                  href="https://wa.me/918968779413"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <MessageSquare className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 group-hover:text-amber-600 transition-colors">
                    Chat with our support team
                  </p>
                </motion.a>

                <motion.a
                  href="https://wa.me/918968779413"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <Send className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="font-semibold mb-2">Help Center</h3>
                  <p className="text-sm text-gray-600 group-hover:text-amber-600 transition-colors">
                    Find quick answers
                  </p>
                </motion.a>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl text-white font-medium flex items-center justify-center gap-2 ${
                    formStatus === 'sent' 
                      ? 'bg-green-500'
                      : 'bg-amber-500 hover:bg-amber-600'
                  } transition-colors`}
                  disabled={formStatus !== 'idle'}
                >
                  {formStatus === 'idle' && (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Message Sent!'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white" id="map">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635835656147!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
