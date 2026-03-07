/*
 * SMS Terms of Service page — required for Twilio A2P 10DLC registration.
 * Covers opt-in, opt-out, message frequency, and carrier disclaimers.
 */
import PageHero from "@/components/PageHero";
import { Link } from "wouter";

export default function SmsTerms() {
  return (
    <>
      <PageHero
        title="SMS Terms of Service"
        subtitle="Terms governing text message communications from Bethel Residency"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-navy max-w-none text-foreground/80 leading-relaxed space-y-8">

            <p className="text-sm text-muted-foreground">
              <strong>Effective Date:</strong> March 1, 2025 &nbsp;|&nbsp;
              <strong>Last Updated:</strong> March 1, 2025
            </p>

            <p>
              These SMS Terms of Service (&ldquo;Terms&rdquo;) govern text message communications sent by
              Bethel Residency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) to individuals who have provided
              their mobile phone number and consented to receive SMS messages.
            </p>

            {/* 1 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">1. Program Description</h2>
              <p>
                Bethel Residency is a Permanent Supportive Housing organization operating in Riverside
                County, California. Our SMS program is used to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to housing inquiries submitted through our contact form</li>
                <li>Provide updates about housing availability or program information</li>
                <li>Send appointment reminders or follow-up communications</li>
                <li>Share general organizational news and updates relevant to your inquiry</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">2. How to Opt In</h2>
              <p>
                You may opt in to receive SMS messages from Bethel Residency by completing the contact
                form at{" "}
                <a href="https://www.bethelresidency.com/#contact" className="text-gold-dark hover:underline">
                  www.bethelresidency.com
                </a>{" "}
                and checking the box that reads:
              </p>
              <blockquote className="border-l-4 border-gold pl-4 my-3 italic text-foreground/70">
                &ldquo;I agree to receive SMS text messages from Bethel Residency. Message and data rates may
                apply. Reply STOP to opt out at any time.&rdquo;
              </blockquote>
              <p>
                By checking this box and submitting the form, you provide explicit written consent to
                receive text messages at the phone number you provide. Consent to receive SMS is not a
                condition of receiving any services from Bethel Residency.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">3. Message Frequency</h2>
              <p>
                Message frequency will vary depending on the nature of your inquiry and our communications
                with you. You may receive occasional messages as we respond to your inquiry or follow up
                on your housing application. We will not send excessive or unsolicited messages beyond
                what is relevant to your inquiry or our programs.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-xl border-2 border-gold/40 bg-gold/5 p-6">
              <h2 className="font-serif text-2xl text-navy mb-3">4. How to Opt Out</h2>
              <p>
                You may opt out of receiving SMS messages from Bethel Residency at any time by replying{" "}
                <strong>STOP</strong> to any text message you receive from us.
              </p>
              <p className="mt-3">
                After opting out, you will receive one final confirmation text message confirming that
                you have been removed from our messaging list. No further messages will be sent unless
                you opt back in.
              </p>
              <p className="mt-3">
                You may also opt out by contacting us directly at{" "}
                <a href="mailto:info@bethelresidency.com" className="text-gold-dark hover:underline">
                  info@bethelresidency.com
                </a>{" "}
                or{" "}
                <a href="tel:9512163326" className="text-gold-dark hover:underline">
                  (951) 216-3326
                </a>{" "}
                and requesting removal from our SMS list.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">5. Help</h2>
              <p>
                For help regarding our SMS program, reply <strong>HELP</strong> to any message you
                receive from us, or contact us at:
              </p>
              <div className="mt-3 space-y-1">
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

            {/* 6 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">6. Message and Data Rates</h2>
              <p>
                <strong>Message and data rates may apply.</strong> The number of messages you receive
                will depend on your interaction with us. Standard carrier message and data rates may
                apply based on your mobile carrier and plan. Bethel Residency is not responsible for
                any charges your carrier may apply.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">7. Supported Carriers</h2>
              <p>
                Our SMS program is available on most major U.S. carriers, including but not limited to
                AT&amp;T, Verizon, T-Mobile, and Sprint. Carrier coverage and compatibility may vary.
                Bethel Residency is not responsible for delayed or undelivered messages due to carrier
                issues.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">8. Privacy</h2>
              <p>
                Your phone number and SMS consent information are handled in accordance with our{" "}
                <Link href="/privacy-policy" className="text-gold-dark hover:underline">
                  Privacy Policy
                </Link>. We do not sell, rent, or share your phone number with third parties for
                marketing purposes. Your information is used solely to communicate with you on behalf
                of Bethel Residency.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">9. Changes to These Terms</h2>
              <p>
                We may update these SMS Terms of Service from time to time. Changes will be posted on
                this page with an updated effective date. Continued use of our SMS program after
                changes are posted constitutes your acceptance of the updated terms.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-3">10. Contact Us</h2>
              <p>
                If you have questions about these SMS Terms, please contact us:
              </p>
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
