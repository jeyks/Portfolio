"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const floatingIcons = [
  {
    icon: Code2,
    className: "-left-5 top-10",
    delay: 0,
  },
  {
    icon: Sparkles,
    className: "-right-4 top-1/4",
    delay: 0.5,
  },
  {
    icon: GraduationCap,
    className: "-left-4 bottom-20",
    delay: 1,
  },
  {
    icon: Briefcase,
    className: "-right-5 bottom-10",
    delay: 1.5,
  },
];

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Decorative Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-[2rem] border border-blue-500/20"
      />

      {/* Floating Icons */}

      {floatingIcons.map(({ icon: Icon, className, delay }) => (
        <motion.div
          key={className}
          className={`absolute z-20 ${className}`}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay,
          }}
        >
          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3 backdrop-blur-xl">
            <Icon className="h-5 w-5 text-blue-400" />
          </div>
        </motion.div>
      ))}

      {/* Image */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-blue-500/10"
      >
        <Image
          src="/profile.png"
          alt="Justine Kyle Resureccion"
          width={500}
          height={650}
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Bottom Info */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <p className="text-2xl font-bold text-white">
            Justine Kyle Resureccion
          </p>

          <p className="mt-1 text-sm text-slate-300">
            BS Information Technology
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
              Frontend Developer
            </span>

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              UI / UX
            </span>

            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Open to Work
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Dot Grid */}

      <div className="absolute -right-12 -top-12 -z-10 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-blue-400"
          />
        ))}
      </div>
    </motion.div>
  );
}