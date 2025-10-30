import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "Flexbox", "CSS Grid"]
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "Node.js", "Java", "Spring Boot", "MySQL", "SQLite"]
    },
    {
      category: "AI & ML",
      skills: ["YOLOv5", "TensorFlow", "Deep Learning", "Object Detection", "Python"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "MongoDB", "C++"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 border-primary/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
