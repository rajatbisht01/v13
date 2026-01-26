import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import { categoryIdMap, searchServices } from "@/config/serviceConfig";

const submenu = Object.entries(categoryIdMap).map(([name, slug]) => ({
  label: name,
  href: `/services#${slug}`,
}));

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/services",
    submenu,
  },
  { label: "Who We Are", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState("/");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const isLightHeaderPage = currentPath.startsWith("/resources");

  const navTextClass = (isActive: boolean) => {
    if (isActive) return "text-primary !font-extrabold !text-2xl";
    if (isScrolled || isLightHeaderPage) return "text-black hover:text-primary";
    return "text-white hover:text-primary";
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSearchResults(searchQuery.trim() ? searchServices(searchQuery) : []);
  }, [searchQuery]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const url = new URL(href, window.location.origin);

    if (url.pathname === window.location.pathname && url.hash) {
      e.preventDefault();
      const target = document.getElementById(url.hash.substring(1));
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    } else if (url.hash) {
      sessionStorage.setItem("scrollToSection", url.hash);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightHeaderPage
          ? "glass shadow-lg"
          : "glass-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-1 text-xl font-semibold ${navTextClass(
                    currentPath === item.href
                  )}`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>

                {item.submenu && activeSubmenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full pt-4 w-64"
                  >
                    <div className="bg-secondary/90 p-2 rounded-xl shadow-xl">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleNavClick(e, sub.href)}
                          className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-4">
            <div ref={searchRef} className="relative">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <SearchIcon className="w-5 h-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-card rounded-xl shadow-xl">
                  <Input
                    autoFocus
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              )}
            </div>
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU — SCROLLABLE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="px-4 py-6 space-y-4">
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 font-medium"
                  >
                    {item.label}
                  </a>

                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleNavClick(e, sub.href)}
                          className="block text-sm text-muted-foreground"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="/contact"
                className="block text-center py-3 rounded-lg gradient-primary text-white font-semibold"
              >
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
