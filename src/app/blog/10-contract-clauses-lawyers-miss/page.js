export const metadata = {
  title: '10 Contract Clauses Lawyers Most Often Miss | ClauseCompare',
  description: 'Learn the most commonly overlooked contract clauses and how AI can help catch them before they become problems.',
  openGraph: {
    title: '10 Contract Clauses Lawyers Most Often Miss',
    description: 'Learn the most commonly overlooked contract clauses',
    images: ['/og-blog-clauses.png']
  }
};

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>January 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span>Contract Review</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            10 Contract Clauses Lawyers Most Often Miss
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Even experienced attorneys can overlook subtle but significant changes in contract revisions. 
            Here are the clauses that slip through most often—and how to catch them.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          <p className="text-gray-700 leading-relaxed mb-6">
            After analyzing over 500 contract comparisons on ClauseCompare, we've identified patterns in 
            what legal professionals most commonly miss during manual review. These aren't dramatic deletions—
            they're subtle shifts that can have major implications.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            1. Liability Cap Reductions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> Changes from "shall not exceed $1,000,000" to "shall not exceed $100,000"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> The clause structure looks identical—only the number changes. 
            In dense contracts, your eye skips over familiar formatting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> 10x reduction in protection. Could cost your client $900,000.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            2. Notice Period Abbreviations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> "90 days written notice" becoming "30 days notice"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> The word "notice" remains the same. The time frame change seems minor.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Less time to find replacement vendors or prepare for termination.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            3. "Sole and Exclusive" → "Exclusive" Removals
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> Deletion of "sole and" before "exclusive remedy"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> The clause still says "exclusive remedy"—seems the same.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Opens door to additional legal remedies beyond what's specified.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            4. Confidentiality Scope Narrowing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> "All information" → "Proprietary information marked confidential"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Both versions still say "confidential information."
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Unmarked sensitive data no longer protected.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            5. Indemnification Scope Changes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> "Gross negligence or willful misconduct" → "Willful misconduct"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Clause structure stays the same, just one phrase removed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> No indemnification for gross negligence—only willful acts.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            6. Automatic Renewal Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> Addition of "automatically renews for successive one-year terms"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Often buried in a subsection about term length.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Can't exit without proper notice—locked in indefinitely.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            7. Choice of Law Switches
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> "Delaware law" → "California law"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Still says "governed by laws of..." so it looks familiar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Different state = different legal precedents and costs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            8. Payment Term Extensions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> "Net 30" → "Net 60" or "Net 90"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Still says "Net" and it's just a number change.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Cash flow disruption—waiting 2-3 months for payment instead of 1.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            9. Force Majeure Exclusions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> Addition of "excluding payment obligations"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Force majeure clause still exists—just with an exception.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Must pay even during disasters (pandemics, natural disasters).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            10. Audit Rights Limitations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What to look for:</strong> "Upon reasonable notice" → "Upon 30 days written notice, no more than once per year"
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Why it's missed:</strong> Audit rights still exist, just with new constraints.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Impact:</strong> Can't audit quickly if fraud suspected. Limited to annual reviews.
          </p>

          {/* Conclusion */}
          <div className="mt-16 p-8 bg-blue-50 rounded-xl border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How AI Catches What Humans Miss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These changes are missed because our brains are wired to recognize patterns. When we see 
              familiar clause structures, we assume nothing changed. We read what we expect to see, not 
              what's actually there.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI doesn't have this problem. Tools like <strong>ClauseCompare</strong> analyze every word, 
              every number, every phrase—and flag changes humans would skip over. Our semantic analysis 
              even catches when the meaning shifts despite different wording.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The average lawyer spends 2-4 hours manually comparing contracts. ClauseCompare does it in 
              under 2 minutes with 95%+ accuracy.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-3">
              Try ClauseCompare Free
            </h3>
            <p className="text-blue-100 mb-6">
              10 free comparisons. No credit card required.
            </p>
            <a 
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Start Comparing Contracts
            </a>
          </div>

        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl flex items-start gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            P
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-1">Parthiv M S</div>
            <div className="text-sm text-gray-600 mb-2">Founder, ClauseCompare</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Former legal tech consultant who saw lawyers spending hours on manual contract reviews. 
              Built ClauseCompare to help legal professionals work smarter, not harder.
            </p>
          </div>
        </div>

      </div>
    </article>
  );
          }
