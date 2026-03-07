/*
 * Privacy Policy page — required for Twilio A2P 10DLC compliance.
 * Includes SMS messaging consent and opt-out language.
 */
import PageHero from "@/components/PageHero";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-navy max-w-none text-foreground/80 leading-relaxed space-y-8">

            <p className="text-sm text-muted-foreground">
              <strong>Effective Date:</strong> March 1, 2025 &nbsp;|&nbsp;
              <strong>Last Updated:</strong> March 1, 2025
            </p>

            <p>
              Bethel Residency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
              <strong>www.bethelresidency.com</strong>. This Privacy Policy explains how we collect, use,
              disclose, and protect your personal information when you visit our site or contact us.
            </p>

            {/* 1 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Contact information</strong> — name, email address, phone number</li>
                <li><strong>Inquiry details</strong> — the type of inquiry and your message</li>
                <li><strong>SMS consent</strong> — whether you have opted in to receive text messages from us, and the date/time of that consent</li>
                <li><strong>Technical data</strong> — IP address, browser type, pages visited (collected automatically via standard web server logs)</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and provide information about our housing programs</li>
                <li>Send SMS text messages to you if you have provided explicit consent</li>
                <li>Coordinate referrals and partnership opportunities</li>
                <li>Improve our website and communications</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* 3 — SMS */}
            <div className="rounded-xl border-2 border-gold/40 bg-gold/5 p-6">
              <h2 className="font-serif text-2xl text-navy mb-3">3. SMS / Text Message Communications</h2>
              <p>
                If you provide your phone number and check the SMS consent box on our contact form, you are
                agreeing to receive text messages from Bethel Residency. Message types may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Responses to your inquiries</li>
                <li>Updates about housing availability or program information</li>
                <li>Appointment reminders or follow-up communications</li>
              </ul>
              <p className="mt-4">
                <strong>Message frequency</strong> will vary based on your inquiry. You are not required to
                consent to SMS messages as a condition of receiving services from Bethel Residency.
              </p>
              <p className="mt-3">
                <strong>Message and data rates may apply.</strong>
              </p>
              <p className="mt-3">
                <strong>To opt out:</strong> Reply <strong>STOP</strong> to any text message at any time.
                You will receive one confirmation message and will no longer receive texts from us.
              </p>
              <p className="mt-3">
                <strong>For help:</strong> Reply <strong>HELP</strong> or contact us at{" "}
                <a href="mailto:info@bethelresidency.com" className="text-gold-dark hover:underline">
                  info@bethelresidency.com
                </a>{" "}
                or{" "}
                <a href="tel:9512163326" className="text-gold-dark hover:underline">
                  (951) 216-3326
                </a>.
              </p>
              <p className="mt-3">
                We do not sell or share your phone number with third parties for their marketing purposes.
                Your phone number is used solely to communicate with you on behalf of Bethel Residency.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                For full SMS terms, see our{" "}
                <Link href="/sms-terms" className="text-gold-dark hover:underline">
                  SMS Terms of Service
                </Link>.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">4. How We Share Your Information</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share
                your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Service providers</strong> — trusted vendors who help us operate our website and communications (e.g., Supabase for data storage, Twilio for SMS delivery). These parties are contractually obligated to protect your data.</li>
                <li><strong>Legal requirements</strong> — if required by law, court order, or governmental authority</li>
                <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, with prior notice to you</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes
                described in this policy, or as required by law. Contact inquiries are retained for a
                reasonable period to allow us to respond and follow up. You may request deletion of your
                data at any time by contacting us.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of SMS communications at any time by replying STOP</li>
                <li>Withdraw consent for other communications by contacting us</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:info@bethelresidency.com" className="text-gold-dark hover:underline">
                  info@bethelresidency.com
                </a>.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">7. Cookies and Tracking</h2>
              <p>
                Our website may use standard web technologies such as cookies and server logs to
                understand how visitors use the site. We do not use tracking cookies for advertising
                purposes. If we use analytics, it is for internal improvement purposes only.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">8. Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information,
                including encrypted data transmission (HTTPS) and access controls. However, no method
                of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our website is not directed to children under the age of 13. We do not knowingly collect
                personal information from children. If you believe a child has submitted information to us,
                please contact us and we will delete it promptly.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><strong>Bethel Residency</strong></p>
                <p>Riverside County, CA</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@bethelresidency.com" className="text-gold-dark hover:underline">
                    info@bethelresidency.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:9512163326" className="text-gold-dark hover:underline">
                    (951) 216-3326
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
