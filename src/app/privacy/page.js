export const metadata = {
  title: 'Privacy Policy | ClauseCompare',
  description: 'How ClauseCompare handles your data and protects your privacy'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 20, 2025
          </p>

          <div className="space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Privacy Promise</h2>
              <p className="text-gray-700 leading-relaxed">
                At ClauseCompare, your privacy is our priority. We believe in complete transparency about what we collect, store, and delete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens to Your Files</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    Original Contract Files (PDF, DOCX, TXT)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Automatically deleted within 24 hours</strong> after you upload them.
                  </p>
                  <p className="text-gray-600 text-sm">
                    We process your files, extract the text for comparison, then permanently delete the original documents from our servers. We don't keep copies anywhere.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Comparison Reports & Analysis
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Stored in your dashboard</strong> until you delete them.
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    Your reports (extracted text, risk scores, AI explanations) are saved so you can:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1">
                    <li>View your comparison history anytime</li>
                    <li>Download past reports as PDFs</li>
                    <li>Track your usage over time</li>
                  </ul>
                  <div className="mt-4 bg-white border border-blue-300 rounded p-3">
                    <p className="text-gray-700 font-semibold text-sm">
                      ✅ You have full control: Delete any report instantly using the "Delete" button in your dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Collect</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Account Info:</strong> Your email address and encrypted password
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Comparison Reports:</strong> Extracted text, risk scores, and analysis results (not original files)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Usage Data:</strong> Number of comparisons, timestamps, feature usage
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We DON'T Do</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Keep your original contract files (deleted within 24 hours)</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Share your data with advertisers or third parties</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Train AI models on your specific contracts</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Track you across the web with cookies</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Sell your information to anyone</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights & Control</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4 font-semibold">
                  You have complete control over your data:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🗑️ <strong>Delete Reports:</strong> Click "Delete" next to any report in your dashboard</li>
                  <li>📥 <strong>Export Data:</strong> Download reports as PDFs (Pro plan)</li>
                  <li>👤 <strong>Delete Account:</strong> Contact us to permanently delete your account and all data</li>
                  <li>📧 <strong>Access Data:</strong> Request a copy of all your data anytime</li>
                  <li>✏️ <strong>Update Info:</strong> Change your email in profile settings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <ul className="space-y-2 text-gray-700">
                <li>🔒 All data encrypted in transit (TLS 1.3)</li>
                <li>🔒 Files encrypted during processing</li>
                <li>🔒 Passwords hashed with bcrypt (never stored in plain text)</li>
                <li>🔒 Database hosted on Supabase (SOC 2 Type II compliant)</li>
                <li>🔒 Regular security audits and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We use trusted, industry-standard services:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Groq AI:</strong> Contract analysis (data not retained after processing)</li>
                <li><strong>Supabase:</strong> Secure database hosting (SOC 2, GDPR compliant)</li>
                <li><strong>Vercel:</strong> Website hosting (SOC 2 compliant)</li>
                <li><strong>Google Analytics:</strong> Anonymous usage statistics only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR & CCPA Compliance</h2>
              <p className="text-gray-700 mb-4">
                We comply with privacy laws including GDPR (EU) and CCPA (California):
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Right to access your data</li>
                <li>✅ Right to delete your data</li>
                <li>✅ Right to export your data</li>
                <li>✅ Right to correct inaccurate data</li>
                <li>✅ Right to opt out of marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Questions about privacy or want to delete your data?
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:parthivmssince2005@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">parthivmssince2005@gmail.com</a>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We respond within 24 hours.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  )
