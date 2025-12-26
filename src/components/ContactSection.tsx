import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "AI Services",
  "Cloud Solutions",
  "Cloud Managed Services",
  "Cybersecurity & GRC",
  "Data and Analytics",
  "DevOps & DevSecOps",
  "Automation",
  "Application Services",
  "Containerization",
  "IT Infrastructure",
  "Quantum Computing",
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <section className="py-24 cta-gradient relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
                Need to accelerate{" "}
                <span className="text-gradient">your digital journey?</span>
              </h2>
              <p className="text-hero-muted text-lg leading-relaxed mb-8">
                We have helped hundreds of businesses in multiple geographies leverage 
                the latest technology to drive change. Let us show you how!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-hero-foreground/90">Free consultation call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-hero-foreground/90">Custom solutions for your business</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-hero-foreground/90">Expert team with 10+ years experience</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  required
                  className="bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-muted focus:border-primary"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-muted focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-muted focus:border-primary"
                />
                <Input
                  placeholder="Job Title *"
                  required
                  className="bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-muted focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Company Name *"
                  required
                  className="bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-muted focus:border-primary"
                />
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-hero-foreground">
                    <SelectValue placeholder="I am looking for" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase()}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-muted focus:border-primary resize-none"
              />

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
