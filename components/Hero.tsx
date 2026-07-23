"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import TypingText from "./TypingText";
import FloatingTechs from "./FloatingTechs";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-20">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#9992 1px,transparent 1px),linear-gradient(to bottom,#9992 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[140px]" />

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* ================= Container ================= */}

      <div className="section-container relative flex justify-center py-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex max-w-4xl flex-col items-center text-center"
        >
          {/* Badge */}

          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Heading */}

          <motion.div variants={item} className="mt-8">
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl">
              Turning Ideas into
              <br />
              Interactive Experiences.
            </h1>
          </motion.div>
          <div className="mt-2 h-12 flex items-center justify-center">
            <TypingText />
          </div>
          {/* Intro  */}

          <motion.div variants={item}>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              I&apos;m{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {personalInfo.fullName}
              </span>
              , an IT graduate passionate about building responsive web
              applications with modern technologies. I also enjoy solving
              problems through UI/UX, frontend development, and data-driven
              solutions.
            </p>
          </motion.div>

          {/* Buttons */}

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-blue-700"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-neutral-900 dark:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <Download size={18} />
            </motion.a>
          </motion.div>

          {/* Socials */}

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              href={personalInfo.github}
              target="_blank"
              className="rounded-xl border p-3 hover:border-blue-500"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href={personalInfo.linkedin}
              target="_blank"
              className="rounded-xl border p-3 hover:border-blue-500"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href={personalInfo.email}
              target="_blank"
              className="rounded-xl border p-3 hover:border-blue-500"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
          <FloatingTechs />
        </motion.div>
      </div>
    </section>
  );
}
