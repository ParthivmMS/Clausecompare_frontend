Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Compare Contracts with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Upload two contract versions and get instant, AI-powered analysis of changes, 
          risks, and negotiation suggestions.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Link 
            href="/contracts"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Comparing
          </Link>
          <Link 
            href="/dashboard"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            View Dashboard
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Upload Contracts</h3>
            <p className="text-gray-600">
              Support for PDF, DOCX, and TXT files. Simple drag-and-drop interface.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Intelligent clause comparison with risk scoring and plain-English explanations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Get Suggestions</h3>
            <p className="text-gray-600">
              Receive actionable negotiation strategies for each significant change.
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learn Contract Review Best Practices
          </h2>
          <p className="text-gray-600 mb-6">
            Expert tips and insights for legal professionals
          </p>
          <Link 
            href="/blog"
            className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Read Our Blog →
          </Link>
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-blue-800">
            🔒 <strong>Privacy First:</strong> Your files are processed securely and deleted within 24 hours. 
            We never store or share your contract data.
          </p>
        </div>
      </div>
    </div>
