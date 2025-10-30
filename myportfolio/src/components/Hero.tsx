import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-gradient">Janesh Allada</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer & AI Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building innovative web applications with Django, React, and cutting-edge AI technologies. 
            Passionate about creating scalable solutions that make a difference.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/janeshallada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/janeshallada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:janeshallada@gmail.com"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
