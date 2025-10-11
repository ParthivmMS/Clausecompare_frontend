'use client'

import Link from 'next/link'

export default function Dashboard({ reports }) {
  const getRiskColor = (score) => {
    if (score >= 70) return 'text-red-600 bg-red-100'
    if (score >= 40) return 'text-yellow-600 bg-yellow-100'
    return 'text-green-600 bg-green-100'
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-bold text-gray-900">Recent Comparisons</h2>
      </div>

      {reports.length === 0 ? (
        <div className="p-12 text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">No Comparisons Yet</h3>
          <p className="text-gray-600 mb-6">Start by uploading your first contract pair</p>
          <Link 
            href="/contracts"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Comparing
          </Link>
        </div>
      ) : (
        <div className="divide-y">
          {reports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{report.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(report.riskScore)}`}>
                      Risk: {report.riskScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📄 {report.fileA} → {report.fileB}</span>
                    <span>•</span>
                    <span>{report.diffCount} changes</span>
                    <span>•</span>
                    <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                    View Report
                  </button>
                  <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                    Export
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
                      }
