"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/layouts/PageLayout";

const stack = [
  { label: "Next.js", bg: "bg-[#dee0ff]" },
  { label: "TypeScript", bg: "bg-[#dee0ff]" },
  { label: "Tailwind", bg: "bg-[#dee0ff]" },
  { label: "Express", bg: "bg-[#dee0ff]" },
  { label: "PostgreSQL", bg: "bg-[#dee0ff]" },
  { label: "Groq (Llama 3.3)", bg: "bg-[#ffe34f]" },
  { label: "Gemini", bg: "bg-[#ffe34f]" },
];

const features = [
  {
    icon: "api",
    title: "RESTful API Integration",
    desc: "Secure backend powered by Laravel 11 and Sanctum for robust authentication and data management.",
  },
  {
    icon: "history",
    title: "Generation History & Management",
    desc: "Comprehensive tracking with advanced search and pagination to manage thousands of generated pages.",
  },
  {
    icon: "palette",
    title: "Distinct UI Templates",
    desc: "Outputs map to 3 distinct frontend templates: Modern, Minimal, and Bold (Neubrutalist).",
  },
];

export default function AISalesCraftPage() {
  return (
    <PageLayout>
      <div className="w-full bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col gap-12">

          {/* Back button */}
          <div>
            <motion.div whileHover={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }} transition={{ duration: 0.1 }} className="inline-block">
              <Link href="/#work" className="inline-flex items-center gap-2 bg-white border-4 border-[#1e1c12] px-4 py-2 font-[family-name:var(--font-space-mono)] text-sm font-bold neo-shadow-sm">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to Work
              </Link>
            </motion.div>
          </div>

          {/* Hero */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left — big yellow title card */}
            <motion.div
              className="col-span-1 md:col-span-8 bg-[#ffe34f] border-4 border-[#1e1c12] neo-shadow-lg p-6 md:p-12 relative z-10"
              initial={{ opacity: 0, rotate: -1 }}
              animate={{ opacity: 1, rotate: -1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -top-6 -right-6 bg-[#113ce5] text-white font-[family-name:var(--font-space-mono)] text-sm font-bold px-4 py-2 border-4 border-[#1e1c12] rotate-6 z-20 neo-shadow-sm">
                CASE STUDY
              </div>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(40px,6vw,80px)] font-bold leading-none mb-4">
                AI Sales Craft
              </h1>
              <p className="font-[family-name:var(--font-space-grotesk)] text-3xl text-[#746400] leading-tight">
                Full Stack AI Generator
              </p>
            </motion.div>

            {/* Right — stack card */}
            <motion.div
              className="col-span-1 md:col-span-4 flex flex-col gap-4 mt-6 md:mt-0"
              initial={{ opacity: 0, rotate: 2 }}
              animate={{ opacity: 1, rotate: 2 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white border-4 border-[#1e1c12] neo-shadow p-4">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-2 border-b-4 border-[#1e1c12] pb-2">
                  The Stack
                </h3>
                <div className="flex flex-wrap gap-2 mt-4 font-[family-name:var(--font-space-mono)] text-xs">
                  {stack.map((s) => (
                    <span key={s.label} className={`${s.bg} border-2 border-[#1e1c12] px-2 py-1 font-bold`}>
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Problem */}
            <motion.div
              className="col-span-1 md:col-span-5 bg-[#ffdad6] border-4 border-[#1e1c12] neo-shadow p-6"
              initial={{ opacity: 0, rotate: -1 }}
              whileInView={{ opacity: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4 border-b-4 border-[#1e1c12] pb-2">
                <span className="material-symbols-outlined text-4xl">warning</span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">The Problem</h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-xl leading-[1.6]">
                Sales teams were drowning in manual outreach. They needed faster, more personalized lead engagement strategies that didn't feel generic. The bottleneck was crafting high-converting, tailored sales pages for individual prospects at scale.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              className="col-span-1 md:col-span-7 bg-white border-4 border-[#1e1c12] neo-shadow p-6"
              initial={{ opacity: 0, rotate: 1 }}
              whileInView={{ opacity: 1, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4 border-b-4 border-[#1e1c12] pb-2">
                <span className="material-symbols-outlined text-4xl text-[#113ce5]">lightbulb</span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">The Solution</h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-xl leading-[1.6] mb-4">
                Built a full-stack AI application designed to instantly generate structured, highly-converting sales pages. The core innovation lies in the{" "}
                <span className="marker-underline-blue font-bold">dual AI integration</span>{" "}
                with an automatic fallback mechanism (Groq → Gemini).
              </p>
              <div className="bg-[#e9e2d2] border-4 border-[#1e1c12] p-4 flex items-center justify-center gap-4 flex-wrap">
                <span className="font-[family-name:var(--font-space-mono)] text-sm font-bold bg-white px-3 py-1 border-4 border-[#1e1c12]">Groq API</span>
                <span className="material-symbols-outlined">arrow_forward</span>
                <span className="font-[family-name:var(--font-space-mono)] text-sm font-bold bg-[#ffdad6] px-3 py-1 border-4 border-[#1e1c12] -rotate-3">Failure Detected</span>
                <span className="material-symbols-outlined">arrow_forward</span>
                <span className="font-[family-name:var(--font-space-mono)] text-sm font-bold bg-[#ffe34f] px-3 py-1 border-4 border-[#1e1c12] rotate-2">Gemini Fallback</span>
              </div>
            </motion.div>

            {/* Image / Visual */}
            <motion.div
              className="col-span-1 md:col-span-12 bg-white border-4 border-[#1e1c12] neo-shadow h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <img
                src="/salescraft.png"
                alt="AI Sales Craft Platform Preview"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="col-span-1 md:col-span-8 bg-[#faf3e3] border-4 border-[#1e1c12] neo-shadow p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold border-b-4 border-[#1e1c12] pb-2">
                Key Features
              </h2>
              <ul className="flex flex-col gap-4">
                {features.map((f) => (
                  <li key={f.title} className="flex gap-4 items-start bg-white border-4 border-[#1e1c12] p-3 neo-shadow-2">
                    <span className="material-symbols-outlined mt-1 text-[#113ce5] shrink-0">{f.icon}</span>
                    <div>
                      <strong className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold block mb-1">{f.title}</strong>
                      <span className="font-[family-name:var(--font-inter)] text-[#4b4734]">{f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Result */}
            <motion.div
              className="col-span-1 md:col-span-4 bg-[#43fafe] border-4 border-[#1e1c12] neo-shadow p-6 flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, rotate: -2 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              whileHover={{ rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <span className="material-symbols-outlined text-6xl mb-4">rocket_launch</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-2">The Result</h2>
              <div className="font-[family-name:var(--font-space-grotesk)] text-[clamp(48px,6vw,80px)] font-bold my-4 bg-white border-4 border-[#1e1c12] px-4 py-2 w-full neo-shadow-sm">
                99.9%
              </div>
              <p className="font-[family-name:var(--font-inter)] text-xl font-bold leading-[1.6]">
                Uptime achieved via custom fallback logic. High-performance, uninterrupted generation for enterprise sales teams.
              </p>
            </motion.div>

          </section>

          {/* Live Link */}
          <div className="flex justify-center pb-8">
            <motion.a
              href="https://content-generator-fe-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#113ce5] text-white font-[family-name:var(--font-space-grotesk)] text-2xl font-bold px-10 py-5 border-4 border-[#1e1c12] neo-shadow-lg"
              whileHover={{ x: 4, y: 4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              transition={{ duration: 0.1 }}
            >
              View Live Project
              <span className="material-symbols-outlined text-3xl">arrow_forward</span>
            </motion.a>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}