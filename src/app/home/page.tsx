"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Calendar,
  Car,
  ChevronDown,
  CheckCircle2,
  Clock,
  Download,
  Globe,
  MapPin,
  MessageSquare,
  Search,
  Smartphone,
  Star,
  Users,
  Wallet2,
  Zap,
} from "lucide-react";

import ScreenBrowse from "../../../public/Customer Mockups/2.png";
import ScreenSearch from "../../../public/Customer Mockups/4.png";
import ScreenBooking from "../../../public/Customer Mockups/6.png";
import ScreenConfirm from "../../../public/Customer Mockups/8.png";
import VehicleHero from "../../../public/vehicle-rental-hero.png";

type ScreenCardProps = {
  image: StaticImageData;
  label: string;
  className?: string;
  priority?: boolean;
};

function ScreenCard({ image, label, className = "", priority = false }: ScreenCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image}
        alt={label}
        width={380}
        height={760}
        priority={priority}
        className="mx-auto h-full max-h-full w-auto object-contain"
      />
    </div>
  );
}

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);


  const steps = [
    {
      step: "01",
      title: "Explore nearby vehicles",
      description: "Browse a wide range of bikes, cars, and EVs available in your immediate location.",
      icon: <Search className="h-7 w-7" />,
      image: ScreenBrowse,
    },
    {
      step: "02",
      title: "Choose date & time",
      description: "Select your preferred rental duration and choose the vehicle that fits your style.",
      icon: <Calendar className="h-7 w-7" />,
      image: ScreenBooking,
    },
    {
      step: "03",
      title: "Book and start your ride",
      description: "Confirm your booking instantly and pick up your vehicle or have it delivered.",
      icon: <Zap className="h-7 w-7" />,
      image: ScreenConfirm,
    },
  ];

  const benefits = [
    { title: "No offline shop hopping", icon: <CheckCircle2 className="h-5 w-5" /> },
    { title: "Nearby bikes, cars, & EVs", icon: <MapPin className="h-5 w-5" /> },
    { title: "Transparent pricing", icon: <Wallet2 className="h-5 w-5" /> },
    { title: "Easy booking flow", icon: <Smartphone className="h-5 w-5" /> },
    { title: "Home delivery available", icon: <Clock className="h-5 w-5" /> },
    { title: "24/7 Support", icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const faqs = [
    {
      q: "How fast can I book a vehicle?",
      a: "You can book a vehicle in less than 5 minutes! Simply select your ride, choose your duration, and confirm. Instant confirmation ensures you're ready to hit the road immediately.",
    },
    {
      q: "Can I rent both bikes and cars?",
      a: "Yes! Vrhaman offers a wide variety of vehicles including self-drive bikes, cars, and even EVs (Electric Vehicles) across 50+ cities in India.",
    },
    {
      q: "Is pricing shown before booking?",
      a: "Absolutely. We believe in 100% transparent pricing. You'll see the complete cost, including any deposits, before you make a payment. No hidden surprises.",
    },
    {
      q: "Is home delivery available?",
      a: "Yes, we offer convenient doorstep delivery and pickup in most of our operating cities. You can select this option during the booking process.",
    },
    {
      q: "How do I get support after booking?",
      a: "Our integrated support system is available 24/7. You can contact us directly through the app or website for any assistance during your rental period.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FDFBF7] font-primary text-gray-900">
      <section className="relative overflow-hidden bg-[#FDFBF7] pt-24 sm:pt-24 lg:pt-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-12 w-96 h-96 bg-[#FF9A00]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-12 w-96 h-96 bg-[#FF9A00]/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-2 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.7fr)] lg:items-start lg:px-8 lg:pb-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#FF9A00]/20 bg-white px-4 py-2 text-xs font-extrabold text-[#FF9A00] shadow-sm sm:text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF9A00]" />
              <span className="truncate">Trusted by 50,000+ Happy Riders</span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-950 min-[360px]:text-[2.7rem] sm:text-5xl lg:text-6xl">
              Rent Bikes,Cars & EVs <br /><span className="text-[#FF9A00]">Easily with Vrhaman</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Explore nearby vehicles, compare options, book in a few taps, and enjoy a smooth self-drive rental experience with transparent pricing and convenient support.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://app.vrhaman.com/"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#FF9A00] px-6 py-4 text-base font-extrabold text-white shadow-xl shadow-[#FF9A00]/25 transition hover:-translate-y-0.5 hover:bg-[#FF9A00]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A00] active:translate-y-0 sm:w-auto"
              >
                Book Now
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-base font-extrabold text-gray-950 shadow-xl transition hover:-translate-y-0.5 hover:text-[#FF9A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A00] active:translate-y-0 sm:w-auto"
              >
                <Download className="h-5 w-5 shrink-0" />
                Download App
              </Link>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div className="relative p-5">
              <div className="relative mx-auto max-w-[260px] sm:max-w-[300px]">
                <ScreenCard
                  image={ScreenSearch}
                  label="Best bike and car rental mobile app for instant bookings in India"
                  priority
                  className="h-[430px] p-2 sm:h-[520px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="relative overflow-hidden bg-[#FDFBF7] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(249,152,37,0.08),transparent_30%,rgba(17,24,39,0.04)_100%)]" />
          <Image
            src={VehicleHero}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-[#FDFBF7]/90" />
          <Car className="absolute right-8 top-10 h-24 w-24 text-[#FF9A00]/15" />
          <Bike className="absolute bottom-10 left-8 h-24 w-24 text-gray-900/[0.08]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF9A00]/15 bg-[#FF9A00]/10 px-4 py-2 text-xs font-extrabold text-[#FF9A00] md:text-sm">
              <Search className="h-4 w-4" />
              Easy Booking Process
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 md:text-5xl">How Vrhaman Works</h2>
            <p className="mt-5 text-base font-medium leading-8 text-gray-600 md:text-lg">
              Get on the road in minutes with our streamlined customer experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-[#FDFBF7] shadow-sm"
              >
                <div className="relative flex h-64 items-end justify-center overflow-hidden bg-gray-950 p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(249,152,37,0.28),transparent_46%)]" />
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={360}
                    height={720}
                    className="relative z-10 h-full w-auto object-contain drop-shadow-2xl"
                  />
                  <div className="absolute left-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9A00] text-sm font-black text-white shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FF9A00] shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-extrabold leading-tight text-gray-950">{step.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-gray-600">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="https://app.vrhaman.com/"
              className="inline-flex min-h-14 w-full max-w-md items-center justify-center gap-2 rounded-2xl border border-[#FF9A00]/30 bg-white px-6 py-4 text-center text-base font-extrabold text-gray-950 shadow-sm transition hover:-translate-y-0.5 hover:text-[#FF9A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A00] sm:w-auto sm:text-lg"
            >
              Start Exploring Available Vehicles
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gray-950 py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(249,152,37,0.18),transparent_30%),linear-gradient(135deg,#030712,#111827_52%,#030712)]" />
          <Car className="absolute right-[9%] top-[16%] h-24 w-24 text-white/[0.06]" />
          <Bike className="absolute left-[7%] bottom-[12%] h-24 w-24 text-[#FF9A00]/12" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FF9A00]">Customer First</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Why Rent with Vrhaman?
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/70 md:text-lg">
              We&apos;ve removed the friction from traditional rentals. No more offline shop hopping or hidden surprises.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item.title} className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/95 p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF9A00]/10 text-[#FF9A00]">
                    {item.icon}
                  </div>
                  <span className="text-sm font-extrabold leading-snug text-gray-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "50K+", label: "Happy Riders", icon: <Users className="h-7 w-7" />, tone: "bg-white text-gray-950" },
              { value: "50+", label: "Cities Covered", icon: <Globe className="h-7 w-7" />, tone: "bg-[#FF9A00] text-white" },
              { value: "4.8★", label: "User Rating", icon: <Star className="h-7 w-7 fill-current" />, tone: "bg-gray-950 text-white" },
              { value: "500+", label: "Vehicles", icon: <Car className="h-7 w-7" />, tone: "bg-white text-gray-950" },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-[1.75rem] p-6 shadow-xl ${stat.tone}`}>
                <div className={stat.tone.includes("white") ? "text-[#FF9A00]" : ""}>{stat.icon}</div>
                <h4 className="mt-8 text-3xl font-extrabold">{stat.value}</h4>
                <p className="mt-2 text-xs font-black uppercase tracking-widest opacity-70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FDFBF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FF9A00] to-[#FF9A00] shadow-2xl shadow-[#FF9A00]/20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
                Ready for Your <br />
                Next Ride?
              </h2>
              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/90 sm:text-lg md:text-2xl">
                Book your vehicle online and avoid last-minute offline rental confusion. Experience the difference.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap">
                <Link
                  href="https://app.vrhaman.com/"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-gray-950 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:w-auto lg:text-lg"
                >
                  Book Now
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vrhaman.vrhaman"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-extrabold text-[#FF9A00] shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:w-auto lg:text-lg"
                >
                  <Download className="h-6 w-6 shrink-0" />
                  Get App
                </Link>
              </div>

              <div className="mt-7 grid gap-3 text-sm font-extrabold uppercase tracking-widest text-white/90 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Fast Confirmation
                </div>
              </div>
            </div>

            <div className="relative min-h-[550px] p-6 sm:min-h-[680px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.32),transparent_34%)]" />
              <div className="relative w-full max-w-[720px] grid grid-cols-3 items-end gap-3 sm:gap-5">
                <ScreenCard image={ScreenSearch} label="Best bike and car rental mobile app for instant bookings in India" className="h-[390px] p-2 sm:h-[507px]" />
                <ScreenCard image={ScreenBooking} label="Best bike and car rental mobile app for instant bookings in India" className="h-[468px] p-2 sm:h-[611px]" />
                <ScreenCard image={ScreenConfirm} label="Best bike and car rental mobile app for instant bookings in India" className="h-[390px] p-2 sm:h-[507px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#FDFBF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-5 text-base font-medium text-gray-600 md:text-lg">Everything you need to know about renting with Vrhaman.</p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="group flex min-h-20 w-full items-center justify-between gap-4 p-5 text-left sm:p-7"
                >
                  <span className={`text-base font-extrabold leading-snug transition sm:text-xl ${openFaqIndex === i ? "text-[#FF9A00]" : "text-gray-950"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${openFaqIndex === i ? "rotate-180 bg-[#FF9A00] text-white" : "bg-[#FF9A00]/10 text-[#FF9A00]"}`}>
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
                {openFaqIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-5 pb-6 text-sm font-medium leading-7 text-gray-600 sm:px-7 sm:pb-7 sm:text-base"
                  >
                    <div className="border-t border-gray-100 pt-5">{faq.a}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

