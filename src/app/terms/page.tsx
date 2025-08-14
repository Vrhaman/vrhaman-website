export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Effective Date: 08/04/2025</p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Vendor Terms & Conditions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Vendors must accurately describe their vehicles, including make, model, year, and condition.</li>
              <li>Set transparent, competitive pricing.</li>
              <li>Ensure listed availability is accurate.</li>
              <li>Maintain vehicles regularly (cleaning, servicing).</li>
              <li>Respond to customer inquiries promptly.</li>
              <li>Payments are made after deducting platform commission.</li>
              <li>
                <strong>Anti-Bypassing Clause:</strong> Vendors must not contact customers directly to bypass platform fees. Violations lead to:
                <ul className="pl-5 list-disc space-y-1">
                  <li>De-listing from the platform</li>
                  <li>Penalties as decided by the platform</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Customer Terms & Conditions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Bookings must be made only through the platform.</li>
              <li>Prepayment required for confirmation.</li>
              <li>Use vehicles responsibly and lawfully.</li>
              <li>Return vehicles with the same fuel level.</li>
              <li>Customers are liable for any vehicle damage.</li>
              <li>
                <strong>Vehicle Return Policy:</strong>
                <ul className="pl-5 list-disc space-y-1">
                  <li>Take a video before taking the vehicle</li>
                  <li>Agree to vendor's terms before taking vehicle</li>
                  <li>Return the vehicle in original condition</li>
                </ul>
              </li>
              <li>
                <strong>Anti-Bypassing Clause:</strong> Customers must not book directly with vendors. Violations lead to:
                <ul className="pl-5 list-disc space-y-1">
                  <li>No insurance eligibility</li>
                  <li>Platform removal</li>
                  <li>Penalties as decided by platform</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Cancellation & Refund Policy</h2>
            <p className="text-gray-600"><strong>Partial Payment (Non-Refundable):</strong> Forfeit 20% deposit, no refund.</p>
            <p className="text-gray-600"><strong>Full Payment:</strong></p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>More than 48 hours before pickup: 85% refund (excluding platform fees)</li>
              <li>24–48 hours: 50% refund</li>
              <li>Less than 24 hours: 25% refund</li>
              <li>Vendor cancels or platform fails to deliver: 100% refund</li>
              <li>Vehicle not delivered: Delivery fee refunded</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Refunds are processed within 7 business days. No refunds for no-shows.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Platform Conditions</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Vrhaman enables vendors to manage rentals and bookings.</li>
              <li>Vrhaman is not liable for account misuse.</li>
              <li>Accounts/listings may be deactivated without notice for violations.</li>
              <li>Vendors are solely responsible for fulfilling bookings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Indemnification & Liability</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Vendors will indemnify Vrhaman for losses from fraud/negligence.</li>
              <li>Vrhaman is not liable for vendor/customer damages.</li>
              <li>No liability for indirect or consequential damages.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
