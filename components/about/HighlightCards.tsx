"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  FolderKanban,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Education",
    subtitle: "BS Information Technology",
    description:
      "Graduated Magna Cum Laude from National University - Laguna with a strong foundation in web development, programming, and IT principles.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Internship",
    subtitle: "Data Administrator",
    description:
      "Worked with financial datasets, Excel VBA automation, and reporting workflows at National Reinsurance Corporation.",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Projects",
    subtitle: "4 Major Projects",
    description:
      "Developed full-stack web applications, IoT solutions, mobile systems, and this portfolio.",
    icon: FolderKanban,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Achievements",
    subtitle: "PacketHACKS Top 15",
    description:
      "Semi-finalist in PacketHACKS x HackTheClimate 2025, developing an IoT-based air quality monitoring solution.",
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
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
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function HighlightCards() {
  return (
    <section className="mt-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                dark:border-white/10
                bg-white/80
                dark:bg-slate-900/70
                p-7
                backdrop-blur-xl
                shadow-sm
                dark:shadow-none
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-xl
                hover:shadow-blue-500/10
                "
            >
              {/* Background Glow */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}

              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>

             <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">{card.subtitle}</p>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {card.description}
              </p>

              {/* Hover Arrow */}

              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{}}
                className="mt-8 flex items-center text-blue-400 opacity-0 transition group-hover:opacity-100"
              >
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Learn More
              </motion.div>

              {/* Decorative Circle */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
