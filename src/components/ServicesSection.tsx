import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Brain,
  Cloud,
  Headphones,
  Shield,
  BarChart3,
  GitBranch,
  Workflow,
  AppWindow,
  Container,
  Server,
  Atom,
  
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI Services",
    description: "LLM, ML, Agentic AI, and AI Agent solutions to transform your business with intelligent automation.",
    href: "/services/ai"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS, Azure, GCP and Private Cloud expertise for seamless cloud adoption and optimization.",
  href: "/services/cloud"
  },
  {
    icon: Headphones,
    title: "Cloud Managed Services",
    description: "24/7 monitoring, maintenance, and support to keep your cloud infrastructure running smoothly.",
    href: "/services/cloud"
  },
  {
    icon: Shield,
    title: "Cybersecurity & GRC",
    description: "Comprehensive security solutions with governance, risk management, and compliance frameworks.",
href: "/services/cybersecurity"
  },
  {
    icon: BarChart3,
    title: "Data and Analytics",
    description: "Turn data into actionable insights with advanced analytics, BI, and data engineering.",
  href: "/services/data-analytics"
  },
  {
    icon: GitBranch,
    title: "DevOps & DevSecOps",
    description: "Accelerate delivery with CI/CD pipelines, automation, and security-first development practices.",
 href: "/services/devops"
  },
  {
    icon: Workflow,
    title: "Automation & Workflow",
    description: "Streamline operations with intelligent automation and workflow orchestration solutions.",
   href: "/services/automation"
  },
  {
    icon: AppWindow,
    title: "Application Services",
    description: "Custom application development, modernization, and integration services.",
 href: "/services/applications"
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Kubernetes, Docker, and container orchestration for scalable microservices architecture.",
  href: "/services/containerization"
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Windows, Linux, DB, Storage, Backup & Restore, DR and complete infrastructure management.",
 href: "/services/infrastructure"
  },
  {
    icon: Atom,
    title: "Quantum Computing",
    description: "Next-generation quantum computing solutions for complex computational challenges.",
  href: "/services/quantum-computing"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Re-imagine your technology,{" "}
              <span className="text-gradient">get the competitive edge</span> you need
            </h2>
            <p className="text-muted-foreground text-lg">
              Our award-winning technology services are designed to drive agility, efficiency 
              and transformative change. Your digital transformation starts here!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="service-card h-full group cursor-pointer"
              >
              <Link to={service.href || "#"} > 
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
