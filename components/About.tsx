import { Download } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/40">
      <h2 className="section-heading">About Me</h2>
      <p className="section-subheading">
        A bit more about who I am and what I&apos;m working toward.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Summary
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Career Goals
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.careerGoals}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Beyond the Code
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.interests}
            </p>
          </div>

          {/*<a href={personalInfo.resumeUrl} download className="btn-primary">
            Download Resume
            <Download size={16} />
          </a>*/}
        </div>
      </div>
    </SectionWrapper>
  );
}
