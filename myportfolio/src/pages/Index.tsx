import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-primary/20">
        <p>© 2025 Janesh Allada. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
};

export default Index;
