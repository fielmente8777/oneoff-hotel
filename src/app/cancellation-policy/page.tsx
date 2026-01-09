import { contacts } from "@/utils/constant";

export default function CancellationPolicyPage() {
  const email = contacts.emails[0];
  const hotelAddress = contacts.addresses[0];

  return (
    <div className="min-h-screen bg-background px-6 lg:px-20 py-10 font-[NeueMontreal-Regular] text-foreground">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-primary mb-6 font-anton">
          Cancellation & Refund Policy – One-Off Hotels
        </h1>

        <div className="space-y-6 leading-relaxed">

          {/* CANCELLATION POLICY */}
          <h2 className="text-2xl font-semibold text-primary mt-8">
            Cancellation Policy
          </h2>

          <p>
            We understand that plans may change. To support our guests, One-Off
            Hotels follows a clear, fair, and transparent cancellation policy.
          </p>

          <h3 className="text-xl font-semibold text-secondary mt-4">
            1. Free Cancellation Window
          </h3>

          <p>
            No cancellation fees apply if the reservation is cancelled or
            amended:
          </p>

          <ul className="list-disc pl-6">
            <li><strong>Before 2:00 PM (IST)</strong></li>
            <li><strong>7 days or more</strong> prior to the arrival date</li>
          </ul>

          <p>
            Such cancellations or amendments will be processed without any
            charges.
          </p>

          <h3 className="text-xl font-semibold text-secondary mt-4">
            2. Late Cancellations, Amendments & No-Show
          </h3>

          <p>
            For reservations cancelled or amended <strong>within 7 days of
            arrival</strong>, or cancelled after <strong>2:00 PM (IST)</strong>
            within the 7-day window, or in case of a <strong>no-show</strong> on
            the date of check-in:
          </p>

          <p className="mt-2">
            The hotel will charge:
          </p>

          <ul className="list-disc pl-6">
            <li><strong>Full stay charges</strong> OR</li>
            <li><strong>An amount equal to the deposit paid</strong></li>
          </ul>

          <p>Whichever is higher.</p>

          <h3 className="text-xl font-semibold text-secondary mt-4">
            3. Group & Bulk Reservations
          </h3>

          <p>
            Reservations classified as <strong>group bookings or bulk
            reservations</strong> are:
          </p>

          <ul className="list-disc pl-6">
            <li><strong>Non-refundable</strong></li>
            <li><strong>Non-amendable</strong></li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mt-4">
            4. Long Stay Reservations
          </h3>

          <p>
            Reservations for stays longer than <strong>28 nights</strong> are:
          </p>

          <ul className="list-disc pl-6">
            <li><strong>Non-refundable</strong></li>
            <li><strong>Non-amendable</strong></li>
          </ul>

          {/* REFUND POLICY */}
          <h2 className="text-2xl font-semibold text-primary mt-10">
            Refund Policy
          </h2>

          <p>
            Refunds for eligible (refundable) cancellations will follow the
            process outlined below.
          </p>

          <h3 className="text-xl font-semibold text-secondary mt-4">
            1. Refund Processing Timeline
          </h3>

          <p>
            Refunds may take between <strong>2 to 4 weeks</strong> to appear on
            your original payment method. This time frame depends on:
          </p>

          <ul className="list-disc pl-6">
            <li>Bank processing timelines</li>
            <li>Credit card billing cycles</li>
            <li>Payment gateway settlement schedules</li>
            <li>Internal verification and processing</li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mt-4">
            2. Refund Eligibility Factors
          </h3>

          <p>
            Refunds are subject to the following:
          </p>

          <ul className="list-disc pl-6">
            <li>The hotel’s cancellation policy</li>
            <li>Time and date of cancellation</li>
            <li>Deposit/payment method used</li>
            <li>Applicable processing or transaction fees</li>
          </ul>

          <p>
            For complete clarity, please refer to the Cancellation Policy
            outlined above.
          </p>

          {/* CONTACT BOX */}
          <h2 className="text-2xl font-semibold text-primary mt-10">
            Contact Information
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
