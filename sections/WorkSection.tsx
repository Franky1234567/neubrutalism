"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "AI Sales Craft",
    problem: "Sales teams needed faster, more personalized lead engagement strategies.",
    solution: "Engineered an AI-powered sales optimization platform using Next.js and Laravel. Outcome: Improved lead response efficiency and sales team productivity.",
    tags: ["Next.js", "TypeScript", "Laravel", "AI Integration"],
    href: "/work/ai-sales-craft",
    featured: true,
    variant: "primary" as const,
    width: "md:w-2/3",
  },
  {
    title: "Vidio Belajar",
    problem: "Scaling an educational video platform with secure payment processing.",
    solution: "Integrated Midtrans payment gateway and optimized video delivery architecture.",
    tags: ["React.js", "Node.js", "Midtrans"],
    href: "/work/vidio-belajar",
    featured: false,
    variant: "secondary" as const,
    width: "md:w-[45%] self-end",
  },
  {
    title: "Personal Portfolio",
    problem: "A brutalist exploration of personal branding, focusing on stark contrasts, heavy borders, and unapologetic typography.",
    solution: "Inspect Code",
    tags: [],
    href: "#",
    featured: false,
    variant: "full" as const,
    width: "w-full",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="w-full px-8 py-24 border-b-4 border-[#1e1c12] bg-[#f4eddd] relative"
    >
      <div className="max-w-7xl mx-auto">
      <motion.h2
        className="font-[family-name:var(--font-space-grotesk)] text-[clamp(40px,6vw,80px)] font-bold mb-16 uppercase inline-block bg-[#ffe34f] border-4 border-[#1e1c12] px-6 py-2 neo-shadow"
        initial={{ opacity: 0, x: -30, rotate: -2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        SELECTED WORK
      </motion.h2>

      <div className="flex flex-col gap-16">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className={p.width}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <ProjectCard
              title={p.title}
              problem={p.problem}
              solution={p.solution}
              tags={p.tags}
              href={p.href}
              featured={p.featured}
              variant={p.variant}
            />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}