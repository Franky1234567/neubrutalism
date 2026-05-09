"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Tag from "@/ui/Tag";
import Badge from "@/ui/Badge";

interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  href: string;
  featured?: boolean;
  variant?: "primary" | "secondary" | "full";
}

export default function ProjectCard({
  title,
  problem,
  solution,
  tags,
  href,
  featured = false,
  variant = "secondary",
}: ProjectCardProps) {
  if (variant === "full") {
    return (
      <div className="w-full border-4 border-[#1e1c12] bg-[#113ce5] text-white neo-shadow-lg group">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-[#1e1c12] flex flex-col justify-center">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-6">
              {title}
            </h3>
            <p className="text-xl mb-8 opacity-90">{problem}</p>
            <motion.a
              href={href}
              className="self-start bg-[#ffe34f] text-[#1e1c12] font-[family-name:var(--font-space-mono)] text-sm font-bold px-8 py-4 border-4 border-[#1e1c12] neo-shadow uppercase tracking-wide inline-block"
              whileHover={{ x: 2, y: 2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              transition={{ duration: 0.1 }}
            >
              {solution}
            </motion.a>
          </div>
          <div className="bg-[#f4eddd] p-8 relative overflow-hidden flex items-center justify-center min-h-[300px]">
            <div className="absolute w-64 h-64 border-8 border-[#1e1c12] rounded-full -top-10 -right-10 opacity-20" />
            <div className="w-32 h-32 bg-[#ffe34f] border-4 border-[#1e1c12] transform rotate-12 neo-shadow-lg absolute" />
            <div className="w-48 h-12 bg-[#1e1c12] absolute -rotate-45" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border-4 border-[#1e1c12] neo-shadow-lg group relative ${
        variant === "primary" ? "bg-[#ffe34f]" : "bg-white"
      }`}
    >
      {featured && (
        <Badge
          variant="blue"
          rotate={6}
          className="absolute -top-6 -right-6 z-10"
        >
          FEATURED
        </Badge>
      )}
      <div className="p-8 md:p-12 border-b-4 border-[#1e1c12] bg-white">
        <div className="flex gap-2 mb-6 flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-6">
          {title}
        </h3>
        <div className="space-y-4 text-[#4b4734]">
          <p>
            <strong className="text-[#1e1c12] font-bold uppercase">Problem:</strong>{" "}
            {problem}
          </p>
          <p className="flex items-start gap-2">
            <span className="text-[#113ce5] mt-1">→</span>
            {solution}
          </p>
        </div>
      </div>
      <div
        className={`p-6 flex justify-end ${
          variant === "primary" ? "bg-[#ffe34f]" : "bg-white"
        }`}
      >
        <Link
          href={href}
          className="font-[family-name:var(--font-space-mono)] text-sm font-bold uppercase tracking-wide flex items-center gap-2 group-hover:underline decoration-4 underline-offset-4"
        >
          Read Case Study
          <span className="inline-block transition-transform duration-150 group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </div>
  );
}