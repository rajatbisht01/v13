import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  services: [
    "AI Services",
    "Cloud Solutions",
    "Cloud Managed Services",
    "Cybersecurity & GRC",
    "Data and Analytics",
    "DevOps & DevSecOps",
    "Automation",
    "Containerization",
  ],
  company: [
    "About Us",
    "Careers",
    "Partners",
    "Contact Us",
    "Blog",
    "Case Studies",
  ],
  legal: [
    "Privacy Policy",
    "Terms & Conditions",
    "Security Policy",
    "Cookie Policy",
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-hero py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
              <span className="text-hero-foreground font-bold text-xl tracking-tight">
                V13<span className="text-primary">Tech</span>
              </span>
            </motion.a>

            <p className="text-hero-muted mb-6 leading-relaxed max-w-md">
              Powering digital transformation for enterprises worldwide. 
              Your trusted partner for cloud, AI, and technology solutions.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@v13technology.com"
                className="flex items-center gap-3 text-hero-muted hover:text-primary transition-colors"
              >
                <Mail size={18} />
                info@v13technology.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-hero-muted hover:text-primary transition-colors"
              >
                <Phone size={18} />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-hero-muted">
                <MapPin size={18} />
                Global Operations
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-hero-muted hover:text-primary hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-hero-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-hero-muted hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-hero-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-hero-muted hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-hero-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-hero-muted hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-hero-muted text-sm">
              © {new Date().getFullYear()} V13 Technology. All rights reserved.
            </p>
            <p className="text-hero-muted text-sm">
              Business Transformation Done Right
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
