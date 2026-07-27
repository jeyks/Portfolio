"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const contactLinks = [
    {
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      title: "GitHub",
      value: personalInfo.github.replace("https://github.com/", ""),
      href: personalInfo.github,
      icon: Github,
    },
    {
      title: "LinkedIn",
      value: personalInfo.linkedin.replace("https://www.linkedin.com/in/", ""),
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900/40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — Quote */}
        <div className="flex flex-col justify-center">
          <blockquote className="relative">
            <span className="absolute -left-2 -top-6 select-none font-serif text-7xl leading-none text-blue-600/30 dark:text-blue-400/20">
              &ldquo;
            </span>

            <p className="text-3xl font-medium leading-snug tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
              I&apos;m currently open to new opportunities, freelance projects, and
              meaningful collaborations.
            </p>
          </blockquote>


        </div>

        {/* Right — Contact Links */}
        <div className="flex flex-col justify-center gap-4">
          {contactLinks.map(({ title, value, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target={title !== "Email" ? "_blank" : undefined}
              rel={title !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-colors duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-500 dark:text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
      </div>


    </SectionWrapper>
  );
}
