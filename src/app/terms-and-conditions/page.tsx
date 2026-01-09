import { contacts } from "@/utils/constant";

export default function TermsAndConditionsPage() {
  const email = contacts.emails[0];
  const hotelAddress = contacts.addresses[0];

  return (
    <div className="min-h-screen bg-background px-6 lg:px-20 py-10 font-[NeueMontreal-Regular] text-foreground">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-primary mb-6 font-anton">
          Terms & Conditions – One-Off Hotels
        </h1>

        <div className="space-y-6 leading-relaxed">

          <p>
            Welcome to <strong>One-Off Hotels</strong>. By accessing or using our
            website (www.oneoffhotels.com), you agree to these Terms and Conditions.
            If you do not accept any part of these terms, please discontinue using
            the site.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">1. Website Availability</h2>
          <p>
            While our website is accessible globally, continuous uptime is not
            guaranteed. Access may be interrupted due to system maintenance,
            server issues, network disruptions, technical failures, or events
            beyond our control. We are not responsible for such unavailability.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            2. Acceptable Use of the Website
          </h2>
          <p>You agree to use this website only for lawful purposes, including genuine reservations.</p>

          <p className="font-medium mt-2">You must NOT:</p>
          <ul className="list-disc pl-6">
            <li>Make fraudulent, false, or speculative bookings</li>
            <li>Use automated tools to access or misuse the system</li>
            <li>Interfere with the website’s performance or security</li>
            <li>Attempt unauthorized access to our systems or data</li>
          </ul>

          <p>
            You are responsible for protecting your login credentials and any
            actions performed under your account.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            3. Reservations, Amendments & Cancellations
          </h2>

          <h3 className="text-xl text-secondary font-semibold mt-4">a) Reservation Confirmation</h3>
          <p>
            All reservations are subject to availability and are considered
            provisional until you receive an official confirmation number via email.
            We may contact you to reconfirm your booking.
          </p>

          <h3 className="text-xl text-secondary font-semibold mt-4">b) Modifications</h3>
          <p>
            Guests may modify bookings through our website, subject to availability.
            The hotel is not responsible if modifications cannot be accommodated.
          </p>

          <h3 className="text-xl text-secondary font-semibold mt-4">c) Cancellation by Hotel</h3>
          <p>
            If the hotel must cancel or amend a confirmed reservation due to
            unavoidable circumstances, we will offer alternatives or refund the
            deposit paid. This refund is the full extent of our liability.
          </p>

          <h3 className="text-xl text-secondary font-semibold mt-4">d) Guest Cancellation / No-Show</h3>
          <p>
            Late cancellations or failure to check-in may incur a cancellation fee
            per room per night.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            4. Charges & Payment Terms
          </h2>
          <p>
            A deposit may be required to confirm certain reservations. Failure to
            meet payment requirements may lead to automatic cancellation without
            liability. Payments may be made via major credit cards or cash where applicable.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">5. Pricing & Internet Rates</h2>
          <p>
            Rates displayed online are subject to change without prior notice and
            may vary based on hotel-specific policies and availability.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            6. Special Offers & Promotions
          </h2>
          <p>
            Promotional offers may include specific terms, restrictions, and
            limited-time validity. One-Off Hotels reserves the right to modify or
            withdraw promotions at any time.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">7. Cookies</h2>
          <p>
            We use cookies to enhance user experience and analyze website performance.
            Essential cookies do not require consent. Optional cookies may be declined
            through browser settings.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            8. Intellectual Property Rights
          </h2>
          <p>
            All website content—including text, images, logos, designs, and branding—
            is owned by One-Off Hotels or its licensors. You may not copy, republish,
            sell, or distribute content without authorization.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            9. User Comments & Submissions
          </h2>
          <p>
            If comment areas exist, users are solely responsible for their posts.
            Comments must not be unlawful, offensive, defamatory, or infringing.
            The hotel may remove inappropriate content at its discretion.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            10. Hyperlinking to Our Website
          </h2>
          <p>
            Certain organizations may link to our website without prior approval,
            provided the link is not misleading and does not imply endorsement.
          </p>

          {/* Section 11 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            11. Third-Party Websites
          </h2>
          <p>
            We may provide links to external websites. One-Off Hotels is not
            responsible for third-party content, reliability, or privacy practices.
          </p>

          {/* Section 12 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            12. Limitation of Liability
          </h2>
          <p>
            We do not guarantee uninterrupted access, error-free content, or
            virus-free operation. We are not liable for loss of profits, data, or
            indirect damages resulting from use of the website.
          </p>

          {/* Section 13 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            13. Legal Jurisdiction
          </h2>
          <p>
            All disputes arising from the use of this website fall under the
            exclusive jurisdiction of the courts in <strong>Mumbai, India</strong>.
          </p>

          {/* Section 14 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            14. Changes to Terms
          </h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of
            the website indicates acceptance of updated terms.
          </p>

          {/* Contact Box */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            15. Contact Information
          </h2>

          <div className="bg-white p-5 rounded-xl border border-primary/20 mt-4">
            <p className="font-semibold text-primary">One-Off Hotels</p>
            <p>{hotelAddress}</p>

            <p className="mt-2">
              <strong>Phone:</strong> {contacts.phoneNumbers.join(", ")}
            </p>

            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} className="text-secondary underline">
                {email}
              </a>
            </p>

            <p className="mt-2">
              <strong>Website:</strong> www.oneoffhotels.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
