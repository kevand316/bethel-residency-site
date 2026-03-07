/*
 * Design: Warm Sanctuary — Organic Modernism
 * Single-page layout: All sections consolidated into one scrollable page.
 * Sections: Hero, About, Our Homes, Services, Partnerships, FAQ, Contact
 */
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home as HomeIcon,
  Utensils,
  Heart,
  ShieldCheck,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  Zap,
  WashingMachine,
  Droplets,
  Gift,
  CookingPot,
  BedDouble,
  Check,
  Building,
  Activity,
  Hospital,
  Pill,
  Car,
  ShieldPlus,
  Network,
  FileText,
  Calculator,
  Briefcase,
  DollarSign,
  Map,
  Search,
  Building2,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import { toast } from "sonner";

/* ─── CDN URLs ─── */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/hero-people-home-bG9SLz2gJNPX7LoZuFRjUD.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/bethel-logo_15c5aaa7.png";
const FURNISHED_ROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/furnished-room_378b1331.jpg";
const KITCHEN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/kitchen_6e4103b2.jpg";
const LAUNDRY = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/laundry_b09fdc56.jpg";
const CARE_SUPPORT = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/care-support_7ffc2093.jpg";
const COMMUNITY = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/community-living-fTDTwhb3J3Tz6w2QqRuAsV.webp";
const SUPPORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/support-services-bhf9U7XMEKBSWhv5tnaSYG.webp";
const NAV_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/housing-navigation-d5fapejkRFDD6qj3cyY9oL.webp";
const PARTNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/partnership-handshake-bizAar6SM8Ftb28egKdcbT.webp";

/* ─── Data ─── */
const highlightServices = [
  { icon: HomeIcon, title: "Fully Furnished Housing", description: "Shared rooms with two beds, all utilities, appliances, and bedding included", image: FURNISHED_ROOM },
  { icon: Utensils, title: "Daily Meals & Kitchen", description: "Equipped kitchens and optional meal plans prepared by certified food handlers", image: KITCHEN },
  { icon: ShieldCheck, title: "All Amenities Included", description: "Washer, dryer, toiletries, cleaning supplies, and welcome packs provided", image: LAUNDRY },
  { icon: Heart, title: "24/7 Support & Care", description: "On-site management, medication reminders, transportation, and case management", image: CARE_SUPPORT },
];

const homes = [
  { name: "Manfield", location: "Near UC Riverside" },
  { name: "Lone Pine", location: "Moreno Valley" },
  { name: "Grand", location: "Central Riverside" },
  { name: "Walking Beam", location: "High Grove" },
  { name: "Bert Ranch", location: "Woodcrest" },
  { name: "Libby 1", location: "Near UCR" },
  { name: "Libby 2", location: "Near UCR" },
  { name: "Arliss", location: "High Grove Area" },
];

const amenities = [
  { category: "All Utilities Included", icon: Zap, items: ["Electricity", "Trash", "Gas", "Cable", "WiFi"] },
  { category: "Appliances", icon: WashingMachine, items: ["Washer", "Dryer", "Stove", "Refrigerator", "Microwave", "Dishwasher"] },
  { category: "Equipped Kitchen", icon: CookingPot, items: ["Toaster", "Blender", "Silverware", "Dishware"] },
  { category: "Toiletries", icon: Droplets, items: ["Toilet Paper", "Paper Towels", "Towels", "Cleaning Supplies"] },
  { category: "New Bedding", icon: BedDouble, items: ["Comforter", "Sheets", "Pillow"] },
  { category: "Welcome Pack", icon: Gift, items: ["Toothbrush", "Soaps", "Deodorant", "Hygiene Products"] },
];

const housingTypes = [
  { icon: Building, title: "Independent Living", description: "Long-term supportive housing for individuals who are ready to live independently with minimal assistance. Residents enjoy fully furnished rooms with access to community resources, on-site management, and a supportive environment that fosters self-sufficiency." },
  { icon: Activity, title: "Recuperative Care", description: "Specialized care for individuals who are too ill or frail for shelter but not sick enough to be in a hospital. We provide a safe place to recover with skilled oversight, daily meals, assistance with activities of daily living, and care coordination with medical providers." },
  { icon: Hospital, title: "Short-Term Post-Hospitalization", description: "Safe, supportive housing immediately following hospital discharge for individuals who need additional support before transitioning to permanent housing. Includes 24/7 on-site support, medication management, transportation to follow-up appointments, and connection to ongoing care services." },
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

const counties = ["San Diego", "Imperial", "Riverside", "San Bernardino", "Orange", "Los Angeles", "Ventura", "Santa Barbara", "San Luis Obispo"];

const partnershipServices = [
  {
    title: "Short-Term Post-Hospitalization Housing (STPHH)",
    description: "Providing safe, supportive housing immediately following hospital discharge for individuals who need additional support before returning to permanent housing.",
    features: ["24/7 on-site support staff", "Medication management and reminders", "Transportation to follow-up appointments", "Connection to ongoing care services"],
  },
  {
    title: "Recuperative Care / Medical Respite",
    description: "Specialized care for individuals who are too ill or frail for shelter but not sick enough to be in a hospital, providing a safe place to recover.",
    features: ["Skilled medical oversight", "Daily meals and nutrition support", "Assistance with activities of daily living", "Care coordination with medical providers"],
  },
  {
    title: "Housing Navigation Services",
    description: "Comprehensive support helping individuals find and secure permanent housing throughout Southern California.",
    features: ["Coverage from San Diego to San Luis Obispo", "Active research and network building", "Application assistance and advocacy", "Move-in support and follow-up"],
  },
];

const faqs = [
  {
    category: "Eligibility",
    questions: [
      { q: "Who is eligible for Bethel Residency housing?", a: "We serve individuals experiencing homelessness or housing instability, including veterans, seniors, those with mental health challenges, individuals re-entering from incarceration, and those experiencing chronic homelessness. Specific eligibility varies by program." },
      { q: "Do you serve veterans?", a: "Yes, we welcome veterans and can help connect you with VA-specific benefits and services." },
      { q: "Is there an age requirement?", a: "We serve adults 18 and older. We have experience working with seniors and can accommodate age-related needs." },
    ],
  },
  {
    category: "Services & Amenities",
    questions: [
      { q: "What is included in the housing?", a: "All homes are fully furnished and include utilities (electricity, gas, water, cable, WiFi), appliances (washer, dryer, stove, refrigerator, microwave, dishwasher), kitchen equipment, bedding, toiletries, and a welcome pack with hygiene products." },
      { q: "What services are provided?", a: "We provide 24/7 on-site management, daily meals by certified food handlers, medication reminders, transportation assistance, connections to social services, housing navigation, credit repair, job readiness support, and more." },
      { q: "Is participation in services voluntary?", a: "Yes, while we strongly encourage engagement with supportive services, participation is voluntary. We create a supportive, judgment-free environment." },
    ],
  },
  {
    category: "Application & Move-In",
    questions: [
      { q: "How do I apply?", a: "Contact us at (951) 216-3326 or info@bethelresidency.com to begin the application process. We can also accept referrals from social service agencies, hospitals, and county partners." },
      { q: "How long does the application process take?", a: "Timeline varies based on program availability and individual circumstances. We work to move quickly once eligibility is confirmed." },
      { q: "What do I need to bring when I move in?", a: "Homes are fully furnished and equipped. You only need to bring personal clothing and items. We provide bedding, toiletries, and kitchen supplies." },
    ],
  },
  {
    category: "Funding & Costs",
    questions: [
      { q: "How is this funded?", a: "Our programs are funded through a variety of sources, including state and county funding, CalAIM, SSDI/SSI contributions when applicable, private pay, and partnerships with local agencies. We work with each resident to determine their contribution based on their individual circumstances and income." },
      { q: "Do I need to pay rent?", a: "Cost varies by program and individual circumstances. Some programs are funded through county partnerships or federal benefits, while private pay is also an option. We work with each resident to determine their contribution based on income." },
      { q: "Can I use my SSI/SSDI benefits?", a: "Yes, for some programs, SSI/SSDI benefits can be used to contribute toward housing costs. We help residents apply for and manage their benefits." },
    ],
  },
  {
    category: "Length of Stay",
    questions: [
      { q: "How long can I stay?", a: "Our programs are flexible to meet you where you are. Stays can range from as short as 30 to 90 days for transitional needs, to long-term supportive housing for as long as you need — until you're ready for a higher level of independence or care. We work with each resident to create an individualized plan that supports their journey." },
      { q: "What happens after I leave?", a: "We provide housing navigation services to help residents find permanent housing. We assist with applications, connections to landlords, and transition support to ensure long-term stability." },
    ],
  },
];

/* ─── Sub-components ─── */
function StatCounter({ end, suffix, label, sublabel, isVisible }: {
  end: number; suffix: string; label: string; sublabel: string; isVisible: boolean;
}) {
  const count = useCountUp(end, 2000, isVisible);
  return (
    <div className="text-center">
      <div className="font-serif text-5xl md:text-6xl text-gold mb-2">{count}{suffix}</div>
      <p className="text-lg font-semibold text-cream">{label}</p>
      <p className="text-sm text-cream/60">{sublabel}</p>
    </div>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 72;
    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/* ─── Main Page ─── */
export default function HomePage() {
  const statsAnim = useScrollAnimation(0.2);
  const servicesAnim = useScrollAnimation(0.1);
  const locationsAnim = useScrollAnimation(0.1);
  const amenitiesAnim = useScrollAnimation(0.1);
  const typesAnim = useScrollAnimation(0.1);
  const navAnim = useScrollAnimation(0.1);
  const partnerAnim = useScrollAnimation(0.1);
  const faqAnim = useScrollAnimation(0.05);
  const contactAnim = useScrollAnimation(0.1);
  const storyAnim = useScrollAnimation(0.1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", type: "general", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://dorqtterkztyqfnxwxoo.supabase.co/rest/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcnF0dGVya3p0eXFmbnh3eG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4Mzk0OTQsImV4cCI6MjA4ODQxNTQ5NH0.YrEkxK-FMDoMe5HQukheX3W4PG9tqS-zEliF1TSs1OQ",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcnF0dGVya3p0eXFmbnh3eG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4Mzk0OTQsImV4cCI6MjA4ODQxNTQ5NH0.YrEkxK-FMDoMe5HQukheX3W4PG9tqS-zEliF1TSs1OQ",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        type: formData.type,
        message: formData.message,
      }),
    });

    if (res.ok) {
      toast.success("Message sent!", { description: "We'll get back to you as soon as possible." });
      setFormData({ name: "", email: "", phone: "", type: "general", message: "" });
    } else {
      toast.error("Something went wrong", { description: "Please email us at info@bethelresidency.com" });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
         ════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex min-h-[92vh] items-center justify-center overflow-hidden -mt-18"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,26,46,0.65) 0%, rgba(26,26,46,0.45) 50%, rgba(26,26,46,0.7) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30 pointer-events-none" />
        <div className="container relative text-center pt-18 pb-20">
          <div className="mb-8 animate-fade-up">
            <img src={LOGO_URL} alt="Bethel Residency Logo" className="h-28 w-28 md:h-36 md:w-36 mx-auto object-contain" style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,0.6))" }} />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Bethel Residency
          </h1>
          <p className="text-xl md:text-2xl text-gold-light font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Permanent Supportive Housing with Love &amp; Dignity
          </p>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.45s" }}>
            We are dedicated to providing safe, supportive, and affordable housing
            solutions for individuals in need of all-inclusive communal living. Our
            mission is to create family-style homes where residents can thrive,
            regain stability, and build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button onClick={() => scrollToSection("contact")} size="lg" className="px-8 py-6 text-lg bg-gold hover:bg-gold-dark text-navy font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
              Refer a Resident
            </Button>
            <Button onClick={() => scrollToSection("partnerships")} variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 rounded-lg">
              Partner With Us
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          ABOUT
         ════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div
            ref={storyAnim.ref}
            className={`grid gap-12 lg:grid-cols-2 items-center transition-all duration-700 ${
              storyAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-gold-dark">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">A Decade of Compassionate Service</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2013, Bethel Residency has been a beacon of hope for
                  individuals experiencing housing instability in Riverside County.
                  We provide comprehensive supportive housing services including
                  Independent Living, Recuperative Care, Short-Term Post-Hospitalization
                  Housing, and Housing Navigation to those in need.
                </p>
                <p>
                  Our approach combines safe, quality housing with access to social
                  services and personal development resources, creating an environment
                  where every individual has the opportunity to thrive and lead a
                  fulfilling, independent life.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={SUPPORT_IMG} alt="Bethel Residency supportive services" className="w-full h-80 lg:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-gold-dark">Our Community</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">More Than Housing — A Family</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Bethel Residency, we believe that housing is just the beginning.
                Our family-style homes create an environment where residents support
                each other, share meals together, and build lasting connections.
                Every individual is treated with love, dignity, and respect.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: "24/7 On-Site Support" },
                  { icon: Users, text: "Community Living" },
                  { icon: Heart, text: "Judgment-Free Environment" },
                  { icon: MapPin, text: "Riverside County, CA" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15">
                      <item.icon className="h-4 w-4 text-gold-dark" />
                    </div>
                    <span className="text-sm font-medium text-navy">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={COMMUNITY} alt="Community living at Bethel Residency" className="w-full h-80 lg:h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          OUR HOMES
         ════════════════════════════════════════════════════════════ */}
      <section id="homes" className="py-20 md:py-28 bg-background">
        <div className="container">
          {/* What's Included */}
          <div ref={servicesAnim.ref}>
            <SectionHeader label="What We Provide" title="What's Included With Your Housing" description="Everything you need for a comfortable, supportive living experience" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {highlightServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg border border-border/50 transition-all duration-500 ${
                      servicesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold shadow-md">
                          <Icon className="h-5 w-5 text-navy" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg mb-1.5 text-navy">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-20" ref={amenitiesAnim.ref}>
            <SectionHeader label="Fully Equipped" title="What's Included in Every Home" description="Every home comes fully furnished and equipped with everything you need" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity, i) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={amenity.category}
                    className={`rounded-xl border border-border/50 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 ${
                      amenitiesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15">
                        <Icon className="h-5 w-5 text-gold-dark" />
                      </div>
                      <h3 className="font-serif text-lg text-navy">{amenity.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {amenity.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 text-gold-dark flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Locations */}
          <div className="mt-20" ref={locationsAnim.ref}>
            <SectionHeader label="Our Locations" title="Eight Homes Across Riverside County" description="Each home is fully furnished and staffed with 24/7 on-site management" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {homes.map((home, i) => (
                <div
                  key={home.name}
                  className={`flex items-center gap-4 rounded-xl border border-border/50 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-500 ${
                    locationsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15">
                    <MapPin className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{home.name}</h3>
                    <p className="text-sm text-muted-foreground">{home.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICES
         ════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-28 bg-navy">
        <div className="container">
          {/* Housing Types */}
          <div ref={typesAnim.ref}>
            <SectionHeader label="Housing Programs" title="Types of Housing We Offer" description="Flexible programs designed to meet you where you are" light />
            <div className="grid gap-6 lg:grid-cols-3">
              {housingTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className={`rounded-xl border border-cream/10 bg-cream/5 p-8 hover:bg-cream/8 transition-all duration-500 ${
                      typesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 mb-5">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-cream mb-3">{type.title}</h3>
                    <p className="text-sm text-cream/70 leading-relaxed">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Daily Care & Supportive Services Accordions */}
          <div className="mt-20">
            <SectionHeader label="What We Provide" title="Daily Care & Supportive Services" description="Comprehensive support to help you thrive every day" light />
            <div className="max-w-4xl mx-auto space-y-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="daily-care" className="border border-cream/10 rounded-xl bg-cream/5 px-6 data-[state=open]:bg-cream/8">
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
                <AccordionItem value="supportive" className="border border-cream/10 rounded-xl bg-cream/5 px-6 data-[state=open]:bg-cream/8">
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

          {/* Housing Navigation */}
          <div className="mt-20" ref={navAnim.ref}>
            <SectionHeader label="Regional Coverage" title="Housing Navigation" description="Connecting individuals with housing opportunities across Southern California" light />
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
                    className={`text-center p-6 rounded-xl bg-cream/5 border border-cream/10 transition-all duration-500 ${
                      navAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="font-serif text-base mb-2 text-cream">{item.title}</h3>
                    <p className="text-sm text-cream/60">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={NAV_IMG} alt="Southern California coverage area" className="w-full h-72 lg:h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-cream mb-4">Our Coverage Area</h3>
                <p className="text-cream/70 mb-6">We serve the following counties in Southern California:</p>
                <div className="grid grid-cols-3 gap-3">
                  {counties.map((county) => (
                    <div key={county} className="flex items-center justify-center rounded-lg bg-cream/5 border border-cream/10 p-3 text-center text-sm font-medium text-cream">
                      {county}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          IMPACT STATS
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-navy" ref={statsAnim.ref}>
        <div className="container">
          <SectionHeader label="Our Impact" title="Making a Difference Since 2013" light />
          <div className="grid gap-8 md:grid-cols-4">
            <StatCounter end={8} suffix="+" label="Homes" sublabel="Across Riverside County" isVisible={statsAnim.isVisible} />
            <StatCounter end={75} suffix="+" label="Beds Available" sublabel="Fully furnished rooms" isVisible={statsAnim.isVisible} />
            <StatCounter end={10} suffix="+" label="Years of Service" sublabel="Since 2013" isVisible={statsAnim.isVisible} />
            <div className="text-center">
              <div className="font-serif text-5xl md:text-6xl text-gold mb-2">24/7</div>
              <p className="text-lg font-semibold text-cream">On-Site Support</p>
              <p className="text-sm text-cream/60">Always here for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PARTNERSHIPS
         ════════════════════════════════════════════════════════════ */}
      <section id="partnerships" className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img src={PARTNER_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>

        <div className="container relative">
          <SectionHeader label="County Partnerships" title="CalAIM-Compliant Services" description="We partner with county agencies and health plans to provide state-billable services" light />

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              { icon: Building2, title: "State-Billable Services", desc: "All services are billable to state and county funding sources" },
              { icon: Heart, title: "Proven Track Record", desc: "Over 10 years serving Riverside County residents" },
              { icon: MapPin, title: "Regional Coverage", desc: "Services available throughout Southern California" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/20">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-cream mb-2">{item.title}</h3>
                  <p className="text-sm text-cream/70">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-6 max-w-4xl mx-auto" ref={partnerAnim.ref}>
            {partnershipServices.map((service, i) => (
              <div
                key={service.title}
                className={`rounded-xl border border-cream/10 bg-cream/5 backdrop-blur-sm p-8 hover:bg-cream/8 transition-all duration-500 ${
                  partnerAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="font-serif text-xl text-cream mb-3">{service.title}</h3>
                <p className="text-cream/70 mb-5">{service.description}</p>
                <div className="grid gap-2.5 md:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-cream/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQ
         ════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 md:py-28 bg-background" ref={faqAnim.ref}>
        <div className="container">
          <SectionHeader label="Common Questions" title="Frequently Asked Questions" description="Find answers to common questions about our programs and services" />

          <div className="max-w-3xl mx-auto space-y-10">
            {faqs.map((section, sIdx) => (
              <div
                key={section.category}
                className={`transition-all duration-500 ${
                  faqAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${sIdx * 100}ms` }}
              >
                <h3 className="font-serif text-2xl text-navy mb-4">{section.category}</h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.category}-${index}`}
                      className="rounded-xl border border-border/50 bg-white px-6 shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-navy hover:no-underline hover:text-gold-dark py-4 font-medium">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CONTACT
         ════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28 bg-cream-dark" ref={contactAnim.ref}>
        <div className="container">
          <SectionHeader label="Get In Touch" title="Contact Us" description="Reach out for referrals, partnerships, or general inquiries" />

          <div
            className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${
              contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Contact Form */}
            <div>
              <h3 className="font-serif text-2xl text-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-navy font-medium">Name *</Label>
                  <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-navy font-medium">Email *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-navy font-medium">Phone</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30" />
                </div>
                <div>
                  <Label htmlFor="type" className="text-navy font-medium">Inquiry Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger className="mt-1.5 bg-white border-border/60">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="referral">Resident Referral</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-navy font-medium">Message *</Label>
                  <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 text-lg rounded-lg shadow-sm">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  You can also reach us directly at{" "}
                  <a href="mailto:info@bethelresidency.com" className="text-gold-dark hover:underline">info@bethelresidency.com</a>
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-2xl text-navy mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="rounded-xl border border-border/50 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                      <User className="h-6 w-6 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-navy">Kevin Anderson</h4>
                      <p className="text-sm text-muted-foreground">Executive Director</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href="tel:9512163326" className="flex items-start gap-3 text-muted-foreground hover:text-gold-dark transition-colors">
                      <Phone className="h-5 w-5 text-gold-dark mt-0.5" />
                      <span>(951) 216-3326</span>
                    </a>
                    <a href="mailto:info@bethelresidency.com" className="flex items-start gap-3 text-muted-foreground hover:text-gold-dark transition-colors">
                      <Mail className="h-5 w-5 text-gold-dark mt-0.5" />
                      <span>info@bethelresidency.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-gold-dark mt-0.5" />
                      <span>Riverside County, CA</span>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-border/50 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.0283838272!2d-117.6508268!3d33.9533546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae6530746d45%3A0xaa1ef49923eb1ce1!2sRiverside%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Riverside County Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-navy/70 mb-8 max-w-xl mx-auto">
            Contact us today to learn more about our supportive housing programs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-cream px-8 py-6 text-lg rounded-lg shadow-lg">
              <a href="tel:9512163326">Call (951) 216-3326</a>
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg" className="border-2 border-navy/30 bg-transparent text-navy hover:bg-navy/10 px-8 py-6 text-lg rounded-lg">
              Send a Message
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
