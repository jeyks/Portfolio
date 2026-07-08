"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <h2 className="section-heading">Certifications &amp; Achievements</h2>
      <p className="section-subheading">
        Credentials that reflect continued learning.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Award size={18} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-gray-100">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {cert.issuer}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              {cert.dateObtained}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
