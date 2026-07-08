"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, User } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ProfileImage from "./ProfileTransition";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center border-b border-gray-200 dark:border-gray-800"
    >
      <div className="section-container grid grid-cols-1 md:grid-cols-3 items-center gap-10 py-16">
        <motion.div
          className="md:col-span-2 order-2 md:order-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Hi, I&apos;m {personalInfo.fullName.split(" ")[0]}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {personalInfo.fullName}
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-400">
            {personalInfo.title}
          </h2>
          <p className="mt-5 max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {personalInfo.introduction}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <ProfileImage />
          {/* <div className="relative h-56 w-56 sm:h-64 sm:w-64 group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:ring-4 hover:ring-blue-800/40 dark:hover:ring-blue-400/25">
            {/* Default image depends on theme 
            <Image
              src={"/profile1.jpg"}
              alt="Profile"
              fill
              priority
              className="object-cover"
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
