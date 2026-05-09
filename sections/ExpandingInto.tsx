"use client";

import { motion } from "framer-motion";

const items = [
  { num: "01", name: "Go", sub: "Systems Programming", rotate: -1 },
  { num: "02", name: "React Native", sub: "Mobile Development", rotate: 1 },
  { num: "03", name: "Node.js/Express", sub: "JS Backend", rotate: -1 },
];

export default function ExpandingInto() {
  return (
    <section className="mt-12 relative z-10">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-8 border-b-4 border-[#1e1c12] pb-2 inline-block">
        Expanding Into
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-[#e9e2d2] border-4 border-[#1e1c12] p-4 neo-shadow flex items-center gap-4"
            initial={{ opacity: 0, y: 20, rotate: item.rotate }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-[#1e1c12] text-[#fff9ed] flex items-center justify-center font-bold font-[family-name:var(--font-space-mono)] border-2 border-[#1e1c12] shrink-0">
              {item.num}
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-space-mono)] text-xl font-bold">
                {item.name}
              </h3>
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#4b4734] mt-1">
                {item.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}