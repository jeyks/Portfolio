"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Code2 } from "lucide-react";

import type { JourneyItem } from "@/lib/types";

interface JourneyCardProps {
  item: JourneyItem;
  index: number;
  total: number;
}

const icons = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  trophy: Trophy,
  code: Code2,
};

export default function JourneyCard({ item, index }: JourneyCardProps) {
  const Icon = icons[item.icon as keyof typeof icons] ?? Briefcase;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -6,
      }}
      className="mx-auto mb-32 max-w-5xl"
    >
      <div
        className="
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200/80
            bg-white
            shadow-sm
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-blue-200
            hover:shadow-xl

            dark:bg-[#111827]
            dark:border-blue-500/10
            dark:hover:border-blue-400/30
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-10 py-8 dark:border-white/10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              {item.type}
            </span>

            <h2 className="mt-3 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {item.year}
            </h2>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
            <Icon size={30} />
          </div>
        </div>

        {/* Content */}

        <div className="grid gap-12 p-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left */}

          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">
              {item.subtitle}
            </p>

            <p className="mt-8 leading-8 text-slate-600 dark:text-slate-300">
              {item.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {item.tech.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.35,
            }}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg dark:border-white/10 dark:bg-neutral-950">
              {/* Browser */}

              <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4 dark:border-white/10">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 h-7 flex-1 rounded-full bg-slate-200 dark:bg-neutral-800" />
              </div>

              <div className="relative h-[420px] overflow-hidden bg-white dark:bg-neutral-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
