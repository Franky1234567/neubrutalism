"use client";

import { motion } from "framer-motion";
import NeoButton from "@/ui/NeoButton";

export default function HeroSection() {
  return (
    <section className="w-full px-8 py-24 md:py-32 border-b-4 border-[#1e1c12] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
      {/* Available badge */}
      <motion.div
        className="absolute top-10 right-10 border-4 border-[#1e1c12] bg-[#f4eddd] px-4 py-2 neo-shadow hidden md:block"
        style={{ rotate: 3 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <span className="font-[family-name:var(--font-space-mono)] text-sm font-bold flex items-center gap-2 uppercase">
          <span className="w-3 h-3 bg-[#113ce5] rounded-full inline-block animate-pulse" />
          AVAILABLE FOR FREELANCE
        </span>
      </motion.div>

      <div className="max-w-4xl relative z-10">
        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] text-[clamp(48px,8vw,80px)] font-bold leading-[1.0] tracking-[-0.04em] mb-8 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frontend engineer building{" "}
          <span className="marker-underline inline-block">hospitality</span>{" "}
          software in Indonesia.
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-inter)] text-xl leading-[1.6] mb-12 max-w-2xl text-[#4b4734] border-l-4 border-[#113ce5] pl-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          1 year shipping production code at Guestpedia. Currently learning
          Node.js, MySQL, and React Native. Focusing on creating robust,
          scalable interfaces with a slight brutalist edge.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <NeoButton href="#work" size="lg">
            See My Work ↓
          </NeoButton>
          <NeoButton href="#currently" size="lg" variant="outline">
            What I&apos;m doing now ⚡
          </NeoButton>
        </motion.div>
      </div>

      {/* Decorative scribble */}
      <svg
        className="absolute bottom-10 right-10 w-32 h-32 text-[#113ce5] hidden lg:block pointer-events-none"
        fill="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50 Q 30 10, 50 50 T 90 50"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M80 40 L 90 50 L 80 60"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
      </div>
    </section>
  );
}