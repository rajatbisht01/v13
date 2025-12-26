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

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsTicker/>
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
