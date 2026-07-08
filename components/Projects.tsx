import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-900/40">
      <h2 className="section-heading">Projects</h2>
      <p className="section-subheading">
        Projects that demonstrate my technical expertise and continuous learning.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
