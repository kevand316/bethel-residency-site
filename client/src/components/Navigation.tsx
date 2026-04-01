/*
 * Design: Coastal Calm — Harbor Haven Housing
 * Navigation: Sticky top bar with anchor-based smooth scroll navigation.
 * Teal/slate palette with Libre Baskerville headings.
 */
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-logo_2dc1057c.png";

const navLinks = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "homes", label: "Our Homes" },
  { to: "services", label: "Services" },
  { to: "partnerships", label: "Partnerships" },
  { to: "faq", label: "FAQ" },
  { to: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.to);
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    if (location !== "/") {
      navigate("/");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: id === "hero" ? 0 : y, behavior: "smooth" });
    }
  }, [location, navigate]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="Harbor Haven Housing"
              className="h-11 w-11 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-slate tracking-tight">
                Harbor Haven
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollTo(link.to)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeSection === link.to
                    ? "text-teal-dark bg-teal/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9095554200"
              className="ml-3 flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:bg-slate-light hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(909) 555-4200</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border pt-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollTo(link.to)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                  activeSection === link.to
                    ? "text-teal-dark bg-teal/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9095554200"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              (909) 555-4200
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
