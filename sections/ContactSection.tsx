"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "EMAIL ME",
    icon: "mail",
    href: "mailto:frengkyrifdulm@gmail.com",
    bg: "bg-[#ffe34f]",
    text: "text-[#1e1c12]",
    rotate: -1,
  },
  {
    label: "GITHUB",
    icon: "code",
    href: "https://github.com/Franky1234567",
    bg: "bg-white",
    text: "text-[#1e1c12]",
    rotate: 1,
  },
  {
    label: "LINKEDIN",
    icon: "work",
    href: "https://www.linkedin.com/in/frankyrifdulmannan/",
    bg: "bg-[#113ce5]",
    text: "text-white",
    rotate: -0.5,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-8 py-24 border-b-4 border-[#1e1c12] bg-[#fff9ed] relative overflow-hidden"
    >
      {/* Decorative bg circles */}
      <div className="absolute top-20 right-20 w-96 h-96 border-4 border-[#1e1c12]/10 rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-[#113ce5]/5 rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

        {/* Left — Headline */}
        <div className="flex-1 relative flex flex-col justify-center">
          {/* Sticker */}
          <motion.div
            className="absolute -top-8 left-4 lg:-top-12 lg:-left-8 z-20"
            initial={{ rotate: -6 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#113ce5] text-white border-4 border-[#1e1c12] px-4 py-2 font-[family-name:var(--font-space-mono)] text-sm font-bold neo-shadow whitespace-nowrap">
              REPLYING IN &lt; 24H
            </div>
          </motion.div>

          <motion.h2
            className="font-[family-name:var(--font-space-grotesk)] text-[clamp(48px,7vw,80px)] font-bold uppercase leading-[0.9] break-words relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="relative inline-block mt-4">
              <span className="relative z-10">LOUD</span>
              {/* Hand-drawn underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-6 text-[#ffe34f] -z-10"
                preserveAspectRatio="none"
                viewBox="0 0 200 20"
              >
                <path
                  d="M5,15 Q100,5 195,15"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="12"
                />
              </svg>
            </span>
          </motion.h2>

          {/* Local time box — desktop */}
          <motion.div
            className="mt-12 hidden lg:inline-flex items-center gap-4 bg-white border-4 border-[#1e1c12] px-6 py-4 neo-shadow self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <span className="material-symbols-outlined text-4xl text-[#113ce5]">schedule</span>
            <div>
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#4b4734] uppercase tracking-widest mb-1">
                Local Time
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-none">
                Sumenep, Indonesia
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — Contact Hub */}
        <div className="flex-1 flex flex-col gap-6 justify-center relative z-10">
          <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#4b4734] uppercase tracking-widest border-l-4 border-[#6d5e00] pl-4 mb-2">
            Contact Hub
          </p>

          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group w-full ${link.bg} border-4 border-[#1e1c12] p-6 neo-shadow-lg flex justify-between items-center`}
              initial={{ opacity: 0, rotate: link.rotate }}
              whileInView={{ opacity: 1, rotate: link.rotate }}
              whileHover={{ x: 4, y: 4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <span className={`font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase ${link.text} group-hover:text-[#113ce5] ${link.bg === "bg-[#113ce5]" ? "group-hover:text-[#ffe34f]" : ""} transition-colors`}>
                {link.label}
              </span>
              <span className={`material-symbols-outlined text-5xl ${link.text} group-hover:rotate-12 transition-transform`}>
                {link.icon}
              </span>
            </motion.a>
          ))}

          {/* Local time — mobile */}
          <div className="mt-6 lg:hidden inline-flex items-center gap-4 bg-white border-4 border-[#1e1c12] px-6 py-4 neo-shadow self-start">
            <span className="material-symbols-outlined text-4xl text-[#113ce5]">schedule</span>
            <div>
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#4b4734] uppercase tracking-widest mb-1">
                Local Time
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-none">
                Sumenep, Indonesia
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}