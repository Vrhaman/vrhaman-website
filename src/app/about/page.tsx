"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Shield, ArrowRight, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
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
              About VRahman
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Transforming the Way India
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Rents Vehicles
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-12"
            >
              We're on a mission to make vehicle rentals accessible, affordable, and hassle-free for everyone.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Image
                src="/images/about-story.jpg"
                alt="Our Story"
                width={600}
                height={700}
                className="rounded-[2.5rem] shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-amber-500 rounded-full flex items-center justify-center text-white p-8 shadow-lg">
                <span className="text-center font-semibold">
                  Trusted by 50K+ Customers
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg">
                Founded in 2024, VRahman started with a simple idea: make vehicle rentals as easy as booking a cab. 
                What began as a small fleet of cars in Mumbai has now grown into India's leading vehicle rental platform.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we connect thousands of vehicle owners with customers across the country, 
                creating opportunities and delivering convenience through technology.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { value: "50K+", label: "Happy Customers" },
                  { value: "20+", label: "Cities" },
                  { value: "10K+", label: "Vehicle Partners" },
                  { value: "4.8/5", label: "Customer Rating" },
                ].map((stat, index) => (
                  <div key={index} className="bg-amber-50 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-amber-600 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-white/80">
              The principles that guide us in building a better rental experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Customer First", description: "Every decision starts with our customers" },
              { icon: <Shield />, title: "Trust & Safety", description: "We prioritize security in every transaction" },
              { icon: <Heart />, title: "Community", description: "Building connections that matter" },
              { icon: <Leaf />, title: "Sustainability", description: "Committed to a greener future" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">
              The team driving innovation in vehicle rentals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Kumar",
                position: "CEO & Founder",
                image: "/images/team/ceo.jpg"
              },
              {
                name: "Priya Sharma",
                position: "Chief Technology Officer",
                image: "/images/team/cto.jpg"
              },
              {
                name: "Amit Patel",
                position: "Head of Operations",
                image: "/images/team/operations.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-white/80">{member.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of India's fastest-growing vehicle rental community
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/careers" className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-all">
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
