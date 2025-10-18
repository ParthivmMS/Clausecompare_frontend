export const metadata = {
  title: 'About Us | ClauseCompare',
  description: 'Learn about ClauseCompare and our mission to help legal professionals review contracts faster and more accurately.'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About ClauseCompare
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              ClauseCompare was built to solve a problem every lawyer faces: comparing contract versions takes too long and it's too easy to miss critical changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We believe legal professionals should spend their time analyzing legal strategy, not hunting for text differences. ClauseCompare uses AI to catch what humans might miss—in seconds instead of hours.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why We Built This</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              After talking to 50+ lawyers, we learned that manual contract comparison isn't just slow—it's risky. Subtle changes in liability caps, notice periods, and confidentiality clauses slip through constantly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Traditional tools only find text differences. ClauseCompare understands <strong>legal meaning</strong> and flags changes by risk level, so you focus on what actually matters.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Privacy First:</strong> Your contracts are never stored or shared. Files are deleted within 24 hours.</li>
              <li><strong>Accuracy:</strong> 95%+ accuracy rate with both rule-based and AI-powered analysis.</li>
              <li><strong>Simplicity:</strong> No complex setup. Upload, compare, done.</li>
              <li><strong>Transparency:</strong> Every change includes AI explanations so you understand the reasoning.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Built By</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              ClauseCompare was founded by <strong>Parthiv M S</strong>, a legal tech founder who spent years watching lawyers waste time on manual contract review. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're a small team focused on building tools that actually help legal professionals work smarter.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions? <a href="mailto:parthivmssince2005@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">Email us</a> — we'd love to hear from you.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
    }
