"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { journey } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";
import JourneyCard from "./JourneyCard";
import JourneyEnding from "./JourneyEnding";

export default function Journey() {
  const endingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: endingRef,
    offset: ["start end", "end center"],
  });

  const cardsOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0]
  );

  const endingOpacity = useTransform(
    scrollYProgress,
    [0.3, 1],
    [0, 1]
  );

  const endingY = useTransform(
    scrollYProgress,
    [0.3, 1],
    [80, 0]
  );

  return (
    <SectionWrapper id="journey">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            My Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A timeline of the projects, experiences, and milestones that shaped
            my career in tech.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          style={{ opacity: cardsOpacity }}
          className="relative mt-24"
        >
          {journey.map((item, index) => (
            <div
              key={item.id}
              className="sticky"
              style={{
                top: `${90 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <JourneyCard
                item={item}
                index={index}
                total={journey.length}
              />
            </div>
          ))}
        </motion.div>

        {/* Trigger */}
        <div ref={endingRef} />

        {/* Ending */}
        <motion.div
          style={{
            opacity: endingOpacity,
            y: endingY,
          }}
        >
          <JourneyEnding />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}