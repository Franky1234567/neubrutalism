"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2025 - Present",
    title: "Front-End Engineer @ Guestpedia",
    desc: "Spearheaded core features, AI Pricing Manager, and robust WebSocket systems for seamless real-time experiences.",
    dotColor: "bg-[#ffe34f]",
  },
  {
    period: "Dec 2024 - Mar 2025",
    title: "Full Stack Bootcamp @ Harisenin.com",
    desc: "Shipped real-world projects covering React, Node.js, and MySQL. Left early — got hired before finishing.",
    dotColor: "bg-[#e9e2d2]",
  },
  {
    period: "2020 - 2024",
    title: "Bachelor of Informatics @ Amikom University",
    desc: "Graduated Cumlaude with a GPA of 3.69/4.00, specializing in software architecture and modern web technologies.",
    dotColor: "bg-[#e9e2d2]",
  },
];

export default function JourneySection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold inline-block border-b-8 border-[#ffe34f] pb-2 w-max">
        MY JOURNEY
      </h2>

      {/* Timeline */}
      <div className="flex flex-col gap-12 ml-4 md:ml-12 border-l-4 border-[#1e1c12] pl-8 py-8 relative">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            className="relative bg-white border-4 border-[#1e1c12] p-6 neo-shadow-lg max-w-3xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 4, y: 4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            {/* Timeline dot */}
            <div
              className={`absolute -left-12 top-6 w-8 h-8 ${item.dotColor} border-4 border-[#1e1c12] rounded-full z-10`}
            />

            <span className="font-[family-name:var(--font-space-mono)] text-sm text-[#113ce5] font-bold block mb-2">
              {item.period}
            </span>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-2">
              {item.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-[#4b4734]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}