"use client";

import { motion } from "framer-motion";

interface StackChipsProps {
  title: string;
  items: { label: string; rotate: number }[];
  cols?: string;
}

export default function StackChips({
  title,
  items,
  cols = "grid-cols-2 md:grid-cols-4",
}: StackChipsProps) {
  return (
    <section className="mt-12 relative z-10">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-8 border-b-4 border-[#1e1c12] pb-2 inline-block">
        {title}
      </h2>

      <div className={`grid ${cols} gap-4`}>
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="bg-[#eee8d8] border-2 border-[#1e1c12] p-2 text-center neo-shadow-sm font-[family-name:var(--font-space-mono)] font-bold text-sm"
            initial={{ opacity: 0, rotate: item.rotate }}
            whileInView={{ opacity: 1, rotate: item.rotate }}
            whileHover={{ rotate: 0, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.2 }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}