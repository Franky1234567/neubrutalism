"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "@/components/NavLink";
import NeoButton from "@/ui/NeoButton";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#fff9ed] border-b-4 border-[#1e1c12] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-8 py-4">
      <motion.div
        whileHover={{ x: 2, y: 2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold border-4 border-[#1e1c12] bg-[#ffe34f] px-4 py-1 neo-shadow-sm block"
        >
          FRANKY
        </Link>
      </motion.div>

      <ul className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>

      <NeoButton href="/contact" className="hidden md:inline-flex">
        Hire Me →
      </NeoButton>

      <button
        className="md:hidden border-4 border-[#1e1c12] p-2 bg-[#f4eddd] neo-shadow-sm"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-0.5 bg-[#1e1c12] mb-1" />
        <span className="block w-5 h-0.5 bg-[#1e1c12] mb-1" />
        <span className="block w-5 h-0.5 bg-[#1e1c12]" />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#fff9ed] border-b-4 border-[#1e1c12] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <NeoButton href="/contact" className="self-start mt-2">
              Hire Me →
            </NeoButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}