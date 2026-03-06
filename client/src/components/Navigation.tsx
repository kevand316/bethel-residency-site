/*
 * Design: Warm Sanctuary — Organic Modernism
 * Navigation: Sticky top bar with logo, warm gold accent on hover,
 * cream/white background with subtle backdrop blur. Mobile hamburger menu.
 */
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/bethel-logo_15c5aaa7.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/our-homes", label: "Our Homes" },
  { to: "/services", label: "Services" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="Bethel Residency"
              className="h-11 w-11 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-navy tracking-tight">
                Bethel Residency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  location === link.to
                    ? "text-gold-dark bg-gold/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9512163326"
              className="ml-3 flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:bg-navy-light hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(951) 216-3326</span>
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
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location === link.to
                    ? "text-gold-dark bg-gold/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9512163326"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              (951) 216-3326
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
