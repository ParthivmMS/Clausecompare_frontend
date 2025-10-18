import Link from 'next/link'

export const metadata = {
  title: 'Contract Review Blog | ClauseCompare',
  description: 'Tips, guides, and insights for legal professionals on contract review and AI-powered legal tech.',
  keywords: 'contract review, legal tech blog, AI contract analysis, legal tips',
}

export default function BlogPage() {
  const posts = [
    {
      title: '10 Contract Clauses Lawyers Most Often Miss',
      slug: '10-contract-clauses-lawyers-miss',
      excerpt: 'Learn the most commonly overlooked clauses in contract reviews and how to spot them before they become costly problems.',
      date: 'Jan 20, 2025',
      readTime: '5 min read',
      category: 'Contract Review'
    },
    {
      title: 'How AI is Changing Contract Review in 2025',
      slug: 'ai-contract-review-2025',
      excerpt: 'Explore the future of legal tech and what AI-powered contract analysis means for law firms and legal professionals.',
      date: 'Jan 18, 2025',
      readTime: '7 min read',
      category: 'Legal Tech'
    },
    {
      title: 'Manual vs AI Contract Comparison: Cost Analysis',
      slug: 'manual-vs-ai-contract-comparison',
      excerpt: 'Breaking down the real cost of manual contract review versus AI-powered tools. The numbers might surprise you.',
      date: 'Jan 15, 2025',
      readTime: '6 min read',
      category: 'Business'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contract Review Blog
            </h1>
            <p className="text-xl text-blue-100">
              Tips, guides, and insights for legal professionals
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-6">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                  >
                    Read More 
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-blue-700 rounded-lg p-8 text-white shadow-lg">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">
                Get Contract Review Tips Weekly
              </h3>
              <p className="text-blue-100 mb-6">
                Join 200+ legal professionals learning to review contracts faster and more accurately
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-blue-200 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Featured Topics */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Browse by Topic
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Contract Review', 'Legal Tech', 'AI & Automation', 'Business Tips', 'Case Studies', 'Industry News'].map((topic) => (
                <Link
                  key={topic}
                  href={`/blog?topic=${topic.toLowerCase().replace(/ /g, '-')}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
                      }
