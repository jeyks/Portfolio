"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.06 },
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="h-full w-full"
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 "
        />

        {/* Hover Actions */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              y: 20,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 flex items-center justify-center gap-4"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View Project
                <ArrowUpRight size={18} />
              </span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <Github size={20} />
            </a>
          )}
        </motion.div>

        {/* Tech Pills */}
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur dark:bg-slate-900/80 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.h3
              variants={{
                rest: { y: 0 },
                hover: { y: -2 },
              }}
              transition={{ duration: 0.25 }}
              className="text-2xl font-bold text-slate-900 dark:text-white"
            >
              {project.title}
            </motion.h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          </div>

          <motion.div
            variants={{
              rest: {
                rotate: 0,
                x: 0,
              },
              hover: {
                rotate: 45,
                x: 4,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="rounded-full border border-slate-200 p-3 dark:border-slate-700"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}