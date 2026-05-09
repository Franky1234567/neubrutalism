"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeoCardProps {
  children: ReactNode;
  rotate?: number;
  className?: string;
  bg?: string;
}

export default function NeoCard({
  children,
  rotate = 0,
  className = "",
  bg = "bg-white",
}: NeoCardProps) {
  return (
    <motion.div
      className={`border-4 border-[#1e1c12] neo-shadow-lg ${bg} ${className}`}
      initial={{ rotate }}
      whileHover={{
        rotate: 0,
        x: 4,
        y: 4,
        boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
      }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
}