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
import AIServices from "./pages/services/AIServices";
import CloudServices from "./pages/services/CloudServices";
import DataAnalyticsServices from "./pages/services/DataAnalyticsServices";
import DevOpsServices from "./pages/services/DevOpsServices";
import CyberSecurityServices from "./pages/services/CyberSecurityServices";
import ApplicationServices from "./pages/services/ApplicationServices";
import AutomationServices from "./pages/services/AutomationServices";
import InfrastructureServices from "./pages/services/InfrastructureServices";
import ContainerizationServices from "./pages/services/ContainerizationServices";
import QuantumServices from "./pages/services/QuantumServices";
import Resources from "./pages/Resources";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources/>}/>
           <Route path="/services/ai" element={<AIServices />} />
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/cybersecurity" element={<CyberSecurityServices />} />
          <Route path="/services/data-analytics" element={<DataAnalyticsServices />} />
          <Route path="/services/applications" element={<ApplicationServices />} />
          <Route path="/services/infrastructure" element={<InfrastructureServices />} />  
          <Route path="/services/automation" element={<AutomationServices />} />
          <Route path="/services/containerization" element={<ContainerizationServices/>}/>
           <Route path="/services/quantum-computing" element={<QuantumServices/>}/>
          <Route path="/services/devops" element={<DevOpsServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
