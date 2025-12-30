import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain,
  Cloud,
  Settings,
  Shield,
  BarChart3,
  GitBranch,
  Workflow,
  Smartphone,
  Container,
  Server,
  Atom,
  ArrowRight,
  Check,
} from "lucide-react";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceData from "@/assets/service-data.jpg";
import { link } from "fs";

const services = [
  {
    icon: Brain,
    title: "AI Services",
    subtitle: "LLM, ML, Agentic AI, AI Agent",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions that drive business growth.",
    features: ["Large Language Models", "Machine Learning", "Agentic AI Solutions", "Custom AI Agents"],
    image: serviceAi,
    link: "/services/ai",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "AWS, Azure, GCP & Private Cloud",
    description:
      "Comprehensive cloud services from migration to optimization, ensuring your infrastructure is scalable, secure, and cost-effective.",
    features: ["Cloud Migration", "Multi-Cloud Strategy", "Cloud Architecture", "Cost Optimization"],
    image: serviceCloud,
    link: "/services/cloud",
  },
  {
    icon: Settings,
    title: "Cloud Managed Services",
    subtitle: "24/7 Monitoring & Support",
    description:
      "End-to-end management of your cloud infrastructure with proactive monitoring, maintenance, and optimization.",
    features: ["24/7 Monitoring", "Incident Management", "Performance Optimization", "Security Patching"],
    image: null,
    link: "/services/cloud"
  },
  {
    icon: Shield,
    title: "Cybersecurity & GRC",
    subtitle: "Security, Governance, Risk & Compliance",
    description:
      "Protect your digital assets with comprehensive security solutions and ensure compliance with industry regulations.",
    features: ["Security Assessments", "Compliance Management", "Risk Mitigation", "Security Operations"],
    image: serviceSecurity,
     link: "/services/cybersecurity"
  },
  {
    icon: BarChart3,
    title: "Data and Analytics",
    subtitle: "Data Engineering & Business Intelligence",
    description:
      "Transform raw data into actionable insights with our comprehensive data solutions and analytics platforms.",
    features: ["Data Engineering", "Business Intelligence", "Data Visualization", "Predictive Analytics"],
    image: serviceData,
    link: "/services/data-analytics"
  },
  {
    icon: GitBranch,
    title: "DevOps & DevSecOps",
    subtitle: "CI/CD, Automation & Security Integration",
    description:
      "Accelerate software delivery with integrated development and operations practices that prioritize security.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Security Integration", "Release Automation"],
    image: null,
    link: "/services/devops"
  },
  {
    icon: Workflow,
    title: "Automation & Workflow",
    subtitle: "Process Automation & Optimization",
    description:
      "Streamline operations and reduce manual effort with intelligent automation solutions tailored to your needs.",
    features: ["Process Automation", "Workflow Optimization", "RPA Solutions", "Integration Services"],
    image: null,
  },
  {
    icon: Smartphone,
    title: "Application Services",
    subtitle: "Development, Modernization & Support",
    description:
      "Full-lifecycle application services from development to modernization and ongoing support.",
    features: ["Custom Development", "App Modernization", "API Development", "Application Support"],
    image: null,
  },
  {
    icon: Container,
    title: "Containerization",
    subtitle: "Docker, Kubernetes & Microservices",
    description:
      "Modernize your applications with container technologies for improved scalability, portability, and efficiency.",
    features: ["Docker Solutions", "Kubernetes Management", "Microservices Architecture", "Container Security"],
    image: null,
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    subtitle: "Windows, Linux, DB, Storage, DR",
    description:
      "Comprehensive infrastructure services covering servers, databases, storage, backup, and disaster recovery.",
    features: ["Server Management", "Database Administration", "Storage Solutions", "Disaster Recovery"],
    image: null,
  },
  {
    icon: Atom,
    title: "Quantum Computing",
    subtitle: "Enterprise Quantum Solutions",
    description:
      "Stay ahead with cutting-edge quantum computing solutions for complex problem-solving and optimization.",
    features: ["Quantum Strategy", "Algorithm Development", "Hybrid Solutions", "Research & Development"],
    image: null,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
              Enterprise Technology
              <br />
              Solutions
            </h1>
            <p className="text-hero-foreground/70 text-lg max-w-2xl mb-8">
              From AI and cloud computing to cybersecurity and quantum computing, we deliver 
              comprehensive technology services that power your digital transformation.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeIn key={service.title}>
              
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-primary text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                            <Check className="text-primary" size={12} />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                     <Link to={service.link || "#"}>
                      <Button variant="outline" className="gap-2 hover:bg-primary">
                        Learn More
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {service.image ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                        />
<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                      >
                        <service.icon className="text-primary/30" size={120} />
                      </motion.div>
                    )}
                  </div>
                </div>
              
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-hero-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals 
              and drive meaningful business outcomes.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Today
                <ArrowRight size={18} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
