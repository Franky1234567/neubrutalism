"use client";

import { motion } from "framer-motion";

export default function PhilosophyQuote() {
  return (
    <section className="mt-12 mb-12 relative">
      {/* Background tilted card */}
      <div className="absolute inset-0 bg-[#ffe34f] border-4 border-[#1e1c12] neo-shadow-xl -rotate-1 z-0" />

      <motion.div
        className="relative z-10 px-12 py-12 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-[family-name:var(--font-space-mono)] text-xs font-bold uppercase tracking-widest mb-4">
          Development Philosophy
        </p>

        <p className="font-[family-name:var(--font-space-grotesk)] text-[clamp(32px,5vw,80px)] font-bold leading-none max-w-4xl">
          PERFORMANCE IS A{" "}
          <br />
          <motion.span
            className="inline-block border-4 border-[#1e1c12] bg-white px-4 py-1 mt-2 neo-shadow rotate-2"
            whileHover={{ rotate: 0 }}
          >
            FEATURE
          </motion.span>
          ,{" "}
          <br />
          NOT AN AFTERTHOUGHT.
        </p>

        <div className="mt-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-4xl">bolt</span>
          <span className="font-[family-name:var(--font-space-mono)] text-lg font-bold">
            Build it fast. Build it right.
          </span>
        </div>
      </motion.div>
    </section>
  );
}