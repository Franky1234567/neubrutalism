"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left — Headline + bio */}
      <div className="flex flex-col gap-8">
        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] text-[clamp(48px,7vw,80px)] font-bold leading-none uppercase break-words"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          THE HUMAN BEHIND THE CODE
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-inter)] text-xl leading-[1.6] max-w-2xl bg-[#e9e2d2] border-4 border-[#1e1c12] p-4 neo-shadow-lg cursor-default"
          initial={{ opacity: 0, rotate: -1 }}
          animate={{ opacity: 1, rotate: -1 }}
          whileHover={{ rotate: 0, x: 2, y: 2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
          transition={{ duration: 0.2 }}
        >
          Based in Sumenep, Indonesia. I bridge the gap between complex backend
          logic and pixel-perfect brutalist interfaces.
        </motion.p>
      </div>

      {/* Right — Portrait */}
      <div className="relative w-full aspect-square flex justify-center items-center group">
        {/* Yellow bg box */}
        <motion.div
          className="absolute inset-4 bg-[#ffe34f] border-4 border-[#1e1c12] neo-shadow-xl z-0"
          initial={{ rotate: 3 }}
          whileHover={{ rotate: 0, x: 4, y: 4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
          transition={{ duration: 0.2 }}
        />

        {/* Photo — ganti src dengan foto asli */}
        <div className="relative z-10 w-[90%] h-[90%] border-4 border-[#1e1c12] overflow-hidden">
          <Image
            src="/me.jpeg"
            alt="Franky — Frontend Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hello World badge */}
        <div
          className="absolute -bottom-4 -left-4 z-20 bg-[#113ce5] text-white px-4 py-2 border-4 border-[#1e1c12] font-[family-name:var(--font-space-mono)] text-sm font-bold neo-shadow-sm"
          style={{ rotate: "-6deg" }}
        >
          [HELLO WORLD]
        </div>
      </div>
    </section>
  );
}