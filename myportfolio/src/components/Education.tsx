import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Godavari Institute of Engineering and Technology(A)",
      location: "Rajamahendravaram",
      period: "2022 - 2025",
      grade: "CGPA: 7.63"
    },
    {
      degree: "Diploma in Electrical and Electronics Engineering",
      institution: "Government Polytechnic",
      location: "Vijayawada",
      period: "2019 - 2022",
      grade: "Percentage: 77.51"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Montessori High School",
      location: "",
      period: "2018 - 2019",
      grade: "CGPA: 9.8"
    }
  ];

  const certifications = [
    "Web Design Certification - FreeCodeCamp",
    "Python & Django Development - APSSDC",
    "AI Development (YOLOv5, Translation) - AIMERS",
    "Programming in Java - NPTEL",
    "Database Management Systems - NPTEL",
    "Java Full Stack Development - VaultSphere AI",
    "Data Analytics - Deloitte",
    "Python Data Science - IBM",
    "Nesternship (Resilience) - Nestle"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-accent mb-2">{edu.degree}</h4>
                  <p className="font-medium mb-1">{edu.institution}</p>
                  {edu.location && <p className="text-sm text-muted-foreground">{edu.location}</p>}
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-primary/20">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <span className="text-sm font-semibold text-primary">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="text-accent mt-1.5">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
