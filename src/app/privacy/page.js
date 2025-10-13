export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> January 13, 2025
        </p>

        {/* No Training Badge */}
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 not-prose">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🔒</span>
            <h2 className="text-2xl font-bold text-green-900 m-0">No AI Training Guarantee</h2>
          </div>
          <p className="text-green-800 text-lg mb-2">
            <strong>We NEVER use your uploaded contracts to train our AI models.</strong>
          </p>
          <p className="text-green-700 text-sm">
            Your documents are processed in real-time and automatically deleted within 24 hours. 
            We do not store, share, or use your data for any purpose beyond generating your comparison report.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Documents You Upload</h3>
          <p className="text-gray-700 mb-4">
            When you use ClauseCompare, you upload contract files for comparison. These files are:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Processed in real-time using our AI engine</li>
            <li>Stored temporarily in encrypted memory during processing</li>
            <li><strong>Automatically deleted within 24 hours</strong></li>
            <li>Never used to train or improve AI models</li>
            <li>Never shared with third parties</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Account Information</h3>
          <p className="text-gray-700 mb-4">
            If you create an account, we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Email address</li>
            <li>Password (encrypted)</li>
            <li>Usage statistics (number of comparisons, timestamps)</li>
            <li>Payment information (processed securely by Stripe)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Contract Analysis:</strong> To generate comparison reports</li>
            <li><strong>Service Delivery:</strong> To provide and maintain ClauseCompare</li>
            <li><strong>Communication:</strong> To send service updates and respond to inquiries</li>
            <li><strong>Billing:</strong> To process payments and manage subscriptions</li>
            <li><strong>Analytics:</strong> To understand usage patterns (anonymized data only)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">🔐 Our Security Measures:</h3>
            <ul className="list-disc pl-6 text-blue-800 space-y-2">
              <li>End-to-end encryption for all file uploads</li>
              <li>Secure HTTPS connections for all data transmission</li>
              <li>Automated file deletion after 24 hours</li>
              <li>No permanent storage of contract content</li>
              <li>Regular security audits and updates</li>
              <li>SOC 2 compliance preparation in progress</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention</h2>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Uploaded contract files</td>
                <td className="border border-gray-300 px-4 py-2"><strong>24 hours (automatic deletion)</strong></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Comparison reports (metadata only)</td>
                <td className="border border-gray-300 px-4 py-2">Until account deletion</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Account information</td>
                <td className="border border-gray-300 px-4 py-2">Until you request deletion</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Usage analytics (anonymized)</td>
                <td className="border border-gray-300 px-4 py-2">18 months</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights (GDPR)</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Access:</strong> Request a copy of your data</li>
            <li><strong>Rectification:</strong> Correct inaccurate information</li>
            <li><strong>Erasure:</strong> Delete your account and all associated data</li>
            <li><strong>Portability:</strong> Export your data in machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing of your data</li>
            <li><strong>Restriction:</strong> Request limitation of data processing</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise these rights, contact us at: <a href="mailto:privacy@clausecompare.com" className="text-primary-600 hover:underline">privacy@clausecompare.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">We use the following third-party services:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Groq AI:</strong> For contract analysis (no data retention)</li>
            <li><strong>Stripe:</strong> For payment processing (PCI compliant)</li>
            <li><strong>Vercel:</strong> For hosting (GDPR compliant)</li>
            <li><strong>Google Analytics:</strong> For anonymized usage statistics (IP anonymization enabled)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Immediate File Deletion</h2>
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
            <p className="text-yellow-900 font-semibold mb-2">
              Need your files deleted immediately?
            </p>
            <p className="text-yellow-800">
              While files are automatically deleted within 24 hours, you can request immediate deletion 
              by contacting <a href="mailto:privacy@clausecompare.com" className="text-yellow-900 underline font-semibold">privacy@clausecompare.com</a> with your report ID.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            For any privacy-related questions or concerns:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-2">ClauseCompare Privacy Team</p>
            <p className="text-gray-700">Email: <a href="mailto:privacy@clausecompare.com" className="text-primary-600 hover:underline">privacy@clausecompare.com</a></p>
            <p className="text-gray-700">Response Time: Within 48 hours</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this privacy policy from time to time. We will notify you of any material changes 
            by email or through the service. Your continued use of ClauseCompare after such changes 
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
          <p className="text-primary-900 font-semibold text-center">
            🔒 Your privacy is our priority. Questions? Email us at privacy@clausecompare.com
          </p>
        </div>
      </div>
    </div>
  )
}
