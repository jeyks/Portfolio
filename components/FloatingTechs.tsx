"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiJavascript,
  SiFigma,
} from "react-icons/si";

const technologies = [
  {
    icon: FaReact,
    color: "text-cyan-400",
    className: "left-[8%] top-[18%]",
  },
  {
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
    className: "right-[10%] top-[12%]",
  },
  {
    icon: SiTypescript,
    color: "text-blue-500",
    className: "left-[18%] bottom-[20%]",
  },
  {
    icon: SiTailwindcss,
    color: "text-sky-400",
    className: "right-[22%] bottom-[18%]",
  },
  {
    icon: SiLaravel,
    color: "text-red-500",
    className: "left-[45%] top-[12%]",
  },
  {
    icon: FaNodeJs,
    color: "text-green-500",
    className: "right-[42%] bottom-[12%]",
  },
  {
    icon: SiJavascript,
    color: "text-yellow-500",
    className: "left-[80%] top-[55%]",
  },
  {
    icon: SiFigma,
    color: "text-purple-500",
    className: "left-[40%] bottom-[10%]",
  },
];

export default function FloatingTechs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              delay: index * 0.2,
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileHover={{
              scale: 1.15,
            }}
            className={`
              absolute z-0 flex
              ${tech.className}

              scale-50 opacity-10 blur-[2px]
              sm:scale-75 sm:opacity-15
              lg:scale-100 lg:opacity-100 lg:blur-0
            `}
          >
            <div
              className="
                group relative

                flex
                h-10 w-10
                sm:h-12 sm:w-12
                lg:h-16 lg:w-16

                items-center justify-center

                rounded-xl lg:rounded-2xl

                border border-white/10

                bg-white/20
                backdrop-blur-sm

                lg:bg-white/70
                lg:backdrop-blur-xl

                shadow-lg lg:shadow-xl

                transition-all duration-300

                lg:hover:-translate-y-1
                lg:hover:border-blue-400
                lg:hover:bg-gradient-to-br
                lg:hover:from-blue-500/20
                lg:hover:via-cyan-500/10
                lg:hover:to-blue-600/20

                dark:bg-neutral-900/30
                lg:dark:bg-neutral-900/80
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 15,
                }}
              >
                <Icon
                  className={`
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    ${tech.color}
                  `}
                />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
