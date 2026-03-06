/*
 * Design: Warm Sanctuary — Organic Modernism
 * Home page: Full-viewport hero with real photo, services preview with image cards,
 * impact stats with counter animation, and CTA section.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Home as HomeIcon,
  Utensils,
  Heart,
  ShieldCheck,
  Clock,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/hero-bg-KxHHhPSTXuzPwcWwViPvcZ.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/bethel-logo_15c5aaa7.png";
const FURNISHED_ROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/furnished-room_378b1331.jpg";
const KITCHEN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/kitchen_6e4103b2.jpg";
const LAUNDRY = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/laundry_b09fdc56.jpg";
const CARE_SUPPORT = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/care-support_7ffc2093.jpg";
const COMMUNITY = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/community-living-fTDTwhb3J3Tz6w2QqRuAsV.webp";

const highlightServices = [
  {
    icon: HomeIcon,
    title: "Fully Furnished Housing",
    description: "Shared rooms with two beds, all utilities, appliances, and bedding included",
    image: FURNISHED_ROOM,
  },
  {
    icon: Utensils,
    title: "Daily Meals & Kitchen",
    description: "Equipped kitchens and optional meal plans prepared by certified food handlers",
    image: KITCHEN,
  },
  {
    icon: ShieldCheck,
    title: "All Amenities Included",
    description: "Washer, dryer, toiletries, cleaning supplies, and welcome packs provided",
    image: LAUNDRY,
  },
  {
    icon: Heart,
    title: "24/7 Support & Care",
    description: "On-site management, medication reminders, transportation, and case management",
    image: CARE_SUPPORT,
  },
];

function StatCounter({ end, suffix, label, sublabel, isVisible }: {
  end: number; suffix: string; label: string; sublabel: string; isVisible: boolean;
}) {
  const count = useCountUp(end, 2000, isVisible);
  return (
    <div className="text-center">
      <div className="font-serif text-5xl md:text-6xl text-gold mb-2">
        {count}{suffix}
      </div>
      <p className="text-lg font-semibold text-cream">{label}</p>
      <p className="text-sm text-cream/60">{sublabel}</p>
    </div>
  );
}

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

export default function HomePage() {
  const statsAnim = useScrollAnimation(0.2);
  const servicesAnim = useScrollAnimation(0.1);
  const locationsAnim = useScrollAnimation(0.1);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative flex min-h-[92vh] items-center justify-center overflow-hidden -mt-18"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,26,46,0.65) 0%, rgba(26,26,46,0.45) 50%, rgba(26,26,46,0.7) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30 pointer-events-none" />

        <div className="container relative text-center pt-18 pb-20">
          {/* Logo */}
          <div className="mb-8 animate-fade-up">
            <img
              src={LOGO_URL}
              alt="Bethel Residency Logo"
              className="h-28 w-28 md:h-36 md:w-36 mx-auto object-contain"
              style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,0.6))" }}
            />
          </div>

          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-5 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Bethel Residency
          </h1>

          <p
            className="text-xl md:text-2xl text-gold-light font-medium mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Permanent Supportive Housing with Love &amp; Dignity
          </p>

          <p
            className="max-w-2xl mx-auto text-base md:text-lg text-white/80 mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            We are dedicated to providing safe, supportive, and affordable housing
            solutions for individuals in need of all-inclusive communal living. Our
            mission is to create family-style homes where residents can thrive,
            regain stability, and build a brighter future.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg" className="px-8 py-6 text-lg bg-gold hover:bg-gold-dark text-navy font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact">Refer a Resident</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 rounded-lg"
            >
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-20 md:py-28 bg-background" ref={servicesAnim.ref}>
        <div className="container">
          <SectionHeader
            label="What We Provide"
            title="What's Included With Your Housing"
            description="Everything you need for a comfortable, supportive living experience"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlightServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg border border-border/50 transition-all duration-500 ${
                    servicesAnim.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-gold/30 text-navy hover:bg-gold/10">
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY SECTION ===== */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-gold-dark">
                Our Community
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
                More Than Housing — A Family
              </h2>
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
                <img
                  src={COMMUNITY}
                  alt="Community living at Bethel Residency"
                  className="w-full h-80 lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR LOCATIONS ===== */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container" ref={locationsAnim.ref}>
          <SectionHeader
            label="Our Locations"
            title="Eight Homes Across Riverside County"
            description="Each home is fully furnished and staffed with 24/7 on-site management"
          />

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

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-gold/30 text-navy hover:bg-gold/10">
              <Link to="/our-homes" className="flex items-center gap-2">
                View Our Homes <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="py-20 md:py-24 bg-navy" ref={statsAnim.ref}>
        <div className="container">
          <SectionHeader
            label="Our Impact"
            title="Making a Difference Since 2013"
            light
          />
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

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-24 bg-gold relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-navy/70 mb-8 max-w-xl mx-auto">
            Contact us today to learn more about our supportive housing programs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-cream px-8 py-6 text-lg rounded-lg shadow-lg">
              <a href="tel:9512163326">Call (951) 216-3326</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-navy/30 bg-transparent text-navy hover:bg-navy/10 px-8 py-6 text-lg rounded-lg">
              <Link to="/contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
