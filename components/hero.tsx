"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Shield, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* ── Background image with pine overlay ─────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img-hero.jpg"
          alt="A family caregiver holding her elderly mother's hand in a warm sunlit home"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Pine gradient overlay — deeper on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/90 via-teal/75 to-teal/30" />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-lato px-4 py-2 rounded-full mb-6"
          >
            <Heart className="w-4 h-4 text-terracotta-light fill-terracotta-light" />
            Faith-Centered Care &amp; Education
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Supporting Every{" "}
            <span className="text-terracotta-light italic">Season of Life</span>{" "}
            with Compassion &amp; Honor
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-lato text-lg text-white/85 leading-relaxed mb-8 max-w-xl"
          >
            Trusted resources, compassionate community, and expert education for
            families and caregivers navigating the journey of aging with dignity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/caregiver-resources"
              className="inline-flex items-center justify-center gap-2 bg-terracotta text-white font-lato font-semibold px-7 py-3.5 rounded-full hover:bg-terracotta-dark transition-colors"
            >
              Caregiver Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-lato font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Courses
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { icon: Users, value: "10K+", label: "Caregivers Supported" },
              { icon: Shield, value: "50+", label: "Free Resources" },
              { icon: Heart, value: "15+", label: "Expert-Led Courses" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-playfair text-xl font-bold text-white leading-none">{value}</p>
                  <p className="font-lato text-xs text-white/70 mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-lato text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
