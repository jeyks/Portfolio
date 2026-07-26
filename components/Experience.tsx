"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { journey } from "@/data/portfolio";

const icons = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  trophy: Trophy,
  code: Code2,
};

export default function Experience() {
  return (
    <SectionWrapper id="journey">
      <h2 className="section-heading">Journey</h2>
      <p className="section-subheading">
        A timeline of my growth and learning in tech.
      </p>

      <ol className="relative mt-10 space-y-10 border-l border-gray-200 pl-6 dark:border-gray-800">
        {journey.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons] ?? Briefcase;

          return (
            <motion.li
              key={item.id}
              className="relative"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="absolute -left-[31px] flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                <Icon size={14} />
              </span>

              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {item.year}
              </p>

              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}