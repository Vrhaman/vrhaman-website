"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "../../components/ui/sparkles";
import ContainerWrapper from "@/components/containerWrapper";
import { Button } from "@nextui-org/react";
import { useState, useRef } from 'react';

// Contact info data
const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "vrhaman.com@gmail.com", 
    link: "mailto:vrhaman.com@gmail.com"
  },
  {
    icon: (
      <svg className="paw-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    value: "+91 8968779413",
    link: "tel:+918968779413"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location", 
    value: "Gurgoan, India",
    link: "#", // https://goo.gl/maps/QYsRGhYyG4T2Zcxt5
  }
];

// Vendor onboarding options
const vehicleTypes = [
  "Bikes",
  "Cars",
  "Both",
];

const fleetSizes = [
  "1-3 vehicles",
  "4-10 vehicles",
  "11-25 vehicles",
  "26-50 vehicles",
  "50+ vehicles",
];

const preferredContactTimes = [
  "Morning (9am-12pm)",
  "Afternoon (12pm-4pm)",
  "Evening (4pm-8pm)",
  "Anytime",
];

const roleOptions = [
  "Owner",
  "Fleet Manager",
  "Individual Vendor",
];

const vehicleSegments = [
  "Bike",
  "Car",
  "EV",
];

const serviceTypes = [
  "Self-Drive Rentals",
  "Chauffeur Rentals",
  "Both",
];

const earningsRanges = [
  "Less than 25,000",
  "25,000 - 50,000",
  "50,000 - 1,00,000",
  "1,00,000+",
];

const ContactPage = () => {
  // Add form reference
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formStatus, setFormStatus] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
  }>({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          loading: false,
          success: true,
          error: null
        });
        // Use formRef to reset
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Something went wrong'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black pt-16 md:pt-0">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-purple-900/20 rounded-full mix-blend-multiply filter blur-[132px] animate-blob" />
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[132px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-[132px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={70}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <ContainerWrapper>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-lg lg:pt-2"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl lg:text-6xl font-bold text-white mb-6"
                >
                  Partner With Vrhaman
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Grow Your Vehicle Rental Business
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-gray-400 mb-6"
                >
                  Turn your bikes, cars and EVs into a steady income source.
                </motion.p>

                <div className="space-y-4 text-gray-400 mb-10">
                  <p>Own a bike, car, or EV?</p>
                  <p>Join Vrhaman as a verified vendor and start earning with zero marketing hassle.</p>
                  <p>We connect you with genuine customers, manage bookings, and support you at every step.</p>
                </div>

                <motion.a
                  href="#vendor-registration"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/20"
                >
                  Become a Vendor
                </motion.a>

                {/* Contact Info Cards */}
                <div className="mt-10 space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-6 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
                <div id="vendor-registration" className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    noValidate
                  >
                    <input type="hidden" name="access_key" value="7a51a0fb-2360-494a-8ad5-4a41c3455f09"></input>
                    <input type="hidden" name="from_name" value="Website Contact Form" />
                    <input type="hidden" name="subject" value="New Vendor Onboarding Request" />

                    <div>
                      <h2 className="text-xl font-semibold text-white">Vendor Registration Form</h2>
                      <p className="text-sm text-gray-400">Basic Details</p>
                    </div>

                    {/* Contact Person */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Contact First Name</label>
                        <input
                          type="text"
                          name="contact_first_name"
                          required
                          placeholder="First name"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Contact Last Name</label>
                        <input
                          type="text"
                          name="contact_last_name"
                          required
                          placeholder="Last name"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 90000 00000"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Business / Owner Details</p>
                    </div>

                    {/* Business and Location */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Business Name</label>
                        <input
                          type="text"
                          name="business_name"
                          required
                          placeholder="Your rental business name"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Your Role</label>
                        <select
                          name="role"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="" className="bg-gray-900">Select role</option>
                          {roleOptions.map((role) => (
                            <option key={role} value={role} className="bg-gray-900">
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">City</label>
                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="Your city"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Primary Operating City / Area</label>
                        <input
                          type="text"
                          name="primary_operating_area"
                          required
                          placeholder="City or area"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Business Address</label>
                      <textarea
                        rows={3}
                        name="address"
                        required
                        placeholder="Street, area, landmark"
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Vehicle Information</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Vehicle Segment</label>
                        <select
                          name="vehicle_segment"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="" className="bg-gray-900">Select segment</option>
                          {vehicleSegments.map((segment) => (
                            <option key={segment} value={segment} className="bg-gray-900">
                              {segment}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Number of Vehicles</label>
                        <input
                          type="number"
                          name="number_of_vehicles"
                          min={1}
                          required
                          placeholder="e.g. 5"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    {/* Vehicle Type and Fleet Size */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Vehicle Type</label>
                        <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-4">
                          {vehicleTypes.map((type, index) => (
                            <label key={type} className="flex items-center gap-3 text-sm text-gray-300">
                              <input
                                type="checkbox"
                                name="vehicle_type[]"
                                value={type}
                                required={index === 0}
                                className="h-4 w-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500/40"
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Fleet Size</label>
                        <select 
                          name="fleet_size" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="" className="bg-gray-900">Select fleet size</option>
                          {fleetSizes.map((size) => (
                            <option key={size} value={size} className="bg-gray-900">
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Contact Time */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Preferred Contact Time</label>
                      <select 
                        name="preferred_contact_time" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      >
                        <option value="" className="bg-gray-900">Select a time</option>
                        {preferredContactTimes.map((time) => (
                          <option key={time} value={time} className="bg-gray-900">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Partnership Preferences</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Interested Service Type</label>
                        <select
                          name="service_type"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="" className="bg-gray-900">Select service type</option>
                          {serviceTypes.map((type) => (
                            <option key={type} value={type} className="bg-gray-900">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Expected Monthly Earnings Range (optional)</label>
                        <select
                          name="expected_monthly_earnings"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="" className="bg-gray-900">Select range</option>
                          {earningsRanges.map((range) => (
                            <option key={range} value={range} className="bg-gray-900">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Vehicle Details */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Vehicle Details</label>
                      <textarea
                        rows={6}
                        name="vehicle_details"
                        required
                        placeholder="List vehicle models, year, transmission type, and any special features."
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      />
                    </div>

                    {/* Honeypot */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        className="w-full px-8 py-6 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300"
                      >
                        Register as a Vendor
                      </Button>
                    </motion.div>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form, you agree to be contacted by the Vrhaman vendor onboarding team.
                    </p>

                    {/* Show status messages */}
                    <div className="mt-4">
                      {formStatus.loading && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-blue-400 text-center p-3 rounded-lg bg-blue-400/10"
                        >
                          Sending message...
                        </motion.p>
                      )}
                      {formStatus.success && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-400 text-center p-3 rounded-lg bg-green-400/10"
                        >
                          Message sent successfully! We&apos;ll get back to you soon.
                        </motion.p>
                      )}
                      {formStatus.error && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-center p-3 rounded-lg bg-red-400/10"
                        >
                          {formStatus.error}
                        </motion.p>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </ContainerWrapper>
        </section>

        {/* Map Section */}
        <section className="relative py-20">
          <ContainerWrapper>
            <div className="rounded-2xl overflow-hidden h-[400px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004959968!2d77.06889754035558!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1708761547948!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ContainerWrapper>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
