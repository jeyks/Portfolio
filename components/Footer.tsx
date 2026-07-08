
import {  personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="">
      <div className="section-container py-10 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights
          reserved. Version 1.0.0
        </p>
      </div>
    </footer>
  );
}
