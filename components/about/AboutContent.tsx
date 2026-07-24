"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Rocket,
} from "lucide-react";

import { personalInfo } from "@/data/portfolio";

const stats = [
  {
    icon: GraduationCap,
    value: "2026",
    label: "Magna Cum Laude",
  },
  {
    icon: Briefcase,
    value: "3",
    label: "Major Projects",
  },
  {
    icon: Rocket,
    value: "Top 15",
    label: "PacketHACKS",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function AboutContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Heading */}

      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          <MapPin size={16} />
          Laguna, Philippines
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
          Passionate About Building
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Modern Digital Experiences
          </span>
        </h2>
      </motion.div>

      {/* Story */}

      <motion.div
        variants={item}
        className="space-y-6 text-lg leading-8 text-slate-400"
      >
        <p>{personalInfo.introduction}</p>

        <p>{personalInfo.summary}</p>

        <p>{personalInfo.careerGoals}</p>
      </motion.div>

      {/* Stats */}

      <motion.div
        variants={item}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl transition-all hover:border-blue-500/40"
            >
              <Icon className="mb-4 h-7 w-7 text-blue-400" />

              <h3 className="text-2xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}

      <motion.div
        variants={item}
        className="flex flex-wrap gap-4 pt-4"
      >
        <motion.a
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          href={personalInfo.resumeUrl}
          className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-medium text-white shadow-lg shadow-blue-500/20"
        >
          <Download size={18} />
          Download Resume
        </motion.a>

        <motion.a
          whileHover={{
            x: 5,
          }}
          href="#projects"
          className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
        >
          View Projects
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}