/*
 * Design: Warm Sanctuary — Organic Modernism
 * Contact page: Contact form (frontend-only) + contact info + map
 */
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
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
import { Phone, Mail, MapPin, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const formAnim = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "general",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (static site — no backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", type: "general", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for referrals, partnerships, or general inquiries"
      />

      <section className="py-20 md:py-28 bg-background" ref={formAnim.ref}>
        <div className="container">
          <div
            className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${
              formAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-navy font-medium">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-navy font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-navy font-medium">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30"
                  />
                </div>

                <div>
                  <Label htmlFor="type" className="text-navy font-medium">Inquiry Type *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
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
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1.5 bg-white border-border/60 focus:border-gold focus:ring-gold/30"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 text-lg rounded-lg shadow-sm"
                >
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
              <h2 className="font-serif text-2xl text-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Kevin Anderson card */}
                <div className="rounded-xl border border-border/50 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                      <User className="h-6 w-6 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy">Kevin Anderson</h3>
                      <p className="text-sm text-muted-foreground">Executive Director</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="tel:9512163326"
                      className="flex items-start gap-3 text-muted-foreground hover:text-gold-dark transition-colors"
                    >
                      <Phone className="h-5 w-5 text-gold-dark mt-0.5" />
                      <span>(951) 216-3326</span>
                    </a>
                    <a
                      href="mailto:info@bethelresidency.com"
                      className="flex items-start gap-3 text-muted-foreground hover:text-gold-dark transition-colors"
                    >
                      <Mail className="h-5 w-5 text-gold-dark mt-0.5" />
                      <span>info@bethelresidency.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-gold-dark mt-0.5" />
                      <span>Riverside County, CA</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
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
    </>
  );
}
