import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Brain, Bot, Cpu, Sparkles, Zap, TrendingUp, MessageSquare, Eye, Cog, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const aiCapabilities = [
  {
    icon: Brain,
    title: "Large Language Models (LLM)",
    description: "Deploy and fine-tune cutting-edge language models like GPT, Claude, and open-source alternatives for your business needs."
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Custom ML solutions for predictive analytics, classification, clustering, and recommendation systems."
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description: "Build autonomous AI agents that can reason, plan, and execute complex multi-step tasks independently."
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants that understand context and provide human-like interactions."
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual inspection solutions for quality control and automation."
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "AI-powered workflow automation that learns from patterns and optimizes business processes."
  }
];

const useCases = [
  {
    title: "Customer Service Automation",
    description: "Reduce response times by 80% with AI-powered support agents",
    icon: MessageSquare
  },
  {
    title: "Predictive Maintenance",
    description: "Prevent equipment failures before they happen",
    icon: TrendingUp
  },
  {
    title: "Document Processing",
    description: "Extract and process information from documents at scale",
    icon: Sparkles
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights from streaming data sources",
    icon: Zap
  }
];

const AIServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">AI Services</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  AI Services
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  LLM, ML, Agentic AI & Intelligent Automation
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From large language models to autonomous AI agents, we deliver intelligent 
              systems that drive innovation and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Start AI Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business requirements
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </HoverScale>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-World <span className="text-primary">Applications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how businesses are leveraging our AI solutions
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <FadeInUp key={useCase.title} className="delay-100" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center p-6 glass rounded-2xl h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how AI can transform your business operations and drive growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServices;
