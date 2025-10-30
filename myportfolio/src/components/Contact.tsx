import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I'm always open to discussing new projects, opportunities, and collaborations.
        </p>
        
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:janeshallada@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">janeshallada@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+918333918109"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 8333918109</p>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-primary/20">
            <Button 
              size="lg" 
              className="gradient-accent hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:janeshallada@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/janeshallada" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://linkedin.com/in/janeshallada" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
