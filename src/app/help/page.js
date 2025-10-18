'use client'
import { useState } from 'react'

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "How does ClauseCompare work?",
      answer: "Upload two versions of your contract (PDF, DOCX, or TXT). Our AI analyzes every clause, identifies changes, scores risk levels, and provides plain-English explanations. Results appear in under 2 minutes."
    },
    {
      question: "What file formats are supported?",
      answer: "We support PDF, DOCX, DOC, and TXT files up to 10MB each."
    },
    {
      question: "How accurate is the AI?",
      answer: "ClauseCompare combines rule-based pattern detection (90% accuracy) with AI semantic analysis (95%+ accuracy) to catch both text changes and meaning shifts."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Your files are processed securely and automatically deleted within 24 hours. We never store, share, or use your contracts for training. See our Privacy Policy for details."
    },
    {
      question: "What's included in the free plan?",
      answer: "Free users get 10 comparisons per month, risk scoring, clause-level analysis, and AI explanations. PDF export and unlimited comparisons require Pro ($29/month)."
    },
    {
      question: "How do I upgrade to Pro?",
      answer: "Click 'Upgrade' in your dashboard or visit the Pricing page. Pro includes unlimited comparisons, PDF exports, and priority support."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! Cancel anytime from your profile. You'll keep access until the end of your billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied, email us for a full refund."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, ClauseCompare only supports English-language contracts."
    },
    {
      question: "Can I use this for scanned PDFs?",
      answer: "Not yet. ClauseCompare requires text-based PDFs (not scanned images). OCR support is coming soon."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="#getting-started" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold text-gray-900">Getting Started</h3>
          </a>
          <a href="mailto:parthivmssince2005@gmail.com" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900">Contact Support</h3>
          </a>
          <a href="/blog" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-semibold text-gray-900">Learn More</h3>
          </a>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex justify-between items-center py-3"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400 flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="text-gray-600 leading-relaxed mt-2 pb-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help! Email us anytime.
          </p>
          <a 
            href="mailto:parthivmssince2005@gmail.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  )
}
