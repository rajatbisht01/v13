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
  BarChart3,
  Monitor,
  UserCog,
  Warehouse,
  Link2,
  Settings,
  Gauge,
  CloudCog,
  ArrowUpCircle,
  RefreshCw,
  DollarSign,
  CloudOff,
  Combine,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  FileText,
  Radar,
  Search,
  KeyRound,
  Database,
  Building,
  HardDrive,
  Network,
  DatabaseBackup,
  ArchiveRestore,
  Truck,
  Wrench,
  AppWindow,
  Sparkles,
  RefreshCcw
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
import datascience from "@/assets/services/data-science.jpg";
import softwareDevelopmentImg from "@/assets/services/software-development.jpg";
import hrStaffingImg from "@/assets/services/staff-management.jpg";
import devopsImg from "@/assets/services/devsecops.jpg";
import dataWarehouseImg from "@/assets/services/data-science.jpg";
import dataLakeImg from "@/assets/services/data-science.jpg";
import { Header } from "@/components/Header";


const allServices = [
  // Core Services (9)
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
    image: devopsImg,
    icon: Settings,
    title: "DevOps",
    description: "Continuous integration and delivery pipelines with infrastructure as code and automated deployment workflows.",
    features: ["CI/CD Automation", "Infrastructure as Code", "Configuration Management", "Deployment Automation"],
    gradient: "from-emerald-500/20 to-green-500/5",
    slug: "devops",
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
  {
    icon: Monitor,
    title: "Software Development",
    slug: "software-development",
    description: "Custom software solutions with modern frameworks, agile methodologies, and full-stack development expertise.",
    image: softwareDevelopmentImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
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
  
  // Data & Analytics (3)
  {
    icon: Warehouse,
    title: "Data Warehouse",
    slug: "data-warehouse",
    description: "Enterprise data warehousing solutions for centralized analytics, reporting, and business intelligence.",
    image: dataWarehouseImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Data & Analytics"
  },
  {
    icon: Link2,
    title: "Data Lake",
    slug: "data-lake",
    description: "Scalable data lake architecture for storing and processing structured and unstructured data at any scale.",
    image: dataLakeImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "Data & Analytics"
  },
  {
    icon: BarChart3,
    title: "Big Data",
    slug: "big-data",
    description: "Big data analytics and processing solutions for extracting insights from massive datasets.",
    image: datascience,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "Data & Analytics"
  },
  
  // DevOps & Engineering (2)
  {
    icon: Settings,
    title: "DevOps",
    slug: "devops",
    description: "Continuous integration and delivery pipelines with infrastructure as code and automated deployment workflows.",
    image: devopsImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "DevOps & Engineering"
  },
  {
    icon: Layers,
    title: "Architecture & Engineering",
    slug: "architecture",
    description: "System design with cloud-native, event-driven, and security-first architectures.",
    image: architectureImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "DevOps & Engineering"
  },
  
  // High-Tech Solutions (4)
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
  {
    icon: Building,
    title: "ERP",
    slug: "erp",
    description: "Enterprise Resource Planning implementation and optimization.",
    image: itInfrastructureImg,
    gradient: "from-amber-500/20 to-orange-500/5",
    category: "High-Tech Solutions"
  },
  {
    icon: Globe,
    title: "GCC Services",
    slug: "gcc-services",
    description: "Global Capability Center setup and management services.",
    image: cloudInfrastructureImg,
    gradient: "from-teal-500/20 to-cyan-500/5",
    category: "High-Tech Solutions"
  },
  
  // Security & Quality (4)
  {
    icon: Shield,
    title: "Security Assessment",
    slug: "security-assessment",
    description: "Comprehensive security evaluations including penetration testing, risk analysis, and compliance assessments.",
    image: securityAssesmentImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Security & Quality"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Testing",
    slug: "quality-assurance",
    description: "Automated testing and quality engineering for high-quality, secure, and reliable software systems.",
    image: qualityAssuranceImg,
    gradient: "from-teal-500/20 to-emerald-500/5",
    category: "Security & Quality"
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Reporting",
    slug: "audit-reporting",
    description: "Comprehensive compliance auditing, security reporting, and regulatory alignment services.",
    image: auditImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Security & Quality"
  },
  {
    icon: Lock,
    title: "Vulnerability Scanning",
    slug: "vulnerability-scanning",
    description: "Continuous vulnerability detection and remediation with automated scanning and threat intelligence.",
    image: applicationSecurityImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "Security & Quality"
  },
  
  // Business Services (3)
  {
    icon: UserCog,
    title: "HR & Staffing Services",
    slug: "hr-staffing",
    description: "IT workforce solutions with AI-driven talent acquisition, team augmentation, and dynamic workforce planning.",
    image: hrStaffingImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Business Services"
  },
  {
    icon: ClipboardCheck,
    title: "Project & Program Management",
    slug: "project-management",
    description: "Intelligent project delivery with AI analytics, automated workflows, and agile methodologies.",
    image: projectManagementImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "Business Services"
  },
  {
    icon: Rocket,
    title: "Merger & Acquisition",
    slug: "merger-acquisition",
    description: "Strategic IT integration and transformation services for successful mergers, acquisitions, and divestitures.",
    image: mergerImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Business Services"
  },
  
  // Transformation (2)
  {
    icon: Rocket,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "End-to-end digital transformation using AI, automation, and cloud technologies for business agility.",
    image: digitalTransformationImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Digital Transformation"
  },
  {
    icon: Activity,
    title: "AIOps",
    slug: "aiops",
    description: "AI-powered IT operations with automated monitoring, anomaly detection, and self-healing systems.",
    image: aiopsImg,
    gradient: "from-lime-500/20 to-green-500/5",
    category: "Digital Transformation"
  },

  // Cloud Services Category (10 sub-services as main services)
  {
    icon: Gauge,
    title: "Cloud Strategic",
    slug: "cloud-strategic",
    description: "Strategic cloud planning and roadmap development for enterprise transformation.",
    image: cloudInfrastructureImg,
    gradient: "from-blue-500/20 to-sky-500/5",
    category: "Cloud Services"
  },
  {
    icon: CloudCog,
    title: "Cloud Orchestration",
    slug: "cloud-orchestration",
    description: "Multi-cloud management and orchestration for seamless operations.",
    image: cloudInfrastructureImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "Cloud Services"
  },
  {
    icon: Rocket,
    title: "Cloud Adoption",
    slug: "cloud-adoption",
    description: "End-to-end cloud adoption frameworks and implementation strategies.",
    image: cloudInfrastructureImg,
    gradient: "from-sky-500/20 to-cyan-500/5",
    category: "Cloud Services"
  },
  {
    icon: ArrowUpCircle,
    title: "Cloud Secure Migration",
    slug: "cloud-migration",
    description: "Secure and seamless migration to cloud platforms with zero downtime.",
    image: cloudInfrastructureImg,
    gradient: "from-indigo-500/20 to-blue-500/5",
    category: "Cloud Services"
  },
  {
    icon: RefreshCw,
    title: "Cloud Modernization",
    slug: "cloud-modernization",
    description: "Legacy system modernization using cloud-native technologies.",
    image: cloudInfrastructureImg,
    gradient: "from-violet-500/20 to-indigo-500/5",
    category: "Cloud Services"
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    slug: "cloud-cost-optimization",
    description: "FinOps practices and cloud cost management strategies.",
    image: cloudInfrastructureImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "Cloud Services"
  },
  {
    icon: Lock,
    title: "Cloud Security",
    slug: "cloud-security",
    description: "Comprehensive cloud security posture management and protection.",
    image: cybersecurityImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Cloud Services"
  },
  {
    icon: Settings,
    title: "Cloud Operations",
    slug: "cloud-operations",
    description: "24/7 cloud operations, monitoring, and management services.",
    image: managedServicesImg,
    gradient: "from-slate-500/20 to-gray-500/5",
    category: "Cloud Services"
  },
  {
    icon: CloudOff,
    title: "Private Cloud",
    slug: "private-cloud",
    description: "Private cloud design, deployment, and management solutions.",
    image: cloudInfrastructureImg,
    gradient: "from-purple-500/20 to-violet-500/5",
    category: "Cloud Services"
  },
  {
    icon: Combine,
    title: "Hybrid Cloud",
    slug: "hybrid-cloud",
    description: "Hybrid cloud architecture connecting on-premise and cloud environments.",
    image: cloudInfrastructureImg,
    gradient: "from-blue-500/20 to-purple-500/5",
    category: "Cloud Services"
  },

  // Cybersecurity Category (11 sub-services as main services)
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    slug: "enterprise-security",
    description: "Comprehensive enterprise security architecture and implementation.",
    image: cybersecurityImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Cybersecurity"
  },
  {
    icon: UserCheck,
    title: "Digital Identity Management",
    slug: "digital-identity",
    description: "IAM solutions, SSO, and identity governance frameworks.",
    image: cybersecurityImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Cybersecurity"
  },
  {
    icon: Scale,
    title: "GRC",
    slug: "grc",
    description: "Governance, Risk, and Compliance management solutions.",
    image: auditImg,
    gradient: "from-amber-500/20 to-yellow-500/5",
    category: "Cybersecurity"
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & Recovery",
    slug: "incident-response",
    description: "24/7 incident response and business continuity planning.",
    image: cybersecurityImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "Cybersecurity"
  },
  {
    icon: FileText,
    title: "Privacy & Data Protection",
    slug: "data-protection",
    description: "Data privacy compliance and protection strategies.",
    image: cybersecurityImg,
    gradient: "from-green-500/20 to-teal-500/5",
    category: "Cybersecurity"
  },
  {
    icon: Brain,
    title: "Secure AI Adoption",
    slug: "secure-ai",
    description: "AI security frameworks and responsible AI implementation.",
    image: aiGovernanceImg,
    gradient: "from-purple-500/20 to-violet-500/5",
    category: "Cybersecurity"
  },
  {
    icon: Radar,
    title: "Threat Detection & Response",
    slug: "threat-detection",
    description: "Advanced threat detection, SOC, and MDR services.",
    image: cybersecurityImg,
    gradient: "from-red-500/20 to-pink-500/5",
    category: "Cybersecurity"
  },
  {
    icon: Search,
    title: "VAPT",
    slug: "vapt",
    description: "Vulnerability Assessment and Penetration Testing services.",
    image: securityAssesmentImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "Cybersecurity"
  },
  {
    icon: Cloud,
    title: "Secure Cloud Transformation",
    slug: "secure-cloud",
    description: "Security-first cloud migration and transformation.",
    image: cybersecurityImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Cybersecurity"
  },
  {
    icon: Layers,
    title: "Service Assurance",
    slug: "service-assurance",
    description: "Security service quality assurance and compliance monitoring.",
    image: qualityAssuranceImg,
    gradient: "from-teal-500/20 to-emerald-500/5",
    category: "Cybersecurity"
  },
  {
    icon: KeyRound,
    title: "PKI",
    slug: "pki",
    description: "Public Key Infrastructure design and management.",
    image: cybersecurityImg,
    gradient: "from-indigo-500/20 to-purple-500/5",
    category: "Cybersecurity"
  },

  // IT Infrastructure Category (12 sub-services as main services)
  {
    icon: Gauge,
    title: "Technology Advisory",
    slug: "technology-advisory",
    description: "Strategic technology consulting and advisory services.",
    image: itInfrastructureImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: Server,
    title: "Servers",
    slug: "servers",
    description: "Server infrastructure design, deployment, and management.",
    image: itInfrastructureImg,
    gradient: "from-slate-500/20 to-gray-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: HardDrive,
    title: "Storage",
    slug: "storage",
    description: "Enterprise storage solutions and data management.",
    image: itInfrastructureImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: Building,
    title: "Data Center Consolidation",
    slug: "datacenter-consolidation",
    description: "Data center optimization and consolidation strategies.",
    image: itInfrastructureImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: Network,
    title: "Networking",
    slug: "networking",
    description: "Enterprise networking design and implementation.",
    image: itInfrastructureImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: Database,
    title: "Database",
    slug: "database",
    description: "Database administration, optimization, and migration.",
    image: datascience,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Restore",
    slug: "backup-restore",
    description: "Enterprise backup solutions and recovery services.",
    image: itInfrastructureImg,
    gradient: "from-teal-500/20 to-cyan-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: ArchiveRestore,
    title: "Disaster Recovery",
    slug: "disaster-recovery",
    description: "DR planning, implementation, and testing.",
    image: itInfrastructureImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: Truck,
    title: "Deployment, Upgradation & Migration",
    slug: "deployment-migration",
    description: "Infrastructure deployment and migration services.",
    image: itInfrastructureImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "IT Infrastructure"
  },
  {
    icon: Server,
    title: "Data Center",
    slug: "data-center",
    description: "Data center design, build, and management.",
    image: itInfrastructureImg,
    gradient: "from-blue-500/20 to-sky-500/5",
    category: "IT Infrastructure"
  },
 

  // Value Add Services Category (2 sub-services as main services)
  {
    icon: Sparkles,
    title: "Service Improvement",
    slug: "service-improvement",
    description: "IT service improvement and optimization initiatives.",
    image: managedServicesImg,
    gradient: "from-cyan-500/20 to-teal-500/5",
    category: "Value Add Services"
  },
  {
    icon: RefreshCcw,
    title: "Continuous Service Improvement",
    slug: "continuous-improvement",
    description: "ITIL-based continuous service improvement programs.",
    image: managedServicesImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "Value Add Services"
  },
];

const categories = [
  { name: "Core", description: "Our flagship technology services" },
  { name: "AI & Automation", description: "Intelligent solutions for the future" },
  { name: "Data & Analytics", description: "Data-driven insights and intelligence" },
  { name: "DevOps & Engineering", description: "Modern development and operations" },
  { name: "High-Tech Solutions", description: "Advanced emerging technologies" },
  { name: "Security & Quality", description: "Protection, compliance, and quality" },
  { name: "Business Services", description: "People and project delivery" },
  { name: "Digital Transformation", description: "Transform your organization" },
  { name: "Cloud Services", description: "Comprehensive cloud solutions and services" },
  { name: "Cybersecurity", description: "Advanced security and resilience services" },
  { name: "IT Infrastructure", description: "Enterprise infrastructure solutions" },
  { name: "Value Add Services", description: "Continuous improvement and optimization" },
];

const categoryIdMap: Record<string, string> = {
  "Core": "core",
  "AI & Automation": "ai-automation",
  "Data & Analytics": "data-analytics",
  "DevOps & Engineering": "devops-engineering",
  "High-Tech Solutions": "hightech-solutions",
  "Security & Quality": "security-quality",
  "Business Services": "business-services",
  "Digital Transformation": "digital-transformation",
  "Cloud Services": "cloud-services",
  "Cybersecurity": "cybersecurity",
  "IT Infrastructure": "it-infrastructure",
  "Value Add Services": "value-add-services",
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
              service catalog covering 60+ specialized technology domains.
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
                <span className="text-gradient">{category.name}</span>
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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