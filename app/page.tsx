import Hero from "@/components/Hero";
import About from "@/components/about/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <Skills />
      <Projects />
      <Experience />
      
      <Certifications />
      <Contact />
    </>
  );
}
