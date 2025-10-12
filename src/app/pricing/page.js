import PricingPlans from '@/components/pricingplans'

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Choose the plan that fits your needs
          </p>
          <p className="text-gray-500">
            All plans include core comparison features. Upgrade anytime.
          </p>
        </div>

        <PricingPlans />

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 text-sm">
                We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise plans.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 text-sm">
                The Free plan is available forever with no credit card required. Professional plans include a 14-day money-back guarantee.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How secure is my data?
              </h3>
              <p className="text-gray-600 text-sm">
                All files are encrypted in transit and at rest. Files are automatically deleted within 24 hours of upload.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer discounts for non-profits?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! We offer 50% discounts for verified non-profit organizations. Contact us for details.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in Enterprise?
              </h3>
              <p className="text-gray-600 text-sm">
                Enterprise includes unlimited comparisons, dedicated support, custom integrations, and optional on-premise deployment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Our team is here to help you choose the right plan
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Sales
            </a>
            <a
              href="/signup"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition border-2 border-white"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </div>
  )
    }
