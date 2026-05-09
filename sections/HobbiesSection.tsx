"use client";

import { motion } from "framer-motion";

const hobbies = [
  {
    icon: "coffee",
    label: "Coffee Brewing",
    bg: "bg-[#113ce5] text-white",
    rotate: -3,
  },
  {
    icon: "map",
    label: "Sumenep Exploration",
    bg: "bg-[#ffe34f] text-[#1e1c12]",
    rotate: 2,
  },
  {
    icon: "headphones",
    label: "Vinyl Collecting",
    bg: "bg-white text-[#1e1c12]",
    rotate: -1,
  },
  {
    icon: "code_blocks",
    label: "Community Building",
    bg: "bg-[#e9e2d2] text-[#1e1c12]",
    rotate: 4,
  },
];

export default function HobbiesSection() {
  return (
    <section className="flex flex-col gap-8 bg-[#f4eddd] border-4 border-[#1e1c12] p-8 neo-shadow-xl">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
        BEYOND THE CODE
      </h2>

      <div className="flex flex-wrap gap-6">
        {hobbies.map((h) => (
          <motion.div
            key={h.label}
            className={`${h.bg} border-4 border-[#1e1c12] px-6 py-3 font-[family-name:var(--font-space-mono)] text-sm font-bold neo-shadow flex items-center gap-2 cursor-pointer`}
            initial={{ rotate: h.rotate }}
            whileHover={{
              rotate: 0,
              x: 4,
              y: 4,
              boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.15 }}
          >
            <span className="material-symbols-outlined text-xl">{h.icon}</span>
            {h.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}