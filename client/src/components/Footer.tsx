/*
 * Design: Warm Sanctuary — Organic Modernism
 * Footer: Deep navy background with gold accents, three-column layout.
 * Uses anchor scroll links for single-page layout.
 */
import { Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/bethel-logo_15c5aaa7.png";

const footerLinks = [
  { to: "about", label: "About Us" },
  { to: "homes", label: "Our Homes" },
  { to: "services", label: "Services" },
  { to: "partnerships", label: "Partnerships" },
  { to: "faq", label: "FAQ" },
  { to: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 72;
    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 mb-5">
              <img src={LOGO_URL} alt="Bethel Residency" className="h-14 w-14 opacity-90" />
              <span className="font-serif text-xl text-cream">Bethel Residency</span>
            </button>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Permanent Supportive Housing with Love &amp; Dignity. Creating
              family-style homes where residents can thrive, regain stability,
              and build a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              {footerLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => scrollTo(link.to)}
                  className="text-cream/60 hover:text-gold transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="tel:9512163326"
                className="flex items-start gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 text-gold/70" />
                (951) 216-3326
              </a>
              <a
                href="mailto:info@bethelresidency.com"
                className="flex items-start gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 text-gold/70" />
                info@bethelresidency.com
              </a>
              <div className="flex items-start gap-3 text-cream/60">
                <MapPin className="h-4 w-4 mt-0.5 text-gold/70" />
                Riverside County, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} Bethel Residency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
