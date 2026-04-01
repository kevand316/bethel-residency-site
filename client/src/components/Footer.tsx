/*
 * Design: Coastal Calm — Harbor Haven Housing
 * Footer: Deep slate background with teal accents, three-column layout.
 */
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-logo_2dc1057c.png";

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
    <footer className="bg-slate text-mist">
      {/* Teal accent line */}
      <div className="h-1 bg-gradient-to-r from-teal-dark via-teal to-teal-light" />

      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 mb-5">
              <img src={LOGO_URL} alt="Harbor Haven Housing" className="h-14 w-14 opacity-90" />
              <span className="font-serif text-xl text-mist">Harbor Haven</span>
            </button>
            <p className="text-mist/70 text-sm leading-relaxed max-w-xs">
              Safe Harbor. Lasting Home. Providing comprehensive supportive
              housing solutions throughout San Bernardino County and the
              Inland Empire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-teal mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              {footerLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => scrollTo(link.to)}
                  className="text-mist/60 hover:text-teal transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-teal mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="tel:9095554200"
                className="flex items-start gap-3 text-mist/60 hover:text-teal transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 text-teal/70" />
                (909) 555-4200
              </a>
              <a
                href="mailto:info@harborhavenhousing.org"
                className="flex items-start gap-3 text-mist/60 hover:text-teal transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 text-teal/70" />
                info@harborhavenhousing.org
              </a>
              <div className="flex items-start gap-3 text-mist/60">
                <MapPin className="h-4 w-4 mt-0.5 text-teal/70" />
                San Bernardino County, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-mist/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-mist/40">
          <p>&copy; {new Date().getFullYear()} Harbor Haven Housing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-teal transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/sms-terms" className="hover:text-teal transition-colors duration-200">
              SMS Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
