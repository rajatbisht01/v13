import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const services = [
  "AI Services",
  "Cloud Solutions",
  "Cloud Managed Services",
  "Cybersecurity & GRC",
  "Data and Analytics",
  "DevOps & DevSecOps",
  "Automation & Workflow",
  "Application Services",
  "Containerization",
  "IT Infrastructure",
  "Quantum Computing",
];

const offices = [
  {
    city: "Bangalore",
    country: "India",
    address: "123 Tech Park, Electronic City",
    phone: "+91 80 1234 5678",
  },
  {
    city: "New York",
    country: "USA",
    address: "456 Innovation Ave, Manhattan",
    phone: "+1 212 123 4567",
  },
  {
    city: "London",
    country: "UK",
    address: "789 Digital Lane, Canary Wharf",
    phone: "+44 20 1234 5678",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(16, 23, 42, 0.85), rgba(16, 23, 42, 0.95)), url(${contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a
              <br />
              Conversation
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team of experts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Doe"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@company.com"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Company Name"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+1 234 567 8900"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service of Interest
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your project or requirements..."
                        rows={5}
                        className="bg-background"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gap-2">
                      Send Message
                      <Send size={18} />
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn delay={0.1}>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground">info@v13technology.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-foreground">+91 80 1234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Business Hours</p>
                        <p className="text-foreground">Mon - Fri: 9AM - 6PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Our Offices
                  </h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div key={office.city} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <MapPin className="text-primary" size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {office.city}, {office.country}
                          </p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                          <p className="text-sm text-muted-foreground">{office.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white"
                >
                  <h3 className="text-lg font-bold mb-2">Need Urgent Support?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our support team is available 24/7 for enterprise clients.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                  >
                    Call Support Line
                    <ArrowRight size={16} />
                  </Button>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
