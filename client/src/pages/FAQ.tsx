/*
 * Design: Warm Sanctuary — Organic Modernism
 * FAQ page: Categorized accordion FAQs with corrected answers per user feedback
 */
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    category: "Eligibility",
    questions: [
      {
        q: "Who is eligible for Bethel Residency housing?",
        a: "We serve individuals experiencing homelessness or housing instability, including veterans, seniors, those with mental health challenges, individuals re-entering from incarceration, and those experiencing chronic homelessness. Specific eligibility varies by program.",
      },
      {
        q: "Do you serve veterans?",
        a: "Yes, we welcome veterans and can help connect you with VA-specific benefits and services.",
      },
      {
        q: "Is there an age requirement?",
        a: "We serve adults 18 and older. We have experience working with seniors and can accommodate age-related needs.",
      },
    ],
  },
  {
    category: "Services & Amenities",
    questions: [
      {
        q: "What is included in the housing?",
        a: "All homes are fully furnished and include utilities (electricity, gas, water, cable, WiFi), appliances (washer, dryer, stove, refrigerator, microwave, dishwasher), kitchen equipment, bedding, toiletries, and a welcome pack with hygiene products.",
      },
      {
        q: "What services are provided?",
        a: "We provide 24/7 on-site management, daily meals by certified food handlers, medication reminders, transportation assistance, connections to social services, housing navigation, credit repair, job readiness support, and more.",
      },
      {
        q: "Is participation in services voluntary?",
        a: "Yes, while we strongly encourage engagement with supportive services, participation is voluntary. We create a supportive, judgment-free environment.",
      },
    ],
  },
  {
    category: "Application & Move-In",
    questions: [
      {
        q: "How do I apply?",
        a: "Contact us at (951) 216-3326 or info@bethelresidency.com to begin the application process. We can also accept referrals from social service agencies, hospitals, and county partners.",
      },
      {
        q: "How long does the application process take?",
        a: "Timeline varies based on program availability and individual circumstances. We work to move quickly once eligibility is confirmed.",
      },
      {
        q: "What do I need to bring when I move in?",
        a: "Homes are fully furnished and equipped. You only need to bring personal clothing and items. We provide bedding, toiletries, and kitchen supplies.",
      },
    ],
  },
  {
    category: "Funding & Costs",
    questions: [
      {
        q: "How is this funded?",
        a: "Our programs are funded through a variety of sources, including state and county funding, CalAIM, SSDI/SSI contributions when applicable, private pay, and partnerships with local agencies. We work with each resident to determine their contribution based on their individual circumstances and income.",
      },
      {
        q: "Do I need to pay rent?",
        a: "Cost varies by program and individual circumstances. Some programs are funded through county partnerships or federal benefits, while private pay is also an option. We work with each resident to determine their contribution based on income.",
      },
      {
        q: "Can I use my SSI/SSDI benefits?",
        a: "Yes, for some programs, SSI/SSDI benefits can be used to contribute toward housing costs. We help residents apply for and manage their benefits.",
      },
    ],
  },
  {
    category: "Length of Stay",
    questions: [
      {
        q: "How long can I stay?",
        a: "Our programs are flexible to meet you where you are. Stays can range from as short as 30 to 90 days for transitional needs, to long-term supportive housing for as long as you need — until you're ready for a higher level of independence or care. We work with each resident to create an individualized plan that supports their journey.",
      },
      {
        q: "What happens after I leave?",
        a: "We provide housing navigation services to help residents find permanent housing. We assist with applications, connections to landlords, and transition support to ensure long-term stability.",
      },
    ],
  },
];

export default function FAQ() {
  const faqAnim = useScrollAnimation(0.05);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our programs and services"
      />

      <section className="py-20 md:py-28 bg-background" ref={faqAnim.ref}>
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">
            {faqs.map((section, sIdx) => (
              <div
                key={section.category}
                className={`transition-all duration-500 ${
                  faqAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${sIdx * 100}ms` }}
              >
                <h2 className="font-serif text-2xl text-navy mb-4">{section.category}</h2>
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

          {/* Still have questions */}
          <div className="mt-16 max-w-3xl mx-auto rounded-2xl bg-cream-dark p-8 md:p-10 text-center border border-border/50">
            <h3 className="font-serif text-2xl text-navy mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Contact us directly for more information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9512163326"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-dark transition-colors shadow-sm"
              >
                Call (951) 216-3326
              </a>
              <a
                href="mailto:info@bethelresidency.com"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy/20 bg-white px-6 py-3 font-semibold text-navy hover:bg-muted transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
