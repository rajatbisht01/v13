import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase, GraduationCap } from "lucide-react";

const founders = [
  {
    name: "Gajendrakumar PK",
    role: "Co-Founder & Director",
    experience: "30+ Years",
    expertise: [
      "Cloud Architecture & Migration",
      "DevOps & DevSecOps",
      "Infrastructure Modernization",
      "AI & ML Integration",
      "Enterprise Security"
    ],
    description: "A visionary technologist with over 30 years of experience in enterprise IT transformation. Gajendrakumar leads Vi-3's technical strategy, specializing in cloud architecture, DevOps practices, and AI integration. His expertise spans across multi-cloud environments, containerization, and building secure, scalable infrastructure for Fortune 500 companies.",
    achievements: [
      "Led 100+ enterprise cloud migrations",
      "Architected AI-driven infrastructure solutions",
      "Expert in AWS, Azure, and GCP ecosystems"
    ]
  },
  {
    name: "Baskar Maruthai",
    role: "Co-Founder & Director",
    experience: "28+ Years",
    expertise: [
      "Business Strategy & Operations",
      "Digital Transformation",
      "Client Relationship Management",
      "IT Service Management",
      "Cybersecurity & GRC"
    ],
    description: "Baskar Maruthai is a visionary and strategic leader with over 28 years of experience bridging cutting-edge technologies with emerging market needs, he is responsible for translating our core vision into a scalable, secure, and resilient business.",
    achievements: [
      "Managed enterprise accounts worth $50M+",
      "Established strategic technology partnerships",
      "Expert in ITIL and service management"
    ]
  }
];

export const Founders = () => {
  return (
    <section id="founders" className="py-12 lg:px-24 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-network-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Leadership</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            With 30+ years of combined industry experience, our founders bring deep expertise 
            in enterprise technology, cloud computing, and digital transformation.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass border-2 border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-foreground">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-medium">{founder.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">{founder.experience} Experience</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {founder.description}
                </p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {founder.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Combined Experience Banner */}
        <FadeInUp className="mt-12">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Enterprise Transformations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">22+</div>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
