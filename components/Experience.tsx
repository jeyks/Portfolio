"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="section-heading">Journey</h2>
      <p className="section-subheading">A timeline of my growth and learning in tech.</p>

      <ol className="mt-10 relative border-l border-gray-200 dark:border-gray-800 pl-6 space-y-10">
        {experience.map((job) => (
          <motion.li
            key={job.id}
            className="relative"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="absolute -left-[31px] flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white">
              <Briefcase size={14} />
            </span>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {job.jobTitle}
            </h3>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {job.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {job.startDate} – {job.endDate}
            </p>

            <div className="mt-3">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Responsibilities
              </p>
              <ul className="mt-1.5 list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Key Achievements
              </p>
              <ul className="mt-1.5 list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
