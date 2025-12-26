import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "AI Services", href: "/services/ai" },
      { label: "Cloud Solutions", href: "/services/cloud" },
      { label: "Cybersecurity & GRC", href: "/services/cybersecurity" },
      { label: "Data and Analytics", href: "/services/data-analytics" },
      { label: "DevOps & DevSecOps", href: "/services/devops" },
      { label: "Automation", href: "/services/automation" },
      { label: "Application Services", href: "/services/applications" },
      { label: "IT Infrastructure", href: "/services/infrastructure" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">Vi3</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              <span className="text-primary">Technology</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href !== "#" && currentPath === item.href;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.label)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 text-lg font-semibold transition-colors duration-200
                      ${
                        isActive
                          ? "text-primary"
                          : isScrolled
                          ? "text-black hover:text-primary"
                          : "text-white hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Submenu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-4 w-64"
                        >
                          <div className="bg-secondary rounded-xl shadow-2xl">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold px-6 glow-primary"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className={`block py-2 font-medium transition-colors
                      ${
                        currentPath === item.href
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>

                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button className="gradient-primary text-primary-foreground font-semibold mt-4">
                Contact Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
