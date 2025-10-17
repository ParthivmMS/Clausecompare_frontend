'use client'

import { useState } from 'react'
import { Check, Zap, Users, Shield, Crown } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PricingPage() {
  const router = useRouter()
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying out ClauseCompare',
      icon: Shield,
      iconColor: 'text-gray-600',
      popular: false,
      features: [
        { text: '3 contract comparisons per month', included: true },
        { text: 'Basic clause-level difference view', included: true },
        { text: 'Risk scoring', included: true },
        { text: 'Email support (48hr)', included: true },
        { text: 'PDF export', included: false },
        { text: 'AI-powered explanations', included: false },
        { text: 'Unlimited comparisons', included: false },
      ],
      cta: 'Start Free',
      ctaLink: '/signup',
      gradient: 'from-gray-50 to-gray-100'
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'For professionals who need powerful analysis',
      icon: Zap,
      iconColor: 'text-blue-600',
      popular: true,
      features: [
        { text: 'Unlimited contract comparisons', included: true },
        { text: 'AI-powered clause explanations', included: true },
        { text: 'PDF export with branding', included: true },
        { text: 'Highlight differences & changes', included: true },
        { text: 'Advanced risk analysis', included: true },
        { text: 'Email support (4hr)', included: true },
        { text: 'Negotiation suggestions', included: true },
      ],
      cta: 'Start 7-Day Trial',
      ctaLink: '/signup?plan=pro',
      gradient: 'from-blue-50 to-indigo-50',
      badge: '🔥 Most Popular'
    },
    {
      name: 'Team',
      price: { monthly: 79, annual: 790 },
      description: 'For teams managing multiple contracts',
      icon: Users,
      iconColor: 'text-purple-600',
      popular: false,
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Shared workspace for 5 users', included: true },
        { text: 'Team collaboration tools', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support (1hr)', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'API access', included: true },
      ],
      cta: 'Contact Sales',
      ctaLink: 'mailto:sales@clausecompare.com',
      gradient: 'from-purple-50 to-pink-50'
    }
  ]

  const handleCTA = (plan) => {
    if (plan.name === 'Team') {
      window.location.href = plan.ctaLink
    } else if (plan.name === 'Pro') {
      // Future: Connect to payment provider
      // window.open("https://yourstore.gumroad.com/l/clausecomparepro", "_blank")
      router.push(plan.ctaLink)
    } else {
      router.push(plan.ctaLink)
    }
  }

  const savings = billingCycle === 'annual' ? Math.round((29 * 12 - 290) / (29 * 12) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Choose the plan that fits
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              your firm
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more power. No credit card required.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              {savings > 0 && (
                <span className="ml-2 text-xs px-2 py-0.5 bg-green-400 text-green-900 rounded-full font-bold">
                  Save {savings}%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative group ${
                  plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`relative h-full bg-gradient-to-br ${plan.gradient} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                    plan.popular ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full"></div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-white shadow-md mb-4 ${plan.iconColor}`}>
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-extrabold text-gray-900">
                          ${plan.price[billingCycle]}
                        </span>
                        {plan.price[billingCycle] > 0 && (
                          <span className="text-gray-600 ml-2 text-lg">
                            /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                          </span>
                        )}
                      </div>
                      {billingCycle === 'annual' && plan.price.annual > 0 && (
                        <p className="text-sm text-green-600 font-semibold mt-2">
                          ${Math.round(plan.price.annual / 12)}/month billed annually
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleCTA(plan)}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                          : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-500 hover:bg-gray-50'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Features */}
                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`flex-shrink-0 ${
                            feature.included ? 'text-green-500' : 'text-gray-300'
                          }`}>
                            <Check size={20} strokeWidth={3} />
                          </div>
                          <span className={`ml-3 text-sm ${
                            feature.included ? 'text-gray-700' : 'text-gray-400 line-through'
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500 mb-6">TRUSTED BY LEGAL PROFESSIONALS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Law Firm A', 'Company B', 'Legal Tech C', 'Enterprise D'].map((name) => (
              <div key={name} className="text-xl font-bold text-gray-400">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! You can cancel your subscription at any time. No questions asked.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and support international payments.'
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. All files are encrypted and automatically deleted within 24 hours. We never use your contracts for AI training.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-2xl">
          <Crown className="mx-auto text-yellow-300 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your contract review?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join hundreds of legal professionals who trust ClauseCompare
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            Start Free Today →
          </Link>
        </div>
      </div>
    </div>
  )
                                                          }
