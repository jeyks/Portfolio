"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, User } from "lucide-react";

import HighlightCards from "./HighlightCards";

const focus = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "UI / UX",
  "Data Analytics",
  "AI Integration",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 transition-colors dark:bg-[#020817]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            dark:opacity-[0.06]
            "
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            color: "#64748b",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
            <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            About Me
          </div>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-slate-900 transition-colors dark:text-white md:text-6xl">
            Building More Than
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Just Websites.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Ring */}

            <div className="absolute -inset-5 rounded-full border border-blue-500/20" />

            {/* Image */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-200
              dark:border-white/10
              bg-white
              dark:bg-slate-900/70  
              shadow-xl
              dark:shadow-blue-500/10
              "
            >
              <Image
                src="/profile1.jpg"
                alt="Profile"
                width={460}
                height={560}
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              My Journey
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              <p>
                My journey into technology started with curiosity about how
                websites work. Over the years, that curiosity evolved into a
                passion for building responsive web applications that combine
                clean code with thoughtful user experiences.
              </p>

              <p>
                During my internship as a Data Administrator, I strengthened my
                problem-solving skills by working with financial datasets,
                automation using Excel VBA, and data validation processes.
                Outside of work, I continue exploring frontend development,
                UI/UX, and AI-powered applications to become a more versatile
                software developer.
              </p>
            </div>

            {/* Focus */}

            <div className="mt-12">
              <h4 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
                Currently Exploring
              </h4>

              <div className="flex flex-wrap gap-3">
                {focus.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      scale: 1.06,
                      y: -4,
                    }}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-slate-100
                      dark:bg-slate-900
                      px-4
                      py-2
                      text-sm
                      text-slate-700
                      dark:text-slate-300
                      transition-all
                      hover:-translate-y-1
                      hover:border-blue-500/40
                      hover:bg-blue-50
                      dark:hover:bg-slate-800
                      hover:text-blue-600
                      dark:hover:text-white
                      "
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}

        {/* Cards */}

        <div className="mt-24">
          <HighlightCards />
        </div>


      </div>
    </section>
  );
}
