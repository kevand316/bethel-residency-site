/*
 * Design: Warm Sanctuary — Organic Modernism
 * About page: Mission statement, story, and locations overview
 */
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Quote } from "lucide-react";

const SUPPORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/support-services-bhf9U7XMEKBSWhv5tnaSYG.webp";

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

export default function About() {
  const storyAnim = useScrollAnimation();
  const locationsAnim = useScrollAnimation();

  return (
    <>
      <PageHero
        title="About Bethel Residency"
        subtitle="Providing safe, supportive housing since 2013"
        bgImage={SUPPORT_IMG}
      />

      {/* Mission Quote */}
      <section className="py-16 md:py-20 bg-cream-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative">
            <Quote className="h-10 w-10 text-gold/40 mx-auto mb-6" />
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-navy leading-relaxed italic">
              "To come alongside individuals who are struggling to find safe, secure
              &amp; quality housing while experiencing a loving, supportive,
              judgment-free environment leading to an abundant life"
            </blockquote>
            <div className="mt-6 h-0.5 w-16 bg-gold mx-auto" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div
            ref={storyAnim.ref}
            className={`grid gap-12 lg:grid-cols-2 items-center transition-all duration-700 ${
              storyAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-gold-dark">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
                A Decade of Compassionate Service
              </h2>
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
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-gold mb-1">8+</div>
                <p className="text-sm text-cream/70">Homes</p>
              </div>
              <div className="bg-navy rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-gold mb-1">75+</div>
                <p className="text-sm text-cream/70">Beds</p>
              </div>
              <div className="bg-navy rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-gold mb-1">10+</div>
                <p className="text-sm text-cream/70">Years</p>
              </div>
              <div className="bg-navy rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-gold mb-1">24/7</div>
                <p className="text-sm text-cream/70">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container" ref={locationsAnim.ref}>
          <SectionHeader
            label="Our Locations"
            title="Eight Homes Across Riverside County"
            description="Each home is fully furnished and staffed with 24/7 on-site management"
            light
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homes.map((home, i) => (
              <div
                key={home.name}
                className={`flex items-center gap-4 rounded-xl border border-cream/10 bg-cream/5 p-5 transition-all duration-500 hover:bg-cream/10 ${
                  locationsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-cream">{home.name}</h3>
                  <p className="text-sm text-cream/60">{home.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
