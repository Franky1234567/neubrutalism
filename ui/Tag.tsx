import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`font-[family-name:var(--font-space-mono)] text-xs px-3 py-1 border-2 border-[#1e1c12] bg-[#fff9ed] rounded-full ${className}`}
    >
      {children}
    </span>
  );
}