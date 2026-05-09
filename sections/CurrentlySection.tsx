"use client";

import { motion } from "framer-motion";
import NeoCard from "@/components/NeoCard";

const cards = [
  {
    label: "Shipping",
    labelColor: "text-[#746400]",
    title: "Front-End Engineer at Guestpedia",
    body: "Shipping core features like the AI Pricing Manager.",
    bg: "bg-[#ffe34f]",
    rotate: -2,
    mt: "",
  },
  {
    label: "Learning",
    labelColor: "text-[#113ce5]",
    title: "React Native + Node.js",
    body: "Expanding into full-stack mobile development.",
    bg: "bg-white",
    rotate: 1,
    mt: "md:mt-0 mt-4",
  },
  {
    label: "Building",
    labelColor: "text-[#1e1c12]",
    title: "AI Sales Craft",
    body: "Developing an AI-powered sales optimization tool.",
    bg: "bg-[#fff9ed]",
    rotate: -1,
    mt: "md:mt-8 mt-4",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CurrentlySection() {
  return (
    <section
      id="currently"
      className="w-full px-8 py-20 border-b-4 border-[#1e1c12] bg-[#faf3e3] relative"
    >
      <div className="max-w-7xl mx-auto">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-12 uppercase flex items-center gap-4">
        <span className="bg-[#1e1c12] text-[#fff9ed] px-4 py-1 inline-block" style={{ rotate: "-2deg" }}>
          RIGHT NOW
        </span>
        <span className="text-[#4b4734]">—</span>
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={itemVariants} className={card.mt}>
            <NeoCard rotate={card.rotate} bg={card.bg} className="p-6 flex flex-col h-full cursor-pointer">
              <div className="font-[family-name:var(--font-space-mono)] text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b-4 border-[#1e1c12] inline-block self-start">
                <span className={card.labelColor}>{card.label}</span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-2 flex-grow">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#4b4734] mt-4">
                {card.body}
              </p>
            </NeoCard>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}