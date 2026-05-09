"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/layouts/PageLayout";

const stack = ["React.js", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "Midtrans"];

const features = [
  "Course Enrollment System",
  "Interactive Video Player",
  "Progress & Enrollment Tracking",
  "Secure Checkout Flow",
];

export default function VidioBelajarPage() {
  return (
    <PageLayout>
      <div className="w-full px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">

          {/* Back button */}
          <div>
            <motion.div
              whileHover={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
              transition={{ duration: 0.1 }}
              className="inline-block"
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 bg-white border-4 border-[#1e1c12] px-4 py-2 font-[family-name:var(--font-space-mono)] text-sm font-bold neo-shadow-sm"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to Work
              </Link>
            </motion.div>
          </div>

          {/* Hero */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left — title */}
            <div className="col-span-1 md:col-span-8 flex flex-col gap-6 z-10">
              <div className="inline-flex -rotate-2 w-max">
                <span className="bg-[#113ce5] text-white font-[family-name:var(--font-space-mono)] text-xs border-4 border-[#1e1c12] px-3 py-1 neo-shadow uppercase">
                  Case Study // 2024
                </span>
              </div>

              <motion.h1
                className="font-[family-name:var(--font-space-grotesk)] text-[clamp(40px,6vw,80px)] font-bold leading-none bg-white border-4 border-[#1e1c12] neo-shadow-lg p-8 inline-block mt-4 rotate-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Vidio Belajar: <br />
                <span className="text-[#113ce5]">E-Learning</span> Platform
              </motion.h1>

              <motion.p
                className="font-[family-name:var(--font-inter)] text-xl leading-[1.6] bg-[#faf3e3] border-4 border-[#1e1c12] p-4 max-w-2xl neo-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Scaling an educational video platform with secure payment
                processing within the Harisenin.com Bootcamp framework.
              </motion.p>
            </div>

            {/* Right — Tech stack */}
            <motion.div
              className="col-span-1 md:col-span-4 md:mt-20 z-20"
              initial={{ opacity: 0, rotate: -1 }}
              animate={{ opacity: 1, rotate: -1 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#ffe34f] border-4 border-[#1e1c12] p-4 neo-shadow">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold border-b-4 border-[#1e1c12] pb-2 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white border-2 border-[#1e1c12] px-2 py-1 font-[family-name:var(--font-space-mono)] text-xs neo-shadow-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Feature Image Banner */}
          <section className="w-full relative">
            <div className="absolute -top-6 -right-6 z-20 bg-[#ffe34f] border-4 border-[#1e1c12] neo-shadow rotate-6 px-4 py-2 font-[family-name:var(--font-space-grotesk)] font-bold text-xl flex items-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              Platform Preview
            </div>
            <div className="w-full aspect-video bg-white border-4 border-[#1e1c12] neo-shadow-lg overflow-hidden relative">
              <img
                src="/vidiobelajar.png"
                alt="Vidio Belajar Platform Preview"
                className="w-full h-full object-contain bg-[#f4eddd]"
              />
            </div>
          </section>

          {/* Details Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-8">
            {/* Left — The Execution */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-[#113ce5] text-white border-4 border-[#1e1c12] flex items-center justify-center neo-shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
                  The Execution
                </h2>
              </div>

              <motion.div
                className="bg-white border-4 border-[#1e1c12] p-8 neo-shadow relative mt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {/* Decorative tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#e9e2d2] border-4 border-[#1e1c12] opacity-80 -rotate-2" />

                <p className="font-[family-name:var(--font-inter)] text-[#4b4734] mb-6">
                  Integrated Midtrans payment gateway for real-time transactions,
                  built a robust RESTful API with JWT authentication to ensure
                  data security, and optimized video delivery architecture for
                  seamless playback.
                </p>

                <ul className="space-y-4 font-[family-name:var(--font-space-mono)] text-sm">
                  {features.map((f, i) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 ${i < features.length - 1 ? "border-b-2 border-[#1e1c12] pb-3" : ""}`}
                    >
                      <span className="material-symbols-outlined text-[#113ce5] shrink-0">
                        check_box
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right — The Result */}
            <div className="flex flex-col gap-4 md:pt-24">
              <motion.div
                className="bg-[#ffe34f] border-4 border-[#1e1c12] p-8 neo-shadow-lg"
                initial={{ opacity: 0, rotate: 1 }}
                whileInView={{ opacity: 1, rotate: 1 }}
                whileHover={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl">emoji_events</span>
                  The Result
                </h2>

                <p className="font-[family-name:var(--font-inter)] text-xl leading-[1.6] mb-6 p-4 bg-white border-4 border-[#1e1c12] neo-shadow-sm">
                  A fully responsive, scalable platform delivered successfully
                  within the intense timeline of the Harisenin.com Bootcamp
                  framework.
                </p>

                <div className="mt-8 flex justify-end">
                  <motion.a
                    href="https://vidio-belajar.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#113ce5] text-white font-[family-name:var(--font-space-grotesk)] text-xl font-bold px-6 py-3 border-4 border-[#1e1c12] neo-shadow"
                    whileHover={{ x: 2, y: 2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                    transition={{ duration: 0.1 }}
                  >
                    View Live Project
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Decorative star */}
              <div className="self-end mr-12 mt-4 rotate-12">
                <svg fill="none" height="60" viewBox="0 0 60 60" width="60">
                  <path
                    d="M30 0L33.7297 19.3807L51.2132 8.7868L40.6193 26.2703L60 30L40.6193 33.7297L51.2132 51.2132L33.7297 40.6193L30 60L26.2703 40.6193L8.7868 51.2132L19.3807 33.7297L0 30L19.3807 26.2703L8.7868 8.7868L26.2703 19.3807L30 0Z"
                    fill="#1e1c12"
                  />
                </svg>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}