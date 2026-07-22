"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    className: "-left-24 top-8",
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "right-[-70px] top-16",
    color: "text-white dark:text-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "-left-28 bottom-32",
    color: "text-blue-500",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    className: "right-[-60px] bottom-20",
    color: "text-sky-400",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    className: "left-1/2 -bottom-16 -translate-x-1/2",
    color: "text-red-500",
  },
];

export default function ProfileImage() {
  const { resolvedTheme } = useTheme();

  const defaultImage =
    resolvedTheme === "light"
      ? "/sunglass.jpg"
      : "/profile1.jpg";

  // Mouse Position

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-150, 150], [10, -10]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-150, 150], [-10, 10]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
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
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-center justify-center"
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
        className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]"
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
        }}
        className="group relative w-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl dark:bg-neutral-900/30"
      >
        {/* Gradient Border */}

        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/30 opacity-60" />

        <div className="relative p-4">

          {/* Name */}

          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
            Justine Kyle Resureccion
          </h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Frontend Developer
          </p>

          {/* Image */}

          <div className="relative mt-8 mx-auto h-[280px] w-[280px] overflow-hidden rounded-3xl">
            <Image
              src={defaultImage}
              alt="Profile"
              fill
              priority
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            <Image
              src="/SmileProfile.jpg"
              alt="Profile"
              fill
              priority
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          {/* Tech Stack 
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              {
                name: "React",
                icon: FaReact,
                color: "text-cyan-400",
              },
              {
                name: "Next.js",
                icon: SiNextdotjs,
                color: "text-gray-900 dark:text-white",
              },
              {
                name: "TypeScript",
                icon: SiTypescript,
                color: "text-blue-500",
              },
              {
                name: "Tailwind",
                icon: SiTailwindcss,
                color: "text-sky-400",
              },
              {
                name: "Laravel",
                icon: SiLaravel,
                color: "text-red-500",
              },
              {
                name: "Node.js",
                icon: FaNodeJs,
                color: "text-green-500",
              },
            ].map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: 1,
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 0.8 + index * 0.1,
                    },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    },
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                  }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md dark:bg-neutral-900/70"
                >
                  <Icon className={`text-lg ${tech.color}`} />
                  <span className="text-sm font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div> */}
        </div>
      </motion.div> 

      {/* Floating Tech Icons */}

      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                delay: 0.5 + index * 0.15,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                delay: index * 0.4,
              },
            }}
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            className={`absolute hidden lg:flex ${tech.className}`}
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/80 px-4 py-3 shadow-2xl backdrop-blur-xl dark:bg-neutral-900/80">
              <Icon className={`text-2xl ${tech.color}`} />
              <span className="text-sm font-semibold">
                {tech.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}