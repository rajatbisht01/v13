import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
import { MapPin, Phone, Mail, Clock, Send, Building2, Globe, ArrowRight } from "lucide-react";

const services = [
  "24×7 Managed Services",
  "Cybersecurity & Resilience",
  "AI & Data Science",
  "Cloud & Infrastructure",
  "DevSecOps Engineering",
  "Quantum Computing",
  "AI Governance",
  "Agentic AI & AI Agents",
  "AI Workflow Automation",
  "Digital Transformation",
  "Web 3.0 Solutions",
  "AIOps",
  "Application Security",
  "Quality Assurance & Audit",
  "IT Infrastructure Management",
  "Staff Management",
  "Project Management",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)' 
        }}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-hero-muted text-xl">
              Ready to transform your business with cutting-edge technology? Get in touch with our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: 0.2 }}
                         >
                           <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg">
                             <h2 className="text-2xl font-bold text-foreground mb-6">
                               Send Us a Message
                             </h2>
                             <form onSubmit={handleSubmit} className="space-y-6">
                               <div className="grid md:grid-cols-2 gap-6">
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     First Name *
                                   </label>
                                   <Input
                                     required
                                     value={formData.firstName}
                                     onChange={(e) =>
                                       setFormData({ ...formData, firstName: e.target.value })
                                     }
                                     placeholder="John"
                                     className="bg-background"
                                   />
                                 </div>
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Last Name *
                                   </label>
                                   <Input
                                     required
                                     value={formData.lastName}
                                     onChange={(e) =>
                                       setFormData({ ...formData, lastName: e.target.value })
                                     }
                                     placeholder="Doe"
                                     className="bg-background"
                                   />
                                 </div>
                                 
                               </div>
                               <div className="grid md:grid-cols-2 gap-6">
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
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Company
                                   </label>
                                   <Input
                                     value={formData.company}
                                     onChange={(e) =>
                                       setFormData({ ...formData, company: e.target.value })
                                     }
                                     placeholder="Your Company"
                                     className="bg-background"
                                   />
                                 </div>
                                
                               </div>
                               <div className="grid md:grid-cols-2 gap-6">
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
                                     placeholder="+91 98765 43210"
                                     className="bg-background"
                                   />
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
                                   className="bg-background resize-none"
                                 />
                               </div>
                               <Button 
                                 type="submit" 
                                 disabled={isSubmitting}
                                 className="w-full gap-2 gradient-primary text-primary-foreground font-semibold py-6"
                               >
                                 {isSubmitting ? (
                                   <motion.div
                                     animate={{ rotate: 360 }}
                                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                     className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                                   />
                                 ) : (
                                   <>
                                     <Send size={18} />
                                     Send Message
                                   </>
                                 )}
                               </Button>
                               <p className="text-xs text-muted-foreground text-center">
                                 By submitting this form, you agree to our{" "}
                                 <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                               </p>
                             </form>
                           </div>
                         </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
             
                         <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: 0.2 }}
                         >
                           <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg">
                             <h2 className="text-2xl font-bold text-foreground mb-6">
                               Send Us a Message
                             </h2>
                             <form onSubmit={handleSubmit} className="space-y-6">
                               <div className="grid md:grid-cols-2 gap-6">
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     First Name *
                                   </label>
                                   <Input
                                     required
                                     value={formData.firstName}
                                     onChange={(e) =>
                                       setFormData({ ...formData, firstName: e.target.value })
                                     }
                                     placeholder="John"
                                     className="bg-background"
                                   />
                                 </div>
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Last Name *
                                   </label>
                                   <Input
                                     required
                                     value={formData.lastName}
                                     onChange={(e) =>
                                       setFormData({ ...formData, lastName: e.target.value })
                                     }
                                     placeholder="Doe"
                                     className="bg-background"
                                   />
                                 </div>
                                 
                               </div>
                               <div className="grid md:grid-cols-2 gap-6">
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
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Company
                                   </label>
                                   <Input
                                     value={formData.company}
                                     onChange={(e) =>
                                       setFormData({ ...formData, company: e.target.value })
                                     }
                                     placeholder="Your Company"
                                     className="bg-background"
                                   />
                                 </div>
                                
                               </div>
                               <div className="grid md:grid-cols-2 gap-6">
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
                                     placeholder="+91 98765 43210"
                                     className="bg-background"
                                   />
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
                                   className="bg-background resize-none"
                                 />
                               </div>
                               <Button 
                                 type="submit" 
                                 disabled={isSubmitting}
                                 className="w-full gap-2 gradient-primary text-primary-foreground font-semibold py-6"
                               >
                                 {isSubmitting ? (
                                   <motion.div
                                     animate={{ rotate: 360 }}
                                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                     className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                                   />
                                 ) : (
                                   <>
                                     <Send size={18} />
                                     Send Message
                                   </>
                                 )}
                               </Button>
                               <p className="text-xs text-muted-foreground text-center">
                                 By submitting this form, you agree to our{" "}
                                 <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                               </p>
                             </form>
                           </div>
                         </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Registered Office
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        Vi-3 Technologies Private Limited
                      </p>
                      <p className="text-sm text-muted-foreground">
                        No 3, Sadhasivam Avenue, S Kolathur<br />
                        Kovilambakkam, Chennai – 600117<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

             

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white">
                  <h3 className="text-lg font-bold mb-2">Need Urgent Support?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our 24/7 managed services team is ready to assist you with immediate technical support.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                    onClick={() => window.location.href = 'tel:+917010351330'}
                  >
                    Call Support Line
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;