import Hero from "@/components/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/journey/Journey";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      
      <Certifications />
      <Contact />
    </>
  );
}
