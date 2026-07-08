import { GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-gray-50 dark:bg-gray-900/40">
      <h2 className="section-heading">Education</h2>
      <p className="section-subheading">My academic background.</p>

      <div className="mt-10 space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="card flex gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {edu.school}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Graduated {edu.graduationYear}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Awards: {edu.awards.join(", ")}
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Relevant Coursework
                </p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
