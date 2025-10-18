export const metadata = {
  title: 'Documentation | ClauseCompare',
  description: 'Learn how to use ClauseCompare effectively'
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Documentation
          </h1>

          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Create an Account</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sign up with your email address. No credit card required for the free plan.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Upload Contracts</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Navigate to the Compare page and upload two versions of your contract:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Original Contract (Version A)</li>
              <li>New Contract (Version B)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Supported formats: PDF, DOCX, DOC, TXT (max 10MB each)
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Choose Analysis Type</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Check "Enhanced AI explanations" for semantic analysis (recommended). This takes 10-15 seconds longer but catches meaning changes, not just text differences.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Review Results</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your comparison report includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Risk Score (0-100):</strong> Overall risk level of changes</li>
              <li><strong>Executive Summary:</strong> High-level overview</li>
              <li><strong>Clause-by-Clause Analysis:</strong> Every change explained</li>
              <li><strong>Severity Ratings:</strong> HIGH, MEDIUM, LOW for each change</li>
              <li><strong>Negotiation Suggestions:</strong> What to push back on</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Understanding Risk Scores</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li><strong className="text-red-600">80-100 (High Risk):</strong> Critical changes requiring immediate attention</li>
                <li><strong className="text-yellow-600">50-79 (Medium Risk):</strong> Significant changes worth reviewing</li>
                <li><strong className="text-green-600">0-49 (Low Risk):</strong> Minor changes or clarifications</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Always enable AI explanations for important contracts</li>
              <li>Focus on HIGH risk items first</li>
              <li>Review the side-by-side comparison for context</li>
              <li>Export to PDF (Pro) to share with clients or team</li>
              <li>Use the negotiation suggestions as a starting point</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Free vs Pro</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Free</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Comparisons/month</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">10</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Risk scoring</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">✅</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">AI explanations</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">✅</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">PDF export</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">❌</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Priority support</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">❌</td>
                    <td className="border border-gray-200 px-4 py-2 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Need Help?</h2>
            <p className="text-gray-700 leading-relaxed">
              Check our <a href="/help" className="text-blue-600 hover:text-blue-700 font-semibold">Help Center</a> or <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">contact us</a> anytime.
            </p>

          </div>
        </div>

      </div>
    </div>
  )
    }
