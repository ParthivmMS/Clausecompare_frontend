export const metadata = {
  title: 'Security | ClauseCompare',
  description: 'Learn how we protect your data and ensure contract confidentiality'
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Security & Privacy
          </h1>

          <div className="prose prose-lg max-w-none">
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We take your contract security seriously. Here's how we protect your data:
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection</h2>
<ul className="space-y-3 text-gray-700 mb-6">
  <li><strong>Encryption in Transit:</strong> All data is encrypted using TLS 1.3</li>
  <li><strong>Encryption at Rest:</strong> Files are encrypted during processing</li>
  <li><strong>Automatic Deletion:</strong> Original files are deleted within 24 hours</li>
  <li><strong>Report Storage:</strong> Comparison reports saved to your dashboard (delete anytime)</li>
  <li><strong>No Training Data:</strong> Your contracts are NEVER used to train AI models</li>
  <li><strong>No Sharing:</strong> We never share your data with third parties</li>
</ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Infrastructure</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Hosting:</strong> Vercel (frontend), Render (backend), Supabase (database)</li>
              <li><strong>AI Provider:</strong> Groq (enterprise-grade, SOC 2 compliant)</li>
              <li><strong>Backups:</strong> Automated database backups (7-day retention)</li>
              <li><strong>Monitoring:</strong> 24/7 uptime monitoring and alerts</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Access Control</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Authentication:</strong> JWT-based with bcrypt password hashing</li>
              <li><strong>Session Management:</strong> Automatic token expiry</li>
              <li><strong>User Isolation:</strong> Your reports are visible only to you</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're committed to meeting industry standards:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>GDPR:</strong> EU data protection compliance</li>
              <li><strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
              <li><strong>Privacy Policy:</strong> Transparent data handling practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We DON'T Do</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>❌ Store contracts permanently</li>
                <li>❌ Share data with third parties</li>
                <li>❌ Use your data for AI training</li>
                <li>❌ Sell your information</li>
                <li>❌ Track you across the web</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reporting Security Issues</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you discover a security vulnerability, please email us immediately at:
            </p>
            <p className="text-gray-700 mb-6">
              <a href="mailto:parthivmssince2005@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                parthivmssince2005@gmail.com
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              We take all reports seriously and will respond within 24 hours.
            </p>

          </div>
        </div>

      </div>
    </div>
  )
    }
