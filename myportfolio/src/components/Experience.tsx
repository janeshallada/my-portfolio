const Experience = () => {
  const experiences = [
    {
      company: "VaultSphere AI Technologies",
      role: "Java Full Stack Intern",
      period: "May - Jul 2024",
      description: "Built scalable web apps using Java, Spring Boot, and React",
      achievements: ["Developed full-stack applications", "Gained expertise in Spring Boot", "Worked with React frontend"]
    },
    {
      company: "AIMERS",
      role: "AI Development Intern",
      period: "May - Jul 2023",
      description: "Worked on AI-based projects focusing on object detection and NLP",
      achievements: ["Achieved 92% accuracy in YOLO-based object detection", "Built language translation system", "Created AI-powered bots"]
    },
    {
      company: "APSSDC",
      role: "Django Development Intern",
      period: "May - Jul 2022",
      description: "Developed security guard recruitment system using Django and Python",
      achievements: ["Created end-to-end recruitment platform", "Automated recruitment workflows", "Reduced manual effort by 60%"]
    },
    {
      company: "NXTWave",
      role: "MERN Stack Trainee",
      period: "Ongoing",
      description: "Comprehensive training in modern web development with MERN stack",
      achievements: ["Completed responsive website challenges", "Learning MongoDB, React.js, Node.js", "Building production-ready applications"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 ring-4 ring-background" />
                
                <div className="md:w-1/2 md:px-8">
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                    <span className="text-sm text-accent font-semibold">{exp.period}</span>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:px-8 ml-16 md:ml-0">
                  <div className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)]">
                    <div className="absolute left-8 md:hidden w-4 h-4 bg-accent rounded-full -translate-x-1/2 ring-4 ring-background" />
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
