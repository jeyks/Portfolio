"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, User } from "lucide-react";

import PhotoStack from "./PhotoStack";

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
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
            Outside the IDE
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every developer has a story beyond the screen. Here's a little of
            mine.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="mt-12 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <PhotoStack />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              More than a Developer
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              <p>
                Hi! I'm Justine. When I'm away from my computer, you'll probably
                find me spending time with my family, serving as a church
                organist, going for a walk, enjoying ice cream, or simply making
                the most of everyday moments.
              </p>

              <p>
                I enjoy experiences that help me slow down, reflect, and
                appreciate the people around me. They remind me that growth
                isn't just about learning new skills—it's also about becoming a
                better person.
              </p>

              <p>
                Whether I'm exploring a new place, learning something new, or
                creating memories with friends and family, I try to stay curious
                and appreciate the journey. Those experiences shape who I am,
                both personally and professionally.
              </p>
            </div>

            {/* Quote */}

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-10 border-l-4 border-blue-500 pl-5 italic text-slate-500 dark:text-slate-400"
            >
              "Behind every line of code is a life filled with stories,
              experiences, and people who inspire it."
            </motion.blockquote>

            {/* Current Focus 

            <div className="mt-12">
              <h4 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
                Currently Exploring
              </h4>

              <div className="flex flex-wrap gap-3">
                {focus.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
