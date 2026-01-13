import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import AIServices from "./pages/service/AIServices";
// import CloudServices from "./pages/service/CloudServices";
// import DataAnalyticsServices from "./pages/service/DataAnalyticsServices";
// import DevOpsServices from "./pages/service/DevOpsServices";
// import CyberSecurityServices from "./pages/service/CyberSecurityServices";
// import ApplicationServices from "./pages/service/ApplicationServices";
// import AutomationServices from "./pages/service/AutomationServices";
// import InfrastructureServices from "./pages/service/InfrastructureServices";
// import ContainerizationServices from "./pages/service/ContainerizationServices";
// import QuantumServices from "./pages/service/QuantumServices";
import Resources from "./pages/Resources";
import ManagedServices from "./pages/services/ManagedServices";
import Cybersecurity from "./pages/services/CyberSecurity";
import AIDataScience from "./pages/services/AiDataScience";
import CloudInfrastructure from "./pages/services/CloudInfrastructure";
import DevSecOps from "./pages/services/DevSecOps";
import QuantumComputing from "./pages/services/QuantumComputing";
import AIGovernance from "./pages/services/AiGovernance";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import Web3 from "./pages/services/Web3";
import AgenticAI from "./pages/services/AgenticAi";
import AIOps from "./pages/services/AIOps";
import ApplicationSecurity from "./pages/services/ApplicationSecurity";
import StaffManagement from "./pages/services/StaffManagement";
import ProjectManagement from "./pages/services/ProjectManagement";
import QualityAssurance from "./pages/services/QualityAssurance";
import WorkflowAutomation from "./pages/services/WorkflowAutomation";
import ITInfrastructure from "./pages/services/ITInfrastructure";
import Architecture from "./pages/services/Architecture";
import DataScience from "./pages/services/DataScience";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsCondition";
import SecurityPolicy from "./pages/SecurityPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import GDPRCompliance from "./pages/GDPRCompliance";
import DataProtectionPolicy from "./pages/DataProtectionPolicy";
import Chatbot from "./components/Chatbot";
import ApplicationServices from "./pages/services/ApplicationServices";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources/>}/>
           <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/artificial-intelligence" element={<AIDataScience />} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/services/devsecops" element={<DevSecOps />} />
          <Route path="/services/quantum-computing" element={<QuantumComputing />} />
          <Route path="/services/ai-governance" element={<AIGovernance />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/web3" element={<Web3 />} />
          <Route path="/services/agentic-ai" element={<AgenticAI />} />
          <Route path="/services/aiops" element={<AIOps />} />
          <Route path="/services/application-security" element={<ApplicationSecurity />} />
          <Route path="/services/staff-management" element={<StaffManagement />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/quality-assurance" element={<QualityAssurance />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/data-science" element={<DataScience />} />
          <Route path="/services/application-services" element={<ApplicationServices />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms" element={<TermsConditions/>}/>
          <Route path="/security-policy" element={<SecurityPolicy/>}/>
          <Route path="/cookie-policy" element={<CookiePolicy/>}/>
          <Route path="/gdpr" element={<GDPRCompliance/>}/>

          <Route path="/data-protection" element={<DataProtectionPolicy/>}/>

          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
