import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  Atom, 
  Headphones,
  ArrowRight,
  Scale,
  Rocket,
  Globe,
  Bot,
  Activity,
  Lock,
  Users,
  ClipboardCheck,
  CheckCircle,
  Workflow,
  Server,
  Layers,
  BarChart3
} from "lucide-react";

import managedServicesImg from "@/assets/images/managed-services.jpg";
import cybersecurityImg from "@/assets/images/cybersecurity.jpg";
import aiDataScienceImg from "@/assets/images/ai-data-science.jpg";
import cloudInfrastructureImg from "@/assets/images/cloud-infrastructure.jpg";
import devsecopsImg from "@/assets/images/devsecops.jpg";
import quantumComputingImg from "@/assets/images/quantum-computing.jpg";
import aiGovernanceImg from "@/assets/images/ai-governance.jpg";
import digitalTransformationImg from "@/assets/images/digital-transformation.jpg";
import web3Img from "@/assets/images/web3.jpg";
import agenticAIImg from "@/assets/images/agentic-ai.jpg";
import aiopsImg from "@/assets/images/aiops.jpg";
import applicationSecurityImg from "@/assets/images/application-security.jpg";
import staffManagementImg from "@/assets/images/staff-management.jpg";
import projectManagementImg from "@/assets/images/project-management.jpg";
import qualityAssuranceImg from "@/assets/images/quality-assurance.jpg";
import workflowAutomationImg from "@/assets/images/workflow-automation.jpg";
import itInfrastructureImg from "@/assets/images/it-infrastructure.jpg";
import architectureImg from "@/assets/images/architecture.jpg";
import { Header } from "@/components/Header";

const allServices = [
   {
    icon: Brain,
    title: "AI & Data Science",
    slug: "ai-data-science",
    description: "High-performance pipelines turning raw data into competitive intelligence with LLMs, MLOps, and predictive analytics.",
    image: aiDataScienceImg,
    gradient: "from-accent/20 to-purple-500/5",
    category: "Core"
  },
  
  {
    icon: Shield,
    title: "Cybersecurity & Resilience",
    slug: "cybersecurity",
    description: "Defense-in-Depth strategy with Zero Trust architecture, MDR, and Quantum-Safe encryption for complete protection.",
    image: cybersecurityImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Core"
  },
    {
    icon: Code,
    title: "DevSecOps Engineering",
    slug: "devsecops",
    description: "Modern engineering practices with containerization, Kubernetes orchestration, and security-integrated CI/CD pipelines.",
    image: devsecopsImg,
    gradient: "from-emerald-500/20 to-green-500/5",
    category: "Core"
  },
 {
    icon: Headphones,
    title: "24×7 Managed Services",
    slug: "managed-services",
    description: "Your 'Always-On' IT department with proactive monitoring, automated patch management, and SLA-driven resolution.",
    image: managedServicesImg,
    gradient: "from-primary/20 to-primary/5",
    category: "Core"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    description: "Seamless hybrid cloud transitions with On-Prem modernization, secure migrations, and cost optimization.",
    image: cloudInfrastructureImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Core"
  },

  {
    icon: Atom,
    title: "Quantum Computing",
    slug: "quantum-computing",
    description: "Strategic roadmap for quantum readiness including consulting, quantum-safe cryptography, and hybrid workflows.",
    image: quantumComputingImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "Core"
  },
  {
    icon: Scale,
    title: "AI Governance",
    slug: "ai-governance",
    description: "Framework of policies and practices for responsible AI development, deployment, and compliance.",
    image: aiGovernanceImg,
    gradient: "from-amber-500/20 to-yellow-500/5",
    category: "AI & Automation"
  },
  {
    icon: Bot,
    title: "Agentic AI & AI Agents",
    slug: "agentic-ai",
    description: "Autonomous AI systems that plan, decide, and act to achieve complex goals with minimal supervision.",
    image: agenticAIImg,
    gradient: "from-violet-500/20 to-purple-500/5",
    category: "AI & Automation"
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    slug: "workflow-automation",
    description: "Intelligent process automation with AI agents, context-aware workflows, and end-to-end orchestration.",
    image: workflowAutomationImg,
    gradient: "from-fuchsia-500/20 to-pink-500/5",
    category: "AI & Automation"
  },
  {
    icon: BarChart3,
    title: "Data Science",
    slug: "data-science",
    description: "Advanced analytics with AutoML, real-time insights, and privacy-preserving data solutions.",
    image: aiDataScienceImg,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "AI & Automation"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "End-to-end digital transformation using AI, automation, and cloud technologies for business agility.",
    image: digitalTransformationImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Business Solutions"
  },
  {
    icon: Globe,
    title: "Web 3.0 Solutions",
    slug: "web3",
    description: "Decentralized solutions with blockchain, smart contracts, and tokenized digital economies.",
    image: web3Img,
    gradient: "from-cyan-500/20 to-teal-500/5",
    category: "Business Solutions"
  },
  {
    icon: Activity,
    title: "AIOps",
    slug: "aiops",
    description: "AI-powered IT operations with automated monitoring, anomaly detection, and self-healing systems.",
    image: aiopsImg,
    gradient: "from-lime-500/20 to-green-500/5",
    category: "Operations"
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    description: "Enterprise infrastructure management with AI monitoring, hybrid orchestration, and self-healing systems.",
    image: itInfrastructureImg,
    gradient: "from-slate-500/20 to-gray-500/5",
    category: "Operations"
  },
  {
    icon: Layers,
    title: "Architecture & Engineering",
    slug: "architecture",
    description: "System design with cloud-native, event-driven, and security-first architectures.",
    image: architectureImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "Operations"
  },
  {
    icon: Lock,
    title: "Application Security",
    slug: "application-security",
    description: "Secure software development with DevSecOps, RASP, and continuous security testing.",
    image: applicationSecurityImg,
    gradient: "from-red-500/20 to-pink-500/5",
    category: "Security & Quality"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Audit",
    slug: "quality-assurance",
    description: "Automated testing and compliance auditing for high-quality, secure, and compliant systems.",
    image: qualityAssuranceImg,
    gradient: "from-teal-500/20 to-emerald-500/5",
    category: "Security & Quality"
  },
  {
    icon: Users,
    title: "Staff Management",
    slug: "staff-management",
    description: "IT workforce solutions with AI-driven talent acquisition and dynamic workforce planning.",
    image: staffManagementImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Management"
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    slug: "project-management",
    description: "Intelligent project delivery with AI analytics, automated workflows, and agile methodologies.",
    image: projectManagementImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "Management"
  },
];

const categories = [
  { name: "Core", description: "Our flagship technology services" },
  { name: "AI & Automation", description: "Intelligent solutions for the future" },
  { name: "Business Solutions", description: "Transform your organization" },
  { name: "Operations", description: "Infrastructure and operations excellence" },
  { name: "Security & Quality", description: "Protection and compliance" },
  { name: "Management", description: "People and project delivery" }
];

const categoryIdMap: Record<string, string> = {
  "Core": "core",
  "AI & Automation": "ai-automation",
  "Business Solutions": "business-management",
  "Operations": "operations",
  "Security & Quality": "security-quality",
  "Management": "management",
};


const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)' }}>
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 80% 20%, rgba(21, 179, 151, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 80%, rgba(167, 88, 212, 0.1) 0%, transparent 50%)
            `
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
              End-to-End <span className="text-gradient">Technology Solutions</span>
            </h1>
            <p className="text-lg text-hero-muted leading-relaxed max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and quantum computing, 
              we deliver enterprise-grade solutions with agility and compliance. Explore our complete 
              service catalog covering 19+ specialized technology domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category, categoryIndex) => (
        <section 
        id={categoryIdMap[category.name]}
          key={category.name} 
          className={`py-12 ${categoryIndex % 2 === 0 ? 'bg-background' : 'partners-gradient'}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                <span className="text-gradient">{category.name}</span> Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices
                .filter(service => service.category === category.name)
                .map((service, index) => (
                 <Link 
                      to={`/services/${service.slug}`}
                      // className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                    >
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="service-card group overflow-hidden"
                  >
                    
                    <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
                      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center backdrop-blur-sm`}>
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>

                     <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
>

                      Learn More 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                     </div>
                  </motion.div>
                    </Link>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 cta-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-hero-muted mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss how we can help you achieve your technology goals 
              with our comprehensive suite of services.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
