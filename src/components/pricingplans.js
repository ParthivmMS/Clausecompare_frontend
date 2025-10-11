'use client'

export default function PricingPlans() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for trying out ClauseCompare',
      features: [
        '10 comparisons per month',
        'Basic clause analysis',
        'Template explanations',
        'PDF export',
        'Email support',
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'For legal professionals and small teams',
      features: [
        '100 comparisons per month',
        'Advanced clause analysis',
        'AI-powered explanations',
        'Priority support',
        'Custom risk profiles',
        'API access',
      ],
      cta: 'Start Pro Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited comparisons',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Team training',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`bg-white rounded-lg shadow-lg overflow-hidden ${
            plan.highlighted ? 'ring-2 ring-primary-600 transform scale-105' : ''
          }`}
        >
          {plan.highlighted && (
            <div className="bg-primary-600 text-white text-center py-2 text-sm font-semibold">
              Most Popular
            </div>
          )}
          
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-600">{plan.period}</span>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition ${
                plan.highlighted
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {plan.cta}
            </button>

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
