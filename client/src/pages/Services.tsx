/*
 * Design: Warm Sanctuary — Organic Modernism
 * Services page: Types of Housing, Daily Care accordion, Supportive Services accordion,
 * Housing Navigation section (moved from separate page per user request)
 */
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Utensils,
  Pill,
  Car,
  Users,
  Network,
  Heart,
  HomeIcon,
  FileText,
  Calculator,
  Briefcase,
  DollarSign,
  Map,
  Search,
  Building,
  Activity,
  Hospital,
  ShieldPlus,
} from "lucide-react";

const CARE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/care-support_7ffc2093.jpg";
const NAV_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/housing-navigation-d5fapejkRFDD6qj3cyY9oL.webp";

const housingTypes = [
  {
    icon: Building,
    title: "Independent Living",
    description:
      "Long-term supportive housing for individuals who are ready to live independently with minimal assistance. Residents enjoy fully furnished rooms with access to community resources, on-site management, and a supportive environment that fosters self-sufficiency.",
  },
  {
    icon: Activity,
    title: "Recuperative Care",
    description:
      "Specialized care for individuals who are too ill or frail for shelter but not sick enough to be in a hospital. We provide a safe place to recover with skilled oversight, daily meals, assistance with activities of daily living, and care coordination with medical providers.",
  },
  {
    icon: Hospital,
    title: "Short-Term Post-Hospitalization",
    description:
      "Safe, supportive housing immediately following hospital discharge for individuals who need additional support before transitioning to permanent housing. Includes 24/7 on-site support, medication management, transportation to follow-up appointments, and connection to ongoing care services.",
  },
];

const dailyCareServices = [
  { icon: Clock, title: "24/7 Live-In Manager", description: "Round-the-clock on-site support" },
  { icon: Utensils, title: "Meal Plans Available", description: "Optional daily meals prepared by certified food handlers" },
  { icon: Pill, title: "Medication Reminders", description: "Ensuring you stay on track" },
  { icon: Car, title: "Transportation", description: "To medical appointments and grocery" },
  { icon: ShieldPlus, title: "Medication Pick-Ups", description: "We help coordinate your prescriptions" },
  { icon: Users, title: "IHSS Worker", description: "If applicable for your needs" },
  { icon: Network, title: "Social Programs", description: "Connections to community resources" },
  { icon: Heart, title: "Mental Health Referrals", description: "Outpatient support connections" },
];

const supportiveServices = [
  { icon: HomeIcon, title: "Long-Term Housing Linkages", description: "Connecting to permanent housing" },
  { icon: FileText, title: "Section 8 Assistance", description: "Application help for Riverside County" },
  { icon: Calculator, title: "Credit Repair & Financial Literacy", description: "Build your financial future" },
  { icon: Briefcase, title: "Job Readiness", description: "Resume, interview prep, job search" },
  { icon: DollarSign, title: "Money Management", description: "Budgeting and financial planning" },
];

const counties = [
  "San Diego", "Imperial", "Riverside", "San Bernardino",
  "Orange", "Los Angeles", "Ventura", "Santa Barbara", "San Luis Obispo",
];

export default function Services() {
  const typesAnim = useScrollAnimation(0.1);
  const navAnim = useScrollAnimation(0.1);

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive support services to help you thrive"
        bgImage={CARE_IMG}
      />

      {/* Types of Housing */}
      <section className="py-20 md:py-28 bg-background" ref={typesAnim.ref}>
        <div className="container">
          <SectionHeader
            label="Housing Programs"
            title="Types of Housing We Offer"
            description="Flexible programs designed to meet you where you are"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {housingTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className={`rounded-xl border border-border/50 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-500 ${
                    typesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 mb-5">
                    <Icon className="h-7 w-7 text-gold-dark" />
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-3">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Care & Supportive Services */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container">
          <SectionHeader
            label="What We Provide"
            title="Daily Care & Supportive Services"
            description="Comprehensive support to help you thrive every day"
            light
          />

          <div className="max-w-4xl mx-auto space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="daily-care"
                className="border border-cream/10 rounded-xl bg-cream/5 px-6 data-[state=open]:bg-cream/8"
              >
                <AccordionTrigger className="text-lg font-semibold text-cream hover:no-underline hover:text-gold py-5">
                  Daily Care &amp; Operations
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 pt-2 pb-4 md:grid-cols-2">
                    {dailyCareServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div key={service.title} className="flex items-start gap-3">
                          <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20">
                            <Icon className="h-4 w-4 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-cream text-sm">{service.title}</h4>
                            <p className="text-xs text-cream/60">{service.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="supportive"
                className="border border-cream/10 rounded-xl bg-cream/5 px-6 data-[state=open]:bg-cream/8"
              >
                <AccordionTrigger className="text-lg font-semibold text-cream hover:no-underline hover:text-gold py-5">
                  Supportive Services
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 pt-2 pb-4 md:grid-cols-2">
                    {supportiveServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div key={service.title} className="flex items-start gap-3">
                          <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20">
                            <Icon className="h-4 w-4 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-cream text-sm">{service.title}</h4>
                            <p className="text-xs text-cream/60">{service.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Housing Navigation */}
      <section className="py-20 md:py-28 bg-background" ref={navAnim.ref}>
        <div className="container">
          <SectionHeader
            label="Regional Coverage"
            title="Housing Navigation"
            description="Connecting individuals with housing opportunities across Southern California"
          />

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: Map, title: "Region-Wide Service", desc: "Covering 9 counties from San Diego to San Luis Obispo" },
              { icon: Search, title: "Active Research", desc: "Continuously researching housing opportunities and resources" },
              { icon: Network, title: "Network Building", desc: "Strong partnerships with housing providers and agencies" },
              { icon: HomeIcon, title: "Successful Placements", desc: "Helping individuals find housing throughout Southern CA" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`text-center p-6 rounded-xl bg-cream-dark border border-border/50 transition-all duration-500 ${
                    navAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15">
                    <Icon className="h-7 w-7 text-gold-dark" />
                  </div>
                  <h3 className="font-serif text-base mb-2 text-navy">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Coverage area with image */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={NAV_IMG}
                alt="Southern California coverage area"
                className="w-full h-72 lg:h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy mb-4">Our Coverage Area</h3>
              <p className="text-muted-foreground mb-6">
                We serve the following counties in Southern California:
              </p>
              <div className="grid grid-cols-3 gap-3">
                {counties.map((county) => (
                  <div
                    key={county}
                    className="flex items-center justify-center rounded-lg bg-cream-dark border border-border/50 p-3 text-center text-sm font-medium text-navy"
                  >
                    {county}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl text-navy text-center mb-8">How We Help</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Initial Assessment", desc: "We learn about your housing needs, preferences, and any special requirements" },
                { step: "2", title: "Housing Search", desc: "We research available housing options that match your needs across our coverage area" },
                { step: "3", title: "Placement Support", desc: "We assist with applications, coordinate with providers, and support your move-in process" },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-border/50 bg-white p-6 text-center">
                  <div className="font-serif text-3xl text-gold mb-3">{item.step}</div>
                  <h4 className="font-serif text-lg text-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
