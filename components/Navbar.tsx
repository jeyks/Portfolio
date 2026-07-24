"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm"
          : "border-transparent bg-white dark:bg-gray-950"
      }`}
    >
     <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-jetbrains text-xl  text-gray-900 dark:text-gray-100"
        >
          <span className="font-bold">JKR</span>
          <span className="font-medium text-blue-500">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
          </div>
        </ul>

       {/* <a
          href={personalInfo.resumeUrl}
          download
          className="gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600; hidden md:flex items-center"
        >
          Download Resume
          <Download size={16} />
        </a> */}

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <ul className="section-container flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href={personalInfo.resumeUrl}
              download
              onClick={handleLinkClick}
              className="btn-primary flex w-full items-center justify-center gap-2"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
