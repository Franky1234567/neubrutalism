"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`font-medium transition-transform duration-100 hover:translate-x-[2px] hover:translate-y-[2px] ${
        isActive
          ? "text-[#113ce5] font-bold underline decoration-4 underline-offset-8"
          : "text-[#1e1c12] hover:text-[#113ce5] hover:underline decoration-4 underline-offset-4"
      }`}
    >
      {children}
    </Link>
  );
}