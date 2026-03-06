/*
 * Design: Warm Sanctuary — Organic Modernism
 * Our Homes page: Capacity highlight, amenities grid with proper icons
 */
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Zap, WashingMachine, Droplets, Gift, CookingPot, BedDouble } from "lucide-react";

const FURNISHED_ROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030806075/5aewKRAhbqC7m6eknSmK7M/furnished-room_378b1331.jpg";

const amenities = [
  {
    category: "All Utilities Included",
    icon: Zap,
    items: ["Electricity", "Trash", "Gas", "Cable", "WiFi"],
  },
  {
    category: "Appliances",
    icon: WashingMachine,
    items: ["Washer", "Dryer", "Stove", "Refrigerator", "Microwave", "Dishwasher"],
  },
  {
    category: "Equipped Kitchen",
    icon: CookingPot,
    items: ["Toaster", "Blender", "Silverware", "Dishware"],
  },
  {
    category: "Toiletries",
    icon: Droplets,
    items: ["Toilet Paper", "Paper Towels", "Towels", "Cleaning Supplies"],
  },
  {
    category: "New Bedding",
    icon: BedDouble,
    items: ["Comforter", "Sheets", "Pillow"],
  },
  {
    category: "Welcome Pack",
    icon: Gift,
    items: ["Toothbrush", "Soaps", "Deodorant", "Hygiene Products"],
  },
];

export default function OurHomes() {
  const amenitiesAnim = useScrollAnimation(0.1);

  return (
    <>
      <PageHero
        title="Our Homes"
        subtitle="Safe, Comfortable, and Fully-Equipped Supportive Housing"
        bgImage={FURNISHED_ROOM}
      />

      {/* Capacity */}
      <section className="py-16 bg-cream-dark">
        <div className="container text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl px-8 sm:px-10 py-8 shadow-sm border border-border/50">
            <div>
              <div className="font-serif text-4xl sm:text-5xl text-gold">75+</div>
              <p className="text-sm text-muted-foreground mt-1">Beds Available</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="sm:hidden w-16 h-px bg-border" />
            <div>
              <div className="font-serif text-4xl sm:text-5xl text-gold">8</div>
              <p className="text-sm text-muted-foreground mt-1">Homes</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="sm:hidden w-16 h-px bg-border" />
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-navy">Riverside County</div>
              <p className="text-sm text-muted-foreground mt-1">California</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-28 bg-background" ref={amenitiesAnim.ref}>
        <div className="container">
          <SectionHeader
            label="Fully Equipped"
            title="What's Included in Every Home"
            description="Every home comes fully furnished and equipped with everything you need"
          />

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
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="container">
          <h2 className="font-serif text-3xl text-cream mb-4">Ready to Learn More?</h2>
          <p className="text-cream/70 mb-8 max-w-lg mx-auto">
            Contact us today to discuss housing availability and how we can help
          </p>
          <a
            href="tel:9512163326"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 font-semibold text-navy hover:bg-gold-dark transition-colors shadow-lg"
          >
            Call (951) 216-3326
          </a>
        </div>
      </section>
    </>
  );
}
