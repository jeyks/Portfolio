"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiFigma,
  SiGoogle,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFileExcel } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { Palette } from "lucide-react";

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#888888" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "Figma", icon: SiFigma, color: "#A259FF" },
  { name: "Canva", icon: Palette, color: "#00C4CC" },
  { name: "Google Workspace", icon: SiGoogle, color: "#4285F4" },
  { name: "Excel", icon: FaFileExcel, color: "#217346" },
  { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
];

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -10,
    scale: 1.08,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 18,
      mass: 0.8,
    },
  },
};

const iconVariants = {
  rest: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 8,
    scale: 1.15,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 14,
    },
  },
};

export default function TechCarousel() {
 

  return (
    <div
      className="relative overflow-hidden py-8"
    >
      <div
        className="marquee flex w-max gap-6"
        
      >
        {[...techStack, ...techStack].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={`${tech.name}-${index}`}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-slate-900
                px-5
                py-4
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-xl
                cursor-pointer
              "
            >
              <motion.div variants={iconVariants}>
                <Icon
                  size={32}
                  style={{ color: tech.color }}
                />
              </motion.div>

              <span className="whitespace-nowrap font-medium text-slate-700 dark:text-slate-200">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background via-background/70 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background via-background/70 to-transparent" />
    </div>
  );
} 