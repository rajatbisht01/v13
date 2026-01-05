import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { NewsTicker } from "@/components/NewsTicker";
import { Industries } from "@/components/Industries";
import { AboutSection } from "@/components/AboutSection";
import { Team } from "@/components/Teams";
import { Founders } from "@/components/Founders";
import { KeyStrengths } from "@/components/KeyStrengths";
import CorePillars from "@/components/CorePillars";

const Index = () => {
  return (
    <main className="min-h-screen ">
     
        <Header />

      <HeroSection />

      <CorePillars/>
      <ServicesSection />
      <Industries/>
      <KeyStrengths/>
      <StatsSection />
      <PartnersSection />
      <TestimonialsSection />
      <AboutSection/>
      <Founders/>
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
