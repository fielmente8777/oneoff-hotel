
import { contacts } from "@/utils/constant";

export default function PrivacyPolicyPage() {
  const email = contacts.emails[0];
  const hotelAddress = contacts.addresses[0];

  return (
    <div className="min-h-screen bg-background px-6 lg:px-20 py-10 font-[NeueMontreal-Regular] text-foreground">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-primary mb-6 font-anton">
          Privacy Policy – One-Off Hotels
        </h1>

        <div className="space-y-6 leading-relaxed">

          <p>
            Welcome to <strong>One-Off Hotels</strong>. Your privacy matters to us, 
            and we are committed to protecting any personal information you share 
            while using our website. By accessing our website, you agree to the terms 
            outlined in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">1. Information We Collect</h2>

          <h3 className="text-xl font-medium text-secondary mt-4">
            a) Information You Provide
          </h3>

          <p>
            You may provide personal information including:
          </p>

          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Date of Birth</li>
            <li>Billing or Payment Details</li>
            <li>Reservation / Booking Information</li>
            <li>Details submitted through forms or surveys</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mt-4">
            b) Automatically Collected Data
          </h3>

          <p>We automatically collect technical data such as:</p>

          <ul className="list-disc pl-6">
            <li>Browser type</li>
            <li>IP address</li>
            <li>Time zone</li>
            <li>Device information</li>
            <li>Visited pages & usage patterns</li>
            <li>Referring websites / search terms</li>
            <li>Cookies stored on your device</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            2. Why We Process Your Data
          </h2>

          <ul className="list-disc pl-6">
            <li>To confirm bookings and provide hospitality services</li>
            <li>To improve website performance and user experience</li>
            <li>To send booking updates and service communication</li>
            <li>To detect and prevent fraud</li>
            <li>To comply with legal obligations</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">3. Cookies</h2>

          <p>
            We use cookies to remember your preferences and ensure seamless booking 
            experiences. These cookies do not store personal data or harm your device.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">4. Sharing of Information</h2>

          <p>We only share data when necessary for:</p>

          <ul className="list-disc pl-6">
            <li>Booking & reservation partners</li>
            <li>Website hosting & infrastructure</li>
            <li>Legal compliance</li>
            <li>Fraud detection & safety measures</li>
          </ul>

          <p>
            We do <strong>not</strong> sell or distribute your data to third parties 
            for marketing.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">5. Information Security</h2>

          <p>
            We use technical and administrative safeguards to protect your personal 
            data. However, no online transmission can be guaranteed completely secure.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            6. Rights of European Residents (GDPR)
          </h2>

          <p>You have the right to:</p>

          <ul className="list-disc pl-6">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
            <li>Opt-out of profiling or automated decisions</li>
          </ul>

          <p>
            To exercise any of these rights, contact us using the information below.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            7. Third-Party Links
          </h2>

          <p>
            Our website may contain links to external websites or social media 
            platforms. We are not responsible for their content or privacy policies.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            8. Updates to this Policy
          </h2>

          <p>
            We may update this Privacy Policy occasionally. Continued website usage 
            confirms acceptance of updated terms.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            9. Contact Information
          </h2>

          <p>
            For privacy-related questions, reach out to us at:
          </p>

          <div className="bg-white p-5 rounded-xl border border-primary/20 mt-4">
            <p className="font-semibold text-primary">One-Off Hotels</p>
            <p>{hotelAddress}</p>

            <p className="mt-2">
              <strong>Phone:</strong> {contacts.phoneNumbers[0]}
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
