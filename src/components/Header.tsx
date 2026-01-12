import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const navItems = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/services",
   submenu: [
      {
        label: "Core Technology Services",
        href: "/services#core",
      },
      {
        label: "AI & Automation",
        href: "/services#ai-automation",
      },
      // {
      //   label: "Cloud & Engineering",
      //   href: "/services#cloud-engineering",
      // },
      {
        label: "Security & Quality",
        href: "/services#security-quality",
      },
      {
        label: "Operations & Infrastructure",
        href: "/services#operations",
      },
      {
        label: "Business & Management",
        href: "/services#business-management",
      },
      // {
      //   label: "Quantum & Emerging Tech",
      //   href: "/services#emerging-tech",
      // },
      {
        label: "View All Services",
        href: "/services",
      },
    ],
  },
  { label: "Who We Are", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState("/");
const isLightHeaderPage = currentPath.startsWith("/resources");

  const navTextClass = (isActive: boolean) => {
    if (isActive) return "text-primary";

    if (isScrolled || isLightHeaderPage) {
      return "text-black hover:text-primary";
    }

    return "text-white hover:text-primary";
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const url = new URL(href, window.location.origin);
    
    // Check if this is a hash link on the current page
    if (url.pathname === window.location.pathname && url.hash) {
      e.preventDefault();
      const targetId = url.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      
      setIsMobileMenuOpen(false);
    } else if (url.hash) {
      // If navigating to a different page with hash, store the hash for later
      sessionStorage.setItem('scrollToSection', url.hash);
    }
  };

  // Scroll to section after page load (for cross-page navigation)
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection');
      
      // Wait for page to fully render
      setTimeout(() => {
        const targetId = scrollToSection.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightHeaderPage ? "glass shadow-lg" : "glass-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {/* <div className="w-15 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">Vi-3</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              <span className="text-primary">Technology</span>
            </span> */}
            <img src={logo} alt="Vi-3 Technology"  className="w-20 h-20"/>
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
                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`flex items-center gap-1  text-xl font-bold hover:scale-105 transition-colors ${navTextClass(
                      isActive
                    )}`}
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
                          <div className="bg-gradient-to-r from-secondary/90 to-secondary p-2 rounded-xl shadow-2xl">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/15 rounded-lg transition-all duration-200"
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
           <a href="/contact">
            <Button
              variant="default"
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold px-6 glow-primary"
            >
              Contact Us
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary p-2"
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
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-2 font-medium transition-colors
                      ${
                        currentPath === item.href
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                  </a>

                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a href="/contact" className="gradient-primary text-primary-foreground font-semibold mt-4">
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};