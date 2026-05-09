"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeoButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-[#ffe34f] border-[#1e1c12] text-[#1e1c12]",
  secondary: "bg-[#113ce5] border-[#1e1c12] text-white",
  outline: "bg-white border-[#1e1c12] text-[#1e1c12]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function NeoButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: NeoButtonProps) {
  const base = `inline-flex items-center gap-2 border-4 font-[family-name:var(--font-space-mono)] font-bold uppercase tracking-wide neo-shadow transition-all cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        whileHover={{ x: 2, y: 2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      whileHover={{ x: 2, y: 2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  );
}