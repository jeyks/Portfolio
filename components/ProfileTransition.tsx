"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  const { resolvedTheme } = useTheme();

  const defaultImage =
    resolvedTheme === "light" ? "/sunglass.jpg" : "/profile1.jpg";

  return (
    <motion.div
      className="order-1 md:order-2 flex justify-center"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <div className="relative h-56 w-56 sm:h-64 sm:w-64 group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:ring-4 hover:ring-blue-800/40 dark:hover:ring-blue-400/25">
        {/* Default image depends on theme */}
        <Image
          src={defaultImage}
          alt="Profile"
          fill
          priority
          className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />

        {/* Hover image */}
        <Image
          src="/SmileProfile.jpg"
          alt="Smiling Profile"
          fill
          priority
          className="object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        />
      </div>
    </motion.div>
  );
}