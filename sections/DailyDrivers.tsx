"use client";

import { motion } from "framer-motion";

const drivers = [
  {
    name: "TypeScript",
    icon: "data_object",
    desc: "Strict types, safe builds. The foundation of robust applications.",
    rotate: -1,
    badge: { label: "CORE", side: "right", color: "bg-[#ffe34f] text-[#1e1c12]", deg: 5 },
  },
  {
    name: "Next.js",
    icon: "web",
    desc: "Server-side rendering and static generation for peak performance.",
    rotate: 1,
    badge: null,
  },
  {
    name: "React",
    icon: "widgets",
    desc: "Component-driven architecture for interactive UIs.",
    rotate: -2,
    badge: null,
  },
  {
    name: "Tailwind",
    icon: "palette",
    desc: "Utility-first styling for rapid, constrained design implementation.",
    rotate: 2,
    badge: { label: "STYLE", side: "left", color: "bg-[#395afe] text-white", deg: -5 },
  },
  {
    name: "PHP",
    icon: "php",
    desc: "The powerhouse of the web. Reliable and versatile for backend logic.",
    rotate: 1,
    badge: null,
  },
  {
    name: "Laravel 11",
    icon: "rocket_launch",
    desc: "Full-stack excellence with elegant syntax and robust tools.",
    rotate: -2,
    badge: null,
  },
  {
    name: "MySQL",
    icon: "database",
    desc: "Reliable relational data management for scalable systems.",
    rotate: 2,
    badge: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function DailyDrivers() {
  return (
    <section className="relative z-10">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-8 border-b-4 border-[#1e1c12] pb-2 inline-block">
        Daily Drivers
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {drivers.map((d) => (
          <motion.div
            key={d.name}
            className="bg-white border-4 border-[#1e1c12] p-4 neo-shadow-lg relative cursor-crosshair"
            variants={itemVariants}
            initial={{ rotate: d.rotate }}
            whileHover={{
              rotate: 0,
              x: -2,
              y: -2,
              boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.2 }}
          >
            {d.badge && (
              <div
                className={`absolute -top-3 ${d.badge.side === "right" ? "-right-3" : "-left-3"} ${d.badge.color} border-4 border-[#1e1c12] px-2 py-1 font-[family-name:var(--font-space-mono)] text-xs font-bold z-20`}
                style={{ rotate: `${d.badge.deg}deg` }}
              >
                {d.badge.label}
              </div>
            )}
            <span className="material-symbols-outlined text-5xl mb-4 block">
              {d.icon}
            </span>
            <h3 className="font-[family-name:var(--font-space-mono)] text-2xl font-bold mb-2">
              {d.name}
            </h3>
            <p className="text-[#4b4734] text-sm leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}