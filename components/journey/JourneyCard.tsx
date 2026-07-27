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

export default function JourneyCard({ item }: JourneyCardProps) {
  const Icon = icons[item.icon as keyof typeof icons] ?? Briefcase;

  return (
    <motion.article
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="mx-auto mb-20 max-w-5xl lg:mb-32"
    >
      <div
        className="
          overflow-hidden rounded-[28px]
          border border-slate-200/80
          bg-white shadow-sm
          transition-all duration-500
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-xl
          dark:border-blue-500/10
          dark:bg-[#111827]
          dark:hover:border-blue-400/30
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-6 dark:border-white/10 sm:p-8 lg:px-10 lg:py-8">
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
              {item.type}
            </span>

            <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {item.year}
            </h2>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25 sm:h-16 sm:w-16">
            <Icon size={28} />
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-10">
          {/* Left */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {item.title}
            </h3>

            <p className="mt-2 text-base text-blue-600 dark:text-blue-400 sm:text-lg">
              {item.subtitle}
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-8 sm:text-base sm:leading-8">
              {item.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {item.tech.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="group"
          >
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg dark:border-white/10 dark:bg-neutral-950">
              {/* Browser */}
              <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-white/10 sm:px-5 sm:py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-3 h-6 flex-1 rounded-full bg-slate-200 dark:bg-neutral-800 sm:ml-4 sm:h-7" />
              </div>

              {/* Image */}
              <div className="relative hidden h-64 overflow-hidden sm:block sm:h-80 lg:h-[420px]">
                {/* Blurred Background */}
                <Image
                  src={item.image}
                  alt=""
                  fill
                  aria-hidden
                  className="object-cover scale-125 blur-3xl brightness-75"
                />

                {/* Main Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 sm:p-6 lg:p-8"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
