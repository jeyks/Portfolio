"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Frontend Developer",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Data Enthusiast",
];

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 70);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 35);
    } else {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-6 flex items-center justify-center "
    >
    
      <span className="bg-gradient-to-r  text-blue-500 bg-clip-text text-2xl font-semibold  md:text-3xl">
        {text}
      </span>

      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ml-1 text-2xl font-bold text-blue-500"
      >
        |
      </motion.span>
    </motion.div>
  );
}