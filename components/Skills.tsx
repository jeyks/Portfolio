"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-heading">Skills</h2>
      <p className="section-subheading">
        The technologies, frameworks, and tools that support my work in web
        development, data management, and IT.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {skillCategories.map((group) => (
          <motion.div
            key={group.category}
            className="card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
