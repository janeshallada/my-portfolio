import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Proficient in Django, React, Spring Boot, and MERN stack with hands-on project experience"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Experienced in YOLOv5, TensorFlow, and building intelligent systems for real-world applications"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Successfully completed multiple internships and built solutions that improve efficiency by 60-85%"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)]"
            >
              <item.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 rounded-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a Computer Science Engineering student at Godavari Institute of Engineering and Technology 
            with a strong foundation in web development and AI technologies. Through internships at APSSDC, 
            AIMERS, and VaultSphere AI Technologies, I've gained hands-on experience building scalable web 
            applications and intelligent systems. My projects have demonstrated significant impact, including 
            an 85% reduction in vehicle damage claim processing time and 60% reduction in recruitment manual effort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
