"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  period: string;
  title: string;
  description: string;
  dotColor?: string;
}

export default function TimelineItem({
  period,
  title,
  description,
  dotColor = "bg-[#ffe34f]",
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative bg-white border-4 border-[#1e1c12] p-6 neo-shadow-lg max-w-3xl"
      whileHover={{ x: 4, y: 4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
      transition={{ duration: 0.15 }}
    >
      <div
        className={`absolute -left-12 top-6 w-8 h-8 ${dotColor} border-4 border-[#1e1c12] rounded-full z-10`}
      />
      <span className="font-[family-name:var(--font-space-mono)] text-sm text-[#113ce5] font-bold block mb-2">
        {period}
      </span>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-[#4b4734]">{description}</p>
    </motion.div>
  );
}