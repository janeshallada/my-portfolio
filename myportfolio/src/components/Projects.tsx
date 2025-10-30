import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Damage Detection & Repair Cost Estimation",
      description: "Deep learning system using YOLOv5 and TensorFlow to detect vehicle damage and estimate repair costs, achieving 85% faster claim processing.",
      tags: ["Python", "YOLOv5", "TensorFlow", "Deep Learning", "Computer Vision"],
      impact: "85% faster claims processing"
    },
    {
      title: "Security Guard Recruitment System",
      description: "Django-based platform automating job postings, applicant tracking, and interview scheduling for security agencies.",
      tags: ["Python", "Django", "MySQL", "Web Development"],
      impact: "60% reduction in manual effort"
    },
    {
      title: "Talking Robot",
      description: "Interactive voice-enabled robot using Python and JavaScript with speech recognition and text-to-speech for real-time conversations.",
      tags: ["Python", "JavaScript", "Speech Recognition", "TTS"],
      impact: "Real-time voice interaction"
    },
    {
      title: "Language Translator",
      description: "Python-based multilingual translator supporting 20+ languages using external translation APIs.",
      tags: ["Python", "API Integration", "NLP"],
      impact: "20+ languages supported"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)] group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="outline"
                        className="border-accent/50 text-accent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-primary/20">
                    <p className="text-sm font-semibold text-accent">
                      Impact: {project.impact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
