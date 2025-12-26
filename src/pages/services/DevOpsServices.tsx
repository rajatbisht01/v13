import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { GitBranch, Terminal, Shield, Rocket, Settings, RefreshCw, ArrowRight, MonitorCheck, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const devopsServices = [
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, Jenkins, and Azure DevOps."
  },
  {
    icon: Terminal,
    title: "Infrastructure as Code",
    description: "Terraform, Pulumi, and CloudFormation for reproducible, version-controlled infrastructure."
  },
  {
    icon: Shield,
    title: "DevSecOps",
    description: "Security integrated into every stage of the development lifecycle with automated scanning and compliance."
  },
  {
    icon: MonitorCheck,
    title: "Observability",
    description: "Comprehensive monitoring, logging, and tracing with Prometheus, Grafana, Datadog, and ELK stack."
  },
  {
    icon: RefreshCw,
    title: "GitOps",
    description: "Declarative infrastructure and application delivery using Git as single source of truth with ArgoCD and Flux."
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    description: "Load testing, performance optimization, and SRE practices for reliable, scalable systems."
  }
];

const tools = [
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Terraform", category: "IaC" },
  { name: "Ansible", category: "Config" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Dashboards" },
  { name: "Vault", category: "Secrets" }
];

const DevOpsServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">DevOps & DevSecOps</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                <GitBranch className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  DevOps & DevSecOps
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Accelerate Delivery with Security Built-In
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Transform your software delivery with modern DevOps practices. We help you build 
              automated, secure, and reliable pipelines that accelerate time-to-market while 
              maintaining quality and security.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                DevOps Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                View Our Approach
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              DevOps <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end DevOps transformation for faster, safer delivery
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </HoverScale>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-standard DevOps tools we implement and manage
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <FadeInUp key={tool.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Accelerate Your Delivery?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's build pipelines that ship faster and safer than ever before.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOpsServices;
