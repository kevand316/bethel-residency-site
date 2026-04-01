/*
 * Design: Coastal Calm — Harbor Haven Housing
 * Single-page layout: All sections consolidated into one scrollable page.
 * Sections: Hero, About, Our Homes, Services, Partnerships, FAQ, Contact
 * Teal/slate/mist palette with Libre Baskerville + Source Sans 3
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
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-hero_dcd022cb.jpg";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-logo_2dc1057c.png";
const COMMUNITY = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-community_99e40623.jpg";
const SUPPORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-support_8dfdf473.jpg";
const PARTNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/harbor-partnership_5da20e6d.jpg";
/* Reuse Bethel property photos for furnished room/kitchen/laundry/care (same industry) */
const FURNISHED_ROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/furnished-room_378b1331.jpg";
const KITCHEN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/kitchen_6e4103b2.jpg";
const LAUNDRY = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/laundry_b09fdc56.jpg";
const CARE_SUPPORT = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/care-support_7ffc2093.jpg";
const NAV_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/housing-navigation-d5fapejkRFDD6qj3cyY9oL.webp";

/* ─── Data ─── */
const highlightServices = [
  { icon: HomeIcon, title: "Fully Furnished Housing", description: "Shared rooms with two beds, all utilities, appliances, and bedding included", image: FURNISHED_ROOM },
  { icon: Utensils, title: "Daily Meals & Kitchen", description: "Equipped kitchens and optional meal plans prepared by certified food handlers", image: KITCHEN },
  { icon: ShieldCheck, title: "All Amenities Included", description: "Washer, dryer, toiletries, cleaning supplies, and welcome packs provided", image: LAUNDRY },
  { icon: Heart, title: "24/7 Support & Care", description: "On-site management, medication reminders, transportation, and case management", image: CARE_SUPPORT },
];

const homes = [
  { name: "Baseline House", location: "San Bernardino", beds: 10 },
  { name: "Mountain View", location: "Highland", beds: 8 },
  { name: "Citrus Grove", location: "Redlands", beds: 9 },
  { name: "Palm Court", location: "Fontana", beds: 9 },
  { name: "Sierra House", location: "Rialto", beds: 8 },
  { name: "Valley Oak", location: "Colton", beds: 8 },
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
  { icon: FileText, title: "Section 8 Assistance", description: "Application help for San Bernardino County" },
  { icon: Calculator, title: "Credit Repair & Financial Literacy", description: "Build your financial future" },
  { icon: Briefcase, title: "Job Readiness", description: "Resume, interview prep, job search" },
  { icon: DollarSign, title: "Money Management", description: "Budgeting and financial planning" },
];

const counties = ["San Bernardino County", "Riverside County", "Los Angeles County", "Orange County", "Kern County", "Imperial County"];

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
    description: "Comprehensive support helping individuals find and secure permanent housing throughout the Inland Empire and Southern California.",
    features: ["Coverage across 6 counties", "Active research and network building", "Application assistance and advocacy", "Move-in support and follow-up"],
  },
];

const faqs = [
  {
    category: "Eligibility",
    questions: [
      { q: "Who is eligible for Harbor Haven housing?", a: "We serve individuals experiencing homelessness or housing instability, including veterans, seniors, those with mental health challenges, individuals re-entering from incarceration, and those experiencing chronic homelessness. Specific eligibility varies by program." },
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
      { q: "How do I apply?", a: "Contact us at (909) 555-4200 or info@harborhavenhousing.org to begin the application process. We can also accept referrals from social service agencies, hospitals, and county partners." },
      { q: "How long does the application process take?", a: "Timeline varies based on program availability and individual circumstances. We work to move quickly once eligibility is confirmed." },
      { q: "What do I need to bring when I move in?", a: "Homes are fully furnished and equipped. You only need to bring personal clothing and items. We provide bedding, toiletries, and kitchen supplies." },
    ],
  },
  {
    category: "Funding & Costs",
    questions: [
      { q: "How is this funded?", a: "Our programs are funded through a variety of sources, including state and county funding, CalAIM, SSDI/SSI contributions when applicable, private pay, and partnerships with local agencies. We work with each resident to determine their contribution based on their individual circumstances and income." },
      { q: "Do I need to pay rent?", a: "Cost varies by program and individual circumstances. Some programs are funded through county partnerships, while others may involve a contribution based on your income. We work with each resident individually." },
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
      <div className="font-serif text-5xl md:text-6xl text-teal mb-2">{count}{suffix}</div>
      <p className="text-lg font-semibold text-mist">{label}</p>
      <p className="text-sm text-mist/60">{sublabel}</p>
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent!", { description: "We'll get back to you as soon as possible." });
    setFormData({ name: "", email: "", phone: "", type: "general", message: "" });
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
          backgroundImage: `linear-gradient(135deg, rgba(30,41,59,0.65) 0%, rgba(30,41,59,0.45) 50%, rgba(30,41,59,0.7) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate/60 via-transparent to-slate/30 pointer-events-none" />
        <div className="container relative text-center pt-18 pb-20">
          <div className="mb-8 animate-fade-up">
            <img src={LOGO_URL} alt="Harbor Haven Housing Logo" className="h-40 w-40 md:h-52 md:w-52 mx-auto object-contain" style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,0.6))" }} />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Harbor Haven Housing
          </h1>
          <p className="text-xl md:text-2xl text-teal-light font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Safe Harbor. Lasting Home.
          </p>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.45s" }}>
            We provide a safe harbor for individuals navigating the path from
            homelessness to permanent housing. Our network of homes across
            San Bernardino County offers comprehensive supportive services,
            daily care, and a community built on dignity and respect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button onClick={() => scrollToSection("contact")} size="lg" className="px-8 py-6 text-lg bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
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
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-teal-dark">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-slate mb-6">Born from a Need We Saw Firsthand</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Harbor Haven Housing was founded in 2017 by a group of social
                  workers and healthcare professionals who saw firsthand the gap
                  between hospital discharge and stable housing. What started as a
                  single 6-bed recuperative care home in San Bernardino has grown
                  into a network of 6 homes with over 50 beds across the Inland Empire.
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
              <img src={SUPPORT_IMG} alt="Harbor Haven supportive services" className="w-full h-80 lg:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-28 bg-mist-dark">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-teal-dark">Our Community</span>
              <h2 className="font-serif text-3xl md:text-4xl text-slate mb-6">More Than Housing — A Family</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Harbor Haven, we believe that housing is just the beginning.
                Our family-style homes create an environment where residents support
                each other, share meals together, and build lasting connections.
                Every individual is treated with love, dignity, and respect.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: "24/7 On-Site Support" },
                  { icon: Users, text: "Community Living" },
                  { icon: Heart, text: "Judgment-Free Environment" },
                  { icon: MapPin, text: "San Bernardino County, CA" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/15">
                      <item.icon className="h-4 w-4 text-teal-dark" />
                    </div>
                    <span className="text-sm font-medium text-slate">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={COMMUNITY} alt="Community living at Harbor Haven" className="w-full h-80 lg:h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate/20 to-transparent" />
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal shadow-md">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg mb-1.5 text-slate">{service.title}</h3>
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15">
                        <Icon className="h-5 w-5 text-teal-dark" />
                      </div>
                      <h3 className="font-serif text-lg text-slate">{amenity.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {amenity.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 text-teal-dark flex-shrink-0" />
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
            <SectionHeader label="Our Locations" title="Six Homes Across the Inland Empire" description="Each home is fully furnished and staffed with 24/7 on-site management" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {homes.map((home, i) => (
                <div
                  key={home.name}
                  className={`flex items-center gap-4 rounded-xl border border-border/50 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-500 ${
                    locationsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15">
                    <MapPin className="h-5 w-5 text-teal-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate">{home.name}</h3>
                    <p className="text-sm text-muted-foreground">{home.location} &middot; {home.beds} beds</p>
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
      <section id="services" className="py-20 md:py-28 bg-slate">
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
                    className={`rounded-xl border border-mist/10 bg-mist/5 p-8 hover:bg-mist/8 transition-all duration-500 ${
                      typesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal/20 mb-5">
                      <Icon className="h-7 w-7 text-teal" />
                    </div>
                    <h3 className="font-serif text-xl text-mist mb-3">{type.title}</h3>
                    <p className="text-sm text-mist/70 leading-relaxed">{type.description}</p>
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
                <AccordionItem value="daily-care" className="border border-mist/10 rounded-xl bg-mist/5 px-6 data-[state=open]:bg-mist/8">
                  <AccordionTrigger className="text-lg font-semibold text-mist hover:no-underline hover:text-teal py-5">
                    Daily Care &amp; Operations
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 pt-2 pb-4 md:grid-cols-2">
                      {dailyCareServices.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div key={service.title} className="flex items-start gap-3">
                            <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-teal/20">
                              <Icon className="h-4 w-4 text-teal" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-mist text-sm">{service.title}</h4>
                              <p className="text-xs text-mist/60">{service.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="supportive" className="border border-mist/10 rounded-xl bg-mist/5 px-6 data-[state=open]:bg-mist/8">
                  <AccordionTrigger className="text-lg font-semibold text-mist hover:no-underline hover:text-teal py-5">
                    Supportive Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 pt-2 pb-4 md:grid-cols-2">
                      {supportiveServices.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div key={service.title} className="flex items-start gap-3">
                            <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-teal/20">
                              <Icon className="h-4 w-4 text-teal" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-mist text-sm">{service.title}</h4>
                              <p className="text-xs text-mist/60">{service.description}</p>
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
            <SectionHeader label="Regional Coverage" title="Housing Navigation" description="Connecting individuals with housing opportunities across the Inland Empire" light />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {[
                { icon: Map, title: "Region-Wide Service", desc: "Covering 6 counties across Southern California" },
                { icon: Search, title: "Active Research", desc: "Continuously researching housing opportunities and resources" },
                { icon: Network, title: "Network Building", desc: "Strong partnerships with housing providers and agencies" },
                { icon: HomeIcon, title: "Successful Placements", desc: "Helping individuals find housing throughout Southern CA" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`text-center p-6 rounded-xl bg-mist/5 border border-mist/10 transition-all duration-500 ${
                      navAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/20">
                      <Icon className="h-7 w-7 text-teal" />
                    </div>
                    <h3 className="font-serif text-base mb-2 text-mist">{item.title}</h3>
                    <p className="text-sm text-mist/60">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={NAV_IMG} alt="Southern California coverage area" className="w-full h-72 lg:h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-mist mb-4">Our Coverage Area</h3>
                <p className="text-mist/70 mb-6">We serve the following counties in Southern California:</p>
                <div className="grid grid-cols-2 gap-3">
                  {counties.map((county) => (
                    <div key={county} className="flex items-center justify-center rounded-lg bg-mist/5 border border-mist/10 p-3 text-center text-sm font-medium text-mist">
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
      <section className="py-20 md:py-24 bg-slate" ref={statsAnim.ref}>
        <div className="container">
          <SectionHeader label="Our Impact" title="Making a Difference Since 2017" light />
          <div className="grid gap-8 md:grid-cols-4">
            <StatCounter end={6} suffix="+" label="Homes" sublabel="Across the Inland Empire" isVisible={statsAnim.isVisible} />
            <StatCounter end={52} suffix="+" label="Beds Available" sublabel="Fully furnished rooms" isVisible={statsAnim.isVisible} />
            <StatCounter end={8} suffix="+" label="Years of Service" sublabel="Since 2017" isVisible={statsAnim.isVisible} />
            <div className="text-center">
              <div className="font-serif text-5xl md:text-6xl text-teal mb-2">24/7</div>
              <p className="text-lg font-semibold text-mist">On-Site Support</p>
              <p className="text-sm text-mist/60">Always here for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PARTNERSHIPS
         ════════════════════════════════════════════════════════════ */}
      <section id="partnerships" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={PARTNER_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate/90" />
        </div>

        <div className="container relative">
          <SectionHeader label="County Partnerships" title="CalAIM-Compliant Services" description="We partner with county agencies and health plans to provide state-billable services" light />

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              { icon: Building2, title: "State-Billable Services", desc: "All services are billable to state and county funding sources" },
              { icon: Heart, title: "Proven Track Record", desc: "Over 8 years serving San Bernardino County residents" },
              { icon: MapPin, title: "Regional Coverage", desc: "Services available throughout the Inland Empire" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/20">
                    <Icon className="h-8 w-8 text-teal" />
                  </div>
                  <h3 className="font-serif text-lg text-mist mb-2">{item.title}</h3>
                  <p className="text-sm text-mist/70">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-6 max-w-4xl mx-auto" ref={partnerAnim.ref}>
            {partnershipServices.map((service, i) => (
              <div
                key={service.title}
                className={`rounded-xl border border-mist/10 bg-mist/5 backdrop-blur-sm p-8 hover:bg-mist/8 transition-all duration-500 ${
                  partnerAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="font-serif text-xl text-mist mb-3">{service.title}</h3>
                <p className="text-mist/70 mb-5">{service.description}</p>
                <div className="grid gap-2.5 md:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 text-teal flex-shrink-0" />
                      <span className="text-sm text-mist/70">{feature}</span>
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
                <h3 className="font-serif text-2xl text-slate mb-4">{section.category}</h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.category}-${index}`}
                      className="rounded-xl border border-border/50 bg-white px-6 shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-slate hover:no-underline hover:text-teal-dark py-4 font-medium">
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
      <section id="contact" className="py-20 md:py-28 bg-mist-dark" ref={contactAnim.ref}>
        <div className="container">
          <SectionHeader label="Get In Touch" title="Contact Us" description="Reach out for referrals, partnerships, or general inquiries" />

          <div
            className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${
              contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Contact Form */}
            <div>
              <h3 className="font-serif text-2xl text-slate mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-slate font-medium">Name *</Label>
                  <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-teal focus:ring-teal/30" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate font-medium">Email *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-teal focus:ring-teal/30" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate font-medium">Phone</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-teal focus:ring-teal/30" />
                </div>
                <div>
                  <Label htmlFor="type" className="text-slate font-medium">Inquiry Type *</Label>
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
                  <Label htmlFor="message" className="text-slate font-medium">Message *</Label>
                  <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1.5 bg-white border-border/60 focus:border-teal focus:ring-teal/30" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-6 text-lg rounded-lg shadow-sm">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  You can also reach us directly at{" "}
                  <a href="mailto:info@harborhavenhousing.org" className="text-teal-dark hover:underline">info@harborhavenhousing.org</a>
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-2xl text-slate mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="rounded-xl border border-border/50 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/15">
                      <User className="h-6 w-6 text-teal-dark" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-slate">Maria Delgado</h4>
                      <p className="text-sm text-muted-foreground">Director of Operations</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href="tel:9095554200" className="flex items-start gap-3 text-muted-foreground hover:text-teal-dark transition-colors">
                      <Phone className="h-5 w-5 text-teal-dark mt-0.5" />
                      <span>(909) 555-4200</span>
                    </a>
                    <a href="mailto:info@harborhavenhousing.org" className="flex items-start gap-3 text-muted-foreground hover:text-teal-dark transition-colors">
                      <Mail className="h-5 w-5 text-teal-dark mt-0.5" />
                      <span>info@harborhavenhousing.org</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-teal-dark mt-0.5" />
                      <span>San Bernardino County, CA</span>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-border/50 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.6312806!2d-117.6508268!3d34.1083449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34c3fbb3e5d65%3A0xd0f7c8e5e5e5e5e5!2sSan%20Bernardino%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="San Bernardino County Map"
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
      <section className="py-20 md:py-24 bg-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Contact us today to learn more about our supportive housing programs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-slate hover:bg-slate-light text-mist px-8 py-6 text-lg rounded-lg shadow-lg">
              <a href="tel:9095554200">Call (909) 555-4200</a>
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg">
              Send a Message
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
