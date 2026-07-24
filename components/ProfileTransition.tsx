"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
} from "react-icons/si";

export default function ProfileImage() {
  const { resolvedTheme } = useTheme();

  const defaultImage =
    resolvedTheme === "light" ? "/sunglass.jpg" : "/profile1.jpg";

  // Mouse Position

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [10, -10]), {
    stiffness: 180,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-10, 10]), {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);

    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
        rotate: 4,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 4,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]"
      />

      {/* Glass Card */}

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.03,
          rotate: 1,
        }}
        className="group relative w-[300px] sm:w-[360px] lg:w-[420px] overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl dark:bg-neutral-900/30"
      >
        {/* Gradient Border */}

        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/30 opacity-60" />

        <div className="relative z-10 flex flex-col items-center justify-center p-4">
          {/* Image */}

          <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src={defaultImage}
              alt="Profile"
              fill
              priority
              className="
              object-cover shadow-2xl transition-opacity duration-500 "
            />

            <Image
              src="/SmileProfile.jpg"
              alt="Profile"
              fill
              priority
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
