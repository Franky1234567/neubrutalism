import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "yellow" | "blue" | "white" | "dark";
  rotate?: number;
  className?: string;
}

const variants = {
  yellow: "bg-[#ffe34f] text-[#1e1c12]",
  blue: "bg-[#113ce5] text-white",
  white: "bg-white text-[#1e1c12]",
  dark: "bg-[#1e1c12] text-[#fff9ed]",
};

export default function Badge({
  children,
  variant = "yellow",
  rotate = 0,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block border-4 border-[#1e1c12] px-4 py-2 font-[family-name:var(--font-space-mono)] text-xs font-bold uppercase tracking-widest neo-shadow ${variants[variant]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}