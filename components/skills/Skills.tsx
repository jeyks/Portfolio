"use client";

import { motion } from "framer-motion";
import TechCarousel from "./TechCarousel";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm">
            My Stack
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            Technologies I Use
          </h2>
        </motion.div>
      </div>

      <div className="mt-6 overflow-hidden">
        <TechCarousel />
      </div>
    </section>
  );
}