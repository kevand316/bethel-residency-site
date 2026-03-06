/*
 * Design: Warm Sanctuary — Organic Modernism
 * Partnerships page: CalAIM-compliant services for county partners
 */
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Building2, Heart, MapPin, Check } from "lucide-react";

const PARTNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/partnership-handshake-bizAar6SM8Ftb28egKdcbT.webp";

const services = [
  {
    title: "Short-Term Post-Hospitalization Housing (STPHH)",
    description:
      "Providing safe, supportive housing immediately following hospital discharge for individuals who need additional support before returning to permanent housing.",
    features: [
      "24/7 on-site support staff",
      "Medication management and reminders",
      "Transportation to follow-up appointments",
      "Connection to ongoing care services",
    ],
  },
  {
    title: "Recuperative Care / Medical Respite",
    description:
      "Specialized care for individuals who are too ill or frail for shelter but not sick enough to be in a hospital, providing a safe place to recover.",
    features: [
      "Skilled medical oversight",
      "Daily meals and nutrition support",
      "Assistance with activities of daily living",
      "Care coordination with medical providers",
    ],
  },
  {
    title: "Housing Navigation Services",
    description:
      "Comprehensive support helping individuals find and secure permanent housing throughout Southern California.",
    features: [
      "Coverage from San Diego to San Luis Obispo",
      "Active research and network building",
      "Application assistance and advocacy",
      "Move-in support and follow-up",
    ],
  },
];

export default function Partnerships() {
  const valuesAnim = useScrollAnimation();
  const servicesAnim = useScrollAnimation(0.1);

  return (
    <>
      <PageHero
        title="County Partnerships"
        subtitle="CalAIM-compliant services for county partners"
        bgImage={PARTNER_IMG}
      />

      {/* Value Proposition */}
      <section className="py-16 md:py-20 bg-cream-dark" ref={valuesAnim.ref}>
        <div className="container">
          <div
            className={`grid gap-8 md:grid-cols-3 transition-all duration-700 ${
              valuesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {[
              {
                icon: Building2,
                title: "State-Billable Services",
                desc: "All services are billable to state and county funding sources",
              },
              {
                icon: Heart,
                title: "Proven Track Record",
                desc: "Over 10 years serving Riverside County residents",
              },
              {
                icon: MapPin,
                title: "Regional Coverage",
                desc: "Services available throughout Southern California",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15">
                    <Icon className="h-8 w-8 text-gold-dark" />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Services */}
      <section className="py-20 md:py-28 bg-background" ref={servicesAnim.ref}>
        <div className="container">
          <SectionHeader
            label="What We Offer"
            title="Our Partnership Services"
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`rounded-xl border border-border/50 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-500 ${
                  servicesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="font-serif text-xl text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
                <div className="grid gap-2.5 md:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 text-gold-dark flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy text-center">
        <div className="container">
          <h2 className="font-serif text-3xl text-cream mb-4">Ready to Partner?</h2>
          <p className="text-cream/70 mb-8 max-w-lg mx-auto">
            We are actively seeking partnerships with county agencies and health plans.
            Contact us to discuss how we can work together to serve your community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-navy px-8 py-6 text-lg font-semibold rounded-lg shadow-lg">
              <Link to="/contact">Express Interest in Partnering</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-cream/30 bg-transparent text-cream hover:bg-cream/10 px-8 py-6 text-lg rounded-lg">
              <a href="tel:9512163326">Call (951) 216-3326</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
