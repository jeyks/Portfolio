"use client";

import { Award, ArrowUpRight, Calendar } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">

        <h2 className="section-heading">Learning & Certifications</h2>

       

        <p className="mx-auto mt-6 max-w-2xl text-gray-600 leading-relaxed dark:text-gray-400">
          Certifications that reflect my commitment to continuous learning and
          professional growth.
        </p>
      </div>

      {/* Certificates */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
          >
            <div className="flex items-center gap-12">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {cert.issuer}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} />
                  <span>{cert.dateObtained}</span>
                </div>
              </div>
            </div>

            <div className="ml-6 flex items-center gap-2">
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100 dark:text-blue-400">
                View Credential
              </span>

              <ArrowUpRight
                size={18}
                className=""
              />
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
