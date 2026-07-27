"use client";

import { motion } from "framer-motion";

const line1 = "The journey";
const line2 = "doesn't end here.";
const line3 = "It's only the beginning.";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedLine({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.7,
      }}
      className={className}
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="mr-3 inline-block"
        >
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function JourneyEnding() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="text-center">
        <AnimatedLine
          text={line1}
          className="text-5xl font-bold text-slate-900 dark:text-white md:text-7xl"
        />

        <AnimatedLine
          text={line2}
          className="mt-2 text-5xl font-bold text-blue-600 dark:text-blue-400 md:text-7xl"
        />

        <AnimatedLine
          text={line3}
          className="mt-10 text-xl text-slate-500 dark:text-slate-400"
        />
      </div>
    </section>
  );
}