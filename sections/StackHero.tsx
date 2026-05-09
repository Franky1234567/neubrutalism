"use client";

import { motion } from "framer-motion";

export default function StackHero() {
  return (
    <header className="mb-12 relative">
      <motion.h1
        className="font-[family-name:var(--font-space-grotesk)] text-[clamp(48px,8vw,80px)] font-bold leading-[1.0] tracking-[-0.04em] uppercase max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        THE ENGINE{" "}
        <br />
        <span className="relative inline-block">
          <span className="absolute -inset-x-2 -inset-y-1 bg-[#bac3ff] border-4 border-[#1e1c12] neo-shadow-sm -z-10" />
          UNDER THE HOOD
        </span>
      </motion.h1>

      <motion.p
        className="font-[family-name:var(--font-inter)] text-xl leading-[1.6] mt-4 max-w-2xl text-[#4b4734]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A brutalist look at the tools, languages, and philosophies that power my
        digital constructions. No fluff, just functional tech.
      </motion.p>

      {/* Decorative Arrow */}
      <svg
        className="absolute top-1/2 right-[10%] w-32 h-32 text-[#113ce5] hidden lg:block -rotate-12"
        fill="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50 Q 50 10, 90 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M75 80 L 90 80 L 85 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    </header>
  );
}