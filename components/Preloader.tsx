"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOGO = "JKR.dev";

export default function Preloader() {
  const [typed, setTyped] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setTyped(LOGO.slice(0, index));

      if (index === LOGO.length) {
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);
        }, 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Split the logo into "JKR" and ".dev"
  const main = typed.slice(0, Math.min(3, typed.length));
  const suffix = typed.length > 3 ? typed.slice(3) : "";

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Logo */}
          <motion.h1
            className="font-geist text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">{main}</span>

            <span className="font-medium text-blue-500">
              {suffix}
            </span>

            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="text-blue-500"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Loading dots */}
          <div className="mt-10 flex gap-3">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="h-2.5 w-2.5 rounded-full bg-blue-500"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [0, -6, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-sm tracking-[0.3em] uppercase text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting Digital Experiences
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}