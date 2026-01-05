import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import { Shield, Brain, Clock, Cloud, Target, Lightbulb } from "lucide-react";

 const corePillars = [
  {
    icon: Shield,
    title: "Security-First DNA",
    description: "We believe security is not an add-on; it is the foundation. Every line of code and every server migration starts with a defense-in-depth strategy."
  },
  {
    icon: Brain,
    title: "Intelligent Scalability",
    description: "We don't just build for today. We design systems using AI and Containerization that grow seamlessly with your business."
  },
  {
    icon: Clock,
    title: "Unwavering Support",
    description: "Reliability is our hallmark. With 24/7 monitoring and proactive optimization, we ensure your business never sleeps."
  },
  {
    icon: Cloud,
    title: "Hybrid Agility",
    description: "We respect the power of On-Premises control while leveraging the infinite scale of the Cloud, providing a balanced, modernization-focused approach."
  }
];

const operationalModel = [
  {
    phase: "01",
    title: "Audit & Discover",
    action: "Deep dive into existing infrastructure and security gaps.",
    outcome: "A clear technical roadmap and ROI forecast."
  },
  {
    phase: "02",
    title: "Architecture",
    action: "Designing secure, scalable, and cost-optimized blueprints.",
    outcome: "A future-proof system design."
  },
  {
    phase: "03",
    title: "Engineering",
    action: "Hands-on deployment, migration, and AI integration.",
    outcome: "A fully functional, modernized tech stack."
  },
  {
    phase: "04",
    title: "Sustain (24/7)",
    action: "Round-the-clock monitoring, patching, and optimization.",
    outcome: "Zero downtime and continuous compliance."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className=" bg-background p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-network-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Who We Are */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Vi-3 Technologies Private Limited is a next-generation IT solutions and Startup company. 
            We specialize in helping businesses thrive in the digital era through secure, scalable, and intelligent technology. 
            We bridge the gap between legacy infrastructure and the future of AI and Quantum Computing, 
            all while maintaining a relentless focus on Cybersecurity and Operational Excellence.
          </p>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg mt-6">
            At our core, we are problem solvers who believe that complex technology transformation should be 
            innovative, secure, scalable and – above all – simple for our clients to navigate.
          </p>
        </FadeInUp>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <FadeInUp>
            <div className="glass border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To be the most trusted partner for secure, intelligent, and "always-on" enterprise technology.
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp style={{ animationDelay: "0.1s" }}>
            <div className="glass border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To simplify digital transformation through expert engineering, "Security-First" design, and 24/7 operational excellence. 
                We strive to deliver enterprise-grade capabilities that maintain the agility and compliance today's market demands.
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Core Pillars */}
        {/* <FadeInUp className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Core Pillars</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These four values guide every project we undertake
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group border border-border glass rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl  flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <pillar.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        
        <FadeInUp className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vi-3 <span className="text-primary">Operational Model</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a high-touch, disciplined methodology to ensure project success
          </p>
        </FadeInUp>

        <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operationalModel.map((step, index) => (
            <FadeInUp key={step.phase} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5">
                  {step.phase}
                </div>
                <div className="relative z-10">
                  <span className="text-sm font-bold text-primary">{step.phase}</span>
                  <h4 className="text-lg font-bold text-foreground mt-1 mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{step.action}</p>
                  <div className="pt-3 border-t border-border">
                    <span className="text-xs text-primary font-medium">Outcome:</span>
                    <p className="text-sm text-foreground/80 mt-1">{step.outcome}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div> */}
      </div>
    </section>
  );
};
