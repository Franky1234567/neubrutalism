"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StackCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  rotate?: number;
  badge?: { label: string; variant?: "yellow" | "blue" };
}

export default function StackCard({
  name,
  description,
  icon,
  rotate = 0,
  badge,
}: StackCardProps) {
  return (
    <motion.div
      className="bg-white border-4 border-[#1e1c12] p-4 neo-shadow-lg relative cursor-crosshair"
      initial={{ rotate }}
      whileHover={{
        rotate: 0,
        x: -2,
        y: -2,
        boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
      }}
      transition={{ duration: 0.2 }}
    >
      {badge && (
        <div
          className={`absolute -top-3 ${badge.variant === "blue" ? "-left-3 bg-[#395afe] text-white -rotate-[5deg]" : "-right-3 bg-[#ffe34f] text-[#1e1c12] rotate-[5deg]"} border-4 border-[#1e1c12] px-2 py-1 font-[family-name:var(--font-space-mono)] text-xs font-bold z-20`}
        >
          {badge.label}
        </div>
      )}
      <div className="text-5xl mb-4 block">{icon}</div>
      <h3 className="font-[family-name:var(--font-space-mono)] text-2xl font-bold mb-2">
        {name}
      </h3>
      <p className="text-[#4b4734]">{description}</p>
    </motion.div>
  );
}