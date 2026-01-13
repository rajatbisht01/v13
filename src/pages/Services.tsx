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

import managedServicesImg from "@/assets/services/cloud-managed.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import aiDataScienceImg from "@/assets/services/ai-services.jpg";
import cloudInfrastructureImg from "@/assets/services/cloud-solutions.jpg";
import devsecopsImg from "@/assets/services/devsecops.jpg";
import quantumComputingImg from "@/assets/services/quantum.jpg";
import aiGovernanceImg from "@/assets/services/ai-governance.jpg";
import digitalTransformationImg from "@/assets/services/digital-transformation.jpg";
import web3Img from "@/assets/services/web3.jpg";
import agenticAIImg from "@/assets/services/agentic-ai.jpg";
import aiopsImg from "@/assets/services/aiops.jpg";
import applicationSecurityImg from "@/assets/services/application-security.jpg";
import staffManagementImg from "@/assets/services/staff-management.jpg";
import projectManagementImg from "@/assets/services/project-management.jpg";
import qualityAssuranceImg from "@/assets/services/quality-assurance.jpg";
import workflowAutomationImg from "@/assets/services/workflow-automation.jpg";
import itInfrastructureImg from "@/assets/services/it-infrastructure.jpg";
import architectureImg from "@/assets/services/architecture.jpg";
import airRiskImg from "@/assets/services/ai-risk-mitigation.jpg";
import securityAssesmentImg from "@/assets/services/security-assessment.jpg";
import applicationServiceImg from "@/assets/services/application-services.jpg";
import auditImg from "@/assets/services/audit-reporting.jpg";
import mergerImg from "@/assets/services/merger-acquisition.jpg";
import { Header } from "@/components/Header";
import datascience from "@/assets/services/data-science.jpg";

const allServices = [
  // Core Services (8)
  {
    icon: Brain,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Production-grade AI systems leveraging LLMs, agents, and automation to drive intelligent decision-making and real business outcomes.",
    image: aiDataScienceImg,
    gradient: "from-accent/20 to-purple-500/5",
    category: "Core"
  },
  {
    icon: BarChart3,
    title: "Data Science",
    slug: "data-science",
    description: "Scalable data platforms transforming raw data into actionable insights through analytics, modeling, and decision intelligence.",
    image: datascience,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "Core"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    slug: "cloud-infrastructure",
    description: "Seamless hybrid cloud transitions with On-Prem modernization, secure migrations, and cost optimization.",
    image: cloudInfrastructureImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
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
    icon: Server,
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    description: "Robust and scalable infrastructure foundations covering compute, storage, networking, and enterprise systems reliability.",
    image: itInfrastructureImg,
    gradient: "from-slate-500/20 to-gray-500/5",
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
    icon: Layers,
    title: "Application Services",
    slug: "application-services",
    description: "End-to-end application development, modernization, and lifecycle management aligned to business outcomes.",
    image: applicationServiceImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "Core"
  },
 
  
  // AI & Automation (4)
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
    icon: Scale,
    title: "AI Governance",
    slug: "ai-governance",
    description: "Framework of policies and practices for responsible AI development, deployment, and compliance.",
    image: aiGovernanceImg,
    gradient: "from-amber-500/20 to-yellow-500/5",
    category: "AI & Automation"
  },
  {
    icon: Shield,
    title: "AI Risk Mitigation",
    slug: "ai-risk-mitigation",
    description: "Comprehensive strategies to identify, assess, and mitigate risks in AI systems ensuring safe and ethical deployment.",
    image: airRiskImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "AI & Automation"
  },
  
  // High-Tech Solutions (2)
  {
    icon: Atom,
    title: "Quantum Computing",
    slug: "quantum-computing",
    description: "Strategic roadmap for quantum readiness including consulting, quantum-safe cryptography, and hybrid workflows.",
    image: quantumComputingImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "High-Tech Solutions"
  },
  {
    icon: Globe,
    title: "Web 3.0 Solutions",
    slug: "web3",
    description: "Decentralized solutions with blockchain, smart contracts, and tokenized digital economies.",
    image: web3Img,
    gradient: "from-cyan-500/20 to-teal-500/5",
    category: "High-Tech Solutions"
  },
  
  // Security Services (4)
  {
    icon: Shield,
    title: "Security Assessment",
    slug: "security-assessment",
    description: "Comprehensive security evaluations including penetration testing, risk analysis, and compliance assessments.",
    image: securityAssesmentImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Security Services"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Testing",
    slug: "quality-assurance",
    description: "Automated testing and quality engineering for high-quality, secure, and reliable software systems.",
    image: qualityAssuranceImg,
    gradient: "from-teal-500/20 to-emerald-500/5",
    category: "Security Services"
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Reporting",
    slug: "audit-reporting",
    description: "Comprehensive compliance auditing, security reporting, and regulatory alignment services.",
    image: auditImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Security Services"
  },
  {
    icon: Lock,
    title: "Vulnerability Scanning",
    slug: "vulnerability-scanning",
    description: "Continuous vulnerability detection and remediation with automated scanning and threat intelligence.",
    image: applicationSecurityImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "Security Services"
  },
  
  // Management (3)
  {
    icon: Users,
    title: "Staffing Services",
    slug: "staff-management",
    description: "IT workforce solutions with AI-driven talent acquisition, team augmentation, and dynamic workforce planning.",
    image: staffManagementImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Management"
  },
  {
    icon: ClipboardCheck,
    title: "Project & Program Management",
    slug: "project-management",
    description: "Intelligent project delivery with AI analytics, automated workflows, and agile methodologies.",
    image: projectManagementImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "Management"
  },
  {
    icon: Rocket,
    title: "Merger & Acquisition",
    slug: "merger-acquisition",
    description: "Strategic IT integration and transformation services for successful mergers, acquisitions, and divestitures.",
    image: mergerImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Management"
  },
   // Business Solutions (1)
  {
    icon: Rocket,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "End-to-end digital transformation using AI, automation, and cloud technologies for business agility.",
    image: digitalTransformationImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Business Solutions"
  },
  
  // Operations (2)
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
    icon: Layers,
    title: "Architecture & Engineering",
    slug: "architecture",
    description: "System design with cloud-native, event-driven, and security-first architectures.",
    image: architectureImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "Operations"
  },
];

const categories = [
  { name: "Core", description: "Our flagship technology services" },
  { name: "AI & Automation", description: "Intelligent solutions for the future" },
  { name: "High-Tech Solutions", description: "Advanced emerging technologies" },
  { name: "Security Services", description: "Protection, compliance, and quality" },
  { name: "Management", description: "People and project delivery" },
  { name: "Operations", description: "Infrastructure and operations excellence" },
  { name: "Business Solutions", description: "Transform your organization" },
];

const categoryIdMap: Record<string, string> = {
  "Core": "core",
  "AI & Automation": "ai-automation",
  "High-Tech Solutions": "hightech-solutions",
  "Business Solutions": "business-solutions",
  "Operations": "operations",
  "Security Services": "security-services",
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
              service catalog covering 26+ specialized technology domains.
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
                  <motion.div
                  className="gradient-border"
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Link to={`/services/${service.slug}`}>
                      <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group h-full"
                      >
                        <div className="relative shadow-2xl h-full rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-transparent transition">
                          {/* Image */}
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center backdrop-blur-sm`}>
                              <service.icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 relative">
                            <div
                              className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                            />

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                              {service.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                              {service.description}
                            </p>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                              Learn More
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>

                          {/* Glow */}
                          <div
                            className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition`}
                          />
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
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
            <Link
  to="/contact"
  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white text-lg font-bold rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
>
  <span className="relative z-10">Contact Us Today</span>
  <span className="relative z-10 group-hover:translate-x-1 transition-transform">
    →
  </span>

  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
</Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;